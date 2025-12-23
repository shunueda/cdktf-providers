// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_mode_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerPrivateModeConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Copilot instance ID to associate with the Controller for Private Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_mode_config#copilot_instance_id ControllerPrivateModeConfig#copilot_instance_id}
  */
  readonly copilotInstanceId?: string;
  /**
  * Whether to enable Private Mode on the Controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_mode_config#enable_private_mode ControllerPrivateModeConfig#enable_private_mode}
  */
  readonly enablePrivateMode: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_mode_config#id ControllerPrivateModeConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_mode_config aviatrix_controller_private_mode_config}
*/
export class ControllerPrivateModeConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_controller_private_mode_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControllerPrivateModeConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControllerPrivateModeConfig to import
  * @param importFromId The id of the existing ControllerPrivateModeConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_mode_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControllerPrivateModeConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_controller_private_mode_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/controller_private_mode_config aviatrix_controller_private_mode_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerPrivateModeConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerPrivateModeConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_controller_private_mode_config',
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
    this._copilotInstanceId = config.copilotInstanceId;
    this._enablePrivateMode = config.enablePrivateMode;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // copilot_instance_id - computed: false, optional: true, required: false
  private _copilotInstanceId?: string; 
  public get copilotInstanceId() {
    return this.getStringAttribute('copilot_instance_id');
  }
  public set copilotInstanceId(value: string) {
    this._copilotInstanceId = value;
  }
  public resetCopilotInstanceId() {
    this._copilotInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get copilotInstanceIdInput() {
    return this._copilotInstanceId;
  }

  // enable_private_mode - computed: false, optional: false, required: true
  private _enablePrivateMode?: boolean | cdktf.IResolvable; 
  public get enablePrivateMode() {
    return this.getBooleanAttribute('enable_private_mode');
  }
  public set enablePrivateMode(value: boolean | cdktf.IResolvable) {
    this._enablePrivateMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePrivateModeInput() {
    return this._enablePrivateMode;
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
      copilot_instance_id: cdktf.stringToTerraform(this._copilotInstanceId),
      enable_private_mode: cdktf.booleanToTerraform(this._enablePrivateMode),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      copilot_instance_id: {
        value: cdktf.stringToHclTerraform(this._copilotInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_private_mode: {
        value: cdktf.booleanToHclTerraform(this._enablePrivateMode),
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
