// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_system_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanCiscoSystemFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_system_feature_template#id DataSdwanCiscoSystemFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_system_feature_template#name DataSdwanCiscoSystemFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers {
}

export function dataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersToTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersToHclTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbers | undefined) {
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

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
}

export class DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersOutputReference {
    return new DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIds {
}

export function dataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsToTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsToHclTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // track_id - computed: true, optional: false, required: false
  public get trackId() {
    return this.getNumberAttribute('track_id');
  }

  // track_id_variable - computed: true, optional: false, required: false
  public get trackIdVariable() {
    return this.getStringAttribute('track_id_variable');
  }
}

export class DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsOutputReference {
    return new DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSystemFeatureTemplateObjectTrackers {
}

export function dataSdwanCiscoSystemFeatureTemplateObjectTrackersToTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateObjectTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSystemFeatureTemplateObjectTrackersToHclTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateObjectTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSystemFeatureTemplateObjectTrackersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSystemFeatureTemplateObjectTrackers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSystemFeatureTemplateObjectTrackers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getStringAttribute('boolean');
  }

  // boolean_variable - computed: true, optional: false, required: false
  public get booleanVariable() {
    return this.getStringAttribute('boolean_variable');
  }

  // group_tracks_ids - computed: true, optional: false, required: false
  private _groupTracksIds = new DataSdwanCiscoSystemFeatureTemplateObjectTrackersGroupTracksIdsList(this, "group_tracks_ids", false);
  public get groupTracksIds() {
    return this._groupTracksIds;
  }

  // interface - computed: true, optional: false, required: false
  public get interface() {
    return this.getStringAttribute('interface');
  }

  // interface_variable - computed: true, optional: false, required: false
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip_variable - computed: true, optional: false, required: false
  public get ipVariable() {
    return this.getStringAttribute('ip_variable');
  }

  // mask - computed: true, optional: false, required: false
  public get mask() {
    return this.getStringAttribute('mask');
  }

  // mask_variable - computed: true, optional: false, required: false
  public get maskVariable() {
    return this.getStringAttribute('mask_variable');
  }

  // object_number - computed: true, optional: false, required: false
  public get objectNumber() {
    return this.getNumberAttribute('object_number');
  }

  // object_number_variable - computed: true, optional: false, required: false
  public get objectNumberVariable() {
    return this.getStringAttribute('object_number_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // sig - computed: true, optional: false, required: false
  public get sig() {
    return this.getStringAttribute('sig');
  }

  // sig_variable - computed: true, optional: false, required: false
  public get sigVariable() {
    return this.getStringAttribute('sig_variable');
  }

  // vpn_id - computed: true, optional: false, required: false
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
}

export class DataSdwanCiscoSystemFeatureTemplateObjectTrackersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSystemFeatureTemplateObjectTrackersOutputReference {
    return new DataSdwanCiscoSystemFeatureTemplateObjectTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdwanCiscoSystemFeatureTemplateTrackers {
}

export function dataSdwanCiscoSystemFeatureTemplateTrackersToTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanCiscoSystemFeatureTemplateTrackersToHclTerraform(struct?: DataSdwanCiscoSystemFeatureTemplateTrackers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanCiscoSystemFeatureTemplateTrackersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanCiscoSystemFeatureTemplateTrackers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanCiscoSystemFeatureTemplateTrackers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // boolean - computed: true, optional: false, required: false
  public get boolean() {
    return this.getStringAttribute('boolean');
  }

  // boolean_variable - computed: true, optional: false, required: false
  public get booleanVariable() {
    return this.getStringAttribute('boolean_variable');
  }

  // elements - computed: true, optional: false, required: false
  public get elements() {
    return cdktf.Fn.tolist(this.getListAttribute('elements'));
  }

  // elements_variable - computed: true, optional: false, required: false
  public get elementsVariable() {
    return this.getStringAttribute('elements_variable');
  }

  // endpoint_api_url - computed: true, optional: false, required: false
  public get endpointApiUrl() {
    return this.getStringAttribute('endpoint_api_url');
  }

  // endpoint_api_url_variable - computed: true, optional: false, required: false
  public get endpointApiUrlVariable() {
    return this.getStringAttribute('endpoint_api_url_variable');
  }

  // endpoint_dns_name - computed: true, optional: false, required: false
  public get endpointDnsName() {
    return this.getStringAttribute('endpoint_dns_name');
  }

  // endpoint_dns_name_variable - computed: true, optional: false, required: false
  public get endpointDnsNameVariable() {
    return this.getStringAttribute('endpoint_dns_name_variable');
  }

  // endpoint_ip - computed: true, optional: false, required: false
  public get endpointIp() {
    return this.getStringAttribute('endpoint_ip');
  }

  // endpoint_ip_variable - computed: true, optional: false, required: false
  public get endpointIpVariable() {
    return this.getStringAttribute('endpoint_ip_variable');
  }

  // interval - computed: true, optional: false, required: false
  public get interval() {
    return this.getNumberAttribute('interval');
  }

  // interval_variable - computed: true, optional: false, required: false
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }

  // multiplier - computed: true, optional: false, required: false
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }

  // multiplier_variable - computed: true, optional: false, required: false
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_variable - computed: true, optional: false, required: false
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }

  // threshold_variable - computed: true, optional: false, required: false
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // type_variable - computed: true, optional: false, required: false
  public get typeVariable() {
    return this.getStringAttribute('type_variable');
  }
}

