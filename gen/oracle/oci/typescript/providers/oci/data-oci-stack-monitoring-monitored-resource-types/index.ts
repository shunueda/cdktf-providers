// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMonitoredResourceTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#compartment_id DataOciStackMonitoringMonitoredResourceTypes#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#exclude_fields DataOciStackMonitoringMonitoredResourceTypes#exclude_fields}
  */
  readonly excludeFields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#fields DataOciStackMonitoringMonitoredResourceTypes#fields}
  */
  readonly fields?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#id DataOciStackMonitoringMonitoredResourceTypes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#is_exclude_system_types DataOciStackMonitoringMonitoredResourceTypes#is_exclude_system_types}
  */
  readonly isExcludeSystemTypes?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#metric_namespace DataOciStackMonitoringMonitoredResourceTypes#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#resource_category DataOciStackMonitoringMonitoredResourceTypes#resource_category}
  */
  readonly resourceCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#source_type DataOciStackMonitoringMonitoredResourceTypes#source_type}
  */
  readonly sourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#status DataOciStackMonitoringMonitoredResourceTypes#status}
  */
  readonly status?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#filter DataOciStackMonitoringMonitoredResourceTypes#filter}
  */
  readonly filter?: DataOciStackMonitoringMonitoredResourceTypesFilter[] | cdktf.IResolvable;
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfig {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collection_interval_in_seconds - computed: true, optional: false, required: false
  public get collectionIntervalInSeconds() {
    return this.getNumberAttribute('collection_interval_in_seconds');
  }

  // metrics - computed: true, optional: false, required: false
  public get metrics() {
    return this.getListAttribute('metrics');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfig {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_properties - computed: true, optional: false, required: false
  public get excludeProperties() {
    return this.getListAttribute('exclude_properties');
  }

  // include_properties - computed: true, optional: false, required: false
  public get includeProperties() {
    return this.getListAttribute('include_properties');
  }

  // suffix - computed: true, optional: false, required: false
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerProperties {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerPropertiesToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerPropertiesToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerPropertiesOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappings {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappingsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappingsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collector_metric_name - computed: true, optional: false, required: false
  public get collectorMetricName() {
    return this.getStringAttribute('collector_metric_name');
  }

  // is_skip_upload - computed: true, optional: false, required: false
  public get isSkipUpload() {
    return this.getBooleanAttribute('is_skip_upload');
  }

  // metric_upload_interval_in_seconds - computed: true, optional: false, required: false
  public get metricUploadIntervalInSeconds() {
    return this.getNumberAttribute('metric_upload_interval_in_seconds');
  }

  // telemetry_metric_name - computed: true, optional: false, required: false
  public get telemetryMetricName() {
    return this.getStringAttribute('telemetry_metric_name');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappingsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfig {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_pattern_on_prefix - computed: true, optional: false, required: false
  public get excludePatternOnPrefix() {
    return this.getStringAttribute('exclude_pattern_on_prefix');
  }

  // is_prefix_with_collector_type - computed: true, optional: false, required: false
  public get isPrefixWithCollectorType() {
    return this.getBooleanAttribute('is_prefix_with_collector_type');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfig {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_tags - computed: true, optional: false, required: false
  public get excludeTags() {
    return this.getListAttribute('exclude_tags');
  }

  // include_tags - computed: true, optional: false, required: false
  public get includeTags() {
    return this.getListAttribute('include_tags');
  }

  // is_use_tags_only - computed: true, optional: false, required: false
  public get isUseTagsOnly() {
    return this.getBooleanAttribute('is_use_tags_only');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfig {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collectd_resource_name_config - computed: true, optional: false, required: false
  private _collectdResourceNameConfig = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigCollectdResourceNameConfigList(this, "collectd_resource_name_config", false);
  public get collectdResourceNameConfig() {
    return this._collectdResourceNameConfig;
  }

  // collector_types - computed: true, optional: false, required: false
  public get collectorTypes() {
    return this.getListAttribute('collector_types');
  }

  // handler_properties - computed: true, optional: false, required: false
  private _handlerProperties = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigHandlerPropertiesList(this, "handler_properties", false);
  public get handlerProperties() {
    return this._handlerProperties;
  }

  // metric_mappings - computed: true, optional: false, required: false
  private _metricMappings = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricMappingsList(this, "metric_mappings", false);
  public get metricMappings() {
    return this._metricMappings;
  }

  // metric_name_config - computed: true, optional: false, required: false
  private _metricNameConfig = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigMetricNameConfigList(this, "metric_name_config", false);
  public get metricNameConfig() {
    return this._metricNameConfig;
  }

  // metric_upload_interval_in_seconds - computed: true, optional: false, required: false
  public get metricUploadIntervalInSeconds() {
    return this.getNumberAttribute('metric_upload_interval_in_seconds');
  }

  // telegraf_resource_name_config - computed: true, optional: false, required: false
  private _telegrafResourceNameConfig = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigTelegrafResourceNameConfigList(this, "telegraf_resource_name_config", false);
  public get telegrafResourceNameConfig() {
    return this._telegrafResourceNameConfig;
  }

  // telemetry_resource_group - computed: true, optional: false, required: false
  public get telemetryResourceGroup() {
    return this.getStringAttribute('telemetry_resource_group');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // properties - computed: true, optional: false, required: false
  public get properties() {
    return this.getListAttribute('properties');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_properties - computed: true, optional: false, required: false
  public get agentProperties() {
    return this.getListAttribute('agent_properties');
  }

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // required_properties - computed: true, optional: false, required: false
  public get requiredProperties() {
    return this.getListAttribute('required_properties');
  }

  // unique_property_sets - computed: true, optional: false, required: false
  private _uniquePropertySets = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataUniquePropertySetsList(this, "unique_property_sets", false);
  public get uniquePropertySets() {
    return this._uniquePropertySets;
  }

  // valid_properties_for_create - computed: true, optional: false, required: false
  public get validPropertiesForCreate() {
    return this.getListAttribute('valid_properties_for_create');
  }

  // valid_properties_for_update - computed: true, optional: false, required: false
  public get validPropertiesForUpdate() {
    return this.getListAttribute('valid_properties_for_update');
  }

  // valid_property_values - computed: true, optional: false, required: false
  private _validPropertyValues = new cdktf.StringMap(this, "valid_property_values");
  public get validPropertyValues() {
    return this._validPropertyValues;
  }

  // valid_sub_resource_types - computed: true, optional: false, required: false
  public get validSubResourceTypes() {
    return this.getListAttribute('valid_sub_resource_types');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_namespace_map - computed: true, optional: false, required: false
  private _additionalNamespaceMap = new cdktf.StringMap(this, "additional_namespace_map");
  public get additionalNamespaceMap() {
    return this._additionalNamespaceMap;
  }

  // availability_metrics_config - computed: true, optional: false, required: false
  private _availabilityMetricsConfig = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsAvailabilityMetricsConfigList(this, "availability_metrics_config", false);
  public get availabilityMetricsConfig() {
    return this._availabilityMetricsConfig;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // handler_config - computed: true, optional: false, required: false
  private _handlerConfig = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsHandlerConfigList(this, "handler_config", false);
  public get handlerConfig() {
    return this._handlerConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_system_defined - computed: true, optional: false, required: false
  public get isSystemDefined() {
    return this.getBooleanAttribute('is_system_defined');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }

  // metric_namespace - computed: true, optional: false, required: false
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // resource_category - computed: true, optional: false, required: false
  public get resourceCategory() {
    return this.getStringAttribute('resource_category');
  }

  // source_type - computed: true, optional: false, required: false
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // tenancy_id - computed: true, optional: false, required: false
  public get tenancyId() {
    return this.getStringAttribute('tenancy_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection {
}

export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTypesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#name DataOciStackMonitoringMonitoredResourceTypes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#regex DataOciStackMonitoringMonitoredResourceTypes#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#values DataOciStackMonitoringMonitoredResourceTypes#values}
  */
  readonly values: string[];
}

export function dataOciStackMonitoringMonitoredResourceTypesFilterToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciStackMonitoringMonitoredResourceTypesFilterToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTypesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTypesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTypesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciStackMonitoringMonitoredResourceTypesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciStackMonitoringMonitoredResourceTypesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTypesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types oci_stack_monitoring_monitored_resource_types}
*/
export class DataOciStackMonitoringMonitoredResourceTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTypes to import
  * @param importFromId The id of the existing DataOciStackMonitoringMonitoredResourceTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/stack_monitoring_monitored_resource_types oci_stack_monitoring_monitored_resource_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMonitoredResourceTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMonitoredResourceTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitored_resource_types',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
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
    this._excludeFields = config.excludeFields;
    this._fields = config.fields;
    this._id = config.id;
    this._isExcludeSystemTypes = config.isExcludeSystemTypes;
    this._metricNamespace = config.metricNamespace;
    this._name = config.name;
    this._resourceCategory = config.resourceCategory;
    this._sourceType = config.sourceType;
    this._status = config.status;
    this._filter.internalValue = config.filter;
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

  // exclude_fields - computed: false, optional: true, required: false
  private _excludeFields?: string[]; 
  public get excludeFields() {
    return this.getListAttribute('exclude_fields');
  }
  public set excludeFields(value: string[]) {
    this._excludeFields = value;
  }
  public resetExcludeFields() {
    this._excludeFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeFieldsInput() {
    return this._excludeFields;
  }

  // fields - computed: false, optional: true, required: false
  private _fields?: string[]; 
  public get fields() {
    return this.getListAttribute('fields');
  }
  public set fields(value: string[]) {
    this._fields = value;
  }
  public resetFields() {
    this._fields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
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

  // is_exclude_system_types - computed: false, optional: true, required: false
  private _isExcludeSystemTypes?: boolean | cdktf.IResolvable; 
  public get isExcludeSystemTypes() {
    return this.getBooleanAttribute('is_exclude_system_types');
  }
  public set isExcludeSystemTypes(value: boolean | cdktf.IResolvable) {
    this._isExcludeSystemTypes = value;
  }
  public resetIsExcludeSystemTypes() {
    this._isExcludeSystemTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isExcludeSystemTypesInput() {
    return this._isExcludeSystemTypes;
  }

  // metric_namespace - computed: false, optional: true, required: false
  private _metricNamespace?: string; 
  public get metricNamespace() {
    return this.getStringAttribute('metric_namespace');
  }
  public set metricNamespace(value: string) {
    this._metricNamespace = value;
  }
  public resetMetricNamespace() {
    this._metricNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNamespaceInput() {
    return this._metricNamespace;
  }

  // monitored_resource_types_collection - computed: true, optional: false, required: false
  private _monitoredResourceTypesCollection = new DataOciStackMonitoringMonitoredResourceTypesMonitoredResourceTypesCollectionList(this, "monitored_resource_types_collection", false);
  public get monitoredResourceTypesCollection() {
    return this._monitoredResourceTypesCollection;
  }

  // name - computed: false, optional: true, required: false
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

  // resource_category - computed: false, optional: true, required: false
  private _resourceCategory?: string; 
  public get resourceCategory() {
    return this.getStringAttribute('resource_category');
  }
  public set resourceCategory(value: string) {
    this._resourceCategory = value;
  }
  public resetResourceCategory() {
    this._resourceCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCategoryInput() {
    return this._resourceCategory;
  }

  // source_type - computed: false, optional: true, required: false
  private _sourceType?: string; 
  public get sourceType() {
    return this.getStringAttribute('source_type');
  }
  public set sourceType(value: string) {
    this._sourceType = value;
  }
  public resetSourceType() {
    this._sourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // status - computed: false, optional: true, required: false
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

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciStackMonitoringMonitoredResourceTypesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciStackMonitoringMonitoredResourceTypesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      exclude_fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludeFields),
      fields: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fields),
      id: cdktf.stringToTerraform(this._id),
      is_exclude_system_types: cdktf.booleanToTerraform(this._isExcludeSystemTypes),
      metric_namespace: cdktf.stringToTerraform(this._metricNamespace),
      name: cdktf.stringToTerraform(this._name),
      resource_category: cdktf.stringToTerraform(this._resourceCategory),
      source_type: cdktf.stringToTerraform(this._sourceType),
      status: cdktf.stringToTerraform(this._status),
      filter: cdktf.listMapper(dataOciStackMonitoringMonitoredResourceTypesFilterToTerraform, true)(this._filter.internalValue),
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
      exclude_fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludeFields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      fields: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fields),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_exclude_system_types: {
        value: cdktf.booleanToHclTerraform(this._isExcludeSystemTypes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      metric_namespace: {
        value: cdktf.stringToHclTerraform(this._metricNamespace),
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
      resource_category: {
        value: cdktf.stringToHclTerraform(this._resourceCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_type: {
        value: cdktf.stringToHclTerraform(this._sourceType),
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
      filter: {
        value: cdktf.listMapperHcl(dataOciStackMonitoringMonitoredResourceTypesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciStackMonitoringMonitoredResourceTypesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
