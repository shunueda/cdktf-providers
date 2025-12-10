// https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDhcpRangeConfig extends cdktf.TerraformMetaArguments {
  /**
  * External Attribute Filters are used to return a more specific list of results by filtering on external attributes. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#extattrfilters DataNiosDhcpRange#extattrfilters}
  */
  readonly extattrfilters?: { [key: string]: string };
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#filters DataNiosDhcpRange#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#max_results DataNiosDhcpRange#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#paging DataNiosDhcpRange#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDhcpRangeResultCloudInfoDelegatedMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ipv4addr DataNiosDhcpRange#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ipv6addr DataNiosDhcpRange#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#name DataNiosDhcpRange#name}
  */
  readonly name?: string;
}

export function dataNiosDhcpRangeResultCloudInfoDelegatedMemberToTerraform(struct?: DataNiosDhcpRangeResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeResultCloudInfoDelegatedMemberToHclTerraform(struct?: DataNiosDhcpRangeResultCloudInfoDelegatedMember | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultCloudInfoDelegatedMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultCloudInfoDelegatedMember | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpRangeResultCloudInfo {
  /**
  * This field contains the delegated member that will run the DHCP service for this range. If this is not set, the range will be served by the member that is currently serving the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#delegated_member DataNiosDhcpRange#delegated_member}
  */
  readonly delegatedMember?: DataNiosDhcpRangeResultCloudInfoDelegatedMember;
}

export function dataNiosDhcpRangeResultCloudInfoToTerraform(struct?: DataNiosDhcpRangeResultCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delegated_member: dataNiosDhcpRangeResultCloudInfoDelegatedMemberToTerraform(struct!.delegatedMember),
  }
}


export function dataNiosDhcpRangeResultCloudInfoToHclTerraform(struct?: DataNiosDhcpRangeResultCloudInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delegated_member: {
      value: dataNiosDhcpRangeResultCloudInfoDelegatedMemberToHclTerraform(struct!.delegatedMember),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultCloudInfoDelegatedMember",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultCloudInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultCloudInfo | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultCloudInfo | cdktf.IResolvable | undefined) {
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
  private _delegatedMember = new DataNiosDhcpRangeResultCloudInfoDelegatedMemberOutputReference(this, "delegated_member");
  public get delegatedMember() {
    return this._delegatedMember;
  }
  public putDelegatedMember(value: DataNiosDhcpRangeResultCloudInfoDelegatedMember) {
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
export interface DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#day_of_month DataNiosDhcpRange#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#disable DataNiosDhcpRange#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#every DataNiosDhcpRange#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#frequency DataNiosDhcpRange#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#hour_of_day DataNiosDhcpRange#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#minutes_past_hour DataNiosDhcpRange#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#month DataNiosDhcpRange#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#recurring_time DataNiosDhcpRange#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#repeat DataNiosDhcpRange#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#time_zone DataNiosDhcpRange#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#weekdays DataNiosDhcpRange#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#year DataNiosDhcpRange#year}
  */
  readonly year?: number;
}

export function dataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpRangeResultDiscoveryBasicPollSettings {
  /**
  * Determines whether auto ARP refresh before switch port polling is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#auto_arp_refresh_before_switch_port_polling DataNiosDhcpRange#auto_arp_refresh_before_switch_port_polling}
  */
  readonly autoArpRefreshBeforeSwitchPortPolling?: boolean | cdktf.IResolvable;
  /**
  * Determines whether CLI collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#cli_collection DataNiosDhcpRange#cli_collection}
  */
  readonly cliCollection?: boolean | cdktf.IResolvable;
  /**
  * Determines whether complete ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#complete_ping_sweep DataNiosDhcpRange#complete_ping_sweep}
  */
  readonly completePingSweep?: boolean | cdktf.IResolvable;
  /**
  * Credential group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#credential_group DataNiosDhcpRange#credential_group}
  */
  readonly credentialGroup?: string;
  /**
  * Determines whether device profile is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#device_profile DataNiosDhcpRange#device_profile}
  */
  readonly deviceProfile?: boolean | cdktf.IResolvable;
  /**
  * Determines whether netbios scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#netbios_scanning DataNiosDhcpRange#netbios_scanning}
  */
  readonly netbiosScanning?: boolean | cdktf.IResolvable;
  /**
  * Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#polling_frequency_modifier DataNiosDhcpRange#polling_frequency_modifier}
  */
  readonly pollingFrequencyModifier?: string;
  /**
  * Determines whether port scanning is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#port_scanning DataNiosDhcpRange#port_scanning}
  */
  readonly portScanning?: boolean | cdktf.IResolvable;
  /**
  * Determines whether smart subnet ping sweep is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#smart_subnet_ping_sweep DataNiosDhcpRange#smart_subnet_ping_sweep}
  */
  readonly smartSubnetPingSweep?: boolean | cdktf.IResolvable;
  /**
  * Determines whether SNMP collection is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#snmp_collection DataNiosDhcpRange#snmp_collection}
  */
  readonly snmpCollection?: boolean | cdktf.IResolvable;
  /**
  * A switch port data collection polling mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#switch_port_data_collection_polling DataNiosDhcpRange#switch_port_data_collection_polling}
  */
  readonly switchPortDataCollectionPolling?: string;
  /**
  * Indicates the interval for switch port data collection polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#switch_port_data_collection_polling_interval DataNiosDhcpRange#switch_port_data_collection_polling_interval}
  */
  readonly switchPortDataCollectionPollingInterval?: number;
  /**
  * This field contains the switch port data collection polling schedule. This is used to configure the schedule for switch port data collection polling. It includes information about the start and end times of the polling period, as well as the frequency of polling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#switch_port_data_collection_polling_schedule DataNiosDhcpRange#switch_port_data_collection_polling_schedule}
  */
  readonly switchPortDataCollectionPollingSchedule?: DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule;
  /**
  * Use Global Polling Frequency Modifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_global_polling_frequency_modifier DataNiosDhcpRange#use_global_polling_frequency_modifier}
  */
  readonly useGlobalPollingFrequencyModifier?: boolean | cdktf.IResolvable;
}

export function dataNiosDhcpRangeResultDiscoveryBasicPollSettingsToTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBasicPollSettings | cdktf.IResolvable): any {
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
    switch_port_data_collection_polling_schedule: dataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToTerraform(struct!.switchPortDataCollectionPollingSchedule),
    use_global_polling_frequency_modifier: cdktf.booleanToTerraform(struct!.useGlobalPollingFrequencyModifier),
  }
}


export function dataNiosDhcpRangeResultDiscoveryBasicPollSettingsToHclTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBasicPollSettings | cdktf.IResolvable): any {
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
      value: dataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleToHclTerraform(struct!.switchPortDataCollectionPollingSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule",
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

export class DataNiosDhcpRangeResultDiscoveryBasicPollSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultDiscoveryBasicPollSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultDiscoveryBasicPollSettings | cdktf.IResolvable | undefined) {
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
  private _switchPortDataCollectionPollingSchedule = new DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingScheduleOutputReference(this, "switch_port_data_collection_polling_schedule");
  public get switchPortDataCollectionPollingSchedule() {
    return this._switchPortDataCollectionPollingSchedule;
  }
  public putSwitchPortDataCollectionPollingSchedule(value: DataNiosDhcpRangeResultDiscoveryBasicPollSettingsSwitchPortDataCollectionPollingSchedule) {
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
export interface DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#day_of_month DataNiosDhcpRange#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#disable DataNiosDhcpRange#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#every DataNiosDhcpRange#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#frequency DataNiosDhcpRange#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#hour_of_day DataNiosDhcpRange#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#minutes_past_hour DataNiosDhcpRange#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#month DataNiosDhcpRange#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#recurring_time DataNiosDhcpRange#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#repeat DataNiosDhcpRange#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#time_zone DataNiosDhcpRange#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#weekdays DataNiosDhcpRange#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#year DataNiosDhcpRange#year}
  */
  readonly year?: number;
}

export function dataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpRangeResultDiscoveryBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#blackout_duration DataNiosDhcpRange#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * The blackout schedule for the range. This field is used to configure the blackout schedule for the DHCP range. It includes information about the start and end times of the blackout period, as well as the frequency of blackout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#blackout_schedule DataNiosDhcpRange#blackout_schedule}
  */
  readonly blackoutSchedule?: DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_blackout DataNiosDhcpRange#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function dataNiosDhcpRangeResultDiscoveryBlackoutSettingToTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: dataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function dataNiosDhcpRangeResultDiscoveryBlackoutSettingToHclTerraform(struct?: DataNiosDhcpRangeResultDiscoveryBlackoutSetting | cdktf.IResolvable): any {
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
      value: dataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule",
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

export class DataNiosDhcpRangeResultDiscoveryBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultDiscoveryBlackoutSetting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultDiscoveryBlackoutSetting | cdktf.IResolvable | undefined) {
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
  private _blackoutSchedule = new DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: DataNiosDhcpRangeResultDiscoveryBlackoutSettingBlackoutSchedule) {
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
export interface DataNiosDhcpRangeResultExclude {
  /**
  * Comment for the exclusion range; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#comment DataNiosDhcpRange#comment}
  */
  readonly comment?: string;
  /**
  * The IPv4 Address ending address of the exclusion range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#end_address DataNiosDhcpRange#end_address}
  */
  readonly endAddress: string;
  /**
  * The IPv4 Address starting address of the exclusion range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#start_address DataNiosDhcpRange#start_address}
  */
  readonly startAddress: string;
}

export function dataNiosDhcpRangeResultExcludeToTerraform(struct?: DataNiosDhcpRangeResultExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    end_address: cdktf.stringToTerraform(struct!.endAddress),
    start_address: cdktf.stringToTerraform(struct!.startAddress),
  }
}


export function dataNiosDhcpRangeResultExcludeToHclTerraform(struct?: DataNiosDhcpRangeResultExclude | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_address: {
      value: cdktf.stringToHclTerraform(struct!.endAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_address: {
      value: cdktf.stringToHclTerraform(struct!.startAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultExcludeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultExclude | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._endAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddress = this._endAddress;
    }
    if (this._startAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddress = this._startAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultExclude | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._endAddress = undefined;
      this._startAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._endAddress = value.endAddress;
      this._startAddress = value.startAddress;
    }
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

  // end_address - computed: true, optional: false, required: true
  private _endAddress?: string; 
  public get endAddress() {
    return this.getStringAttribute('end_address');
  }
  public set endAddress(value: string) {
    this._endAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddressInput() {
    return this._endAddress;
  }

  // start_address - computed: true, optional: false, required: true
  private _startAddress?: string; 
  public get startAddress() {
    return this.getStringAttribute('start_address');
  }
  public set startAddress(value: string) {
    this._startAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddressInput() {
    return this._startAddress;
  }
}

export class DataNiosDhcpRangeResultExcludeList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultExclude[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultExcludeOutputReference {
    return new DataNiosDhcpRangeResultExcludeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultFingerprintFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#filter DataNiosDhcpRange#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#permission DataNiosDhcpRange#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeResultFingerprintFilterRulesToTerraform(struct?: DataNiosDhcpRangeResultFingerprintFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeResultFingerprintFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeResultFingerprintFilterRules | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultFingerprintFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultFingerprintFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultFingerprintFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._permission = value.permission;
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

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDhcpRangeResultFingerprintFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultFingerprintFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultFingerprintFilterRulesOutputReference {
    return new DataNiosDhcpRangeResultFingerprintFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultLogicFilterRules {
  /**
  * The filter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#filter DataNiosDhcpRange#filter}
  */
  readonly filter: string;
  /**
  * The filter type. Valid values are: * MAC * NAC * Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#type DataNiosDhcpRange#type}
  */
  readonly type: string;
}

export function dataNiosDhcpRangeResultLogicFilterRulesToTerraform(struct?: DataNiosDhcpRangeResultLogicFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataNiosDhcpRangeResultLogicFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeResultLogicFilterRules | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultLogicFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultLogicFilterRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultLogicFilterRules | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeResultLogicFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultLogicFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultLogicFilterRulesOutputReference {
    return new DataNiosDhcpRangeResultLogicFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultMacFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#filter DataNiosDhcpRange#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#permission DataNiosDhcpRange#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeResultMacFilterRulesToTerraform(struct?: DataNiosDhcpRangeResultMacFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeResultMacFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeResultMacFilterRules | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultMacFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultMacFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultMacFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._permission = value.permission;
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

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDhcpRangeResultMacFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultMacFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultMacFilterRulesOutputReference {
    return new DataNiosDhcpRangeResultMacFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultMember {
  /**
  * The IPv4 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ipv4addr DataNiosDhcpRange#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The IPv6 Address of the Grid Member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ipv6addr DataNiosDhcpRange#ipv6addr}
  */
  readonly ipv6Addr?: string;
  /**
  * The Grid member name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#name DataNiosDhcpRange#name}
  */
  readonly name?: string;
}

export function dataNiosDhcpRangeResultMemberToTerraform(struct?: DataNiosDhcpRangeResultMember | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeResultMemberToHclTerraform(struct?: DataNiosDhcpRangeResultMember | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultMember | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultMember | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpRangeResultMsAdUserData {
}

export function dataNiosDhcpRangeResultMsAdUserDataToTerraform(struct?: DataNiosDhcpRangeResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNiosDhcpRangeResultMsAdUserDataToHclTerraform(struct?: DataNiosDhcpRangeResultMsAdUserData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNiosDhcpRangeResultMsAdUserDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultMsAdUserData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultMsAdUserData | undefined) {
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
export interface DataNiosDhcpRangeResultMsOptions {
  /**
  * The name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#name DataNiosDhcpRange#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#num DataNiosDhcpRange#num}
  */
  readonly num: number;
  /**
  * The name of the user class with which this DHCP option is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#user_class DataNiosDhcpRange#user_class}
  */
  readonly userClass?: string;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#value DataNiosDhcpRange#value}
  */
  readonly value: string;
  /**
  * The name of the vendor class with which this DHCP option is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#vendor_class DataNiosDhcpRange#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosDhcpRangeResultMsOptionsToTerraform(struct?: DataNiosDhcpRangeResultMsOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    user_class: cdktf.stringToTerraform(struct!.userClass),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function dataNiosDhcpRangeResultMsOptionsToHclTerraform(struct?: DataNiosDhcpRangeResultMsOptions | cdktf.IResolvable): any {
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
    user_class: {
      value: cdktf.stringToHclTerraform(struct!.userClass),
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

export class DataNiosDhcpRangeResultMsOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultMsOptions | cdktf.IResolvable | undefined {
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
    if (this._userClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.userClass = this._userClass;
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

  public set internalValue(value: DataNiosDhcpRangeResultMsOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._userClass = undefined;
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
      this._userClass = value.userClass;
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

  // num - computed: true, optional: false, required: true
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // user_class - computed: true, optional: true, required: false
  private _userClass?: string; 
  public get userClass() {
    return this.getStringAttribute('user_class');
  }
  public set userClass(value: string) {
    this._userClass = value;
  }
  public resetUserClass() {
    this._userClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userClassInput() {
    return this._userClass;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
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

export class DataNiosDhcpRangeResultMsOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultMsOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultMsOptionsOutputReference {
    return new DataNiosDhcpRangeResultMsOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultMsServer {
  /**
  * The IPv4 Address or FQDN of the Microsoft server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ipv4addr DataNiosDhcpRange#ipv4addr}
  */
  readonly ipv4Addr: string;
}

export function dataNiosDhcpRangeResultMsServerToTerraform(struct?: DataNiosDhcpRangeResultMsServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
  }
}


export function dataNiosDhcpRangeResultMsServerToHclTerraform(struct?: DataNiosDhcpRangeResultMsServer | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultMsServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultMsServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultMsServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
    }
  }

  // ipv4addr - computed: true, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }
}
export interface DataNiosDhcpRangeResultNacFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#filter DataNiosDhcpRange#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#permission DataNiosDhcpRange#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeResultNacFilterRulesToTerraform(struct?: DataNiosDhcpRangeResultNacFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeResultNacFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeResultNacFilterRules | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultNacFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultNacFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultNacFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._permission = value.permission;
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

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDhcpRangeResultNacFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultNacFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultNacFilterRulesOutputReference {
    return new DataNiosDhcpRangeResultNacFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultOptionFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#filter DataNiosDhcpRange#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#permission DataNiosDhcpRange#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeResultOptionFilterRulesToTerraform(struct?: DataNiosDhcpRangeResultOptionFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeResultOptionFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeResultOptionFilterRules | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultOptionFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultOptionFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultOptionFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._permission = value.permission;
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

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDhcpRangeResultOptionFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultOptionFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultOptionFilterRulesOutputReference {
    return new DataNiosDhcpRangeResultOptionFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#name DataNiosDhcpRange#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#num DataNiosDhcpRange#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: * routers * router-templates * domain-name-servers * domain-name * broadcast-address * broadcast-address-offset * dhcp-lease-time * dhcp6.name-servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_option DataNiosDhcpRange#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option. Required to be set for all options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#value DataNiosDhcpRange#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#vendor_class DataNiosDhcpRange#vendor_class}
  */
  readonly vendorClass?: string;
}

export function dataNiosDhcpRangeResultOptionsToTerraform(struct?: DataNiosDhcpRangeResultOptions | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeResultOptionsToHclTerraform(struct?: DataNiosDhcpRangeResultOptions | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultOptions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultOptions | cdktf.IResolvable | undefined) {
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

export class DataNiosDhcpRangeResultOptionsList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultOptions[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultOptionsOutputReference {
    return new DataNiosDhcpRangeResultOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#day_of_month DataNiosDhcpRange#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#disable DataNiosDhcpRange#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#every DataNiosDhcpRange#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#frequency DataNiosDhcpRange#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#hour_of_day DataNiosDhcpRange#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#minutes_past_hour DataNiosDhcpRange#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#month DataNiosDhcpRange#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#recurring_time DataNiosDhcpRange#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#repeat DataNiosDhcpRange#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#time_zone DataNiosDhcpRange#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#weekdays DataNiosDhcpRange#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#year DataNiosDhcpRange#year}
  */
  readonly year?: number;
}

export function dataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutScheduleToTerraform(struct?: DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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


export function dataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct?: DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule | cdktf.IResolvable | undefined) {
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
export interface DataNiosDhcpRangeResultPortControlBlackoutSetting {
  /**
  * The blackout duration in seconds; minimum value is 1 minute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#blackout_duration DataNiosDhcpRange#blackout_duration}
  */
  readonly blackoutDuration?: number;
  /**
  * The schedule for the blackout period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#blackout_schedule DataNiosDhcpRange#blackout_schedule}
  */
  readonly blackoutSchedule?: DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule;
  /**
  * Determines whether a blackout is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_blackout DataNiosDhcpRange#enable_blackout}
  */
  readonly enableBlackout?: boolean | cdktf.IResolvable;
}

export function dataNiosDhcpRangeResultPortControlBlackoutSettingToTerraform(struct?: DataNiosDhcpRangeResultPortControlBlackoutSetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blackout_duration: cdktf.numberToTerraform(struct!.blackoutDuration),
    blackout_schedule: dataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutScheduleToTerraform(struct!.blackoutSchedule),
    enable_blackout: cdktf.booleanToTerraform(struct!.enableBlackout),
  }
}


export function dataNiosDhcpRangeResultPortControlBlackoutSettingToHclTerraform(struct?: DataNiosDhcpRangeResultPortControlBlackoutSetting | cdktf.IResolvable): any {
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
      value: dataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutScheduleToHclTerraform(struct!.blackoutSchedule),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule",
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

export class DataNiosDhcpRangeResultPortControlBlackoutSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultPortControlBlackoutSetting | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultPortControlBlackoutSetting | cdktf.IResolvable | undefined) {
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
  private _blackoutSchedule = new DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutScheduleOutputReference(this, "blackout_schedule");
  public get blackoutSchedule() {
    return this._blackoutSchedule;
  }
  public putBlackoutSchedule(value: DataNiosDhcpRangeResultPortControlBlackoutSettingBlackoutSchedule) {
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
export interface DataNiosDhcpRangeResultRelayAgentFilterRules {
  /**
  * The name of the DHCP filter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#filter DataNiosDhcpRange#filter}
  */
  readonly filter: string;
  /**
  * The permission to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#permission DataNiosDhcpRange#permission}
  */
  readonly permission: string;
}

export function dataNiosDhcpRangeResultRelayAgentFilterRulesToTerraform(struct?: DataNiosDhcpRangeResultRelayAgentFilterRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.stringToTerraform(struct!.filter),
    permission: cdktf.stringToTerraform(struct!.permission),
  }
}


export function dataNiosDhcpRangeResultRelayAgentFilterRulesToHclTerraform(struct?: DataNiosDhcpRangeResultRelayAgentFilterRules | cdktf.IResolvable): any {
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
    permission: {
      value: cdktf.stringToHclTerraform(struct!.permission),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultRelayAgentFilterRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultRelayAgentFilterRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._permission !== undefined) {
      hasAnyValues = true;
      internalValueResult.permission = this._permission;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultRelayAgentFilterRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
      this._permission = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
      this._permission = value.permission;
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

  // permission - computed: true, optional: false, required: true
  private _permission?: string; 
  public get permission() {
    return this.getStringAttribute('permission');
  }
  public set permission(value: string) {
    this._permission = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionInput() {
    return this._permission;
  }
}

export class DataNiosDhcpRangeResultRelayAgentFilterRulesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultRelayAgentFilterRules[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultRelayAgentFilterRulesOutputReference {
    return new DataNiosDhcpRangeResultRelayAgentFilterRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultSplitMember {
  /**
  * The IPv4 Address or FQDN of the Microsoft server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ipv4addr DataNiosDhcpRange#ipv4addr}
  */
  readonly ipv4Addr: string;
}

export function dataNiosDhcpRangeResultSplitMemberToTerraform(struct?: DataNiosDhcpRangeResultSplitMember | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4addr: cdktf.stringToTerraform(struct!.ipv4Addr),
  }
}


export function dataNiosDhcpRangeResultSplitMemberToHclTerraform(struct?: DataNiosDhcpRangeResultSplitMember | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultSplitMemberOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultSplitMember | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Addr = this._ipv4Addr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResultSplitMember | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Addr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Addr = value.ipv4Addr;
    }
  }

  // ipv4addr - computed: true, optional: false, required: true
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }
}
export interface DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes {
  /**
  * The name of the extensible attribute definition object the Cisco ISE attribute that is enabled for subscription is mapped on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#mapped_ea DataNiosDhcpRange#mapped_ea}
  */
  readonly mappedEa: string;
  /**
  * The Cisco ISE attribute name that is enabled for publishsing from a Cisco ISE endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#name DataNiosDhcpRange#name}
  */
  readonly name: string;
}

export function dataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesToTerraform(struct?: DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapped_ea: cdktf.stringToTerraform(struct!.mappedEa),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesToHclTerraform(struct?: DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable): any {
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

export class DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes | cdktf.IResolvable | undefined) {
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

  // mapped_ea - computed: true, optional: false, required: true
  private _mappedEa?: string; 
  public get mappedEa() {
    return this.getStringAttribute('mapped_ea');
  }
  public set mappedEa(value: string) {
    this._mappedEa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedEaInput() {
    return this._mappedEa;
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

export class DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesOutputReference {
    return new DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataNiosDhcpRangeResultSubscribeSettings {
  /**
  * The list of Cisco ISE attributes allowed for subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enabled_attributes DataNiosDhcpRange#enabled_attributes}
  */
  readonly enabledAttributes?: string[];
  /**
  * The list of NIOS extensible attributes to Cisco ISE attributes mappings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#mapped_ea_attributes DataNiosDhcpRange#mapped_ea_attributes}
  */
  readonly mappedEaAttributes?: DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable;
}

export function dataNiosDhcpRangeResultSubscribeSettingsToTerraform(struct?: DataNiosDhcpRangeResultSubscribeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledAttributes),
    mapped_ea_attributes: cdktf.listMapper(dataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesToTerraform, false)(struct!.mappedEaAttributes),
  }
}


export function dataNiosDhcpRangeResultSubscribeSettingsToHclTerraform(struct?: DataNiosDhcpRangeResultSubscribeSettings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesToHclTerraform, false)(struct!.mappedEaAttributes),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultSubscribeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDhcpRangeResultSubscribeSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDhcpRangeResultSubscribeSettings | cdktf.IResolvable | undefined) {
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
  private _mappedEaAttributes = new DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributesList(this, "mapped_ea_attributes", false);
  public get mappedEaAttributes() {
    return this._mappedEaAttributes;
  }
  public putMappedEaAttributes(value: DataNiosDhcpRangeResultSubscribeSettingsMappedEaAttributes[] | cdktf.IResolvable) {
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
export interface DataNiosDhcpRangeResult {
  /**
  * This field controls whether only the DHCP server is allowed to update DNS, regardless of the DHCP clients requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#always_update_dns DataNiosDhcpRange#always_update_dns}
  */
  readonly alwaysUpdateDns?: boolean | cdktf.IResolvable;
  /**
  * The bootfile name for the range. You can configure the DHCP server to support clients that use the boot file name option in their DHCPREQUEST messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#bootfile DataNiosDhcpRange#bootfile}
  */
  readonly bootfile?: string;
  /**
  * The bootserver address for the range. You can specify the name and/or IP address of the boot server that the host needs to boot. The boot server IPv4 Address or name in FQDN format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#bootserver DataNiosDhcpRange#bootserver}
  */
  readonly bootserver?: string;
  /**
  * A CloudInfo struct that contains information about the cloud provider and region for the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#cloud_info DataNiosDhcpRange#cloud_info}
  */
  readonly cloudInfo?: DataNiosDhcpRangeResultCloudInfo;
  /**
  * Comment for the range; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#comment DataNiosDhcpRange#comment}
  */
  readonly comment?: string;
  /**
  * The dynamic DNS domain name the appliance uses specifically for DDNS updates for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ddns_domainname DataNiosDhcpRange#ddns_domainname}
  */
  readonly ddnsDomainname?: string;
  /**
  * If this field is set to True, the DHCP server generates a hostname and updates DNS with it when the DHCP client request does not contain a hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ddns_generate_hostname DataNiosDhcpRange#ddns_generate_hostname}
  */
  readonly ddnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * If True, send NAK forcing the client to take the new address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#deny_all_clients DataNiosDhcpRange#deny_all_clients}
  */
  readonly denyAllClients?: boolean | cdktf.IResolvable;
  /**
  * If set to true, BOOTP settings are disabled and BOOTP requests will be denied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#deny_bootp DataNiosDhcpRange#deny_bootp}
  */
  readonly denyBootp?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a range is disabled or not. When this is set to False, the range is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#disable DataNiosDhcpRange#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The basic polling settings for the discovery of this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#discovery_basic_poll_settings DataNiosDhcpRange#discovery_basic_poll_settings}
  */
  readonly discoveryBasicPollSettings?: DataNiosDhcpRangeResultDiscoveryBasicPollSettings;
  /**
  * The blackout settings for the discovery of this range. If this is set to False, the blackout settings are not used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#discovery_blackout_setting DataNiosDhcpRange#discovery_blackout_setting}
  */
  readonly discoveryBlackoutSetting?: DataNiosDhcpRangeResultDiscoveryBlackoutSetting;
  /**
  * The member that will run discovery for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#discovery_member DataNiosDhcpRange#discovery_member}
  */
  readonly discoveryMember?: string;
  /**
  * The e-mail lists to which the appliance sends DHCP threshold alarm e-mail messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#email_list DataNiosDhcpRange#email_list}
  */
  readonly emailList?: string[];
  /**
  * The dynamic DNS updates flag of a DHCP range object. If set to True, the DHCP server sends DDNS updates to DNS servers in the same Grid, and to external DNS servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_ddns DataNiosDhcpRange#enable_ddns}
  */
  readonly enableDdns?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP thresholds are enabled for the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_dhcp_thresholds DataNiosDhcpRange#enable_dhcp_thresholds}
  */
  readonly enableDhcpThresholds?: boolean | cdktf.IResolvable;
  /**
  * Determines whether a discovery is enabled or not for this range. When this is set to False, the discovery for this range is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_discovery DataNiosDhcpRange#enable_discovery}
  */
  readonly enableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP threshold warnings are sent through email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_email_warnings DataNiosDhcpRange#enable_email_warnings}
  */
  readonly enableEmailWarnings?: boolean | cdktf.IResolvable;
  /**
  * Determines if IFMAP publishing is enabled for the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_ifmap_publishing DataNiosDhcpRange#enable_ifmap_publishing}
  */
  readonly enableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Determines if the discovery for the range should be immediately enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_immediate_discovery DataNiosDhcpRange#enable_immediate_discovery}
  */
  readonly enableImmediateDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Set this to True if you want the DHCP server to use a different lease time for PXE clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_pxe_lease_time DataNiosDhcpRange#enable_pxe_lease_time}
  */
  readonly enablePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Determines if DHCP threshold warnings are send through SNMP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#enable_snmp_warnings DataNiosDhcpRange#enable_snmp_warnings}
  */
  readonly enableSnmpWarnings?: boolean | cdktf.IResolvable;
  /**
  * The IPv4 Address end address of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#end_addr DataNiosDhcpRange#end_addr}
  */
  readonly endAddr: string;
  /**
  * These are ranges of IP addresses that the appliance does not use to assign to clients. You can use these exclusion addresses as static IP addresses. They contain the start and end addresses of the exclusion range, and optionally, information about this exclusion range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#exclude DataNiosDhcpRange#exclude}
  */
  readonly exclude?: DataNiosDhcpRangeResultExclude[] | cdktf.IResolvable;
  /**
  * Extensible attributes associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#extattrs DataNiosDhcpRange#extattrs}
  */
  readonly extattrs?: { [key: string]: string };
  /**
  * The name of the failover association: the server in this failover association will serve the IPv4 range in case the main server is out of service. {range:range} must be set to 'FAILOVER' or 'FAILOVER_MS' if you want the failover association specified here to serve the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#failover_association DataNiosDhcpRange#failover_association}
  */
  readonly failoverAssociation?: string;
  /**
  * This field contains the fingerprint filters for this DHCP range. The appliance uses matching rules in these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#fingerprint_filter_rules DataNiosDhcpRange#fingerprint_filter_rules}
  */
  readonly fingerprintFilterRules?: DataNiosDhcpRangeResultFingerprintFilterRules[] | cdktf.IResolvable;
  /**
  * The percentage of DHCP range usage threshold above which range usage is not expected and may warrant your attention. When the high watermark is reached, the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#high_water_mark DataNiosDhcpRange#high_water_mark}
  */
  readonly highWaterMark?: number;
  /**
  * The percentage of DHCP range usage below which the corresponding SNMP trap is reset. A number that specifies the percentage of allocated addresses. The range is from 1 to 100. The high watermark reset value must be lower than the high watermark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#high_water_mark_reset DataNiosDhcpRange#high_water_mark_reset}
  */
  readonly highWaterMarkReset?: number;
  /**
  * If this field is set to False, the appliance returns all DHCP options the client is eligible to receive, rather than only the list of options the client has requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ignore_dhcp_option_list_request DataNiosDhcpRange#ignore_dhcp_option_list_request}
  */
  readonly ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the appliance will ignore DHCP client IDs or MAC addresses. Valid values are "NONE", "CLIENT", or "MACADDR". The default is "NONE".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ignore_id DataNiosDhcpRange#ignore_id}
  */
  readonly ignoreId?: string;
  /**
  * A list of MAC addresses the appliance will ignore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ignore_mac_addresses DataNiosDhcpRange#ignore_mac_addresses}
  */
  readonly ignoreMacAddresses?: string[];
  /**
  * Permission for known clients. This can be 'Allow' or 'Deny'. If set to 'Deny' known clients will be denied IP addresses. Known clients include roaming hosts and clients with fixed addresses or DHCP host entries. Unknown clients include clients that are not roaming hosts and clients that do not have fixed addresses or DHCP host entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#known_clients DataNiosDhcpRange#known_clients}
  */
  readonly knownClients?: string;
  /**
  * An integer that specifies the period of time (in seconds) that frees and backs up leases remained in the database before they are automatically deleted. To disable lease scavenging, set the parameter to -1. The minimum positive value must be greater than 86400 seconds (1 day).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#lease_scavenge_time DataNiosDhcpRange#lease_scavenge_time}
  */
  readonly leaseScavengeTime?: number;
  /**
  * This field contains the logic filters to be applied to this range. This list corresponds to the match rules that are written to the dhcpd configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#logic_filter_rules DataNiosDhcpRange#logic_filter_rules}
  */
  readonly logicFilterRules?: DataNiosDhcpRangeResultLogicFilterRules[] | cdktf.IResolvable;
  /**
  * The percentage of DHCP range usage below which the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#low_water_mark DataNiosDhcpRange#low_water_mark}
  */
  readonly lowWaterMark?: number;
  /**
  * The percentage of DHCP range usage threshold below which range usage is not expected and may warrant your attention. When the low watermark is crossed, the Infoblox appliance generates a syslog message and sends a warning (if enabled). A number that specifies the percentage of allocated addresses. The range is from 1 to 100. The low watermark reset value must be higher than the low watermark value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#low_water_mark_reset DataNiosDhcpRange#low_water_mark_reset}
  */
  readonly lowWaterMarkReset?: number;
  /**
  * This field contains the MAC filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#mac_filter_rules DataNiosDhcpRange#mac_filter_rules}
  */
  readonly macFilterRules?: DataNiosDhcpRangeResultMacFilterRules[] | cdktf.IResolvable;
  /**
  * This field contains the member that will run the DHCP service for this range. If this is not set, the range will be served by the member that is currently serving the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#member DataNiosDhcpRange#member}
  */
  readonly member?: DataNiosDhcpRangeResultMember;
  /**
  * This field contains the Microsoft DHCP options for this range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ms_options DataNiosDhcpRange#ms_options}
  */
  readonly msOptions?: DataNiosDhcpRangeResultMsOptions[] | cdktf.IResolvable;
  /**
  * This field contains the Microsoft server that will serve this range. This is used for Microsoft failover.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#ms_server DataNiosDhcpRange#ms_server}
  */
  readonly msServer?: DataNiosDhcpRangeResultMsServer;
  /**
  * This field contains the NAC filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#nac_filter_rules DataNiosDhcpRange#nac_filter_rules}
  */
  readonly nacFilterRules?: DataNiosDhcpRangeResultNacFilterRules[] | cdktf.IResolvable;
  /**
  * This field contains the name of the Microsoft scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#name DataNiosDhcpRange#name}
  */
  readonly name?: string;
  /**
  * The network to which this range belongs, in IPv4 Address/CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#network DataNiosDhcpRange#network}
  */
  readonly network?: string;
  /**
  * The name of the network view in which this range resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#network_view DataNiosDhcpRange#network_view}
  */
  readonly networkView?: string;
  /**
  * The name in FQDN and/or IPv4 Address of the next server that the host needs to boot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#nextserver DataNiosDhcpRange#nextserver}
  */
  readonly nextserver?: string;
  /**
  * This field contains the Option filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#option_filter_rules DataNiosDhcpRange#option_filter_rules}
  */
  readonly optionFilterRules?: DataNiosDhcpRangeResultOptionFilterRules[] | cdktf.IResolvable;
  /**
  * An array of DHCP option dhcpoption structs that lists the DHCP options associated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#options DataNiosDhcpRange#options}
  */
  readonly options?: DataNiosDhcpRangeResultOptions[] | cdktf.IResolvable;
  /**
  * The port control blackout settings for the range. This field is used to configure the port control blackout settings for the DHCP range. It includes information about the blackout settings, such as the start and end times of the blackout period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#port_control_blackout_setting DataNiosDhcpRange#port_control_blackout_setting}
  */
  readonly portControlBlackoutSetting?: DataNiosDhcpRangeResultPortControlBlackoutSetting;
  /**
  * The PXE lease time value of a DHCP Range object. Some hosts use PXE (Preboot Execution Environment) to boot remotely from a server. To better manage your IP resources, set a different lease time for PXE boot requests. You can configure the DHCP server to allocate an IP address with a shorter lease time to hosts that send PXE boot requests, so IP addresses are not leased longer than necessary. A 32-bit unsigned integer that represents the duration, in seconds, for which the update is cached. Zero indicates that the update is not cached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#pxe_lease_time DataNiosDhcpRange#pxe_lease_time}
  */
  readonly pxeLeaseTime?: number;
  /**
  * If the field is set to True, the leases are kept in the Recycle Bin until one week after expiration. Otherwise, the leases are permanently deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#recycle_leases DataNiosDhcpRange#recycle_leases}
  */
  readonly recycleLeases?: boolean | cdktf.IResolvable;
  /**
  * This field contains the Relay Agent filters to be applied to this range. The appliance uses the matching rules of these filters to select the address range from which it assigns a lease.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#relay_agent_filter_rules DataNiosDhcpRange#relay_agent_filter_rules}
  */
  readonly relayAgentFilterRules?: DataNiosDhcpRangeResultRelayAgentFilterRules[] | cdktf.IResolvable;
  /**
  * Restarts the member service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#restart_if_needed DataNiosDhcpRange#restart_if_needed}
  */
  readonly restartIfNeeded?: boolean | cdktf.IResolvable;
  /**
  * If the field is set to True, the discovery blackout setting will be used for port control blackout setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#same_port_control_discovery_blackout DataNiosDhcpRange#same_port_control_discovery_blackout}
  */
  readonly samePortControlDiscoveryBlackout?: boolean | cdktf.IResolvable;
  /**
  * The type of server that is going to serve the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#server_association_type DataNiosDhcpRange#server_association_type}
  */
  readonly serverAssociationType?: string;
  /**
  * This field contains the split member that will run the DHCP service for this range. If this is not set, the range will be served by the member that is currently serving the network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#split_member DataNiosDhcpRange#split_member}
  */
  readonly splitMember?: DataNiosDhcpRangeResultSplitMember;
  /**
  * This field controls the percentage used when creating a split scope. Valid values are numbers between 1 and 99. If the value is 40, it means that the top 40% of the exclusion will be created on the DHCP range assigned to {next_available_ip:next_available_ip} and the lower 60% of the range will be assigned to DHCP range assigned to {next_available_ip:next_available_ip}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#split_scope_exclusion_percent DataNiosDhcpRange#split_scope_exclusion_percent}
  */
  readonly splitScopeExclusionPercent?: number;
  /**
  * The IPv4 Address starting address of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#start_addr DataNiosDhcpRange#start_addr}
  */
  readonly startAddr: string;
  /**
  * The subscribe settings for the range. This field is used to configure the subscription settings for the DHCP range. It includes information about the subscription, such as the subscriber's email address and whether the subscription is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#subscribe_settings DataNiosDhcpRange#subscribe_settings}
  */
  readonly subscribeSettings?: DataNiosDhcpRangeResultSubscribeSettings;
  /**
  * Permission for unknown clients. This can be 'Allow' or 'Deny'. If set to 'Deny', unknown clients will be denied IP addresses. Known clients include roaming hosts and clients with fixed addresses or DHCP host entries. Unknown clients include clients that are not roaming hosts and clients that do not have fixed addresses or DHCP host entries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#unknown_clients DataNiosDhcpRange#unknown_clients}
  */
  readonly unknownClients?: string;
  /**
  * This field controls whether the DHCP server updates DNS when a DHCP lease is renewed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#update_dns_on_lease_renewal DataNiosDhcpRange#update_dns_on_lease_renewal}
  */
  readonly updateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_blackout_setting , port_control_blackout_setting, same_port_control_discovery_blackout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_blackout_setting DataNiosDhcpRange#use_blackout_setting}
  */
  readonly useBlackoutSetting?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootfile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_bootfile DataNiosDhcpRange#use_bootfile}
  */
  readonly useBootfile?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: bootserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_bootserver DataNiosDhcpRange#use_bootserver}
  */
  readonly useBootserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_domainname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_ddns_domainname DataNiosDhcpRange#use_ddns_domainname}
  */
  readonly useDdnsDomainname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ddns_generate_hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_ddns_generate_hostname DataNiosDhcpRange#use_ddns_generate_hostname}
  */
  readonly useDdnsGenerateHostname?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: deny_bootp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_deny_bootp DataNiosDhcpRange#use_deny_bootp}
  */
  readonly useDenyBootp?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_basic_poll_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_discovery_basic_polling_settings DataNiosDhcpRange#use_discovery_basic_polling_settings}
  */
  readonly useDiscoveryBasicPollingSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: email_list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_email_list DataNiosDhcpRange#use_email_list}
  */
  readonly useEmailList?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ddns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_enable_ddns DataNiosDhcpRange#use_enable_ddns}
  */
  readonly useEnableDdns?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_dhcp_thresholds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_enable_dhcp_thresholds DataNiosDhcpRange#use_enable_dhcp_thresholds}
  */
  readonly useEnableDhcpThresholds?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: discovery_member , enable_discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_enable_discovery DataNiosDhcpRange#use_enable_discovery}
  */
  readonly useEnableDiscovery?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: enable_ifmap_publishing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_enable_ifmap_publishing DataNiosDhcpRange#use_enable_ifmap_publishing}
  */
  readonly useEnableIfmapPublishing?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_dhcp_option_list_request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_ignore_dhcp_option_list_request DataNiosDhcpRange#use_ignore_dhcp_option_list_request}
  */
  readonly useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ignore_id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_ignore_id DataNiosDhcpRange#use_ignore_id}
  */
  readonly useIgnoreId?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: known_clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_known_clients DataNiosDhcpRange#use_known_clients}
  */
  readonly useKnownClients?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: lease_scavenge_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_lease_scavenge_time DataNiosDhcpRange#use_lease_scavenge_time}
  */
  readonly useLeaseScavengeTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: logic_filter_rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_logic_filter_rules DataNiosDhcpRange#use_logic_filter_rules}
  */
  readonly useLogicFilterRules?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: ms_options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_ms_options DataNiosDhcpRange#use_ms_options}
  */
  readonly useMsOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: nextserver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_nextserver DataNiosDhcpRange#use_nextserver}
  */
  readonly useNextserver?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_options DataNiosDhcpRange#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: pxe_lease_time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_pxe_lease_time DataNiosDhcpRange#use_pxe_lease_time}
  */
  readonly usePxeLeaseTime?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: recycle_leases
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_recycle_leases DataNiosDhcpRange#use_recycle_leases}
  */
  readonly useRecycleLeases?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: subscribe_settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_subscribe_settings DataNiosDhcpRange#use_subscribe_settings}
  */
  readonly useSubscribeSettings?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: unknown_clients
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_unknown_clients DataNiosDhcpRange#use_unknown_clients}
  */
  readonly useUnknownClients?: boolean | cdktf.IResolvable;
  /**
  * Use flag for: update_dns_on_lease_renewal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#use_update_dns_on_lease_renewal DataNiosDhcpRange#use_update_dns_on_lease_renewal}
  */
  readonly useUpdateDnsOnLeaseRenewal?: boolean | cdktf.IResolvable;
}

export function dataNiosDhcpRangeResultToTerraform(struct?: DataNiosDhcpRangeResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    always_update_dns: cdktf.booleanToTerraform(struct!.alwaysUpdateDns),
    bootfile: cdktf.stringToTerraform(struct!.bootfile),
    bootserver: cdktf.stringToTerraform(struct!.bootserver),
    cloud_info: dataNiosDhcpRangeResultCloudInfoToTerraform(struct!.cloudInfo),
    comment: cdktf.stringToTerraform(struct!.comment),
    ddns_domainname: cdktf.stringToTerraform(struct!.ddnsDomainname),
    ddns_generate_hostname: cdktf.booleanToTerraform(struct!.ddnsGenerateHostname),
    deny_all_clients: cdktf.booleanToTerraform(struct!.denyAllClients),
    deny_bootp: cdktf.booleanToTerraform(struct!.denyBootp),
    disable: cdktf.booleanToTerraform(struct!.disable),
    discovery_basic_poll_settings: dataNiosDhcpRangeResultDiscoveryBasicPollSettingsToTerraform(struct!.discoveryBasicPollSettings),
    discovery_blackout_setting: dataNiosDhcpRangeResultDiscoveryBlackoutSettingToTerraform(struct!.discoveryBlackoutSetting),
    discovery_member: cdktf.stringToTerraform(struct!.discoveryMember),
    email_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailList),
    enable_ddns: cdktf.booleanToTerraform(struct!.enableDdns),
    enable_dhcp_thresholds: cdktf.booleanToTerraform(struct!.enableDhcpThresholds),
    enable_discovery: cdktf.booleanToTerraform(struct!.enableDiscovery),
    enable_email_warnings: cdktf.booleanToTerraform(struct!.enableEmailWarnings),
    enable_ifmap_publishing: cdktf.booleanToTerraform(struct!.enableIfmapPublishing),
    enable_immediate_discovery: cdktf.booleanToTerraform(struct!.enableImmediateDiscovery),
    enable_pxe_lease_time: cdktf.booleanToTerraform(struct!.enablePxeLeaseTime),
    enable_snmp_warnings: cdktf.booleanToTerraform(struct!.enableSnmpWarnings),
    end_addr: cdktf.stringToTerraform(struct!.endAddr),
    exclude: cdktf.listMapper(dataNiosDhcpRangeResultExcludeToTerraform, false)(struct!.exclude),
    extattrs: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extattrs),
    failover_association: cdktf.stringToTerraform(struct!.failoverAssociation),
    fingerprint_filter_rules: cdktf.listMapper(dataNiosDhcpRangeResultFingerprintFilterRulesToTerraform, false)(struct!.fingerprintFilterRules),
    high_water_mark: cdktf.numberToTerraform(struct!.highWaterMark),
    high_water_mark_reset: cdktf.numberToTerraform(struct!.highWaterMarkReset),
    ignore_dhcp_option_list_request: cdktf.booleanToTerraform(struct!.ignoreDhcpOptionListRequest),
    ignore_id: cdktf.stringToTerraform(struct!.ignoreId),
    ignore_mac_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreMacAddresses),
    known_clients: cdktf.stringToTerraform(struct!.knownClients),
    lease_scavenge_time: cdktf.numberToTerraform(struct!.leaseScavengeTime),
    logic_filter_rules: cdktf.listMapper(dataNiosDhcpRangeResultLogicFilterRulesToTerraform, false)(struct!.logicFilterRules),
    low_water_mark: cdktf.numberToTerraform(struct!.lowWaterMark),
    low_water_mark_reset: cdktf.numberToTerraform(struct!.lowWaterMarkReset),
    mac_filter_rules: cdktf.listMapper(dataNiosDhcpRangeResultMacFilterRulesToTerraform, false)(struct!.macFilterRules),
    member: dataNiosDhcpRangeResultMemberToTerraform(struct!.member),
    ms_options: cdktf.listMapper(dataNiosDhcpRangeResultMsOptionsToTerraform, false)(struct!.msOptions),
    ms_server: dataNiosDhcpRangeResultMsServerToTerraform(struct!.msServer),
    nac_filter_rules: cdktf.listMapper(dataNiosDhcpRangeResultNacFilterRulesToTerraform, false)(struct!.nacFilterRules),
    name: cdktf.stringToTerraform(struct!.name),
    network: cdktf.stringToTerraform(struct!.network),
    network_view: cdktf.stringToTerraform(struct!.networkView),
    nextserver: cdktf.stringToTerraform(struct!.nextserver),
    option_filter_rules: cdktf.listMapper(dataNiosDhcpRangeResultOptionFilterRulesToTerraform, false)(struct!.optionFilterRules),
    options: cdktf.listMapper(dataNiosDhcpRangeResultOptionsToTerraform, false)(struct!.options),
    port_control_blackout_setting: dataNiosDhcpRangeResultPortControlBlackoutSettingToTerraform(struct!.portControlBlackoutSetting),
    pxe_lease_time: cdktf.numberToTerraform(struct!.pxeLeaseTime),
    recycle_leases: cdktf.booleanToTerraform(struct!.recycleLeases),
    relay_agent_filter_rules: cdktf.listMapper(dataNiosDhcpRangeResultRelayAgentFilterRulesToTerraform, false)(struct!.relayAgentFilterRules),
    restart_if_needed: cdktf.booleanToTerraform(struct!.restartIfNeeded),
    same_port_control_discovery_blackout: cdktf.booleanToTerraform(struct!.samePortControlDiscoveryBlackout),
    server_association_type: cdktf.stringToTerraform(struct!.serverAssociationType),
    split_member: dataNiosDhcpRangeResultSplitMemberToTerraform(struct!.splitMember),
    split_scope_exclusion_percent: cdktf.numberToTerraform(struct!.splitScopeExclusionPercent),
    start_addr: cdktf.stringToTerraform(struct!.startAddr),
    subscribe_settings: dataNiosDhcpRangeResultSubscribeSettingsToTerraform(struct!.subscribeSettings),
    unknown_clients: cdktf.stringToTerraform(struct!.unknownClients),
    update_dns_on_lease_renewal: cdktf.booleanToTerraform(struct!.updateDnsOnLeaseRenewal),
    use_blackout_setting: cdktf.booleanToTerraform(struct!.useBlackoutSetting),
    use_bootfile: cdktf.booleanToTerraform(struct!.useBootfile),
    use_bootserver: cdktf.booleanToTerraform(struct!.useBootserver),
    use_ddns_domainname: cdktf.booleanToTerraform(struct!.useDdnsDomainname),
    use_ddns_generate_hostname: cdktf.booleanToTerraform(struct!.useDdnsGenerateHostname),
    use_deny_bootp: cdktf.booleanToTerraform(struct!.useDenyBootp),
    use_discovery_basic_polling_settings: cdktf.booleanToTerraform(struct!.useDiscoveryBasicPollingSettings),
    use_email_list: cdktf.booleanToTerraform(struct!.useEmailList),
    use_enable_ddns: cdktf.booleanToTerraform(struct!.useEnableDdns),
    use_enable_dhcp_thresholds: cdktf.booleanToTerraform(struct!.useEnableDhcpThresholds),
    use_enable_discovery: cdktf.booleanToTerraform(struct!.useEnableDiscovery),
    use_enable_ifmap_publishing: cdktf.booleanToTerraform(struct!.useEnableIfmapPublishing),
    use_ignore_dhcp_option_list_request: cdktf.booleanToTerraform(struct!.useIgnoreDhcpOptionListRequest),
    use_ignore_id: cdktf.booleanToTerraform(struct!.useIgnoreId),
    use_known_clients: cdktf.booleanToTerraform(struct!.useKnownClients),
    use_lease_scavenge_time: cdktf.booleanToTerraform(struct!.useLeaseScavengeTime),
    use_logic_filter_rules: cdktf.booleanToTerraform(struct!.useLogicFilterRules),
    use_ms_options: cdktf.booleanToTerraform(struct!.useMsOptions),
    use_nextserver: cdktf.booleanToTerraform(struct!.useNextserver),
    use_options: cdktf.booleanToTerraform(struct!.useOptions),
    use_pxe_lease_time: cdktf.booleanToTerraform(struct!.usePxeLeaseTime),
    use_recycle_leases: cdktf.booleanToTerraform(struct!.useRecycleLeases),
    use_subscribe_settings: cdktf.booleanToTerraform(struct!.useSubscribeSettings),
    use_unknown_clients: cdktf.booleanToTerraform(struct!.useUnknownClients),
    use_update_dns_on_lease_renewal: cdktf.booleanToTerraform(struct!.useUpdateDnsOnLeaseRenewal),
  }
}


export function dataNiosDhcpRangeResultToHclTerraform(struct?: DataNiosDhcpRangeResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    always_update_dns: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysUpdateDns),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bootfile: {
      value: cdktf.stringToHclTerraform(struct!.bootfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootserver: {
      value: cdktf.stringToHclTerraform(struct!.bootserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_info: {
      value: dataNiosDhcpRangeResultCloudInfoToHclTerraform(struct!.cloudInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultCloudInfo",
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
    ddns_generate_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.ddnsGenerateHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_all_clients: {
      value: cdktf.booleanToHclTerraform(struct!.denyAllClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    deny_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.denyBootp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    discovery_basic_poll_settings: {
      value: dataNiosDhcpRangeResultDiscoveryBasicPollSettingsToHclTerraform(struct!.discoveryBasicPollSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultDiscoveryBasicPollSettings",
    },
    discovery_blackout_setting: {
      value: dataNiosDhcpRangeResultDiscoveryBlackoutSettingToHclTerraform(struct!.discoveryBlackoutSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultDiscoveryBlackoutSetting",
    },
    discovery_member: {
      value: cdktf.stringToHclTerraform(struct!.discoveryMember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailList),
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
    enable_dhcp_thresholds: {
      value: cdktf.booleanToHclTerraform(struct!.enableDhcpThresholds),
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
    enable_email_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.enableEmailWarnings),
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
    enable_pxe_lease_time: {
      value: cdktf.booleanToHclTerraform(struct!.enablePxeLeaseTime),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_snmp_warnings: {
      value: cdktf.booleanToHclTerraform(struct!.enableSnmpWarnings),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end_addr: {
      value: cdktf.stringToHclTerraform(struct!.endAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultExcludeToHclTerraform, false)(struct!.exclude),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultExcludeList",
    },
    extattrs: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extattrs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    failover_association: {
      value: cdktf.stringToHclTerraform(struct!.failoverAssociation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fingerprint_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultFingerprintFilterRulesToHclTerraform, false)(struct!.fingerprintFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultFingerprintFilterRulesList",
    },
    high_water_mark: {
      value: cdktf.numberToHclTerraform(struct!.highWaterMark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    high_water_mark_reset: {
      value: cdktf.numberToHclTerraform(struct!.highWaterMarkReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_dhcp_option_list_request: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreDhcpOptionListRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_id: {
      value: cdktf.stringToHclTerraform(struct!.ignoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_mac_addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreMacAddresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    known_clients: {
      value: cdktf.stringToHclTerraform(struct!.knownClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lease_scavenge_time: {
      value: cdktf.numberToHclTerraform(struct!.leaseScavengeTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logic_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultLogicFilterRulesToHclTerraform, false)(struct!.logicFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultLogicFilterRulesList",
    },
    low_water_mark: {
      value: cdktf.numberToHclTerraform(struct!.lowWaterMark),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    low_water_mark_reset: {
      value: cdktf.numberToHclTerraform(struct!.lowWaterMarkReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultMacFilterRulesToHclTerraform, false)(struct!.macFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultMacFilterRulesList",
    },
    member: {
      value: dataNiosDhcpRangeResultMemberToHclTerraform(struct!.member),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultMember",
    },
    ms_options: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultMsOptionsToHclTerraform, false)(struct!.msOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultMsOptionsList",
    },
    ms_server: {
      value: dataNiosDhcpRangeResultMsServerToHclTerraform(struct!.msServer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultMsServer",
    },
    nac_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultNacFilterRulesToHclTerraform, false)(struct!.nacFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultNacFilterRulesList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    nextserver: {
      value: cdktf.stringToHclTerraform(struct!.nextserver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    option_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultOptionFilterRulesToHclTerraform, false)(struct!.optionFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultOptionFilterRulesList",
    },
    options: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultOptionsToHclTerraform, false)(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultOptionsList",
    },
    port_control_blackout_setting: {
      value: dataNiosDhcpRangeResultPortControlBlackoutSettingToHclTerraform(struct!.portControlBlackoutSetting),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultPortControlBlackoutSetting",
    },
    pxe_lease_time: {
      value: cdktf.numberToHclTerraform(struct!.pxeLeaseTime),
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
    relay_agent_filter_rules: {
      value: cdktf.listMapperHcl(dataNiosDhcpRangeResultRelayAgentFilterRulesToHclTerraform, false)(struct!.relayAgentFilterRules),
      isBlock: true,
      type: "list",
      storageClassType: "DataNiosDhcpRangeResultRelayAgentFilterRulesList",
    },
    restart_if_needed: {
      value: cdktf.booleanToHclTerraform(struct!.restartIfNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    same_port_control_discovery_blackout: {
      value: cdktf.booleanToHclTerraform(struct!.samePortControlDiscoveryBlackout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_association_type: {
      value: cdktf.stringToHclTerraform(struct!.serverAssociationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_member: {
      value: dataNiosDhcpRangeResultSplitMemberToHclTerraform(struct!.splitMember),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultSplitMember",
    },
    split_scope_exclusion_percent: {
      value: cdktf.numberToHclTerraform(struct!.splitScopeExclusionPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_addr: {
      value: cdktf.stringToHclTerraform(struct!.startAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscribe_settings: {
      value: dataNiosDhcpRangeResultSubscribeSettingsToHclTerraform(struct!.subscribeSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDhcpRangeResultSubscribeSettings",
    },
    unknown_clients: {
      value: cdktf.stringToHclTerraform(struct!.unknownClients),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    use_bootfile: {
      value: cdktf.booleanToHclTerraform(struct!.useBootfile),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_bootserver: {
      value: cdktf.booleanToHclTerraform(struct!.useBootserver),
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
    use_ddns_generate_hostname: {
      value: cdktf.booleanToHclTerraform(struct!.useDdnsGenerateHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_deny_bootp: {
      value: cdktf.booleanToHclTerraform(struct!.useDenyBootp),
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
    use_email_list: {
      value: cdktf.booleanToHclTerraform(struct!.useEmailList),
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
    use_enable_dhcp_thresholds: {
      value: cdktf.booleanToHclTerraform(struct!.useEnableDhcpThresholds),
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
    use_ignore_dhcp_option_list_request: {
      value: cdktf.booleanToHclTerraform(struct!.useIgnoreDhcpOptionListRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_ignore_id: {
      value: cdktf.booleanToHclTerraform(struct!.useIgnoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_known_clients: {
      value: cdktf.booleanToHclTerraform(struct!.useKnownClients),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_lease_scavenge_time: {
      value: cdktf.booleanToHclTerraform(struct!.useLeaseScavengeTime),
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
    use_ms_options: {
      value: cdktf.booleanToHclTerraform(struct!.useMsOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_nextserver: {
      value: cdktf.booleanToHclTerraform(struct!.useNextserver),
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
    use_pxe_lease_time: {
      value: cdktf.booleanToHclTerraform(struct!.usePxeLeaseTime),
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
    use_unknown_clients: {
      value: cdktf.booleanToHclTerraform(struct!.useUnknownClients),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDhcpRangeResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDhcpRangeResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alwaysUpdateDns !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysUpdateDns = this._alwaysUpdateDns;
    }
    if (this._bootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootfile = this._bootfile;
    }
    if (this._bootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootserver = this._bootserver;
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
    if (this._ddnsGenerateHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddnsGenerateHostname = this._ddnsGenerateHostname;
    }
    if (this._denyAllClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAllClients = this._denyAllClients;
    }
    if (this._denyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyBootp = this._denyBootp;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
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
    if (this._emailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailList = this._emailList;
    }
    if (this._enableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDdns = this._enableDdns;
    }
    if (this._enableDhcpThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDhcpThresholds = this._enableDhcpThresholds;
    }
    if (this._enableDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDiscovery = this._enableDiscovery;
    }
    if (this._enableEmailWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEmailWarnings = this._enableEmailWarnings;
    }
    if (this._enableIfmapPublishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIfmapPublishing = this._enableIfmapPublishing;
    }
    if (this._enableImmediateDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableImmediateDiscovery = this._enableImmediateDiscovery;
    }
    if (this._enablePxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePxeLeaseTime = this._enablePxeLeaseTime;
    }
    if (this._enableSnmpWarnings !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSnmpWarnings = this._enableSnmpWarnings;
    }
    if (this._endAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.endAddr = this._endAddr;
    }
    if (this._exclude?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude?.internalValue;
    }
    if (this._extattrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extattrs = this._extattrs;
    }
    if (this._failoverAssociation !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverAssociation = this._failoverAssociation;
    }
    if (this._fingerprintFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fingerprintFilterRules = this._fingerprintFilterRules?.internalValue;
    }
    if (this._highWaterMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWaterMark = this._highWaterMark;
    }
    if (this._highWaterMarkReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.highWaterMarkReset = this._highWaterMarkReset;
    }
    if (this._ignoreDhcpOptionListRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDhcpOptionListRequest = this._ignoreDhcpOptionListRequest;
    }
    if (this._ignoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreId = this._ignoreId;
    }
    if (this._ignoreMacAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMacAddresses = this._ignoreMacAddresses;
    }
    if (this._knownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownClients = this._knownClients;
    }
    if (this._leaseScavengeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseScavengeTime = this._leaseScavengeTime;
    }
    if (this._logicFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicFilterRules = this._logicFilterRules?.internalValue;
    }
    if (this._lowWaterMark !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWaterMark = this._lowWaterMark;
    }
    if (this._lowWaterMarkReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowWaterMarkReset = this._lowWaterMarkReset;
    }
    if (this._macFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.macFilterRules = this._macFilterRules?.internalValue;
    }
    if (this._member?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member?.internalValue;
    }
    if (this._msOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msOptions = this._msOptions?.internalValue;
    }
    if (this._msServer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msServer = this._msServer?.internalValue;
    }
    if (this._nacFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nacFilterRules = this._nacFilterRules?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._networkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkView = this._networkView;
    }
    if (this._nextserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextserver = this._nextserver;
    }
    if (this._optionFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionFilterRules = this._optionFilterRules?.internalValue;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    if (this._portControlBlackoutSetting?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portControlBlackoutSetting = this._portControlBlackoutSetting?.internalValue;
    }
    if (this._pxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.pxeLeaseTime = this._pxeLeaseTime;
    }
    if (this._recycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.recycleLeases = this._recycleLeases;
    }
    if (this._relayAgentFilterRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayAgentFilterRules = this._relayAgentFilterRules?.internalValue;
    }
    if (this._restartIfNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartIfNeeded = this._restartIfNeeded;
    }
    if (this._samePortControlDiscoveryBlackout !== undefined) {
      hasAnyValues = true;
      internalValueResult.samePortControlDiscoveryBlackout = this._samePortControlDiscoveryBlackout;
    }
    if (this._serverAssociationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAssociationType = this._serverAssociationType;
    }
    if (this._splitMember?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitMember = this._splitMember?.internalValue;
    }
    if (this._splitScopeExclusionPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitScopeExclusionPercent = this._splitScopeExclusionPercent;
    }
    if (this._startAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.startAddr = this._startAddr;
    }
    if (this._subscribeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscribeSettings = this._subscribeSettings?.internalValue;
    }
    if (this._unknownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownClients = this._unknownClients;
    }
    if (this._updateDnsOnLeaseRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDnsOnLeaseRenewal = this._updateDnsOnLeaseRenewal;
    }
    if (this._useBlackoutSetting !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBlackoutSetting = this._useBlackoutSetting;
    }
    if (this._useBootfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootfile = this._useBootfile;
    }
    if (this._useBootserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useBootserver = this._useBootserver;
    }
    if (this._useDdnsDomainname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsDomainname = this._useDdnsDomainname;
    }
    if (this._useDdnsGenerateHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDdnsGenerateHostname = this._useDdnsGenerateHostname;
    }
    if (this._useDenyBootp !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDenyBootp = this._useDenyBootp;
    }
    if (this._useDiscoveryBasicPollingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDiscoveryBasicPollingSettings = this._useDiscoveryBasicPollingSettings;
    }
    if (this._useEmailList !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEmailList = this._useEmailList;
    }
    if (this._useEnableDdns !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDdns = this._useEnableDdns;
    }
    if (this._useEnableDhcpThresholds !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDhcpThresholds = this._useEnableDhcpThresholds;
    }
    if (this._useEnableDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableDiscovery = this._useEnableDiscovery;
    }
    if (this._useEnableIfmapPublishing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEnableIfmapPublishing = this._useEnableIfmapPublishing;
    }
    if (this._useIgnoreDhcpOptionListRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIgnoreDhcpOptionListRequest = this._useIgnoreDhcpOptionListRequest;
    }
    if (this._useIgnoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIgnoreId = this._useIgnoreId;
    }
    if (this._useKnownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.useKnownClients = this._useKnownClients;
    }
    if (this._useLeaseScavengeTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLeaseScavengeTime = this._useLeaseScavengeTime;
    }
    if (this._useLogicFilterRules !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLogicFilterRules = this._useLogicFilterRules;
    }
    if (this._useMsOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMsOptions = this._useMsOptions;
    }
    if (this._useNextserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.useNextserver = this._useNextserver;
    }
    if (this._useOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOptions = this._useOptions;
    }
    if (this._usePxeLeaseTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePxeLeaseTime = this._usePxeLeaseTime;
    }
    if (this._useRecycleLeases !== undefined) {
      hasAnyValues = true;
      internalValueResult.useRecycleLeases = this._useRecycleLeases;
    }
    if (this._useSubscribeSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSubscribeSettings = this._useSubscribeSettings;
    }
    if (this._useUnknownClients !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUnknownClients = this._useUnknownClients;
    }
    if (this._useUpdateDnsOnLeaseRenewal !== undefined) {
      hasAnyValues = true;
      internalValueResult.useUpdateDnsOnLeaseRenewal = this._useUpdateDnsOnLeaseRenewal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDhcpRangeResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._alwaysUpdateDns = undefined;
      this._bootfile = undefined;
      this._bootserver = undefined;
      this._cloudInfo.internalValue = undefined;
      this._comment = undefined;
      this._ddnsDomainname = undefined;
      this._ddnsGenerateHostname = undefined;
      this._denyAllClients = undefined;
      this._denyBootp = undefined;
      this._disable = undefined;
      this._discoveryBasicPollSettings.internalValue = undefined;
      this._discoveryBlackoutSetting.internalValue = undefined;
      this._discoveryMember = undefined;
      this._emailList = undefined;
      this._enableDdns = undefined;
      this._enableDhcpThresholds = undefined;
      this._enableDiscovery = undefined;
      this._enableEmailWarnings = undefined;
      this._enableIfmapPublishing = undefined;
      this._enableImmediateDiscovery = undefined;
      this._enablePxeLeaseTime = undefined;
      this._enableSnmpWarnings = undefined;
      this._endAddr = undefined;
      this._exclude.internalValue = undefined;
      this._extattrs = undefined;
      this._failoverAssociation = undefined;
      this._fingerprintFilterRules.internalValue = undefined;
      this._highWaterMark = undefined;
      this._highWaterMarkReset = undefined;
      this._ignoreDhcpOptionListRequest = undefined;
      this._ignoreId = undefined;
      this._ignoreMacAddresses = undefined;
      this._knownClients = undefined;
      this._leaseScavengeTime = undefined;
      this._logicFilterRules.internalValue = undefined;
      this._lowWaterMark = undefined;
      this._lowWaterMarkReset = undefined;
      this._macFilterRules.internalValue = undefined;
      this._member.internalValue = undefined;
      this._msOptions.internalValue = undefined;
      this._msServer.internalValue = undefined;
      this._nacFilterRules.internalValue = undefined;
      this._name = undefined;
      this._network = undefined;
      this._networkView = undefined;
      this._nextserver = undefined;
      this._optionFilterRules.internalValue = undefined;
      this._options.internalValue = undefined;
      this._portControlBlackoutSetting.internalValue = undefined;
      this._pxeLeaseTime = undefined;
      this._recycleLeases = undefined;
      this._relayAgentFilterRules.internalValue = undefined;
      this._restartIfNeeded = undefined;
      this._samePortControlDiscoveryBlackout = undefined;
      this._serverAssociationType = undefined;
      this._splitMember.internalValue = undefined;
      this._splitScopeExclusionPercent = undefined;
      this._startAddr = undefined;
      this._subscribeSettings.internalValue = undefined;
      this._unknownClients = undefined;
      this._updateDnsOnLeaseRenewal = undefined;
      this._useBlackoutSetting = undefined;
      this._useBootfile = undefined;
      this._useBootserver = undefined;
      this._useDdnsDomainname = undefined;
      this._useDdnsGenerateHostname = undefined;
      this._useDenyBootp = undefined;
      this._useDiscoveryBasicPollingSettings = undefined;
      this._useEmailList = undefined;
      this._useEnableDdns = undefined;
      this._useEnableDhcpThresholds = undefined;
      this._useEnableDiscovery = undefined;
      this._useEnableIfmapPublishing = undefined;
      this._useIgnoreDhcpOptionListRequest = undefined;
      this._useIgnoreId = undefined;
      this._useKnownClients = undefined;
      this._useLeaseScavengeTime = undefined;
      this._useLogicFilterRules = undefined;
      this._useMsOptions = undefined;
      this._useNextserver = undefined;
      this._useOptions = undefined;
      this._usePxeLeaseTime = undefined;
      this._useRecycleLeases = undefined;
      this._useSubscribeSettings = undefined;
      this._useUnknownClients = undefined;
      this._useUpdateDnsOnLeaseRenewal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._alwaysUpdateDns = value.alwaysUpdateDns;
      this._bootfile = value.bootfile;
      this._bootserver = value.bootserver;
      this._cloudInfo.internalValue = value.cloudInfo;
      this._comment = value.comment;
      this._ddnsDomainname = value.ddnsDomainname;
      this._ddnsGenerateHostname = value.ddnsGenerateHostname;
      this._denyAllClients = value.denyAllClients;
      this._denyBootp = value.denyBootp;
      this._disable = value.disable;
      this._discoveryBasicPollSettings.internalValue = value.discoveryBasicPollSettings;
      this._discoveryBlackoutSetting.internalValue = value.discoveryBlackoutSetting;
      this._discoveryMember = value.discoveryMember;
      this._emailList = value.emailList;
      this._enableDdns = value.enableDdns;
      this._enableDhcpThresholds = value.enableDhcpThresholds;
      this._enableDiscovery = value.enableDiscovery;
      this._enableEmailWarnings = value.enableEmailWarnings;
      this._enableIfmapPublishing = value.enableIfmapPublishing;
      this._enableImmediateDiscovery = value.enableImmediateDiscovery;
      this._enablePxeLeaseTime = value.enablePxeLeaseTime;
      this._enableSnmpWarnings = value.enableSnmpWarnings;
      this._endAddr = value.endAddr;
      this._exclude.internalValue = value.exclude;
      this._extattrs = value.extattrs;
      this._failoverAssociation = value.failoverAssociation;
      this._fingerprintFilterRules.internalValue = value.fingerprintFilterRules;
      this._highWaterMark = value.highWaterMark;
      this._highWaterMarkReset = value.highWaterMarkReset;
      this._ignoreDhcpOptionListRequest = value.ignoreDhcpOptionListRequest;
      this._ignoreId = value.ignoreId;
      this._ignoreMacAddresses = value.ignoreMacAddresses;
      this._knownClients = value.knownClients;
      this._leaseScavengeTime = value.leaseScavengeTime;
      this._logicFilterRules.internalValue = value.logicFilterRules;
      this._lowWaterMark = value.lowWaterMark;
      this._lowWaterMarkReset = value.lowWaterMarkReset;
      this._macFilterRules.internalValue = value.macFilterRules;
      this._member.internalValue = value.member;
      this._msOptions.internalValue = value.msOptions;
      this._msServer.internalValue = value.msServer;
      this._nacFilterRules.internalValue = value.nacFilterRules;
      this._name = value.name;
      this._network = value.network;
      this._networkView = value.networkView;
      this._nextserver = value.nextserver;
      this._optionFilterRules.internalValue = value.optionFilterRules;
      this._options.internalValue = value.options;
      this._portControlBlackoutSetting.internalValue = value.portControlBlackoutSetting;
      this._pxeLeaseTime = value.pxeLeaseTime;
      this._recycleLeases = value.recycleLeases;
      this._relayAgentFilterRules.internalValue = value.relayAgentFilterRules;
      this._restartIfNeeded = value.restartIfNeeded;
      this._samePortControlDiscoveryBlackout = value.samePortControlDiscoveryBlackout;
      this._serverAssociationType = value.serverAssociationType;
      this._splitMember.internalValue = value.splitMember;
      this._splitScopeExclusionPercent = value.splitScopeExclusionPercent;
      this._startAddr = value.startAddr;
      this._subscribeSettings.internalValue = value.subscribeSettings;
      this._unknownClients = value.unknownClients;
      this._updateDnsOnLeaseRenewal = value.updateDnsOnLeaseRenewal;
      this._useBlackoutSetting = value.useBlackoutSetting;
      this._useBootfile = value.useBootfile;
      this._useBootserver = value.useBootserver;
      this._useDdnsDomainname = value.useDdnsDomainname;
      this._useDdnsGenerateHostname = value.useDdnsGenerateHostname;
      this._useDenyBootp = value.useDenyBootp;
      this._useDiscoveryBasicPollingSettings = value.useDiscoveryBasicPollingSettings;
      this._useEmailList = value.useEmailList;
      this._useEnableDdns = value.useEnableDdns;
      this._useEnableDhcpThresholds = value.useEnableDhcpThresholds;
      this._useEnableDiscovery = value.useEnableDiscovery;
      this._useEnableIfmapPublishing = value.useEnableIfmapPublishing;
      this._useIgnoreDhcpOptionListRequest = value.useIgnoreDhcpOptionListRequest;
      this._useIgnoreId = value.useIgnoreId;
      this._useKnownClients = value.useKnownClients;
      this._useLeaseScavengeTime = value.useLeaseScavengeTime;
      this._useLogicFilterRules = value.useLogicFilterRules;
      this._useMsOptions = value.useMsOptions;
      this._useNextserver = value.useNextserver;
      this._useOptions = value.useOptions;
      this._usePxeLeaseTime = value.usePxeLeaseTime;
      this._useRecycleLeases = value.useRecycleLeases;
      this._useSubscribeSettings = value.useSubscribeSettings;
      this._useUnknownClients = value.useUnknownClients;
      this._useUpdateDnsOnLeaseRenewal = value.useUpdateDnsOnLeaseRenewal;
    }
  }

  // always_update_dns - computed: true, optional: true, required: false
  private _alwaysUpdateDns?: boolean | cdktf.IResolvable; 
  public get alwaysUpdateDns() {
    return this.getBooleanAttribute('always_update_dns');
  }
  public set alwaysUpdateDns(value: boolean | cdktf.IResolvable) {
    this._alwaysUpdateDns = value;
  }
  public resetAlwaysUpdateDns() {
    this._alwaysUpdateDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysUpdateDnsInput() {
    return this._alwaysUpdateDns;
  }

  // bootfile - computed: true, optional: true, required: false
  private _bootfile?: string; 
  public get bootfile() {
    return this.getStringAttribute('bootfile');
  }
  public set bootfile(value: string) {
    this._bootfile = value;
  }
  public resetBootfile() {
    this._bootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootfileInput() {
    return this._bootfile;
  }

  // bootserver - computed: true, optional: true, required: false
  private _bootserver?: string; 
  public get bootserver() {
    return this.getStringAttribute('bootserver');
  }
  public set bootserver(value: string) {
    this._bootserver = value;
  }
  public resetBootserver() {
    this._bootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootserverInput() {
    return this._bootserver;
  }

  // cloud_info - computed: true, optional: true, required: false
  private _cloudInfo = new DataNiosDhcpRangeResultCloudInfoOutputReference(this, "cloud_info");
  public get cloudInfo() {
    return this._cloudInfo;
  }
  public putCloudInfo(value: DataNiosDhcpRangeResultCloudInfo) {
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

  // deny_all_clients - computed: true, optional: true, required: false
  private _denyAllClients?: boolean | cdktf.IResolvable; 
  public get denyAllClients() {
    return this.getBooleanAttribute('deny_all_clients');
  }
  public set denyAllClients(value: boolean | cdktf.IResolvable) {
    this._denyAllClients = value;
  }
  public resetDenyAllClients() {
    this._denyAllClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAllClientsInput() {
    return this._denyAllClients;
  }

  // deny_bootp - computed: true, optional: true, required: false
  private _denyBootp?: boolean | cdktf.IResolvable; 
  public get denyBootp() {
    return this.getBooleanAttribute('deny_bootp');
  }
  public set denyBootp(value: boolean | cdktf.IResolvable) {
    this._denyBootp = value;
  }
  public resetDenyBootp() {
    this._denyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyBootpInput() {
    return this._denyBootp;
  }

  // dhcp_utilization - computed: true, optional: false, required: false
  public get dhcpUtilization() {
    return this.getNumberAttribute('dhcp_utilization');
  }

  // dhcp_utilization_status - computed: true, optional: false, required: false
  public get dhcpUtilizationStatus() {
    return this.getStringAttribute('dhcp_utilization_status');
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

  // discovery_basic_poll_settings - computed: true, optional: true, required: false
  private _discoveryBasicPollSettings = new DataNiosDhcpRangeResultDiscoveryBasicPollSettingsOutputReference(this, "discovery_basic_poll_settings");
  public get discoveryBasicPollSettings() {
    return this._discoveryBasicPollSettings;
  }
  public putDiscoveryBasicPollSettings(value: DataNiosDhcpRangeResultDiscoveryBasicPollSettings) {
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
  private _discoveryBlackoutSetting = new DataNiosDhcpRangeResultDiscoveryBlackoutSettingOutputReference(this, "discovery_blackout_setting");
  public get discoveryBlackoutSetting() {
    return this._discoveryBlackoutSetting;
  }
  public putDiscoveryBlackoutSetting(value: DataNiosDhcpRangeResultDiscoveryBlackoutSetting) {
    this._discoveryBlackoutSetting.internalValue = value;
  }
  public resetDiscoveryBlackoutSetting() {
    this._discoveryBlackoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryBlackoutSettingInput() {
    return this._discoveryBlackoutSetting.internalValue;
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

  // dynamic_hosts - computed: true, optional: false, required: false
  public get dynamicHosts() {
    return this.getNumberAttribute('dynamic_hosts');
  }

  // email_list - computed: true, optional: true, required: false
  private _emailList?: string[]; 
  public get emailList() {
    return this.getListAttribute('email_list');
  }
  public set emailList(value: string[]) {
    this._emailList = value;
  }
  public resetEmailList() {
    this._emailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailListInput() {
    return this._emailList;
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

  // enable_dhcp_thresholds - computed: true, optional: true, required: false
  private _enableDhcpThresholds?: boolean | cdktf.IResolvable; 
  public get enableDhcpThresholds() {
    return this.getBooleanAttribute('enable_dhcp_thresholds');
  }
  public set enableDhcpThresholds(value: boolean | cdktf.IResolvable) {
    this._enableDhcpThresholds = value;
  }
  public resetEnableDhcpThresholds() {
    this._enableDhcpThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDhcpThresholdsInput() {
    return this._enableDhcpThresholds;
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

  // enable_email_warnings - computed: true, optional: true, required: false
  private _enableEmailWarnings?: boolean | cdktf.IResolvable; 
  public get enableEmailWarnings() {
    return this.getBooleanAttribute('enable_email_warnings');
  }
  public set enableEmailWarnings(value: boolean | cdktf.IResolvable) {
    this._enableEmailWarnings = value;
  }
  public resetEnableEmailWarnings() {
    this._enableEmailWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEmailWarningsInput() {
    return this._enableEmailWarnings;
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

  // enable_pxe_lease_time - computed: true, optional: true, required: false
  private _enablePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get enablePxeLeaseTime() {
    return this.getBooleanAttribute('enable_pxe_lease_time');
  }
  public set enablePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._enablePxeLeaseTime = value;
  }
  public resetEnablePxeLeaseTime() {
    this._enablePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePxeLeaseTimeInput() {
    return this._enablePxeLeaseTime;
  }

  // enable_snmp_warnings - computed: true, optional: true, required: false
  private _enableSnmpWarnings?: boolean | cdktf.IResolvable; 
  public get enableSnmpWarnings() {
    return this.getBooleanAttribute('enable_snmp_warnings');
  }
  public set enableSnmpWarnings(value: boolean | cdktf.IResolvable) {
    this._enableSnmpWarnings = value;
  }
  public resetEnableSnmpWarnings() {
    this._enableSnmpWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSnmpWarningsInput() {
    return this._enableSnmpWarnings;
  }

  // end_addr - computed: true, optional: false, required: true
  private _endAddr?: string; 
  public get endAddr() {
    return this.getStringAttribute('end_addr');
  }
  public set endAddr(value: string) {
    this._endAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endAddrInput() {
    return this._endAddr;
  }

  // endpoint_sources - computed: true, optional: false, required: false
  public get endpointSources() {
    return this.getListAttribute('endpoint_sources');
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude = new DataNiosDhcpRangeResultExcludeList(this, "exclude", false);
  public get exclude() {
    return this._exclude;
  }
  public putExclude(value: DataNiosDhcpRangeResultExclude[] | cdktf.IResolvable) {
    this._exclude.internalValue = value;
  }
  public resetExclude() {
    this._exclude.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude.internalValue;
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

  // failover_association - computed: true, optional: true, required: false
  private _failoverAssociation?: string; 
  public get failoverAssociation() {
    return this.getStringAttribute('failover_association');
  }
  public set failoverAssociation(value: string) {
    this._failoverAssociation = value;
  }
  public resetFailoverAssociation() {
    this._failoverAssociation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverAssociationInput() {
    return this._failoverAssociation;
  }

  // fingerprint_filter_rules - computed: true, optional: true, required: false
  private _fingerprintFilterRules = new DataNiosDhcpRangeResultFingerprintFilterRulesList(this, "fingerprint_filter_rules", false);
  public get fingerprintFilterRules() {
    return this._fingerprintFilterRules;
  }
  public putFingerprintFilterRules(value: DataNiosDhcpRangeResultFingerprintFilterRules[] | cdktf.IResolvable) {
    this._fingerprintFilterRules.internalValue = value;
  }
  public resetFingerprintFilterRules() {
    this._fingerprintFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fingerprintFilterRulesInput() {
    return this._fingerprintFilterRules.internalValue;
  }

  // high_water_mark - computed: true, optional: true, required: false
  private _highWaterMark?: number; 
  public get highWaterMark() {
    return this.getNumberAttribute('high_water_mark');
  }
  public set highWaterMark(value: number) {
    this._highWaterMark = value;
  }
  public resetHighWaterMark() {
    this._highWaterMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWaterMarkInput() {
    return this._highWaterMark;
  }

  // high_water_mark_reset - computed: true, optional: true, required: false
  private _highWaterMarkReset?: number; 
  public get highWaterMarkReset() {
    return this.getNumberAttribute('high_water_mark_reset');
  }
  public set highWaterMarkReset(value: number) {
    this._highWaterMarkReset = value;
  }
  public resetHighWaterMarkReset() {
    this._highWaterMarkReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highWaterMarkResetInput() {
    return this._highWaterMarkReset;
  }

  // ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _ignoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get ignoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('ignore_dhcp_option_list_request');
  }
  public set ignoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._ignoreDhcpOptionListRequest = value;
  }
  public resetIgnoreDhcpOptionListRequest() {
    this._ignoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDhcpOptionListRequestInput() {
    return this._ignoreDhcpOptionListRequest;
  }

  // ignore_id - computed: true, optional: true, required: false
  private _ignoreId?: string; 
  public get ignoreId() {
    return this.getStringAttribute('ignore_id');
  }
  public set ignoreId(value: string) {
    this._ignoreId = value;
  }
  public resetIgnoreId() {
    this._ignoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreIdInput() {
    return this._ignoreId;
  }

  // ignore_mac_addresses - computed: true, optional: true, required: false
  private _ignoreMacAddresses?: string[]; 
  public get ignoreMacAddresses() {
    return this.getListAttribute('ignore_mac_addresses');
  }
  public set ignoreMacAddresses(value: string[]) {
    this._ignoreMacAddresses = value;
  }
  public resetIgnoreMacAddresses() {
    this._ignoreMacAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMacAddressesInput() {
    return this._ignoreMacAddresses;
  }

  // is_split_scope - computed: true, optional: false, required: false
  public get isSplitScope() {
    return this.getBooleanAttribute('is_split_scope');
  }

  // known_clients - computed: true, optional: true, required: false
  private _knownClients?: string; 
  public get knownClients() {
    return this.getStringAttribute('known_clients');
  }
  public set knownClients(value: string) {
    this._knownClients = value;
  }
  public resetKnownClients() {
    this._knownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownClientsInput() {
    return this._knownClients;
  }

  // lease_scavenge_time - computed: true, optional: true, required: false
  private _leaseScavengeTime?: number; 
  public get leaseScavengeTime() {
    return this.getNumberAttribute('lease_scavenge_time');
  }
  public set leaseScavengeTime(value: number) {
    this._leaseScavengeTime = value;
  }
  public resetLeaseScavengeTime() {
    this._leaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseScavengeTimeInput() {
    return this._leaseScavengeTime;
  }

  // logic_filter_rules - computed: true, optional: true, required: false
  private _logicFilterRules = new DataNiosDhcpRangeResultLogicFilterRulesList(this, "logic_filter_rules", false);
  public get logicFilterRules() {
    return this._logicFilterRules;
  }
  public putLogicFilterRules(value: DataNiosDhcpRangeResultLogicFilterRules[] | cdktf.IResolvable) {
    this._logicFilterRules.internalValue = value;
  }
  public resetLogicFilterRules() {
    this._logicFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicFilterRulesInput() {
    return this._logicFilterRules.internalValue;
  }

  // low_water_mark - computed: true, optional: true, required: false
  private _lowWaterMark?: number; 
  public get lowWaterMark() {
    return this.getNumberAttribute('low_water_mark');
  }
  public set lowWaterMark(value: number) {
    this._lowWaterMark = value;
  }
  public resetLowWaterMark() {
    this._lowWaterMark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWaterMarkInput() {
    return this._lowWaterMark;
  }

  // low_water_mark_reset - computed: true, optional: true, required: false
  private _lowWaterMarkReset?: number; 
  public get lowWaterMarkReset() {
    return this.getNumberAttribute('low_water_mark_reset');
  }
  public set lowWaterMarkReset(value: number) {
    this._lowWaterMarkReset = value;
  }
  public resetLowWaterMarkReset() {
    this._lowWaterMarkReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowWaterMarkResetInput() {
    return this._lowWaterMarkReset;
  }

  // mac_filter_rules - computed: true, optional: true, required: false
  private _macFilterRules = new DataNiosDhcpRangeResultMacFilterRulesList(this, "mac_filter_rules", false);
  public get macFilterRules() {
    return this._macFilterRules;
  }
  public putMacFilterRules(value: DataNiosDhcpRangeResultMacFilterRules[] | cdktf.IResolvable) {
    this._macFilterRules.internalValue = value;
  }
  public resetMacFilterRules() {
    this._macFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFilterRulesInput() {
    return this._macFilterRules.internalValue;
  }

  // member - computed: true, optional: true, required: false
  private _member = new DataNiosDhcpRangeResultMemberOutputReference(this, "member");
  public get member() {
    return this._member;
  }
  public putMember(value: DataNiosDhcpRangeResultMember) {
    this._member.internalValue = value;
  }
  public resetMember() {
    this._member.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member.internalValue;
  }

  // ms_ad_user_data - computed: true, optional: false, required: false
  private _msAdUserData = new DataNiosDhcpRangeResultMsAdUserDataOutputReference(this, "ms_ad_user_data");
  public get msAdUserData() {
    return this._msAdUserData;
  }

  // ms_options - computed: true, optional: true, required: false
  private _msOptions = new DataNiosDhcpRangeResultMsOptionsList(this, "ms_options", false);
  public get msOptions() {
    return this._msOptions;
  }
  public putMsOptions(value: DataNiosDhcpRangeResultMsOptions[] | cdktf.IResolvable) {
    this._msOptions.internalValue = value;
  }
  public resetMsOptions() {
    this._msOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msOptionsInput() {
    return this._msOptions.internalValue;
  }

  // ms_server - computed: true, optional: true, required: false
  private _msServer = new DataNiosDhcpRangeResultMsServerOutputReference(this, "ms_server");
  public get msServer() {
    return this._msServer;
  }
  public putMsServer(value: DataNiosDhcpRangeResultMsServer) {
    this._msServer.internalValue = value;
  }
  public resetMsServer() {
    this._msServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msServerInput() {
    return this._msServer.internalValue;
  }

  // nac_filter_rules - computed: true, optional: true, required: false
  private _nacFilterRules = new DataNiosDhcpRangeResultNacFilterRulesList(this, "nac_filter_rules", false);
  public get nacFilterRules() {
    return this._nacFilterRules;
  }
  public putNacFilterRules(value: DataNiosDhcpRangeResultNacFilterRules[] | cdktf.IResolvable) {
    this._nacFilterRules.internalValue = value;
  }
  public resetNacFilterRules() {
    this._nacFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nacFilterRulesInput() {
    return this._nacFilterRules.internalValue;
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

  // nextserver - computed: true, optional: true, required: false
  private _nextserver?: string; 
  public get nextserver() {
    return this.getStringAttribute('nextserver');
  }
  public set nextserver(value: string) {
    this._nextserver = value;
  }
  public resetNextserver() {
    this._nextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextserverInput() {
    return this._nextserver;
  }

  // option_filter_rules - computed: true, optional: true, required: false
  private _optionFilterRules = new DataNiosDhcpRangeResultOptionFilterRulesList(this, "option_filter_rules", false);
  public get optionFilterRules() {
    return this._optionFilterRules;
  }
  public putOptionFilterRules(value: DataNiosDhcpRangeResultOptionFilterRules[] | cdktf.IResolvable) {
    this._optionFilterRules.internalValue = value;
  }
  public resetOptionFilterRules() {
    this._optionFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionFilterRulesInput() {
    return this._optionFilterRules.internalValue;
  }

  // options - computed: true, optional: true, required: false
  private _options = new DataNiosDhcpRangeResultOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: DataNiosDhcpRangeResultOptions[] | cdktf.IResolvable) {
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
  private _portControlBlackoutSetting = new DataNiosDhcpRangeResultPortControlBlackoutSettingOutputReference(this, "port_control_blackout_setting");
  public get portControlBlackoutSetting() {
    return this._portControlBlackoutSetting;
  }
  public putPortControlBlackoutSetting(value: DataNiosDhcpRangeResultPortControlBlackoutSetting) {
    this._portControlBlackoutSetting.internalValue = value;
  }
  public resetPortControlBlackoutSetting() {
    this._portControlBlackoutSetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portControlBlackoutSettingInput() {
    return this._portControlBlackoutSetting.internalValue;
  }

  // pxe_lease_time - computed: true, optional: true, required: false
  private _pxeLeaseTime?: number; 
  public get pxeLeaseTime() {
    return this.getNumberAttribute('pxe_lease_time');
  }
  public set pxeLeaseTime(value: number) {
    this._pxeLeaseTime = value;
  }
  public resetPxeLeaseTime() {
    this._pxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxeLeaseTimeInput() {
    return this._pxeLeaseTime;
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

  // relay_agent_filter_rules - computed: true, optional: true, required: false
  private _relayAgentFilterRules = new DataNiosDhcpRangeResultRelayAgentFilterRulesList(this, "relay_agent_filter_rules", false);
  public get relayAgentFilterRules() {
    return this._relayAgentFilterRules;
  }
  public putRelayAgentFilterRules(value: DataNiosDhcpRangeResultRelayAgentFilterRules[] | cdktf.IResolvable) {
    this._relayAgentFilterRules.internalValue = value;
  }
  public resetRelayAgentFilterRules() {
    this._relayAgentFilterRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentFilterRulesInput() {
    return this._relayAgentFilterRules.internalValue;
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

  // server_association_type - computed: true, optional: true, required: false
  private _serverAssociationType?: string; 
  public get serverAssociationType() {
    return this.getStringAttribute('server_association_type');
  }
  public set serverAssociationType(value: string) {
    this._serverAssociationType = value;
  }
  public resetServerAssociationType() {
    this._serverAssociationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAssociationTypeInput() {
    return this._serverAssociationType;
  }

  // split_member - computed: true, optional: true, required: false
  private _splitMember = new DataNiosDhcpRangeResultSplitMemberOutputReference(this, "split_member");
  public get splitMember() {
    return this._splitMember;
  }
  public putSplitMember(value: DataNiosDhcpRangeResultSplitMember) {
    this._splitMember.internalValue = value;
  }
  public resetSplitMember() {
    this._splitMember.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitMemberInput() {
    return this._splitMember.internalValue;
  }

  // split_scope_exclusion_percent - computed: true, optional: true, required: false
  private _splitScopeExclusionPercent?: number; 
  public get splitScopeExclusionPercent() {
    return this.getNumberAttribute('split_scope_exclusion_percent');
  }
  public set splitScopeExclusionPercent(value: number) {
    this._splitScopeExclusionPercent = value;
  }
  public resetSplitScopeExclusionPercent() {
    this._splitScopeExclusionPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitScopeExclusionPercentInput() {
    return this._splitScopeExclusionPercent;
  }

  // start_addr - computed: true, optional: false, required: true
  private _startAddr?: string; 
  public get startAddr() {
    return this.getStringAttribute('start_addr');
  }
  public set startAddr(value: string) {
    this._startAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startAddrInput() {
    return this._startAddr;
  }

  // static_hosts - computed: true, optional: false, required: false
  public get staticHosts() {
    return this.getNumberAttribute('static_hosts');
  }

  // subscribe_settings - computed: true, optional: true, required: false
  private _subscribeSettings = new DataNiosDhcpRangeResultSubscribeSettingsOutputReference(this, "subscribe_settings");
  public get subscribeSettings() {
    return this._subscribeSettings;
  }
  public putSubscribeSettings(value: DataNiosDhcpRangeResultSubscribeSettings) {
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

  // total_hosts - computed: true, optional: false, required: false
  public get totalHosts() {
    return this.getNumberAttribute('total_hosts');
  }

  // unknown_clients - computed: true, optional: true, required: false
  private _unknownClients?: string; 
  public get unknownClients() {
    return this.getStringAttribute('unknown_clients');
  }
  public set unknownClients(value: string) {
    this._unknownClients = value;
  }
  public resetUnknownClients() {
    this._unknownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownClientsInput() {
    return this._unknownClients;
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

  // use_bootfile - computed: true, optional: true, required: false
  private _useBootfile?: boolean | cdktf.IResolvable; 
  public get useBootfile() {
    return this.getBooleanAttribute('use_bootfile');
  }
  public set useBootfile(value: boolean | cdktf.IResolvable) {
    this._useBootfile = value;
  }
  public resetUseBootfile() {
    this._useBootfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootfileInput() {
    return this._useBootfile;
  }

  // use_bootserver - computed: true, optional: true, required: false
  private _useBootserver?: boolean | cdktf.IResolvable; 
  public get useBootserver() {
    return this.getBooleanAttribute('use_bootserver');
  }
  public set useBootserver(value: boolean | cdktf.IResolvable) {
    this._useBootserver = value;
  }
  public resetUseBootserver() {
    this._useBootserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useBootserverInput() {
    return this._useBootserver;
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

  // use_deny_bootp - computed: true, optional: true, required: false
  private _useDenyBootp?: boolean | cdktf.IResolvable; 
  public get useDenyBootp() {
    return this.getBooleanAttribute('use_deny_bootp');
  }
  public set useDenyBootp(value: boolean | cdktf.IResolvable) {
    this._useDenyBootp = value;
  }
  public resetUseDenyBootp() {
    this._useDenyBootp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDenyBootpInput() {
    return this._useDenyBootp;
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

  // use_email_list - computed: true, optional: true, required: false
  private _useEmailList?: boolean | cdktf.IResolvable; 
  public get useEmailList() {
    return this.getBooleanAttribute('use_email_list');
  }
  public set useEmailList(value: boolean | cdktf.IResolvable) {
    this._useEmailList = value;
  }
  public resetUseEmailList() {
    this._useEmailList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEmailListInput() {
    return this._useEmailList;
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

  // use_enable_dhcp_thresholds - computed: true, optional: true, required: false
  private _useEnableDhcpThresholds?: boolean | cdktf.IResolvable; 
  public get useEnableDhcpThresholds() {
    return this.getBooleanAttribute('use_enable_dhcp_thresholds');
  }
  public set useEnableDhcpThresholds(value: boolean | cdktf.IResolvable) {
    this._useEnableDhcpThresholds = value;
  }
  public resetUseEnableDhcpThresholds() {
    this._useEnableDhcpThresholds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEnableDhcpThresholdsInput() {
    return this._useEnableDhcpThresholds;
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

  // use_ignore_dhcp_option_list_request - computed: true, optional: true, required: false
  private _useIgnoreDhcpOptionListRequest?: boolean | cdktf.IResolvable; 
  public get useIgnoreDhcpOptionListRequest() {
    return this.getBooleanAttribute('use_ignore_dhcp_option_list_request');
  }
  public set useIgnoreDhcpOptionListRequest(value: boolean | cdktf.IResolvable) {
    this._useIgnoreDhcpOptionListRequest = value;
  }
  public resetUseIgnoreDhcpOptionListRequest() {
    this._useIgnoreDhcpOptionListRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreDhcpOptionListRequestInput() {
    return this._useIgnoreDhcpOptionListRequest;
  }

  // use_ignore_id - computed: true, optional: true, required: false
  private _useIgnoreId?: boolean | cdktf.IResolvable; 
  public get useIgnoreId() {
    return this.getBooleanAttribute('use_ignore_id');
  }
  public set useIgnoreId(value: boolean | cdktf.IResolvable) {
    this._useIgnoreId = value;
  }
  public resetUseIgnoreId() {
    this._useIgnoreId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIgnoreIdInput() {
    return this._useIgnoreId;
  }

  // use_known_clients - computed: true, optional: true, required: false
  private _useKnownClients?: boolean | cdktf.IResolvable; 
  public get useKnownClients() {
    return this.getBooleanAttribute('use_known_clients');
  }
  public set useKnownClients(value: boolean | cdktf.IResolvable) {
    this._useKnownClients = value;
  }
  public resetUseKnownClients() {
    this._useKnownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useKnownClientsInput() {
    return this._useKnownClients;
  }

  // use_lease_scavenge_time - computed: true, optional: true, required: false
  private _useLeaseScavengeTime?: boolean | cdktf.IResolvable; 
  public get useLeaseScavengeTime() {
    return this.getBooleanAttribute('use_lease_scavenge_time');
  }
  public set useLeaseScavengeTime(value: boolean | cdktf.IResolvable) {
    this._useLeaseScavengeTime = value;
  }
  public resetUseLeaseScavengeTime() {
    this._useLeaseScavengeTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLeaseScavengeTimeInput() {
    return this._useLeaseScavengeTime;
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

  // use_ms_options - computed: true, optional: true, required: false
  private _useMsOptions?: boolean | cdktf.IResolvable; 
  public get useMsOptions() {
    return this.getBooleanAttribute('use_ms_options');
  }
  public set useMsOptions(value: boolean | cdktf.IResolvable) {
    this._useMsOptions = value;
  }
  public resetUseMsOptions() {
    this._useMsOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMsOptionsInput() {
    return this._useMsOptions;
  }

  // use_nextserver - computed: true, optional: true, required: false
  private _useNextserver?: boolean | cdktf.IResolvable; 
  public get useNextserver() {
    return this.getBooleanAttribute('use_nextserver');
  }
  public set useNextserver(value: boolean | cdktf.IResolvable) {
    this._useNextserver = value;
  }
  public resetUseNextserver() {
    this._useNextserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useNextserverInput() {
    return this._useNextserver;
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

  // use_pxe_lease_time - computed: true, optional: true, required: false
  private _usePxeLeaseTime?: boolean | cdktf.IResolvable; 
  public get usePxeLeaseTime() {
    return this.getBooleanAttribute('use_pxe_lease_time');
  }
  public set usePxeLeaseTime(value: boolean | cdktf.IResolvable) {
    this._usePxeLeaseTime = value;
  }
  public resetUsePxeLeaseTime() {
    this._usePxeLeaseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePxeLeaseTimeInput() {
    return this._usePxeLeaseTime;
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

  // use_unknown_clients - computed: true, optional: true, required: false
  private _useUnknownClients?: boolean | cdktf.IResolvable; 
  public get useUnknownClients() {
    return this.getBooleanAttribute('use_unknown_clients');
  }
  public set useUnknownClients(value: boolean | cdktf.IResolvable) {
    this._useUnknownClients = value;
  }
  public resetUseUnknownClients() {
    this._useUnknownClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useUnknownClientsInput() {
    return this._useUnknownClients;
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
}

export class DataNiosDhcpRangeResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDhcpRangeResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDhcpRangeResultOutputReference {
    return new DataNiosDhcpRangeResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range nios_dhcp_range}
*/
export class DataNiosDhcpRange extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_dhcp_range";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDhcpRange resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDhcpRange to import
  * @param importFromId The id of the existing DataNiosDhcpRange that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDhcpRange to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_dhcp_range", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.1.0/docs/data-sources/dhcp_range nios_dhcp_range} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDhcpRangeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDhcpRangeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_dhcp_range',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.1.0',
        providerVersionConstraint: '1.1.0'
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
  private _result = new DataNiosDhcpRangeResultList(this, "result", false);
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
