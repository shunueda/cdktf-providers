// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNiosDiscoveryVdiscoveryTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#filters DataNiosDiscoveryVdiscoveryTask#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Maximum number of objects to be returned. Defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#max_results DataNiosDiscoveryVdiscoveryTask#max_results}
  */
  readonly maxResults?: number;
  /**
  * Enable (1) or disable (0) paging for the data source query. When enabled, the system retrieves results in pages, allowing efficient handling of large result sets. Paging is enabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#paging DataNiosDiscoveryVdiscoveryTask#paging}
  */
  readonly paging?: number;
}
export interface DataNiosDiscoveryVdiscoveryTaskResultScheduledRun {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#day_of_month DataNiosDiscoveryVdiscoveryTask#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#disable DataNiosDiscoveryVdiscoveryTask#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#every DataNiosDiscoveryVdiscoveryTask#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#frequency DataNiosDiscoveryVdiscoveryTask#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#hour_of_day DataNiosDiscoveryVdiscoveryTask#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#minutes_past_hour DataNiosDiscoveryVdiscoveryTask#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#month DataNiosDiscoveryVdiscoveryTask#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#recurring_time DataNiosDiscoveryVdiscoveryTask#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#repeat DataNiosDiscoveryVdiscoveryTask#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#time_zone DataNiosDiscoveryVdiscoveryTask#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#weekdays DataNiosDiscoveryVdiscoveryTask#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#year DataNiosDiscoveryVdiscoveryTask#year}
  */
  readonly year?: number;
}

