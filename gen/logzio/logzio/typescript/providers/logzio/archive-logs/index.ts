// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArchiveLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#aws_access_key ArchiveLogs#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#aws_credentials_type ArchiveLogs#aws_credentials_type}
  */
  readonly awsCredentialsType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#aws_s3_iam_credentials_arn ArchiveLogs#aws_s3_iam_credentials_arn}
  */
  readonly awsS3IamCredentialsArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#aws_s3_path ArchiveLogs#aws_s3_path}
  */
  readonly awsS3Path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#aws_secret_key ArchiveLogs#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#azure_account_name ArchiveLogs#azure_account_name}
  */
  readonly azureAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#azure_blob_path ArchiveLogs#azure_blob_path}
  */
  readonly azureBlobPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#azure_client_id ArchiveLogs#azure_client_id}
  */
  readonly azureClientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#azure_client_secret ArchiveLogs#azure_client_secret}
  */
  readonly azureClientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#azure_container_name ArchiveLogs#azure_container_name}
  */
  readonly azureContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#azure_tenant_id ArchiveLogs#azure_tenant_id}
  */
  readonly azureTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#compressed ArchiveLogs#compressed}
  */
  readonly compressed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#enabled ArchiveLogs#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#id ArchiveLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#storage_type ArchiveLogs#storage_type}
  */
  readonly storageType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs logzio_archive_logs}
