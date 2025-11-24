// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#metadata DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata;
  /**
  * AppWrapperSpec defines the desired state of the AppWrapper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#spec DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec;
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#annotations DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#labels DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#name DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#namespace DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadataToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#effect DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#key DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#operator DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#toleration_seconds DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#value DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations | cdktf.IResolvable): any {
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


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations | cdktf.IResolvable): any {
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos {
  /**
  * Annotations to be added to the PodSpecTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#annotations DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels to be added to the PodSepcTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#labels DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * NodeSelectors to be added to the PodSpecTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#node_selector DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Tolerations to be added to the PodSpecTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#tolerations DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#tolerations}
  */
  readonly tolerations?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations[] | cdktf.IResolvable;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    tolerations: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos | cdktf.IResolvable): any {
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
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos | cdktf.IResolvable | undefined {
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
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._nodeSelector = undefined;
      this._tolerations.internalValue = undefined;
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
      this._nodeSelector = value.nodeSelector;
      this._tolerations.internalValue = value.tolerations;
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

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosTolerations[] | cdktf.IResolvable) {
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

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets {
  /**
  * Path is the path Component.Template to the PodTemplateSpec for this PodSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#path DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#path}
  */
  readonly path: string;
  /**
  * Replicas is the number of pods in this PodSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#replicas DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#replicas}
  */
  readonly replicas?: number;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    replicas: cdktf.numberToTerraform(struct!.replicas),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._replicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._replicas = value.replicas;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
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
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents {
  /**
  * Annotations is an unstructured key value map that may be used to store and retrieve arbitrary metadata about the Component to customize its treatment by the AppWrapper controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#annotations DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * PodSetInfos assigned to the Component's PodSets by Kueue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#pod_set_infos DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#pod_set_infos}
  */
  readonly podSetInfos?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos[] | cdktf.IResolvable;
  /**
  * DeclaredPodSets for the Component (optional for known PodCreating GVKs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#pod_sets DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#pod_sets}
  */
  readonly podSets?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets[] | cdktf.IResolvable;
  /**
  * Template defines the Kubernetes resource for the Component
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#template DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#template}
  */
  readonly template: { [key: string]: string };
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    pod_set_infos: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosToTerraform, false)(struct!.podSetInfos),
    pod_sets: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsToTerraform, false)(struct!.podSets),
    template: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.template),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents | cdktf.IResolvable): any {
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
    pod_set_infos: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosToHclTerraform, false)(struct!.podSetInfos),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosList",
    },
    pod_sets: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsToHclTerraform, false)(struct!.podSets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsList",
    },
    template: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.template),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._podSetInfos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSetInfos = this._podSetInfos?.internalValue;
    }
    if (this._podSets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSets = this._podSets?.internalValue;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._podSetInfos.internalValue = undefined;
      this._podSets.internalValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._podSetInfos.internalValue = value.podSetInfos;
      this._podSets.internalValue = value.podSets;
      this._template = value.template;
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

  // pod_set_infos - computed: false, optional: true, required: false
  private _podSetInfos = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfosList(this, "pod_set_infos", false);
  public get podSetInfos() {
    return this._podSetInfos;
  }
  public putPodSetInfos(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetInfos[] | cdktf.IResolvable) {
    this._podSetInfos.internalValue = value;
  }
  public resetPodSetInfos() {
    this._podSetInfos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSetInfosInput() {
    return this._podSetInfos.internalValue;
  }

  // pod_sets - computed: false, optional: true, required: false
  private _podSets = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSetsList(this, "pod_sets", false);
  public get podSets() {
    return this._podSets;
  }
  public putPodSets(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsPodSets[] | cdktf.IResolvable) {
    this._podSets.internalValue = value;
  }
  public resetPodSets() {
    this._podSets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podSetsInput() {
    return this._podSets.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsOutputReference {
    return new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec {
  /**
  * Components lists the components contained in the AppWrapper
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#components DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#components}
  */
  readonly components: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents[] | cdktf.IResolvable;
  /**
  * ManagedBy is used to indicate the controller or entity that manages the AppWrapper.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#managed_by DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#managed_by}
  */
  readonly managedBy?: string;
  /**
  * Suspend suspends the AppWrapper when set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#suspend DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
}

export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecToTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsToTerraform, false)(struct!.components),
    managed_by: cdktf.stringToTerraform(struct!.managedBy),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
  }
}


export function dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsList",
    },
    managed_by: {
      value: cdktf.stringToHclTerraform(struct!.managedBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._managedBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedBy = this._managedBy;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._managedBy = undefined;
      this._suspend = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._managedBy = value.managedBy;
      this._suspend = value.suspend;
    }
  }

  // components - computed: false, optional: false, required: true
  private _components = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // managed_by - computed: false, optional: true, required: false
  private _managedBy?: string; 
  public get managedBy() {
    return this.getStringAttribute('managed_by');
  }
  public set managedBy(value: string) {
    this._managedBy = value;
  }
  public resetManagedBy() {
    this._managedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedByInput() {
    return this._managedBy;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest k8s_workload_codeflare_dev_app_wrapper_v1beta2_manifest}
*/
export class DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_workload_codeflare_dev_app_wrapper_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SWorkloadCodeflareDevAppWrapperV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_workload_codeflare_dev_app_wrapper_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/workload_codeflare_dev_app_wrapper_v1beta2_manifest k8s_workload_codeflare_dev_app_wrapper_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_workload_codeflare_dev_app_wrapper_v1beta2_manifest',
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
  private _metadata = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec) {
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
      metadata: dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkloadCodeflareDevAppWrapperV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
