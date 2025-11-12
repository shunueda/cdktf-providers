// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitored_resource_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciStackMonitoringMonitoredResourceTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitored_resource_task#monitored_resource_task_id DataOciStackMonitoringMonitoredResourceTask#monitored_resource_task_id}
  */
  readonly monitoredResourceTaskId: string;
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // listener_port - computed: true, optional: false, required: false
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig | undefined) {
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

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collectd_resource_name_config - computed: true, optional: false, required: false
  private _collectdResourceNameConfig = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigList(this, "collectd_resource_name_config", false);
  public get collectdResourceNameConfig() {
    return this._collectdResourceNameConfig;
  }

  // collector_types - computed: true, optional: false, required: false
  public get collectorTypes() {
    return this.getListAttribute('collector_types');
  }

  // handler_properties - computed: true, optional: false, required: false
  private _handlerProperties = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesList(this, "handler_properties", false);
  public get handlerProperties() {
    return this._handlerProperties;
  }

  // metric_mappings - computed: true, optional: false, required: false
  private _metricMappings = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsList(this, "metric_mappings", false);
  public get metricMappings() {
    return this._metricMappings;
  }

  // metric_name_config - computed: true, optional: false, required: false
  private _metricNameConfig = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigList(this, "metric_name_config", false);
  public get metricNameConfig() {
    return this._metricNameConfig;
  }

  // metric_upload_interval_in_seconds - computed: true, optional: false, required: false
  public get metricUploadIntervalInSeconds() {
    return this.getNumberAttribute('metric_upload_interval_in_seconds');
  }

  // telegraf_resource_name_config - computed: true, optional: false, required: false
  private _telegrafResourceNameConfig = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigList(this, "telegraf_resource_name_config", false);
  public get telegrafResourceNameConfig() {
    return this._telegrafResourceNameConfig;
  }

  // telemetry_resource_group - computed: true, optional: false, required: false
  public get telemetryResourceGroup() {
    return this.getStringAttribute('telemetry_resource_group');
  }
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // availability_metrics_config - computed: true, optional: false, required: false
  private _availabilityMetricsConfig = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigList(this, "availability_metrics_config", false);
  public get availabilityMetricsConfig() {
    return this._availabilityMetricsConfig;
  }

  // handler_config - computed: true, optional: false, required: false
  private _handlerConfig = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigList(this, "handler_config", false);
  public get handlerConfig() {
    return this._handlerConfig;
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciStackMonitoringMonitoredResourceTaskTaskDetails {
}

export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsToTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciStackMonitoringMonitoredResourceTaskTaskDetailsToHclTerraform(struct?: DataOciStackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciStackMonitoringMonitoredResourceTaskTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciStackMonitoringMonitoredResourceTaskTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // agent_id - computed: true, optional: false, required: false
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }

  // availability_proxy_metric_collection_interval - computed: true, optional: false, required: false
  public get availabilityProxyMetricCollectionInterval() {
    return this.getNumberAttribute('availability_proxy_metric_collection_interval');
  }

  // availability_proxy_metrics - computed: true, optional: false, required: false
  public get availabilityProxyMetrics() {
    return this.getListAttribute('availability_proxy_metrics');
  }

  // console_path_prefix - computed: true, optional: false, required: false
  public get consolePathPrefix() {
    return this.getStringAttribute('console_path_prefix');
  }

  // external_id_mapping - computed: true, optional: false, required: false
  public get externalIdMapping() {
    return this.getStringAttribute('external_id_mapping');
  }

  // handler_type - computed: true, optional: false, required: false
  public get handlerType() {
    return this.getStringAttribute('handler_type');
  }

  // is_enable - computed: true, optional: false, required: false
  public get isEnable() {
    return this.getBooleanAttribute('is_enable');
  }

  // lifecycle_status_mappings_for_up_status - computed: true, optional: false, required: false
  public get lifecycleStatusMappingsForUpStatus() {
    return this.getListAttribute('lifecycle_status_mappings_for_up_status');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }

  // receiver_properties - computed: true, optional: false, required: false
  private _receiverProperties = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesList(this, "receiver_properties", false);
  public get receiverProperties() {
    return this._receiverProperties;
  }

  // resource_group - computed: true, optional: false, required: false
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }

  // resource_name_filter - computed: true, optional: false, required: false
  public get resourceNameFilter() {
    return this.getStringAttribute('resource_name_filter');
  }

  // resource_name_mapping - computed: true, optional: false, required: false
  public get resourceNameMapping() {
    return this.getStringAttribute('resource_name_mapping');
  }

  // resource_type_filter - computed: true, optional: false, required: false
  public get resourceTypeFilter() {
    return this.getStringAttribute('resource_type_filter');
  }

  // resource_type_mapping - computed: true, optional: false, required: false
  public get resourceTypeMapping() {
    return this.getStringAttribute('resource_type_mapping');
  }

  // resource_types_configuration - computed: true, optional: false, required: false
  private _resourceTypesConfiguration = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationList(this, "resource_types_configuration", false);
  public get resourceTypesConfiguration() {
    return this._resourceTypesConfiguration;
  }

  // service_base_url - computed: true, optional: false, required: false
  public get serviceBaseUrl() {
    return this.getStringAttribute('service_base_url');
  }

  // should_use_metrics_flow_for_status - computed: true, optional: false, required: false
  public get shouldUseMetricsFlowForStatus() {
    return this.getBooleanAttribute('should_use_metrics_flow_for_status');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getStringAttribute('source');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference {
    return new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}
*/
export class DataOciStackMonitoringMonitoredResourceTask extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciStackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciStackMonitoringMonitoredResourceTask to import
  * @param importFromId The id of the existing DataOciStackMonitoringMonitoredResourceTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciStackMonitoringMonitoredResourceTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/data-sources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciStackMonitoringMonitoredResourceTaskConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciStackMonitoringMonitoredResourceTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitored_resource_task',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._monitoredResourceTaskId = config.monitoredResourceTaskId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
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

  // monitored_resource_task_id - computed: false, optional: false, required: true
  private _monitoredResourceTaskId?: string; 
  public get monitoredResourceTaskId() {
    return this.getStringAttribute('monitored_resource_task_id');
  }
  public set monitoredResourceTaskId(value: string) {
    this._monitoredResourceTaskId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoredResourceTaskIdInput() {
    return this._monitoredResourceTaskId;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // task_details - computed: true, optional: false, required: false
  private _taskDetails = new DataOciStackMonitoringMonitoredResourceTaskTaskDetailsList(this, "task_details", false);
  public get taskDetails() {
    return this._taskDetails;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // work_request_ids - computed: true, optional: false, required: false
  public get workRequestIds() {
    return this.getListAttribute('work_request_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      monitored_resource_task_id: cdktf.stringToTerraform(this._monitoredResourceTaskId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      monitored_resource_task_id: {
        value: cdktf.stringToHclTerraform(this._monitoredResourceTaskId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
