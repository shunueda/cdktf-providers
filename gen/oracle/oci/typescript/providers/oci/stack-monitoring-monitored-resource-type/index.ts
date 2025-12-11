// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringMonitoredResourceTypeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#compartment_id StackMonitoringMonitoredResourceType#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#defined_tags StackMonitoringMonitoredResourceType#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#description StackMonitoringMonitoredResourceType#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#display_name StackMonitoringMonitoredResourceType#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#freeform_tags StackMonitoringMonitoredResourceType#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#id StackMonitoringMonitoredResourceType#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#metric_namespace StackMonitoringMonitoredResourceType#metric_namespace}
  */
  readonly metricNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#name StackMonitoringMonitoredResourceType#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#resource_category StackMonitoringMonitoredResourceType#resource_category}
  */
  readonly resourceCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#source_type StackMonitoringMonitoredResourceType#source_type}
  */
  readonly sourceType?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#metadata StackMonitoringMonitoredResourceType#metadata}
  */
  readonly metadata?: StackMonitoringMonitoredResourceTypeMetadata;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#timeouts StackMonitoringMonitoredResourceType#timeouts}
  */
  readonly timeouts?: StackMonitoringMonitoredResourceTypeTimeouts;
}
export interface StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfig {
}

export function stackMonitoringMonitoredResourceTypeAvailabilityMetricsConfigToTerraform(struct?: StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMonitoredResourceTypeAvailabilityMetricsConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfig | undefined) {
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

export class StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfigList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfigOutputReference {
    return new StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfig {
}

export function stackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfigToTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfig | undefined) {
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

export class StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfigOutputReference {
    return new StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeHandlerConfigHandlerProperties {
}

export function stackMonitoringMonitoredResourceTypeHandlerConfigHandlerPropertiesToTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigHandlerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMonitoredResourceTypeHandlerConfigHandlerPropertiesToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigHandlerProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMonitoredResourceTypeHandlerConfigHandlerPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeHandlerConfigHandlerProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeHandlerConfigHandlerProperties | undefined) {
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

export class StackMonitoringMonitoredResourceTypeHandlerConfigHandlerPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMonitoredResourceTypeHandlerConfigHandlerPropertiesOutputReference {
    return new StackMonitoringMonitoredResourceTypeHandlerConfigHandlerPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappings {
}

export function stackMonitoringMonitoredResourceTypeHandlerConfigMetricMappingsToTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMonitoredResourceTypeHandlerConfigMetricMappingsToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappings | undefined) {
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

export class StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappingsList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappingsOutputReference {
    return new StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfig {
}

export function stackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfigToTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfig | undefined) {
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

export class StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfigOutputReference {
    return new StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfig {
}

export function stackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfigToTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfig | undefined) {
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

export class StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfigList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfigOutputReference {
    return new StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeHandlerConfig {
}

export function stackMonitoringMonitoredResourceTypeHandlerConfigToTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function stackMonitoringMonitoredResourceTypeHandlerConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class StackMonitoringMonitoredResourceTypeHandlerConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeHandlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeHandlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // collectd_resource_name_config - computed: true, optional: false, required: false
  private _collectdResourceNameConfig = new StackMonitoringMonitoredResourceTypeHandlerConfigCollectdResourceNameConfigList(this, "collectd_resource_name_config", false);
  public get collectdResourceNameConfig() {
    return this._collectdResourceNameConfig;
  }

  // collector_types - computed: true, optional: false, required: false
  public get collectorTypes() {
    return this.getListAttribute('collector_types');
  }

  // handler_properties - computed: true, optional: false, required: false
  private _handlerProperties = new StackMonitoringMonitoredResourceTypeHandlerConfigHandlerPropertiesList(this, "handler_properties", false);
  public get handlerProperties() {
    return this._handlerProperties;
  }

  // metric_mappings - computed: true, optional: false, required: false
  private _metricMappings = new StackMonitoringMonitoredResourceTypeHandlerConfigMetricMappingsList(this, "metric_mappings", false);
  public get metricMappings() {
    return this._metricMappings;
  }

  // metric_name_config - computed: true, optional: false, required: false
  private _metricNameConfig = new StackMonitoringMonitoredResourceTypeHandlerConfigMetricNameConfigList(this, "metric_name_config", false);
  public get metricNameConfig() {
    return this._metricNameConfig;
  }

  // metric_upload_interval_in_seconds - computed: true, optional: false, required: false
  public get metricUploadIntervalInSeconds() {
    return this.getNumberAttribute('metric_upload_interval_in_seconds');
  }

  // telegraf_resource_name_config - computed: true, optional: false, required: false
  private _telegrafResourceNameConfig = new StackMonitoringMonitoredResourceTypeHandlerConfigTelegrafResourceNameConfigList(this, "telegraf_resource_name_config", false);
  public get telegrafResourceNameConfig() {
    return this._telegrafResourceNameConfig;
  }

  // telemetry_resource_group - computed: true, optional: false, required: false
  public get telemetryResourceGroup() {
    return this.getStringAttribute('telemetry_resource_group');
  }
}

export class StackMonitoringMonitoredResourceTypeHandlerConfigList extends cdktf.ComplexList {

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
  public get(index: number): StackMonitoringMonitoredResourceTypeHandlerConfigOutputReference {
    return new StackMonitoringMonitoredResourceTypeHandlerConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#properties StackMonitoringMonitoredResourceType#properties}
  */
  readonly properties: string[];
}

export function stackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsToTerraform(struct?: StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
  }
}


export function stackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.properties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._properties = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._properties = value.properties;
    }
  }

  // properties - computed: false, optional: false, required: true
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }
}

export class StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference {
    return new StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTypeMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#agent_properties StackMonitoringMonitoredResourceType#agent_properties}
  */
  readonly agentProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#format StackMonitoringMonitoredResourceType#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#required_properties StackMonitoringMonitoredResourceType#required_properties}
  */
  readonly requiredProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_create StackMonitoringMonitoredResourceType#valid_properties_for_create}
  */
  readonly validPropertiesForCreate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#valid_properties_for_update StackMonitoringMonitoredResourceType#valid_properties_for_update}
  */
  readonly validPropertiesForUpdate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#valid_property_values StackMonitoringMonitoredResourceType#valid_property_values}
  */
  readonly validPropertyValues?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#valid_sub_resource_types StackMonitoringMonitoredResourceType#valid_sub_resource_types}
  */
  readonly validSubResourceTypes?: string[];
  /**
  * unique_property_sets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#unique_property_sets StackMonitoringMonitoredResourceType#unique_property_sets}
  */
  readonly uniquePropertySets?: StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets[] | cdktf.IResolvable;
}

export function stackMonitoringMonitoredResourceTypeMetadataToTerraform(struct?: StackMonitoringMonitoredResourceTypeMetadataOutputReference | StackMonitoringMonitoredResourceTypeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.agentProperties),
    format: cdktf.stringToTerraform(struct!.format),
    required_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredProperties),
    valid_properties_for_create: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validPropertiesForCreate),
    valid_properties_for_update: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validPropertiesForUpdate),
    valid_property_values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.validPropertyValues),
    valid_sub_resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.validSubResourceTypes),
    unique_property_sets: cdktf.listMapper(stackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsToTerraform, true)(struct!.uniquePropertySets),
  }
}


