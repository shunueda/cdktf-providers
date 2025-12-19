// https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/remote_server_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFilesRemoteServerCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Remote Server Credential ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/remote_server_credential#id DataFilesRemoteServerCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/remote_server_credential files_remote_server_credential}
*/
export class DataFilesRemoteServerCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "files_remote_server_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFilesRemoteServerCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFilesRemoteServerCredential to import
  * @param importFromId The id of the existing DataFilesRemoteServerCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/remote_server_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFilesRemoteServerCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "files_remote_server_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/files-com/files/0.1.417/docs/data-sources/remote_server_credential files_remote_server_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFilesRemoteServerCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataFilesRemoteServerCredentialConfig) {
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
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key - computed: true, optional: false, required: false
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }

  // azure_blob_storage_account - computed: true, optional: false, required: false
  public get azureBlobStorageAccount() {
    return this.getStringAttribute('azure_blob_storage_account');
  }

  // azure_files_storage_account - computed: true, optional: false, required: false
  public get azureFilesStorageAccount() {
    return this.getStringAttribute('azure_files_storage_account');
  }

  // cloudflare_access_key - computed: true, optional: false, required: false
  public get cloudflareAccessKey() {
    return this.getStringAttribute('cloudflare_access_key');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // filebase_access_key - computed: true, optional: false, required: false
  public get filebaseAccessKey() {
    return this.getStringAttribute('filebase_access_key');
  }

  // google_cloud_storage_s3_compatible_access_key - computed: true, optional: false, required: false
  public get googleCloudStorageS3CompatibleAccessKey() {
    return this.getStringAttribute('google_cloud_storage_s3_compatible_access_key');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // s3_compatible_access_key - computed: true, optional: false, required: false
  public get s3CompatibleAccessKey() {
    return this.getStringAttribute('s3_compatible_access_key');
  }

  // server_type - computed: true, optional: false, required: false
  public get serverType() {
    return this.getStringAttribute('server_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // wasabi_access_key - computed: true, optional: false, required: false
  public get wasabiAccessKey() {
    return this.getStringAttribute('wasabi_access_key');
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
