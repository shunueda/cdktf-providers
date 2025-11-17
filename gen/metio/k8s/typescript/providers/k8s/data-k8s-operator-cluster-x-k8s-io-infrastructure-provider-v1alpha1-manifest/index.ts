// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#metadata DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata;
  /**
  * InfrastructureProviderSpec defines the desired state of InfrastructureProvider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#spec DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec;
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#annotations DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespace DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests {
  /**
  * Name defines the name of the configmap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace defines the namespace of the configmap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespace DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifestsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifestsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests | cdktf.IResolvable): any {
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_fields DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#preference DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#weight DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_fields DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#node_selector_terms DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#label_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#mismatch_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespace_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespaces DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#topology_key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#pod_affinity_term DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#weight DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#label_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#mismatch_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespace_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespaces DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#topology_key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#label_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#mismatch_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespace_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespaces DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#topology_key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#pod_affinity_term DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#weight DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#label_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#mismatch_label_keys DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespace_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#namespaces DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#topology_key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#node_affinity DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#pod_affinity DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#pod_anti_affinity DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#optional DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#api_version DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#field_path DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRefToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRefToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#container_name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#divisor DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#resource DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#optional DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#config_map_key_ref DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#field_ref DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#resource_field_ref DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#secret_key_ref DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previously defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. Double $$ are reduced to a single $, which allows for escaping the $(VAR_NAME) syntax: i.e. '$$(VAR_NAME)' will produce the string literal '$(VAR_NAME)'. Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#value DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#value_from DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv | cdktf.IResolvable): any {
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
    value_from: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv | cdktf.IResolvable | undefined {
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
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
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
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage {
  /**
  * Name allows to specify a name for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Repository sets the container registry to pull images from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#repository DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#repository}
  */
  readonly repository?: string;
  /**
  * Tag allows to specify a tag for the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#tag DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImageToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    repository: cdktf.stringToTerraform(struct!.repository),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImageToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage | cdktf.IResolvable): any {
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
    repository: {
      value: cdktf.stringToHclTerraform(struct!.repository),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._repository = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._repository = value.repository;
      this._tag = value.tag;
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

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#claims DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#limits DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#requests DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers {
  /**
  * Args represents extra provider specific flags that are not encoded as fields in this API. Explicit controller manager properties defined in the 'Provider.ManagerSpec' will have higher precedence than those defined in 'ContainerSpec.Args'. For example, 'ManagerSpec.SyncPeriod' will be used instead of the container arg '--sync-period' if both are defined. The same holds for 'ManagerSpec.FeatureGates' and '--feature-gates'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#args DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#args}
  */
  readonly args?: { [key: string]: string };
  /**
  * Command allows override container's entrypoint array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#command DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * List of environment variables to set in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#env DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv[] | cdktf.IResolvable;
  /**
  * Container Image Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#image DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#image}
  */
  readonly image?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage;
  /**
  * Name of the container. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Compute resources required by this container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#resources DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvToTerraform, false)(struct!.env),
    image: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImageToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesToTerraform(struct!.resources),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.args),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvList",
    },
    image: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env.internalValue = undefined;
      this._image.internalValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._env.internalValue = value.env;
      this._image.internalValue = value.image;
      this._name = value.name;
      this._resources.internalValue = value.resources;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: { [key: string]: string }; 
  public get args() {
    return this.getStringMapAttribute('args');
  }
  public set args(value: { [key: string]: string }) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersImage) {
    this._image.internalValue = value;
  }
  public resetImage() {
    this._image.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#effect DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#toleration_seconds DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#value DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

  // operator - computed: false, optional: true, required: false
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

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment {
  /**
  * If specified, the pod's scheduling constraints
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#affinity DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity;
  /**
  * List of containers specified in the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#containers DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#containers}
  */
  readonly containers?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers[] | cdktf.IResolvable;
  /**
  * List of image pull secrets specified in the Deployment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#image_pull_secrets DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets[] | cdktf.IResolvable;
  /**
  * NodeSelector is a selector which must be true for the pod to fit on a node. Selector which must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#node_selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Number of desired pods. This is a pointer to distinguish between explicit zero and not specified. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#replicas DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * If specified, the pod's service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#service_account_name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
  /**
  * If specified, the pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#tolerations DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations[] | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityToTerraform(struct!.affinity),
    containers: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersToTerraform, false)(struct!.containers),
    image_pull_secrets: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
    tolerations: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity",
    },
    containers: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersToHclTerraform, false)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersList",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsList",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._containers.internalValue = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._nodeSelector = undefined;
      this._replicas = undefined;
      this._serviceAccountName = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._containers.internalValue = value.containers;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._nodeSelector = value.nodeSelector;
      this._replicas = value.replicas;
      this._serviceAccountName = value.serviceAccountName;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#key DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#operator DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#values DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._operator = value.operator;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsOutputReference {
    return new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_expressions DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#match_labels DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig {
  /**
  * Selector to be used for fetching provider’s components and metadata from ConfigMaps stored inside the cluster. Each ConfigMap is expected to contain components and metadata for a specific version only. Note: the name of the ConfigMap should be set to the version or to override this add a label like the following: provider.cluster.x-k8s.io/version=v1.4.3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#selector DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector;
  /**
  * URL to be used for fetching the provider’s components and metadata from a remote Github repository. For example, https://github.com/{owner}/{repository}/releases You must set 'providerSpec.Version' field for operator to pick up desired version of the release from GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#url DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selector: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorToTerraform(struct!.selector),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selector: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._selector.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._selector.internalValue = value.selector;
      this._url = value.url;
    }
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController {
  /**
  * CacheSyncTimeout refers to the time limit set to wait for syncing caches. Defaults to 2 minutes if not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#cache_sync_timeout DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#cache_sync_timeout}
  */
  readonly cacheSyncTimeout?: number;
  /**
  * GroupKindConcurrency is a map from a Kind to the number of concurrent reconciliation allowed for that controller. When a controller is registered within this manager using the builder utilities, users have to specify the type the controller reconciles in the For(...) call. If the object's kind passed matches one of the keys in this map, the concurrency for that controller is set to the number specified. The key is expected to be consistent in form with GroupKind.String(), e.g. ReplicaSet in apps group (regardless of version) would be 'ReplicaSet.apps'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#group_kind_concurrency DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#group_kind_concurrency}
  */
  readonly groupKindConcurrency?: { [key: string]: string };
  /**
  * RecoverPanic indicates if panics should be recovered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#recover_panic DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#recover_panic}
  */
  readonly recoverPanic?: boolean | cdktf.IResolvable;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerControllerToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_sync_timeout: cdktf.numberToTerraform(struct!.cacheSyncTimeout),
    group_kind_concurrency: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.groupKindConcurrency),
    recover_panic: cdktf.booleanToTerraform(struct!.recoverPanic),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerControllerToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_sync_timeout: {
      value: cdktf.numberToHclTerraform(struct!.cacheSyncTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    group_kind_concurrency: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.groupKindConcurrency),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    recover_panic: {
      value: cdktf.booleanToHclTerraform(struct!.recoverPanic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerControllerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheSyncTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheSyncTimeout = this._cacheSyncTimeout;
    }
    if (this._groupKindConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupKindConcurrency = this._groupKindConcurrency;
    }
    if (this._recoverPanic !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoverPanic = this._recoverPanic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheSyncTimeout = undefined;
      this._groupKindConcurrency = undefined;
      this._recoverPanic = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheSyncTimeout = value.cacheSyncTimeout;
      this._groupKindConcurrency = value.groupKindConcurrency;
      this._recoverPanic = value.recoverPanic;
    }
  }

  // cache_sync_timeout - computed: false, optional: true, required: false
  private _cacheSyncTimeout?: number; 
  public get cacheSyncTimeout() {
    return this.getNumberAttribute('cache_sync_timeout');
  }
  public set cacheSyncTimeout(value: number) {
    this._cacheSyncTimeout = value;
  }
  public resetCacheSyncTimeout() {
    this._cacheSyncTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSyncTimeoutInput() {
    return this._cacheSyncTimeout;
  }

  // group_kind_concurrency - computed: false, optional: true, required: false
  private _groupKindConcurrency?: { [key: string]: string }; 
  public get groupKindConcurrency() {
    return this.getStringMapAttribute('group_kind_concurrency');
  }
  public set groupKindConcurrency(value: { [key: string]: string }) {
    this._groupKindConcurrency = value;
  }
  public resetGroupKindConcurrency() {
    this._groupKindConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKindConcurrencyInput() {
    return this._groupKindConcurrency;
  }

  // recover_panic - computed: false, optional: true, required: false
  private _recoverPanic?: boolean | cdktf.IResolvable; 
  public get recoverPanic() {
    return this.getBooleanAttribute('recover_panic');
  }
  public set recoverPanic(value: boolean | cdktf.IResolvable) {
    this._recoverPanic = value;
  }
  public resetRecoverPanic() {
    this._recoverPanic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoverPanicInput() {
    return this._recoverPanic;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth {
  /**
  * HealthProbeBindAddress is the TCP address that the controller should bind to for serving health probes It can be set to '0' or '' to disable serving the health probe.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#health_probe_bind_address DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#health_probe_bind_address}
  */
  readonly healthProbeBindAddress?: string;
  /**
  * LivenessEndpointName, defaults to 'healthz'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#liveness_endpoint_name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#liveness_endpoint_name}
  */
  readonly livenessEndpointName?: string;
  /**
  * ReadinessEndpointName, defaults to 'readyz'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#readiness_endpoint_name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#readiness_endpoint_name}
  */
  readonly readinessEndpointName?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealthToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    health_probe_bind_address: cdktf.stringToTerraform(struct!.healthProbeBindAddress),
    liveness_endpoint_name: cdktf.stringToTerraform(struct!.livenessEndpointName),
    readiness_endpoint_name: cdktf.stringToTerraform(struct!.readinessEndpointName),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealthToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    health_probe_bind_address: {
      value: cdktf.stringToHclTerraform(struct!.healthProbeBindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    liveness_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.livenessEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_endpoint_name: {
      value: cdktf.stringToHclTerraform(struct!.readinessEndpointName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._healthProbeBindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.healthProbeBindAddress = this._healthProbeBindAddress;
    }
    if (this._livenessEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessEndpointName = this._livenessEndpointName;
    }
    if (this._readinessEndpointName !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessEndpointName = this._readinessEndpointName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._healthProbeBindAddress = undefined;
      this._livenessEndpointName = undefined;
      this._readinessEndpointName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._healthProbeBindAddress = value.healthProbeBindAddress;
      this._livenessEndpointName = value.livenessEndpointName;
      this._readinessEndpointName = value.readinessEndpointName;
    }
  }

  // health_probe_bind_address - computed: false, optional: true, required: false
  private _healthProbeBindAddress?: string; 
  public get healthProbeBindAddress() {
    return this.getStringAttribute('health_probe_bind_address');
  }
  public set healthProbeBindAddress(value: string) {
    this._healthProbeBindAddress = value;
  }
  public resetHealthProbeBindAddress() {
    this._healthProbeBindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthProbeBindAddressInput() {
    return this._healthProbeBindAddress;
  }

  // liveness_endpoint_name - computed: false, optional: true, required: false
  private _livenessEndpointName?: string; 
  public get livenessEndpointName() {
    return this.getStringAttribute('liveness_endpoint_name');
  }
  public set livenessEndpointName(value: string) {
    this._livenessEndpointName = value;
  }
  public resetLivenessEndpointName() {
    this._livenessEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessEndpointNameInput() {
    return this._livenessEndpointName;
  }

  // readiness_endpoint_name - computed: false, optional: true, required: false
  private _readinessEndpointName?: string; 
  public get readinessEndpointName() {
    return this.getStringAttribute('readiness_endpoint_name');
  }
  public set readinessEndpointName(value: string) {
    this._readinessEndpointName = value;
  }
  public resetReadinessEndpointName() {
    this._readinessEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessEndpointNameInput() {
    return this._readinessEndpointName;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection {
  /**
  * leaderElect enables a leader election client to gain leadership before executing the main loop. Enable this when running replicated components for high availability.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#leader_elect DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#leader_elect}
  */
  readonly leaderElect: boolean | cdktf.IResolvable;
  /**
  * leaseDuration is the duration that non-leader candidates will wait after observing a leadership renewal until attempting to acquire leadership of a led but unrenewed leader slot. This is effectively the maximum duration that a leader can be stopped before it is replaced by another candidate. This is only applicable if leader election is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#lease_duration DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#lease_duration}
  */
  readonly leaseDuration: string;
  /**
  * renewDeadline is the interval between attempts by the acting master to renew a leadership slot before it stops leading. This must be less than or equal to the lease duration. This is only applicable if leader election is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#renew_deadline DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#renew_deadline}
  */
  readonly renewDeadline: string;
  /**
  * resourceLock indicates the resource object type that will be used to lock during leader election cycles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#resource_lock DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#resource_lock}
  */
  readonly resourceLock: string;
  /**
  * resourceName indicates the name of resource object that will be used to lock during leader election cycles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#resource_name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#resource_name}
  */
  readonly resourceName: string;
  /**
  * resourceName indicates the namespace of resource object that will be used to lock during leader election cycles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#resource_namespace DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#resource_namespace}
  */
  readonly resourceNamespace: string;
  /**
  * retryPeriod is the duration the clients should wait between attempting acquisition and renewal of a leadership. This is only applicable if leader election is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#retry_period DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#retry_period}
  */
  readonly retryPeriod: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElectionToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    leader_elect: cdktf.booleanToTerraform(struct!.leaderElect),
    lease_duration: cdktf.stringToTerraform(struct!.leaseDuration),
    renew_deadline: cdktf.stringToTerraform(struct!.renewDeadline),
    resource_lock: cdktf.stringToTerraform(struct!.resourceLock),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
    resource_namespace: cdktf.stringToTerraform(struct!.resourceNamespace),
    retry_period: cdktf.stringToTerraform(struct!.retryPeriod),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElectionToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    leader_elect: {
      value: cdktf.booleanToHclTerraform(struct!.leaderElect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    lease_duration: {
      value: cdktf.stringToHclTerraform(struct!.leaseDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_deadline: {
      value: cdktf.stringToHclTerraform(struct!.renewDeadline),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_lock: {
      value: cdktf.stringToHclTerraform(struct!.resourceLock),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_namespace: {
      value: cdktf.stringToHclTerraform(struct!.resourceNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_period: {
      value: cdktf.stringToHclTerraform(struct!.retryPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._leaderElect !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaderElect = this._leaderElect;
    }
    if (this._leaseDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaseDuration = this._leaseDuration;
    }
    if (this._renewDeadline !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewDeadline = this._renewDeadline;
    }
    if (this._resourceLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLock = this._resourceLock;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    if (this._resourceNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNamespace = this._resourceNamespace;
    }
    if (this._retryPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPeriod = this._retryPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._leaderElect = undefined;
      this._leaseDuration = undefined;
      this._renewDeadline = undefined;
      this._resourceLock = undefined;
      this._resourceName = undefined;
      this._resourceNamespace = undefined;
      this._retryPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._leaderElect = value.leaderElect;
      this._leaseDuration = value.leaseDuration;
      this._renewDeadline = value.renewDeadline;
      this._resourceLock = value.resourceLock;
      this._resourceName = value.resourceName;
      this._resourceNamespace = value.resourceNamespace;
      this._retryPeriod = value.retryPeriod;
    }
  }

  // leader_elect - computed: false, optional: false, required: true
  private _leaderElect?: boolean | cdktf.IResolvable; 
  public get leaderElect() {
    return this.getBooleanAttribute('leader_elect');
  }
  public set leaderElect(value: boolean | cdktf.IResolvable) {
    this._leaderElect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderElectInput() {
    return this._leaderElect;
  }

  // lease_duration - computed: false, optional: false, required: true
  private _leaseDuration?: string; 
  public get leaseDuration() {
    return this.getStringAttribute('lease_duration');
  }
  public set leaseDuration(value: string) {
    this._leaseDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leaseDurationInput() {
    return this._leaseDuration;
  }

  // renew_deadline - computed: false, optional: false, required: true
  private _renewDeadline?: string; 
  public get renewDeadline() {
    return this.getStringAttribute('renew_deadline');
  }
  public set renewDeadline(value: string) {
    this._renewDeadline = value;
  }
  // Temporarily expose input value. Use with caution.
  public get renewDeadlineInput() {
    return this._renewDeadline;
  }

  // resource_lock - computed: false, optional: false, required: true
  private _resourceLock?: string; 
  public get resourceLock() {
    return this.getStringAttribute('resource_lock');
  }
  public set resourceLock(value: string) {
    this._resourceLock = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLockInput() {
    return this._resourceLock;
  }

  // resource_name - computed: false, optional: false, required: true
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }

  // resource_namespace - computed: false, optional: false, required: true
  private _resourceNamespace?: string; 
  public get resourceNamespace() {
    return this.getStringAttribute('resource_namespace');
  }
  public set resourceNamespace(value: string) {
    this._resourceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamespaceInput() {
    return this._resourceNamespace;
  }

  // retry_period - computed: false, optional: false, required: true
  private _retryPeriod?: string; 
  public get retryPeriod() {
    return this.getStringAttribute('retry_period');
  }
  public set retryPeriod(value: string) {
    this._retryPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPeriodInput() {
    return this._retryPeriod;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics {
  /**
  * BindAddress is the TCP address that the controller should bind to for serving prometheus metrics. It can be set to '0' to disable the metrics serving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#bind_address DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#bind_address}
  */
  readonly bindAddress?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetricsToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bind_address: cdktf.stringToTerraform(struct!.bindAddress),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetricsToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bind_address: {
      value: cdktf.stringToHclTerraform(struct!.bindAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindAddress = this._bindAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bindAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bindAddress = value.bindAddress;
    }
  }

  // bind_address - computed: false, optional: true, required: false
  private _bindAddress?: string; 
  public get bindAddress() {
    return this.getStringAttribute('bind_address');
  }
  public set bindAddress(value: string) {
    this._bindAddress = value;
  }
  public resetBindAddress() {
    this._bindAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindAddressInput() {
    return this._bindAddress;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook {
  /**
  * CertDir is the directory that contains the server key and certificate. if not set, webhook server would look up the server key and certificate in {TempDir}/k8s-webhook-server/serving-certs. The server key and certificate must be named tls.key and tls.crt, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#cert_dir DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#cert_dir}
  */
  readonly certDir?: string;
  /**
  * Host is the hostname that the webhook server binds to. It is used to set webhook.Server.Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#host DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Port is the port that the webhook server serves at. It is used to set webhook.Server.Port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#port DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhookToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_dir: cdktf.stringToTerraform(struct!.certDir),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhookToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_dir: {
      value: cdktf.stringToHclTerraform(struct!.certDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.certDir = this._certDir;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certDir = undefined;
      this._host = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certDir = value.certDir;
      this._host = value.host;
      this._port = value.port;
    }
  }

  // cert_dir - computed: false, optional: true, required: false
  private _certDir?: string; 
  public get certDir() {
    return this.getStringAttribute('cert_dir');
  }
  public set certDir(value: string) {
    this._certDir = value;
  }
  public resetCertDir() {
    this._certDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certDirInput() {
    return this._certDir;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager {
  /**
  * CacheNamespace if specified restricts the manager's cache to watch objects in the desired namespace Defaults to all namespaces Note: If a namespace is specified, controllers can still Watch for a cluster-scoped resource (e.g Node). For namespaced resources the cache will only hold objects from the desired namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#cache_namespace DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#cache_namespace}
  */
  readonly cacheNamespace?: string;
  /**
  * Controller contains global configuration options for controllers registered within this manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#controller DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#controller}
  */
  readonly controller?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController;
  /**
  * FeatureGates define provider specific feature flags that will be passed in as container args to the provider's controller manager. Controller Manager flag is --feature-gates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#feature_gates DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#feature_gates}
  */
  readonly featureGates?: { [key: string]: string };
  /**
  * GracefulShutdownTimeout is the duration given to runnable to stop before the manager actually returns on stop. To disable graceful shutdown, set to time.Duration(0) To use graceful shutdown without timeout, set to a negative duration, e.G. time.Duration(-1) The graceful shutdown is skipped for safety reasons in case the leader election lease is lost.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#graceful_shut_down DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#graceful_shut_down}
  */
  readonly gracefulShutDown?: string;
  /**
  * Health contains the controller health configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#health DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#health}
  */
  readonly health?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth;
  /**
  * LeaderElection is the LeaderElection config to be used when configuring the manager.Manager leader election
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#leader_election DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#leader_election}
  */
  readonly leaderElection?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection;
  /**
  * MaxConcurrentReconciles is the maximum number of concurrent Reconciles which can be run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#max_concurrent_reconciles DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#max_concurrent_reconciles}
  */
  readonly maxConcurrentReconciles?: number;
  /**
  * Metrics contains the controller metrics configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#metrics DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#metrics}
  */
  readonly metrics?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics;
  /**
  * ProfilerAddress defines the bind address to expose the pprof profiler (e.g. localhost:6060). Default empty, meaning the profiler is disabled. Controller Manager flag is --profiler-address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#profiler_address DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#profiler_address}
  */
  readonly profilerAddress?: string;
  /**
  * SyncPeriod determines the minimum frequency at which watched resources are reconciled. A lower period will correct entropy more quickly, but reduce responsiveness to change if there are many watched resources. Change this value only if you know what you are doing. Defaults to 10 hours if unset. there will a 10 percent jitter between the SyncPeriod of all controllers so that all controllers will not send list requests simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#sync_period DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#sync_period}
  */
  readonly syncPeriod?: string;
  /**
  * Verbosity set the logs verbosity. Defaults to 1. Controller Manager flag is --verbosity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#verbosity DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#verbosity}
  */
  readonly verbosity?: number;
  /**
  * Webhook contains the controllers webhook configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#webhook DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#webhook}
  */
  readonly webhook?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_namespace: cdktf.stringToTerraform(struct!.cacheNamespace),
    controller: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerControllerToTerraform(struct!.controller),
    feature_gates: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.featureGates),
    graceful_shut_down: cdktf.stringToTerraform(struct!.gracefulShutDown),
    health: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealthToTerraform(struct!.health),
    leader_election: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElectionToTerraform(struct!.leaderElection),
    max_concurrent_reconciles: cdktf.numberToTerraform(struct!.maxConcurrentReconciles),
    metrics: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetricsToTerraform(struct!.metrics),
    profiler_address: cdktf.stringToTerraform(struct!.profilerAddress),
    sync_period: cdktf.stringToTerraform(struct!.syncPeriod),
    verbosity: cdktf.numberToTerraform(struct!.verbosity),
    webhook: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhookToTerraform(struct!.webhook),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_namespace: {
      value: cdktf.stringToHclTerraform(struct!.cacheNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    controller: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerControllerToHclTerraform(struct!.controller),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController",
    },
    feature_gates: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.featureGates),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    graceful_shut_down: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutDown),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    health: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealthToHclTerraform(struct!.health),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth",
    },
    leader_election: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElectionToHclTerraform(struct!.leaderElection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection",
    },
    max_concurrent_reconciles: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentReconciles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetricsToHclTerraform(struct!.metrics),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics",
    },
    profiler_address: {
      value: cdktf.stringToHclTerraform(struct!.profilerAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_period: {
      value: cdktf.stringToHclTerraform(struct!.syncPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbosity: {
      value: cdktf.numberToHclTerraform(struct!.verbosity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    webhook: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhookToHclTerraform(struct!.webhook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheNamespace = this._cacheNamespace;
    }
    if (this._controller?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller?.internalValue;
    }
    if (this._featureGates !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureGates = this._featureGates;
    }
    if (this._gracefulShutDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutDown = this._gracefulShutDown;
    }
    if (this._health?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.health = this._health?.internalValue;
    }
    if (this._leaderElection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.leaderElection = this._leaderElection?.internalValue;
    }
    if (this._maxConcurrentReconciles !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentReconciles = this._maxConcurrentReconciles;
    }
    if (this._metrics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metrics = this._metrics?.internalValue;
    }
    if (this._profilerAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.profilerAddress = this._profilerAddress;
    }
    if (this._syncPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPeriod = this._syncPeriod;
    }
    if (this._verbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbosity = this._verbosity;
    }
    if (this._webhook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webhook = this._webhook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheNamespace = undefined;
      this._controller.internalValue = undefined;
      this._featureGates = undefined;
      this._gracefulShutDown = undefined;
      this._health.internalValue = undefined;
      this._leaderElection.internalValue = undefined;
      this._maxConcurrentReconciles = undefined;
      this._metrics.internalValue = undefined;
      this._profilerAddress = undefined;
      this._syncPeriod = undefined;
      this._verbosity = undefined;
      this._webhook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheNamespace = value.cacheNamespace;
      this._controller.internalValue = value.controller;
      this._featureGates = value.featureGates;
      this._gracefulShutDown = value.gracefulShutDown;
      this._health.internalValue = value.health;
      this._leaderElection.internalValue = value.leaderElection;
      this._maxConcurrentReconciles = value.maxConcurrentReconciles;
      this._metrics.internalValue = value.metrics;
      this._profilerAddress = value.profilerAddress;
      this._syncPeriod = value.syncPeriod;
      this._verbosity = value.verbosity;
      this._webhook.internalValue = value.webhook;
    }
  }

  // cache_namespace - computed: false, optional: true, required: false
  private _cacheNamespace?: string; 
  public get cacheNamespace() {
    return this.getStringAttribute('cache_namespace');
  }
  public set cacheNamespace(value: string) {
    this._cacheNamespace = value;
  }
  public resetCacheNamespace() {
    this._cacheNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheNamespaceInput() {
    return this._cacheNamespace;
  }

  // controller - computed: false, optional: true, required: false
  private _controller = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerControllerOutputReference(this, "controller");
  public get controller() {
    return this._controller;
  }
  public putController(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerController) {
    this._controller.internalValue = value;
  }
  public resetController() {
    this._controller.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller.internalValue;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: { [key: string]: string }; 
  public get featureGates() {
    return this.getStringMapAttribute('feature_gates');
  }
  public set featureGates(value: { [key: string]: string }) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // graceful_shut_down - computed: false, optional: true, required: false
  private _gracefulShutDown?: string; 
  public get gracefulShutDown() {
    return this.getStringAttribute('graceful_shut_down');
  }
  public set gracefulShutDown(value: string) {
    this._gracefulShutDown = value;
  }
  public resetGracefulShutDown() {
    this._gracefulShutDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutDownInput() {
    return this._gracefulShutDown;
  }

  // health - computed: false, optional: true, required: false
  private _health = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealthOutputReference(this, "health");
  public get health() {
    return this._health;
  }
  public putHealth(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerHealth) {
    this._health.internalValue = value;
  }
  public resetHealth() {
    this._health.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get healthInput() {
    return this._health.internalValue;
  }

  // leader_election - computed: false, optional: true, required: false
  private _leaderElection = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElectionOutputReference(this, "leader_election");
  public get leaderElection() {
    return this._leaderElection;
  }
  public putLeaderElection(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerLeaderElection) {
    this._leaderElection.internalValue = value;
  }
  public resetLeaderElection() {
    this._leaderElection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get leaderElectionInput() {
    return this._leaderElection.internalValue;
  }

  // max_concurrent_reconciles - computed: false, optional: true, required: false
  private _maxConcurrentReconciles?: number; 
  public get maxConcurrentReconciles() {
    return this.getNumberAttribute('max_concurrent_reconciles');
  }
  public set maxConcurrentReconciles(value: number) {
    this._maxConcurrentReconciles = value;
  }
  public resetMaxConcurrentReconciles() {
    this._maxConcurrentReconciles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentReconcilesInput() {
    return this._maxConcurrentReconciles;
  }

  // metrics - computed: false, optional: true, required: false
  private _metrics = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // profiler_address - computed: false, optional: true, required: false
  private _profilerAddress?: string; 
  public get profilerAddress() {
    return this.getStringAttribute('profiler_address');
  }
  public set profilerAddress(value: string) {
    this._profilerAddress = value;
  }
  public resetProfilerAddress() {
    this._profilerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilerAddressInput() {
    return this._profilerAddress;
  }

  // sync_period - computed: false, optional: true, required: false
  private _syncPeriod?: string; 
  public get syncPeriod() {
    return this.getStringAttribute('sync_period');
  }
  public set syncPeriod(value: string) {
    this._syncPeriod = value;
  }
  public resetSyncPeriod() {
    this._syncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPeriodInput() {
    return this._syncPeriod;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: number; 
  public get verbosity() {
    return this.getNumberAttribute('verbosity');
  }
  public set verbosity(value: number) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }

  // webhook - computed: false, optional: true, required: false
  private _webhook = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhookOutputReference(this, "webhook");
  public get webhook() {
    return this._webhook;
  }
  public putWebhook(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerWebhook) {
    this._webhook.internalValue = value;
  }
  public resetWebhook() {
    this._webhook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webhookInput() {
    return this._webhook.internalValue;
  }
}
export interface DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec {
  /**
  * AdditionalManifests is reference to configmap that contains additional manifests that will be applied together with the provider components. The key for storing these manifests has to be 'manifests'. The manifests are applied only once when a certain release is installed/upgraded. If namespace is not specified, the namespace of the provider will be used. There is no validation of the yaml content inside the configmap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#additional_manifests DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#additional_manifests}
  */
  readonly additionalManifests?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests;
  /**
  * Deployment defines the properties that can be enabled on the deployment for the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#deployment DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#deployment}
  */
  readonly deployment?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment;
  /**
  * FetchConfig determines how the operator will fetch the components and metadata for the provider. If nil, the operator will try to fetch components according to default embedded fetch configuration for the given kind and 'ObjectMeta.Name'. For example, the infrastructure name 'aws' will fetch artifacts from https://github.com/kubernetes-sigs/cluster-api-provider-aws/releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#fetch_config DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#fetch_config}
  */
  readonly fetchConfig?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig;
  /**
  * Manager defines the properties that can be enabled on the controller manager for the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#manager DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#manager}
  */
  readonly manager?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager;
  /**
  * SecretName is the name of the Secret providing the configuration variables for the current provider instance, like e.g. credentials. Such configurations will be used when creating or upgrading provider components. The contents of the secret will be treated as immutable. If changes need to be made, a new object can be created and the name should be updated. The contents should be in the form of key:value. This secret must be in the same namespace as the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#secret_name DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * SecretNamespace is the namespace of the Secret providing the configuration variables. If not specified, the namespace of the provider will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#secret_namespace DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#secret_namespace}
  */
  readonly secretNamespace?: string;
  /**
  * Version indicates the provider version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#version DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecToTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_manifests: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifestsToTerraform(struct!.additionalManifests),
    deployment: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentToTerraform(struct!.deployment),
    fetch_config: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigToTerraform(struct!.fetchConfig),
    manager: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerToTerraform(struct!.manager),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_manifests: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifestsToHclTerraform(struct!.additionalManifests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests",
    },
    deployment: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentToHclTerraform(struct!.deployment),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment",
    },
    fetch_config: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigToHclTerraform(struct!.fetchConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig",
    },
    manager: {
      value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerToHclTerraform(struct!.manager),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalManifests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalManifests = this._additionalManifests?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._fetchConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchConfig = this._fetchConfig?.internalValue;
    }
    if (this._manager?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manager = this._manager?.internalValue;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalManifests.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._fetchConfig.internalValue = undefined;
      this._manager.internalValue = undefined;
      this._secretName = undefined;
      this._secretNamespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalManifests.internalValue = value.additionalManifests;
      this._deployment.internalValue = value.deployment;
      this._fetchConfig.internalValue = value.fetchConfig;
      this._manager.internalValue = value.manager;
      this._secretName = value.secretName;
      this._secretNamespace = value.secretNamespace;
      this._version = value.version;
    }
  }

  // additional_manifests - computed: false, optional: true, required: false
  private _additionalManifests = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifestsOutputReference(this, "additional_manifests");
  public get additionalManifests() {
    return this._additionalManifests;
  }
  public putAdditionalManifests(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecAdditionalManifests) {
    this._additionalManifests.internalValue = value;
  }
  public resetAdditionalManifests() {
    this._additionalManifests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalManifestsInput() {
    return this._additionalManifests.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeploymentOutputReference(this, "deployment");
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecDeployment) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // fetch_config - computed: false, optional: true, required: false
  private _fetchConfig = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfigOutputReference(this, "fetch_config");
  public get fetchConfig() {
    return this._fetchConfig;
  }
  public putFetchConfig(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecFetchConfig) {
    this._fetchConfig.internalValue = value;
  }
  public resetFetchConfig() {
    this._fetchConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchConfigInput() {
    return this._fetchConfig.internalValue;
  }

  // manager - computed: false, optional: true, required: false
  private _manager = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManagerOutputReference(this, "manager");
  public get manager() {
    return this._manager;
  }
  public putManager(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecManager) {
    this._manager.internalValue = value;
  }
  public resetManager() {
    this._manager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager.internalValue;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest k8s_operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest}
*/
export class DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest k8s_operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_operator_cluster_x_k8s_io_infrastructure_provider_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec) {
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
      metadata: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SOperatorClusterXK8SIoInfrastructureProviderV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
