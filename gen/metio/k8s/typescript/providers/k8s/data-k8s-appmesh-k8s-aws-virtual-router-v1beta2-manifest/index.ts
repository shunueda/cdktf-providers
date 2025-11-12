// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata;
  /**
  * VirtualRouterSpec defines the desired state of VirtualRouter refers to https://docs.aws.amazon.com/app-mesh/latest/APIReference/API_VirtualRouterSpec.html
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#spec DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec;
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#annotations DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#labels DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping {
  /**
  * The port used for the port mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * The protocol used for the port mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#protocol DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#protocol}
  */
  readonly protocol: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMappingToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMappingToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners {
  /**
  * The port mapping information for the listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port_mapping DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port_mapping}
  */
  readonly portMapping: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_mapping: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMappingToTerraform(struct!.portMapping),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_mapping: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMappingToHclTerraform(struct!.portMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMapping = this._portMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portMapping.internalValue = value.portMapping;
    }
  }

  // port_mapping - computed: false, optional: false, required: true
  private _portMapping = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMappingOutputReference(this, "port_mapping");
  public get portMapping() {
    return this._portMapping;
  }
  public putPortMapping(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersPortMapping) {
    this._portMapping.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingInput() {
    return this._portMapping.internalValue;
  }
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef {
  /**
  * Name is the name of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * UID is the UID of Mesh CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#uid DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef {
  /**
  * Name is the name of VirtualNode CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualNode CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets {
  /**
  * Specifies the targeted port of the weighted object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Amazon Resource Name to AppMesh VirtualNode object to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_arn DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_arn}
  */
  readonly virtualNodeArn?: string;
  /**
  * Reference to Kubernetes VirtualNode CR in cluster to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_ref DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_ref}
  */
  readonly virtualNodeRef?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef;
  /**
  * The relative weight of the weighted target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weight DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node_arn: cdktf.stringToTerraform(struct!.virtualNodeArn),
    virtual_node_ref: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRefToTerraform(struct!.virtualNodeRef),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_node_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualNodeArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_node_ref: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct!.virtualNodeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNodeArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeArn = this._virtualNodeArn;
    }
    if (this._virtualNodeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeRef = this._virtualNodeRef?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNodeArn = undefined;
      this._virtualNodeRef.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNodeArn = value.virtualNodeArn;
      this._virtualNodeRef.internalValue = value.virtualNodeRef;
      this._weight = value.weight;
    }
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
  private _virtualNodeRef = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRefOutputReference(this, "virtual_node_ref");
  public get virtualNodeRef() {
    return this._virtualNodeRef;
  }
  public putVirtualNodeRef(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsVirtualNodeRef) {
    this._virtualNodeRef.internalValue = value;
  }
  public resetVirtualNodeRef() {
    this._virtualNodeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeRefInput() {
    return this._virtualNodeRef.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction {
  /**
  * An object that represents the targets that traffic is routed to when a request matches the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weighted_targets DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weighted_targets}
  */
  readonly weightedTargets: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_targets: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsToTerraform, false)(struct!.weightedTargets),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weighted_targets: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsToHclTerraform, false)(struct!.weightedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTargets = this._weightedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = value.weightedTargets;
    }
  }

  // weighted_targets - computed: false, optional: false, required: true
  private _weightedTargets = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargetsList(this, "weighted_targets", false);
  public get weightedTargets() {
    return this._weightedTargets;
  }
  public putWeightedTargets(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionWeightedTargets[] | cdktf.IResolvable) {
    this._weightedTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetsInput() {
    return this._weightedTargets.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange {
  /**
  * The end of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#end DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#end}
  */
  readonly end: number;
  /**
  * The start of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#start DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#start}
  */
  readonly start: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRangeToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRangeToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must begin with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * An object that represents the range of values to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#range DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#range}
  */
  readonly range?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange;
  /**
  * The value sent by the client must include the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#regex DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    range: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRangeToTerraform(struct!.range),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._range.internalValue = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._range.internalValue = value.range;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // range - computed: false, optional: true, required: false
  private _range = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata {
  /**
  * Specify True to match anything except the match criteria. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#invert DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * An object that represents the data to match from the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch;
  /**
  * The name of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch {
  /**
  * An object that represents the data to match from the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#metadata DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#metadata}
  */
  readonly metadata?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata[] | cdktf.IResolvable;
  /**
  * The method name to match from the request. If you specify a name, you must also specify a serviceName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#method_name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#method_name}
  */
  readonly methodName?: string;
  /**
  * Specifies the port to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * The fully qualified domain name for the service to match from the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#service_name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#service_name}
  */
  readonly serviceName?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataToTerraform, false)(struct!.metadata),
    method_name: cdktf.stringToTerraform(struct!.methodName),
    port: cdktf.numberToTerraform(struct!.port),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataToHclTerraform, false)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataList",
    },
    method_name: {
      value: cdktf.stringToHclTerraform(struct!.methodName),
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
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._methodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodName = this._methodName;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._methodName = undefined;
      this._port = undefined;
      this._serviceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._methodName = value.methodName;
      this._port = value.port;
      this._serviceName = value.serviceName;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // method_name - computed: false, optional: true, required: false
  private _methodName?: string; 
  public get methodName() {
    return this.getStringAttribute('method_name');
  }
  public set methodName(value: string) {
    this._methodName = value;
  }
  public resetMethodName() {
    this._methodName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodNameInput() {
    return this._methodName;
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

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#grpc_retry_events DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#grpc_retry_events}
  */
  readonly grpcRetryEvents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#http_retry_events DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * The maximum number of retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#max_retries DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#max_retries}
  */
  readonly maxRetries: number;
  /**
  * An object that represents a duration of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#per_retry_timeout DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#per_retry_timeout}
  */
  readonly perRetryTimeout: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#tcp_retry_events DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.grpcRetryEvents),
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    per_retry_timeout: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpRetryEvents),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_retry_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.grpcRetryEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    http_retry_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpRetryEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_retry_timeout: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct!.perRetryTimeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout",
    },
    tcp_retry_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpRetryEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRetryEvents = this._grpcRetryEvents;
    }
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcRetryEvents = undefined;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._perRetryTimeout.internalValue = undefined;
      this._tcpRetryEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcRetryEvents = value.grpcRetryEvents;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
      this._tcpRetryEvents = value.tcpRetryEvents;
    }
  }

  // grpc_retry_events - computed: false, optional: true, required: false
  private _grpcRetryEvents?: string[]; 
  public get grpcRetryEvents() {
    return this.getListAttribute('grpc_retry_events');
  }
  public set grpcRetryEvents(value: string[]) {
    this._grpcRetryEvents = value;
  }
  public resetGrpcRetryEvents() {
    this._grpcRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRetryEventsInput() {
    return this._grpcRetryEvents;
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return this.getListAttribute('http_retry_events');
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return this.getListAttribute('tcp_retry_events');
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequestToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequestToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle;
  /**
  * An object that represents per request timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#per_request DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#per_request}
  */
  readonly perRequest?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdleToTerraform(struct!.idle),
    per_request: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle",
    },
    per_request: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute {
  /**
  * An object that represents the action to take if a match is determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#action DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#action}
  */
  readonly action: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction;
  /**
  * An object that represents the criteria for determining a request match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch;
  /**
  * An object that represents a retry policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#retry_policy DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#retry_policy}
  */
  readonly retryPolicy?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy;
  /**
  * An object that represents a grpc timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#timeout DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#timeout}
  */
  readonly timeout?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionToTerraform(struct!.action),
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchToTerraform(struct!.match),
    retry_policy: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutToTerraform(struct!.timeout),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction",
    },
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch",
    },
    retry_policy: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy",
    },
    timeout: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef {
  /**
  * Name is the name of VirtualNode CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualNode CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets {
  /**
  * Specifies the targeted port of the weighted object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Amazon Resource Name to AppMesh VirtualNode object to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_arn DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_arn}
  */
  readonly virtualNodeArn?: string;
  /**
  * Reference to Kubernetes VirtualNode CR in cluster to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_ref DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_ref}
  */
  readonly virtualNodeRef?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef;
  /**
  * The relative weight of the weighted target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weight DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node_arn: cdktf.stringToTerraform(struct!.virtualNodeArn),
    virtual_node_ref: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRefToTerraform(struct!.virtualNodeRef),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_node_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualNodeArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_node_ref: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct!.virtualNodeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNodeArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeArn = this._virtualNodeArn;
    }
    if (this._virtualNodeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeRef = this._virtualNodeRef?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNodeArn = undefined;
      this._virtualNodeRef.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNodeArn = value.virtualNodeArn;
      this._virtualNodeRef.internalValue = value.virtualNodeRef;
      this._weight = value.weight;
    }
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
  private _virtualNodeRef = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRefOutputReference(this, "virtual_node_ref");
  public get virtualNodeRef() {
    return this._virtualNodeRef;
  }
  public putVirtualNodeRef(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsVirtualNodeRef) {
    this._virtualNodeRef.internalValue = value;
  }
  public resetVirtualNodeRef() {
    this._virtualNodeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeRefInput() {
    return this._virtualNodeRef.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction {
  /**
  * An object that represents the targets that traffic is routed to when a request matches the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weighted_targets DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weighted_targets}
  */
  readonly weightedTargets: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_targets: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsToTerraform, false)(struct!.weightedTargets),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weighted_targets: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsToHclTerraform, false)(struct!.weightedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTargets = this._weightedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = value.weightedTargets;
    }
  }

  // weighted_targets - computed: false, optional: false, required: true
  private _weightedTargets = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargetsList(this, "weighted_targets", false);
  public get weightedTargets() {
    return this._weightedTargets;
  }
  public putWeightedTargets(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionWeightedTargets[] | cdktf.IResolvable) {
    this._weightedTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetsInput() {
    return this._weightedTargets.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange {
  /**
  * The end of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#end DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#end}
  */
  readonly end: number;
  /**
  * The start of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#start DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#start}
  */
  readonly start: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRangeToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRangeToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must begin with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * An object that represents the range of values to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#range DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#range}
  */
  readonly range?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange;
  /**
  * The value sent by the client must include the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#regex DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    range: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRangeToTerraform(struct!.range),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._range.internalValue = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._range.internalValue = value.range;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // range - computed: false, optional: true, required: false
  private _range = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders {
  /**
  * Specify True to match anything except the match criteria. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#invert DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * The HeaderMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch;
  /**
  * A name for the HTTP header in the client request that will be matched on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#regex DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPathToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPathToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#exact}
  */
  readonly exact?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters {
  /**
  * The QueryMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch {
  /**
  * An object that represents the client request headers to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#headers DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders[] | cdktf.IResolvable;
  /**
  * The client request method to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#method DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#method}
  */
  readonly method?: string;
  /**
  * The client specified Path to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#path DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#path}
  */
  readonly path?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath;
  /**
  * Specifies the port to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Specifies the prefix to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The client specified queryParameters to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#query_parameters DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#query_parameters}
  */
  readonly queryParameters?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters[] | cdktf.IResolvable;
  /**
  * The client request scheme to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#scheme DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPathToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    query_parameters: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersToTerraform, false)(struct!.queryParameters),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersToHclTerraform, false)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersList",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._queryParameters.internalValue = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._port = value.port;
      this._prefix = value.prefix;
      this._queryParameters.internalValue = value.queryParameters;
      this._scheme = value.scheme;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
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

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#http_retry_events DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * The maximum number of retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#max_retries DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#max_retries}
  */
  readonly maxRetries: number;
  /**
  * An object that represents a duration of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#per_retry_timeout DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#per_retry_timeout}
  */
  readonly perRetryTimeout: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#tcp_retry_events DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    per_retry_timeout: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpRetryEvents),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_retry_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpRetryEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_retry_timeout: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeoutToHclTerraform(struct!.perRetryTimeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout",
    },
    tcp_retry_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpRetryEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._perRetryTimeout.internalValue = undefined;
      this._tcpRetryEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
      this._tcpRetryEvents = value.tcpRetryEvents;
    }
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return this.getListAttribute('http_retry_events');
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return this.getListAttribute('tcp_retry_events');
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequestToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequestToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle;
  /**
  * An object that represents per request timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#per_request DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#per_request}
  */
  readonly perRequest?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdleToTerraform(struct!.idle),
    per_request: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle",
    },
    per_request: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route {
  /**
  * An object that represents the action to take if a match is determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#action DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#action}
  */
  readonly action: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction;
  /**
  * An object that represents the criteria for determining a request match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch;
  /**
  * An object that represents a retry policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#retry_policy DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#retry_policy}
  */
  readonly retryPolicy?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy;
  /**
  * An object that represents a http timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#timeout DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#timeout}
  */
  readonly timeout?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionToTerraform(struct!.action),
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchToTerraform(struct!.match),
    retry_policy: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutToTerraform(struct!.timeout),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction",
    },
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch",
    },
    retry_policy: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy",
    },
    timeout: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef {
  /**
  * Name is the name of VirtualNode CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualNode CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets {
  /**
  * Specifies the targeted port of the weighted object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Amazon Resource Name to AppMesh VirtualNode object to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_arn DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_arn}
  */
  readonly virtualNodeArn?: string;
  /**
  * Reference to Kubernetes VirtualNode CR in cluster to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_ref DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_ref}
  */
  readonly virtualNodeRef?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef;
  /**
  * The relative weight of the weighted target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weight DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node_arn: cdktf.stringToTerraform(struct!.virtualNodeArn),
    virtual_node_ref: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRefToTerraform(struct!.virtualNodeRef),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_node_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualNodeArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_node_ref: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct!.virtualNodeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNodeArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeArn = this._virtualNodeArn;
    }
    if (this._virtualNodeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeRef = this._virtualNodeRef?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNodeArn = undefined;
      this._virtualNodeRef.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNodeArn = value.virtualNodeArn;
      this._virtualNodeRef.internalValue = value.virtualNodeRef;
      this._weight = value.weight;
    }
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
  private _virtualNodeRef = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRefOutputReference(this, "virtual_node_ref");
  public get virtualNodeRef() {
    return this._virtualNodeRef;
  }
  public putVirtualNodeRef(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsVirtualNodeRef) {
    this._virtualNodeRef.internalValue = value;
  }
  public resetVirtualNodeRef() {
    this._virtualNodeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeRefInput() {
    return this._virtualNodeRef.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction {
  /**
  * An object that represents the targets that traffic is routed to when a request matches the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weighted_targets DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weighted_targets}
  */
  readonly weightedTargets: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_targets: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsToTerraform, false)(struct!.weightedTargets),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weighted_targets: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsToHclTerraform, false)(struct!.weightedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTargets = this._weightedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = value.weightedTargets;
    }
  }

  // weighted_targets - computed: false, optional: false, required: true
  private _weightedTargets = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargetsList(this, "weighted_targets", false);
  public get weightedTargets() {
    return this._weightedTargets;
  }
  public putWeightedTargets(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionWeightedTargets[] | cdktf.IResolvable) {
    this._weightedTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetsInput() {
    return this._weightedTargets.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange {
  /**
  * The end of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#end DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#end}
  */
  readonly end: number;
  /**
  * The start of the range.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#start DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#start}
  */
  readonly start: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRangeToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRangeToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must begin with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * An object that represents the range of values to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#range DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#range}
  */
  readonly range?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange;
  /**
  * The value sent by the client must include the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#regex DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#regex}
  */
  readonly regex?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#suffix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#suffix}
  */
  readonly suffix?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    range: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRangeToTerraform(struct!.range),
    regex: cdktf.stringToTerraform(struct!.regex),
    suffix: cdktf.stringToTerraform(struct!.suffix),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suffix: {
      value: cdktf.stringToHclTerraform(struct!.suffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._suffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.suffix = this._suffix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._prefix = undefined;
      this._range.internalValue = undefined;
      this._regex = undefined;
      this._suffix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._prefix = value.prefix;
      this._range.internalValue = value.range;
      this._regex = value.regex;
      this._suffix = value.suffix;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
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

  // range - computed: false, optional: true, required: false
  private _range = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchRange) {
    this._range.internalValue = value;
  }
  public resetRange() {
    this._range.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // suffix - computed: false, optional: true, required: false
  private _suffix?: string; 
  public get suffix() {
    return this.getStringAttribute('suffix');
  }
  public set suffix(value: string) {
    this._suffix = value;
  }
  public resetSuffix() {
    this._suffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suffixInput() {
    return this._suffix;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders {
  /**
  * Specify True to match anything except the match criteria. The default value is False.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#invert DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#invert}
  */
  readonly invert?: boolean | cdktf.IResolvable;
  /**
  * The HeaderMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch;
  /**
  * A name for the HTTP header in the client request that will be matched on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    invert: cdktf.booleanToTerraform(struct!.invert),
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    invert: {
      value: cdktf.booleanToHclTerraform(struct!.invert),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._invert !== undefined) {
      hasAnyValues = true;
      internalValueResult.invert = this._invert;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._invert = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._invert = value.invert;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // invert - computed: false, optional: true, required: false
  private _invert?: boolean | cdktf.IResolvable; 
  public get invert() {
    return this.getBooleanAttribute('invert');
  }
  public set invert(value: boolean | cdktf.IResolvable) {
    this._invert = value;
  }
  public resetInvert() {
    this._invert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertInput() {
    return this._invert;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath {
  /**
  * The value sent by the client must match the specified value exactly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#exact}
  */
  readonly exact?: string;
  /**
  * The value sent by the client must end with the specified characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#regex DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#regex}
  */
  readonly regex?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPathToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
    regex: cdktf.stringToTerraform(struct!.regex),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPathToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.stringToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
      this._regex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
      this._regex = value.regex;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#exact DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#exact}
  */
  readonly exact?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exact: cdktf.stringToTerraform(struct!.exact),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exact: {
      value: cdktf.stringToHclTerraform(struct!.exact),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exact !== undefined) {
      hasAnyValues = true;
      internalValueResult.exact = this._exact;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exact = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exact = value.exact;
    }
  }

  // exact - computed: false, optional: true, required: false
  private _exact?: string; 
  public get exact() {
    return this.getStringAttribute('exact');
  }
  public set exact(value: string) {
    this._exact = value;
  }
  public resetExact() {
    this._exact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exactInput() {
    return this._exact;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters {
  /**
  * The QueryMatchMethod object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatchToTerraform(struct!.match),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._match.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._match.internalValue = value.match;
      this._name = value.name;
    }
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch {
  /**
  * An object that represents the client request headers to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#headers DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#headers}
  */
  readonly headers?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders[] | cdktf.IResolvable;
  /**
  * The client request method to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#method DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#method}
  */
  readonly method?: string;
  /**
  * The client specified Path to match on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#path DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#path}
  */
  readonly path?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath;
  /**
  * Specifies the port to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Specifies the prefix to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#prefix DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#prefix}
  */
  readonly prefix?: string;
  /**
  * The client specified queryParameters to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#query_parameters DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#query_parameters}
  */
  readonly queryParameters?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters[] | cdktf.IResolvable;
  /**
  * The client request scheme to match on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#scheme DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#scheme}
  */
  readonly scheme?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    headers: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersToTerraform, false)(struct!.headers),
    method: cdktf.stringToTerraform(struct!.method),
    path: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPathToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    query_parameters: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersToTerraform, false)(struct!.queryParameters),
    scheme: cdktf.stringToTerraform(struct!.scheme),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    headers: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersToHclTerraform, false)(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersList",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPathToHclTerraform(struct!.path),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_parameters: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersToHclTerraform, false)(struct!.queryParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersList",
    },
    scheme: {
      value: cdktf.stringToHclTerraform(struct!.scheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._queryParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameters = this._queryParameters?.internalValue;
    }
    if (this._scheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheme = this._scheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headers.internalValue = undefined;
      this._method = undefined;
      this._path.internalValue = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._queryParameters.internalValue = undefined;
      this._scheme = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headers.internalValue = value.headers;
      this._method = value.method;
      this._path.internalValue = value.path;
      this._port = value.port;
      this._prefix = value.prefix;
      this._queryParameters.internalValue = value.queryParameters;
      this._scheme = value.scheme;
    }
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchHeaders[] | cdktf.IResolvable) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // path - computed: false, optional: true, required: false
  private _path = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPathOutputReference(this, "path");
  public get path() {
    return this._path;
  }
  public putPath(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchPath) {
    this._path.internalValue = value;
  }
  public resetPath() {
    this._path.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path.internalValue;
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

  // query_parameters - computed: false, optional: true, required: false
  private _queryParameters = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParametersList(this, "query_parameters", false);
  public get queryParameters() {
    return this._queryParameters;
  }
  public putQueryParameters(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchQueryParameters[] | cdktf.IResolvable) {
    this._queryParameters.internalValue = value;
  }
  public resetQueryParameters() {
    this._queryParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParametersInput() {
    return this._queryParameters.internalValue;
  }

  // scheme - computed: false, optional: true, required: false
  private _scheme?: string; 
  public get scheme() {
    return this.getStringAttribute('scheme');
  }
  public set scheme(value: string) {
    this._scheme = value;
  }
  public resetScheme() {
    this._scheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemeInput() {
    return this._scheme;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#http_retry_events DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#http_retry_events}
  */
  readonly httpRetryEvents?: string[];
  /**
  * The maximum number of retry attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#max_retries DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#max_retries}
  */
  readonly maxRetries: number;
  /**
  * An object that represents a duration of time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#per_retry_timeout DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#per_retry_timeout}
  */
  readonly perRetryTimeout: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#tcp_retry_events DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#tcp_retry_events}
  */
  readonly tcpRetryEvents?: string[];
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.httpRetryEvents),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    per_retry_timeout: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeoutToTerraform(struct!.perRetryTimeout),
    tcp_retry_events: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tcpRetryEvents),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_retry_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.httpRetryEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_retries: {
      value: cdktf.numberToHclTerraform(struct!.maxRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_retry_timeout: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeoutToHclTerraform(struct!.perRetryTimeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout",
    },
    tcp_retry_events: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tcpRetryEvents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRetryEvents = this._httpRetryEvents;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._perRetryTimeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRetryTimeout = this._perRetryTimeout?.internalValue;
    }
    if (this._tcpRetryEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetryEvents = this._tcpRetryEvents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._httpRetryEvents = undefined;
      this._maxRetries = undefined;
      this._perRetryTimeout.internalValue = undefined;
      this._tcpRetryEvents = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._httpRetryEvents = value.httpRetryEvents;
      this._maxRetries = value.maxRetries;
      this._perRetryTimeout.internalValue = value.perRetryTimeout;
      this._tcpRetryEvents = value.tcpRetryEvents;
    }
  }

  // http_retry_events - computed: false, optional: true, required: false
  private _httpRetryEvents?: string[]; 
  public get httpRetryEvents() {
    return this.getListAttribute('http_retry_events');
  }
  public set httpRetryEvents(value: string[]) {
    this._httpRetryEvents = value;
  }
  public resetHttpRetryEvents() {
    this._httpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRetryEventsInput() {
    return this._httpRetryEvents;
  }

  // max_retries - computed: false, optional: false, required: true
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // per_retry_timeout - computed: false, optional: false, required: true
  private _perRetryTimeout = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeoutOutputReference(this, "per_retry_timeout");
  public get perRetryTimeout() {
    return this._perRetryTimeout;
  }
  public putPerRetryTimeout(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyPerRetryTimeout) {
    this._perRetryTimeout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get perRetryTimeoutInput() {
    return this._perRetryTimeout.internalValue;
  }

  // tcp_retry_events - computed: false, optional: true, required: false
  private _tcpRetryEvents?: string[]; 
  public get tcpRetryEvents() {
    return this.getListAttribute('tcp_retry_events');
  }
  public set tcpRetryEvents(value: string[]) {
    this._tcpRetryEvents = value;
  }
  public resetTcpRetryEvents() {
    this._tcpRetryEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetryEventsInput() {
    return this._tcpRetryEvents;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequestToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequestToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle;
  /**
  * An object that represents per request timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#per_request DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#per_request}
  */
  readonly perRequest?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdleToTerraform(struct!.idle),
    per_request: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequestToTerraform(struct!.perRequest),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle",
    },
    per_request: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequestToHclTerraform(struct!.perRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    if (this._perRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perRequest = this._perRequest?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
      this._perRequest.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
      this._perRequest.internalValue = value.perRequest;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }

  // per_request - computed: false, optional: true, required: false
  private _perRequest = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequestOutputReference(this, "per_request");
  public get perRequest() {
    return this._perRequest;
  }
  public putPerRequest(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutPerRequest) {
    this._perRequest.internalValue = value;
  }
  public resetPerRequest() {
    this._perRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perRequestInput() {
    return this._perRequest.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute {
  /**
  * An object that represents the action to take if a match is determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#action DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#action}
  */
  readonly action: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction;
  /**
  * An object that represents the criteria for determining a request match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch;
  /**
  * An object that represents a retry policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#retry_policy DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#retry_policy}
  */
  readonly retryPolicy?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy;
  /**
  * An object that represents a http timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#timeout DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#timeout}
  */
  readonly timeout?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionToTerraform(struct!.action),
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchToTerraform(struct!.match),
    retry_policy: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyToTerraform(struct!.retryPolicy),
    timeout: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutToTerraform(struct!.timeout),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction",
    },
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch",
    },
    retry_policy: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyToHclTerraform(struct!.retryPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy",
    },
    timeout: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._retryPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryPolicy = this._retryPolicy?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._retryPolicy.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._retryPolicy.internalValue = value.retryPolicy;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: false, required: true
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteMatch) {
    this._match.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // retry_policy - computed: false, optional: true, required: false
  private _retryPolicy = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicyOutputReference(this, "retry_policy");
  public get retryPolicy() {
    return this._retryPolicy;
  }
  public putRetryPolicy(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteRetryPolicy) {
    this._retryPolicy.internalValue = value;
  }
  public resetRetryPolicy() {
    this._retryPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryPolicyInput() {
    return this._retryPolicy.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef {
  /**
  * Name is the name of VirtualNode CR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of VirtualNode CR. If unspecified, defaults to the referencing object's namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#namespace DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRefToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable): any {
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets {
  /**
  * Specifies the targeted port of the weighted object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
  /**
  * Amazon Resource Name to AppMesh VirtualNode object to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_arn DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_arn}
  */
  readonly virtualNodeArn?: string;
  /**
  * Reference to Kubernetes VirtualNode CR in cluster to associate with the weighted target. Exactly one of 'virtualNodeRef' or 'virtualNodeARN' must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#virtual_node_ref DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#virtual_node_ref}
  */
  readonly virtualNodeRef?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef;
  /**
  * The relative weight of the weighted target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weight DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    virtual_node_arn: cdktf.stringToTerraform(struct!.virtualNodeArn),
    virtual_node_ref: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRefToTerraform(struct!.virtualNodeRef),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_node_arn: {
      value: cdktf.stringToHclTerraform(struct!.virtualNodeArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_node_ref: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRefToHclTerraform(struct!.virtualNodeRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef",
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._virtualNodeArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeArn = this._virtualNodeArn;
    }
    if (this._virtualNodeRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualNodeRef = this._virtualNodeRef?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
      this._virtualNodeArn = undefined;
      this._virtualNodeRef.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
      this._virtualNodeArn = value.virtualNodeArn;
      this._virtualNodeRef.internalValue = value.virtualNodeRef;
      this._weight = value.weight;
    }
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
  private _virtualNodeRef = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRefOutputReference(this, "virtual_node_ref");
  public get virtualNodeRef() {
    return this._virtualNodeRef;
  }
  public putVirtualNodeRef(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsVirtualNodeRef) {
    this._virtualNodeRef.internalValue = value;
  }
  public resetVirtualNodeRef() {
    this._virtualNodeRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualNodeRefInput() {
    return this._virtualNodeRef.internalValue;
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction {
  /**
  * An object that represents the targets that traffic is routed to when a request matches the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#weighted_targets DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#weighted_targets}
  */
  readonly weightedTargets: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    weighted_targets: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsToTerraform, false)(struct!.weightedTargets),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    weighted_targets: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsToHclTerraform, false)(struct!.weightedTargets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._weightedTargets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.weightedTargets = this._weightedTargets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._weightedTargets.internalValue = value.weightedTargets;
    }
  }

  // weighted_targets - computed: false, optional: false, required: true
  private _weightedTargets = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargetsList(this, "weighted_targets", false);
  public get weightedTargets() {
    return this._weightedTargets;
  }
  public putWeightedTargets(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionWeightedTargets[] | cdktf.IResolvable) {
    this._weightedTargets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightedTargetsInput() {
    return this._weightedTargets.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch {
  /**
  * Specifies the port to match requests with
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#port DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#port}
  */
  readonly port?: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatchToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatchToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._port = value.port;
    }
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
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle {
  /**
  * A unit of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#unit DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#unit}
  */
  readonly unit: string;
  /**
  * A number of time units.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#value DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#value}
  */
  readonly value: number;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdleToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unit: cdktf.stringToTerraform(struct!.unit),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdleToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unit: {
      value: cdktf.stringToHclTerraform(struct!.unit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unit !== undefined) {
      hasAnyValues = true;
      internalValueResult.unit = this._unit;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unit = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unit = value.unit;
      this._value = value.value;
    }
  }

  // unit - computed: false, optional: false, required: true
  private _unit?: string; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string) {
    this._unit = value;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit;
  }

  // value - computed: false, optional: false, required: true
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout {
  /**
  * An object that represents idle timeout duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#idle DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#idle}
  */
  readonly idle?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idle: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdleToTerraform(struct!.idle),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idle: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdleToHclTerraform(struct!.idle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idle = this._idle?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idle.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idle.internalValue = value.idle;
    }
  }

  // idle - computed: false, optional: true, required: false
  private _idle = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdleOutputReference(this, "idle");
  public get idle() {
    return this._idle;
  }
  public putIdle(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutIdle) {
    this._idle.internalValue = value;
  }
  public resetIdle() {
    this._idle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInput() {
    return this._idle.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute {
  /**
  * The action to take if a match is determined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#action DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#action}
  */
  readonly action: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction;
  /**
  * An object that represents the criteria for determining a request match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#match DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#match}
  */
  readonly match?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch;
  /**
  * An object that represents a tcp timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#timeout DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#timeout}
  */
  readonly timeout?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionToTerraform(struct!.action),
    match: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatchToTerraform(struct!.match),
    timeout: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutToTerraform(struct!.timeout),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction",
    },
    match: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch",
    },
    timeout: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutToHclTerraform(struct!.timeout),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._timeout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._timeout.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._timeout.internalValue = value.timeout;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes {
  /**
  * An object that represents the specification of a gRPC route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#grpc_route DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#grpc_route}
  */
  readonly grpcRoute?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute;
  /**
  * An object that represents the specification of an HTTP/2 route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#http2_route DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#http2_route}
  */
  readonly http2Route?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route;
  /**
  * An object that represents the specification of an HTTP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#http_route DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#http_route}
  */
  readonly httpRoute?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute;
  /**
  * Route's name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * The priority for the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#priority DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#priority}
  */
  readonly priority?: number;
  /**
  * An object that represents the specification of a TCP route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#tcp_route DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#tcp_route}
  */
  readonly tcpRoute?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grpc_route: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteToTerraform(struct!.grpcRoute),
    http2_route: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteToTerraform(struct!.http2Route),
    http_route: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteToTerraform(struct!.httpRoute),
    name: cdktf.stringToTerraform(struct!.name),
    priority: cdktf.numberToTerraform(struct!.priority),
    tcp_route: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteToTerraform(struct!.tcpRoute),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grpc_route: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteToHclTerraform(struct!.grpcRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute",
    },
    http2_route: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteToHclTerraform(struct!.http2Route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route",
    },
    http_route: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteToHclTerraform(struct!.httpRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_route: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteToHclTerraform(struct!.tcpRoute),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._grpcRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcRoute = this._grpcRoute?.internalValue;
    }
    if (this._http2Route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Route = this._http2Route?.internalValue;
    }
    if (this._httpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._tcpRoute?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRoute = this._tcpRoute?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._grpcRoute.internalValue = undefined;
      this._http2Route.internalValue = undefined;
      this._httpRoute.internalValue = undefined;
      this._name = undefined;
      this._priority = undefined;
      this._tcpRoute.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._grpcRoute.internalValue = value.grpcRoute;
      this._http2Route.internalValue = value.http2Route;
      this._httpRoute.internalValue = value.httpRoute;
      this._name = value.name;
      this._priority = value.priority;
      this._tcpRoute.internalValue = value.tcpRoute;
    }
  }

  // grpc_route - computed: false, optional: true, required: false
  private _grpcRoute = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRouteOutputReference(this, "grpc_route");
  public get grpcRoute() {
    return this._grpcRoute;
  }
  public putGrpcRoute(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesGrpcRoute) {
    this._grpcRoute.internalValue = value;
  }
  public resetGrpcRoute() {
    this._grpcRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcRouteInput() {
    return this._grpcRoute.internalValue;
  }

  // http2_route - computed: false, optional: true, required: false
  private _http2Route = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2RouteOutputReference(this, "http2_route");
  public get http2Route() {
    return this._http2Route;
  }
  public putHttp2Route(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttp2Route) {
    this._http2Route.internalValue = value;
  }
  public resetHttp2Route() {
    this._http2Route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2RouteInput() {
    return this._http2Route.internalValue;
  }

  // http_route - computed: false, optional: true, required: false
  private _httpRoute = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRouteOutputReference(this, "http_route");
  public get httpRoute() {
    return this._httpRoute;
  }
  public putHttpRoute(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesHttpRoute) {
    this._httpRoute.internalValue = value;
  }
  public resetHttpRoute() {
    this._httpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute.internalValue;
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

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // tcp_route - computed: false, optional: true, required: false
  private _tcpRoute = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRouteOutputReference(this, "tcp_route");
  public get tcpRoute() {
    return this._tcpRoute;
  }
  public putTcpRoute(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesTcpRoute) {
    this._tcpRoute.internalValue = value;
  }
  public resetTcpRoute() {
    this._tcpRoute.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRouteInput() {
    return this._tcpRoute.internalValue;
  }
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesOutputReference {
    return new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec {
  /**
  * AWSName is the AppMesh VirtualRouter object's name. If unspecified or empty, it defaults to be '${name}_${namespace}' of k8s VirtualRouter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#aws_name DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#aws_name}
  */
  readonly awsName?: string;
  /**
  * The listeners that the virtual router is expected to receive inbound traffic from
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#listeners DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#listeners}
  */
  readonly listeners?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners[] | cdktf.IResolvable;
  /**
  * A reference to k8s Mesh CR that this VirtualRouter belongs to. The admission controller populates it using Meshes's selector, and prevents users from setting this field. Populated by the system. Read-only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#mesh_ref DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#mesh_ref}
  */
  readonly meshRef?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef;
  /**
  * The routes associated with VirtualRouter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#routes DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest#routes}
  */
  readonly routes?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes[] | cdktf.IResolvable;
}

export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecToTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_name: cdktf.stringToTerraform(struct!.awsName),
    listeners: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersToTerraform, false)(struct!.listeners),
    mesh_ref: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRefToTerraform(struct!.meshRef),
    routes: cdktf.listMapper(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesToTerraform, false)(struct!.routes),
  }
}


export function dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec | cdktf.IResolvable): any {
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
    listeners: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersToHclTerraform, false)(struct!.listeners),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersList",
    },
    mesh_ref: {
      value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRefToHclTerraform(struct!.meshRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsName = this._awsName;
    }
    if (this._listeners?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeners = this._listeners?.internalValue;
    }
    if (this._meshRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshRef = this._meshRef?.internalValue;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsName = undefined;
      this._listeners.internalValue = undefined;
      this._meshRef.internalValue = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsName = value.awsName;
      this._listeners.internalValue = value.listeners;
      this._meshRef.internalValue = value.meshRef;
      this._routes.internalValue = value.routes;
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

  // listeners - computed: false, optional: true, required: false
  private _listeners = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListenersList(this, "listeners", false);
  public get listeners() {
    return this._listeners;
  }
  public putListeners(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecListeners[] | cdktf.IResolvable) {
    this._listeners.internalValue = value;
  }
  public resetListeners() {
    this._listeners.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenersInput() {
    return this._listeners.internalValue;
  }

  // mesh_ref - computed: false, optional: true, required: false
  private _meshRef = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRefOutputReference(this, "mesh_ref");
  public get meshRef() {
    return this._meshRef;
  }
  public putMeshRef(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecMeshRef) {
    this._meshRef.internalValue = value;
  }
  public resetMeshRef() {
    this._meshRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshRefInput() {
    return this._meshRef.internalValue;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_router_v1beta2_manifest}
*/
export class DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_appmesh_k8s_aws_virtual_router_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppmeshK8SAwsVirtualRouterV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_appmesh_k8s_aws_virtual_router_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/appmesh_k8s_aws_virtual_router_v1beta2_manifest k8s_appmesh_k8s_aws_virtual_router_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_appmesh_k8s_aws_virtual_router_v1beta2_manifest',
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
  private _metadata = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec) {
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
      metadata: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppmeshK8SAwsVirtualRouterV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
