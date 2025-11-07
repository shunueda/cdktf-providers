// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#arch Collector#arch}
  */
  readonly arch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#backup_agent_id Collector#backup_agent_id}
  */
  readonly backupAgentId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#build Collector#build}
  */
  readonly buildAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#collector_group_id Collector#collector_group_id}
  */
  readonly collectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#collector_size Collector#collector_size}
  */
  readonly collectorSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#company Collector#company}
  */
  readonly company?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#custom_properties Collector#custom_properties}
  */
  readonly customProperties?: CollectorCustomProperties[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#description Collector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#ea Collector#ea}
  */
  readonly ea?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#enable_fail_back Collector#enable_fail_back}
  */
  readonly enableFailBack?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#enable_fail_over_on_collector_device Collector#enable_fail_over_on_collector_device}
  */
  readonly enableFailOverOnCollectorDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#escalating_chain_id Collector#escalating_chain_id}
  */
  readonly escalatingChainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#monitor_others Collector#monitor_others}
  */
  readonly monitorOthers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#need_auto_create_collector_device Collector#need_auto_create_collector_device}
  */
  readonly needAutoCreateCollectorDevice?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#number_of_instances Collector#number_of_instances}
  */
  readonly numberOfInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#resend_ival Collector#resend_ival}
  */
  readonly resendIval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#specified_collector_device_group_id Collector#specified_collector_device_group_id}
  */
  readonly specifiedCollectorDeviceGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#suppress_alert_clear Collector#suppress_alert_clear}
  */
  readonly suppressAlertClear?: boolean | cdktf.IResolvable;
  /**
  * automatic_upgrade_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#automatic_upgrade_info Collector#automatic_upgrade_info}
  */
  readonly automaticUpgradeInfo?: CollectorAutomaticUpgradeInfo[] | cdktf.IResolvable;
  /**
  * onetime_downgrade_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#onetime_downgrade_info Collector#onetime_downgrade_info}
  */
  readonly onetimeDowngradeInfo?: CollectorOnetimeDowngradeInfo[] | cdktf.IResolvable;
  /**
  * onetime_upgrade_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#onetime_upgrade_info Collector#onetime_upgrade_info}
  */
  readonly onetimeUpgradeInfo?: CollectorOnetimeUpgradeInfo[] | cdktf.IResolvable;
}
export interface CollectorCustomProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#name Collector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#value Collector#value}
  */
  readonly value?: string;
}

