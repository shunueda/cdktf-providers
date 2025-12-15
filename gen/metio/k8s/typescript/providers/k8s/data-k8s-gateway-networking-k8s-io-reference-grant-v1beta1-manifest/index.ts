// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#metadata DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata;
  /**
  * Spec defines the desired state of ReferenceGrant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#spec DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec;
}
export interface DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#annotations DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#labels DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadataToTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom {
  /**
  * Group is the group of the referent. When empty, the Kubernetes core API group is inferred. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is the kind of the referent. Although implementations may support additional resources, the following types are part of the 'Core' support level for this field. When used to permit a SecretObjectReference: * Gateway When used to permit a BackendObjectReference: * GRPCRoute * HTTPRoute * TCPRoute * TLSRoute * UDPRoute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Namespace is the namespace of the referent. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#namespace DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromToTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom | cdktf.IResolvable): any {
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
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

export class DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromOutputReference {
    return new DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo {
  /**
  * Group is the group of the referent. When empty, the Kubernetes core API group is inferred. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#group DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Kind is the kind of the referent. Although implementations may support additional resources, the following types are part of the 'Core' support level for this field: * Secret when used to permit a SecretObjectReference * Service when used to permit a BackendObjectReference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#kind DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of the referent. When unspecified, this policy refers to all resources of the specified Group and Kind in the local namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#name DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToToTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo | cdktf.IResolvable): any {
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

export class DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
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

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToList extends cdktf.ComplexList {
  public internalValue? : DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToOutputReference {
    return new DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec {
  /**
  * From describes the trusted namespaces and kinds that can reference the resources described in 'To'. Each entry in this list MUST be considered to be an additional place that references can be valid from, or to put this another way, entries MUST be combined using OR. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#from DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#from}
  */
  readonly from: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom[] | cdktf.IResolvable;
  /**
  * To describes the resources that may be referenced by the resources described in 'From'. Each entry in this list MUST be considered to be an additional place that references can be valid to, or to put this another way, entries MUST be combined using OR. Support: Core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#to DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest#to}
  */
  readonly to: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo[] | cdktf.IResolvable;
}

export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    from: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromToTerraform, false)(struct!.from),
    to: cdktf.listMapper(dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToToTerraform, false)(struct!.to),
  }
}


export function dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    from: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromToHclTerraform, false)(struct!.from),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromList",
    },
    to: {
      value: cdktf.listMapperHcl(dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToToHclTerraform, false)(struct!.to),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._from?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from?.internalValue;
    }
    if (this._to?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._from.internalValue = undefined;
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
      this._to.internalValue = value.to;
    }
  }

  // from - computed: false, optional: false, required: true
  private _from = new DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFromList(this, "from", false);
  public get from() {
    return this._from;
  }
  public putFrom(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecFrom[] | cdktf.IResolvable) {
    this._from.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from.internalValue;
  }

  // to - computed: false, optional: false, required: true
  private _to = new DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToList(this, "to", false);
  public get to() {
    return this._to;
  }
  public putTo(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecTo[] | cdktf.IResolvable) {
    this._to.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest k8s_gateway_networking_k8s_io_reference_grant_v1beta1_manifest}
*/
export class DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_gateway_networking_k8s_io_reference_grant_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_gateway_networking_k8s_io_reference_grant_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/gateway_networking_k8s_io_reference_grant_v1beta1_manifest k8s_gateway_networking_k8s_io_reference_grant_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_gateway_networking_k8s_io_reference_grant_v1beta1_manifest',
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
  private _metadata = new DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec) {
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
      metadata: dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SGatewayNetworkingK8SIoReferenceGrantV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
