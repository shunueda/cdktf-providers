// https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RemoteServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#aws_access_key RemoteServer#aws_access_key}
  */
  readonly awsAccessKey?: string;
  /**
  * AWS: secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#aws_secret_key RemoteServer#aws_secret_key}
  */
  readonly awsSecretKey?: string;
  /**
  * Azure Blob Storage: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_blob_storage_access_key RemoteServer#azure_blob_storage_access_key}
  */
  readonly azureBlobStorageAccessKey?: string;
  /**
  * Azure Blob Storage: Account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_blob_storage_account RemoteServer#azure_blob_storage_account}
  */
  readonly azureBlobStorageAccount?: string;
  /**
  * Azure Blob Storage: Container name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_blob_storage_container RemoteServer#azure_blob_storage_container}
  */
  readonly azureBlobStorageContainer?: string;
  /**
  * Azure Blob Storage: Custom DNS suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_blob_storage_dns_suffix RemoteServer#azure_blob_storage_dns_suffix}
  */
  readonly azureBlobStorageDnsSuffix?: string;
  /**
  * Azure Blob Storage: Does the storage account has hierarchical namespace feature enabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_blob_storage_hierarchical_namespace RemoteServer#azure_blob_storage_hierarchical_namespace}
  */
  readonly azureBlobStorageHierarchicalNamespace?: boolean | cdktf.IResolvable;
  /**
  * Azure Blob Storage: Shared Access Signature (SAS) token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_blob_storage_sas_token RemoteServer#azure_blob_storage_sas_token}
  */
  readonly azureBlobStorageSasToken?: string;
  /**
  * Azure File Storage: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_files_storage_access_key RemoteServer#azure_files_storage_access_key}
  */
  readonly azureFilesStorageAccessKey?: string;
  /**
  * Azure Files: Storage Account name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_files_storage_account RemoteServer#azure_files_storage_account}
  */
  readonly azureFilesStorageAccount?: string;
  /**
  * Azure Files: Custom DNS suffix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_files_storage_dns_suffix RemoteServer#azure_files_storage_dns_suffix}
  */
  readonly azureFilesStorageDnsSuffix?: string;
  /**
  * Azure File Storage: Shared Access Signature (SAS) token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_files_storage_sas_token RemoteServer#azure_files_storage_sas_token}
  */
  readonly azureFilesStorageSasToken?: string;
  /**
  * Azure Files:  Storage Share name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#azure_files_storage_share_name RemoteServer#azure_files_storage_share_name}
  */
  readonly azureFilesStorageShareName?: string;
  /**
  * Backblaze B2 Cloud Storage: applicationKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#backblaze_b2_application_key RemoteServer#backblaze_b2_application_key}
  */
  readonly backblazeB2ApplicationKey?: string;
  /**
  * Backblaze B2 Cloud Storage: Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#backblaze_b2_bucket RemoteServer#backblaze_b2_bucket}
  */
  readonly backblazeB2Bucket?: string;
  /**
  * Backblaze B2 Cloud Storage: keyID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#backblaze_b2_key_id RemoteServer#backblaze_b2_key_id}
  */
  readonly backblazeB2KeyId?: string;
  /**
  * Backblaze B2 Cloud Storage: S3 Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#backblaze_b2_s3_endpoint RemoteServer#backblaze_b2_s3_endpoint}
  */
  readonly backblazeB2S3Endpoint?: string;
  /**
  * If true, uploads to this server will be uploaded first to Files.com before being sent to the remote server. This can improve performance in certain access patterns, such as high-latency connections.  It will cause data to be temporarily stored in Files.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#buffer_uploads_always RemoteServer#buffer_uploads_always}
  */
  readonly bufferUploadsAlways?: boolean | cdktf.IResolvable;
  /**
  * Cloudflare: Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#cloudflare_access_key RemoteServer#cloudflare_access_key}
  */
  readonly cloudflareAccessKey?: string;
  /**
  * Cloudflare: Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#cloudflare_bucket RemoteServer#cloudflare_bucket}
  */
  readonly cloudflareBucket?: string;
  /**
  * Cloudflare: endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#cloudflare_endpoint RemoteServer#cloudflare_endpoint}
  */
  readonly cloudflareEndpoint?: string;
  /**
  * Cloudflare: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#cloudflare_secret_key RemoteServer#cloudflare_secret_key}
  */
  readonly cloudflareSecretKey?: string;
  /**
  * Dropbox: If true, list Team folders in root?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#dropbox_teams RemoteServer#dropbox_teams}
  */
  readonly dropboxTeams?: boolean | cdktf.IResolvable;
  /**
  * `true` if remote server only accepts connections from dedicated IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#enable_dedicated_ips RemoteServer#enable_dedicated_ips}
  */
  readonly enableDedicatedIps?: boolean | cdktf.IResolvable;
  /**
  * Filebase: Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#filebase_access_key RemoteServer#filebase_access_key}
  */
  readonly filebaseAccessKey?: string;
  /**
  * Filebase: Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#filebase_bucket RemoteServer#filebase_bucket}
  */
  readonly filebaseBucket?: string;
  /**
  * Filebase: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#filebase_secret_key RemoteServer#filebase_secret_key}
  */
  readonly filebaseSecretKey?: string;
  /**
  * Local permissions for files agent. read_only, write_only, or read_write
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#files_agent_permission_set RemoteServer#files_agent_permission_set}
  */
  readonly filesAgentPermissionSet?: string;
  /**
  * Agent local root path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#files_agent_root RemoteServer#files_agent_root}
  */
  readonly filesAgentRoot?: string;
  /**
  * Files Agent version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#files_agent_version RemoteServer#files_agent_version}
  */
  readonly filesAgentVersion?: string;
  /**
  * Google Cloud Storage: Bucket Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#google_cloud_storage_bucket RemoteServer#google_cloud_storage_bucket}
  */
  readonly googleCloudStorageBucket?: string;
  /**
  * Google Cloud Storage: JSON file that contains the private key. To generate see https://cloud.google.com/storage/docs/json_api/v1/how-tos/authorizing#APIKey
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#google_cloud_storage_credentials_json RemoteServer#google_cloud_storage_credentials_json}
  */
  readonly googleCloudStorageCredentialsJson?: string;
  /**
  * Google Cloud Storage: Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#google_cloud_storage_project_id RemoteServer#google_cloud_storage_project_id}
  */
  readonly googleCloudStorageProjectId?: string;
  /**
  * Google Cloud Storage: S3-compatible Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#google_cloud_storage_s3_compatible_access_key RemoteServer#google_cloud_storage_s3_compatible_access_key}
  */
  readonly googleCloudStorageS3CompatibleAccessKey?: string;
  /**
  * Google Cloud Storage: S3-compatible secret key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#google_cloud_storage_s3_compatible_secret_key RemoteServer#google_cloud_storage_s3_compatible_secret_key}
  */
  readonly googleCloudStorageS3CompatibleSecretKey?: string;
  /**
  * Hostname or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#hostname RemoteServer#hostname}
  */
  readonly hostname?: string;
  /**
  * Linode: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#linode_access_key RemoteServer#linode_access_key}
  */
  readonly linodeAccessKey?: string;
  /**
  * Linode: Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#linode_bucket RemoteServer#linode_bucket}
  */
  readonly linodeBucket?: string;
  /**
  * Linode: region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#linode_region RemoteServer#linode_region}
  */
  readonly linodeRegion?: string;
  /**
  * Linode: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#linode_secret_key RemoteServer#linode_secret_key}
  */
  readonly linodeSecretKey?: string;
  /**
  * Max number of parallel connections.  Ignored for S3 connections (we will parallelize these as much as possible).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#max_connections RemoteServer#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * Internal name for your reference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#name RemoteServer#name}
  */
  readonly name?: string;
  /**
  * OneDrive: Either personal or business_other account types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#one_drive_account_type RemoteServer#one_drive_account_type}
  */
  readonly oneDriveAccountType?: string;
  /**
  * Password, if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#password RemoteServer#password}
  */
  readonly password?: string;
  /**
  * If true, we will ensure that all communications with this remote server are made through the primary region of the site.  This setting can also be overridden by a site-wide setting which will force it to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#pin_to_site_region RemoteServer#pin_to_site_region}
  */
  readonly pinToSiteRegion?: boolean | cdktf.IResolvable;
  /**
  * Port for remote server.  Not needed for S3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#port RemoteServer#port}
  */
  readonly port?: number;
  /**
  * Private key, if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#private_key RemoteServer#private_key}
  */
  readonly privateKey?: string;
  /**
  * Passphrase for private key if needed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#private_key_passphrase RemoteServer#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Reset authenticated account?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#reset_authentication RemoteServer#reset_authentication}
  */
  readonly resetAuthentication?: boolean | cdktf.IResolvable;
  /**
  * S3 bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#s3_bucket RemoteServer#s3_bucket}
  */
  readonly s3Bucket?: string;
  /**
  * S3-compatible: Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#s3_compatible_access_key RemoteServer#s3_compatible_access_key}
  */
  readonly s3CompatibleAccessKey?: string;
  /**
  * S3-compatible: Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#s3_compatible_bucket RemoteServer#s3_compatible_bucket}
  */
  readonly s3CompatibleBucket?: string;
  /**
  * S3-compatible: endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#s3_compatible_endpoint RemoteServer#s3_compatible_endpoint}
  */
  readonly s3CompatibleEndpoint?: string;
  /**
  * S3-compatible: region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#s3_compatible_region RemoteServer#s3_compatible_region}
  */
  readonly s3CompatibleRegion?: string;
  /**
  * S3-compatible: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#s3_compatible_secret_key RemoteServer#s3_compatible_secret_key}
  */
  readonly s3CompatibleSecretKey?: string;
  /**
  * S3 region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#s3_region RemoteServer#s3_region}
  */
  readonly s3Region?: string;
  /**
  * Remote server certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#server_certificate RemoteServer#server_certificate}
  */
  readonly serverCertificate?: string;
  /**
  * Remote server SSH Host Key. If provided, we will require that the server host key matches the provided key. Uses OpenSSH format similar to what would go into ~/.ssh/known_hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#server_host_key RemoteServer#server_host_key}
  */
  readonly serverHostKey?: string;
  /**
  * Remote server type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#server_type RemoteServer#server_type}
  */
  readonly serverType?: string;
  /**
  * Should we require SSL?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#ssl RemoteServer#ssl}
  */
  readonly ssl?: string;
  /**
  * SSL client certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#ssl_certificate RemoteServer#ssl_certificate}
  */
  readonly sslCertificate?: string;
  /**
  * Remote server username.  Not needed for S3 buckets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#username RemoteServer#username}
  */
  readonly username?: string;
  /**
  * Wasabi: Access Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#wasabi_access_key RemoteServer#wasabi_access_key}
  */
  readonly wasabiAccessKey?: string;
  /**
  * Wasabi: Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#wasabi_bucket RemoteServer#wasabi_bucket}
  */
  readonly wasabiBucket?: string;
  /**
  * Wasabi: Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#wasabi_region RemoteServer#wasabi_region}
  */
  readonly wasabiRegion?: string;
  /**
  * Wasabi: Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#wasabi_secret_key RemoteServer#wasabi_secret_key}
  */
  readonly wasabiSecretKey?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server files_remote_server}
