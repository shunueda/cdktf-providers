// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata;
  /**
  * ClusterClassSpec describes the desired state of the ClusterClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#spec DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec;
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#labels DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#kind DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#uid DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#ref DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#labels DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#kind DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#uid DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane {
  /**
  * MachineTemplate defines the metadata and infrastructure information for control plane machines. This field is supported if and only if the control plane provider template referenced above is Machine based and supports setting replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#machine_infrastructure DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#machine_infrastructure}
  */
  readonly machineInfrastructure?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure;
  /**
  * Metadata is the metadata applied to the machines of the ControlPlane. At runtime this metadata is merged with the corresponding metadata from the topology. This field is supported if and only if the control plane provider template referenced is Machine based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata;
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#ref DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_infrastructure: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureToTerraform(struct!.machineInfrastructure),
    metadata: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadataToTerraform(struct!.metadata),
    ref: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_infrastructure: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureToHclTerraform(struct!.machineInfrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata",
    },
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineInfrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineInfrastructure = this._machineInfrastructure?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineInfrastructure.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineInfrastructure.internalValue = value.machineInfrastructure;
      this._metadata.internalValue = value.metadata;
      this._ref.internalValue = value.ref;
    }
  }

  // machine_infrastructure - computed: false, optional: true, required: false
  private _machineInfrastructure = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructureOutputReference(this, "machine_infrastructure");
  public get machineInfrastructure() {
    return this._machineInfrastructure;
  }
  public putMachineInfrastructure(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMachineInfrastructure) {
    this._machineInfrastructure.internalValue = value;
  }
  public resetMachineInfrastructure() {
    this._machineInfrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineInfrastructureInput() {
    return this._machineInfrastructure.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#kind DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#uid DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#ref DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#kind DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#uid DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#ref DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#kind DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#name DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#uid DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#ref DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ref.internalValue = value.ref;
    }
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#labels DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate {
  /**
  * Bootstrap contains the bootstrap template reference to be used for the creation of worker Machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#bootstrap DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#bootstrap}
  */
  readonly bootstrap: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap;
  /**
  * Infrastructure contains the infrastructure template reference to be used for the creation of worker Machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#infrastructure DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#infrastructure}
  */
  readonly infrastructure: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure;
  /**
  * Metadata is the metadata applied to the machines of the MachineDeployment. At runtime this metadata is merged with the corresponding metadata from the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToTerraform(struct!.bootstrap),
    infrastructure: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToTerraform(struct!.infrastructure),
    metadata: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToHclTerraform(struct!.bootstrap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap",
    },
    infrastructure: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToHclTerraform(struct!.infrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrap = this._bootstrap?.internalValue;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrap.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrap.internalValue = value.bootstrap;
      this._infrastructure.internalValue = value.infrastructure;
      this._metadata.internalValue = value.metadata;
    }
  }

  // bootstrap - computed: false, optional: false, required: true
  private _bootstrap = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrapOutputReference(this, "bootstrap");
  public get bootstrap() {
    return this._bootstrap;
  }
  public putBootstrap(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateBootstrap) {
    this._bootstrap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap.internalValue;
  }

  // infrastructure - computed: false, optional: false, required: true
  private _infrastructure = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments {
  /**
  * Class denotes a type of worker node present in the cluster, this name MUST be unique within a ClusterClass and can be referenced in the Cluster to create a managed MachineDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#class DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#class}
  */
  readonly class: string;
  /**
  * Template is a local struct containing a collection of templates for creation of MachineDeployment objects representing a set of worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#template DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#template}
  */
  readonly template: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    template: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateToTerraform(struct!.template),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class: {
      value: cdktf.stringToHclTerraform(struct!.class),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._class = value.class;
      this._template.internalValue = value.template;
    }
  }

  // class - computed: false, optional: false, required: true
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers {
  /**
  * MachineDeployments is a list of machine deployment classes that can be used to create a set of worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#machine_deployments DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#machine_deployments}
  */
  readonly machineDeployments?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_deployments: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsToTerraform, false)(struct!.machineDeployments),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_deployments: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsToHclTerraform, false)(struct!.machineDeployments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineDeployments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDeployments = this._machineDeployments?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = value.machineDeployments;
    }
  }

  // machine_deployments - computed: false, optional: true, required: false
  private _machineDeployments = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeploymentsList(this, "machine_deployments", false);
  public get machineDeployments() {
    return this._machineDeployments;
  }
  public putMachineDeployments(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersMachineDeployments[] | cdktf.IResolvable) {
    this._machineDeployments.internalValue = value;
  }
  public resetMachineDeployments() {
    this._machineDeployments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeploymentsInput() {
    return this._machineDeployments.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec {
  /**
  * ControlPlane is a reference to a local struct that holds the details for provisioning the Control Plane for the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#control_plane DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#control_plane}
  */
  readonly controlPlane?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane;
  /**
  * Infrastructure is a reference to a provider-specific template that holds the details for provisioning infrastructure specific cluster for the underlying provider. The underlying provider is responsible for the implementation of the template to an infrastructure cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#infrastructure DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#infrastructure}
  */
  readonly infrastructure?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure;
  /**
  * Workers describes the worker nodes for the cluster. It is a collection of node types which can be used to create the worker nodes of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#workers DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest#workers}
  */
  readonly workers?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers;
}

export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneToTerraform(struct!.controlPlane),
    infrastructure: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureToTerraform(struct!.infrastructure),
    workers: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersToTerraform(struct!.workers),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane",
    },
    infrastructure: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureToHclTerraform(struct!.infrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure",
    },
    workers: {
      value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersToHclTerraform(struct!.workers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane?.internalValue;
    }
    if (this._infrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructure = this._infrastructure?.internalValue;
    }
    if (this._workers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlane.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
      this._workers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlane.internalValue = value.controlPlane;
      this._infrastructure.internalValue = value.infrastructure;
      this._workers.internalValue = value.workers;
    }
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecControlPlane) {
    this._controlPlane.internalValue = value;
  }
  public resetControlPlane() {
    this._controlPlane.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane.internalValue;
  }

  // infrastructure - computed: false, optional: true, required: false
  private _infrastructure = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // workers - computed: false, optional: true, required: false
  private _workers = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkersOutputReference(this, "workers");
  public get workers() {
    return this._workers;
  }
  public putWorkers(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecWorkers) {
    this._workers.internalValue = value;
  }
  public resetWorkers() {
    this._workers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workersInput() {
    return this._workers.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest k8s_cluster_x_k8s_io_cluster_class_v1alpha4_manifest}
*/
export class DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_x_k8s_io_cluster_class_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterXK8SIoClusterClassV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_x_k8s_io_cluster_class_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_cluster_class_v1alpha4_manifest k8s_cluster_x_k8s_io_cluster_class_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_x_k8s_io_cluster_class_v1alpha4_manifest',
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
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec) {
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
      metadata: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterClassV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