export function stackMonitoringMonitoredResourceTypeMetadataToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeMetadataOutputReference | StackMonitoringMonitoredResourceTypeMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.agentProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    valid_properties_for_create: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validPropertiesForCreate),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    valid_properties_for_update: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validPropertiesForUpdate),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    valid_property_values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.validPropertyValues),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    valid_sub_resource_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.validSubResourceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    unique_property_sets: {
      value: cdktf.listMapperHcl(stackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsToHclTerraform, true)(struct!.uniquePropertySets),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTypeMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTypeMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentProperties = this._agentProperties;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._requiredProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredProperties = this._requiredProperties;
    }
    if (this._validPropertiesForCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validPropertiesForCreate = this._validPropertiesForCreate;
    }
    if (this._validPropertiesForUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.validPropertiesForUpdate = this._validPropertiesForUpdate;
    }
    if (this._validPropertyValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.validPropertyValues = this._validPropertyValues;
    }
    if (this._validSubResourceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.validSubResourceTypes = this._validSubResourceTypes;
    }
    if (this._uniquePropertySets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniquePropertySets = this._uniquePropertySets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTypeMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentProperties = undefined;
      this._format = undefined;
      this._requiredProperties = undefined;
      this._validPropertiesForCreate = undefined;
      this._validPropertiesForUpdate = undefined;
      this._validPropertyValues = undefined;
      this._validSubResourceTypes = undefined;
      this._uniquePropertySets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentProperties = value.agentProperties;
      this._format = value.format;
      this._requiredProperties = value.requiredProperties;
      this._validPropertiesForCreate = value.validPropertiesForCreate;
      this._validPropertiesForUpdate = value.validPropertiesForUpdate;
      this._validPropertyValues = value.validPropertyValues;
      this._validSubResourceTypes = value.validSubResourceTypes;
      this._uniquePropertySets.internalValue = value.uniquePropertySets;
    }
  }

  // agent_properties - computed: true, optional: true, required: false
  private _agentProperties?: string[]; 
  public get agentProperties() {
    return this.getListAttribute('agent_properties');
  }
  public set agentProperties(value: string[]) {
    this._agentProperties = value;
  }
  public resetAgentProperties() {
    this._agentProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPropertiesInput() {
    return this._agentProperties;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // required_properties - computed: true, optional: true, required: false
  private _requiredProperties?: string[]; 
  public get requiredProperties() {
    return this.getListAttribute('required_properties');
  }
  public set requiredProperties(value: string[]) {
    this._requiredProperties = value;
  }
  public resetRequiredProperties() {
    this._requiredProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPropertiesInput() {
    return this._requiredProperties;
  }

  // valid_properties_for_create - computed: true, optional: true, required: false
  private _validPropertiesForCreate?: string[]; 
  public get validPropertiesForCreate() {
    return this.getListAttribute('valid_properties_for_create');
  }
  public set validPropertiesForCreate(value: string[]) {
    this._validPropertiesForCreate = value;
  }
  public resetValidPropertiesForCreate() {
    this._validPropertiesForCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPropertiesForCreateInput() {
    return this._validPropertiesForCreate;
  }

  // valid_properties_for_update - computed: true, optional: true, required: false
  private _validPropertiesForUpdate?: string[]; 
  public get validPropertiesForUpdate() {
    return this.getListAttribute('valid_properties_for_update');
  }
  public set validPropertiesForUpdate(value: string[]) {
    this._validPropertiesForUpdate = value;
  }
  public resetValidPropertiesForUpdate() {
    this._validPropertiesForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPropertiesForUpdateInput() {
    return this._validPropertiesForUpdate;
  }

  // valid_property_values - computed: true, optional: true, required: false
  private _validPropertyValues?: { [key: string]: string }; 
  public get validPropertyValues() {
    return this.getStringMapAttribute('valid_property_values');
  }
  public set validPropertyValues(value: { [key: string]: string }) {
    this._validPropertyValues = value;
  }
  public resetValidPropertyValues() {
    this._validPropertyValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPropertyValuesInput() {
    return this._validPropertyValues;
  }

  // valid_sub_resource_types - computed: true, optional: true, required: false
  private _validSubResourceTypes?: string[]; 
  public get validSubResourceTypes() {
    return this.getListAttribute('valid_sub_resource_types');
  }
  public set validSubResourceTypes(value: string[]) {
    this._validSubResourceTypes = value;
  }
  public resetValidSubResourceTypes() {
    this._validSubResourceTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validSubResourceTypesInput() {
    return this._validSubResourceTypes;
  }

  // unique_property_sets - computed: false, optional: true, required: false
  private _uniquePropertySets = new StackMonitoringMonitoredResourceTypeMetadataUniquePropertySetsList(this, "unique_property_sets", false);
  public get uniquePropertySets() {
    return this._uniquePropertySets;
  }
  public putUniquePropertySets(value: StackMonitoringMonitoredResourceTypeMetadataUniquePropertySets[] | cdktf.IResolvable) {
    this._uniquePropertySets.internalValue = value;
  }
  public resetUniquePropertySets() {
    this._uniquePropertySets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquePropertySetsInput() {
    return this._uniquePropertySets.internalValue;
  }
}
export interface StackMonitoringMonitoredResourceTypeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#create StackMonitoringMonitoredResourceType#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#delete StackMonitoringMonitoredResourceType#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#update StackMonitoringMonitoredResourceType#update}
  */
  readonly update?: string;
}

export function stackMonitoringMonitoredResourceTypeTimeoutsToTerraform(struct?: StackMonitoringMonitoredResourceTypeTimeouts | cdktf.IResolvable): any {
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


export function stackMonitoringMonitoredResourceTypeTimeoutsToHclTerraform(struct?: StackMonitoringMonitoredResourceTypeTimeouts | cdktf.IResolvable): any {
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

export class StackMonitoringMonitoredResourceTypeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTypeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StackMonitoringMonitoredResourceTypeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type oci_stack_monitoring_monitored_resource_type}
*/
export class StackMonitoringMonitoredResourceType extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_type";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringMonitoredResourceType resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringMonitoredResourceType to import
  * @param importFromId The id of the existing StackMonitoringMonitoredResourceType that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringMonitoredResourceType to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_type", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/resources/stack_monitoring_monitored_resource_type oci_stack_monitoring_monitored_resource_type} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringMonitoredResourceTypeConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringMonitoredResourceTypeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitored_resource_type',
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
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._metricNamespace = config.metricNamespace;
    this._name = config.name;
    this._resourceCategory = config.resourceCategory;
    this._sourceType = config.sourceType;
    this._metadata.internalValue = config.metadata;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_namespace_map - computed: true, optional: false, required: false
  private _additionalNamespaceMap = new cdktf.StringMap(this, "additional_namespace_map");
  public get additionalNamespaceMap() {
    return this._additionalNamespaceMap;
  }

  // availability_metrics_config - computed: true, optional: false, required: false
  private _availabilityMetricsConfig = new StackMonitoringMonitoredResourceTypeAvailabilityMetricsConfigList(this, "availability_metrics_config", false);
  public get availabilityMetricsConfig() {
    return this._availabilityMetricsConfig;
  }

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

  // description - computed: false, optional: true, required: false
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
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

  // handler_config - computed: true, optional: false, required: false
  private _handlerConfig = new StackMonitoringMonitoredResourceTypeHandlerConfigList(this, "handler_config", false);
  public get handlerConfig() {
    return this._handlerConfig;
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

  // is_system_defined - computed: true, optional: false, required: false
  public get isSystemDefined() {
    return this.getBooleanAttribute('is_system_defined');
  }

  // metric_namespace - computed: true, optional: true, required: false
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

  // resource_category - computed: true, optional: true, required: false
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

  // source_type - computed: true, optional: true, required: false
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new StackMonitoringMonitoredResourceTypeMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: StackMonitoringMonitoredResourceTypeMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringMonitoredResourceTypeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringMonitoredResourceTypeTimeouts) {
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
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      metric_namespace: cdktf.stringToTerraform(this._metricNamespace),
      name: cdktf.stringToTerraform(this._name),
      resource_category: cdktf.stringToTerraform(this._resourceCategory),
      source_type: cdktf.stringToTerraform(this._sourceType),
      metadata: stackMonitoringMonitoredResourceTypeMetadataToTerraform(this._metadata.internalValue),
      timeouts: stackMonitoringMonitoredResourceTypeTimeoutsToTerraform(this._timeouts.internalValue),
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
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      metadata: {
        value: stackMonitoringMonitoredResourceTypeMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMonitoredResourceTypeMetadataList",
      },
      timeouts: {
        value: stackMonitoringMonitoredResourceTypeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringMonitoredResourceTypeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
