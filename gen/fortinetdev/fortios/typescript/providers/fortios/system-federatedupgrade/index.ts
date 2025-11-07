// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemFederatedupgradeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#dynamic_sort_subtable SystemFederatedupgrade#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#failure_device SystemFederatedupgrade#failure_device}
  */
  readonly failureDevice?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#failure_reason SystemFederatedupgrade#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#get_all_tables SystemFederatedupgrade#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#ha_reboot_controller SystemFederatedupgrade#ha_reboot_controller}
  */
  readonly haRebootController?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#id SystemFederatedupgrade#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#ignore_signing_errors SystemFederatedupgrade#ignore_signing_errors}
  */
  readonly ignoreSigningErrors?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#initial_version SystemFederatedupgrade#initial_version}
  */
  readonly initialVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#next_path_index SystemFederatedupgrade#next_path_index}
  */
  readonly nextPathIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#source SystemFederatedupgrade#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#starter_admin SystemFederatedupgrade#starter_admin}
  */
  readonly starterAdmin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#status SystemFederatedupgrade#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#upgrade_id SystemFederatedupgrade#upgrade_id}
  */
  readonly upgradeId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#vdomparam SystemFederatedupgrade#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * known_ha_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#known_ha_members SystemFederatedupgrade#known_ha_members}
  */
  readonly knownHaMembers?: SystemFederatedupgradeKnownHaMembers[] | cdktf.IResolvable;
  /**
  * node_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#node_list SystemFederatedupgrade#node_list}
  */
  readonly nodeList?: SystemFederatedupgradeNodeListStruct[] | cdktf.IResolvable;
}
export interface SystemFederatedupgradeKnownHaMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#serial SystemFederatedupgrade#serial}
  */
  readonly serial?: string;
}

export function systemFederatedupgradeKnownHaMembersToTerraform(struct?: SystemFederatedupgradeKnownHaMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    serial: cdktf.stringToTerraform(struct!.serial),
  }
}


