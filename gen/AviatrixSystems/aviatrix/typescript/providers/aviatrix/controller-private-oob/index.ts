// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_oob
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerPrivateOobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Switch to enable/disable Aviatrix controller private OOB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_oob#enable_private_oob ControllerPrivateOob#enable_private_oob}
  */
  readonly enablePrivateOob?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_oob#id ControllerPrivateOob#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_oob aviatrix_controller_private_oob}
*/
export class ControllerPrivateOob extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_private_oob";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerPrivateOob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerPrivateOob to import
  * @param importFromId The id of the existing ControllerPrivateOob that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_oob#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerPrivateOob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_private_oob", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_oob aviatrix_controller_private_oob} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerPrivateOobConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ControllerPrivateOobConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_private_oob',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enablePrivateOob = config.enablePrivateOob;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_private_oob - computed: false, optional: true, required: false
  private _enablePrivateOob?: boolean | cdktf.IResolvable; 
  public get enablePrivateOob() {
    return this.getBooleanAttribute('enable_private_oob');
  }
  public set enablePrivateOob(value: boolean | cdktf.IResolvable) {
    this._enablePrivateOob = value;
  }
  public resetEnablePrivateOob() {
    this._enablePrivateOob = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateOobInput() {
    return this._enablePrivateOob;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_private_oob: cdktf.booleanToTerraform(this._enablePrivateOob),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_private_oob: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateOob),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
