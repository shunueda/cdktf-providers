// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata;
  /**
  * BackendGroupSpec defines the desired state of BackendGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#spec DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec;
}
export interface DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#annotations DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#labels DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#name DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef {
  /**
  * Name is the name of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#name DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * UID is the UID of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#uid DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRefToTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._uid = value.uid;
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

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices {
  /**
  * Name is the name of VirtualService CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#name DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualService CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesToTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesToHclTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices | cdktf.IResolvable | undefined) {
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

export class DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesOutputReference {
    return new DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec {
  /**
  * A reference to k8s Mesh CR that this BackendGroup belongs to. The admission controller populates it using Meshes's selector, and prevents users from setting this field. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#mesh_ref DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#mesh_ref}
  */
  readonly meshRef?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef;
  /**
  * VirtualServices defines the set of virtual services in this BackendGroup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#virtualservices DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest#virtualservices}
  */
  readonly virtualservices?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mesh_ref: dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRefToTerraform(struct!.meshRef),
    virtualservices: cdktf.listMapper(dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesToTerraform, false)(struct!.virtualservices),
  }
}


export function dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mesh_ref: {
      value: dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRefToHclTerraform(struct!.meshRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef",
    },
    virtualservices: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesToHclTerraform, false)(struct!.virtualservices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._meshRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshRef = this._meshRef?.internalValue;
    }
    if (this._virtualservices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualservices = this._virtualservices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._meshRef.internalValue = undefined;
      this._virtualservices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._meshRef.internalValue = value.meshRef;
      this._virtualservices.internalValue = value.virtualservices;
    }
  }

  // mesh_ref - computed: false, optional: true, required: false
  private _meshRef = new DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRefOutputReference(this, "mesh_ref");
  public get meshRef() {
    return this._meshRef;
  }
  public putMeshRef(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecMeshRef) {
    this._meshRef.internalValue = value;
  }
  public resetMeshRef() {
    this._meshRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshRefInput() {
    return this._meshRef.internalValue;
  }

  // virtualservices - computed: false, optional: true, required: false
  private _virtualservices = new DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservicesList(this, "virtualservices", false);
  public get virtualservices() {
    return this._virtualservices;
  }
  public putVirtualservices(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecVirtualservices[] | cdktf.IResolvable) {
    this._virtualservices.internalValue = value;
  }
  public resetVirtualservices() {
    this._virtualservices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualservicesInput() {
    return this._virtualservices.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest k8s_appmesh_k8s_aws_backend_group_v1beta2_manifest}
*/
export class DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appmesh_k8s_aws_backend_group_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppmeshK8SAwsBackendGroupV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appmesh_k8s_aws_backend_group_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/appmesh_k8s_aws_backend_group_v1beta2_manifest k8s_appmesh_k8s_aws_backend_group_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appmesh_k8s_aws_backend_group_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
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
  private _metadata = new DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsBackendGroupV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
