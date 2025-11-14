// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/stack_monitoring_metric_extension
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMetricExtensionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/stack_monitoring_metric_extension#metric_extension_id DataOciStackMonitoringMetricExtension#metric_extension_id}
  */
  readonly metricExtensionId: string;
}
export interface DataOciStackMonitoringMetricExtensionEnabledOnResources {
}

export function dataOciStackMonitoringMetricExtensionEnabledOnResourcesToTerraform(struct?: DataOciStackMonitoringMetricExtensionEnabledOnResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMetricExtensionEnabledOnResourcesToHclTerraform(struct?: DataOciStackMonitoringMetricExtensionEnabledOnResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMetricExtensionEnabledOnResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMetricExtensionEnabledOnResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
}

export class DataOciStackMonitoringMetricExtensionEnabledOnResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference {
    return new DataOciStackMonitoringMetricExtensionEnabledOnResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMetricExtensionMetricListStruct {
}

export function dataOciStackMonitoringMetricExtensionMetricListStructToTerraform(struct?: DataOciStackMonitoringMetricExtensionMetricListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMetricExtensionMetricListStructToHclTerraform(struct?: DataOciStackMonitoringMetricExtensionMetricListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMetricExtensionMetricListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMetricExtensionMetricListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMetricExtensionMetricListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_expression - computed: true, optional: false, required: false
  public get computeExpression() {
    return this.getStringAttribute('compute_expression');
  }

  // data_type - computed: true, optional: false, required: false
  public get dataType() {
    return this.getStringAttribute('data_type');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // is_dimension - computed: true, optional: false, required: false
  public get isDimension() {
    return this.getBooleanAttribute('is_dimension');
  }

  // is_hidden - computed: true, optional: false, required: false
  public get isHidden() {
    return this.getBooleanAttribute('is_hidden');
  }

  // metric_category - computed: true, optional: false, required: false
  public get metricCategory() {
    return this.getStringAttribute('metric_category');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // unit - computed: true, optional: false, required: false
  public get unit() {
    return this.getStringAttribute('unit');
  }
}

export class DataOciStackMonitoringMetricExtensionMetricListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMetricExtensionMetricListStructOutputReference {
    return new DataOciStackMonitoringMetricExtensionMetricListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails {
}

export function dataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsToTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsToHclTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // in_param_position - computed: true, optional: false, required: false
  public get inParamPosition() {
    return this.getNumberAttribute('in_param_position');
  }

  // in_param_value - computed: true, optional: false, required: false
  public get inParamValue() {
    return this.getStringAttribute('in_param_value');
  }
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference {
    return new DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails {
}

export function dataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsToTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsToHclTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // out_param_name - computed: true, optional: false, required: false
  public get outParamName() {
    return this.getStringAttribute('out_param_name');
  }

  // out_param_position - computed: true, optional: false, required: false
  public get outParamPosition() {
    return this.getNumberAttribute('out_param_position');
  }

  // out_param_type - computed: true, optional: false, required: false
  public get outParamType() {
    return this.getStringAttribute('out_param_type');
  }
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference {
    return new DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails {
}

export function dataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsToTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsToHclTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference {
    return new DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails {
}

export function dataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsToTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsToHclTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // script_file_name - computed: true, optional: false, required: false
  public get scriptFileName() {
    return this.getStringAttribute('script_file_name');
  }
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference {
    return new DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMetricExtensionQueryProperties {
}

export function dataOciStackMonitoringMetricExtensionQueryPropertiesToTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMetricExtensionQueryPropertiesToHclTerraform(struct?: DataOciStackMonitoringMetricExtensionQueryProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMetricExtensionQueryProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMetricExtensionQueryProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // arguments - computed: true, optional: false, required: false
  public get arguments() {
    return this.getStringAttribute('arguments');
  }

  // auto_row_prefix - computed: true, optional: false, required: false
  public get autoRowPrefix() {
    return this.getStringAttribute('auto_row_prefix');
  }

  // collection_method - computed: true, optional: false, required: false
  public get collectionMethod() {
    return this.getStringAttribute('collection_method');
  }

  // command - computed: true, optional: false, required: false
  public get command() {
    return this.getStringAttribute('command');
  }

  // delimiter - computed: true, optional: false, required: false
  public get delimiter() {
    return this.getStringAttribute('delimiter');
  }

  // identity_metric - computed: true, optional: false, required: false
  public get identityMetric() {
    return this.getStringAttribute('identity_metric');
  }

  // in_param_details - computed: true, optional: false, required: false
  private _inParamDetails = new DataOciStackMonitoringMetricExtensionQueryPropertiesInParamDetailsList(this, "in_param_details", false);
  public get inParamDetails() {
    return this._inParamDetails;
  }

  // is_metric_service_enabled - computed: true, optional: false, required: false
  public get isMetricServiceEnabled() {
    return this.getBooleanAttribute('is_metric_service_enabled');
  }

  // jmx_attributes - computed: true, optional: false, required: false
  public get jmxAttributes() {
    return this.getStringAttribute('jmx_attributes');
  }

  // managed_bean_query - computed: true, optional: false, required: false
  public get managedBeanQuery() {
    return this.getStringAttribute('managed_bean_query');
  }

  // out_param_details - computed: true, optional: false, required: false
  private _outParamDetails = new DataOciStackMonitoringMetricExtensionQueryPropertiesOutParamDetailsList(this, "out_param_details", false);
  public get outParamDetails() {
    return this._outParamDetails;
  }

  // protocol_type - computed: true, optional: false, required: false
  public get protocolType() {
    return this.getStringAttribute('protocol_type');
  }

  // response_content_type - computed: true, optional: false, required: false
  public get responseContentType() {
    return this.getStringAttribute('response_content_type');
  }

  // script_details - computed: true, optional: false, required: false
  private _scriptDetails = new DataOciStackMonitoringMetricExtensionQueryPropertiesScriptDetailsList(this, "script_details", false);
  public get scriptDetails() {
    return this._scriptDetails;
  }

  // sql_details - computed: true, optional: false, required: false
  private _sqlDetails = new DataOciStackMonitoringMetricExtensionQueryPropertiesSqlDetailsList(this, "sql_details", false);
  public get sqlDetails() {
    return this._sqlDetails;
  }

  // sql_type - computed: true, optional: false, required: false
  public get sqlType() {
    return this.getStringAttribute('sql_type');
  }

  // starts_with - computed: true, optional: false, required: false
  public get startsWith() {
    return this.getStringAttribute('starts_with');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciStackMonitoringMetricExtensionQueryPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference {
    return new DataOciStackMonitoringMetricExtensionQueryPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension}
*/
export class DataOciStackMonitoringMetricExtension extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_metric_extension";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMetricExtension resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMetricExtension to import
  * @param importFromId The id of the existing DataOciStackMonitoringMetricExtension that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/stack_monitoring_metric_extension#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMetricExtension to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_metric_extension", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/stack_monitoring_metric_extension oci_stack_monitoring_metric_extension} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMetricExtensionConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMetricExtensionConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_metric_extension',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metricExtensionId = config.metricExtensionId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_method - computed: true, optional: false, required: false
  public get collectionMethod() {
    return this.getStringAttribute('collection_method');
  }

  // collection_recurrences - computed: true, optional: false, required: false
  public get collectionRecurrences() {
    return this.getStringAttribute('collection_recurrences');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // enabled_on_resources - computed: true, optional: false, required: false
  private _enabledOnResources = new DataOciStackMonitoringMetricExtensionEnabledOnResourcesList(this, "enabled_on_resources", false);
  public get enabledOnResources() {
    return this._enabledOnResources;
  }

  // enabled_on_resources_count - computed: true, optional: false, required: false
  public get enabledOnResourcesCount() {
    return this.getNumberAttribute('enabled_on_resources_count');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated_by - computed: true, optional: false, required: false
  public get lastUpdatedBy() {
    return this.getStringAttribute('last_updated_by');
  }

  // metric_extension_id - computed: false, optional: false, required: true
  private _metricExtensionId?: string; 
  public get metricExtensionId() {
    return this.getStringAttribute('metric_extension_id');
  }
  public set metricExtensionId(value: string) {
    this._metricExtensionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricExtensionIdInput() {
    return this._metricExtensionId;
  }

  // metric_list - computed: true, optional: false, required: false
  private _metricList = new DataOciStackMonitoringMetricExtensionMetricListStructList(this, "metric_list", false);
  public get metricList() {
    return this._metricList;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // publish_trigger - computed: true, optional: false, required: false
  public get publishTrigger() {
    return this.getBooleanAttribute('publish_trigger');
  }

  // query_properties - computed: true, optional: false, required: false
  private _queryProperties = new DataOciStackMonitoringMetricExtensionQueryPropertiesList(this, "query_properties", false);
  public get queryProperties() {
    return this._queryProperties;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // resource_uri - computed: true, optional: false, required: false
  public get resourceUri() {
    return this.getStringAttribute('resource_uri');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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
      metric_extension_id: cdktf.stringToTerraform(this._metricExtensionId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metric_extension_id: {
        value: cdktf.stringToHclTerraform(this._metricExtensionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