export function dataNiosDiscoveryVdiscoveryTaskResultScheduledRunToTerraform(struct?: DataNiosDiscoveryVdiscoveryTaskResultScheduledRun | cdktf.IResolvable): any {
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


export function dataNiosDiscoveryVdiscoveryTaskResultScheduledRunToHclTerraform(struct?: DataNiosDiscoveryVdiscoveryTaskResultScheduledRun | cdktf.IResolvable): any {
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

export class DataNiosDiscoveryVdiscoveryTaskResultScheduledRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataNiosDiscoveryVdiscoveryTaskResultScheduledRun | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataNiosDiscoveryVdiscoveryTaskResultScheduledRun | cdktf.IResolvable | undefined) {
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
export interface DataNiosDiscoveryVdiscoveryTaskResult {
  /**
  * Allow unsecured connection over HTTPS and bypass validation of the remote SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#allow_unsecured_connection DataNiosDiscoveryVdiscoveryTask#allow_unsecured_connection}
  */
  readonly allowUnsecuredConnection?: boolean | cdktf.IResolvable;
  /**
  * Whether to insert or update cloud EAs with discovery data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#auto_consolidate_cloud_ea DataNiosDiscoveryVdiscoveryTask#auto_consolidate_cloud_ea}
  */
  readonly autoConsolidateCloudEa: boolean | cdktf.IResolvable;
  /**
  * Whether to replace managed tenant with discovery tenant data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#auto_consolidate_managed_tenant DataNiosDiscoveryVdiscoveryTask#auto_consolidate_managed_tenant}
  */
  readonly autoConsolidateManagedTenant: boolean | cdktf.IResolvable;
  /**
  * Whether to replace managed virtual machine with discovery vm data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#auto_consolidate_managed_vm DataNiosDiscoveryVdiscoveryTask#auto_consolidate_managed_vm}
  */
  readonly autoConsolidateManagedVm: boolean | cdktf.IResolvable;
  /**
  * Template string used to generate host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#auto_create_dns_hostname_template DataNiosDiscoveryVdiscoveryTask#auto_create_dns_hostname_template}
  */
  readonly autoCreateDnsHostnameTemplate?: string;
  /**
  * Control whether to create or update DNS record using discovered data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#auto_create_dns_record DataNiosDiscoveryVdiscoveryTask#auto_create_dns_record}
  */
  readonly autoCreateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Indicates the type of record to create if the auto create DNS record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#auto_create_dns_record_type DataNiosDiscoveryVdiscoveryTask#auto_create_dns_record_type}
  */
  readonly autoCreateDnsRecordType?: string;
  /**
  * The path to a file containing AWS account IDs or GCP Project IDs. when multiple_accounts_sync_policy is set to UPLOAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#cdiscovery_file DataNiosDiscoveryVdiscoveryTask#cdiscovery_file}
  */
  readonly cdiscoveryFile?: string;
  /**
  * Comment on the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#comment DataNiosDiscoveryVdiscoveryTask#comment}
  */
  readonly comment?: string;
  /**
  * Credentials type used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#credentials_type DataNiosDiscoveryVdiscoveryTask#credentials_type}
  */
  readonly credentialsType?: string;
  /**
  * The DNS view name for private IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#dns_view_private_ip DataNiosDiscoveryVdiscoveryTask#dns_view_private_ip}
  */
  readonly dnsViewPrivateIp?: string;
  /**
  * The DNS view name for public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#dns_view_public_ip DataNiosDiscoveryVdiscoveryTask#dns_view_public_ip}
  */
  readonly dnsViewPublicIp?: string;
  /**
  * The name of the domain to use with keystone v3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#domain_name DataNiosDiscoveryVdiscoveryTask#domain_name}
  */
  readonly domainName?: string;
  /**
  * Type of discovery driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#driver_type DataNiosDiscoveryVdiscoveryTask#driver_type}
  */
  readonly driverType: string;
  /**
  * Enable filter for cloud discovery task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#enable_filter DataNiosDiscoveryVdiscoveryTask#enable_filter}
  */
  readonly enableFilter?: boolean | cdktf.IResolvable;
  /**
  * Whether to enabled the cloud discovery or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#enabled DataNiosDiscoveryVdiscoveryTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * FQDN or IP of the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#fqdn_or_ip DataNiosDiscoveryVdiscoveryTask#fqdn_or_ip}
  */
  readonly fqdnOrIp?: string;
  /**
  * Indicates if gov cloud is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#govcloud_enabled DataNiosDiscoveryVdiscoveryTask#govcloud_enabled}
  */
  readonly govcloudEnabled?: boolean | cdktf.IResolvable;
  /**
  * Identity service version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#identity_version DataNiosDiscoveryVdiscoveryTask#identity_version}
  */
  readonly identityVersion?: string;
  /**
  * Member on which cloud discovery will be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#member DataNiosDiscoveryVdiscoveryTask#member}
  */
  readonly member: string;
  /**
  * Whether to replace the old data with new or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#merge_data DataNiosDiscoveryVdiscoveryTask#merge_data}
  */
  readonly mergeData: boolean | cdktf.IResolvable;
  /**
  * Discover all child accounts or Upload child account ids to discover..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#multiple_accounts_sync_policy DataNiosDiscoveryVdiscoveryTask#multiple_accounts_sync_policy}
  */
  readonly multipleAccountsSyncPolicy?: string;
  /**
  * Name of this cloud discovery task. Uniquely identify a task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#name DataNiosDiscoveryVdiscoveryTask#name}
  */
  readonly name: string;
  /**
  * Options to filter the networks in cdiscovery task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#network_filter DataNiosDiscoveryVdiscoveryTask#network_filter}
  */
  readonly networkFilter?: string;
  /**
  * List of networks to filter in cdiscovery task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#network_list DataNiosDiscoveryVdiscoveryTask#network_list}
  */
  readonly networkList?: string[];
  /**
  * Password used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#password DataNiosDiscoveryVdiscoveryTask#password}
  */
  readonly password?: string;
  /**
  * Connection port used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#port DataNiosDiscoveryVdiscoveryTask#port}
  */
  readonly port?: number;
  /**
  * Network view for private IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#private_network_view DataNiosDiscoveryVdiscoveryTask#private_network_view}
  */
  readonly privateNetworkView?: string;
  /**
  * Mapping policy for the network view for private IPs in discovery data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#private_network_view_mapping_policy DataNiosDiscoveryVdiscoveryTask#private_network_view_mapping_policy}
  */
  readonly privateNetworkViewMappingPolicy: string;
  /**
  * Connection protocol used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#protocol DataNiosDiscoveryVdiscoveryTask#protocol}
  */
  readonly protocol?: string;
  /**
  * Network view for public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#public_network_view DataNiosDiscoveryVdiscoveryTask#public_network_view}
  */
  readonly publicNetworkView?: string;
  /**
  * Mapping policy for the network view for public IPs in discovery data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#public_network_view_mapping_policy DataNiosDiscoveryVdiscoveryTask#public_network_view_mapping_policy}
  */
  readonly publicNetworkViewMappingPolicy: string;
  /**
  * Role ARN for syncing child accounts; maximum 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#role_arn DataNiosDiscoveryVdiscoveryTask#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Schedule setting for cloud discovery task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#scheduled_run DataNiosDiscoveryVdiscoveryTask#scheduled_run}
  */
  readonly scheduledRun?: DataNiosDiscoveryVdiscoveryTaskResultScheduledRun;
  /**
  * String containing selected regions for discovery in comma separated format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#selected_regions DataNiosDiscoveryVdiscoveryTask#selected_regions}
  */
  readonly selectedRegions?: string;
  /**
  * The service_account_file for GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#service_account_file DataNiosDiscoveryVdiscoveryTask#service_account_file}
  */
  readonly serviceAccountFile?: string;
  /**
  * Service account file's token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#service_account_file_token DataNiosDiscoveryVdiscoveryTask#service_account_file_token}
  */
  readonly serviceAccountFileToken?: string;
  /**
  * Synchronizing child accounts is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#sync_child_accounts DataNiosDiscoveryVdiscoveryTask#sync_child_accounts}
  */
  readonly syncChildAccounts?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the appliance uses a specific DNS view for private IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#update_dns_view_private_ip DataNiosDiscoveryVdiscoveryTask#update_dns_view_private_ip}
  */
  readonly updateDnsViewPrivateIp?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the appliance uses a specific DNS view for public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#update_dns_view_public_ip DataNiosDiscoveryVdiscoveryTask#update_dns_view_public_ip}
  */
  readonly updateDnsViewPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Whether to update metadata as a result of this network discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#update_metadata DataNiosDiscoveryVdiscoveryTask#update_metadata}
  */
  readonly updateMetadata: boolean | cdktf.IResolvable;
  /**
  * If set true, all keystone connection will use "/identity" endpoint and port value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#use_identity DataNiosDiscoveryVdiscoveryTask#use_identity}
  */
  readonly useIdentity?: boolean | cdktf.IResolvable;
  /**
  * Username used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#username DataNiosDiscoveryVdiscoveryTask#username}
  */
  readonly username?: string;
}

export function dataNiosDiscoveryVdiscoveryTaskResultToTerraform(struct?: DataNiosDiscoveryVdiscoveryTaskResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unsecured_connection: cdktf.booleanToTerraform(struct!.allowUnsecuredConnection),
    auto_consolidate_cloud_ea: cdktf.booleanToTerraform(struct!.autoConsolidateCloudEa),
    auto_consolidate_managed_tenant: cdktf.booleanToTerraform(struct!.autoConsolidateManagedTenant),
    auto_consolidate_managed_vm: cdktf.booleanToTerraform(struct!.autoConsolidateManagedVm),
    auto_create_dns_hostname_template: cdktf.stringToTerraform(struct!.autoCreateDnsHostnameTemplate),
    auto_create_dns_record: cdktf.booleanToTerraform(struct!.autoCreateDnsRecord),
    auto_create_dns_record_type: cdktf.stringToTerraform(struct!.autoCreateDnsRecordType),
    cdiscovery_file: cdktf.stringToTerraform(struct!.cdiscoveryFile),
    comment: cdktf.stringToTerraform(struct!.comment),
    credentials_type: cdktf.stringToTerraform(struct!.credentialsType),
    dns_view_private_ip: cdktf.stringToTerraform(struct!.dnsViewPrivateIp),
    dns_view_public_ip: cdktf.stringToTerraform(struct!.dnsViewPublicIp),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    driver_type: cdktf.stringToTerraform(struct!.driverType),
    enable_filter: cdktf.booleanToTerraform(struct!.enableFilter),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    fqdn_or_ip: cdktf.stringToTerraform(struct!.fqdnOrIp),
    govcloud_enabled: cdktf.booleanToTerraform(struct!.govcloudEnabled),
    identity_version: cdktf.stringToTerraform(struct!.identityVersion),
    member: cdktf.stringToTerraform(struct!.member),
    merge_data: cdktf.booleanToTerraform(struct!.mergeData),
    multiple_accounts_sync_policy: cdktf.stringToTerraform(struct!.multipleAccountsSyncPolicy),
    name: cdktf.stringToTerraform(struct!.name),
    network_filter: cdktf.stringToTerraform(struct!.networkFilter),
    network_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkList),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    private_network_view: cdktf.stringToTerraform(struct!.privateNetworkView),
    private_network_view_mapping_policy: cdktf.stringToTerraform(struct!.privateNetworkViewMappingPolicy),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    public_network_view: cdktf.stringToTerraform(struct!.publicNetworkView),
    public_network_view_mapping_policy: cdktf.stringToTerraform(struct!.publicNetworkViewMappingPolicy),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    scheduled_run: dataNiosDiscoveryVdiscoveryTaskResultScheduledRunToTerraform(struct!.scheduledRun),
    selected_regions: cdktf.stringToTerraform(struct!.selectedRegions),
    service_account_file: cdktf.stringToTerraform(struct!.serviceAccountFile),
    service_account_file_token: cdktf.stringToTerraform(struct!.serviceAccountFileToken),
    sync_child_accounts: cdktf.booleanToTerraform(struct!.syncChildAccounts),
    update_dns_view_private_ip: cdktf.booleanToTerraform(struct!.updateDnsViewPrivateIp),
    update_dns_view_public_ip: cdktf.booleanToTerraform(struct!.updateDnsViewPublicIp),
    update_metadata: cdktf.booleanToTerraform(struct!.updateMetadata),
    use_identity: cdktf.booleanToTerraform(struct!.useIdentity),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataNiosDiscoveryVdiscoveryTaskResultToHclTerraform(struct?: DataNiosDiscoveryVdiscoveryTaskResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unsecured_connection: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnsecuredConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_consolidate_cloud_ea: {
      value: cdktf.booleanToHclTerraform(struct!.autoConsolidateCloudEa),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_consolidate_managed_tenant: {
      value: cdktf.booleanToHclTerraform(struct!.autoConsolidateManagedTenant),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_consolidate_managed_vm: {
      value: cdktf.booleanToHclTerraform(struct!.autoConsolidateManagedVm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_create_dns_hostname_template: {
      value: cdktf.stringToHclTerraform(struct!.autoCreateDnsHostnameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_create_dns_record: {
      value: cdktf.booleanToHclTerraform(struct!.autoCreateDnsRecord),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auto_create_dns_record_type: {
      value: cdktf.stringToHclTerraform(struct!.autoCreateDnsRecordType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cdiscovery_file: {
      value: cdktf.stringToHclTerraform(struct!.cdiscoveryFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_type: {
      value: cdktf.stringToHclTerraform(struct!.credentialsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_view_private_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsViewPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_view_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.dnsViewPublicIp),
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
    driver_type: {
      value: cdktf.stringToHclTerraform(struct!.driverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_filter: {
      value: cdktf.booleanToHclTerraform(struct!.enableFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fqdn_or_ip: {
      value: cdktf.stringToHclTerraform(struct!.fqdnOrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    govcloud_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.govcloudEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identity_version: {
      value: cdktf.stringToHclTerraform(struct!.identityVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member: {
      value: cdktf.stringToHclTerraform(struct!.member),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_data: {
      value: cdktf.booleanToHclTerraform(struct!.mergeData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multiple_accounts_sync_policy: {
      value: cdktf.stringToHclTerraform(struct!.multipleAccountsSyncPolicy),
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
    network_filter: {
      value: cdktf.stringToHclTerraform(struct!.networkFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    private_network_view: {
      value: cdktf.stringToHclTerraform(struct!.privateNetworkView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_network_view_mapping_policy: {
      value: cdktf.stringToHclTerraform(struct!.privateNetworkViewMappingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_network_view: {
      value: cdktf.stringToHclTerraform(struct!.publicNetworkView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_network_view_mapping_policy: {
      value: cdktf.stringToHclTerraform(struct!.publicNetworkViewMappingPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_run: {
      value: dataNiosDiscoveryVdiscoveryTaskResultScheduledRunToHclTerraform(struct!.scheduledRun),
      isBlock: true,
      type: "struct",
      storageClassType: "DataNiosDiscoveryVdiscoveryTaskResultScheduledRun",
    },
    selected_regions: {
      value: cdktf.stringToHclTerraform(struct!.selectedRegions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_file: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_file_token: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountFileToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_child_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.syncChildAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_dns_view_private_ip: {
      value: cdktf.booleanToHclTerraform(struct!.updateDnsViewPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_dns_view_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.updateDnsViewPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    update_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.updateMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_identity: {
      value: cdktf.booleanToHclTerraform(struct!.useIdentity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataNiosDiscoveryVdiscoveryTaskResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNiosDiscoveryVdiscoveryTaskResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnsecuredConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnsecuredConnection = this._allowUnsecuredConnection;
    }
    if (this._autoConsolidateCloudEa !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConsolidateCloudEa = this._autoConsolidateCloudEa;
    }
    if (this._autoConsolidateManagedTenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConsolidateManagedTenant = this._autoConsolidateManagedTenant;
    }
    if (this._autoConsolidateManagedVm !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoConsolidateManagedVm = this._autoConsolidateManagedVm;
    }
    if (this._autoCreateDnsHostnameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateDnsHostnameTemplate = this._autoCreateDnsHostnameTemplate;
    }
    if (this._autoCreateDnsRecord !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateDnsRecord = this._autoCreateDnsRecord;
    }
    if (this._autoCreateDnsRecordType !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoCreateDnsRecordType = this._autoCreateDnsRecordType;
    }
    if (this._cdiscoveryFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.cdiscoveryFile = this._cdiscoveryFile;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._credentialsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsType = this._credentialsType;
    }
    if (this._dnsViewPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsViewPrivateIp = this._dnsViewPrivateIp;
    }
    if (this._dnsViewPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsViewPublicIp = this._dnsViewPublicIp;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._driverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.driverType = this._driverType;
    }
    if (this._enableFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableFilter = this._enableFilter;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fqdnOrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnOrIp = this._fqdnOrIp;
    }
    if (this._govcloudEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.govcloudEnabled = this._govcloudEnabled;
    }
    if (this._identityVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityVersion = this._identityVersion;
    }
    if (this._member !== undefined) {
      hasAnyValues = true;
      internalValueResult.member = this._member;
    }
    if (this._mergeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeData = this._mergeData;
    }
    if (this._multipleAccountsSyncPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleAccountsSyncPolicy = this._multipleAccountsSyncPolicy;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkFilter = this._networkFilter;
    }
    if (this._networkList !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkList = this._networkList;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._privateNetworkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkView = this._privateNetworkView;
    }
    if (this._privateNetworkViewMappingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworkViewMappingPolicy = this._privateNetworkViewMappingPolicy;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._publicNetworkView !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkView = this._publicNetworkView;
    }
    if (this._publicNetworkViewMappingPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicNetworkViewMappingPolicy = this._publicNetworkViewMappingPolicy;
    }
    if (this._roleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleArn = this._roleArn;
    }
    if (this._scheduledRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledRun = this._scheduledRun?.internalValue;
    }
    if (this._selectedRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectedRegions = this._selectedRegions;
    }
    if (this._serviceAccountFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountFile = this._serviceAccountFile;
    }
    if (this._serviceAccountFileToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountFileToken = this._serviceAccountFileToken;
    }
    if (this._syncChildAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncChildAccounts = this._syncChildAccounts;
    }
    if (this._updateDnsViewPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDnsViewPrivateIp = this._updateDnsViewPrivateIp;
    }
    if (this._updateDnsViewPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDnsViewPublicIp = this._updateDnsViewPublicIp;
    }
    if (this._updateMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateMetadata = this._updateMetadata;
    }
    if (this._useIdentity !== undefined) {
      hasAnyValues = true;
      internalValueResult.useIdentity = this._useIdentity;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNiosDiscoveryVdiscoveryTaskResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowUnsecuredConnection = undefined;
      this._autoConsolidateCloudEa = undefined;
      this._autoConsolidateManagedTenant = undefined;
      this._autoConsolidateManagedVm = undefined;
      this._autoCreateDnsHostnameTemplate = undefined;
      this._autoCreateDnsRecord = undefined;
      this._autoCreateDnsRecordType = undefined;
      this._cdiscoveryFile = undefined;
      this._comment = undefined;
      this._credentialsType = undefined;
      this._dnsViewPrivateIp = undefined;
      this._dnsViewPublicIp = undefined;
      this._domainName = undefined;
      this._driverType = undefined;
      this._enableFilter = undefined;
      this._enabled = undefined;
      this._fqdnOrIp = undefined;
      this._govcloudEnabled = undefined;
      this._identityVersion = undefined;
      this._member = undefined;
      this._mergeData = undefined;
      this._multipleAccountsSyncPolicy = undefined;
      this._name = undefined;
      this._networkFilter = undefined;
      this._networkList = undefined;
      this._password = undefined;
      this._port = undefined;
      this._privateNetworkView = undefined;
      this._privateNetworkViewMappingPolicy = undefined;
      this._protocol = undefined;
      this._publicNetworkView = undefined;
      this._publicNetworkViewMappingPolicy = undefined;
      this._roleArn = undefined;
      this._scheduledRun.internalValue = undefined;
      this._selectedRegions = undefined;
      this._serviceAccountFile = undefined;
      this._serviceAccountFileToken = undefined;
      this._syncChildAccounts = undefined;
      this._updateDnsViewPrivateIp = undefined;
      this._updateDnsViewPublicIp = undefined;
      this._updateMetadata = undefined;
      this._useIdentity = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowUnsecuredConnection = value.allowUnsecuredConnection;
      this._autoConsolidateCloudEa = value.autoConsolidateCloudEa;
      this._autoConsolidateManagedTenant = value.autoConsolidateManagedTenant;
      this._autoConsolidateManagedVm = value.autoConsolidateManagedVm;
      this._autoCreateDnsHostnameTemplate = value.autoCreateDnsHostnameTemplate;
      this._autoCreateDnsRecord = value.autoCreateDnsRecord;
      this._autoCreateDnsRecordType = value.autoCreateDnsRecordType;
      this._cdiscoveryFile = value.cdiscoveryFile;
      this._comment = value.comment;
      this._credentialsType = value.credentialsType;
      this._dnsViewPrivateIp = value.dnsViewPrivateIp;
      this._dnsViewPublicIp = value.dnsViewPublicIp;
      this._domainName = value.domainName;
      this._driverType = value.driverType;
      this._enableFilter = value.enableFilter;
      this._enabled = value.enabled;
      this._fqdnOrIp = value.fqdnOrIp;
      this._govcloudEnabled = value.govcloudEnabled;
      this._identityVersion = value.identityVersion;
      this._member = value.member;
      this._mergeData = value.mergeData;
      this._multipleAccountsSyncPolicy = value.multipleAccountsSyncPolicy;
      this._name = value.name;
      this._networkFilter = value.networkFilter;
      this._networkList = value.networkList;
      this._password = value.password;
      this._port = value.port;
      this._privateNetworkView = value.privateNetworkView;
      this._privateNetworkViewMappingPolicy = value.privateNetworkViewMappingPolicy;
      this._protocol = value.protocol;
      this._publicNetworkView = value.publicNetworkView;
      this._publicNetworkViewMappingPolicy = value.publicNetworkViewMappingPolicy;
      this._roleArn = value.roleArn;
      this._scheduledRun.internalValue = value.scheduledRun;
      this._selectedRegions = value.selectedRegions;
      this._serviceAccountFile = value.serviceAccountFile;
      this._serviceAccountFileToken = value.serviceAccountFileToken;
      this._syncChildAccounts = value.syncChildAccounts;
      this._updateDnsViewPrivateIp = value.updateDnsViewPrivateIp;
      this._updateDnsViewPublicIp = value.updateDnsViewPublicIp;
      this._updateMetadata = value.updateMetadata;
      this._useIdentity = value.useIdentity;
      this._username = value.username;
    }
  }

  // accounts_list - computed: true, optional: false, required: false
  public get accountsList() {
    return this.getListAttribute('accounts_list');
  }

  // allow_unsecured_connection - computed: true, optional: true, required: false
  private _allowUnsecuredConnection?: boolean | cdktf.IResolvable; 
  public get allowUnsecuredConnection() {
    return this.getBooleanAttribute('allow_unsecured_connection');
  }
  public set allowUnsecuredConnection(value: boolean | cdktf.IResolvable) {
    this._allowUnsecuredConnection = value;
  }
  public resetAllowUnsecuredConnection() {
    this._allowUnsecuredConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnsecuredConnectionInput() {
    return this._allowUnsecuredConnection;
  }

  // auto_consolidate_cloud_ea - computed: true, optional: false, required: true
  private _autoConsolidateCloudEa?: boolean | cdktf.IResolvable; 
  public get autoConsolidateCloudEa() {
    return this.getBooleanAttribute('auto_consolidate_cloud_ea');
  }
  public set autoConsolidateCloudEa(value: boolean | cdktf.IResolvable) {
    this._autoConsolidateCloudEa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConsolidateCloudEaInput() {
    return this._autoConsolidateCloudEa;
  }

  // auto_consolidate_managed_tenant - computed: true, optional: false, required: true
  private _autoConsolidateManagedTenant?: boolean | cdktf.IResolvable; 
  public get autoConsolidateManagedTenant() {
    return this.getBooleanAttribute('auto_consolidate_managed_tenant');
  }
  public set autoConsolidateManagedTenant(value: boolean | cdktf.IResolvable) {
    this._autoConsolidateManagedTenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConsolidateManagedTenantInput() {
    return this._autoConsolidateManagedTenant;
  }

  // auto_consolidate_managed_vm - computed: true, optional: false, required: true
  private _autoConsolidateManagedVm?: boolean | cdktf.IResolvable; 
  public get autoConsolidateManagedVm() {
    return this.getBooleanAttribute('auto_consolidate_managed_vm');
  }
  public set autoConsolidateManagedVm(value: boolean | cdktf.IResolvable) {
    this._autoConsolidateManagedVm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoConsolidateManagedVmInput() {
    return this._autoConsolidateManagedVm;
  }

  // auto_create_dns_hostname_template - computed: true, optional: true, required: false
  private _autoCreateDnsHostnameTemplate?: string; 
  public get autoCreateDnsHostnameTemplate() {
    return this.getStringAttribute('auto_create_dns_hostname_template');
  }
  public set autoCreateDnsHostnameTemplate(value: string) {
    this._autoCreateDnsHostnameTemplate = value;
  }
  public resetAutoCreateDnsHostnameTemplate() {
    this._autoCreateDnsHostnameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDnsHostnameTemplateInput() {
    return this._autoCreateDnsHostnameTemplate;
  }

  // auto_create_dns_record - computed: true, optional: true, required: false
  private _autoCreateDnsRecord?: boolean | cdktf.IResolvable; 
  public get autoCreateDnsRecord() {
    return this.getBooleanAttribute('auto_create_dns_record');
  }
  public set autoCreateDnsRecord(value: boolean | cdktf.IResolvable) {
    this._autoCreateDnsRecord = value;
  }
  public resetAutoCreateDnsRecord() {
    this._autoCreateDnsRecord = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDnsRecordInput() {
    return this._autoCreateDnsRecord;
  }

  // auto_create_dns_record_type - computed: true, optional: true, required: false
  private _autoCreateDnsRecordType?: string; 
  public get autoCreateDnsRecordType() {
    return this.getStringAttribute('auto_create_dns_record_type');
  }
  public set autoCreateDnsRecordType(value: string) {
    this._autoCreateDnsRecordType = value;
  }
  public resetAutoCreateDnsRecordType() {
    this._autoCreateDnsRecordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoCreateDnsRecordTypeInput() {
    return this._autoCreateDnsRecordType;
  }

  // cdiscovery_file - computed: true, optional: true, required: false
  private _cdiscoveryFile?: string; 
  public get cdiscoveryFile() {
    return this.getStringAttribute('cdiscovery_file');
  }
  public set cdiscoveryFile(value: string) {
    this._cdiscoveryFile = value;
  }
  public resetCdiscoveryFile() {
    this._cdiscoveryFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cdiscoveryFileInput() {
    return this._cdiscoveryFile;
  }

  // cdiscovery_file_token - computed: true, optional: false, required: false
  public get cdiscoveryFileToken() {
    return this.getStringAttribute('cdiscovery_file_token');
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

  // credentials_type - computed: true, optional: true, required: false
  private _credentialsType?: string; 
  public get credentialsType() {
    return this.getStringAttribute('credentials_type');
  }
  public set credentialsType(value: string) {
    this._credentialsType = value;
  }
  public resetCredentialsType() {
    this._credentialsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsTypeInput() {
    return this._credentialsType;
  }

  // dns_view_private_ip - computed: true, optional: true, required: false
  private _dnsViewPrivateIp?: string; 
  public get dnsViewPrivateIp() {
    return this.getStringAttribute('dns_view_private_ip');
  }
  public set dnsViewPrivateIp(value: string) {
    this._dnsViewPrivateIp = value;
  }
  public resetDnsViewPrivateIp() {
    this._dnsViewPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewPrivateIpInput() {
    return this._dnsViewPrivateIp;
  }

  // dns_view_public_ip - computed: true, optional: true, required: false
  private _dnsViewPublicIp?: string; 
  public get dnsViewPublicIp() {
    return this.getStringAttribute('dns_view_public_ip');
  }
  public set dnsViewPublicIp(value: string) {
    this._dnsViewPublicIp = value;
  }
  public resetDnsViewPublicIp() {
    this._dnsViewPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsViewPublicIpInput() {
    return this._dnsViewPublicIp;
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

  // driver_type - computed: true, optional: false, required: true
  private _driverType?: string; 
  public get driverType() {
    return this.getStringAttribute('driver_type');
  }
  public set driverType(value: string) {
    this._driverType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverTypeInput() {
    return this._driverType;
  }

  // enable_filter - computed: true, optional: true, required: false
  private _enableFilter?: boolean | cdktf.IResolvable; 
  public get enableFilter() {
    return this.getBooleanAttribute('enable_filter');
  }
  public set enableFilter(value: boolean | cdktf.IResolvable) {
    this._enableFilter = value;
  }
  public resetEnableFilter() {
    this._enableFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableFilterInput() {
    return this._enableFilter;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // fqdn_or_ip - computed: true, optional: true, required: false
  private _fqdnOrIp?: string; 
  public get fqdnOrIp() {
    return this.getStringAttribute('fqdn_or_ip');
  }
  public set fqdnOrIp(value: string) {
    this._fqdnOrIp = value;
  }
  public resetFqdnOrIp() {
    this._fqdnOrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnOrIpInput() {
    return this._fqdnOrIp;
  }

  // govcloud_enabled - computed: true, optional: true, required: false
  private _govcloudEnabled?: boolean | cdktf.IResolvable; 
  public get govcloudEnabled() {
    return this.getBooleanAttribute('govcloud_enabled');
  }
  public set govcloudEnabled(value: boolean | cdktf.IResolvable) {
    this._govcloudEnabled = value;
  }
  public resetGovcloudEnabled() {
    this._govcloudEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get govcloudEnabledInput() {
    return this._govcloudEnabled;
  }

  // identity_version - computed: true, optional: true, required: false
  private _identityVersion?: string; 
  public get identityVersion() {
    return this.getStringAttribute('identity_version');
  }
  public set identityVersion(value: string) {
    this._identityVersion = value;
  }
  public resetIdentityVersion() {
    this._identityVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityVersionInput() {
    return this._identityVersion;
  }

  // last_run - computed: true, optional: false, required: false
  public get lastRun() {
    return this.getNumberAttribute('last_run');
  }

  // member - computed: true, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // merge_data - computed: true, optional: false, required: true
  private _mergeData?: boolean | cdktf.IResolvable; 
  public get mergeData() {
    return this.getBooleanAttribute('merge_data');
  }
  public set mergeData(value: boolean | cdktf.IResolvable) {
    this._mergeData = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeDataInput() {
    return this._mergeData;
  }

  // multiple_accounts_sync_policy - computed: true, optional: true, required: false
  private _multipleAccountsSyncPolicy?: string; 
  public get multipleAccountsSyncPolicy() {
    return this.getStringAttribute('multiple_accounts_sync_policy');
  }
  public set multipleAccountsSyncPolicy(value: string) {
    this._multipleAccountsSyncPolicy = value;
  }
  public resetMultipleAccountsSyncPolicy() {
    this._multipleAccountsSyncPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleAccountsSyncPolicyInput() {
    return this._multipleAccountsSyncPolicy;
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

  // network_filter - computed: true, optional: true, required: false
  private _networkFilter?: string; 
  public get networkFilter() {
    return this.getStringAttribute('network_filter');
  }
  public set networkFilter(value: string) {
    this._networkFilter = value;
  }
  public resetNetworkFilter() {
    this._networkFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkFilterInput() {
    return this._networkFilter;
  }

  // network_list - computed: true, optional: true, required: false
  private _networkList?: string[]; 
  public get networkList() {
    return this.getListAttribute('network_list');
  }
  public set networkList(value: string[]) {
    this._networkList = value;
  }
  public resetNetworkList() {
    this._networkList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkListInput() {
    return this._networkList;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // private_network_view - computed: true, optional: true, required: false
  private _privateNetworkView?: string; 
  public get privateNetworkView() {
    return this.getStringAttribute('private_network_view');
  }
  public set privateNetworkView(value: string) {
    this._privateNetworkView = value;
  }
  public resetPrivateNetworkView() {
    this._privateNetworkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkViewInput() {
    return this._privateNetworkView;
  }

  // private_network_view_mapping_policy - computed: true, optional: false, required: true
  private _privateNetworkViewMappingPolicy?: string; 
  public get privateNetworkViewMappingPolicy() {
    return this.getStringAttribute('private_network_view_mapping_policy');
  }
  public set privateNetworkViewMappingPolicy(value: string) {
    this._privateNetworkViewMappingPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkViewMappingPolicyInput() {
    return this._privateNetworkViewMappingPolicy;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_network_view - computed: true, optional: true, required: false
  private _publicNetworkView?: string; 
  public get publicNetworkView() {
    return this.getStringAttribute('public_network_view');
  }
  public set publicNetworkView(value: string) {
    this._publicNetworkView = value;
  }
  public resetPublicNetworkView() {
    this._publicNetworkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkViewInput() {
    return this._publicNetworkView;
  }

  // public_network_view_mapping_policy - computed: true, optional: false, required: true
  private _publicNetworkViewMappingPolicy?: string; 
  public get publicNetworkViewMappingPolicy() {
    return this.getStringAttribute('public_network_view_mapping_policy');
  }
  public set publicNetworkViewMappingPolicy(value: string) {
    this._publicNetworkViewMappingPolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicNetworkViewMappingPolicyInput() {
    return this._publicNetworkViewMappingPolicy;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // role_arn - computed: true, optional: true, required: false
  private _roleArn?: string; 
  public get roleArn() {
    return this.getStringAttribute('role_arn');
  }
  public set roleArn(value: string) {
    this._roleArn = value;
  }
  public resetRoleArn() {
    this._roleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleArnInput() {
    return this._roleArn;
  }

  // scheduled_run - computed: true, optional: true, required: false
  private _scheduledRun = new DataNiosDiscoveryVdiscoveryTaskResultScheduledRunOutputReference(this, "scheduled_run");
  public get scheduledRun() {
    return this._scheduledRun;
  }
  public putScheduledRun(value: DataNiosDiscoveryVdiscoveryTaskResultScheduledRun) {
    this._scheduledRun.internalValue = value;
  }
  public resetScheduledRun() {
    this._scheduledRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledRunInput() {
    return this._scheduledRun.internalValue;
  }

  // selected_regions - computed: true, optional: true, required: false
  private _selectedRegions?: string; 
  public get selectedRegions() {
    return this.getStringAttribute('selected_regions');
  }
  public set selectedRegions(value: string) {
    this._selectedRegions = value;
  }
  public resetSelectedRegions() {
    this._selectedRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectedRegionsInput() {
    return this._selectedRegions;
  }

  // service_account_file - computed: true, optional: true, required: false
  private _serviceAccountFile?: string; 
  public get serviceAccountFile() {
    return this.getStringAttribute('service_account_file');
  }
  public set serviceAccountFile(value: string) {
    this._serviceAccountFile = value;
  }
  public resetServiceAccountFile() {
    this._serviceAccountFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountFileInput() {
    return this._serviceAccountFile;
  }

  // service_account_file_token - computed: true, optional: true, required: false
  private _serviceAccountFileToken?: string; 
  public get serviceAccountFileToken() {
    return this.getStringAttribute('service_account_file_token');
  }
  public set serviceAccountFileToken(value: string) {
    this._serviceAccountFileToken = value;
  }
  public resetServiceAccountFileToken() {
    this._serviceAccountFileToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountFileTokenInput() {
    return this._serviceAccountFileToken;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_msg - computed: true, optional: false, required: false
  public get stateMsg() {
    return this.getStringAttribute('state_msg');
  }

  // sync_child_accounts - computed: true, optional: true, required: false
  private _syncChildAccounts?: boolean | cdktf.IResolvable; 
  public get syncChildAccounts() {
    return this.getBooleanAttribute('sync_child_accounts');
  }
  public set syncChildAccounts(value: boolean | cdktf.IResolvable) {
    this._syncChildAccounts = value;
  }
  public resetSyncChildAccounts() {
    this._syncChildAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncChildAccountsInput() {
    return this._syncChildAccounts;
  }

  // update_dns_view_private_ip - computed: true, optional: true, required: false
  private _updateDnsViewPrivateIp?: boolean | cdktf.IResolvable; 
  public get updateDnsViewPrivateIp() {
    return this.getBooleanAttribute('update_dns_view_private_ip');
  }
  public set updateDnsViewPrivateIp(value: boolean | cdktf.IResolvable) {
    this._updateDnsViewPrivateIp = value;
  }
  public resetUpdateDnsViewPrivateIp() {
    this._updateDnsViewPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsViewPrivateIpInput() {
    return this._updateDnsViewPrivateIp;
  }

  // update_dns_view_public_ip - computed: true, optional: true, required: false
  private _updateDnsViewPublicIp?: boolean | cdktf.IResolvable; 
  public get updateDnsViewPublicIp() {
    return this.getBooleanAttribute('update_dns_view_public_ip');
  }
  public set updateDnsViewPublicIp(value: boolean | cdktf.IResolvable) {
    this._updateDnsViewPublicIp = value;
  }
  public resetUpdateDnsViewPublicIp() {
    this._updateDnsViewPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDnsViewPublicIpInput() {
    return this._updateDnsViewPublicIp;
  }

  // update_metadata - computed: true, optional: false, required: true
  private _updateMetadata?: boolean | cdktf.IResolvable; 
  public get updateMetadata() {
    return this.getBooleanAttribute('update_metadata');
  }
  public set updateMetadata(value: boolean | cdktf.IResolvable) {
    this._updateMetadata = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMetadataInput() {
    return this._updateMetadata;
  }

  // use_identity - computed: true, optional: true, required: false
  private _useIdentity?: boolean | cdktf.IResolvable; 
  public get useIdentity() {
    return this.getBooleanAttribute('use_identity');
  }
  public set useIdentity(value: boolean | cdktf.IResolvable) {
    this._useIdentity = value;
  }
  public resetUseIdentity() {
    this._useIdentity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useIdentityInput() {
    return this._useIdentity;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class DataNiosDiscoveryVdiscoveryTaskResultList extends cdktf.ComplexList {
  public internalValue? : DataNiosDiscoveryVdiscoveryTaskResult[] | cdktf.IResolvable

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
  public get(index: number): DataNiosDiscoveryVdiscoveryTaskResultOutputReference {
    return new DataNiosDiscoveryVdiscoveryTaskResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task nios_discovery_vdiscovery_task}
*/
export class DataNiosDiscoveryVdiscoveryTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_discovery_vdiscovery_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNiosDiscoveryVdiscoveryTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNiosDiscoveryVdiscoveryTask to import
  * @param importFromId The id of the existing DataNiosDiscoveryVdiscoveryTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNiosDiscoveryVdiscoveryTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_discovery_vdiscovery_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/data-sources/discovery_vdiscovery_task nios_discovery_vdiscovery_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNiosDiscoveryVdiscoveryTaskConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNiosDiscoveryVdiscoveryTaskConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'nios_discovery_vdiscovery_task',
      terraformGeneratorMetadata: {
        providerName: 'nios',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._maxResults = config.maxResults;
    this._paging = config.paging;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _result = new DataNiosDiscoveryVdiscoveryTaskResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      max_results: cdktf.numberToTerraform(this._maxResults),
      paging: cdktf.numberToTerraform(this._paging),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
