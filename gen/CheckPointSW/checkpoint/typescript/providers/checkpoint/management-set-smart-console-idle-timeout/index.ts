// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_smart_console_idle_timeout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementSetSmartConsoleIdleTimeoutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Indicates whether to perform logout after being idle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_smart_console_idle_timeout#enabled ManagementSetSmartConsoleIdleTimeout#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_smart_console_idle_timeout#id ManagementSetSmartConsoleIdleTimeout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of minutes that the SmartConsole will automatically logout after being idle.<br>Updating the interval will take effect only on the next login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_smart_console_idle_timeout#timeout_duration ManagementSetSmartConsoleIdleTimeout#timeout_duration}
  */
  readonly timeoutDuration?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_smart_console_idle_timeout checkpoint_management_set_smart_console_idle_timeout}
*/
export class ManagementSetSmartConsoleIdleTimeout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_set_smart_console_idle_timeout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementSetSmartConsoleIdleTimeout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementSetSmartConsoleIdleTimeout to import
  * @param importFromId The id of the existing ManagementSetSmartConsoleIdleTimeout that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_smart_console_idle_timeout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementSetSmartConsoleIdleTimeout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_set_smart_console_idle_timeout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_set_smart_console_idle_timeout checkpoint_management_set_smart_console_idle_timeout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementSetSmartConsoleIdleTimeoutConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementSetSmartConsoleIdleTimeoutConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_set_smart_console_idle_timeout',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._id = config.id;
    this._timeoutDuration = config.timeoutDuration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // timeout_duration - computed: false, optional: true, required: false
  private _timeoutDuration?: number; 
  public get timeoutDuration() {
    return this.getNumberAttribute('timeout_duration');
  }
  public set timeoutDuration(value: number) {
    this._timeoutDuration = value;
  }
  public resetTimeoutDuration() {
    this._timeoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutDurationInput() {
    return this._timeoutDuration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      timeout_duration: cdktf.numberToTerraform(this._timeoutDuration),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      timeout_duration: {
        value: cdktf.numberToHclTerraform(this._timeoutDuration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
