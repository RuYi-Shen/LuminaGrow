#include <OneWire.h>
#include <DallasTemperature.h>

#define DS18B20_OneWire 23
#define LIGHT_SENSOR_PIN 39


double setpoint = 4000.0;

double input, output, error, lastError, integral;

double Kp = 0.00000001;  
double Ki = 0.003;       
double Kd = 0.001;    


OneWire oneWire(DS18B20_OneWire);

DallasTemperature sensortemp(&oneWire);
DeviceAddress endereco_temp;

int ndispositivos = 0;
int analogValue;
int humidityValue;
float grausC;
int count = 0;
float sum = 0;

int sensorPin = 34;

const int ledPin = 22;
const int freq = 5000;
const int ledChannel = 0;
const int resolution = 8;


void setup() {
  sensortemp.begin();
  sensortemp.setResolution(9);
  Serial.begin(9600);


  ledcSetup(ledChannel, freq, resolution);

  ledcAttachPin(ledPin, ledChannel);
}

void loop() {

  for (int j = 0; j <= 100; j++) {

    for (int i = 0; i <= 20; i++) {

      analogValue = analogRead(LIGHT_SENSOR_PIN);

      float a = map(analogValue, 0, 4095, 50, 3250);
      float b = (33000000 - 10000 * a) / a;
      float c = 2400000 * pow(b, -1.15) - 30;

      if (c <= 0) {
        c = 0;
      }

      sum = sum + c;

      delay(10);
    }
    sum = sum / 20;

    Serial.print("lux = ");
    Serial.println(sum);

    error = setpoint - sum;

    double proportional = Kp * error;

    integral += Ki * error;

    double derivative = Kd * (error - lastError);

    output = proportional + integral + derivative;

    output = constrain(output, 0, 255);

    lastError = error;

    ledcWrite(ledChannel, output);

    humidityValue = map(analogRead(sensorPin), 0, 4095, 100, 0);

    Serial.print("humidity = ");
    Serial.println(humidityValue);
  }

  /**********************************************************/

  sensortemp.requestTemperatures();

  if (sensortemp.getAddress(endereco_temp, 0)) {
    grausC = sensortemp.getTempC(endereco_temp);
    Serial.print("temperature = ");
    Serial.println(grausC);
  }

  /**********************************************************/

  for (int i = 0; i <= 10; i++) {

    analogValue = analogRead(LIGHT_SENSOR_PIN);

    float a = map(analogValue, 0, 4095, 50, 3250);
    float b = (33000000 - 10000 * a) / a;
    float c = 2400000 * pow(b, -1.15) - 30;

    if (c <= 0) {
      c = 0;
    }

    sum = sum + c;

    delay(10);
  }
  sum = sum / 10;

  Serial.print("lux = ");
  Serial.println(sum);

  error = setpoint - sum;

  double proportional = Kp * error;

  integral += Ki * error;

  double derivative = Kd * (error - lastError);

  output = proportional + integral + derivative;

  output = constrain(output, 0, 255);

  lastError = error;

  ledcWrite(ledChannel, output);

  humidityValue = map(analogRead(sensorPin), 0, 4095, 100, 0);

  Serial.print("humidity = ");
  Serial.println(humidityValue);
}