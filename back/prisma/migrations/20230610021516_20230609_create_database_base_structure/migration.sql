BEGIN TRY

BEGIN TRAN;

-- CreateTable
CREATE TABLE [dbo].[entities] (
    [id] NVARCHAR(1000) NOT NULL,
    [label] NVARCHAR(1000) NOT NULL,
    CONSTRAINT [entities_pkey] PRIMARY KEY CLUSTERED ([id])
);

-- CreateTable
CREATE TABLE [dbo].[telemetries] (
    [entityId] NVARCHAR(1000) NOT NULL,
    [field] NVARCHAR(1000) NOT NULL,
    [data] NVARCHAR(1000) NOT NULL,
    [timestamp] DATETIME2 NOT NULL CONSTRAINT [telemetries_timestamp_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [telemetries_entityId_field_timestamp_key] UNIQUE NONCLUSTERED ([entityId],[field],[timestamp])
);

-- AddForeignKey
ALTER TABLE [dbo].[telemetries] ADD CONSTRAINT [telemetries_entityId_fkey] FOREIGN KEY ([entityId]) REFERENCES [dbo].[entities]([id]) ON DELETE NO ACTION ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
