// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata;
  /**
  * VSphereMachineTemplateSpec defines the desired state of VSphereMachineTemplate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#namespace DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#api_version DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#api_version}
  */
  readonly apiVersion: string;
  /**
  * If true, AND if the owner has the 'foregroundDeletion' finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. See https://kubernetes.io/docs/concepts/architecture/garbage-collection/#foreground-deletion for how the garbage collector interacts with this field and enforces the foreground deletion. Defaults to false. To set this field, a user needs 'delete' permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#block_owner_deletion DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#block_owner_deletion}
  */
  readonly blockOwnerDeletion?: boolean | cdktf.IResolvable;
  /**
  * If true, this reference points to the managing controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#controller DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#controller}
  */
  readonly controller?: boolean | cdktf.IResolvable;
  /**
  * Kind of the referent. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#types-kinds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#kind DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#name}
  */
  readonly name: string;
  /**
  * UID of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names#uids
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#uid DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#uid}
  */
  readonly uid: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    block_owner_deletion: cdktf.booleanToTerraform(struct!.blockOwnerDeletion),
    controller: cdktf.booleanToTerraform(struct!.controller),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable): any {
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
    block_owner_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.blockOwnerDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    controller: {
      value: cdktf.booleanToHclTerraform(struct!.controller),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._blockOwnerDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockOwnerDeletion = this._blockOwnerDeletion;
    }
    if (this._controller !== undefined) {
      hasAnyValues = true;
      internalValueResult.controller = this._controller;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._blockOwnerDeletion = undefined;
      this._controller = undefined;
      this._kind = undefined;
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
      this._apiVersion = value.apiVersion;
      this._blockOwnerDeletion = value.blockOwnerDeletion;
      this._controller = value.controller;
      this._kind = value.kind;
      this._name = value.name;
      this._uid = value.uid;
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

  // block_owner_deletion - computed: false, optional: true, required: false
  private _blockOwnerDeletion?: boolean | cdktf.IResolvable; 
  public get blockOwnerDeletion() {
    return this.getBooleanAttribute('block_owner_deletion');
  }
  public set blockOwnerDeletion(value: boolean | cdktf.IResolvable) {
    this._blockOwnerDeletion = value;
  }
  public resetBlockOwnerDeletion() {
    this._blockOwnerDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockOwnerDeletionInput() {
    return this._blockOwnerDeletion;
  }

  // controller - computed: false, optional: true, required: false
  private _controller?: boolean | cdktf.IResolvable; 
  public get controller() {
    return this.getBooleanAttribute('controller');
  }
  public set controller(value: boolean | cdktf.IResolvable) {
    this._controller = value;
  }
  public resetController() {
    this._controller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerInput() {
    return this._controller;
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

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#annotations DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server. If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header). Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#idempotency Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#generate_name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#generate_name}
  */
  readonly generateName?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#labels DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the 'default' namespace, but 'default' is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty. Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#namespace DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * List of objects depended by this object. If ALL objects in the list have been deleted, this object will be garbage collected. If this object is managed by a controller, then an entry in this list will point to this controller, with the controller field set to true. There cannot be more than one managing controller. Deprecated: This field has no function and is going to be removed in a next release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#owner_references DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#owner_references}
  */
  readonly ownerReferences?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    owner_references: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToTerraform, false)(struct!.ownerReferences),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable): any {
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
    generate_name: {
      value: cdktf.stringToHclTerraform(struct!.generateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    owner_references: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesToHclTerraform, false)(struct!.ownerReferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
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
    if (this._ownerReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerReferences = this._ownerReferences?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._generateName = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._ownerReferences.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._generateName = value.generateName;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
      this._ownerReferences.internalValue = value.ownerReferences;
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

  // generate_name - computed: false, optional: true, required: false
  private _generateName?: string; 
  public get generateName() {
    return this.getStringAttribute('generate_name');
  }
  public set generateName(value: string) {
    this._generateName = value;
  }
  public resetGenerateName() {
    this._generateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateNameInput() {
    return this._generateName;
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

  // owner_references - computed: false, optional: true, required: false
  private _ownerReferences = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferencesList(this, "owner_references", false);
  public get ownerReferences() {
    return this._ownerReferences;
  }
  public putOwnerReferences(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOwnerReferences[] | cdktf.IResolvable) {
    this._ownerReferences.internalValue = value;
  }
  public resetOwnerReferences() {
    this._ownerReferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerReferencesInput() {
    return this._ownerReferences.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes {
  /**
  * Metric is the weight/priority of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#metric DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#metric}
  */
  readonly metric: number;
  /**
  * To is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#to DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#to}
  */
  readonly to: string;
  /**
  * Via is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#via DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#via}
  */
  readonly via: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    to: cdktf.stringToTerraform(struct!.to),
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._to = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._to = value.to;
      this._via = value.via;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices {
  /**
  * DeviceName may be used to explicitly assign a name to the network device as it exists in the guest operating system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#device_name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#device_name}
  */
  readonly deviceName?: string;
  /**
  * DHCP4 is a flag that indicates whether or not to use DHCP for IPv4 on this device. If true then IPAddrs should not contain any IPv4 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#dhcp4 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#dhcp4}
  */
  readonly dhcp4?: boolean | cdktf.IResolvable;
  /**
  * DHCP6 is a flag that indicates whether or not to use DHCP for IPv6 on this device. If true then IPAddrs should not contain any IPv6 addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#dhcp6 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#dhcp6}
  */
  readonly dhcp6?: boolean | cdktf.IResolvable;
  /**
  * Gateway4 is the IPv4 gateway used by this device. Required when DHCP4 is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#gateway4 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#gateway4}
  */
  readonly gateway4?: string;
  /**
  * Gateway4 is the IPv4 gateway used by this device. Required when DHCP6 is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#gateway6 DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#gateway6}
  */
  readonly gateway6?: string;
  /**
  * IPAddrs is a list of one or more IPv4 and/or IPv6 addresses to assign to this device. IP addresses must also specify the segment length in CIDR notation. Required when DHCP4 and DHCP6 are both false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#ip_addrs DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#ip_addrs}
  */
  readonly ipAddrs?: string[];
  /**
  * MACAddr is the MAC address used by this device. It is generally a good idea to omit this field and allow a MAC address to be generated. Please note that this value must use the VMware OUI to work with the in-tree vSphere cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#mac_addr DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * MTU is the device’s Maximum Transmission Unit size in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#mtu DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#mtu}
  */
  readonly mtu?: number;
  /**
  * Nameservers is a list of IPv4 and/or IPv6 addresses used as DNS nameservers. Please note that Linux allows only three nameservers (https://linux.die.net/man/5/resolv.conf).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#nameservers DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#nameservers}
  */
  readonly nameservers?: string[];
  /**
  * NetworkName is the name of the vSphere network to which the device will be connected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#network_name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#network_name}
  */
  readonly networkName: string;
  /**
  * Routes is a list of optional, static routes applied to the device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#routes DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#routes}
  */
  readonly routes?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes[] | cdktf.IResolvable;
  /**
  * SearchDomains is a list of search domains used when resolving IP addresses with DNS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#search_domains DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#search_domains}
  */
  readonly searchDomains?: string[];
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    dhcp4: cdktf.booleanToTerraform(struct!.dhcp4),
    dhcp6: cdktf.booleanToTerraform(struct!.dhcp6),
    gateway4: cdktf.stringToTerraform(struct!.gateway4),
    gateway6: cdktf.stringToTerraform(struct!.gateway6),
    ip_addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipAddrs),
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    nameservers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameservers),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    routes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesToTerraform, false)(struct!.routes),
    search_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchDomains),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp4: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp4),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dhcp6: {
      value: cdktf.booleanToHclTerraform(struct!.dhcp6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gateway4: {
      value: cdktf.stringToHclTerraform(struct!.gateway4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gateway6: {
      value: cdktf.stringToHclTerraform(struct!.gateway6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipAddrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nameservers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameservers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesList",
    },
    search_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchDomains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._dhcp4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp4 = this._dhcp4;
    }
    if (this._dhcp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcp6 = this._dhcp6;
    }
    if (this._gateway4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway4 = this._gateway4;
    }
    if (this._gateway6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.gateway6 = this._gateway6;
    }
    if (this._ipAddrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddrs = this._ipAddrs;
    }
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._nameservers !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameservers = this._nameservers;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    if (this._searchDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchDomains = this._searchDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deviceName = undefined;
      this._dhcp4 = undefined;
      this._dhcp6 = undefined;
      this._gateway4 = undefined;
      this._gateway6 = undefined;
      this._ipAddrs = undefined;
      this._macAddr = undefined;
      this._mtu = undefined;
      this._nameservers = undefined;
      this._networkName = undefined;
      this._routes.internalValue = undefined;
      this._searchDomains = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deviceName = value.deviceName;
      this._dhcp4 = value.dhcp4;
      this._dhcp6 = value.dhcp6;
      this._gateway4 = value.gateway4;
      this._gateway6 = value.gateway6;
      this._ipAddrs = value.ipAddrs;
      this._macAddr = value.macAddr;
      this._mtu = value.mtu;
      this._nameservers = value.nameservers;
      this._networkName = value.networkName;
      this._routes.internalValue = value.routes;
      this._searchDomains = value.searchDomains;
    }
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // dhcp4 - computed: false, optional: true, required: false
  private _dhcp4?: boolean | cdktf.IResolvable; 
  public get dhcp4() {
    return this.getBooleanAttribute('dhcp4');
  }
  public set dhcp4(value: boolean | cdktf.IResolvable) {
    this._dhcp4 = value;
  }
  public resetDhcp4() {
    this._dhcp4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp4Input() {
    return this._dhcp4;
  }

  // dhcp6 - computed: false, optional: true, required: false
  private _dhcp6?: boolean | cdktf.IResolvable; 
  public get dhcp6() {
    return this.getBooleanAttribute('dhcp6');
  }
  public set dhcp6(value: boolean | cdktf.IResolvable) {
    this._dhcp6 = value;
  }
  public resetDhcp6() {
    this._dhcp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6Input() {
    return this._dhcp6;
  }

  // gateway4 - computed: false, optional: true, required: false
  private _gateway4?: string; 
  public get gateway4() {
    return this.getStringAttribute('gateway4');
  }
  public set gateway4(value: string) {
    this._gateway4 = value;
  }
  public resetGateway4() {
    this._gateway4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway4Input() {
    return this._gateway4;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // ip_addrs - computed: false, optional: true, required: false
  private _ipAddrs?: string[]; 
  public get ipAddrs() {
    return this.getListAttribute('ip_addrs');
  }
  public set ipAddrs(value: string[]) {
    this._ipAddrs = value;
  }
  public resetIpAddrs() {
    this._ipAddrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrsInput() {
    return this._ipAddrs;
  }

  // mac_addr - computed: false, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // nameservers - computed: false, optional: true, required: false
  private _nameservers?: string[]; 
  public get nameservers() {
    return this.getListAttribute('nameservers');
  }
  public set nameservers(value: string[]) {
    this._nameservers = value;
  }
  public resetNameservers() {
    this._nameservers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameserversInput() {
    return this._nameservers;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesRoutes[] | cdktf.IResolvable) {
    this._routes.internalValue = value;
  }
  public resetRoutes() {
    this._routes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routesInput() {
    return this._routes.internalValue;
  }

  // search_domains - computed: false, optional: true, required: false
  private _searchDomains?: string[]; 
  public get searchDomains() {
    return this.getListAttribute('search_domains');
  }
  public set searchDomains(value: string[]) {
    this._searchDomains = value;
  }
  public resetSearchDomains() {
    this._searchDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchDomainsInput() {
    return this._searchDomains;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes {
  /**
  * Metric is the weight/priority of the route.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#metric DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#metric}
  */
  readonly metric: number;
  /**
  * To is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#to DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#to}
  */
  readonly to: string;
  /**
  * Via is an IPv4 or IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#via DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#via}
  */
  readonly via: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metric: cdktf.numberToTerraform(struct!.metric),
    to: cdktf.stringToTerraform(struct!.to),
    via: cdktf.stringToTerraform(struct!.via),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metric: {
      value: cdktf.numberToHclTerraform(struct!.metric),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    to: {
      value: cdktf.stringToHclTerraform(struct!.to),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    via: {
      value: cdktf.stringToHclTerraform(struct!.via),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metric !== undefined) {
      hasAnyValues = true;
      internalValueResult.metric = this._metric;
    }
    if (this._to !== undefined) {
      hasAnyValues = true;
      internalValueResult.to = this._to;
    }
    if (this._via !== undefined) {
      hasAnyValues = true;
      internalValueResult.via = this._via;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metric = undefined;
      this._to = undefined;
      this._via = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metric = value.metric;
      this._to = value.to;
      this._via = value.via;
    }
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: number; 
  public get metric() {
    return this.getNumberAttribute('metric');
  }
  public set metric(value: number) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric;
  }

  // to - computed: false, optional: false, required: true
  private _to?: string; 
  public get to() {
    return this.getStringAttribute('to');
  }
  public set to(value: string) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // via - computed: false, optional: false, required: true
  private _via?: string; 
  public get via() {
    return this.getStringAttribute('via');
  }
  public set via(value: string) {
    this._via = value;
  }
  // Temporarily expose input value. Use with caution.
  public get viaInput() {
    return this._via;
  }
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork {
  /**
  * Devices is the list of network devices used by the virtual machine. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#devices DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#devices}
  */
  readonly devices: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices[] | cdktf.IResolvable;
  /**
  * PreferredAPIServeCIDR is the preferred CIDR for the Kubernetes API server endpoint on this machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#preferred_api_server_cidr DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#preferred_api_server_cidr}
  */
  readonly preferredApiServerCidr?: string;
  /**
  * Routes is a list of optional, static routes applied to the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#routes DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#routes}
  */
  readonly routes?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes[] | cdktf.IResolvable;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devices: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesToTerraform, false)(struct!.devices),
    preferred_api_server_cidr: cdktf.stringToTerraform(struct!.preferredApiServerCidr),
    routes: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesToTerraform, false)(struct!.routes),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devices: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesToHclTerraform, false)(struct!.devices),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesList",
    },
    preferred_api_server_cidr: {
      value: cdktf.stringToHclTerraform(struct!.preferredApiServerCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routes: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesToHclTerraform, false)(struct!.routes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devices = this._devices?.internalValue;
    }
    if (this._preferredApiServerCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredApiServerCidr = this._preferredApiServerCidr;
    }
    if (this._routes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routes = this._routes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devices.internalValue = undefined;
      this._preferredApiServerCidr = undefined;
      this._routes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devices.internalValue = value.devices;
      this._preferredApiServerCidr = value.preferredApiServerCidr;
      this._routes.internalValue = value.routes;
    }
  }

  // devices - computed: false, optional: false, required: true
  private _devices = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }
  public putDevices(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkDevices[] | cdktf.IResolvable) {
    this._devices.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get devicesInput() {
    return this._devices.internalValue;
  }

  // preferred_api_server_cidr - computed: false, optional: true, required: false
  private _preferredApiServerCidr?: string; 
  public get preferredApiServerCidr() {
    return this.getStringAttribute('preferred_api_server_cidr');
  }
  public set preferredApiServerCidr(value: string) {
    this._preferredApiServerCidr = value;
  }
  public resetPreferredApiServerCidr() {
    this._preferredApiServerCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredApiServerCidrInput() {
    return this._preferredApiServerCidr;
  }

  // routes - computed: false, optional: true, required: false
  private _routes = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutesList(this, "routes", false);
  public get routes() {
    return this._routes;
  }
  public putRoutes(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkRoutes[] | cdktf.IResolvable) {
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
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec {
  /**
  * CloneMode specifies the type of clone operation. The LinkedClone mode is only support for templates that have at least one snapshot. If the template has no snapshots, then CloneMode defaults to FullClone. When LinkedClone mode is enabled the DiskGiB field is ignored as it is not possible to expand disks of linked clones. Defaults to LinkedClone, but fails gracefully to FullClone if the source of the clone operation has no snapshots.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#clone_mode DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#clone_mode}
  */
  readonly cloneMode?: string;
  /**
  * CustomVMXKeys is a dictionary of advanced VMX options that can be set on VM Defaults to empty map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#custom_vmx_keys DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#custom_vmx_keys}
  */
  readonly customVmxKeys?: { [key: string]: string };
  /**
  * Datacenter is the name or inventory path of the datacenter in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#datacenter DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#datacenter}
  */
  readonly datacenter?: string;
  /**
  * Datastore is the name or inventory path of the datastore in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#datastore DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#datastore}
  */
  readonly datastore?: string;
  /**
  * DiskGiB is the size of a virtual machine's disk, in GiB. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#disk_gi_b DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#disk_gi_b}
  */
  readonly diskGiB?: number;
  /**
  * FailureDomain is the failure domain unique identifier this Machine should be attached to, as defined in Cluster API. For this infrastructure provider, the name is equivalent to the name of the VSphereDeploymentZone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#failure_domain DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#failure_domain}
  */
  readonly failureDomain?: string;
  /**
  * Folder is the name or inventory path of the folder in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#folder DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#folder}
  */
  readonly folder?: string;
  /**
  * MemoryMiB is the size of a virtual machine's memory, in MiB. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#memory_mi_b DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#memory_mi_b}
  */
  readonly memoryMiB?: number;
  /**
  * Network is the network configuration for this machine's VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#network DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#network}
  */
  readonly network: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork;
  /**
  * NumCPUs is the number of cores among which to distribute CPUs in this virtual machine. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#num_cores_per_socket DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#num_cores_per_socket}
  */
  readonly numCoresPerSocket?: number;
  /**
  * NumCPUs is the number of virtual processors in a virtual machine. Defaults to the eponymous property value in the template from which the virtual machine is cloned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#num_cp_us DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#num_cp_us}
  */
  readonly numCpUs?: number;
  /**
  * ProviderID is the virtual machine's BIOS UUID formated as vsphere://12345678-1234-1234-1234-123456789abc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#provider_id DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * ResourcePool is the name or inventory path of the resource pool in which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#resource_pool DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#resource_pool}
  */
  readonly resourcePool?: string;
  /**
  * Server is the IP address or FQDN of the vSphere server on which the virtual machine is created/located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#server DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#server}
  */
  readonly server?: string;
  /**
  * Snapshot is the name of the snapshot from which to create a linked clone. This field is ignored if LinkedClone is not enabled. Defaults to the source's current snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#snapshot DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#snapshot}
  */
  readonly snapshot?: string;
  /**
  * StoragePolicyName of the storage policy to use with this Virtual Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#storage_policy_name DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#storage_policy_name}
  */
  readonly storagePolicyName?: string;
  /**
  * Template is the name or inventory path of the template used to clone the virtual machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#template DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#template}
  */
  readonly template: string;
  /**
  * Thumbprint is the colon-separated SHA-1 checksum of the given vCenter server's host certificate When this is set to empty, this VirtualMachine would be created without TLS certificate validation of the communication between Cluster API Provider vSphere and the VMware vCenter server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#thumbprint DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#thumbprint}
  */
  readonly thumbprint?: string;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clone_mode: cdktf.stringToTerraform(struct!.cloneMode),
    custom_vmx_keys: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.customVmxKeys),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    disk_gi_b: cdktf.numberToTerraform(struct!.diskGiB),
    failure_domain: cdktf.stringToTerraform(struct!.failureDomain),
    folder: cdktf.stringToTerraform(struct!.folder),
    memory_mi_b: cdktf.numberToTerraform(struct!.memoryMiB),
    network: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkToTerraform(struct!.network),
    num_cores_per_socket: cdktf.numberToTerraform(struct!.numCoresPerSocket),
    num_cp_us: cdktf.numberToTerraform(struct!.numCpUs),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    resource_pool: cdktf.stringToTerraform(struct!.resourcePool),
    server: cdktf.stringToTerraform(struct!.server),
    snapshot: cdktf.stringToTerraform(struct!.snapshot),
    storage_policy_name: cdktf.stringToTerraform(struct!.storagePolicyName),
    template: cdktf.stringToTerraform(struct!.template),
    thumbprint: cdktf.stringToTerraform(struct!.thumbprint),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clone_mode: {
      value: cdktf.stringToHclTerraform(struct!.cloneMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_vmx_keys: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.customVmxKeys),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.diskGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failure_domain: {
      value: cdktf.stringToHclTerraform(struct!.failureDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_mi_b: {
      value: cdktf.numberToHclTerraform(struct!.memoryMiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkToHclTerraform(struct!.network),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork",
    },
    num_cores_per_socket: {
      value: cdktf.numberToHclTerraform(struct!.numCoresPerSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_cp_us: {
      value: cdktf.numberToHclTerraform(struct!.numCpUs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_pool: {
      value: cdktf.stringToHclTerraform(struct!.resourcePool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snapshot: {
      value: cdktf.stringToHclTerraform(struct!.snapshot),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.storagePolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template: {
      value: cdktf.stringToHclTerraform(struct!.template),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    thumbprint: {
      value: cdktf.stringToHclTerraform(struct!.thumbprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloneMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneMode = this._cloneMode;
    }
    if (this._customVmxKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.customVmxKeys = this._customVmxKeys;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._diskGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskGiB = this._diskGiB;
    }
    if (this._failureDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureDomain = this._failureDomain;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._memoryMiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryMiB = this._memoryMiB;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    if (this._numCoresPerSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCoresPerSocket = this._numCoresPerSocket;
    }
    if (this._numCpUs !== undefined) {
      hasAnyValues = true;
      internalValueResult.numCpUs = this._numCpUs;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._resourcePool !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourcePool = this._resourcePool;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    if (this._snapshot !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshot = this._snapshot;
    }
    if (this._storagePolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storagePolicyName = this._storagePolicyName;
    }
    if (this._template !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template;
    }
    if (this._thumbprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.thumbprint = this._thumbprint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cloneMode = undefined;
      this._customVmxKeys = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._diskGiB = undefined;
      this._failureDomain = undefined;
      this._folder = undefined;
      this._memoryMiB = undefined;
      this._network.internalValue = undefined;
      this._numCoresPerSocket = undefined;
      this._numCpUs = undefined;
      this._providerId = undefined;
      this._resourcePool = undefined;
      this._server = undefined;
      this._snapshot = undefined;
      this._storagePolicyName = undefined;
      this._template = undefined;
      this._thumbprint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cloneMode = value.cloneMode;
      this._customVmxKeys = value.customVmxKeys;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._diskGiB = value.diskGiB;
      this._failureDomain = value.failureDomain;
      this._folder = value.folder;
      this._memoryMiB = value.memoryMiB;
      this._network.internalValue = value.network;
      this._numCoresPerSocket = value.numCoresPerSocket;
      this._numCpUs = value.numCpUs;
      this._providerId = value.providerId;
      this._resourcePool = value.resourcePool;
      this._server = value.server;
      this._snapshot = value.snapshot;
      this._storagePolicyName = value.storagePolicyName;
      this._template = value.template;
      this._thumbprint = value.thumbprint;
    }
  }

  // clone_mode - computed: false, optional: true, required: false
  private _cloneMode?: string; 
  public get cloneMode() {
    return this.getStringAttribute('clone_mode');
  }
  public set cloneMode(value: string) {
    this._cloneMode = value;
  }
  public resetCloneMode() {
    this._cloneMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneModeInput() {
    return this._cloneMode;
  }

  // custom_vmx_keys - computed: false, optional: true, required: false
  private _customVmxKeys?: { [key: string]: string }; 
  public get customVmxKeys() {
    return this.getStringMapAttribute('custom_vmx_keys');
  }
  public set customVmxKeys(value: { [key: string]: string }) {
    this._customVmxKeys = value;
  }
  public resetCustomVmxKeys() {
    this._customVmxKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customVmxKeysInput() {
    return this._customVmxKeys;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // disk_gi_b - computed: false, optional: true, required: false
  private _diskGiB?: number; 
  public get diskGiB() {
    return this.getNumberAttribute('disk_gi_b');
  }
  public set diskGiB(value: number) {
    this._diskGiB = value;
  }
  public resetDiskGiB() {
    this._diskGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskGiBInput() {
    return this._diskGiB;
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // memory_mi_b - computed: false, optional: true, required: false
  private _memoryMiB?: number; 
  public get memoryMiB() {
    return this.getNumberAttribute('memory_mi_b');
  }
  public set memoryMiB(value: number) {
    this._memoryMiB = value;
  }
  public resetMemoryMiB() {
    this._memoryMiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryMiBInput() {
    return this._memoryMiB;
  }

  // network - computed: false, optional: false, required: true
  private _network = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // num_cores_per_socket - computed: false, optional: true, required: false
  private _numCoresPerSocket?: number; 
  public get numCoresPerSocket() {
    return this.getNumberAttribute('num_cores_per_socket');
  }
  public set numCoresPerSocket(value: number) {
    this._numCoresPerSocket = value;
  }
  public resetNumCoresPerSocket() {
    this._numCoresPerSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCoresPerSocketInput() {
    return this._numCoresPerSocket;
  }

  // num_cp_us - computed: false, optional: true, required: false
  private _numCpUs?: number; 
  public get numCpUs() {
    return this.getNumberAttribute('num_cp_us');
  }
  public set numCpUs(value: number) {
    this._numCpUs = value;
  }
  public resetNumCpUs() {
    this._numCpUs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numCpUsInput() {
    return this._numCpUs;
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

  // resource_pool - computed: false, optional: true, required: false
  private _resourcePool?: string; 
  public get resourcePool() {
    return this.getStringAttribute('resource_pool');
  }
  public set resourcePool(value: string) {
    this._resourcePool = value;
  }
  public resetResourcePool() {
    this._resourcePool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcePoolInput() {
    return this._resourcePool;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // snapshot - computed: false, optional: true, required: false
  private _snapshot?: string; 
  public get snapshot() {
    return this.getStringAttribute('snapshot');
  }
  public set snapshot(value: string) {
    this._snapshot = value;
  }
  public resetSnapshot() {
    this._snapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotInput() {
    return this._snapshot;
  }

  // storage_policy_name - computed: false, optional: true, required: false
  private _storagePolicyName?: string; 
  public get storagePolicyName() {
    return this.getStringAttribute('storage_policy_name');
  }
  public set storagePolicyName(value: string) {
    this._storagePolicyName = value;
  }
  public resetStoragePolicyName() {
    this._storagePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePolicyNameInput() {
    return this._storagePolicyName;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // thumbprint - computed: false, optional: true, required: false
  private _thumbprint?: string; 
  public get thumbprint() {
    return this.getStringAttribute('thumbprint');
  }
  public set thumbprint(value: string) {
    this._thumbprint = value;
  }
  public resetThumbprint() {
    this._thumbprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thumbprintInput() {
    return this._thumbprint;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate {
  /**
  * Standard object's metadata. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#metadata DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#metadata}
  */
  readonly metadata?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata;
  /**
  * Spec is the specification of the desired behavior of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#spec DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#spec}
  */
  readonly spec: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata",
    },
    spec: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec {
  /**
  * VSphereMachineTemplateResource describes the data needed to create a VSphereMachine from a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#template DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest#template}
  */
  readonly template: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate;
}

export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_v_sphere_machine_template_v1alpha3_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoVSphereMachineTemplateV1Alpha3ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
