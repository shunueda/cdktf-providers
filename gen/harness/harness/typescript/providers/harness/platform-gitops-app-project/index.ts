// https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformGitopsAppProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account identifier of the GitOps Agent where argo project will exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#account_id PlatformGitopsAppProject#account_id}
  */
  readonly accountId?: string;
  /**
  * Agent identifier of the agent where argo project will exist (include scope prefix)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#agent_id PlatformGitopsAppProject#agent_id}
  */
  readonly agentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#id PlatformGitopsAppProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Org identifier of the GitOps Agent where argo project is to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#org_id PlatformGitopsAppProject#org_id}
  */
  readonly orgId?: string;
  /**
  * Project identifier of the Gitops Agent where argo project is to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#project_id PlatformGitopsAppProject#project_id}
  */
  readonly projectId?: string;
  /**
  * Identifier for the GitOps Argo project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#query_name PlatformGitopsAppProject#query_name}
  */
  readonly queryName?: string;
  /**
  * Indicates if the argo project should be updated if existing and inserted if not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#upsert PlatformGitopsAppProject#upsert}
  */
  readonly upsert?: boolean | cdktf.IResolvable;
  /**
  * project block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#project PlatformGitopsAppProject#project}
  */
  readonly project: PlatformGitopsAppProjectProject;
}
export interface PlatformGitopsAppProjectProjectMetadataManagedFields {
  /**
  * API version of the operation performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#api_version PlatformGitopsAppProject#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Type of the fields in the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#fields_type PlatformGitopsAppProject#fields_type}
  */
  readonly fieldsType?: string;
  /**
  * Raw fields associated with the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#fields_v1 PlatformGitopsAppProject#fields_v1}
  */
  readonly fieldsV1?: { [key: string]: string };
  /**
  * Manager responsible for the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#manager PlatformGitopsAppProject#manager}
  */
  readonly manager?: string;
  /**
  * Operation type performed on the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#operation PlatformGitopsAppProject#operation}
  */
  readonly operation?: string;
  /**
  * Subresource associated with the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#subresource PlatformGitopsAppProject#subresource}
  */
  readonly subresource?: string;
  /**
  * Timestamp of the operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#time PlatformGitopsAppProject#time}
  */
  readonly time?: { [key: string]: string };
}

export function platformGitopsAppProjectProjectMetadataManagedFieldsToTerraform(struct?: PlatformGitopsAppProjectProjectMetadataManagedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    fields_type: cdktf.stringToTerraform(struct!.fieldsType),
    fields_v1: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.fieldsV1),
    manager: cdktf.stringToTerraform(struct!.manager),
    operation: cdktf.stringToTerraform(struct!.operation),
    subresource: cdktf.stringToTerraform(struct!.subresource),
    time: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.time),
  }
}


