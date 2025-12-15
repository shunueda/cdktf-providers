// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#metadata DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata;
  /**
  * ServiceBindingSpec defines the desired state of ServiceBinding
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#spec DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec;
}
export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#annotations DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#labels DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#name DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#namespace DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv {
  /**
  * Key is the key in the Secret that will be exposed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#key DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#key}
  */
  readonly key: string;
  /**
  * Name is the name of the environment variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#name DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvToTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvToHclTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvOutputReference {
    return new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#api_version DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#kind DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#name DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#name}
  */
  readonly name: string;
}

export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecServiceToTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecServiceToHclTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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
export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#key DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#operator DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#values DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsToTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsToHclTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsOutputReference {
    return new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#match_expressions DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#match_labels DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorToTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorToHclTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsList",
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

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#api_version DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Containers describes which containers in a Pod should be bound to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#containers DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#containers}
  */
  readonly containers?: string[];
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#kind DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#name DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Selector is a query that selects the workload or workloads to bind the service to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#selector DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#selector}
  */
  readonly selector?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector;
}

export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadToTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    containers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containers),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    selector: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadToHclTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload | cdktf.IResolvable): any {
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
    containers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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
    selector: {
      value: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._containers = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._containers = value.containers;
      this._kind = value.kind;
      this._name = value.name;
      this._selector.internalValue = value.selector;
    }
  }

  // api_version - computed: false, optional: false, required: true
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: string[]; 
  public get containers() {
    return this.getListAttribute('containers');
  }
  public set containers(value: string[]) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
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

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}
export interface DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec {
  /**
  * Env is the collection of mappings from Secret entries to environment variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#env DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#env}
  */
  readonly env?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * Name is the name of the service as projected into the workload container. Defaults to .metadata.name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#name DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Provider is the provider of the service as projected into the workload container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#provider DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#provider}
  */
  readonly provider?: string;
  /**
  * Service is a reference to an object that fulfills the ProvisionedService duck type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#service DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#service}
  */
  readonly service: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService;
  /**
  * Type is the type of the service as projected into the workload container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#type DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#type}
  */
  readonly type?: string;
  /**
  * Workload is a reference to an object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#workload DataK8SServicebindingIoServiceBindingV1Alpha3Manifest#workload}
  */
  readonly workload: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload;
}

export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecToTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    provider: cdktf.stringToTerraform(struct!.provider),
    service: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecServiceToTerraform(struct!.service),
    type: cdktf.stringToTerraform(struct!.type),
    workload: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadToTerraform(struct!.workload),
  }
}


export function dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecServiceToHclTerraform(struct!.service),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workload: {
      value: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadToHclTerraform(struct!.workload),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._provider = undefined;
      this._service.internalValue = undefined;
      this._type = undefined;
      this._workload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._provider = value.provider;
      this._service.internalValue = value.service;
      this._type = value.type;
      this._workload.internalValue = value.workload;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // service - computed: false, optional: false, required: true
  private _service = new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecService) {
    this._service.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
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

  // workload - computed: false, optional: false, required: true
  private _workload = new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecWorkload) {
    this._workload.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest k8s_servicebinding_io_service_binding_v1alpha3_manifest}
*/
export class DataK8SServicebindingIoServiceBindingV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_servicebinding_io_service_binding_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SServicebindingIoServiceBindingV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SServicebindingIoServiceBindingV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SServicebindingIoServiceBindingV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SServicebindingIoServiceBindingV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_servicebinding_io_service_binding_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/servicebinding_io_service_binding_v1alpha3_manifest k8s_servicebinding_io_service_binding_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SServicebindingIoServiceBindingV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_servicebinding_io_service_binding_v1alpha3_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec) {
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
      metadata: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SServicebindingIoServiceBindingV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SServicebindingIoServiceBindingV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
