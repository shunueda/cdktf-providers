// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformGitopsApplicationsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#account_id PlatformGitopsApplications#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#agent_id PlatformGitopsApplications#agent_id}
  */
  readonly agentId: string;
  /**
  * Cluster identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#cluster_id PlatformGitopsApplications#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#id PlatformGitopsApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#identifier PlatformGitopsApplications#identifier}
  */
  readonly identifier?: string;
  /**
  * Kind of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#kind PlatformGitopsApplications#kind}
  */
  readonly kind?: string;
  /**
  * Name of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name: string;
  /**
  * Options to remove existing finalizers to delete the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#options_remove_existing_finalizers PlatformGitopsApplications#options_remove_existing_finalizers}
  */
  readonly optionsRemoveExistingFinalizers?: boolean | cdktf.IResolvable;
  /**
  * Organization identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#org_id PlatformGitopsApplications#org_id}
  */
  readonly orgId: string;
  /**
  * The ArgoCD project name corresponding to this GitOps application. An empty string means that the GitOps application belongs to the default project created by Harness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#project PlatformGitopsApplications#project}
  */
  readonly project?: string;
  /**
  * Project identifier of the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#project_id PlatformGitopsApplications#project_id}
  */
  readonly projectId: string;
  /**
  * Repository identifier of the GitOps application. When using skipRepoValidation, this field is not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#repo_id PlatformGitopsApplications#repo_id}
  */
  readonly repoId?: string;
  /**
  * List of repository identifiers of the GitOps for Multi-Source application. Not required if skipRepoValidation is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#repo_ids PlatformGitopsApplications#repo_ids}
  */
  readonly repoIds?: string[];
  /**
  * Request cascade to delete the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#request_cascade PlatformGitopsApplications#request_cascade}
  */
  readonly requestCascade?: boolean | cdktf.IResolvable;
  /**
  * Request propagation policy to delete the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#request_propagation_policy PlatformGitopsApplications#request_propagation_policy}
  */
  readonly requestPropagationPolicy?: string;
  /**
  * Indicates if the GitOps application should skip validate repository definition exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#skip_repo_validation PlatformGitopsApplications#skip_repo_validation}
  */
  readonly skipRepoValidation?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the GitOps application should be updated if existing and inserted if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#upsert PlatformGitopsApplications#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the GitOps application yaml has to be validated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#validate PlatformGitopsApplications#validate}
  */
  readonly validate?: boolean | cdktf.IResolvable;
  /**
  * application block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#application PlatformGitopsApplications#application}
  */
  readonly application: PlatformGitopsApplicationsApplication;
}
export interface PlatformGitopsApplicationsApplicationMetadataOwnerReferences {
  /**
  * API version of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#api_version PlatformGitopsApplications#api_version}
  */
  readonly apiVersion?: string;
  /**
  * If true, AND if the owner has the "foregroundDeletion" finalizer, then the owner cannot be deleted from the key-value store until this reference is removed. Defaults to false. To set this field, a user needs "delete" permission of the owner, otherwise 422 (Unprocessable Entity) will be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#block_owner_deletion PlatformGitopsApplications#block_owner_deletion}
  */
  readonly blockOwnerDeletion?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the reference points to the managing controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#controller PlatformGitopsApplications#controller}
  */
  readonly controller?: boolean | cdktf.IResolvable;
  /**
  * Kind of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#kind PlatformGitopsApplications#kind}
  */
  readonly kind?: string;
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * UID of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#uid PlatformGitopsApplications#uid}
  */
  readonly uid?: string;
}

