// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_selection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMerakiApplianceTrafficShapingUplinkSelectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_selection#network_id DataMerakiApplianceTrafficShapingUplinkSelection#network_id}
  */
  readonly networkId: string;
}
export interface DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters {
}

export function dataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersToTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersToHclTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_fqdn - computed: true, optional: false, required: false
  public get destinationFqdn() {
    return this.getStringAttribute('destination_fqdn');
  }

  // destination_host - computed: true, optional: false, required: false
  public get destinationHost() {
    return this.getNumberAttribute('destination_host');
  }

  // destination_network - computed: true, optional: false, required: false
  public get destinationNetwork() {
    return this.getStringAttribute('destination_network');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // destination_vlan - computed: true, optional: false, required: false
  public get destinationVlan() {
    return this.getNumberAttribute('destination_vlan');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_cidr - computed: true, optional: false, required: false
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }

  // source_host - computed: true, optional: false, required: false
  public get sourceHost() {
    return this.getNumberAttribute('source_host');
  }

  // source_network - computed: true, optional: false, required: false
  public get sourceNetwork() {
    return this.getStringAttribute('source_network');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // source_vlan - computed: true, optional: false, required: false
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersOutputReference {
    return new DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences {
}

export function dataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesToTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesToHclTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // builtin_performance_class_name - computed: true, optional: false, required: false
  public get builtinPerformanceClassName() {
    return this.getStringAttribute('builtin_performance_class_name');
  }

  // custom_performance_class_id - computed: true, optional: false, required: false
  public get customPerformanceClassId() {
    return this.getStringAttribute('custom_performance_class_id');
  }

  // fail_over_criterion - computed: true, optional: false, required: false
  public get failOverCriterion() {
    return this.getStringAttribute('fail_over_criterion');
  }

  // performance_class_type - computed: true, optional: false, required: false
  public get performanceClassType() {
    return this.getStringAttribute('performance_class_type');
  }

  // preferred_uplink - computed: true, optional: false, required: false
  public get preferredUplink() {
    return this.getStringAttribute('preferred_uplink');
  }

  // traffic_filters - computed: true, optional: false, required: false
  private _trafficFilters = new DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesTrafficFiltersList(this, "traffic_filters", false);
  public get trafficFilters() {
    return this._trafficFilters;
  }
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesOutputReference {
    return new DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters {
}

export function dataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersToTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersToHclTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFilters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // destination_port - computed: true, optional: false, required: false
  public get destinationPort() {
    return this.getStringAttribute('destination_port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // source_cidr - computed: true, optional: false, required: false
  public get sourceCidr() {
    return this.getStringAttribute('source_cidr');
  }

  // source_host - computed: true, optional: false, required: false
  public get sourceHost() {
    return this.getNumberAttribute('source_host');
  }

  // source_port - computed: true, optional: false, required: false
  public get sourcePort() {
    return this.getStringAttribute('source_port');
  }

  // source_vlan - computed: true, optional: false, required: false
  public get sourceVlan() {
    return this.getNumberAttribute('source_vlan');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersOutputReference {
    return new DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences {
}

export function dataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesToTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesToHclTerraform(struct?: DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // preferred_uplink - computed: true, optional: false, required: false
  public get preferredUplink() {
    return this.getStringAttribute('preferred_uplink');
  }

  // traffic_filters - computed: true, optional: false, required: false
  private _trafficFilters = new DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesTrafficFiltersList(this, "traffic_filters", false);
  public get trafficFilters() {
    return this._trafficFilters;
  }
}

export class DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesList extends cdktf.ComplexList {

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
  public get(index: number): DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesOutputReference {
    return new DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_selection meraki_appliance_traffic_shaping_uplink_selection}
*/
export class DataMerakiApplianceTrafficShapingUplinkSelection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_traffic_shaping_uplink_selection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMerakiApplianceTrafficShapingUplinkSelection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMerakiApplianceTrafficShapingUplinkSelection to import
  * @param importFromId The id of the existing DataMerakiApplianceTrafficShapingUplinkSelection that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_selection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMerakiApplianceTrafficShapingUplinkSelection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_traffic_shaping_uplink_selection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/data-sources/appliance_traffic_shaping_uplink_selection meraki_appliance_traffic_shaping_uplink_selection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMerakiApplianceTrafficShapingUplinkSelectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataMerakiApplianceTrafficShapingUplinkSelectionConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_traffic_shaping_uplink_selection',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
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

  // active_active_auto_vpn_enabled - computed: true, optional: false, required: false
  public get activeActiveAutoVpnEnabled() {
    return this.getBooleanAttribute('active_active_auto_vpn_enabled');
  }

  // default_uplink - computed: true, optional: false, required: false
  public get defaultUplink() {
    return this.getStringAttribute('default_uplink');
  }

  // failover_and_failback_immediate_enabled - computed: true, optional: false, required: false
  public get failoverAndFailbackImmediateEnabled() {
    return this.getBooleanAttribute('failover_and_failback_immediate_enabled');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balancing_enabled - computed: true, optional: false, required: false
  public get loadBalancingEnabled() {
    return this.getBooleanAttribute('load_balancing_enabled');
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

  // vpn_traffic_uplink_preferences - computed: true, optional: false, required: false
  private _vpnTrafficUplinkPreferences = new DataMerakiApplianceTrafficShapingUplinkSelectionVpnTrafficUplinkPreferencesList(this, "vpn_traffic_uplink_preferences", false);
  public get vpnTrafficUplinkPreferences() {
    return this._vpnTrafficUplinkPreferences;
  }

  // wan_traffic_uplink_preferences - computed: true, optional: false, required: false
  private _wanTrafficUplinkPreferences = new DataMerakiApplianceTrafficShapingUplinkSelectionWanTrafficUplinkPreferencesList(this, "wan_traffic_uplink_preferences", false);
  public get wanTrafficUplinkPreferences() {
    return this._wanTrafficUplinkPreferences;
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