*/
export class RemoteServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_remote_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RemoteServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RemoteServer to import
  * @param importFromId The id of the existing RemoteServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RemoteServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_remote_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.392/docs/resources/remote_server files_remote_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RemoteServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RemoteServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'files_remote_server',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.392',
        providerVersionConstraint: '0.1.392'
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
    this._azureBlobStorageContainer = config.azureBlobStorageContainer;
    this._azureBlobStorageDnsSuffix = config.azureBlobStorageDnsSuffix;
    this._azureBlobStorageHierarchicalNamespace = config.azureBlobStorageHierarchicalNamespace;
    this._azureBlobStorageSasToken = config.azureBlobStorageSasToken;
    this._azureFilesStorageAccessKey = config.azureFilesStorageAccessKey;
    this._azureFilesStorageAccount = config.azureFilesStorageAccount;
    this._azureFilesStorageDnsSuffix = config.azureFilesStorageDnsSuffix;
    this._azureFilesStorageSasToken = config.azureFilesStorageSasToken;
    this._azureFilesStorageShareName = config.azureFilesStorageShareName;
    this._backblazeB2ApplicationKey = config.backblazeB2ApplicationKey;
    this._backblazeB2Bucket = config.backblazeB2Bucket;
    this._backblazeB2KeyId = config.backblazeB2KeyId;
    this._backblazeB2S3Endpoint = config.backblazeB2S3Endpoint;
    this._bufferUploadsAlways = config.bufferUploadsAlways;
    this._cloudflareAccessKey = config.cloudflareAccessKey;
    this._cloudflareBucket = config.cloudflareBucket;
    this._cloudflareEndpoint = config.cloudflareEndpoint;
    this._cloudflareSecretKey = config.cloudflareSecretKey;
    this._dropboxTeams = config.dropboxTeams;
    this._enableDedicatedIps = config.enableDedicatedIps;
    this._filebaseAccessKey = config.filebaseAccessKey;
    this._filebaseBucket = config.filebaseBucket;
    this._filebaseSecretKey = config.filebaseSecretKey;
    this._filesAgentPermissionSet = config.filesAgentPermissionSet;
    this._filesAgentRoot = config.filesAgentRoot;
    this._filesAgentVersion = config.filesAgentVersion;
    this._googleCloudStorageBucket = config.googleCloudStorageBucket;
    this._googleCloudStorageCredentialsJson = config.googleCloudStorageCredentialsJson;
    this._googleCloudStorageProjectId = config.googleCloudStorageProjectId;
    this._googleCloudStorageS3CompatibleAccessKey = config.googleCloudStorageS3CompatibleAccessKey;
    this._googleCloudStorageS3CompatibleSecretKey = config.googleCloudStorageS3CompatibleSecretKey;
    this._hostname = config.hostname;
    this._linodeAccessKey = config.linodeAccessKey;
    this._linodeBucket = config.linodeBucket;
    this._linodeRegion = config.linodeRegion;
    this._linodeSecretKey = config.linodeSecretKey;
    this._maxConnections = config.maxConnections;
    this._name = config.name;
    this._oneDriveAccountType = config.oneDriveAccountType;
    this._password = config.password;
    this._pinToSiteRegion = config.pinToSiteRegion;
    this._port = config.port;
    this._privateKey = config.privateKey;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._resetAuthentication = config.resetAuthentication;
    this._s3Bucket = config.s3Bucket;
    this._s3CompatibleAccessKey = config.s3CompatibleAccessKey;
    this._s3CompatibleBucket = config.s3CompatibleBucket;
    this._s3CompatibleEndpoint = config.s3CompatibleEndpoint;
    this._s3CompatibleRegion = config.s3CompatibleRegion;
    this._s3CompatibleSecretKey = config.s3CompatibleSecretKey;
    this._s3Region = config.s3Region;
    this._serverCertificate = config.serverCertificate;
    this._serverHostKey = config.serverHostKey;
    this._serverType = config.serverType;
    this._ssl = config.ssl;
    this._sslCertificate = config.sslCertificate;
    this._username = config.username;
    this._wasabiAccessKey = config.wasabiAccessKey;
    this._wasabiBucket = config.wasabiBucket;
    this._wasabiRegion = config.wasabiRegion;
    this._wasabiSecretKey = config.wasabiSecretKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_account_name - computed: true, optional: false, required: false
  public get authAccountName() {
    return this.getStringAttribute('auth_account_name');
  }

  // auth_status - computed: true, optional: false, required: false
  public get authStatus() {
    return this.getStringAttribute('auth_status');
  }

  // authentication_method - computed: true, optional: false, required: false
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }

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

  // azure_blob_storage_container - computed: true, optional: true, required: false
  private _azureBlobStorageContainer?: string; 
  public get azureBlobStorageContainer() {
    return this.getStringAttribute('azure_blob_storage_container');
  }
  public set azureBlobStorageContainer(value: string) {
    this._azureBlobStorageContainer = value;
  }
  public resetAzureBlobStorageContainer() {
    this._azureBlobStorageContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageContainerInput() {
    return this._azureBlobStorageContainer;
  }

  // azure_blob_storage_dns_suffix - computed: true, optional: true, required: false
  private _azureBlobStorageDnsSuffix?: string; 
  public get azureBlobStorageDnsSuffix() {
    return this.getStringAttribute('azure_blob_storage_dns_suffix');
  }
  public set azureBlobStorageDnsSuffix(value: string) {
    this._azureBlobStorageDnsSuffix = value;
  }
  public resetAzureBlobStorageDnsSuffix() {
    this._azureBlobStorageDnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageDnsSuffixInput() {
    return this._azureBlobStorageDnsSuffix;
  }

  // azure_blob_storage_hierarchical_namespace - computed: true, optional: true, required: false
  private _azureBlobStorageHierarchicalNamespace?: boolean | cdktf.IResolvable; 
  public get azureBlobStorageHierarchicalNamespace() {
    return this.getBooleanAttribute('azure_blob_storage_hierarchical_namespace');
  }
  public set azureBlobStorageHierarchicalNamespace(value: boolean | cdktf.IResolvable) {
    this._azureBlobStorageHierarchicalNamespace = value;
  }
  public resetAzureBlobStorageHierarchicalNamespace() {
    this._azureBlobStorageHierarchicalNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobStorageHierarchicalNamespaceInput() {
    return this._azureBlobStorageHierarchicalNamespace;
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

  // azure_files_storage_dns_suffix - computed: true, optional: true, required: false
  private _azureFilesStorageDnsSuffix?: string; 
  public get azureFilesStorageDnsSuffix() {
    return this.getStringAttribute('azure_files_storage_dns_suffix');
  }
  public set azureFilesStorageDnsSuffix(value: string) {
    this._azureFilesStorageDnsSuffix = value;
  }
  public resetAzureFilesStorageDnsSuffix() {
    this._azureFilesStorageDnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesStorageDnsSuffixInput() {
    return this._azureFilesStorageDnsSuffix;
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

  // azure_files_storage_share_name - computed: true, optional: true, required: false
  private _azureFilesStorageShareName?: string; 
  public get azureFilesStorageShareName() {
    return this.getStringAttribute('azure_files_storage_share_name');
  }
  public set azureFilesStorageShareName(value: string) {
    this._azureFilesStorageShareName = value;
  }
  public resetAzureFilesStorageShareName() {
    this._azureFilesStorageShareName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFilesStorageShareNameInput() {
    return this._azureFilesStorageShareName;
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

  // backblaze_b2_bucket - computed: true, optional: true, required: false
  private _backblazeB2Bucket?: string; 
  public get backblazeB2Bucket() {
    return this.getStringAttribute('backblaze_b2_bucket');
  }
  public set backblazeB2Bucket(value: string) {
    this._backblazeB2Bucket = value;
  }
  public resetBackblazeB2Bucket() {
    this._backblazeB2Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backblazeB2BucketInput() {
    return this._backblazeB2Bucket;
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

  // backblaze_b2_s3_endpoint - computed: true, optional: true, required: false
  private _backblazeB2S3Endpoint?: string; 
  public get backblazeB2S3Endpoint() {
    return this.getStringAttribute('backblaze_b2_s3_endpoint');
  }
  public set backblazeB2S3Endpoint(value: string) {
    this._backblazeB2S3Endpoint = value;
  }
  public resetBackblazeB2S3Endpoint() {
    this._backblazeB2S3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backblazeB2S3EndpointInput() {
    return this._backblazeB2S3Endpoint;
  }

  // buffer_uploads_always - computed: true, optional: true, required: false
  private _bufferUploadsAlways?: boolean | cdktf.IResolvable; 
  public get bufferUploadsAlways() {
    return this.getBooleanAttribute('buffer_uploads_always');
  }
  public set bufferUploadsAlways(value: boolean | cdktf.IResolvable) {
    this._bufferUploadsAlways = value;
  }
  public resetBufferUploadsAlways() {
    this._bufferUploadsAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferUploadsAlwaysInput() {
    return this._bufferUploadsAlways;
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

  // cloudflare_bucket - computed: true, optional: true, required: false
  private _cloudflareBucket?: string; 
  public get cloudflareBucket() {
    return this.getStringAttribute('cloudflare_bucket');
  }
  public set cloudflareBucket(value: string) {
    this._cloudflareBucket = value;
  }
  public resetCloudflareBucket() {
    this._cloudflareBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareBucketInput() {
    return this._cloudflareBucket;
  }

  // cloudflare_endpoint - computed: true, optional: true, required: false
  private _cloudflareEndpoint?: string; 
  public get cloudflareEndpoint() {
    return this.getStringAttribute('cloudflare_endpoint');
  }
  public set cloudflareEndpoint(value: string) {
    this._cloudflareEndpoint = value;
  }
  public resetCloudflareEndpoint() {
    this._cloudflareEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudflareEndpointInput() {
    return this._cloudflareEndpoint;
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

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dropbox_teams - computed: true, optional: true, required: false
  private _dropboxTeams?: boolean | cdktf.IResolvable; 
  public get dropboxTeams() {
    return this.getBooleanAttribute('dropbox_teams');
  }
  public set dropboxTeams(value: boolean | cdktf.IResolvable) {
    this._dropboxTeams = value;
  }
  public resetDropboxTeams() {
    this._dropboxTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropboxTeamsInput() {
    return this._dropboxTeams;
  }

  // enable_dedicated_ips - computed: true, optional: true, required: false
  private _enableDedicatedIps?: boolean | cdktf.IResolvable; 
  public get enableDedicatedIps() {
    return this.getBooleanAttribute('enable_dedicated_ips');
  }
  public set enableDedicatedIps(value: boolean | cdktf.IResolvable) {
    this._enableDedicatedIps = value;
  }
  public resetEnableDedicatedIps() {
    this._enableDedicatedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDedicatedIpsInput() {
    return this._enableDedicatedIps;
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

  // filebase_bucket - computed: true, optional: true, required: false
  private _filebaseBucket?: string; 
  public get filebaseBucket() {
    return this.getStringAttribute('filebase_bucket');
  }
  public set filebaseBucket(value: string) {
    this._filebaseBucket = value;
  }
  public resetFilebaseBucket() {
    this._filebaseBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filebaseBucketInput() {
    return this._filebaseBucket;
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

  // files_agent_api_token - computed: true, optional: false, required: false
  public get filesAgentApiToken() {
    return this.getStringAttribute('files_agent_api_token');
  }

  // files_agent_permission_set - computed: true, optional: true, required: false
  private _filesAgentPermissionSet?: string; 
  public get filesAgentPermissionSet() {
    return this.getStringAttribute('files_agent_permission_set');
  }
  public set filesAgentPermissionSet(value: string) {
    this._filesAgentPermissionSet = value;
  }
  public resetFilesAgentPermissionSet() {
    this._filesAgentPermissionSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesAgentPermissionSetInput() {
    return this._filesAgentPermissionSet;
  }

  // files_agent_root - computed: true, optional: true, required: false
  private _filesAgentRoot?: string; 
  public get filesAgentRoot() {
    return this.getStringAttribute('files_agent_root');
  }
  public set filesAgentRoot(value: string) {
    this._filesAgentRoot = value;
  }
  public resetFilesAgentRoot() {
    this._filesAgentRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesAgentRootInput() {
    return this._filesAgentRoot;
  }

  // files_agent_version - computed: true, optional: true, required: false
  private _filesAgentVersion?: string; 
  public get filesAgentVersion() {
    return this.getStringAttribute('files_agent_version');
  }
  public set filesAgentVersion(value: string) {
    this._filesAgentVersion = value;
  }
  public resetFilesAgentVersion() {
    this._filesAgentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesAgentVersionInput() {
    return this._filesAgentVersion;
  }

  // google_cloud_storage_bucket - computed: true, optional: true, required: false
  private _googleCloudStorageBucket?: string; 
  public get googleCloudStorageBucket() {
    return this.getStringAttribute('google_cloud_storage_bucket');
  }
  public set googleCloudStorageBucket(value: string) {
    this._googleCloudStorageBucket = value;
  }
  public resetGoogleCloudStorageBucket() {
    this._googleCloudStorageBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageBucketInput() {
    return this._googleCloudStorageBucket;
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

  // google_cloud_storage_project_id - computed: true, optional: true, required: false
  private _googleCloudStorageProjectId?: string; 
  public get googleCloudStorageProjectId() {
    return this.getStringAttribute('google_cloud_storage_project_id');
  }
  public set googleCloudStorageProjectId(value: string) {
    this._googleCloudStorageProjectId = value;
  }
  public resetGoogleCloudStorageProjectId() {
    this._googleCloudStorageProjectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleCloudStorageProjectIdInput() {
    return this._googleCloudStorageProjectId;
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

  // hostname - computed: true, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // linode_bucket - computed: true, optional: true, required: false
  private _linodeBucket?: string; 
  public get linodeBucket() {
    return this.getStringAttribute('linode_bucket');
  }
  public set linodeBucket(value: string) {
    this._linodeBucket = value;
  }
  public resetLinodeBucket() {
    this._linodeBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeBucketInput() {
    return this._linodeBucket;
  }

  // linode_region - computed: true, optional: true, required: false
  private _linodeRegion?: string; 
  public get linodeRegion() {
    return this.getStringAttribute('linode_region');
  }
  public set linodeRegion(value: string) {
    this._linodeRegion = value;
  }
  public resetLinodeRegion() {
    this._linodeRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeRegionInput() {
    return this._linodeRegion;
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

  // max_connections - computed: true, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
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

  // one_drive_account_type - computed: true, optional: true, required: false
  private _oneDriveAccountType?: string; 
  public get oneDriveAccountType() {
    return this.getStringAttribute('one_drive_account_type');
  }
  public set oneDriveAccountType(value: string) {
    this._oneDriveAccountType = value;
  }
  public resetOneDriveAccountType() {
    this._oneDriveAccountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneDriveAccountTypeInput() {
    return this._oneDriveAccountType;
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

  // pin_to_site_region - computed: true, optional: true, required: false
  private _pinToSiteRegion?: boolean | cdktf.IResolvable; 
  public get pinToSiteRegion() {
    return this.getBooleanAttribute('pin_to_site_region');
  }
  public set pinToSiteRegion(value: boolean | cdktf.IResolvable) {
    this._pinToSiteRegion = value;
  }
  public resetPinToSiteRegion() {
    this._pinToSiteRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinToSiteRegionInput() {
    return this._pinToSiteRegion;
  }

  // pinned_region - computed: true, optional: false, required: false
  public get pinnedRegion() {
    return this.getStringAttribute('pinned_region');
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
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

  // remote_home_path - computed: true, optional: false, required: false
  public get remoteHomePath() {
    return this.getStringAttribute('remote_home_path');
  }

  // reset_authentication - computed: false, optional: true, required: false
  private _resetAuthentication?: boolean | cdktf.IResolvable; 
  public get resetAuthentication() {
    return this.getBooleanAttribute('reset_authentication');
  }
  public set resetAuthentication(value: boolean | cdktf.IResolvable) {
    this._resetAuthentication = value;
  }
  public resetResetAuthentication() {
    this._resetAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetAuthenticationInput() {
    return this._resetAuthentication;
  }

  // s3_bucket - computed: true, optional: true, required: false
  private _s3Bucket?: string; 
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }
  public set s3Bucket(value: string) {
    this._s3Bucket = value;
  }
  public resetS3Bucket() {
    this._s3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3BucketInput() {
    return this._s3Bucket;
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

  // s3_compatible_bucket - computed: true, optional: true, required: false
  private _s3CompatibleBucket?: string; 
  public get s3CompatibleBucket() {
    return this.getStringAttribute('s3_compatible_bucket');
  }
  public set s3CompatibleBucket(value: string) {
    this._s3CompatibleBucket = value;
  }
  public resetS3CompatibleBucket() {
    this._s3CompatibleBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompatibleBucketInput() {
    return this._s3CompatibleBucket;
  }

  // s3_compatible_endpoint - computed: true, optional: true, required: false
  private _s3CompatibleEndpoint?: string; 
  public get s3CompatibleEndpoint() {
    return this.getStringAttribute('s3_compatible_endpoint');
  }
  public set s3CompatibleEndpoint(value: string) {
    this._s3CompatibleEndpoint = value;
  }
  public resetS3CompatibleEndpoint() {
    this._s3CompatibleEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompatibleEndpointInput() {
    return this._s3CompatibleEndpoint;
  }

  // s3_compatible_region - computed: true, optional: true, required: false
  private _s3CompatibleRegion?: string; 
  public get s3CompatibleRegion() {
    return this.getStringAttribute('s3_compatible_region');
  }
  public set s3CompatibleRegion(value: string) {
    this._s3CompatibleRegion = value;
  }
  public resetS3CompatibleRegion() {
    this._s3CompatibleRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3CompatibleRegionInput() {
    return this._s3CompatibleRegion;
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

  // s3_region - computed: true, optional: true, required: false
  private _s3Region?: string; 
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }
  public set s3Region(value: string) {
    this._s3Region = value;
  }
  public resetS3Region() {
    this._s3Region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3RegionInput() {
    return this._s3Region;
  }

  // server_certificate - computed: true, optional: true, required: false
  private _serverCertificate?: string; 
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }
  public set serverCertificate(value: string) {
    this._serverCertificate = value;
  }
  public resetServerCertificate() {
    this._serverCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificateInput() {
    return this._serverCertificate;
  }

  // server_host_key - computed: true, optional: true, required: false
  private _serverHostKey?: string; 
  public get serverHostKey() {
    return this.getStringAttribute('server_host_key');
  }
  public set serverHostKey(value: string) {
    this._serverHostKey = value;
  }
  public resetServerHostKey() {
    this._serverHostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHostKeyInput() {
    return this._serverHostKey;
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

  // ssl - computed: true, optional: true, required: false
  private _ssl?: string; 
  public get ssl() {
    return this.getStringAttribute('ssl');
  }
  public set ssl(value: string) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // ssl_certificate - computed: false, optional: true, required: false
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  public resetSslCertificate() {
    this._sslCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }

  // supports_versioning - computed: true, optional: false, required: false
  public get supportsVersioning() {
    return this.getBooleanAttribute('supports_versioning');
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

  // wasabi_bucket - computed: true, optional: true, required: false
  private _wasabiBucket?: string; 
  public get wasabiBucket() {
    return this.getStringAttribute('wasabi_bucket');
  }
  public set wasabiBucket(value: string) {
    this._wasabiBucket = value;
  }
  public resetWasabiBucket() {
    this._wasabiBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasabiBucketInput() {
    return this._wasabiBucket;
  }

  // wasabi_region - computed: true, optional: true, required: false
  private _wasabiRegion?: string; 
  public get wasabiRegion() {
    return this.getStringAttribute('wasabi_region');
  }
  public set wasabiRegion(value: string) {
    this._wasabiRegion = value;
  }
  public resetWasabiRegion() {
    this._wasabiRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wasabiRegionInput() {
    return this._wasabiRegion;
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
      azure_blob_storage_container: cdktf.stringToTerraform(this._azureBlobStorageContainer),
      azure_blob_storage_dns_suffix: cdktf.stringToTerraform(this._azureBlobStorageDnsSuffix),
      azure_blob_storage_hierarchical_namespace: cdktf.booleanToTerraform(this._azureBlobStorageHierarchicalNamespace),
      azure_blob_storage_sas_token: cdktf.stringToTerraform(this._azureBlobStorageSasToken),
      azure_files_storage_access_key: cdktf.stringToTerraform(this._azureFilesStorageAccessKey),
      azure_files_storage_account: cdktf.stringToTerraform(this._azureFilesStorageAccount),
      azure_files_storage_dns_suffix: cdktf.stringToTerraform(this._azureFilesStorageDnsSuffix),
      azure_files_storage_sas_token: cdktf.stringToTerraform(this._azureFilesStorageSasToken),
      azure_files_storage_share_name: cdktf.stringToTerraform(this._azureFilesStorageShareName),
      backblaze_b2_application_key: cdktf.stringToTerraform(this._backblazeB2ApplicationKey),
      backblaze_b2_bucket: cdktf.stringToTerraform(this._backblazeB2Bucket),
      backblaze_b2_key_id: cdktf.stringToTerraform(this._backblazeB2KeyId),
      backblaze_b2_s3_endpoint: cdktf.stringToTerraform(this._backblazeB2S3Endpoint),
      buffer_uploads_always: cdktf.booleanToTerraform(this._bufferUploadsAlways),
      cloudflare_access_key: cdktf.stringToTerraform(this._cloudflareAccessKey),
      cloudflare_bucket: cdktf.stringToTerraform(this._cloudflareBucket),
      cloudflare_endpoint: cdktf.stringToTerraform(this._cloudflareEndpoint),
      cloudflare_secret_key: cdktf.stringToTerraform(this._cloudflareSecretKey),
      dropbox_teams: cdktf.booleanToTerraform(this._dropboxTeams),
      enable_dedicated_ips: cdktf.booleanToTerraform(this._enableDedicatedIps),
      filebase_access_key: cdktf.stringToTerraform(this._filebaseAccessKey),
      filebase_bucket: cdktf.stringToTerraform(this._filebaseBucket),
      filebase_secret_key: cdktf.stringToTerraform(this._filebaseSecretKey),
      files_agent_permission_set: cdktf.stringToTerraform(this._filesAgentPermissionSet),
      files_agent_root: cdktf.stringToTerraform(this._filesAgentRoot),
      files_agent_version: cdktf.stringToTerraform(this._filesAgentVersion),
      google_cloud_storage_bucket: cdktf.stringToTerraform(this._googleCloudStorageBucket),
      google_cloud_storage_credentials_json: cdktf.stringToTerraform(this._googleCloudStorageCredentialsJson),
      google_cloud_storage_project_id: cdktf.stringToTerraform(this._googleCloudStorageProjectId),
      google_cloud_storage_s3_compatible_access_key: cdktf.stringToTerraform(this._googleCloudStorageS3CompatibleAccessKey),
      google_cloud_storage_s3_compatible_secret_key: cdktf.stringToTerraform(this._googleCloudStorageS3CompatibleSecretKey),
      hostname: cdktf.stringToTerraform(this._hostname),
      linode_access_key: cdktf.stringToTerraform(this._linodeAccessKey),
      linode_bucket: cdktf.stringToTerraform(this._linodeBucket),
      linode_region: cdktf.stringToTerraform(this._linodeRegion),
      linode_secret_key: cdktf.stringToTerraform(this._linodeSecretKey),
      max_connections: cdktf.numberToTerraform(this._maxConnections),
      name: cdktf.stringToTerraform(this._name),
      one_drive_account_type: cdktf.stringToTerraform(this._oneDriveAccountType),
      password: cdktf.stringToTerraform(this._password),
      pin_to_site_region: cdktf.booleanToTerraform(this._pinToSiteRegion),
      port: cdktf.numberToTerraform(this._port),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      reset_authentication: cdktf.booleanToTerraform(this._resetAuthentication),
      s3_bucket: cdktf.stringToTerraform(this._s3Bucket),
      s3_compatible_access_key: cdktf.stringToTerraform(this._s3CompatibleAccessKey),
      s3_compatible_bucket: cdktf.stringToTerraform(this._s3CompatibleBucket),
      s3_compatible_endpoint: cdktf.stringToTerraform(this._s3CompatibleEndpoint),
      s3_compatible_region: cdktf.stringToTerraform(this._s3CompatibleRegion),
      s3_compatible_secret_key: cdktf.stringToTerraform(this._s3CompatibleSecretKey),
      s3_region: cdktf.stringToTerraform(this._s3Region),
      server_certificate: cdktf.stringToTerraform(this._serverCertificate),
      server_host_key: cdktf.stringToTerraform(this._serverHostKey),
      server_type: cdktf.stringToTerraform(this._serverType),
      ssl: cdktf.stringToTerraform(this._ssl),
      ssl_certificate: cdktf.stringToTerraform(this._sslCertificate),
      username: cdktf.stringToTerraform(this._username),
      wasabi_access_key: cdktf.stringToTerraform(this._wasabiAccessKey),
      wasabi_bucket: cdktf.stringToTerraform(this._wasabiBucket),
      wasabi_region: cdktf.stringToTerraform(this._wasabiRegion),
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
      azure_blob_storage_container: {
        value: cdktf.stringToHclTerraform(this._azureBlobStorageContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_blob_storage_dns_suffix: {
        value: cdktf.stringToHclTerraform(this._azureBlobStorageDnsSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_blob_storage_hierarchical_namespace: {
        value: cdktf.booleanToHclTerraform(this._azureBlobStorageHierarchicalNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      azure_files_storage_dns_suffix: {
        value: cdktf.stringToHclTerraform(this._azureFilesStorageDnsSuffix),
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
      azure_files_storage_share_name: {
        value: cdktf.stringToHclTerraform(this._azureFilesStorageShareName),
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
      backblaze_b2_bucket: {
        value: cdktf.stringToHclTerraform(this._backblazeB2Bucket),
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
      backblaze_b2_s3_endpoint: {
        value: cdktf.stringToHclTerraform(this._backblazeB2S3Endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffer_uploads_always: {
        value: cdktf.booleanToHclTerraform(this._bufferUploadsAlways),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cloudflare_access_key: {
        value: cdktf.stringToHclTerraform(this._cloudflareAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudflare_bucket: {
        value: cdktf.stringToHclTerraform(this._cloudflareBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloudflare_endpoint: {
        value: cdktf.stringToHclTerraform(this._cloudflareEndpoint),
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
      dropbox_teams: {
        value: cdktf.booleanToHclTerraform(this._dropboxTeams),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dedicated_ips: {
        value: cdktf.booleanToHclTerraform(this._enableDedicatedIps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filebase_access_key: {
        value: cdktf.stringToHclTerraform(this._filebaseAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filebase_bucket: {
        value: cdktf.stringToHclTerraform(this._filebaseBucket),
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
      files_agent_permission_set: {
        value: cdktf.stringToHclTerraform(this._filesAgentPermissionSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      files_agent_root: {
        value: cdktf.stringToHclTerraform(this._filesAgentRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      files_agent_version: {
        value: cdktf.stringToHclTerraform(this._filesAgentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      google_cloud_storage_bucket: {
        value: cdktf.stringToHclTerraform(this._googleCloudStorageBucket),
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
      google_cloud_storage_project_id: {
        value: cdktf.stringToHclTerraform(this._googleCloudStorageProjectId),
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
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      linode_bucket: {
        value: cdktf.stringToHclTerraform(this._linodeBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linode_region: {
        value: cdktf.stringToHclTerraform(this._linodeRegion),
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
      max_connections: {
        value: cdktf.numberToHclTerraform(this._maxConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      one_drive_account_type: {
        value: cdktf.stringToHclTerraform(this._oneDriveAccountType),
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
      pin_to_site_region: {
        value: cdktf.booleanToHclTerraform(this._pinToSiteRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      reset_authentication: {
        value: cdktf.booleanToHclTerraform(this._resetAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      s3_bucket: {
        value: cdktf.stringToHclTerraform(this._s3Bucket),
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
      s3_compatible_bucket: {
        value: cdktf.stringToHclTerraform(this._s3CompatibleBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_compatible_endpoint: {
        value: cdktf.stringToHclTerraform(this._s3CompatibleEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_compatible_region: {
        value: cdktf.stringToHclTerraform(this._s3CompatibleRegion),
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
      s3_region: {
        value: cdktf.stringToHclTerraform(this._s3Region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_certificate: {
        value: cdktf.stringToHclTerraform(this._serverCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_host_key: {
        value: cdktf.stringToHclTerraform(this._serverHostKey),
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
      ssl: {
        value: cdktf.stringToHclTerraform(this._ssl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificate: {
        value: cdktf.stringToHclTerraform(this._sslCertificate),
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
      wasabi_bucket: {
        value: cdktf.stringToHclTerraform(this._wasabiBucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wasabi_region: {
        value: cdktf.stringToHclTerraform(this._wasabiRegion),
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
