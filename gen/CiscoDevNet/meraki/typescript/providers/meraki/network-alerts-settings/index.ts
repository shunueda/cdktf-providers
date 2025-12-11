// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAlertsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alert-specific configuration for each type. Only alerts that pertain to the network can be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#alerts NetworkAlertsSettings#alerts}
  */
  readonly alerts?: NetworkAlertsSettingsAlerts[] | cdktf.IResolvable;
  /**
  * If true, then all network admins will receive emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#default_destinations_all_admins NetworkAlertsSettings#default_destinations_all_admins}
  */
  readonly defaultDestinationsAllAdmins?: boolean | cdktf.IResolvable;
  /**
  * A list of emails that will receive the alert(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#default_destinations_emails NetworkAlertsSettings#default_destinations_emails}
  */
  readonly defaultDestinationsEmails?: string[];
  /**
  * A list of HTTP server IDs to send a Webhook to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#default_destinations_http_server_ids NetworkAlertsSettings#default_destinations_http_server_ids}
  */
  readonly defaultDestinationsHttpServerIds?: string[];
  /**
  * If true, then an SNMP trap will be sent if there is an SNMP trap server configured for this network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#default_destinations_snmp NetworkAlertsSettings#default_destinations_snmp}
  */
  readonly defaultDestinationsSnmp?: boolean | cdktf.IResolvable;
  /**
  * If true, then wireless unreachable alerts will be muted when caused by a port schedule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#muting_by_port_schedules_enabled NetworkAlertsSettings#muting_by_port_schedules_enabled}
  */
  readonly mutingByPortSchedulesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#network_id NetworkAlertsSettings#network_id}
  */
  readonly networkId: string;
}
export interface NetworkAlertsSettingsAlertsFiltersConditions {
  /**
  * Direction
  *   - Choices: `+`, `-`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#direction NetworkAlertsSettings#direction}
  */
  readonly direction?: string;
  /**
  * Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#duration NetworkAlertsSettings#duration}
  */
  readonly duration?: number;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#threshold NetworkAlertsSettings#threshold}
  */
  readonly threshold?: number;
  /**
  * Type of condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#type NetworkAlertsSettings#type}
  */
  readonly type: string;
  /**
  * Unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#unit NetworkAlertsSettings#unit}
  */
  readonly unit?: string;
}

