// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#metadata DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata;
  /**
  * Spec is the specification of the Kuma MeshRateLimit resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#spec DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#annotations DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#labels DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#namespace DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#value DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddOutputReference {
    return new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#value DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetOutputReference {
    return new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#add DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#add}
  */
  readonly add?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#set DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#set}
  */
  readonly set?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddToTerraform, false)(struct!.add),
    set: cdktf.listMapper(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._set.internalValue = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit {
  /**
  * The Headers to be added to the HTTP response on a rate limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#headers DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders;
  /**
  * The HTTP status code to be set on a rate limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#status DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#status}
  */
  readonly status?: number;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersToTerraform(struct!.headers),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._status = value.status;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate {
  /**
  * The interval the number of units is accounted for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#interval DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Number of units per interval (depending on usage it can be a number of requests, or a number of connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#num DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#num}
  */
  readonly num: number;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRateToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    num: cdktf.numberToTerraform(struct!.num),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRateToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._num = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._num = value.num;
    }
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

  // num - computed: false, optional: false, required: true
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp {
  /**
  * Define if rate limiting should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#disabled DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Describes the actions to take on a rate limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#on_rate_limit DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#on_rate_limit}
  */
  readonly onRateLimit?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit;
  /**
  * Defines how many requests are allowed per interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#request_rate DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#request_rate}
  */
  readonly requestRate?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    on_rate_limit: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitToTerraform(struct!.onRateLimit),
    request_rate: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRateToTerraform(struct!.requestRate),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_rate_limit: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitToHclTerraform(struct!.onRateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit",
    },
    request_rate: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRateToHclTerraform(struct!.requestRate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._onRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onRateLimit = this._onRateLimit?.internalValue;
    }
    if (this._requestRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRate = this._requestRate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._onRateLimit.internalValue = undefined;
      this._requestRate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._onRateLimit.internalValue = value.onRateLimit;
      this._requestRate.internalValue = value.requestRate;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // on_rate_limit - computed: false, optional: true, required: false
  private _onRateLimit = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimitOutputReference(this, "on_rate_limit");
  public get onRateLimit() {
    return this._onRateLimit;
  }
  public putOnRateLimit(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOnRateLimit) {
    this._onRateLimit.internalValue = value;
  }
  public resetOnRateLimit() {
    this._onRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRateLimitInput() {
    return this._onRateLimit.internalValue;
  }

  // request_rate - computed: false, optional: true, required: false
  private _requestRate = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRateOutputReference(this, "request_rate");
  public get requestRate() {
    return this._requestRate;
  }
  public putRequestRate(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpRequestRate) {
    this._requestRate.internalValue = value;
  }
  public resetRequestRate() {
    this._requestRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateInput() {
    return this._requestRate.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate {
  /**
  * The interval the number of units is accounted for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#interval DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Number of units per interval (depending on usage it can be a number of requests, or a number of connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#num DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#num}
  */
  readonly num: number;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRateToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    num: cdktf.numberToTerraform(struct!.num),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRateToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._num = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._num = value.num;
    }
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

  // num - computed: false, optional: false, required: true
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp {
  /**
  * Defines how many connections are allowed per interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#connection_rate DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#connection_rate}
  */
  readonly connectionRate?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate;
  /**
  * Define if rate limiting should be disabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#disabled DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_rate: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRateToTerraform(struct!.connectionRate),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_rate: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRateToHclTerraform(struct!.connectionRate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRate = this._connectionRate?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionRate.internalValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionRate.internalValue = value.connectionRate;
      this._disabled = value.disabled;
    }
  }

  // connection_rate - computed: false, optional: true, required: false
  private _connectionRate = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRateOutputReference(this, "connection_rate");
  public get connectionRate() {
    return this._connectionRate;
  }
  public putConnectionRate(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpConnectionRate) {
    this._connectionRate.internalValue = value;
  }
  public resetConnectionRate() {
    this._connectionRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateInput() {
    return this._connectionRate.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal {
  /**
  * LocalHTTP defines configuration of local HTTP rate limiting https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/local_rate_limit_filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#http DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#http}
  */
  readonly http?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp;
  /**
  * LocalTCP defines confguration of local TCP rate limiting https://www.envoyproxy.io/docs/envoy/latest/configuration/listeners/network_filters/local_rate_limit_filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#tcp DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#tcp}
  */
  readonly tcp?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpToTerraform(struct!.http),
    tcp: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp",
    },
    tcp: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault {
  /**
  * LocalConf defines local http or/and tcp rate limit configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#local DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#local}
  */
  readonly local?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalToTerraform(struct!.local),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local.internalValue = value.local;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#kind DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#labels DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#mesh DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#namespace DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#section_name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#tags DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRefToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable | undefined {
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
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
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
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom {
  /**
  * Default is a configuration specific to the group of clients referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#default DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#target_ref DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromOutputReference {
    return new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#kind DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#labels DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#mesh DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#namespace DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#section_name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#tags DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRefToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined {
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
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
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
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#value DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddOutputReference {
    return new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#value DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet | cdktf.IResolvable | undefined) {
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

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetOutputReference {
    return new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#add DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#add}
  */
  readonly add?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#set DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#set}
  */
  readonly set?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add: cdktf.listMapper(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddToTerraform, false)(struct!.add),
    set: cdktf.listMapper(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetToTerraform, false)(struct!.set),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddToHclTerraform, false)(struct!.add),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddList",
    },
    set: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetToHclTerraform, false)(struct!.set),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._add?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.add = this._add?.internalValue;
    }
    if (this._set?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.set = this._set?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._add.internalValue = undefined;
      this._set.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._add.internalValue = value.add;
      this._set.internalValue = value.set;
    }
  }

  // add - computed: false, optional: true, required: false
  private _add = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAddList(this, "add", false);
  public get add() {
    return this._add;
  }
  public putAdd(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersAdd[] | cdktf.IResolvable) {
    this._add.internalValue = value;
  }
  public resetAdd() {
    this._add.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addInput() {
    return this._add.internalValue;
  }

  // set - computed: false, optional: true, required: false
  private _set = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSetList(this, "set", false);
  public get set() {
    return this._set;
  }
  public putSet(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersSet[] | cdktf.IResolvable) {
    this._set.internalValue = value;
  }
  public resetSet() {
    this._set.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setInput() {
    return this._set.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit {
  /**
  * The Headers to be added to the HTTP response on a rate limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#headers DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#headers}
  */
  readonly headers?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders;
  /**
  * The HTTP status code to be set on a rate limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#status DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#status}
  */
  readonly status?: number;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersToTerraform(struct!.headers),
    status: cdktf.numberToTerraform(struct!.status),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._status = value.status;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // status - computed: false, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate {
  /**
  * The interval the number of units is accounted for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#interval DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Number of units per interval (depending on usage it can be a number of requests, or a number of connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#num DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#num}
  */
  readonly num: number;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRateToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    num: cdktf.numberToTerraform(struct!.num),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRateToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._num = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._num = value.num;
    }
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

  // num - computed: false, optional: false, required: true
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp {
  /**
  * Define if rate limiting should be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#disabled DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Describes the actions to take on a rate limit event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#on_rate_limit DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#on_rate_limit}
  */
  readonly onRateLimit?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit;
  /**
  * Defines how many requests are allowed per interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#request_rate DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#request_rate}
  */
  readonly requestRate?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    on_rate_limit: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitToTerraform(struct!.onRateLimit),
    request_rate: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRateToTerraform(struct!.requestRate),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    on_rate_limit: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitToHclTerraform(struct!.onRateLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit",
    },
    request_rate: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRateToHclTerraform(struct!.requestRate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._onRateLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onRateLimit = this._onRateLimit?.internalValue;
    }
    if (this._requestRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRate = this._requestRate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disabled = undefined;
      this._onRateLimit.internalValue = undefined;
      this._requestRate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disabled = value.disabled;
      this._onRateLimit.internalValue = value.onRateLimit;
      this._requestRate.internalValue = value.requestRate;
    }
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // on_rate_limit - computed: false, optional: true, required: false
  private _onRateLimit = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimitOutputReference(this, "on_rate_limit");
  public get onRateLimit() {
    return this._onRateLimit;
  }
  public putOnRateLimit(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOnRateLimit) {
    this._onRateLimit.internalValue = value;
  }
  public resetOnRateLimit() {
    this._onRateLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onRateLimitInput() {
    return this._onRateLimit.internalValue;
  }

  // request_rate - computed: false, optional: true, required: false
  private _requestRate = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRateOutputReference(this, "request_rate");
  public get requestRate() {
    return this._requestRate;
  }
  public putRequestRate(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpRequestRate) {
    this._requestRate.internalValue = value;
  }
  public resetRequestRate() {
    this._requestRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRateInput() {
    return this._requestRate.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate {
  /**
  * The interval the number of units is accounted for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#interval DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#interval}
  */
  readonly interval: string;
  /**
  * Number of units per interval (depending on usage it can be a number of requests, or a number of connections).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#num DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#num}
  */
  readonly num: number;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRateToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.stringToTerraform(struct!.interval),
    num: cdktf.numberToTerraform(struct!.num),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRateToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.stringToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._num = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._num = value.num;
    }
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

  // num - computed: false, optional: false, required: true
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp {
  /**
  * Defines how many connections are allowed per interval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#connection_rate DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#connection_rate}
  */
  readonly connectionRate?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate;
  /**
  * Define if rate limiting should be disabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#disabled DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_rate: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRateToTerraform(struct!.connectionRate),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_rate: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRateToHclTerraform(struct!.connectionRate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionRate = this._connectionRate?.internalValue;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionRate.internalValue = undefined;
      this._disabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionRate.internalValue = value.connectionRate;
      this._disabled = value.disabled;
    }
  }

  // connection_rate - computed: false, optional: true, required: false
  private _connectionRate = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRateOutputReference(this, "connection_rate");
  public get connectionRate() {
    return this._connectionRate;
  }
  public putConnectionRate(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpConnectionRate) {
    this._connectionRate.internalValue = value;
  }
  public resetConnectionRate() {
    this._connectionRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateInput() {
    return this._connectionRate.internalValue;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal {
  /**
  * LocalHTTP defines configuration of local HTTP rate limiting https://www.envoyproxy.io/docs/envoy/latest/configuration/http/http_filters/local_rate_limit_filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#http DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#http}
  */
  readonly http?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp;
  /**
  * LocalTCP defines confguration of local TCP rate limiting https://www.envoyproxy.io/docs/envoy/latest/configuration/listeners/network_filters/local_rate_limit_filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#tcp DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#tcp}
  */
  readonly tcp?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpToTerraform(struct!.http),
    tcp: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpToTerraform(struct!.tcp),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp",
    },
    tcp: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._http.internalValue = undefined;
      this._tcp.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._http.internalValue = value.http;
      this._tcp.internalValue = value.tcp;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault {
  /**
  * LocalConf defines local http or/and tcp rate limit configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#local DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#local}
  */
  readonly local?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalToTerraform(struct!.local),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalToHclTerraform(struct!.local),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._local?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.local = this._local?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._local.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._local.internalValue = value.local;
    }
  }

  // local - computed: false, optional: true, required: false
  private _local = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocalOutputReference(this, "local");
  public get local() {
    return this._local;
  }
  public putLocal(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultLocal) {
    this._local.internalValue = value;
  }
  public resetLocal() {
    this._local.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localInput() {
    return this._local.internalValue;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef {
  /**
  * Kind of the referenced resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#kind DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Labels are used to select group of MeshServices that match labels. Either Labels or Name and Namespace can be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#labels DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Mesh is reserved for future use to identify cross mesh resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#mesh DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#mesh}
  */
  readonly mesh?: string;
  /**
  * Name of the referenced resource. Can only be used with kinds: 'MeshService', 'MeshServiceSubset' and 'MeshGatewayRoute'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the namespace of target resource. If empty only resources in policy namespace will be targeted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#namespace DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * ProxyTypes specifies the data plane types that are subject to the policy. When not specified, all data plane types are targeted by the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#proxy_types DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#proxy_types}
  */
  readonly proxyTypes?: string[];
  /**
  * SectionName is used to target specific section of resource. For example, you can target port from MeshService.ports[] by its name. Only traffic to this port will be affected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#section_name DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#section_name}
  */
  readonly sectionName?: string;
  /**
  * Tags used to select a subset of proxies by tags. Can only be used with kinds 'MeshSubset' and 'MeshServiceSubset'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#tags DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRefToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: cdktf.stringToTerraform(struct!.kind),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    mesh: cdktf.stringToTerraform(struct!.mesh),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    proxy_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.proxyTypes),
    section_name: cdktf.stringToTerraform(struct!.sectionName),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable): any {
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
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mesh: {
      value: cdktf.stringToHclTerraform(struct!.mesh),
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
    proxy_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.proxyTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    section_name: {
      value: cdktf.stringToHclTerraform(struct!.sectionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined {
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
    if (this._mesh !== undefined) {
      hasAnyValues = true;
      internalValueResult.mesh = this._mesh;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._proxyTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyTypes = this._proxyTypes;
    }
    if (this._sectionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectionName = this._sectionName;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._kind = undefined;
      this._labels = undefined;
      this._mesh = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._proxyTypes = undefined;
      this._sectionName = undefined;
      this._tags = undefined;
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
      this._mesh = value.mesh;
      this._name = value.name;
      this._namespace = value.namespace;
      this._proxyTypes = value.proxyTypes;
      this._sectionName = value.sectionName;
      this._tags = value.tags;
    }
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

  // mesh - computed: false, optional: true, required: false
  private _mesh?: string; 
  public get mesh() {
    return this.getStringAttribute('mesh');
  }
  public set mesh(value: string) {
    this._mesh = value;
  }
  public resetMesh() {
    this._mesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshInput() {
    return this._mesh;
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

  // proxy_types - computed: false, optional: true, required: false
  private _proxyTypes?: string[]; 
  public get proxyTypes() {
    return this.getListAttribute('proxy_types');
  }
  public set proxyTypes(value: string[]) {
    this._proxyTypes = value;
  }
  public resetProxyTypes() {
    this._proxyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyTypesInput() {
    return this._proxyTypes;
  }

  // section_name - computed: false, optional: true, required: false
  private _sectionName?: string; 
  public get sectionName() {
    return this.getStringAttribute('section_name');
  }
  public set sectionName(value: string) {
    this._sectionName = value;
  }
  public resetSectionName() {
    this._sectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionNameInput() {
    return this._sectionName;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo {
  /**
  * Default is a configuration specific to the group of clients referenced in 'targetRef'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#default DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#default}
  */
  readonly default?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault;
  /**
  * TargetRef is a reference to the resource that represents a group of clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#target_ref DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#target_ref}
  */
  readonly targetRef: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultToTerraform(struct!.default),
    target_ref: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultToHclTerraform(struct!.default),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault",
    },
    target_ref: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default.internalValue = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default.internalValue = value.default;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }
  public putDefault(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToDefault) {
    this._default.internalValue = value;
  }
  public resetDefault() {
    this._default.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // target_ref - computed: false, optional: false, required: true
  private _targetRef = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTargetRef) {
    this._targetRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToOutputReference {
    return new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec {
  /**
  * From list makes a match between clients and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#from DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#from}
  */
  readonly from?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable;
  /**
  * TargetRef is a reference to the resource the policy takes an effect on. The resource could be either a real store object or virtual resource defined inplace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#target_ref DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef;
  /**
  * To list makes a match between clients and corresponding configurations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#to DataK8SKumaIoMeshRateLimitV1Alpha1Manifest#to}
  */
  readonly to?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromToTerraform, false)(struct!.from),
    target_ref: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRefToTerraform(struct!.targetRef),
    to: cdktf.listMapper(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromList",
    },
    target_ref: {
      value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
      this._targetRef.internalValue = undefined;
      this._to.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._from.internalValue = value.from;
      this._targetRef.internalValue = value.targetRef;
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: true, required: false
  private _from = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  public resetFrom() {
    this._from.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }

  // to - computed: false, optional: true, required: false
  private _to = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  public resetTo() {
    this._to.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest k8s_kuma_io_mesh_rate_limit_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshRateLimitV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_rate_limit_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshRateLimitV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshRateLimitV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshRateLimitV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshRateLimitV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_rate_limit_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_rate_limit_v1alpha1_manifest k8s_kuma_io_mesh_rate_limit_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshRateLimitV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_rate_limit_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshRateLimitV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
