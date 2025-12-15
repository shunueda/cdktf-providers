// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata;
  /**
  * VirtualServiceSpec defines the desired state of VirtualService refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_VirtualServiceSpec.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#spec DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec;
}
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#annotations DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#labels DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef {
  /**
  * Name is the name of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * UID is the UID of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#uid DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef {
  /**
  * Name is the name of VirtualNode CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualNode CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode {
  /**
  * Amazon Resource Name to AppMesh VirtualNode object that is acting as a service provider. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#virtual_node_arn DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#virtual_node_arn}
  */
  readonly virtualNodeArn?: string;
  /**
  * Reference to Kubernetes VirtualNode CR in cluster that is acting as a service provider. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#virtual_node_ref DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#virtual_node_ref}
  */
  readonly virtualNodeRef?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node_arn: cdktf.stringToTerraform(struct!.virtualNodeArn),
    virtual_node_ref: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRefToTerraform(struct!.virtualNodeRef),
  }
}


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_node_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualNodeArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_node_ref: {
      value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRefToHclTerraform(struct!.virtualNodeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualNodeArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeArn = this._virtualNodeArn;
    }
    if (this._virtualNodeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeRef = this._virtualNodeRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualNodeArn = undefined;
      this._virtualNodeRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualNodeArn = value.virtualNodeArn;
      this._virtualNodeRef.internalValue = value.virtualNodeRef;
    }
  }

  // virtual_node_arn - computed: false, optional: true, required: false
  private _virtualNodeArn?: string; 
  public get virtualNodeArn() {
    return this.getStringAttribute('virtual_node_arn');
  }
  public set virtualNodeArn(value: string) {
    this._virtualNodeArn = value;
  }
  public resetVirtualNodeArn() {
    this._virtualNodeArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeArnInput() {
    return this._virtualNodeArn;
  }

  // virtual_node_ref - computed: false, optional: true, required: false
  private _virtualNodeRef = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRefOutputReference(this, "virtual_node_ref");
  public get virtualNodeRef() {
    return this._virtualNodeRef;
  }
  public putVirtualNodeRef(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeVirtualNodeRef) {
    this._virtualNodeRef.internalValue = value;
  }
  public resetVirtualNodeRef() {
    this._virtualNodeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeRefInput() {
    return this._virtualNodeRef.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef {
  /**
  * Name is the name of VirtualRouter CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualRouter CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter {
  /**
  * Amazon Resource Name to AppMesh VirtualRouter object that is acting as a service provider. Exactly one of 'virtualRouterRef' or 'virtualRouterARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#virtual_router_arn DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#virtual_router_arn}
  */
  readonly virtualRouterArn?: string;
  /**
  * Reference to Kubernetes VirtualRouter CR in cluster that is acting as a service provider. Exactly one of 'virtualRouterRef' or 'virtualRouterARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#virtual_router_ref DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#virtual_router_ref}
  */
  readonly virtualRouterRef?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_router_arn: cdktf.stringToTerraform(struct!.virtualRouterArn),
    virtual_router_ref: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRefToTerraform(struct!.virtualRouterRef),
  }
}


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_router_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualRouterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_router_ref: {
      value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRefToHclTerraform(struct!.virtualRouterRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualRouterArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouterArn = this._virtualRouterArn;
    }
    if (this._virtualRouterRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouterRef = this._virtualRouterRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualRouterArn = undefined;
      this._virtualRouterRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualRouterArn = value.virtualRouterArn;
      this._virtualRouterRef.internalValue = value.virtualRouterRef;
    }
  }

  // virtual_router_arn - computed: false, optional: true, required: false
  private _virtualRouterArn?: string; 
  public get virtualRouterArn() {
    return this.getStringAttribute('virtual_router_arn');
  }
  public set virtualRouterArn(value: string) {
    this._virtualRouterArn = value;
  }
  public resetVirtualRouterArn() {
    this._virtualRouterArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterArnInput() {
    return this._virtualRouterArn;
  }

  // virtual_router_ref - computed: false, optional: true, required: false
  private _virtualRouterRef = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRefOutputReference(this, "virtual_router_ref");
  public get virtualRouterRef() {
    return this._virtualRouterRef;
  }
  public putVirtualRouterRef(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterVirtualRouterRef) {
    this._virtualRouterRef.internalValue = value;
  }
  public resetVirtualRouterRef() {
    this._virtualRouterRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterRefInput() {
    return this._virtualRouterRef.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider {
  /**
  * The virtual node associated with a virtual service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#virtual_node DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#virtual_node}
  */
  readonly virtualNode?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode;
  /**
  * The virtual router associated with a virtual service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#virtual_router DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#virtual_router}
  */
  readonly virtualRouter?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    virtual_node: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeToTerraform(struct!.virtualNode),
    virtual_router: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterToTerraform(struct!.virtualRouter),
  }
}


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    virtual_node: {
      value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeToHclTerraform(struct!.virtualNode),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode",
    },
    virtual_router: {
      value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterToHclTerraform(struct!.virtualRouter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._virtualNode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNode = this._virtualNode?.internalValue;
    }
    if (this._virtualRouter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualRouter = this._virtualRouter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._virtualNode.internalValue = undefined;
      this._virtualRouter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._virtualNode.internalValue = value.virtualNode;
      this._virtualRouter.internalValue = value.virtualRouter;
    }
  }

  // virtual_node - computed: false, optional: true, required: false
  private _virtualNode = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNodeOutputReference(this, "virtual_node");
  public get virtualNode() {
    return this._virtualNode;
  }
  public putVirtualNode(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualNode) {
    this._virtualNode.internalValue = value;
  }
  public resetVirtualNode() {
    this._virtualNode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeInput() {
    return this._virtualNode.internalValue;
  }

  // virtual_router - computed: false, optional: true, required: false
  private _virtualRouter = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouterOutputReference(this, "virtual_router");
  public get virtualRouter() {
    return this._virtualRouter;
  }
  public putVirtualRouter(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderVirtualRouter) {
    this._virtualRouter.internalValue = value;
  }
  public resetVirtualRouter() {
    this._virtualRouter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualRouterInput() {
    return this._virtualRouter.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec {
  /**
  * AWSName is the AppMesh VirtualService object's name. If unspecified or empty, it defaults to be '${name}.${namespace}' of k8s VirtualService
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#aws_name DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#aws_name}
  */
  readonly awsName?: string;
  /**
  * A reference to k8s Mesh CR that this VirtualService belongs to. The admission controller populates it using Meshes's selector, and prevents users from setting this field. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#mesh_ref DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#mesh_ref}
  */
  readonly meshRef?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef;
  /**
  * The provider for virtual services. You can specify a single virtual node or virtual router.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#provider DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest#provider}
  */
  readonly provider?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider;
}

export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_name: cdktf.stringToTerraform(struct!.awsName),
    mesh_ref: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRefToTerraform(struct!.meshRef),
    provider: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderToTerraform(struct!.provider),
  }
}


export function dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_name: {
      value: cdktf.stringToHclTerraform(struct!.awsName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mesh_ref: {
      value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRefToHclTerraform(struct!.meshRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef",
    },
    provider: {
      value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderToHclTerraform(struct!.provider),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsName = this._awsName;
    }
    if (this._meshRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshRef = this._meshRef?.internalValue;
    }
    if (this._provider?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsName = undefined;
      this._meshRef.internalValue = undefined;
      this._provider.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsName = value.awsName;
      this._meshRef.internalValue = value.meshRef;
      this._provider.internalValue = value.provider;
    }
  }

  // aws_name - computed: false, optional: true, required: false
  private _awsName?: string; 
  public get awsName() {
    return this.getStringAttribute('aws_name');
  }
  public set awsName(value: string) {
    this._awsName = value;
  }
  public resetAwsName() {
    this._awsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsNameInput() {
    return this._awsName;
  }

  // mesh_ref - computed: false, optional: true, required: false
  private _meshRef = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRefOutputReference(this, "mesh_ref");
  public get meshRef() {
    return this._meshRef;
  }
  public putMeshRef(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecMeshRef) {
    this._meshRef.internalValue = value;
  }
  public resetMeshRef() {
    this._meshRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshRefInput() {
    return this._meshRef.internalValue;
  }

  // provider - computed: false, optional: true, required: false
  private _provider = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProviderOutputReference(this, "provider");
  public get provider() {
    return this._provider;
  }
  public putProvider(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecProvider) {
    this._provider.internalValue = value;
  }
  public resetProvider() {
    this._provider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_service_v1beta2_manifest}
*/
export class DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appmesh_k8s_aws_virtual_service_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppmeshK8SAwsVirtualServiceV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appmesh_k8s_aws_virtual_service_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/appmesh_k8s_aws_virtual_service_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_service_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appmesh_k8s_aws_virtual_service_v1beta2_manifest',
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
  private _metadata = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualServiceV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