export class DataSdwanCiscoSystemFeatureTemplateTrackersList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanCiscoSystemFeatureTemplateTrackersOutputReference {
    return new DataSdwanCiscoSystemFeatureTemplateTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_system_feature_template sdwan_cisco_system_feature_template}
*/
export class DataSdwanCiscoSystemFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_system_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanCiscoSystemFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanCiscoSystemFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanCiscoSystemFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_system_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanCiscoSystemFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_system_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/cisco_system_feature_template sdwan_cisco_system_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanCiscoSystemFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanCiscoSystemFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_system_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
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

  // affinity_group_preference - computed: true, optional: false, required: false
  public get affinityGroupPreference() {
    return this.getNumberListAttribute('affinity_group_preference');
  }

  // affinity_group_preference_variable - computed: true, optional: false, required: false
  public get affinityGroupPreferenceVariable() {
    return this.getStringAttribute('affinity_group_preference_variable');
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

  // controller_group_list - computed: true, optional: false, required: false
  public get controllerGroupList() {
    return this.getNumberListAttribute('controller_group_list');
  }

  // controller_group_list_variable - computed: true, optional: false, required: false
  public get controllerGroupListVariable() {
    return this.getStringAttribute('controller_group_list_variable');
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

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }

  // enable_mrf_migration - computed: true, optional: false, required: false
  public get enableMrfMigration() {
    return this.getStringAttribute('enable_mrf_migration');
  }

  // enhanced_app_aware_routing - computed: true, optional: false, required: false
  public get enhancedAppAwareRouting() {
    return this.getStringAttribute('enhanced_app_aware_routing');
  }

  // enhanced_app_aware_routing_variable - computed: true, optional: false, required: false
  public get enhancedAppAwareRoutingVariable() {
    return this.getStringAttribute('enhanced_app_aware_routing_variable');
  }

  // geo_fencing - computed: true, optional: false, required: false
  public get geoFencing() {
    return this.getBooleanAttribute('geo_fencing');
  }

  // geo_fencing_range - computed: true, optional: false, required: false
  public get geoFencingRange() {
    return this.getNumberAttribute('geo_fencing_range');
  }

  // geo_fencing_range_variable - computed: true, optional: false, required: false
  public get geoFencingRangeVariable() {
    return this.getStringAttribute('geo_fencing_range_variable');
  }

  // geo_fencing_sms - computed: true, optional: false, required: false
  public get geoFencingSms() {
    return this.getBooleanAttribute('geo_fencing_sms');
  }

  // geo_fencing_sms_phone_numbers - computed: true, optional: false, required: false
  private _geoFencingSmsPhoneNumbers = new DataSdwanCiscoSystemFeatureTemplateGeoFencingSmsPhoneNumbersList(this, "geo_fencing_sms_phone_numbers", false);
  public get geoFencingSmsPhoneNumbers() {
    return this._geoFencingSmsPhoneNumbers;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // hostname_variable - computed: true, optional: false, required: false
  public get hostnameVariable() {
    return this.getStringAttribute('hostname_variable');
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

  // idle_timeout - computed: true, optional: false, required: false
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }

  // idle_timeout_variable - computed: true, optional: false, required: false
  public get idleTimeoutVariable() {
    return this.getStringAttribute('idle_timeout_variable');
  }

  // latitude - computed: true, optional: false, required: false
  public get latitude() {
    return this.getNumberAttribute('latitude');
  }

  // latitude_variable - computed: true, optional: false, required: false
  public get latitudeVariable() {
    return this.getStringAttribute('latitude_variable');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // location_variable - computed: true, optional: false, required: false
  public get locationVariable() {
    return this.getStringAttribute('location_variable');
  }

  // longitude - computed: true, optional: false, required: false
  public get longitude() {
    return this.getNumberAttribute('longitude');
  }

  // longitude_variable - computed: true, optional: false, required: false
  public get longitudeVariable() {
    return this.getStringAttribute('longitude_variable');
  }

  // max_omp_sessions - computed: true, optional: false, required: false
  public get maxOmpSessions() {
    return this.getNumberAttribute('max_omp_sessions');
  }

  // max_omp_sessions_variable - computed: true, optional: false, required: false
  public get maxOmpSessionsVariable() {
    return this.getStringAttribute('max_omp_sessions_variable');
  }

  // migration_bgp_community - computed: true, optional: false, required: false
  public get migrationBgpCommunity() {
    return this.getNumberAttribute('migration_bgp_community');
  }

  // multi_tenant - computed: true, optional: false, required: false
  public get multiTenant() {
    return this.getBooleanAttribute('multi_tenant');
  }

  // multi_tenant_variable - computed: true, optional: false, required: false
  public get multiTenantVariable() {
    return this.getStringAttribute('multi_tenant_variable');
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

  // object_trackers - computed: true, optional: false, required: false
  private _objectTrackers = new DataSdwanCiscoSystemFeatureTemplateObjectTrackersList(this, "object_trackers", false);
  public get objectTrackers() {
    return this._objectTrackers;
  }

  // on_demand_tunnel - computed: true, optional: false, required: false
  public get onDemandTunnel() {
    return this.getBooleanAttribute('on_demand_tunnel');
  }

  // on_demand_tunnel_idle_timeout - computed: true, optional: false, required: false
  public get onDemandTunnelIdleTimeout() {
    return this.getNumberAttribute('on_demand_tunnel_idle_timeout');
  }

  // on_demand_tunnel_idle_timeout_variable - computed: true, optional: false, required: false
  public get onDemandTunnelIdleTimeoutVariable() {
    return this.getStringAttribute('on_demand_tunnel_idle_timeout_variable');
  }

  // on_demand_tunnel_variable - computed: true, optional: false, required: false
  public get onDemandTunnelVariable() {
    return this.getStringAttribute('on_demand_tunnel_variable');
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

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }

  // region_id_variable - computed: true, optional: false, required: false
  public get regionIdVariable() {
    return this.getStringAttribute('region_id_variable');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // role_variable - computed: true, optional: false, required: false
  public get roleVariable() {
    return this.getStringAttribute('role_variable');
  }

  // secondary_region_id - computed: true, optional: false, required: false
  public get secondaryRegionId() {
    return this.getNumberAttribute('secondary_region_id');
  }

  // secondary_region_id_variable - computed: true, optional: false, required: false
  public get secondaryRegionIdVariable() {
    return this.getStringAttribute('secondary_region_id_variable');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getNumberAttribute('site_id');
  }

  // site_id_variable - computed: true, optional: false, required: false
  public get siteIdVariable() {
    return this.getStringAttribute('site_id_variable');
  }

  // system_description - computed: true, optional: false, required: false
  public get systemDescription() {
    return this.getStringAttribute('system_description');
  }

  // system_description_variable - computed: true, optional: false, required: false
  public get systemDescriptionVariable() {
    return this.getStringAttribute('system_description_variable');
  }

  // system_ip - computed: true, optional: false, required: false
  public get systemIp() {
    return this.getStringAttribute('system_ip');
  }

  // system_ip_variable - computed: true, optional: false, required: false
  public get systemIpVariable() {
    return this.getStringAttribute('system_ip_variable');
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
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

  // trackers - computed: true, optional: false, required: false
  private _trackers = new DataSdwanCiscoSystemFeatureTemplateTrackersList(this, "trackers", false);
  public get trackers() {
    return this._trackers;
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
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
