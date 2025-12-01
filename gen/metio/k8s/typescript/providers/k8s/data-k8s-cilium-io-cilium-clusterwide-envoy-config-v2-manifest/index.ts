// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#metadata DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#metadata}
  */
  readonly metadata: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#spec DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#spec}
  */
  readonly spec?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec;
}
export interface DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#annotations DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#labels DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#name DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadataToTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadataToHclTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
}
export interface DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices {
  /**
  * Name is the name of a destination Kubernetes service that identifies traffic to be redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#name DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the Kubernetes service namespace. In CiliumEnvoyConfig namespace defaults to the namespace of the CEC, In CiliumClusterwideEnvoyConfig namespace defaults to 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#namespace DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Ports is a set of port numbers, which can be used for filtering in case of underlying is exposing multiple port numbers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#number DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#number}
  */
  readonly number?: string[];
}

export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesToTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    number: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.number),
  }
}


export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesToHclTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices | cdktf.IResolvable): any {
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
    number: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.number),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices | cdktf.IResolvable | undefined {
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
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._number = undefined;
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
      this._number = value.number;
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

  // number - computed: false, optional: true, required: false
  private _number?: string[]; 
  public get number() {
    return this.getListAttribute('number');
  }
  public set number(value: string[]) {
    this._number = value;
  }
  public resetNumber() {
    this._number = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesOutputReference {
    return new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#key DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#operator DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#values DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsToTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsOutputReference {
    return new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#match_expressions DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#match_labels DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorToTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorToHclTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsList",
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

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices {
  /**
  * Listener specifies the name of the Envoy listener the service traffic is redirected to. The listener must be specified in the Envoy 'resources' of the same CiliumEnvoyConfig. If omitted, the first listener specified in 'resources' is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#listener DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#listener}
  */
  readonly listener?: string;
  /**
  * Name is the name of a destination Kubernetes service that identifies traffic to be redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#name DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the Kubernetes service namespace. In CiliumEnvoyConfig namespace this is overridden to the namespace of the CEC, In CiliumClusterwideEnvoyConfig namespace defaults to 'default'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#namespace DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Ports is a set of service's frontend ports that should be redirected to the Envoy listener. By default all frontend ports of the service are redirected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#ports DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#ports}
  */
  readonly ports?: string[];
}

export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesToTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener: cdktf.stringToTerraform(struct!.listener),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ports),
  }
}


export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesToHclTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener: {
      value: cdktf.stringToHclTerraform(struct!.listener),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ports),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listener !== undefined) {
      hasAnyValues = true;
      internalValueResult.listener = this._listener;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._ports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listener = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._ports = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listener = value.listener;
      this._name = value.name;
      this._namespace = value.namespace;
      this._ports = value.ports;
    }
  }

  // listener - computed: false, optional: true, required: false
  private _listener?: string; 
  public get listener() {
    return this.getStringAttribute('listener');
  }
  public set listener(value: string) {
    this._listener = value;
  }
  public resetListener() {
    this._listener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerInput() {
    return this._listener;
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

  // ports - computed: false, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }
}

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesOutputReference {
    return new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec {
  /**
  * BackendServices specifies Kubernetes services whose backends are automatically synced to Envoy using EDS. Traffic for these services is not forwarded to an Envoy listener. This allows an Envoy listener load balance traffic to these backends while normal Cilium service load balancing takes care of balancing traffic for these services at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#backend_services DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#backend_services}
  */
  readonly backendServices?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices[] | cdktf.IResolvable;
  /**
  * NodeSelector is a label selector that determines to which nodes this configuration applies. If nil, then this config applies to all nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#node_selector DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#node_selector}
  */
  readonly nodeSelector?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector;
  /**
  * Envoy xDS resources, a list of the following Envoy resource types: type.googleapis.com/envoy.config.listener.v3.Listener, type.googleapis.com/envoy.config.route.v3.RouteConfiguration, type.googleapis.com/envoy.config.cluster.v3.Cluster, type.googleapis.com/envoy.config.endpoint.v3.ClusterLoadAssignment, and type.googleapis.com/envoy.extensions.transport_sockets.tls.v3.Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#resources DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#resources}
  */
  readonly resources: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Services specifies Kubernetes services for which traffic is forwarded to an Envoy listener for L7 load balancing. Backends of these services are automatically synced to Envoy usign EDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#services DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest#services}
  */
  readonly services?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices[] | cdktf.IResolvable;
}

export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecToTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backend_services: cdktf.listMapper(dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesToTerraform, false)(struct!.backendServices),
    node_selector: dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorToTerraform(struct!.nodeSelector),
    resources: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.resources),
    services: cdktf.listMapper(dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesToTerraform, false)(struct!.services),
  }
}


export function dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecToHclTerraform(struct?: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backend_services: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesToHclTerraform, false)(struct!.backendServices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesList",
    },
    node_selector: {
      value: dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector",
    },
    resources: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.resources),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    services: {
      value: cdktf.listMapperHcl(dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesToHclTerraform, false)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backendServices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendServices = this._backendServices?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._resources !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backendServices.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
      this._resources = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backendServices.internalValue = value.backendServices;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._resources = value.resources;
      this._services.internalValue = value.services;
    }
  }

  // backend_services - computed: false, optional: true, required: false
  private _backendServices = new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServicesList(this, "backend_services", false);
  public get backendServices() {
    return this._backendServices;
  }
  public putBackendServices(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecBackendServices[] | cdktf.IResolvable) {
    this._backendServices.internalValue = value;
  }
  public resetBackendServices() {
    this._backendServices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendServicesInput() {
    return this._backendServices.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get resources() {
    return this.interpolationForAttribute('resources');
  }
  public set resources(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._resources = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources;
  }

  // services - computed: false, optional: true, required: false
  private _services = new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest k8s_cilium_io_cilium_clusterwide_envoy_config_v2_manifest}
*/
export class DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cilium_io_cilium_clusterwide_envoy_config_v2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest to import
  * @param importFromId The id of the existing DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cilium_io_cilium_clusterwide_envoy_config_v2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/cilium_io_cilium_clusterwide_envoy_config_v2_manifest k8s_cilium_io_cilium_clusterwide_envoy_config_v2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cilium_io_cilium_clusterwide_envoy_config_v2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec) {
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
      metadata: dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestMetadata",
      },
      spec: {
        value: dataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCiliumIoCiliumClusterwideEnvoyConfigV2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
