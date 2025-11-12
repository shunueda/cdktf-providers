// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#metadata DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#spec DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec;
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#annotations DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#labels DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#namespace DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#appkind DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#appkind}
  */
  readonly appkind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#applabel DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#applabel}
  */
  readonly applabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#appns DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#appns}
  */
  readonly appns?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfoToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    appkind: cdktf.stringToTerraform(struct!.appkind),
    applabel: cdktf.stringToTerraform(struct!.applabel),
    appns: cdktf.stringToTerraform(struct!.appns),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfoToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    appkind: {
      value: cdktf.stringToHclTerraform(struct!.appkind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    applabel: {
      value: cdktf.stringToHclTerraform(struct!.applabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    appns: {
      value: cdktf.stringToHclTerraform(struct!.appns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appkind !== undefined) {
      hasAnyValues = true;
      internalValueResult.appkind = this._appkind;
    }
    if (this._applabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.applabel = this._applabel;
    }
    if (this._appns !== undefined) {
      hasAnyValues = true;
      internalValueResult.appns = this._appns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appkind = undefined;
      this._applabel = undefined;
      this._appns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appkind = value.appkind;
      this._applabel = value.applabel;
      this._appns = value.appns;
    }
  }

  // appkind - computed: false, optional: true, required: false
  private _appkind?: string; 
  public get appkind() {
    return this.getStringAttribute('appkind');
  }
  public set appkind(value: string) {
    this._appkind = value;
  }
  public resetAppkind() {
    this._appkind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appkindInput() {
    return this._appkind;
  }

  // applabel - computed: false, optional: true, required: false
  private _applabel?: string; 
  public get applabel() {
    return this.getStringAttribute('applabel');
  }
  public set applabel(value: string) {
    this._applabel = value;
  }
  public resetApplabel() {
    this._applabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applabelInput() {
    return this._applabel;
  }

  // appns - computed: false, optional: true, required: false
  private _appns?: string; 
  public get appns() {
    return this.getStringAttribute('appns');
  }
  public set appns(value: string) {
    this._appns = value;
  }
  public resetAppns() {
    this._appns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appnsInput() {
    return this._appns;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations {
  /**
  * Effect to match. Empty means all effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#effect DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Taint key the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operators are Exists or Equal. Defaults to Equal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#operator DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Period of time the toleration tolerates the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#toleration_seconds DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#image DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#runner_annotations DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#runner_annotations}
  */
  readonly runnerAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#runner_labels DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#runner_labels}
  */
  readonly runnerLabels?: { [key: string]: string };
  /**
  * Pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#tolerations DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    runner_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runnerAnnotations),
    runner_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.runnerLabels),
    tolerations: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsToTerraform, false)(struct!.tolerations),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    runner_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runnerAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    runner_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.runnerLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._runnerAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerAnnotations = this._runnerAnnotations;
    }
    if (this._runnerLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.runnerLabels = this._runnerLabels;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._runnerAnnotations = undefined;
      this._runnerLabels = undefined;
      this._tolerations.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._runnerAnnotations = value.runnerAnnotations;
      this._runnerLabels = value.runnerLabels;
      this._tolerations.internalValue = value.tolerations;
      this._type = value.type;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // runner_annotations - computed: false, optional: true, required: false
  private _runnerAnnotations?: { [key: string]: string }; 
  public get runnerAnnotations() {
    return this.getStringMapAttribute('runner_annotations');
  }
  public set runnerAnnotations(value: { [key: string]: string }) {
    this._runnerAnnotations = value;
  }
  public resetRunnerAnnotations() {
    this._runnerAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerAnnotationsInput() {
    return this._runnerAnnotations;
  }

  // runner_labels - computed: false, optional: true, required: false
  private _runnerLabels?: { [key: string]: string }; 
  public get runnerLabels() {
    return this.getStringMapAttribute('runner_labels');
  }
  public set runnerLabels(value: { [key: string]: string }) {
    this._runnerLabels = value;
  }
  public resetRunnerLabels() {
    this._runnerLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerLabelsInput() {
    return this._runnerLabels;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#api_version DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#container_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#divisor DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#config_map_key_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, 'metadata.labels['<KEY>']', 'metadata.annotations['<KEY>']', spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP, status.podIPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource_field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_key_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromSecretKeyRef) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value_from DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv | cdktf.IResolvable): any {
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
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvValueFrom) {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._optional = value.optional;
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom {
  /**
  * The ConfigMap to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#config_map_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#config_map_ref}
  */
  readonly configMapRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef;
  /**
  * An optional identifier to prepend to each key in the ConfigMap. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#prefix DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The Secret to select from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRefToTerraform(struct!.configMapRef),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRefToHclTerraform(struct!.configMapRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRef = this._configMapRef?.internalValue;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = undefined;
      this._prefix = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRef.internalValue = value.configMapRef;
      this._prefix = value.prefix;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // config_map_ref - computed: false, optional: true, required: false
  private _configMapRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRefOutputReference(this, "config_map_ref");
  public get configMapRef() {
    return this._configMapRef;
  }
  public putConfigMapRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromConfigMapRef) {
    this._configMapRef.internalValue = value;
  }
  public resetConfigMapRef() {
    this._configMapRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefInput() {
    return this._configMapRef.internalValue;
  }

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mount_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar {
  /**
  * ENV contains ENV passed to the sidecar container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#env DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv[] | cdktf.IResolvable;
  /**
  * EnvFrom for the sidecar container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#env_from DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#env_from}
  */
  readonly envFrom?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#image DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#image_pull_policy DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secrets DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secrets}
  */
  readonly secrets?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromToTerraform, false)(struct!.envFrom),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    secrets: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsToTerraform, false)(struct!.secrets),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._secrets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._secrets.internalValue = value.secrets;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#runner DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#runner}
  */
  readonly runner?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#sidecar DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#sidecar}
  */
  readonly sidecar?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    runner: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerToTerraform(struct!.runner),
    sidecar: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarToTerraform, false)(struct!.sidecar),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    runner: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerToHclTerraform(struct!.runner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner",
    },
    sidecar: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarToHclTerraform, false)(struct!.sidecar),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._runner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runner = this._runner?.internalValue;
    }
    if (this._sidecar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecar = this._sidecar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._runner.internalValue = undefined;
      this._sidecar.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._runner.internalValue = value.runner;
      this._sidecar.internalValue = value.sidecar;
    }
  }

  // runner - computed: false, optional: true, required: false
  private _runner = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunnerOutputReference(this, "runner");
  public get runner() {
    return this._runner;
  }
  public putRunner(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsRunner) {
    this._runner.internalValue = value;
  }
  public resetRunner() {
    this._runner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runnerInput() {
    return this._runner.internalValue;
  }

  // sidecar - computed: false, optional: true, required: false
  private _sidecar = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecarList(this, "sidecar", false);
  public get sidecar() {
    return this._sidecar;
  }
  public putSidecar(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsSidecar[] | cdktf.IResolvable) {
    this._sidecar.internalValue = value;
  }
  public resetSidecar() {
    this._sidecar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInput() {
    return this._sidecar.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mount_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#api_version DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#container_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#divisor DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#config_map_key_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource_field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_key_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromSecretKeyRef) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value_from DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv | cdktf.IResolvable): any {
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
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvValueFrom) {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mount_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#delay DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#timeout DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#timeout}
  */
  readonly timeout?: number;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeoutsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delay: cdktf.numberToTerraform(struct!.delay),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeoutsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delay: {
      value: cdktf.numberToHclTerraform(struct!.delay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delay !== undefined) {
      hasAnyValues = true;
      internalValueResult.delay = this._delay;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delay = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delay = value.delay;
      this._timeout = value.timeout;
    }
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations {
  /**
  * Effect to match. Empty means all effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#effect DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Taint key the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operators are Exists or Equal. Defaults to Equal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#operator DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Period of time the toleration tolerates the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#toleration_seconds DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#config_maps DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#config_maps}
  */
  readonly configMaps?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#env DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#experiment_annotations DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#experiment_annotations}
  */
  readonly experimentAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#experiment_image DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#experiment_image}
  */
  readonly experimentImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#node_selector DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secrets DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secrets}
  */
  readonly secrets?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#status_check_timeouts DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#status_check_timeouts}
  */
  readonly statusCheckTimeouts?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts;
  /**
  * Pod's tolerations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#tolerations DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_maps: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsToTerraform, false)(struct!.configMaps),
    env: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvToTerraform, false)(struct!.env),
    experiment_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.experimentAnnotations),
    experiment_image: cdktf.stringToTerraform(struct!.experimentImage),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    secrets: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsToTerraform, false)(struct!.secrets),
    status_check_timeouts: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeoutsToTerraform(struct!.statusCheckTimeouts),
    tolerations: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsToTerraform, false)(struct!.tolerations),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_maps: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsToHclTerraform, false)(struct!.configMaps),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvList",
    },
    experiment_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.experimentAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    experiment_image: {
      value: cdktf.stringToHclTerraform(struct!.experimentImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    secrets: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsToHclTerraform, false)(struct!.secrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsList",
    },
    status_check_timeouts: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeoutsToHclTerraform(struct!.statusCheckTimeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMaps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMaps = this._configMaps?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._experimentAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentAnnotations = this._experimentAnnotations;
    }
    if (this._experimentImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.experimentImage = this._experimentImage;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._statusCheckTimeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCheckTimeouts = this._statusCheckTimeouts?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMaps.internalValue = undefined;
      this._env.internalValue = undefined;
      this._experimentAnnotations = undefined;
      this._experimentImage = undefined;
      this._nodeSelector = undefined;
      this._secrets.internalValue = undefined;
      this._statusCheckTimeouts.internalValue = undefined;
      this._tolerations.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMaps.internalValue = value.configMaps;
      this._env.internalValue = value.env;
      this._experimentAnnotations = value.experimentAnnotations;
      this._experimentImage = value.experimentImage;
      this._nodeSelector = value.nodeSelector;
      this._secrets.internalValue = value.secrets;
      this._statusCheckTimeouts.internalValue = value.statusCheckTimeouts;
      this._tolerations.internalValue = value.tolerations;
    }
  }

  // config_maps - computed: false, optional: true, required: false
  private _configMaps = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMapsList(this, "config_maps", false);
  public get configMaps() {
    return this._configMaps;
  }
  public putConfigMaps(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsConfigMaps[] | cdktf.IResolvable) {
    this._configMaps.internalValue = value;
  }
  public resetConfigMaps() {
    this._configMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapsInput() {
    return this._configMaps.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // experiment_annotations - computed: false, optional: true, required: false
  private _experimentAnnotations?: { [key: string]: string }; 
  public get experimentAnnotations() {
    return this.getStringMapAttribute('experiment_annotations');
  }
  public set experimentAnnotations(value: { [key: string]: string }) {
    this._experimentAnnotations = value;
  }
  public resetExperimentAnnotations() {
    this._experimentAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentAnnotationsInput() {
    return this._experimentAnnotations;
  }

  // experiment_image - computed: false, optional: true, required: false
  private _experimentImage?: string; 
  public get experimentImage() {
    return this.getStringAttribute('experiment_image');
  }
  public set experimentImage(value: string) {
    this._experimentImage = value;
  }
  public resetExperimentImage() {
    this._experimentImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentImageInput() {
    return this._experimentImage;
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

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecretsList(this, "secrets", false);
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsSecrets[] | cdktf.IResolvable) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // status_check_timeouts - computed: false, optional: true, required: false
  private _statusCheckTimeouts = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeoutsOutputReference(this, "status_check_timeouts");
  public get statusCheckTimeouts() {
    return this._statusCheckTimeouts;
  }
  public putStatusCheckTimeouts(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsStatusCheckTimeouts) {
    this._statusCheckTimeouts.internalValue = value;
  }
  public resetStatusCheckTimeouts() {
    this._statusCheckTimeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCheckTimeoutsInput() {
    return this._statusCheckTimeouts.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsTolerations[] | cdktf.IResolvable) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#criteria DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparatorToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparatorToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#api_version DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#container_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#divisor DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom {
  /**
  * Selects a key of a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#config_map_key_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef;
  /**
  * Selects a field of the pod: supports metadata.name, metadata.namespace, metadata.labels, metadata.annotations, spec.nodeName, spec.serviceAccountName, status.hostIP, status.podIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, limits.ephemeral-storage, requests.cpu, requests.memory and requests.ephemeral-storage) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource_field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef;
  /**
  * Selects a key of a secret in the pod's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_key_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom | cdktf.IResolvable | undefined) {
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
  private _configMapKeyRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromConfigMapKeyRef) {
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
  private _fieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromFieldRef) {
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
  private _resourceFieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromResourceFieldRef) {
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
  private _secretKeyRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromSecretKeyRef) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any service environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to ''.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Source for the environment variable's value. Cannot be used if value is not empty.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value_from DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv | cdktf.IResolvable): any {
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
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv | cdktf.IResolvable | undefined) {
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
  private _valueFrom = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvValueFrom) {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets {
  /**
  * Name of the referent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets | cdktf.IResolvable | undefined) {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations {
  /**
  * Effect to match. Empty means all effects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#effect DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Taint key the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operators are Exists or Equal. Defaults to Equal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#operator DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Period of time the toleration tolerates the taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#toleration_seconds DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mount_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mount_propagation DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#sub_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive. This field is beta in 1.15.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#sub_path_expr DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#partition DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * Specify 'true' to force and set the ReadOnly property in VolumeMounts to 'true'. If omitted, the default is 'false'. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Unique ID of the persistent disk resource in AWS (Amazon EBS volume). More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_id DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStoreToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStoreToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk {
  /**
  * Host Caching mode: None, Read Only, Read Write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#caching_mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#caching_mode}
  */
  readonly cachingMode?: string;
  /**
  * The Name of the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#disk_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#disk_name}
  */
  readonly diskName: string;
  /**
  * The URI the data disk in the blob storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#disk_uri DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#disk_uri}
  */
  readonly diskUri: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Expected values Shared: multiple blob disks per storage account Dedicated: single blob disk per storage account Managed: azure managed data disk (only in managed availability set). defaults to shared
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#kind DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDiskToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    caching_mode: cdktf.stringToTerraform(struct!.cachingMode),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    disk_uri: cdktf.stringToTerraform(struct!.diskUri),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    kind: cdktf.stringToTerraform(struct!.kind),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDiskToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    caching_mode: {
      value: cdktf.stringToHclTerraform(struct!.cachingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_uri: {
      value: cdktf.stringToHclTerraform(struct!.diskUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cachingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cachingMode = this._cachingMode;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._diskUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskUri = this._diskUri;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cachingMode = undefined;
      this._diskName = undefined;
      this._diskUri = undefined;
      this._fsType = undefined;
      this._kind = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cachingMode = value.cachingMode;
      this._diskName = value.diskName;
      this._diskUri = value.diskUri;
      this._fsType = value.fsType;
      this._kind = value.kind;
      this._readOnly = value.readOnly;
    }
  }

  // caching_mode - computed: false, optional: true, required: false
  private _cachingMode?: string; 
  public get cachingMode() {
    return this.getStringAttribute('caching_mode');
  }
  public set cachingMode(value: string) {
    this._cachingMode = value;
  }
  public resetCachingMode() {
    this._cachingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachingModeInput() {
    return this._cachingMode;
  }

  // disk_name - computed: false, optional: false, required: true
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
  }

  // disk_uri - computed: false, optional: false, required: true
  private _diskUri?: string; 
  public get diskUri() {
    return this.getStringAttribute('disk_uri');
  }
  public set diskUri(value: string) {
    this._diskUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get diskUriInput() {
    return this._diskUri;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile {
  /**
  * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * the name of secret that contains Azure Storage Account Name and Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Share Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#share_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#share_name}
  */
  readonly shareName: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFileToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    share_name: cdktf.stringToTerraform(struct!.shareName),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFileToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    share_name: {
      value: cdktf.stringToHclTerraform(struct!.shareName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._shareName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareName = this._shareName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnly = undefined;
      this._secretName = undefined;
      this._shareName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnly = value.readOnly;
      this._secretName = value.secretName;
      this._shareName = value.shareName;
    }
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // share_name - computed: false, optional: false, required: true
  private _shareName?: string; 
  public get shareName() {
    return this.getStringAttribute('share_name');
  }
  public set shareName(value: string) {
    this._shareName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNameInput() {
    return this._shareName;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs {
  /**
  * Required: Monitors is a collection of Ceph monitors More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#monitors DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * Optional: Used as the mounted root, rather than the full Ceph tree, default is /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional: SecretFile is the path to key ring for User, default is /etc/ceph/user.secret More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_file DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_file}
  */
  readonly secretFile?: string;
  /**
  * Optional: SecretRef is reference to the authentication secret for User, default is empty. More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef;
  /**
  * Optional: User is the rados user name, default is admin More info: https://examples.k8s.io/volumes/cephfs/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#user DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_file: cdktf.stringToTerraform(struct!.secretFile),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_file: {
      value: cdktf.stringToHclTerraform(struct!.secretFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretFile = this._secretFile;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._monitors = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._secretFile = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._monitors = value.monitors;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._secretFile = value.secretFile;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_file - computed: false, optional: true, required: false
  private _secretFile?: string; 
  public get secretFile() {
    return this.getStringAttribute('secret_file');
  }
  public set secretFile(value: string) {
    this._secretFile = value;
  }
  public resetSecretFile() {
    this._secretFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretFileInput() {
    return this._secretFile;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional: points to a secret object containing parameters used to connect to OpenStack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef;
  /**
  * volume id used to identify the volume in cinder. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_id DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRefToTerraform(struct!.secretRef),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems {
  /**
  * The key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#default_mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#items DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsList",
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
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
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi {
  /**
  * Driver is the name of the CSI driver that handles this volume. Consult with your admin for the correct name as registered in the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#driver DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Ex. 'ext4', 'xfs', 'ntfs'. If not provided, the empty value is passed to the associated CSI driver which will determine the default filesystem to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * NodePublishSecretRef is a reference to the secret object containing sensitive information to pass to the CSI driver to complete the CSI NodePublishVolume and NodeUnpublishVolume calls. This field is optional, and may be empty if no secret is required. If the secret object contains more than one secret, all secret references are passed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#node_publish_secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#node_publish_secret_ref}
  */
  readonly nodePublishSecretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef;
  /**
  * Specifies a read-only configuration for the volume. Defaults to false (read/write).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * VolumeAttributes stores driver-specific properties that are passed to the CSI driver. Consult your driver's documentation for supported values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_attributes DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_attributes}
  */
  readonly volumeAttributes?: { [key: string]: string };
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    node_publish_secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRefToTerraform(struct!.nodePublishSecretRef),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeAttributes),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_publish_secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRefToHclTerraform(struct!.nodePublishSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.volumeAttributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._nodePublishSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodePublishSecretRef = this._nodePublishSecretRef?.internalValue;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributes = this._volumeAttributes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._nodePublishSecretRef.internalValue = undefined;
      this._readOnly = undefined;
      this._volumeAttributes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._nodePublishSecretRef.internalValue = value.nodePublishSecretRef;
      this._readOnly = value.readOnly;
      this._volumeAttributes = value.volumeAttributes;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // node_publish_secret_ref - computed: false, optional: true, required: false
  private _nodePublishSecretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRefOutputReference(this, "node_publish_secret_ref");
  public get nodePublishSecretRef() {
    return this._nodePublishSecretRef;
  }
  public putNodePublishSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiNodePublishSecretRef) {
    this._nodePublishSecretRef.internalValue = value;
  }
  public resetNodePublishSecretRef() {
    this._nodePublishSecretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePublishSecretRefInput() {
    return this._nodePublishSecretRef.internalValue;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_attributes - computed: false, optional: true, required: false
  private _volumeAttributes?: { [key: string]: string }; 
  public get volumeAttributes() {
    return this.getStringMapAttribute('volume_attributes');
  }
  public set volumeAttributes(value: { [key: string]: string }) {
    this._volumeAttributes = value;
  }
  public resetVolumeAttributes() {
    this._volumeAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesInput() {
    return this._volumeAttributes;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#api_version DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#container_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#divisor DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource_field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#default_mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * Items is a list of downward API volume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#items DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir {
  /**
  * What type of storage medium should back this directory. The default is '' which means to use the node's default medium. Must be an empty string (default) or Memory. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#medium DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#medium}
  */
  readonly medium?: string;
  /**
  * Total amount of local storage required for this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. The default is nil which means that the limit is undefined. More info: http://kubernetes.io/docs/user-guide/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#size_limit DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#size_limit}
  */
  readonly sizeLimit?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDirToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDirToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Optional: FC target lun number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#lun DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional: FC target worldwide names (WWNs)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#target_ww_ns DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#target_ww_ns}
  */
  readonly targetWwNs?: string[];
  /**
  * Optional: FC volume world wide identifiers (wwids) Either wwids or combination of targetWWNs and lun must be set, but not both simultaneously.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#wwids DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#wwids}
  */
  readonly wwids?: string[];
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFcToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    lun: cdktf.numberToTerraform(struct!.lun),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    target_ww_ns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetWwNs),
    wwids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.wwids),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFcToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target_ww_ns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetWwNs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    wwids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.wwids),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._targetWwNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetWwNs = this._targetWwNs;
    }
    if (this._wwids !== undefined) {
      hasAnyValues = true;
      internalValueResult.wwids = this._wwids;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._lun = undefined;
      this._readOnly = undefined;
      this._targetWwNs = undefined;
      this._wwids = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._lun = value.lun;
      this._readOnly = value.readOnly;
      this._targetWwNs = value.targetWwNs;
      this._wwids = value.wwids;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // target_ww_ns - computed: false, optional: true, required: false
  private _targetWwNs?: string[]; 
  public get targetWwNs() {
    return this.getListAttribute('target_ww_ns');
  }
  public set targetWwNs(value: string[]) {
    this._targetWwNs = value;
  }
  public resetTargetWwNs() {
    this._targetWwNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetWwNsInput() {
    return this._targetWwNs;
  }

  // wwids - computed: false, optional: true, required: false
  private _wwids?: string[]; 
  public get wwids() {
    return this.getListAttribute('wwids');
  }
  public set wwids(value: string[]) {
    this._wwids = value;
  }
  public resetWwids() {
    this._wwids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wwidsInput() {
    return this._wwids;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume {
  /**
  * Driver is the name of the driver to use for this volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#driver DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#driver}
  */
  readonly driver: string;
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. The default filesystem depends on FlexVolume script.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Optional: Extra command options if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#options DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Optional: Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Optional: SecretRef is reference to the secret object containing sensitive information to pass to the plugin scripts. This may be empty if no secret object is specified. If the secret object contains more than one secret, all secrets are passed to the plugin scripts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    driver: cdktf.stringToTerraform(struct!.driver),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRefToTerraform(struct!.secretRef),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    driver: {
      value: cdktf.stringToHclTerraform(struct!.driver),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._driver !== undefined) {
      hasAnyValues = true;
      internalValueResult.driver = this._driver;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._driver = undefined;
      this._fsType = undefined;
      this._options = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._driver = value.driver;
      this._fsType = value.fsType;
      this._options = value.options;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
    }
  }

  // driver - computed: false, optional: false, required: true
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker {
  /**
  * Name of the dataset stored as metadata -> name on the dataset for Flocker should be considered as deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#dataset_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#dataset_name}
  */
  readonly datasetName?: string;
  /**
  * UUID of the dataset. This is unique identifier of a Flocker dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#dataset_uuid DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#dataset_uuid}
  */
  readonly datasetUuid?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlockerToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_name: cdktf.stringToTerraform(struct!.datasetName),
    dataset_uuid: cdktf.stringToTerraform(struct!.datasetUuid),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlockerToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_name: {
      value: cdktf.stringToHclTerraform(struct!.datasetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dataset_uuid: {
      value: cdktf.stringToHclTerraform(struct!.datasetUuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlockerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetName = this._datasetName;
    }
    if (this._datasetUuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetUuid = this._datasetUuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datasetName = undefined;
      this._datasetUuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datasetName = value.datasetName;
      this._datasetUuid = value.datasetUuid;
    }
  }

  // dataset_name - computed: false, optional: true, required: false
  private _datasetName?: string; 
  public get datasetName() {
    return this.getStringAttribute('dataset_name');
  }
  public set datasetName(value: string) {
    this._datasetName = value;
  }
  public resetDatasetName() {
    this._datasetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetNameInput() {
    return this._datasetName;
  }

  // dataset_uuid - computed: false, optional: true, required: false
  private _datasetUuid?: string; 
  public get datasetUuid() {
    return this.getStringAttribute('dataset_uuid');
  }
  public set datasetUuid(value: string) {
    this._datasetUuid = value;
  }
  public resetDatasetUuid() {
    this._datasetUuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetUuidInput() {
    return this._datasetUuid;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * The partition in the volume that you want to mount. If omitted, the default is to mount by volume name. Examples: For volume /dev/sda1, you specify the partition as '1'. Similarly, the volume partition for /dev/sda is '0' (or you can leave the property empty). More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#partition DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#partition}
  */
  readonly partition?: number;
  /**
  * Unique name of the PD resource in GCE. Used to identify the disk in GCE. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#pd_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#pd_name}
  */
  readonly pdName: string;
  /**
  * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDiskToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    partition: cdktf.numberToTerraform(struct!.partition),
    pd_name: cdktf.stringToTerraform(struct!.pdName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDiskToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition: {
      value: cdktf.numberToHclTerraform(struct!.partition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pd_name: {
      value: cdktf.stringToHclTerraform(struct!.pdName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._partition !== undefined) {
      hasAnyValues = true;
      internalValueResult.partition = this._partition;
    }
    if (this._pdName !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdName = this._pdName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._partition = undefined;
      this._pdName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._partition = value.partition;
      this._pdName = value.pdName;
      this._readOnly = value.readOnly;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // partition - computed: false, optional: true, required: false
  private _partition?: number; 
  public get partition() {
    return this.getNumberAttribute('partition');
  }
  public set partition(value: number) {
    this._partition = value;
  }
  public resetPartition() {
    this._partition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionInput() {
    return this._partition;
  }

  // pd_name - computed: false, optional: false, required: true
  private _pdName?: string; 
  public get pdName() {
    return this.getStringAttribute('pd_name');
  }
  public set pdName(value: string) {
    this._pdName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdNameInput() {
    return this._pdName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo {
  /**
  * Target directory name. Must not contain or start with '..'. If '.' is supplied, the volume directory will be the git repository. Otherwise, if specified, the volume will contain the git repository in the subdirectory with the given name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#directory DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#directory}
  */
  readonly directory?: string;
  /**
  * Repository URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#repository DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#repository}
  */
  readonly repository: string;
  /**
  * Commit hash for the specified revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#revision DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#revision}
  */
  readonly revision?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepoToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    directory: cdktf.stringToTerraform(struct!.directory),
    repository: cdktf.stringToTerraform(struct!.repository),
    revision: cdktf.stringToTerraform(struct!.revision),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepoToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    directory: {
      value: cdktf.stringToHclTerraform(struct!.directory),
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
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._directory !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory;
    }
    if (this._repository !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._directory = undefined;
      this._repository = undefined;
      this._revision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._directory = value.directory;
      this._repository = value.repository;
      this._revision = value.revision;
    }
  }

  // directory - computed: false, optional: true, required: false
  private _directory?: string; 
  public get directory() {
    return this.getStringAttribute('directory');
  }
  public set directory(value: string) {
    this._directory = value;
  }
  public resetDirectory() {
    this._directory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs {
  /**
  * EndpointsName is the endpoint name that details Glusterfs topology. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#endpoints DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#endpoints}
  */
  readonly endpoints: string;
  /**
  * Path is the Glusterfs volume path. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * ReadOnly here will force the Glusterfs volume to be mounted with read-only permissions. Defaults to false. More info: https://examples.k8s.io/volumes/glusterfs/README.md#create-a-pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoints: cdktf.stringToTerraform(struct!.endpoints),
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoints: {
      value: cdktf.stringToHclTerraform(struct!.endpoints),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpoints !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoints = this._endpoints;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpoints = undefined;
      this._path = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpoints = value.endpoints;
      this._path = value.path;
      this._readOnly = value.readOnly;
    }
  }

  // endpoints - computed: false, optional: false, required: true
  private _endpoints?: string; 
  public get endpoints() {
    return this.getStringAttribute('endpoints');
  }
  public set endpoints(value: string) {
    this._endpoints = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointsInput() {
    return this._endpoints;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath {
  /**
  * Path of the directory on the host. If the path is a symlink, it will follow the link to the real path. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Type for HostPath Volume Defaults to '' More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPathToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPathToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._type = value.type;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi {
  /**
  * whether support iSCSI Discovery CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#chap_auth_discovery DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#chap_auth_discovery}
  */
  readonly chapAuthDiscovery?: boolean | cdktf.IResolvable;
  /**
  * whether support iSCSI Session CHAP authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#chap_auth_session DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#chap_auth_session}
  */
  readonly chapAuthSession?: boolean | cdktf.IResolvable;
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#iscsi TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Custom iSCSI Initiator Name. If initiatorName is specified with iscsiInterface simultaneously, new iSCSI interface <target portal>:<volume name> will be created for the connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#initiator_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#initiator_name}
  */
  readonly initiatorName?: string;
  /**
  * Target iSCSI Qualified Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#iqn DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#iqn}
  */
  readonly iqn: string;
  /**
  * iSCSI Interface Name that uses an iSCSI transport. Defaults to 'default' (tcp).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#iscsi_interface DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#iscsi_interface}
  */
  readonly iscsiInterface?: string;
  /**
  * iSCSI Target Lun number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#lun DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#lun}
  */
  readonly lun: number;
  /**
  * iSCSI Target Portal List. The portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#portals DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#portals}
  */
  readonly portals?: string[];
  /**
  * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * CHAP Secret for iSCSI target and initiator authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef;
  /**
  * iSCSI Target Portal. The Portal is either an IP or ip_addr:port if the port is other than default (typically TCP ports 860 and 3260).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#target_portal DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#target_portal}
  */
  readonly targetPortal: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chap_auth_discovery: cdktf.booleanToTerraform(struct!.chapAuthDiscovery),
    chap_auth_session: cdktf.booleanToTerraform(struct!.chapAuthSession),
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    initiator_name: cdktf.stringToTerraform(struct!.initiatorName),
    iqn: cdktf.stringToTerraform(struct!.iqn),
    iscsi_interface: cdktf.stringToTerraform(struct!.iscsiInterface),
    lun: cdktf.numberToTerraform(struct!.lun),
    portals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.portals),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRefToTerraform(struct!.secretRef),
    target_portal: cdktf.stringToTerraform(struct!.targetPortal),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chap_auth_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    chap_auth_session: {
      value: cdktf.booleanToHclTerraform(struct!.chapAuthSession),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initiator_name: {
      value: cdktf.stringToHclTerraform(struct!.initiatorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iqn: {
      value: cdktf.stringToHclTerraform(struct!.iqn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iscsi_interface: {
      value: cdktf.stringToHclTerraform(struct!.iscsiInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    portals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.portals),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef",
    },
    target_portal: {
      value: cdktf.stringToHclTerraform(struct!.targetPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chapAuthDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthDiscovery = this._chapAuthDiscovery;
    }
    if (this._chapAuthSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.chapAuthSession = this._chapAuthSession;
    }
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._initiatorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatorName = this._initiatorName;
    }
    if (this._iqn !== undefined) {
      hasAnyValues = true;
      internalValueResult.iqn = this._iqn;
    }
    if (this._iscsiInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsiInterface = this._iscsiInterface;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._portals !== undefined) {
      hasAnyValues = true;
      internalValueResult.portals = this._portals;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._targetPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPortal = this._targetPortal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = undefined;
      this._chapAuthSession = undefined;
      this._fsType = undefined;
      this._initiatorName = undefined;
      this._iqn = undefined;
      this._iscsiInterface = undefined;
      this._lun = undefined;
      this._portals = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._targetPortal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chapAuthDiscovery = value.chapAuthDiscovery;
      this._chapAuthSession = value.chapAuthSession;
      this._fsType = value.fsType;
      this._initiatorName = value.initiatorName;
      this._iqn = value.iqn;
      this._iscsiInterface = value.iscsiInterface;
      this._lun = value.lun;
      this._portals = value.portals;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._targetPortal = value.targetPortal;
    }
  }

  // chap_auth_discovery - computed: false, optional: true, required: false
  private _chapAuthDiscovery?: boolean | cdktf.IResolvable; 
  public get chapAuthDiscovery() {
    return this.getBooleanAttribute('chap_auth_discovery');
  }
  public set chapAuthDiscovery(value: boolean | cdktf.IResolvable) {
    this._chapAuthDiscovery = value;
  }
  public resetChapAuthDiscovery() {
    this._chapAuthDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthDiscoveryInput() {
    return this._chapAuthDiscovery;
  }

  // chap_auth_session - computed: false, optional: true, required: false
  private _chapAuthSession?: boolean | cdktf.IResolvable; 
  public get chapAuthSession() {
    return this.getBooleanAttribute('chap_auth_session');
  }
  public set chapAuthSession(value: boolean | cdktf.IResolvable) {
    this._chapAuthSession = value;
  }
  public resetChapAuthSession() {
    this._chapAuthSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chapAuthSessionInput() {
    return this._chapAuthSession;
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // initiator_name - computed: false, optional: true, required: false
  private _initiatorName?: string; 
  public get initiatorName() {
    return this.getStringAttribute('initiator_name');
  }
  public set initiatorName(value: string) {
    this._initiatorName = value;
  }
  public resetInitiatorName() {
    this._initiatorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatorNameInput() {
    return this._initiatorName;
  }

  // iqn - computed: false, optional: false, required: true
  private _iqn?: string; 
  public get iqn() {
    return this.getStringAttribute('iqn');
  }
  public set iqn(value: string) {
    this._iqn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get iqnInput() {
    return this._iqn;
  }

  // iscsi_interface - computed: false, optional: true, required: false
  private _iscsiInterface?: string; 
  public get iscsiInterface() {
    return this.getStringAttribute('iscsi_interface');
  }
  public set iscsiInterface(value: string) {
    this._iscsiInterface = value;
  }
  public resetIscsiInterface() {
    this._iscsiInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInterfaceInput() {
    return this._iscsiInterface;
  }

  // lun - computed: false, optional: false, required: true
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
  }

  // portals - computed: false, optional: true, required: false
  private _portals?: string[]; 
  public get portals() {
    return this.getListAttribute('portals');
  }
  public set portals(value: string[]) {
    this._portals = value;
  }
  public resetPortals() {
    this._portals = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalsInput() {
    return this._portals;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // target_portal - computed: false, optional: false, required: true
  private _targetPortal?: string; 
  public get targetPortal() {
    return this.getStringAttribute('target_portal');
  }
  public set targetPortal(value: string) {
    this._targetPortal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPortalInput() {
    return this._targetPortal;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs {
  /**
  * Path that is exported by the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * ReadOnly here will force the NFS export to be mounted with read-only permissions. Defaults to false. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Server is the hostname or IP address of the NFS server. More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#server DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#server}
  */
  readonly server: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs | cdktf.IResolvable): any {
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
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

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim {
  /**
  * ClaimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#claim_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaimToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaimToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * ID that identifies Photon Controller persistent disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#pd_id DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#pd_id}
  */
  readonly pdId: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDiskToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    pd_id: cdktf.stringToTerraform(struct!.pdId),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDiskToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pd_id: {
      value: cdktf.stringToHclTerraform(struct!.pdId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDiskOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._pdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.pdId = this._pdId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._pdId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._pdId = value.pdId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // pd_id - computed: false, optional: false, required: true
  private _pdId?: string; 
  public get pdId() {
    return this.getStringAttribute('pd_id');
  }
  public set pdId(value: string) {
    this._pdId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pdIdInput() {
    return this._pdId;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume {
  /**
  * FSType represents the filesystem type to mount Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * VolumeID uniquely identifies a Portworx volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_id DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_id}
  */
  readonly volumeId: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolumeToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolumeToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._volumeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._volumeId = value.volumeId;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // volume_id - computed: false, optional: false, required: true
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems {
  /**
  * The key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap {
  /**
  * If unspecified, each key-value pair in the Data field of the referenced ConfigMap will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the ConfigMap, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#items DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the ConfigMap or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsList",
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef {
  /**
  * Version of the schema the FieldPath is written in terms of, defaults to 'v1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#api_version DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Path of the field to select in the specified API version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef {
  /**
  * Container name: required for volumes, optional for env vars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#container_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Specifies the output format of the exposed resources, defaults to '1'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#divisor DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Required: resource to select
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems {
  /**
  * Required: Selects a field of the pod: only annotations, labels, name and namespace are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * Required: Path is the relative path name of the file to be created. Must not be absolute or contain the '..' path. Must be utf-8 encoded. The first item of the relative path must not start with '..'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
  /**
  * Selects a resource of the container: only resources limits and requests (limits.cpu, limits.memory, requests.cpu and requests.memory) are currently supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource_field_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRefToTerraform(struct!.fieldRef),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    resource_field_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToTerraform(struct!.resourceFieldRef),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef",
    },
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_field_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._resourceFieldRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRef.internalValue = value.fieldRef;
      this._mode = value.mode;
      this._path = value.path;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
    }
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi {
  /**
  * Items is a list of DownwardAPIVolume file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#items DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsToTerraform, false)(struct!.items),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._items.internalValue = value.items;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems {
  /**
  * The key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret {
  /**
  * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#items DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsList",
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken {
  /**
  * Audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#audience DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * ExpirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#expiration_seconds DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * Path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountTokenToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
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
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources {
  /**
  * information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#config_map DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap;
  /**
  * information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#downward_api DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi;
  /**
  * information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret;
  /**
  * information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#service_account_token DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi",
    },
    secret: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret",
    },
    service_account_token: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected {
  /**
  * Mode bits to use on created files by default. Must be a value between 0 and 0777. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#default_mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * list of volume projections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#sources DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#sources}
  */
  readonly sources: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: false, required: true
  private _sources = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte {
  /**
  * Group to map volume access to Default is no group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#group DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * ReadOnly here will force the Quobyte volume to be mounted with read-only permissions. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Registry represents a single or multiple Quobyte Registry services specified as a string as host:port pair (multiple entries are separated with commas) which acts as the central registry for volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#registry DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#registry}
  */
  readonly registry: string;
  /**
  * Tenant owning the given Quobyte volume in the Backend Used with dynamically provisioned Quobyte volumes, value is set by the plugin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#tenant DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#tenant}
  */
  readonly tenant?: string;
  /**
  * User to map volume access to Defaults to serivceaccount user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#user DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#user}
  */
  readonly user?: string;
  /**
  * Volume is a string that references an already created Quobyte volume by name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume}
  */
  readonly volume: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyteToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    registry: cdktf.stringToTerraform(struct!.registry),
    tenant: cdktf.stringToTerraform(struct!.tenant),
    user: cdktf.stringToTerraform(struct!.user),
    volume: cdktf.stringToTerraform(struct!.volume),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyteToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    registry: {
      value: cdktf.stringToHclTerraform(struct!.registry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant: {
      value: cdktf.stringToHclTerraform(struct!.tenant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume: {
      value: cdktf.stringToHclTerraform(struct!.volume),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._registry !== undefined) {
      hasAnyValues = true;
      internalValueResult.registry = this._registry;
    }
    if (this._tenant !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenant = this._tenant;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._volume !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._readOnly = undefined;
      this._registry = undefined;
      this._tenant = undefined;
      this._user = undefined;
      this._volume = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._readOnly = value.readOnly;
      this._registry = value.registry;
      this._tenant = value.tenant;
      this._user = value.user;
      this._volume = value.volume;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // tenant - computed: false, optional: true, required: false
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  public resetTenant() {
    this._tenant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // volume - computed: false, optional: false, required: true
  private _volume?: string; 
  public get volume() {
    return this.getStringAttribute('volume');
  }
  public set volume(value: string) {
    this._volume = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd {
  /**
  * Filesystem type of the volume that you want to mount. Tip: Ensure that the filesystem type is supported by the host operating system. Examples: 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified. More info: https://kubernetes.io/docs/concepts/storage/volumes#rbd TODO: how do we prevent errors in the filesystem from compromising the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * The rados image name. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#image DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Keyring is the path to key ring for RBDUser. Default is /etc/ceph/keyring. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#keyring DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#keyring}
  */
  readonly keyring?: string;
  /**
  * A collection of Ceph monitors. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#monitors DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#monitors}
  */
  readonly monitors: string[];
  /**
  * The rados pool name. Default is rbd. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#pool DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#pool}
  */
  readonly pool?: string;
  /**
  * ReadOnly here will force the ReadOnly setting in VolumeMounts. Defaults to false. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * SecretRef is name of the authentication secret for RBDUser. If provided overrides keyring. Default is nil. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef;
  /**
  * The rados user name. Default is admin. More info: https://examples.k8s.io/volumes/rbd/README.md#how-to-use-it
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#user DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    image: cdktf.stringToTerraform(struct!.image),
    keyring: cdktf.stringToTerraform(struct!.keyring),
    monitors: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitors),
    pool: cdktf.stringToTerraform(struct!.pool),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRefToTerraform(struct!.secretRef),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keyring: {
      value: cdktf.stringToHclTerraform(struct!.keyring),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitors: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitors),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._keyring !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyring = this._keyring;
    }
    if (this._monitors !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitors = this._monitors;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._image = undefined;
      this._keyring = undefined;
      this._monitors = undefined;
      this._pool = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._image = value.image;
      this._keyring = value.keyring;
      this._monitors = value.monitors;
      this._pool = value.pool;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._user = value.user;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // keyring - computed: false, optional: true, required: false
  private _keyring?: string; 
  public get keyring() {
    return this.getStringAttribute('keyring');
  }
  public set keyring(value: string) {
    this._keyring = value;
  }
  public resetKeyring() {
    this._keyring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyringInput() {
    return this._keyring;
  }

  // monitors - computed: false, optional: false, required: true
  private _monitors?: string[]; 
  public get monitors() {
    return this.getListAttribute('monitors');
  }
  public set monitors(value: string[]) {
    this._monitors = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorsInput() {
    return this._monitors;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Default is 'xfs'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * The host address of the ScaleIO API Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#gateway DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#gateway}
  */
  readonly gateway: string;
  /**
  * The name of the ScaleIO Protection Domain for the configured storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#protection_domain DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#protection_domain}
  */
  readonly protectionDomain?: string;
  /**
  * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * SecretRef references to the secret for ScaleIO user and other sensitive information. If this is not provided, Login operation will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef;
  /**
  * Flag to enable/disable SSL communication with Gateway, default false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#ssl_enabled DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the storage for a volume should be ThickProvisioned or ThinProvisioned. Default is ThinProvisioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#storage_mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#storage_mode}
  */
  readonly storageMode?: string;
  /**
  * The ScaleIO Storage Pool associated with the protection domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#storage_pool DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#storage_pool}
  */
  readonly storagePool?: string;
  /**
  * The name of the storage system as configured in ScaleIO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#system DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#system}
  */
  readonly systemAttribute: string;
  /**
  * The name of a volume already created in the ScaleIO system that is associated with this volume source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    gateway: cdktf.stringToTerraform(struct!.gateway),
    protection_domain: cdktf.stringToTerraform(struct!.protectionDomain),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRefToTerraform(struct!.secretRef),
    ssl_enabled: cdktf.booleanToTerraform(struct!.sslEnabled),
    storage_mode: cdktf.stringToTerraform(struct!.storageMode),
    storage_pool: cdktf.stringToTerraform(struct!.storagePool),
    system: cdktf.stringToTerraform(struct!.systemAttribute),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway: {
      value: cdktf.stringToHclTerraform(struct!.gateway),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protection_domain: {
      value: cdktf.stringToHclTerraform(struct!.protectionDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef",
    },
    ssl_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_mode: {
      value: cdktf.stringToHclTerraform(struct!.storageMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_pool: {
      value: cdktf.stringToHclTerraform(struct!.storagePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    system: {
      value: cdktf.stringToHclTerraform(struct!.systemAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._gateway !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway = this._gateway;
    }
    if (this._protectionDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectionDomain = this._protectionDomain;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._sslEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnabled = this._sslEnabled;
    }
    if (this._storageMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageMode = this._storageMode;
    }
    if (this._storagePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePool = this._storagePool;
    }
    if (this._system !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAttribute = this._system;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._gateway = undefined;
      this._protectionDomain = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._sslEnabled = undefined;
      this._storageMode = undefined;
      this._storagePool = undefined;
      this._system = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._gateway = value.gateway;
      this._protectionDomain = value.protectionDomain;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._sslEnabled = value.sslEnabled;
      this._storageMode = value.storageMode;
      this._storagePool = value.storagePool;
      this._system = value.systemAttribute;
      this._volumeName = value.volumeName;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // gateway - computed: false, optional: false, required: true
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // protection_domain - computed: false, optional: true, required: false
  private _protectionDomain?: string; 
  public get protectionDomain() {
    return this.getStringAttribute('protection_domain');
  }
  public set protectionDomain(value: string) {
    this._protectionDomain = value;
  }
  public resetProtectionDomain() {
    this._protectionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectionDomainInput() {
    return this._protectionDomain;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: false, required: true
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoSecretRef) {
    this._secretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // ssl_enabled - computed: false, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage_mode - computed: false, optional: true, required: false
  private _storageMode?: string; 
  public get storageMode() {
    return this.getStringAttribute('storage_mode');
  }
  public set storageMode(value: string) {
    this._storageMode = value;
  }
  public resetStorageMode() {
    this._storageMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageModeInput() {
    return this._storageMode;
  }

  // storage_pool - computed: false, optional: true, required: false
  private _storagePool?: string; 
  public get storagePool() {
    return this.getStringAttribute('storage_pool');
  }
  public set storagePool(value: string) {
    this._storagePool = value;
  }
  public resetStoragePool() {
    this._storagePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolInput() {
    return this._storagePool;
  }

  // system - computed: false, optional: false, required: true
  private _system?: string; 
  public get systemAttribute() {
    return this.getStringAttribute('system');
  }
  public set systemAttribute(value: string) {
    this._system = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems {
  /**
  * The key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#key DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Optional: mode bits to use on this file, must be a value between 0 and 0777. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret {
  /**
  * Optional: mode bits to use on created files by default. Must be a value between 0 and 0777. Defaults to 0644. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#default_mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * If unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#items DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#items}
  */
  readonly items?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems[] | cdktf.IResolvable;
  /**
  * Specify whether the Secret or its keys must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#optional DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Name of the secret in the pod's namespace to use. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    items: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsToTerraform, false)(struct!.items),
    optional: cdktf.booleanToTerraform(struct!.optional),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    items: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._items.internalValue = undefined;
      this._optional = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._items.internalValue = value.items;
      this._optional = value.optional;
      this._secretName = value.secretName;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRefToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRefToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef | cdktf.IResolvable): any {
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Defaults to false (read/write). ReadOnly here will force the ReadOnly setting in VolumeMounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#read_only DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * SecretRef specifies the secret to use for obtaining the StorageOS API credentials. If not specified, default values will be attempted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret_ref DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret_ref}
  */
  readonly secretRef?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef;
  /**
  * VolumeName is the human-readable name of the StorageOS volume. Volume names are only unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
  /**
  * VolumeNamespace specifies the scope of the volume within StorageOS. If no namespace is specified then the Pod's namespace will be used. This allows the Kubernetes name scoping to be mirrored within StorageOS for tighter integration. Set VolumeName to any name to override the default behaviour. Set to 'default' if you are not using namespaces within StorageOS. Namespaces that do not pre-exist within StorageOS will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_namespace DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_namespace}
  */
  readonly volumeNamespace?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    secret_ref: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRefToTerraform(struct!.secretRef),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_namespace: cdktf.stringToTerraform(struct!.volumeNamespace),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_ref: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRefToHclTerraform(struct!.secretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_namespace: {
      value: cdktf.stringToHclTerraform(struct!.volumeNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._secretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRef = this._secretRef?.internalValue;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeNamespace = this._volumeNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._readOnly = undefined;
      this._secretRef.internalValue = undefined;
      this._volumeName = undefined;
      this._volumeNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._readOnly = value.readOnly;
      this._secretRef.internalValue = value.secretRef;
      this._volumeName = value.volumeName;
      this._volumeNamespace = value.volumeNamespace;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // secret_ref - computed: false, optional: true, required: false
  private _secretRef = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRefOutputReference(this, "secret_ref");
  public get secretRef() {
    return this._secretRef;
  }
  public putSecretRef(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosSecretRef) {
    this._secretRef.internalValue = value;
  }
  public resetSecretRef() {
    this._secretRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefInput() {
    return this._secretRef.internalValue;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_namespace - computed: false, optional: true, required: false
  private _volumeNamespace?: string; 
  public get volumeNamespace() {
    return this.getStringAttribute('volume_namespace');
  }
  public set volumeNamespace(value: string) {
    this._volumeNamespace = value;
  }
  public resetVolumeNamespace() {
    this._volumeNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNamespaceInput() {
    return this._volumeNamespace;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume {
  /**
  * Filesystem type to mount. Must be a filesystem type supported by the host operating system. Ex. 'ext4', 'xfs', 'ntfs'. Implicitly inferred to be 'ext4' if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fs_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fs_type}
  */
  readonly fsType?: string;
  /**
  * Storage Policy Based Management (SPBM) profile ID associated with the StoragePolicyName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#storage_policy_id DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#storage_policy_id}
  */
  readonly storagePolicyId?: string;
  /**
  * Storage Policy Based Management (SPBM) profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#storage_policy_name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * Path that identifies vSphere volume vmdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_path}
  */
  readonly volumePath: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolumeToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_type: cdktf.stringToTerraform(struct!.fsType),
    storage_policy_id: cdktf.stringToTerraform(struct!.storagePolicyId),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    volume_path: cdktf.stringToTerraform(struct!.volumePath),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolumeToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_type: {
      value: cdktf.stringToHclTerraform(struct!.fsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_path: {
      value: cdktf.stringToHclTerraform(struct!.volumePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsType = this._fsType;
    }
    if (this._storagePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyId = this._storagePolicyId;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._volumePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumePath = this._volumePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsType = undefined;
      this._storagePolicyId = undefined;
      this._storagePolicyName = undefined;
      this._volumePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsType = value.fsType;
      this._storagePolicyId = value.storagePolicyId;
      this._storagePolicyName = value.storagePolicyName;
      this._volumePath = value.volumePath;
    }
  }

  // fs_type - computed: false, optional: true, required: false
  private _fsType?: string; 
  public get fsType() {
    return this.getStringAttribute('fs_type');
  }
  public set fsType(value: string) {
    this._fsType = value;
  }
  public resetFsType() {
    this._fsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsTypeInput() {
    return this._fsType;
  }

  // storage_policy_id - computed: false, optional: true, required: false
  private _storagePolicyId?: string; 
  public get storagePolicyId() {
    return this.getStringAttribute('storage_policy_id');
  }
  public set storagePolicyId(value: string) {
    this._storagePolicyId = value;
  }
  public resetStoragePolicyId() {
    this._storagePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyIdInput() {
    return this._storagePolicyId;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // volume_path - computed: false, optional: false, required: true
  private _volumePath?: string; 
  public get volumePath() {
    return this.getStringAttribute('volume_path');
  }
  public set volumePath(value: string) {
    this._volumePath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumePathInput() {
    return this._volumePath;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes {
  /**
  * AWSElasticBlockStore represents an AWS Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#awselasticblockstore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#aws_elastic_block_store DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#aws_elastic_block_store}
  */
  readonly awsElasticBlockStore?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore;
  /**
  * AzureDisk represents an Azure Data Disk mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#azure_disk DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#azure_disk}
  */
  readonly azureDisk?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk;
  /**
  * AzureFile represents an Azure File Service mount on the host and bind mount to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#azure_file DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#azure_file}
  */
  readonly azureFile?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile;
  /**
  * CephFS represents a Ceph FS mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#cephfs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#cephfs}
  */
  readonly cephfs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs;
  /**
  * Cinder represents a cinder volume attached and mounted on kubelets host machine. More info: https://examples.k8s.io/mysql-cinder-pd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#cinder DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#cinder}
  */
  readonly cinder?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder;
  /**
  * ConfigMap represents a configMap that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#config_map DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#config_map}
  */
  readonly configMap?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap;
  /**
  * CSI (Container Storage Interface) represents storage that is handled by an external CSI driver (Alpha feature).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#csi DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#csi}
  */
  readonly csi?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi;
  /**
  * DownwardAPI represents downward API about the pod that should populate this volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#downward_api DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi;
  /**
  * EmptyDir represents a temporary directory that shares a pod's lifetime. More info: https://kubernetes.io/docs/concepts/storage/volumes#emptydir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#empty_dir DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#empty_dir}
  */
  readonly emptyDir?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir;
  /**
  * FC represents a Fibre Channel resource that is attached to a kubelet's host machine and then exposed to the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#fc DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#fc}
  */
  readonly fc?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc;
  /**
  * FlexVolume represents a generic volume resource that is provisioned/attached using an exec based plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#flex_volume DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#flex_volume}
  */
  readonly flexVolume?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume;
  /**
  * Flocker represents a Flocker volume attached to a kubelet's host machine. This depends on the Flocker control service being running
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#flocker DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#flocker}
  */
  readonly flocker?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker;
  /**
  * GCEPersistentDisk represents a GCE Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://kubernetes.io/docs/concepts/storage/volumes#gcepersistentdisk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#gce_persistent_disk DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#gce_persistent_disk}
  */
  readonly gcePersistentDisk?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk;
  /**
  * GitRepo represents a git repository at a particular revision. DEPRECATED: GitRepo is deprecated. To provision a container with a git repo, mount an EmptyDir into an InitContainer that clones the repo using git, then mount the EmptyDir into the Pod's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#git_repo DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#git_repo}
  */
  readonly gitRepo?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo;
  /**
  * Glusterfs represents a Glusterfs mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/glusterfs/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#glusterfs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#glusterfs}
  */
  readonly glusterfs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs;
  /**
  * HostPath represents a pre-existing file or directory on the host machine that is directly exposed to the container. This is generally used for system agents or other privileged things that are allowed to see the host machine. Most containers will NOT need this. More info: https://kubernetes.io/docs/concepts/storage/volumes#hostpath --- TODO(jonesdl) We need to restrict who can use host directory mounts and who can/can not mount host directories as read/write.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#host_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#host_path}
  */
  readonly hostPath?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath;
  /**
  * ISCSI represents an ISCSI Disk resource that is attached to a kubelet's host machine and then exposed to the pod. More info: https://examples.k8s.io/volumes/iscsi/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#iscsi DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#iscsi}
  */
  readonly iscsi?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi;
  /**
  * Volume's name. Must be a DNS_LABEL and unique within the pod. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * NFS represents an NFS mount on the host that shares a pod's lifetime More info: https://kubernetes.io/docs/concepts/storage/volumes#nfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#nfs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs;
  /**
  * PersistentVolumeClaimVolumeSource represents a reference to a PersistentVolumeClaim in the same namespace. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#persistent_volume_claim DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim;
  /**
  * PhotonPersistentDisk represents a PhotonController persistent disk attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#photon_persistent_disk DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#photon_persistent_disk}
  */
  readonly photonPersistentDisk?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk;
  /**
  * PortworxVolume represents a portworx volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#portworx_volume DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#portworx_volume}
  */
  readonly portworxVolume?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume;
  /**
  * Items for all in one resources secrets, configmaps, and downward API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#projected DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#projected}
  */
  readonly projected?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected;
  /**
  * Quobyte represents a Quobyte mount on the host that shares a pod's lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#quobyte DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#quobyte}
  */
  readonly quobyte?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte;
  /**
  * RBD represents a Rados Block Device mount on the host that shares a pod's lifetime. More info: https://examples.k8s.io/volumes/rbd/README.md
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#rbd DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#rbd}
  */
  readonly rbd?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd;
  /**
  * ScaleIO represents a ScaleIO persistent volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#scale_io DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#scale_io}
  */
  readonly scaleIo?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo;
  /**
  * Secret represents a secret that should populate this volume. More info: https://kubernetes.io/docs/concepts/storage/volumes#secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#secret DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#secret}
  */
  readonly secret?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret;
  /**
  * StorageOS represents a StorageOS volume attached and mounted on Kubernetes nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#storageos DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#storageos}
  */
  readonly storageos?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos;
  /**
  * VsphereVolume represents a vSphere volume attached and mounted on kubelets host machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#vsphere_volume DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#vsphere_volume}
  */
  readonly vsphereVolume?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_elastic_block_store: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStoreToTerraform(struct!.awsElasticBlockStore),
    azure_disk: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDiskToTerraform(struct!.azureDisk),
    azure_file: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFileToTerraform(struct!.azureFile),
    cephfs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsToTerraform(struct!.cephfs),
    cinder: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderToTerraform(struct!.cinder),
    config_map: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapToTerraform(struct!.configMap),
    csi: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiToTerraform(struct!.csi),
    downward_api: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiToTerraform(struct!.downwardApi),
    empty_dir: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDirToTerraform(struct!.emptyDir),
    fc: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFcToTerraform(struct!.fc),
    flex_volume: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeToTerraform(struct!.flexVolume),
    flocker: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlockerToTerraform(struct!.flocker),
    gce_persistent_disk: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDiskToTerraform(struct!.gcePersistentDisk),
    git_repo: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepoToTerraform(struct!.gitRepo),
    glusterfs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfsToTerraform(struct!.glusterfs),
    host_path: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPathToTerraform(struct!.hostPath),
    iscsi: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiToTerraform(struct!.iscsi),
    name: cdktf.stringToTerraform(struct!.name),
    nfs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfsToTerraform(struct!.nfs),
    persistent_volume_claim: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
    photon_persistent_disk: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDiskToTerraform(struct!.photonPersistentDisk),
    portworx_volume: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolumeToTerraform(struct!.portworxVolume),
    projected: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedToTerraform(struct!.projected),
    quobyte: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyteToTerraform(struct!.quobyte),
    rbd: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdToTerraform(struct!.rbd),
    scale_io: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoToTerraform(struct!.scaleIo),
    secret: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretToTerraform(struct!.secret),
    storageos: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosToTerraform(struct!.storageos),
    vsphere_volume: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolumeToTerraform(struct!.vsphereVolume),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_elastic_block_store: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStoreToHclTerraform(struct!.awsElasticBlockStore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore",
    },
    azure_disk: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDiskToHclTerraform(struct!.azureDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk",
    },
    azure_file: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFileToHclTerraform(struct!.azureFile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile",
    },
    cephfs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsToHclTerraform(struct!.cephfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs",
    },
    cinder: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderToHclTerraform(struct!.cinder),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder",
    },
    config_map: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap",
    },
    csi: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiToHclTerraform(struct!.csi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi",
    },
    downward_api: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi",
    },
    empty_dir: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir",
    },
    fc: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFcToHclTerraform(struct!.fc),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc",
    },
    flex_volume: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeToHclTerraform(struct!.flexVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume",
    },
    flocker: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlockerToHclTerraform(struct!.flocker),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker",
    },
    gce_persistent_disk: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDiskToHclTerraform(struct!.gcePersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk",
    },
    git_repo: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepoToHclTerraform(struct!.gitRepo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo",
    },
    glusterfs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfsToHclTerraform(struct!.glusterfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs",
    },
    host_path: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPathToHclTerraform(struct!.hostPath),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath",
    },
    iscsi: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiToHclTerraform(struct!.iscsi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nfs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs",
    },
    persistent_volume_claim: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim",
    },
    photon_persistent_disk: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDiskToHclTerraform(struct!.photonPersistentDisk),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk",
    },
    portworx_volume: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolumeToHclTerraform(struct!.portworxVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume",
    },
    projected: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedToHclTerraform(struct!.projected),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected",
    },
    quobyte: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyteToHclTerraform(struct!.quobyte),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte",
    },
    rbd: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdToHclTerraform(struct!.rbd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd",
    },
    scale_io: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoToHclTerraform(struct!.scaleIo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo",
    },
    secret: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret",
    },
    storageos: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosToHclTerraform(struct!.storageos),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos",
    },
    vsphere_volume: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolumeToHclTerraform(struct!.vsphereVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsElasticBlockStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsElasticBlockStore = this._awsElasticBlockStore?.internalValue;
    }
    if (this._azureDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureDisk = this._azureDisk?.internalValue;
    }
    if (this._azureFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureFile = this._azureFile?.internalValue;
    }
    if (this._cephfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cephfs = this._cephfs?.internalValue;
    }
    if (this._cinder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cinder = this._cinder?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._csi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csi = this._csi?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._fc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fc = this._fc?.internalValue;
    }
    if (this._flexVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flexVolume = this._flexVolume?.internalValue;
    }
    if (this._flocker?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flocker = this._flocker?.internalValue;
    }
    if (this._gcePersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcePersistentDisk = this._gcePersistentDisk?.internalValue;
    }
    if (this._gitRepo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitRepo = this._gitRepo?.internalValue;
    }
    if (this._glusterfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.glusterfs = this._glusterfs?.internalValue;
    }
    if (this._hostPath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPath = this._hostPath?.internalValue;
    }
    if (this._iscsi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iscsi = this._iscsi?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    if (this._photonPersistentDisk?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.photonPersistentDisk = this._photonPersistentDisk?.internalValue;
    }
    if (this._portworxVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portworxVolume = this._portworxVolume?.internalValue;
    }
    if (this._projected?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projected = this._projected?.internalValue;
    }
    if (this._quobyte?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quobyte = this._quobyte?.internalValue;
    }
    if (this._rbd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rbd = this._rbd?.internalValue;
    }
    if (this._scaleIo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleIo = this._scaleIo?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._storageos?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageos = this._storageos?.internalValue;
    }
    if (this._vsphereVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vsphereVolume = this._vsphereVolume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = undefined;
      this._azureDisk.internalValue = undefined;
      this._azureFile.internalValue = undefined;
      this._cephfs.internalValue = undefined;
      this._cinder.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._csi.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._fc.internalValue = undefined;
      this._flexVolume.internalValue = undefined;
      this._flocker.internalValue = undefined;
      this._gcePersistentDisk.internalValue = undefined;
      this._gitRepo.internalValue = undefined;
      this._glusterfs.internalValue = undefined;
      this._hostPath.internalValue = undefined;
      this._iscsi.internalValue = undefined;
      this._name = undefined;
      this._nfs.internalValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
      this._photonPersistentDisk.internalValue = undefined;
      this._portworxVolume.internalValue = undefined;
      this._projected.internalValue = undefined;
      this._quobyte.internalValue = undefined;
      this._rbd.internalValue = undefined;
      this._scaleIo.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._storageos.internalValue = undefined;
      this._vsphereVolume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsElasticBlockStore.internalValue = value.awsElasticBlockStore;
      this._azureDisk.internalValue = value.azureDisk;
      this._azureFile.internalValue = value.azureFile;
      this._cephfs.internalValue = value.cephfs;
      this._cinder.internalValue = value.cinder;
      this._configMap.internalValue = value.configMap;
      this._csi.internalValue = value.csi;
      this._downwardApi.internalValue = value.downwardApi;
      this._emptyDir.internalValue = value.emptyDir;
      this._fc.internalValue = value.fc;
      this._flexVolume.internalValue = value.flexVolume;
      this._flocker.internalValue = value.flocker;
      this._gcePersistentDisk.internalValue = value.gcePersistentDisk;
      this._gitRepo.internalValue = value.gitRepo;
      this._glusterfs.internalValue = value.glusterfs;
      this._hostPath.internalValue = value.hostPath;
      this._iscsi.internalValue = value.iscsi;
      this._name = value.name;
      this._nfs.internalValue = value.nfs;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
      this._photonPersistentDisk.internalValue = value.photonPersistentDisk;
      this._portworxVolume.internalValue = value.portworxVolume;
      this._projected.internalValue = value.projected;
      this._quobyte.internalValue = value.quobyte;
      this._rbd.internalValue = value.rbd;
      this._scaleIo.internalValue = value.scaleIo;
      this._secret.internalValue = value.secret;
      this._storageos.internalValue = value.storageos;
      this._vsphereVolume.internalValue = value.vsphereVolume;
    }
  }

  // aws_elastic_block_store - computed: false, optional: true, required: false
  private _awsElasticBlockStore = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStoreOutputReference(this, "aws_elastic_block_store");
  public get awsElasticBlockStore() {
    return this._awsElasticBlockStore;
  }
  public putAwsElasticBlockStore(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAwsElasticBlockStore) {
    this._awsElasticBlockStore.internalValue = value;
  }
  public resetAwsElasticBlockStore() {
    this._awsElasticBlockStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsElasticBlockStoreInput() {
    return this._awsElasticBlockStore.internalValue;
  }

  // azure_disk - computed: false, optional: true, required: false
  private _azureDisk = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDiskOutputReference(this, "azure_disk");
  public get azureDisk() {
    return this._azureDisk;
  }
  public putAzureDisk(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureDisk) {
    this._azureDisk.internalValue = value;
  }
  public resetAzureDisk() {
    this._azureDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDiskInput() {
    return this._azureDisk.internalValue;
  }

  // azure_file - computed: false, optional: true, required: false
  private _azureFile = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFileOutputReference(this, "azure_file");
  public get azureFile() {
    return this._azureFile;
  }
  public putAzureFile(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesAzureFile) {
    this._azureFile.internalValue = value;
  }
  public resetAzureFile() {
    this._azureFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFileInput() {
    return this._azureFile.internalValue;
  }

  // cephfs - computed: false, optional: true, required: false
  private _cephfs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfsOutputReference(this, "cephfs");
  public get cephfs() {
    return this._cephfs;
  }
  public putCephfs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCephfs) {
    this._cephfs.internalValue = value;
  }
  public resetCephfs() {
    this._cephfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cephfsInput() {
    return this._cephfs.internalValue;
  }

  // cinder - computed: false, optional: true, required: false
  private _cinder = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinderOutputReference(this, "cinder");
  public get cinder() {
    return this._cinder;
  }
  public putCinder(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCinder) {
    this._cinder.internalValue = value;
  }
  public resetCinder() {
    this._cinder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cinderInput() {
    return this._cinder.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // csi - computed: false, optional: true, required: false
  private _csi = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsiOutputReference(this, "csi");
  public get csi() {
    return this._csi;
  }
  public putCsi(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesCsi) {
    this._csi.internalValue = value;
  }
  public resetCsi() {
    this._csi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiInput() {
    return this._csi.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // fc - computed: false, optional: true, required: false
  private _fc = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFcOutputReference(this, "fc");
  public get fc() {
    return this._fc;
  }
  public putFc(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFc) {
    this._fc.internalValue = value;
  }
  public resetFc() {
    this._fc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcInput() {
    return this._fc.internalValue;
  }

  // flex_volume - computed: false, optional: true, required: false
  private _flexVolume = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolumeOutputReference(this, "flex_volume");
  public get flexVolume() {
    return this._flexVolume;
  }
  public putFlexVolume(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlexVolume) {
    this._flexVolume.internalValue = value;
  }
  public resetFlexVolume() {
    this._flexVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexVolumeInput() {
    return this._flexVolume.internalValue;
  }

  // flocker - computed: false, optional: true, required: false
  private _flocker = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlockerOutputReference(this, "flocker");
  public get flocker() {
    return this._flocker;
  }
  public putFlocker(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesFlocker) {
    this._flocker.internalValue = value;
  }
  public resetFlocker() {
    this._flocker.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flockerInput() {
    return this._flocker.internalValue;
  }

  // gce_persistent_disk - computed: false, optional: true, required: false
  private _gcePersistentDisk = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDiskOutputReference(this, "gce_persistent_disk");
  public get gcePersistentDisk() {
    return this._gcePersistentDisk;
  }
  public putGcePersistentDisk(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGcePersistentDisk) {
    this._gcePersistentDisk.internalValue = value;
  }
  public resetGcePersistentDisk() {
    this._gcePersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcePersistentDiskInput() {
    return this._gcePersistentDisk.internalValue;
  }

  // git_repo - computed: false, optional: true, required: false
  private _gitRepo = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepoOutputReference(this, "git_repo");
  public get gitRepo() {
    return this._gitRepo;
  }
  public putGitRepo(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGitRepo) {
    this._gitRepo.internalValue = value;
  }
  public resetGitRepo() {
    this._gitRepo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitRepoInput() {
    return this._gitRepo.internalValue;
  }

  // glusterfs - computed: false, optional: true, required: false
  private _glusterfs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfsOutputReference(this, "glusterfs");
  public get glusterfs() {
    return this._glusterfs;
  }
  public putGlusterfs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesGlusterfs) {
    this._glusterfs.internalValue = value;
  }
  public resetGlusterfs() {
    this._glusterfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glusterfsInput() {
    return this._glusterfs.internalValue;
  }

  // host_path - computed: false, optional: true, required: false
  private _hostPath = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPathOutputReference(this, "host_path");
  public get hostPath() {
    return this._hostPath;
  }
  public putHostPath(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesHostPath) {
    this._hostPath.internalValue = value;
  }
  public resetHostPath() {
    this._hostPath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPathInput() {
    return this._hostPath.internalValue;
  }

  // iscsi - computed: false, optional: true, required: false
  private _iscsi = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsiOutputReference(this, "iscsi");
  public get iscsi() {
    return this._iscsi;
  }
  public putIscsi(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesIscsi) {
    this._iscsi.internalValue = value;
  }
  public resetIscsi() {
    this._iscsi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iscsiInput() {
    return this._iscsi.internalValue;
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

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }

  // photon_persistent_disk - computed: false, optional: true, required: false
  private _photonPersistentDisk = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDiskOutputReference(this, "photon_persistent_disk");
  public get photonPersistentDisk() {
    return this._photonPersistentDisk;
  }
  public putPhotonPersistentDisk(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPhotonPersistentDisk) {
    this._photonPersistentDisk.internalValue = value;
  }
  public resetPhotonPersistentDisk() {
    this._photonPersistentDisk.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get photonPersistentDiskInput() {
    return this._photonPersistentDisk.internalValue;
  }

  // portworx_volume - computed: false, optional: true, required: false
  private _portworxVolume = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolumeOutputReference(this, "portworx_volume");
  public get portworxVolume() {
    return this._portworxVolume;
  }
  public putPortworxVolume(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesPortworxVolume) {
    this._portworxVolume.internalValue = value;
  }
  public resetPortworxVolume() {
    this._portworxVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portworxVolumeInput() {
    return this._portworxVolume.internalValue;
  }

  // projected - computed: false, optional: true, required: false
  private _projected = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjectedOutputReference(this, "projected");
  public get projected() {
    return this._projected;
  }
  public putProjected(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesProjected) {
    this._projected.internalValue = value;
  }
  public resetProjected() {
    this._projected.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedInput() {
    return this._projected.internalValue;
  }

  // quobyte - computed: false, optional: true, required: false
  private _quobyte = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyteOutputReference(this, "quobyte");
  public get quobyte() {
    return this._quobyte;
  }
  public putQuobyte(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesQuobyte) {
    this._quobyte.internalValue = value;
  }
  public resetQuobyte() {
    this._quobyte.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quobyteInput() {
    return this._quobyte.internalValue;
  }

  // rbd - computed: false, optional: true, required: false
  private _rbd = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbdOutputReference(this, "rbd");
  public get rbd() {
    return this._rbd;
  }
  public putRbd(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesRbd) {
    this._rbd.internalValue = value;
  }
  public resetRbd() {
    this._rbd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rbdInput() {
    return this._rbd.internalValue;
  }

  // scale_io - computed: false, optional: true, required: false
  private _scaleIo = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIoOutputReference(this, "scale_io");
  public get scaleIo() {
    return this._scaleIo;
  }
  public putScaleIo(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesScaleIo) {
    this._scaleIo.internalValue = value;
  }
  public resetScaleIo() {
    this._scaleIo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleIoInput() {
    return this._scaleIo.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // storageos - computed: false, optional: true, required: false
  private _storageos = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageosOutputReference(this, "storageos");
  public get storageos() {
    return this._storageos;
  }
  public putStorageos(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesStorageos) {
    this._storageos.internalValue = value;
  }
  public resetStorageos() {
    this._storageos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageosInput() {
    return this._storageos.internalValue;
  }

  // vsphere_volume - computed: false, optional: true, required: false
  private _vsphereVolume = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolumeOutputReference(this, "vsphere_volume");
  public get vsphereVolume() {
    return this._vsphereVolume;
  }
  public putVsphereVolume(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesVsphereVolume) {
    this._vsphereVolume.internalValue = value;
  }
  public resetVsphereVolume() {
    this._vsphereVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereVolumeInput() {
    return this._vsphereVolume.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource {
  /**
  * Annotations for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#annotations DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Args for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#args DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#args}
  */
  readonly args?: string[];
  /**
  * Command for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#command DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#command}
  */
  readonly command?: string[];
  /**
  * ENVList contains ENV passed to the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#env DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv[] | cdktf.IResolvable;
  /**
  * HostNetwork define the hostNetwork of the external pod it supports boolean values and default value is false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#host_network DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#host_network}
  */
  readonly hostNetwork?: boolean | cdktf.IResolvable;
  /**
  * Image for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#image DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * ImagePullPolicy for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#image_pull_policy DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * ImagePullSecrets for source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#image_pull_secrets DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets[] | cdktf.IResolvable;
  /**
  * InheritInputs define to inherit experiment details in probe pod it supports boolean values and default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#inherit_inputs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#inherit_inputs}
  */
  readonly inheritInputs?: boolean | cdktf.IResolvable;
  /**
  * Labels for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#labels DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * NodeSelector for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#node_selector DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Privileged for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#privileged DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#privileged}
  */
  readonly privileged?: boolean | cdktf.IResolvable;
  /**
  * Tolerations for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#tolerations DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations[] | cdktf.IResolvable;
  /**
  * VolumesMount for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volume_mount DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volume_mount}
  */
  readonly volumeMount?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount[] | cdktf.IResolvable;
  /**
  * Volumes for the source pod
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#volumes DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#volumes}
  */
  readonly volumes?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    env: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvToTerraform, false)(struct!.env),
    host_network: cdktf.booleanToTerraform(struct!.hostNetwork),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    inherit_inputs: cdktf.booleanToTerraform(struct!.inheritInputs),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    privileged: cdktf.booleanToTerraform(struct!.privileged),
    tolerations: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsToTerraform, false)(struct!.tolerations),
    volume_mount: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountToTerraform, false)(struct!.volumeMount),
    volumes: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesToTerraform, false)(struct!.volumes),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource | cdktf.IResolvable): any {
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
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvList",
    },
    host_network: {
      value: cdktf.booleanToHclTerraform(struct!.hostNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsList",
    },
    inherit_inputs: {
      value: cdktf.booleanToHclTerraform(struct!.inheritInputs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    privileged: {
      value: cdktf.booleanToHclTerraform(struct!.privileged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsList",
    },
    volume_mount: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountToHclTerraform, false)(struct!.volumeMount),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountList",
    },
    volumes: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesToHclTerraform, false)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
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
    if (this._hostNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostNetwork = this._hostNetwork;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._inheritInputs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritInputs = this._inheritInputs;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._privileged !== undefined) {
      hasAnyValues = true;
      internalValueResult.privileged = this._privileged;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._volumeMount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMount = this._volumeMount?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._args = undefined;
      this._command = undefined;
      this._env.internalValue = undefined;
      this._hostNetwork = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._inheritInputs = undefined;
      this._labels = undefined;
      this._nodeSelector = undefined;
      this._privileged = undefined;
      this._tolerations.internalValue = undefined;
      this._volumeMount.internalValue = undefined;
      this._volumes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._args = value.args;
      this._command = value.command;
      this._env.internalValue = value.env;
      this._hostNetwork = value.hostNetwork;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._inheritInputs = value.inheritInputs;
      this._labels = value.labels;
      this._nodeSelector = value.nodeSelector;
      this._privileged = value.privileged;
      this._tolerations.internalValue = value.tolerations;
      this._volumeMount.internalValue = value.volumeMount;
      this._volumes.internalValue = value.volumes;
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

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
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
  private _env = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // host_network - computed: false, optional: true, required: false
  private _hostNetwork?: boolean | cdktf.IResolvable; 
  public get hostNetwork() {
    return this.getBooleanAttribute('host_network');
  }
  public set hostNetwork(value: boolean | cdktf.IResolvable) {
    this._hostNetwork = value;
  }
  public resetHostNetwork() {
    this._hostNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNetworkInput() {
    return this._hostNetwork;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // inherit_inputs - computed: false, optional: true, required: false
  private _inheritInputs?: boolean | cdktf.IResolvable; 
  public get inheritInputs() {
    return this.getBooleanAttribute('inherit_inputs');
  }
  public set inheritInputs(value: boolean | cdktf.IResolvable) {
    this._inheritInputs = value;
  }
  public resetInheritInputs() {
    this._inheritInputs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritInputsInput() {
    return this._inheritInputs;
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

  // privileged - computed: false, optional: true, required: false
  private _privileged?: boolean | cdktf.IResolvable; 
  public get privileged() {
    return this.getBooleanAttribute('privileged');
  }
  public set privileged(value: boolean | cdktf.IResolvable) {
    this._privileged = value;
  }
  public resetPrivileged() {
    this._privileged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedInput() {
    return this._privileged;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // volume_mount - computed: false, optional: true, required: false
  private _volumeMount = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMountList(this, "volume_mount", false);
  public get volumeMount() {
    return this._volumeMount;
  }
  public putVolumeMount(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumeMount[] | cdktf.IResolvable) {
    this._volumeMount.internalValue = value;
  }
  public resetVolumeMount() {
    this._volumeMount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountInput() {
    return this._volumeMount.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#command DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#comparator DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#comparator}
  */
  readonly comparator: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator;
  /**
  * The external pod where we have to run the probe commands. It will run the commands inside the experiment pod itself(inline mode) if source contains a nil value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#source DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#source}
  */
  readonly source?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.stringToTerraform(struct!.command),
    comparator: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparatorToTerraform(struct!.comparator),
    source: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceToTerraform(struct!.source),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comparator: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparatorToHclTerraform(struct!.comparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator",
    },
    source: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._comparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._comparator.internalValue = undefined;
      this._source.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._comparator.internalValue = value.comparator;
      this._source.internalValue = value.source;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparatorOutputReference(this, "comparator");
  public get comparator() {
    return this._comparator;
  }
  public putComparator(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsComparator) {
    this._comparator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#criteria DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#response_code DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#response_code}
  */
  readonly responseCode: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGetToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGetToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._responseCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._responseCode = value.responseCode;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#body DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#body}
  */
  readonly body?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#body_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#body_path}
  */
  readonly bodyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#content_type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#criteria DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#response_code DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#response_code}
  */
  readonly responseCode: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPostToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    body_path: cdktf.stringToTerraform(struct!.bodyPath),
    content_type: cdktf.stringToTerraform(struct!.contentType),
    criteria: cdktf.stringToTerraform(struct!.criteria),
    response_code: cdktf.stringToTerraform(struct!.responseCode),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPostToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: cdktf.stringToHclTerraform(struct!.body),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    body_path: {
      value: cdktf.stringToHclTerraform(struct!.bodyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type: {
      value: cdktf.stringToHclTerraform(struct!.contentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code: {
      value: cdktf.stringToHclTerraform(struct!.responseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body;
    }
    if (this._bodyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyPath = this._bodyPath;
    }
    if (this._contentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentType = this._contentType;
    }
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._responseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCode = this._responseCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body = undefined;
      this._bodyPath = undefined;
      this._contentType = undefined;
      this._criteria = undefined;
      this._responseCode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body = value.body;
      this._bodyPath = value.bodyPath;
      this._contentType = value.contentType;
      this._criteria = value.criteria;
      this._responseCode = value.responseCode;
    }
  }

  // body - computed: false, optional: true, required: false
  private _body?: string; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body;
  }

  // body_path - computed: false, optional: true, required: false
  private _bodyPath?: string; 
  public get bodyPath() {
    return this.getStringAttribute('body_path');
  }
  public set bodyPath(value: string) {
    this._bodyPath = value;
  }
  public resetBodyPath() {
    this._bodyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyPathInput() {
    return this._bodyPath;
  }

  // content_type - computed: false, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // response_code - computed: false, optional: false, required: true
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#get DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#get}
  */
  readonly get?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#post DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#post}
  */
  readonly post?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    get: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGetToTerraform(struct!.get),
    post: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPostToTerraform(struct!.post),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    get: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGetToHclTerraform(struct!.get),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet",
    },
    post: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPostToHclTerraform(struct!.post),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._get?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.get = this._get?.internalValue;
    }
    if (this._post?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.post = this._post?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._get.internalValue = undefined;
      this._post.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._get.internalValue = value.get;
      this._post.internalValue = value.post;
    }
  }

  // get - computed: false, optional: true, required: false
  private _get = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGetOutputReference(this, "get");
  public get get() {
    return this._get;
  }
  public putGet(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodGet) {
    this._get.internalValue = value;
  }
  public resetGet() {
    this._get.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get getInput() {
    return this._get.internalValue;
  }

  // post - computed: false, optional: true, required: false
  private _post = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPostOutputReference(this, "post");
  public get post() {
    return this._post;
  }
  public putPost(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodPost) {
    this._post.internalValue = value;
  }
  public resetPost() {
    this._post.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postInput() {
    return this._post.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#insecure_skip_verify DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#method DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#method}
  */
  readonly method: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#url DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    method: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodToTerraform(struct!.method),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodToHclTerraform(struct!.method),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod",
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._method?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = undefined;
      this._method.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._method.internalValue = value.method;
      this._url = value.url;
    }
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // method - computed: false, optional: false, required: true
  private _method = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsMethod) {
    this._method.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#field_selector DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#field_selector}
  */
  readonly fieldSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#group DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#label_selector DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#namespace DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#operation DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#resource_names DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#resource_names}
  */
  readonly resourceNames?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#version DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_selector: cdktf.stringToTerraform(struct!.fieldSelector),
    group: cdktf.stringToTerraform(struct!.group),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    operation: cdktf.stringToTerraform(struct!.operation),
    resource: cdktf.stringToTerraform(struct!.resource),
    resource_names: cdktf.stringToTerraform(struct!.resourceNames),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_selector: {
      value: cdktf.stringToHclTerraform(struct!.fieldSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
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
    resource_names: {
      value: cdktf.stringToHclTerraform(struct!.resourceNames),
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldSelector = this._fieldSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._resourceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceNames = this._resourceNames;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldSelector = undefined;
      this._group = undefined;
      this._labelSelector = undefined;
      this._namespace = undefined;
      this._operation = undefined;
      this._resource = undefined;
      this._resourceNames = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldSelector = value.fieldSelector;
      this._group = value.group;
      this._labelSelector = value.labelSelector;
      this._namespace = value.namespace;
      this._operation = value.operation;
      this._resource = value.resource;
      this._resourceNames = value.resourceNames;
      this._version = value.version;
    }
  }

  // field_selector - computed: false, optional: true, required: false
  private _fieldSelector?: string; 
  public get fieldSelector() {
    return this.getStringAttribute('field_selector');
  }
  public set fieldSelector(value: string) {
    this._fieldSelector = value;
  }
  public resetFieldSelector() {
    this._fieldSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldSelectorInput() {
    return this._fieldSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

  // resource_names - computed: false, optional: true, required: false
  private _resourceNames?: string; 
  public get resourceNames() {
    return this.getStringAttribute('resource_names');
  }
  public set resourceNames(value: string) {
    this._resourceNames = value;
  }
  public resetResourceNames() {
    this._resourceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNamesInput() {
    return this._resourceNames;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#criteria DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#criteria}
  */
  readonly criteria: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparatorToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparatorToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._value = value.value;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#comparator DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#comparator}
  */
  readonly comparator: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#endpoint DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#query DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#query_path DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#query_path}
  */
  readonly queryPath?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparatorToTerraform(struct!.comparator),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    query: cdktf.stringToTerraform(struct!.query),
    query_path: cdktf.stringToTerraform(struct!.queryPath),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparatorToHclTerraform(struct!.comparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
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
    query_path: {
      value: cdktf.stringToHclTerraform(struct!.queryPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator?.internalValue;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._queryPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPath = this._queryPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator.internalValue = undefined;
      this._endpoint = undefined;
      this._query = undefined;
      this._queryPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator.internalValue = value.comparator;
      this._endpoint = value.endpoint;
      this._query = value.query;
      this._queryPath = value.queryPath;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparatorOutputReference(this, "comparator");
  public get comparator() {
    return this._comparator;
  }
  public putComparator(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsComparator) {
    this._comparator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator.internalValue;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // query - computed: false, optional: true, required: false
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

  // query_path - computed: false, optional: true, required: false
  private _queryPath?: string; 
  public get queryPath() {
    return this.getStringAttribute('query_path');
  }
  public set queryPath(value: string) {
    this._queryPath = value;
  }
  public resetQueryPath() {
    this._queryPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPathInput() {
    return this._queryPath;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#attempt DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#attempt}
  */
  readonly attempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#evaluation_timeout DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#evaluation_timeout}
  */
  readonly evaluationTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#initial_delay DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#initial_delay}
  */
  readonly initialDelay?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#initial_delay_seconds DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#interval DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#probe_polling_interval DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#probe_polling_interval}
  */
  readonly probePollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#probe_timeout DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#probe_timeout}
  */
  readonly probeTimeout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#retry DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#stop_on_failure DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#stop_on_failure}
  */
  readonly stopOnFailure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#verbosity DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#verbosity}
  */
  readonly verbosity?: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunPropertiesToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempt: cdktf.numberToTerraform(struct!.attempt),
    evaluation_timeout: cdktf.stringToTerraform(struct!.evaluationTimeout),
    initial_delay: cdktf.stringToTerraform(struct!.initialDelay),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    interval: cdktf.stringToTerraform(struct!.interval),
    probe_polling_interval: cdktf.stringToTerraform(struct!.probePollingInterval),
    probe_timeout: cdktf.stringToTerraform(struct!.probeTimeout),
    retry: cdktf.numberToTerraform(struct!.retry),
    stop_on_failure: cdktf.booleanToTerraform(struct!.stopOnFailure),
    verbosity: cdktf.stringToTerraform(struct!.verbosity),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunPropertiesToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempt: {
      value: cdktf.numberToHclTerraform(struct!.attempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluation_timeout: {
      value: cdktf.stringToHclTerraform(struct!.evaluationTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay: {
      value: cdktf.stringToHclTerraform(struct!.initialDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_polling_interval: {
      value: cdktf.stringToHclTerraform(struct!.probePollingInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    probe_timeout: {
      value: cdktf.stringToHclTerraform(struct!.probeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_on_failure: {
      value: cdktf.booleanToHclTerraform(struct!.stopOnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verbosity: {
      value: cdktf.stringToHclTerraform(struct!.verbosity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempt = this._attempt;
    }
    if (this._evaluationTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationTimeout = this._evaluationTimeout;
    }
    if (this._initialDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelay = this._initialDelay;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._probePollingInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.probePollingInterval = this._probePollingInterval;
    }
    if (this._probeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.probeTimeout = this._probeTimeout;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._stopOnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopOnFailure = this._stopOnFailure;
    }
    if (this._verbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbosity = this._verbosity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempt = undefined;
      this._evaluationTimeout = undefined;
      this._initialDelay = undefined;
      this._initialDelaySeconds = undefined;
      this._interval = undefined;
      this._probePollingInterval = undefined;
      this._probeTimeout = undefined;
      this._retry = undefined;
      this._stopOnFailure = undefined;
      this._verbosity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempt = value.attempt;
      this._evaluationTimeout = value.evaluationTimeout;
      this._initialDelay = value.initialDelay;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._interval = value.interval;
      this._probePollingInterval = value.probePollingInterval;
      this._probeTimeout = value.probeTimeout;
      this._retry = value.retry;
      this._stopOnFailure = value.stopOnFailure;
      this._verbosity = value.verbosity;
    }
  }

  // attempt - computed: false, optional: true, required: false
  private _attempt?: number; 
  public get attempt() {
    return this.getNumberAttribute('attempt');
  }
  public set attempt(value: number) {
    this._attempt = value;
  }
  public resetAttempt() {
    this._attempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptInput() {
    return this._attempt;
  }

  // evaluation_timeout - computed: false, optional: true, required: false
  private _evaluationTimeout?: string; 
  public get evaluationTimeout() {
    return this.getStringAttribute('evaluation_timeout');
  }
  public set evaluationTimeout(value: string) {
    this._evaluationTimeout = value;
  }
  public resetEvaluationTimeout() {
    this._evaluationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationTimeoutInput() {
    return this._evaluationTimeout;
  }

  // initial_delay - computed: false, optional: true, required: false
  private _initialDelay?: string; 
  public get initialDelay() {
    return this.getStringAttribute('initial_delay');
  }
  public set initialDelay(value: string) {
    this._initialDelay = value;
  }
  public resetInitialDelay() {
    this._initialDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelayInput() {
    return this._initialDelay;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: string; 
  public get interval() {
    return this.getStringAttribute('interval');
  }
  public set interval(value: string) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // probe_polling_interval - computed: false, optional: true, required: false
  private _probePollingInterval?: string; 
  public get probePollingInterval() {
    return this.getStringAttribute('probe_polling_interval');
  }
  public set probePollingInterval(value: string) {
    this._probePollingInterval = value;
  }
  public resetProbePollingInterval() {
    this._probePollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probePollingIntervalInput() {
    return this._probePollingInterval;
  }

  // probe_timeout - computed: false, optional: false, required: true
  private _probeTimeout?: string; 
  public get probeTimeout() {
    return this.getStringAttribute('probe_timeout');
  }
  public set probeTimeout(value: string) {
    this._probeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get probeTimeoutInput() {
    return this._probeTimeout;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // stop_on_failure - computed: false, optional: true, required: false
  private _stopOnFailure?: boolean | cdktf.IResolvable; 
  public get stopOnFailure() {
    return this.getBooleanAttribute('stop_on_failure');
  }
  public set stopOnFailure(value: boolean | cdktf.IResolvable) {
    this._stopOnFailure = value;
  }
  public resetStopOnFailure() {
    this._stopOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopOnFailureInput() {
    return this._stopOnFailure;
  }

  // verbosity - computed: false, optional: true, required: false
  private _verbosity?: string; 
  public get verbosity() {
    return this.getStringAttribute('verbosity');
  }
  public set verbosity(value: string) {
    this._verbosity = value;
  }
  public resetVerbosity() {
    this._verbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbosityInput() {
    return this._verbosity;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator {
  /**
  * Criteria for matching data it supports >=, <=, ==, >, <, != for int and float it supports equal, notEqual, contains for string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#criteria DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#criteria}
  */
  readonly criteria: string;
  /**
  * Type of data it can be int, float, string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#type}
  */
  readonly type?: string;
  /**
  * Value contains relative value for criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#value DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparatorToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: cdktf.stringToTerraform(struct!.criteria),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparatorToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: cdktf.stringToHclTerraform(struct!.criteria),
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparatorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._criteria = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._criteria = value.criteria;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria?: string; 
  public get criteria() {
    return this.getStringAttribute('criteria');
  }
  public set criteria(value: string) {
    this._criteria = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow {
  /**
  * End time of evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#evaluation_end_time DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#evaluation_end_time}
  */
  readonly evaluationEndTime?: number;
  /**
  * Start time of evaluation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#evaluation_start_time DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#evaluation_start_time}
  */
  readonly evaluationStartTime?: number;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindowToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    evaluation_end_time: cdktf.numberToTerraform(struct!.evaluationEndTime),
    evaluation_start_time: cdktf.numberToTerraform(struct!.evaluationStartTime),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindowToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    evaluation_end_time: {
      value: cdktf.numberToHclTerraform(struct!.evaluationEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    evaluation_start_time: {
      value: cdktf.numberToHclTerraform(struct!.evaluationStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._evaluationEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationEndTime = this._evaluationEndTime;
    }
    if (this._evaluationStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationStartTime = this._evaluationStartTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._evaluationEndTime = undefined;
      this._evaluationStartTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._evaluationEndTime = value.evaluationEndTime;
      this._evaluationStartTime = value.evaluationStartTime;
    }
  }

  // evaluation_end_time - computed: false, optional: true, required: false
  private _evaluationEndTime?: number; 
  public get evaluationEndTime() {
    return this.getNumberAttribute('evaluation_end_time');
  }
  public set evaluationEndTime(value: number) {
    this._evaluationEndTime = value;
  }
  public resetEvaluationEndTime() {
    this._evaluationEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationEndTimeInput() {
    return this._evaluationEndTime;
  }

  // evaluation_start_time - computed: false, optional: true, required: false
  private _evaluationStartTime?: number; 
  public get evaluationStartTime() {
    return this.getNumberAttribute('evaluation_start_time');
  }
  public set evaluationStartTime(value: number) {
    this._evaluationStartTime = value;
  }
  public resetEvaluationStartTime() {
    this._evaluationStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationStartTimeInput() {
    return this._evaluationStartTime;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope {
  /**
  * AccountIdentifier for account ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#account_identifier DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#account_identifier}
  */
  readonly accountIdentifier: string;
  /**
  * OrgIdentifier for organization ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#org_identifier DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#org_identifier}
  */
  readonly orgIdentifier: string;
  /**
  * ProjectIdentifier for project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#project_identifier DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#project_identifier}
  */
  readonly projectIdentifier: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScopeToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_identifier: cdktf.stringToTerraform(struct!.accountIdentifier),
    org_identifier: cdktf.stringToTerraform(struct!.orgIdentifier),
    project_identifier: cdktf.stringToTerraform(struct!.projectIdentifier),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScopeToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_identifier: {
      value: cdktf.stringToHclTerraform(struct!.accountIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_identifier: {
      value: cdktf.stringToHclTerraform(struct!.orgIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_identifier: {
      value: cdktf.stringToHclTerraform(struct!.projectIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountIdentifier = this._accountIdentifier;
    }
    if (this._orgIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgIdentifier = this._orgIdentifier;
    }
    if (this._projectIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectIdentifier = this._projectIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountIdentifier = undefined;
      this._orgIdentifier = undefined;
      this._projectIdentifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountIdentifier = value.accountIdentifier;
      this._orgIdentifier = value.orgIdentifier;
      this._projectIdentifier = value.projectIdentifier;
    }
  }

  // account_identifier - computed: false, optional: false, required: true
  private _accountIdentifier?: string; 
  public get accountIdentifier() {
    return this.getStringAttribute('account_identifier');
  }
  public set accountIdentifier(value: string) {
    this._accountIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdentifierInput() {
    return this._accountIdentifier;
  }

  // org_identifier - computed: false, optional: false, required: true
  private _orgIdentifier?: string; 
  public get orgIdentifier() {
    return this.getStringAttribute('org_identifier');
  }
  public set orgIdentifier(value: string) {
    this._orgIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdentifierInput() {
    return this._orgIdentifier;
  }

  // project_identifier - computed: false, optional: false, required: true
  private _projectIdentifier?: string; 
  public get projectIdentifier() {
    return this.getStringAttribute('project_identifier');
  }
  public set projectIdentifier(value: string) {
    this._projectIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdentifierInput() {
    return this._projectIdentifier;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata {
  /**
  * APITokenSecret for authenticating with the platform service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#api_token_secret DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#api_token_secret}
  */
  readonly apiTokenSecret: string;
  /**
  * Scope required for fetching details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#scope DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#scope}
  */
  readonly scope: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token_secret: cdktf.stringToTerraform(struct!.apiTokenSecret),
    scope: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScopeToTerraform(struct!.scope),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token_secret: {
      value: cdktf.stringToHclTerraform(struct!.apiTokenSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiTokenSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiTokenSecret = this._apiTokenSecret;
    }
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiTokenSecret = undefined;
      this._scope.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiTokenSecret = value.apiTokenSecret;
      this._scope.internalValue = value.scope;
    }
  }

  // api_token_secret - computed: false, optional: false, required: true
  private _apiTokenSecret?: string; 
  public get apiTokenSecret() {
    return this.getStringAttribute('api_token_secret');
  }
  public set apiTokenSecret(value: string) {
    this._apiTokenSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenSecretInput() {
    return this._apiTokenSecret;
  }

  // scope - computed: false, optional: false, required: true
  private _scope = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataScope) {
    this._scope.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs {
  /**
  * Comparator check for the correctness of the probe output
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#comparator DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#comparator}
  */
  readonly comparator: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator;
  /**
  * EvaluationWindow is the time period for which the metrics will be evaluated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#evaluation_window DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#evaluation_window}
  */
  readonly evaluationWindow?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow;
  /**
  * InsecureSkipVerify flag to skip certificate checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#insecure_skip_verify DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * PlatformEndpoint for the monitoring service endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#platform_endpoint DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#platform_endpoint}
  */
  readonly platformEndpoint: string;
  /**
  * SLOIdentifier for fetching the details of the SLO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#slo_identifier DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#slo_identifier}
  */
  readonly sloIdentifier: string;
  /**
  * SLOSourceMetadata consists of required metadata details to fetch metric data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#slo_source_metadata DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#slo_source_metadata}
  */
  readonly sloSourceMetadata: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comparator: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparatorToTerraform(struct!.comparator),
    evaluation_window: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindowToTerraform(struct!.evaluationWindow),
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
    platform_endpoint: cdktf.stringToTerraform(struct!.platformEndpoint),
    slo_identifier: cdktf.stringToTerraform(struct!.sloIdentifier),
    slo_source_metadata: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataToTerraform(struct!.sloSourceMetadata),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comparator: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparatorToHclTerraform(struct!.comparator),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator",
    },
    evaluation_window: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindowToHclTerraform(struct!.evaluationWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow",
    },
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    platform_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.platformEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_identifier: {
      value: cdktf.stringToHclTerraform(struct!.sloIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slo_source_metadata: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataToHclTerraform(struct!.sloSourceMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comparator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparator = this._comparator?.internalValue;
    }
    if (this._evaluationWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.evaluationWindow = this._evaluationWindow?.internalValue;
    }
    if (this._insecureSkipVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureSkipVerify = this._insecureSkipVerify;
    }
    if (this._platformEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformEndpoint = this._platformEndpoint;
    }
    if (this._sloIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloIdentifier = this._sloIdentifier;
    }
    if (this._sloSourceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloSourceMetadata = this._sloSourceMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comparator.internalValue = undefined;
      this._evaluationWindow.internalValue = undefined;
      this._insecureSkipVerify = undefined;
      this._platformEndpoint = undefined;
      this._sloIdentifier = undefined;
      this._sloSourceMetadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comparator.internalValue = value.comparator;
      this._evaluationWindow.internalValue = value.evaluationWindow;
      this._insecureSkipVerify = value.insecureSkipVerify;
      this._platformEndpoint = value.platformEndpoint;
      this._sloIdentifier = value.sloIdentifier;
      this._sloSourceMetadata.internalValue = value.sloSourceMetadata;
    }
  }

  // comparator - computed: false, optional: false, required: true
  private _comparator = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparatorOutputReference(this, "comparator");
  public get comparator() {
    return this._comparator;
  }
  public putComparator(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsComparator) {
    this._comparator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparatorInput() {
    return this._comparator.internalValue;
  }

  // evaluation_window - computed: false, optional: true, required: false
  private _evaluationWindow = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindowOutputReference(this, "evaluation_window");
  public get evaluationWindow() {
    return this._evaluationWindow;
  }
  public putEvaluationWindow(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsEvaluationWindow) {
    this._evaluationWindow.internalValue = value;
  }
  public resetEvaluationWindow() {
    this._evaluationWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow.internalValue;
  }

  // insecure_skip_verify - computed: false, optional: true, required: false
  private _insecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get insecureSkipVerify() {
    return this.getBooleanAttribute('insecure_skip_verify');
  }
  public set insecureSkipVerify(value: boolean | cdktf.IResolvable) {
    this._insecureSkipVerify = value;
  }
  public resetInsecureSkipVerify() {
    this._insecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureSkipVerifyInput() {
    return this._insecureSkipVerify;
  }

  // platform_endpoint - computed: false, optional: false, required: true
  private _platformEndpoint?: string; 
  public get platformEndpoint() {
    return this.getStringAttribute('platform_endpoint');
  }
  public set platformEndpoint(value: string) {
    this._platformEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get platformEndpointInput() {
    return this._platformEndpoint;
  }

  // slo_identifier - computed: false, optional: false, required: true
  private _sloIdentifier?: string; 
  public get sloIdentifier() {
    return this.getStringAttribute('slo_identifier');
  }
  public set sloIdentifier(value: string) {
    this._sloIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloIdentifierInput() {
    return this._sloIdentifier;
  }

  // slo_source_metadata - computed: false, optional: false, required: true
  private _sloSourceMetadata = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadataOutputReference(this, "slo_source_metadata");
  public get sloSourceMetadata() {
    return this._sloSourceMetadata;
  }
  public putSloSourceMetadata(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsSloSourceMetadata) {
    this._sloSourceMetadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sloSourceMetadataInput() {
    return this._sloSourceMetadata.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#cmd_probe_inputs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#cmd_probe_inputs}
  */
  readonly cmdProbeInputs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#data DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#data}
  */
  readonly data?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#http_probe_inputs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#http_probe_inputs}
  */
  readonly httpProbeInputs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#k8s_probe_inputs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#k8s_probe_inputs}
  */
  readonly k8SProbeInputs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#mode DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#prom_probe_inputs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#prom_probe_inputs}
  */
  readonly promProbeInputs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#run_properties DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#run_properties}
  */
  readonly runProperties: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties;
  /**
  * inputs needed for the SLO probe
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#slo_probe_inputs DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#slo_probe_inputs}
  */
  readonly sloProbeInputs?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#type DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cmd_probe_inputs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsToTerraform(struct!.cmdProbeInputs),
    data: cdktf.stringToTerraform(struct!.data),
    http_probe_inputs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsToTerraform(struct!.httpProbeInputs),
    k8s_probe_inputs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputsToTerraform(struct!.k8SProbeInputs),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    prom_probe_inputs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsToTerraform(struct!.promProbeInputs),
    run_properties: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunPropertiesToTerraform(struct!.runProperties),
    slo_probe_inputs: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsToTerraform(struct!.sloProbeInputs),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cmd_probe_inputs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsToHclTerraform(struct!.cmdProbeInputs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs",
    },
    data: {
      value: cdktf.stringToHclTerraform(struct!.data),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_probe_inputs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsToHclTerraform(struct!.httpProbeInputs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs",
    },
    k8s_probe_inputs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputsToHclTerraform(struct!.k8SProbeInputs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    prom_probe_inputs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsToHclTerraform(struct!.promProbeInputs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs",
    },
    run_properties: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunPropertiesToHclTerraform(struct!.runProperties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties",
    },
    slo_probe_inputs: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsToHclTerraform(struct!.sloProbeInputs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cmdProbeInputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmdProbeInputs = this._cmdProbeInputs?.internalValue;
    }
    if (this._data !== undefined) {
      hasAnyValues = true;
      internalValueResult.data = this._data;
    }
    if (this._httpProbeInputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProbeInputs = this._httpProbeInputs?.internalValue;
    }
    if (this._k8SProbeInputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.k8SProbeInputs = this._k8SProbeInputs?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._promProbeInputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.promProbeInputs = this._promProbeInputs?.internalValue;
    }
    if (this._runProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runProperties = this._runProperties?.internalValue;
    }
    if (this._sloProbeInputs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloProbeInputs = this._sloProbeInputs?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cmdProbeInputs.internalValue = undefined;
      this._data = undefined;
      this._httpProbeInputs.internalValue = undefined;
      this._k8SProbeInputs.internalValue = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._promProbeInputs.internalValue = undefined;
      this._runProperties.internalValue = undefined;
      this._sloProbeInputs.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cmdProbeInputs.internalValue = value.cmdProbeInputs;
      this._data = value.data;
      this._httpProbeInputs.internalValue = value.httpProbeInputs;
      this._k8SProbeInputs.internalValue = value.k8SProbeInputs;
      this._mode = value.mode;
      this._name = value.name;
      this._promProbeInputs.internalValue = value.promProbeInputs;
      this._runProperties.internalValue = value.runProperties;
      this._sloProbeInputs.internalValue = value.sloProbeInputs;
      this._type = value.type;
    }
  }

  // cmd_probe_inputs - computed: false, optional: true, required: false
  private _cmdProbeInputs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputsOutputReference(this, "cmd_probe_inputs");
  public get cmdProbeInputs() {
    return this._cmdProbeInputs;
  }
  public putCmdProbeInputs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeCmdProbeInputs) {
    this._cmdProbeInputs.internalValue = value;
  }
  public resetCmdProbeInputs() {
    this._cmdProbeInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdProbeInputsInput() {
    return this._cmdProbeInputs.internalValue;
  }

  // data - computed: false, optional: true, required: false
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // http_probe_inputs - computed: false, optional: true, required: false
  private _httpProbeInputs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputsOutputReference(this, "http_probe_inputs");
  public get httpProbeInputs() {
    return this._httpProbeInputs;
  }
  public putHttpProbeInputs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeHttpProbeInputs) {
    this._httpProbeInputs.internalValue = value;
  }
  public resetHttpProbeInputs() {
    this._httpProbeInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProbeInputsInput() {
    return this._httpProbeInputs.internalValue;
  }

  // k8s_probe_inputs - computed: false, optional: true, required: false
  private _k8SProbeInputs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputsOutputReference(this, "k8s_probe_inputs");
  public get k8SProbeInputs() {
    return this._k8SProbeInputs;
  }
  public putK8SProbeInputs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeK8SProbeInputs) {
    this._k8SProbeInputs.internalValue = value;
  }
  public resetK8SProbeInputs() {
    this._k8SProbeInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SProbeInputsInput() {
    return this._k8SProbeInputs.internalValue;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // prom_probe_inputs - computed: false, optional: true, required: false
  private _promProbeInputs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputsOutputReference(this, "prom_probe_inputs");
  public get promProbeInputs() {
    return this._promProbeInputs;
  }
  public putPromProbeInputs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbePromProbeInputs) {
    this._promProbeInputs.internalValue = value;
  }
  public resetPromProbeInputs() {
    this._promProbeInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promProbeInputsInput() {
    return this._promProbeInputs.internalValue;
  }

  // run_properties - computed: false, optional: false, required: true
  private _runProperties = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunPropertiesOutputReference(this, "run_properties");
  public get runProperties() {
    return this._runProperties;
  }
  public putRunProperties(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeRunProperties) {
    this._runProperties.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runPropertiesInput() {
    return this._runProperties.internalValue;
  }

  // slo_probe_inputs - computed: false, optional: true, required: false
  private _sloProbeInputs = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputsOutputReference(this, "slo_probe_inputs");
  public get sloProbeInputs() {
    return this._sloProbeInputs;
  }
  public putSloProbeInputs(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeSloProbeInputs) {
    this._sloProbeInputs.internalValue = value;
  }
  public resetSloProbeInputs() {
    this._sloProbeInputs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloProbeInputsInput() {
    return this._sloProbeInputs.internalValue;
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
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#components DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#components}
  */
  readonly components?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#probe DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#probe}
  */
  readonly probe?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsToTerraform(struct!.components),
    probe: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeToTerraform, false)(struct!.probe),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsToHclTerraform(struct!.components),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents",
    },
    probe: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeToHclTerraform, false)(struct!.probe),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._probe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.probe = this._probe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._probe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._probe.internalValue = value.probe;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponentsOutputReference(this, "components");
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecComponents) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // probe - computed: false, optional: true, required: false
  private _probe = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbeList(this, "probe", false);
  public get probe() {
    return this._probe;
  }
  public putProbe(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecProbe[] | cdktf.IResolvable) {
    this._probe.internalValue = value;
  }
  public resetProbe() {
    this._probe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get probeInput() {
    return this._probe.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#name DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#spec DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    spec: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecToTerraform(struct!.spec),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments | cdktf.IResolvable): any {
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
    spec: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._spec.internalValue = value.spec;
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

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#names DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#names}
  */
  readonly names: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#namespace DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.stringToTerraform(struct!.names),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.stringToHclTerraform(struct!.names),
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
      this._namespace = value.namespace;
    }
  }

  // names - computed: false, optional: false, required: true
  private _names?: string; 
  public get names() {
    return this.getStringAttribute('names');
  }
  public set names(value: string) {
    this._names = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#kind DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#labels DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#labels}
  */
  readonly labels?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#names DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#names}
  */
  readonly names?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#namespace DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.stringToTerraform(struct!.labels),
    names: cdktf.stringToTerraform(struct!.names),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.stringToHclTerraform(struct!.labels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    names: {
      value: cdktf.stringToHclTerraform(struct!.names),
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._names = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._kind = value.kind;
      this._labels = value.labels;
      this._names = value.names;
      this._namespace = value.namespace;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string; 
  public get labels() {
    return this.getStringAttribute('labels');
  }
  public set labels(value: string) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // names - computed: false, optional: true, required: false
  private _names?: string; 
  public get names() {
    return this.getStringAttribute('names');
  }
  public set names(value: string) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
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

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsList extends cdktf.ComplexList {
  public internalValue? : DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads[] | cdktf.IResolvable

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
  public get(index: number): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsOutputReference {
    return new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#pods DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#pods}
  */
  readonly pods?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#workloads DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#workloads}
  */
  readonly workloads?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads[] | cdktf.IResolvable;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pods: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsToTerraform, false)(struct!.pods),
    workloads: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsToTerraform, false)(struct!.workloads),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pods: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsToHclTerraform, false)(struct!.pods),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsList",
    },
    workloads: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsToHclTerraform, false)(struct!.workloads),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pods?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pods = this._pods?.internalValue;
    }
    if (this._workloads?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workloads = this._workloads?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pods.internalValue = undefined;
      this._workloads.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pods.internalValue = value.pods;
      this._workloads.internalValue = value.workloads;
    }
  }

  // pods - computed: false, optional: true, required: false
  private _pods = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPodsList(this, "pods", false);
  public get pods() {
    return this._pods;
  }
  public putPods(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsPods[] | cdktf.IResolvable) {
    this._pods.internalValue = value;
  }
  public resetPods() {
    this._pods.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podsInput() {
    return this._pods.internalValue;
  }

  // workloads - computed: false, optional: true, required: false
  private _workloads = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloadsList(this, "workloads", false);
  public get workloads() {
    return this._workloads;
  }
  public putWorkloads(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsWorkloads[] | cdktf.IResolvable) {
    this._workloads.internalValue = value;
  }
  public resetWorkloads() {
    this._workloads.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadsInput() {
    return this._workloads.internalValue;
  }
}
export interface DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#appinfo DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#appinfo}
  */
  readonly appinfo?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#auxiliary_app_info DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#auxiliary_app_info}
  */
  readonly auxiliaryAppInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#chaos_service_account DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#chaos_service_account}
  */
  readonly chaosServiceAccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#components DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#components}
  */
  readonly components?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#default_health_check DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#default_health_check}
  */
  readonly defaultHealthCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#engine_state DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#engine_state}
  */
  readonly engineState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#experiments DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#experiments}
  */
  readonly experiments?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#job_clean_up_policy DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#job_clean_up_policy}
  */
  readonly jobCleanUpPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#selectors DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#termination_grace_period_seconds DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest#termination_grace_period_seconds}
  */
  readonly terminationGracePeriodSeconds?: number;
}

export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecToTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    appinfo: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfoToTerraform(struct!.appinfo),
    auxiliary_app_info: cdktf.stringToTerraform(struct!.auxiliaryAppInfo),
    chaos_service_account: cdktf.stringToTerraform(struct!.chaosServiceAccount),
    components: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsToTerraform(struct!.components),
    default_health_check: cdktf.booleanToTerraform(struct!.defaultHealthCheck),
    engine_state: cdktf.stringToTerraform(struct!.engineState),
    experiments: cdktf.listMapper(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsToTerraform, false)(struct!.experiments),
    job_clean_up_policy: cdktf.stringToTerraform(struct!.jobCleanUpPolicy),
    selectors: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsToTerraform(struct!.selectors),
    termination_grace_period_seconds: cdktf.numberToTerraform(struct!.terminationGracePeriodSeconds),
  }
}


export function dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    appinfo: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfoToHclTerraform(struct!.appinfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo",
    },
    auxiliary_app_info: {
      value: cdktf.stringToHclTerraform(struct!.auxiliaryAppInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chaos_service_account: {
      value: cdktf.stringToHclTerraform(struct!.chaosServiceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsToHclTerraform(struct!.components),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents",
    },
    default_health_check: {
      value: cdktf.booleanToHclTerraform(struct!.defaultHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    engine_state: {
      value: cdktf.stringToHclTerraform(struct!.engineState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    experiments: {
      value: cdktf.listMapperHcl(dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsToHclTerraform, false)(struct!.experiments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsList",
    },
    job_clean_up_policy: {
      value: cdktf.stringToHclTerraform(struct!.jobCleanUpPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selectors: {
      value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsToHclTerraform(struct!.selectors),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors",
    },
    termination_grace_period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.terminationGracePeriodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appinfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appinfo = this._appinfo?.internalValue;
    }
    if (this._auxiliaryAppInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.auxiliaryAppInfo = this._auxiliaryAppInfo;
    }
    if (this._chaosServiceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.chaosServiceAccount = this._chaosServiceAccount;
    }
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._defaultHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultHealthCheck = this._defaultHealthCheck;
    }
    if (this._engineState !== undefined) {
      hasAnyValues = true;
      internalValueResult.engineState = this._engineState;
    }
    if (this._experiments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.experiments = this._experiments?.internalValue;
    }
    if (this._jobCleanUpPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobCleanUpPolicy = this._jobCleanUpPolicy;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._terminationGracePeriodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminationGracePeriodSeconds = this._terminationGracePeriodSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appinfo.internalValue = undefined;
      this._auxiliaryAppInfo = undefined;
      this._chaosServiceAccount = undefined;
      this._components.internalValue = undefined;
      this._defaultHealthCheck = undefined;
      this._engineState = undefined;
      this._experiments.internalValue = undefined;
      this._jobCleanUpPolicy = undefined;
      this._selectors.internalValue = undefined;
      this._terminationGracePeriodSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appinfo.internalValue = value.appinfo;
      this._auxiliaryAppInfo = value.auxiliaryAppInfo;
      this._chaosServiceAccount = value.chaosServiceAccount;
      this._components.internalValue = value.components;
      this._defaultHealthCheck = value.defaultHealthCheck;
      this._engineState = value.engineState;
      this._experiments.internalValue = value.experiments;
      this._jobCleanUpPolicy = value.jobCleanUpPolicy;
      this._selectors.internalValue = value.selectors;
      this._terminationGracePeriodSeconds = value.terminationGracePeriodSeconds;
    }
  }

  // appinfo - computed: false, optional: true, required: false
  private _appinfo = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfoOutputReference(this, "appinfo");
  public get appinfo() {
    return this._appinfo;
  }
  public putAppinfo(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecAppinfo) {
    this._appinfo.internalValue = value;
  }
  public resetAppinfo() {
    this._appinfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appinfoInput() {
    return this._appinfo.internalValue;
  }

  // auxiliary_app_info - computed: false, optional: true, required: false
  private _auxiliaryAppInfo?: string; 
  public get auxiliaryAppInfo() {
    return this.getStringAttribute('auxiliary_app_info');
  }
  public set auxiliaryAppInfo(value: string) {
    this._auxiliaryAppInfo = value;
  }
  public resetAuxiliaryAppInfo() {
    this._auxiliaryAppInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auxiliaryAppInfoInput() {
    return this._auxiliaryAppInfo;
  }

  // chaos_service_account - computed: false, optional: true, required: false
  private _chaosServiceAccount?: string; 
  public get chaosServiceAccount() {
    return this.getStringAttribute('chaos_service_account');
  }
  public set chaosServiceAccount(value: string) {
    this._chaosServiceAccount = value;
  }
  public resetChaosServiceAccount() {
    this._chaosServiceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chaosServiceAccountInput() {
    return this._chaosServiceAccount;
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponentsOutputReference(this, "components");
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecComponents) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // default_health_check - computed: false, optional: true, required: false
  private _defaultHealthCheck?: boolean | cdktf.IResolvable; 
  public get defaultHealthCheck() {
    return this.getBooleanAttribute('default_health_check');
  }
  public set defaultHealthCheck(value: boolean | cdktf.IResolvable) {
    this._defaultHealthCheck = value;
  }
  public resetDefaultHealthCheck() {
    this._defaultHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultHealthCheckInput() {
    return this._defaultHealthCheck;
  }

  // engine_state - computed: false, optional: true, required: false
  private _engineState?: string; 
  public get engineState() {
    return this.getStringAttribute('engine_state');
  }
  public set engineState(value: string) {
    this._engineState = value;
  }
  public resetEngineState() {
    this._engineState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineStateInput() {
    return this._engineState;
  }

  // experiments - computed: false, optional: true, required: false
  private _experiments = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperimentsList(this, "experiments", false);
  public get experiments() {
    return this._experiments;
  }
  public putExperiments(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecExperiments[] | cdktf.IResolvable) {
    this._experiments.internalValue = value;
  }
  public resetExperiments() {
    this._experiments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get experimentsInput() {
    return this._experiments.internalValue;
  }

  // job_clean_up_policy - computed: false, optional: true, required: false
  private _jobCleanUpPolicy?: string; 
  public get jobCleanUpPolicy() {
    return this.getStringAttribute('job_clean_up_policy');
  }
  public set jobCleanUpPolicy(value: string) {
    this._jobCleanUpPolicy = value;
  }
  public resetJobCleanUpPolicy() {
    this._jobCleanUpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobCleanUpPolicyInput() {
    return this._jobCleanUpPolicy;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectorsOutputReference(this, "selectors");
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecSelectors) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // termination_grace_period_seconds - computed: false, optional: true, required: false
  private _terminationGracePeriodSeconds?: number; 
  public get terminationGracePeriodSeconds() {
    return this.getNumberAttribute('termination_grace_period_seconds');
  }
  public set terminationGracePeriodSeconds(value: number) {
    this._terminationGracePeriodSeconds = value;
  }
  public resetTerminationGracePeriodSeconds() {
    this._terminationGracePeriodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationGracePeriodSecondsInput() {
    return this._terminationGracePeriodSeconds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest k8s_litmuschaos_io_chaos_engine_v1alpha1_manifest}
*/
export class DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_litmuschaos_io_chaos_engine_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SLitmuschaosIoChaosEngineV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_litmuschaos_io_chaos_engine_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/litmuschaos_io_chaos_engine_v1alpha1_manifest k8s_litmuschaos_io_chaos_engine_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_litmuschaos_io_chaos_engine_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec) {
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
      metadata: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SLitmuschaosIoChaosEngineV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
