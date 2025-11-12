// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting#fabric_sync AutomationSetting#fabric_sync}
  */
  readonly fabricSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting#id AutomationSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting#max_concurrent_stitches AutomationSetting#max_concurrent_stitches}
  */
  readonly maxConcurrentStitches?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting#secure_mode AutomationSetting#secure_mode}
  */
  readonly secureMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting#vdomparam AutomationSetting#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting fortios_automation_setting}
*/
export class AutomationSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_automation_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationSetting to import
  * @param importFromId The id of the existing AutomationSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_automation_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/automation_setting fortios_automation_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AutomationSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_automation_setting',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fabricSync = config.fabricSync;
    this._id = config.id;
    this._maxConcurrentStitches = config.maxConcurrentStitches;
    this._secureMode = config.secureMode;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fabric_sync - computed: true, optional: true, required: false
  private _fabricSync?: string; 
  public get fabricSync() {
    return this.getStringAttribute('fabric_sync');
  }
  public set fabricSync(value: string) {
    this._fabricSync = value;
  }
  public resetFabricSync() {
    this._fabricSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fabricSyncInput() {
    return this._fabricSync;
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

  // max_concurrent_stitches - computed: true, optional: true, required: false
  private _maxConcurrentStitches?: number; 
  public get maxConcurrentStitches() {
    return this.getNumberAttribute('max_concurrent_stitches');
  }
  public set maxConcurrentStitches(value: number) {
    this._maxConcurrentStitches = value;
  }
  public resetMaxConcurrentStitches() {
    this._maxConcurrentStitches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStitchesInput() {
    return this._maxConcurrentStitches;
  }

  // secure_mode - computed: true, optional: true, required: false
  private _secureMode?: string; 
  public get secureMode() {
    return this.getStringAttribute('secure_mode');
  }
  public set secureMode(value: string) {
    this._secureMode = value;
  }
  public resetSecureMode() {
    this._secureMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secureModeInput() {
    return this._secureMode;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fabric_sync: cdktf.stringToTerraform(this._fabricSync),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_stitches: cdktf.numberToTerraform(this._maxConcurrentStitches),
      secure_mode: cdktf.stringToTerraform(this._secureMode),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fabric_sync: {
        value: cdktf.stringToHclTerraform(this._fabricSync),
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
      max_concurrent_stitches: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentStitches),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secure_mode: {
        value: cdktf.stringToHclTerraform(this._secureMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
