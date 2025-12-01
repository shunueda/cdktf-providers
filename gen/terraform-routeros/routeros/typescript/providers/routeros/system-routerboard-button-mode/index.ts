// https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemRouterboardButtonModeConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode#___path___ SystemRouterboardButtonMode#___path___}
  */
  readonly path?: string;
  /**
  * An option to enable the operation of the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode#enabled SystemRouterboardButtonMode#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * An option to define the period within which the button should be pressed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode#hold_time SystemRouterboardButtonMode#hold_time}
  */
  readonly holdTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode#id SystemRouterboardButtonMode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An option to set the script that will be run upon pressing the button.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode#on_event SystemRouterboardButtonMode#on_event}
  */
  readonly onEvent?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode routeros_system_routerboard_button_mode}
*/
export class SystemRouterboardButtonMode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_routerboard_button_mode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemRouterboardButtonMode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemRouterboardButtonMode to import
  * @param importFromId The id of the existing SystemRouterboardButtonMode that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemRouterboardButtonMode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_routerboard_button_mode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.95.0/docs/resources/system_routerboard_button_mode routeros_system_routerboard_button_mode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemRouterboardButtonModeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemRouterboardButtonModeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_routerboard_button_mode',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.95.0',
        providerVersionConstraint: '1.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._enabled = config.enabled;
    this._holdTime = config.holdTime;
    this._id = config.id;
    this._onEvent = config.onEvent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: string; 
  public get holdTime() {
    return this.getStringAttribute('hold_time');
  }
  public set holdTime(value: string) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
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

  // on_event - computed: false, optional: true, required: false
  private _onEvent?: string; 
  public get onEvent() {
    return this.getStringAttribute('on_event');
  }
  public set onEvent(value: string) {
    this._onEvent = value;
  }
  public resetOnEvent() {
    this._onEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onEventInput() {
    return this._onEvent;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hold_time: cdktf.stringToTerraform(this._holdTime),
      id: cdktf.stringToTerraform(this._id),
      on_event: cdktf.stringToTerraform(this._onEvent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hold_time: {
        value: cdktf.stringToHclTerraform(this._holdTime),
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
      on_event: {
        value: cdktf.stringToHclTerraform(this._onEvent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
