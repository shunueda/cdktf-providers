// https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerDiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disk descriptive name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk#name ServerDisk#name}
  */
  readonly name?: string;
  /**
  * Associated `glesys_server` id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk#serverid ServerDisk#serverid}
  */
  readonly serverid: string;
  /**
  * Disk size in GIB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk#size ServerDisk#size}
  */
  readonly size: number;
  /**
  * Disk type [gold|silver]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk#type ServerDisk#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk glesys_server_disk}
*/
export class ServerDisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "glesys_server_disk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServerDisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServerDisk to import
  * @param importFromId The id of the existing ServerDisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServerDisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "glesys_server_disk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/glesys/glesys/0.16.0/docs/resources/server_disk glesys_server_disk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerDiskConfig
  */
  public constructor(scope: Construct, id: string, config: ServerDiskConfig) {
    super(scope, id, {
      terraformResourceType: 'glesys_server_disk',
      terraformGeneratorMetadata: {
        providerName: 'glesys',
        providerVersion: '0.16.0',
        providerVersionConstraint: '0.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._serverid = config.serverid;
    this._size = config.size;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // scsiid - computed: true, optional: false, required: false
  public get scsiid() {
    return this.getNumberAttribute('scsiid');
  }

  // serverid - computed: false, optional: false, required: true
  private _serverid?: string; 
  public get serverid() {
    return this.getStringAttribute('serverid');
  }
  public set serverid(value: string) {
    this._serverid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serveridInput() {
    return this._serverid;
  }

  // size - computed: false, optional: false, required: true
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      serverid: cdktf.stringToTerraform(this._serverid),
      size: cdktf.numberToTerraform(this._size),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverid: {
        value: cdktf.stringToHclTerraform(this._serverid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
