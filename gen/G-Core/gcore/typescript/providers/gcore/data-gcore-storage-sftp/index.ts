// https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/storage_sftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGcoreStorageSftpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/storage_sftp#id DataGcoreStorageSftp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A name of storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/storage_sftp#name DataGcoreStorageSftp#name}
  */
  readonly name?: string;
  /**
  * An id of storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/storage_sftp#storage_id DataGcoreStorageSftp#storage_id}
  */
  readonly storageId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/storage_sftp gcore_storage_sftp}
*/
export class DataGcoreStorageSftp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_storage_sftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGcoreStorageSftp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGcoreStorageSftp to import
  * @param importFromId The id of the existing DataGcoreStorageSftp that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/storage_sftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGcoreStorageSftp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_storage_sftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/storage_sftp gcore_storage_sftp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGcoreStorageSftpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGcoreStorageSftpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gcore_storage_sftp',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.5',
        providerVersionConstraint: '0.32.5'
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
    this._name = config.name;
    this._storageId = config.storageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getNumberAttribute('client_id');
  }

  // generated_http_endpoint - computed: true, optional: false, required: false
  public get generatedHttpEndpoint() {
    return this.getStringAttribute('generated_http_endpoint');
  }

  // generated_sftp_endpoint - computed: true, optional: false, required: false
  public get generatedSftpEndpoint() {
    return this.getStringAttribute('generated_sftp_endpoint');
  }

  // http_expires_header_value - computed: true, optional: false, required: false
  public get httpExpiresHeaderValue() {
    return this.getStringAttribute('http_expires_header_value');
  }

  // http_servername_alias - computed: true, optional: false, required: false
  public get httpServernameAlias() {
    return this.getStringAttribute('http_servername_alias');
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: true, required: false
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

  // ssh_key_id - computed: true, optional: false, required: false
  public get sshKeyId() {
    return this.getNumberListAttribute('ssh_key_id');
  }

  // storage_id - computed: false, optional: true, required: false
  private _storageId?: number; 
  public get storageId() {
    return this.getNumberAttribute('storage_id');
  }
  public set storageId(value: number) {
    this._storageId = value;
  }
  public resetStorageId() {
    this._storageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      storage_id: cdktf.numberToTerraform(this._storageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      storage_id: {
        value: cdktf.numberToHclTerraform(this._storageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
