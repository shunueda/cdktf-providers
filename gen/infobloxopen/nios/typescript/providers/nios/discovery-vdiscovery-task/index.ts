// https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiscoveryVdiscoveryTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow unsecured connection over HTTPS and bypass validation of the remote SSL certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#allow_unsecured_connection DiscoveryVdiscoveryTask#allow_unsecured_connection}
  */
  readonly allowUnsecuredConnection?: boolean | cdktf.IResolvable;
  /**
  * Whether to insert or update cloud EAs with discovery data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#auto_consolidate_cloud_ea DiscoveryVdiscoveryTask#auto_consolidate_cloud_ea}
  */
  readonly autoConsolidateCloudEa: boolean | cdktf.IResolvable;
  /**
  * Whether to replace managed tenant with discovery tenant data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#auto_consolidate_managed_tenant DiscoveryVdiscoveryTask#auto_consolidate_managed_tenant}
  */
  readonly autoConsolidateManagedTenant: boolean | cdktf.IResolvable;
  /**
  * Whether to replace managed virtual machine with discovery vm data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#auto_consolidate_managed_vm DiscoveryVdiscoveryTask#auto_consolidate_managed_vm}
  */
  readonly autoConsolidateManagedVm: boolean | cdktf.IResolvable;
  /**
  * Template string used to generate host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#auto_create_dns_hostname_template DiscoveryVdiscoveryTask#auto_create_dns_hostname_template}
  */
  readonly autoCreateDnsHostnameTemplate?: string;
  /**
  * Control whether to create or update DNS record using discovered data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#auto_create_dns_record DiscoveryVdiscoveryTask#auto_create_dns_record}
  */
  readonly autoCreateDnsRecord?: boolean | cdktf.IResolvable;
  /**
  * Indicates the type of record to create if the auto create DNS record is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#auto_create_dns_record_type DiscoveryVdiscoveryTask#auto_create_dns_record_type}
  */
  readonly autoCreateDnsRecordType?: string;
  /**
  * The path to a file containing AWS account IDs or GCP Project IDs. when multiple_accounts_sync_policy is set to UPLOAD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#cdiscovery_file DiscoveryVdiscoveryTask#cdiscovery_file}
  */
  readonly cdiscoveryFile?: string;
  /**
  * Comment on the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#comment DiscoveryVdiscoveryTask#comment}
  */
  readonly comment?: string;
  /**
  * Credentials type used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#credentials_type DiscoveryVdiscoveryTask#credentials_type}
  */
  readonly credentialsType?: string;
  /**
  * The DNS view name for private IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#dns_view_private_ip DiscoveryVdiscoveryTask#dns_view_private_ip}
  */
  readonly dnsViewPrivateIp?: string;
  /**
  * The DNS view name for public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#dns_view_public_ip DiscoveryVdiscoveryTask#dns_view_public_ip}
  */
  readonly dnsViewPublicIp?: string;
  /**
  * The name of the domain to use with keystone v3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#domain_name DiscoveryVdiscoveryTask#domain_name}
  */
  readonly domainName?: string;
  /**
  * Type of discovery driver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#driver_type DiscoveryVdiscoveryTask#driver_type}
  */
  readonly driverType: string;
  /**
  * Enable filter for cloud discovery task
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#enable_filter DiscoveryVdiscoveryTask#enable_filter}
  */
  readonly enableFilter?: boolean | cdktf.IResolvable;
  /**
  * Whether to enabled the cloud discovery or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#enabled DiscoveryVdiscoveryTask#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * FQDN or IP of the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#fqdn_or_ip DiscoveryVdiscoveryTask#fqdn_or_ip}
  */
  readonly fqdnOrIp?: string;
  /**
  * Indicates if gov cloud is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#govcloud_enabled DiscoveryVdiscoveryTask#govcloud_enabled}
  */
  readonly govcloudEnabled?: boolean | cdktf.IResolvable;
  /**
  * Identity service version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#identity_version DiscoveryVdiscoveryTask#identity_version}
  */
  readonly identityVersion?: string;
  /**
  * Member on which cloud discovery will be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#member DiscoveryVdiscoveryTask#member}
  */
  readonly member: string;
  /**
  * Whether to replace the old data with new or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#merge_data DiscoveryVdiscoveryTask#merge_data}
  */
  readonly mergeData: boolean | cdktf.IResolvable;
  /**
  * Discover all child accounts or Upload child account ids to discover..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#multiple_accounts_sync_policy DiscoveryVdiscoveryTask#multiple_accounts_sync_policy}
  */
  readonly multipleAccountsSyncPolicy?: string;
  /**
  * Name of this cloud discovery task. Uniquely identify a task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#name DiscoveryVdiscoveryTask#name}
  */
  readonly name: string;
  /**
  * Options to filter the networks in cdiscovery task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#network_filter DiscoveryVdiscoveryTask#network_filter}
  */
  readonly networkFilter?: string;
  /**
  * List of networks to filter in cdiscovery task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#network_list DiscoveryVdiscoveryTask#network_list}
  */
  readonly networkList?: string[];
  /**
  * Password used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#password DiscoveryVdiscoveryTask#password}
  */
  readonly password?: string;
  /**
  * Connection port used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#port DiscoveryVdiscoveryTask#port}
  */
  readonly port?: number;
  /**
  * Network view for private IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#private_network_view DiscoveryVdiscoveryTask#private_network_view}
  */
  readonly privateNetworkView?: string;
  /**
  * Mapping policy for the network view for private IPs in discovery data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#private_network_view_mapping_policy DiscoveryVdiscoveryTask#private_network_view_mapping_policy}
  */
  readonly privateNetworkViewMappingPolicy: string;
  /**
  * Connection protocol used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#protocol DiscoveryVdiscoveryTask#protocol}
  */
  readonly protocol?: string;
  /**
  * Network view for public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#public_network_view DiscoveryVdiscoveryTask#public_network_view}
  */
  readonly publicNetworkView?: string;
  /**
  * Mapping policy for the network view for public IPs in discovery data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#public_network_view_mapping_policy DiscoveryVdiscoveryTask#public_network_view_mapping_policy}
  */
  readonly publicNetworkViewMappingPolicy: string;
  /**
  * Role ARN for syncing child accounts; maximum 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#role_arn DiscoveryVdiscoveryTask#role_arn}
  */
  readonly roleArn?: string;
  /**
  * Schedule setting for cloud discovery task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#scheduled_run DiscoveryVdiscoveryTask#scheduled_run}
  */
  readonly scheduledRun?: DiscoveryVdiscoveryTaskScheduledRun;
  /**
  * String containing selected regions for discovery in comma separated format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#selected_regions DiscoveryVdiscoveryTask#selected_regions}
  */
  readonly selectedRegions?: string;
  /**
  * The service_account_file for GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#service_account_file DiscoveryVdiscoveryTask#service_account_file}
  */
  readonly serviceAccountFile?: string;
  /**
  * Service account file's token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#service_account_file_token DiscoveryVdiscoveryTask#service_account_file_token}
  */
  readonly serviceAccountFileToken?: string;
  /**
  * Synchronizing child accounts is enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#sync_child_accounts DiscoveryVdiscoveryTask#sync_child_accounts}
  */
  readonly syncChildAccounts?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the appliance uses a specific DNS view for private IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#update_dns_view_private_ip DiscoveryVdiscoveryTask#update_dns_view_private_ip}
  */
  readonly updateDnsViewPrivateIp?: boolean | cdktf.IResolvable;
  /**
  * If set to true, the appliance uses a specific DNS view for public IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#update_dns_view_public_ip DiscoveryVdiscoveryTask#update_dns_view_public_ip}
  */
  readonly updateDnsViewPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Whether to update metadata as a result of this network discovery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#update_metadata DiscoveryVdiscoveryTask#update_metadata}
  */
  readonly updateMetadata: boolean | cdktf.IResolvable;
  /**
  * If set true, all keystone connection will use "/identity" endpoint and port value will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#use_identity DiscoveryVdiscoveryTask#use_identity}
  */
  readonly useIdentity?: boolean | cdktf.IResolvable;
  /**
  * Username used for connecting to the cloud management platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#username DiscoveryVdiscoveryTask#username}
  */
  readonly username?: string;
}
export interface DiscoveryVdiscoveryTaskScheduledRun {
  /**
  * The day of the month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#day_of_month DiscoveryVdiscoveryTask#day_of_month}
  */
  readonly dayOfMonth?: number;
  /**
  * If set to True, the scheduled task is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#disable DiscoveryVdiscoveryTask#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The number of frequency to wait before repeating the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#every DiscoveryVdiscoveryTask#every}
  */
  readonly every?: number;
  /**
  * The frequency for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#frequency DiscoveryVdiscoveryTask#frequency}
  */
  readonly frequency?: string;
  /**
  * The hour of day for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#hour_of_day DiscoveryVdiscoveryTask#hour_of_day}
  */
  readonly hourOfDay?: number;
  /**
  * The minutes past the hour for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#minutes_past_hour DiscoveryVdiscoveryTask#minutes_past_hour}
  */
  readonly minutesPastHour?: number;
  /**
  * The month for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#month DiscoveryVdiscoveryTask#month}
  */
  readonly month?: number;
  /**
  * The recurring time for the schedule in Epoch seconds format. This field is obsolete and is preserved only for backward compatibility purposes. Please use other applicable fields to define the recurring schedule. DO NOT use recurring_time together with these fields. If you use recurring_time with other fields to define the recurring schedule, recurring_time has priority over year, hour_of_day, and minutes_past_hour and will override the values of these fields, although it does not override month and day_of_month. In this case, the recurring time value might be different than the intended value that you define.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#recurring_time DiscoveryVdiscoveryTask#recurring_time}
  */
  readonly recurringTime?: number;
  /**
  * Indicates if the scheduled task will be repeated or run only once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#repeat DiscoveryVdiscoveryTask#repeat}
  */
  readonly repeat?: string;
  /**
  * The time zone for the schedule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#time_zone DiscoveryVdiscoveryTask#time_zone}
  */
  readonly timeZone?: string;
  /**
  * Days of the week when scheduling is triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#weekdays DiscoveryVdiscoveryTask#weekdays}
  */
  readonly weekdays?: string[];
  /**
  * The year for the scheduled task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#year DiscoveryVdiscoveryTask#year}
  */
  readonly year?: number;
}

