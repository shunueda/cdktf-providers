// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDeviceupgradeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#allow_download SystemDeviceupgrade#allow_download}
  */
  readonly allowDownload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#device_type SystemDeviceupgrade#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#dynamic_sort_subtable SystemDeviceupgrade#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#failure_reason SystemDeviceupgrade#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#get_all_tables SystemDeviceupgrade#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#ha_reboot_controller SystemDeviceupgrade#ha_reboot_controller}
  */
  readonly haRebootController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#id SystemDeviceupgrade#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#initial_version SystemDeviceupgrade#initial_version}
  */
  readonly initialVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#maximum_minutes SystemDeviceupgrade#maximum_minutes}
  */
  readonly maximumMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#next_path_index SystemDeviceupgrade#next_path_index}
  */
  readonly nextPathIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#serial SystemDeviceupgrade#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#setup_time SystemDeviceupgrade#setup_time}
  */
  readonly setupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#starter_admin SystemDeviceupgrade#starter_admin}
  */
  readonly starterAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#status SystemDeviceupgrade#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#time SystemDeviceupgrade#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#timing SystemDeviceupgrade#timing}
  */
  readonly timing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#upgrade_path SystemDeviceupgrade#upgrade_path}
  */
  readonly upgradePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#vdom SystemDeviceupgrade#vdom}
  */
  readonly vdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#vdomparam SystemDeviceupgrade#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * known_ha_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#known_ha_members SystemDeviceupgrade#known_ha_members}
  */
  readonly knownHaMembers?: SystemDeviceupgradeKnownHaMembers[] | cdktf.IResolvable;
}
export interface SystemDeviceupgradeKnownHaMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#serial SystemDeviceupgrade#serial}
  */
  readonly serial?: string;
}

export function systemDeviceupgradeKnownHaMembersToTerraform(struct?: SystemDeviceupgradeKnownHaMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function systemDeviceupgradeKnownHaMembersToHclTerraform(struct?: SystemDeviceupgradeKnownHaMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemDeviceupgradeKnownHaMembersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemDeviceupgradeKnownHaMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemDeviceupgradeKnownHaMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serial = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serial = value.serial;
    }
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
}

