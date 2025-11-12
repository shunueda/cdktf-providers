// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#metadata DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata;
  /**
  * CassandraTaskSpec defines the desired state of CassandraTask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#spec DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec;
}
export interface DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#annotations DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#labels DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#name DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#namespace DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#api_version DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object. TODO: this design is not final and this field is subject to change in the future.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#field_path DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#kind DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#name DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#namespace DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#resource_version DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#uid DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenterToTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter | cdktf.IResolvable): any {
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


export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenterToHclTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter | cdktf.IResolvable): any {
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

export class DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter | cdktf.IResolvable | undefined) {
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
export interface DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#end_token DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#end_token}
  */
  readonly endToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#jobs DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#jobs}
  */
  readonly jobs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#keyspace_name DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#keyspace_name}
  */
  readonly keyspaceName?: string;
  /**
  * NewTokens is a map of pod names to their newly-assigned tokens. Required for the move command, ignored otherwise. Pods referenced in this map must exist; any existing pod not referenced in this map will not be moved.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#new_tokens DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#new_tokens}
  */
  readonly newTokens?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#no_snapshot DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#no_snapshot}
  */
  readonly noSnapshot?: boolean | cdktf.IResolvable;
  /**
  * Scrub arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#no_validate DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#no_validate}
  */
  readonly noValidate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#pod_name DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#pod_name}
  */
  readonly podName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#rack DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#rack}
  */
  readonly rack?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#skip_corrupted DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#skip_corrupted}
  */
  readonly skipCorrupted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#source_datacenter DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#source_datacenter}
  */
  readonly sourceDatacenter?: string;
  /**
  * Compaction arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#split_output DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#split_output}
  */
  readonly splitOutput?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#start_token DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#start_token}
  */
  readonly startToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#tables DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#tables}
  */
  readonly tables?: string[];
}

export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgsToTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end_token: cdktf.stringToTerraform(struct!.endToken),
    jobs: cdktf.numberToTerraform(struct!.jobs),
    keyspace_name: cdktf.stringToTerraform(struct!.keyspaceName),
    new_tokens: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.newTokens),
    no_snapshot: cdktf.booleanToTerraform(struct!.noSnapshot),
    no_validate: cdktf.booleanToTerraform(struct!.noValidate),
    pod_name: cdktf.stringToTerraform(struct!.podName),
    rack: cdktf.stringToTerraform(struct!.rack),
    skip_corrupted: cdktf.booleanToTerraform(struct!.skipCorrupted),
    source_datacenter: cdktf.stringToTerraform(struct!.sourceDatacenter),
    split_output: cdktf.booleanToTerraform(struct!.splitOutput),
    start_token: cdktf.stringToTerraform(struct!.startToken),
    tables: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tables),
  }
}


