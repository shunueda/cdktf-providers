// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#metadata DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#metadata}
  */
  readonly metadata: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata;
  /**
  * Specification of machine health check policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#spec DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec;
}
export interface DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#annotations DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#labels DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#name DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#namespace DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadataToTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#api_version DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#field_path DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#kind DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#name DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#namespace DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#resource_version DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#uid DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplateToTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplateToHclTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#key DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#operator DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#values DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#match_expressions DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#match_labels DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorToTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorToHclTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsList",
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#status DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#timeout DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#timeout}
  */
  readonly timeout: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#type DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#type}
  */
  readonly type: string;
}

export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsToTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsToHclTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions | cdktf.IResolvable | undefined) {
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsOutputReference {
    return new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec {
  /**
  * ClusterName is the name of the Cluster this object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#cluster_name DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * Any further remediation is only allowed if at most 'MaxUnhealthy' machines selected by 'selector' are not healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#max_unhealthy DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#max_unhealthy}
  */
  readonly maxUnhealthy?: string;
  /**
  * Machines older than this duration without a node will be considered to have failed and will be remediated. If not set, this value is defaulted to 10 minutes. If you wish to disable this feature, set the value explicitly to 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#node_startup_timeout DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#node_startup_timeout}
  */
  readonly nodeStartupTimeout?: string;
  /**
  * RemediationTemplate is a reference to a remediation template provided by an infrastructure provider. This field is completely optional, when filled, the MachineHealthCheck controller creates a new object from the template referenced and hands off remediation of the machine to a controller that lives outside of Cluster API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#remediation_template DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#remediation_template}
  */
  readonly remediationTemplate?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate;
  /**
  * Label selector to match machines whose health will be exercised
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#selector DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#selector}
  */
  readonly selector: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector;
  /**
  * UnhealthyConditions contains a list of the conditions that determine whether a node is considered unhealthy. The conditions are combined in a logical OR, i.e. if any of the conditions is met, the node is unhealthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#unhealthy_conditions DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#unhealthy_conditions}
  */
  readonly unhealthyConditions: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions[] | cdktf.IResolvable;
  /**
  * Any further remediation is only allowed if the number of machines selected by 'selector' as not healthy is within the range of 'UnhealthyRange'. Takes precedence over MaxUnhealthy. Eg. '[3-5]' - This means that remediation will be allowed only when: (a) there are at least 3 unhealthy machines (and) (b) there are at most 5 unhealthy machines
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#unhealthy_range DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest#unhealthy_range}
  */
  readonly unhealthyRange?: string;
}

export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecToTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    max_unhealthy: cdktf.stringToTerraform(struct!.maxUnhealthy),
    node_startup_timeout: cdktf.stringToTerraform(struct!.nodeStartupTimeout),
    remediation_template: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplateToTerraform(struct!.remediationTemplate),
    selector: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorToTerraform(struct!.selector),
    unhealthy_conditions: cdktf.listMapper(dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsToTerraform, false)(struct!.unhealthyConditions),
    unhealthy_range: cdktf.stringToTerraform(struct!.unhealthyRange),
  }
}


export function dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecToHclTerraform(struct?: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
      value: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplateToHclTerraform(struct!.remediationTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate",
    },
    selector: {
      value: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector",
    },
    unhealthy_conditions: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsToHclTerraform, false)(struct!.unhealthyConditions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsList",
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

export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
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
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterName = undefined;
      this._maxUnhealthy = undefined;
      this._nodeStartupTimeout = undefined;
      this._remediationTemplate.internalValue = undefined;
      this._selector.internalValue = undefined;
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
      this._clusterName = value.clusterName;
      this._maxUnhealthy = value.maxUnhealthy;
      this._nodeStartupTimeout = value.nodeStartupTimeout;
      this._remediationTemplate.internalValue = value.remediationTemplate;
      this._selector.internalValue = value.selector;
      this._unhealthyConditions.internalValue = value.unhealthyConditions;
      this._unhealthyRange = value.unhealthyRange;
    }
  }

  // cluster_name - computed: false, optional: false, required: true
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
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
  private _remediationTemplate = new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplateOutputReference(this, "remediation_template");
  public get remediationTemplate() {
    return this._remediationTemplate;
  }
  public putRemediationTemplate(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecRemediationTemplate) {
    this._remediationTemplate.internalValue = value;
  }
  public resetRemediationTemplate() {
    this._remediationTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateInput() {
    return this._remediationTemplate.internalValue;
  }

  // selector - computed: false, optional: false, required: true
  private _selector = new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecSelector) {
    this._selector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // unhealthy_conditions - computed: false, optional: false, required: true
  private _unhealthyConditions = new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditionsList(this, "unhealthy_conditions", false);
  public get unhealthyConditions() {
    return this._unhealthyConditions;
  }
  public putUnhealthyConditions(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecUnhealthyConditions[] | cdktf.IResolvable) {
    this._unhealthyConditions.internalValue = value;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest k8s_cluster_x_k8s_io_machine_health_check_v1alpha4_manifest}
*/
export class DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_x_k8s_io_machine_health_check_v1alpha4_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest to import
  * @param importFromId The id of the existing DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_x_k8s_io_machine_health_check_v1alpha4_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/cluster_x_k8s_io_machine_health_check_v1alpha4_manifest k8s_cluster_x_k8s_io_machine_health_check_v1alpha4_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_x_k8s_io_machine_health_check_v1alpha4_manifest',
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
  private _metadata = new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec) {
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
      metadata: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoMachineHealthCheckV1Alpha4ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