export function platformGitopsApplicationsApplicationMetadataOwnerReferencesToTerraform(struct?: PlatformGitopsApplicationsApplicationMetadataOwnerReferences | cdktf.IResolvable): any {
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


export function platformGitopsApplicationsApplicationMetadataOwnerReferencesToHclTerraform(struct?: PlatformGitopsApplicationsApplicationMetadataOwnerReferences | cdktf.IResolvable): any {
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

export class PlatformGitopsApplicationsApplicationMetadataOwnerReferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationMetadataOwnerReferences | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformGitopsApplicationsApplicationMetadataOwnerReferences | cdktf.IResolvable | undefined) {
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

  // api_version - computed: true, optional: true, required: false
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

  // block_owner_deletion - computed: true, optional: true, required: false
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

  // controller - computed: true, optional: true, required: false
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

  // kind - computed: true, optional: true, required: false
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

  // name - computed: true, optional: true, required: false
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

  // uid - computed: true, optional: true, required: false
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

export class PlatformGitopsApplicationsApplicationMetadataOwnerReferencesList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationMetadataOwnerReferences[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationMetadataOwnerReferencesOutputReference {
    return new PlatformGitopsApplicationsApplicationMetadataOwnerReferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationMetadata {
  /**
  * Annotations are unstructured key value pairs corresponding to a resource. External tools set these to store and retrieve arbitrary metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#annotations PlatformGitopsApplications#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Name of the cluster corresponding to the object. API server ignores this if set in any create or update request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#cluster_name PlatformGitopsApplications#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Before the object is removed from the register, it must be empty. Each element serves as a unique identifier for the component that is accountable for removing that entry from the list. Entries in this list can only be removed if the object's deletionTimestamp is not null. The processing and removal of finalizers can happen in any sequence. No order is enforced as it may block the finalizers. Finalizers is a shared field that can be reordered by any actor with authority. If the finalizer list is processed in order, this could result in a scenario where the component in charge of the list's first finalizer is waiting for a signal (generated by a field value, an external system, or another) produced by a component in charge of the list's later finalizer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#finalizers PlatformGitopsApplications#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * An optional prefix that the server will only apply if the Name field is empty to create a unique name. The name returned to the client will differ from the name passed if this field is used. A unique suffix will be added to this value as well. The supplied value must adhere to the same validation guidelines as the Name field and may be reduced by the suffix length necessary to ensure that it is unique on the server. The server will NOT return a 409 if this field is supplied and the created name already exists; instead, it will either return 201 Created or 500 with Reason ServerTimeout, indicating that a unique name could not be found in the allotted time and the client should try again later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#generate_name PlatformGitopsApplications#generate_name}
  */
  readonly generateName?: string;
  /**
  * A sequence number representing a specific generation of the desired state. This is a read-only value populated by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#generation PlatformGitopsApplications#generation}
  */
  readonly generation?: string;
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#labels PlatformGitopsApplications#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name must be unique within a namespace. It is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Name cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Namespace of the GitOps application. An empty namespace is equivalent to the namespace of the GitOps agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#namespace PlatformGitopsApplications#namespace}
  */
  readonly namespace?: string;
  /**
  * owner_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#owner_references PlatformGitopsApplications#owner_references}
  */
  readonly ownerReferences?: PlatformGitopsApplicationsApplicationMetadataOwnerReferences[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationMetadataToTerraform(struct?: PlatformGitopsApplicationsApplicationMetadataOutputReference | PlatformGitopsApplicationsApplicationMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    generate_name: cdktf.stringToTerraform(struct!.generateName),
    generation: cdktf.stringToTerraform(struct!.generation),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    owner_references: cdktf.listMapper(platformGitopsApplicationsApplicationMetadataOwnerReferencesToTerraform, true)(struct!.ownerReferences),
  }
}


export function platformGitopsApplicationsApplicationMetadataToHclTerraform(struct?: PlatformGitopsApplicationsApplicationMetadataOutputReference | PlatformGitopsApplicationsApplicationMetadata): any {
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
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    generate_name: {
      value: cdktf.stringToHclTerraform(struct!.generateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
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
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationMetadataOwnerReferencesToHclTerraform, true)(struct!.ownerReferences),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationMetadataOwnerReferencesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
    }
    if (this._generateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateName = this._generateName;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
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

  public set internalValue(value: PlatformGitopsApplicationsApplicationMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._clusterName = undefined;
      this._finalizers = undefined;
      this._generateName = undefined;
      this._generation = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._ownerReferences.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._clusterName = value.clusterName;
      this._finalizers = value.finalizers;
      this._generateName = value.generateName;
      this._generation = value.generation;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
      this._ownerReferences.internalValue = value.ownerReferences;
    }
  }

  // annotations - computed: true, optional: true, required: false
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

  // cluster_name - computed: true, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // finalizers - computed: true, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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

  // generation - computed: true, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // labels - computed: true, optional: true, required: false
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

  // namespace - computed: true, optional: true, required: false
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

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // owner_references - computed: false, optional: true, required: false
  private _ownerReferences = new PlatformGitopsApplicationsApplicationMetadataOwnerReferencesList(this, "owner_references", false);
  public get ownerReferences() {
    return this._ownerReferences;
  }
  public putOwnerReferences(value: PlatformGitopsApplicationsApplicationMetadataOwnerReferences[] | cdktf.IResolvable) {
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
export interface PlatformGitopsApplicationsApplicationSpecDestination {
  /**
  * URL of the target cluster and must be set to the kubernetes control plane API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Target namespace of the GitOps application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#namespace PlatformGitopsApplications#namespace}
  */
  readonly namespace?: string;
  /**
  * URL of the target cluster server for the GitOps application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#server PlatformGitopsApplications#server}
  */
  readonly server?: string;
}

export function platformGitopsApplicationsApplicationSpecDestinationToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function platformGitopsApplicationsApplicationSpecDestinationToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecDestination | cdktf.IResolvable): any {
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
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecDestinationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecDestination | cdktf.IResolvable | undefined {
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
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
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
      this._server = value.server;
    }
  }

  // name - computed: true, optional: true, required: false
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
}

export class PlatformGitopsApplicationsApplicationSpecDestinationList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecDestination[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecDestinationOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecDestinationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars {
  /**
  * Code of the external variables of jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#code PlatformGitopsApplications#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of the external variables of jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the external variables of jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas {
  /**
  * Code of the TLAS of the jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#code PlatformGitopsApplications#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of the TLAS of the jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the TLAS of the jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#libs PlatformGitopsApplications#libs}
  */
  readonly libs?: string[];
  /**
  * ext_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#ext_vars PlatformGitopsApplications#ext_vars}
  */
  readonly extVars?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable;
  /**
  * tlas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#tlas PlatformGitopsApplications#tlas}
  */
  readonly tlas?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_vars: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsToTerraform, true)(struct!.extVars),
    tlas: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasToTerraform, true)(struct!.tlas),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_vars: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsToHclTerraform, true)(struct!.extVars),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsList",
    },
    tlas: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasToHclTerraform, true)(struct!.tlas),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVars = this._extVars?.internalValue;
    }
    if (this._tlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlas = this._tlas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._libs = undefined;
      this._extVars.internalValue = undefined;
      this._tlas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._libs = value.libs;
      this._extVars.internalValue = value.extVars;
      this._tlas.internalValue = value.tlas;
    }
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // ext_vars - computed: false, optional: true, required: false
  private _extVars = new PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }
  public putExtVars(value: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable) {
    this._extVars.internalValue = value;
  }
  public resetExtVars() {
    this._extVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarsInput() {
    return this._extVars.internalValue;
  }

  // tlas - computed: false, optional: true, required: false
  private _tlas = new PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
  public putTlas(value: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetTlas[] | cdktf.IResolvable) {
    this._tlas.internalValue = value;
  }
  public resetTlas() {
    this._tlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlasInput() {
    return this._tlas.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#exclude PlatformGitopsApplications#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#include PlatformGitopsApplications#include}
  */
  readonly include?: string;
  /**
  * Indicates to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#recurse PlatformGitopsApplications#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#jsonnet PlatformGitopsApplications#jsonnet}
  */
  readonly jsonnet?: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourceDirectoryToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetToTerraform, true)(struct!.jsonnet),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceDirectoryToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetToHclTerraform, true)(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnetList(this, "jsonnet", false);
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: PlatformGitopsApplicationsApplicationSpecSourceDirectoryJsonnet[] | cdktf.IResolvable) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceDirectoryList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceDirectory[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceDirectoryOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters {
  /**
  * Name of the helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Path to the file containing the values of the helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#path PlatformGitopsApplications#path}
  */
  readonly path?: string;
}

export function platformGitopsApplicationsApplicationSpecSourceHelmFileParametersToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceHelmFileParametersToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
    }
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceHelmParameters {
  /**
  * Indicates if helm should interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#force_string PlatformGitopsApplications#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourceHelmParametersToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceHelmParametersToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceHelmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceHelmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceHelmParametersList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceHelmParameters[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceHelmParametersOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceHelm {
  /**
  * Prevents 'helm template' from failing when value_files do not exist locally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#ignore_missing_value_files PlatformGitopsApplications#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * Indicates if to pass credentials to all domains (helm's --pass-credentials)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#pass_credentials PlatformGitopsApplications#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name to use. If omitted it will use the GitOps application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#release_name PlatformGitopsApplications#release_name}
  */
  readonly releaseName?: string;
  /**
  * Indicates if to skip CRDs during helm template. Corresponds to helm --skip-crds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#skip_crds PlatformGitopsApplications#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * Indicates if to skip schema validation during helm template. Corresponds to helm --skip-schema-validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#skip_schema_validation PlatformGitopsApplications#skip_schema_validation}
  */
  readonly skipSchemaValidation?: boolean | cdktf.IResolvable;
  /**
  * Indicates if to skip tests during helm template. Corresponds to helm --skip-tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#skip_tests PlatformGitopsApplications#skip_tests}
  */
  readonly skipTests?: boolean | cdktf.IResolvable;
  /**
  * List of helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value_files PlatformGitopsApplications#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to helm template, typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#values PlatformGitopsApplications#values}
  */
  readonly values?: string;
  /**
  * Helm version to use for templating (either "2" or "3")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#version PlatformGitopsApplications#version}
  */
  readonly version?: string;
  /**
  * file_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#file_parameters PlatformGitopsApplications#file_parameters}
  */
  readonly fileParameters?: PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#parameters PlatformGitopsApplications#parameters}
  */
  readonly parameters?: PlatformGitopsApplicationsApplicationSpecSourceHelmParameters[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourceHelmToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    skip_schema_validation: cdktf.booleanToTerraform(struct!.skipSchemaValidation),
    skip_tests: cdktf.booleanToTerraform(struct!.skipTests),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameters: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceHelmFileParametersToTerraform, true)(struct!.fileParameters),
    parameters: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceHelmParametersToTerraform, true)(struct!.parameters),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceHelmToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_schema_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipSchemaValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_tests: {
      value: cdktf.booleanToHclTerraform(struct!.skipTests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_parameters: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceHelmFileParametersToHclTerraform, true)(struct!.fileParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersList",
    },
    parameters: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceHelmParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceHelmParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceHelmOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceHelm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._skipSchemaValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSchemaValidation = this._skipSchemaValidation;
    }
    if (this._skipTests !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTests = this._skipTests;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameters = this._fileParameters?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceHelm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._skipSchemaValidation = undefined;
      this._skipTests = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._version = undefined;
      this._fileParameters.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._skipSchemaValidation = value.skipSchemaValidation;
      this._skipTests = value.skipTests;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._version = value.version;
      this._fileParameters.internalValue = value.fileParameters;
      this._parameters.internalValue = value.parameters;
    }
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // skip_schema_validation - computed: false, optional: true, required: false
  private _skipSchemaValidation?: boolean | cdktf.IResolvable; 
  public get skipSchemaValidation() {
    return this.getBooleanAttribute('skip_schema_validation');
  }
  public set skipSchemaValidation(value: boolean | cdktf.IResolvable) {
    this._skipSchemaValidation = value;
  }
  public resetSkipSchemaValidation() {
    this._skipSchemaValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSchemaValidationInput() {
    return this._skipSchemaValidation;
  }

  // skip_tests - computed: false, optional: true, required: false
  private _skipTests?: boolean | cdktf.IResolvable; 
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests');
  }
  public set skipTests(value: boolean | cdktf.IResolvable) {
    this._skipTests = value;
  }
  public resetSkipTests() {
    this._skipTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestsInput() {
    return this._skipTests;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
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

  // file_parameters - computed: false, optional: true, required: false
  private _fileParameters = new PlatformGitopsApplicationsApplicationSpecSourceHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }
  public putFileParameters(value: PlatformGitopsApplicationsApplicationSpecSourceHelmFileParameters[] | cdktf.IResolvable) {
    this._fileParameters.internalValue = value;
  }
  public resetFileParameters() {
    this._fileParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParametersInput() {
    return this._fileParameters.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PlatformGitopsApplicationsApplicationSpecSourceHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PlatformGitopsApplicationsApplicationSpecSourceHelmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceHelmList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceHelm[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceHelmOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceHelmOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters {
  /**
  * Component of the parameter of the ksonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#component PlatformGitopsApplications#component}
  */
  readonly component?: string;
  /**
  * Name of the parameter of the ksonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the parameter of the ksonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourceKsonnetParametersToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceKsonnetParametersToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceKsonnet {
  /**
  * Ksonnet application environment name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#environment PlatformGitopsApplications#environment}
  */
  readonly environment?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#parameters PlatformGitopsApplications#parameters}
  */
  readonly parameters?: PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourceKsonnetToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceKsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    parameters: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceKsonnetParametersToTerraform, true)(struct!.parameters),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceKsonnetToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceKsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceKsonnetParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceKsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceKsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceKsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._parameters.internalValue = value.parameters;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PlatformGitopsApplicationsApplicationSpecSourceKsonnetParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PlatformGitopsApplicationsApplicationSpecSourceKsonnetParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourceKsonnetList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceKsonnet[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceKsonnetOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceKsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourceKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#common_annotations PlatformGitopsApplications#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#common_labels PlatformGitopsApplications#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Indicates if to force applying common annotations to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#force_common_annotations PlatformGitopsApplications#force_common_annotations}
  */
  readonly forceCommonAnnotations?: boolean | cdktf.IResolvable;
  /**
  * Indicates if to force apply common labels to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#force_common_labels PlatformGitopsApplications#force_common_labels}
  */
  readonly forceCommonLabels?: boolean | cdktf.IResolvable;
  /**
  * List of kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#images PlatformGitopsApplications#images}
  */
  readonly images?: string[];
  /**
  * Prefix prepended to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name_prefix PlatformGitopsApplications#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name_suffix PlatformGitopsApplications#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#version PlatformGitopsApplications#version}
  */
  readonly version?: string;
}

export function platformGitopsApplicationsApplicationSpecSourceKustomizeToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    force_common_annotations: cdktf.booleanToTerraform(struct!.forceCommonAnnotations),
    force_common_labels: cdktf.booleanToTerraform(struct!.forceCommonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceKustomizeToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    force_common_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_common_labels: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PlatformGitopsApplicationsApplicationSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourceKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._forceCommonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonAnnotations = this._forceCommonAnnotations;
    }
    if (this._forceCommonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonLabels = this._forceCommonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourceKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._forceCommonAnnotations = undefined;
      this._forceCommonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._forceCommonAnnotations = value.forceCommonAnnotations;
      this._forceCommonLabels = value.forceCommonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // force_common_annotations - computed: false, optional: true, required: false
  private _forceCommonAnnotations?: boolean | cdktf.IResolvable; 
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }
  public set forceCommonAnnotations(value: boolean | cdktf.IResolvable) {
    this._forceCommonAnnotations = value;
  }
  public resetForceCommonAnnotations() {
    this._forceCommonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonAnnotationsInput() {
    return this._forceCommonAnnotations;
  }

  // force_common_labels - computed: false, optional: true, required: false
  private _forceCommonLabels?: boolean | cdktf.IResolvable; 
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }
  public set forceCommonLabels(value: boolean | cdktf.IResolvable) {
    this._forceCommonLabels = value;
  }
  public resetForceCommonLabels() {
    this._forceCommonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonLabelsInput() {
    return this._forceCommonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
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

export class PlatformGitopsApplicationsApplicationSpecSourceKustomizeList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourceKustomize[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourceKustomizeOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourceKustomizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcePluginEnv {
  /**
  * Name of the variable, usually expressed in uppercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourcePluginEnvToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcePluginEnvToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcePluginEnv | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcePluginEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcePluginEnvOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcePlugin {
  /**
  * Name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#env PlatformGitopsApplications#env}
  */
  readonly env?: PlatformGitopsApplicationsApplicationSpecSourcePluginEnv[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourcePluginToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcePluginEnvToTerraform, true)(struct!.env),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcePluginToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcePlugin | cdktf.IResolvable): any {
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
    env: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcePluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcePluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcePluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcePlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcePlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._env.internalValue = value.env;
    }
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

  // env - computed: false, optional: true, required: false
  private _env = new PlatformGitopsApplicationsApplicationSpecSourcePluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: PlatformGitopsApplicationsApplicationSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcePluginList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcePlugin[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcePluginOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcePluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSource {
  /**
  * Helm chart name, and must be specified for the GitOps applications sourced from a helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#chart PlatformGitopsApplications#chart}
  */
  readonly chart?: string;
  /**
  * Directory path within the git repository, and is only valid for the GitOps applications sourced from git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#path PlatformGitopsApplications#path}
  */
  readonly path?: string;
  /**
  * URL to the repository (git or helm) that contains the GitOps application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#repo_url PlatformGitopsApplications#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Revision of the source to sync the GitOps application to. In case of git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag of the chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#target_revision PlatformGitopsApplications#target_revision}
  */
  readonly targetRevision: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#directory PlatformGitopsApplications#directory}
  */
  readonly directory?: PlatformGitopsApplicationsApplicationSpecSourceDirectory[] | cdktf.IResolvable;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#helm PlatformGitopsApplications#helm}
  */
  readonly helm?: PlatformGitopsApplicationsApplicationSpecSourceHelm[] | cdktf.IResolvable;
  /**
  * ksonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#ksonnet PlatformGitopsApplications#ksonnet}
  */
  readonly ksonnet?: PlatformGitopsApplicationsApplicationSpecSourceKsonnet[] | cdktf.IResolvable;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#kustomize PlatformGitopsApplications#kustomize}
  */
  readonly kustomize?: PlatformGitopsApplicationsApplicationSpecSourceKustomize[] | cdktf.IResolvable;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#plugin PlatformGitopsApplications#plugin}
  */
  readonly plugin?: PlatformGitopsApplicationsApplicationSpecSourcePlugin[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourceToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceOutputReference | PlatformGitopsApplicationsApplicationSpecSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    path: cdktf.stringToTerraform(struct!.path),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceDirectoryToTerraform, true)(struct!.directory),
    helm: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceHelmToTerraform, true)(struct!.helm),
    ksonnet: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceKsonnetToTerraform, true)(struct!.ksonnet),
    kustomize: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourceKustomizeToTerraform, true)(struct!.kustomize),
    plugin: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcePluginToTerraform, true)(struct!.plugin),
  }
}


export function platformGitopsApplicationsApplicationSpecSourceToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourceOutputReference | PlatformGitopsApplicationsApplicationSpecSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
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
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceDirectoryToHclTerraform, true)(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceDirectoryList",
    },
    helm: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceHelmToHclTerraform, true)(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceHelmList",
    },
    ksonnet: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceKsonnetToHclTerraform, true)(struct!.ksonnet),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceKsonnetList",
    },
    kustomize: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourceKustomizeToHclTerraform, true)(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceKustomizeList",
    },
    plugin: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcePluginToHclTerraform, true)(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcePluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._ksonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ksonnet = this._ksonnet?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._chart = undefined;
      this._path = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._ksonnet.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._chart = value.chart;
      this._path = value.path;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._ksonnet.internalValue = value.ksonnet;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: false, required: true
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new PlatformGitopsApplicationsApplicationSpecSourceDirectoryList(this, "directory", false);
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: PlatformGitopsApplicationsApplicationSpecSourceDirectory[] | cdktf.IResolvable) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new PlatformGitopsApplicationsApplicationSpecSourceHelmList(this, "helm", false);
  public get helm() {
    return this._helm;
  }
  public putHelm(value: PlatformGitopsApplicationsApplicationSpecSourceHelm[] | cdktf.IResolvable) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // ksonnet - computed: false, optional: true, required: false
  private _ksonnet = new PlatformGitopsApplicationsApplicationSpecSourceKsonnetList(this, "ksonnet", false);
  public get ksonnet() {
    return this._ksonnet;
  }
  public putKsonnet(value: PlatformGitopsApplicationsApplicationSpecSourceKsonnet[] | cdktf.IResolvable) {
    this._ksonnet.internalValue = value;
  }
  public resetKsonnet() {
    this._ksonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ksonnetInput() {
    return this._ksonnet.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new PlatformGitopsApplicationsApplicationSpecSourceKustomizeList(this, "kustomize", false);
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: PlatformGitopsApplicationsApplicationSpecSourceKustomize[] | cdktf.IResolvable) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new PlatformGitopsApplicationsApplicationSpecSourcePluginList(this, "plugin", false);
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: PlatformGitopsApplicationsApplicationSpecSourcePlugin[] | cdktf.IResolvable) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars {
  /**
  * Code of the external variables of jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#code PlatformGitopsApplications#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of the external variables of jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the external variables of jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas {
  /**
  * Code of the TLAS of the jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#code PlatformGitopsApplications#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Name of the TLAS of the jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the TLAS of the jsonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet {
  /**
  * Additional library search dirs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#libs PlatformGitopsApplications#libs}
  */
  readonly libs?: string[];
  /**
  * ext_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#ext_vars PlatformGitopsApplications#ext_vars}
  */
  readonly extVars?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable;
  /**
  * tlas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#tlas PlatformGitopsApplications#tlas}
  */
  readonly tlas?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    ext_vars: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsToTerraform, true)(struct!.extVars),
    tlas: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasToTerraform, true)(struct!.tlas),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ext_vars: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsToHclTerraform, true)(struct!.extVars),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsList",
    },
    tlas: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasToHclTerraform, true)(struct!.tlas),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._extVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVars = this._extVars?.internalValue;
    }
    if (this._tlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlas = this._tlas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._libs = undefined;
      this._extVars.internalValue = undefined;
      this._tlas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._libs = value.libs;
      this._extVars.internalValue = value.extVars;
      this._tlas.internalValue = value.tlas;
    }
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // ext_vars - computed: false, optional: true, required: false
  private _extVars = new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }
  public putExtVars(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable) {
    this._extVars.internalValue = value;
  }
  public resetExtVars() {
    this._extVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarsInput() {
    return this._extVars.internalValue;
  }

  // tlas - computed: false, optional: true, required: false
  private _tlas = new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
  public putTlas(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable) {
    this._tlas.internalValue = value;
  }
  public resetTlas() {
    this._tlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlasInput() {
    return this._tlas.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesDirectory {
  /**
  * Glob pattern to match paths against that should be explicitly excluded from being used during manifest generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#exclude PlatformGitopsApplications#exclude}
  */
  readonly exclude?: string;
  /**
  * Glob pattern to match paths against that should be explicitly included during manifest generation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#include PlatformGitopsApplications#include}
  */
  readonly include?: string;
  /**
  * Indicates to scan a directory recursively for manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#recurse PlatformGitopsApplications#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
  /**
  * jsonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#jsonnet PlatformGitopsApplications#jsonnet}
  */
  readonly jsonnet?: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourcesDirectoryToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
    jsonnet: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetToTerraform, true)(struct!.jsonnet),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesDirectoryToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jsonnet: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetToHclTerraform, true)(struct!.jsonnet),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._recurse = undefined;
      this._jsonnet.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._recurse = value.recurse;
      this._jsonnet.internalValue = value.jsonnet;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnetList(this, "jsonnet", false);
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectoryJsonnet[] | cdktf.IResolvable) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesDirectoryList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesDirectory[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesDirectoryOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters {
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name: string;
  /**
  * Path to the file containing the values for the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#path PlatformGitopsApplications#path}
  */
  readonly path: string;
}

export function platformGitopsApplicationsApplicationSpecSourcesHelmFileParametersToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesHelmFileParametersToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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
}

export class PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters {
  /**
  * Determines whether to tell Helm to interpret booleans and numbers as strings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#force_string PlatformGitopsApplications#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the Helm parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourcesHelmParametersToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesHelmParametersToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesHelmParametersList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesHelmParametersOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesHelm {
  /**
  * Prevents 'helm template' from failing when `value_files` do not exist locally by not appending them to 'helm template --values'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#ignore_missing_value_files PlatformGitopsApplications#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * If true then adds '--pass-credentials' to Helm commands to pass credentials to all domains.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#pass_credentials PlatformGitopsApplications#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * Helm release name. If omitted it will use the application name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#release_name PlatformGitopsApplications#release_name}
  */
  readonly releaseName?: string;
  /**
  * Whether to skip custom resource definition installation step (Helm's [--skip-crds](https://helm.sh/docs/chart_best_practices/custom_resource_definitions/)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#skip_crds PlatformGitopsApplications#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * Indicates if to skip schema validation during helm template. Corresponds to helm --skip-schema-validation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#skip_schema_validation PlatformGitopsApplications#skip_schema_validation}
  */
  readonly skipSchemaValidation?: boolean | cdktf.IResolvable;
  /**
  * Indicates if to skip tests during helm template. Corresponds to helm --skip-tests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#skip_tests PlatformGitopsApplications#skip_tests}
  */
  readonly skipTests?: boolean | cdktf.IResolvable;
  /**
  * List of Helm value files to use when generating a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value_files PlatformGitopsApplications#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#values PlatformGitopsApplications#values}
  */
  readonly values?: string;
  /**
  * Helm values to be passed to 'helm template', typically defined as a block.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#values_object PlatformGitopsApplications#values_object}
  */
  readonly valuesObject?: { [key: string]: string };
  /**
  * Helm version to use for templating (either "2" or "3").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#version PlatformGitopsApplications#version}
  */
  readonly version?: string;
  /**
  * file_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#file_parameters PlatformGitopsApplications#file_parameters}
  */
  readonly fileParameters?: PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters[] | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#parameters PlatformGitopsApplications#parameters}
  */
  readonly parameters?: PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourcesHelmToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesHelmOutputReference | PlatformGitopsApplicationsApplicationSpecSourcesHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    skip_schema_validation: cdktf.booleanToTerraform(struct!.skipSchemaValidation),
    skip_tests: cdktf.booleanToTerraform(struct!.skipTests),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    values_object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valuesObject),
    version: cdktf.stringToTerraform(struct!.version),
    file_parameters: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesHelmFileParametersToTerraform, true)(struct!.fileParameters),
    parameters: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesHelmParametersToTerraform, true)(struct!.parameters),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesHelmToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesHelmOutputReference | PlatformGitopsApplicationsApplicationSpecSourcesHelm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_schema_validation: {
      value: cdktf.booleanToHclTerraform(struct!.skipSchemaValidation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    skip_tests: {
      value: cdktf.booleanToHclTerraform(struct!.skipTests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valuesObject),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_parameters: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesHelmFileParametersToHclTerraform, true)(struct!.fileParameters),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersList",
    },
    parameters: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesHelmParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesHelmParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesHelm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._skipSchemaValidation !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipSchemaValidation = this._skipSchemaValidation;
    }
    if (this._skipTests !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTests = this._skipTests;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesObject = this._valuesObject;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._fileParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameters = this._fileParameters?.internalValue;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesHelm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ignoreMissingValueFiles = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._skipSchemaValidation = undefined;
      this._skipTests = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._valuesObject = undefined;
      this._version = undefined;
      this._fileParameters.internalValue = undefined;
      this._parameters.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._skipSchemaValidation = value.skipSchemaValidation;
      this._skipTests = value.skipTests;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._valuesObject = value.valuesObject;
      this._version = value.version;
      this._fileParameters.internalValue = value.fileParameters;
      this._parameters.internalValue = value.parameters;
    }
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // skip_schema_validation - computed: false, optional: true, required: false
  private _skipSchemaValidation?: boolean | cdktf.IResolvable; 
  public get skipSchemaValidation() {
    return this.getBooleanAttribute('skip_schema_validation');
  }
  public set skipSchemaValidation(value: boolean | cdktf.IResolvable) {
    this._skipSchemaValidation = value;
  }
  public resetSkipSchemaValidation() {
    this._skipSchemaValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipSchemaValidationInput() {
    return this._skipSchemaValidation;
  }

  // skip_tests - computed: false, optional: true, required: false
  private _skipTests?: boolean | cdktf.IResolvable; 
  public get skipTests() {
    return this.getBooleanAttribute('skip_tests');
  }
  public set skipTests(value: boolean | cdktf.IResolvable) {
    this._skipTests = value;
  }
  public resetSkipTests() {
    this._skipTests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTestsInput() {
    return this._skipTests;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_object - computed: false, optional: true, required: false
  private _valuesObject?: { [key: string]: string }; 
  public get valuesObject() {
    return this.getStringMapAttribute('values_object');
  }
  public set valuesObject(value: { [key: string]: string }) {
    this._valuesObject = value;
  }
  public resetValuesObject() {
    this._valuesObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesObjectInput() {
    return this._valuesObject;
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

  // file_parameters - computed: false, optional: true, required: false
  private _fileParameters = new PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }
  public putFileParameters(value: PlatformGitopsApplicationsApplicationSpecSourcesHelmFileParameters[] | cdktf.IResolvable) {
    this._fileParameters.internalValue = value;
  }
  public resetFileParameters() {
    this._fileParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParametersInput() {
    return this._fileParameters.internalValue;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PlatformGitopsApplicationsApplicationSpecSourcesHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PlatformGitopsApplicationsApplicationSpecSourcesHelmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters {
  /**
  * Component of the parameter of the ksonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#component PlatformGitopsApplications#component}
  */
  readonly component?: string;
  /**
  * Name of the parameter of the ksonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the parameter of the ksonnet application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourcesKsonnetParametersToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    component: cdktf.stringToTerraform(struct!.component),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesKsonnetParametersToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    component: {
      value: cdktf.stringToHclTerraform(struct!.component),
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._component !== undefined) {
      hasAnyValues = true;
      internalValueResult.component = this._component;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._component = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._component = value.component;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // component - computed: false, optional: true, required: false
  private _component?: string; 
  public get component() {
    return this.getStringAttribute('component');
  }
  public set component(value: string) {
    this._component = value;
  }
  public resetComponent() {
    this._component = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentInput() {
    return this._component;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesKsonnet {
  /**
  * Ksonnet application environment name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#environment PlatformGitopsApplications#environment}
  */
  readonly environment?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#parameters PlatformGitopsApplications#parameters}
  */
  readonly parameters?: PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourcesKsonnetToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesKsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    environment: cdktf.stringToTerraform(struct!.environment),
    parameters: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesKsonnetParametersToTerraform, true)(struct!.parameters),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesKsonnetToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesKsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesKsonnetParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesKsonnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesKsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesKsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._environment = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._environment = value.environment;
      this._parameters.internalValue = value.parameters;
    }
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: PlatformGitopsApplicationsApplicationSpecSourcesKsonnetParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesKsonnetList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesKsonnet[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesKsonnetOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesKsonnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesKustomize {
  /**
  * List of additional annotations to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#common_annotations PlatformGitopsApplications#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * List of additional labels to add to rendered manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#common_labels PlatformGitopsApplications#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Indicates if to force applying common annotations to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#force_common_annotations PlatformGitopsApplications#force_common_annotations}
  */
  readonly forceCommonAnnotations?: boolean | cdktf.IResolvable;
  /**
  * Indicates if to force apply common labels to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#force_common_labels PlatformGitopsApplications#force_common_labels}
  */
  readonly forceCommonLabels?: boolean | cdktf.IResolvable;
  /**
  * List of kustomize image override specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#images PlatformGitopsApplications#images}
  */
  readonly images?: string[];
  /**
  * Prefix prepended to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name_prefix PlatformGitopsApplications#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * Suffix appended to resources for kustomize apps.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name_suffix PlatformGitopsApplications#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Version of kustomize to use for rendering manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#version PlatformGitopsApplications#version}
  */
  readonly version?: string;
}

export function platformGitopsApplicationsApplicationSpecSourcesKustomizeToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    force_common_annotations: cdktf.booleanToTerraform(struct!.forceCommonAnnotations),
    force_common_labels: cdktf.booleanToTerraform(struct!.forceCommonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesKustomizeToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    force_common_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_common_labels: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class PlatformGitopsApplicationsApplicationSpecSourcesKustomizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._forceCommonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonAnnotations = this._forceCommonAnnotations;
    }
    if (this._forceCommonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonLabels = this._forceCommonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonAnnotations = undefined;
      this._commonLabels = undefined;
      this._forceCommonAnnotations = undefined;
      this._forceCommonLabels = undefined;
      this._images = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonAnnotations = value.commonAnnotations;
      this._commonLabels = value.commonLabels;
      this._forceCommonAnnotations = value.forceCommonAnnotations;
      this._forceCommonLabels = value.forceCommonLabels;
      this._images = value.images;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._version = value.version;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // force_common_annotations - computed: false, optional: true, required: false
  private _forceCommonAnnotations?: boolean | cdktf.IResolvable; 
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }
  public set forceCommonAnnotations(value: boolean | cdktf.IResolvable) {
    this._forceCommonAnnotations = value;
  }
  public resetForceCommonAnnotations() {
    this._forceCommonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonAnnotationsInput() {
    return this._forceCommonAnnotations;
  }

  // force_common_labels - computed: false, optional: true, required: false
  private _forceCommonLabels?: boolean | cdktf.IResolvable; 
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }
  public set forceCommonLabels(value: boolean | cdktf.IResolvable) {
    this._forceCommonLabels = value;
  }
  public resetForceCommonLabels() {
    this._forceCommonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonLabelsInput() {
    return this._forceCommonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
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

export class PlatformGitopsApplicationsApplicationSpecSourcesKustomizeList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesKustomize[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesKustomizeOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesKustomizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv {
  /**
  * Name of the variable, usually expressed in uppercase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Value of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#value PlatformGitopsApplications#value}
  */
  readonly value?: string;
}

export function platformGitopsApplicationsApplicationSpecSourcesPluginEnvToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesPluginEnvToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesPluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesPluginEnvList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesPluginEnvOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesPluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSourcesPlugin {
  /**
  * Name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#env PlatformGitopsApplications#env}
  */
  readonly env?: PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourcesPluginToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    env: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesPluginEnvToTerraform, true)(struct!.env),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesPluginToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSourcesPlugin | cdktf.IResolvable): any {
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
    env: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesPluginEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesPluginEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesPluginOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSourcesPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSourcesPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._env.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._env.internalValue = value.env;
    }
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

  // env - computed: false, optional: true, required: false
  private _env = new PlatformGitopsApplicationsApplicationSpecSourcesPluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: PlatformGitopsApplicationsApplicationSpecSourcesPluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesPluginList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSourcesPlugin[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesPluginOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesPluginOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSources {
  /**
  * Helm chart name, and must be specified for the GitOps applications sourced from a helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#chart PlatformGitopsApplications#chart}
  */
  readonly chart?: string;
  /**
  * Name is used to refer to a source and is displayed in the UI. It is used in multi-source Applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#name PlatformGitopsApplications#name}
  */
  readonly name?: string;
  /**
  * Directory path within the git repository, and is only valid for the GitOps applications sourced from git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#path PlatformGitopsApplications#path}
  */
  readonly path?: string;
  /**
  * Reference name to be used in other source spec, used for multi-source applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#ref PlatformGitopsApplications#ref}
  */
  readonly ref?: string;
  /**
  * URL to the repository (git or helm) that contains the GitOps application manifests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#repo_url PlatformGitopsApplications#repo_url}
  */
  readonly repoUrl: string;
  /**
  * Revision of the source to sync the GitOps application to. In case of git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag of the chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#target_revision PlatformGitopsApplications#target_revision}
  */
  readonly targetRevision: string;
  /**
  * directory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#directory PlatformGitopsApplications#directory}
  */
  readonly directory?: PlatformGitopsApplicationsApplicationSpecSourcesDirectory[] | cdktf.IResolvable;
  /**
  * helm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#helm PlatformGitopsApplications#helm}
  */
  readonly helm?: PlatformGitopsApplicationsApplicationSpecSourcesHelm;
  /**
  * ksonnet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#ksonnet PlatformGitopsApplications#ksonnet}
  */
  readonly ksonnet?: PlatformGitopsApplicationsApplicationSpecSourcesKsonnet[] | cdktf.IResolvable;
  /**
  * kustomize block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#kustomize PlatformGitopsApplications#kustomize}
  */
  readonly kustomize?: PlatformGitopsApplicationsApplicationSpecSourcesKustomize[] | cdktf.IResolvable;
  /**
  * plugin block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#plugin PlatformGitopsApplications#plugin}
  */
  readonly plugin?: PlatformGitopsApplicationsApplicationSpecSourcesPlugin[] | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSourcesToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
    directory: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesDirectoryToTerraform, true)(struct!.directory),
    helm: platformGitopsApplicationsApplicationSpecSourcesHelmToTerraform(struct!.helm),
    ksonnet: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesKsonnetToTerraform, true)(struct!.ksonnet),
    kustomize: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesKustomizeToTerraform, true)(struct!.kustomize),
    plugin: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesPluginToTerraform, true)(struct!.plugin),
  }
}


export function platformGitopsApplicationsApplicationSpecSourcesToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesDirectoryToHclTerraform, true)(struct!.directory),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesDirectoryList",
    },
    helm: {
      value: platformGitopsApplicationsApplicationSpecSourcesHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesHelmList",
    },
    ksonnet: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesKsonnetToHclTerraform, true)(struct!.ksonnet),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesKsonnetList",
    },
    kustomize: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesKustomizeToHclTerraform, true)(struct!.kustomize),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesKustomizeList",
    },
    plugin: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesPluginToHclTerraform, true)(struct!.plugin),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesPluginList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._ksonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ksonnet = this._ksonnet?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._name = undefined;
      this._path = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._ksonnet.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._plugin.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._name = value.name;
      this._path = value.path;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._ksonnet.internalValue = value.ksonnet;
      this._kustomize.internalValue = value.kustomize;
      this._plugin.internalValue = value.plugin;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: false, required: true
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new PlatformGitopsApplicationsApplicationSpecSourcesDirectoryList(this, "directory", false);
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: PlatformGitopsApplicationsApplicationSpecSourcesDirectory[] | cdktf.IResolvable) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new PlatformGitopsApplicationsApplicationSpecSourcesHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: PlatformGitopsApplicationsApplicationSpecSourcesHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // ksonnet - computed: false, optional: true, required: false
  private _ksonnet = new PlatformGitopsApplicationsApplicationSpecSourcesKsonnetList(this, "ksonnet", false);
  public get ksonnet() {
    return this._ksonnet;
  }
  public putKsonnet(value: PlatformGitopsApplicationsApplicationSpecSourcesKsonnet[] | cdktf.IResolvable) {
    this._ksonnet.internalValue = value;
  }
  public resetKsonnet() {
    this._ksonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ksonnetInput() {
    return this._ksonnet.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new PlatformGitopsApplicationsApplicationSpecSourcesKustomizeList(this, "kustomize", false);
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: PlatformGitopsApplicationsApplicationSpecSourcesKustomize[] | cdktf.IResolvable) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new PlatformGitopsApplicationsApplicationSpecSourcesPluginList(this, "plugin", false);
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: PlatformGitopsApplicationsApplicationSpecSourcesPlugin[] | cdktf.IResolvable) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }
}

