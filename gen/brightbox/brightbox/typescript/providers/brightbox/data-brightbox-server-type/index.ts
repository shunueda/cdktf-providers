// https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/server_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBrightboxServerTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique handle for this server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/server_type#handle DataBrightboxServerType#handle}
  */
  readonly handle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/server_type#id DataBrightboxServerType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of this server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/server_type#name DataBrightboxServerType#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/server_type brightbox_server_type}
*/
export class DataBrightboxServerType extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "brightbox_server_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBrightboxServerType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBrightboxServerType to import
  * @param importFromId The id of the existing DataBrightboxServerType that should be imported. Refer to the {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/server_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBrightboxServerType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "brightbox_server_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/brightbox/brightbox/3.4.3/docs/data-sources/server_type brightbox_server_type} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBrightboxServerTypeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBrightboxServerTypeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'brightbox_server_type',
      terraformGeneratorMetadata: {
        providerName: 'brightbox',
        providerVersion: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._handle = config.handle;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cores - computed: true, optional: false, required: false
  public get cores() {
    return this.getNumberAttribute('cores');
  }

  // disk_size - computed: true, optional: false, required: false
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }

  // handle - computed: true, optional: true, required: false
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  public resetHandle() {
    this._handle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
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

  // ram - computed: true, optional: false, required: false
  public get ram() {
    return this.getNumberAttribute('ram');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
