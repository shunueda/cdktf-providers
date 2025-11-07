// https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIgnitionGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group#gid DataIgnitionGroup#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group#id DataIgnitionGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group#name DataIgnitionGroup#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group#password_hash DataIgnitionGroup#password_hash}
  */
  readonly passwordHash?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group ignition_group}
*/
export class DataIgnitionGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ignition_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIgnitionGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIgnitionGroup to import
  * @param importFromId The id of the existing DataIgnitionGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIgnitionGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ignition_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/andrewchubatiuk/ignition/0.0.1/docs/data-sources/group ignition_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIgnitionGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DataIgnitionGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ignition_group',
      terraformGeneratorMetadata: {
        providerName: 'ignition',
        providerVersion: '0.0.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gid = config.gid;
    this._id = config.id;
    this._name = config.name;
    this._passwordHash = config.passwordHash;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password_hash - computed: false, optional: true, required: false
  private _passwordHash?: string; 
  public get passwordHash() {
    return this.getStringAttribute('password_hash');
  }
  public set passwordHash(value: string) {
    this._passwordHash = value;
  }
  public resetPasswordHash() {
    this._passwordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash;
  }

  // rendered - computed: true, optional: false, required: false
  public get rendered() {
    return this.getStringAttribute('rendered');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gid: cdktf.numberToTerraform(this._gid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      password_hash: cdktf.stringToTerraform(this._passwordHash),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gid: {
        value: cdktf.numberToHclTerraform(this._gid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      password_hash: {
        value: cdktf.stringToHclTerraform(this._passwordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