export class PlatformGitopsApplicationsApplicationSpecSourcesList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsApplicationsApplicationSpecSources[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsApplicationsApplicationSpecSourcesOutputReference {
    return new PlatformGitopsApplicationsApplicationSpecSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated {
  /**
  * Indicates to allows apps to have zero live resources (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#allow_empty PlatformGitopsApplications#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#prune PlatformGitopsApplications#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to revert resources back to their desired state upon modification in the cluster (default: false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#self_heal PlatformGitopsApplications#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function platformGitopsApplicationsApplicationSpecSyncPolicyAutomatedToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    prune: cdktf.booleanToTerraform(struct!.prune),
    self_heal: cdktf.booleanToTerraform(struct!.selfHeal),
  }
}


export function platformGitopsApplicationsApplicationSpecSyncPolicyAutomatedToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_heal: {
      value: cdktf.booleanToHclTerraform(struct!.selfHeal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._selfHeal !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHeal = this._selfHeal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowEmpty = value.allowEmpty;
      this._prune = value.prune;
      this._selfHeal = value.selfHeal;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // self_heal - computed: false, optional: true, required: false
  private _selfHeal?: boolean | cdktf.IResolvable; 
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
  public set selfHeal(value: boolean | cdktf.IResolvable) {
    this._selfHeal = value;
  }
  public resetSelfHeal() {
    this._selfHeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHealInput() {
    return this._selfHeal;
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff {
  /**
  * Amount to back off. Default unit is seconds, but could also be a duration (e.g. "2m", "1h").
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#duration PlatformGitopsApplications#duration}
  */
  readonly duration?: string;
  /**
  * Factor to multiply the base duration after each failed retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#factor PlatformGitopsApplications#factor}
  */
  readonly factor?: string;
  /**
  * Maximum amount of time allowed of the backoff strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#max_duration PlatformGitopsApplications#max_duration}
  */
  readonly maxDuration?: string;
}

export function platformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.stringToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function platformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.stringToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: string; 
  public get factor() {
    return this.getStringAttribute('factor');
  }
  public set factor(value: string) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSyncPolicyRetry {
  /**
  * Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#limit PlatformGitopsApplications#limit}
  */
  readonly limit?: string;
  /**
  * backoff block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#backoff PlatformGitopsApplications#backoff}
  */
  readonly backoff?: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff;
}

export function platformGitopsApplicationsApplicationSpecSyncPolicyRetryToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.stringToTerraform(struct!.limit),
    backoff: platformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
  }
}


