// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFederatedupgradeNodelistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#coordinating_fortigate SystemFederatedupgradeNodelist#coordinating_fortigate}
  */
  readonly coordinatingFortigate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#device_name SystemFederatedupgradeNodelist#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#device_type SystemFederatedupgradeNodelist#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#id SystemFederatedupgradeNodelist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#maximum_minutes SystemFederatedupgradeNodelist#maximum_minutes}
  */
  readonly maximumMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#serial SystemFederatedupgradeNodelist#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#setup_time SystemFederatedupgradeNodelist#setup_time}
  */
  readonly setupTime?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#time SystemFederatedupgradeNodelist#time}
  */
  readonly time?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#timing SystemFederatedupgradeNodelist#timing}
  */
  readonly timing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#upgrade_path SystemFederatedupgradeNodelist#upgrade_path}
  */
  readonly upgradePath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist fmgdevice_system_federatedupgrade_nodelist}
*/
export class SystemFederatedupgradeNodelist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_federatedupgrade_nodelist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFederatedupgradeNodelist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFederatedupgradeNodelist to import
  * @param importFromId The id of the existing SystemFederatedupgradeNodelist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFederatedupgradeNodelist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_federatedupgrade_nodelist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_federatedupgrade_nodelist fmgdevice_system_federatedupgrade_nodelist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFederatedupgradeNodelistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFederatedupgradeNodelistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_federatedupgrade_nodelist',
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
    this._coordinatingFortigate = config.coordinatingFortigate;
    this._deviceName = config.deviceName;
    this._deviceType = config.deviceType;
    this._id = config.id;
    this._maximumMinutes = config.maximumMinutes;
    this._serial = config.serial;
    this._setupTime = config.setupTime;
    this._time = config.time;
    this._timing = config.timing;
    this._upgradePath = config.upgradePath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // coordinating_fortigate - computed: false, optional: true, required: false
  private _coordinatingFortigate?: string; 
  public get coordinatingFortigate() {
    return this.getStringAttribute('coordinating_fortigate');
  }
  public set coordinatingFortigate(value: string) {
    this._coordinatingFortigate = value;
  }
  public resetCoordinatingFortigate() {
    this._coordinatingFortigate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coordinatingFortigateInput() {
    return this._coordinatingFortigate;
  }

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

  // device_type - computed: true, optional: true, required: false
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  public resetDeviceType() {
    this._deviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
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

  // maximum_minutes - computed: true, optional: true, required: false
  private _maximumMinutes?: number; 
  public get maximumMinutes() {
    return this.getNumberAttribute('maximum_minutes');
  }
  public set maximumMinutes(value: number) {
    this._maximumMinutes = value;
  }
  public resetMaximumMinutes() {
    this._maximumMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumMinutesInput() {
    return this._maximumMinutes;
  }

  // serial - computed: false, optional: true, required: false
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // setup_time - computed: true, optional: true, required: false
  private _setupTime?: string[]; 
  public get setupTime() {
    return cdktf.Fn.tolist(this.getListAttribute('setup_time'));
  }
  public set setupTime(value: string[]) {
    this._setupTime = value;
  }
  public resetSetupTime() {
    this._setupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupTimeInput() {
    return this._setupTime;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string[]; 
  public get time() {
    return cdktf.Fn.tolist(this.getListAttribute('time'));
  }
  public set time(value: string[]) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // timing - computed: true, optional: true, required: false
  private _timing?: string; 
  public get timing() {
    return this.getStringAttribute('timing');
  }
  public set timing(value: string) {
    this._timing = value;
  }
  public resetTiming() {
    this._timing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timingInput() {
    return this._timing;
  }

  // upgrade_path - computed: false, optional: true, required: false
  private _upgradePath?: string; 
  public get upgradePath() {
    return this.getStringAttribute('upgrade_path');
  }
  public set upgradePath(value: string) {
    this._upgradePath = value;
  }
  public resetUpgradePath() {
    this._upgradePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradePathInput() {
    return this._upgradePath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      coordinating_fortigate: cdktf.stringToTerraform(this._coordinatingFortigate),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_type: cdktf.stringToTerraform(this._deviceType),
      id: cdktf.stringToTerraform(this._id),
      maximum_minutes: cdktf.numberToTerraform(this._maximumMinutes),
      serial: cdktf.stringToTerraform(this._serial),
      setup_time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._setupTime),
      time: cdktf.listMapper(cdktf.stringToTerraform, false)(this._time),
      timing: cdktf.stringToTerraform(this._timing),
      upgrade_path: cdktf.stringToTerraform(this._upgradePath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      coordinating_fortigate: {
        value: cdktf.stringToHclTerraform(this._coordinatingFortigate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
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
      maximum_minutes: {
        value: cdktf.numberToHclTerraform(this._maximumMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      setup_time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._setupTime),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      time: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._time),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timing: {
        value: cdktf.stringToHclTerraform(this._timing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upgrade_path: {
        value: cdktf.stringToHclTerraform(this._upgradePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
