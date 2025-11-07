// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelesscontrollerSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#account_id WirelesscontrollerSetting#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#country WirelesscontrollerSetting#country}
  */
  readonly country?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#darrp_optimize WirelesscontrollerSetting#darrp_optimize}
  */
  readonly darrpOptimize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#device_holdoff WirelesscontrollerSetting#device_holdoff}
  */
  readonly deviceHoldoff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#device_idle WirelesscontrollerSetting#device_idle}
  */
  readonly deviceIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#device_weight WirelesscontrollerSetting#device_weight}
  */
  readonly deviceWeight?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#duplicate_ssid WirelesscontrollerSetting#duplicate_ssid}
  */
  readonly duplicateSsid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#dynamic_sort_subtable WirelesscontrollerSetting#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#fake_ssid_action WirelesscontrollerSetting#fake_ssid_action}
  */
  readonly fakeSsidAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#fapc_compatibility WirelesscontrollerSetting#fapc_compatibility}
  */
  readonly fapcCompatibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#firmware_provision_on_authorization WirelesscontrollerSetting#firmware_provision_on_authorization}
  */
  readonly firmwareProvisionOnAuthorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#get_all_tables WirelesscontrollerSetting#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#id WirelesscontrollerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#phishing_ssid_detect WirelesscontrollerSetting#phishing_ssid_detect}
  */
  readonly phishingSsidDetect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#rolling_wtp_upgrade WirelesscontrollerSetting#rolling_wtp_upgrade}
  */
  readonly rollingWtpUpgrade?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#vdomparam WirelesscontrollerSetting#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#wfa_compatibility WirelesscontrollerSetting#wfa_compatibility}
  */
  readonly wfaCompatibility?: string;
  /**
  * darrp_optimize_schedules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#darrp_optimize_schedules WirelesscontrollerSetting#darrp_optimize_schedules}
  */
  readonly darrpOptimizeSchedules?: WirelesscontrollerSettingDarrpOptimizeSchedules[] | cdktf.IResolvable;
  /**
  * offending_ssid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#offending_ssid WirelesscontrollerSetting#offending_ssid}
  */
  readonly offendingSsid?: WirelesscontrollerSettingOffendingSsid[] | cdktf.IResolvable;
}
export interface WirelesscontrollerSettingDarrpOptimizeSchedules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#name WirelesscontrollerSetting#name}
  */
  readonly name?: string;
}