export function systemFederatedupgradeKnownHaMembersToHclTerraform(struct?: SystemFederatedupgradeKnownHaMembers | cdktf.IResolvable): any {
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

export class SystemFederatedupgradeKnownHaMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemFederatedupgradeKnownHaMembers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SystemFederatedupgradeKnownHaMembers | cdktf.IResolvable | undefined) {
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

export class SystemFederatedupgradeKnownHaMembersList extends cdktf.ComplexList {
  public internalValue? : SystemFederatedupgradeKnownHaMembers[] | cdktf.IResolvable

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
  public get(index: number): SystemFederatedupgradeKnownHaMembersOutputReference {
    return new SystemFederatedupgradeKnownHaMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemFederatedupgradeNodeListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#allow_download SystemFederatedupgrade#allow_download}
  */
  readonly allowDownload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#coordinating_fortigate SystemFederatedupgrade#coordinating_fortigate}
  */
  readonly coordinatingFortigate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#device_type SystemFederatedupgrade#device_type}
  */
  readonly deviceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#failure_reason SystemFederatedupgrade#failure_reason}
  */
  readonly failureReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#maximum_minutes SystemFederatedupgrade#maximum_minutes}
  */
  readonly maximumMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#serial SystemFederatedupgrade#serial}
  */
  readonly serial?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#setup_time SystemFederatedupgrade#setup_time}
  */
  readonly setupTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#time SystemFederatedupgrade#time}
  */
  readonly time?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#timing SystemFederatedupgrade#timing}
  */
  readonly timing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#upgrade_path SystemFederatedupgrade#upgrade_path}
  */
  readonly upgradePath?: string;
}

export function systemFederatedupgradeNodeListStructToTerraform(struct?: SystemFederatedupgradeNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_download: cdktf.stringToTerraform(struct!.allowDownload),
    coordinating_fortigate: cdktf.stringToTerraform(struct!.coordinatingFortigate),
    device_type: cdktf.stringToTerraform(struct!.deviceType),
    failure_reason: cdktf.stringToTerraform(struct!.failureReason),
    maximum_minutes: cdktf.numberToTerraform(struct!.maximumMinutes),
    serial: cdktf.stringToTerraform(struct!.serial),
    setup_time: cdktf.stringToTerraform(struct!.setupTime),
    time: cdktf.stringToTerraform(struct!.time),
    timing: cdktf.stringToTerraform(struct!.timing),
    upgrade_path: cdktf.stringToTerraform(struct!.upgradePath),
  }
}


export function systemFederatedupgradeNodeListStructToHclTerraform(struct?: SystemFederatedupgradeNodeListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_download: {
      value: cdktf.stringToHclTerraform(struct!.allowDownload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    coordinating_fortigate: {
      value: cdktf.stringToHclTerraform(struct!.coordinatingFortigate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_type: {
      value: cdktf.stringToHclTerraform(struct!.deviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    failure_reason: {
      value: cdktf.stringToHclTerraform(struct!.failureReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_minutes: {
      value: cdktf.numberToHclTerraform(struct!.maximumMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serial: {
      value: cdktf.stringToHclTerraform(struct!.serial),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    setup_time: {
      value: cdktf.stringToHclTerraform(struct!.setupTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.stringToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timing: {
      value: cdktf.stringToHclTerraform(struct!.timing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_path: {
      value: cdktf.stringToHclTerraform(struct!.upgradePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemFederatedupgradeNodeListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemFederatedupgradeNodeListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowDownload !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowDownload = this._allowDownload;
    }
    if (this._coordinatingFortigate !== undefined) {
      hasAnyValues = true;
      internalValueResult.coordinatingFortigate = this._coordinatingFortigate;
    }
    if (this._deviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceType = this._deviceType;
    }
    if (this._failureReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureReason = this._failureReason;
    }
    if (this._maximumMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumMinutes = this._maximumMinutes;
    }
    if (this._serial !== undefined) {
      hasAnyValues = true;
      internalValueResult.serial = this._serial;
    }
    if (this._setupTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.setupTime = this._setupTime;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._timing !== undefined) {
      hasAnyValues = true;
      internalValueResult.timing = this._timing;
    }
    if (this._upgradePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradePath = this._upgradePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemFederatedupgradeNodeListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowDownload = undefined;
      this._coordinatingFortigate = undefined;
      this._deviceType = undefined;
      this._failureReason = undefined;
      this._maximumMinutes = undefined;
      this._serial = undefined;
      this._setupTime = undefined;
      this._time = undefined;
      this._timing = undefined;
      this._upgradePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowDownload = value.allowDownload;
      this._coordinatingFortigate = value.coordinatingFortigate;
      this._deviceType = value.deviceType;
      this._failureReason = value.failureReason;
      this._maximumMinutes = value.maximumMinutes;
      this._serial = value.serial;
      this._setupTime = value.setupTime;
      this._time = value.time;
      this._timing = value.timing;
      this._upgradePath = value.upgradePath;
    }
  }

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

  // setup_time - computed: false, optional: true, required: false
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

  // time - computed: false, optional: true, required: false
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
}

export class SystemFederatedupgradeNodeListStructList extends cdktf.ComplexList {
  public internalValue? : SystemFederatedupgradeNodeListStruct[] | cdktf.IResolvable

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
  public get(index: number): SystemFederatedupgradeNodeListStructOutputReference {
    return new SystemFederatedupgradeNodeListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade fortios_system_federatedupgrade}
*/
export class SystemFederatedupgrade extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_federatedupgrade";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemFederatedupgrade resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemFederatedupgrade to import
  * @param importFromId The id of the existing SystemFederatedupgrade that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemFederatedupgrade to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_federatedupgrade", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_federatedupgrade fortios_system_federatedupgrade} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemFederatedupgradeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemFederatedupgradeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_federatedupgrade',
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
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._failureDevice = config.failureDevice;
    this._failureReason = config.failureReason;
    this._getAllTables = config.fetchAllTables;
    this._haRebootController = config.haRebootController;
    this._id = config.id;
    this._ignoreSigningErrors = config.ignoreSigningErrors;
    this._initialVersion = config.initialVersion;
    this._nextPathIndex = config.nextPathIndex;
    this._source = config.source;
    this._starterAdmin = config.starterAdmin;
    this._status = config.status;
    this._upgradeId = config.upgradeId;
    this._vdomparam = config.vdomparam;
    this._knownHaMembers.internalValue = config.knownHaMembers;
    this._nodeList.internalValue = config.nodeList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // failure_device - computed: false, optional: true, required: false
  private _failureDevice?: string; 
  public get failureDevice() {
    return this.getStringAttribute('failure_device');
  }
  public set failureDevice(value: string) {
    this._failureDevice = value;
  }
  public resetFailureDevice() {
    this._failureDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDeviceInput() {
    return this._failureDevice;
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

  // ignore_signing_errors - computed: true, optional: true, required: false
  private _ignoreSigningErrors?: string; 
  public get ignoreSigningErrors() {
    return this.getStringAttribute('ignore_signing_errors');
  }
  public set ignoreSigningErrors(value: string) {
    this._ignoreSigningErrors = value;
  }
  public resetIgnoreSigningErrors() {
    this._ignoreSigningErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSigningErrorsInput() {
    return this._ignoreSigningErrors;
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

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
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

  // upgrade_id - computed: false, optional: true, required: false
  private _upgradeId?: number; 
  public get upgradeId() {
    return this.getNumberAttribute('upgrade_id');
  }
  public set upgradeId(value: number) {
    this._upgradeId = value;
  }
  public resetUpgradeId() {
    this._upgradeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeIdInput() {
    return this._upgradeId;
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
  private _knownHaMembers = new SystemFederatedupgradeKnownHaMembersList(this, "known_ha_members", false);
  public get knownHaMembers() {
    return this._knownHaMembers;
  }
  public putKnownHaMembers(value: SystemFederatedupgradeKnownHaMembers[] | cdktf.IResolvable) {
    this._knownHaMembers.internalValue = value;
  }
  public resetKnownHaMembers() {
    this._knownHaMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownHaMembersInput() {
    return this._knownHaMembers.internalValue;
  }

  // node_list - computed: false, optional: true, required: false
  private _nodeList = new SystemFederatedupgradeNodeListStructList(this, "node_list", false);
  public get nodeList() {
    return this._nodeList;
  }
  public putNodeList(value: SystemFederatedupgradeNodeListStruct[] | cdktf.IResolvable) {
    this._nodeList.internalValue = value;
  }
  public resetNodeList() {
    this._nodeList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      failure_device: cdktf.stringToTerraform(this._failureDevice),
      failure_reason: cdktf.stringToTerraform(this._failureReason),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      ha_reboot_controller: cdktf.stringToTerraform(this._haRebootController),
      id: cdktf.stringToTerraform(this._id),
      ignore_signing_errors: cdktf.stringToTerraform(this._ignoreSigningErrors),
      initial_version: cdktf.stringToTerraform(this._initialVersion),
      next_path_index: cdktf.numberToTerraform(this._nextPathIndex),
      source: cdktf.stringToTerraform(this._source),
      starter_admin: cdktf.stringToTerraform(this._starterAdmin),
      status: cdktf.stringToTerraform(this._status),
      upgrade_id: cdktf.numberToTerraform(this._upgradeId),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      known_ha_members: cdktf.listMapper(systemFederatedupgradeKnownHaMembersToTerraform, true)(this._knownHaMembers.internalValue),
      node_list: cdktf.listMapper(systemFederatedupgradeNodeListStructToTerraform, true)(this._nodeList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_device: {
        value: cdktf.stringToHclTerraform(this._failureDevice),
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
      ignore_signing_errors: {
        value: cdktf.stringToHclTerraform(this._ignoreSigningErrors),
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
      next_path_index: {
        value: cdktf.numberToHclTerraform(this._nextPathIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
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
      upgrade_id: {
        value: cdktf.numberToHclTerraform(this._upgradeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      known_ha_members: {
        value: cdktf.listMapperHcl(systemFederatedupgradeKnownHaMembersToHclTerraform, true)(this._knownHaMembers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemFederatedupgradeKnownHaMembersList",
      },
      node_list: {
        value: cdktf.listMapperHcl(systemFederatedupgradeNodeListStructToHclTerraform, true)(this._nodeList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemFederatedupgradeNodeListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
