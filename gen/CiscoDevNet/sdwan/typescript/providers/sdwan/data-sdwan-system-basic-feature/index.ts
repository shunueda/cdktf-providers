// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_basic_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSystemBasicFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_basic_feature#feature_profile_id DataSdwanSystemBasicFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * The id of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_basic_feature#id DataSdwanSystemBasicFeature#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataSdwanSystemBasicFeatureAffinityPerVrfs {
}

export function dataSdwanSystemBasicFeatureAffinityPerVrfsToTerraform(struct?: DataSdwanSystemBasicFeatureAffinityPerVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSystemBasicFeatureAffinityPerVrfsToHclTerraform(struct?: DataSdwanSystemBasicFeatureAffinityPerVrfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSystemBasicFeatureAffinityPerVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSystemBasicFeatureAffinityPerVrfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSystemBasicFeatureAffinityPerVrfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // affinity_group_number - computed: true, optional: false, required: false
  public get affinityGroupNumber() {
    return this.getNumberAttribute('affinity_group_number');
  }

  // affinity_group_number_variable - computed: true, optional: false, required: false
  public get affinityGroupNumberVariable() {
    return this.getStringAttribute('affinity_group_number_variable');
  }

  // vrf_range - computed: true, optional: false, required: false
  public get vrfRange() {
    return this.getStringAttribute('vrf_range');
  }

  // vrf_range_variable - computed: true, optional: false, required: false
  public get vrfRangeVariable() {
    return this.getStringAttribute('vrf_range_variable');
  }
}

export class DataSdwanSystemBasicFeatureAffinityPerVrfsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSystemBasicFeatureAffinityPerVrfsOutputReference {
    return new DataSdwanSystemBasicFeatureAffinityPerVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanSystemBasicFeatureGpsSmsMobileNumbers {
}

export function dataSdwanSystemBasicFeatureGpsSmsMobileNumbersToTerraform(struct?: DataSdwanSystemBasicFeatureGpsSmsMobileNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSystemBasicFeatureGpsSmsMobileNumbersToHclTerraform(struct?: DataSdwanSystemBasicFeatureGpsSmsMobileNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSystemBasicFeatureGpsSmsMobileNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSystemBasicFeatureGpsSmsMobileNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSystemBasicFeatureGpsSmsMobileNumbers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // number - computed: true, optional: false, required: false
  public get number() {
    return this.getStringAttribute('number');
  }

  // number_variable - computed: true, optional: false, required: false
  public get numberVariable() {
    return this.getStringAttribute('number_variable');
  }
}

export class DataSdwanSystemBasicFeatureGpsSmsMobileNumbersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSystemBasicFeatureGpsSmsMobileNumbersOutputReference {
    return new DataSdwanSystemBasicFeatureGpsSmsMobileNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_basic_feature sdwan_system_basic_feature}
*/
export class DataSdwanSystemBasicFeature extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_system_basic_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSystemBasicFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSystemBasicFeature to import
  * @param importFromId The id of the existing DataSdwanSystemBasicFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_basic_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSystemBasicFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_system_basic_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/system_basic_feature sdwan_system_basic_feature} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSystemBasicFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSystemBasicFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_system_basic_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureProfileId = config.featureProfileId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_tech_on_failure - computed: true, optional: false, required: false
  public get adminTechOnFailure() {
    return this.getBooleanAttribute('admin_tech_on_failure');
  }

  // admin_tech_on_failure_variable - computed: true, optional: false, required: false
  public get adminTechOnFailureVariable() {
    return this.getStringAttribute('admin_tech_on_failure_variable');
  }

  // affinity_group_number - computed: true, optional: false, required: false
  public get affinityGroupNumber() {
    return this.getNumberAttribute('affinity_group_number');
  }

  // affinity_group_number_variable - computed: true, optional: false, required: false
  public get affinityGroupNumberVariable() {
    return this.getStringAttribute('affinity_group_number_variable');
  }

  // affinity_group_preferences - computed: true, optional: false, required: false
  public get affinityGroupPreferences() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('affinity_group_preferences')));
  }

  // affinity_group_preferences_variable - computed: true, optional: false, required: false
  public get affinityGroupPreferencesVariable() {
    return this.getStringAttribute('affinity_group_preferences_variable');
  }

  // affinity_per_vrfs - computed: true, optional: false, required: false
  private _affinityPerVrfs = new DataSdwanSystemBasicFeatureAffinityPerVrfsList(this, "affinity_per_vrfs", false);
  public get affinityPerVrfs() {
    return this._affinityPerVrfs;
  }

  // affinity_preference_auto - computed: true, optional: false, required: false
  public get affinityPreferenceAuto() {
    return this.getBooleanAttribute('affinity_preference_auto');
  }

  // affinity_preference_auto_variable - computed: true, optional: false, required: false
  public get affinityPreferenceAutoVariable() {
    return this.getStringAttribute('affinity_preference_auto_variable');
  }

  // config_description - computed: true, optional: false, required: false
  public get configDescription() {
    return this.getStringAttribute('config_description');
  }

  // config_description_variable - computed: true, optional: false, required: false
  public get configDescriptionVariable() {
    return this.getStringAttribute('config_description_variable');
  }

  // console_baud_rate - computed: true, optional: false, required: false
  public get consoleBaudRate() {
    return this.getStringAttribute('console_baud_rate');
  }

  // console_baud_rate_variable - computed: true, optional: false, required: false
  public get consoleBaudRateVariable() {
    return this.getStringAttribute('console_baud_rate_variable');
  }

  // control_session_pps - computed: true, optional: false, required: false
  public get controlSessionPps() {
    return this.getNumberAttribute('control_session_pps');
  }

  // control_session_pps_variable - computed: true, optional: false, required: false
  public get controlSessionPpsVariable() {
    return this.getStringAttribute('control_session_pps_variable');
  }

  // controller_groups - computed: true, optional: false, required: false
  public get controllerGroups() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('controller_groups')));
  }

  // controller_groups_variable - computed: true, optional: false, required: false
  public get controllerGroupsVariable() {
    return this.getStringAttribute('controller_groups_variable');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_groups - computed: true, optional: false, required: false
  public get deviceGroups() {
    return cdktf.Fn.tolist(this.getListAttribute('device_groups'));
  }

  // device_groups_variable - computed: true, optional: false, required: false
  public get deviceGroupsVariable() {
    return this.getStringAttribute('device_groups_variable');
  }

  // enhanced_app_aware_routing - computed: true, optional: false, required: false
  public get enhancedAppAwareRouting() {
    return this.getStringAttribute('enhanced_app_aware_routing');
  }

  // enhanced_app_aware_routing_variable - computed: true, optional: false, required: false
  public get enhancedAppAwareRoutingVariable() {
    return this.getStringAttribute('enhanced_app_aware_routing_variable');
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // gps_geo_fencing_enable - computed: true, optional: false, required: false
  public get gpsGeoFencingEnable() {
    return this.getBooleanAttribute('gps_geo_fencing_enable');
  }

  // gps_geo_fencing_range - computed: true, optional: false, required: false
  public get gpsGeoFencingRange() {
    return this.getNumberAttribute('gps_geo_fencing_range');
  }

  // gps_geo_fencing_range_variable - computed: true, optional: false, required: false
  public get gpsGeoFencingRangeVariable() {
    return this.getStringAttribute('gps_geo_fencing_range_variable');
  }

  // gps_latitude - computed: true, optional: false, required: false
  public get gpsLatitude() {
    return this.getNumberAttribute('gps_latitude');
  }

  // gps_latitude_variable - computed: true, optional: false, required: false
  public get gpsLatitudeVariable() {
    return this.getStringAttribute('gps_latitude_variable');
  }

  // gps_longitude - computed: true, optional: false, required: false
  public get gpsLongitude() {
    return this.getNumberAttribute('gps_longitude');
  }

  // gps_longitude_variable - computed: true, optional: false, required: false
  public get gpsLongitudeVariable() {
    return this.getStringAttribute('gps_longitude_variable');
  }

  // gps_sms_enable - computed: true, optional: false, required: false
  public get gpsSmsEnable() {
    return this.getBooleanAttribute('gps_sms_enable');
  }

  // gps_sms_mobile_numbers - computed: true, optional: false, required: false
  private _gpsSmsMobileNumbers = new DataSdwanSystemBasicFeatureGpsSmsMobileNumbersList(this, "gps_sms_mobile_numbers", false);
  public get gpsSmsMobileNumbers() {
    return this._gpsSmsMobileNumbers;
  }

  // id - computed: false, optional: false, required: true
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

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // idle_timeout_variable - computed: true, optional: false, required: false
  public get idleTimeoutVariable() {
    return this.getStringAttribute('idle_timeout_variable');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_variable - computed: true, optional: false, required: false
  public get locationVariable() {
    return this.getStringAttribute('location_variable');
  }

  // max_omp_sessions - computed: true, optional: false, required: false
  public get maxOmpSessions() {
    return this.getNumberAttribute('max_omp_sessions');
  }

  // max_omp_sessions_variable - computed: true, optional: false, required: false
  public get maxOmpSessionsVariable() {
    return this.getStringAttribute('max_omp_sessions_variable');
  }

  // multi_tenant - computed: true, optional: false, required: false
  public get multiTenant() {
    return this.getBooleanAttribute('multi_tenant');
  }

  // multi_tenant_variable - computed: true, optional: false, required: false
  public get multiTenantVariable() {
    return this.getStringAttribute('multi_tenant_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // on_demand_enable - computed: true, optional: false, required: false
  public get onDemandEnable() {
    return this.getBooleanAttribute('on_demand_enable');
  }

  // on_demand_enable_variable - computed: true, optional: false, required: false
  public get onDemandEnableVariable() {
    return this.getStringAttribute('on_demand_enable_variable');
  }

  // on_demand_idle_timeout - computed: true, optional: false, required: false
  public get onDemandIdleTimeout() {
    return this.getNumberAttribute('on_demand_idle_timeout');
  }

  // on_demand_idle_timeout_variable - computed: true, optional: false, required: false
  public get onDemandIdleTimeoutVariable() {
    return this.getStringAttribute('on_demand_idle_timeout_variable');
  }

  // overlay_id - computed: true, optional: false, required: false
  public get overlayId() {
    return this.getNumberAttribute('overlay_id');
  }

  // overlay_id_variable - computed: true, optional: false, required: false
  public get overlayIdVariable() {
    return this.getStringAttribute('overlay_id_variable');
  }

  // port_hopping - computed: true, optional: false, required: false
  public get portHopping() {
    return this.getBooleanAttribute('port_hopping');
  }

  // port_hopping_variable - computed: true, optional: false, required: false
  public get portHoppingVariable() {
    return this.getStringAttribute('port_hopping_variable');
  }

  // port_offset - computed: true, optional: false, required: false
  public get portOffset() {
    return this.getNumberAttribute('port_offset');
  }

  // port_offset_variable - computed: true, optional: false, required: false
  public get portOffsetVariable() {
    return this.getStringAttribute('port_offset_variable');
  }

  // site_types - computed: true, optional: false, required: false
  public get siteTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('site_types'));
  }

  // site_types_variable - computed: true, optional: false, required: false
  public get siteTypesVariable() {
    return this.getStringAttribute('site_types_variable');
  }

  // timezone - computed: true, optional: false, required: false
  public get timezone() {
    return this.getStringAttribute('timezone');
  }

  // timezone_variable - computed: true, optional: false, required: false
  public get timezoneVariable() {
    return this.getStringAttribute('timezone_variable');
  }

  // track_default_gateway - computed: true, optional: false, required: false
  public get trackDefaultGateway() {
    return this.getBooleanAttribute('track_default_gateway');
  }

  // track_default_gateway_variable - computed: true, optional: false, required: false
  public get trackDefaultGatewayVariable() {
    return this.getStringAttribute('track_default_gateway_variable');
  }

  // track_interface_tag - computed: true, optional: false, required: false
  public get trackInterfaceTag() {
    return this.getNumberAttribute('track_interface_tag');
  }

  // track_interface_tag_variable - computed: true, optional: false, required: false
  public get trackInterfaceTagVariable() {
    return this.getStringAttribute('track_interface_tag_variable');
  }

  // track_transport - computed: true, optional: false, required: false
  public get trackTransport() {
    return this.getBooleanAttribute('track_transport');
  }

  // track_transport_variable - computed: true, optional: false, required: false
  public get trackTransportVariable() {
    return this.getStringAttribute('track_transport_variable');
  }

  // transport_gateway - computed: true, optional: false, required: false
  public get transportGateway() {
    return this.getBooleanAttribute('transport_gateway');
  }

  // transport_gateway_variable - computed: true, optional: false, required: false
  public get transportGatewayVariable() {
    return this.getStringAttribute('transport_gateway_variable');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
