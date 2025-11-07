// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosIpamIpv6NetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#extattrfilters DataNiosIpamIpv6Network#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#filters DataNiosIpamIpv6Network#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#max_results DataNiosIpamIpv6Network#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#paging DataNiosIpamIpv6Network#paging}
  */
  readonly paging?: number;
}
export interface DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ipv4addr DataNiosIpamIpv6Network#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ipv6addr DataNiosIpamIpv6Network#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#name DataNiosIpamIpv6Network#name}
  */
  readonly name?: string;
}

export function dataNiosIpamIpv6NetworkResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosIpamIpv6NetworkResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // name - computed: true, optional: true, required: false
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
export interface DataNiosIpamIpv6NetworkResultCloudInfo {
  /**
  * Contains information about the delegated member of the object. This is not set if the object is not delegated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#delegated_member DataNiosIpamIpv6Network#delegated_member}
  */
  readonly delegatedMember?: DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember;
}

export function dataNiosIpamIpv6NetworkResultCloudInfoToTerraform(struct?: DataNiosIpamIpv6NetworkResultCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_member: dataNiosIpamIpv6NetworkResultCloudInfoDelegatedMemberToTerraform(struct!.delegatedMember),
  }
}


export function dataNiosIpamIpv6NetworkResultCloudInfoToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_member: {
      value: dataNiosIpamIpv6NetworkResultCloudInfoDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultCloudInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delegatedMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.delegatedMember = this._delegatedMember?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultCloudInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delegatedMember.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delegatedMember.internalValue = value.delegatedMember;
    }
  }

  // authority_type - computed: true, optional: false, required: false
  public get authorityType() {
    return this.getStringAttribute('authority_type');
  }

  // delegated_member - computed: true, optional: true, required: false
  private _delegatedMember = new DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: DataNiosIpamIpv6NetworkResultCloudInfoDelegatedMember) {
    this._delegatedMember.internalValue = value;
  }
  public resetDelegatedMember() {
    this._delegatedMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedMemberInput() {
    return this._delegatedMember.internalValue;
  }

  // delegated_root - computed: true, optional: false, required: false
  public get delegatedRoot() {
    return this.getStringAttribute('delegated_root');
  }

  // delegated_scope - computed: true, optional: false, required: false
  public get delegatedScope() {
    return this.getStringAttribute('delegated_scope');
  }

  // mgmt_platform - computed: true, optional: false, required: false
  public get mgmtPlatform() {
    return this.getStringAttribute('mgmt_platform');
  }

  // owned_by_adaptor - computed: true, optional: false, required: false
  public get ownedByAdaptor() {
    return this.getBooleanAttribute('owned_by_adaptor');
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}
export interface DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#day_of_month DataNiosIpamIpv6Network#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#disable DataNiosIpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#every DataNiosIpamIpv6Network#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#frequency DataNiosIpamIpv6Network#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#hour_of_day DataNiosIpamIpv6Network#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#minutes_past_hour DataNiosIpamIpv6Network#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#month DataNiosIpamIpv6Network#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#recurring_time DataNiosIpamIpv6Network#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#repeat DataNiosIpamIpv6Network#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#time_zone DataNiosIpamIpv6Network#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#weekdays DataNiosIpamIpv6Network#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#year DataNiosIpamIpv6Network#year}
  */
  readonly year?: number;
}

export function dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings {
  /**
  * Determines whether auto ARP refresh before switch port polling is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#auto_arp_refresh_before_switch_port_polling DataNiosIpamIpv6Network#auto_arp_refresh_before_switch_port_polling}
  */
  readonly autoArpRefreshBeforeSwitchPortPolling?: boolean | cdktf.IResolvable;
  /**
  * Determines whether CLI collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#cli_collection DataNiosIpamIpv6Network#cli_collection}
  */
  readonly cliCollection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether complete ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#complete_ping_sweep DataNiosIpamIpv6Network#complete_ping_sweep}
  */
  readonly completePingSweep?: boolean | cdktf.IResolvable;
  /**
  * Credential group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#credential_group DataNiosIpamIpv6Network#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * Determines whether device profile is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#device_profile DataNiosIpamIpv6Network#device_profile}
  */
  readonly deviceProfile?: boolean | cdktf.IResolvable;
  /**
  * Determines whether netbios scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#netbios_scanning DataNiosIpamIpv6Network#netbios_scanning}
  */
  readonly netbiosScanning?: boolean | cdktf.IResolvable;
  /**
  * Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#polling_frequency_modifier DataNiosIpamIpv6Network#polling_frequency_modifier}
  */
  readonly pollingFrequencyModifier?: string;
  /**
  * Determines whether port scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#port_scanning DataNiosIpamIpv6Network#port_scanning}
  */
  readonly portScanning?: boolean | cdktf.IResolvable;
  /**
  * Determines whether smart subnet ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#smart_subnet_ping_sweep DataNiosIpamIpv6Network#smart_subnet_ping_sweep}
  */
  readonly smartSubnetPingSweep?: boolean | cdktf.IResolvable;
  /**
  * Determines whether SNMP collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#snmp_collection DataNiosIpamIpv6Network#snmp_collection}
  */
  readonly snmpCollection?: boolean | cdktf.IResolvable;
  /**
  * A switch port data collection polling mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#switch_port_data_collection_polling DataNiosIpamIpv6Network#switch_port_data_collection_polling}
  */
  readonly switchPortDataCollectionPolling?: string;
  /**
  * Indicates the interval for switch port data collection polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#switch_port_data_collection_polling_interval DataNiosIpamIpv6Network#switch_port_data_collection_polling_interval}
  */
  readonly switchPortDataCollectionPollingInterval?: number;
  /**
  * A switch port data collection polling schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#switch_port_data_collection_polling_schedule DataNiosIpamIpv6Network#switch_port_data_collection_polling_schedule}
  */
  readonly switchPortDataCollectionPollingSchedule?: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule;
  /**
  * Use Global Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_global_polling_frequency_modifier DataNiosIpamIpv6Network#use_global_polling_frequency_modifier}
  */
  readonly useGlobalPollingFrequencyModifier?: boolean | cdktf.IResolvable;
}

export function dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsToTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_arp_refresh_before_switch_port_polling: cdktf.booleanToTerraform(struct!.autoArpRefreshBeforeSwitchPortPolling),
    cli_collection: cdktf.booleanToTerraform(struct!.cliCollection),
    complete_ping_sweep: cdktf.booleanToTerraform(struct!.completePingSweep),
    credential_group: cdktf.stringToTerraform(struct!.credentialGroup),
    device_profile: cdktf.booleanToTerraform(struct!.deviceProfile),
    netbios_scanning: cdktf.booleanToTerraform(struct!.netbiosScanning),
    polling_frequency_modifier: cdktf.stringToTerraform(struct!.pollingFrequencyModifier),
    port_scanning: cdktf.booleanToTerraform(struct!.portScanning),
    smart_subnet_ping_sweep: cdktf.booleanToTerraform(struct!.smartSubnetPingSweep),
    snmp_collection: cdktf.booleanToTerraform(struct!.snmpCollection),
    switch_port_data_collection_polling: cdktf.stringToTerraform(struct!.switchPortDataCollectionPolling),
    switch_port_data_collection_polling_interval: cdktf.numberToTerraform(struct!.switchPortDataCollectionPollingInterval),
    switch_port_data_collection_polling_schedule: dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct!.switchPortDataCollectionPollingSchedule),
    use_global_polling_frequency_modifier: cdktf.booleanToTerraform(struct!.useGlobalPollingFrequencyModifier),
  }
}


