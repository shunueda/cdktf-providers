// https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteServerCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#aws_access_key RemoteServerCredential#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * AWS: secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#aws_secret_key RemoteServerCredential#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * Azure Blob Storage: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#azure_blob_storage_access_key RemoteServerCredential#azure_blob_storage_access_key}
  */
  readonly azureBlobStorageAccessKey?: string;
  /**
  * Azure Blob Storage: Account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#azure_blob_storage_account RemoteServerCredential#azure_blob_storage_account}
  */
  readonly azureBlobStorageAccount?: string;
  /**
  * Azure Blob Storage: Shared Access Signature (SAS) token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#azure_blob_storage_sas_token RemoteServerCredential#azure_blob_storage_sas_token}
  */
  readonly azureBlobStorageSasToken?: string;
  /**
  * Azure File Storage: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#azure_files_storage_access_key RemoteServerCredential#azure_files_storage_access_key}
  */
  readonly azureFilesStorageAccessKey?: string;
  /**
  * Azure Files: Storage Account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#azure_files_storage_account RemoteServerCredential#azure_files_storage_account}
  */
  readonly azureFilesStorageAccount?: string;
  /**
  * Azure File Storage: Shared Access Signature (SAS) token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#azure_files_storage_sas_token RemoteServerCredential#azure_files_storage_sas_token}
  */
  readonly azureFilesStorageSasToken?: string;
  /**
  * Backblaze B2 Cloud Storage: applicationKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#backblaze_b2_application_key RemoteServerCredential#backblaze_b2_application_key}
  */
  readonly backblazeB2ApplicationKey?: string;
  /**
  * Backblaze B2 Cloud Storage: keyID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#backblaze_b2_key_id RemoteServerCredential#backblaze_b2_key_id}
  */
  readonly backblazeB2KeyId?: string;
  /**
  * Cloudflare: Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#cloudflare_access_key RemoteServerCredential#cloudflare_access_key}
  */
  readonly cloudflareAccessKey?: string;
  /**
  * Cloudflare: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#cloudflare_secret_key RemoteServerCredential#cloudflare_secret_key}
  */
  readonly cloudflareSecretKey?: string;
  /**
  * Internal description for your reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#description RemoteServerCredential#description}
  */
  readonly description?: string;
  /**
  * Filebase: Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#filebase_access_key RemoteServerCredential#filebase_access_key}
  */
  readonly filebaseAccessKey?: string;
  /**
  * Filebase: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#filebase_secret_key RemoteServerCredential#filebase_secret_key}
  */
  readonly filebaseSecretKey?: string;
  /**
  * Google Cloud Storage: JSON file that contains the private key. To generate see https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing#APIKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#google_cloud_storage_credentials_json RemoteServerCredential#google_cloud_storage_credentials_json}
  */
  readonly googleCloudStorageCredentialsJson?: string;
  /**
  * Google Cloud Storage: S3-compatible Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#google_cloud_storage_s3_compatible_access_key RemoteServerCredential#google_cloud_storage_s3_compatible_access_key}
  */
  readonly googleCloudStorageS3CompatibleAccessKey?: string;
  /**
  * Google Cloud Storage: S3-compatible secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#google_cloud_storage_s3_compatible_secret_key RemoteServerCredential#google_cloud_storage_s3_compatible_secret_key}
  */
  readonly googleCloudStorageS3CompatibleSecretKey?: string;
  /**
  * Linode: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#linode_access_key RemoteServerCredential#linode_access_key}
  */
  readonly linodeAccessKey?: string;
  /**
  * Linode: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#linode_secret_key RemoteServerCredential#linode_secret_key}
  */
  readonly linodeSecretKey?: string;
  /**
  * Internal name for your reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#name RemoteServerCredential#name}
  */
  readonly name?: string;
  /**
  * Password, if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#password RemoteServerCredential#password}
  */
  readonly password?: string;
  /**
  * Private key, if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#private_key RemoteServerCredential#private_key}
  */
  readonly privateKey?: string;
  /**
  * Passphrase for private key if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#private_key_passphrase RemoteServerCredential#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * S3-compatible: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#s3_compatible_access_key RemoteServerCredential#s3_compatible_access_key}
  */
  readonly s3CompatibleAccessKey?: string;
  /**
  * S3-compatible: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#s3_compatible_secret_key RemoteServerCredential#s3_compatible_secret_key}
  */
  readonly s3CompatibleSecretKey?: string;
  /**
  * Remote server type.  Remote Server Credentials are only valid for a single type of Remote Server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#server_type RemoteServerCredential#server_type}
  */
  readonly serverType?: string;
  /**
  * Remote server username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#username RemoteServerCredential#username}
  */
  readonly username?: string;
  /**
  * Wasabi: Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#wasabi_access_key RemoteServerCredential#wasabi_access_key}
  */
  readonly wasabiAccessKey?: string;
  /**
  * Wasabi: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#wasabi_secret_key RemoteServerCredential#wasabi_secret_key}
  */
  readonly wasabiSecretKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential files_remote_server_credential}
