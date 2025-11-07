// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudGuardDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#compartment_id CloudGuardDataSource#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}
  */
  readonly dataSourceFeedProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#defined_tags CloudGuardDataSource#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#display_name CloudGuardDataSource#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#freeform_tags CloudGuardDataSource#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#id CloudGuardDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#status CloudGuardDataSource#status}
  */
  readonly status?: string;
  /**
  * data_source_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#data_source_details CloudGuardDataSource#data_source_details}
  */
  readonly dataSourceDetails?: CloudGuardDataSourceDataSourceDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#timeouts CloudGuardDataSource#timeouts}
  */
  readonly timeouts?: CloudGuardDataSourceTimeouts;
}
export interface CloudGuardDataSourceDataSourceDetectorMappingInfo {
}

export function cloudGuardDataSourceDataSourceDetectorMappingInfoToTerraform(struct?: CloudGuardDataSourceDataSourceDetectorMappingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDataSourceDataSourceDetectorMappingInfoToHclTerraform(struct?: CloudGuardDataSourceDataSourceDetectorMappingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDataSourceDataSourceDetectorMappingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDataSourceDataSourceDetectorMappingInfo | undefined) {
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

export class CloudGuardDataSourceDataSourceDetectorMappingInfoList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference {
    return new CloudGuardDataSourceDataSourceDetectorMappingInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDataSourceRegionStatusDetail {
}

export function cloudGuardDataSourceRegionStatusDetailToTerraform(struct?: CloudGuardDataSourceRegionStatusDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudGuardDataSourceRegionStatusDetailToHclTerraform(struct?: CloudGuardDataSourceRegionStatusDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudGuardDataSourceRegionStatusDetailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDataSourceRegionStatusDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDataSourceRegionStatusDetail | undefined) {
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

export class CloudGuardDataSourceRegionStatusDetailList extends cdktf.ComplexList {

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
  public get(index: number): CloudGuardDataSourceRegionStatusDetailOutputReference {
    return new CloudGuardDataSourceRegionStatusDetailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#key_entities_count CloudGuardDataSource#key_entities_count}
  */
  readonly keyEntitiesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}
  */
  readonly loggingQueryType: string;
}

export function cloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsToTerraform(struct?: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference | CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_entities_count: cdktf.numberToTerraform(struct!.keyEntitiesCount),
    logging_query_type: cdktf.stringToTerraform(struct!.loggingQueryType),
  }
}


export function cloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsToHclTerraform(struct?: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference | CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_entities_count: {
      value: cdktf.numberToHclTerraform(struct!.keyEntitiesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_query_type: {
      value: cdktf.stringToHclTerraform(struct!.loggingQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyEntitiesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEntitiesCount = this._keyEntitiesCount;
    }
    if (this._loggingQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingQueryType = this._loggingQueryType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyEntitiesCount = undefined;
      this._loggingQueryType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyEntitiesCount = value.keyEntitiesCount;
      this._loggingQueryType = value.loggingQueryType;
    }
  }

  // key_entities_count - computed: true, optional: true, required: false
  private _keyEntitiesCount?: number; 
  public get keyEntitiesCount() {
    return this.getNumberAttribute('key_entities_count');
  }
  public set keyEntitiesCount(value: number) {
    this._keyEntitiesCount = value;
  }
  public resetKeyEntitiesCount() {
    this._keyEntitiesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEntitiesCountInput() {
    return this._keyEntitiesCount;
  }

  // logging_query_type - computed: false, optional: false, required: true
  private _loggingQueryType?: string; 
  public get loggingQueryType() {
    return this.getStringAttribute('logging_query_type');
  }
  public set loggingQueryType(value: string) {
    this._loggingQueryType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingQueryTypeInput() {
    return this._loggingQueryType;
  }
}
export interface CloudGuardDataSourceDataSourceDetailsQueryStartTime {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}
  */
  readonly queryStartTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#start_policy_type CloudGuardDataSource#start_policy_type}
  */
  readonly startPolicyType: string;
}

export function cloudGuardDataSourceDataSourceDetailsQueryStartTimeToTerraform(struct?: CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference | CloudGuardDataSourceDataSourceDetailsQueryStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query_start_time: cdktf.stringToTerraform(struct!.queryStartTime),
    start_policy_type: cdktf.stringToTerraform(struct!.startPolicyType),
  }
}


export function cloudGuardDataSourceDataSourceDetailsQueryStartTimeToHclTerraform(struct?: CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference | CloudGuardDataSourceDataSourceDetailsQueryStartTime): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query_start_time: {
      value: cdktf.stringToHclTerraform(struct!.queryStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_policy_type: {
      value: cdktf.stringToHclTerraform(struct!.startPolicyType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGuardDataSourceDataSourceDetailsQueryStartTime | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queryStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStartTime = this._queryStartTime;
    }
    if (this._startPolicyType !== undefined) {
      hasAnyValues = true;
      internalValueResult.startPolicyType = this._startPolicyType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDataSourceDataSourceDetailsQueryStartTime | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._queryStartTime = undefined;
      this._startPolicyType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._queryStartTime = value.queryStartTime;
      this._startPolicyType = value.startPolicyType;
    }
  }

  // query_start_time - computed: true, optional: true, required: false
  private _queryStartTime?: string; 
  public get queryStartTime() {
    return this.getStringAttribute('query_start_time');
  }
  public set queryStartTime(value: string) {
    this._queryStartTime = value;
  }
  public resetQueryStartTime() {
    this._queryStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStartTimeInput() {
    return this._queryStartTime;
  }

  // start_policy_type - computed: false, optional: false, required: true
  private _startPolicyType?: string; 
  public get startPolicyType() {
    return this.getStringAttribute('start_policy_type');
  }
  public set startPolicyType(value: string) {
    this._startPolicyType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startPolicyTypeInput() {
    return this._startPolicyType;
  }
}
export interface CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#region CloudGuardDataSource#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#resource_ids CloudGuardDataSource#resource_ids}
  */
  readonly resourceIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#resource_type CloudGuardDataSource#resource_type}
  */
  readonly resourceType?: string;
}

export function cloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsToTerraform(struct?: CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region: cdktf.stringToTerraform(struct!.region),
    resource_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.resourceIds),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function cloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsToHclTerraform(struct?: CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.resourceIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._resourceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceIds = this._resourceIds;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._region = undefined;
      this._resourceIds = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._region = value.region;
      this._resourceIds = value.resourceIds;
      this._resourceType = value.resourceType;
    }
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // resource_ids - computed: true, optional: true, required: false
  private _resourceIds?: string[]; 
  public get resourceIds() {
    return this.getListAttribute('resource_ids');
  }
  public set resourceIds(value: string[]) {
    this._resourceIds = value;
  }
  public resetResourceIds() {
    this._resourceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdsInput() {
    return this._resourceIds;
  }

  // resource_type - computed: true, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList extends cdktf.ComplexList {
  public internalValue? : CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails[] | cdktf.IResolvable

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
  public get(index: number): CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference {
    return new CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudGuardDataSourceDataSourceDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#additional_entities_count CloudGuardDataSource#additional_entities_count}
  */
  readonly additionalEntitiesCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#data_source_feed_provider CloudGuardDataSource#data_source_feed_provider}
  */
  readonly dataSourceFeedProvider: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#description CloudGuardDataSource#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#interval_in_minutes CloudGuardDataSource#interval_in_minutes}
  */
  readonly intervalInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#interval_in_seconds CloudGuardDataSource#interval_in_seconds}
  */
  readonly intervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#logging_query_type CloudGuardDataSource#logging_query_type}
  */
  readonly loggingQueryType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#operator CloudGuardDataSource#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#query CloudGuardDataSource#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#regions CloudGuardDataSource#regions}
  */
  readonly regions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#threshold CloudGuardDataSource#threshold}
  */
  readonly threshold?: number;
  /**
  * logging_query_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#logging_query_details CloudGuardDataSource#logging_query_details}
  */
  readonly loggingQueryDetails?: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails;
  /**
  * query_start_time block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#query_start_time CloudGuardDataSource#query_start_time}
  */
  readonly queryStartTime?: CloudGuardDataSourceDataSourceDetailsQueryStartTime;
  /**
  * scheduled_query_scope_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#scheduled_query_scope_details CloudGuardDataSource#scheduled_query_scope_details}
  */
  readonly scheduledQueryScopeDetails?: CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails[] | cdktf.IResolvable;
}

export function cloudGuardDataSourceDataSourceDetailsToTerraform(struct?: CloudGuardDataSourceDataSourceDetailsOutputReference | CloudGuardDataSourceDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_entities_count: cdktf.numberToTerraform(struct!.additionalEntitiesCount),
    data_source_feed_provider: cdktf.stringToTerraform(struct!.dataSourceFeedProvider),
    description: cdktf.stringToTerraform(struct!.description),
    interval_in_minutes: cdktf.numberToTerraform(struct!.intervalInMinutes),
    interval_in_seconds: cdktf.numberToTerraform(struct!.intervalInSeconds),
    logging_query_type: cdktf.stringToTerraform(struct!.loggingQueryType),
    operator: cdktf.stringToTerraform(struct!.operator),
    query: cdktf.stringToTerraform(struct!.query),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    logging_query_details: cloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsToTerraform(struct!.loggingQueryDetails),
    query_start_time: cloudGuardDataSourceDataSourceDetailsQueryStartTimeToTerraform(struct!.queryStartTime),
    scheduled_query_scope_details: cdktf.listMapper(cloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsToTerraform, true)(struct!.scheduledQueryScopeDetails),
  }
}


export function cloudGuardDataSourceDataSourceDetailsToHclTerraform(struct?: CloudGuardDataSourceDataSourceDetailsOutputReference | CloudGuardDataSourceDataSourceDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_entities_count: {
      value: cdktf.numberToHclTerraform(struct!.additionalEntitiesCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_source_feed_provider: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceFeedProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.intervalInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.intervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_query_type: {
      value: cdktf.stringToHclTerraform(struct!.loggingQueryType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logging_query_details: {
      value: cloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsToHclTerraform(struct!.loggingQueryDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsList",
    },
    query_start_time: {
      value: cloudGuardDataSourceDataSourceDetailsQueryStartTimeToHclTerraform(struct!.queryStartTime),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDataSourceDataSourceDetailsQueryStartTimeList",
    },
    scheduled_query_scope_details: {
      value: cdktf.listMapperHcl(cloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsToHclTerraform, true)(struct!.scheduledQueryScopeDetails),
      isBlock: true,
      type: "list",
      storageClassType: "CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDataSourceDataSourceDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudGuardDataSourceDataSourceDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalEntitiesCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalEntitiesCount = this._additionalEntitiesCount;
    }
    if (this._dataSourceFeedProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceFeedProvider = this._dataSourceFeedProvider;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._intervalInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInMinutes = this._intervalInMinutes;
    }
    if (this._intervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalInSeconds = this._intervalInSeconds;
    }
    if (this._loggingQueryType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingQueryType = this._loggingQueryType;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._loggingQueryDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingQueryDetails = this._loggingQueryDetails?.internalValue;
    }
    if (this._queryStartTime?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryStartTime = this._queryStartTime?.internalValue;
    }
    if (this._scheduledQueryScopeDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledQueryScopeDetails = this._scheduledQueryScopeDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDataSourceDataSourceDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalEntitiesCount = undefined;
      this._dataSourceFeedProvider = undefined;
      this._description = undefined;
      this._intervalInMinutes = undefined;
      this._intervalInSeconds = undefined;
      this._loggingQueryType = undefined;
      this._operator = undefined;
      this._query = undefined;
      this._regions = undefined;
      this._threshold = undefined;
      this._loggingQueryDetails.internalValue = undefined;
      this._queryStartTime.internalValue = undefined;
      this._scheduledQueryScopeDetails.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalEntitiesCount = value.additionalEntitiesCount;
      this._dataSourceFeedProvider = value.dataSourceFeedProvider;
      this._description = value.description;
      this._intervalInMinutes = value.intervalInMinutes;
      this._intervalInSeconds = value.intervalInSeconds;
      this._loggingQueryType = value.loggingQueryType;
      this._operator = value.operator;
      this._query = value.query;
      this._regions = value.regions;
      this._threshold = value.threshold;
      this._loggingQueryDetails.internalValue = value.loggingQueryDetails;
      this._queryStartTime.internalValue = value.queryStartTime;
      this._scheduledQueryScopeDetails.internalValue = value.scheduledQueryScopeDetails;
    }
  }

  // additional_entities_count - computed: true, optional: true, required: false
  private _additionalEntitiesCount?: number; 
  public get additionalEntitiesCount() {
    return this.getNumberAttribute('additional_entities_count');
  }
  public set additionalEntitiesCount(value: number) {
    this._additionalEntitiesCount = value;
  }
  public resetAdditionalEntitiesCount() {
    this._additionalEntitiesCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalEntitiesCountInput() {
    return this._additionalEntitiesCount;
  }

  // data_source_feed_provider - computed: false, optional: false, required: true
  private _dataSourceFeedProvider?: string; 
  public get dataSourceFeedProvider() {
    return this.getStringAttribute('data_source_feed_provider');
  }
  public set dataSourceFeedProvider(value: string) {
    this._dataSourceFeedProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFeedProviderInput() {
    return this._dataSourceFeedProvider;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // interval_in_minutes - computed: true, optional: true, required: false
  private _intervalInMinutes?: number; 
  public get intervalInMinutes() {
    return this.getNumberAttribute('interval_in_minutes');
  }
  public set intervalInMinutes(value: number) {
    this._intervalInMinutes = value;
  }
  public resetIntervalInMinutes() {
    this._intervalInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInMinutesInput() {
    return this._intervalInMinutes;
  }

  // interval_in_seconds - computed: true, optional: true, required: false
  private _intervalInSeconds?: number; 
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }
  public set intervalInSeconds(value: number) {
    this._intervalInSeconds = value;
  }
  public resetIntervalInSeconds() {
    this._intervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInSecondsInput() {
    return this._intervalInSeconds;
  }

  // logging_query_type - computed: true, optional: true, required: false
  private _loggingQueryType?: string; 
  public get loggingQueryType() {
    return this.getStringAttribute('logging_query_type');
  }
  public set loggingQueryType(value: string) {
    this._loggingQueryType = value;
  }
  public resetLoggingQueryType() {
    this._loggingQueryType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingQueryTypeInput() {
    return this._loggingQueryType;
  }

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // query - computed: true, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // regions - computed: true, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // threshold - computed: true, optional: true, required: false
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

  // logging_query_details - computed: false, optional: true, required: false
  private _loggingQueryDetails = new CloudGuardDataSourceDataSourceDetailsLoggingQueryDetailsOutputReference(this, "logging_query_details");
  public get loggingQueryDetails() {
    return this._loggingQueryDetails;
  }
  public putLoggingQueryDetails(value: CloudGuardDataSourceDataSourceDetailsLoggingQueryDetails) {
    this._loggingQueryDetails.internalValue = value;
  }
  public resetLoggingQueryDetails() {
    this._loggingQueryDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingQueryDetailsInput() {
    return this._loggingQueryDetails.internalValue;
  }

  // query_start_time - computed: false, optional: true, required: false
  private _queryStartTime = new CloudGuardDataSourceDataSourceDetailsQueryStartTimeOutputReference(this, "query_start_time");
  public get queryStartTime() {
    return this._queryStartTime;
  }
  public putQueryStartTime(value: CloudGuardDataSourceDataSourceDetailsQueryStartTime) {
    this._queryStartTime.internalValue = value;
  }
  public resetQueryStartTime() {
    this._queryStartTime.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryStartTimeInput() {
    return this._queryStartTime.internalValue;
  }

  // scheduled_query_scope_details - computed: false, optional: true, required: false
  private _scheduledQueryScopeDetails = new CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetailsList(this, "scheduled_query_scope_details", false);
  public get scheduledQueryScopeDetails() {
    return this._scheduledQueryScopeDetails;
  }
  public putScheduledQueryScopeDetails(value: CloudGuardDataSourceDataSourceDetailsScheduledQueryScopeDetails[] | cdktf.IResolvable) {
    this._scheduledQueryScopeDetails.internalValue = value;
  }
  public resetScheduledQueryScopeDetails() {
    this._scheduledQueryScopeDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledQueryScopeDetailsInput() {
    return this._scheduledQueryScopeDetails.internalValue;
  }
}
export interface CloudGuardDataSourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#create CloudGuardDataSource#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#delete CloudGuardDataSource#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#update CloudGuardDataSource#update}
  */
  readonly update?: string;
}

export function cloudGuardDataSourceTimeoutsToTerraform(struct?: CloudGuardDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudGuardDataSourceTimeoutsToHclTerraform(struct?: CloudGuardDataSourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudGuardDataSourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudGuardDataSourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudGuardDataSourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source oci_cloud_guard_data_source}
*/
export class CloudGuardDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_cloud_guard_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudGuardDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudGuardDataSource to import
  * @param importFromId The id of the existing CloudGuardDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudGuardDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_cloud_guard_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/cloud_guard_data_source oci_cloud_guard_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudGuardDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudGuardDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_cloud_guard_data_source',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._dataSourceFeedProvider = config.dataSourceFeedProvider;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._status = config.status;
    this._dataSourceDetails.internalValue = config.dataSourceDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // data_source_detector_mapping_info - computed: true, optional: false, required: false
  private _dataSourceDetectorMappingInfo = new CloudGuardDataSourceDataSourceDetectorMappingInfoList(this, "data_source_detector_mapping_info", false);
  public get dataSourceDetectorMappingInfo() {
    return this._dataSourceDetectorMappingInfo;
  }

  // data_source_feed_provider - computed: false, optional: false, required: true
  private _dataSourceFeedProvider?: string; 
  public get dataSourceFeedProvider() {
    return this.getStringAttribute('data_source_feed_provider');
  }
  public set dataSourceFeedProvider(value: string) {
    this._dataSourceFeedProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceFeedProviderInput() {
    return this._dataSourceFeedProvider;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // region_status_detail - computed: true, optional: false, required: false
  private _regionStatusDetail = new CloudGuardDataSourceRegionStatusDetailList(this, "region_status_detail", false);
  public get regionStatusDetail() {
    return this._regionStatusDetail;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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

  // data_source_details - computed: false, optional: true, required: false
  private _dataSourceDetails = new CloudGuardDataSourceDataSourceDetailsOutputReference(this, "data_source_details");
  public get dataSourceDetails() {
    return this._dataSourceDetails;
  }
  public putDataSourceDetails(value: CloudGuardDataSourceDataSourceDetails) {
    this._dataSourceDetails.internalValue = value;
  }
  public resetDataSourceDetails() {
    this._dataSourceDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceDetailsInput() {
    return this._dataSourceDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudGuardDataSourceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudGuardDataSourceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      data_source_feed_provider: cdktf.stringToTerraform(this._dataSourceFeedProvider),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      status: cdktf.stringToTerraform(this._status),
      data_source_details: cloudGuardDataSourceDataSourceDetailsToTerraform(this._dataSourceDetails.internalValue),
      timeouts: cloudGuardDataSourceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_feed_provider: {
        value: cdktf.stringToHclTerraform(this._dataSourceFeedProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_source_details: {
        value: cloudGuardDataSourceDataSourceDetailsToHclTerraform(this._dataSourceDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudGuardDataSourceDataSourceDetailsList",
      },
      timeouts: {
        value: cloudGuardDataSourceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudGuardDataSourceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
