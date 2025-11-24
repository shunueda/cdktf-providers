// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SClusterXK8SIoMachineV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#metadata DataK8SClusterXK8SIoMachineV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata;
  /**
  * MachineSpec defines the desired state of Machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#spec DataK8SClusterXK8SIoMachineV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec;
}
export interface DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#annotations DataK8SClusterXK8SIoMachineV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#labels DataK8SClusterXK8SIoMachineV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#name DataK8SClusterXK8SIoMachineV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#namespace DataK8SClusterXK8SIoMachineV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SClusterXK8SIoMachineV1Beta1ManifestMetadataToTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachineV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#api_version DataK8SClusterXK8SIoMachineV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#field_path DataK8SClusterXK8SIoMachineV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#kind DataK8SClusterXK8SIoMachineV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#name DataK8SClusterXK8SIoMachineV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#namespace DataK8SClusterXK8SIoMachineV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#resource_version DataK8SClusterXK8SIoMachineV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#uid DataK8SClusterXK8SIoMachineV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRefToTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRefToHclTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap {
  /**
  * ConfigRef is a reference to a bootstrap provider-specific resource that holds configuration details. The reference is optional to allow users/operators to specify Bootstrap.DataSecretName without the need of a controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#config_ref DataK8SClusterXK8SIoMachineV1Beta1Manifest#config_ref}
  */
  readonly configRef?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef;
  /**
  * DataSecretName is the name of the secret that stores the bootstrap data script. If nil, the Machine should remain in the Pending state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#data_secret_name DataK8SClusterXK8SIoMachineV1Beta1Manifest#data_secret_name}
  */
  readonly dataSecretName?: string;
}

export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapToTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_ref: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRefToTerraform(struct!.configRef),
    data_secret_name: cdktf.stringToTerraform(struct!.dataSecretName),
  }
}


export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapToHclTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_ref: {
      value: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRefToHclTerraform(struct!.configRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef",
    },
    data_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.dataSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configRef = this._configRef?.internalValue;
    }
    if (this._dataSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSecretName = this._dataSecretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configRef.internalValue = undefined;
      this._dataSecretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configRef.internalValue = value.configRef;
      this._dataSecretName = value.dataSecretName;
    }
  }

  // config_ref - computed: false, optional: true, required: false
  private _configRef = new DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRefOutputReference(this, "config_ref");
  public get configRef() {
    return this._configRef;
  }
  public putConfigRef(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapConfigRef) {
    this._configRef.internalValue = value;
  }
  public resetConfigRef() {
    this._configRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configRefInput() {
    return this._configRef.internalValue;
  }

  // data_secret_name - computed: false, optional: true, required: false
  private _dataSecretName?: string; 
  public get dataSecretName() {
    return this.getStringAttribute('data_secret_name');
  }
  public set dataSecretName(value: string) {
    this._dataSecretName = value;
  }
  public resetDataSecretName() {
    this._dataSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSecretNameInput() {
    return this._dataSecretName;
  }
}
export interface DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#api_version DataK8SClusterXK8SIoMachineV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If referring to a piece of an object instead of an entire object, this string should contain a valid JSON/Go field access statement, such as desiredState.manifest.containers[2]. For example, if the object reference is to a container within a pod, this would take on a value like: 'spec.containers{name}' (where 'name' refers to the name of the container that triggered the event) or if no container name is specified 'spec.containers[2]' (container with index 2 in this pod). This syntax is chosen only to have some well-defined way of referencing a part of an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#field_path DataK8SClusterXK8SIoMachineV1Beta1Manifest#field_path}
  */
  readonly fieldPath?: string;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#kind DataK8SClusterXK8SIoMachineV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#name DataK8SClusterXK8SIoMachineV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#namespace DataK8SClusterXK8SIoMachineV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Specific resourceVersion to which this reference is made, if any. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#concurrency-control-and-consistency
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#resource_version DataK8SClusterXK8SIoMachineV1Beta1Manifest#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#uid DataK8SClusterXK8SIoMachineV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRefToTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
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


export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRefToHclTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable): any {
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

export class DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates {
  /**
  * conditionType refers to a positive polarity condition (status true means good) with matching type in the Machine's condition list. If the conditions doesn't exist, it will be treated as unknown. Note: Both Cluster API conditions or conditions added by 3rd party controllers can be used as readiness gates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#condition_type DataK8SClusterXK8SIoMachineV1Beta1Manifest#condition_type}
  */
  readonly conditionType: string;
}

export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesToTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_type: cdktf.stringToTerraform(struct!.conditionType),
  }
}