export function platformGitopsApplicationsApplicationSpecSyncPolicyRetryToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicyRetry): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.stringToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backoff: {
      value: platformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSyncPolicyRetry | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetry | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limit = undefined;
      this._backoff.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limit = value.limit;
      this._backoff.internalValue = value.backoff;
    }
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: string; 
  public get limit() {
    return this.getStringAttribute('limit');
  }
  public set limit(value: string) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }
}
export interface PlatformGitopsApplicationsApplicationSpecSyncPolicy {
  /**
  * Options allow you to specify whole app sync-options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#sync_options PlatformGitopsApplications#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * automated block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#automated PlatformGitopsApplications#automated}
  */
  readonly automated?: PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated;
  /**
  * retry block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#retry PlatformGitopsApplications#retry}
  */
  readonly retry?: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetry;
}

export function platformGitopsApplicationsApplicationSpecSyncPolicyToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    automated: platformGitopsApplicationsApplicationSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    retry: platformGitopsApplicationsApplicationSpecSyncPolicyRetryToTerraform(struct!.retry),
  }
}


export function platformGitopsApplicationsApplicationSpecSyncPolicyToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecSyncPolicyOutputReference | PlatformGitopsApplicationsApplicationSpecSyncPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    automated: {
      value: platformGitopsApplicationsApplicationSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedList",
    },
    retry: {
      value: platformGitopsApplicationsApplicationSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationSpecSyncPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpecSyncPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncOptions = undefined;
      this._automated.internalValue = undefined;
      this._retry.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncOptions = value.syncOptions;
      this._automated.internalValue = value.automated;
      this._retry.internalValue = value.retry;
    }
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: PlatformGitopsApplicationsApplicationSpecSyncPolicyAutomated) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new PlatformGitopsApplicationsApplicationSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: PlatformGitopsApplicationsApplicationSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }
}
export interface PlatformGitopsApplicationsApplicationSpec {
  /**
  * The ArgoCD project name corresponding to this GitOps application. Value must match mappings of ArgoCD projects to harness project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#project PlatformGitopsApplications#project}
  */
  readonly project?: string;
  /**
  * Revision history limit for the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#revision_history_limit PlatformGitopsApplications#revision_history_limit}
  */
  readonly revisionHistoryLimit?: string;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#destination PlatformGitopsApplications#destination}
  */
  readonly destination?: PlatformGitopsApplicationsApplicationSpecDestination[] | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#source PlatformGitopsApplications#source}
  */
  readonly source?: PlatformGitopsApplicationsApplicationSpecSource;
  /**
  * sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#sources PlatformGitopsApplications#sources}
  */
  readonly sources?: PlatformGitopsApplicationsApplicationSpecSources[] | cdktf.IResolvable;
  /**
  * sync_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#sync_policy PlatformGitopsApplications#sync_policy}
  */
  readonly syncPolicy?: PlatformGitopsApplicationsApplicationSpecSyncPolicy;
}

