// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayRemoteAccessRdpRecordingConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS access key id. For more information refer to https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#aws_storage_access_key_id GatewayRemoteAccessRdpRecording#aws_storage_access_key_id}
  */
  readonly awsStorageAccessKeyId?: string;
  /**
  * The AWS bucket name. For more information refer to https://docs.aws.amazon.com/s3/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#aws_storage_bucket_name GatewayRemoteAccessRdpRecording#aws_storage_bucket_name}
  */
  readonly awsStorageBucketName?: string;
  /**
  * The folder name in S3 bucket. For more information refer to https://docs.aws.amazon.com/s3/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#aws_storage_bucket_prefix GatewayRemoteAccessRdpRecording#aws_storage_bucket_prefix}
  */
  readonly awsStorageBucketPrefix?: string;
  /**
  * The region where the storage is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#aws_storage_region GatewayRemoteAccessRdpRecording#aws_storage_region}
  */
  readonly awsStorageRegion?: string;
  /**
  * AWS secret access key. For more information refer to https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#aws_storage_secret_access_key GatewayRemoteAccessRdpRecording#aws_storage_secret_access_key}
  */
  readonly awsStorageSecretAccessKey?: string;
  /**
  * Azure account name. For more information refer to https://learn.microsoft.com/en-us/azure/storage/common/storage-account-overview
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#azure_storage_account_name GatewayRemoteAccessRdpRecording#azure_storage_account_name}
  */
  readonly azureStorageAccountName?: string;
  /**
  * Azure client id. For more information refer to https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#azure_storage_client_id GatewayRemoteAccessRdpRecording#azure_storage_client_id}
  */
  readonly azureStorageClientId?: string;
  /**
  * Azure client secret. For more information refer to https://learn.microsoft.com/en-us/azure/storage/common/storage-account-get-info?tabs=portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#azure_storage_client_secret GatewayRemoteAccessRdpRecording#azure_storage_client_secret}
  */
  readonly azureStorageClientSecret?: string;
  /**
  * Azure container name. For more information refer to https://learn.microsoft.com/en-us/rest/api/storageservices/naming-and-referencing-containers--blobs--and-metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#azure_storage_container_name GatewayRemoteAccessRdpRecording#azure_storage_container_name}
  */
  readonly azureStorageContainerName?: string;
  /**
  * Azure tenant id. For more information refer to https://learn.microsoft.com/en-us/entra/fundamentals/how-to-find-tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#azure_storage_tenant_id GatewayRemoteAccessRdpRecording#azure_storage_tenant_id}
  */
  readonly azureStorageTenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#id GatewayRemoteAccessRdpRecording#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable recording of rdp session [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#rdp_session_recording GatewayRemoteAccessRdpRecording#rdp_session_recording}
  */
  readonly rdpSessionRecording?: string;
  /**
  * Rdp session recording storage destination [local/aws/azure]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#rdp_session_storage GatewayRemoteAccessRdpRecording#rdp_session_storage}
  */
  readonly rdpSessionStorage?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording akeyless_gateway_remote_access_rdp_recording}