export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesToHclTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_type: {
      value: cdktf.stringToHclTerraform(struct!.conditionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionType = this._conditionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionType = value.conditionType;
    }
  }

  // condition_type - computed: false, optional: false, required: true
  private _conditionType?: string; 
  public get conditionType() {
    return this.getStringAttribute('condition_type');
  }
  public set conditionType(value: string) {
    this._conditionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionTypeInput() {
    return this._conditionType;
  }
}

export class DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesOutputReference {
    return new DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec {
  /**
  * Bootstrap is a reference to a local struct which encapsulates fields to configure the Machine’s bootstrapping mechanism.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#bootstrap DataK8SClusterXK8SIoMachineV1Beta1Manifest#bootstrap}
  */
  readonly bootstrap: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap;
  /**
  * ClusterName is the name of the Cluster this object belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#cluster_name DataK8SClusterXK8SIoMachineV1Beta1Manifest#cluster_name}
  */
  readonly clusterName: string;
  /**
  * FailureDomain is the failure domain the machine will be created in. Must match a key in the FailureDomains map stored on the cluster object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#failure_domain DataK8SClusterXK8SIoMachineV1Beta1Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * InfrastructureRef is a required reference to a custom resource offered by an infrastructure provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#infrastructure_ref DataK8SClusterXK8SIoMachineV1Beta1Manifest#infrastructure_ref}
  */
  readonly infrastructureRef: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef;
  /**
  * NodeDeletionTimeout defines how long the controller will attempt to delete the Node that the Machine hosts after the Machine is marked for deletion. A duration of 0 will retry deletion indefinitely. Defaults to 10 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#node_deletion_timeout DataK8SClusterXK8SIoMachineV1Beta1Manifest#node_deletion_timeout}
  */
  readonly nodeDeletionTimeout?: string;
  /**
  * NodeDrainTimeout is the total amount of time that the controller will spend on draining a node. The default value is 0, meaning that the node can be drained without any time limitations. NOTE: NodeDrainTimeout is different from 'kubectl drain --timeout'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#node_drain_timeout DataK8SClusterXK8SIoMachineV1Beta1Manifest#node_drain_timeout}
  */
  readonly nodeDrainTimeout?: string;
  /**
  * NodeVolumeDetachTimeout is the total amount of time that the controller will spend on waiting for all volumes to be detached. The default value is 0, meaning that the volumes can be detached without any time limitations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#node_volume_detach_timeout DataK8SClusterXK8SIoMachineV1Beta1Manifest#node_volume_detach_timeout}
  */
  readonly nodeVolumeDetachTimeout?: string;
  /**
  * ProviderID is the identification ID of the machine provided by the provider. This field must match the provider ID as seen on the node object corresponding to this machine. This field is required by higher level consumers of cluster-api. Example use case is cluster autoscaler with cluster-api as provider. Clean-up logic in the autoscaler compares machines to nodes to find out machines at provider which could not get registered as Kubernetes nodes. With cluster-api as a generic out-of-tree provider for autoscaler, this field is required by autoscaler to be able to have a provider view of the list of machines. Another list of nodes is queried from the k8s apiserver and then a comparison is done to find out unregistered machines and are marked for delete. This field will be set by the actuators and consumed by higher level entities like autoscaler that will be interfacing with cluster-api as generic provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#provider_id DataK8SClusterXK8SIoMachineV1Beta1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * readinessGates specifies additional conditions to include when evaluating Machine Ready condition. This field can be used e.g. by Cluster API control plane providers to extend the semantic of the Ready condition for the Machine they control, like the kubeadm control provider adding ReadinessGates for the APIServerPodHealthy, SchedulerPodHealthy conditions, etc. Another example are external controllers, e.g. responsible to install special software/hardware on the Machines; they can include the status of those components with a new condition and add this condition to ReadinessGates. NOTE: this field is considered only for computing v1beta2 conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#readiness_gates DataK8SClusterXK8SIoMachineV1Beta1Manifest#readiness_gates}
  */
  readonly readinessGates?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable;
  /**
  * Version defines the desired Kubernetes version. This field is meant to be optionally used by bootstrap providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#version DataK8SClusterXK8SIoMachineV1Beta1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecToTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bootstrap: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapToTerraform(struct!.bootstrap),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    infrastructure_ref: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRefToTerraform(struct!.infrastructureRef),
    node_deletion_timeout: cdktf.stringToTerraform(struct!.nodeDeletionTimeout),
    node_drain_timeout: cdktf.stringToTerraform(struct!.nodeDrainTimeout),
    node_volume_detach_timeout: cdktf.stringToTerraform(struct!.nodeVolumeDetachTimeout),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    readiness_gates: cdktf.listMapper(dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesToTerraform, false)(struct!.readinessGates),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bootstrap: {
      value: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapToHclTerraform(struct!.bootstrap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
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
    infrastructure_ref: {
      value: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRefToHclTerraform(struct!.infrastructureRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef",
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
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    readiness_gates: {
      value: cdktf.listMapperHcl(dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesToHclTerraform, false)(struct!.readinessGates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesList",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootstrap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrap = this._bootstrap?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._infrastructureRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infrastructureRef = this._infrastructureRef?.internalValue;
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
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._readinessGates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessGates = this._readinessGates?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootstrap.internalValue = undefined;
      this._clusterName = undefined;
      this._failureDomain = undefined;
      this._infrastructureRef.internalValue = undefined;
      this._nodeDeletionTimeout = undefined;
      this._nodeDrainTimeout = undefined;
      this._nodeVolumeDetachTimeout = undefined;
      this._providerId = undefined;
      this._readinessGates.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootstrap.internalValue = value.bootstrap;
      this._clusterName = value.clusterName;
      this._failureDomain = value.failureDomain;
      this._infrastructureRef.internalValue = value.infrastructureRef;
      this._nodeDeletionTimeout = value.nodeDeletionTimeout;
      this._nodeDrainTimeout = value.nodeDrainTimeout;
      this._nodeVolumeDetachTimeout = value.nodeVolumeDetachTimeout;
      this._providerId = value.providerId;
      this._readinessGates.internalValue = value.readinessGates;
      this._version = value.version;
    }
  }

  // bootstrap - computed: false, optional: false, required: true
  private _bootstrap = new DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrapOutputReference(this, "bootstrap");
  public get bootstrap() {
    return this._bootstrap;
  }
  public putBootstrap(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecBootstrap) {
    this._bootstrap.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap.internalValue;
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

  // infrastructure_ref - computed: false, optional: false, required: true
  private _infrastructureRef = new DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRefOutputReference(this, "infrastructure_ref");
  public get infrastructureRef() {
    return this._infrastructureRef;
  }
  public putInfrastructureRef(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecInfrastructureRef) {
    this._infrastructureRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infrastructureRefInput() {
    return this._infrastructureRef.internalValue;
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

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // readiness_gates - computed: false, optional: true, required: false
  private _readinessGates = new DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGatesList(this, "readiness_gates", false);
  public get readinessGates() {
    return this._readinessGates;
  }
  public putReadinessGates(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecReadinessGates[] | cdktf.IResolvable) {
    this._readinessGates.internalValue = value;
  }
  public resetReadinessGates() {
    this._readinessGates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessGatesInput() {
    return this._readinessGates.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest k8s_cluster_x_k8s_io_machine_v1beta1_manifest}
*/
export class DataK8SClusterXK8SIoMachineV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_cluster_x_k8s_io_machine_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SClusterXK8SIoMachineV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SClusterXK8SIoMachineV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SClusterXK8SIoMachineV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SClusterXK8SIoMachineV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_cluster_x_k8s_io_machine_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/cluster_x_k8s_io_machine_v1beta1_manifest k8s_cluster_x_k8s_io_machine_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SClusterXK8SIoMachineV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SClusterXK8SIoMachineV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_cluster_x_k8s_io_machine_v1beta1_manifest',
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
  private _metadata = new DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SClusterXK8SIoMachineV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec) {
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
      metadata: dataK8SClusterXK8SIoMachineV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SClusterXK8SIoMachineV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoMachineV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SClusterXK8SIoMachineV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SClusterXK8SIoMachineV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