export function platformGitopsApplicationsApplicationSpecToTerraform(struct?: PlatformGitopsApplicationsApplicationSpecOutputReference | PlatformGitopsApplicationsApplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.stringToTerraform(struct!.revisionHistoryLimit),
    destination: cdktf.listMapper(platformGitopsApplicationsApplicationSpecDestinationToTerraform, true)(struct!.destination),
    source: platformGitopsApplicationsApplicationSpecSourceToTerraform(struct!.source),
    sources: cdktf.listMapper(platformGitopsApplicationsApplicationSpecSourcesToTerraform, true)(struct!.sources),
    sync_policy: platformGitopsApplicationsApplicationSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function platformGitopsApplicationsApplicationSpecToHclTerraform(struct?: PlatformGitopsApplicationsApplicationSpecOutputReference | PlatformGitopsApplicationsApplicationSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.stringToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    destination: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecDestinationToHclTerraform, true)(struct!.destination),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecDestinationList",
    },
    source: {
      value: platformGitopsApplicationsApplicationSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourceList",
    },
    sources: {
      value: cdktf.listMapperHcl(platformGitopsApplicationsApplicationSpecSourcesToHclTerraform, true)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSourcesList",
    },
    sync_policy: {
      value: platformGitopsApplicationsApplicationSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecSyncPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplicationSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsApplicationsApplicationSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._destination.internalValue = undefined;
      this._source.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._destination.internalValue = value.destination;
      this._source.internalValue = value.source;
      this._sources.internalValue = value.sources;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: string; 
  public get revisionHistoryLimit() {
    return this.getStringAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: string) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // destination - computed: false, optional: true, required: false
  private _destination = new PlatformGitopsApplicationsApplicationSpecDestinationList(this, "destination", false);
  public get destination() {
    return this._destination;
  }
  public putDestination(value: PlatformGitopsApplicationsApplicationSpecDestination[] | cdktf.IResolvable) {
    this._destination.internalValue = value;
  }
  public resetDestination() {
    this._destination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: true, required: false
  private _source = new PlatformGitopsApplicationsApplicationSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: PlatformGitopsApplicationsApplicationSpecSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new PlatformGitopsApplicationsApplicationSpecSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: PlatformGitopsApplicationsApplicationSpecSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new PlatformGitopsApplicationsApplicationSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: PlatformGitopsApplicationsApplicationSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }
}
export interface PlatformGitopsApplicationsApplication {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#metadata PlatformGitopsApplications#metadata}
  */
  readonly metadata: PlatformGitopsApplicationsApplicationMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#spec PlatformGitopsApplications#spec}
  */
  readonly spec?: PlatformGitopsApplicationsApplicationSpec;
}