export function platformGitopsAppProjectProjectMetadataManagedFieldsToHclTerraform(struct?: PlatformGitopsAppProjectProjectMetadataManagedFields | cdktf.IResolvable): any {
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
    fields_type: {
      value: cdktf.stringToHclTerraform(struct!.fieldsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fields_v1: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.fieldsV1),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    manager: {
      value: cdktf.stringToHclTerraform(struct!.manager),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subresource: {
      value: cdktf.stringToHclTerraform(struct!.subresource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.time),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectMetadataManagedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectMetadataManagedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsType = this._fieldsType;
    }
    if (this._fieldsV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldsV1 = this._fieldsV1;
    }
    if (this._manager !== undefined) {
      hasAnyValues = true;
      internalValueResult.manager = this._manager;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._subresource !== undefined) {
      hasAnyValues = true;
      internalValueResult.subresource = this._subresource;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectMetadataManagedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldsType = undefined;
      this._fieldsV1 = undefined;
      this._manager = undefined;
      this._operation = undefined;
      this._subresource = undefined;
      this._time = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldsType = value.fieldsType;
      this._fieldsV1 = value.fieldsV1;
      this._manager = value.manager;
      this._operation = value.operation;
      this._subresource = value.subresource;
      this._time = value.time;
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

  // fields_type - computed: true, optional: true, required: false
  private _fieldsType?: string; 
  public get fieldsType() {
    return this.getStringAttribute('fields_type');
  }
  public set fieldsType(value: string) {
    this._fieldsType = value;
  }
  public resetFieldsType() {
    this._fieldsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsTypeInput() {
    return this._fieldsType;
  }

  // fields_v1 - computed: true, optional: true, required: false
  private _fieldsV1?: { [key: string]: string }; 
  public get fieldsV1() {
    return this.getStringMapAttribute('fields_v1');
  }
  public set fieldsV1(value: { [key: string]: string }) {
    this._fieldsV1 = value;
  }
  public resetFieldsV1() {
    this._fieldsV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsV1Input() {
    return this._fieldsV1;
  }

  // manager - computed: true, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
  }

  // operation - computed: true, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // subresource - computed: true, optional: true, required: false
  private _subresource?: string; 
  public get subresource() {
    return this.getStringAttribute('subresource');
  }
  public set subresource(value: string) {
    this._subresource = value;
  }
  public resetSubresource() {
    this._subresource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subresourceInput() {
    return this._subresource;
  }

  // time - computed: true, optional: true, required: false
  private _time?: { [key: string]: string }; 
  public get time() {
    return this.getStringMapAttribute('time');
  }
  public set time(value: { [key: string]: string }) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }
}

export class PlatformGitopsAppProjectProjectMetadataManagedFieldsList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectMetadataManagedFields[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectMetadataManagedFieldsOutputReference {
    return new PlatformGitopsAppProjectProjectMetadataManagedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectMetadata {
  /**
  * Annotations associated with the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#annotations PlatformGitopsAppProject#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Name of the cluster associated with the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#cluster_name PlatformGitopsAppProject#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Finalizers associated with the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#finalizers PlatformGitopsAppProject#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Labels associated with the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#labels PlatformGitopsAppProject#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Name of the GitOps project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#name PlatformGitopsAppProject#name}
  */
  readonly name?: string;
  /**
  * Namespace of the GitOps project. This must be the same as the namespace where the agent is installed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#namespace PlatformGitopsAppProject#namespace}
  */
  readonly namespace?: string;
  /**
  * Resource Version for the GitOps project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#resource_version PlatformGitopsAppProject#resource_version}
  */
  readonly resourceVersion?: string;
  /**
  * managed_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#managed_fields PlatformGitopsAppProject#managed_fields}
  */
  readonly managedFields?: PlatformGitopsAppProjectProjectMetadataManagedFields[] | cdktf.IResolvable;
}

export function platformGitopsAppProjectProjectMetadataToTerraform(struct?: PlatformGitopsAppProjectProjectMetadataOutputReference | PlatformGitopsAppProjectProjectMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    resource_version: cdktf.stringToTerraform(struct!.resourceVersion),
    managed_fields: cdktf.listMapper(platformGitopsAppProjectProjectMetadataManagedFieldsToTerraform, true)(struct!.managedFields),
  }
}


export function platformGitopsAppProjectProjectMetadataToHclTerraform(struct?: PlatformGitopsAppProjectProjectMetadataOutputReference | PlatformGitopsAppProjectProjectMetadata): any {
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
    resource_version: {
      value: cdktf.stringToHclTerraform(struct!.resourceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectMetadataManagedFieldsToHclTerraform, true)(struct!.managedFields),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectMetadataManagedFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsAppProjectProjectMetadata | undefined {
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
    if (this._resourceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceVersion = this._resourceVersion;
    }
    if (this._managedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFields = this._managedFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._clusterName = undefined;
      this._finalizers = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._resourceVersion = undefined;
      this._managedFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._clusterName = value.clusterName;
      this._finalizers = value.finalizers;
      this._labels = value.labels;
      this._name = value.name;
      this._namespace = value.namespace;
      this._resourceVersion = value.resourceVersion;
      this._managedFields.internalValue = value.managedFields;
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

  // cluster_name - computed: false, optional: true, required: false
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

  // finalizers - computed: false, optional: true, required: false
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

  // resource_version - computed: true, optional: true, required: false
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

  // managed_fields - computed: false, optional: true, required: false
  private _managedFields = new PlatformGitopsAppProjectProjectMetadataManagedFieldsList(this, "managed_fields", false);
  public get managedFields() {
    return this._managedFields;
  }
  public putManagedFields(value: PlatformGitopsAppProjectProjectMetadataManagedFields[] | cdktf.IResolvable) {
    this._managedFields.internalValue = value;
  }
  public resetManagedFields() {
    this._managedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsInput() {
    return this._managedFields.internalValue;
  }
}
export interface PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct {
  /**
  * Group of the cluster resource blacklist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#group PlatformGitopsAppProject#group}
  */
  readonly group?: string;
  /**
  * Kind of the cluster resource blacklist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#kind PlatformGitopsAppProject#kind}
  */
  readonly kind?: string;
}

export function platformGitopsAppProjectProjectSpecClusterResourceBlacklistStructToTerraform(struct?: PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function platformGitopsAppProjectProjectSpecClusterResourceBlacklistStructToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStructList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStructOutputReference {
    return new PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct {
  /**
  * Group of the cluster resource whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#group PlatformGitopsAppProject#group}
  */
  readonly group?: string;
  /**
  * Kind of the cluster resource whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#kind PlatformGitopsAppProject#kind}
  */
  readonly kind?: string;
}

export function platformGitopsAppProjectProjectSpecClusterResourceWhitelistStructToTerraform(struct?: PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function platformGitopsAppProjectProjectSpecClusterResourceWhitelistStructToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStructOutputReference {
    return new PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecDestinations {
  /**
  * Name of the destination cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#name PlatformGitopsAppProject#name}
  */
  readonly name?: string;
  /**
  * Permitted Namespaces for deployment in the destination cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#namespace PlatformGitopsAppProject#namespace}
  */
  readonly namespace?: string;
  /**
  * Server URL of the destination cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#server PlatformGitopsAppProject#server}
  */
  readonly server?: string;
}

export function platformGitopsAppProjectProjectSpecDestinationsToTerraform(struct?: PlatformGitopsAppProjectProjectSpecDestinations | cdktf.IResolvable): any {
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


export function platformGitopsAppProjectProjectSpecDestinationsToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecDestinations | cdktf.IResolvable): any {
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

export class PlatformGitopsAppProjectProjectSpecDestinationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecDestinations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecDestinations | cdktf.IResolvable | undefined) {
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

export class PlatformGitopsAppProjectProjectSpecDestinationsList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecDestinations[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecDestinationsOutputReference {
    return new PlatformGitopsAppProjectProjectSpecDestinationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct {
  /**
  * Group of the namespace resource blacklist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#group PlatformGitopsAppProject#group}
  */
  readonly group?: string;
  /**
  * Kind of the namespace resource blacklist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#kind PlatformGitopsAppProject#kind}
  */
  readonly kind?: string;
}

export function platformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructToTerraform(struct?: PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function platformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructOutputReference {
    return new PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct {
  /**
  * Group of the namespace resource whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#group PlatformGitopsAppProject#group}
  */
  readonly group?: string;
  /**
  * Kind of the namespace resource whitelist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#kind PlatformGitopsAppProject#kind}
  */
  readonly kind?: string;
}

export function platformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructToTerraform(struct?: PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
  }
}


export function platformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructOutputReference {
    return new PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore {
  /**
  * Group of the ignored orphaned resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#group PlatformGitopsAppProject#group}
  */
  readonly group?: string;
  /**
  * Kind of the ignored orphaned resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#kind PlatformGitopsAppProject#kind}
  */
  readonly kind?: string;
  /**
  * Name of the ignored orphaned resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#name PlatformGitopsAppProject#name}
  */
  readonly name?: string;
}

export function platformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreToTerraform(struct?: PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function platformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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
}

export class PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreOutputReference {
    return new PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecOrphanedResources {
  /**
  * Whether to warn about orphaned resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#warn PlatformGitopsAppProject#warn}
  */
  readonly warn?: boolean | cdktf.IResolvable;
  /**
  * ignore block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#ignore PlatformGitopsAppProject#ignore}
  */
  readonly ignore?: PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore[] | cdktf.IResolvable;
}

export function platformGitopsAppProjectProjectSpecOrphanedResourcesToTerraform(struct?: PlatformGitopsAppProjectProjectSpecOrphanedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    warn: cdktf.booleanToTerraform(struct!.warn),
    ignore: cdktf.listMapper(platformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreToTerraform, true)(struct!.ignore),
  }
}


export function platformGitopsAppProjectProjectSpecOrphanedResourcesToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecOrphanedResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    warn: {
      value: cdktf.booleanToHclTerraform(struct!.warn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreToHclTerraform, true)(struct!.ignore),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecOrphanedResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecOrphanedResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._warn !== undefined) {
      hasAnyValues = true;
      internalValueResult.warn = this._warn;
    }
    if (this._ignore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignore = this._ignore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecOrphanedResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._warn = undefined;
      this._ignore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._warn = value.warn;
      this._ignore.internalValue = value.ignore;
    }
  }

  // warn - computed: false, optional: true, required: false
  private _warn?: boolean | cdktf.IResolvable; 
  public get warn() {
    return this.getBooleanAttribute('warn');
  }
  public set warn(value: boolean | cdktf.IResolvable) {
    this._warn = value;
  }
  public resetWarn() {
    this._warn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warnInput() {
    return this._warn;
  }

  // ignore - computed: false, optional: true, required: false
  private _ignore = new PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnoreList(this, "ignore", false);
  public get ignore() {
    return this._ignore;
  }
  public putIgnore(value: PlatformGitopsAppProjectProjectSpecOrphanedResourcesIgnore[] | cdktf.IResolvable) {
    this._ignore.internalValue = value;
  }
  public resetIgnore() {
    this._ignore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreInput() {
    return this._ignore.internalValue;
  }
}

export class PlatformGitopsAppProjectProjectSpecOrphanedResourcesList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecOrphanedResources[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecOrphanedResourcesOutputReference {
    return new PlatformGitopsAppProjectProjectSpecOrphanedResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecRolesJwtTokens {
  /**
  * Expiration time of the JWT token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#exp PlatformGitopsAppProject#exp}
  */
  readonly exp?: string;
  /**
  * Issued At time of the JWT token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#iat PlatformGitopsAppProject#iat}
  */
  readonly iat?: string;
  /**
  * ID of the JWT token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#id PlatformGitopsAppProject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function platformGitopsAppProjectProjectSpecRolesJwtTokensToTerraform(struct?: PlatformGitopsAppProjectProjectSpecRolesJwtTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exp: cdktf.stringToTerraform(struct!.exp),
    iat: cdktf.stringToTerraform(struct!.iat),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function platformGitopsAppProjectProjectSpecRolesJwtTokensToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecRolesJwtTokens | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exp: {
      value: cdktf.stringToHclTerraform(struct!.exp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iat: {
      value: cdktf.stringToHclTerraform(struct!.iat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecRolesJwtTokensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecRolesJwtTokens | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exp !== undefined) {
      hasAnyValues = true;
      internalValueResult.exp = this._exp;
    }
    if (this._iat !== undefined) {
      hasAnyValues = true;
      internalValueResult.iat = this._iat;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecRolesJwtTokens | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exp = undefined;
      this._iat = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exp = value.exp;
      this._iat = value.iat;
      this._id = value.id;
    }
  }

  // exp - computed: false, optional: true, required: false
  private _exp?: string; 
  public get exp() {
    return this.getStringAttribute('exp');
  }
  public set exp(value: string) {
    this._exp = value;
  }
  public resetExp() {
    this._exp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expInput() {
    return this._exp;
  }

  // iat - computed: false, optional: true, required: false
  private _iat?: string; 
  public get iat() {
    return this.getStringAttribute('iat');
  }
  public set iat(value: string) {
    this._iat = value;
  }
  public resetIat() {
    this._iat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iatInput() {
    return this._iat;
  }

  // id - computed: false, optional: true, required: false
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
}

export class PlatformGitopsAppProjectProjectSpecRolesJwtTokensList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecRolesJwtTokens[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecRolesJwtTokensOutputReference {
    return new PlatformGitopsAppProjectProjectSpecRolesJwtTokensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecRoles {
  /**
  * Description of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#description PlatformGitopsAppProject#description}
  */
  readonly description: string;
  /**
  * Groups associated with the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#groups PlatformGitopsAppProject#groups}
  */
  readonly groups?: string[];
  /**
  * Name of the role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#name PlatformGitopsAppProject#name}
  */
  readonly name: string;
  /**
  * Policies associated with the role. These are argo RBAC policies and may not necessarily reflect in harness.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#policies PlatformGitopsAppProject#policies}
  */
  readonly policies?: string[];
  /**
  * jwt_tokens block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#jwt_tokens PlatformGitopsAppProject#jwt_tokens}
  */
  readonly jwtTokens?: PlatformGitopsAppProjectProjectSpecRolesJwtTokens[] | cdktf.IResolvable;
}

export function platformGitopsAppProjectProjectSpecRolesToTerraform(struct?: PlatformGitopsAppProjectProjectSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    name: cdktf.stringToTerraform(struct!.name),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
    jwt_tokens: cdktf.listMapper(platformGitopsAppProjectProjectSpecRolesJwtTokensToTerraform, true)(struct!.jwtTokens),
  }
}


export function platformGitopsAppProjectProjectSpecRolesToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    jwt_tokens: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecRolesJwtTokensToHclTerraform, true)(struct!.jwtTokens),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecRolesJwtTokensList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    if (this._jwtTokens?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokens = this._jwtTokens?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._groups = undefined;
      this._name = undefined;
      this._policies = undefined;
      this._jwtTokens.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._groups = value.groups;
      this._name = value.name;
      this._policies = value.policies;
      this._jwtTokens.internalValue = value.jwtTokens;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return this.getListAttribute('policies');
  }
  public set policies(value: string[]) {
    this._policies = value;
  }
  public resetPolicies() {
    this._policies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies;
  }

  // jwt_tokens - computed: false, optional: true, required: false
  private _jwtTokens = new PlatformGitopsAppProjectProjectSpecRolesJwtTokensList(this, "jwt_tokens", false);
  public get jwtTokens() {
    return this._jwtTokens;
  }
  public putJwtTokens(value: PlatformGitopsAppProjectProjectSpecRolesJwtTokens[] | cdktf.IResolvable) {
    this._jwtTokens.internalValue = value;
  }
  public resetJwtTokens() {
    this._jwtTokens.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokensInput() {
    return this._jwtTokens.internalValue;
  }
}

export class PlatformGitopsAppProjectProjectSpecRolesList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecRoles[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecRolesOutputReference {
    return new PlatformGitopsAppProjectProjectSpecRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecSignatureKeys {
  /**
  * ID of the signature key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#key_id PlatformGitopsAppProject#key_id}
  */
  readonly keyId?: string;
}

export function platformGitopsAppProjectProjectSpecSignatureKeysToTerraform(struct?: PlatformGitopsAppProjectProjectSpecSignatureKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
  }
}


export function platformGitopsAppProjectProjectSpecSignatureKeysToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecSignatureKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecSignatureKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecSignatureKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecSignatureKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }
}

export class PlatformGitopsAppProjectProjectSpecSignatureKeysList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecSignatureKeys[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecSignatureKeysOutputReference {
    return new PlatformGitopsAppProjectProjectSpecSignatureKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpecSyncWindows {
  /**
  * Applications associated with synchronization window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#applications PlatformGitopsAppProject#applications}
  */
  readonly applications?: string[];
  /**
  * Clusters associated with synchronization window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#clusters PlatformGitopsAppProject#clusters}
  */
  readonly clusters?: string[];
  /**
  * Duration of synchronization window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#duration PlatformGitopsAppProject#duration}
  */
  readonly duration?: string;
  /**
  * Kind of synchronization window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#kind PlatformGitopsAppProject#kind}
  */
  readonly kind?: string;
  /**
  * Whether manual synchronization is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#manual_sync PlatformGitopsAppProject#manual_sync}
  */
  readonly manualSync?: boolean | cdktf.IResolvable;
  /**
  * Namespaces associated with synchronization window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#namespaces PlatformGitopsAppProject#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * Schedule of synchronization window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#schedule PlatformGitopsAppProject#schedule}
  */
  readonly schedule?: string;
  /**
  * Time zone of synchronization window.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#time_zone PlatformGitopsAppProject#time_zone}
  */
  readonly timeZone?: string;
}

export function platformGitopsAppProjectProjectSpecSyncWindowsToTerraform(struct?: PlatformGitopsAppProjectProjectSpecSyncWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applications: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applications),
    clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusters),
    duration: cdktf.stringToTerraform(struct!.duration),
    kind: cdktf.stringToTerraform(struct!.kind),
    manual_sync: cdktf.booleanToTerraform(struct!.manualSync),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    time_zone: cdktf.stringToTerraform(struct!.timeZone),
  }
}


export function platformGitopsAppProjectProjectSpecSyncWindowsToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecSyncWindows | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applications: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applications),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clusters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
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
    manual_sync: {
      value: cdktf.booleanToHclTerraform(struct!.manualSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_zone: {
      value: cdktf.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecSyncWindowsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PlatformGitopsAppProjectProjectSpecSyncWindows | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applications !== undefined) {
      hasAnyValues = true;
      internalValueResult.applications = this._applications;
    }
    if (this._clusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusters = this._clusters;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._manualSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSync = this._manualSync;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpecSyncWindows | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applications = undefined;
      this._clusters = undefined;
      this._duration = undefined;
      this._kind = undefined;
      this._manualSync = undefined;
      this._namespaces = undefined;
      this._schedule = undefined;
      this._timeZone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applications = value.applications;
      this._clusters = value.clusters;
      this._duration = value.duration;
      this._kind = value.kind;
      this._manualSync = value.manualSync;
      this._namespaces = value.namespaces;
      this._schedule = value.schedule;
      this._timeZone = value.timeZone;
    }
  }

  // applications - computed: true, optional: true, required: false
  private _applications?: string[]; 
  public get applications() {
    return this.getListAttribute('applications');
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  public resetApplications() {
    this._applications = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // clusters - computed: true, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return this.getListAttribute('clusters');
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // duration - computed: true, optional: true, required: false
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

  // manual_sync - computed: true, optional: true, required: false
  private _manualSync?: boolean | cdktf.IResolvable; 
  public get manualSync() {
    return this.getBooleanAttribute('manual_sync');
  }
  public set manualSync(value: boolean | cdktf.IResolvable) {
    this._manualSync = value;
  }
  public resetManualSync() {
    this._manualSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSyncInput() {
    return this._manualSync;
  }

  // namespaces - computed: true, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // time_zone - computed: true, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}

export class PlatformGitopsAppProjectProjectSpecSyncWindowsList extends cdktf.ComplexList {
  public internalValue? : PlatformGitopsAppProjectProjectSpecSyncWindows[] | cdktf.IResolvable

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
  public get(index: number): PlatformGitopsAppProjectProjectSpecSyncWindowsOutputReference {
    return new PlatformGitopsAppProjectProjectSpecSyncWindowsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PlatformGitopsAppProjectProjectSpec {
  /**
  * Description of the Argo project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#description PlatformGitopsAppProject#description}
  */
  readonly description?: string;
  /**
  * This option determines whether destinations can only reference clusters which are argo project-scoped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#permit_only_project_scoped_clusters PlatformGitopsAppProject#permit_only_project_scoped_clusters}
  */
  readonly permitOnlyProjectScopedClusters?: boolean | cdktf.IResolvable;
  /**
  * Source namespaces defines the namespaces application resources are allowed to be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#source_namespaces PlatformGitopsAppProject#source_namespaces}
  */
  readonly sourceNamespaces?: string[];
  /**
  * Allowed Source repositories for the Argo project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#source_repos PlatformGitopsAppProject#source_repos}
  */
  readonly sourceRepos?: string[];
  /**
  * cluster_resource_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#cluster_resource_blacklist PlatformGitopsAppProject#cluster_resource_blacklist}
  */
  readonly clusterResourceBlacklist?: PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable;
  /**
  * cluster_resource_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#cluster_resource_whitelist PlatformGitopsAppProject#cluster_resource_whitelist}
  */
  readonly clusterResourceWhitelist?: PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable;
  /**
  * destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#destinations PlatformGitopsAppProject#destinations}
  */
  readonly destinations?: PlatformGitopsAppProjectProjectSpecDestinations[] | cdktf.IResolvable;
  /**
  * namespace_resource_blacklist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#namespace_resource_blacklist PlatformGitopsAppProject#namespace_resource_blacklist}
  */
  readonly namespaceResourceBlacklist?: PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable;
  /**
  * namespace_resource_whitelist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#namespace_resource_whitelist PlatformGitopsAppProject#namespace_resource_whitelist}
  */
  readonly namespaceResourceWhitelist?: PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable;
  /**
  * orphaned_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#orphaned_resources PlatformGitopsAppProject#orphaned_resources}
  */
  readonly orphanedResources?: PlatformGitopsAppProjectProjectSpecOrphanedResources[] | cdktf.IResolvable;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#roles PlatformGitopsAppProject#roles}
  */
  readonly roles?: PlatformGitopsAppProjectProjectSpecRoles[] | cdktf.IResolvable;
  /**
  * signature_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#signature_keys PlatformGitopsAppProject#signature_keys}
  */
  readonly signatureKeys?: PlatformGitopsAppProjectProjectSpecSignatureKeys[] | cdktf.IResolvable;
  /**
  * sync_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#sync_windows PlatformGitopsAppProject#sync_windows}
  */
  readonly syncWindows?: PlatformGitopsAppProjectProjectSpecSyncWindows[] | cdktf.IResolvable;
}

export function platformGitopsAppProjectProjectSpecToTerraform(struct?: PlatformGitopsAppProjectProjectSpecOutputReference | PlatformGitopsAppProjectProjectSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    permit_only_project_scoped_clusters: cdktf.booleanToTerraform(struct!.permitOnlyProjectScopedClusters),
    source_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceNamespaces),
    source_repos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceRepos),
    cluster_resource_blacklist: cdktf.listMapper(platformGitopsAppProjectProjectSpecClusterResourceBlacklistStructToTerraform, true)(struct!.clusterResourceBlacklist),
    cluster_resource_whitelist: cdktf.listMapper(platformGitopsAppProjectProjectSpecClusterResourceWhitelistStructToTerraform, true)(struct!.clusterResourceWhitelist),
    destinations: cdktf.listMapper(platformGitopsAppProjectProjectSpecDestinationsToTerraform, true)(struct!.destinations),
    namespace_resource_blacklist: cdktf.listMapper(platformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructToTerraform, true)(struct!.namespaceResourceBlacklist),
    namespace_resource_whitelist: cdktf.listMapper(platformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructToTerraform, true)(struct!.namespaceResourceWhitelist),
    orphaned_resources: cdktf.listMapper(platformGitopsAppProjectProjectSpecOrphanedResourcesToTerraform, true)(struct!.orphanedResources),
    roles: cdktf.listMapper(platformGitopsAppProjectProjectSpecRolesToTerraform, true)(struct!.roles),
    signature_keys: cdktf.listMapper(platformGitopsAppProjectProjectSpecSignatureKeysToTerraform, true)(struct!.signatureKeys),
    sync_windows: cdktf.listMapper(platformGitopsAppProjectProjectSpecSyncWindowsToTerraform, true)(struct!.syncWindows),
  }
}


export function platformGitopsAppProjectProjectSpecToHclTerraform(struct?: PlatformGitopsAppProjectProjectSpecOutputReference | PlatformGitopsAppProjectProjectSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permit_only_project_scoped_clusters: {
      value: cdktf.booleanToHclTerraform(struct!.permitOnlyProjectScopedClusters),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_repos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceRepos),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    cluster_resource_blacklist: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecClusterResourceBlacklistStructToHclTerraform, true)(struct!.clusterResourceBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStructList",
    },
    cluster_resource_whitelist: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecClusterResourceWhitelistStructToHclTerraform, true)(struct!.clusterResourceWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStructList",
    },
    destinations: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecDestinationsToHclTerraform, true)(struct!.destinations),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecDestinationsList",
    },
    namespace_resource_blacklist: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructToHclTerraform, true)(struct!.namespaceResourceBlacklist),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructList",
    },
    namespace_resource_whitelist: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructToHclTerraform, true)(struct!.namespaceResourceWhitelist),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructList",
    },
    orphaned_resources: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecOrphanedResourcesToHclTerraform, true)(struct!.orphanedResources),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecOrphanedResourcesList",
    },
    roles: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecRolesToHclTerraform, true)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecRolesList",
    },
    signature_keys: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecSignatureKeysToHclTerraform, true)(struct!.signatureKeys),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecSignatureKeysList",
    },
    sync_windows: {
      value: cdktf.listMapperHcl(platformGitopsAppProjectProjectSpecSyncWindowsToHclTerraform, true)(struct!.syncWindows),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecSyncWindowsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsAppProjectProjectSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._permitOnlyProjectScopedClusters !== undefined) {
      hasAnyValues = true;
      internalValueResult.permitOnlyProjectScopedClusters = this._permitOnlyProjectScopedClusters;
    }
    if (this._sourceNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNamespaces = this._sourceNamespaces;
    }
    if (this._sourceRepos !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceRepos = this._sourceRepos;
    }
    if (this._clusterResourceBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceBlacklist = this._clusterResourceBlacklist?.internalValue;
    }
    if (this._clusterResourceWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterResourceWhitelist = this._clusterResourceWhitelist?.internalValue;
    }
    if (this._destinations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinations = this._destinations?.internalValue;
    }
    if (this._namespaceResourceBlacklist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceResourceBlacklist = this._namespaceResourceBlacklist?.internalValue;
    }
    if (this._namespaceResourceWhitelist?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceResourceWhitelist = this._namespaceResourceWhitelist?.internalValue;
    }
    if (this._orphanedResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orphanedResources = this._orphanedResources?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    if (this._signatureKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureKeys = this._signatureKeys?.internalValue;
    }
    if (this._syncWindows?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncWindows = this._syncWindows?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PlatformGitopsAppProjectProjectSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._permitOnlyProjectScopedClusters = undefined;
      this._sourceNamespaces = undefined;
      this._sourceRepos = undefined;
      this._clusterResourceBlacklist.internalValue = undefined;
      this._clusterResourceWhitelist.internalValue = undefined;
      this._destinations.internalValue = undefined;
      this._namespaceResourceBlacklist.internalValue = undefined;
      this._namespaceResourceWhitelist.internalValue = undefined;
      this._orphanedResources.internalValue = undefined;
      this._roles.internalValue = undefined;
      this._signatureKeys.internalValue = undefined;
      this._syncWindows.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._permitOnlyProjectScopedClusters = value.permitOnlyProjectScopedClusters;
      this._sourceNamespaces = value.sourceNamespaces;
      this._sourceRepos = value.sourceRepos;
      this._clusterResourceBlacklist.internalValue = value.clusterResourceBlacklist;
      this._clusterResourceWhitelist.internalValue = value.clusterResourceWhitelist;
      this._destinations.internalValue = value.destinations;
      this._namespaceResourceBlacklist.internalValue = value.namespaceResourceBlacklist;
      this._namespaceResourceWhitelist.internalValue = value.namespaceResourceWhitelist;
      this._orphanedResources.internalValue = value.orphanedResources;
      this._roles.internalValue = value.roles;
      this._signatureKeys.internalValue = value.signatureKeys;
      this._syncWindows.internalValue = value.syncWindows;
    }
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

  // permit_only_project_scoped_clusters - computed: false, optional: true, required: false
  private _permitOnlyProjectScopedClusters?: boolean | cdktf.IResolvable; 
  public get permitOnlyProjectScopedClusters() {
    return this.getBooleanAttribute('permit_only_project_scoped_clusters');
  }
  public set permitOnlyProjectScopedClusters(value: boolean | cdktf.IResolvable) {
    this._permitOnlyProjectScopedClusters = value;
  }
  public resetPermitOnlyProjectScopedClusters() {
    this._permitOnlyProjectScopedClusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitOnlyProjectScopedClustersInput() {
    return this._permitOnlyProjectScopedClusters;
  }

  // source_namespaces - computed: false, optional: true, required: false
  private _sourceNamespaces?: string[]; 
  public get sourceNamespaces() {
    return this.getListAttribute('source_namespaces');
  }
  public set sourceNamespaces(value: string[]) {
    this._sourceNamespaces = value;
  }
  public resetSourceNamespaces() {
    this._sourceNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespacesInput() {
    return this._sourceNamespaces;
  }

  // source_repos - computed: false, optional: true, required: false
  private _sourceRepos?: string[]; 
  public get sourceRepos() {
    return this.getListAttribute('source_repos');
  }
  public set sourceRepos(value: string[]) {
    this._sourceRepos = value;
  }
  public resetSourceRepos() {
    this._sourceRepos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceReposInput() {
    return this._sourceRepos;
  }

  // cluster_resource_blacklist - computed: false, optional: true, required: false
  private _clusterResourceBlacklist = new PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStructList(this, "cluster_resource_blacklist", false);
  public get clusterResourceBlacklist() {
    return this._clusterResourceBlacklist;
  }
  public putClusterResourceBlacklist(value: PlatformGitopsAppProjectProjectSpecClusterResourceBlacklistStruct[] | cdktf.IResolvable) {
    this._clusterResourceBlacklist.internalValue = value;
  }
  public resetClusterResourceBlacklist() {
    this._clusterResourceBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceBlacklistInput() {
    return this._clusterResourceBlacklist.internalValue;
  }

  // cluster_resource_whitelist - computed: false, optional: true, required: false
  private _clusterResourceWhitelist = new PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStructList(this, "cluster_resource_whitelist", false);
  public get clusterResourceWhitelist() {
    return this._clusterResourceWhitelist;
  }
  public putClusterResourceWhitelist(value: PlatformGitopsAppProjectProjectSpecClusterResourceWhitelistStruct[] | cdktf.IResolvable) {
    this._clusterResourceWhitelist.internalValue = value;
  }
  public resetClusterResourceWhitelist() {
    this._clusterResourceWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterResourceWhitelistInput() {
    return this._clusterResourceWhitelist.internalValue;
  }

  // destinations - computed: false, optional: true, required: false
  private _destinations = new PlatformGitopsAppProjectProjectSpecDestinationsList(this, "destinations", false);
  public get destinations() {
    return this._destinations;
  }
  public putDestinations(value: PlatformGitopsAppProjectProjectSpecDestinations[] | cdktf.IResolvable) {
    this._destinations.internalValue = value;
  }
  public resetDestinations() {
    this._destinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationsInput() {
    return this._destinations.internalValue;
  }

  // namespace_resource_blacklist - computed: false, optional: true, required: false
  private _namespaceResourceBlacklist = new PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStructList(this, "namespace_resource_blacklist", false);
  public get namespaceResourceBlacklist() {
    return this._namespaceResourceBlacklist;
  }
  public putNamespaceResourceBlacklist(value: PlatformGitopsAppProjectProjectSpecNamespaceResourceBlacklistStruct[] | cdktf.IResolvable) {
    this._namespaceResourceBlacklist.internalValue = value;
  }
  public resetNamespaceResourceBlacklist() {
    this._namespaceResourceBlacklist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceResourceBlacklistInput() {
    return this._namespaceResourceBlacklist.internalValue;
  }

  // namespace_resource_whitelist - computed: false, optional: true, required: false
  private _namespaceResourceWhitelist = new PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStructList(this, "namespace_resource_whitelist", false);
  public get namespaceResourceWhitelist() {
    return this._namespaceResourceWhitelist;
  }
  public putNamespaceResourceWhitelist(value: PlatformGitopsAppProjectProjectSpecNamespaceResourceWhitelistStruct[] | cdktf.IResolvable) {
    this._namespaceResourceWhitelist.internalValue = value;
  }
  public resetNamespaceResourceWhitelist() {
    this._namespaceResourceWhitelist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceResourceWhitelistInput() {
    return this._namespaceResourceWhitelist.internalValue;
  }

  // orphaned_resources - computed: false, optional: true, required: false
  private _orphanedResources = new PlatformGitopsAppProjectProjectSpecOrphanedResourcesList(this, "orphaned_resources", false);
  public get orphanedResources() {
    return this._orphanedResources;
  }
  public putOrphanedResources(value: PlatformGitopsAppProjectProjectSpecOrphanedResources[] | cdktf.IResolvable) {
    this._orphanedResources.internalValue = value;
  }
  public resetOrphanedResources() {
    this._orphanedResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orphanedResourcesInput() {
    return this._orphanedResources.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new PlatformGitopsAppProjectProjectSpecRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: PlatformGitopsAppProjectProjectSpecRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // signature_keys - computed: false, optional: true, required: false
  private _signatureKeys = new PlatformGitopsAppProjectProjectSpecSignatureKeysList(this, "signature_keys", false);
  public get signatureKeys() {
    return this._signatureKeys;
  }
  public putSignatureKeys(value: PlatformGitopsAppProjectProjectSpecSignatureKeys[] | cdktf.IResolvable) {
    this._signatureKeys.internalValue = value;
  }
  public resetSignatureKeys() {
    this._signatureKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureKeysInput() {
    return this._signatureKeys.internalValue;
  }

  // sync_windows - computed: false, optional: true, required: false
  private _syncWindows = new PlatformGitopsAppProjectProjectSpecSyncWindowsList(this, "sync_windows", false);
  public get syncWindows() {
    return this._syncWindows;
  }
  public putSyncWindows(value: PlatformGitopsAppProjectProjectSpecSyncWindows[] | cdktf.IResolvable) {
    this._syncWindows.internalValue = value;
  }
  public resetSyncWindows() {
    this._syncWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncWindowsInput() {
    return this._syncWindows.internalValue;
  }
}
export interface PlatformGitopsAppProjectProject {
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#metadata PlatformGitopsAppProject#metadata}
  */
  readonly metadata: PlatformGitopsAppProjectProjectMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#spec PlatformGitopsAppProject#spec}
  */
  readonly spec: PlatformGitopsAppProjectProjectSpec;
}

export function platformGitopsAppProjectProjectToTerraform(struct?: PlatformGitopsAppProjectProjectOutputReference | PlatformGitopsAppProjectProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: platformGitopsAppProjectProjectMetadataToTerraform(struct!.metadata),
    spec: platformGitopsAppProjectProjectSpecToTerraform(struct!.spec),
  }
}


export function platformGitopsAppProjectProjectToHclTerraform(struct?: PlatformGitopsAppProjectProjectOutputReference | PlatformGitopsAppProjectProject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: platformGitopsAppProjectProjectMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectMetadataList",
    },
    spec: {
      value: platformGitopsAppProjectProjectSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "list",
      storageClassType: "PlatformGitopsAppProjectProjectSpecList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PlatformGitopsAppProjectProjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PlatformGitopsAppProjectProject | undefined {
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

  public set internalValue(value: PlatformGitopsAppProjectProject | undefined) {
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
  private _metadata = new PlatformGitopsAppProjectProjectMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: PlatformGitopsAppProjectProjectMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new PlatformGitopsAppProjectProjectSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: PlatformGitopsAppProjectProjectSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project harness_platform_gitops_app_project}
*/
export class PlatformGitopsAppProject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_platform_gitops_app_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformGitopsAppProject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformGitopsAppProject to import
  * @param importFromId The id of the existing PlatformGitopsAppProject that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformGitopsAppProject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_platform_gitops_app_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.0/docs/resources/platform_gitops_app_project harness_platform_gitops_app_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformGitopsAppProjectConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformGitopsAppProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_platform_gitops_app_project',
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
    this._id = config.id;
    this._orgId = config.orgId;
    this._projectId = config.projectId;
    this._queryName = config.queryName;
    this._upsert = config.upsert;
    this._project.internalValue = config.project;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // query_name - computed: true, optional: true, required: false
  private _queryName?: string; 
  public get queryName() {
    return this.getStringAttribute('query_name');
  }
  public set queryName(value: string) {
    this._queryName = value;
  }
  public resetQueryName() {
    this._queryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryNameInput() {
    return this._queryName;
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

  // project - computed: false, optional: false, required: true
  private _project = new PlatformGitopsAppProjectProjectOutputReference(this, "project");
  public get project() {
    return this._project;
  }
  public putProject(value: PlatformGitopsAppProjectProject) {
    this._project.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      agent_id: cdktf.stringToTerraform(this._agentId),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      project_id: cdktf.stringToTerraform(this._projectId),
      query_name: cdktf.stringToTerraform(this._queryName),
      upsert: cdktf.booleanToTerraform(this._upsert),
      project: platformGitopsAppProjectProjectToTerraform(this._project.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
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
      query_name: {
        value: cdktf.stringToHclTerraform(this._queryName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upsert: {
        value: cdktf.booleanToHclTerraform(this._upsert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: platformGitopsAppProjectProjectToHclTerraform(this._project.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PlatformGitopsAppProjectProjectList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
