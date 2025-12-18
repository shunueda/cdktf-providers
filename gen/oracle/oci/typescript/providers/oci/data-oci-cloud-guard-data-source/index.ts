// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciCloudGuardDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_data_source#data_source_id DataOciCloudGuardDataSource#data_source_id}
  */
  readonly dataSourceId: string;
}
export interface DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails {
}

export function dataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsToTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsToHclTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_entities_count - computed: true, optional: false, required: false
  public get keyEntitiesCount() {
    return this.getNumberAttribute('key_entities_count');
  }

  // logging_query_type - computed: true, optional: false, required: false
  public get loggingQueryType() {
    return this.getStringAttribute('logging_query_type');
  }
}

export class DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference {
    return new DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime {
}

export function dataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeToTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeToHclTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // query_start_time - computed: true, optional: false, required: false
  public get queryStartTime() {
    return this.getStringAttribute('query_start_time');
  }

  // start_policy_type - computed: true, optional: false, required: false
  public get startPolicyType() {
    return this.getStringAttribute('start_policy_type');
  }
}

export class DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference {
    return new DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails {
}

export function dataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsToTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsToHclTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // resource_ids - computed: true, optional: false, required: false
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference {
    return new DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDataSourceDataSourceDetails {
}

export function dataOciCloudGuardDataSourceDataSourceDetailsToTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDataSourceDataSourceDetailsToHclTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDataSourceDataSourceDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDataSourceDataSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDataSourceDataSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_entities_count - computed: true, optional: false, required: false
  public get additionalEntitiesCount() {
    return this.getNumberAttribute('additional_entities_count');
  }

  // data_source_feed_provider - computed: true, optional: false, required: false
  public get dataSourceFeedProvider() {
    return this.getStringAttribute('data_source_feed_provider');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // interval_in_minutes - computed: true, optional: false, required: false
  public get intervalInMinutes() {
    return this.getNumberAttribute('interval_in_minutes');
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // logging_query_details - computed: true, optional: false, required: false
  private _loggingQueryDetails = new DataOciCloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList(this, "logging_query_details", false);
  public get loggingQueryDetails() {
    return this._loggingQueryDetails;
  }

  // logging_query_type - computed: true, optional: false, required: false
  public get loggingQueryType() {
    return this.getStringAttribute('logging_query_type');
  }

  // operator - computed: true, optional: false, required: false
  public get operator() {
    return this.getStringAttribute('operator');
  }

  // query - computed: true, optional: false, required: false
  public get query() {
    return this.getStringAttribute('query');
  }

  // query_start_time - computed: true, optional: false, required: false
  private _queryStartTime = new DataOciCloudGuardDataSourceDataSourceDetailsQueryStartTimeList(this, "query_start_time", false);
  public get queryStartTime() {
    return this._queryStartTime;
  }

  // regions - computed: true, optional: false, required: false
  public get regions() {
    return this.getListAttribute('regions');
  }

  // scheduled_query_scope_details - computed: true, optional: false, required: false
  private _scheduledQueryScopeDetails = new DataOciCloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList(this, "scheduled_query_scope_details", false);
  public get scheduledQueryScopeDetails() {
    return this._scheduledQueryScopeDetails;
  }

  // threshold - computed: true, optional: false, required: false
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
}

export class DataOciCloudGuardDataSourceDataSourceDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDataSourceDataSourceDetailsOutputReference {
    return new DataOciCloudGuardDataSourceDataSourceDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo {
}

export function dataOciCloudGuardDataSourceDataSourceDetectorMappingInfoToTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDataSourceDataSourceDetectorMappingInfoToHclTerraform(struct?: DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDataSourceDataSourceDetectorMappingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // detector_recipe_id - computed: true, optional: false, required: false
  public get detectorRecipeId() {
    return this.getStringAttribute('detector_recipe_id');
  }

  // detector_rule_id - computed: true, optional: false, required: false
  public get detectorRuleId() {
    return this.getStringAttribute('detector_rule_id');
  }
}

export class DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference {
    return new DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciCloudGuardDataSourceRegionStatusDetail {
}

export function dataOciCloudGuardDataSourceRegionStatusDetailToTerraform(struct?: DataOciCloudGuardDataSourceRegionStatusDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciCloudGuardDataSourceRegionStatusDetailToHclTerraform(struct?: DataOciCloudGuardDataSourceRegionStatusDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciCloudGuardDataSourceRegionStatusDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciCloudGuardDataSourceRegionStatusDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciCloudGuardDataSourceRegionStatusDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }
}

export class DataOciCloudGuardDataSourceRegionStatusDetailList extends cdktf.ComplexList {

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
  public get(index: number): DataOciCloudGuardDataSourceRegionStatusDetailOutputReference {
    return new DataOciCloudGuardDataSourceRegionStatusDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_data_source oci_cloud_guard_data_source}
*/
export class DataOciCloudGuardDataSource extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciCloudGuardDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciCloudGuardDataSource to import
  * @param importFromId The id of the existing DataOciCloudGuardDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciCloudGuardDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/cloud_guard_data_source oci_cloud_guard_data_source} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciCloudGuardDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciCloudGuardDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_data_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataSourceId = config.dataSourceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // data_source_details - computed: true, optional: false, required: false
  private _dataSourceDetails = new DataOciCloudGuardDataSourceDataSourceDetailsList(this, "data_source_details", false);
  public get dataSourceDetails() {
    return this._dataSourceDetails;
  }

  // data_source_detector_mapping_info - computed: true, optional: false, required: false
  private _dataSourceDetectorMappingInfo = new DataOciCloudGuardDataSourceDataSourceDetectorMappingInfoList(this, "data_source_detector_mapping_info", false);
  public get dataSourceDetectorMappingInfo() {
    return this._dataSourceDetectorMappingInfo;
  }

  // data_source_feed_provider - computed: true, optional: false, required: false
  public get dataSourceFeedProvider() {
    return this.getStringAttribute('data_source_feed_provider');
  }

  // data_source_id - computed: false, optional: false, required: true
  private _dataSourceId?: string; 
  public get dataSourceId() {
    return this.getStringAttribute('data_source_id');
  }
  public set dataSourceId(value: string) {
    this._dataSourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceIdInput() {
    return this._dataSourceId;
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // region_status_detail - computed: true, optional: false, required: false
  private _regionStatusDetail = new DataOciCloudGuardDataSourceRegionStatusDetailList(this, "region_status_detail", false);
  public get regionStatusDetail() {
    return this._regionStatusDetail;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_source_id: cdktf.stringToTerraform(this._dataSourceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_source_id: {
        value: cdktf.stringToHclTerraform(this._dataSourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