export function platformGitopsApplicationsApplicationToTerraform(struct?: PlatformGitopsApplicationsApplicationOutputReference | PlatformGitopsApplicationsApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: platformGitopsApplicationsApplicationMetadataToTerraform(struct!.metadata),
    spec: platformGitopsApplicationsApplicationSpecToTerraform(struct!.spec),
  }
}


export function platformGitopsApplicationsApplicationToHclTerraform(struct?: PlatformGitopsApplicationsApplicationOutputReference | PlatformGitopsApplicationsApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: platformGitopsApplicationsApplicationMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationMetadataList",
    },
    spec: {
      value: platformGitopsApplicationsApplicationSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsApplicationsApplicationSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsApplicationsApplicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsApplicationsApplication | undefined {
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

  public set internalValue(value: PlatformGitopsApplicationsApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new PlatformGitopsApplicationsApplicationMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PlatformGitopsApplicationsApplicationMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new PlatformGitopsApplicationsApplicationSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PlatformGitopsApplicationsApplicationSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications harness_platform_gitops_applications}
*/
export class PlatformGitopsApplications extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformGitopsApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformGitopsApplications to import
  * @param importFromId The id of the existing PlatformGitopsApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformGitopsApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_applications harness_platform_gitops_applications} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformGitopsApplicationsConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformGitopsApplicationsConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_applications',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._agentId = config.agentId;
    this._clusterId = config.clusterId;
    this._id = config.id;
    this._identifier = config.identifier;
    this._kind = config.kind;
    this._name = config.name;
    this._optionsRemoveExistingFinalizers = config.optionsRemoveExistingFinalizers;
    this._orgId = config.orgId;
    this._project = config.project;
    this._projectId = config.projectId;
    this._repoId = config.repoId;
    this._repoIds = config.repoIds;
    this._requestCascade = config.requestCascade;
    this._requestPropagationPolicy = config.requestPropagationPolicy;
    this._skipRepoValidation = config.skipRepoValidation;
    this._upsert = config.upsert;
    this._validate = config.validate;
    this._application.internalValue = config.application;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // agent_id - computed: false, optional: false, required: true
  private _agentId?: string; 
  public get agentId() {
    return this.getStringAttribute('agent_id');
  }
  public set agentId(value: string) {
    this._agentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentIdInput() {
    return this._agentId;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
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

  // options_remove_existing_finalizers - computed: false, optional: true, required: false
  private _optionsRemoveExistingFinalizers?: boolean | cdktf.IResolvable; 
  public get optionsRemoveExistingFinalizers() {
    return this.getBooleanAttribute('options_remove_existing_finalizers');
  }
  public set optionsRemoveExistingFinalizers(value: boolean | cdktf.IResolvable) {
    this._optionsRemoveExistingFinalizers = value;
  }
  public resetOptionsRemoveExistingFinalizers() {
    this._optionsRemoveExistingFinalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsRemoveExistingFinalizersInput() {
    return this._optionsRemoveExistingFinalizers;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // repo_id - computed: false, optional: true, required: false
  private _repoId?: string; 
  public get repoId() {
    return this.getStringAttribute('repo_id');
  }
  public set repoId(value: string) {
    this._repoId = value;
  }
  public resetRepoId() {
    this._repoId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdInput() {
    return this._repoId;
  }

  // repo_ids - computed: false, optional: true, required: false
  private _repoIds?: string[]; 
  public get repoIds() {
    return this.getListAttribute('repo_ids');
  }
  public set repoIds(value: string[]) {
    this._repoIds = value;
  }
  public resetRepoIds() {
    this._repoIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoIdsInput() {
    return this._repoIds;
  }

  // request_cascade - computed: false, optional: true, required: false
  private _requestCascade?: boolean | cdktf.IResolvable; 
  public get requestCascade() {
    return this.getBooleanAttribute('request_cascade');
  }
  public set requestCascade(value: boolean | cdktf.IResolvable) {
    this._requestCascade = value;
  }
  public resetRequestCascade() {
    this._requestCascade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCascadeInput() {
    return this._requestCascade;
  }

  // request_propagation_policy - computed: false, optional: true, required: false
  private _requestPropagationPolicy?: string; 
  public get requestPropagationPolicy() {
    return this.getStringAttribute('request_propagation_policy');
  }
  public set requestPropagationPolicy(value: string) {
    this._requestPropagationPolicy = value;
  }
  public resetRequestPropagationPolicy() {
    this._requestPropagationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPropagationPolicyInput() {
    return this._requestPropagationPolicy;
  }

  // skip_repo_validation - computed: false, optional: true, required: false
  private _skipRepoValidation?: boolean | cdktf.IResolvable; 
  public get skipRepoValidation() {
    return this.getBooleanAttribute('skip_repo_validation');
  }
  public set skipRepoValidation(value: boolean | cdktf.IResolvable) {
    this._skipRepoValidation = value;
  }
  public resetSkipRepoValidation() {
    this._skipRepoValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRepoValidationInput() {
    return this._skipRepoValidation;
  }

  // upsert - computed: false, optional: true, required: false
  private _upsert?: boolean | cdktf.IResolvable; 
  public get upsert() {
    return this.getBooleanAttribute('upsert');
  }
  public set upsert(value: boolean | cdktf.IResolvable) {
    this._upsert = value;
  }
  public resetUpsert() {
    this._upsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upsertInput() {
    return this._upsert;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: boolean | cdktf.IResolvable; 
  public get validate() {
    return this.getBooleanAttribute('validate');
  }
  public set validate(value: boolean | cdktf.IResolvable) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // application - computed: false, optional: false, required: true
  private _application = new PlatformGitopsApplicationsApplicationOutputReference(this, "application");
  public get application() {
    return this._application;
  }
  public putApplication(value: PlatformGitopsApplicationsApplication) {
    this._application.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      id: cdktf.stringToTerraform(this._id),
      identifier: cdktf.stringToTerraform(this._identifier),
      kind: cdktf.stringToTerraform(this._kind),
      name: cdktf.stringToTerraform(this._name),
      options_remove_existing_finalizers: cdktf.booleanToTerraform(this._optionsRemoveExistingFinalizers),
      org_id: cdktf.stringToTerraform(this._orgId),
      project: cdktf.stringToTerraform(this._project),
      project_id: cdktf.stringToTerraform(this._projectId),
      repo_id: cdktf.stringToTerraform(this._repoId),
      repo_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._repoIds),
      request_cascade: cdktf.booleanToTerraform(this._requestCascade),
      request_propagation_policy: cdktf.stringToTerraform(this._requestPropagationPolicy),
      skip_repo_validation: cdktf.booleanToTerraform(this._skipRepoValidation),
      upsert: cdktf.booleanToTerraform(this._upsert),
      validate: cdktf.booleanToTerraform(this._validate),
      application: platformGitopsApplicationsApplicationToTerraform(this._application.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_id: {
        value: cdktf.stringToHclTerraform(this._agentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kind: {
        value: cdktf.stringToHclTerraform(this._kind),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      options_remove_existing_finalizers: {
        value: cdktf.booleanToHclTerraform(this._optionsRemoveExistingFinalizers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_id: {
        value: cdktf.stringToHclTerraform(this._repoId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repo_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._repoIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      request_cascade: {
        value: cdktf.booleanToHclTerraform(this._requestCascade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_propagation_policy: {
        value: cdktf.stringToHclTerraform(this._requestPropagationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_repo_validation: {
        value: cdktf.booleanToHclTerraform(this._skipRepoValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      upsert: {
        value: cdktf.booleanToHclTerraform(this._upsert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate: {
        value: cdktf.booleanToHclTerraform(this._validate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application: {
        value: platformGitopsApplicationsApplicationToHclTerraform(this._application.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsApplicationsApplicationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
