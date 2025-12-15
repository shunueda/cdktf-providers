// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEndpointsV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#metadata DataK8SEndpointsV1Manifest#metadata}
  */
  readonly metadata: DataK8SEndpointsV1ManifestMetadata;
  /**
  * The set of all endpoints is the union of all subsets. Addresses are placed into subsets according to the IPs they share. A single address with multiple ports, some of which are ready and some of which are not (because they come from different containers) will result in the address being displayed in different subsets for the different ports. No address will appear in both Addresses and NotReadyAddresses in the same subset. Sets of addresses and ports that comprise a service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#subsets DataK8SEndpointsV1Manifest#subsets}
  */
  readonly subsets?: DataK8SEndpointsV1ManifestSubsets[] | cdktf.IResolvable;
}
export interface DataK8SEndpointsV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#annotations DataK8SEndpointsV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#labels DataK8SEndpointsV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#name DataK8SEndpointsV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#namespace DataK8SEndpointsV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEndpointsV1ManifestMetadataToTerraform(struct?: DataK8SEndpointsV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEndpointsV1ManifestMetadataToHclTerraform(struct?: DataK8SEndpointsV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEndpointsV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEndpointsV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEndpointsV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#api_version DataK8SEndpointsV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#field_path DataK8SEndpointsV1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#kind DataK8SEndpointsV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#name DataK8SEndpointsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#namespace DataK8SEndpointsV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#resource_version DataK8SEndpointsV1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#uid DataK8SEndpointsV1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SEndpointsV1ManifestSubsetsAddressesTargetRefToTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SEndpointsV1ManifestSubsetsAddressesTargetRefToHclTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
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

export class DataK8SEndpointsV1ManifestSubsetsAddressesTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef | cdktf.IResolvable | undefined {
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
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SEndpointsV1ManifestSubsetsAddresses {
  /**
  * The Hostname of this endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#hostname DataK8SEndpointsV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#ip DataK8SEndpointsV1Manifest#ip}
  */
  readonly ip: string;
  /**
  * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#node_name DataK8SEndpointsV1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * ObjectReference contains enough information to let you inspect or modify the referred object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#target_ref DataK8SEndpointsV1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef;
}

export function dataK8SEndpointsV1ManifestSubsetsAddressesToTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    target_ref: dataK8SEndpointsV1ManifestSubsetsAddressesTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SEndpointsV1ManifestSubsetsAddressesToHclTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ref: {
      value: dataK8SEndpointsV1ManifestSubsetsAddressesTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEndpointsV1ManifestSubsetsAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEndpointsV1ManifestSubsetsAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEndpointsV1ManifestSubsetsAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
      this._nodeName = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
      this._nodeName = value.nodeName;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SEndpointsV1ManifestSubsetsAddressesTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SEndpointsV1ManifestSubsetsAddressesTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SEndpointsV1ManifestSubsetsAddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEndpointsV1ManifestSubsetsAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEndpointsV1ManifestSubsetsAddressesOutputReference {
    return new DataK8SEndpointsV1ManifestSubsetsAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#api_version DataK8SEndpointsV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#field_path DataK8SEndpointsV1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#kind DataK8SEndpointsV1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#name DataK8SEndpointsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#namespace DataK8SEndpointsV1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#resource_version DataK8SEndpointsV1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#uid DataK8SEndpointsV1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRefToTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRefToHclTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
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

export class DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef | cdktf.IResolvable | undefined {
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
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._uid = undefined;
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
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._uid = value.uid;
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

  // field_path - computed: false, optional: true, required: false
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  public resetFieldPath() {
    this._fieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
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

  // resource_version - computed: false, optional: true, required: false
  private _resourceVersion?: string; 
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }
  public set resourceVersion(value: string) {
    this._resourceVersion = value;
  }
  public resetResourceVersion() {
    this._resourceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceVersionInput() {
    return this._resourceVersion;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses {
  /**
  * The Hostname of this endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#hostname DataK8SEndpointsV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * The IP of this endpoint. May not be loopback (127.0.0.0/8 or ::1), link-local (169.254.0.0/16 or fe80::/10), or link-local multicast (224.0.0.0/24 or ff02::/16).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#ip DataK8SEndpointsV1Manifest#ip}
  */
  readonly ip: string;
  /**
  * Optional: Node hosting this endpoint. This can be used to determine endpoints local to a node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#node_name DataK8SEndpointsV1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * ObjectReference contains enough information to let you inspect or modify the referred object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#target_ref DataK8SEndpointsV1Manifest#target_ref}
  */
  readonly targetRef?: DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef;
}

export function dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesToTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
    ip: cdktf.stringToTerraform(struct!.ip),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    target_ref: dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRefToTerraform(struct!.targetRef),
  }
}