*/
export class GatewayRemoteAccessRdpRecording extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_remote_access_rdp_recording";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayRemoteAccessRdpRecording resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayRemoteAccessRdpRecording to import
  * @param importFromId The id of the existing GatewayRemoteAccessRdpRecording that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayRemoteAccessRdpRecording to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_remote_access_rdp_recording", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_remote_access_rdp_recording akeyless_gateway_remote_access_rdp_recording} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayRemoteAccessRdpRecordingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayRemoteAccessRdpRecordingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_remote_access_rdp_recording',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsStorageAccessKeyId = config.awsStorageAccessKeyId;
    this._awsStorageBucketName = config.awsStorageBucketName;
    this._awsStorageBucketPrefix = config.awsStorageBucketPrefix;
    this._awsStorageRegion = config.awsStorageRegion;
    this._awsStorageSecretAccessKey = config.awsStorageSecretAccessKey;
    this._azureStorageAccountName = config.azureStorageAccountName;
    this._azureStorageClientId = config.azureStorageClientId;
    this._azureStorageClientSecret = config.azureStorageClientSecret;
    this._azureStorageContainerName = config.azureStorageContainerName;
    this._azureStorageTenantId = config.azureStorageTenantId;
    this._id = config.id;
    this._rdpSessionRecording = config.rdpSessionRecording;
    this._rdpSessionStorage = config.rdpSessionStorage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_storage_access_key_id - computed: false, optional: true, required: false
  private _awsStorageAccessKeyId?: string; 
  public get awsStorageAccessKeyId() {
    return this.getStringAttribute('aws_storage_access_key_id');
  }
  public set awsStorageAccessKeyId(value: string) {
    this._awsStorageAccessKeyId = value;
  }
  public resetAwsStorageAccessKeyId() {
    this._awsStorageAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStorageAccessKeyIdInput() {
    return this._awsStorageAccessKeyId;
  }

  // aws_storage_bucket_name - computed: false, optional: true, required: false
  private _awsStorageBucketName?: string; 
  public get awsStorageBucketName() {
    return this.getStringAttribute('aws_storage_bucket_name');
  }
  public set awsStorageBucketName(value: string) {
    this._awsStorageBucketName = value;
  }
  public resetAwsStorageBucketName() {
    this._awsStorageBucketName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStorageBucketNameInput() {
    return this._awsStorageBucketName;
  }

  // aws_storage_bucket_prefix - computed: false, optional: true, required: false
  private _awsStorageBucketPrefix?: string; 
  public get awsStorageBucketPrefix() {
    return this.getStringAttribute('aws_storage_bucket_prefix');
  }
  public set awsStorageBucketPrefix(value: string) {
    this._awsStorageBucketPrefix = value;
  }
  public resetAwsStorageBucketPrefix() {
    this._awsStorageBucketPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStorageBucketPrefixInput() {
    return this._awsStorageBucketPrefix;
  }

  // aws_storage_region - computed: false, optional: true, required: false
  private _awsStorageRegion?: string; 
  public get awsStorageRegion() {
    return this.getStringAttribute('aws_storage_region');
  }
  public set awsStorageRegion(value: string) {
    this._awsStorageRegion = value;
  }
  public resetAwsStorageRegion() {
    this._awsStorageRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStorageRegionInput() {
    return this._awsStorageRegion;
  }

  // aws_storage_secret_access_key - computed: false, optional: true, required: false
  private _awsStorageSecretAccessKey?: string; 
  public get awsStorageSecretAccessKey() {
    return this.getStringAttribute('aws_storage_secret_access_key');
  }
  public set awsStorageSecretAccessKey(value: string) {
    this._awsStorageSecretAccessKey = value;
  }
  public resetAwsStorageSecretAccessKey() {
    this._awsStorageSecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStorageSecretAccessKeyInput() {
    return this._awsStorageSecretAccessKey;
  }

  // azure_storage_account_name - computed: false, optional: true, required: false
  private _azureStorageAccountName?: string; 
  public get azureStorageAccountName() {
    return this.getStringAttribute('azure_storage_account_name');
  }
  public set azureStorageAccountName(value: string) {
    this._azureStorageAccountName = value;
  }
  public resetAzureStorageAccountName() {
    this._azureStorageAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccountNameInput() {
    return this._azureStorageAccountName;
  }

  // azure_storage_client_id - computed: false, optional: true, required: false
  private _azureStorageClientId?: string; 
  public get azureStorageClientId() {
    return this.getStringAttribute('azure_storage_client_id');
  }
  public set azureStorageClientId(value: string) {
    this._azureStorageClientId = value;
  }
  public resetAzureStorageClientId() {
    this._azureStorageClientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageClientIdInput() {
    return this._azureStorageClientId;
  }

  // azure_storage_client_secret - computed: false, optional: true, required: false
  private _azureStorageClientSecret?: string; 
  public get azureStorageClientSecret() {
    return this.getStringAttribute('azure_storage_client_secret');
  }
  public set azureStorageClientSecret(value: string) {
    this._azureStorageClientSecret = value;
  }
  public resetAzureStorageClientSecret() {
    this._azureStorageClientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageClientSecretInput() {
    return this._azureStorageClientSecret;
  }

  // azure_storage_container_name - computed: false, optional: true, required: false
  private _azureStorageContainerName?: string; 
  public get azureStorageContainerName() {
    return this.getStringAttribute('azure_storage_container_name');
  }
  public set azureStorageContainerName(value: string) {
    this._azureStorageContainerName = value;
  }
  public resetAzureStorageContainerName() {
    this._azureStorageContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageContainerNameInput() {
    return this._azureStorageContainerName;
  }

  // azure_storage_tenant_id - computed: false, optional: true, required: false
  private _azureStorageTenantId?: string; 
  public get azureStorageTenantId() {
    return this.getStringAttribute('azure_storage_tenant_id');
  }
  public set azureStorageTenantId(value: string) {
    this._azureStorageTenantId = value;
  }
  public resetAzureStorageTenantId() {
    this._azureStorageTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageTenantIdInput() {
    return this._azureStorageTenantId;
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

  // rdp_session_recording - computed: false, optional: true, required: false
  private _rdpSessionRecording?: string; 
  public get rdpSessionRecording() {
    return this.getStringAttribute('rdp_session_recording');
  }
  public set rdpSessionRecording(value: string) {
    this._rdpSessionRecording = value;
  }
  public resetRdpSessionRecording() {
    this._rdpSessionRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpSessionRecordingInput() {
    return this._rdpSessionRecording;
  }

  // rdp_session_storage - computed: false, optional: true, required: false
  private _rdpSessionStorage?: string; 
  public get rdpSessionStorage() {
    return this.getStringAttribute('rdp_session_storage');
  }
  public set rdpSessionStorage(value: string) {
    this._rdpSessionStorage = value;
  }
  public resetRdpSessionStorage() {
    this._rdpSessionStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdpSessionStorageInput() {
    return this._rdpSessionStorage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_storage_access_key_id: cdktf.stringToTerraform(this._awsStorageAccessKeyId),
      aws_storage_bucket_name: cdktf.stringToTerraform(this._awsStorageBucketName),
      aws_storage_bucket_prefix: cdktf.stringToTerraform(this._awsStorageBucketPrefix),
      aws_storage_region: cdktf.stringToTerraform(this._awsStorageRegion),
      aws_storage_secret_access_key: cdktf.stringToTerraform(this._awsStorageSecretAccessKey),
      azure_storage_account_name: cdktf.stringToTerraform(this._azureStorageAccountName),
      azure_storage_client_id: cdktf.stringToTerraform(this._azureStorageClientId),
      azure_storage_client_secret: cdktf.stringToTerraform(this._azureStorageClientSecret),
      azure_storage_container_name: cdktf.stringToTerraform(this._azureStorageContainerName),
      azure_storage_tenant_id: cdktf.stringToTerraform(this._azureStorageTenantId),
      id: cdktf.stringToTerraform(this._id),
      rdp_session_recording: cdktf.stringToTerraform(this._rdpSessionRecording),
      rdp_session_storage: cdktf.stringToTerraform(this._rdpSessionStorage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_storage_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsStorageAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_storage_bucket_name: {
        value: cdktf.stringToHclTerraform(this._awsStorageBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_storage_bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._awsStorageBucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_storage_region: {
        value: cdktf.stringToHclTerraform(this._awsStorageRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_storage_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._awsStorageSecretAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_account_name: {
        value: cdktf.stringToHclTerraform(this._azureStorageAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_client_id: {
        value: cdktf.stringToHclTerraform(this._azureStorageClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_client_secret: {
        value: cdktf.stringToHclTerraform(this._azureStorageClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_container_name: {
        value: cdktf.stringToHclTerraform(this._azureStorageContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_tenant_id: {
        value: cdktf.stringToHclTerraform(this._azureStorageTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_session_recording: {
        value: cdktf.stringToHclTerraform(this._rdpSessionRecording),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rdp_session_storage: {
        value: cdktf.stringToHclTerraform(this._rdpSessionStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
