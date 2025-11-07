// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystempDeviceProfileFortiguardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#adom SystempDeviceProfileFortiguard#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#auto_firmware_upgrade SystempDeviceProfileFortiguard#auto_firmware_upgrade}
  */
  readonly autoFirmwareUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#auto_firmware_upgrade_day SystempDeviceProfileFortiguard#auto_firmware_upgrade_day}
  */
  readonly autoFirmwareUpgradeDay?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#auto_firmware_upgrade_delay SystempDeviceProfileFortiguard#auto_firmware_upgrade_delay}
  */
  readonly autoFirmwareUpgradeDelay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#auto_firmware_upgrade_end_hour SystempDeviceProfileFortiguard#auto_firmware_upgrade_end_hour}
  */
  readonly autoFirmwareUpgradeEndHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#auto_firmware_upgrade_start_hour SystempDeviceProfileFortiguard#auto_firmware_upgrade_start_hour}
  */
  readonly autoFirmwareUpgradeStartHour?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#devprof SystempDeviceProfileFortiguard#devprof}
  */
  readonly devprof: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#id SystempDeviceProfileFortiguard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#scopetype SystempDeviceProfileFortiguard#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#target SystempDeviceProfileFortiguard#target}
  */
  readonly target?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#target_ip SystempDeviceProfileFortiguard#target_ip}
  */
  readonly targetIp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard fortimanager_systemp_device_profile_fortiguard}
*/
export class SystempDeviceProfileFortiguard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_systemp_device_profile_fortiguard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystempDeviceProfileFortiguard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystempDeviceProfileFortiguard to import
  * @param importFromId The id of the existing SystempDeviceProfileFortiguard that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystempDeviceProfileFortiguard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_systemp_device_profile_fortiguard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/systemp_device_profile_fortiguard fortimanager_systemp_device_profile_fortiguard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystempDeviceProfileFortiguardConfig
  */
  public constructor(scope: Construct, id: string, config: SystempDeviceProfileFortiguardConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_systemp_device_profile_fortiguard',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._autoFirmwareUpgrade = config.autoFirmwareUpgrade;
    this._autoFirmwareUpgradeDay = config.autoFirmwareUpgradeDay;
    this._autoFirmwareUpgradeDelay = config.autoFirmwareUpgradeDelay;
    this._autoFirmwareUpgradeEndHour = config.autoFirmwareUpgradeEndHour;
    this._autoFirmwareUpgradeStartHour = config.autoFirmwareUpgradeStartHour;
    this._devprof = config.devprof;
    this._id = config.id;
    this._scopetype = config.scopetype;
    this._target = config.target;
    this._targetIp = config.targetIp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auto_firmware_upgrade - computed: true, optional: true, required: false
  private _autoFirmwareUpgrade?: string; 
  public get autoFirmwareUpgrade() {
    return this.getStringAttribute('auto_firmware_upgrade');
  }
  public set autoFirmwareUpgrade(value: string) {
    this._autoFirmwareUpgrade = value;
  }
  public resetAutoFirmwareUpgrade() {
    this._autoFirmwareUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeInput() {
    return this._autoFirmwareUpgrade;
  }

  // auto_firmware_upgrade_day - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeDay?: string[]; 
  public get autoFirmwareUpgradeDay() {
    return cdktf.Fn.tolist(this.getListAttribute('auto_firmware_upgrade_day'));
  }
  public set autoFirmwareUpgradeDay(value: string[]) {
    this._autoFirmwareUpgradeDay = value;
  }
  public resetAutoFirmwareUpgradeDay() {
    this._autoFirmwareUpgradeDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeDayInput() {
    return this._autoFirmwareUpgradeDay;
  }

  // auto_firmware_upgrade_delay - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeDelay?: number; 
  public get autoFirmwareUpgradeDelay() {
    return this.getNumberAttribute('auto_firmware_upgrade_delay');
  }
  public set autoFirmwareUpgradeDelay(value: number) {
    this._autoFirmwareUpgradeDelay = value;
  }
  public resetAutoFirmwareUpgradeDelay() {
    this._autoFirmwareUpgradeDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeDelayInput() {
    return this._autoFirmwareUpgradeDelay;
  }

  // auto_firmware_upgrade_end_hour - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeEndHour?: number; 
  public get autoFirmwareUpgradeEndHour() {
    return this.getNumberAttribute('auto_firmware_upgrade_end_hour');
  }
  public set autoFirmwareUpgradeEndHour(value: number) {
    this._autoFirmwareUpgradeEndHour = value;
  }
  public resetAutoFirmwareUpgradeEndHour() {
    this._autoFirmwareUpgradeEndHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeEndHourInput() {
    return this._autoFirmwareUpgradeEndHour;
  }

  // auto_firmware_upgrade_start_hour - computed: true, optional: true, required: false
  private _autoFirmwareUpgradeStartHour?: number; 
  public get autoFirmwareUpgradeStartHour() {
    return this.getNumberAttribute('auto_firmware_upgrade_start_hour');
  }
  public set autoFirmwareUpgradeStartHour(value: number) {
    this._autoFirmwareUpgradeStartHour = value;
  }
  public resetAutoFirmwareUpgradeStartHour() {
    this._autoFirmwareUpgradeStartHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoFirmwareUpgradeStartHourInput() {
    return this._autoFirmwareUpgradeStartHour;
  }

  // devprof - computed: false, optional: false, required: true
  private _devprof?: string; 
  public get devprof() {
    return this.getStringAttribute('devprof');
  }
  public set devprof(value: string) {
    this._devprof = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devprofInput() {
    return this._devprof;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // target_ip - computed: false, optional: true, required: false
  private _targetIp?: string; 
  public get targetIp() {
    return this.getStringAttribute('target_ip');
  }
  public set targetIp(value: string) {
    this._targetIp = value;
  }
  public resetTargetIp() {
    this._targetIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIpInput() {
    return this._targetIp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      auto_firmware_upgrade: cdktf.stringToTerraform(this._autoFirmwareUpgrade),
      auto_firmware_upgrade_day: cdktf.listMapper(cdktf.stringToTerraform, false)(this._autoFirmwareUpgradeDay),
      auto_firmware_upgrade_delay: cdktf.numberToTerraform(this._autoFirmwareUpgradeDelay),
      auto_firmware_upgrade_end_hour: cdktf.numberToTerraform(this._autoFirmwareUpgradeEndHour),
      auto_firmware_upgrade_start_hour: cdktf.numberToTerraform(this._autoFirmwareUpgradeStartHour),
      devprof: cdktf.stringToTerraform(this._devprof),
      id: cdktf.stringToTerraform(this._id),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      target: cdktf.stringToTerraform(this._target),
      target_ip: cdktf.stringToTerraform(this._targetIp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_firmware_upgrade: {
        value: cdktf.stringToHclTerraform(this._autoFirmwareUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_firmware_upgrade_day: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._autoFirmwareUpgradeDay),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      auto_firmware_upgrade_delay: {
        value: cdktf.numberToHclTerraform(this._autoFirmwareUpgradeDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_firmware_upgrade_end_hour: {
        value: cdktf.numberToHclTerraform(this._autoFirmwareUpgradeEndHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_firmware_upgrade_start_hour: {
        value: cdktf.numberToHclTerraform(this._autoFirmwareUpgradeStartHour),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      devprof: {
        value: cdktf.stringToHclTerraform(this._devprof),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_ip: {
        value: cdktf.stringToHclTerraform(this._targetIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