export function dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesToHclTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_ref: {
      value: dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRefToHclTerraform(struct!.targetRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._targetRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRef = this._targetRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostname = undefined;
      this._ip = undefined;
      this._nodeName = undefined;
      this._targetRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostname = value.hostname;
      this._ip = value.ip;
      this._nodeName = value.nodeName;
      this._targetRef.internalValue = value.targetRef;
    }
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // target_ref - computed: false, optional: true, required: false
  private _targetRef = new DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRefOutputReference(this, "target_ref");
  public get targetRef() {
    return this._targetRef;
  }
  public putTargetRef(value: DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesTargetRef) {
    this._targetRef.internalValue = value;
  }
  public resetTargetRef() {
    this._targetRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRefInput() {
    return this._targetRef.internalValue;
  }
}

export class DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesList extends cdktf.ComplexList {
  public internalValue? : DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesOutputReference {
    return new DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEndpointsV1ManifestSubsetsPorts {
  /**
  * The application protocol for this port. This is used as a hint for implementations to offer richer behavior for protocols that they understand. This field follows standard Kubernetes label syntax. Valid values are either: * Un-prefixed protocol names - reserved for IANA standard service names (as per RFC-6335 and https://www.iana.org/assignments/service-names). * Kubernetes-defined prefixed names: * 'kubernetes.io/h2c' - HTTP/2 prior knowledge over cleartext as described in https://www.rfc-editor.org/rfc/rfc9113.html#name-starting-http-2-with-prior- * 'kubernetes.io/ws' - WebSocket over cleartext as described in https://www.rfc-editor.org/rfc/rfc6455 * 'kubernetes.io/wss' - WebSocket over TLS as described in https://www.rfc-editor.org/rfc/rfc6455 * Other protocols should use implementation-defined prefixed names such as mycompany.com/my-custom-protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#app_protocol DataK8SEndpointsV1Manifest#app_protocol}
  */
  readonly appProtocol?: string;
  /**
  * The name of this port. This must match the 'name' field in the corresponding ServicePort. Must be a DNS_LABEL. Optional only if one port is defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#name DataK8SEndpointsV1Manifest#name}
  */
  readonly name?: string;
  /**
  * The port number of the endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#port DataK8SEndpointsV1Manifest#port}
  */
  readonly port: number;
  /**
  * The IP protocol for this port. Must be UDP, TCP, or SCTP. Default is TCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#protocol DataK8SEndpointsV1Manifest#protocol}
  */
  readonly protocol?: string;
}

export function dataK8SEndpointsV1ManifestSubsetsPortsToTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_protocol: cdktf.stringToTerraform(struct!.appProtocol),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.numberToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function dataK8SEndpointsV1ManifestSubsetsPortsToHclTerraform(struct?: DataK8SEndpointsV1ManifestSubsetsPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_protocol: {
      value: cdktf.stringToHclTerraform(struct!.appProtocol),
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

export class DataK8SEndpointsV1ManifestSubsetsPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEndpointsV1ManifestSubsetsPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.appProtocol = this._appProtocol;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
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

  public set internalValue(value: DataK8SEndpointsV1ManifestSubsetsPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appProtocol = undefined;
      this._name = undefined;
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
      this._appProtocol = value.appProtocol;
      this._name = value.name;
      this._port = value.port;
      this._protocol = value.protocol;
    }
  }

  // app_protocol - computed: false, optional: true, required: false
  private _appProtocol?: string; 
  public get appProtocol() {
    return this.getStringAttribute('app_protocol');
  }
  public set appProtocol(value: string) {
    this._appProtocol = value;
  }
  public resetAppProtocol() {
    this._appProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProtocolInput() {
    return this._appProtocol;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class DataK8SEndpointsV1ManifestSubsetsPortsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEndpointsV1ManifestSubsetsPorts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEndpointsV1ManifestSubsetsPortsOutputReference {
    return new DataK8SEndpointsV1ManifestSubsetsPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SEndpointsV1ManifestSubsets {
  /**
  * IP addresses which offer the related ports that are marked as ready. These endpoints should be considered safe for load balancers and clients to utilize.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#addresses DataK8SEndpointsV1Manifest#addresses}
  */
  readonly addresses?: DataK8SEndpointsV1ManifestSubsetsAddresses[] | cdktf.IResolvable;
  /**
  * IP addresses which offer the related ports but are not currently marked as ready because they have not yet finished starting, have recently failed a readiness check, or have recently failed a liveness check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#not_ready_addresses DataK8SEndpointsV1Manifest#not_ready_addresses}
  */
  readonly notReadyAddresses?: DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses[] | cdktf.IResolvable;
  /**
  * Port numbers available on the related IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#ports DataK8SEndpointsV1Manifest#ports}
  */
  readonly ports?: DataK8SEndpointsV1ManifestSubsetsPorts[] | cdktf.IResolvable;
}

export function dataK8SEndpointsV1ManifestSubsetsToTerraform(struct?: DataK8SEndpointsV1ManifestSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(dataK8SEndpointsV1ManifestSubsetsAddressesToTerraform, false)(struct!.addresses),
    not_ready_addresses: cdktf.listMapper(dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesToTerraform, false)(struct!.notReadyAddresses),
    ports: cdktf.listMapper(dataK8SEndpointsV1ManifestSubsetsPortsToTerraform, false)(struct!.ports),
  }
}


export function dataK8SEndpointsV1ManifestSubsetsToHclTerraform(struct?: DataK8SEndpointsV1ManifestSubsets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(dataK8SEndpointsV1ManifestSubsetsAddressesToHclTerraform, false)(struct!.addresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEndpointsV1ManifestSubsetsAddressesList",
    },
    not_ready_addresses: {
      value: cdktf.listMapperHcl(dataK8SEndpointsV1ManifestSubsetsNotReadyAddressesToHclTerraform, false)(struct!.notReadyAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesList",
    },
    ports: {
      value: cdktf.listMapperHcl(dataK8SEndpointsV1ManifestSubsetsPortsToHclTerraform, false)(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SEndpointsV1ManifestSubsetsPortsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEndpointsV1ManifestSubsetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SEndpointsV1ManifestSubsets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses?.internalValue;
    }
    if (this._notReadyAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notReadyAddresses = this._notReadyAddresses?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEndpointsV1ManifestSubsets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses.internalValue = undefined;
      this._notReadyAddresses.internalValue = undefined;
      this._ports.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses.internalValue = value.addresses;
      this._notReadyAddresses.internalValue = value.notReadyAddresses;
      this._ports.internalValue = value.ports;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses = new DataK8SEndpointsV1ManifestSubsetsAddressesList(this, "addresses", false);
  public get addresses() {
    return this._addresses;
  }
  public putAddresses(value: DataK8SEndpointsV1ManifestSubsetsAddresses[] | cdktf.IResolvable) {
    this._addresses.internalValue = value;
  }
  public resetAddresses() {
    this._addresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses.internalValue;
  }

  // not_ready_addresses - computed: false, optional: true, required: false
  private _notReadyAddresses = new DataK8SEndpointsV1ManifestSubsetsNotReadyAddressesList(this, "not_ready_addresses", false);
  public get notReadyAddresses() {
    return this._notReadyAddresses;
  }
  public putNotReadyAddresses(value: DataK8SEndpointsV1ManifestSubsetsNotReadyAddresses[] | cdktf.IResolvable) {
    this._notReadyAddresses.internalValue = value;
  }
  public resetNotReadyAddresses() {
    this._notReadyAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notReadyAddressesInput() {
    return this._notReadyAddresses.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new DataK8SEndpointsV1ManifestSubsetsPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: DataK8SEndpointsV1ManifestSubsetsPorts[] | cdktf.IResolvable) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }
}

export class DataK8SEndpointsV1ManifestSubsetsList extends cdktf.ComplexList {
  public internalValue? : DataK8SEndpointsV1ManifestSubsets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SEndpointsV1ManifestSubsetsOutputReference {
    return new DataK8SEndpointsV1ManifestSubsetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest k8s_endpoints_v1_manifest}
*/
export class DataK8SEndpointsV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_endpoints_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEndpointsV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEndpointsV1Manifest to import
  * @param importFromId The id of the existing DataK8SEndpointsV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEndpointsV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_endpoints_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/endpoints_v1_manifest k8s_endpoints_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEndpointsV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEndpointsV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_endpoints_v1_manifest',
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
    this._subsets.internalValue = config.subsets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SEndpointsV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEndpointsV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // subsets - computed: false, optional: true, required: false
  private _subsets = new DataK8SEndpointsV1ManifestSubsetsList(this, "subsets", false);
  public get subsets() {
    return this._subsets;
  }
  public putSubsets(value: DataK8SEndpointsV1ManifestSubsets[] | cdktf.IResolvable) {
    this._subsets.internalValue = value;
  }
  public resetSubsets() {
    this._subsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subsetsInput() {
    return this._subsets.internalValue;
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
      metadata: dataK8SEndpointsV1ManifestMetadataToTerraform(this._metadata.internalValue),
      subsets: cdktf.listMapper(dataK8SEndpointsV1ManifestSubsetsToTerraform, false)(this._subsets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEndpointsV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEndpointsV1ManifestMetadata",
      },
      subsets: {
        value: cdktf.listMapperHcl(dataK8SEndpointsV1ManifestSubsetsToHclTerraform, false)(this._subsets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataK8SEndpointsV1ManifestSubsetsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