export function collectorCustomPropertiesToTerraform(struct?: CollectorCustomProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function collectorCustomPropertiesToHclTerraform(struct?: CollectorCustomProperties | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorCustomPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorCustomProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorCustomProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CollectorCustomPropertiesList extends cdktf.ComplexList {
  public internalValue? : CollectorCustomProperties[] | cdktf.IResolvable

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
  public get(index: number): CollectorCustomPropertiesOutputReference {
    return new CollectorCustomPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorNextUpgradeInfo {
}

export function collectorNextUpgradeInfoToTerraform(struct?: CollectorNextUpgradeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function collectorNextUpgradeInfoToHclTerraform(struct?: CollectorNextUpgradeInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CollectorNextUpgradeInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CollectorNextUpgradeInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorNextUpgradeInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // major_version - computed: true, optional: false, required: false
  public get majorVersion() {
    return this.getNumberAttribute('major_version');
  }

  // mandatory - computed: true, optional: false, required: false
  public get mandatory() {
    return this.getBooleanAttribute('mandatory');
  }

  // minor_version - computed: true, optional: false, required: false
  public get minorVersion() {
    return this.getNumberAttribute('minor_version');
  }

  // stable - computed: true, optional: false, required: false
  public get stable() {
    return this.getBooleanAttribute('stable');
  }

  // upgrade_time - computed: true, optional: false, required: false
  public get upgradeTime() {
    return this.getStringAttribute('upgrade_time');
  }

  // upgrade_time_epoch - computed: true, optional: false, required: false
  public get upgradeTimeEpoch() {
    return this.getNumberAttribute('upgrade_time_epoch');
  }
}

export class CollectorNextUpgradeInfoList extends cdktf.ComplexList {

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
  public get(index: number): CollectorNextUpgradeInfoOutputReference {
    return new CollectorNextUpgradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorAutomaticUpgradeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#day_of_week Collector#day_of_week}
  */
  readonly dayOfWeek: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#description Collector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#hour Collector#hour}
  */
  readonly hour: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#minute Collector#minute}
  */
  readonly minute: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#occurrence Collector#occurrence}
  */
  readonly occurrence: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#timezone Collector#timezone}
  */
  readonly timezone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#version Collector#version}
  */
  readonly version: string;
}

export function collectorAutomaticUpgradeInfoToTerraform(struct?: CollectorAutomaticUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_week: cdktf.stringToTerraform(struct!.dayOfWeek),
    description: cdktf.stringToTerraform(struct!.description),
    hour: cdktf.numberToTerraform(struct!.hour),
    minute: cdktf.numberToTerraform(struct!.minute),
    occurrence: cdktf.stringToTerraform(struct!.occurrence),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function collectorAutomaticUpgradeInfoToHclTerraform(struct?: CollectorAutomaticUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_week: {
      value: cdktf.stringToHclTerraform(struct!.dayOfWeek),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour: {
      value: cdktf.numberToHclTerraform(struct!.hour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minute: {
      value: cdktf.numberToHclTerraform(struct!.minute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    occurrence: {
      value: cdktf.stringToHclTerraform(struct!.occurrence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorAutomaticUpgradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorAutomaticUpgradeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfWeek !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfWeek = this._dayOfWeek;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hour !== undefined) {
      hasAnyValues = true;
      internalValueResult.hour = this._hour;
    }
    if (this._minute !== undefined) {
      hasAnyValues = true;
      internalValueResult.minute = this._minute;
    }
    if (this._occurrence !== undefined) {
      hasAnyValues = true;
      internalValueResult.occurrence = this._occurrence;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorAutomaticUpgradeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfWeek = undefined;
      this._description = undefined;
      this._hour = undefined;
      this._minute = undefined;
      this._occurrence = undefined;
      this._timezone = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfWeek = value.dayOfWeek;
      this._description = value.description;
      this._hour = value.hour;
      this._minute = value.minute;
      this._occurrence = value.occurrence;
      this._timezone = value.timezone;
      this._version = value.version;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // day_of_week - computed: false, optional: false, required: true
  private _dayOfWeek?: string; 
  public get dayOfWeek() {
    return this.getStringAttribute('day_of_week');
  }
  public set dayOfWeek(value: string) {
    this._dayOfWeek = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfWeekInput() {
    return this._dayOfWeek;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hour - computed: false, optional: false, required: true
  private _hour?: number; 
  public get hour() {
    return this.getNumberAttribute('hour');
  }
  public set hour(value: number) {
    this._hour = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hourInput() {
    return this._hour;
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // minute - computed: false, optional: false, required: true
  private _minute?: number; 
  public get minute() {
    return this.getNumberAttribute('minute');
  }
  public set minute(value: number) {
    this._minute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minuteInput() {
    return this._minute;
  }

  // occurrence - computed: false, optional: false, required: true
  private _occurrence?: string; 
  public get occurrence() {
    return this.getStringAttribute('occurrence');
  }
  public set occurrence(value: string) {
    this._occurrence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get occurrenceInput() {
    return this._occurrence;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CollectorAutomaticUpgradeInfoList extends cdktf.ComplexList {
  public internalValue? : CollectorAutomaticUpgradeInfo[] | cdktf.IResolvable

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
  public get(index: number): CollectorAutomaticUpgradeInfoOutputReference {
    return new CollectorAutomaticUpgradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorOnetimeDowngradeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#description Collector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#major_version Collector#major_version}
  */
  readonly majorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#minor_version Collector#minor_version}
  */
  readonly minorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#start_epoch Collector#start_epoch}
  */
  readonly startEpoch: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#timezone Collector#timezone}
  */
  readonly timezone?: string;
}

export function collectorOnetimeDowngradeInfoToTerraform(struct?: CollectorOnetimeDowngradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    major_version: cdktf.numberToTerraform(struct!.majorVersion),
    minor_version: cdktf.numberToTerraform(struct!.minorVersion),
    start_epoch: cdktf.numberToTerraform(struct!.startEpoch),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function collectorOnetimeDowngradeInfoToHclTerraform(struct?: CollectorOnetimeDowngradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    major_version: {
      value: cdktf.numberToHclTerraform(struct!.majorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minor_version: {
      value: cdktf.numberToHclTerraform(struct!.minorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_epoch: {
      value: cdktf.numberToHclTerraform(struct!.startEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorOnetimeDowngradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorOnetimeDowngradeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._majorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersion = this._majorVersion;
    }
    if (this._minorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersion = this._minorVersion;
    }
    if (this._startEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.startEpoch = this._startEpoch;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorOnetimeDowngradeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._majorVersion = undefined;
      this._minorVersion = undefined;
      this._startEpoch = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._majorVersion = value.majorVersion;
      this._minorVersion = value.minorVersion;
      this._startEpoch = value.startEpoch;
      this._timezone = value.timezone;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_epoch - computed: true, optional: false, required: false
  public get endEpoch() {
    return this.getNumberAttribute('end_epoch');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // major_version - computed: false, optional: false, required: true
  private _majorVersion?: number; 
  public get majorVersion() {
    return this.getNumberAttribute('major_version');
  }
  public set majorVersion(value: number) {
    this._majorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionInput() {
    return this._majorVersion;
  }

  // minor_version - computed: false, optional: false, required: true
  private _minorVersion?: number; 
  public get minorVersion() {
    return this.getNumberAttribute('minor_version');
  }
  public set minorVersion(value: number) {
    this._minorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionInput() {
    return this._minorVersion;
  }

  // start_epoch - computed: false, optional: false, required: true
  private _startEpoch?: number; 
  public get startEpoch() {
    return this.getNumberAttribute('start_epoch');
  }
  public set startEpoch(value: number) {
    this._startEpoch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startEpochInput() {
    return this._startEpoch;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CollectorOnetimeDowngradeInfoList extends cdktf.ComplexList {
  public internalValue? : CollectorOnetimeDowngradeInfo[] | cdktf.IResolvable

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
  public get(index: number): CollectorOnetimeDowngradeInfoOutputReference {
    return new CollectorOnetimeDowngradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CollectorOnetimeUpgradeInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#description Collector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#major_version Collector#major_version}
  */
  readonly majorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#minor_version Collector#minor_version}
  */
  readonly minorVersion: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#start_epoch Collector#start_epoch}
  */
  readonly startEpoch: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#timezone Collector#timezone}
  */
  readonly timezone?: string;
}

export function collectorOnetimeUpgradeInfoToTerraform(struct?: CollectorOnetimeUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    major_version: cdktf.numberToTerraform(struct!.majorVersion),
    minor_version: cdktf.numberToTerraform(struct!.minorVersion),
    start_epoch: cdktf.numberToTerraform(struct!.startEpoch),
    timezone: cdktf.stringToTerraform(struct!.timezone),
  }
}


export function collectorOnetimeUpgradeInfoToHclTerraform(struct?: CollectorOnetimeUpgradeInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    major_version: {
      value: cdktf.numberToHclTerraform(struct!.majorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minor_version: {
      value: cdktf.numberToHclTerraform(struct!.minorVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_epoch: {
      value: cdktf.numberToHclTerraform(struct!.startEpoch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CollectorOnetimeUpgradeInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CollectorOnetimeUpgradeInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._majorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.majorVersion = this._majorVersion;
    }
    if (this._minorVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minorVersion = this._minorVersion;
    }
    if (this._startEpoch !== undefined) {
      hasAnyValues = true;
      internalValueResult.startEpoch = this._startEpoch;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CollectorOnetimeUpgradeInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._majorVersion = undefined;
      this._minorVersion = undefined;
      this._startEpoch = undefined;
      this._timezone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._majorVersion = value.majorVersion;
      this._minorVersion = value.minorVersion;
      this._startEpoch = value.startEpoch;
      this._timezone = value.timezone;
    }
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_epoch - computed: true, optional: false, required: false
  public get endEpoch() {
    return this.getNumberAttribute('end_epoch');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // major_version - computed: false, optional: false, required: true
  private _majorVersion?: number; 
  public get majorVersion() {
    return this.getNumberAttribute('major_version');
  }
  public set majorVersion(value: number) {
    this._majorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get majorVersionInput() {
    return this._majorVersion;
  }

  // minor_version - computed: false, optional: false, required: true
  private _minorVersion?: number; 
  public get minorVersion() {
    return this.getNumberAttribute('minor_version');
  }
  public set minorVersion(value: number) {
    this._minorVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minorVersionInput() {
    return this._minorVersion;
  }

  // start_epoch - computed: false, optional: false, required: true
  private _startEpoch?: number; 
  public get startEpoch() {
    return this.getNumberAttribute('start_epoch');
  }
  public set startEpoch(value: number) {
    this._startEpoch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startEpochInput() {
    return this._startEpoch;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CollectorOnetimeUpgradeInfoList extends cdktf.ComplexList {
  public internalValue? : CollectorOnetimeUpgradeInfo[] | cdktf.IResolvable

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
  public get(index: number): CollectorOnetimeUpgradeInfoOutputReference {
    return new CollectorOnetimeUpgradeInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector logicmonitor_collector}
*/
export class Collector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_collector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Collector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Collector to import
  * @param importFromId The id of the existing Collector that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Collector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_collector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/collector logicmonitor_collector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CollectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_collector',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arch = config.arch;
    this._backupAgentId = config.backupAgentId;
    this._build = config.buildAttribute;
    this._collectorGroupId = config.collectorGroupId;
    this._collectorSize = config.collectorSize;
    this._company = config.company;
    this._customProperties.internalValue = config.customProperties;
    this._description = config.description;
    this._ea = config.ea;
    this._enableFailBack = config.enableFailBack;
    this._enableFailOverOnCollectorDevice = config.enableFailOverOnCollectorDevice;
    this._escalatingChainId = config.escalatingChainId;
    this._monitorOthers = config.monitorOthers;
    this._needAutoCreateCollectorDevice = config.needAutoCreateCollectorDevice;
    this._numberOfInstances = config.numberOfInstances;
    this._resendIval = config.resendIval;
    this._specifiedCollectorDeviceGroupId = config.specifiedCollectorDeviceGroupId;
    this._suppressAlertClear = config.suppressAlertClear;
    this._automaticUpgradeInfo.internalValue = config.automaticUpgradeInfo;
    this._onetimeDowngradeInfo.internalValue = config.onetimeDowngradeInfo;
    this._onetimeUpgradeInfo.internalValue = config.onetimeUpgradeInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ack_comment - computed: true, optional: false, required: false
  public get ackComment() {
    return this.getStringAttribute('ack_comment');
  }

  // acked - computed: true, optional: false, required: false
  public get acked() {
    return this.getBooleanAttribute('acked');
  }

  // acked_by - computed: true, optional: false, required: false
  public get ackedBy() {
    return this.getStringAttribute('acked_by');
  }

  // acked_on - computed: true, optional: false, required: false
  public get ackedOn() {
    return this.getNumberAttribute('acked_on');
  }

  // acked_on_local - computed: true, optional: false, required: false
  public get ackedOnLocal() {
    return this.getStringAttribute('acked_on_local');
  }

  // arch - computed: false, optional: true, required: false
  private _arch?: string; 
  public get arch() {
    return this.getStringAttribute('arch');
  }
  public set arch(value: string) {
    this._arch = value;
  }
  public resetArch() {
    this._arch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archInput() {
    return this._arch;
  }

  // backup_agent_id - computed: false, optional: true, required: false
  private _backupAgentId?: number; 
  public get backupAgentId() {
    return this.getNumberAttribute('backup_agent_id');
  }
  public set backupAgentId(value: number) {
    this._backupAgentId = value;
  }
  public resetBackupAgentId() {
    this._backupAgentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupAgentIdInput() {
    return this._backupAgentId;
  }

  // build - computed: false, optional: true, required: false
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  public resetBuildAttribute() {
    this._build = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // can_downgrade - computed: true, optional: false, required: false
  public get canDowngrade() {
    return this.getBooleanAttribute('can_downgrade');
  }

  // can_downgrade_reason - computed: true, optional: false, required: false
  public get canDowngradeReason() {
    return this.getStringAttribute('can_downgrade_reason');
  }

  // clear_sent - computed: true, optional: false, required: false
  public get clearSent() {
    return this.getBooleanAttribute('clear_sent');
  }

  // collector_conf - computed: true, optional: false, required: false
  public get collectorConf() {
    return this.getStringAttribute('collector_conf');
  }

  // collector_device_id - computed: true, optional: false, required: false
  public get collectorDeviceId() {
    return this.getNumberAttribute('collector_device_id');
  }

  // collector_group_id - computed: false, optional: true, required: false
  private _collectorGroupId?: number; 
  public get collectorGroupId() {
    return this.getNumberAttribute('collector_group_id');
  }
  public set collectorGroupId(value: number) {
    this._collectorGroupId = value;
  }
  public resetCollectorGroupId() {
    this._collectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupIdInput() {
    return this._collectorGroupId;
  }

  // collector_group_name - computed: true, optional: false, required: false
  public get collectorGroupName() {
    return this.getStringAttribute('collector_group_name');
  }

  // collector_size - computed: false, optional: true, required: false
  private _collectorSize?: string; 
  public get collectorSize() {
    return this.getStringAttribute('collector_size');
  }
  public set collectorSize(value: string) {
    this._collectorSize = value;
  }
  public resetCollectorSize() {
    this._collectorSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorSizeInput() {
    return this._collectorSize;
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // conf_version - computed: true, optional: false, required: false
  public get confVersion() {
    return this.getStringAttribute('conf_version');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getNumberAttribute('created_on');
  }

  // created_on_local - computed: true, optional: false, required: false
  public get createdOnLocal() {
    return this.getStringAttribute('created_on_local');
  }

  // custom_properties - computed: false, optional: true, required: false
  private _customProperties = new CollectorCustomPropertiesList(this, "custom_properties", true);
  public get customProperties() {
    return this._customProperties;
  }
  public putCustomProperties(value: CollectorCustomProperties[] | cdktf.IResolvable) {
    this._customProperties.internalValue = value;
  }
  public resetCustomProperties() {
    this._customProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPropertiesInput() {
    return this._customProperties.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // ea - computed: false, optional: true, required: false
  private _ea?: boolean | cdktf.IResolvable; 
  public get ea() {
    return this.getBooleanAttribute('ea');
  }
  public set ea(value: boolean | cdktf.IResolvable) {
    this._ea = value;
  }
  public resetEa() {
    this._ea = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eaInput() {
    return this._ea;
  }

  // enable_fail_back - computed: false, optional: true, required: false
  private _enableFailBack?: boolean | cdktf.IResolvable; 
  public get enableFailBack() {
    return this.getBooleanAttribute('enable_fail_back');
  }
  public set enableFailBack(value: boolean | cdktf.IResolvable) {
    this._enableFailBack = value;
  }
  public resetEnableFailBack() {
    this._enableFailBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFailBackInput() {
    return this._enableFailBack;
  }

  // enable_fail_over_on_collector_device - computed: false, optional: true, required: false
  private _enableFailOverOnCollectorDevice?: boolean | cdktf.IResolvable; 
  public get enableFailOverOnCollectorDevice() {
    return this.getBooleanAttribute('enable_fail_over_on_collector_device');
  }
  public set enableFailOverOnCollectorDevice(value: boolean | cdktf.IResolvable) {
    this._enableFailOverOnCollectorDevice = value;
  }
  public resetEnableFailOverOnCollectorDevice() {
    this._enableFailOverOnCollectorDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFailOverOnCollectorDeviceInput() {
    return this._enableFailOverOnCollectorDevice;
  }

  // escalating_chain_id - computed: false, optional: true, required: false
  private _escalatingChainId?: number; 
  public get escalatingChainId() {
    return this.getNumberAttribute('escalating_chain_id');
  }
  public set escalatingChainId(value: number) {
    this._escalatingChainId = value;
  }
  public resetEscalatingChainId() {
    this._escalatingChainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get escalatingChainIdInput() {
    return this._escalatingChainId;
  }

  // has_fail_over_device - computed: true, optional: false, required: false
  public get hasFailOverDevice() {
    return this.getBooleanAttribute('has_fail_over_device');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_s_d_t - computed: true, optional: false, required: false
  public get inSDT() {
    return this.getBooleanAttribute('in_s_d_t');
  }

  // installer_url_cmds - computed: true, optional: false, required: false
  private _installerUrlCmds = new cdktf.StringMap(this, "installer_url_cmds");
  public get installerUrlCmds() {
    return this._installerUrlCmds;
  }

  // is_down - computed: true, optional: false, required: false
  public get isDown() {
    return this.getBooleanAttribute('is_down');
  }

  // last_sent_notification_on - computed: true, optional: false, required: false
  public get lastSentNotificationOn() {
    return this.getNumberAttribute('last_sent_notification_on');
  }

  // last_sent_notification_on_local - computed: true, optional: false, required: false
  public get lastSentNotificationOnLocal() {
    return this.getStringAttribute('last_sent_notification_on_local');
  }

  // monitor_others - computed: false, optional: true, required: false
  private _monitorOthers?: boolean | cdktf.IResolvable; 
  public get monitorOthers() {
    return this.getBooleanAttribute('monitor_others');
  }
  public set monitorOthers(value: boolean | cdktf.IResolvable) {
    this._monitorOthers = value;
  }
  public resetMonitorOthers() {
    this._monitorOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOthersInput() {
    return this._monitorOthers;
  }

  // need_auto_create_collector_device - computed: false, optional: true, required: false
  private _needAutoCreateCollectorDevice?: boolean | cdktf.IResolvable; 
  public get needAutoCreateCollectorDevice() {
    return this.getBooleanAttribute('need_auto_create_collector_device');
  }
  public set needAutoCreateCollectorDevice(value: boolean | cdktf.IResolvable) {
    this._needAutoCreateCollectorDevice = value;
  }
  public resetNeedAutoCreateCollectorDevice() {
    this._needAutoCreateCollectorDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get needAutoCreateCollectorDeviceInput() {
    return this._needAutoCreateCollectorDevice;
  }

  // netscan_version - computed: true, optional: false, required: false
  public get netscanVersion() {
    return this.getStringAttribute('netscan_version');
  }

  // next_recipient - computed: true, optional: false, required: false
  public get nextRecipient() {
    return this.getNumberAttribute('next_recipient');
  }

  // next_upgrade_info - computed: true, optional: false, required: false
  private _nextUpgradeInfo = new CollectorNextUpgradeInfoList(this, "next_upgrade_info", false);
  public get nextUpgradeInfo() {
    return this._nextUpgradeInfo;
  }

  // number_of_hosts - computed: true, optional: false, required: false
  public get numberOfHosts() {
    return this.getNumberAttribute('number_of_hosts');
  }

  // number_of_instances - computed: false, optional: true, required: false
  private _numberOfInstances?: number; 
  public get numberOfInstances() {
    return this.getNumberAttribute('number_of_instances');
  }
  public set numberOfInstances(value: number) {
    this._numberOfInstances = value;
  }
  public resetNumberOfInstances() {
    this._numberOfInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfInstancesInput() {
    return this._numberOfInstances;
  }

  // number_of_websites - computed: true, optional: false, required: false
  public get numberOfWebsites() {
    return this.getNumberAttribute('number_of_websites');
  }

  // platform - computed: true, optional: false, required: false
  public get platform() {
    return this.getStringAttribute('platform');
  }

  // predefined_config - computed: true, optional: false, required: false
  private _predefinedConfig = new cdktf.StringMap(this, "predefined_config");
  public get predefinedConfig() {
    return this._predefinedConfig;
  }

  // previous_version - computed: true, optional: false, required: false
  public get previousVersion() {
    return this.getStringAttribute('previous_version');
  }

  // resend_ival - computed: false, optional: true, required: false
  private _resendIval?: number; 
  public get resendIval() {
    return this.getNumberAttribute('resend_ival');
  }
  public set resendIval(value: number) {
    this._resendIval = value;
  }
  public resetResendIval() {
    this._resendIval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendIvalInput() {
    return this._resendIval;
  }

  // sbproxy_conf - computed: true, optional: false, required: false
  public get sbproxyConf() {
    return this.getStringAttribute('sbproxy_conf');
  }

  // specified_collector_device_group_id - computed: false, optional: true, required: false
  private _specifiedCollectorDeviceGroupId?: number; 
  public get specifiedCollectorDeviceGroupId() {
    return this.getNumberAttribute('specified_collector_device_group_id');
  }
  public set specifiedCollectorDeviceGroupId(value: number) {
    this._specifiedCollectorDeviceGroupId = value;
  }
  public resetSpecifiedCollectorDeviceGroupId() {
    this._specifiedCollectorDeviceGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specifiedCollectorDeviceGroupIdInput() {
    return this._specifiedCollectorDeviceGroupId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // suppress_alert_clear - computed: false, optional: true, required: false
  private _suppressAlertClear?: boolean | cdktf.IResolvable; 
  public get suppressAlertClear() {
    return this.getBooleanAttribute('suppress_alert_clear');
  }
  public set suppressAlertClear(value: boolean | cdktf.IResolvable) {
    this._suppressAlertClear = value;
  }
  public resetSuppressAlertClear() {
    this._suppressAlertClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressAlertClearInput() {
    return this._suppressAlertClear;
  }

  // up_time - computed: true, optional: false, required: false
  public get upTime() {
    return this.getNumberAttribute('up_time');
  }

  // updated_on - computed: true, optional: false, required: false
  public get updatedOn() {
    return this.getNumberAttribute('updated_on');
  }

  // updated_on_local - computed: true, optional: false, required: false
  public get updatedOnLocal() {
    return this.getStringAttribute('updated_on_local');
  }

  // user_change_on - computed: true, optional: false, required: false
  public get userChangeOn() {
    return this.getNumberAttribute('user_change_on');
  }

  // user_change_on_local - computed: true, optional: false, required: false
  public get userChangeOnLocal() {
    return this.getStringAttribute('user_change_on_local');
  }

  // user_permission - computed: true, optional: false, required: false
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }

  // user_visible_hosts_num - computed: true, optional: false, required: false
  public get userVisibleHostsNum() {
    return this.getNumberAttribute('user_visible_hosts_num');
  }

  // user_visible_websites_num - computed: true, optional: false, required: false
  public get userVisibleWebsitesNum() {
    return this.getNumberAttribute('user_visible_websites_num');
  }

  // watchdog_conf - computed: true, optional: false, required: false
  public get watchdogConf() {
    return this.getStringAttribute('watchdog_conf');
  }

  // watchdog_updated_on - computed: true, optional: false, required: false
  public get watchdogUpdatedOn() {
    return this.getNumberAttribute('watchdog_updated_on');
  }

  // watchdog_updated_on_local - computed: true, optional: false, required: false
  public get watchdogUpdatedOnLocal() {
    return this.getStringAttribute('watchdog_updated_on_local');
  }

  // website_conf - computed: true, optional: false, required: false
  public get websiteConf() {
    return this.getStringAttribute('website_conf');
  }

  // wrapper_conf - computed: true, optional: false, required: false
  public get wrapperConf() {
    return this.getStringAttribute('wrapper_conf');
  }

  // automatic_upgrade_info - computed: false, optional: true, required: false
  private _automaticUpgradeInfo = new CollectorAutomaticUpgradeInfoList(this, "automatic_upgrade_info", false);
  public get automaticUpgradeInfo() {
    return this._automaticUpgradeInfo;
  }
  public putAutomaticUpgradeInfo(value: CollectorAutomaticUpgradeInfo[] | cdktf.IResolvable) {
    this._automaticUpgradeInfo.internalValue = value;
  }
  public resetAutomaticUpgradeInfo() {
    this._automaticUpgradeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticUpgradeInfoInput() {
    return this._automaticUpgradeInfo.internalValue;
  }

  // onetime_downgrade_info - computed: false, optional: true, required: false
  private _onetimeDowngradeInfo = new CollectorOnetimeDowngradeInfoList(this, "onetime_downgrade_info", false);
  public get onetimeDowngradeInfo() {
    return this._onetimeDowngradeInfo;
  }
  public putOnetimeDowngradeInfo(value: CollectorOnetimeDowngradeInfo[] | cdktf.IResolvable) {
    this._onetimeDowngradeInfo.internalValue = value;
  }
  public resetOnetimeDowngradeInfo() {
    this._onetimeDowngradeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onetimeDowngradeInfoInput() {
    return this._onetimeDowngradeInfo.internalValue;
  }

  // onetime_upgrade_info - computed: false, optional: true, required: false
  private _onetimeUpgradeInfo = new CollectorOnetimeUpgradeInfoList(this, "onetime_upgrade_info", false);
  public get onetimeUpgradeInfo() {
    return this._onetimeUpgradeInfo;
  }
  public putOnetimeUpgradeInfo(value: CollectorOnetimeUpgradeInfo[] | cdktf.IResolvable) {
    this._onetimeUpgradeInfo.internalValue = value;
  }
  public resetOnetimeUpgradeInfo() {
    this._onetimeUpgradeInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onetimeUpgradeInfoInput() {
    return this._onetimeUpgradeInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arch: cdktf.stringToTerraform(this._arch),
      backup_agent_id: cdktf.numberToTerraform(this._backupAgentId),
      build: cdktf.stringToTerraform(this._build),
      collector_group_id: cdktf.numberToTerraform(this._collectorGroupId),
      collector_size: cdktf.stringToTerraform(this._collectorSize),
      company: cdktf.stringToTerraform(this._company),
      custom_properties: cdktf.listMapper(collectorCustomPropertiesToTerraform, false)(this._customProperties.internalValue),
      description: cdktf.stringToTerraform(this._description),
      ea: cdktf.booleanToTerraform(this._ea),
      enable_fail_back: cdktf.booleanToTerraform(this._enableFailBack),
      enable_fail_over_on_collector_device: cdktf.booleanToTerraform(this._enableFailOverOnCollectorDevice),
      escalating_chain_id: cdktf.numberToTerraform(this._escalatingChainId),
      monitor_others: cdktf.booleanToTerraform(this._monitorOthers),
      need_auto_create_collector_device: cdktf.booleanToTerraform(this._needAutoCreateCollectorDevice),
      number_of_instances: cdktf.numberToTerraform(this._numberOfInstances),
      resend_ival: cdktf.numberToTerraform(this._resendIval),
      specified_collector_device_group_id: cdktf.numberToTerraform(this._specifiedCollectorDeviceGroupId),
      suppress_alert_clear: cdktf.booleanToTerraform(this._suppressAlertClear),
      automatic_upgrade_info: cdktf.listMapper(collectorAutomaticUpgradeInfoToTerraform, true)(this._automaticUpgradeInfo.internalValue),
      onetime_downgrade_info: cdktf.listMapper(collectorOnetimeDowngradeInfoToTerraform, true)(this._onetimeDowngradeInfo.internalValue),
      onetime_upgrade_info: cdktf.listMapper(collectorOnetimeUpgradeInfoToTerraform, true)(this._onetimeUpgradeInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arch: {
        value: cdktf.stringToHclTerraform(this._arch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_agent_id: {
        value: cdktf.numberToHclTerraform(this._backupAgentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      build: {
        value: cdktf.stringToHclTerraform(this._build),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      collector_group_id: {
        value: cdktf.numberToHclTerraform(this._collectorGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      collector_size: {
        value: cdktf.stringToHclTerraform(this._collectorSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_properties: {
        value: cdktf.listMapperHcl(collectorCustomPropertiesToHclTerraform, false)(this._customProperties.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CollectorCustomPropertiesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ea: {
        value: cdktf.booleanToHclTerraform(this._ea),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fail_back: {
        value: cdktf.booleanToHclTerraform(this._enableFailBack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_fail_over_on_collector_device: {
        value: cdktf.booleanToHclTerraform(this._enableFailOverOnCollectorDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      escalating_chain_id: {
        value: cdktf.numberToHclTerraform(this._escalatingChainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_others: {
        value: cdktf.booleanToHclTerraform(this._monitorOthers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      need_auto_create_collector_device: {
        value: cdktf.booleanToHclTerraform(this._needAutoCreateCollectorDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      number_of_instances: {
        value: cdktf.numberToHclTerraform(this._numberOfInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resend_ival: {
        value: cdktf.numberToHclTerraform(this._resendIval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      specified_collector_device_group_id: {
        value: cdktf.numberToHclTerraform(this._specifiedCollectorDeviceGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      suppress_alert_clear: {
        value: cdktf.booleanToHclTerraform(this._suppressAlertClear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      automatic_upgrade_info: {
        value: cdktf.listMapperHcl(collectorAutomaticUpgradeInfoToHclTerraform, true)(this._automaticUpgradeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CollectorAutomaticUpgradeInfoList",
      },
      onetime_downgrade_info: {
        value: cdktf.listMapperHcl(collectorOnetimeDowngradeInfoToHclTerraform, true)(this._onetimeDowngradeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CollectorOnetimeDowngradeInfoList",
      },
      onetime_upgrade_info: {
        value: cdktf.listMapperHcl(collectorOnetimeUpgradeInfoToHclTerraform, true)(this._onetimeUpgradeInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CollectorOnetimeUpgradeInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
