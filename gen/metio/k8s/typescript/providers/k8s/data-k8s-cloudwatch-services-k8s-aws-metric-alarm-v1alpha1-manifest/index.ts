// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#metadata DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata;
  /**
  * MetricAlarmSpec defines the desired state of MetricAlarm. The details about a metric alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#spec DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec;
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#annotations DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#labels DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#name DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#namespace DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#name DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#value DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
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

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsOutputReference {
    return new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#name DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#value DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions | cdktf.IResolvable): any {
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

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions | cdktf.IResolvable | undefined) {
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

  // value - computed: false, optional: true, required: false
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

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsOutputReference {
    return new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#dimensions DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#dimensions}
  */
  readonly dimensions?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#metric_name DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#metric_name}
  */
  readonly metricName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#namespace DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dimensions: cdktf.listMapper(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsToTerraform, false)(struct!.dimensions),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dimensions: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsList",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = undefined;
      this._metricName = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dimensions.internalValue = value.dimensions;
      this._metricName = value.metricName;
      this._namespace = value.namespace;
    }
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // namespace - computed: false, optional: true, required: false
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
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat {
  /**
  * Represents a specific metric.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#metric DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#metric}
  */
  readonly metric?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#period DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#stat DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#stat}
  */
  readonly stat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#unit DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricToTerraform(struct!.metric),
    period: cdktf.numberToTerraform(struct!.period),
    stat: cdktf.stringToTerraform(struct!.stat),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricToHclTerraform(struct!.metric),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stat: {
      value: cdktf.stringToHclTerraform(struct!.stat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._stat !== undefined) {
      hasAnyValues = true;
      internalValueResult.stat = this._stat;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric.internalValue = undefined;
      this._period = undefined;
      this._stat = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric.internalValue = value.metric;
      this._period = value.period;
      this._stat = value.stat;
      this._unit = value.unit;
    }
  }

  // metric - computed: false, optional: true, required: false
  private _metric = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetricOutputReference(this, "metric");
  public get metric() {
    return this._metric;
  }
  public putMetric(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatMetric) {
    this._metric.internalValue = value;
  }
  public resetMetric() {
    this._metric.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric.internalValue;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // stat - computed: false, optional: true, required: false
  private _stat?: string; 
  public get stat() {
    return this.getStringAttribute('stat');
  }
  public set stat(value: string) {
    this._stat = value;
  }
  public resetStat() {
    this._stat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statInput() {
    return this._stat;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#account_id DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#account_id}
  */
  readonly accountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#expression DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#expression}
  */
  readonly expression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#id DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#label DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#label}
  */
  readonly label?: string;
  /**
  * This structure defines the metric to be returned, along with the statistics, period, and units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#metric_stat DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#metric_stat}
  */
  readonly metricStat?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#period DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#period}
  */
  readonly period?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#return_data DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#return_data}
  */
  readonly returnData?: boolean | cdktf.IResolvable;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    expression: cdktf.stringToTerraform(struct!.expression),
    id: cdktf.stringToTerraform(struct!.id),
    label: cdktf.stringToTerraform(struct!.label),
    metric_stat: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatToTerraform(struct!.metricStat),
    period: cdktf.numberToTerraform(struct!.period),
    return_data: cdktf.booleanToTerraform(struct!.returnData),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metric_stat: {
      value: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatToHclTerraform(struct!.metricStat),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    return_data: {
      value: cdktf.booleanToHclTerraform(struct!.returnData),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._metricStat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricStat = this._metricStat?.internalValue;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._returnData !== undefined) {
      hasAnyValues = true;
      internalValueResult.returnData = this._returnData;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._expression = undefined;
      this._id = undefined;
      this._label = undefined;
      this._metricStat.internalValue = undefined;
      this._period = undefined;
      this._returnData = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._expression = value.expression;
      this._id = value.id;
      this._label = value.label;
      this._metricStat.internalValue = value.metricStat;
      this._period = value.period;
      this._returnData = value.returnData;
    }
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // id - computed: false, optional: true, required: false
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

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // metric_stat - computed: false, optional: true, required: false
  private _metricStat = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStatOutputReference(this, "metric_stat");
  public get metricStat() {
    return this._metricStat;
  }
  public putMetricStat(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsMetricStat) {
    this._metricStat.internalValue = value;
  }
  public resetMetricStat() {
    this._metricStat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricStatInput() {
    return this._metricStat.internalValue;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // return_data - computed: false, optional: true, required: false
  private _returnData?: boolean | cdktf.IResolvable; 
  public get returnData() {
    return this.getBooleanAttribute('return_data');
  }
  public set returnData(value: boolean | cdktf.IResolvable) {
    this._returnData = value;
  }
  public resetReturnData() {
    this._returnData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnDataInput() {
    return this._returnData;
  }
}

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsOutputReference {
    return new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#key DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#value DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
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

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec {
  /**
  * Indicates whether actions should be executed during any changes to the alarm state. The default is TRUE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#actions_enabled DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#actions_enabled}
  */
  readonly actionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * The actions to execute when this alarm transitions to the ALARM state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values: EC2 actions: * arn:aws:automate:region:ec2:stop * arn:aws:automate:region:ec2:terminate * arn:aws:automate:region:ec2:reboot * arn:aws:automate:region:ec2:recover * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0 Autoscaling action: * arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name SNS notification action: * arn:aws:sns:region:account-id:sns-topic-name:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name SSM integration actions: * arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name * arn:aws:ssm-incidents::account-id:responseplan/response-plan-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#alarm_actions DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#alarm_actions}
  */
  readonly alarmActions?: string[];
  /**
  * The description for the alarm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#alarm_description DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#alarm_description}
  */
  readonly alarmDescription?: string;
  /**
  * The arithmetic operation to use when comparing the specified statistic and threshold. The specified statistic value is used as the first operand. The values LessThanLowerOrGreaterThanUpperThreshold, LessThanLowerThreshold, and GreaterThanUpperThreshold are used only for alarms based on anomaly detection models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#comparison_operator DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * The number of data points that must be breaching to trigger the alarm. This is used only if you are setting an 'M out of N' alarm. In that case, this value is the M. For more information, see Evaluating an Alarm (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarm-evaluation) in the Amazon CloudWatch User Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#datapoints_to_alarm DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#datapoints_to_alarm}
  */
  readonly datapointsToAlarm?: number;
  /**
  * The dimensions for the metric specified in MetricName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#dimensions DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#dimensions}
  */
  readonly dimensions?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions[] | cdktf.IResolvable;
  /**
  * Used only for alarms based on percentiles. If you specify ignore, the alarm state does not change during periods with too few data points to be statistically significant. If you specify evaluate or omit this parameter, the alarm is always evaluated and possibly changes state no matter how many data points are available. For more information, see Percentile-Based CloudWatch Alarms and Low Data Samples (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#percentiles-with-low-samples). Valid Values: evaluate | ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#evaluate_low_sample_count_percentile DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#evaluate_low_sample_count_percentile}
  */
  readonly evaluateLowSampleCountPercentile?: string;
  /**
  * The number of periods over which data is compared to the specified threshold. If you are setting an alarm that requires that a number of consecutive data points be breaching to trigger the alarm, this value specifies that number. If you are setting an 'M out of N' alarm, this value is the N. An alarm's total current evaluation period can be no longer than one day, so this number multiplied by Period cannot be more than 86,400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#evaluation_periods DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#evaluation_periods}
  */
  readonly evaluationPeriods: number;
  /**
  * The extended statistic for the metric specified in MetricName. When you call PutMetricAlarm and specify a MetricName, you must specify either Statistic or ExtendedStatistic but not both. If you specify ExtendedStatistic, the following are valid values: * p90 * tm90 * tc90 * ts90 * wm90 * IQM * PR(n:m) where n and m are values of the metric * TC(X%:X%) where X is between 10 and 90 inclusive. * TM(X%:X%) where X is between 10 and 90 inclusive. * TS(X%:X%) where X is between 10 and 90 inclusive. * WM(X%:X%) where X is between 10 and 90 inclusive. For more information about these extended statistics, see CloudWatch statistics definitions (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Statistics-definitions.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#extended_statistic DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#extended_statistic}
  */
  readonly extendedStatistic?: string;
  /**
  * The actions to execute when this alarm transitions to the INSUFFICIENT_DATA state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values: EC2 actions: * arn:aws:automate:region:ec2:stop * arn:aws:automate:region:ec2:terminate * arn:aws:automate:region:ec2:reboot * arn:aws:automate:region:ec2:recover * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0 Autoscaling action: * arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name SNS notification action: * arn:aws:sns:region:account-id:sns-topic-name:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name SSM integration actions: * arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name * arn:aws:ssm-incidents::account-id:responseplan/response-plan-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#insufficient_data_actions DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#insufficient_data_actions}
  */
  readonly insufficientDataActions?: string[];
  /**
  * The name for the metric associated with the alarm. For each PutMetricAlarm operation, you must specify either MetricName or a Metrics array. If you are creating an alarm based on a math expression, you cannot specify this parameter, or any of the Namespace, Dimensions, Period, Unit, Statistic, or ExtendedStatistic parameters. Instead, you specify all this information in the Metrics array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#metric_name DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#metric_name}
  */
  readonly metricName?: string;
  /**
  * An array of MetricDataQuery structures that enable you to create an alarm based on the result of a metric math expression. For each PutMetricAlarm operation, you must specify either MetricName or a Metrics array. Each item in the Metrics array either retrieves a metric or performs a math expression. One item in the Metrics array is the expression that the alarm watches. You designate this expression by setting ReturnData to true for this object in the array. For more information, see MetricDataQuery (https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDataQuery.html). If you use the Metrics parameter, you cannot include the Namespace, MetricName, Dimensions, Period, Unit, Statistic, or ExtendedStatistic parameters of PutMetricAlarm in the same operation. Instead, you retrieve the metrics you are using in your math expression as part of the Metrics array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#metrics DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable;
  /**
  * The name for the alarm. This name must be unique within the Region. The name must contain only UTF-8 characters, and can't contain ASCII control characters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#name DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * The namespace for the metric associated specified in MetricName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#namespace DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * The actions to execute when this alarm transitions to an OK state from any other state. Each action is specified as an Amazon Resource Name (ARN). Valid values: EC2 actions: * arn:aws:automate:region:ec2:stop * arn:aws:automate:region:ec2:terminate * arn:aws:automate:region:ec2:reboot * arn:aws:automate:region:ec2:recover * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Stop/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Terminate/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Reboot/1.0 * arn:aws:swf:region:account-id:action/actions/AWS_EC2.InstanceId.Recover/1.0 Autoscaling action: * arn:aws:autoscaling:region:account-id:scalingPolicy:policy-id:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name SNS notification action: * arn:aws:sns:region:account-id:sns-topic-name:autoScalingGroupName/group-friendly-name:policyName/policy-friendly-name SSM integration actions: * arn:aws:ssm:region:account-id:opsitem:severity#CATEGORY=category-name * arn:aws:ssm-incidents::account-id:responseplan/response-plan-name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#o_k_actions DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#o_k_actions}
  */
  readonly oKActions?: string[];
  /**
  * The length, in seconds, used each time the metric specified in MetricName is evaluated. Valid values are 10, 30, and any multiple of 60. Period is required for alarms based on static thresholds. If you are creating an alarm based on a metric math expression, you specify the period for each metric within the objects in the Metrics array. Be sure to specify 10 or 30 only for metrics that are stored by a PutMetricData call with a StorageResolution of 1. If you specify a period of 10 or 30 for a metric that does not have sub-minute resolution, the alarm still attempts to gather data at the period rate that you specify. In this case, it does not receive data for the attempts that do not correspond to a one-minute data resolution, and the alarm might often lapse into INSUFFICENT_DATA status. Specifying 10 or 30 also sets this alarm as a high-resolution alarm, which has a higher charge than other alarms. For more information about pricing, see Amazon CloudWatch Pricing (https://aws.amazon.com/cloudwatch/pricing/). An alarm's total current evaluation period can be no longer than one day, so Period multiplied by EvaluationPeriods cannot be more than 86,400 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#period DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#period}
  */
  readonly period?: number;
  /**
  * The statistic for the metric specified in MetricName, other than percentile. For percentile statistics, use ExtendedStatistic. When you call PutMetricAlarm and specify a MetricName, you must specify either Statistic or ExtendedStatistic, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#statistic DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#statistic}
  */
  readonly statistic?: string;
  /**
  * A list of key-value pairs to associate with the alarm. You can associate as many as 50 tags with an alarm. To be able to associate tags with the alarm when you create the alarm, you must have the cloudwatch:TagResource permission. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. If you are using this operation to update an existing alarm, any tags you specify in this parameter are ignored. To change the tags of an existing alarm, use TagResource (https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_TagResource.html) or UntagResource (https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_UntagResource.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#tags DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
  /**
  * The value against which the specified statistic is compared. This parameter is required for alarms based on static thresholds, but should not be used for alarms based on anomaly detection models.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#threshold DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#threshold}
  */
  readonly threshold?: number;
  /**
  * If this is an alarm based on an anomaly detection model, make this value match the ID of the ANOMALY_DETECTION_BAND function. For an example of how to use this parameter, see the Anomaly Detection Model Alarm example on this page. If your alarm uses this parameter, it cannot have Auto Scaling actions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#threshold_metric_id DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#threshold_metric_id}
  */
  readonly thresholdMetricId?: string;
  /**
  * Sets how this alarm is to handle missing data points. If TreatMissingData is omitted, the default behavior of missing is used. For more information, see Configuring How CloudWatch Alarms Treats Missing Data (https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/AlarmThatSendsEmail.html#alarms-and-missing-data). Valid Values: breaching | notBreaching | ignore | missing Alarms that evaluate metrics in the AWS/DynamoDB namespace always ignore missing data even if you choose a different option for TreatMissingData. When an AWS/DynamoDB metric has missing data, alarms that evaluate that metric remain in their current state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#treat_missing_data DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#treat_missing_data}
  */
  readonly treatMissingData?: string;
  /**
  * The unit of measure for the statistic. For example, the units for the Amazon EC2 NetworkIn metric are Bytes because NetworkIn tracks the number of bytes that an instance receives on all network interfaces. You can also specify a unit when you create a custom metric. Units help provide conceptual meaning to your data. Metric data points that specify a unit of measure, such as Percent, are aggregated separately. If you are creating an alarm based on a metric math expression, you can specify the unit for each metric (if needed) within the objects in the Metrics array. If you don't specify Unit, CloudWatch retrieves all unit types that have been published for the metric and attempts to evaluate the alarm. Usually, metrics are published with only one unit, so the alarm works as intended. However, if the metric is published with multiple types of units and you don't specify a unit, the alarm's behavior is not defined and it behaves unpredictably. We recommend omitting Unit so that you don't inadvertently specify an incorrect unit that is not published for this metric. Doing so causes the alarm to be stuck in the INSUFFICIENT DATA state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#unit DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest#unit}
  */
  readonly unit?: string;
}

export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecToTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions_enabled: cdktf.booleanToTerraform(struct!.actionsEnabled),
    alarm_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.alarmActions),
    alarm_description: cdktf.stringToTerraform(struct!.alarmDescription),
    comparison_operator: cdktf.stringToTerraform(struct!.comparisonOperator),
    datapoints_to_alarm: cdktf.numberToTerraform(struct!.datapointsToAlarm),
    dimensions: cdktf.listMapper(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsToTerraform, false)(struct!.dimensions),
    evaluate_low_sample_count_percentile: cdktf.stringToTerraform(struct!.evaluateLowSampleCountPercentile),
    evaluation_periods: cdktf.numberToTerraform(struct!.evaluationPeriods),
    extended_statistic: cdktf.stringToTerraform(struct!.extendedStatistic),
    insufficient_data_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.insufficientDataActions),
    metric_name: cdktf.stringToTerraform(struct!.metricName),
    metrics: cdktf.listMapper(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsToTerraform, false)(struct!.metrics),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    o_k_actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.oKActions),
    period: cdktf.numberToTerraform(struct!.period),
    statistic: cdktf.stringToTerraform(struct!.statistic),
    tags: cdktf.listMapper(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_metric_id: cdktf.stringToTerraform(struct!.thresholdMetricId),
    treat_missing_data: cdktf.stringToTerraform(struct!.treatMissingData),
    unit: cdktf.stringToTerraform(struct!.unit),
  }
}


export function dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.actionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    alarm_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.alarmActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    alarm_description: {
      value: cdktf.stringToHclTerraform(struct!.alarmDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparison_operator: {
      value: cdktf.stringToHclTerraform(struct!.comparisonOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datapoints_to_alarm: {
      value: cdktf.numberToHclTerraform(struct!.datapointsToAlarm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dimensions: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsToHclTerraform, false)(struct!.dimensions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsList",
    },
    evaluate_low_sample_count_percentile: {
      value: cdktf.stringToHclTerraform(struct!.evaluateLowSampleCountPercentile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    evaluation_periods: {
      value: cdktf.numberToHclTerraform(struct!.evaluationPeriods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_statistic: {
      value: cdktf.stringToHclTerraform(struct!.extendedStatistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insufficient_data_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.insufficientDataActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    metric_name: {
      value: cdktf.stringToHclTerraform(struct!.metricName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metrics: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsToHclTerraform, false)(struct!.metrics),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    o_k_actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.oKActions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    statistic: {
      value: cdktf.stringToHclTerraform(struct!.statistic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsList",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_metric_id: {
      value: cdktf.stringToHclTerraform(struct!.thresholdMetricId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    treat_missing_data: {
      value: cdktf.stringToHclTerraform(struct!.treatMissingData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionsEnabled = this._actionsEnabled;
    }
    if (this._alarmActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmActions = this._alarmActions;
    }
    if (this._alarmDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.alarmDescription = this._alarmDescription;
    }
    if (this._comparisonOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparisonOperator = this._comparisonOperator;
    }
    if (this._datapointsToAlarm !== undefined) {
      hasAnyValues = true;
      internalValueResult.datapointsToAlarm = this._datapointsToAlarm;
    }
    if (this._dimensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dimensions = this._dimensions?.internalValue;
    }
    if (this._evaluateLowSampleCountPercentile !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluateLowSampleCountPercentile = this._evaluateLowSampleCountPercentile;
    }
    if (this._evaluationPeriods !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationPeriods = this._evaluationPeriods;
    }
    if (this._extendedStatistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedStatistic = this._extendedStatistic;
    }
    if (this._insufficientDataActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.insufficientDataActions = this._insufficientDataActions;
    }
    if (this._metricName !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricName = this._metricName;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._oKActions !== undefined) {
      hasAnyValues = true;
      internalValueResult.oKActions = this._oKActions;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._statistic !== undefined) {
      hasAnyValues = true;
      internalValueResult.statistic = this._statistic;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdMetricId !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdMetricId = this._thresholdMetricId;
    }
    if (this._treatMissingData !== undefined) {
      hasAnyValues = true;
      internalValueResult.treatMissingData = this._treatMissingData;
    }
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionsEnabled = undefined;
      this._alarmActions = undefined;
      this._alarmDescription = undefined;
      this._comparisonOperator = undefined;
      this._datapointsToAlarm = undefined;
      this._dimensions.internalValue = undefined;
      this._evaluateLowSampleCountPercentile = undefined;
      this._evaluationPeriods = undefined;
      this._extendedStatistic = undefined;
      this._insufficientDataActions = undefined;
      this._metricName = undefined;
      this._metrics.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._oKActions = undefined;
      this._period = undefined;
      this._statistic = undefined;
      this._tags.internalValue = undefined;
      this._threshold = undefined;
      this._thresholdMetricId = undefined;
      this._treatMissingData = undefined;
      this._unit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionsEnabled = value.actionsEnabled;
      this._alarmActions = value.alarmActions;
      this._alarmDescription = value.alarmDescription;
      this._comparisonOperator = value.comparisonOperator;
      this._datapointsToAlarm = value.datapointsToAlarm;
      this._dimensions.internalValue = value.dimensions;
      this._evaluateLowSampleCountPercentile = value.evaluateLowSampleCountPercentile;
      this._evaluationPeriods = value.evaluationPeriods;
      this._extendedStatistic = value.extendedStatistic;
      this._insufficientDataActions = value.insufficientDataActions;
      this._metricName = value.metricName;
      this._metrics.internalValue = value.metrics;
      this._name = value.name;
      this._namespace = value.namespace;
      this._oKActions = value.oKActions;
      this._period = value.period;
      this._statistic = value.statistic;
      this._tags.internalValue = value.tags;
      this._threshold = value.threshold;
      this._thresholdMetricId = value.thresholdMetricId;
      this._treatMissingData = value.treatMissingData;
      this._unit = value.unit;
    }
  }

  // actions_enabled - computed: false, optional: true, required: false
  private _actionsEnabled?: boolean | cdktf.IResolvable; 
  public get actionsEnabled() {
    return this.getBooleanAttribute('actions_enabled');
  }
  public set actionsEnabled(value: boolean | cdktf.IResolvable) {
    this._actionsEnabled = value;
  }
  public resetActionsEnabled() {
    this._actionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsEnabledInput() {
    return this._actionsEnabled;
  }

  // alarm_actions - computed: false, optional: true, required: false
  private _alarmActions?: string[]; 
  public get alarmActions() {
    return this.getListAttribute('alarm_actions');
  }
  public set alarmActions(value: string[]) {
    this._alarmActions = value;
  }
  public resetAlarmActions() {
    this._alarmActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmActionsInput() {
    return this._alarmActions;
  }

  // alarm_description - computed: false, optional: true, required: false
  private _alarmDescription?: string; 
  public get alarmDescription() {
    return this.getStringAttribute('alarm_description');
  }
  public set alarmDescription(value: string) {
    this._alarmDescription = value;
  }
  public resetAlarmDescription() {
    this._alarmDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alarmDescriptionInput() {
    return this._alarmDescription;
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // datapoints_to_alarm - computed: false, optional: true, required: false
  private _datapointsToAlarm?: number; 
  public get datapointsToAlarm() {
    return this.getNumberAttribute('datapoints_to_alarm');
  }
  public set datapointsToAlarm(value: number) {
    this._datapointsToAlarm = value;
  }
  public resetDatapointsToAlarm() {
    this._datapointsToAlarm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datapointsToAlarmInput() {
    return this._datapointsToAlarm;
  }

  // dimensions - computed: false, optional: true, required: false
  private _dimensions = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensionsList(this, "dimensions", false);
  public get dimensions() {
    return this._dimensions;
  }
  public putDimensions(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecDimensions[] | cdktf.IResolvable) {
    this._dimensions.internalValue = value;
  }
  public resetDimensions() {
    this._dimensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dimensionsInput() {
    return this._dimensions.internalValue;
  }

  // evaluate_low_sample_count_percentile - computed: false, optional: true, required: false
  private _evaluateLowSampleCountPercentile?: string; 
  public get evaluateLowSampleCountPercentile() {
    return this.getStringAttribute('evaluate_low_sample_count_percentile');
  }
  public set evaluateLowSampleCountPercentile(value: string) {
    this._evaluateLowSampleCountPercentile = value;
  }
  public resetEvaluateLowSampleCountPercentile() {
    this._evaluateLowSampleCountPercentile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluateLowSampleCountPercentileInput() {
    return this._evaluateLowSampleCountPercentile;
  }

  // evaluation_periods - computed: false, optional: false, required: true
  private _evaluationPeriods?: number; 
  public get evaluationPeriods() {
    return this.getNumberAttribute('evaluation_periods');
  }
  public set evaluationPeriods(value: number) {
    this._evaluationPeriods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationPeriodsInput() {
    return this._evaluationPeriods;
  }

  // extended_statistic - computed: false, optional: true, required: false
  private _extendedStatistic?: string; 
  public get extendedStatistic() {
    return this.getStringAttribute('extended_statistic');
  }
  public set extendedStatistic(value: string) {
    this._extendedStatistic = value;
  }
  public resetExtendedStatistic() {
    this._extendedStatistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedStatisticInput() {
    return this._extendedStatistic;
  }

  // insufficient_data_actions - computed: false, optional: true, required: false
  private _insufficientDataActions?: string[]; 
  public get insufficientDataActions() {
    return this.getListAttribute('insufficient_data_actions');
  }
  public set insufficientDataActions(value: string[]) {
    this._insufficientDataActions = value;
  }
  public resetInsufficientDataActions() {
    this._insufficientDataActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insufficientDataActionsInput() {
    return this._insufficientDataActions;
  }

  // metric_name - computed: false, optional: true, required: false
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  public resetMetricName() {
    this._metricName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetricsList(this, "metrics", false);
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecMetrics[] | cdktf.IResolvable) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
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

  // namespace - computed: false, optional: true, required: false
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

  // o_k_actions - computed: false, optional: true, required: false
  private _oKActions?: string[]; 
  public get oKActions() {
    return this.getListAttribute('o_k_actions');
  }
  public set oKActions(value: string[]) {
    this._oKActions = value;
  }
  public resetOKActions() {
    this._oKActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oKActionsInput() {
    return this._oKActions;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // statistic - computed: false, optional: true, required: false
  private _statistic?: string; 
  public get statistic() {
    return this.getStringAttribute('statistic');
  }
  public set statistic(value: string) {
    this._statistic = value;
  }
  public resetStatistic() {
    this._statistic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticInput() {
    return this._statistic;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // threshold - computed: false, optional: true, required: false
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

  // threshold_metric_id - computed: false, optional: true, required: false
  private _thresholdMetricId?: string; 
  public get thresholdMetricId() {
    return this.getStringAttribute('threshold_metric_id');
  }
  public set thresholdMetricId(value: string) {
    this._thresholdMetricId = value;
  }
  public resetThresholdMetricId() {
    this._thresholdMetricId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdMetricIdInput() {
    return this._thresholdMetricId;
  }

  // treat_missing_data - computed: false, optional: true, required: false
  private _treatMissingData?: string; 
  public get treatMissingData() {
    return this.getStringAttribute('treat_missing_data');
  }
  public set treatMissingData(value: string) {
    this._treatMissingData = value;
  }
  public resetTreatMissingData() {
    this._treatMissingData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get treatMissingDataInput() {
    return this._treatMissingData;
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest k8s_cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest}
*/
export class DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest k8s_cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cloudwatch_services_k8s_aws_metric_alarm_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCloudwatchServicesK8SAwsMetricAlarmV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
