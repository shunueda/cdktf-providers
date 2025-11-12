// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeviceGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Device group category. Will be default/upgrade.. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#category DeviceGroup#category}
  */
  readonly category?: string;
  /**
  * Tenant. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#criteria_condn DeviceGroup#criteria_condn}
  */
  readonly criteriaCondn?: string;
  /**
  * Device Group Criteria. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#criteria_type DeviceGroup#criteria_type}
  */
  readonly criteriaType?: string;
  /**
  * Criteria Value. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#criteria_value DeviceGroup#criteria_value}
  */
  readonly criteriaValue?: string;
  /**
  * Device Family. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#device_family DeviceGroup#device_family}
  */
  readonly deviceFamily?: string;
  /**
  * Setting to disable agent upgrades.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#disable_upgrade DeviceGroup#disable_upgrade}
  */
  readonly disableUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Duration of Maintenance window for groups of category upgrade. Minimum value =  1 Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#duration DeviceGroup#duration}
  */
  readonly duration: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#id DeviceGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Upgrade Lock acquiring time. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#lock_acquire_time DeviceGroup#lock_acquire_time}
  */
  readonly lockAcquireTime?: string;
  /**
  * Upgrade Lock acquiring device. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#lock_acquiring_device DeviceGroup#lock_acquiring_device}
  */
  readonly lockAcquiringDevice?: string;
  /**
  * Maintenance window start time for groups of category upgrade. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#maintenance_window_start DeviceGroup#maintenance_window_start}
  */
  readonly maintenanceWindowStart?: string;
  /**
  * Device Group Name. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#name DeviceGroup#name}
  */
  readonly name: string;
  /**
  * Devices in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#static_device_list DeviceGroup#static_device_list}
  */
  readonly staticDeviceList?: string;
  /**
  * Static Device List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#static_device_list_arr DeviceGroup#static_device_list_arr}
  */
  readonly staticDeviceListArr?: string[];
  /**
  * Lock to be acquired before upgrading device group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#upgrade_lock DeviceGroup#upgrade_lock}
  */
  readonly upgradeLock?: boolean | cdktf.IResolvable;
  /**
  * New Available upgrade version for devices. Maximum length =  255
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#upgrade_version DeviceGroup#upgrade_version}
  */
  readonly upgradeVersion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group netscalersdx_device_group}