export function wirelesscontrollerSettingDarrpOptimizeSchedulesToTerraform(struct?: WirelesscontrollerSettingDarrpOptimizeSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function wirelesscontrollerSettingDarrpOptimizeSchedulesToHclTerraform(struct?: WirelesscontrollerSettingDarrpOptimizeSchedules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerSettingDarrpOptimizeSchedulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerSettingDarrpOptimizeSchedules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerSettingDarrpOptimizeSchedules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}

export class WirelesscontrollerSettingDarrpOptimizeSchedulesList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerSettingDarrpOptimizeSchedules[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerSettingDarrpOptimizeSchedulesOutputReference {
    return new WirelesscontrollerSettingDarrpOptimizeSchedulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WirelesscontrollerSettingOffendingSsid {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#action WirelesscontrollerSetting#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#id WirelesscontrollerSetting#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#ssid_pattern WirelesscontrollerSetting#ssid_pattern}
  */
  readonly ssidPattern?: string;
}

export function wirelesscontrollerSettingOffendingSsidToTerraform(struct?: WirelesscontrollerSettingOffendingSsid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    id: cdktf.numberToTerraform(struct!.id),
    ssid_pattern: cdktf.stringToTerraform(struct!.ssidPattern),
  }
}


export function wirelesscontrollerSettingOffendingSsidToHclTerraform(struct?: WirelesscontrollerSettingOffendingSsid | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssid_pattern: {
      value: cdktf.stringToHclTerraform(struct!.ssidPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelesscontrollerSettingOffendingSsidOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelesscontrollerSettingOffendingSsid | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ssidPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssidPattern = this._ssidPattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelesscontrollerSettingOffendingSsid | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._id = undefined;
      this._ssidPattern = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._id = value.id;
      this._ssidPattern = value.ssidPattern;
    }
  }

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // ssid_pattern - computed: false, optional: true, required: false
  private _ssidPattern?: string; 
  public get ssidPattern() {
    return this.getStringAttribute('ssid_pattern');
  }
  public set ssidPattern(value: string) {
    this._ssidPattern = value;
  }
  public resetSsidPattern() {
    this._ssidPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidPatternInput() {
    return this._ssidPattern;
  }
}

export class WirelesscontrollerSettingOffendingSsidList extends cdktf.ComplexList {
  public internalValue? : WirelesscontrollerSettingOffendingSsid[] | cdktf.IResolvable

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
  public get(index: number): WirelesscontrollerSettingOffendingSsidOutputReference {
    return new WirelesscontrollerSettingOffendingSsidOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting fortios_wirelesscontroller_setting}
*/
export class WirelesscontrollerSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_wirelesscontroller_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelesscontrollerSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelesscontrollerSetting to import
  * @param importFromId The id of the existing WirelesscontrollerSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelesscontrollerSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_wirelesscontroller_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/wirelesscontroller_setting fortios_wirelesscontroller_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelesscontrollerSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WirelesscontrollerSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_wirelesscontroller_setting',
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
    this._accountId = config.accountId;
    this._country = config.country;
    this._darrpOptimize = config.darrpOptimize;
    this._deviceHoldoff = config.deviceHoldoff;
    this._deviceIdle = config.deviceIdle;
    this._deviceWeight = config.deviceWeight;
    this._duplicateSsid = config.duplicateSsid;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fakeSsidAction = config.fakeSsidAction;
    this._fapcCompatibility = config.fapcCompatibility;
    this._firmwareProvisionOnAuthorization = config.firmwareProvisionOnAuthorization;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._phishingSsidDetect = config.phishingSsidDetect;
    this._rollingWtpUpgrade = config.rollingWtpUpgrade;
    this._vdomparam = config.vdomparam;
    this._wfaCompatibility = config.wfaCompatibility;
    this._darrpOptimizeSchedules.internalValue = config.darrpOptimizeSchedules;
    this._offendingSsid.internalValue = config.offendingSsid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // country - computed: true, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // darrp_optimize - computed: true, optional: true, required: false
  private _darrpOptimize?: number; 
  public get darrpOptimize() {
    return this.getNumberAttribute('darrp_optimize');
  }
  public set darrpOptimize(value: number) {
    this._darrpOptimize = value;
  }
  public resetDarrpOptimize() {
    this._darrpOptimize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpOptimizeInput() {
    return this._darrpOptimize;
  }

  // device_holdoff - computed: true, optional: true, required: false
  private _deviceHoldoff?: number; 
  public get deviceHoldoff() {
    return this.getNumberAttribute('device_holdoff');
  }
  public set deviceHoldoff(value: number) {
    this._deviceHoldoff = value;
  }
  public resetDeviceHoldoff() {
    this._deviceHoldoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceHoldoffInput() {
    return this._deviceHoldoff;
  }

  // device_idle - computed: true, optional: true, required: false
  private _deviceIdle?: number; 
  public get deviceIdle() {
    return this.getNumberAttribute('device_idle');
  }
  public set deviceIdle(value: number) {
    this._deviceIdle = value;
  }
  public resetDeviceIdle() {
    this._deviceIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdleInput() {
    return this._deviceIdle;
  }

  // device_weight - computed: true, optional: true, required: false
  private _deviceWeight?: number; 
  public get deviceWeight() {
    return this.getNumberAttribute('device_weight');
  }
  public set deviceWeight(value: number) {
    this._deviceWeight = value;
  }
  public resetDeviceWeight() {
    this._deviceWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceWeightInput() {
    return this._deviceWeight;
  }

  // duplicate_ssid - computed: true, optional: true, required: false
  private _duplicateSsid?: string; 
  public get duplicateSsid() {
    return this.getStringAttribute('duplicate_ssid');
  }
  public set duplicateSsid(value: string) {
    this._duplicateSsid = value;
  }
  public resetDuplicateSsid() {
    this._duplicateSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateSsidInput() {
    return this._duplicateSsid;
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

  // fake_ssid_action - computed: true, optional: true, required: false
  private _fakeSsidAction?: string; 
  public get fakeSsidAction() {
    return this.getStringAttribute('fake_ssid_action');
  }
  public set fakeSsidAction(value: string) {
    this._fakeSsidAction = value;
  }
  public resetFakeSsidAction() {
    this._fakeSsidAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fakeSsidActionInput() {
    return this._fakeSsidAction;
  }

  // fapc_compatibility - computed: true, optional: true, required: false
  private _fapcCompatibility?: string; 
  public get fapcCompatibility() {
    return this.getStringAttribute('fapc_compatibility');
  }
  public set fapcCompatibility(value: string) {
    this._fapcCompatibility = value;
  }
  public resetFapcCompatibility() {
    this._fapcCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fapcCompatibilityInput() {
    return this._fapcCompatibility;
  }

  // firmware_provision_on_authorization - computed: true, optional: true, required: false
  private _firmwareProvisionOnAuthorization?: string; 
  public get firmwareProvisionOnAuthorization() {
    return this.getStringAttribute('firmware_provision_on_authorization');
  }
  public set firmwareProvisionOnAuthorization(value: string) {
    this._firmwareProvisionOnAuthorization = value;
  }
  public resetFirmwareProvisionOnAuthorization() {
    this._firmwareProvisionOnAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareProvisionOnAuthorizationInput() {
    return this._firmwareProvisionOnAuthorization;
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

  // phishing_ssid_detect - computed: true, optional: true, required: false
  private _phishingSsidDetect?: string; 
  public get phishingSsidDetect() {
    return this.getStringAttribute('phishing_ssid_detect');
  }
  public set phishingSsidDetect(value: string) {
    this._phishingSsidDetect = value;
  }
  public resetPhishingSsidDetect() {
    this._phishingSsidDetect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phishingSsidDetectInput() {
    return this._phishingSsidDetect;
  }

  // rolling_wtp_upgrade - computed: true, optional: true, required: false
  private _rollingWtpUpgrade?: string; 
  public get rollingWtpUpgrade() {
    return this.getStringAttribute('rolling_wtp_upgrade');
  }
  public set rollingWtpUpgrade(value: string) {
    this._rollingWtpUpgrade = value;
  }
  public resetRollingWtpUpgrade() {
    this._rollingWtpUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingWtpUpgradeInput() {
    return this._rollingWtpUpgrade;
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

  // wfa_compatibility - computed: true, optional: true, required: false
  private _wfaCompatibility?: string; 
  public get wfaCompatibility() {
    return this.getStringAttribute('wfa_compatibility');
  }
  public set wfaCompatibility(value: string) {
    this._wfaCompatibility = value;
  }
  public resetWfaCompatibility() {
    this._wfaCompatibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wfaCompatibilityInput() {
    return this._wfaCompatibility;
  }

  // darrp_optimize_schedules - computed: false, optional: true, required: false
  private _darrpOptimizeSchedules = new WirelesscontrollerSettingDarrpOptimizeSchedulesList(this, "darrp_optimize_schedules", true);
  public get darrpOptimizeSchedules() {
    return this._darrpOptimizeSchedules;
  }
  public putDarrpOptimizeSchedules(value: WirelesscontrollerSettingDarrpOptimizeSchedules[] | cdktf.IResolvable) {
    this._darrpOptimizeSchedules.internalValue = value;
  }
  public resetDarrpOptimizeSchedules() {
    this._darrpOptimizeSchedules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get darrpOptimizeSchedulesInput() {
    return this._darrpOptimizeSchedules.internalValue;
  }

  // offending_ssid - computed: false, optional: true, required: false
  private _offendingSsid = new WirelesscontrollerSettingOffendingSsidList(this, "offending_ssid", false);
  public get offendingSsid() {
    return this._offendingSsid;
  }
  public putOffendingSsid(value: WirelesscontrollerSettingOffendingSsid[] | cdktf.IResolvable) {
    this._offendingSsid.internalValue = value;
  }
  public resetOffendingSsid() {
    this._offendingSsid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offendingSsidInput() {
    return this._offendingSsid.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      country: cdktf.stringToTerraform(this._country),
      darrp_optimize: cdktf.numberToTerraform(this._darrpOptimize),
      device_holdoff: cdktf.numberToTerraform(this._deviceHoldoff),
      device_idle: cdktf.numberToTerraform(this._deviceIdle),
      device_weight: cdktf.numberToTerraform(this._deviceWeight),
      duplicate_ssid: cdktf.stringToTerraform(this._duplicateSsid),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fake_ssid_action: cdktf.stringToTerraform(this._fakeSsidAction),
      fapc_compatibility: cdktf.stringToTerraform(this._fapcCompatibility),
      firmware_provision_on_authorization: cdktf.stringToTerraform(this._firmwareProvisionOnAuthorization),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      phishing_ssid_detect: cdktf.stringToTerraform(this._phishingSsidDetect),
      rolling_wtp_upgrade: cdktf.stringToTerraform(this._rollingWtpUpgrade),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      wfa_compatibility: cdktf.stringToTerraform(this._wfaCompatibility),
      darrp_optimize_schedules: cdktf.listMapper(wirelesscontrollerSettingDarrpOptimizeSchedulesToTerraform, true)(this._darrpOptimizeSchedules.internalValue),
      offending_ssid: cdktf.listMapper(wirelesscontrollerSettingOffendingSsidToTerraform, true)(this._offendingSsid.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      darrp_optimize: {
        value: cdktf.numberToHclTerraform(this._darrpOptimize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_holdoff: {
        value: cdktf.numberToHclTerraform(this._deviceHoldoff),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_idle: {
        value: cdktf.numberToHclTerraform(this._deviceIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_weight: {
        value: cdktf.numberToHclTerraform(this._deviceWeight),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duplicate_ssid: {
        value: cdktf.stringToHclTerraform(this._duplicateSsid),
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
      fake_ssid_action: {
        value: cdktf.stringToHclTerraform(this._fakeSsidAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fapc_compatibility: {
        value: cdktf.stringToHclTerraform(this._fapcCompatibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firmware_provision_on_authorization: {
        value: cdktf.stringToHclTerraform(this._firmwareProvisionOnAuthorization),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phishing_ssid_detect: {
        value: cdktf.stringToHclTerraform(this._phishingSsidDetect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rolling_wtp_upgrade: {
        value: cdktf.stringToHclTerraform(this._rollingWtpUpgrade),
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
      wfa_compatibility: {
        value: cdktf.stringToHclTerraform(this._wfaCompatibility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      darrp_optimize_schedules: {
        value: cdktf.listMapperHcl(wirelesscontrollerSettingDarrpOptimizeSchedulesToHclTerraform, true)(this._darrpOptimizeSchedules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "WirelesscontrollerSettingDarrpOptimizeSchedulesList",
      },
      offending_ssid: {
        value: cdktf.listMapperHcl(wirelesscontrollerSettingOffendingSsidToHclTerraform, true)(this._offendingSsid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelesscontrollerSettingOffendingSsidList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
