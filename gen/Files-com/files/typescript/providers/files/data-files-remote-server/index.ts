// https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/remote_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesRemoteServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remote server ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/remote_server#id DataFilesRemoteServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/remote_server files_remote_server}
*/
export class DataFilesRemoteServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_remote_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesRemoteServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesRemoteServer to import
  * @param importFromId The id of the existing DataFilesRemoteServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/remote_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesRemoteServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_remote_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.394/docs/data-sources/remote_server files_remote_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesRemoteServerConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesRemoteServerConfig) {
    super(scope, id, {
      terraformResourceType: 'files_remote_server',
      terraformGeneratorMetadata: {
        providerName: 'files',
        providerVersion: '0.1.394',
        providerVersionConstraint: '0.1.394'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
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

  // aws_access_key - computed: true, optional: false, required: false
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }

  // azure_blob_storage_account - computed: true, optional: false, required: false
  public get azureBlobStorageAccount() {
    return this.getStringAttribute('azure_blob_storage_account');
  }

  // azure_blob_storage_container - computed: true, optional: false, required: false
  public get azureBlobStorageContainer() {
    return this.getStringAttribute('azure_blob_storage_container');
  }

  // azure_blob_storage_dns_suffix - computed: true, optional: false, required: false
  public get azureBlobStorageDnsSuffix() {
    return this.getStringAttribute('azure_blob_storage_dns_suffix');
  }

  // azure_blob_storage_hierarchical_namespace - computed: true, optional: false, required: false
  public get azureBlobStorageHierarchicalNamespace() {
    return this.getBooleanAttribute('azure_blob_storage_hierarchical_namespace');
  }

  // azure_files_storage_account - computed: true, optional: false, required: false
  public get azureFilesStorageAccount() {
    return this.getStringAttribute('azure_files_storage_account');
  }

  // azure_files_storage_dns_suffix - computed: true, optional: false, required: false
  public get azureFilesStorageDnsSuffix() {
    return this.getStringAttribute('azure_files_storage_dns_suffix');
  }

  // azure_files_storage_share_name - computed: true, optional: false, required: false
  public get azureFilesStorageShareName() {
    return this.getStringAttribute('azure_files_storage_share_name');
  }

  // backblaze_b2_bucket - computed: true, optional: false, required: false
  public get backblazeB2Bucket() {
    return this.getStringAttribute('backblaze_b2_bucket');
  }

  // backblaze_b2_s3_endpoint - computed: true, optional: false, required: false
  public get backblazeB2S3Endpoint() {
    return this.getStringAttribute('backblaze_b2_s3_endpoint');
  }

  // buffer_uploads_always - computed: true, optional: false, required: false
  public get bufferUploadsAlways() {
    return this.getBooleanAttribute('buffer_uploads_always');
  }

  // cloudflare_access_key - computed: true, optional: false, required: false
  public get cloudflareAccessKey() {
    return this.getStringAttribute('cloudflare_access_key');
  }

  // cloudflare_bucket - computed: true, optional: false, required: false
  public get cloudflareBucket() {
    return this.getStringAttribute('cloudflare_bucket');
  }

  // cloudflare_endpoint - computed: true, optional: false, required: false
  public get cloudflareEndpoint() {
    return this.getStringAttribute('cloudflare_endpoint');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dropbox_teams - computed: true, optional: false, required: false
  public get dropboxTeams() {
    return this.getBooleanAttribute('dropbox_teams');
  }

  // enable_dedicated_ips - computed: true, optional: false, required: false
  public get enableDedicatedIps() {
    return this.getBooleanAttribute('enable_dedicated_ips');
  }

  // filebase_access_key - computed: true, optional: false, required: false
  public get filebaseAccessKey() {
    return this.getStringAttribute('filebase_access_key');
  }

  // filebase_bucket - computed: true, optional: false, required: false
  public get filebaseBucket() {
    return this.getStringAttribute('filebase_bucket');
  }

  // files_agent_api_token - computed: true, optional: false, required: false
  public get filesAgentApiToken() {
    return this.getStringAttribute('files_agent_api_token');
  }

  // files_agent_permission_set - computed: true, optional: false, required: false
  public get filesAgentPermissionSet() {
    return this.getStringAttribute('files_agent_permission_set');
  }

  // files_agent_root - computed: true, optional: false, required: false
  public get filesAgentRoot() {
    return this.getStringAttribute('files_agent_root');
  }

  // files_agent_version - computed: true, optional: false, required: false
  public get filesAgentVersion() {
    return this.getStringAttribute('files_agent_version');
  }

  // google_cloud_storage_bucket - computed: true, optional: false, required: false
  public get googleCloudStorageBucket() {
    return this.getStringAttribute('google_cloud_storage_bucket');
  }

  // google_cloud_storage_project_id - computed: true, optional: false, required: false
  public get googleCloudStorageProjectId() {
    return this.getStringAttribute('google_cloud_storage_project_id');
  }

  // google_cloud_storage_s3_compatible_access_key - computed: true, optional: false, required: false
  public get googleCloudStorageS3CompatibleAccessKey() {
    return this.getStringAttribute('google_cloud_storage_s3_compatible_access_key');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // linode_access_key - computed: true, optional: false, required: false
  public get linodeAccessKey() {
    return this.getStringAttribute('linode_access_key');
  }

  // linode_bucket - computed: true, optional: false, required: false
  public get linodeBucket() {
    return this.getStringAttribute('linode_bucket');
  }

  // linode_region - computed: true, optional: false, required: false
  public get linodeRegion() {
    return this.getStringAttribute('linode_region');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // one_drive_account_type - computed: true, optional: false, required: false
  public get oneDriveAccountType() {
    return this.getStringAttribute('one_drive_account_type');
  }

  // pin_to_site_region - computed: true, optional: false, required: false
  public get pinToSiteRegion() {
    return this.getBooleanAttribute('pin_to_site_region');
  }

  // pinned_region - computed: true, optional: false, required: false
  public get pinnedRegion() {
    return this.getStringAttribute('pinned_region');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // remote_home_path - computed: true, optional: false, required: false
  public get remoteHomePath() {
    return this.getStringAttribute('remote_home_path');
  }

  // s3_bucket - computed: true, optional: false, required: false
  public get s3Bucket() {
    return this.getStringAttribute('s3_bucket');
  }

  // s3_compatible_access_key - computed: true, optional: false, required: false
  public get s3CompatibleAccessKey() {
    return this.getStringAttribute('s3_compatible_access_key');
  }

  // s3_compatible_bucket - computed: true, optional: false, required: false
  public get s3CompatibleBucket() {
    return this.getStringAttribute('s3_compatible_bucket');
  }

  // s3_compatible_endpoint - computed: true, optional: false, required: false
  public get s3CompatibleEndpoint() {
    return this.getStringAttribute('s3_compatible_endpoint');
  }

  // s3_compatible_region - computed: true, optional: false, required: false
  public get s3CompatibleRegion() {
    return this.getStringAttribute('s3_compatible_region');
  }

  // s3_region - computed: true, optional: false, required: false
  public get s3Region() {
    return this.getStringAttribute('s3_region');
  }

  // server_certificate - computed: true, optional: false, required: false
  public get serverCertificate() {
    return this.getStringAttribute('server_certificate');
  }

  // server_host_key - computed: true, optional: false, required: false
  public get serverHostKey() {
    return this.getStringAttribute('server_host_key');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getStringAttribute('ssl');
  }

  // supports_versioning - computed: true, optional: false, required: false
  public get supportsVersioning() {
    return this.getBooleanAttribute('supports_versioning');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // wasabi_access_key - computed: true, optional: false, required: false
  public get wasabiAccessKey() {
    return this.getStringAttribute('wasabi_access_key');
  }

  // wasabi_bucket - computed: true, optional: false, required: false
  public get wasabiBucket() {
    return this.getStringAttribute('wasabi_bucket');
  }

  // wasabi_region - computed: true, optional: false, required: false
  public get wasabiRegion() {
    return this.getStringAttribute('wasabi_region');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
