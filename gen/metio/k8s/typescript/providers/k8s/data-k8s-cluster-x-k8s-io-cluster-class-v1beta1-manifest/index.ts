// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata;
  /**
  * ClusterClassSpec describes the desired state of the ClusterClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#spec DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec;
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplateToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#status DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#type DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck {
  /**
  * Any further remediation is only allowed if at most 'MaxUnhealthy' machines selected by 'selector' are not healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_unhealthy DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * NodeStartupTimeout allows to set the maximum time for MachineHealthCheck to consider a Machine unhealthy if a corresponding Node isn't associated through a 'Spec.ProviderID' field. The duration set in this field is compared to the greatest of: - Cluster's infrastructure ready condition timestamp (if and when available) - Control Plane's initialized condition timestamp (if and when available) - Machine's infrastructure ready condition timestamp (if and when available) - Machine's metadata creation timestamp Defaults to 10 minutes. If you wish to disable this feature, set the value explicitly to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_startup_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * RemediationTemplate is a reference to a remediation template provided by an infrastructure provider. This field is completely optional, when filled, the MachineHealthCheck controller creates a new object from the template referenced and hands off remediation of the machine to a controller that lives outside of Cluster API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#remediation_template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#remediation_template}
  */
  readonly remediationTemplate?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate;
  /**
  * UnhealthyConditions contains a list of the conditions that determine whether a node is considered unhealthy. The conditions are combined in a logical OR, i.e. if any of the conditions is met, the node is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#unhealthy_conditions DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#unhealthy_conditions}
  */
  readonly unhealthyConditions?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable;
  /**
  * Any further remediation is only allowed if the number of machines selected by 'selector' as not healthy is within the range of 'UnhealthyRange'. Takes precedence over MaxUnhealthy. Eg. '[3-5]' - This means that remediation will be allowed only when: (a) there are at least 3 unhealthy machines (and) (b) there are at most 5 unhealthy machines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#unhealthy_range DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#unhealthy_range}
  */
  readonly unhealthyRange?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    remediation_template: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplateToTerraform(struct!.remediationTemplate),
    unhealthy_conditions: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsToTerraform, false)(struct!.unhealthyConditions),
    unhealthy_range: cdktf.stringToTerraform(struct!.unhealthyRange),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remediation_template: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate",
    },
    unhealthy_conditions: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsToHclTerraform, false)(struct!.unhealthyConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsList",
    },
    unhealthy_range: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._remediationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTemplate = this._remediationTemplate?.internalValue;
    }
    if (this._unhealthyConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyConditions = this._unhealthyConditions?.internalValue;
    }
    if (this._unhealthyRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyRange = this._unhealthyRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._unhealthyConditions.internalValue = undefined;
      this._unhealthyRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._unhealthyConditions.internalValue = value.unhealthyConditions;
      this._unhealthyRange = value.unhealthyRange;
    }
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
  }

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // remediation_template - computed: false, optional: true, required: false
  private _remediationTemplate = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  public resetRemediationTemplate() {
    this._remediationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // unhealthy_conditions - computed: false, optional: true, required: false
  private _unhealthyConditions = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditionsList(this, "unhealthy_conditions", false);
  public get unhealthyConditions() {
    return this._unhealthyConditions;
  }
  public putUnhealthyConditions(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable) {
    this._unhealthyConditions.internalValue = value;
  }
  public resetUnhealthyConditions() {
    this._unhealthyConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyConditionsInput() {
    return this._unhealthyConditions.internalValue;
  }

  // unhealthy_range - computed: false, optional: true, required: false
  private _unhealthyRange?: string; 
  public get unhealthyRange() {
    return this.getStringAttribute('unhealthy_range');
  }
  public set unhealthyRange(value: string) {
    this._unhealthyRange = value;
  }
  public resetUnhealthyRange() {
    this._unhealthyRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyRangeInput() {
    return this._unhealthyRange;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#ref DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure | cdktf.IResolvable | undefined) {
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
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy {
  /**
  * Template defines the template to use for generating the name of the ControlPlane object. If not defined, it will fallback to '{{ .cluster.name }}-{{ .random }}'. If the templated string exceeds 63 characters, it will be trimmed to 58 characters and will get concatenated with a random suffix of length 5. The templating mechanism provides the following arguments: * '.cluster.name': The name of the cluster object. * '.random': A random alphanumeric string, without vowels, of length 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategyToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategyToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane {
  /**
  * MachineHealthCheck defines a MachineHealthCheck for this ControlPlaneClass. This field is supported if and only if the ControlPlane provider template referenced above is Machine based and supports setting replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#machine_health_check DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#machine_health_check}
  */
  readonly machineHealthCheck?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck;
  /**
  * MachineInfrastructure defines the metadata and infrastructure information for control plane machines. This field is supported if and only if the control plane provider template referenced above is Machine based and supports setting replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#machine_infrastructure DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#machine_infrastructure}
  */
  readonly machineInfrastructure?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure;
  /**
  * Metadata is the metadata applied to the ControlPlane and the Machines of the ControlPlane if the ControlPlaneTemplate referenced is machine based. If not, it is applied only to the ControlPlane. At runtime this metadata is merged with the corresponding metadata from the topology. This field is supported if and only if the control plane provider template referenced is Machine based.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata;
  /**
  * NamingStrategy allows changing the naming pattern used when creating the control plane provider object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#naming_strategy DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#naming_strategy}
  */
  readonly namingStrategy?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy;
  /**
  * NodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds. NOTE: This value can be overridden while defining a Cluster.Topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_deletion_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_deletion_timeout}
  */
  readonly nodeDeletionTimeout?: string;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout' NOTE: This value can be overridden while defining a Cluster.Topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_drain_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * NodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations. NOTE: This value can be overridden while defining a Cluster.Topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_volume_detach_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_volume_detach_timeout}
  */
  readonly nodeVolumeDetachTimeout?: string;
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#ref DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_health_check: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckToTerraform(struct!.machineHealthCheck),
    machine_infrastructure: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureToTerraform(struct!.machineInfrastructure),
    metadata: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadataToTerraform(struct!.metadata),
    naming_strategy: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategyToTerraform(struct!.namingStrategy),
    node_deletion_timeout: cdktf.stringToTerraform(struct!.nodeDeletionTimeout),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    node_volume_detach_timeout: cdktf.stringToTerraform(struct!.nodeVolumeDetachTimeout),
    ref: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_health_check: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckToHclTerraform(struct!.machineHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck",
    },
    machine_infrastructure: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureToHclTerraform(struct!.machineInfrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata",
    },
    naming_strategy: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategyToHclTerraform(struct!.namingStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy",
    },
    node_deletion_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDeletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_drain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_volume_detach_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeVolumeDetachTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthCheck = this._machineHealthCheck?.internalValue;
    }
    if (this._machineInfrastructure?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineInfrastructure = this._machineInfrastructure?.internalValue;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._namingStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingStrategy = this._namingStrategy?.internalValue;
    }
    if (this._nodeDeletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDeletionTimeout = this._nodeDeletionTimeout;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._nodeVolumeDetachTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVolumeDetachTimeout = this._nodeVolumeDetachTimeout;
    }
    if (this._ref?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineHealthCheck.internalValue = undefined;
      this._machineInfrastructure.internalValue = undefined;
      this._metadata.internalValue = undefined;
      this._namingStrategy.internalValue = undefined;
      this._nodeDeletionTimeout = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeVolumeDetachTimeout = undefined;
      this._ref.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineHealthCheck.internalValue = value.machineHealthCheck;
      this._machineInfrastructure.internalValue = value.machineInfrastructure;
      this._metadata.internalValue = value.metadata;
      this._namingStrategy.internalValue = value.namingStrategy;
      this._nodeDeletionTimeout = value.nodeDeletionTimeout;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeVolumeDetachTimeout = value.nodeVolumeDetachTimeout;
      this._ref.internalValue = value.ref;
    }
  }

  // machine_health_check - computed: false, optional: true, required: false
  private _machineHealthCheck = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheckOutputReference(this, "machine_health_check");
  public get machineHealthCheck() {
    return this._machineHealthCheck;
  }
  public putMachineHealthCheck(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineHealthCheck) {
    this._machineHealthCheck.internalValue = value;
  }
  public resetMachineHealthCheck() {
    this._machineHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckInput() {
    return this._machineHealthCheck.internalValue;
  }

  // machine_infrastructure - computed: false, optional: true, required: false
  private _machineInfrastructure = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructureOutputReference(this, "machine_infrastructure");
  public get machineInfrastructure() {
    return this._machineInfrastructure;
  }
  public putMachineInfrastructure(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMachineInfrastructure) {
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
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // naming_strategy - computed: false, optional: true, required: false
  private _namingStrategy = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategyOutputReference(this, "naming_strategy");
  public get namingStrategy() {
    return this._namingStrategy;
  }
  public putNamingStrategy(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneNamingStrategy) {
    this._namingStrategy.internalValue = value;
  }
  public resetNamingStrategy() {
    this._namingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namingStrategyInput() {
    return this._namingStrategy.internalValue;
  }

  // node_deletion_timeout - computed: false, optional: true, required: false
  private _nodeDeletionTimeout?: string; 
  public get nodeDeletionTimeout() {
    return this.getStringAttribute('node_deletion_timeout');
  }
  public set nodeDeletionTimeout(value: string) {
    this._nodeDeletionTimeout = value;
  }
  public resetNodeDeletionTimeout() {
    this._nodeDeletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDeletionTimeoutInput() {
    return this._nodeDeletionTimeout;
  }

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: string; 
  public get nodeDrainTimeout() {
    return this.getStringAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: string) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // node_volume_detach_timeout - computed: false, optional: true, required: false
  private _nodeVolumeDetachTimeout?: string; 
  public get nodeVolumeDetachTimeout() {
    return this.getStringAttribute('node_volume_detach_timeout');
  }
  public set nodeVolumeDetachTimeout(value: string) {
    this._nodeVolumeDetachTimeout = value;
  }
  public resetNodeVolumeDetachTimeout() {
    this._nodeVolumeDetachTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeDetachTimeoutInput() {
    return this._nodeVolumeDetachTimeout;
  }

  // ref - computed: false, optional: false, required: true
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#ref DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure | cdktf.IResolvable | undefined) {
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
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom {
  /**
  * Template is the Go template to be used to calculate the value. A template can reference variables defined in .spec.variables and builtin variables. Note: The template must evaluate to a valid YAML or JSON value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#template}
  */
  readonly template?: string;
  /**
  * Variable is the variable to be used as value. Variable can be one of the variables defined in .spec.variables or a builtin variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#variable DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#variable}
  */
  readonly variable?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFromToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
    variable: cdktf.stringToTerraform(struct!.variable),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFromToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable: {
      value: cdktf.stringToHclTerraform(struct!.variable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._variable !== undefined) {
      hasAnyValues = true;
      internalValueResult.variable = this._variable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
      this._variable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
      this._variable = value.variable;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: string; 
  public get variable() {
    return this.getStringAttribute('variable');
  }
  public set variable(value: string) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches {
  /**
  * Op defines the operation of the patch. Note: Only 'add', 'replace' and 'remove' are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#op DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#op}
  */
  readonly op: string;
  /**
  * Path defines the path of the patch. Note: Only the spec of a template can be patched, thus the path has to start with /spec/. Note: For now the only allowed array modifications are 'append' and 'prepend', i.e.: * for op: 'add': only index 0 (prepend) and - (append) are allowed * for op: 'replace' or 'remove': no indexes are allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#path}
  */
  readonly path: string;
  /**
  * Value defines the value of the patch. Note: Either Value or ValueFrom is required for add and replace operations. Only one of them is allowed to be set at the same time. Note: We have to use apiextensionsv1.JSON instead of our JSON type, because controller-tools has a hard-coded schema for apiextensionsv1.JSON which cannot be produced by another type (unset type field). Ref: https://github.com/kubernetes-sigs/controller-tools/blob/d0e03a142d0ecdd5491593e941ee1d6b5d91dba6/pkg/crd/known_types.go#L106-L111
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#value DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#value}
  */
  readonly value?: { [key: string]: string };
  /**
  * ValueFrom defines the value of the patch. Note: Either Value or ValueFrom is required for add and replace operations. Only one of them is allowed to be set at the same time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#value_from DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    op: cdktf.stringToTerraform(struct!.op),
    path: cdktf.stringToTerraform(struct!.path),
    value: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.value),
    value_from: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    op: {
      value: cdktf.stringToHclTerraform(struct!.op),
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
    value: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.value),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    value_from: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._op !== undefined) {
      hasAnyValues = true;
      internalValueResult.op = this._op;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._op = undefined;
      this._path = undefined;
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
      this._op = value.op;
      this._path = value.path;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
    }
  }

  // op - computed: false, optional: false, required: true
  private _op?: string; 
  public get op() {
    return this.getStringAttribute('op');
  }
  public set op(value: string) {
    this._op = value;
  }
  // Temporarily expose input value. Use with caution.
  public get opInput() {
    return this._op;
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

  // value - computed: false, optional: true, required: false
  private _value?: { [key: string]: string }; 
  public get value() {
    return this.getStringMapAttribute('value');
  }
  public set value(value: { [key: string]: string }) {
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
  private _valueFrom = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesValueFrom) {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass {
  /**
  * Names selects templates by class names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#names DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#names}
  */
  readonly names?: string[];
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClassToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClassToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass {
  /**
  * Names selects templates by class names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#names DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#names}
  */
  readonly names?: string[];
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClassToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.names),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClassToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.names),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClassOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._names !== undefined) {
      hasAnyValues = true;
      internalValueResult.names = this._names;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._names = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._names = value.names;
    }
  }

  // names - computed: false, optional: true, required: false
  private _names?: string[]; 
  public get names() {
    return this.getListAttribute('names');
  }
  public set names(value: string[]) {
    this._names = value;
  }
  public resetNames() {
    this._names = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namesInput() {
    return this._names;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources {
  /**
  * ControlPlane selects templates referenced in .spec.ControlPlane. Note: this will match the controlPlane and also the controlPlane machineInfrastructure (depending on the kind and apiVersion).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#control_plane DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#control_plane}
  */
  readonly controlPlane?: boolean | cdktf.IResolvable;
  /**
  * InfrastructureCluster selects templates referenced in .spec.infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#infrastructure_cluster DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#infrastructure_cluster}
  */
  readonly infrastructureCluster?: boolean | cdktf.IResolvable;
  /**
  * MachineDeploymentClass selects templates referenced in specific MachineDeploymentClasses in .spec.workers.machineDeployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#machine_deployment_class DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#machine_deployment_class}
  */
  readonly machineDeploymentClass?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass;
  /**
  * MachinePoolClass selects templates referenced in specific MachinePoolClasses in .spec.workers.machinePools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#machine_pool_class DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#machine_pool_class}
  */
  readonly machinePoolClass?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: cdktf.booleanToTerraform(struct!.controlPlane),
    infrastructure_cluster: cdktf.booleanToTerraform(struct!.infrastructureCluster),
    machine_deployment_class: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClassToTerraform(struct!.machineDeploymentClass),
    machine_pool_class: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClassToTerraform(struct!.machinePoolClass),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: cdktf.booleanToHclTerraform(struct!.controlPlane),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    infrastructure_cluster: {
      value: cdktf.booleanToHclTerraform(struct!.infrastructureCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    machine_deployment_class: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClassToHclTerraform(struct!.machineDeploymentClass),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass",
    },
    machine_pool_class: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClassToHclTerraform(struct!.machinePoolClass),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controlPlane !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlPlane = this._controlPlane;
    }
    if (this._infrastructureCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureCluster = this._infrastructureCluster;
    }
    if (this._machineDeploymentClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDeploymentClass = this._machineDeploymentClass?.internalValue;
    }
    if (this._machinePoolClass?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinePoolClass = this._machinePoolClass?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlane = undefined;
      this._infrastructureCluster = undefined;
      this._machineDeploymentClass.internalValue = undefined;
      this._machinePoolClass.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controlPlane = value.controlPlane;
      this._infrastructureCluster = value.infrastructureCluster;
      this._machineDeploymentClass.internalValue = value.machineDeploymentClass;
      this._machinePoolClass.internalValue = value.machinePoolClass;
    }
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane?: boolean | cdktf.IResolvable; 
  public get controlPlane() {
    return this.getBooleanAttribute('control_plane');
  }
  public set controlPlane(value: boolean | cdktf.IResolvable) {
    this._controlPlane = value;
  }
  public resetControlPlane() {
    this._controlPlane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneInput() {
    return this._controlPlane;
  }

  // infrastructure_cluster - computed: false, optional: true, required: false
  private _infrastructureCluster?: boolean | cdktf.IResolvable; 
  public get infrastructureCluster() {
    return this.getBooleanAttribute('infrastructure_cluster');
  }
  public set infrastructureCluster(value: boolean | cdktf.IResolvable) {
    this._infrastructureCluster = value;
  }
  public resetInfrastructureCluster() {
    this._infrastructureCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureClusterInput() {
    return this._infrastructureCluster;
  }

  // machine_deployment_class - computed: false, optional: true, required: false
  private _machineDeploymentClass = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClassOutputReference(this, "machine_deployment_class");
  public get machineDeploymentClass() {
    return this._machineDeploymentClass;
  }
  public putMachineDeploymentClass(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachineDeploymentClass) {
    this._machineDeploymentClass.internalValue = value;
  }
  public resetMachineDeploymentClass() {
    this._machineDeploymentClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeploymentClassInput() {
    return this._machineDeploymentClass.internalValue;
  }

  // machine_pool_class - computed: false, optional: true, required: false
  private _machinePoolClass = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClassOutputReference(this, "machine_pool_class");
  public get machinePoolClass() {
    return this._machinePoolClass;
  }
  public putMachinePoolClass(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesMachinePoolClass) {
    this._machinePoolClass.internalValue = value;
  }
  public resetMachinePoolClass() {
    this._machinePoolClass.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolClassInput() {
    return this._machinePoolClass.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector {
  /**
  * APIVersion filters templates by apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * Kind filters templates by kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * MatchResources selects templates based on where they are referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#match_resources DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#match_resources}
  */
  readonly matchResources: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    match_resources: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesToTerraform(struct!.matchResources),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector | cdktf.IResolvable): any {
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
    match_resources: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesToHclTerraform(struct!.matchResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector | cdktf.IResolvable | undefined {
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
    if (this._matchResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchResources = this._matchResources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._matchResources.internalValue = undefined;
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
      this._matchResources.internalValue = value.matchResources;
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

  // match_resources - computed: false, optional: false, required: true
  private _matchResources = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResourcesOutputReference(this, "match_resources");
  public get matchResources() {
    return this._matchResources;
  }
  public putMatchResources(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorMatchResources) {
    this._matchResources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchResourcesInput() {
    return this._matchResources.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions {
  /**
  * JSONPatches defines the patches which should be applied on the templates matching the selector. Note: Patches will be applied in the order of the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#json_patches DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#json_patches}
  */
  readonly jsonPatches: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches[] | cdktf.IResolvable;
  /**
  * Selector defines on which templates the patch should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#selector DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#selector}
  */
  readonly selector: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_patches: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesToTerraform, false)(struct!.jsonPatches),
    selector: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorToTerraform(struct!.selector),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_patches: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesToHclTerraform, false)(struct!.jsonPatches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesList",
    },
    selector: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonPatches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPatches = this._jsonPatches?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = undefined;
      this._selector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonPatches.internalValue = value.jsonPatches;
      this._selector.internalValue = value.selector;
    }
  }

  // json_patches - computed: false, optional: false, required: true
  private _jsonPatches = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatchesList(this, "json_patches", false);
  public get jsonPatches() {
    return this._jsonPatches;
  }
  public putJsonPatches(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsJsonPatches[] | cdktf.IResolvable) {
    this._jsonPatches.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPatchesInput() {
    return this._jsonPatches.internalValue;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal {
  /**
  * DiscoverVariablesExtension references an extension which is called to discover variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#discover_variables_extension DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#discover_variables_extension}
  */
  readonly discoverVariablesExtension?: string;
  /**
  * GenerateExtension references an extension which is called to generate patches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#generate_extension DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#generate_extension}
  */
  readonly generateExtension?: string;
  /**
  * Settings defines key value pairs to be passed to the extensions. Values defined here take precedence over the values defined in the corresponding ExtensionConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#settings DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#settings}
  */
  readonly settings?: { [key: string]: string };
  /**
  * ValidateExtension references an extension which is called to validate the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#validate_extension DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#validate_extension}
  */
  readonly validateExtension?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternalToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    discover_variables_extension: cdktf.stringToTerraform(struct!.discoverVariablesExtension),
    generate_extension: cdktf.stringToTerraform(struct!.generateExtension),
    settings: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.settings),
    validate_extension: cdktf.stringToTerraform(struct!.validateExtension),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternalToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    discover_variables_extension: {
      value: cdktf.stringToHclTerraform(struct!.discoverVariablesExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generate_extension: {
      value: cdktf.stringToHclTerraform(struct!.generateExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    settings: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.settings),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    validate_extension: {
      value: cdktf.stringToHclTerraform(struct!.validateExtension),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._discoverVariablesExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.discoverVariablesExtension = this._discoverVariablesExtension;
    }
    if (this._generateExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateExtension = this._generateExtension;
    }
    if (this._settings !== undefined) {
      hasAnyValues = true;
      internalValueResult.settings = this._settings;
    }
    if (this._validateExtension !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateExtension = this._validateExtension;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._discoverVariablesExtension = undefined;
      this._generateExtension = undefined;
      this._settings = undefined;
      this._validateExtension = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._discoverVariablesExtension = value.discoverVariablesExtension;
      this._generateExtension = value.generateExtension;
      this._settings = value.settings;
      this._validateExtension = value.validateExtension;
    }
  }

  // discover_variables_extension - computed: false, optional: true, required: false
  private _discoverVariablesExtension?: string; 
  public get discoverVariablesExtension() {
    return this.getStringAttribute('discover_variables_extension');
  }
  public set discoverVariablesExtension(value: string) {
    this._discoverVariablesExtension = value;
  }
  public resetDiscoverVariablesExtension() {
    this._discoverVariablesExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoverVariablesExtensionInput() {
    return this._discoverVariablesExtension;
  }

  // generate_extension - computed: false, optional: true, required: false
  private _generateExtension?: string; 
  public get generateExtension() {
    return this.getStringAttribute('generate_extension');
  }
  public set generateExtension(value: string) {
    this._generateExtension = value;
  }
  public resetGenerateExtension() {
    this._generateExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateExtensionInput() {
    return this._generateExtension;
  }

  // settings - computed: false, optional: true, required: false
  private _settings?: { [key: string]: string }; 
  public get settings() {
    return this.getStringMapAttribute('settings');
  }
  public set settings(value: { [key: string]: string }) {
    this._settings = value;
  }
  public resetSettings() {
    this._settings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // validate_extension - computed: false, optional: true, required: false
  private _validateExtension?: string; 
  public get validateExtension() {
    return this.getStringAttribute('validate_extension');
  }
  public set validateExtension(value: string) {
    this._validateExtension = value;
  }
  public resetValidateExtension() {
    this._validateExtension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateExtensionInput() {
    return this._validateExtension;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches {
  /**
  * Definitions define inline patches. Note: Patches will be applied in the order of the array. Note: Exactly one of Definitions or External must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#definitions DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#definitions}
  */
  readonly definitions?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions[] | cdktf.IResolvable;
  /**
  * Description is a human-readable description of this patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#description DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * EnabledIf is a Go template to be used to calculate if a patch should be enabled. It can reference variables defined in .spec.variables and builtin variables. The patch will be enabled if the template evaluates to 'true', otherwise it will be disabled. If EnabledIf is not set, the patch will be enabled per default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#enabled_if DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#enabled_if}
  */
  readonly enabledIf?: string;
  /**
  * External defines an external patch. Note: Exactly one of Definitions or External must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#external DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#external}
  */
  readonly external?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal;
  /**
  * Name of the patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    definitions: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsToTerraform, false)(struct!.definitions),
    description: cdktf.stringToTerraform(struct!.description),
    enabled_if: cdktf.stringToTerraform(struct!.enabledIf),
    external: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternalToTerraform(struct!.external),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    definitions: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsToHclTerraform, false)(struct!.definitions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_if: {
      value: cdktf.stringToHclTerraform(struct!.enabledIf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal",
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definitions = this._definitions?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enabledIf !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledIf = this._enabledIf;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._definitions.internalValue = undefined;
      this._description = undefined;
      this._enabledIf = undefined;
      this._external.internalValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._definitions.internalValue = value.definitions;
      this._description = value.description;
      this._enabledIf = value.enabledIf;
      this._external.internalValue = value.external;
      this._name = value.name;
    }
  }

  // definitions - computed: false, optional: true, required: false
  private _definitions = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitionsList(this, "definitions", false);
  public get definitions() {
    return this._definitions;
  }
  public putDefinitions(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesDefinitions[] | cdktf.IResolvable) {
    this._definitions.internalValue = value;
  }
  public resetDefinitions() {
    this._definitions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definitionsInput() {
    return this._definitions.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled_if - computed: false, optional: true, required: false
  private _enabledIf?: string; 
  public get enabledIf() {
    return this.getStringAttribute('enabled_if');
  }
  public set enabledIf(value: string) {
    this._enabledIf = value;
  }
  public resetEnabledIf() {
    this._enabledIf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledIfInput() {
    return this._enabledIf;
  }

  // external - computed: false, optional: true, required: false
  private _external = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata {
  /**
  * Annotations is an unstructured key value map that can be used to store and retrieve arbitrary metadata. They are not queryable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations {
  /**
  * FieldPath represents the field path returned when the validation fails. It must be a relative JSON path (i.e. with array notation) scoped to the location of this x-kubernetes-validations extension in the schema and refer to an existing field. e.g. when validation checks if a specific attribute 'foo' under a map 'testMap', the fieldPath could be set to '.testMap.foo' If the validation checks two lists must have unique attributes, the fieldPath could be set to either of the list: e.g. '.testList' It does not support list numeric index. It supports child operation to refer to an existing field currently. Refer to [JSONPath support in Kubernetes](https://kubernetes.io/docs/reference/kubectl/jsonpath/) for more info. Numeric index of array is not supported. For field name which contains special characters, use '['specialName']' to refer the field name. e.g. for attribute 'foo.34$' appears in a list 'testList', the fieldPath could be set to '.testList['foo.34$']'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Message represents the message displayed when validation fails. The message is required if the Rule contains line breaks. The message must not contain line breaks. If unset, the message is 'failed rule: {Rule}'. e.g. 'must be a URL with the host matching spec.host'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#message DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#message}
  */
  readonly message?: string;
  /**
  * MessageExpression declares a CEL expression that evaluates to the validation failure message that is returned when this rule fails. Since messageExpression is used as a failure message, it must evaluate to a string. If both message and messageExpression are present on a rule, then messageExpression will be used if validation fails. If messageExpression results in a runtime error, the validation failure message is produced as if the messageExpression field were unset. If messageExpression evaluates to an empty string, a string with only spaces, or a string that contains line breaks, then the validation failure message will also be produced as if the messageExpression field were unset. messageExpression has access to all the same variables as the rule; the only difference is the return type. Example: 'x must be less than max ('+string(self.max)+')'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#message_expression DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#message_expression}
  */
  readonly messageExpression?: string;
  /**
  * Reason provides a machine-readable validation failure reason that is returned to the caller when a request fails this validation rule. The currently supported reasons are: 'FieldValueInvalid', 'FieldValueForbidden', 'FieldValueRequired', 'FieldValueDuplicate'. If not set, default to use 'FieldValueInvalid'. All future added reasons must be accepted by clients when reading this value and unknown reasons should be treated as FieldValueInvalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#reason DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#reason}
  */
  readonly reason?: string;
  /**
  * Rule represents the expression which will be evaluated by CEL. ref: https://github.com/google/cel-spec The Rule is scoped to the location of the x-kubernetes-validations extension in the schema. The 'self' variable in the CEL expression is bound to the scoped value. If the Rule is scoped to an object with properties, the accessible properties of the object are field selectable via 'self.field' and field presence can be checked via 'has(self.field)'. If the Rule is scoped to an object with additionalProperties (i.e. a map) the value of the map are accessible via 'self[mapKey]', map containment can be checked via 'mapKey in self' and all entries of the map are accessible via CEL macros and functions such as 'self.all(...)'. If the Rule is scoped to an array, the elements of the array are accessible via 'self[i]' and also by macros and functions. If the Rule is scoped to a scalar, 'self' is bound to the scalar value. Examples: - Rule scoped to a map of objects: {'rule': 'self.components['Widget'].priority < 10'} - Rule scoped to a list of integers: {'rule': 'self.values.all(value, value >= 0 && value < 100)'} - Rule scoped to a string value: {'rule': 'self.startsWith('kube')'} Unknown data preserved in custom resources via x-kubernetes-preserve-unknown-fields is not accessible in CEL expressions. This includes: - Unknown field values that are preserved by object schemas with x-kubernetes-preserve-unknown-fields. - Object properties where the property schema is of an 'unknown type'. An 'unknown type' is recursively defined as: - A schema with no type and x-kubernetes-preserve-unknown-fields set to true - An array where the items schema is of an 'unknown type' - An object where the additionalProperties schema is of an 'unknown type' Only property names of the form '[a-zA-Z_.-/][a-zA-Z0-9_.-/]*' are accessible. Accessible property names are escaped according to the following rules when accessed in the expression: - '__' escapes to '__underscores__' - '.' escapes to '__dot__' - '-' escapes to '__dash__' - '/' escapes to '__slash__' - Property names that exactly match a CEL RESERVED keyword escape to '__{keyword}__'. The keywords are: 'true', 'false', 'null', 'in', 'as', 'break', 'const', 'continue', 'else', 'for', 'function', 'if', 'import', 'let', 'loop', 'package', 'namespace', 'return'. Examples: - Rule accessing a property named 'namespace': {'rule': 'self.__namespace__ > 0'} - Rule accessing a property named 'x-prop': {'rule': 'self.x__dash__prop > 0'} - Rule accessing a property named 'redact__d': {'rule': 'self.redact__underscores__d > 0'} If 'rule' makes use of the 'oldSelf' variable it is implicitly a 'transition rule'. By default, the 'oldSelf' variable is the same type as 'self'. Transition rules by default are applied only on UPDATE requests and are skipped if an old value could not be found.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#rule DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#rule}
  */
  readonly rule: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
    message: cdktf.stringToTerraform(struct!.message),
    message_expression: cdktf.stringToTerraform(struct!.messageExpression),
    reason: cdktf.stringToTerraform(struct!.reason),
    rule: cdktf.stringToTerraform(struct!.rule),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_expression: {
      value: cdktf.stringToHclTerraform(struct!.messageExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reason: {
      value: cdktf.stringToHclTerraform(struct!.reason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._messageExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageExpression = this._messageExpression;
    }
    if (this._reason !== undefined) {
      hasAnyValues = true;
      internalValueResult.reason = this._reason;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldPath = undefined;
      this._message = undefined;
      this._messageExpression = undefined;
      this._reason = undefined;
      this._rule = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldPath = value.fieldPath;
      this._message = value.message;
      this._messageExpression = value.messageExpression;
      this._reason = value.reason;
      this._rule = value.rule;
    }
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

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_expression - computed: false, optional: true, required: false
  private _messageExpression?: string; 
  public get messageExpression() {
    return this.getStringAttribute('message_expression');
  }
  public set messageExpression(value: string) {
    this._messageExpression = value;
  }
  public resetMessageExpression() {
    this._messageExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageExpressionInput() {
    return this._messageExpression;
  }

  // reason - computed: false, optional: true, required: false
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  public resetReason() {
    this._reason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata {
  /**
  * Annotations is an unstructured key value map that can be used to store and retrieve arbitrary metadata. They are not queryable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) variables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema {
  /**
  * AdditionalProperties specifies the schema of values in a map (keys are always strings). NOTE: Can only be set if type is object. NOTE: AdditionalProperties is mutually exclusive with Properties. NOTE: This field uses PreserveUnknownFields and Schemaless, because recursive validation is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#additional_properties DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#additional_properties}
  */
  readonly additionalProperties?: { [key: string]: string };
  /**
  * AllOf specifies that the variable must validate against all of the subschemas in the array. NOTE: This field uses PreserveUnknownFields and Schemaless, because recursive validation is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#all_of DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#all_of}
  */
  readonly allOf?: { [key: string]: string };
  /**
  * AnyOf specifies that the variable must validate against one or more of the subschemas in the array. NOTE: This field uses PreserveUnknownFields and Schemaless, because recursive validation is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#any_of DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#any_of}
  */
  readonly anyOf?: { [key: string]: string };
  /**
  * Default is the default value of the variable. NOTE: Can be set for all types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#default DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#default}
  */
  readonly default?: { [key: string]: string };
  /**
  * Description is a human-readable description of this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#description DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#description}
  */
  readonly description?: string;
  /**
  * Enum is the list of valid values of the variable. NOTE: Can be set for all types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#enum DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#enum}
  */
  readonly enum?: string[];
  /**
  * Example is an example for this variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#example DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#example}
  */
  readonly example?: { [key: string]: string };
  /**
  * ExclusiveMaximum specifies if the Maximum is exclusive. NOTE: Can only be set if type is integer or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#exclusive_maximum DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#exclusive_maximum}
  */
  readonly exclusiveMaximum?: boolean | cdktf.IResolvable;
  /**
  * ExclusiveMinimum specifies if the Minimum is exclusive. NOTE: Can only be set if type is integer or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#exclusive_minimum DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#exclusive_minimum}
  */
  readonly exclusiveMinimum?: boolean | cdktf.IResolvable;
  /**
  * Format is an OpenAPI v3 format string. Unknown formats are ignored. For a list of supported formats please see: (of the k8s.io/apiextensions-apiserver version we're currently using) https://github.com/kubernetes/apiextensions-apiserver/blob/master/pkg/apiserver/validation/formats.go NOTE: Can only be set if type is string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#format DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#format}
  */
  readonly format?: string;
  /**
  * Items specifies fields of an array. NOTE: Can only be set if type is array. NOTE: This field uses PreserveUnknownFields and Schemaless, because recursive validation is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#items DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#items}
  */
  readonly items?: { [key: string]: string };
  /**
  * MaxItems is the max length of an array variable. NOTE: Can only be set if type is array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_items DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_items}
  */
  readonly maxItems?: number;
  /**
  * MaxLength is the max length of a string variable. NOTE: Can only be set if type is string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_length DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_length}
  */
  readonly maxLength?: number;
  /**
  * MaxProperties is the maximum amount of entries in a map or properties in an object. NOTE: Can only be set if type is object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_properties DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_properties}
  */
  readonly maxProperties?: number;
  /**
  * Maximum is the maximum of an integer or number variable. If ExclusiveMaximum is false, the variable is valid if it is lower than, or equal to, the value of Maximum. If ExclusiveMaximum is true, the variable is valid if it is strictly lower than the value of Maximum. NOTE: Can only be set if type is integer or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#maximum DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#maximum}
  */
  readonly maximum?: number;
  /**
  * MinItems is the min length of an array variable. NOTE: Can only be set if type is array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#min_items DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#min_items}
  */
  readonly minItems?: number;
  /**
  * MinLength is the min length of a string variable. NOTE: Can only be set if type is string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#min_length DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#min_length}
  */
  readonly minLength?: number;
  /**
  * MinProperties is the minimum amount of entries in a map or properties in an object. NOTE: Can only be set if type is object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#min_properties DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#min_properties}
  */
  readonly minProperties?: number;
  /**
  * Minimum is the minimum of an integer or number variable. If ExclusiveMinimum is false, the variable is valid if it is greater than, or equal to, the value of Minimum. If ExclusiveMinimum is true, the variable is valid if it is strictly greater than the value of Minimum. NOTE: Can only be set if type is integer or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#minimum DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#minimum}
  */
  readonly minimum?: number;
  /**
  * Not specifies that the variable must not validate against the subschema. NOTE: This field uses PreserveUnknownFields and Schemaless, because recursive validation is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#not DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#not}
  */
  readonly not?: { [key: string]: string };
  /**
  * OneOf specifies that the variable must validate against exactly one of the subschemas in the array. NOTE: This field uses PreserveUnknownFields and Schemaless, because recursive validation is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#one_of DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#one_of}
  */
  readonly oneOf?: { [key: string]: string };
  /**
  * Pattern is the regex which a string variable must match. NOTE: Can only be set if type is string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#pattern DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#pattern}
  */
  readonly pattern?: string;
  /**
  * Properties specifies fields of an object. NOTE: Can only be set if type is object. NOTE: Properties is mutually exclusive with AdditionalProperties. NOTE: This field uses PreserveUnknownFields and Schemaless, because recursive validation is not possible.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#properties DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#properties}
  */
  readonly properties?: { [key: string]: string };
  /**
  * Required specifies which fields of an object are required. NOTE: Can only be set if type is object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#required DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#required}
  */
  readonly required?: string[];
  /**
  * Type is the type of the variable. Valid values are: object, array, string, integer, number or boolean.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#type DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#type}
  */
  readonly type?: string;
  /**
  * UniqueItems specifies if items in an array must be unique. NOTE: Can only be set if type is array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#unique_items DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#unique_items}
  */
  readonly uniqueItems?: boolean | cdktf.IResolvable;
  /**
  * x-kubernetes-int-or-string specifies that this value is either an integer or a string. If this is true, an empty type is allowed and type as child of anyOf is permitted if following one of the following patterns: 1) anyOf: - type: integer - type: string 2) allOf: - anyOf: - type: integer - type: string - ... zero or more
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#x_kubernetes_int_or_string DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#x_kubernetes_int_or_string}
  */
  readonly xKubernetesIntOrString?: boolean | cdktf.IResolvable;
  /**
  * XPreserveUnknownFields allows setting fields in a variable object which are not defined in the variable schema. This affects fields recursively, except if nested properties or additionalProperties are specified in the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#x_kubernetes_preserve_unknown_fields DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#x_kubernetes_preserve_unknown_fields}
  */
  readonly xKubernetesPreserveUnknownFields?: boolean | cdktf.IResolvable;
  /**
  * XValidations describes a list of validation rules written in the CEL expression language.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#x_kubernetes_validations DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#x_kubernetes_validations}
  */
  readonly xKubernetesValidations?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations[] | cdktf.IResolvable;
  /**
  * XMetadata is the metadata of a variable or a nested field within a variable. It can be used to add additional data for higher level tools.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#x_metadata DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#x_metadata}
  */
  readonly xMetadata?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalProperties),
    all_of: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.allOf),
    any_of: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.anyOf),
    default: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    enum: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enum),
    example: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.example),
    exclusive_maximum: cdktf.booleanToTerraform(struct!.exclusiveMaximum),
    exclusive_minimum: cdktf.booleanToTerraform(struct!.exclusiveMinimum),
    format: cdktf.stringToTerraform(struct!.format),
    items: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.items),
    max_items: cdktf.numberToTerraform(struct!.maxItems),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_properties: cdktf.numberToTerraform(struct!.maxProperties),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    min_items: cdktf.numberToTerraform(struct!.minItems),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_properties: cdktf.numberToTerraform(struct!.minProperties),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    not: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.not),
    one_of: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.oneOf),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    properties: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.properties),
    required: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    unique_items: cdktf.booleanToTerraform(struct!.uniqueItems),
    x_kubernetes_int_or_string: cdktf.booleanToTerraform(struct!.xKubernetesIntOrString),
    x_kubernetes_preserve_unknown_fields: cdktf.booleanToTerraform(struct!.xKubernetesPreserveUnknownFields),
    x_kubernetes_validations: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsToTerraform, false)(struct!.xKubernetesValidations),
    x_metadata: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadataToTerraform(struct!.xMetadata),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalProperties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    all_of: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.allOf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    any_of: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.anyOf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.default),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    example: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.example),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    exclusive_maximum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMaximum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusive_minimum: {
      value: cdktf.booleanToHclTerraform(struct!.exclusiveMinimum),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.items),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_items: {
      value: cdktf.numberToHclTerraform(struct!.maxItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_properties: {
      value: cdktf.numberToHclTerraform(struct!.maxProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_items: {
      value: cdktf.numberToHclTerraform(struct!.minItems),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_properties: {
      value: cdktf.numberToHclTerraform(struct!.minProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.not),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    one_of: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.oneOf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.properties),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    required: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktf.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_kubernetes_int_or_string: {
      value: cdktf.booleanToHclTerraform(struct!.xKubernetesIntOrString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_kubernetes_preserve_unknown_fields: {
      value: cdktf.booleanToHclTerraform(struct!.xKubernetesPreserveUnknownFields),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    x_kubernetes_validations: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsToHclTerraform, false)(struct!.xKubernetesValidations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsList",
    },
    x_metadata: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadataToHclTerraform(struct!.xMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._allOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.allOf = this._allOf;
    }
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._exclusiveMaximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMaximum = this._exclusiveMaximum;
    }
    if (this._exclusiveMinimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusiveMinimum = this._exclusiveMinimum;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._maxItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxItems = this._maxItems;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxProperties = this._maxProperties;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.minItems = this._minItems;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.minProperties = this._minProperties;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._not !== undefined) {
      hasAnyValues = true;
      internalValueResult.not = this._not;
    }
    if (this._oneOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneOf = this._oneOf;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    if (this._xKubernetesIntOrString !== undefined) {
      hasAnyValues = true;
      internalValueResult.xKubernetesIntOrString = this._xKubernetesIntOrString;
    }
    if (this._xKubernetesPreserveUnknownFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.xKubernetesPreserveUnknownFields = this._xKubernetesPreserveUnknownFields;
    }
    if (this._xKubernetesValidations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xKubernetesValidations = this._xKubernetesValidations?.internalValue;
    }
    if (this._xMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.xMetadata = this._xMetadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalProperties = undefined;
      this._allOf = undefined;
      this._anyOf = undefined;
      this._default = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._example = undefined;
      this._exclusiveMaximum = undefined;
      this._exclusiveMinimum = undefined;
      this._format = undefined;
      this._items = undefined;
      this._maxItems = undefined;
      this._maxLength = undefined;
      this._maxProperties = undefined;
      this._maximum = undefined;
      this._minItems = undefined;
      this._minLength = undefined;
      this._minProperties = undefined;
      this._minimum = undefined;
      this._not = undefined;
      this._oneOf = undefined;
      this._pattern = undefined;
      this._properties = undefined;
      this._required = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
      this._xKubernetesIntOrString = undefined;
      this._xKubernetesPreserveUnknownFields = undefined;
      this._xKubernetesValidations.internalValue = undefined;
      this._xMetadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalProperties = value.additionalProperties;
      this._allOf = value.allOf;
      this._anyOf = value.anyOf;
      this._default = value.default;
      this._description = value.description;
      this._enum = value.enum;
      this._example = value.example;
      this._exclusiveMaximum = value.exclusiveMaximum;
      this._exclusiveMinimum = value.exclusiveMinimum;
      this._format = value.format;
      this._items = value.items;
      this._maxItems = value.maxItems;
      this._maxLength = value.maxLength;
      this._maxProperties = value.maxProperties;
      this._maximum = value.maximum;
      this._minItems = value.minItems;
      this._minLength = value.minLength;
      this._minProperties = value.minProperties;
      this._minimum = value.minimum;
      this._not = value.not;
      this._oneOf = value.oneOf;
      this._pattern = value.pattern;
      this._properties = value.properties;
      this._required = value.required;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
      this._xKubernetesIntOrString = value.xKubernetesIntOrString;
      this._xKubernetesPreserveUnknownFields = value.xKubernetesPreserveUnknownFields;
      this._xKubernetesValidations.internalValue = value.xKubernetesValidations;
      this._xMetadata.internalValue = value.xMetadata;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: { [key: string]: string }; 
  public get additionalProperties() {
    return this.getStringMapAttribute('additional_properties');
  }
  public set additionalProperties(value: { [key: string]: string }) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // all_of - computed: false, optional: true, required: false
  private _allOf?: { [key: string]: string }; 
  public get allOf() {
    return this.getStringMapAttribute('all_of');
  }
  public set allOf(value: { [key: string]: string }) {
    this._allOf = value;
  }
  public resetAllOf() {
    this._allOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allOfInput() {
    return this._allOf;
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf?: { [key: string]: string }; 
  public get anyOf() {
    return this.getStringMapAttribute('any_of');
  }
  public set anyOf(value: { [key: string]: string }) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }

  // default - computed: false, optional: true, required: false
  private _default?: { [key: string]: string }; 
  public get default() {
    return this.getStringMapAttribute('default');
  }
  public set default(value: { [key: string]: string }) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // example - computed: false, optional: true, required: false
  private _example?: { [key: string]: string }; 
  public get example() {
    return this.getStringMapAttribute('example');
  }
  public set example(value: { [key: string]: string }) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // exclusive_maximum - computed: false, optional: true, required: false
  private _exclusiveMaximum?: boolean | cdktf.IResolvable; 
  public get exclusiveMaximum() {
    return this.getBooleanAttribute('exclusive_maximum');
  }
  public set exclusiveMaximum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMaximum = value;
  }
  public resetExclusiveMaximum() {
    this._exclusiveMaximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMaximumInput() {
    return this._exclusiveMaximum;
  }

  // exclusive_minimum - computed: false, optional: true, required: false
  private _exclusiveMinimum?: boolean | cdktf.IResolvable; 
  public get exclusiveMinimum() {
    return this.getBooleanAttribute('exclusive_minimum');
  }
  public set exclusiveMinimum(value: boolean | cdktf.IResolvable) {
    this._exclusiveMinimum = value;
  }
  public resetExclusiveMinimum() {
    this._exclusiveMinimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveMinimumInput() {
    return this._exclusiveMinimum;
  }

  // format - computed: false, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // items - computed: false, optional: true, required: false
  private _items?: { [key: string]: string }; 
  public get items() {
    return this.getStringMapAttribute('items');
  }
  public set items(value: { [key: string]: string }) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // max_items - computed: false, optional: true, required: false
  private _maxItems?: number; 
  public get maxItems() {
    return this.getNumberAttribute('max_items');
  }
  public set maxItems(value: number) {
    this._maxItems = value;
  }
  public resetMaxItems() {
    this._maxItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxItemsInput() {
    return this._maxItems;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_properties - computed: false, optional: true, required: false
  private _maxProperties?: number; 
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }
  public set maxProperties(value: number) {
    this._maxProperties = value;
  }
  public resetMaxProperties() {
    this._maxProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPropertiesInput() {
    return this._maxProperties;
  }

  // maximum - computed: false, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // min_items - computed: false, optional: true, required: false
  private _minItems?: number; 
  public get minItems() {
    return this.getNumberAttribute('min_items');
  }
  public set minItems(value: number) {
    this._minItems = value;
  }
  public resetMinItems() {
    this._minItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minItemsInput() {
    return this._minItems;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_properties - computed: false, optional: true, required: false
  private _minProperties?: number; 
  public get minProperties() {
    return this.getNumberAttribute('min_properties');
  }
  public set minProperties(value: number) {
    this._minProperties = value;
  }
  public resetMinProperties() {
    this._minProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPropertiesInput() {
    return this._minProperties;
  }

  // minimum - computed: false, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // not - computed: false, optional: true, required: false
  private _not?: { [key: string]: string }; 
  public get not() {
    return this.getStringMapAttribute('not');
  }
  public set not(value: { [key: string]: string }) {
    this._not = value;
  }
  public resetNot() {
    this._not = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notInput() {
    return this._not;
  }

  // one_of - computed: false, optional: true, required: false
  private _oneOf?: { [key: string]: string }; 
  public get oneOf() {
    return this.getStringMapAttribute('one_of');
  }
  public set oneOf(value: { [key: string]: string }) {
    this._oneOf = value;
  }
  public resetOneOf() {
    this._oneOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oneOfInput() {
    return this._oneOf;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: { [key: string]: string }; 
  public get properties() {
    return this.getStringMapAttribute('properties');
  }
  public set properties(value: { [key: string]: string }) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktf.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktf.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }

  // x_kubernetes_int_or_string - computed: false, optional: true, required: false
  private _xKubernetesIntOrString?: boolean | cdktf.IResolvable; 
  public get xKubernetesIntOrString() {
    return this.getBooleanAttribute('x_kubernetes_int_or_string');
  }
  public set xKubernetesIntOrString(value: boolean | cdktf.IResolvable) {
    this._xKubernetesIntOrString = value;
  }
  public resetXKubernetesIntOrString() {
    this._xKubernetesIntOrString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xKubernetesIntOrStringInput() {
    return this._xKubernetesIntOrString;
  }

  // x_kubernetes_preserve_unknown_fields - computed: false, optional: true, required: false
  private _xKubernetesPreserveUnknownFields?: boolean | cdktf.IResolvable; 
  public get xKubernetesPreserveUnknownFields() {
    return this.getBooleanAttribute('x_kubernetes_preserve_unknown_fields');
  }
  public set xKubernetesPreserveUnknownFields(value: boolean | cdktf.IResolvable) {
    this._xKubernetesPreserveUnknownFields = value;
  }
  public resetXKubernetesPreserveUnknownFields() {
    this._xKubernetesPreserveUnknownFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xKubernetesPreserveUnknownFieldsInput() {
    return this._xKubernetesPreserveUnknownFields;
  }

  // x_kubernetes_validations - computed: false, optional: true, required: false
  private _xKubernetesValidations = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidationsList(this, "x_kubernetes_validations", false);
  public get xKubernetesValidations() {
    return this._xKubernetesValidations;
  }
  public putXKubernetesValidations(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXKubernetesValidations[] | cdktf.IResolvable) {
    this._xKubernetesValidations.internalValue = value;
  }
  public resetXKubernetesValidations() {
    this._xKubernetesValidations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xKubernetesValidationsInput() {
    return this._xKubernetesValidations.internalValue;
  }

  // x_metadata - computed: false, optional: true, required: false
  private _xMetadata = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadataOutputReference(this, "x_metadata");
  public get xMetadata() {
    return this._xMetadata;
  }
  public putXMetadata(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaXMetadata) {
    this._xMetadata.internalValue = value;
  }
  public resetXMetadata() {
    this._xMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xMetadataInput() {
    return this._xMetadata.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema {
  /**
  * OpenAPIV3Schema defines the schema of a variable via OpenAPI v3 schema. The schema is a subset of the schema used in Kubernetes CRDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#open_apiv3_schema DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#open_apiv3_schema}
  */
  readonly openApiv3Schema: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    open_apiv3_schema: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaToTerraform(struct!.openApiv3Schema),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    open_apiv3_schema: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaToHclTerraform(struct!.openApiv3Schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._openApiv3Schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openApiv3Schema = this._openApiv3Schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._openApiv3Schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._openApiv3Schema.internalValue = value.openApiv3Schema;
    }
  }

  // open_apiv3_schema - computed: false, optional: false, required: true
  private _openApiv3Schema = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3SchemaOutputReference(this, "open_apiv3_schema");
  public get openApiv3Schema() {
    return this._openApiv3Schema;
  }
  public putOpenApiv3Schema(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOpenApiv3Schema) {
    this._openApiv3Schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get openApiv3SchemaInput() {
    return this._openApiv3Schema.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables {
  /**
  * Metadata is the metadata of a variable. It can be used to add additional data for higher level tools to a ClusterClassVariable. Deprecated: This field is deprecated and is going to be removed in the next apiVersion. Please use XMetadata in JSONSchemaProps instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata;
  /**
  * Name of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Required specifies if the variable is required. Note: this applies to the variable as a whole and thus the top-level object defined in the schema. If nested fields are required, this will be specified inside the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#required DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Schema defines the schema of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#schema DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#schema}
  */
  readonly schema: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadataToTerraform(struct!.metadata),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    schema: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaToTerraform(struct!.schema),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    schema: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._name = undefined;
      this._required = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._name = value.name;
      this._required = value.required;
      this._schema.internalValue = value.schema;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
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

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#status DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#type DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    status: cdktf.stringToTerraform(struct!.status),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._status = undefined;
      this._timeout = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._status = value.status;
      this._timeout = value.timeout;
      this._type = value.type;
    }
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck {
  /**
  * Any further remediation is only allowed if at most 'MaxUnhealthy' machines selected by 'selector' are not healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_unhealthy DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * NodeStartupTimeout allows to set the maximum time for MachineHealthCheck to consider a Machine unhealthy if a corresponding Node isn't associated through a 'Spec.ProviderID' field. The duration set in this field is compared to the greatest of: - Cluster's infrastructure ready condition timestamp (if and when available) - Control Plane's initialized condition timestamp (if and when available) - Machine's infrastructure ready condition timestamp (if and when available) - Machine's metadata creation timestamp Defaults to 10 minutes. If you wish to disable this feature, set the value explicitly to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_startup_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * RemediationTemplate is a reference to a remediation template provided by an infrastructure provider. This field is completely optional, when filled, the MachineHealthCheck controller creates a new object from the template referenced and hands off remediation of the machine to a controller that lives outside of Cluster API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#remediation_template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#remediation_template}
  */
  readonly remediationTemplate?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate;
  /**
  * UnhealthyConditions contains a list of the conditions that determine whether a node is considered unhealthy. The conditions are combined in a logical OR, i.e. if any of the conditions is met, the node is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#unhealthy_conditions DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#unhealthy_conditions}
  */
  readonly unhealthyConditions?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable;
  /**
  * Any further remediation is only allowed if the number of machines selected by 'selector' as not healthy is within the range of 'UnhealthyRange'. Takes precedence over MaxUnhealthy. Eg. '[3-5]' - This means that remediation will be allowed only when: (a) there are at least 3 unhealthy machines (and) (b) there are at most 5 unhealthy machines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#unhealthy_range DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#unhealthy_range}
  */
  readonly unhealthyRange?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    remediation_template: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToTerraform(struct!.remediationTemplate),
    unhealthy_conditions: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToTerraform, false)(struct!.unhealthyConditions),
    unhealthy_range: cdktf.stringToTerraform(struct!.unhealthyRange),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_unhealthy: {
      value: cdktf.stringToHclTerraform(struct!.maxUnhealthy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_startup_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeStartupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remediation_template: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate",
    },
    unhealthy_conditions: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsToHclTerraform, false)(struct!.unhealthyConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsList",
    },
    unhealthy_range: {
      value: cdktf.stringToHclTerraform(struct!.unhealthyRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxUnhealthy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnhealthy = this._maxUnhealthy;
    }
    if (this._nodeStartupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeStartupTimeout = this._nodeStartupTimeout;
    }
    if (this._remediationTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediationTemplate = this._remediationTemplate?.internalValue;
    }
    if (this._unhealthyConditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyConditions = this._unhealthyConditions?.internalValue;
    }
    if (this._unhealthyRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhealthyRange = this._unhealthyRange;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._unhealthyConditions.internalValue = undefined;
      this._unhealthyRange = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._unhealthyConditions.internalValue = value.unhealthyConditions;
      this._unhealthyRange = value.unhealthyRange;
    }
  }

  // max_unhealthy - computed: false, optional: true, required: false
  private _maxUnhealthy?: string; 
  public get maxUnhealthy() {
    return this.getStringAttribute('max_unhealthy');
  }
  public set maxUnhealthy(value: string) {
    this._maxUnhealthy = value;
  }
  public resetMaxUnhealthy() {
    this._maxUnhealthy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnhealthyInput() {
    return this._maxUnhealthy;
  }

  // node_startup_timeout - computed: false, optional: true, required: false
  private _nodeStartupTimeout?: string; 
  public get nodeStartupTimeout() {
    return this.getStringAttribute('node_startup_timeout');
  }
  public set nodeStartupTimeout(value: string) {
    this._nodeStartupTimeout = value;
  }
  public resetNodeStartupTimeout() {
    this._nodeStartupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStartupTimeoutInput() {
    return this._nodeStartupTimeout;
  }

  // remediation_template - computed: false, optional: true, required: false
  private _remediationTemplate = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  public resetRemediationTemplate() {
    this._remediationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // unhealthy_conditions - computed: false, optional: true, required: false
  private _unhealthyConditions = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditionsList(this, "unhealthy_conditions", false);
  public get unhealthyConditions() {
    return this._unhealthyConditions;
  }
  public putUnhealthyConditions(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckUnhealthyConditions[] | cdktf.IResolvable) {
    this._unhealthyConditions.internalValue = value;
  }
  public resetUnhealthyConditions() {
    this._unhealthyConditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyConditionsInput() {
    return this._unhealthyConditions.internalValue;
  }

  // unhealthy_range - computed: false, optional: true, required: false
  private _unhealthyRange?: string; 
  public get unhealthyRange() {
    return this.getStringAttribute('unhealthy_range');
  }
  public set unhealthyRange(value: string) {
    this._unhealthyRange = value;
  }
  public resetUnhealthyRange() {
    this._unhealthyRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhealthyRangeInput() {
    return this._unhealthyRange;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy {
  /**
  * Template defines the template to use for generating the name of the MachineDeployment object. If not defined, it will fallback to '{{ .cluster.name }}-{{ .machineDeployment.topologyName }}-{{ .random }}'. If the templated string exceeds 63 characters, it will be trimmed to 58 characters and will get concatenated with a random suffix of length 5. The templating mechanism provides the following arguments: * '.cluster.name': The name of the cluster object. * '.random': A random alphanumeric string, without vowels, of length 5. * '.machineDeployment.topologyName': The name of the MachineDeployment topology (Cluster.spec.topology.workers.machineDeployments[].name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategyToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategyToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation {
  /**
  * MaxInFlight determines how many in flight remediations should happen at the same time. Remediation only happens on the MachineSet with the most current revision, while older MachineSets (usually present during rollout operations) aren't allowed to remediate. Note: In general (independent of remediations), unhealthy machines are always prioritized during scale down operations over healthy ones. MaxInFlight can be set to a fixed number or a percentage. Example: when this is set to 20%, the MachineSet controller deletes at most 20% of the desired replicas. If not set, remediation is limited to all machines (bounded by replicas) under the active MachineSet's management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_in_flight DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_in_flight}
  */
  readonly maxInFlight?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediationToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_in_flight: cdktf.stringToTerraform(struct!.maxInFlight),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediationToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_in_flight: {
      value: cdktf.stringToHclTerraform(struct!.maxInFlight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInFlight !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInFlight = this._maxInFlight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxInFlight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxInFlight = value.maxInFlight;
    }
  }

  // max_in_flight - computed: false, optional: true, required: false
  private _maxInFlight?: string; 
  public get maxInFlight() {
    return this.getStringAttribute('max_in_flight');
  }
  public set maxInFlight(value: string) {
    this._maxInFlight = value;
  }
  public resetMaxInFlight() {
    this._maxInFlight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInFlightInput() {
    return this._maxInFlight;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate {
  /**
  * DeletePolicy defines the policy used by the MachineDeployment to identify nodes to delete when downscaling. Valid values are 'Random, 'Newest', 'Oldest' When no value is supplied, the default DeletePolicy of MachineSet is used
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#delete_policy DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#delete_policy}
  */
  readonly deletePolicy?: string;
  /**
  * The maximum number of machines that can be scheduled above the desired number of machines. Value can be an absolute number (ex: 5) or a percentage of desired machines (ex: 10%). This can not be 0 if MaxUnavailable is 0. Absolute number is calculated from percentage by rounding up. Defaults to 1. Example: when this is set to 30%, the new MachineSet can be scaled up immediately when the rolling update starts, such that the total number of old and new machines do not exceed 130% of desired machines. Once old machines have been killed, new MachineSet can be scaled up further, ensuring that total number of machines running at any time during the update is at most 130% of desired machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_surge DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_surge}
  */
  readonly maxSurge?: string;
  /**
  * The maximum number of machines that can be unavailable during the update. Value can be an absolute number (ex: 5) or a percentage of desired machines (ex: 10%). Absolute number is calculated from percentage by rounding down. This can not be 0 if MaxSurge is 0. Defaults to 0. Example: when this is set to 30%, the old MachineSet can be scaled down to 70% of desired machines immediately when the rolling update starts. Once new machines are ready, old MachineSet can be scaled down further, followed by scaling up the new MachineSet, ensuring that the total number of machines available at all times during the update is at least 70% of desired machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#max_unavailable DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#max_unavailable}
  */
  readonly maxUnavailable?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdateToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_policy: cdktf.stringToTerraform(struct!.deletePolicy),
    max_surge: cdktf.stringToTerraform(struct!.maxSurge),
    max_unavailable: cdktf.stringToTerraform(struct!.maxUnavailable),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_surge: {
      value: cdktf.stringToHclTerraform(struct!.maxSurge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_unavailable: {
      value: cdktf.stringToHclTerraform(struct!.maxUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deletePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletePolicy = this._deletePolicy;
    }
    if (this._maxSurge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSurge = this._maxSurge;
    }
    if (this._maxUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUnavailable = this._maxUnavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deletePolicy = undefined;
      this._maxSurge = undefined;
      this._maxUnavailable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deletePolicy = value.deletePolicy;
      this._maxSurge = value.maxSurge;
      this._maxUnavailable = value.maxUnavailable;
    }
  }

  // delete_policy - computed: false, optional: true, required: false
  private _deletePolicy?: string; 
  public get deletePolicy() {
    return this.getStringAttribute('delete_policy');
  }
  public set deletePolicy(value: string) {
    this._deletePolicy = value;
  }
  public resetDeletePolicy() {
    this._deletePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletePolicyInput() {
    return this._deletePolicy;
  }

  // max_surge - computed: false, optional: true, required: false
  private _maxSurge?: string; 
  public get maxSurge() {
    return this.getStringAttribute('max_surge');
  }
  public set maxSurge(value: string) {
    this._maxSurge = value;
  }
  public resetMaxSurge() {
    this._maxSurge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSurgeInput() {
    return this._maxSurge;
  }

  // max_unavailable - computed: false, optional: true, required: false
  private _maxUnavailable?: string; 
  public get maxUnavailable() {
    return this.getStringAttribute('max_unavailable');
  }
  public set maxUnavailable(value: string) {
    this._maxUnavailable = value;
  }
  public resetMaxUnavailable() {
    this._maxUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUnavailableInput() {
    return this._maxUnavailable;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy {
  /**
  * Remediation controls the strategy of remediating unhealthy machines and how remediating operations should occur during the lifecycle of the dependant MachineSets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#remediation DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#remediation}
  */
  readonly remediation?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation;
  /**
  * Rolling update config params. Present only if MachineDeploymentStrategyType = RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#rolling_update DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#rolling_update}
  */
  readonly rollingUpdate?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate;
  /**
  * Type of deployment. Allowed values are RollingUpdate and OnDelete. The default is RollingUpdate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#type DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    remediation: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediationToTerraform(struct!.remediation),
    rolling_update: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdateToTerraform(struct!.rollingUpdate),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    remediation: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediationToHclTerraform(struct!.remediation),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation",
    },
    rolling_update: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdateToHclTerraform(struct!.rollingUpdate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate",
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._remediation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remediation = this._remediation?.internalValue;
    }
    if (this._rollingUpdate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollingUpdate = this._rollingUpdate?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._remediation.internalValue = undefined;
      this._rollingUpdate.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._remediation.internalValue = value.remediation;
      this._rollingUpdate.internalValue = value.rollingUpdate;
      this._type = value.type;
    }
  }

  // remediation - computed: false, optional: true, required: false
  private _remediation = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediationOutputReference(this, "remediation");
  public get remediation() {
    return this._remediation;
  }
  public putRemediation(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRemediation) {
    this._remediation.internalValue = value;
  }
  public resetRemediation() {
    this._remediation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation.internalValue;
  }

  // rolling_update - computed: false, optional: true, required: false
  private _rollingUpdate = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdateOutputReference(this, "rolling_update");
  public get rollingUpdate() {
    return this._rollingUpdate;
  }
  public putRollingUpdate(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyRollingUpdate) {
    this._rollingUpdate.internalValue = value;
  }
  public resetRollingUpdate() {
    this._rollingUpdate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollingUpdateInput() {
    return this._rollingUpdate.internalValue;
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#ref DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap | cdktf.IResolvable | undefined) {
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
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#ref DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure | cdktf.IResolvable | undefined) {
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
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate {
  /**
  * Bootstrap contains the bootstrap template reference to be used for the creation of worker Machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#bootstrap DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#bootstrap}
  */
  readonly bootstrap: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap;
  /**
  * Infrastructure contains the infrastructure template reference to be used for the creation of worker Machines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#infrastructure DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#infrastructure}
  */
  readonly infrastructure: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure;
  /**
  * Metadata is the metadata applied to the MachineDeployment and the machines of the MachineDeployment. At runtime this metadata is merged with the corresponding metadata from the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToTerraform(struct!.bootstrap),
    infrastructure: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToTerraform(struct!.infrastructure),
    metadata: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapToHclTerraform(struct!.bootstrap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap",
    },
    infrastructure: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureToHclTerraform(struct!.infrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate | cdktf.IResolvable | undefined) {
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
  private _bootstrap = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrapOutputReference(this, "bootstrap");
  public get bootstrap() {
    return this._bootstrap;
  }
  public putBootstrap(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateBootstrap) {
    this._bootstrap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap.internalValue;
  }

  // infrastructure - computed: false, optional: false, required: true
  private _infrastructure = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateMetadata) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments {
  /**
  * Class denotes a type of worker node present in the cluster, this name MUST be unique within a ClusterClass and can be referenced in the Cluster to create a managed MachineDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#class DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#class}
  */
  readonly class: string;
  /**
  * FailureDomain is the failure domain the machines will be created in. Must match a key in the FailureDomains map stored on the cluster object. NOTE: This value can be overridden while defining a Cluster.Topology using this MachineDeploymentClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#failure_domain DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * MachineHealthCheck defines a MachineHealthCheck for this MachineDeploymentClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#machine_health_check DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#machine_health_check}
  */
  readonly machineHealthCheck?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck;
  /**
  * Minimum number of seconds for which a newly created machine should be ready. Defaults to 0 (machine will be considered available as soon as it is ready) NOTE: This value can be overridden while defining a Cluster.Topology using this MachineDeploymentClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#min_ready_seconds DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * NamingStrategy allows changing the naming pattern used when creating the MachineDeployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#naming_strategy DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#naming_strategy}
  */
  readonly namingStrategy?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy;
  /**
  * NodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds. NOTE: This value can be overridden while defining a Cluster.Topology using this MachineDeploymentClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_deletion_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_deletion_timeout}
  */
  readonly nodeDeletionTimeout?: string;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout' NOTE: This value can be overridden while defining a Cluster.Topology using this MachineDeploymentClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_drain_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * NodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations. NOTE: This value can be overridden while defining a Cluster.Topology using this MachineDeploymentClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_volume_detach_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_volume_detach_timeout}
  */
  readonly nodeVolumeDetachTimeout?: string;
  /**
  * The deployment strategy to use to replace existing machines with new ones. NOTE: This value can be overridden while defining a Cluster.Topology using this MachineDeploymentClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#strategy DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#strategy}
  */
  readonly strategy?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy;
  /**
  * Template is a local struct containing a collection of templates for creation of MachineDeployment objects representing a set of worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#template}
  */
  readonly template: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    machine_health_check: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckToTerraform(struct!.machineHealthCheck),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    naming_strategy: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategyToTerraform(struct!.namingStrategy),
    node_deletion_timeout: cdktf.stringToTerraform(struct!.nodeDeletionTimeout),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    node_volume_detach_timeout: cdktf.stringToTerraform(struct!.nodeVolumeDetachTimeout),
    strategy: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyToTerraform(struct!.strategy),
    template: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateToTerraform(struct!.template),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments | cdktf.IResolvable): any {
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
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    machine_health_check: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckToHclTerraform(struct!.machineHealthCheck),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    naming_strategy: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategyToHclTerraform(struct!.namingStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy",
    },
    node_deletion_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDeletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_drain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_volume_detach_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeVolumeDetachTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyToHclTerraform(struct!.strategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy",
    },
    template: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._machineHealthCheck?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineHealthCheck = this._machineHealthCheck?.internalValue;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._namingStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingStrategy = this._namingStrategy?.internalValue;
    }
    if (this._nodeDeletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDeletionTimeout = this._nodeDeletionTimeout;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._nodeVolumeDetachTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVolumeDetachTimeout = this._nodeVolumeDetachTimeout;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._failureDomain = undefined;
      this._machineHealthCheck.internalValue = undefined;
      this._minReadySeconds = undefined;
      this._namingStrategy.internalValue = undefined;
      this._nodeDeletionTimeout = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeVolumeDetachTimeout = undefined;
      this._strategy.internalValue = undefined;
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
      this._failureDomain = value.failureDomain;
      this._machineHealthCheck.internalValue = value.machineHealthCheck;
      this._minReadySeconds = value.minReadySeconds;
      this._namingStrategy.internalValue = value.namingStrategy;
      this._nodeDeletionTimeout = value.nodeDeletionTimeout;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeVolumeDetachTimeout = value.nodeVolumeDetachTimeout;
      this._strategy.internalValue = value.strategy;
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

  // failure_domain - computed: false, optional: true, required: false
  private _failureDomain?: string; 
  public get failureDomain() {
    return this.getStringAttribute('failure_domain');
  }
  public set failureDomain(value: string) {
    this._failureDomain = value;
  }
  public resetFailureDomain() {
    this._failureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainInput() {
    return this._failureDomain;
  }

  // machine_health_check - computed: false, optional: true, required: false
  private _machineHealthCheck = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheckOutputReference(this, "machine_health_check");
  public get machineHealthCheck() {
    return this._machineHealthCheck;
  }
  public putMachineHealthCheck(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsMachineHealthCheck) {
    this._machineHealthCheck.internalValue = value;
  }
  public resetMachineHealthCheck() {
    this._machineHealthCheck.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineHealthCheckInput() {
    return this._machineHealthCheck.internalValue;
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // naming_strategy - computed: false, optional: true, required: false
  private _namingStrategy = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategyOutputReference(this, "naming_strategy");
  public get namingStrategy() {
    return this._namingStrategy;
  }
  public putNamingStrategy(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsNamingStrategy) {
    this._namingStrategy.internalValue = value;
  }
  public resetNamingStrategy() {
    this._namingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namingStrategyInput() {
    return this._namingStrategy.internalValue;
  }

  // node_deletion_timeout - computed: false, optional: true, required: false
  private _nodeDeletionTimeout?: string; 
  public get nodeDeletionTimeout() {
    return this.getStringAttribute('node_deletion_timeout');
  }
  public set nodeDeletionTimeout(value: string) {
    this._nodeDeletionTimeout = value;
  }
  public resetNodeDeletionTimeout() {
    this._nodeDeletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDeletionTimeoutInput() {
    return this._nodeDeletionTimeout;
  }

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: string; 
  public get nodeDrainTimeout() {
    return this.getStringAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: string) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // node_volume_detach_timeout - computed: false, optional: true, required: false
  private _nodeVolumeDetachTimeout?: string; 
  public get nodeVolumeDetachTimeout() {
    return this.getStringAttribute('node_volume_detach_timeout');
  }
  public set nodeVolumeDetachTimeout(value: string) {
    this._nodeVolumeDetachTimeout = value;
  }
  public resetNodeVolumeDetachTimeout() {
    this._nodeVolumeDetachTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeDetachTimeoutInput() {
    return this._nodeVolumeDetachTimeout;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy {
  /**
  * Template defines the template to use for generating the name of the MachinePool object. If not defined, it will fallback to '{{ .cluster.name }}-{{ .machinePool.topologyName }}-{{ .random }}'. If the templated string exceeds 63 characters, it will be trimmed to 58 characters and will get concatenated with a random suffix of length 5. The templating mechanism provides the following arguments: * '.cluster.name': The name of the cluster object. * '.random': A random alphanumeric string, without vowels, of length 5. * '.machinePool.topologyName': The name of the MachinePool topology (Cluster.spec.topology.workers.machinePools[].name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#template}
  */
  readonly template?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategyToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: cdktf.stringToTerraform(struct!.template),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategyToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template = value.template;
    }
  }

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#ref DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap | cdktf.IResolvable | undefined) {
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
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#api_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#field_path DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#kind DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#name DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#namespace DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#resource_version DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#uid DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure {
  /**
  * Ref is a required reference to a custom resource offered by a provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#ref DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#ref}
  */
  readonly ref: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ref: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRefToTerraform(struct!.ref),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ref: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRefToHclTerraform(struct!.ref),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure | cdktf.IResolvable | undefined) {
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
  private _ref = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRefOutputReference(this, "ref");
  public get ref() {
    return this._ref;
  }
  public putRef(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureRef) {
    this._ref.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#annotations DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#labels DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadataToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate {
  /**
  * Bootstrap contains the bootstrap template reference to be used for the creation of the Machines in the MachinePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#bootstrap DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#bootstrap}
  */
  readonly bootstrap: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap;
  /**
  * Infrastructure contains the infrastructure template reference to be used for the creation of the MachinePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#infrastructure DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#infrastructure}
  */
  readonly infrastructure: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure;
  /**
  * Metadata is the metadata applied to the MachinePool. At runtime this metadata is merged with the corresponding metadata from the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#metadata DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#metadata}
  */
  readonly metadata?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapToTerraform(struct!.bootstrap),
    infrastructure: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureToTerraform(struct!.infrastructure),
    metadata: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapToHclTerraform(struct!.bootstrap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap",
    },
    infrastructure: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureToHclTerraform(struct!.infrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure",
    },
    metadata: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate | cdktf.IResolvable | undefined) {
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
  private _bootstrap = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrapOutputReference(this, "bootstrap");
  public get bootstrap() {
    return this._bootstrap;
  }
  public putBootstrap(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateBootstrap) {
    this._bootstrap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap.internalValue;
  }

  // infrastructure - computed: false, optional: false, required: true
  private _infrastructure = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateMetadata) {
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
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools {
  /**
  * Class denotes a type of machine pool present in the cluster, this name MUST be unique within a ClusterClass and can be referenced in the Cluster to create a managed MachinePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#class DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#class}
  */
  readonly class: string;
  /**
  * FailureDomains is the list of failure domains the MachinePool should be attached to. Must match a key in the FailureDomains map stored on the cluster object. NOTE: This value can be overridden while defining a Cluster.Topology using this MachinePoolClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#failure_domains DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#failure_domains}
  */
  readonly failureDomains?: string[];
  /**
  * Minimum number of seconds for which a newly created machine pool should be ready. Defaults to 0 (machine will be considered available as soon as it is ready) NOTE: This value can be overridden while defining a Cluster.Topology using this MachinePoolClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#min_ready_seconds DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#min_ready_seconds}
  */
  readonly minReadySeconds?: number;
  /**
  * NamingStrategy allows changing the naming pattern used when creating the MachinePool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#naming_strategy DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#naming_strategy}
  */
  readonly namingStrategy?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy;
  /**
  * NodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine hosts after the Machine Pool is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds. NOTE: This value can be overridden while defining a Cluster.Topology using this MachinePoolClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_deletion_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_deletion_timeout}
  */
  readonly nodeDeletionTimeout?: string;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout' NOTE: This value can be overridden while defining a Cluster.Topology using this MachinePoolClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_drain_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * NodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations. NOTE: This value can be overridden while defining a Cluster.Topology using this MachinePoolClass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#node_volume_detach_timeout DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#node_volume_detach_timeout}
  */
  readonly nodeVolumeDetachTimeout?: string;
  /**
  * Template is a local struct containing a collection of templates for creation of MachinePools objects representing a pool of worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#template DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#template}
  */
  readonly template: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class: cdktf.stringToTerraform(struct!.class),
    failure_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.failureDomains),
    min_ready_seconds: cdktf.numberToTerraform(struct!.minReadySeconds),
    naming_strategy: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategyToTerraform(struct!.namingStrategy),
    node_deletion_timeout: cdktf.stringToTerraform(struct!.nodeDeletionTimeout),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    node_volume_detach_timeout: cdktf.stringToTerraform(struct!.nodeVolumeDetachTimeout),
    template: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateToTerraform(struct!.template),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools | cdktf.IResolvable): any {
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
    failure_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.failureDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    min_ready_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minReadySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    naming_strategy: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategyToHclTerraform(struct!.namingStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy",
    },
    node_deletion_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDeletionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_drain_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeDrainTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_volume_detach_timeout: {
      value: cdktf.stringToHclTerraform(struct!.nodeVolumeDetachTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._class !== undefined) {
      hasAnyValues = true;
      internalValueResult.class = this._class;
    }
    if (this._failureDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomains = this._failureDomains;
    }
    if (this._minReadySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minReadySeconds = this._minReadySeconds;
    }
    if (this._namingStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namingStrategy = this._namingStrategy?.internalValue;
    }
    if (this._nodeDeletionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDeletionTimeout = this._nodeDeletionTimeout;
    }
    if (this._nodeDrainTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDrainTimeout = this._nodeDrainTimeout;
    }
    if (this._nodeVolumeDetachTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeVolumeDetachTimeout = this._nodeVolumeDetachTimeout;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._class = undefined;
      this._failureDomains = undefined;
      this._minReadySeconds = undefined;
      this._namingStrategy.internalValue = undefined;
      this._nodeDeletionTimeout = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeVolumeDetachTimeout = undefined;
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
      this._failureDomains = value.failureDomains;
      this._minReadySeconds = value.minReadySeconds;
      this._namingStrategy.internalValue = value.namingStrategy;
      this._nodeDeletionTimeout = value.nodeDeletionTimeout;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeVolumeDetachTimeout = value.nodeVolumeDetachTimeout;
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

  // failure_domains - computed: false, optional: true, required: false
  private _failureDomains?: string[]; 
  public get failureDomains() {
    return this.getListAttribute('failure_domains');
  }
  public set failureDomains(value: string[]) {
    this._failureDomains = value;
  }
  public resetFailureDomains() {
    this._failureDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureDomainsInput() {
    return this._failureDomains;
  }

  // min_ready_seconds - computed: false, optional: true, required: false
  private _minReadySeconds?: number; 
  public get minReadySeconds() {
    return this.getNumberAttribute('min_ready_seconds');
  }
  public set minReadySeconds(value: number) {
    this._minReadySeconds = value;
  }
  public resetMinReadySeconds() {
    this._minReadySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minReadySecondsInput() {
    return this._minReadySeconds;
  }

  // naming_strategy - computed: false, optional: true, required: false
  private _namingStrategy = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategyOutputReference(this, "naming_strategy");
  public get namingStrategy() {
    return this._namingStrategy;
  }
  public putNamingStrategy(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsNamingStrategy) {
    this._namingStrategy.internalValue = value;
  }
  public resetNamingStrategy() {
    this._namingStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namingStrategyInput() {
    return this._namingStrategy.internalValue;
  }

  // node_deletion_timeout - computed: false, optional: true, required: false
  private _nodeDeletionTimeout?: string; 
  public get nodeDeletionTimeout() {
    return this.getStringAttribute('node_deletion_timeout');
  }
  public set nodeDeletionTimeout(value: string) {
    this._nodeDeletionTimeout = value;
  }
  public resetNodeDeletionTimeout() {
    this._nodeDeletionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDeletionTimeoutInput() {
    return this._nodeDeletionTimeout;
  }

  // node_drain_timeout - computed: false, optional: true, required: false
  private _nodeDrainTimeout?: string; 
  public get nodeDrainTimeout() {
    return this.getStringAttribute('node_drain_timeout');
  }
  public set nodeDrainTimeout(value: string) {
    this._nodeDrainTimeout = value;
  }
  public resetNodeDrainTimeout() {
    this._nodeDrainTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDrainTimeoutInput() {
    return this._nodeDrainTimeout;
  }

  // node_volume_detach_timeout - computed: false, optional: true, required: false
  private _nodeVolumeDetachTimeout?: string; 
  public get nodeVolumeDetachTimeout() {
    return this.getStringAttribute('node_volume_detach_timeout');
  }
  public set nodeVolumeDetachTimeout(value: string) {
    this._nodeVolumeDetachTimeout = value;
  }
  public resetNodeVolumeDetachTimeout() {
    this._nodeVolumeDetachTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeVolumeDetachTimeoutInput() {
    return this._nodeVolumeDetachTimeout;
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsOutputReference {
    return new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers {
  /**
  * MachineDeployments is a list of machine deployment classes that can be used to create a set of worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#machine_deployments DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#machine_deployments}
  */
  readonly machineDeployments?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments[] | cdktf.IResolvable;
  /**
  * MachinePools is a list of machine pool classes that can be used to create a set of worker nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#machine_pools DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#machine_pools}
  */
  readonly machinePools?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools[] | cdktf.IResolvable;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    machine_deployments: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsToTerraform, false)(struct!.machineDeployments),
    machine_pools: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsToTerraform, false)(struct!.machinePools),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    machine_deployments: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsToHclTerraform, false)(struct!.machineDeployments),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsList",
    },
    machine_pools: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsToHclTerraform, false)(struct!.machinePools),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._machineDeployments?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machineDeployments = this._machineDeployments?.internalValue;
    }
    if (this._machinePools?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.machinePools = this._machinePools?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = undefined;
      this._machinePools.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._machineDeployments.internalValue = value.machineDeployments;
      this._machinePools.internalValue = value.machinePools;
    }
  }

  // machine_deployments - computed: false, optional: true, required: false
  private _machineDeployments = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeploymentsList(this, "machine_deployments", false);
  public get machineDeployments() {
    return this._machineDeployments;
  }
  public putMachineDeployments(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachineDeployments[] | cdktf.IResolvable) {
    this._machineDeployments.internalValue = value;
  }
  public resetMachineDeployments() {
    this._machineDeployments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineDeploymentsInput() {
    return this._machineDeployments.internalValue;
  }

  // machine_pools - computed: false, optional: true, required: false
  private _machinePools = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePoolsList(this, "machine_pools", false);
  public get machinePools() {
    return this._machinePools;
  }
  public putMachinePools(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersMachinePools[] | cdktf.IResolvable) {
    this._machinePools.internalValue = value;
  }
  public resetMachinePools() {
    this._machinePools.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machinePoolsInput() {
    return this._machinePools.internalValue;
  }
}
export interface DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec {
  /**
  * ControlPlane is a reference to a local struct that holds the details for provisioning the Control Plane for the Cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#control_plane DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#control_plane}
  */
  readonly controlPlane?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane;
  /**
  * Infrastructure is a reference to a provider-specific template that holds the details for provisioning infrastructure specific cluster for the underlying provider. The underlying provider is responsible for the implementation of the template to an infrastructure cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#infrastructure DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#infrastructure}
  */
  readonly infrastructure?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure;
  /**
  * Patches defines the patches which are applied to customize referenced templates of a ClusterClass. Note: Patches will be applied in the order of the array.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#patches DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#patches}
  */
  readonly patches?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches[] | cdktf.IResolvable;
  /**
  * Variables defines the variables which can be configured in the Cluster topology and are then used in patches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#variables DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#variables}
  */
  readonly variables?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables[] | cdktf.IResolvable;
  /**
  * Workers describes the worker nodes for the cluster. It is a collection of node types which can be used to create the worker nodes of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#workers DataK8SClusterXK8SIoClusterClassV1Beta1Manifest#workers}
  */
  readonly workers?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers;
}

export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecToTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    control_plane: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneToTerraform(struct!.controlPlane),
    infrastructure: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureToTerraform(struct!.infrastructure),
    patches: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesToTerraform, false)(struct!.patches),
    variables: cdktf.listMapper(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesToTerraform, false)(struct!.variables),
    workers: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersToTerraform(struct!.workers),
  }
}


export function dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    control_plane: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneToHclTerraform(struct!.controlPlane),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane",
    },
    infrastructure: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureToHclTerraform(struct!.infrastructure),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure",
    },
    patches: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesList",
    },
    variables: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesToHclTerraform, false)(struct!.variables),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesList",
    },
    workers: {
      value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersToHclTerraform(struct!.workers),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
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
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._variables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.variables = this._variables?.internalValue;
    }
    if (this._workers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workers = this._workers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controlPlane.internalValue = undefined;
      this._infrastructure.internalValue = undefined;
      this._patches.internalValue = undefined;
      this._variables.internalValue = undefined;
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
      this._patches.internalValue = value.patches;
      this._variables.internalValue = value.variables;
      this._workers.internalValue = value.workers;
    }
  }

  // control_plane - computed: false, optional: true, required: false
  private _controlPlane = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlaneOutputReference(this, "control_plane");
  public get controlPlane() {
    return this._controlPlane;
  }
  public putControlPlane(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecControlPlane) {
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
  private _infrastructure = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructureOutputReference(this, "infrastructure");
  public get infrastructure() {
    return this._infrastructure;
  }
  public putInfrastructure(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecInfrastructure) {
    this._infrastructure.internalValue = value;
  }
  public resetInfrastructure() {
    this._infrastructure.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureInput() {
    return this._infrastructure.internalValue;
  }

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecPatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // variables - computed: false, optional: true, required: false
  private _variables = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariablesList(this, "variables", false);
  public get variables() {
    return this._variables;
  }
  public putVariables(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecVariables[] | cdktf.IResolvable) {
    this._variables.internalValue = value;
  }
  public resetVariables() {
    this._variables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables.internalValue;
  }

  // workers - computed: false, optional: true, required: false
  private _workers = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkersOutputReference(this, "workers");
  public get workers() {
    return this._workers;
  }
  public putWorkers(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecWorkers) {
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest k8s_cluster_x_k8s_io_cluster_class_v1beta1_manifest}
*/
export class DataK8SClusterXK8SIoClusterClassV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_x_k8s_io_cluster_class_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterXK8SIoClusterClassV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterXK8SIoClusterClassV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SClusterXK8SIoClusterClassV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterXK8SIoClusterClassV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_x_k8s_io_cluster_class_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/cluster_x_k8s_io_cluster_class_v1beta1_manifest k8s_cluster_x_k8s_io_cluster_class_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterXK8SIoClusterClassV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_x_k8s_io_cluster_class_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
  private _metadata = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec) {
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
      metadata: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoClusterClassV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
