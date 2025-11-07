// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutomationSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting#device_name AutomationSetting#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting#fabric_sync AutomationSetting#fabric_sync}
  */
  readonly fabricSync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting#id AutomationSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting#max_concurrent_stitches AutomationSetting#max_concurrent_stitches}
  */
  readonly maxConcurrentStitches?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting fmgdevice_automation_setting}
*/
export class AutomationSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_automation_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutomationSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutomationSetting to import
  * @param importFromId The id of the existing AutomationSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutomationSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_automation_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/automation_setting fmgdevice_automation_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutomationSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AutomationSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_automation_setting',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._fabricSync = config.fabricSync;
    this._id = config.id;
    this._maxConcurrentStitches = config.maxConcurrentStitches;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      fabric_sync: cdktf.stringToTerraform(this._fabricSync),
      id: cdktf.stringToTerraform(this._id),
      max_concurrent_stitches: cdktf.numberToTerraform(this._maxConcurrentStitches),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