export function discoveryVdiscoveryTaskScheduledRunToTerraform(struct?: DiscoveryVdiscoveryTaskScheduledRun | cdktf.IResolvable): any {
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


export function discoveryVdiscoveryTaskScheduledRunToHclTerraform(struct?: DiscoveryVdiscoveryTaskScheduledRun | cdktf.IResolvable): any {
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

export class DiscoveryVdiscoveryTaskScheduledRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DiscoveryVdiscoveryTaskScheduledRun | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DiscoveryVdiscoveryTaskScheduledRun | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task nios_discovery_vdiscovery_task}
*/
export class DiscoveryVdiscoveryTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nios_discovery_vdiscovery_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiscoveryVdiscoveryTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiscoveryVdiscoveryTask to import
  * @param importFromId The id of the existing DiscoveryVdiscoveryTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiscoveryVdiscoveryTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nios_discovery_vdiscovery_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/nios/1.0.0/docs/resources/discovery_vdiscovery_task nios_discovery_vdiscovery_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiscoveryVdiscoveryTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DiscoveryVdiscoveryTaskConfig) {
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
    this._allowUnsecuredConnection = config.allowUnsecuredConnection;
    this._autoConsolidateCloudEa = config.autoConsolidateCloudEa;
    this._autoConsolidateManagedTenant = config.autoConsolidateManagedTenant;
    this._autoConsolidateManagedVm = config.autoConsolidateManagedVm;
    this._autoCreateDnsHostnameTemplate = config.autoCreateDnsHostnameTemplate;
    this._autoCreateDnsRecord = config.autoCreateDnsRecord;
    this._autoCreateDnsRecordType = config.autoCreateDnsRecordType;
    this._cdiscoveryFile = config.cdiscoveryFile;
    this._comment = config.comment;
    this._credentialsType = config.credentialsType;
    this._dnsViewPrivateIp = config.dnsViewPrivateIp;
    this._dnsViewPublicIp = config.dnsViewPublicIp;
    this._domainName = config.domainName;
    this._driverType = config.driverType;
    this._enableFilter = config.enableFilter;
    this._enabled = config.enabled;
    this._fqdnOrIp = config.fqdnOrIp;
    this._govcloudEnabled = config.govcloudEnabled;
    this._identityVersion = config.identityVersion;
    this._member = config.member;
    this._mergeData = config.mergeData;
    this._multipleAccountsSyncPolicy = config.multipleAccountsSyncPolicy;
    this._name = config.name;
    this._networkFilter = config.networkFilter;
    this._networkList = config.networkList;
    this._password = config.password;
    this._port = config.port;
    this._privateNetworkView = config.privateNetworkView;
    this._privateNetworkViewMappingPolicy = config.privateNetworkViewMappingPolicy;
    this._protocol = config.protocol;
    this._publicNetworkView = config.publicNetworkView;
    this._publicNetworkViewMappingPolicy = config.publicNetworkViewMappingPolicy;
    this._roleArn = config.roleArn;
    this._scheduledRun.internalValue = config.scheduledRun;
    this._selectedRegions = config.selectedRegions;
    this._serviceAccountFile = config.serviceAccountFile;
    this._serviceAccountFileToken = config.serviceAccountFileToken;
    this._syncChildAccounts = config.syncChildAccounts;
    this._updateDnsViewPrivateIp = config.updateDnsViewPrivateIp;
    this._updateDnsViewPublicIp = config.updateDnsViewPublicIp;
    this._updateMetadata = config.updateMetadata;
    this._useIdentity = config.useIdentity;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // auto_consolidate_cloud_ea - computed: false, optional: false, required: true
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

  // auto_consolidate_managed_tenant - computed: false, optional: false, required: true
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

  // auto_consolidate_managed_vm - computed: false, optional: false, required: true
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

  // cdiscovery_file - computed: false, optional: true, required: false
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

  // driver_type - computed: false, optional: false, required: true
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

  // member - computed: false, optional: false, required: true
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

  // merge_data - computed: false, optional: false, required: true
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

  // password - computed: false, optional: true, required: false
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

  // private_network_view_mapping_policy - computed: false, optional: false, required: true
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

  // public_network_view_mapping_policy - computed: false, optional: false, required: true
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
  private _scheduledRun = new DiscoveryVdiscoveryTaskScheduledRunOutputReference(this, "scheduled_run");
  public get scheduledRun() {
    return this._scheduledRun;
  }
  public putScheduledRun(value: DiscoveryVdiscoveryTaskScheduledRun) {
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

  // update_metadata - computed: false, optional: false, required: true
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_unsecured_connection: cdktf.booleanToTerraform(this._allowUnsecuredConnection),
      auto_consolidate_cloud_ea: cdktf.booleanToTerraform(this._autoConsolidateCloudEa),
      auto_consolidate_managed_tenant: cdktf.booleanToTerraform(this._autoConsolidateManagedTenant),
      auto_consolidate_managed_vm: cdktf.booleanToTerraform(this._autoConsolidateManagedVm),
      auto_create_dns_hostname_template: cdktf.stringToTerraform(this._autoCreateDnsHostnameTemplate),
      auto_create_dns_record: cdktf.booleanToTerraform(this._autoCreateDnsRecord),
      auto_create_dns_record_type: cdktf.stringToTerraform(this._autoCreateDnsRecordType),
      cdiscovery_file: cdktf.stringToTerraform(this._cdiscoveryFile),
      comment: cdktf.stringToTerraform(this._comment),
      credentials_type: cdktf.stringToTerraform(this._credentialsType),
      dns_view_private_ip: cdktf.stringToTerraform(this._dnsViewPrivateIp),
      dns_view_public_ip: cdktf.stringToTerraform(this._dnsViewPublicIp),
      domain_name: cdktf.stringToTerraform(this._domainName),
      driver_type: cdktf.stringToTerraform(this._driverType),
      enable_filter: cdktf.booleanToTerraform(this._enableFilter),
      enabled: cdktf.booleanToTerraform(this._enabled),
      fqdn_or_ip: cdktf.stringToTerraform(this._fqdnOrIp),
      govcloud_enabled: cdktf.booleanToTerraform(this._govcloudEnabled),
      identity_version: cdktf.stringToTerraform(this._identityVersion),
      member: cdktf.stringToTerraform(this._member),
      merge_data: cdktf.booleanToTerraform(this._mergeData),
      multiple_accounts_sync_policy: cdktf.stringToTerraform(this._multipleAccountsSyncPolicy),
      name: cdktf.stringToTerraform(this._name),
      network_filter: cdktf.stringToTerraform(this._networkFilter),
      network_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkList),
      password: cdktf.stringToTerraform(this._password),
      port: cdktf.numberToTerraform(this._port),
      private_network_view: cdktf.stringToTerraform(this._privateNetworkView),
      private_network_view_mapping_policy: cdktf.stringToTerraform(this._privateNetworkViewMappingPolicy),
      protocol: cdktf.stringToTerraform(this._protocol),
      public_network_view: cdktf.stringToTerraform(this._publicNetworkView),
      public_network_view_mapping_policy: cdktf.stringToTerraform(this._publicNetworkViewMappingPolicy),
      role_arn: cdktf.stringToTerraform(this._roleArn),
      scheduled_run: discoveryVdiscoveryTaskScheduledRunToTerraform(this._scheduledRun.internalValue),
      selected_regions: cdktf.stringToTerraform(this._selectedRegions),
      service_account_file: cdktf.stringToTerraform(this._serviceAccountFile),
      service_account_file_token: cdktf.stringToTerraform(this._serviceAccountFileToken),
      sync_child_accounts: cdktf.booleanToTerraform(this._syncChildAccounts),
      update_dns_view_private_ip: cdktf.booleanToTerraform(this._updateDnsViewPrivateIp),
      update_dns_view_public_ip: cdktf.booleanToTerraform(this._updateDnsViewPublicIp),
      update_metadata: cdktf.booleanToTerraform(this._updateMetadata),
      use_identity: cdktf.booleanToTerraform(this._useIdentity),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_unsecured_connection: {
        value: cdktf.booleanToHclTerraform(this._allowUnsecuredConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_consolidate_cloud_ea: {
        value: cdktf.booleanToHclTerraform(this._autoConsolidateCloudEa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_consolidate_managed_tenant: {
        value: cdktf.booleanToHclTerraform(this._autoConsolidateManagedTenant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_consolidate_managed_vm: {
        value: cdktf.booleanToHclTerraform(this._autoConsolidateManagedVm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_dns_hostname_template: {
        value: cdktf.stringToHclTerraform(this._autoCreateDnsHostnameTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_create_dns_record: {
        value: cdktf.booleanToHclTerraform(this._autoCreateDnsRecord),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_create_dns_record_type: {
        value: cdktf.stringToHclTerraform(this._autoCreateDnsRecordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cdiscovery_file: {
        value: cdktf.stringToHclTerraform(this._cdiscoveryFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_type: {
        value: cdktf.stringToHclTerraform(this._credentialsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_view_private_ip: {
        value: cdktf.stringToHclTerraform(this._dnsViewPrivateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_view_public_ip: {
        value: cdktf.stringToHclTerraform(this._dnsViewPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_type: {
        value: cdktf.stringToHclTerraform(this._driverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_filter: {
        value: cdktf.booleanToHclTerraform(this._enableFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      fqdn_or_ip: {
        value: cdktf.stringToHclTerraform(this._fqdnOrIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      govcloud_enabled: {
        value: cdktf.booleanToHclTerraform(this._govcloudEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      identity_version: {
        value: cdktf.stringToHclTerraform(this._identityVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      merge_data: {
        value: cdktf.booleanToHclTerraform(this._mergeData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multiple_accounts_sync_policy: {
        value: cdktf.stringToHclTerraform(this._multipleAccountsSyncPolicy),
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
      network_filter: {
        value: cdktf.stringToHclTerraform(this._networkFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_network_view: {
        value: cdktf.stringToHclTerraform(this._privateNetworkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_network_view_mapping_policy: {
        value: cdktf.stringToHclTerraform(this._privateNetworkViewMappingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_view: {
        value: cdktf.stringToHclTerraform(this._publicNetworkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      public_network_view_mapping_policy: {
        value: cdktf.stringToHclTerraform(this._publicNetworkViewMappingPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_arn: {
        value: cdktf.stringToHclTerraform(this._roleArn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduled_run: {
        value: discoveryVdiscoveryTaskScheduledRunToHclTerraform(this._scheduledRun.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DiscoveryVdiscoveryTaskScheduledRun",
      },
      selected_regions: {
        value: cdktf.stringToHclTerraform(this._selectedRegions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_file: {
        value: cdktf.stringToHclTerraform(this._serviceAccountFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_account_file_token: {
        value: cdktf.stringToHclTerraform(this._serviceAccountFileToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_child_accounts: {
        value: cdktf.booleanToHclTerraform(this._syncChildAccounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_dns_view_private_ip: {
        value: cdktf.booleanToHclTerraform(this._updateDnsViewPrivateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_dns_view_public_ip: {
        value: cdktf.booleanToHclTerraform(this._updateDnsViewPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_metadata: {
        value: cdktf.booleanToHclTerraform(this._updateMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_identity: {
        value: cdktf.booleanToHclTerraform(this._useIdentity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