export function networkAlertsSettingsAlertsFiltersConditionsToTerraform(struct?: NetworkAlertsSettingsAlertsFiltersConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    direction: cdktf.stringToTerraform(struct!.direction),
    duration: cdktf.numberToTerraform(struct!.duration),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    type: cdktf.stringToTerraform(struct!.type),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function networkAlertsSettingsAlertsFiltersConditionsToHclTerraform(struct?: NetworkAlertsSettingsAlertsFiltersConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAlertsSettingsAlertsFiltersConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAlertsSettingsAlertsFiltersConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAlertsSettingsAlertsFiltersConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._direction = undefined;
      this._duration = undefined;
      this._threshold = undefined;
      this._type = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._direction = value.direction;
      this._duration = value.duration;
      this._threshold = value.threshold;
      this._type = value.type;
      this._unit = value.unit;
    }
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // type - computed: false, optional: false, required: true
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

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

export class NetworkAlertsSettingsAlertsFiltersConditionsList extends cdktf.ComplexList {
  public internalValue? : NetworkAlertsSettingsAlertsFiltersConditions[] | cdktf.IResolvable

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
  public get(index: number): NetworkAlertsSettingsAlertsFiltersConditionsOutputReference {
    return new NetworkAlertsSettingsAlertsFiltersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkAlertsSettingsAlerts {
  /**
  * If true, then all network admins will receive emails for this alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#alert_destinations_all_admins NetworkAlertsSettings#alert_destinations_all_admins}
  */
  readonly alertDestinationsAllAdmins?: boolean | cdktf.IResolvable;
  /**
  * A list of emails that will receive information about the alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#alert_destinations_emails NetworkAlertsSettings#alert_destinations_emails}
  */
  readonly alertDestinationsEmails?: string[];
  /**
  * A list of HTTP server IDs to send a Webhook to for this alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#alert_destinations_http_server_ids NetworkAlertsSettings#alert_destinations_http_server_ids}
  */
  readonly alertDestinationsHttpServerIds?: string[];
  /**
  * A list of phone numbers that will receive text messages about the alert. Only available for sensors status alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#alert_destinations_sms_numbers NetworkAlertsSettings#alert_destinations_sms_numbers}
  */
  readonly alertDestinationsSmsNumbers?: string[];
  /**
  * If true, then an SNMP trap will be sent for this alert if there is an SNMP trap server configured for this network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#alert_destinations_snmp NetworkAlertsSettings#alert_destinations_snmp}
  */
  readonly alertDestinationsSnmp?: boolean | cdktf.IResolvable;
  /**
  * A boolean depicting if the alert is turned on or off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#enabled NetworkAlertsSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Conditions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_conditions NetworkAlertsSettings#filters_conditions}
  */
  readonly filtersConditions?: NetworkAlertsSettingsAlertsFiltersConditions[] | cdktf.IResolvable;
  /**
  * Failure Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_failure_type NetworkAlertsSettings#filters_failure_type}
  */
  readonly filtersFailureType?: string;
  /**
  * Loopback Window (in sec)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_lookback_window NetworkAlertsSettings#filters_lookback_window}
  */
  readonly filtersLookbackWindow?: number;
  /**
  * Min Duration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_min_duration NetworkAlertsSettings#filters_min_duration}
  */
  readonly filtersMinDuration?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_name NetworkAlertsSettings#filters_name}
  */
  readonly filtersName?: string;
  /**
  * Period
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_period NetworkAlertsSettings#filters_period}
  */
  readonly filtersPeriod?: number;
  /**
  * Priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_priority NetworkAlertsSettings#filters_priority}
  */
  readonly filtersPriority?: string;
  /**
  * Regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_regex NetworkAlertsSettings#filters_regex}
  */
  readonly filtersRegex?: string;
  /**
  * Selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_selector NetworkAlertsSettings#filters_selector}
  */
  readonly filtersSelector?: string;
  /**
  * Serials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_serials NetworkAlertsSettings#filters_serials}
  */
  readonly filtersSerials?: string[];
  /**
  * SSID Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_ssid_num NetworkAlertsSettings#filters_ssid_num}
  */
  readonly filtersSsidNum?: number;
  /**
  * Tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_tag NetworkAlertsSettings#filters_tag}
  */
  readonly filtersTag?: string;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_threshold NetworkAlertsSettings#filters_threshold}
  */
  readonly filtersThreshold?: number;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#filters_timeout NetworkAlertsSettings#filters_timeout}
  */
  readonly filtersTimeout?: number;
  /**
  * The type of alert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#type NetworkAlertsSettings#type}
  */
  readonly type: string;
}

export function networkAlertsSettingsAlertsToTerraform(struct?: NetworkAlertsSettingsAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alert_destinations_all_admins: cdktf.booleanToTerraform(struct!.alertDestinationsAllAdmins),
    alert_destinations_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertDestinationsEmails),
    alert_destinations_http_server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertDestinationsHttpServerIds),
    alert_destinations_sms_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alertDestinationsSmsNumbers),
    alert_destinations_snmp: cdktf.booleanToTerraform(struct!.alertDestinationsSnmp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    filters_conditions: cdktf.listMapper(networkAlertsSettingsAlertsFiltersConditionsToTerraform, false)(struct!.filtersConditions),
    filters_failure_type: cdktf.stringToTerraform(struct!.filtersFailureType),
    filters_lookback_window: cdktf.numberToTerraform(struct!.filtersLookbackWindow),
    filters_min_duration: cdktf.numberToTerraform(struct!.filtersMinDuration),
    filters_name: cdktf.stringToTerraform(struct!.filtersName),
    filters_period: cdktf.numberToTerraform(struct!.filtersPeriod),
    filters_priority: cdktf.stringToTerraform(struct!.filtersPriority),
    filters_regex: cdktf.stringToTerraform(struct!.filtersRegex),
    filters_selector: cdktf.stringToTerraform(struct!.filtersSelector),
    filters_serials: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filtersSerials),
    filters_ssid_num: cdktf.numberToTerraform(struct!.filtersSsidNum),
    filters_tag: cdktf.stringToTerraform(struct!.filtersTag),
    filters_threshold: cdktf.numberToTerraform(struct!.filtersThreshold),
    filters_timeout: cdktf.numberToTerraform(struct!.filtersTimeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function networkAlertsSettingsAlertsToHclTerraform(struct?: NetworkAlertsSettingsAlerts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alert_destinations_all_admins: {
      value: cdktf.booleanToHclTerraform(struct!.alertDestinationsAllAdmins),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alert_destinations_emails: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertDestinationsEmails),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_destinations_http_server_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertDestinationsHttpServerIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_destinations_sms_numbers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alertDestinationsSmsNumbers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alert_destinations_snmp: {
      value: cdktf.booleanToHclTerraform(struct!.alertDestinationsSnmp),
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
    filters_conditions: {
      value: cdktf.listMapperHcl(networkAlertsSettingsAlertsFiltersConditionsToHclTerraform, false)(struct!.filtersConditions),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAlertsSettingsAlertsFiltersConditionsList",
    },
    filters_failure_type: {
      value: cdktf.stringToHclTerraform(struct!.filtersFailureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters_lookback_window: {
      value: cdktf.numberToHclTerraform(struct!.filtersLookbackWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filters_min_duration: {
      value: cdktf.numberToHclTerraform(struct!.filtersMinDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filters_name: {
      value: cdktf.stringToHclTerraform(struct!.filtersName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters_period: {
      value: cdktf.numberToHclTerraform(struct!.filtersPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filters_priority: {
      value: cdktf.stringToHclTerraform(struct!.filtersPriority),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters_regex: {
      value: cdktf.stringToHclTerraform(struct!.filtersRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters_selector: {
      value: cdktf.stringToHclTerraform(struct!.filtersSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters_serials: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filtersSerials),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters_ssid_num: {
      value: cdktf.numberToHclTerraform(struct!.filtersSsidNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filters_tag: {
      value: cdktf.stringToHclTerraform(struct!.filtersTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filters_threshold: {
      value: cdktf.numberToHclTerraform(struct!.filtersThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filters_timeout: {
      value: cdktf.numberToHclTerraform(struct!.filtersTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class NetworkAlertsSettingsAlertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkAlertsSettingsAlerts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alertDestinationsAllAdmins !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertDestinationsAllAdmins = this._alertDestinationsAllAdmins;
    }
    if (this._alertDestinationsEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertDestinationsEmails = this._alertDestinationsEmails;
    }
    if (this._alertDestinationsHttpServerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertDestinationsHttpServerIds = this._alertDestinationsHttpServerIds;
    }
    if (this._alertDestinationsSmsNumbers !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertDestinationsSmsNumbers = this._alertDestinationsSmsNumbers;
    }
    if (this._alertDestinationsSnmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.alertDestinationsSnmp = this._alertDestinationsSnmp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._filtersConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersConditions = this._filtersConditions?.internalValue;
    }
    if (this._filtersFailureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersFailureType = this._filtersFailureType;
    }
    if (this._filtersLookbackWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersLookbackWindow = this._filtersLookbackWindow;
    }
    if (this._filtersMinDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersMinDuration = this._filtersMinDuration;
    }
    if (this._filtersName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersName = this._filtersName;
    }
    if (this._filtersPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersPeriod = this._filtersPeriod;
    }
    if (this._filtersPriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersPriority = this._filtersPriority;
    }
    if (this._filtersRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersRegex = this._filtersRegex;
    }
    if (this._filtersSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersSelector = this._filtersSelector;
    }
    if (this._filtersSerials !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersSerials = this._filtersSerials;
    }
    if (this._filtersSsidNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersSsidNum = this._filtersSsidNum;
    }
    if (this._filtersTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersTag = this._filtersTag;
    }
    if (this._filtersThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersThreshold = this._filtersThreshold;
    }
    if (this._filtersTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.filtersTimeout = this._filtersTimeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAlertsSettingsAlerts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alertDestinationsAllAdmins = undefined;
      this._alertDestinationsEmails = undefined;
      this._alertDestinationsHttpServerIds = undefined;
      this._alertDestinationsSmsNumbers = undefined;
      this._alertDestinationsSnmp = undefined;
      this._enabled = undefined;
      this._filtersConditions.internalValue = undefined;
      this._filtersFailureType = undefined;
      this._filtersLookbackWindow = undefined;
      this._filtersMinDuration = undefined;
      this._filtersName = undefined;
      this._filtersPeriod = undefined;
      this._filtersPriority = undefined;
      this._filtersRegex = undefined;
      this._filtersSelector = undefined;
      this._filtersSerials = undefined;
      this._filtersSsidNum = undefined;
      this._filtersTag = undefined;
      this._filtersThreshold = undefined;
      this._filtersTimeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alertDestinationsAllAdmins = value.alertDestinationsAllAdmins;
      this._alertDestinationsEmails = value.alertDestinationsEmails;
      this._alertDestinationsHttpServerIds = value.alertDestinationsHttpServerIds;
      this._alertDestinationsSmsNumbers = value.alertDestinationsSmsNumbers;
      this._alertDestinationsSnmp = value.alertDestinationsSnmp;
      this._enabled = value.enabled;
      this._filtersConditions.internalValue = value.filtersConditions;
      this._filtersFailureType = value.filtersFailureType;
      this._filtersLookbackWindow = value.filtersLookbackWindow;
      this._filtersMinDuration = value.filtersMinDuration;
      this._filtersName = value.filtersName;
      this._filtersPeriod = value.filtersPeriod;
      this._filtersPriority = value.filtersPriority;
      this._filtersRegex = value.filtersRegex;
      this._filtersSelector = value.filtersSelector;
      this._filtersSerials = value.filtersSerials;
      this._filtersSsidNum = value.filtersSsidNum;
      this._filtersTag = value.filtersTag;
      this._filtersThreshold = value.filtersThreshold;
      this._filtersTimeout = value.filtersTimeout;
      this._type = value.type;
    }
  }

  // alert_destinations_all_admins - computed: false, optional: true, required: false
  private _alertDestinationsAllAdmins?: boolean | cdktf.IResolvable; 
  public get alertDestinationsAllAdmins() {
    return this.getBooleanAttribute('alert_destinations_all_admins');
  }
  public set alertDestinationsAllAdmins(value: boolean | cdktf.IResolvable) {
    this._alertDestinationsAllAdmins = value;
  }
  public resetAlertDestinationsAllAdmins() {
    this._alertDestinationsAllAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDestinationsAllAdminsInput() {
    return this._alertDestinationsAllAdmins;
  }

  // alert_destinations_emails - computed: false, optional: true, required: false
  private _alertDestinationsEmails?: string[]; 
  public get alertDestinationsEmails() {
    return this.getListAttribute('alert_destinations_emails');
  }
  public set alertDestinationsEmails(value: string[]) {
    this._alertDestinationsEmails = value;
  }
  public resetAlertDestinationsEmails() {
    this._alertDestinationsEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDestinationsEmailsInput() {
    return this._alertDestinationsEmails;
  }

  // alert_destinations_http_server_ids - computed: false, optional: true, required: false
  private _alertDestinationsHttpServerIds?: string[]; 
  public get alertDestinationsHttpServerIds() {
    return this.getListAttribute('alert_destinations_http_server_ids');
  }
  public set alertDestinationsHttpServerIds(value: string[]) {
    this._alertDestinationsHttpServerIds = value;
  }
  public resetAlertDestinationsHttpServerIds() {
    this._alertDestinationsHttpServerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDestinationsHttpServerIdsInput() {
    return this._alertDestinationsHttpServerIds;
  }

  // alert_destinations_sms_numbers - computed: false, optional: true, required: false
  private _alertDestinationsSmsNumbers?: string[]; 
  public get alertDestinationsSmsNumbers() {
    return this.getListAttribute('alert_destinations_sms_numbers');
  }
  public set alertDestinationsSmsNumbers(value: string[]) {
    this._alertDestinationsSmsNumbers = value;
  }
  public resetAlertDestinationsSmsNumbers() {
    this._alertDestinationsSmsNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDestinationsSmsNumbersInput() {
    return this._alertDestinationsSmsNumbers;
  }

  // alert_destinations_snmp - computed: false, optional: true, required: false
  private _alertDestinationsSnmp?: boolean | cdktf.IResolvable; 
  public get alertDestinationsSnmp() {
    return this.getBooleanAttribute('alert_destinations_snmp');
  }
  public set alertDestinationsSnmp(value: boolean | cdktf.IResolvable) {
    this._alertDestinationsSnmp = value;
  }
  public resetAlertDestinationsSnmp() {
    this._alertDestinationsSnmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertDestinationsSnmpInput() {
    return this._alertDestinationsSnmp;
  }

  // enabled - computed: false, optional: true, required: false
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

  // filters_conditions - computed: false, optional: true, required: false
  private _filtersConditions = new NetworkAlertsSettingsAlertsFiltersConditionsList(this, "filters_conditions", false);
  public get filtersConditions() {
    return this._filtersConditions;
  }
  public putFiltersConditions(value: NetworkAlertsSettingsAlertsFiltersConditions[] | cdktf.IResolvable) {
    this._filtersConditions.internalValue = value;
  }
  public resetFiltersConditions() {
    this._filtersConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersConditionsInput() {
    return this._filtersConditions.internalValue;
  }

  // filters_failure_type - computed: false, optional: true, required: false
  private _filtersFailureType?: string; 
  public get filtersFailureType() {
    return this.getStringAttribute('filters_failure_type');
  }
  public set filtersFailureType(value: string) {
    this._filtersFailureType = value;
  }
  public resetFiltersFailureType() {
    this._filtersFailureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersFailureTypeInput() {
    return this._filtersFailureType;
  }

  // filters_lookback_window - computed: false, optional: true, required: false
  private _filtersLookbackWindow?: number; 
  public get filtersLookbackWindow() {
    return this.getNumberAttribute('filters_lookback_window');
  }
  public set filtersLookbackWindow(value: number) {
    this._filtersLookbackWindow = value;
  }
  public resetFiltersLookbackWindow() {
    this._filtersLookbackWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersLookbackWindowInput() {
    return this._filtersLookbackWindow;
  }

  // filters_min_duration - computed: false, optional: true, required: false
  private _filtersMinDuration?: number; 
  public get filtersMinDuration() {
    return this.getNumberAttribute('filters_min_duration');
  }
  public set filtersMinDuration(value: number) {
    this._filtersMinDuration = value;
  }
  public resetFiltersMinDuration() {
    this._filtersMinDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersMinDurationInput() {
    return this._filtersMinDuration;
  }

  // filters_name - computed: false, optional: true, required: false
  private _filtersName?: string; 
  public get filtersName() {
    return this.getStringAttribute('filters_name');
  }
  public set filtersName(value: string) {
    this._filtersName = value;
  }
  public resetFiltersName() {
    this._filtersName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersNameInput() {
    return this._filtersName;
  }

  // filters_period - computed: false, optional: true, required: false
  private _filtersPeriod?: number; 
  public get filtersPeriod() {
    return this.getNumberAttribute('filters_period');
  }
  public set filtersPeriod(value: number) {
    this._filtersPeriod = value;
  }
  public resetFiltersPeriod() {
    this._filtersPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersPeriodInput() {
    return this._filtersPeriod;
  }

  // filters_priority - computed: false, optional: true, required: false
  private _filtersPriority?: string; 
  public get filtersPriority() {
    return this.getStringAttribute('filters_priority');
  }
  public set filtersPriority(value: string) {
    this._filtersPriority = value;
  }
  public resetFiltersPriority() {
    this._filtersPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersPriorityInput() {
    return this._filtersPriority;
  }

  // filters_regex - computed: false, optional: true, required: false
  private _filtersRegex?: string; 
  public get filtersRegex() {
    return this.getStringAttribute('filters_regex');
  }
  public set filtersRegex(value: string) {
    this._filtersRegex = value;
  }
  public resetFiltersRegex() {
    this._filtersRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersRegexInput() {
    return this._filtersRegex;
  }

  // filters_selector - computed: false, optional: true, required: false
  private _filtersSelector?: string; 
  public get filtersSelector() {
    return this.getStringAttribute('filters_selector');
  }
  public set filtersSelector(value: string) {
    this._filtersSelector = value;
  }
  public resetFiltersSelector() {
    this._filtersSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersSelectorInput() {
    return this._filtersSelector;
  }

  // filters_serials - computed: false, optional: true, required: false
  private _filtersSerials?: string[]; 
  public get filtersSerials() {
    return cdktf.Fn.tolist(this.getListAttribute('filters_serials'));
  }
  public set filtersSerials(value: string[]) {
    this._filtersSerials = value;
  }
  public resetFiltersSerials() {
    this._filtersSerials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersSerialsInput() {
    return this._filtersSerials;
  }

  // filters_ssid_num - computed: false, optional: true, required: false
  private _filtersSsidNum?: number; 
  public get filtersSsidNum() {
    return this.getNumberAttribute('filters_ssid_num');
  }
  public set filtersSsidNum(value: number) {
    this._filtersSsidNum = value;
  }
  public resetFiltersSsidNum() {
    this._filtersSsidNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersSsidNumInput() {
    return this._filtersSsidNum;
  }

  // filters_tag - computed: false, optional: true, required: false
  private _filtersTag?: string; 
  public get filtersTag() {
    return this.getStringAttribute('filters_tag');
  }
  public set filtersTag(value: string) {
    this._filtersTag = value;
  }
  public resetFiltersTag() {
    this._filtersTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersTagInput() {
    return this._filtersTag;
  }

  // filters_threshold - computed: false, optional: true, required: false
  private _filtersThreshold?: number; 
  public get filtersThreshold() {
    return this.getNumberAttribute('filters_threshold');
  }
  public set filtersThreshold(value: number) {
    this._filtersThreshold = value;
  }
  public resetFiltersThreshold() {
    this._filtersThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersThresholdInput() {
    return this._filtersThreshold;
  }

  // filters_timeout - computed: false, optional: true, required: false
  private _filtersTimeout?: number; 
  public get filtersTimeout() {
    return this.getNumberAttribute('filters_timeout');
  }
  public set filtersTimeout(value: number) {
    this._filtersTimeout = value;
  }
  public resetFiltersTimeout() {
    this._filtersTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersTimeoutInput() {
    return this._filtersTimeout;
  }

  // type - computed: false, optional: false, required: true
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

export class NetworkAlertsSettingsAlertsList extends cdktf.ComplexList {
  public internalValue? : NetworkAlertsSettingsAlerts[] | cdktf.IResolvable

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
  public get(index: number): NetworkAlertsSettingsAlertsOutputReference {
    return new NetworkAlertsSettingsAlertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings meraki_network_alerts_settings}
*/
export class NetworkAlertsSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_alerts_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAlertsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAlertsSettings to import
  * @param importFromId The id of the existing NetworkAlertsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAlertsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_alerts_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/network_alerts_settings meraki_network_alerts_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAlertsSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAlertsSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_alerts_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alerts.internalValue = config.alerts;
    this._defaultDestinationsAllAdmins = config.defaultDestinationsAllAdmins;
    this._defaultDestinationsEmails = config.defaultDestinationsEmails;
    this._defaultDestinationsHttpServerIds = config.defaultDestinationsHttpServerIds;
    this._defaultDestinationsSnmp = config.defaultDestinationsSnmp;
    this._mutingByPortSchedulesEnabled = config.mutingByPortSchedulesEnabled;
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: false, optional: true, required: false
  private _alerts = new NetworkAlertsSettingsAlertsList(this, "alerts", false);
  public get alerts() {
    return this._alerts;
  }
  public putAlerts(value: NetworkAlertsSettingsAlerts[] | cdktf.IResolvable) {
    this._alerts.internalValue = value;
  }
  public resetAlerts() {
    this._alerts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertsInput() {
    return this._alerts.internalValue;
  }

  // default_destinations_all_admins - computed: false, optional: true, required: false
  private _defaultDestinationsAllAdmins?: boolean | cdktf.IResolvable; 
  public get defaultDestinationsAllAdmins() {
    return this.getBooleanAttribute('default_destinations_all_admins');
  }
  public set defaultDestinationsAllAdmins(value: boolean | cdktf.IResolvable) {
    this._defaultDestinationsAllAdmins = value;
  }
  public resetDefaultDestinationsAllAdmins() {
    this._defaultDestinationsAllAdmins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDestinationsAllAdminsInput() {
    return this._defaultDestinationsAllAdmins;
  }

  // default_destinations_emails - computed: false, optional: true, required: false
  private _defaultDestinationsEmails?: string[]; 
  public get defaultDestinationsEmails() {
    return this.getListAttribute('default_destinations_emails');
  }
  public set defaultDestinationsEmails(value: string[]) {
    this._defaultDestinationsEmails = value;
  }
  public resetDefaultDestinationsEmails() {
    this._defaultDestinationsEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDestinationsEmailsInput() {
    return this._defaultDestinationsEmails;
  }

  // default_destinations_http_server_ids - computed: false, optional: true, required: false
  private _defaultDestinationsHttpServerIds?: string[]; 
  public get defaultDestinationsHttpServerIds() {
    return this.getListAttribute('default_destinations_http_server_ids');
  }
  public set defaultDestinationsHttpServerIds(value: string[]) {
    this._defaultDestinationsHttpServerIds = value;
  }
  public resetDefaultDestinationsHttpServerIds() {
    this._defaultDestinationsHttpServerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDestinationsHttpServerIdsInput() {
    return this._defaultDestinationsHttpServerIds;
  }

  // default_destinations_snmp - computed: false, optional: true, required: false
  private _defaultDestinationsSnmp?: boolean | cdktf.IResolvable; 
  public get defaultDestinationsSnmp() {
    return this.getBooleanAttribute('default_destinations_snmp');
  }
  public set defaultDestinationsSnmp(value: boolean | cdktf.IResolvable) {
    this._defaultDestinationsSnmp = value;
  }
  public resetDefaultDestinationsSnmp() {
    this._defaultDestinationsSnmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDestinationsSnmpInput() {
    return this._defaultDestinationsSnmp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // muting_by_port_schedules_enabled - computed: false, optional: true, required: false
  private _mutingByPortSchedulesEnabled?: boolean | cdktf.IResolvable; 
  public get mutingByPortSchedulesEnabled() {
    return this.getBooleanAttribute('muting_by_port_schedules_enabled');
  }
  public set mutingByPortSchedulesEnabled(value: boolean | cdktf.IResolvable) {
    this._mutingByPortSchedulesEnabled = value;
  }
  public resetMutingByPortSchedulesEnabled() {
    this._mutingByPortSchedulesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutingByPortSchedulesEnabledInput() {
    return this._mutingByPortSchedulesEnabled;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alerts: cdktf.listMapper(networkAlertsSettingsAlertsToTerraform, false)(this._alerts.internalValue),
      default_destinations_all_admins: cdktf.booleanToTerraform(this._defaultDestinationsAllAdmins),
      default_destinations_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultDestinationsEmails),
      default_destinations_http_server_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultDestinationsHttpServerIds),
      default_destinations_snmp: cdktf.booleanToTerraform(this._defaultDestinationsSnmp),
      muting_by_port_schedules_enabled: cdktf.booleanToTerraform(this._mutingByPortSchedulesEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alerts: {
        value: cdktf.listMapperHcl(networkAlertsSettingsAlertsToHclTerraform, false)(this._alerts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkAlertsSettingsAlertsList",
      },
      default_destinations_all_admins: {
        value: cdktf.booleanToHclTerraform(this._defaultDestinationsAllAdmins),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_destinations_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultDestinationsEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_destinations_http_server_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultDestinationsHttpServerIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_destinations_snmp: {
        value: cdktf.booleanToHclTerraform(this._defaultDestinationsSnmp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      muting_by_port_schedules_enabled: {
        value: cdktf.booleanToHclTerraform(this._mutingByPortSchedulesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