*/
export class DeviceGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_device_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeviceGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeviceGroup to import
  * @param importFromId The id of the existing DeviceGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeviceGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_device_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/device_group netscalersdx_device_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeviceGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DeviceGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_device_group',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._category = config.category;
    this._criteriaCondn = config.criteriaCondn;
    this._criteriaType = config.criteriaType;
    this._criteriaValue = config.criteriaValue;
    this._deviceFamily = config.deviceFamily;
    this._disableUpgrade = config.disableUpgrade;
    this._duration = config.duration;
    this._id = config.id;
    this._lockAcquireTime = config.lockAcquireTime;
    this._lockAcquiringDevice = config.lockAcquiringDevice;
    this._maintenanceWindowStart = config.maintenanceWindowStart;
    this._name = config.name;
    this._staticDeviceList = config.staticDeviceList;
    this._staticDeviceListArr = config.staticDeviceListArr;
    this._upgradeLock = config.upgradeLock;
    this._upgradeVersion = config.upgradeVersion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // category - computed: true, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // criteria_condn - computed: true, optional: true, required: false
  private _criteriaCondn?: string; 
  public get criteriaCondn() {
    return this.getStringAttribute('criteria_condn');
  }
  public set criteriaCondn(value: string) {
    this._criteriaCondn = value;
  }
  public resetCriteriaCondn() {
    this._criteriaCondn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaCondnInput() {
    return this._criteriaCondn;
  }

  // criteria_type - computed: true, optional: true, required: false
  private _criteriaType?: string; 
  public get criteriaType() {
    return this.getStringAttribute('criteria_type');
  }
  public set criteriaType(value: string) {
    this._criteriaType = value;
  }
  public resetCriteriaType() {
    this._criteriaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaTypeInput() {
    return this._criteriaType;
  }

  // criteria_value - computed: true, optional: true, required: false
  private _criteriaValue?: string; 
  public get criteriaValue() {
    return this.getStringAttribute('criteria_value');
  }
  public set criteriaValue(value: string) {
    this._criteriaValue = value;
  }
  public resetCriteriaValue() {
    this._criteriaValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaValueInput() {
    return this._criteriaValue;
  }

  // device_family - computed: true, optional: true, required: false
  private _deviceFamily?: string; 
  public get deviceFamily() {
    return this.getStringAttribute('device_family');
  }
  public set deviceFamily(value: string) {
    this._deviceFamily = value;
  }
  public resetDeviceFamily() {
    this._deviceFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFamilyInput() {
    return this._deviceFamily;
  }

  // disable_upgrade - computed: true, optional: true, required: false
  private _disableUpgrade?: boolean | cdktf.IResolvable; 
  public get disableUpgrade() {
    return this.getBooleanAttribute('disable_upgrade');
  }
  public set disableUpgrade(value: boolean | cdktf.IResolvable) {
    this._disableUpgrade = value;
  }
  public resetDisableUpgrade() {
    this._disableUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUpgradeInput() {
    return this._disableUpgrade;
  }

  // duration - computed: false, optional: false, required: true
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // lock_acquire_time - computed: true, optional: true, required: false
  private _lockAcquireTime?: string; 
  public get lockAcquireTime() {
    return this.getStringAttribute('lock_acquire_time');
  }
  public set lockAcquireTime(value: string) {
    this._lockAcquireTime = value;
  }
  public resetLockAcquireTime() {
    this._lockAcquireTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockAcquireTimeInput() {
    return this._lockAcquireTime;
  }

  // lock_acquiring_device - computed: true, optional: true, required: false
  private _lockAcquiringDevice?: string; 
  public get lockAcquiringDevice() {
    return this.getStringAttribute('lock_acquiring_device');
  }
  public set lockAcquiringDevice(value: string) {
    this._lockAcquiringDevice = value;
  }
  public resetLockAcquiringDevice() {
    this._lockAcquiringDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockAcquiringDeviceInput() {
    return this._lockAcquiringDevice;
  }

  // maintenance_window_start - computed: true, optional: true, required: false
  private _maintenanceWindowStart?: string; 
  public get maintenanceWindowStart() {
    return this.getStringAttribute('maintenance_window_start');
  }
  public set maintenanceWindowStart(value: string) {
    this._maintenanceWindowStart = value;
  }
  public resetMaintenanceWindowStart() {
    this._maintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartInput() {
    return this._maintenanceWindowStart;
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

  // static_device_list - computed: true, optional: true, required: false
  private _staticDeviceList?: string; 
  public get staticDeviceList() {
    return this.getStringAttribute('static_device_list');
  }
  public set staticDeviceList(value: string) {
    this._staticDeviceList = value;
  }
  public resetStaticDeviceList() {
    this._staticDeviceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDeviceListInput() {
    return this._staticDeviceList;
  }

  // static_device_list_arr - computed: false, optional: true, required: false
  private _staticDeviceListArr?: string[]; 
  public get staticDeviceListArr() {
    return cdktf.Fn.tolist(this.getListAttribute('static_device_list_arr'));
  }
  public set staticDeviceListArr(value: string[]) {
    this._staticDeviceListArr = value;
  }
  public resetStaticDeviceListArr() {
    this._staticDeviceListArr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticDeviceListArrInput() {
    return this._staticDeviceListArr;
  }

  // upgrade_lock - computed: true, optional: true, required: false
  private _upgradeLock?: boolean | cdktf.IResolvable; 
  public get upgradeLock() {
    return this.getBooleanAttribute('upgrade_lock');
  }
  public set upgradeLock(value: boolean | cdktf.IResolvable) {
    this._upgradeLock = value;
  }
  public resetUpgradeLock() {
    this._upgradeLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeLockInput() {
    return this._upgradeLock;
  }

  // upgrade_version - computed: true, optional: true, required: false
  private _upgradeVersion?: string; 
  public get upgradeVersion() {
    return this.getStringAttribute('upgrade_version');
  }
  public set upgradeVersion(value: string) {
    this._upgradeVersion = value;
  }
  public resetUpgradeVersion() {
    this._upgradeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeVersionInput() {
    return this._upgradeVersion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      category: cdktf.stringToTerraform(this._category),
      criteria_condn: cdktf.stringToTerraform(this._criteriaCondn),
      criteria_type: cdktf.stringToTerraform(this._criteriaType),
      criteria_value: cdktf.stringToTerraform(this._criteriaValue),
      device_family: cdktf.stringToTerraform(this._deviceFamily),
      disable_upgrade: cdktf.booleanToTerraform(this._disableUpgrade),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      lock_acquire_time: cdktf.stringToTerraform(this._lockAcquireTime),
      lock_acquiring_device: cdktf.stringToTerraform(this._lockAcquiringDevice),
      maintenance_window_start: cdktf.stringToTerraform(this._maintenanceWindowStart),
      name: cdktf.stringToTerraform(this._name),
      static_device_list: cdktf.stringToTerraform(this._staticDeviceList),
      static_device_list_arr: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticDeviceListArr),
      upgrade_lock: cdktf.booleanToTerraform(this._upgradeLock),
      upgrade_version: cdktf.stringToTerraform(this._upgradeVersion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      category: {
        value: cdktf.stringToHclTerraform(this._category),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria_condn: {
        value: cdktf.stringToHclTerraform(this._criteriaCondn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria_type: {
        value: cdktf.stringToHclTerraform(this._criteriaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      criteria_value: {
        value: cdktf.stringToHclTerraform(this._criteriaValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_family: {
        value: cdktf.stringToHclTerraform(this._deviceFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_upgrade: {
        value: cdktf.booleanToHclTerraform(this._disableUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      lock_acquire_time: {
        value: cdktf.stringToHclTerraform(this._lockAcquireTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lock_acquiring_device: {
        value: cdktf.stringToHclTerraform(this._lockAcquiringDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_start: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowStart),
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
      static_device_list: {
        value: cdktf.stringToHclTerraform(this._staticDeviceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_device_list_arr: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticDeviceListArr),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      upgrade_lock: {
        value: cdktf.booleanToHclTerraform(this._upgradeLock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upgrade_version: {
        value: cdktf.stringToHclTerraform(this._upgradeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