*/
export class ArchiveLogs extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_archive_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArchiveLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArchiveLogs to import
  * @param importFromId The id of the existing ArchiveLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArchiveLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_archive_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/resources/archive_logs logzio_archive_logs} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArchiveLogsConfig
  */
  public constructor(scope: Construct, id: string, config: ArchiveLogsConfig) {
    super(scope, id, {
      terraformResourceType: 'logzio_archive_logs',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0',
        providerVersionConstraint: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsAccessKey = config.awsAccessKey;
    this._awsCredentialsType = config.awsCredentialsType;
    this._awsS3IamCredentialsArn = config.awsS3IamCredentialsArn;
    this._awsS3Path = config.awsS3Path;
    this._awsSecretKey = config.awsSecretKey;
    this._azureAccountName = config.azureAccountName;
    this._azureBlobPath = config.azureBlobPath;
    this._azureClientId = config.azureClientId;
    this._azureClientSecret = config.azureClientSecret;
    this._azureContainerName = config.azureContainerName;
    this._azureTenantId = config.azureTenantId;
    this._compressed = config.compressed;
    this._enabled = config.enabled;
    this._id = config.id;
    this._storageType = config.storageType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_id - computed: true, optional: false, required: false
  public get archiveId() {
    return this.getNumberAttribute('archive_id');
  }

  // aws_access_key - computed: false, optional: true, required: false
  private _awsAccessKey?: string; 
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }
  public set awsAccessKey(value: string) {
    this._awsAccessKey = value;
  }
  public resetAwsAccessKey() {
    this._awsAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyInput() {
    return this._awsAccessKey;
  }

  // aws_credentials_type - computed: false, optional: true, required: false
  private _awsCredentialsType?: string; 
  public get awsCredentialsType() {
    return this.getStringAttribute('aws_credentials_type');
  }
  public set awsCredentialsType(value: string) {
    this._awsCredentialsType = value;
  }
  public resetAwsCredentialsType() {
    this._awsCredentialsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCredentialsTypeInput() {
    return this._awsCredentialsType;
  }

  // aws_s3_iam_credentials_arn - computed: false, optional: true, required: false
  private _awsS3IamCredentialsArn?: string; 
  public get awsS3IamCredentialsArn() {
    return this.getStringAttribute('aws_s3_iam_credentials_arn');
  }
  public set awsS3IamCredentialsArn(value: string) {
    this._awsS3IamCredentialsArn = value;
  }
  public resetAwsS3IamCredentialsArn() {
    this._awsS3IamCredentialsArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3IamCredentialsArnInput() {
    return this._awsS3IamCredentialsArn;
  }

  // aws_s3_path - computed: false, optional: true, required: false
  private _awsS3Path?: string; 
  public get awsS3Path() {
    return this.getStringAttribute('aws_s3_path');
  }
  public set awsS3Path(value: string) {
    this._awsS3Path = value;
  }
  public resetAwsS3Path() {
    this._awsS3Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3PathInput() {
    return this._awsS3Path;
  }

  // aws_secret_key - computed: false, optional: true, required: false
  private _awsSecretKey?: string; 
  public get awsSecretKey() {
    return this.getStringAttribute('aws_secret_key');
  }
  public set awsSecretKey(value: string) {
    this._awsSecretKey = value;
  }
  public resetAwsSecretKey() {
    this._awsSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretKeyInput() {
    return this._awsSecretKey;
  }

  // azure_account_name - computed: false, optional: true, required: false
  private _azureAccountName?: string; 
  public get azureAccountName() {
    return this.getStringAttribute('azure_account_name');
  }
  public set azureAccountName(value: string) {
    this._azureAccountName = value;
  }
  public resetAzureAccountName() {
    this._azureAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAccountNameInput() {
    return this._azureAccountName;
  }

  // azure_blob_path - computed: false, optional: true, required: false
  private _azureBlobPath?: string; 
  public get azureBlobPath() {
    return this.getStringAttribute('azure_blob_path');
  }
  public set azureBlobPath(value: string) {
    this._azureBlobPath = value;
  }
  public resetAzureBlobPath() {
    this._azureBlobPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobPathInput() {
    return this._azureBlobPath;
  }

  // azure_client_id - computed: false, optional: true, required: false
  private _azureClientId?: string; 
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }
  public set azureClientId(value: string) {
    this._azureClientId = value;
  }
  public resetAzureClientId() {
    this._azureClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientIdInput() {
    return this._azureClientId;
  }

  // azure_client_secret - computed: false, optional: true, required: false
  private _azureClientSecret?: string; 
  public get azureClientSecret() {
    return this.getStringAttribute('azure_client_secret');
  }
  public set azureClientSecret(value: string) {
    this._azureClientSecret = value;
  }
  public resetAzureClientSecret() {
    this._azureClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureClientSecretInput() {
    return this._azureClientSecret;
  }

  // azure_container_name - computed: false, optional: true, required: false
  private _azureContainerName?: string; 
  public get azureContainerName() {
    return this.getStringAttribute('azure_container_name');
  }
  public set azureContainerName(value: string) {
    this._azureContainerName = value;
  }
  public resetAzureContainerName() {
    this._azureContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureContainerNameInput() {
    return this._azureContainerName;
  }

  // azure_tenant_id - computed: false, optional: true, required: false
  private _azureTenantId?: string; 
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }
  public set azureTenantId(value: string) {
    this._azureTenantId = value;
  }
  public resetAzureTenantId() {
    this._azureTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureTenantIdInput() {
    return this._azureTenantId;
  }

  // compressed - computed: false, optional: true, required: false
  private _compressed?: boolean | cdktf.IResolvable; 
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }
  public set compressed(value: boolean | cdktf.IResolvable) {
    this._compressed = value;
  }
  public resetCompressed() {
    this._compressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressedInput() {
    return this._compressed;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // storage_type - computed: false, optional: false, required: true
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_credentials_type: cdktf.stringToTerraform(this._awsCredentialsType),
      aws_s3_iam_credentials_arn: cdktf.stringToTerraform(this._awsS3IamCredentialsArn),
      aws_s3_path: cdktf.stringToTerraform(this._awsS3Path),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      azure_account_name: cdktf.stringToTerraform(this._azureAccountName),
      azure_blob_path: cdktf.stringToTerraform(this._azureBlobPath),
      azure_client_id: cdktf.stringToTerraform(this._azureClientId),
      azure_client_secret: cdktf.stringToTerraform(this._azureClientSecret),
      azure_container_name: cdktf.stringToTerraform(this._azureContainerName),
      azure_tenant_id: cdktf.stringToTerraform(this._azureTenantId),
      compressed: cdktf.booleanToTerraform(this._compressed),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      storage_type: cdktf.stringToTerraform(this._storageType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key: {
        value: cdktf.stringToHclTerraform(this._awsAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_credentials_type: {
        value: cdktf.stringToHclTerraform(this._awsCredentialsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_s3_iam_credentials_arn: {
        value: cdktf.stringToHclTerraform(this._awsS3IamCredentialsArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_s3_path: {
        value: cdktf.stringToHclTerraform(this._awsS3Path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_account_name: {
        value: cdktf.stringToHclTerraform(this._azureAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_blob_path: {
        value: cdktf.stringToHclTerraform(this._azureBlobPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_id: {
        value: cdktf.stringToHclTerraform(this._azureClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_client_secret: {
        value: cdktf.stringToHclTerraform(this._azureClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_container_name: {
        value: cdktf.stringToHclTerraform(this._azureContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compressed: {
        value: cdktf.booleanToHclTerraform(this._compressed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
