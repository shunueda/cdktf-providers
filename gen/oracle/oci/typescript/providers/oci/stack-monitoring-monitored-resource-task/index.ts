// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StackMonitoringMonitoredResourceTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#compartment_id StackMonitoringMonitoredResourceTask#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#defined_tags StackMonitoringMonitoredResourceTask#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#freeform_tags StackMonitoringMonitoredResourceTask#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#id StackMonitoringMonitoredResourceTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}
  */
  readonly name?: string;
  /**
  * task_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#task_details StackMonitoringMonitoredResourceTask#task_details}
  */
  readonly taskDetails: StackMonitoringMonitoredResourceTaskTaskDetails;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#timeouts StackMonitoringMonitoredResourceTask#timeouts}
  */
  readonly timeouts?: StackMonitoringMonitoredResourceTaskTimeouts;
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#listener_port StackMonitoringMonitoredResourceTask#listener_port}
  */
  readonly listenerPort?: number;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_port: cdktf.numberToTerraform(struct!.listenerPort),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_port: {
      value: cdktf.numberToHclTerraform(struct!.listenerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerPort = this._listenerPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listenerPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listenerPort = value.listenerPort;
    }
  }

  // listener_port - computed: true, optional: true, required: false
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  public resetListenerPort() {
    this._listenerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#collection_interval_in_seconds StackMonitoringMonitoredResourceTask#collection_interval_in_seconds}
  */
  readonly collectionIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#metrics StackMonitoringMonitoredResourceTask#metrics}
  */
  readonly metrics?: string[];
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection_interval_in_seconds: cdktf.numberToTerraform(struct!.collectionIntervalInSeconds),
    metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.metrics),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.collectionIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.metrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectionIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectionIntervalInSeconds = this._collectionIntervalInSeconds;
    }
    if (this._metrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectionIntervalInSeconds = undefined;
      this._metrics = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectionIntervalInSeconds = value.collectionIntervalInSeconds;
      this._metrics = value.metrics;
    }
  }

  // collection_interval_in_seconds - computed: true, optional: true, required: false
  private _collectionIntervalInSeconds?: number; 
  public get collectionIntervalInSeconds() {
    return this.getNumberAttribute('collection_interval_in_seconds');
  }
  public set collectionIntervalInSeconds(value: number) {
    this._collectionIntervalInSeconds = value;
  }
  public resetCollectionIntervalInSeconds() {
    this._collectionIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIntervalInSecondsInput() {
    return this._collectionIntervalInSeconds;
  }

  // metrics - computed: true, optional: true, required: false
  private _metrics?: string[]; 
  public get metrics() {
    return this.getListAttribute('metrics');
  }
  public set metrics(value: string[]) {
    this._metrics = value;
  }
  public resetMetrics() {
    this._metrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics;
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#exclude_properties StackMonitoringMonitoredResourceTask#exclude_properties}
  */
  readonly excludeProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#include_properties StackMonitoringMonitoredResourceTask#include_properties}
  */
  readonly includeProperties?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#suffix StackMonitoringMonitoredResourceTask#suffix}
  */
  readonly suffix?: string;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeProperties),
    include_properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeProperties),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeProperties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeProperties = this._excludeProperties;
    }
    if (this._includeProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeProperties = this._includeProperties;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeProperties = undefined;
      this._includeProperties = undefined;
      this._suffix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeProperties = value.excludeProperties;
      this._includeProperties = value.includeProperties;
      this._suffix = value.suffix;
    }
  }

  // exclude_properties - computed: true, optional: true, required: false
  private _excludeProperties?: string[]; 
  public get excludeProperties() {
    return this.getListAttribute('exclude_properties');
  }
  public set excludeProperties(value: string[]) {
    this._excludeProperties = value;
  }
  public resetExcludeProperties() {
    this._excludeProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePropertiesInput() {
    return this._excludeProperties;
  }

  // include_properties - computed: true, optional: true, required: false
  private _includeProperties?: string[]; 
  public get includeProperties() {
    return this.getListAttribute('include_properties');
  }
  public set includeProperties(value: string[]) {
    this._includeProperties = value;
  }
  public resetIncludeProperties() {
    this._includeProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includePropertiesInput() {
    return this._includeProperties;
  }

  // suffix - computed: true, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#name StackMonitoringMonitoredResourceTask#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#value StackMonitoringMonitoredResourceTask#value}
  */
  readonly value?: string;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesOutputReference {
    return new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#collector_metric_name StackMonitoringMonitoredResourceTask#collector_metric_name}
  */
  readonly collectorMetricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#is_skip_upload StackMonitoringMonitoredResourceTask#is_skip_upload}
  */
  readonly isSkipUpload?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#metric_upload_interval_in_seconds StackMonitoringMonitoredResourceTask#metric_upload_interval_in_seconds}
  */
  readonly metricUploadIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#telemetry_metric_name StackMonitoringMonitoredResourceTask#telemetry_metric_name}
  */
  readonly telemetryMetricName?: string;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_metric_name: cdktf.stringToTerraform(struct!.collectorMetricName),
    is_skip_upload: cdktf.booleanToTerraform(struct!.isSkipUpload),
    metric_upload_interval_in_seconds: cdktf.numberToTerraform(struct!.metricUploadIntervalInSeconds),
    telemetry_metric_name: cdktf.stringToTerraform(struct!.telemetryMetricName),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_metric_name: {
      value: cdktf.stringToHclTerraform(struct!.collectorMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_skip_upload: {
      value: cdktf.booleanToHclTerraform(struct!.isSkipUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_upload_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.metricUploadIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telemetry_metric_name: {
      value: cdktf.stringToHclTerraform(struct!.telemetryMetricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorMetricName = this._collectorMetricName;
    }
    if (this._isSkipUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSkipUpload = this._isSkipUpload;
    }
    if (this._metricUploadIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUploadIntervalInSeconds = this._metricUploadIntervalInSeconds;
    }
    if (this._telemetryMetricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryMetricName = this._telemetryMetricName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectorMetricName = undefined;
      this._isSkipUpload = undefined;
      this._metricUploadIntervalInSeconds = undefined;
      this._telemetryMetricName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectorMetricName = value.collectorMetricName;
      this._isSkipUpload = value.isSkipUpload;
      this._metricUploadIntervalInSeconds = value.metricUploadIntervalInSeconds;
      this._telemetryMetricName = value.telemetryMetricName;
    }
  }

  // collector_metric_name - computed: true, optional: true, required: false
  private _collectorMetricName?: string; 
  public get collectorMetricName() {
    return this.getStringAttribute('collector_metric_name');
  }
  public set collectorMetricName(value: string) {
    this._collectorMetricName = value;
  }
  public resetCollectorMetricName() {
    this._collectorMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorMetricNameInput() {
    return this._collectorMetricName;
  }

  // is_skip_upload - computed: true, optional: true, required: false
  private _isSkipUpload?: boolean | cdktf.IResolvable; 
  public get isSkipUpload() {
    return this.getBooleanAttribute('is_skip_upload');
  }
  public set isSkipUpload(value: boolean | cdktf.IResolvable) {
    this._isSkipUpload = value;
  }
  public resetIsSkipUpload() {
    this._isSkipUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSkipUploadInput() {
    return this._isSkipUpload;
  }

  // metric_upload_interval_in_seconds - computed: true, optional: true, required: false
  private _metricUploadIntervalInSeconds?: number; 
  public get metricUploadIntervalInSeconds() {
    return this.getNumberAttribute('metric_upload_interval_in_seconds');
  }
  public set metricUploadIntervalInSeconds(value: number) {
    this._metricUploadIntervalInSeconds = value;
  }
  public resetMetricUploadIntervalInSeconds() {
    this._metricUploadIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUploadIntervalInSecondsInput() {
    return this._metricUploadIntervalInSeconds;
  }

  // telemetry_metric_name - computed: true, optional: true, required: false
  private _telemetryMetricName?: string; 
  public get telemetryMetricName() {
    return this.getStringAttribute('telemetry_metric_name');
  }
  public set telemetryMetricName(value: string) {
    this._telemetryMetricName = value;
  }
  public resetTelemetryMetricName() {
    this._telemetryMetricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryMetricNameInput() {
    return this._telemetryMetricName;
  }
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsOutputReference {
    return new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#exclude_pattern_on_prefix StackMonitoringMonitoredResourceTask#exclude_pattern_on_prefix}
  */
  readonly excludePatternOnPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#is_prefix_with_collector_type StackMonitoringMonitoredResourceTask#is_prefix_with_collector_type}
  */
  readonly isPrefixWithCollectorType?: boolean | cdktf.IResolvable;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_pattern_on_prefix: cdktf.stringToTerraform(struct!.excludePatternOnPrefix),
    is_prefix_with_collector_type: cdktf.booleanToTerraform(struct!.isPrefixWithCollectorType),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_pattern_on_prefix: {
      value: cdktf.stringToHclTerraform(struct!.excludePatternOnPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_prefix_with_collector_type: {
      value: cdktf.booleanToHclTerraform(struct!.isPrefixWithCollectorType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludePatternOnPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatternOnPrefix = this._excludePatternOnPrefix;
    }
    if (this._isPrefixWithCollectorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.isPrefixWithCollectorType = this._isPrefixWithCollectorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludePatternOnPrefix = undefined;
      this._isPrefixWithCollectorType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludePatternOnPrefix = value.excludePatternOnPrefix;
      this._isPrefixWithCollectorType = value.isPrefixWithCollectorType;
    }
  }

  // exclude_pattern_on_prefix - computed: true, optional: true, required: false
  private _excludePatternOnPrefix?: string; 
  public get excludePatternOnPrefix() {
    return this.getStringAttribute('exclude_pattern_on_prefix');
  }
  public set excludePatternOnPrefix(value: string) {
    this._excludePatternOnPrefix = value;
  }
  public resetExcludePatternOnPrefix() {
    this._excludePatternOnPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternOnPrefixInput() {
    return this._excludePatternOnPrefix;
  }

  // is_prefix_with_collector_type - computed: true, optional: true, required: false
  private _isPrefixWithCollectorType?: boolean | cdktf.IResolvable; 
  public get isPrefixWithCollectorType() {
    return this.getBooleanAttribute('is_prefix_with_collector_type');
  }
  public set isPrefixWithCollectorType(value: boolean | cdktf.IResolvable) {
    this._isPrefixWithCollectorType = value;
  }
  public resetIsPrefixWithCollectorType() {
    this._isPrefixWithCollectorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPrefixWithCollectorTypeInput() {
    return this._isPrefixWithCollectorType;
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#exclude_tags StackMonitoringMonitoredResourceTask#exclude_tags}
  */
  readonly excludeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#include_tags StackMonitoringMonitoredResourceTask#include_tags}
  */
  readonly includeTags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#is_use_tags_only StackMonitoringMonitoredResourceTask#is_use_tags_only}
  */
  readonly isUseTagsOnly?: boolean | cdktf.IResolvable;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeTags),
    include_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeTags),
    is_use_tags_only: cdktf.booleanToTerraform(struct!.isUseTagsOnly),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeTags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    is_use_tags_only: {
      value: cdktf.booleanToHclTerraform(struct!.isUseTagsOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeTags = this._excludeTags;
    }
    if (this._includeTags !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeTags = this._includeTags;
    }
    if (this._isUseTagsOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isUseTagsOnly = this._isUseTagsOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeTags = undefined;
      this._includeTags = undefined;
      this._isUseTagsOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeTags = value.excludeTags;
      this._includeTags = value.includeTags;
      this._isUseTagsOnly = value.isUseTagsOnly;
    }
  }

  // exclude_tags - computed: true, optional: true, required: false
  private _excludeTags?: string[]; 
  public get excludeTags() {
    return this.getListAttribute('exclude_tags');
  }
  public set excludeTags(value: string[]) {
    this._excludeTags = value;
  }
  public resetExcludeTags() {
    this._excludeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeTagsInput() {
    return this._excludeTags;
  }

  // include_tags - computed: true, optional: true, required: false
  private _includeTags?: string[]; 
  public get includeTags() {
    return this.getListAttribute('include_tags');
  }
  public set includeTags(value: string[]) {
    this._includeTags = value;
  }
  public resetIncludeTags() {
    this._includeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeTagsInput() {
    return this._includeTags;
  }

  // is_use_tags_only - computed: true, optional: true, required: false
  private _isUseTagsOnly?: boolean | cdktf.IResolvable; 
  public get isUseTagsOnly() {
    return this.getBooleanAttribute('is_use_tags_only');
  }
  public set isUseTagsOnly(value: boolean | cdktf.IResolvable) {
    this._isUseTagsOnly = value;
  }
  public resetIsUseTagsOnly() {
    this._isUseTagsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUseTagsOnlyInput() {
    return this._isUseTagsOnly;
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#collector_types StackMonitoringMonitoredResourceTask#collector_types}
  */
  readonly collectorTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#metric_upload_interval_in_seconds StackMonitoringMonitoredResourceTask#metric_upload_interval_in_seconds}
  */
  readonly metricUploadIntervalInSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#telemetry_resource_group StackMonitoringMonitoredResourceTask#telemetry_resource_group}
  */
  readonly telemetryResourceGroup?: string;
  /**
  * collectd_resource_name_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#collectd_resource_name_config StackMonitoringMonitoredResourceTask#collectd_resource_name_config}
  */
  readonly collectdResourceNameConfig?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig;
  /**
  * handler_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#handler_properties StackMonitoringMonitoredResourceTask#handler_properties}
  */
  readonly handlerProperties?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties[] | cdktf.IResolvable;
  /**
  * metric_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#metric_mappings StackMonitoringMonitoredResourceTask#metric_mappings}
  */
  readonly metricMappings?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings[] | cdktf.IResolvable;
  /**
  * metric_name_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#metric_name_config StackMonitoringMonitoredResourceTask#metric_name_config}
  */
  readonly metricNameConfig?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig;
  /**
  * telegraf_resource_name_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#telegraf_resource_name_config StackMonitoringMonitoredResourceTask#telegraf_resource_name_config}
  */
  readonly telegrafResourceNameConfig?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.collectorTypes),
    metric_upload_interval_in_seconds: cdktf.numberToTerraform(struct!.metricUploadIntervalInSeconds),
    telemetry_resource_group: cdktf.stringToTerraform(struct!.telemetryResourceGroup),
    collectd_resource_name_config: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigToTerraform(struct!.collectdResourceNameConfig),
    handler_properties: cdktf.listMapper(stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesToTerraform, true)(struct!.handlerProperties),
    metric_mappings: cdktf.listMapper(stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsToTerraform, true)(struct!.metricMappings),
    metric_name_config: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigToTerraform(struct!.metricNameConfig),
    telegraf_resource_name_config: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigToTerraform(struct!.telegrafResourceNameConfig),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigOutputReference | StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.collectorTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metric_upload_interval_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.metricUploadIntervalInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telemetry_resource_group: {
      value: cdktf.stringToHclTerraform(struct!.telemetryResourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    collectd_resource_name_config: {
      value: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigToHclTerraform(struct!.collectdResourceNameConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigList",
    },
    handler_properties: {
      value: cdktf.listMapperHcl(stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesToHclTerraform, true)(struct!.handlerProperties),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesList",
    },
    metric_mappings: {
      value: cdktf.listMapperHcl(stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsToHclTerraform, true)(struct!.metricMappings),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsList",
    },
    metric_name_config: {
      value: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigToHclTerraform(struct!.metricNameConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigList",
    },
    telegraf_resource_name_config: {
      value: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigToHclTerraform(struct!.telegrafResourceNameConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorTypes = this._collectorTypes;
    }
    if (this._metricUploadIntervalInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricUploadIntervalInSeconds = this._metricUploadIntervalInSeconds;
    }
    if (this._telemetryResourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryResourceGroup = this._telemetryResourceGroup;
    }
    if (this._collectdResourceNameConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectdResourceNameConfig = this._collectdResourceNameConfig?.internalValue;
    }
    if (this._handlerProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handlerProperties = this._handlerProperties?.internalValue;
    }
    if (this._metricMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricMappings = this._metricMappings?.internalValue;
    }
    if (this._metricNameConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricNameConfig = this._metricNameConfig?.internalValue;
    }
    if (this._telegrafResourceNameConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.telegrafResourceNameConfig = this._telegrafResourceNameConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collectorTypes = undefined;
      this._metricUploadIntervalInSeconds = undefined;
      this._telemetryResourceGroup = undefined;
      this._collectdResourceNameConfig.internalValue = undefined;
      this._handlerProperties.internalValue = undefined;
      this._metricMappings.internalValue = undefined;
      this._metricNameConfig.internalValue = undefined;
      this._telegrafResourceNameConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collectorTypes = value.collectorTypes;
      this._metricUploadIntervalInSeconds = value.metricUploadIntervalInSeconds;
      this._telemetryResourceGroup = value.telemetryResourceGroup;
      this._collectdResourceNameConfig.internalValue = value.collectdResourceNameConfig;
      this._handlerProperties.internalValue = value.handlerProperties;
      this._metricMappings.internalValue = value.metricMappings;
      this._metricNameConfig.internalValue = value.metricNameConfig;
      this._telegrafResourceNameConfig.internalValue = value.telegrafResourceNameConfig;
    }
  }

  // collector_types - computed: true, optional: true, required: false
  private _collectorTypes?: string[]; 
  public get collectorTypes() {
    return this.getListAttribute('collector_types');
  }
  public set collectorTypes(value: string[]) {
    this._collectorTypes = value;
  }
  public resetCollectorTypes() {
    this._collectorTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorTypesInput() {
    return this._collectorTypes;
  }

  // metric_upload_interval_in_seconds - computed: true, optional: true, required: false
  private _metricUploadIntervalInSeconds?: number; 
  public get metricUploadIntervalInSeconds() {
    return this.getNumberAttribute('metric_upload_interval_in_seconds');
  }
  public set metricUploadIntervalInSeconds(value: number) {
    this._metricUploadIntervalInSeconds = value;
  }
  public resetMetricUploadIntervalInSeconds() {
    this._metricUploadIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricUploadIntervalInSecondsInput() {
    return this._metricUploadIntervalInSeconds;
  }

  // telemetry_resource_group - computed: true, optional: true, required: false
  private _telemetryResourceGroup?: string; 
  public get telemetryResourceGroup() {
    return this.getStringAttribute('telemetry_resource_group');
  }
  public set telemetryResourceGroup(value: string) {
    this._telemetryResourceGroup = value;
  }
  public resetTelemetryResourceGroup() {
    this._telemetryResourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryResourceGroupInput() {
    return this._telemetryResourceGroup;
  }

  // collectd_resource_name_config - computed: false, optional: true, required: false
  private _collectdResourceNameConfig = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfigOutputReference(this, "collectd_resource_name_config");
  public get collectdResourceNameConfig() {
    return this._collectdResourceNameConfig;
  }
  public putCollectdResourceNameConfig(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigCollectdResourceNameConfig) {
    this._collectdResourceNameConfig.internalValue = value;
  }
  public resetCollectdResourceNameConfig() {
    this._collectdResourceNameConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectdResourceNameConfigInput() {
    return this._collectdResourceNameConfig.internalValue;
  }

  // handler_properties - computed: false, optional: true, required: false
  private _handlerProperties = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerPropertiesList(this, "handler_properties", false);
  public get handlerProperties() {
    return this._handlerProperties;
  }
  public putHandlerProperties(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigHandlerProperties[] | cdktf.IResolvable) {
    this._handlerProperties.internalValue = value;
  }
  public resetHandlerProperties() {
    this._handlerProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerPropertiesInput() {
    return this._handlerProperties.internalValue;
  }

  // metric_mappings - computed: false, optional: true, required: false
  private _metricMappings = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappingsList(this, "metric_mappings", false);
  public get metricMappings() {
    return this._metricMappings;
  }
  public putMetricMappings(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricMappings[] | cdktf.IResolvable) {
    this._metricMappings.internalValue = value;
  }
  public resetMetricMappings() {
    this._metricMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMappingsInput() {
    return this._metricMappings.internalValue;
  }

  // metric_name_config - computed: false, optional: true, required: false
  private _metricNameConfig = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfigOutputReference(this, "metric_name_config");
  public get metricNameConfig() {
    return this._metricNameConfig;
  }
  public putMetricNameConfig(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigMetricNameConfig) {
    this._metricNameConfig.internalValue = value;
  }
  public resetMetricNameConfig() {
    this._metricNameConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameConfigInput() {
    return this._metricNameConfig.internalValue;
  }

  // telegraf_resource_name_config - computed: false, optional: true, required: false
  private _telegrafResourceNameConfig = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfigOutputReference(this, "telegraf_resource_name_config");
  public get telegrafResourceNameConfig() {
    return this._telegrafResourceNameConfig;
  }
  public putTelegrafResourceNameConfig(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigTelegrafResourceNameConfig) {
    this._telegrafResourceNameConfig.internalValue = value;
  }
  public resetTelegrafResourceNameConfig() {
    this._telegrafResourceNameConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telegrafResourceNameConfigInput() {
    return this._telegrafResourceNameConfig.internalValue;
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#resource_type StackMonitoringMonitoredResourceTask#resource_type}
  */
  readonly resourceType?: string;
  /**
  * availability_metrics_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#availability_metrics_config StackMonitoringMonitoredResourceTask#availability_metrics_config}
  */
  readonly availabilityMetricsConfig?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig;
  /**
  * handler_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#handler_config StackMonitoringMonitoredResourceTask#handler_config}
  */
  readonly handlerConfig?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    availability_metrics_config: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigToTerraform(struct!.availabilityMetricsConfig),
    handler_config: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigToTerraform(struct!.handlerConfig),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_metrics_config: {
      value: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigToHclTerraform(struct!.availabilityMetricsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigList",
    },
    handler_config: {
      value: stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigToHclTerraform(struct!.handlerConfig),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._availabilityMetricsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityMetricsConfig = this._availabilityMetricsConfig?.internalValue;
    }
    if (this._handlerConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.handlerConfig = this._handlerConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceType = undefined;
      this._availabilityMetricsConfig.internalValue = undefined;
      this._handlerConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceType = value.resourceType;
      this._availabilityMetricsConfig.internalValue = value.availabilityMetricsConfig;
      this._handlerConfig.internalValue = value.handlerConfig;
    }
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

  // availability_metrics_config - computed: false, optional: true, required: false
  private _availabilityMetricsConfig = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfigOutputReference(this, "availability_metrics_config");
  public get availabilityMetricsConfig() {
    return this._availabilityMetricsConfig;
  }
  public putAvailabilityMetricsConfig(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationAvailabilityMetricsConfig) {
    this._availabilityMetricsConfig.internalValue = value;
  }
  public resetAvailabilityMetricsConfig() {
    this._availabilityMetricsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityMetricsConfigInput() {
    return this._availabilityMetricsConfig.internalValue;
  }

  // handler_config - computed: false, optional: true, required: false
  private _handlerConfig = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfigOutputReference(this, "handler_config");
  public get handlerConfig() {
    return this._handlerConfig;
  }
  public putHandlerConfig(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationHandlerConfig) {
    this._handlerConfig.internalValue = value;
  }
  public resetHandlerConfig() {
    this._handlerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerConfigInput() {
    return this._handlerConfig.internalValue;
  }
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationList extends cdktf.ComplexList {
  public internalValue? : StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration[] | cdktf.IResolvable

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
  public get(index: number): StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationOutputReference {
    return new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface StackMonitoringMonitoredResourceTaskTaskDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#agent_id StackMonitoringMonitoredResourceTask#agent_id}
  */
  readonly agentId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metric_collection_interval StackMonitoringMonitoredResourceTask#availability_proxy_metric_collection_interval}
  */
  readonly availabilityProxyMetricCollectionInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#availability_proxy_metrics StackMonitoringMonitoredResourceTask#availability_proxy_metrics}
  */
  readonly availabilityProxyMetrics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#console_path_prefix StackMonitoringMonitoredResourceTask#console_path_prefix}
  */
  readonly consolePathPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#external_id_mapping StackMonitoringMonitoredResourceTask#external_id_mapping}
  */
  readonly externalIdMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#handler_type StackMonitoringMonitoredResourceTask#handler_type}
  */
  readonly handlerType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#is_enable StackMonitoringMonitoredResourceTask#is_enable}
  */
  readonly isEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#lifecycle_status_mappings_for_up_status StackMonitoringMonitoredResourceTask#lifecycle_status_mappings_for_up_status}
  */
  readonly lifecycleStatusMappingsForUpStatus?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#namespace StackMonitoringMonitoredResourceTask#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#resource_group StackMonitoringMonitoredResourceTask#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#resource_name_filter StackMonitoringMonitoredResourceTask#resource_name_filter}
  */
  readonly resourceNameFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#resource_name_mapping StackMonitoringMonitoredResourceTask#resource_name_mapping}
  */
  readonly resourceNameMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#resource_type_filter StackMonitoringMonitoredResourceTask#resource_type_filter}
  */
  readonly resourceTypeFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#resource_type_mapping StackMonitoringMonitoredResourceTask#resource_type_mapping}
  */
  readonly resourceTypeMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#service_base_url StackMonitoringMonitoredResourceTask#service_base_url}
  */
  readonly serviceBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#should_use_metrics_flow_for_status StackMonitoringMonitoredResourceTask#should_use_metrics_flow_for_status}
  */
  readonly shouldUseMetricsFlowForStatus?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#source StackMonitoringMonitoredResourceTask#source}
  */
  readonly source?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#type StackMonitoringMonitoredResourceTask#type}
  */
  readonly type: string;
  /**
  * receiver_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#receiver_properties StackMonitoringMonitoredResourceTask#receiver_properties}
  */
  readonly receiverProperties?: StackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties;
  /**
  * resource_types_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#resource_types_configuration StackMonitoringMonitoredResourceTask#resource_types_configuration}
  */
  readonly resourceTypesConfiguration?: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration[] | cdktf.IResolvable;
}

export function stackMonitoringMonitoredResourceTaskTaskDetailsToTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference | StackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_id: cdktf.stringToTerraform(struct!.agentId),
    availability_proxy_metric_collection_interval: cdktf.numberToTerraform(struct!.availabilityProxyMetricCollectionInterval),
    availability_proxy_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.availabilityProxyMetrics),
    console_path_prefix: cdktf.stringToTerraform(struct!.consolePathPrefix),
    external_id_mapping: cdktf.stringToTerraform(struct!.externalIdMapping),
    handler_type: cdktf.stringToTerraform(struct!.handlerType),
    is_enable: cdktf.booleanToTerraform(struct!.isEnable),
    lifecycle_status_mappings_for_up_status: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.lifecycleStatusMappingsForUpStatus),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    resource_name_filter: cdktf.stringToTerraform(struct!.resourceNameFilter),
    resource_name_mapping: cdktf.stringToTerraform(struct!.resourceNameMapping),
    resource_type_filter: cdktf.stringToTerraform(struct!.resourceTypeFilter),
    resource_type_mapping: cdktf.stringToTerraform(struct!.resourceTypeMapping),
    service_base_url: cdktf.stringToTerraform(struct!.serviceBaseUrl),
    should_use_metrics_flow_for_status: cdktf.booleanToTerraform(struct!.shouldUseMetricsFlowForStatus),
    source: cdktf.stringToTerraform(struct!.source),
    type: cdktf.stringToTerraform(struct!.type),
    receiver_properties: stackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesToTerraform(struct!.receiverProperties),
    resource_types_configuration: cdktf.listMapper(stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationToTerraform, true)(struct!.resourceTypesConfiguration),
  }
}


export function stackMonitoringMonitoredResourceTaskTaskDetailsToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference | StackMonitoringMonitoredResourceTaskTaskDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_id: {
      value: cdktf.stringToHclTerraform(struct!.agentId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_proxy_metric_collection_interval: {
      value: cdktf.numberToHclTerraform(struct!.availabilityProxyMetricCollectionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    availability_proxy_metrics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.availabilityProxyMetrics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    console_path_prefix: {
      value: cdktf.stringToHclTerraform(struct!.consolePathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_id_mapping: {
      value: cdktf.stringToHclTerraform(struct!.externalIdMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    handler_type: {
      value: cdktf.stringToHclTerraform(struct!.handlerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_enable: {
      value: cdktf.booleanToHclTerraform(struct!.isEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lifecycle_status_mappings_for_up_status: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.lifecycleStatusMappingsForUpStatus),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name_filter: {
      value: cdktf.stringToHclTerraform(struct!.resourceNameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name_mapping: {
      value: cdktf.stringToHclTerraform(struct!.resourceNameMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type_filter: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type_mapping: {
      value: cdktf.stringToHclTerraform(struct!.resourceTypeMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_base_url: {
      value: cdktf.stringToHclTerraform(struct!.serviceBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_use_metrics_flow_for_status: {
      value: cdktf.booleanToHclTerraform(struct!.shouldUseMetricsFlowForStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    receiver_properties: {
      value: stackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesToHclTerraform(struct!.receiverProperties),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesList",
    },
    resource_types_configuration: {
      value: cdktf.listMapperHcl(stackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationToHclTerraform, true)(struct!.resourceTypesConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTaskDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentId !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentId = this._agentId;
    }
    if (this._availabilityProxyMetricCollectionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityProxyMetricCollectionInterval = this._availabilityProxyMetricCollectionInterval;
    }
    if (this._availabilityProxyMetrics !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityProxyMetrics = this._availabilityProxyMetrics;
    }
    if (this._consolePathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.consolePathPrefix = this._consolePathPrefix;
    }
    if (this._externalIdMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIdMapping = this._externalIdMapping;
    }
    if (this._handlerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.handlerType = this._handlerType;
    }
    if (this._isEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isEnable = this._isEnable;
    }
    if (this._lifecycleStatusMappingsForUpStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifecycleStatusMappingsForUpStatus = this._lifecycleStatusMappingsForUpStatus;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._resourceNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNameFilter = this._resourceNameFilter;
    }
    if (this._resourceNameMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNameMapping = this._resourceNameMapping;
    }
    if (this._resourceTypeFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeFilter = this._resourceTypeFilter;
    }
    if (this._resourceTypeMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypeMapping = this._resourceTypeMapping;
    }
    if (this._serviceBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceBaseUrl = this._serviceBaseUrl;
    }
    if (this._shouldUseMetricsFlowForStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldUseMetricsFlowForStatus = this._shouldUseMetricsFlowForStatus;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._receiverProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverProperties = this._receiverProperties?.internalValue;
    }
    if (this._resourceTypesConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceTypesConfiguration = this._resourceTypesConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTaskDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentId = undefined;
      this._availabilityProxyMetricCollectionInterval = undefined;
      this._availabilityProxyMetrics = undefined;
      this._consolePathPrefix = undefined;
      this._externalIdMapping = undefined;
      this._handlerType = undefined;
      this._isEnable = undefined;
      this._lifecycleStatusMappingsForUpStatus = undefined;
      this._namespace = undefined;
      this._resourceGroup = undefined;
      this._resourceNameFilter = undefined;
      this._resourceNameMapping = undefined;
      this._resourceTypeFilter = undefined;
      this._resourceTypeMapping = undefined;
      this._serviceBaseUrl = undefined;
      this._shouldUseMetricsFlowForStatus = undefined;
      this._source = undefined;
      this._type = undefined;
      this._receiverProperties.internalValue = undefined;
      this._resourceTypesConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentId = value.agentId;
      this._availabilityProxyMetricCollectionInterval = value.availabilityProxyMetricCollectionInterval;
      this._availabilityProxyMetrics = value.availabilityProxyMetrics;
      this._consolePathPrefix = value.consolePathPrefix;
      this._externalIdMapping = value.externalIdMapping;
      this._handlerType = value.handlerType;
      this._isEnable = value.isEnable;
      this._lifecycleStatusMappingsForUpStatus = value.lifecycleStatusMappingsForUpStatus;
      this._namespace = value.namespace;
      this._resourceGroup = value.resourceGroup;
      this._resourceNameFilter = value.resourceNameFilter;
      this._resourceNameMapping = value.resourceNameMapping;
      this._resourceTypeFilter = value.resourceTypeFilter;
      this._resourceTypeMapping = value.resourceTypeMapping;
      this._serviceBaseUrl = value.serviceBaseUrl;
      this._shouldUseMetricsFlowForStatus = value.shouldUseMetricsFlowForStatus;
      this._source = value.source;
      this._type = value.type;
      this._receiverProperties.internalValue = value.receiverProperties;
      this._resourceTypesConfiguration.internalValue = value.resourceTypesConfiguration;
    }
  }

  // agent_id - computed: true, optional: true, required: false
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  public resetAgentId() {
    this._agentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // availability_proxy_metric_collection_interval - computed: true, optional: true, required: false
  private _availabilityProxyMetricCollectionInterval?: number; 
  public get availabilityProxyMetricCollectionInterval() {
    return this.getNumberAttribute('availability_proxy_metric_collection_interval');
  }
  public set availabilityProxyMetricCollectionInterval(value: number) {
    this._availabilityProxyMetricCollectionInterval = value;
  }
  public resetAvailabilityProxyMetricCollectionInterval() {
    this._availabilityProxyMetricCollectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityProxyMetricCollectionIntervalInput() {
    return this._availabilityProxyMetricCollectionInterval;
  }

  // availability_proxy_metrics - computed: true, optional: true, required: false
  private _availabilityProxyMetrics?: string[]; 
  public get availabilityProxyMetrics() {
    return this.getListAttribute('availability_proxy_metrics');
  }
  public set availabilityProxyMetrics(value: string[]) {
    this._availabilityProxyMetrics = value;
  }
  public resetAvailabilityProxyMetrics() {
    this._availabilityProxyMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityProxyMetricsInput() {
    return this._availabilityProxyMetrics;
  }

  // console_path_prefix - computed: false, optional: true, required: false
  private _consolePathPrefix?: string; 
  public get consolePathPrefix() {
    return this.getStringAttribute('console_path_prefix');
  }
  public set consolePathPrefix(value: string) {
    this._consolePathPrefix = value;
  }
  public resetConsolePathPrefix() {
    this._consolePathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consolePathPrefixInput() {
    return this._consolePathPrefix;
  }

  // external_id_mapping - computed: false, optional: true, required: false
  private _externalIdMapping?: string; 
  public get externalIdMapping() {
    return this.getStringAttribute('external_id_mapping');
  }
  public set externalIdMapping(value: string) {
    this._externalIdMapping = value;
  }
  public resetExternalIdMapping() {
    this._externalIdMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdMappingInput() {
    return this._externalIdMapping;
  }

  // handler_type - computed: true, optional: true, required: false
  private _handlerType?: string; 
  public get handlerType() {
    return this.getStringAttribute('handler_type');
  }
  public set handlerType(value: string) {
    this._handlerType = value;
  }
  public resetHandlerType() {
    this._handlerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handlerTypeInput() {
    return this._handlerType;
  }

  // is_enable - computed: true, optional: true, required: false
  private _isEnable?: boolean | cdktf.IResolvable; 
  public get isEnable() {
    return this.getBooleanAttribute('is_enable');
  }
  public set isEnable(value: boolean | cdktf.IResolvable) {
    this._isEnable = value;
  }
  public resetIsEnable() {
    this._isEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnableInput() {
    return this._isEnable;
  }

  // lifecycle_status_mappings_for_up_status - computed: false, optional: true, required: false
  private _lifecycleStatusMappingsForUpStatus?: string[]; 
  public get lifecycleStatusMappingsForUpStatus() {
    return this.getListAttribute('lifecycle_status_mappings_for_up_status');
  }
  public set lifecycleStatusMappingsForUpStatus(value: string[]) {
    this._lifecycleStatusMappingsForUpStatus = value;
  }
  public resetLifecycleStatusMappingsForUpStatus() {
    this._lifecycleStatusMappingsForUpStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleStatusMappingsForUpStatusInput() {
    return this._lifecycleStatusMappingsForUpStatus;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // resource_group - computed: true, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // resource_name_filter - computed: false, optional: true, required: false
  private _resourceNameFilter?: string; 
  public get resourceNameFilter() {
    return this.getStringAttribute('resource_name_filter');
  }
  public set resourceNameFilter(value: string) {
    this._resourceNameFilter = value;
  }
  public resetResourceNameFilter() {
    this._resourceNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameFilterInput() {
    return this._resourceNameFilter;
  }

  // resource_name_mapping - computed: false, optional: true, required: false
  private _resourceNameMapping?: string; 
  public get resourceNameMapping() {
    return this.getStringAttribute('resource_name_mapping');
  }
  public set resourceNameMapping(value: string) {
    this._resourceNameMapping = value;
  }
  public resetResourceNameMapping() {
    this._resourceNameMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameMappingInput() {
    return this._resourceNameMapping;
  }

  // resource_type_filter - computed: false, optional: true, required: false
  private _resourceTypeFilter?: string; 
  public get resourceTypeFilter() {
    return this.getStringAttribute('resource_type_filter');
  }
  public set resourceTypeFilter(value: string) {
    this._resourceTypeFilter = value;
  }
  public resetResourceTypeFilter() {
    this._resourceTypeFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeFilterInput() {
    return this._resourceTypeFilter;
  }

  // resource_type_mapping - computed: false, optional: true, required: false
  private _resourceTypeMapping?: string; 
  public get resourceTypeMapping() {
    return this.getStringAttribute('resource_type_mapping');
  }
  public set resourceTypeMapping(value: string) {
    this._resourceTypeMapping = value;
  }
  public resetResourceTypeMapping() {
    this._resourceTypeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeMappingInput() {
    return this._resourceTypeMapping;
  }

  // service_base_url - computed: false, optional: true, required: false
  private _serviceBaseUrl?: string; 
  public get serviceBaseUrl() {
    return this.getStringAttribute('service_base_url');
  }
  public set serviceBaseUrl(value: string) {
    this._serviceBaseUrl = value;
  }
  public resetServiceBaseUrl() {
    this._serviceBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBaseUrlInput() {
    return this._serviceBaseUrl;
  }

  // should_use_metrics_flow_for_status - computed: true, optional: true, required: false
  private _shouldUseMetricsFlowForStatus?: boolean | cdktf.IResolvable; 
  public get shouldUseMetricsFlowForStatus() {
    return this.getBooleanAttribute('should_use_metrics_flow_for_status');
  }
  public set shouldUseMetricsFlowForStatus(value: boolean | cdktf.IResolvable) {
    this._shouldUseMetricsFlowForStatus = value;
  }
  public resetShouldUseMetricsFlowForStatus() {
    this._shouldUseMetricsFlowForStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldUseMetricsFlowForStatusInput() {
    return this._shouldUseMetricsFlowForStatus;
  }

  // source - computed: true, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // receiver_properties - computed: false, optional: true, required: false
  private _receiverProperties = new StackMonitoringMonitoredResourceTaskTaskDetailsReceiverPropertiesOutputReference(this, "receiver_properties");
  public get receiverProperties() {
    return this._receiverProperties;
  }
  public putReceiverProperties(value: StackMonitoringMonitoredResourceTaskTaskDetailsReceiverProperties) {
    this._receiverProperties.internalValue = value;
  }
  public resetReceiverProperties() {
    this._receiverProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverPropertiesInput() {
    return this._receiverProperties.internalValue;
  }

  // resource_types_configuration - computed: false, optional: true, required: false
  private _resourceTypesConfiguration = new StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfigurationList(this, "resource_types_configuration", false);
  public get resourceTypesConfiguration() {
    return this._resourceTypesConfiguration;
  }
  public putResourceTypesConfiguration(value: StackMonitoringMonitoredResourceTaskTaskDetailsResourceTypesConfiguration[] | cdktf.IResolvable) {
    this._resourceTypesConfiguration.internalValue = value;
  }
  public resetResourceTypesConfiguration() {
    this._resourceTypesConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesConfigurationInput() {
    return this._resourceTypesConfiguration.internalValue;
  }
}
export interface StackMonitoringMonitoredResourceTaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#create StackMonitoringMonitoredResourceTask#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#delete StackMonitoringMonitoredResourceTask#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#update StackMonitoringMonitoredResourceTask#update}
  */
  readonly update?: string;
}

export function stackMonitoringMonitoredResourceTaskTimeoutsToTerraform(struct?: StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable): any {
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


export function stackMonitoringMonitoredResourceTaskTimeoutsToHclTerraform(struct?: StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable): any {
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

export class StackMonitoringMonitoredResourceTaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: StackMonitoringMonitoredResourceTaskTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task}
*/
export class StackMonitoringMonitoredResourceTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_stack_monitoring_monitored_resource_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StackMonitoringMonitoredResourceTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StackMonitoringMonitoredResourceTask to import
  * @param importFromId The id of the existing StackMonitoringMonitoredResourceTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StackMonitoringMonitoredResourceTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_stack_monitoring_monitored_resource_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/resources/stack_monitoring_monitored_resource_task oci_stack_monitoring_monitored_resource_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StackMonitoringMonitoredResourceTaskConfig
  */
  public constructor(scope: Construct, id: string, config: StackMonitoringMonitoredResourceTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_stack_monitoring_monitored_resource_task',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._name = config.name;
    this._taskDetails.internalValue = config.taskDetails;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
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

  // task_details - computed: false, optional: false, required: true
  private _taskDetails = new StackMonitoringMonitoredResourceTaskTaskDetailsOutputReference(this, "task_details");
  public get taskDetails() {
    return this._taskDetails;
  }
  public putTaskDetails(value: StackMonitoringMonitoredResourceTaskTaskDetails) {
    this._taskDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskDetailsInput() {
    return this._taskDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new StackMonitoringMonitoredResourceTaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: StackMonitoringMonitoredResourceTaskTimeouts) {
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
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      task_details: stackMonitoringMonitoredResourceTaskTaskDetailsToTerraform(this._taskDetails.internalValue),
      timeouts: stackMonitoringMonitoredResourceTaskTimeoutsToTerraform(this._timeouts.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_details: {
        value: stackMonitoringMonitoredResourceTaskTaskDetailsToHclTerraform(this._taskDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "StackMonitoringMonitoredResourceTaskTaskDetailsList",
      },
      timeouts: {
        value: stackMonitoringMonitoredResourceTaskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StackMonitoringMonitoredResourceTaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