export function dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_arp_refresh_before_switch_port_polling: {
      value: cdktf.booleanToHclTerraform(struct!.autoArpRefreshBeforeSwitchPortPolling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cli_collection: {
      value: cdktf.booleanToHclTerraform(struct!.cliCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    complete_ping_sweep: {
      value: cdktf.booleanToHclTerraform(struct!.completePingSweep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    credential_group: {
      value: cdktf.stringToHclTerraform(struct!.credentialGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_profile: {
      value: cdktf.booleanToHclTerraform(struct!.deviceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    netbios_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.netbiosScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    polling_frequency_modifier: {
      value: cdktf.stringToHclTerraform(struct!.pollingFrequencyModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_scanning: {
      value: cdktf.booleanToHclTerraform(struct!.portScanning),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    smart_subnet_ping_sweep: {
      value: cdktf.booleanToHclTerraform(struct!.smartSubnetPingSweep),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    snmp_collection: {
      value: cdktf.booleanToHclTerraform(struct!.snmpCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    switch_port_data_collection_polling: {
      value: cdktf.stringToHclTerraform(struct!.switchPortDataCollectionPolling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_port_data_collection_polling_interval: {
      value: cdktf.numberToHclTerraform(struct!.switchPortDataCollectionPollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    switch_port_data_collection_polling_schedule: {
      value: dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct!.switchPortDataCollectionPollingSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule",
    },
    use_global_polling_frequency_modifier: {
      value: cdktf.booleanToHclTerraform(struct!.useGlobalPollingFrequencyModifier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoArpRefreshBeforeSwitchPortPolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoArpRefreshBeforeSwitchPortPolling = this._autoArpRefreshBeforeSwitchPortPolling;
    }
    if (this._cliCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliCollection = this._cliCollection;
    }
    if (this._completePingSweep !== undefined) {
      hasAnyValues = true;
      internalValueResult.completePingSweep = this._completePingSweep;
    }
    if (this._credentialGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialGroup = this._credentialGroup;
    }
    if (this._deviceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceProfile = this._deviceProfile;
    }
    if (this._netbiosScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.netbiosScanning = this._netbiosScanning;
    }
    if (this._pollingFrequencyModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingFrequencyModifier = this._pollingFrequencyModifier;
    }
    if (this._portScanning !== undefined) {
      hasAnyValues = true;
      internalValueResult.portScanning = this._portScanning;
    }
    if (this._smartSubnetPingSweep !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartSubnetPingSweep = this._smartSubnetPingSweep;
    }
    if (this._snmpCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpCollection = this._snmpCollection;
    }
    if (this._switchPortDataCollectionPolling !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortDataCollectionPolling = this._switchPortDataCollectionPolling;
    }
    if (this._switchPortDataCollectionPollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortDataCollectionPollingInterval = this._switchPortDataCollectionPollingInterval;
    }
    if (this._switchPortDataCollectionPollingSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchPortDataCollectionPollingSchedule = this._switchPortDataCollectionPollingSchedule?.internalValue;
    }
    if (this._useGlobalPollingFrequencyModifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGlobalPollingFrequencyModifier = this._useGlobalPollingFrequencyModifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoArpRefreshBeforeSwitchPortPolling = undefined;
      this._cliCollection = undefined;
      this._completePingSweep = undefined;
      this._credentialGroup = undefined;
      this._deviceProfile = undefined;
      this._netbiosScanning = undefined;
      this._pollingFrequencyModifier = undefined;
      this._portScanning = undefined;
      this._smartSubnetPingSweep = undefined;
      this._snmpCollection = undefined;
      this._switchPortDataCollectionPolling = undefined;
      this._switchPortDataCollectionPollingInterval = undefined;
      this._switchPortDataCollectionPollingSchedule.internalValue = undefined;
      this._useGlobalPollingFrequencyModifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoArpRefreshBeforeSwitchPortPolling = value.autoArpRefreshBeforeSwitchPortPolling;
      this._cliCollection = value.cliCollection;
      this._completePingSweep = value.completePingSweep;
      this._credentialGroup = value.credentialGroup;
      this._deviceProfile = value.deviceProfile;
      this._netbiosScanning = value.netbiosScanning;
      this._pollingFrequencyModifier = value.pollingFrequencyModifier;
      this._portScanning = value.portScanning;
      this._smartSubnetPingSweep = value.smartSubnetPingSweep;
      this._snmpCollection = value.snmpCollection;
      this._switchPortDataCollectionPolling = value.switchPortDataCollectionPolling;
      this._switchPortDataCollectionPollingInterval = value.switchPortDataCollectionPollingInterval;
      this._switchPortDataCollectionPollingSchedule.internalValue = value.switchPortDataCollectionPollingSchedule;
      this._useGlobalPollingFrequencyModifier = value.useGlobalPollingFrequencyModifier;
    }
  }

  // auto_arp_refresh_before_switch_port_polling - computed: true, optional: true, required: false
  private _autoArpRefreshBeforeSwitchPortPolling?: boolean | cdktf.IResolvable; 
  public get autoArpRefreshBeforeSwitchPortPolling() {
    return this.getBooleanAttribute('auto_arp_refresh_before_switch_port_polling');
  }
  public set autoArpRefreshBeforeSwitchPortPolling(value: boolean | cdktf.IResolvable) {
    this._autoArpRefreshBeforeSwitchPortPolling = value;
  }
  public resetAutoArpRefreshBeforeSwitchPortPolling() {
    this._autoArpRefreshBeforeSwitchPortPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoArpRefreshBeforeSwitchPortPollingInput() {
    return this._autoArpRefreshBeforeSwitchPortPolling;
  }

  // cli_collection - computed: true, optional: true, required: false
  private _cliCollection?: boolean | cdktf.IResolvable; 
  public get cliCollection() {
    return this.getBooleanAttribute('cli_collection');
  }
  public set cliCollection(value: boolean | cdktf.IResolvable) {
    this._cliCollection = value;
  }
  public resetCliCollection() {
    this._cliCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliCollectionInput() {
    return this._cliCollection;
  }

  // complete_ping_sweep - computed: true, optional: true, required: false
  private _completePingSweep?: boolean | cdktf.IResolvable; 
  public get completePingSweep() {
    return this.getBooleanAttribute('complete_ping_sweep');
  }
  public set completePingSweep(value: boolean | cdktf.IResolvable) {
    this._completePingSweep = value;
  }
  public resetCompletePingSweep() {
    this._completePingSweep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get completePingSweepInput() {
    return this._completePingSweep;
  }

  // credential_group - computed: true, optional: true, required: false
  private _credentialGroup?: string; 
  public get credentialGroup() {
    return this.getStringAttribute('credential_group');
  }
  public set credentialGroup(value: string) {
    this._credentialGroup = value;
  }
  public resetCredentialGroup() {
    this._credentialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialGroupInput() {
    return this._credentialGroup;
  }

  // device_profile - computed: true, optional: true, required: false
  private _deviceProfile?: boolean | cdktf.IResolvable; 
  public get deviceProfile() {
    return this.getBooleanAttribute('device_profile');
  }
  public set deviceProfile(value: boolean | cdktf.IResolvable) {
    this._deviceProfile = value;
  }
  public resetDeviceProfile() {
    this._deviceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceProfileInput() {
    return this._deviceProfile;
  }

  // netbios_scanning - computed: true, optional: true, required: false
  private _netbiosScanning?: boolean | cdktf.IResolvable; 
  public get netbiosScanning() {
    return this.getBooleanAttribute('netbios_scanning');
  }
  public set netbiosScanning(value: boolean | cdktf.IResolvable) {
    this._netbiosScanning = value;
  }
  public resetNetbiosScanning() {
    this._netbiosScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netbiosScanningInput() {
    return this._netbiosScanning;
  }

  // polling_frequency_modifier - computed: true, optional: true, required: false
  private _pollingFrequencyModifier?: string; 
  public get pollingFrequencyModifier() {
    return this.getStringAttribute('polling_frequency_modifier');
  }
  public set pollingFrequencyModifier(value: string) {
    this._pollingFrequencyModifier = value;
  }
  public resetPollingFrequencyModifier() {
    this._pollingFrequencyModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingFrequencyModifierInput() {
    return this._pollingFrequencyModifier;
  }

  // port_scanning - computed: true, optional: true, required: false
  private _portScanning?: boolean | cdktf.IResolvable; 
  public get portScanning() {
    return this.getBooleanAttribute('port_scanning');
  }
  public set portScanning(value: boolean | cdktf.IResolvable) {
    this._portScanning = value;
  }
  public resetPortScanning() {
    this._portScanning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portScanningInput() {
    return this._portScanning;
  }

  // smart_subnet_ping_sweep - computed: true, optional: true, required: false
  private _smartSubnetPingSweep?: boolean | cdktf.IResolvable; 
  public get smartSubnetPingSweep() {
    return this.getBooleanAttribute('smart_subnet_ping_sweep');
  }
  public set smartSubnetPingSweep(value: boolean | cdktf.IResolvable) {
    this._smartSubnetPingSweep = value;
  }
  public resetSmartSubnetPingSweep() {
    this._smartSubnetPingSweep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartSubnetPingSweepInput() {
    return this._smartSubnetPingSweep;
  }

  // snmp_collection - computed: true, optional: true, required: false
  private _snmpCollection?: boolean | cdktf.IResolvable; 
  public get snmpCollection() {
    return this.getBooleanAttribute('snmp_collection');
  }
  public set snmpCollection(value: boolean | cdktf.IResolvable) {
    this._snmpCollection = value;
  }
  public resetSnmpCollection() {
    this._snmpCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpCollectionInput() {
    return this._snmpCollection;
  }

  // switch_port_data_collection_polling - computed: true, optional: true, required: false
  private _switchPortDataCollectionPolling?: string; 
  public get switchPortDataCollectionPolling() {
    return this.getStringAttribute('switch_port_data_collection_polling');
  }
  public set switchPortDataCollectionPolling(value: string) {
    this._switchPortDataCollectionPolling = value;
  }
  public resetSwitchPortDataCollectionPolling() {
    this._switchPortDataCollectionPolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortDataCollectionPollingInput() {
    return this._switchPortDataCollectionPolling;
  }

  // switch_port_data_collection_polling_interval - computed: true, optional: true, required: false
  private _switchPortDataCollectionPollingInterval?: number; 
  public get switchPortDataCollectionPollingInterval() {
    return this.getNumberAttribute('switch_port_data_collection_polling_interval');
  }
  public set switchPortDataCollectionPollingInterval(value: number) {
    this._switchPortDataCollectionPollingInterval = value;
  }
  public resetSwitchPortDataCollectionPollingInterval() {
    this._switchPortDataCollectionPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortDataCollectionPollingIntervalInput() {
    return this._switchPortDataCollectionPollingInterval;
  }

  // switch_port_data_collection_polling_schedule - computed: true, optional: true, required: false
  private _switchPortDataCollectionPollingSchedule = new DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference(this, "switch_port_data_collection_polling_schedule");
  public get switchPortDataCollectionPollingSchedule() {
    return this._switchPortDataCollectionPollingSchedule;
  }
  public putSwitchPortDataCollectionPollingSchedule(value: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule) {
    this._switchPortDataCollectionPollingSchedule.internalValue = value;
  }
  public resetSwitchPortDataCollectionPollingSchedule() {
    this._switchPortDataCollectionPollingSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchPortDataCollectionPollingScheduleInput() {
    return this._switchPortDataCollectionPollingSchedule.internalValue;
  }

  // use_global_polling_frequency_modifier - computed: true, optional: true, required: false
  private _useGlobalPollingFrequencyModifier?: boolean | cdktf.IResolvable; 
  public get useGlobalPollingFrequencyModifier() {
    return this.getBooleanAttribute('use_global_polling_frequency_modifier');
  }
  public set useGlobalPollingFrequencyModifier(value: boolean | cdktf.IResolvable) {
    this._useGlobalPollingFrequencyModifier = value;
  }
  public resetUseGlobalPollingFrequencyModifier() {
    this._useGlobalPollingFrequencyModifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGlobalPollingFrequencyModifierInput() {
    return this._useGlobalPollingFrequencyModifier;
  }
}
export interface DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#day_of_month DataNiosIpamIpv6Network#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#disable DataNiosIpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#every DataNiosIpamIpv6Network#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#frequency DataNiosIpamIpv6Network#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#hour_of_day DataNiosIpamIpv6Network#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#minutes_past_hour DataNiosIpamIpv6Network#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#month DataNiosIpamIpv6Network#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#recurring_time DataNiosIpamIpv6Network#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#repeat DataNiosIpamIpv6Network#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#time_zone DataNiosIpamIpv6Network#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#weekdays DataNiosIpamIpv6Network#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#year DataNiosIpamIpv6Network#year}
  */
  readonly year?: number;
}

export function dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#blackout_duration DataNiosIpamIpv6Network#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * A Schedule Setting struct that determines blackout schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#blackout_schedule DataNiosIpamIpv6Network#blackout_schedule}
  */
  readonly blackoutSchedule?: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#enable_blackout DataNiosIpamIpv6Network#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingToTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blackout_duration: {
      value: cdktf.numberToHclTerraform(struct!.blackoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blackout_schedule: {
      value: dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule",
    },
    enable_blackout: {
      value: cdktf.booleanToHclTerraform(struct!.enableBlackout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutDuration = this._blackoutDuration;
    }
    if (this._blackoutSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutSchedule = this._blackoutSchedule?.internalValue;
    }
    if (this._enableBlackout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBlackout = this._enableBlackout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackoutDuration = undefined;
      this._blackoutSchedule.internalValue = undefined;
      this._enableBlackout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackoutDuration = value.blackoutDuration;
      this._blackoutSchedule.internalValue = value.blackoutSchedule;
      this._enableBlackout = value.enableBlackout;
    }
  }

  // blackout_duration - computed: true, optional: true, required: false
  private _blackoutDuration?: number; 
  public get blackoutDuration() {
    return this.getNumberAttribute('blackout_duration');
  }
  public set blackoutDuration(value: number) {
    this._blackoutDuration = value;
  }
  public resetBlackoutDuration() {
    this._blackoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutDurationInput() {
    return this._blackoutDuration;
  }

  // blackout_schedule - computed: true, optional: true, required: false
  private _blackoutSchedule = new DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingBlackoutSchedule) {
    this._blackoutSchedule.internalValue = value;
  }
  public resetBlackoutSchedule() {
    this._blackoutSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutScheduleInput() {
    return this._blackoutSchedule.internalValue;
  }

  // enable_blackout - computed: true, optional: true, required: false
  private _enableBlackout?: boolean | cdktf.IResolvable; 
  public get enableBlackout() {
    return this.getBooleanAttribute('enable_blackout');
  }
  public set enableBlackout(value: boolean | cdktf.IResolvable) {
    this._enableBlackout = value;
  }
  public resetEnableBlackout() {
    this._enableBlackout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlackoutInput() {
    return this._enableBlackout;
  }
}
export interface DataNiosIpamIpv6NetworkResultFederatedRealms {
  /**
  * The federated realm id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#id DataNiosIpamIpv6Network#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The federated realm name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#name DataNiosIpamIpv6Network#name}
  */
  readonly name: string;
}

export function dataNiosIpamIpv6NetworkResultFederatedRealmsToTerraform(struct?: DataNiosIpamIpv6NetworkResultFederatedRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosIpamIpv6NetworkResultFederatedRealmsToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultFederatedRealms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataNiosIpamIpv6NetworkResultFederatedRealmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResultFederatedRealms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultFederatedRealms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: true
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
}

export class DataNiosIpamIpv6NetworkResultFederatedRealmsList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResultFederatedRealms[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultFederatedRealmsOutputReference {
    return new DataNiosIpamIpv6NetworkResultFederatedRealmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamIpv6NetworkResultFuncCall {
  /**
  * The attribute to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#attribute_name DataNiosIpamIpv6Network#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The object to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#object DataNiosIpamIpv6Network#object}
  */
  readonly object?: string;
  /**
  * The function to be called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#object_function DataNiosIpamIpv6Network#object_function}
  */
  readonly objectFunction?: string;
  /**
  * The parameters for the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#object_parameters DataNiosIpamIpv6Network#object_parameters}
  */
  readonly objectParameters?: { [key: string]: string };
  /**
  * The parameters for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#parameters DataNiosIpamIpv6Network#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * The result field of the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#result_field DataNiosIpamIpv6Network#result_field}
  */
  readonly resultField?: string;
}

export function dataNiosIpamIpv6NetworkResultFuncCallToTerraform(struct?: DataNiosIpamIpv6NetworkResultFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    object: cdktf.stringToTerraform(struct!.object),
    object_function: cdktf.stringToTerraform(struct!.objectFunction),
    object_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.objectParameters),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    result_field: cdktf.stringToTerraform(struct!.resultField),
  }
}


export function dataNiosIpamIpv6NetworkResultFuncCallToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultFuncCall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_function: {
      value: cdktf.stringToHclTerraform(struct!.objectFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.objectParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    result_field: {
      value: cdktf.stringToHclTerraform(struct!.resultField),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultFuncCallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultFuncCall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._objectFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectFunction = this._objectFunction;
    }
    if (this._objectParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectParameters = this._objectParameters;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._resultField !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultField = this._resultField;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultFuncCall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._object = undefined;
      this._objectFunction = undefined;
      this._objectParameters = undefined;
      this._parameters = undefined;
      this._resultField = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._object = value.object;
      this._objectFunction = value.objectFunction;
      this._objectParameters = value.objectParameters;
      this._parameters = value.parameters;
      this._resultField = value.resultField;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // object - computed: true, optional: true, required: false
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // object_function - computed: true, optional: true, required: false
  private _objectFunction?: string; 
  public get objectFunction() {
    return this.getStringAttribute('object_function');
  }
  public set objectFunction(value: string) {
    this._objectFunction = value;
  }
  public resetObjectFunction() {
    this._objectFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectFunctionInput() {
    return this._objectFunction;
  }

  // object_parameters - computed: true, optional: true, required: false
  private _objectParameters?: { [key: string]: string }; 
  public get objectParameters() {
    return this.getStringMapAttribute('object_parameters');
  }
  public set objectParameters(value: { [key: string]: string }) {
    this._objectParameters = value;
  }
  public resetObjectParameters() {
    this._objectParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectParametersInput() {
    return this._objectParameters;
  }

  // parameters - computed: true, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // result_field - computed: true, optional: true, required: false
  private _resultField?: string; 
  public get resultField() {
    return this.getStringAttribute('result_field');
  }
  public set resultField(value: string) {
    this._resultField = value;
  }
  public resetResultField() {
    this._resultField = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultFieldInput() {
    return this._resultField;
  }
}
export interface DataNiosIpamIpv6NetworkResultLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#filter DataNiosIpamIpv6Network#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#type DataNiosIpamIpv6Network#type}
  */
  readonly type: string;
}

export function dataNiosIpamIpv6NetworkResultLogicFilterRulesToTerraform(struct?: DataNiosIpamIpv6NetworkResultLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosIpamIpv6NetworkResultLogicFilterRulesToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResultLogicFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultLogicFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._type = value.type;
    }
  }

  // filter - computed: true, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataNiosIpamIpv6NetworkResultLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResultLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultLogicFilterRulesOutputReference {
    return new DataNiosIpamIpv6NetworkResultLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamIpv6NetworkResultMembers {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ipv4addr DataNiosIpamIpv6Network#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ipv6addr DataNiosIpamIpv6Network#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#name DataNiosIpamIpv6Network#name}
  */
  readonly name?: string;
}

export function dataNiosIpamIpv6NetworkResultMembersToTerraform(struct?: DataNiosIpamIpv6NetworkResultMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
    ipv6addr: cdktf.stringToTerraform(struct!.ipv6Addr),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosIpamIpv6NetworkResultMembersToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6addr: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataNiosIpamIpv6NetworkResultMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResultMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    if (this._ipv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Addr = this._ipv6Addr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
      this._ipv6Addr = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
      this._ipv6Addr = value.ipv6Addr;
      this._name = value.name;
    }
  }

  // ipv4addr - computed: true, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // ipv6addr - computed: true, optional: true, required: false
  private _ipv6Addr?: string; 
  public get ipv6Addr() {
    return this.getStringAttribute('ipv6addr');
  }
  public set ipv6Addr(value: string) {
    this._ipv6Addr = value;
  }
  public resetIpv6Addr() {
    this._ipv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddrInput() {
    return this._ipv6Addr;
  }

  // name - computed: true, optional: true, required: false
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

export class DataNiosIpamIpv6NetworkResultMembersList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResultMembers[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultMembersOutputReference {
    return new DataNiosIpamIpv6NetworkResultMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamIpv6NetworkResultMsAdUserData {
}

export function dataNiosIpamIpv6NetworkResultMsAdUserDataToTerraform(struct?: DataNiosIpamIpv6NetworkResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosIpamIpv6NetworkResultMsAdUserDataToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosIpamIpv6NetworkResultMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultMsAdUserData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active_users_count - computed: true, optional: false, required: false
  public get activeUsersCount() {
    return this.getNumberAttribute('active_users_count');
  }
}
export interface DataNiosIpamIpv6NetworkResultOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#name DataNiosIpamIpv6Network#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#num DataNiosIpamIpv6Network#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_option DataNiosIpamIpv6Network#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#value DataNiosIpamIpv6Network#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#vendor_class DataNiosIpamIpv6Network#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosIpamIpv6NetworkResultOptionsToTerraform(struct?: DataNiosIpamIpv6NetworkResultOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function dataNiosIpamIpv6NetworkResultOptionsToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultOptions | cdktf.IResolvable): any {
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
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResultOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
    }
  }

  // name - computed: true, optional: true, required: false
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

  // num - computed: true, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: true, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
  }

  // value - computed: true, optional: true, required: false
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

  // vendor_class - computed: true, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class DataNiosIpamIpv6NetworkResultOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResultOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultOptionsOutputReference {
    return new DataNiosIpamIpv6NetworkResultOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#day_of_month DataNiosIpamIpv6Network#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#disable DataNiosIpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#every DataNiosIpamIpv6Network#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#frequency DataNiosIpamIpv6Network#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#hour_of_day DataNiosIpamIpv6Network#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#minutes_past_hour DataNiosIpamIpv6Network#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#month DataNiosIpamIpv6Network#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#recurring_time DataNiosIpamIpv6Network#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#repeat DataNiosIpamIpv6Network#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#time_zone DataNiosIpamIpv6Network#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#weekdays DataNiosIpamIpv6Network#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#year DataNiosIpamIpv6Network#year}
  */
  readonly year?: number;
}

export function dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutScheduleToTerraform(struct?: DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    day_of_month: cdktf.numberToTerraform(struct!.dayOfMonth),
    disable: cdktf.booleanToTerraform(struct!.disable),
    every: cdktf.numberToTerraform(struct!.every),
    frequency: cdktf.stringToTerraform(struct!.frequency),
    hour_of_day: cdktf.numberToTerraform(struct!.hourOfDay),
    minutes_past_hour: cdktf.numberToTerraform(struct!.minutesPastHour),
    month: cdktf.numberToTerraform(struct!.month),
    recurring_time: cdktf.numberToTerraform(struct!.recurringTime),
    repeat: cdktf.stringToTerraform(struct!.repeat),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
    weekdays: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.weekdays),
    year: cdktf.numberToTerraform(struct!.year),
  }
}


export function dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    day_of_month: {
      value: cdktf.numberToHclTerraform(struct!.dayOfMonth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    every: {
      value: cdktf.numberToHclTerraform(struct!.every),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frequency: {
      value: cdktf.stringToHclTerraform(struct!.frequency),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hour_of_day: {
      value: cdktf.numberToHclTerraform(struct!.hourOfDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minutes_past_hour: {
      value: cdktf.numberToHclTerraform(struct!.minutesPastHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    month: {
      value: cdktf.numberToHclTerraform(struct!.month),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recurring_time: {
      value: cdktf.numberToHclTerraform(struct!.recurringTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    repeat: {
      value: cdktf.stringToHclTerraform(struct!.repeat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weekdays: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.weekdays),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    year: {
      value: cdktf.numberToHclTerraform(struct!.year),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dayOfMonth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dayOfMonth = this._dayOfMonth;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._every !== undefined) {
      hasAnyValues = true;
      internalValueResult.every = this._every;
    }
    if (this._frequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.frequency = this._frequency;
    }
    if (this._hourOfDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.hourOfDay = this._hourOfDay;
    }
    if (this._minutesPastHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutesPastHour = this._minutesPastHour;
    }
    if (this._month !== undefined) {
      hasAnyValues = true;
      internalValueResult.month = this._month;
    }
    if (this._recurringTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurringTime = this._recurringTime;
    }
    if (this._repeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.repeat = this._repeat;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    if (this._weekdays !== undefined) {
      hasAnyValues = true;
      internalValueResult.weekdays = this._weekdays;
    }
    if (this._year !== undefined) {
      hasAnyValues = true;
      internalValueResult.year = this._year;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dayOfMonth = undefined;
      this._disable = undefined;
      this._every = undefined;
      this._frequency = undefined;
      this._hourOfDay = undefined;
      this._minutesPastHour = undefined;
      this._month = undefined;
      this._recurringTime = undefined;
      this._repeat = undefined;
      this._timeZone = undefined;
      this._weekdays = undefined;
      this._year = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dayOfMonth = value.dayOfMonth;
      this._disable = value.disable;
      this._every = value.every;
      this._frequency = value.frequency;
      this._hourOfDay = value.hourOfDay;
      this._minutesPastHour = value.minutesPastHour;
      this._month = value.month;
      this._recurringTime = value.recurringTime;
      this._repeat = value.repeat;
      this._timeZone = value.timeZone;
      this._weekdays = value.weekdays;
      this._year = value.year;
    }
  }

  // day_of_month - computed: true, optional: true, required: false
  private _dayOfMonth?: number; 
  public get dayOfMonth() {
    return this.getNumberAttribute('day_of_month');
  }
  public set dayOfMonth(value: number) {
    this._dayOfMonth = value;
  }
  public resetDayOfMonth() {
    this._dayOfMonth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dayOfMonthInput() {
    return this._dayOfMonth;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // every - computed: true, optional: true, required: false
  private _every?: number; 
  public get every() {
    return this.getNumberAttribute('every');
  }
  public set every(value: number) {
    this._every = value;
  }
  public resetEvery() {
    this._every = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get everyInput() {
    return this._every;
  }

  // frequency - computed: true, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // hour_of_day - computed: true, optional: true, required: false
  private _hourOfDay?: number; 
  public get hourOfDay() {
    return this.getNumberAttribute('hour_of_day');
  }
  public set hourOfDay(value: number) {
    this._hourOfDay = value;
  }
  public resetHourOfDay() {
    this._hourOfDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hourOfDayInput() {
    return this._hourOfDay;
  }

  // minutes_past_hour - computed: true, optional: true, required: false
  private _minutesPastHour?: number; 
  public get minutesPastHour() {
    return this.getNumberAttribute('minutes_past_hour');
  }
  public set minutesPastHour(value: number) {
    this._minutesPastHour = value;
  }
  public resetMinutesPastHour() {
    this._minutesPastHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesPastHourInput() {
    return this._minutesPastHour;
  }

  // month - computed: true, optional: true, required: false
  private _month?: number; 
  public get month() {
    return this.getNumberAttribute('month');
  }
  public set month(value: number) {
    this._month = value;
  }
  public resetMonth() {
    this._month = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthInput() {
    return this._month;
  }

  // recurring_time - computed: true, optional: true, required: false
  private _recurringTime?: number; 
  public get recurringTime() {
    return this.getNumberAttribute('recurring_time');
  }
  public set recurringTime(value: number) {
    this._recurringTime = value;
  }
  public resetRecurringTime() {
    this._recurringTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurringTimeInput() {
    return this._recurringTime;
  }

  // repeat - computed: true, optional: true, required: false
  private _repeat?: string; 
  public get repeat() {
    return this.getStringAttribute('repeat');
  }
  public set repeat(value: string) {
    this._repeat = value;
  }
  public resetRepeat() {
    this._repeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatInput() {
    return this._repeat;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // weekdays - computed: true, optional: true, required: false
  private _weekdays?: string[]; 
  public get weekdays() {
    return this.getListAttribute('weekdays');
  }
  public set weekdays(value: string[]) {
    this._weekdays = value;
  }
  public resetWeekdays() {
    this._weekdays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekdaysInput() {
    return this._weekdays;
  }

  // year - computed: true, optional: true, required: false
  private _year?: number; 
  public get year() {
    return this.getNumberAttribute('year');
  }
  public set year(value: number) {
    this._year = value;
  }
  public resetYear() {
    this._year = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yearInput() {
    return this._year;
  }
}
export interface DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#blackout_duration DataNiosIpamIpv6Network#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * A Schedule Setting struct that determines blackout schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#blackout_schedule DataNiosIpamIpv6Network#blackout_schedule}
  */
  readonly blackoutSchedule?: DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#enable_blackout DataNiosIpamIpv6Network#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingToTerraform(struct?: DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blackout_duration: {
      value: cdktf.numberToHclTerraform(struct!.blackoutDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blackout_schedule: {
      value: dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule",
    },
    enable_blackout: {
      value: cdktf.booleanToHclTerraform(struct!.enableBlackout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackoutDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutDuration = this._blackoutDuration;
    }
    if (this._blackoutSchedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackoutSchedule = this._blackoutSchedule?.internalValue;
    }
    if (this._enableBlackout !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableBlackout = this._enableBlackout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackoutDuration = undefined;
      this._blackoutSchedule.internalValue = undefined;
      this._enableBlackout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackoutDuration = value.blackoutDuration;
      this._blackoutSchedule.internalValue = value.blackoutSchedule;
      this._enableBlackout = value.enableBlackout;
    }
  }

  // blackout_duration - computed: true, optional: true, required: false
  private _blackoutDuration?: number; 
  public get blackoutDuration() {
    return this.getNumberAttribute('blackout_duration');
  }
  public set blackoutDuration(value: number) {
    this._blackoutDuration = value;
  }
  public resetBlackoutDuration() {
    this._blackoutDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutDurationInput() {
    return this._blackoutDuration;
  }

  // blackout_schedule - computed: true, optional: true, required: false
  private _blackoutSchedule = new DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingBlackoutSchedule) {
    this._blackoutSchedule.internalValue = value;
  }
  public resetBlackoutSchedule() {
    this._blackoutSchedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackoutScheduleInput() {
    return this._blackoutSchedule.internalValue;
  }

  // enable_blackout - computed: true, optional: true, required: false
  private _enableBlackout?: boolean | cdktf.IResolvable; 
  public get enableBlackout() {
    return this.getBooleanAttribute('enable_blackout');
  }
  public set enableBlackout(value: boolean | cdktf.IResolvable) {
    this._enableBlackout = value;
  }
  public resetEnableBlackout() {
    this._enableBlackout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBlackoutInput() {
    return this._enableBlackout;
  }
}
export interface DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes {
  /**
  * The name of the extensible attribute definition object the Cisco ISE attribute that is enabled for subscription is mapped on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#mapped_ea DataNiosIpamIpv6Network#mapped_ea}
  */
  readonly mappedEa?: string;
  /**
  * The Cisco ISE attribute name that is enabled for publishsing from a Cisco ISE endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#name DataNiosIpamIpv6Network#name}
  */
  readonly name?: string;
}

export function dataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesToTerraform(struct?: DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapped_ea: cdktf.stringToTerraform(struct!.mappedEa),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapped_ea: {
      value: cdktf.stringToHclTerraform(struct!.mappedEa),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mappedEa !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedEa = this._mappedEa;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mappedEa = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mappedEa = value.mappedEa;
      this._name = value.name;
    }
  }

  // mapped_ea - computed: true, optional: true, required: false
  private _mappedEa?: string; 
  public get mappedEa() {
    return this.getStringAttribute('mapped_ea');
  }
  public set mappedEa(value: string) {
    this._mappedEa = value;
  }
  public resetMappedEa() {
    this._mappedEa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedEaInput() {
    return this._mappedEa;
  }

  // name - computed: true, optional: true, required: false
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

export class DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesOutputReference {
    return new DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamIpv6NetworkResultSubscribeSettings {
  /**
  * The list of Cisco ISE attributes allowed for subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#enabled_attributes DataNiosIpamIpv6Network#enabled_attributes}
  */
  readonly enabledAttributes?: string[];
  /**
  * The list of NIOS extensible attributes to Cisco ISE attributes mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#mapped_ea_attributes DataNiosIpamIpv6Network#mapped_ea_attributes}
  */
  readonly mappedEaAttributes?: DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable;
}

export function dataNiosIpamIpv6NetworkResultSubscribeSettingsToTerraform(struct?: DataNiosIpamIpv6NetworkResultSubscribeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledAttributes),
    mapped_ea_attributes: cdktf.listMapper(dataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesToTerraform, false)(struct!.mappedEaAttributes),
  }
}


export function dataNiosIpamIpv6NetworkResultSubscribeSettingsToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultSubscribeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mapped_ea_attributes: {
      value: cdktf.listMapperHcl(dataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesToHclTerraform, false)(struct!.mappedEaAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultSubscribeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosIpamIpv6NetworkResultSubscribeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabledAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledAttributes = this._enabledAttributes;
    }
    if (this._mappedEaAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedEaAttributes = this._mappedEaAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultSubscribeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabledAttributes = undefined;
      this._mappedEaAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabledAttributes = value.enabledAttributes;
      this._mappedEaAttributes.internalValue = value.mappedEaAttributes;
    }
  }

  // enabled_attributes - computed: true, optional: true, required: false
  private _enabledAttributes?: string[]; 
  public get enabledAttributes() {
    return this.getListAttribute('enabled_attributes');
  }
  public set enabledAttributes(value: string[]) {
    this._enabledAttributes = value;
  }
  public resetEnabledAttributes() {
    this._enabledAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledAttributesInput() {
    return this._enabledAttributes;
  }

  // mapped_ea_attributes - computed: true, optional: true, required: false
  private _mappedEaAttributes = new DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributesList(this, "mapped_ea_attributes", false);
  public get mappedEaAttributes() {
    return this._mappedEaAttributes;
  }
  public putMappedEaAttributes(value: DataNiosIpamIpv6NetworkResultSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable) {
    this._mappedEaAttributes.internalValue = value;
  }
  public resetMappedEaAttributes() {
    this._mappedEaAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedEaAttributesInput() {
    return this._mappedEaAttributes.internalValue;
  }
}
export interface DataNiosIpamIpv6NetworkResultVlans {
  /**
  * Reference to the underlying StaticVlan object vlan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#vlan DataNiosIpamIpv6Network#vlan}
  */
  readonly vlan?: { [key: string]: string };
}

export function dataNiosIpamIpv6NetworkResultVlansToTerraform(struct?: DataNiosIpamIpv6NetworkResultVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vlan: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.vlan),
  }
}


export function dataNiosIpamIpv6NetworkResultVlansToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultVlans | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vlan: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.vlan),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultVlansOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResultVlans | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlan = this._vlan;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultVlans | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vlan = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vlan = value.vlan;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // vlan - computed: true, optional: true, required: false
  private _vlan?: { [key: string]: string }; 
  public get vlan() {
    return this.getStringMapAttribute('vlan');
  }
  public set vlan(value: { [key: string]: string }) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }
}

export class DataNiosIpamIpv6NetworkResultVlansList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResultVlans[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultVlansOutputReference {
    return new DataNiosIpamIpv6NetworkResultVlansOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamIpv6NetworkResultZoneAssociations {
  /**
  * The FQDN of the authoritative forward zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#fqdn DataNiosIpamIpv6Network#fqdn}
  */
  readonly fqdn: string;
  /**
  * True if this is the default zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#is_default DataNiosIpamIpv6Network#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * The view to which the zone belongs. If a view is not specified, the default view is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#view DataNiosIpamIpv6Network#view}
  */
  readonly view?: string;
}

export function dataNiosIpamIpv6NetworkResultZoneAssociationsToTerraform(struct?: DataNiosIpamIpv6NetworkResultZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqdn: cdktf.stringToTerraform(struct!.fqdn),
    is_default: cdktf.booleanToTerraform(struct!.isDefault),
    view: cdktf.stringToTerraform(struct!.view),
  }
}


export function dataNiosIpamIpv6NetworkResultZoneAssociationsToHclTerraform(struct?: DataNiosIpamIpv6NetworkResultZoneAssociations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqdn: {
      value: cdktf.stringToHclTerraform(struct!.fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_default: {
      value: cdktf.booleanToHclTerraform(struct!.isDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    view: {
      value: cdktf.stringToHclTerraform(struct!.view),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultZoneAssociationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResultZoneAssociations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdn = this._fqdn;
    }
    if (this._isDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.isDefault = this._isDefault;
    }
    if (this._view !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResultZoneAssociations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqdn = undefined;
      this._isDefault = undefined;
      this._view = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqdn = value.fqdn;
      this._isDefault = value.isDefault;
      this._view = value.view;
    }
  }

  // fqdn - computed: true, optional: false, required: true
  private _fqdn?: string; 
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }
  public set fqdn(value: string) {
    this._fqdn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnInput() {
    return this._fqdn;
  }

  // is_default - computed: true, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // view - computed: true, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }
}

export class DataNiosIpamIpv6NetworkResultZoneAssociationsList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResultZoneAssociations[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultZoneAssociationsOutputReference {
    return new DataNiosIpamIpv6NetworkResultZoneAssociationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosIpamIpv6NetworkResult {
  /**
  * This flag controls whether reverse zones are automatically created when the network is added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#auto_create_reversezone DataNiosIpamIpv6Network#auto_create_reversezone}
  */
  readonly autoCreateReversezone?: boolean | cdktf.IResolvable;
  /**
  * Structure containing all cloud API related information for this object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#cloud_info DataNiosIpamIpv6Network#cloud_info}
  */
  readonly cloudInfo?: DataNiosIpamIpv6NetworkResultCloudInfo;
  /**
  * Comment for the network; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#comment DataNiosIpamIpv6Network#comment}
  */
  readonly comment?: string;
  /**
  * The dynamic DNS domain name the appliance uses specifically for DDNS updates for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ddns_domainname DataNiosIpamIpv6Network#ddns_domainname}
  */
  readonly ddnsDomainname?: string;
  /**
  * Use this method to set or retrieve the ddns_enable_option_fqdn flag of a DHCP IPv6 Network object. This method controls whether the FQDN option sent by the client is to be used, or if the server can automatically generate the FQDN. This setting overrides the upper-level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ddns_enable_option_fqdn DataNiosIpamIpv6Network#ddns_enable_option_fqdn}
  */
  readonly ddnsEnableOptionFqdn?: boolean | cdktf.IResolvable;
  /**
  * If this field is set to True, the DHCP server generates a hostname and updates DNS with it when the DHCP client request does not contain a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ddns_generate_hostname DataNiosIpamIpv6Network#ddns_generate_hostname}
  */
  readonly ddnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether only the DHCP server is allowed to update DNS, regardless of the DHCP clients requests. Note that changes for this field take effect only if ddns_enable_option_fqdn is True.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ddns_server_always_updates DataNiosIpamIpv6Network#ddns_server_always_updates}
  */
  readonly ddnsServerAlwaysUpdates?: boolean | cdktf.IResolvable;
  /**
  * The DNS update Time to Live (TTL) value of a DHCP network object. The TTL is a 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#ddns_ttl DataNiosIpamIpv6Network#ddns_ttl}
  */
  readonly ddnsTtl?: number;
  /**
  * The reason for deleting the RIR registration request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#delete_reason DataNiosIpamIpv6Network#delete_reason}
  */
  readonly deleteReason?: string;
  /**
  * Determines whether a network is disabled or not. When this is set to False, the network is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#disable DataNiosIpamIpv6Network#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Discovered bridge domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#discovered_bridge_domain DataNiosIpamIpv6Network#discovered_bridge_domain}
  */
  readonly discoveredBridgeDomain?: string;
  /**
  * Discovered tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#discovered_tenant DataNiosIpamIpv6Network#discovered_tenant}
  */
  readonly discoveredTenant?: string;
  /**
  * The discovery basic poll settings for this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#discovery_basic_poll_settings DataNiosIpamIpv6Network#discovery_basic_poll_settings}
  */
  readonly discoveryBasicPollSettings?: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings;
  /**
  * The discovery blackout setting for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#discovery_blackout_setting DataNiosIpamIpv6Network#discovery_blackout_setting}
  */
  readonly discoveryBlackoutSetting?: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting;
  /**
  * The member that will run discovery for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#discovery_member DataNiosIpamIpv6Network#discovery_member}
  */
  readonly discoveryMember?: string;
  /**
  * Use this method to set or retrieve the domain_name value of a DHCP IPv6 Network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#domain_name DataNiosIpamIpv6Network#domain_name}
  */
  readonly domainName?: string;
  /**
  * Use this method to set or retrieve the dynamic DNS updates flag of a DHCP IPv6 Network object. The DHCP server can send DDNS updates to DNS servers in the same Grid and to external DNS servers. This setting overrides the member level settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#domain_name_servers DataNiosIpamIpv6Network#domain_name_servers}
  */
  readonly domainNameServers?: string[];
  /**
  * The dynamic DNS updates flag of a DHCP IPv6 network object. If set to True, the DHCP server sends DDNS updates to DNS servers in the same Grid, and to external DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#enable_ddns DataNiosIpamIpv6Network#enable_ddns}
  */
  readonly enableDdns?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a discovery is enabled or not for this network. When this is set to False, the network discovery is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#enable_discovery DataNiosIpamIpv6Network#enable_discovery}
  */
  readonly enableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Determines if IFMAP publishing is enabled for the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#enable_ifmap_publishing DataNiosIpamIpv6Network#enable_ifmap_publishing}
  */
  readonly enableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the network should be immediately enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#enable_immediate_discovery DataNiosIpamIpv6Network#enable_immediate_discovery}
  */
  readonly enableImmediateDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#extattrs DataNiosIpamIpv6Network#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * This field contains the federated realms associated to this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#federated_realms DataNiosIpamIpv6Network#federated_realms}
  */
  readonly federatedRealms?: DataNiosIpamIpv6NetworkResultFederatedRealms[] | cdktf.IResolvable;
  /**
  * Specifies the function call to execute. The `next_available_network` function is supported for IPv6 Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#func_call DataNiosIpamIpv6Network#func_call}
  */
  readonly funcCall?: DataNiosIpamIpv6NetworkResultFuncCall;
  /**
  * This field contains the logic filters to be applied on this IPv6 network. This list corresponds to the match rules that are written to the DHCPv6 configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#logic_filter_rules DataNiosIpamIpv6Network#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosIpamIpv6NetworkResultLogicFilterRules[] | cdktf.IResolvable;
  /**
  * A list of members servers that serve DHCP for the network. All members in the array must be of the same type. The struct type must be indicated in each element, by setting the "_struct" member to the struct type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#members DataNiosIpamIpv6Network#members}
  */
  readonly members?: DataNiosIpamIpv6NetworkResultMembers[] | cdktf.IResolvable;
  /**
  * This field controls whether this object is synchronized with the Multi-Grid Master. If this field is set to True, objects are not synchronized.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#mgm_private DataNiosIpamIpv6Network#mgm_private}
  */
  readonly mgmPrivate?: boolean | cdktf.IResolvable;
  /**
  * The IPv6 network address in CIDR notation. The network address must be unique within the network view. This field is `required` unless a `func_call` is specified to invoke `next_available_network`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#network DataNiosIpamIpv6Network#network}
  */
  readonly network?: string;
  /**
  * The name of the network view in which this network resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#network_view DataNiosIpamIpv6Network#network_view}
  */
  readonly networkView?: string;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object. The option `dhcp-lease-time` cannot be configured for this object and instead 'valid_lifetime' attribute should be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#options DataNiosIpamIpv6Network#options}
  */
  readonly options?: DataNiosIpamIpv6NetworkResultOptions[] | cdktf.IResolvable;
  /**
  * The port control blackout setting for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#port_control_blackout_setting DataNiosIpamIpv6Network#port_control_blackout_setting}
  */
  readonly portControlBlackoutSetting?: DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting;
  /**
  * Use this method to set or retrieve the preferred lifetime value of a DHCP IPv6 Network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#preferred_lifetime DataNiosIpamIpv6Network#preferred_lifetime}
  */
  readonly preferredLifetime?: number;
  /**
  * If the field is set to True, the leases are kept in the Recycle Bin until one week after expiration. Otherwise, the leases are permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#recycle_leases DataNiosIpamIpv6Network#recycle_leases}
  */
  readonly recycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#restart_if_needed DataNiosIpamIpv6Network#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * The RIR organization associated with the IPv6 network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#rir_organization DataNiosIpamIpv6Network#rir_organization}
  */
  readonly rirOrganization?: string;
  /**
  * The RIR registration action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#rir_registration_action DataNiosIpamIpv6Network#rir_registration_action}
  */
  readonly rirRegistrationAction?: string;
  /**
  * The registration status of the IPv6 network in RIR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#rir_registration_status DataNiosIpamIpv6Network#rir_registration_status}
  */
  readonly rirRegistrationStatus?: string;
  /**
  * If the field is set to True, the discovery blackout setting will be used for port control blackout setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#same_port_control_discovery_blackout DataNiosIpamIpv6Network#same_port_control_discovery_blackout}
  */
  readonly samePortControlDiscoveryBlackout?: boolean | cdktf.IResolvable;
  /**
  * Determines whether to send the RIR registration request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#send_rir_request DataNiosIpamIpv6Network#send_rir_request}
  */
  readonly sendRirRequest?: boolean | cdktf.IResolvable;
  /**
  * The DHCP IPv6 Network Cisco ISE subscribe settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#subscribe_settings DataNiosIpamIpv6Network#subscribe_settings}
  */
  readonly subscribeSettings?: DataNiosIpamIpv6NetworkResultSubscribeSettings;
  /**
  * Determines whether the DHCP IPv6 Network is unmanaged or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#unmanaged DataNiosIpamIpv6Network#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
  /**
  * This field controls whether the DHCP server updates DNS when a DHCP lease is renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#update_dns_on_lease_renewal DataNiosIpamIpv6Network#update_dns_on_lease_renewal}
  */
  readonly updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_blackout_setting , port_control_blackout_setting, same_port_control_discovery_blackout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_blackout_setting DataNiosIpamIpv6Network#use_blackout_setting}
  */
  readonly useBlackoutSetting?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_domainname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_ddns_domainname DataNiosIpamIpv6Network#use_ddns_domainname}
  */
  readonly useDdnsDomainname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_enable_option_fqdn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_ddns_enable_option_fqdn DataNiosIpamIpv6Network#use_ddns_enable_option_fqdn}
  */
  readonly useDdnsEnableOptionFqdn?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_generate_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_ddns_generate_hostname DataNiosIpamIpv6Network#use_ddns_generate_hostname}
  */
  readonly useDdnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_ttl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_ddns_ttl DataNiosIpamIpv6Network#use_ddns_ttl}
  */
  readonly useDdnsTtl?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_basic_poll_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_discovery_basic_polling_settings DataNiosIpamIpv6Network#use_discovery_basic_polling_settings}
  */
  readonly useDiscoveryBasicPollingSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_domain_name DataNiosIpamIpv6Network#use_domain_name}
  */
  readonly useDomainName?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: domain_name_servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_domain_name_servers DataNiosIpamIpv6Network#use_domain_name_servers}
  */
  readonly useDomainNameServers?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ddns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_enable_ddns DataNiosIpamIpv6Network#use_enable_ddns}
  */
  readonly useEnableDdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_member , enable_discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_enable_discovery DataNiosIpamIpv6Network#use_enable_discovery}
  */
  readonly useEnableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ifmap_publishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_enable_ifmap_publishing DataNiosIpamIpv6Network#use_enable_ifmap_publishing}
  */
  readonly useEnableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_logic_filter_rules DataNiosIpamIpv6Network#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: mgm_private
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_mgm_private DataNiosIpamIpv6Network#use_mgm_private}
  */
  readonly useMgmPrivate?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_options DataNiosIpamIpv6Network#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: preferred_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_preferred_lifetime DataNiosIpamIpv6Network#use_preferred_lifetime}
  */
  readonly usePreferredLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recycle_leases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_recycle_leases DataNiosIpamIpv6Network#use_recycle_leases}
  */
  readonly useRecycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: subscribe_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_subscribe_settings DataNiosIpamIpv6Network#use_subscribe_settings}
  */
  readonly useSubscribeSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: update_dns_on_lease_renewal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_update_dns_on_lease_renewal DataNiosIpamIpv6Network#use_update_dns_on_lease_renewal}
  */
  readonly useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: valid_lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_valid_lifetime DataNiosIpamIpv6Network#use_valid_lifetime}
  */
  readonly useValidLifetime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: zone_associations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#use_zone_associations DataNiosIpamIpv6Network#use_zone_associations}
  */
  readonly useZoneAssociations?: boolean | cdktf.IResolvable;
  /**
  * Use this method to set or retrieve the valid lifetime value of a DHCP IPv6 Network object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#valid_lifetime DataNiosIpamIpv6Network#valid_lifetime}
  */
  readonly validLifetime?: number;
  /**
  * List of VLANs assigned to Network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#vlans DataNiosIpamIpv6Network#vlans}
  */
  readonly vlans?: DataNiosIpamIpv6NetworkResultVlans[] | cdktf.IResolvable;
  /**
  * The list of zones associated with this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#zone_associations DataNiosIpamIpv6Network#zone_associations}
  */
  readonly zoneAssociations?: DataNiosIpamIpv6NetworkResultZoneAssociations[] | cdktf.IResolvable;
}

export function dataNiosIpamIpv6NetworkResultToTerraform(struct?: DataNiosIpamIpv6NetworkResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_create_reversezone: cdktf.booleanToTerraform(struct!.autoCreateReversezone),
    cloud_info: dataNiosIpamIpv6NetworkResultCloudInfoToTerraform(struct!.cloudInfo),
    comment: cdktf.stringToTerraform(struct!.comment),
    ddns_domainname: cdktf.stringToTerraform(struct!.ddnsDomainname),
    ddns_enable_option_fqdn: cdktf.booleanToTerraform(struct!.ddnsEnableOptionFqdn),
    ddns_generate_hostname: cdktf.booleanToTerraform(struct!.ddnsGenerateHostname),
    ddns_server_always_updates: cdktf.booleanToTerraform(struct!.ddnsServerAlwaysUpdates),
    ddns_ttl: cdktf.numberToTerraform(struct!.ddnsTtl),
    delete_reason: cdktf.stringToTerraform(struct!.deleteReason),
    disable: cdktf.booleanToTerraform(struct!.disable),
    discovered_bridge_domain: cdktf.stringToTerraform(struct!.discoveredBridgeDomain),
    discovered_tenant: cdktf.stringToTerraform(struct!.discoveredTenant),
    discovery_basic_poll_settings: dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsToTerraform(struct!.discoveryBasicPollSettings),
    discovery_blackout_setting: dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingToTerraform(struct!.discoveryBlackoutSetting),
    discovery_member: cdktf.stringToTerraform(struct!.discoveryMember),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domainNameServers),
    enable_ddns: cdktf.booleanToTerraform(struct!.enableDdns),
    enable_discovery: cdktf.booleanToTerraform(struct!.enableDiscovery),
    enable_ifmap_publishing: cdktf.booleanToTerraform(struct!.enableIfmapPublishing),
    enable_immediate_discovery: cdktf.booleanToTerraform(struct!.enableImmediateDiscovery),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    federated_realms: cdktf.listMapper(dataNiosIpamIpv6NetworkResultFederatedRealmsToTerraform, false)(struct!.federatedRealms),
    func_call: dataNiosIpamIpv6NetworkResultFuncCallToTerraform(struct!.funcCall),
    logic_filter_rules: cdktf.listMapper(dataNiosIpamIpv6NetworkResultLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    members: cdktf.listMapper(dataNiosIpamIpv6NetworkResultMembersToTerraform, false)(struct!.members),
    mgm_private: cdktf.booleanToTerraform(struct!.mgmPrivate),
    network: cdktf.stringToTerraform(struct!.network),
    network_view: cdktf.stringToTerraform(struct!.networkView),
    options: cdktf.listMapper(dataNiosIpamIpv6NetworkResultOptionsToTerraform, false)(struct!.options),
    port_control_blackout_setting: dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingToTerraform(struct!.portControlBlackoutSetting),
    preferred_lifetime: cdktf.numberToTerraform(struct!.preferredLifetime),
    recycle_leases: cdktf.booleanToTerraform(struct!.recycleLeases),
    restart_if_needed: cdktf.booleanToTerraform(struct!.restartIfNeeded),
    rir_organization: cdktf.stringToTerraform(struct!.rirOrganization),
    rir_registration_action: cdktf.stringToTerraform(struct!.rirRegistrationAction),
    rir_registration_status: cdktf.stringToTerraform(struct!.rirRegistrationStatus),
    same_port_control_discovery_blackout: cdktf.booleanToTerraform(struct!.samePortControlDiscoveryBlackout),
    send_rir_request: cdktf.booleanToTerraform(struct!.sendRirRequest),
    subscribe_settings: dataNiosIpamIpv6NetworkResultSubscribeSettingsToTerraform(struct!.subscribeSettings),
    unmanaged: cdktf.booleanToTerraform(struct!.unmanaged),
    update_dns_on_lease_renewal: cdktf.booleanToTerraform(struct!.updateDnsOnLeaseRenewal),
    use_blackout_setting: cdktf.booleanToTerraform(struct!.useBlackoutSetting),
    use_ddns_domainname: cdktf.booleanToTerraform(struct!.useDdnsDomainname),
    use_ddns_enable_option_fqdn: cdktf.booleanToTerraform(struct!.useDdnsEnableOptionFqdn),
    use_ddns_generate_hostname: cdktf.booleanToTerraform(struct!.useDdnsGenerateHostname),
    use_ddns_ttl: cdktf.booleanToTerraform(struct!.useDdnsTtl),
    use_discovery_basic_polling_settings: cdktf.booleanToTerraform(struct!.useDiscoveryBasicPollingSettings),
    use_domain_name: cdktf.booleanToTerraform(struct!.useDomainName),
    use_domain_name_servers: cdktf.booleanToTerraform(struct!.useDomainNameServers),
    use_enable_ddns: cdktf.booleanToTerraform(struct!.useEnableDdns),
    use_enable_discovery: cdktf.booleanToTerraform(struct!.useEnableDiscovery),
    use_enable_ifmap_publishing: cdktf.booleanToTerraform(struct!.useEnableIfmapPublishing),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_mgm_private: cdktf.booleanToTerraform(struct!.useMgmPrivate),
    use_options: cdktf.booleanToTerraform(struct!.useOptions),
    use_preferred_lifetime: cdktf.booleanToTerraform(struct!.usePreferredLifetime),
    use_recycle_leases: cdktf.booleanToTerraform(struct!.useRecycleLeases),
    use_subscribe_settings: cdktf.booleanToTerraform(struct!.useSubscribeSettings),
    use_update_dns_on_lease_renewal: cdktf.booleanToTerraform(struct!.useUpdateDnsOnLeaseRenewal),
    use_valid_lifetime: cdktf.booleanToTerraform(struct!.useValidLifetime),
    use_zone_associations: cdktf.booleanToTerraform(struct!.useZoneAssociations),
    valid_lifetime: cdktf.numberToTerraform(struct!.validLifetime),
    vlans: cdktf.listMapper(dataNiosIpamIpv6NetworkResultVlansToTerraform, false)(struct!.vlans),
    zone_associations: cdktf.listMapper(dataNiosIpamIpv6NetworkResultZoneAssociationsToTerraform, false)(struct!.zoneAssociations),
  }
}


export function dataNiosIpamIpv6NetworkResultToHclTerraform(struct?: DataNiosIpamIpv6NetworkResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_create_reversezone: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateReversezone),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cloud_info: {
      value: dataNiosIpamIpv6NetworkResultCloudInfoToHclTerraform(struct!.cloudInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultCloudInfo",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_domainname: {
      value: cdktf.stringToHclTerraform(struct!.ddnsDomainname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ddns_enable_option_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsEnableOptionFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_generate_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsGenerateHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_server_always_updates: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsServerAlwaysUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ddns_ttl: {
      value: cdktf.numberToHclTerraform(struct!.ddnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete_reason: {
      value: cdktf.stringToHclTerraform(struct!.deleteReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovered_bridge_domain: {
      value: cdktf.stringToHclTerraform(struct!.discoveredBridgeDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovered_tenant: {
      value: cdktf.stringToHclTerraform(struct!.discoveredTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    discovery_basic_poll_settings: {
      value: dataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsToHclTerraform(struct!.discoveryBasicPollSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings",
    },
    discovery_blackout_setting: {
      value: dataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingToHclTerraform(struct!.discoveryBlackoutSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting",
    },
    discovery_member: {
      value: cdktf.stringToHclTerraform(struct!.discoveryMember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domainNameServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_ddns: {
      value: cdktf.booleanToHclTerraform(struct!.enableDdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.enableDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_ifmap_publishing: {
      value: cdktf.booleanToHclTerraform(struct!.enableIfmapPublishing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_immediate_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.enableImmediateDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    federated_realms: {
      value: cdktf.listMapperHcl(dataNiosIpamIpv6NetworkResultFederatedRealmsToHclTerraform, false)(struct!.federatedRealms),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamIpv6NetworkResultFederatedRealmsList",
    },
    func_call: {
      value: dataNiosIpamIpv6NetworkResultFuncCallToHclTerraform(struct!.funcCall),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultFuncCall",
    },
    logic_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosIpamIpv6NetworkResultLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamIpv6NetworkResultLogicFilterRulesList",
    },
    members: {
      value: cdktf.listMapperHcl(dataNiosIpamIpv6NetworkResultMembersToHclTerraform, false)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamIpv6NetworkResultMembersList",
    },
    mgm_private: {
      value: cdktf.booleanToHclTerraform(struct!.mgmPrivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_view: {
      value: cdktf.stringToHclTerraform(struct!.networkView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.listMapperHcl(dataNiosIpamIpv6NetworkResultOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamIpv6NetworkResultOptionsList",
    },
    port_control_blackout_setting: {
      value: dataNiosIpamIpv6NetworkResultPortControlBlackoutSettingToHclTerraform(struct!.portControlBlackoutSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting",
    },
    preferred_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.preferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recycle_leases: {
      value: cdktf.booleanToHclTerraform(struct!.recycleLeases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restart_if_needed: {
      value: cdktf.booleanToHclTerraform(struct!.restartIfNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rir_organization: {
      value: cdktf.stringToHclTerraform(struct!.rirOrganization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rir_registration_action: {
      value: cdktf.stringToHclTerraform(struct!.rirRegistrationAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rir_registration_status: {
      value: cdktf.stringToHclTerraform(struct!.rirRegistrationStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    same_port_control_discovery_blackout: {
      value: cdktf.booleanToHclTerraform(struct!.samePortControlDiscoveryBlackout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    send_rir_request: {
      value: cdktf.booleanToHclTerraform(struct!.sendRirRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    subscribe_settings: {
      value: dataNiosIpamIpv6NetworkResultSubscribeSettingsToHclTerraform(struct!.subscribeSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosIpamIpv6NetworkResultSubscribeSettings",
    },
    unmanaged: {
      value: cdktf.booleanToHclTerraform(struct!.unmanaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_dns_on_lease_renewal: {
      value: cdktf.booleanToHclTerraform(struct!.updateDnsOnLeaseRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_blackout_setting: {
      value: cdktf.booleanToHclTerraform(struct!.useBlackoutSetting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_domainname: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsDomainname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_enable_option_fqdn: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsEnableOptionFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_generate_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsGenerateHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ddns_ttl: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_discovery_basic_polling_settings: {
      value: cdktf.booleanToHclTerraform(struct!.useDiscoveryBasicPollingSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_domain_name: {
      value: cdktf.booleanToHclTerraform(struct!.useDomainName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_domain_name_servers: {
      value: cdktf.booleanToHclTerraform(struct!.useDomainNameServers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_enable_ddns: {
      value: cdktf.booleanToHclTerraform(struct!.useEnableDdns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_enable_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.useEnableDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_enable_ifmap_publishing: {
      value: cdktf.booleanToHclTerraform(struct!.useEnableIfmapPublishing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_logic_filter_rules: {
      value: cdktf.booleanToHclTerraform(struct!.useLogicFilterRules),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_mgm_private: {
      value: cdktf.booleanToHclTerraform(struct!.useMgmPrivate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_options: {
      value: cdktf.booleanToHclTerraform(struct!.useOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_preferred_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.usePreferredLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_recycle_leases: {
      value: cdktf.booleanToHclTerraform(struct!.useRecycleLeases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_subscribe_settings: {
      value: cdktf.booleanToHclTerraform(struct!.useSubscribeSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_update_dns_on_lease_renewal: {
      value: cdktf.booleanToHclTerraform(struct!.useUpdateDnsOnLeaseRenewal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_valid_lifetime: {
      value: cdktf.booleanToHclTerraform(struct!.useValidLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_zone_associations: {
      value: cdktf.booleanToHclTerraform(struct!.useZoneAssociations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    valid_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.validLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlans: {
      value: cdktf.listMapperHcl(dataNiosIpamIpv6NetworkResultVlansToHclTerraform, false)(struct!.vlans),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamIpv6NetworkResultVlansList",
    },
    zone_associations: {
      value: cdktf.listMapperHcl(dataNiosIpamIpv6NetworkResultZoneAssociationsToHclTerraform, false)(struct!.zoneAssociations),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosIpamIpv6NetworkResultZoneAssociationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosIpamIpv6NetworkResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosIpamIpv6NetworkResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoCreateReversezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateReversezone = this._autoCreateReversezone;
    }
    if (this._cloudInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudInfo = this._cloudInfo?.internalValue;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._ddnsDomainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsDomainname = this._ddnsDomainname;
    }
    if (this._ddnsEnableOptionFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsEnableOptionFqdn = this._ddnsEnableOptionFqdn;
    }
    if (this._ddnsGenerateHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsGenerateHostname = this._ddnsGenerateHostname;
    }
    if (this._ddnsServerAlwaysUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsServerAlwaysUpdates = this._ddnsServerAlwaysUpdates;
    }
    if (this._ddnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsTtl = this._ddnsTtl;
    }
    if (this._deleteReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteReason = this._deleteReason;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._discoveredBridgeDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredBridgeDomain = this._discoveredBridgeDomain;
    }
    if (this._discoveredTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveredTenant = this._discoveredTenant;
    }
    if (this._discoveryBasicPollSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryBasicPollSettings = this._discoveryBasicPollSettings?.internalValue;
    }
    if (this._discoveryBlackoutSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryBlackoutSetting = this._discoveryBlackoutSetting?.internalValue;
    }
    if (this._discoveryMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoveryMember = this._discoveryMember;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainNameServers = this._domainNameServers;
    }
    if (this._enableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDdns = this._enableDdns;
    }
    if (this._enableDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDiscovery = this._enableDiscovery;
    }
    if (this._enableIfmapPublishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIfmapPublishing = this._enableIfmapPublishing;
    }
    if (this._enableImmediateDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImmediateDiscovery = this._enableImmediateDiscovery;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._federatedRealms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.federatedRealms = this._federatedRealms?.internalValue;
    }
    if (this._funcCall?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.funcCall = this._funcCall?.internalValue;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    if (this._mgmPrivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmPrivate = this._mgmPrivate;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkView = this._networkView;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._portControlBlackoutSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portControlBlackoutSetting = this._portControlBlackoutSetting?.internalValue;
    }
    if (this._preferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLifetime = this._preferredLifetime;
    }
    if (this._recycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.recycleLeases = this._recycleLeases;
    }
    if (this._restartIfNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartIfNeeded = this._restartIfNeeded;
    }
    if (this._rirOrganization !== undefined) {
      hasAnyValues = true;
      internalValueResult.rirOrganization = this._rirOrganization;
    }
    if (this._rirRegistrationAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.rirRegistrationAction = this._rirRegistrationAction;
    }
    if (this._rirRegistrationStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.rirRegistrationStatus = this._rirRegistrationStatus;
    }
    if (this._samePortControlDiscoveryBlackout !== undefined) {
      hasAnyValues = true;
      internalValueResult.samePortControlDiscoveryBlackout = this._samePortControlDiscoveryBlackout;
    }
    if (this._sendRirRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendRirRequest = this._sendRirRequest;
    }
    if (this._subscribeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeSettings = this._subscribeSettings?.internalValue;
    }
    if (this._unmanaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanaged = this._unmanaged;
    }
    if (this._updateDnsOnLeaseRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDnsOnLeaseRenewal = this._updateDnsOnLeaseRenewal;
    }
    if (this._useBlackoutSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBlackoutSetting = this._useBlackoutSetting;
    }
    if (this._useDdnsDomainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsDomainname = this._useDdnsDomainname;
    }
    if (this._useDdnsEnableOptionFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsEnableOptionFqdn = this._useDdnsEnableOptionFqdn;
    }
    if (this._useDdnsGenerateHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsGenerateHostname = this._useDdnsGenerateHostname;
    }
    if (this._useDdnsTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsTtl = this._useDdnsTtl;
    }
    if (this._useDiscoveryBasicPollingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDiscoveryBasicPollingSettings = this._useDiscoveryBasicPollingSettings;
    }
    if (this._useDomainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomainName = this._useDomainName;
    }
    if (this._useDomainNameServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDomainNameServers = this._useDomainNameServers;
    }
    if (this._useEnableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDdns = this._useEnableDdns;
    }
    if (this._useEnableDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDiscovery = this._useEnableDiscovery;
    }
    if (this._useEnableIfmapPublishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableIfmapPublishing = this._useEnableIfmapPublishing;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useMgmPrivate !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmPrivate = this._useMgmPrivate;
    }
    if (this._useOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOptions = this._useOptions;
    }
    if (this._usePreferredLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePreferredLifetime = this._usePreferredLifetime;
    }
    if (this._useRecycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecycleLeases = this._useRecycleLeases;
    }
    if (this._useSubscribeSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSubscribeSettings = this._useSubscribeSettings;
    }
    if (this._useUpdateDnsOnLeaseRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUpdateDnsOnLeaseRenewal = this._useUpdateDnsOnLeaseRenewal;
    }
    if (this._useValidLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useValidLifetime = this._useValidLifetime;
    }
    if (this._useZoneAssociations !== undefined) {
      hasAnyValues = true;
      internalValueResult.useZoneAssociations = this._useZoneAssociations;
    }
    if (this._validLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.validLifetime = this._validLifetime;
    }
    if (this._vlans?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlans = this._vlans?.internalValue;
    }
    if (this._zoneAssociations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneAssociations = this._zoneAssociations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosIpamIpv6NetworkResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autoCreateReversezone = undefined;
      this._cloudInfo.internalValue = undefined;
      this._comment = undefined;
      this._ddnsDomainname = undefined;
      this._ddnsEnableOptionFqdn = undefined;
      this._ddnsGenerateHostname = undefined;
      this._ddnsServerAlwaysUpdates = undefined;
      this._ddnsTtl = undefined;
      this._deleteReason = undefined;
      this._disable = undefined;
      this._discoveredBridgeDomain = undefined;
      this._discoveredTenant = undefined;
      this._discoveryBasicPollSettings.internalValue = undefined;
      this._discoveryBlackoutSetting.internalValue = undefined;
      this._discoveryMember = undefined;
      this._domainName = undefined;
      this._domainNameServers = undefined;
      this._enableDdns = undefined;
      this._enableDiscovery = undefined;
      this._enableIfmapPublishing = undefined;
      this._enableImmediateDiscovery = undefined;
      this._extattrs = undefined;
      this._federatedRealms.internalValue = undefined;
      this._funcCall.internalValue = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._members.internalValue = undefined;
      this._mgmPrivate = undefined;
      this._network = undefined;
      this._networkView = undefined;
      this._options.internalValue = undefined;
      this._portControlBlackoutSetting.internalValue = undefined;
      this._preferredLifetime = undefined;
      this._recycleLeases = undefined;
      this._restartIfNeeded = undefined;
      this._rirOrganization = undefined;
      this._rirRegistrationAction = undefined;
      this._rirRegistrationStatus = undefined;
      this._samePortControlDiscoveryBlackout = undefined;
      this._sendRirRequest = undefined;
      this._subscribeSettings.internalValue = undefined;
      this._unmanaged = undefined;
      this._updateDnsOnLeaseRenewal = undefined;
      this._useBlackoutSetting = undefined;
      this._useDdnsDomainname = undefined;
      this._useDdnsEnableOptionFqdn = undefined;
      this._useDdnsGenerateHostname = undefined;
      this._useDdnsTtl = undefined;
      this._useDiscoveryBasicPollingSettings = undefined;
      this._useDomainName = undefined;
      this._useDomainNameServers = undefined;
      this._useEnableDdns = undefined;
      this._useEnableDiscovery = undefined;
      this._useEnableIfmapPublishing = undefined;
      this._useLogicFilterRules = undefined;
      this._useMgmPrivate = undefined;
      this._useOptions = undefined;
      this._usePreferredLifetime = undefined;
      this._useRecycleLeases = undefined;
      this._useSubscribeSettings = undefined;
      this._useUpdateDnsOnLeaseRenewal = undefined;
      this._useValidLifetime = undefined;
      this._useZoneAssociations = undefined;
      this._validLifetime = undefined;
      this._vlans.internalValue = undefined;
      this._zoneAssociations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autoCreateReversezone = value.autoCreateReversezone;
      this._cloudInfo.internalValue = value.cloudInfo;
      this._comment = value.comment;
      this._ddnsDomainname = value.ddnsDomainname;
      this._ddnsEnableOptionFqdn = value.ddnsEnableOptionFqdn;
      this._ddnsGenerateHostname = value.ddnsGenerateHostname;
      this._ddnsServerAlwaysUpdates = value.ddnsServerAlwaysUpdates;
      this._ddnsTtl = value.ddnsTtl;
      this._deleteReason = value.deleteReason;
      this._disable = value.disable;
      this._discoveredBridgeDomain = value.discoveredBridgeDomain;
      this._discoveredTenant = value.discoveredTenant;
      this._discoveryBasicPollSettings.internalValue = value.discoveryBasicPollSettings;
      this._discoveryBlackoutSetting.internalValue = value.discoveryBlackoutSetting;
      this._discoveryMember = value.discoveryMember;
      this._domainName = value.domainName;
      this._domainNameServers = value.domainNameServers;
      this._enableDdns = value.enableDdns;
      this._enableDiscovery = value.enableDiscovery;
      this._enableIfmapPublishing = value.enableIfmapPublishing;
      this._enableImmediateDiscovery = value.enableImmediateDiscovery;
      this._extattrs = value.extattrs;
      this._federatedRealms.internalValue = value.federatedRealms;
      this._funcCall.internalValue = value.funcCall;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._members.internalValue = value.members;
      this._mgmPrivate = value.mgmPrivate;
      this._network = value.network;
      this._networkView = value.networkView;
      this._options.internalValue = value.options;
      this._portControlBlackoutSetting.internalValue = value.portControlBlackoutSetting;
      this._preferredLifetime = value.preferredLifetime;
      this._recycleLeases = value.recycleLeases;
      this._restartIfNeeded = value.restartIfNeeded;
      this._rirOrganization = value.rirOrganization;
      this._rirRegistrationAction = value.rirRegistrationAction;
      this._rirRegistrationStatus = value.rirRegistrationStatus;
      this._samePortControlDiscoveryBlackout = value.samePortControlDiscoveryBlackout;
      this._sendRirRequest = value.sendRirRequest;
      this._subscribeSettings.internalValue = value.subscribeSettings;
      this._unmanaged = value.unmanaged;
      this._updateDnsOnLeaseRenewal = value.updateDnsOnLeaseRenewal;
      this._useBlackoutSetting = value.useBlackoutSetting;
      this._useDdnsDomainname = value.useDdnsDomainname;
      this._useDdnsEnableOptionFqdn = value.useDdnsEnableOptionFqdn;
      this._useDdnsGenerateHostname = value.useDdnsGenerateHostname;
      this._useDdnsTtl = value.useDdnsTtl;
      this._useDiscoveryBasicPollingSettings = value.useDiscoveryBasicPollingSettings;
      this._useDomainName = value.useDomainName;
      this._useDomainNameServers = value.useDomainNameServers;
      this._useEnableDdns = value.useEnableDdns;
      this._useEnableDiscovery = value.useEnableDiscovery;
      this._useEnableIfmapPublishing = value.useEnableIfmapPublishing;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useMgmPrivate = value.useMgmPrivate;
      this._useOptions = value.useOptions;
      this._usePreferredLifetime = value.usePreferredLifetime;
      this._useRecycleLeases = value.useRecycleLeases;
      this._useSubscribeSettings = value.useSubscribeSettings;
      this._useUpdateDnsOnLeaseRenewal = value.useUpdateDnsOnLeaseRenewal;
      this._useValidLifetime = value.useValidLifetime;
      this._useZoneAssociations = value.useZoneAssociations;
      this._validLifetime = value.validLifetime;
      this._vlans.internalValue = value.vlans;
      this._zoneAssociations.internalValue = value.zoneAssociations;
    }
  }

  // auto_create_reversezone - computed: true, optional: true, required: false
  private _autoCreateReversezone?: boolean | cdktf.IResolvable; 
  public get autoCreateReversezone() {
    return this.getBooleanAttribute('auto_create_reversezone');
  }
  public set autoCreateReversezone(value: boolean | cdktf.IResolvable) {
    this._autoCreateReversezone = value;
  }
  public resetAutoCreateReversezone() {
    this._autoCreateReversezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateReversezoneInput() {
    return this._autoCreateReversezone;
  }

  // cloud_info - computed: true, optional: true, required: false
  private _cloudInfo = new DataNiosIpamIpv6NetworkResultCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }
  public putCloudInfo(value: DataNiosIpamIpv6NetworkResultCloudInfo) {
    this._cloudInfo.internalValue = value;
  }
  public resetCloudInfo() {
    this._cloudInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInfoInput() {
    return this._cloudInfo.internalValue;
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ddns_domainname - computed: true, optional: true, required: false
  private _ddnsDomainname?: string; 
  public get ddnsDomainname() {
    return this.getStringAttribute('ddns_domainname');
  }
  public set ddnsDomainname(value: string) {
    this._ddnsDomainname = value;
  }
  public resetDdnsDomainname() {
    this._ddnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsDomainnameInput() {
    return this._ddnsDomainname;
  }

  // ddns_enable_option_fqdn - computed: true, optional: true, required: false
  private _ddnsEnableOptionFqdn?: boolean | cdktf.IResolvable; 
  public get ddnsEnableOptionFqdn() {
    return this.getBooleanAttribute('ddns_enable_option_fqdn');
  }
  public set ddnsEnableOptionFqdn(value: boolean | cdktf.IResolvable) {
    this._ddnsEnableOptionFqdn = value;
  }
  public resetDdnsEnableOptionFqdn() {
    this._ddnsEnableOptionFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsEnableOptionFqdnInput() {
    return this._ddnsEnableOptionFqdn;
  }

  // ddns_generate_hostname - computed: true, optional: true, required: false
  private _ddnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get ddnsGenerateHostname() {
    return this.getBooleanAttribute('ddns_generate_hostname');
  }
  public set ddnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._ddnsGenerateHostname = value;
  }
  public resetDdnsGenerateHostname() {
    this._ddnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsGenerateHostnameInput() {
    return this._ddnsGenerateHostname;
  }

  // ddns_server_always_updates - computed: true, optional: true, required: false
  private _ddnsServerAlwaysUpdates?: boolean | cdktf.IResolvable; 
  public get ddnsServerAlwaysUpdates() {
    return this.getBooleanAttribute('ddns_server_always_updates');
  }
  public set ddnsServerAlwaysUpdates(value: boolean | cdktf.IResolvable) {
    this._ddnsServerAlwaysUpdates = value;
  }
  public resetDdnsServerAlwaysUpdates() {
    this._ddnsServerAlwaysUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsServerAlwaysUpdatesInput() {
    return this._ddnsServerAlwaysUpdates;
  }

  // ddns_ttl - computed: true, optional: true, required: false
  private _ddnsTtl?: number; 
  public get ddnsTtl() {
    return this.getNumberAttribute('ddns_ttl');
  }
  public set ddnsTtl(value: number) {
    this._ddnsTtl = value;
  }
  public resetDdnsTtl() {
    this._ddnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddnsTtlInput() {
    return this._ddnsTtl;
  }

  // delete_reason - computed: true, optional: true, required: false
  private _deleteReason?: string; 
  public get deleteReason() {
    return this.getStringAttribute('delete_reason');
  }
  public set deleteReason(value: string) {
    this._deleteReason = value;
  }
  public resetDeleteReason() {
    this._deleteReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteReasonInput() {
    return this._deleteReason;
  }

  // disable - computed: true, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // discover_now_status - computed: true, optional: false, required: false
  public get discoverNowStatus() {
    return this.getStringAttribute('discover_now_status');
  }

  // discovered_bgp_as - computed: true, optional: false, required: false
  public get discoveredBgpAs() {
    return this.getStringAttribute('discovered_bgp_as');
  }

  // discovered_bridge_domain - computed: true, optional: true, required: false
  private _discoveredBridgeDomain?: string; 
  public get discoveredBridgeDomain() {
    return this.getStringAttribute('discovered_bridge_domain');
  }
  public set discoveredBridgeDomain(value: string) {
    this._discoveredBridgeDomain = value;
  }
  public resetDiscoveredBridgeDomain() {
    this._discoveredBridgeDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredBridgeDomainInput() {
    return this._discoveredBridgeDomain;
  }

  // discovered_tenant - computed: true, optional: true, required: false
  private _discoveredTenant?: string; 
  public get discoveredTenant() {
    return this.getStringAttribute('discovered_tenant');
  }
  public set discoveredTenant(value: string) {
    this._discoveredTenant = value;
  }
  public resetDiscoveredTenant() {
    this._discoveredTenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveredTenantInput() {
    return this._discoveredTenant;
  }

  // discovered_vlan_id - computed: true, optional: false, required: false
  public get discoveredVlanId() {
    return this.getStringAttribute('discovered_vlan_id');
  }

  // discovered_vlan_name - computed: true, optional: false, required: false
  public get discoveredVlanName() {
    return this.getStringAttribute('discovered_vlan_name');
  }

  // discovered_vrf_description - computed: true, optional: false, required: false
  public get discoveredVrfDescription() {
    return this.getStringAttribute('discovered_vrf_description');
  }

  // discovered_vrf_name - computed: true, optional: false, required: false
  public get discoveredVrfName() {
    return this.getStringAttribute('discovered_vrf_name');
  }

  // discovered_vrf_rd - computed: true, optional: false, required: false
  public get discoveredVrfRd() {
    return this.getStringAttribute('discovered_vrf_rd');
  }

  // discovery_basic_poll_settings - computed: true, optional: true, required: false
  private _discoveryBasicPollSettings = new DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettingsOutputReference(this, "discovery_basic_poll_settings");
  public get discoveryBasicPollSettings() {
    return this._discoveryBasicPollSettings;
  }
  public putDiscoveryBasicPollSettings(value: DataNiosIpamIpv6NetworkResultDiscoveryBasicPollSettings) {
    this._discoveryBasicPollSettings.internalValue = value;
  }
  public resetDiscoveryBasicPollSettings() {
    this._discoveryBasicPollSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryBasicPollSettingsInput() {
    return this._discoveryBasicPollSettings.internalValue;
  }

  // discovery_blackout_setting - computed: true, optional: true, required: false
  private _discoveryBlackoutSetting = new DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSettingOutputReference(this, "discovery_blackout_setting");
  public get discoveryBlackoutSetting() {
    return this._discoveryBlackoutSetting;
  }
  public putDiscoveryBlackoutSetting(value: DataNiosIpamIpv6NetworkResultDiscoveryBlackoutSetting) {
    this._discoveryBlackoutSetting.internalValue = value;
  }
  public resetDiscoveryBlackoutSetting() {
    this._discoveryBlackoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryBlackoutSettingInput() {
    return this._discoveryBlackoutSetting.internalValue;
  }

  // discovery_engine_type - computed: true, optional: false, required: false
  public get discoveryEngineType() {
    return this.getStringAttribute('discovery_engine_type');
  }

  // discovery_member - computed: true, optional: true, required: false
  private _discoveryMember?: string; 
  public get discoveryMember() {
    return this.getStringAttribute('discovery_member');
  }
  public set discoveryMember(value: string) {
    this._discoveryMember = value;
  }
  public resetDiscoveryMember() {
    this._discoveryMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryMemberInput() {
    return this._discoveryMember;
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_name_servers - computed: true, optional: true, required: false
  private _domainNameServers?: string[]; 
  public get domainNameServers() {
    return this.getListAttribute('domain_name_servers');
  }
  public set domainNameServers(value: string[]) {
    this._domainNameServers = value;
  }
  public resetDomainNameServers() {
    this._domainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameServersInput() {
    return this._domainNameServers;
  }

  // enable_ddns - computed: true, optional: true, required: false
  private _enableDdns?: boolean | cdktf.IResolvable; 
  public get enableDdns() {
    return this.getBooleanAttribute('enable_ddns');
  }
  public set enableDdns(value: boolean | cdktf.IResolvable) {
    this._enableDdns = value;
  }
  public resetEnableDdns() {
    this._enableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDdnsInput() {
    return this._enableDdns;
  }

  // enable_discovery - computed: true, optional: true, required: false
  private _enableDiscovery?: boolean | cdktf.IResolvable; 
  public get enableDiscovery() {
    return this.getBooleanAttribute('enable_discovery');
  }
  public set enableDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableDiscovery = value;
  }
  public resetEnableDiscovery() {
    this._enableDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDiscoveryInput() {
    return this._enableDiscovery;
  }

  // enable_ifmap_publishing - computed: true, optional: true, required: false
  private _enableIfmapPublishing?: boolean | cdktf.IResolvable; 
  public get enableIfmapPublishing() {
    return this.getBooleanAttribute('enable_ifmap_publishing');
  }
  public set enableIfmapPublishing(value: boolean | cdktf.IResolvable) {
    this._enableIfmapPublishing = value;
  }
  public resetEnableIfmapPublishing() {
    this._enableIfmapPublishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIfmapPublishingInput() {
    return this._enableIfmapPublishing;
  }

  // enable_immediate_discovery - computed: true, optional: true, required: false
  private _enableImmediateDiscovery?: boolean | cdktf.IResolvable; 
  public get enableImmediateDiscovery() {
    return this.getBooleanAttribute('enable_immediate_discovery');
  }
  public set enableImmediateDiscovery(value: boolean | cdktf.IResolvable) {
    this._enableImmediateDiscovery = value;
  }
  public resetEnableImmediateDiscovery() {
    this._enableImmediateDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableImmediateDiscoveryInput() {
    return this._enableImmediateDiscovery;
  }

  // endpoint_sources - computed: true, optional: false, required: false
  public get endpointSources() {
    return this.getListAttribute('endpoint_sources');
  }

  // extattrs - computed: true, optional: true, required: false
  private _extattrs?: { [key: string]: string }; 
  public get extattrs() {
    return this.getStringMapAttribute('extattrs');
  }
  public set extattrs(value: { [key: string]: string }) {
    this._extattrs = value;
  }
  public resetExtattrs() {
    this._extattrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrsInput() {
    return this._extattrs;
  }

  // extattrs_all - computed: true, optional: false, required: false
  private _extattrsAll = new cdktf.StringMap(this, "extattrs_all");
  public get extattrsAll() {
    return this._extattrsAll;
  }

  // federated_realms - computed: true, optional: true, required: false
  private _federatedRealms = new DataNiosIpamIpv6NetworkResultFederatedRealmsList(this, "federated_realms", false);
  public get federatedRealms() {
    return this._federatedRealms;
  }
  public putFederatedRealms(value: DataNiosIpamIpv6NetworkResultFederatedRealms[] | cdktf.IResolvable) {
    this._federatedRealms.internalValue = value;
  }
  public resetFederatedRealms() {
    this._federatedRealms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federatedRealmsInput() {
    return this._federatedRealms.internalValue;
  }

  // func_call - computed: true, optional: true, required: false
  private _funcCall = new DataNiosIpamIpv6NetworkResultFuncCallOutputReference(this, "func_call");
  public get funcCall() {
    return this._funcCall;
  }
  public putFuncCall(value: DataNiosIpamIpv6NetworkResultFuncCall) {
    this._funcCall.internalValue = value;
  }
  public resetFuncCall() {
    this._funcCall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcCallInput() {
    return this._funcCall.internalValue;
  }

  // last_rir_registration_update_sent - computed: true, optional: false, required: false
  public get lastRirRegistrationUpdateSent() {
    return this.getNumberAttribute('last_rir_registration_update_sent');
  }

  // last_rir_registration_update_status - computed: true, optional: false, required: false
  public get lastRirRegistrationUpdateStatus() {
    return this.getStringAttribute('last_rir_registration_update_status');
  }

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosIpamIpv6NetworkResultLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosIpamIpv6NetworkResultLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // members - computed: true, optional: true, required: false
  private _members = new DataNiosIpamIpv6NetworkResultMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: DataNiosIpamIpv6NetworkResultMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }

  // mgm_private - computed: true, optional: true, required: false
  private _mgmPrivate?: boolean | cdktf.IResolvable; 
  public get mgmPrivate() {
    return this.getBooleanAttribute('mgm_private');
  }
  public set mgmPrivate(value: boolean | cdktf.IResolvable) {
    this._mgmPrivate = value;
  }
  public resetMgmPrivate() {
    this._mgmPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmPrivateInput() {
    return this._mgmPrivate;
  }

  // mgm_private_overridable - computed: true, optional: false, required: false
  public get mgmPrivateOverridable() {
    return this.getBooleanAttribute('mgm_private_overridable');
  }

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new DataNiosIpamIpv6NetworkResultMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_container - computed: true, optional: false, required: false
  public get networkContainer() {
    return this.getStringAttribute('network_container');
  }

  // network_view - computed: true, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataNiosIpamIpv6NetworkResultOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataNiosIpamIpv6NetworkResultOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // port_control_blackout_setting - computed: true, optional: true, required: false
  private _portControlBlackoutSetting = new DataNiosIpamIpv6NetworkResultPortControlBlackoutSettingOutputReference(this, "port_control_blackout_setting");
  public get portControlBlackoutSetting() {
    return this._portControlBlackoutSetting;
  }
  public putPortControlBlackoutSetting(value: DataNiosIpamIpv6NetworkResultPortControlBlackoutSetting) {
    this._portControlBlackoutSetting.internalValue = value;
  }
  public resetPortControlBlackoutSetting() {
    this._portControlBlackoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portControlBlackoutSettingInput() {
    return this._portControlBlackoutSetting.internalValue;
  }

  // preferred_lifetime - computed: true, optional: true, required: false
  private _preferredLifetime?: number; 
  public get preferredLifetime() {
    return this.getNumberAttribute('preferred_lifetime');
  }
  public set preferredLifetime(value: number) {
    this._preferredLifetime = value;
  }
  public resetPreferredLifetime() {
    this._preferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLifetimeInput() {
    return this._preferredLifetime;
  }

  // recycle_leases - computed: true, optional: true, required: false
  private _recycleLeases?: boolean | cdktf.IResolvable; 
  public get recycleLeases() {
    return this.getBooleanAttribute('recycle_leases');
  }
  public set recycleLeases(value: boolean | cdktf.IResolvable) {
    this._recycleLeases = value;
  }
  public resetRecycleLeases() {
    this._recycleLeases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recycleLeasesInput() {
    return this._recycleLeases;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // restart_if_needed - computed: true, optional: true, required: false
  private _restartIfNeeded?: boolean | cdktf.IResolvable; 
  public get restartIfNeeded() {
    return this.getBooleanAttribute('restart_if_needed');
  }
  public set restartIfNeeded(value: boolean | cdktf.IResolvable) {
    this._restartIfNeeded = value;
  }
  public resetRestartIfNeeded() {
    this._restartIfNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartIfNeededInput() {
    return this._restartIfNeeded;
  }

  // rir - computed: true, optional: false, required: false
  public get rir() {
    return this.getStringAttribute('rir');
  }

  // rir_organization - computed: true, optional: true, required: false
  private _rirOrganization?: string; 
  public get rirOrganization() {
    return this.getStringAttribute('rir_organization');
  }
  public set rirOrganization(value: string) {
    this._rirOrganization = value;
  }
  public resetRirOrganization() {
    this._rirOrganization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rirOrganizationInput() {
    return this._rirOrganization;
  }

  // rir_registration_action - computed: true, optional: true, required: false
  private _rirRegistrationAction?: string; 
  public get rirRegistrationAction() {
    return this.getStringAttribute('rir_registration_action');
  }
  public set rirRegistrationAction(value: string) {
    this._rirRegistrationAction = value;
  }
  public resetRirRegistrationAction() {
    this._rirRegistrationAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rirRegistrationActionInput() {
    return this._rirRegistrationAction;
  }

  // rir_registration_status - computed: true, optional: true, required: false
  private _rirRegistrationStatus?: string; 
  public get rirRegistrationStatus() {
    return this.getStringAttribute('rir_registration_status');
  }
  public set rirRegistrationStatus(value: string) {
    this._rirRegistrationStatus = value;
  }
  public resetRirRegistrationStatus() {
    this._rirRegistrationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rirRegistrationStatusInput() {
    return this._rirRegistrationStatus;
  }

  // same_port_control_discovery_blackout - computed: true, optional: true, required: false
  private _samePortControlDiscoveryBlackout?: boolean | cdktf.IResolvable; 
  public get samePortControlDiscoveryBlackout() {
    return this.getBooleanAttribute('same_port_control_discovery_blackout');
  }
  public set samePortControlDiscoveryBlackout(value: boolean | cdktf.IResolvable) {
    this._samePortControlDiscoveryBlackout = value;
  }
  public resetSamePortControlDiscoveryBlackout() {
    this._samePortControlDiscoveryBlackout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samePortControlDiscoveryBlackoutInput() {
    return this._samePortControlDiscoveryBlackout;
  }

  // send_rir_request - computed: true, optional: true, required: false
  private _sendRirRequest?: boolean | cdktf.IResolvable; 
  public get sendRirRequest() {
    return this.getBooleanAttribute('send_rir_request');
  }
  public set sendRirRequest(value: boolean | cdktf.IResolvable) {
    this._sendRirRequest = value;
  }
  public resetSendRirRequest() {
    this._sendRirRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRirRequestInput() {
    return this._sendRirRequest;
  }

  // subscribe_settings - computed: true, optional: true, required: false
  private _subscribeSettings = new DataNiosIpamIpv6NetworkResultSubscribeSettingsOutputReference(this, "subscribe_settings");
  public get subscribeSettings() {
    return this._subscribeSettings;
  }
  public putSubscribeSettings(value: DataNiosIpamIpv6NetworkResultSubscribeSettings) {
    this._subscribeSettings.internalValue = value;
  }
  public resetSubscribeSettings() {
    this._subscribeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscribeSettingsInput() {
    return this._subscribeSettings.internalValue;
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // unmanaged - computed: true, optional: true, required: false
  private _unmanaged?: boolean | cdktf.IResolvable; 
  public get unmanaged() {
    return this.getBooleanAttribute('unmanaged');
  }
  public set unmanaged(value: boolean | cdktf.IResolvable) {
    this._unmanaged = value;
  }
  public resetUnmanaged() {
    this._unmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInput() {
    return this._unmanaged;
  }

  // unmanaged_count - computed: true, optional: false, required: false
  public get unmanagedCount() {
    return this.getNumberAttribute('unmanaged_count');
  }

  // update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get updateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('update_dns_on_lease_renewal');
  }
  public set updateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._updateDnsOnLeaseRenewal = value;
  }
  public resetUpdateDnsOnLeaseRenewal() {
    this._updateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsOnLeaseRenewalInput() {
    return this._updateDnsOnLeaseRenewal;
  }

  // use_blackout_setting - computed: true, optional: true, required: false
  private _useBlackoutSetting?: boolean | cdktf.IResolvable; 
  public get useBlackoutSetting() {
    return this.getBooleanAttribute('use_blackout_setting');
  }
  public set useBlackoutSetting(value: boolean | cdktf.IResolvable) {
    this._useBlackoutSetting = value;
  }
  public resetUseBlackoutSetting() {
    this._useBlackoutSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBlackoutSettingInput() {
    return this._useBlackoutSetting;
  }

  // use_ddns_domainname - computed: true, optional: true, required: false
  private _useDdnsDomainname?: boolean | cdktf.IResolvable; 
  public get useDdnsDomainname() {
    return this.getBooleanAttribute('use_ddns_domainname');
  }
  public set useDdnsDomainname(value: boolean | cdktf.IResolvable) {
    this._useDdnsDomainname = value;
  }
  public resetUseDdnsDomainname() {
    this._useDdnsDomainname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsDomainnameInput() {
    return this._useDdnsDomainname;
  }

  // use_ddns_enable_option_fqdn - computed: true, optional: true, required: false
  private _useDdnsEnableOptionFqdn?: boolean | cdktf.IResolvable; 
  public get useDdnsEnableOptionFqdn() {
    return this.getBooleanAttribute('use_ddns_enable_option_fqdn');
  }
  public set useDdnsEnableOptionFqdn(value: boolean | cdktf.IResolvable) {
    this._useDdnsEnableOptionFqdn = value;
  }
  public resetUseDdnsEnableOptionFqdn() {
    this._useDdnsEnableOptionFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsEnableOptionFqdnInput() {
    return this._useDdnsEnableOptionFqdn;
  }

  // use_ddns_generate_hostname - computed: true, optional: true, required: false
  private _useDdnsGenerateHostname?: boolean | cdktf.IResolvable; 
  public get useDdnsGenerateHostname() {
    return this.getBooleanAttribute('use_ddns_generate_hostname');
  }
  public set useDdnsGenerateHostname(value: boolean | cdktf.IResolvable) {
    this._useDdnsGenerateHostname = value;
  }
  public resetUseDdnsGenerateHostname() {
    this._useDdnsGenerateHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsGenerateHostnameInput() {
    return this._useDdnsGenerateHostname;
  }

  // use_ddns_ttl - computed: true, optional: true, required: false
  private _useDdnsTtl?: boolean | cdktf.IResolvable; 
  public get useDdnsTtl() {
    return this.getBooleanAttribute('use_ddns_ttl');
  }
  public set useDdnsTtl(value: boolean | cdktf.IResolvable) {
    this._useDdnsTtl = value;
  }
  public resetUseDdnsTtl() {
    this._useDdnsTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDdnsTtlInput() {
    return this._useDdnsTtl;
  }

  // use_discovery_basic_polling_settings - computed: true, optional: true, required: false
  private _useDiscoveryBasicPollingSettings?: boolean | cdktf.IResolvable; 
  public get useDiscoveryBasicPollingSettings() {
    return this.getBooleanAttribute('use_discovery_basic_polling_settings');
  }
  public set useDiscoveryBasicPollingSettings(value: boolean | cdktf.IResolvable) {
    this._useDiscoveryBasicPollingSettings = value;
  }
  public resetUseDiscoveryBasicPollingSettings() {
    this._useDiscoveryBasicPollingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDiscoveryBasicPollingSettingsInput() {
    return this._useDiscoveryBasicPollingSettings;
  }

  // use_domain_name - computed: true, optional: true, required: false
  private _useDomainName?: boolean | cdktf.IResolvable; 
  public get useDomainName() {
    return this.getBooleanAttribute('use_domain_name');
  }
  public set useDomainName(value: boolean | cdktf.IResolvable) {
    this._useDomainName = value;
  }
  public resetUseDomainName() {
    this._useDomainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameInput() {
    return this._useDomainName;
  }

  // use_domain_name_servers - computed: true, optional: true, required: false
  private _useDomainNameServers?: boolean | cdktf.IResolvable; 
  public get useDomainNameServers() {
    return this.getBooleanAttribute('use_domain_name_servers');
  }
  public set useDomainNameServers(value: boolean | cdktf.IResolvable) {
    this._useDomainNameServers = value;
  }
  public resetUseDomainNameServers() {
    this._useDomainNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDomainNameServersInput() {
    return this._useDomainNameServers;
  }

  // use_enable_ddns - computed: true, optional: true, required: false
  private _useEnableDdns?: boolean | cdktf.IResolvable; 
  public get useEnableDdns() {
    return this.getBooleanAttribute('use_enable_ddns');
  }
  public set useEnableDdns(value: boolean | cdktf.IResolvable) {
    this._useEnableDdns = value;
  }
  public resetUseEnableDdns() {
    this._useEnableDdns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDdnsInput() {
    return this._useEnableDdns;
  }

  // use_enable_discovery - computed: true, optional: true, required: false
  private _useEnableDiscovery?: boolean | cdktf.IResolvable; 
  public get useEnableDiscovery() {
    return this.getBooleanAttribute('use_enable_discovery');
  }
  public set useEnableDiscovery(value: boolean | cdktf.IResolvable) {
    this._useEnableDiscovery = value;
  }
  public resetUseEnableDiscovery() {
    this._useEnableDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDiscoveryInput() {
    return this._useEnableDiscovery;
  }

  // use_enable_ifmap_publishing - computed: true, optional: true, required: false
  private _useEnableIfmapPublishing?: boolean | cdktf.IResolvable; 
  public get useEnableIfmapPublishing() {
    return this.getBooleanAttribute('use_enable_ifmap_publishing');
  }
  public set useEnableIfmapPublishing(value: boolean | cdktf.IResolvable) {
    this._useEnableIfmapPublishing = value;
  }
  public resetUseEnableIfmapPublishing() {
    this._useEnableIfmapPublishing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableIfmapPublishingInput() {
    return this._useEnableIfmapPublishing;
  }

  // use_logic_filter_rules - computed: true, optional: true, required: false
  private _useLogicFilterRules?: boolean | cdktf.IResolvable; 
  public get useLogicFilterRules() {
    return this.getBooleanAttribute('use_logic_filter_rules');
  }
  public set useLogicFilterRules(value: boolean | cdktf.IResolvable) {
    this._useLogicFilterRules = value;
  }
  public resetUseLogicFilterRules() {
    this._useLogicFilterRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLogicFilterRulesInput() {
    return this._useLogicFilterRules;
  }

  // use_mgm_private - computed: true, optional: true, required: false
  private _useMgmPrivate?: boolean | cdktf.IResolvable; 
  public get useMgmPrivate() {
    return this.getBooleanAttribute('use_mgm_private');
  }
  public set useMgmPrivate(value: boolean | cdktf.IResolvable) {
    this._useMgmPrivate = value;
  }
  public resetUseMgmPrivate() {
    this._useMgmPrivate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmPrivateInput() {
    return this._useMgmPrivate;
  }

  // use_options - computed: true, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // use_preferred_lifetime - computed: true, optional: true, required: false
  private _usePreferredLifetime?: boolean | cdktf.IResolvable; 
  public get usePreferredLifetime() {
    return this.getBooleanAttribute('use_preferred_lifetime');
  }
  public set usePreferredLifetime(value: boolean | cdktf.IResolvable) {
    this._usePreferredLifetime = value;
  }
  public resetUsePreferredLifetime() {
    this._usePreferredLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreferredLifetimeInput() {
    return this._usePreferredLifetime;
  }

  // use_recycle_leases - computed: true, optional: true, required: false
  private _useRecycleLeases?: boolean | cdktf.IResolvable; 
  public get useRecycleLeases() {
    return this.getBooleanAttribute('use_recycle_leases');
  }
  public set useRecycleLeases(value: boolean | cdktf.IResolvable) {
    this._useRecycleLeases = value;
  }
  public resetUseRecycleLeases() {
    this._useRecycleLeases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRecycleLeasesInput() {
    return this._useRecycleLeases;
  }

  // use_subscribe_settings - computed: true, optional: true, required: false
  private _useSubscribeSettings?: boolean | cdktf.IResolvable; 
  public get useSubscribeSettings() {
    return this.getBooleanAttribute('use_subscribe_settings');
  }
  public set useSubscribeSettings(value: boolean | cdktf.IResolvable) {
    this._useSubscribeSettings = value;
  }
  public resetUseSubscribeSettings() {
    this._useSubscribeSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSubscribeSettingsInput() {
    return this._useSubscribeSettings;
  }

  // use_update_dns_on_lease_renewal - computed: true, optional: true, required: false
  private _useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable; 
  public get useUpdateDnsOnLeaseRenewal() {
    return this.getBooleanAttribute('use_update_dns_on_lease_renewal');
  }
  public set useUpdateDnsOnLeaseRenewal(value: boolean | cdktf.IResolvable) {
    this._useUpdateDnsOnLeaseRenewal = value;
  }
  public resetUseUpdateDnsOnLeaseRenewal() {
    this._useUpdateDnsOnLeaseRenewal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUpdateDnsOnLeaseRenewalInput() {
    return this._useUpdateDnsOnLeaseRenewal;
  }

  // use_valid_lifetime - computed: true, optional: true, required: false
  private _useValidLifetime?: boolean | cdktf.IResolvable; 
  public get useValidLifetime() {
    return this.getBooleanAttribute('use_valid_lifetime');
  }
  public set useValidLifetime(value: boolean | cdktf.IResolvable) {
    this._useValidLifetime = value;
  }
  public resetUseValidLifetime() {
    this._useValidLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useValidLifetimeInput() {
    return this._useValidLifetime;
  }

  // use_zone_associations - computed: true, optional: true, required: false
  private _useZoneAssociations?: boolean | cdktf.IResolvable; 
  public get useZoneAssociations() {
    return this.getBooleanAttribute('use_zone_associations');
  }
  public set useZoneAssociations(value: boolean | cdktf.IResolvable) {
    this._useZoneAssociations = value;
  }
  public resetUseZoneAssociations() {
    this._useZoneAssociations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useZoneAssociationsInput() {
    return this._useZoneAssociations;
  }

  // valid_lifetime - computed: true, optional: true, required: false
  private _validLifetime?: number; 
  public get validLifetime() {
    return this.getNumberAttribute('valid_lifetime');
  }
  public set validLifetime(value: number) {
    this._validLifetime = value;
  }
  public resetValidLifetime() {
    this._validLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validLifetimeInput() {
    return this._validLifetime;
  }

  // vlans - computed: true, optional: true, required: false
  private _vlans = new DataNiosIpamIpv6NetworkResultVlansList(this, "vlans", false);
  public get vlans() {
    return this._vlans;
  }
  public putVlans(value: DataNiosIpamIpv6NetworkResultVlans[] | cdktf.IResolvable) {
    this._vlans.internalValue = value;
  }
  public resetVlans() {
    this._vlans.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlansInput() {
    return this._vlans.internalValue;
  }

  // zone_associations - computed: true, optional: true, required: false
  private _zoneAssociations = new DataNiosIpamIpv6NetworkResultZoneAssociationsList(this, "zone_associations", false);
  public get zoneAssociations() {
    return this._zoneAssociations;
  }
  public putZoneAssociations(value: DataNiosIpamIpv6NetworkResultZoneAssociations[] | cdktf.IResolvable) {
    this._zoneAssociations.internalValue = value;
  }
  public resetZoneAssociations() {
    this._zoneAssociations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneAssociationsInput() {
    return this._zoneAssociations.internalValue;
  }
}

export class DataNiosIpamIpv6NetworkResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosIpamIpv6NetworkResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosIpamIpv6NetworkResultOutputReference {
    return new DataNiosIpamIpv6NetworkResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network nios_ipam_ipv6network}
*/
export class DataNiosIpamIpv6Network extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_ipam_ipv6network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosIpamIpv6Network resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosIpamIpv6Network to import
  * @param importFromId The id of the existing DataNiosIpamIpv6Network that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosIpamIpv6Network to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_ipam_ipv6network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/ipam_ipv6network nios_ipam_ipv6network} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosIpamIpv6NetworkConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosIpamIpv6NetworkConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_ipam_ipv6network',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extattrfilters = config.extattrfilters;
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // extattrfilters - computed: false, optional: true, required: false
  private _extattrfilters?: { [key: string]: string }; 
  public get extattrfilters() {
    return this.getStringMapAttribute('extattrfilters');
  }
  public set extattrfilters(value: { [key: string]: string }) {
    this._extattrfilters = value;
  }
  public resetExtattrfilters() {
    this._extattrfilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extattrfiltersInput() {
    return this._extattrfilters;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // max_results - computed: false, optional: true, required: false
  private _maxResults?: number; 
  public get maxResults() {
    return this.getNumberAttribute('max_results');
  }
  public set maxResults(value: number) {
    this._maxResults = value;
  }
  public resetMaxResults() {
    this._maxResults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxResultsInput() {
    return this._maxResults;
  }

  // paging - computed: false, optional: true, required: false
  private _paging?: number; 
  public get paging() {
    return this.getNumberAttribute('paging');
  }
  public set paging(value: number) {
    this._paging = value;
  }
  public resetPaging() {
    this._paging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pagingInput() {
    return this._paging;
  }

  // result - computed: true, optional: false, required: false
  private _result = new DataNiosIpamIpv6NetworkResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      extattrfilters: cdktf.hashMapper(cdktf.stringToTerraform)(this._extattrfilters),
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      extattrfilters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extattrfilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_results: {
        value: cdktf.numberToHclTerraform(this._maxResults),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      paging: {
        value: cdktf.numberToHclTerraform(this._paging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