export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgsToHclTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end_token: {
      value: cdktf.stringToHclTerraform(struct!.endToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jobs: {
      value: cdktf.numberToHclTerraform(struct!.jobs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keyspace_name: {
      value: cdktf.stringToHclTerraform(struct!.keyspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_tokens: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.newTokens),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_snapshot: {
      value: cdktf.booleanToHclTerraform(struct!.noSnapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_validate: {
      value: cdktf.booleanToHclTerraform(struct!.noValidate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod_name: {
      value: cdktf.stringToHclTerraform(struct!.podName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rack: {
      value: cdktf.stringToHclTerraform(struct!.rack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_corrupted: {
      value: cdktf.booleanToHclTerraform(struct!.skipCorrupted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_datacenter: {
      value: cdktf.stringToHclTerraform(struct!.sourceDatacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    split_output: {
      value: cdktf.booleanToHclTerraform(struct!.splitOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    start_token: {
      value: cdktf.stringToHclTerraform(struct!.startToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tables: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tables),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.endToken = this._endToken;
    }
    if (this._jobs !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs;
    }
    if (this._keyspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyspaceName = this._keyspaceName;
    }
    if (this._newTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.newTokens = this._newTokens;
    }
    if (this._noSnapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSnapshot = this._noSnapshot;
    }
    if (this._noValidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.noValidate = this._noValidate;
    }
    if (this._podName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podName = this._podName;
    }
    if (this._rack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rack = this._rack;
    }
    if (this._skipCorrupted !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCorrupted = this._skipCorrupted;
    }
    if (this._sourceDatacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDatacenter = this._sourceDatacenter;
    }
    if (this._splitOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitOutput = this._splitOutput;
    }
    if (this._startToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.startToken = this._startToken;
    }
    if (this._tables !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endToken = undefined;
      this._jobs = undefined;
      this._keyspaceName = undefined;
      this._newTokens = undefined;
      this._noSnapshot = undefined;
      this._noValidate = undefined;
      this._podName = undefined;
      this._rack = undefined;
      this._skipCorrupted = undefined;
      this._sourceDatacenter = undefined;
      this._splitOutput = undefined;
      this._startToken = undefined;
      this._tables = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endToken = value.endToken;
      this._jobs = value.jobs;
      this._keyspaceName = value.keyspaceName;
      this._newTokens = value.newTokens;
      this._noSnapshot = value.noSnapshot;
      this._noValidate = value.noValidate;
      this._podName = value.podName;
      this._rack = value.rack;
      this._skipCorrupted = value.skipCorrupted;
      this._sourceDatacenter = value.sourceDatacenter;
      this._splitOutput = value.splitOutput;
      this._startToken = value.startToken;
      this._tables = value.tables;
    }
  }

  // end_token - computed: false, optional: true, required: false
  private _endToken?: string; 
  public get endToken() {
    return this.getStringAttribute('end_token');
  }
  public set endToken(value: string) {
    this._endToken = value;
  }
  public resetEndToken() {
    this._endToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTokenInput() {
    return this._endToken;
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs?: number; 
  public get jobs() {
    return this.getNumberAttribute('jobs');
  }
  public set jobs(value: number) {
    this._jobs = value;
  }
  public resetJobs() {
    this._jobs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs;
  }

  // keyspace_name - computed: false, optional: true, required: false
  private _keyspaceName?: string; 
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  public resetKeyspaceName() {
    this._keyspaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName;
  }

  // new_tokens - computed: false, optional: true, required: false
  private _newTokens?: { [key: string]: string }; 
  public get newTokens() {
    return this.getStringMapAttribute('new_tokens');
  }
  public set newTokens(value: { [key: string]: string }) {
    this._newTokens = value;
  }
  public resetNewTokens() {
    this._newTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTokensInput() {
    return this._newTokens;
  }

  // no_snapshot - computed: false, optional: true, required: false
  private _noSnapshot?: boolean | cdktf.IResolvable; 
  public get noSnapshot() {
    return this.getBooleanAttribute('no_snapshot');
  }
  public set noSnapshot(value: boolean | cdktf.IResolvable) {
    this._noSnapshot = value;
  }
  public resetNoSnapshot() {
    this._noSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSnapshotInput() {
    return this._noSnapshot;
  }

  // no_validate - computed: false, optional: true, required: false
  private _noValidate?: boolean | cdktf.IResolvable; 
  public get noValidate() {
    return this.getBooleanAttribute('no_validate');
  }
  public set noValidate(value: boolean | cdktf.IResolvable) {
    this._noValidate = value;
  }
  public resetNoValidate() {
    this._noValidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noValidateInput() {
    return this._noValidate;
  }

  // pod_name - computed: false, optional: true, required: false
  private _podName?: string; 
  public get podName() {
    return this.getStringAttribute('pod_name');
  }
  public set podName(value: string) {
    this._podName = value;
  }
  public resetPodName() {
    this._podName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podNameInput() {
    return this._podName;
  }

  // rack - computed: false, optional: true, required: false
  private _rack?: string; 
  public get rack() {
    return this.getStringAttribute('rack');
  }
  public set rack(value: string) {
    this._rack = value;
  }
  public resetRack() {
    this._rack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rackInput() {
    return this._rack;
  }

  // skip_corrupted - computed: false, optional: true, required: false
  private _skipCorrupted?: boolean | cdktf.IResolvable; 
  public get skipCorrupted() {
    return this.getBooleanAttribute('skip_corrupted');
  }
  public set skipCorrupted(value: boolean | cdktf.IResolvable) {
    this._skipCorrupted = value;
  }
  public resetSkipCorrupted() {
    this._skipCorrupted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCorruptedInput() {
    return this._skipCorrupted;
  }

  // source_datacenter - computed: false, optional: true, required: false
  private _sourceDatacenter?: string; 
  public get sourceDatacenter() {
    return this.getStringAttribute('source_datacenter');
  }
  public set sourceDatacenter(value: string) {
    this._sourceDatacenter = value;
  }
  public resetSourceDatacenter() {
    this._sourceDatacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatacenterInput() {
    return this._sourceDatacenter;
  }

  // split_output - computed: false, optional: true, required: false
  private _splitOutput?: boolean | cdktf.IResolvable; 
  public get splitOutput() {
    return this.getBooleanAttribute('split_output');
  }
  public set splitOutput(value: boolean | cdktf.IResolvable) {
    this._splitOutput = value;
  }
  public resetSplitOutput() {
    this._splitOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOutputInput() {
    return this._splitOutput;
  }

  // start_token - computed: false, optional: true, required: false
  private _startToken?: string; 
  public get startToken() {
    return this.getStringAttribute('start_token');
  }
  public set startToken(value: string) {
    this._startToken = value;
  }
  public resetStartToken() {
    this._startToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTokenInput() {
    return this._startToken;
  }

  // tables - computed: false, optional: true, required: false
  private _tables?: string[]; 
  public get tables() {
    return this.getListAttribute('tables');
  }
  public set tables(value: string[]) {
    this._tables = value;
  }
  public resetTables() {
    this._tables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables;
  }
}
export interface DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs {
  /**
  * Arguments are additional parameters for the command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#args DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#args}
  */
  readonly args?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs;
  /**
  * Command defines what is run against Cassandra pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#command DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#command}
  */
  readonly command: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#name DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsToTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgsToTerraform(struct!.args),
    command: cdktf.stringToTerraform(struct!.command),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsToHclTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgsToHclTerraform(struct!.args),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs",
    },
    command: {
      value: cdktf.stringToHclTerraform(struct!.command),
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

export class DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args.internalValue = undefined;
      this._command = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args.internalValue = value.args;
      this._command = value.command;
      this._name = value.name;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgsOutputReference(this, "args");
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsArgs) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // command - computed: false, optional: false, required: true
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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

export class DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsList extends cdktf.ComplexList {
  public internalValue? : DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsOutputReference {
    return new DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec {
  /**
  * Specifics if this task can be run concurrently with other active tasks. Valid values are: - 'Allow': allows multiple Tasks to run concurrently on Cassandra cluster - 'Forbid' (default): only a single task is executed at once The 'Allow' property is only valid if all the other active Tasks have 'Allow' as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#concurrency_policy DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#concurrency_policy}
  */
  readonly concurrencyPolicy?: string;
  /**
  * Which datacenter this task is targetting. Note, this must be a datacenter which the current cass-operator can access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#datacenter DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#datacenter}
  */
  readonly datacenter?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter;
  /**
  * Jobs defines the jobs this task will execute (and their order)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#jobs DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#jobs}
  */
  readonly jobs?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs[] | cdktf.IResolvable;
  /**
  * RestartPolicy indicates the behavior n case of failure. Default is Never.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#restart_policy DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#restart_policy}
  */
  readonly restartPolicy?: string;
  /**
  * ScheduledTime indicates the earliest possible time this task is executed. This does not necessarily equal to the time it is actually executed (if other tasks are blocking for example). If not set, the task will be executed immediately.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#scheduled_time DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#scheduled_time}
  */
  readonly scheduledTime?: string;
  /**
  * TTLSecondsAfterFinished defines how long the completed job will kept before being cleaned up. If set to 0 the task will not be cleaned up by the cass-operator. If unset, the default time (86400s) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#ttl_seconds_after_finished DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest#ttl_seconds_after_finished}
  */
  readonly ttlSecondsAfterFinished?: number;
}

export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecToTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    concurrency_policy: cdktf.stringToTerraform(struct!.concurrencyPolicy),
    datacenter: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenterToTerraform(struct!.datacenter),
    jobs: cdktf.listMapper(dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsToTerraform, false)(struct!.jobs),
    restart_policy: cdktf.stringToTerraform(struct!.restartPolicy),
    scheduled_time: cdktf.stringToTerraform(struct!.scheduledTime),
    ttl_seconds_after_finished: cdktf.numberToTerraform(struct!.ttlSecondsAfterFinished),
  }
}


export function dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    concurrency_policy: {
      value: cdktf.stringToHclTerraform(struct!.concurrencyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datacenter: {
      value: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenterToHclTerraform(struct!.datacenter),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter",
    },
    jobs: {
      value: cdktf.listMapperHcl(dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsToHclTerraform, false)(struct!.jobs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsList",
    },
    restart_policy: {
      value: cdktf.stringToHclTerraform(struct!.restartPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scheduled_time: {
      value: cdktf.stringToHclTerraform(struct!.scheduledTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ttl_seconds_after_finished: {
      value: cdktf.numberToHclTerraform(struct!.ttlSecondsAfterFinished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._concurrencyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrencyPolicy = this._concurrencyPolicy;
    }
    if (this._datacenter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter?.internalValue;
    }
    if (this._jobs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobs = this._jobs?.internalValue;
    }
    if (this._restartPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.restartPolicy = this._restartPolicy;
    }
    if (this._scheduledTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduledTime = this._scheduledTime;
    }
    if (this._ttlSecondsAfterFinished !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSecondsAfterFinished = this._ttlSecondsAfterFinished;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._concurrencyPolicy = undefined;
      this._datacenter.internalValue = undefined;
      this._jobs.internalValue = undefined;
      this._restartPolicy = undefined;
      this._scheduledTime = undefined;
      this._ttlSecondsAfterFinished = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._concurrencyPolicy = value.concurrencyPolicy;
      this._datacenter.internalValue = value.datacenter;
      this._jobs.internalValue = value.jobs;
      this._restartPolicy = value.restartPolicy;
      this._scheduledTime = value.scheduledTime;
      this._ttlSecondsAfterFinished = value.ttlSecondsAfterFinished;
    }
  }

  // concurrency_policy - computed: false, optional: true, required: false
  private _concurrencyPolicy?: string; 
  public get concurrencyPolicy() {
    return this.getStringAttribute('concurrency_policy');
  }
  public set concurrencyPolicy(value: string) {
    this._concurrencyPolicy = value;
  }
  public resetConcurrencyPolicy() {
    this._concurrencyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrencyPolicyInput() {
    return this._concurrencyPolicy;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter = new DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenterOutputReference(this, "datacenter");
  public get datacenter() {
    return this._datacenter;
  }
  public putDatacenter(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecDatacenter) {
    this._datacenter.internalValue = value;
  }
  public resetDatacenter() {
    this._datacenter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter.internalValue;
  }

  // jobs - computed: false, optional: true, required: false
  private _jobs = new DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobsList(this, "jobs", false);
  public get jobs() {
    return this._jobs;
  }
  public putJobs(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecJobs[] | cdktf.IResolvable) {
    this._jobs.internalValue = value;
  }
  public resetJobs() {
    this._jobs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobsInput() {
    return this._jobs.internalValue;
  }

  // restart_policy - computed: false, optional: true, required: false
  private _restartPolicy?: string; 
  public get restartPolicy() {
    return this.getStringAttribute('restart_policy');
  }
  public set restartPolicy(value: string) {
    this._restartPolicy = value;
  }
  public resetRestartPolicy() {
    this._restartPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartPolicyInput() {
    return this._restartPolicy;
  }

  // scheduled_time - computed: false, optional: true, required: false
  private _scheduledTime?: string; 
  public get scheduledTime() {
    return this.getStringAttribute('scheduled_time');
  }
  public set scheduledTime(value: string) {
    this._scheduledTime = value;
  }
  public resetScheduledTime() {
    this._scheduledTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledTimeInput() {
    return this._scheduledTime;
  }

  // ttl_seconds_after_finished - computed: false, optional: true, required: false
  private _ttlSecondsAfterFinished?: number; 
  public get ttlSecondsAfterFinished() {
    return this.getNumberAttribute('ttl_seconds_after_finished');
  }
  public set ttlSecondsAfterFinished(value: number) {
    this._ttlSecondsAfterFinished = value;
  }
  public resetTtlSecondsAfterFinished() {
    this._ttlSecondsAfterFinished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsAfterFinishedInput() {
    return this._ttlSecondsAfterFinished;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest k8s_control_k8ssandra_io_cassandra_task_v1alpha1_manifest}
*/
export class DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_control_k8ssandra_io_cassandra_task_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SControlK8SsandraIoCassandraTaskV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_control_k8ssandra_io_cassandra_task_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/control_k8ssandra_io_cassandra_task_v1alpha1_manifest k8s_control_k8ssandra_io_cassandra_task_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_control_k8ssandra_io_cassandra_task_v1alpha1_manifest',
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
  private _metadata = new DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec) {
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
      metadata: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SControlK8SsandraIoCassandraTaskV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