export class SystemDeviceupgradeKnownHaMembersList extends cdktf.ComplexList {
  public internalValue? : SystemDeviceupgradeKnownHaMembers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SystemDeviceupgradeKnownHaMembersOutputReference {
    return new SystemDeviceupgradeKnownHaMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade fortios_system_deviceupgrade}
*/
export class SystemDeviceupgrade extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_deviceupgrade";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDeviceupgrade resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDeviceupgrade to import
  * @param importFromId The id of the existing SystemDeviceupgrade that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDeviceupgrade to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_deviceupgrade", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_deviceupgrade fortios_system_deviceupgrade} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDeviceupgradeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemDeviceupgradeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_deviceupgrade',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDownload = config.allowDownload;
    this._deviceType = config.deviceType;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failureReason = config.failureReason;
    this._getAllTables = config.fetchAllTables;
    this._haRebootController = config.haRebootController;
    this._id = config.id;
    this._initialVersion = config.initialVersion;
    this._maximumMinutes = config.maximumMinutes;
    this._nextPathIndex = config.nextPathIndex;
    this._serial = config.serial;
    this._setupTime = config.setupTime;
    this._starterAdmin = config.starterAdmin;
    this._status = config.status;
    this._time = config.time;
    this._timing = config.timing;
    this._upgradePath = config.upgradePath;
    this._vdom = config.vdom;
    this._vdomparam = config.vdomparam;
    this._knownHaMembers.internalValue = config.knownHaMembers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_download - computed: true, optional: true, required: false
  private _allowDownload?: string; 
  public get allowDownload() {
    return this.getStringAttribute('allow_download');
  }
  public set allowDownload(value: string) {
    this._allowDownload = value;
  }
  public resetAllowDownload() {
    this._allowDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDownloadInput() {
    return this._allowDownload;
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

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // failure_reason - computed: true, optional: true, required: false
  private _failureReason?: string; 
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }
  public set failureReason(value: string) {
    this._failureReason = value;
  }
  public resetFailureReason() {
    this._failureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureReasonInput() {
    return this._failureReason;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
  }

  // ha_reboot_controller - computed: false, optional: true, required: false
  private _haRebootController?: string; 
  public get haRebootController() {
    return this.getStringAttribute('ha_reboot_controller');
  }
  public set haRebootController(value: string) {
    this._haRebootController = value;
  }
  public resetHaRebootController() {
    this._haRebootController = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haRebootControllerInput() {
    return this._haRebootController;
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

  // initial_version - computed: true, optional: true, required: false
  private _initialVersion?: string; 
  public get initialVersion() {
    return this.getStringAttribute('initial_version');
  }
  public set initialVersion(value: string) {
    this._initialVersion = value;
  }
  public resetInitialVersion() {
    this._initialVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialVersionInput() {
    return this._initialVersion;
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

  // next_path_index - computed: false, optional: true, required: false
  private _nextPathIndex?: number; 
  public get nextPathIndex() {
    return this.getNumberAttribute('next_path_index');
  }
  public set nextPathIndex(value: number) {
    this._nextPathIndex = value;
  }
  public resetNextPathIndex() {
    this._nextPathIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextPathIndexInput() {
    return this._nextPathIndex;
  }

  // serial - computed: true, optional: true, required: false
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
  private _setupTime?: string; 
  public get setupTime() {
    return this.getStringAttribute('setup_time');
  }
  public set setupTime(value: string) {
    this._setupTime = value;
  }
  public resetSetupTime() {
    this._setupTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setupTimeInput() {
    return this._setupTime;
  }

  // starter_admin - computed: false, optional: true, required: false
  private _starterAdmin?: string; 
  public get starterAdmin() {
    return this.getStringAttribute('starter_admin');
  }
  public set starterAdmin(value: string) {
    this._starterAdmin = value;
  }
  public resetStarterAdmin() {
    this._starterAdmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starterAdminInput() {
    return this._starterAdmin;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
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

  // known_ha_members - computed: false, optional: true, required: false
  private _knownHaMembers = new SystemDeviceupgradeKnownHaMembersList(this, "known_ha_members", false);
  public get knownHaMembers() {
    return this._knownHaMembers;
  }
  public putKnownHaMembers(value: SystemDeviceupgradeKnownHaMembers[] | cdktf.IResolvable) {
    this._knownHaMembers.internalValue = value;
  }
  public resetKnownHaMembers() {
    this._knownHaMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownHaMembersInput() {
    return this._knownHaMembers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_download: cdktf.stringToTerraform(this._allowDownload),
      device_type: cdktf.stringToTerraform(this._deviceType),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      failure_reason: cdktf.stringToTerraform(this._failureReason),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      ha_reboot_controller: cdktf.stringToTerraform(this._haRebootController),
      id: cdktf.stringToTerraform(this._id),
      initial_version: cdktf.stringToTerraform(this._initialVersion),
      maximum_minutes: cdktf.numberToTerraform(this._maximumMinutes),
      next_path_index: cdktf.numberToTerraform(this._nextPathIndex),
      serial: cdktf.stringToTerraform(this._serial),
      setup_time: cdktf.stringToTerraform(this._setupTime),
      starter_admin: cdktf.stringToTerraform(this._starterAdmin),
      status: cdktf.stringToTerraform(this._status),
      time: cdktf.stringToTerraform(this._time),
      timing: cdktf.stringToTerraform(this._timing),
      upgrade_path: cdktf.stringToTerraform(this._upgradePath),
      vdom: cdktf.stringToTerraform(this._vdom),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      known_ha_members: cdktf.listMapper(systemDeviceupgradeKnownHaMembersToTerraform, true)(this._knownHaMembers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_download: {
        value: cdktf.stringToHclTerraform(this._allowDownload),
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
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_reason: {
        value: cdktf.stringToHclTerraform(this._failureReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_reboot_controller: {
        value: cdktf.stringToHclTerraform(this._haRebootController),
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
      initial_version: {
        value: cdktf.stringToHclTerraform(this._initialVersion),
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
      next_path_index: {
        value: cdktf.numberToHclTerraform(this._nextPathIndex),
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
        value: cdktf.stringToHclTerraform(this._setupTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      starter_admin: {
        value: cdktf.stringToHclTerraform(this._starterAdmin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
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
      known_ha_members: {
        value: cdktf.listMapperHcl(systemDeviceupgradeKnownHaMembersToHclTerraform, true)(this._knownHaMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemDeviceupgradeKnownHaMembersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
