// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_alerts_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiNetworkAlertsSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_alerts_settings#network_id DataMerakiNetworkAlertsSettings#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiNetworkAlertsSettingsAlertsFiltersConditions {
}

export function dataMerakiNetworkAlertsSettingsAlertsFiltersConditionsToTerraform(struct?: DataMerakiNetworkAlertsSettingsAlertsFiltersConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkAlertsSettingsAlertsFiltersConditionsToHclTerraform(struct?: DataMerakiNetworkAlertsSettingsAlertsFiltersConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkAlertsSettingsAlertsFiltersConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkAlertsSettingsAlertsFiltersConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkAlertsSettingsAlertsFiltersConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataMerakiNetworkAlertsSettingsAlertsFiltersConditionsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkAlertsSettingsAlertsFiltersConditionsOutputReference {
    return new DataMerakiNetworkAlertsSettingsAlertsFiltersConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiNetworkAlertsSettingsAlerts {
}

export function dataMerakiNetworkAlertsSettingsAlertsToTerraform(struct?: DataMerakiNetworkAlertsSettingsAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiNetworkAlertsSettingsAlertsToHclTerraform(struct?: DataMerakiNetworkAlertsSettingsAlerts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiNetworkAlertsSettingsAlertsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiNetworkAlertsSettingsAlerts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiNetworkAlertsSettingsAlerts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alert_destinations_all_admins - computed: true, optional: false, required: false
  public get alertDestinationsAllAdmins() {
    return this.getBooleanAttribute('alert_destinations_all_admins');
  }

  // alert_destinations_emails - computed: true, optional: false, required: false
  public get alertDestinationsEmails() {
    return this.getListAttribute('alert_destinations_emails');
  }

  // alert_destinations_http_server_ids - computed: true, optional: false, required: false
  public get alertDestinationsHttpServerIds() {
    return this.getListAttribute('alert_destinations_http_server_ids');
  }

  // alert_destinations_sms_numbers - computed: true, optional: false, required: false
  public get alertDestinationsSmsNumbers() {
    return this.getListAttribute('alert_destinations_sms_numbers');
  }

  // alert_destinations_snmp - computed: true, optional: false, required: false
  public get alertDestinationsSnmp() {
    return this.getBooleanAttribute('alert_destinations_snmp');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // filters_conditions - computed: true, optional: false, required: false
  private _filtersConditions = new DataMerakiNetworkAlertsSettingsAlertsFiltersConditionsList(this, "filters_conditions", false);
  public get filtersConditions() {
    return this._filtersConditions;
  }

  // filters_failure_type - computed: true, optional: false, required: false
  public get filtersFailureType() {
    return this.getStringAttribute('filters_failure_type');
  }

  // filters_lookback_window - computed: true, optional: false, required: false
  public get filtersLookbackWindow() {
    return this.getNumberAttribute('filters_lookback_window');
  }

  // filters_min_duration - computed: true, optional: false, required: false
  public get filtersMinDuration() {
    return this.getNumberAttribute('filters_min_duration');
  }

  // filters_name - computed: true, optional: false, required: false
  public get filtersName() {
    return this.getStringAttribute('filters_name');
  }

  // filters_period - computed: true, optional: false, required: false
  public get filtersPeriod() {
    return this.getNumberAttribute('filters_period');
  }

  // filters_priority - computed: true, optional: false, required: false
  public get filtersPriority() {
    return this.getStringAttribute('filters_priority');
  }

  // filters_regex - computed: true, optional: false, required: false
  public get filtersRegex() {
    return this.getStringAttribute('filters_regex');
  }

  // filters_selector - computed: true, optional: false, required: false
  public get filtersSelector() {
    return this.getStringAttribute('filters_selector');
  }

  // filters_serials - computed: true, optional: false, required: false
  public get filtersSerials() {
    return cdktf.Fn.tolist(this.getListAttribute('filters_serials'));
  }

  // filters_ssid_num - computed: true, optional: false, required: false
  public get filtersSsidNum() {
    return this.getNumberAttribute('filters_ssid_num');
  }

  // filters_tag - computed: true, optional: false, required: false
  public get filtersTag() {
    return this.getStringAttribute('filters_tag');
  }

  // filters_threshold - computed: true, optional: false, required: false
  public get filtersThreshold() {
    return this.getNumberAttribute('filters_threshold');
  }

  // filters_timeout - computed: true, optional: false, required: false
  public get filtersTimeout() {
    return this.getNumberAttribute('filters_timeout');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMerakiNetworkAlertsSettingsAlertsList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiNetworkAlertsSettingsAlertsOutputReference {
    return new DataMerakiNetworkAlertsSettingsAlertsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_alerts_settings meraki_network_alerts_settings}
*/
export class DataMerakiNetworkAlertsSettings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_network_alerts_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiNetworkAlertsSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiNetworkAlertsSettings to import
  * @param importFromId The id of the existing DataMerakiNetworkAlertsSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_alerts_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiNetworkAlertsSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_network_alerts_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/network_alerts_settings meraki_network_alerts_settings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiNetworkAlertsSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiNetworkAlertsSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_network_alerts_settings',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1',
        providerVersionConstraint: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._networkId = config.networkId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerts - computed: true, optional: false, required: false
  private _alerts = new DataMerakiNetworkAlertsSettingsAlertsList(this, "alerts", false);
  public get alerts() {
    return this._alerts;
  }

  // default_destinations_all_admins - computed: true, optional: false, required: false
  public get defaultDestinationsAllAdmins() {
    return this.getBooleanAttribute('default_destinations_all_admins');
  }

  // default_destinations_emails - computed: true, optional: false, required: false
  public get defaultDestinationsEmails() {
    return this.getListAttribute('default_destinations_emails');
  }

  // default_destinations_http_server_ids - computed: true, optional: false, required: false
  public get defaultDestinationsHttpServerIds() {
    return this.getListAttribute('default_destinations_http_server_ids');
  }

  // default_destinations_snmp - computed: true, optional: false, required: false
  public get defaultDestinationsSnmp() {
    return this.getBooleanAttribute('default_destinations_snmp');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // muting_by_port_schedules_enabled - computed: true, optional: false, required: false
  public get mutingByPortSchedulesEnabled() {
    return this.getBooleanAttribute('muting_by_port_schedules_enabled');
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
      network_id: cdktf.stringToTerraform(this._networkId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