*/
export class RemoteServerCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_remote_server_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteServerCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteServerCredential to import
  * @param importFromId The id of the existing RemoteServerCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteServerCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_remote_server_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/resources/remote_server_credential files_remote_server_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteServerCredentialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RemoteServerCredentialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_remote_server_credential',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.417',
        providerVersionConstraint: '0.1.417'
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
    this._awsSecretKey = config.awsSecretKey;
    this._azureBlobStorageAccessKey = config.azureBlobStorageAccessKey;
    this._azureBlobStorageAccount = config.azureBlobStorageAccount;
    this._azureBlobStorageSasToken = config.azureBlobStorageSasToken;
    this._azureFilesStorageAccessKey = config.azureFilesStorageAccessKey;
    this._azureFilesStorageAccount = config.azureFilesStorageAccount;
    this._azureFilesStorageSasToken = config.azureFilesStorageSasToken;
    this._backblazeB2ApplicationKey = config.backblazeB2ApplicationKey;
    this._backblazeB2KeyId = config.backblazeB2KeyId;
    this._cloudflareAccessKey = config.cloudflareAccessKey;
    this._cloudflareSecretKey = config.cloudflareSecretKey;
    this._description = config.description;
    this._filebaseAccessKey = config.filebaseAccessKey;
    this._filebaseSecretKey = config.filebaseSecretKey;
    this._googleCloudStorageCredentialsJson = config.googleCloudStorageCredentialsJson;
    this._googleCloudStorageS3CompatibleAccessKey = config.googleCloudStorageS3CompatibleAccessKey;
    this._googleCloudStorageS3CompatibleSecretKey = config.googleCloudStorageS3CompatibleSecretKey;
    this._linodeAccessKey = config.linodeAccessKey;
    this._linodeSecretKey = config.linodeSecretKey;
    this._name = config.name;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._s3CompatibleAccessKey = config.s3CompatibleAccessKey;
    this._s3CompatibleSecretKey = config.s3CompatibleSecretKey;
    this._serverType = config.serverType;
    this._username = config.username;
    this._wasabiAccessKey = config.wasabiAccessKey;
    this._wasabiSecretKey = config.wasabiSecretKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key - computed: true, optional: true, required: false
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

  // azure_blob_storage_access_key - computed: false, optional: true, required: false
  private _azureBlobStorageAccessKey?: string; 
  public get azureBlobStorageAccessKey() {
    return this.getStringAttribute('azure_blob_storage_access_key');
  }
  public set azureBlobStorageAccessKey(value: string) {
    this._azureBlobStorageAccessKey = value;
  }
  public resetAzureBlobStorageAccessKey() {
    this._azureBlobStorageAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageAccessKeyInput() {
    return this._azureBlobStorageAccessKey;
  }

  // azure_blob_storage_account - computed: true, optional: true, required: false
  private _azureBlobStorageAccount?: string; 
  public get azureBlobStorageAccount() {
    return this.getStringAttribute('azure_blob_storage_account');
  }
  public set azureBlobStorageAccount(value: string) {
    this._azureBlobStorageAccount = value;
  }
  public resetAzureBlobStorageAccount() {
    this._azureBlobStorageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageAccountInput() {
    return this._azureBlobStorageAccount;
  }

  // azure_blob_storage_sas_token - computed: false, optional: true, required: false
  private _azureBlobStorageSasToken?: string; 
  public get azureBlobStorageSasToken() {
    return this.getStringAttribute('azure_blob_storage_sas_token');
  }
  public set azureBlobStorageSasToken(value: string) {
    this._azureBlobStorageSasToken = value;
  }
  public resetAzureBlobStorageSasToken() {
    this._azureBlobStorageSasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageSasTokenInput() {
    return this._azureBlobStorageSasToken;
  }

  // azure_files_storage_access_key - computed: false, optional: true, required: false
  private _azureFilesStorageAccessKey?: string; 
  public get azureFilesStorageAccessKey() {
    return this.getStringAttribute('azure_files_storage_access_key');
  }
  public set azureFilesStorageAccessKey(value: string) {
    this._azureFilesStorageAccessKey = value;
  }
  public resetAzureFilesStorageAccessKey() {
    this._azureFilesStorageAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesStorageAccessKeyInput() {
    return this._azureFilesStorageAccessKey;
  }

  // azure_files_storage_account - computed: true, optional: true, required: false
  private _azureFilesStorageAccount?: string; 
  public get azureFilesStorageAccount() {
    return this.getStringAttribute('azure_files_storage_account');
  }
  public set azureFilesStorageAccount(value: string) {
    this._azureFilesStorageAccount = value;
  }
  public resetAzureFilesStorageAccount() {
    this._azureFilesStorageAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesStorageAccountInput() {
    return this._azureFilesStorageAccount;
  }

  // azure_files_storage_sas_token - computed: false, optional: true, required: false
  private _azureFilesStorageSasToken?: string; 
  public get azureFilesStorageSasToken() {
    return this.getStringAttribute('azure_files_storage_sas_token');
  }
  public set azureFilesStorageSasToken(value: string) {
    this._azureFilesStorageSasToken = value;
  }
  public resetAzureFilesStorageSasToken() {
    this._azureFilesStorageSasToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesStorageSasTokenInput() {
    return this._azureFilesStorageSasToken;
  }

  // backblaze_b2_application_key - computed: false, optional: true, required: false
  private _backblazeB2ApplicationKey?: string; 
  public get backblazeB2ApplicationKey() {
    return this.getStringAttribute('backblaze_b2_application_key');
  }
  public set backblazeB2ApplicationKey(value: string) {
    this._backblazeB2ApplicationKey = value;
  }
  public resetBackblazeB2ApplicationKey() {
    this._backblazeB2ApplicationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backblazeB2ApplicationKeyInput() {
    return this._backblazeB2ApplicationKey;
  }

  // backblaze_b2_key_id - computed: false, optional: true, required: false
  private _backblazeB2KeyId?: string; 
  public get backblazeB2KeyId() {
    return this.getStringAttribute('backblaze_b2_key_id');
  }
  public set backblazeB2KeyId(value: string) {
    this._backblazeB2KeyId = value;
  }
  public resetBackblazeB2KeyId() {
    this._backblazeB2KeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backblazeB2KeyIdInput() {
    return this._backblazeB2KeyId;
  }

  // cloudflare_access_key - computed: true, optional: true, required: false
  private _cloudflareAccessKey?: string; 
  public get cloudflareAccessKey() {
    return this.getStringAttribute('cloudflare_access_key');
  }
  public set cloudflareAccessKey(value: string) {
    this._cloudflareAccessKey = value;
  }
  public resetCloudflareAccessKey() {
    this._cloudflareAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareAccessKeyInput() {
    return this._cloudflareAccessKey;
  }

  // cloudflare_secret_key - computed: false, optional: true, required: false
  private _cloudflareSecretKey?: string; 
  public get cloudflareSecretKey() {
    return this.getStringAttribute('cloudflare_secret_key');
  }
  public set cloudflareSecretKey(value: string) {
    this._cloudflareSecretKey = value;
  }
  public resetCloudflareSecretKey() {
    this._cloudflareSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareSecretKeyInput() {
    return this._cloudflareSecretKey;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // filebase_access_key - computed: true, optional: true, required: false
  private _filebaseAccessKey?: string; 
  public get filebaseAccessKey() {
    return this.getStringAttribute('filebase_access_key');
  }
  public set filebaseAccessKey(value: string) {
    this._filebaseAccessKey = value;
  }
  public resetFilebaseAccessKey() {
    this._filebaseAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filebaseAccessKeyInput() {
    return this._filebaseAccessKey;
  }

  // filebase_secret_key - computed: false, optional: true, required: false
  private _filebaseSecretKey?: string; 
  public get filebaseSecretKey() {
    return this.getStringAttribute('filebase_secret_key');
  }
  public set filebaseSecretKey(value: string) {
    this._filebaseSecretKey = value;
  }
  public resetFilebaseSecretKey() {
    this._filebaseSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filebaseSecretKeyInput() {
    return this._filebaseSecretKey;
  }

  // google_cloud_storage_credentials_json - computed: false, optional: true, required: false
  private _googleCloudStorageCredentialsJson?: string; 
  public get googleCloudStorageCredentialsJson() {
    return this.getStringAttribute('google_cloud_storage_credentials_json');
  }
  public set googleCloudStorageCredentialsJson(value: string) {
    this._googleCloudStorageCredentialsJson = value;
  }
  public resetGoogleCloudStorageCredentialsJson() {
    this._googleCloudStorageCredentialsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageCredentialsJsonInput() {
    return this._googleCloudStorageCredentialsJson;
  }

  // google_cloud_storage_s3_compatible_access_key - computed: true, optional: true, required: false
  private _googleCloudStorageS3CompatibleAccessKey?: string; 
  public get googleCloudStorageS3CompatibleAccessKey() {
    return this.getStringAttribute('google_cloud_storage_s3_compatible_access_key');
  }
  public set googleCloudStorageS3CompatibleAccessKey(value: string) {
    this._googleCloudStorageS3CompatibleAccessKey = value;
  }
  public resetGoogleCloudStorageS3CompatibleAccessKey() {
    this._googleCloudStorageS3CompatibleAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageS3CompatibleAccessKeyInput() {
    return this._googleCloudStorageS3CompatibleAccessKey;
  }

  // google_cloud_storage_s3_compatible_secret_key - computed: false, optional: true, required: false
  private _googleCloudStorageS3CompatibleSecretKey?: string; 
  public get googleCloudStorageS3CompatibleSecretKey() {
    return this.getStringAttribute('google_cloud_storage_s3_compatible_secret_key');
  }
  public set googleCloudStorageS3CompatibleSecretKey(value: string) {
    this._googleCloudStorageS3CompatibleSecretKey = value;
  }
  public resetGoogleCloudStorageS3CompatibleSecretKey() {
    this._googleCloudStorageS3CompatibleSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageS3CompatibleSecretKeyInput() {
    return this._googleCloudStorageS3CompatibleSecretKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // linode_access_key - computed: true, optional: true, required: false
  private _linodeAccessKey?: string; 
  public get linodeAccessKey() {
    return this.getStringAttribute('linode_access_key');
  }
  public set linodeAccessKey(value: string) {
    this._linodeAccessKey = value;
  }
  public resetLinodeAccessKey() {
    this._linodeAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeAccessKeyInput() {
    return this._linodeAccessKey;
  }

  // linode_secret_key - computed: false, optional: true, required: false
  private _linodeSecretKey?: string; 
  public get linodeSecretKey() {
    return this.getStringAttribute('linode_secret_key');
  }
  public set linodeSecretKey(value: string) {
    this._linodeSecretKey = value;
  }
  public resetLinodeSecretKey() {
    this._linodeSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeSecretKeyInput() {
    return this._linodeSecretKey;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: false, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
  }

  // s3_compatible_access_key - computed: true, optional: true, required: false
  private _s3CompatibleAccessKey?: string; 
  public get s3CompatibleAccessKey() {
    return this.getStringAttribute('s3_compatible_access_key');
  }
  public set s3CompatibleAccessKey(value: string) {
    this._s3CompatibleAccessKey = value;
  }
  public resetS3CompatibleAccessKey() {
    this._s3CompatibleAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompatibleAccessKeyInput() {
    return this._s3CompatibleAccessKey;
  }

  // s3_compatible_secret_key - computed: false, optional: true, required: false
  private _s3CompatibleSecretKey?: string; 
  public get s3CompatibleSecretKey() {
    return this.getStringAttribute('s3_compatible_secret_key');
  }
  public set s3CompatibleSecretKey(value: string) {
    this._s3CompatibleSecretKey = value;
  }
  public resetS3CompatibleSecretKey() {
    this._s3CompatibleSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompatibleSecretKeyInput() {
    return this._s3CompatibleSecretKey;
  }

  // server_type - computed: true, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // wasabi_access_key - computed: true, optional: true, required: false
  private _wasabiAccessKey?: string; 
  public get wasabiAccessKey() {
    return this.getStringAttribute('wasabi_access_key');
  }
  public set wasabiAccessKey(value: string) {
    this._wasabiAccessKey = value;
  }
  public resetWasabiAccessKey() {
    this._wasabiAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasabiAccessKeyInput() {
    return this._wasabiAccessKey;
  }

  // wasabi_secret_key - computed: false, optional: true, required: false
  private _wasabiSecretKey?: string; 
  public get wasabiSecretKey() {
    return this.getStringAttribute('wasabi_secret_key');
  }
  public set wasabiSecretKey(value: string) {
    this._wasabiSecretKey = value;
  }
  public resetWasabiSecretKey() {
    this._wasabiSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasabiSecretKeyInput() {
    return this._wasabiSecretKey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key: cdktf.stringToTerraform(this._awsAccessKey),
      aws_secret_key: cdktf.stringToTerraform(this._awsSecretKey),
      azure_blob_storage_access_key: cdktf.stringToTerraform(this._azureBlobStorageAccessKey),
      azure_blob_storage_account: cdktf.stringToTerraform(this._azureBlobStorageAccount),
      azure_blob_storage_sas_token: cdktf.stringToTerraform(this._azureBlobStorageSasToken),
      azure_files_storage_access_key: cdktf.stringToTerraform(this._azureFilesStorageAccessKey),
      azure_files_storage_account: cdktf.stringToTerraform(this._azureFilesStorageAccount),
      azure_files_storage_sas_token: cdktf.stringToTerraform(this._azureFilesStorageSasToken),
      backblaze_b2_application_key: cdktf.stringToTerraform(this._backblazeB2ApplicationKey),
      backblaze_b2_key_id: cdktf.stringToTerraform(this._backblazeB2KeyId),
      cloudflare_access_key: cdktf.stringToTerraform(this._cloudflareAccessKey),
      cloudflare_secret_key: cdktf.stringToTerraform(this._cloudflareSecretKey),
      description: cdktf.stringToTerraform(this._description),
      filebase_access_key: cdktf.stringToTerraform(this._filebaseAccessKey),
      filebase_secret_key: cdktf.stringToTerraform(this._filebaseSecretKey),
      google_cloud_storage_credentials_json: cdktf.stringToTerraform(this._googleCloudStorageCredentialsJson),
      google_cloud_storage_s3_compatible_access_key: cdktf.stringToTerraform(this._googleCloudStorageS3CompatibleAccessKey),
      google_cloud_storage_s3_compatible_secret_key: cdktf.stringToTerraform(this._googleCloudStorageS3CompatibleSecretKey),
      linode_access_key: cdktf.stringToTerraform(this._linodeAccessKey),
      linode_secret_key: cdktf.stringToTerraform(this._linodeSecretKey),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      s3_compatible_access_key: cdktf.stringToTerraform(this._s3CompatibleAccessKey),
      s3_compatible_secret_key: cdktf.stringToTerraform(this._s3CompatibleSecretKey),
      server_type: cdktf.stringToTerraform(this._serverType),
      username: cdktf.stringToTerraform(this._username),
      wasabi_access_key: cdktf.stringToTerraform(this._wasabiAccessKey),
      wasabi_secret_key: cdktf.stringToTerraform(this._wasabiSecretKey),
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
      aws_secret_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_blob_storage_access_key: {
        value: cdktf.stringToHclTerraform(this._azureBlobStorageAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_blob_storage_account: {
        value: cdktf.stringToHclTerraform(this._azureBlobStorageAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_blob_storage_sas_token: {
        value: cdktf.stringToHclTerraform(this._azureBlobStorageSasToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_files_storage_access_key: {
        value: cdktf.stringToHclTerraform(this._azureFilesStorageAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_files_storage_account: {
        value: cdktf.stringToHclTerraform(this._azureFilesStorageAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_files_storage_sas_token: {
        value: cdktf.stringToHclTerraform(this._azureFilesStorageSasToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backblaze_b2_application_key: {
        value: cdktf.stringToHclTerraform(this._backblazeB2ApplicationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backblaze_b2_key_id: {
        value: cdktf.stringToHclTerraform(this._backblazeB2KeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudflare_access_key: {
        value: cdktf.stringToHclTerraform(this._cloudflareAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudflare_secret_key: {
        value: cdktf.stringToHclTerraform(this._cloudflareSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filebase_access_key: {
        value: cdktf.stringToHclTerraform(this._filebaseAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filebase_secret_key: {
        value: cdktf.stringToHclTerraform(this._filebaseSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_cloud_storage_credentials_json: {
        value: cdktf.stringToHclTerraform(this._googleCloudStorageCredentialsJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_cloud_storage_s3_compatible_access_key: {
        value: cdktf.stringToHclTerraform(this._googleCloudStorageS3CompatibleAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_cloud_storage_s3_compatible_secret_key: {
        value: cdktf.stringToHclTerraform(this._googleCloudStorageS3CompatibleSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linode_access_key: {
        value: cdktf.stringToHclTerraform(this._linodeAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linode_secret_key: {
        value: cdktf.stringToHclTerraform(this._linodeSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassphrase),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_compatible_access_key: {
        value: cdktf.stringToHclTerraform(this._s3CompatibleAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_compatible_secret_key: {
        value: cdktf.stringToHclTerraform(this._s3CompatibleSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_type: {
        value: cdktf.stringToHclTerraform(this._serverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wasabi_access_key: {
        value: cdktf.stringToHclTerraform(this._wasabiAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wasabi_secret_key: {
        value: cdktf.stringToHclTerraform(this._wasabiSecretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
