// https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserGroupPermissionsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * The account permissions of the user group. Valid options are ADMINISTER_OTHER_ACCOUNT_FUNCTIONS, CREATE_AND_DELETE_APPLICATION, CREATE_CUSTOM_DASHBOARDS, MANAGE_ALERT_NOTIFICATION_RULES, MANAGE_API_KEYS, MANAGE_APPLICATION_STACKS, MANAGE_AUTHENTICATION_SETTINGS, MANAGE_CLOUD_PROVIDERS, MANAGE_CONFIG_AS_CODE, MANAGE_CONNECTORS, MANAGE_CUSTOM_DASHBOARDS, MANAGE_DELEGATE_PROFILES, MANAGE_DELEGATES, MANAGE_DEPLOYMENT_FREEZES, MANAGE_IP_WHITELIST, MANAGE_PIPELINE_GOVERNANCE_STANDARDS, MANAGE_RESTRICTED_ACCESS, MANAGE_SECRET_MANAGERS, MANAGE_SECRETS, MANAGE_SSH_AND_WINRM, MANAGE_TAGS, MANAGE_TEMPLATE_LIBRARY, MANAGE_USER_AND_USER_GROUPS_AND_API_KEYS, MANAGE_USERS_AND_GROUPS, READ_USERS_AND_GROUPS, VIEW_AUDITS, VIEW_USER_AND_USER_GROUPS_AND_API_KEYS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#account_permissions UserGroupPermissionsA#account_permissions}
  */
  readonly accountPermissions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#id UserGroupPermissionsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique identifier of the user group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#user_group_id UserGroupPermissionsA#user_group_id}
  */
  readonly userGroupId: string;
  /**
  * app_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_permissions UserGroupPermissionsA#app_permissions}
  */
  readonly appPermissions?: UserGroupPermissionsAppPermissionsA;
}
export interface UserGroupPermissionsAppPermissionsAllA {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE, EXECUTE_WORKFLOW, EXECUTE_PIPELINE, ROLLBACK_WORKFLOW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
}

export function userGroupPermissionsAppPermissionsAllAToTerraform(struct?: UserGroupPermissionsAppPermissionsAllA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
  }
}


export function userGroupPermissionsAppPermissionsAllAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsAllA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsAllAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsAllA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsAllA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }
}

export class UserGroupPermissionsAppPermissionsAllAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsAllA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsAllAOutputReference {
    return new UserGroupPermissionsAppPermissionsAllAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsDeploymentA {
  /**
  * The actions allowed to be performed. Valid options are READ, EXECUTE_WORKFLOW, EXECUTE_PIPELINE, ROLLBACK_WORKFLOW, ABORT_WORKFLOW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The environment IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#env_ids UserGroupPermissionsA#env_ids}
  */
  readonly envIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#filters UserGroupPermissionsA#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsDeploymentAToTerraform(struct?: UserGroupPermissionsAppPermissionsDeploymentA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    env_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsDeploymentAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsDeploymentA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    env_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsDeploymentAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsDeploymentA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._envIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.envIds = this._envIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsDeploymentA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._envIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._envIds = value.envIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // env_ids - computed: false, optional: true, required: false
  private _envIds?: string[]; 
  public get envIds() {
    return cdktf.Fn.tolist(this.getListAttribute('env_ids'));
  }
  public set envIds(value: string[]) {
    this._envIds = value;
  }
  public resetEnvIds() {
    this._envIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdsInput() {
    return this._envIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsDeploymentAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsDeploymentA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsDeploymentAOutputReference {
    return new UserGroupPermissionsAppPermissionsDeploymentAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsEnvironmentA {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The environment IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#env_ids UserGroupPermissionsA#env_ids}
  */
  readonly envIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_ENVIRONMENTS, PRODUCTION_ENVIRONMENTS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#filters UserGroupPermissionsA#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsEnvironmentAToTerraform(struct?: UserGroupPermissionsAppPermissionsEnvironmentA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    env_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsEnvironmentAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsEnvironmentA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    env_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsEnvironmentAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsEnvironmentA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._envIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.envIds = this._envIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsEnvironmentA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._envIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._envIds = value.envIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // env_ids - computed: false, optional: true, required: false
  private _envIds?: string[]; 
  public get envIds() {
    return cdktf.Fn.tolist(this.getListAttribute('env_ids'));
  }
  public set envIds(value: string[]) {
    this._envIds = value;
  }
  public resetEnvIds() {
    this._envIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdsInput() {
    return this._envIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsEnvironmentAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsEnvironmentA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsEnvironmentAOutputReference {
    return new UserGroupPermissionsAppPermissionsEnvironmentAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsPipelineA {
  /**
  * The actions allowed to be performed. Valid options are [CREATE READ UPDATE DELETE]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The environment IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#env_ids UserGroupPermissionsA#env_ids}
  */
  readonly envIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_PIPELINES, PRODUCTION_PIPELINES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#filters UserGroupPermissionsA#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsPipelineAToTerraform(struct?: UserGroupPermissionsAppPermissionsPipelineA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    env_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.envIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsPipelineAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsPipelineA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    env_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.envIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsPipelineAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsPipelineA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._envIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.envIds = this._envIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsPipelineA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._envIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._envIds = value.envIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // env_ids - computed: false, optional: true, required: false
  private _envIds?: string[]; 
  public get envIds() {
    return cdktf.Fn.tolist(this.getListAttribute('env_ids'));
  }
  public set envIds(value: string[]) {
    this._envIds = value;
  }
  public resetEnvIds() {
    this._envIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdsInput() {
    return this._envIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsPipelineAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsPipelineA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsPipelineAOutputReference {
    return new UserGroupPermissionsAppPermissionsPipelineAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsProvisionerA {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The provisioner IDs to which the permission applies. Leave empty to apply to all provisioners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#provisioner_ids UserGroupPermissionsA#provisioner_ids}
  */
  readonly provisionerIds?: string[];
}

export function userGroupPermissionsAppPermissionsProvisionerAToTerraform(struct?: UserGroupPermissionsAppPermissionsProvisionerA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    provisioner_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provisionerIds),
  }
}


export function userGroupPermissionsAppPermissionsProvisionerAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsProvisionerA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    provisioner_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.provisionerIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsProvisionerAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsProvisionerA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._provisionerIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisionerIds = this._provisionerIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsProvisionerA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._provisionerIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._provisionerIds = value.provisionerIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // provisioner_ids - computed: false, optional: true, required: false
  private _provisionerIds?: string[]; 
  public get provisionerIds() {
    return cdktf.Fn.tolist(this.getListAttribute('provisioner_ids'));
  }
  public set provisionerIds(value: string[]) {
    this._provisionerIds = value;
  }
  public resetProvisionerIds() {
    this._provisionerIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerIdsInput() {
    return this._provisionerIds;
  }
}

export class UserGroupPermissionsAppPermissionsProvisionerAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsProvisionerA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsProvisionerAOutputReference {
    return new UserGroupPermissionsAppPermissionsProvisionerAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsServiceA {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The service IDs to which the permission applies. Leave empty to apply to all services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#service_ids UserGroupPermissionsA#service_ids}
  */
  readonly serviceIds?: string[];
}

export function userGroupPermissionsAppPermissionsServiceAToTerraform(struct?: UserGroupPermissionsAppPermissionsServiceA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    service_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.serviceIds),
  }
}


export function userGroupPermissionsAppPermissionsServiceAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsServiceA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    service_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.serviceIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsServiceAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsServiceA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._serviceIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIds = this._serviceIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsServiceA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._serviceIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._serviceIds = value.serviceIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // service_ids - computed: false, optional: true, required: false
  private _serviceIds?: string[]; 
  public get serviceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('service_ids'));
  }
  public set serviceIds(value: string[]) {
    this._serviceIds = value;
  }
  public resetServiceIds() {
    this._serviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdsInput() {
    return this._serviceIds;
  }
}

export class UserGroupPermissionsAppPermissionsServiceAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsServiceA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsServiceAOutputReference {
    return new UserGroupPermissionsAppPermissionsServiceAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsTemplateA {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The template IDs to which the permission applies. Leave empty to apply to all environments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#template_ids UserGroupPermissionsA#template_ids}
  */
  readonly templateIds?: string[];
}

export function userGroupPermissionsAppPermissionsTemplateAToTerraform(struct?: UserGroupPermissionsAppPermissionsTemplateA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    template_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.templateIds),
  }
}


export function userGroupPermissionsAppPermissionsTemplateAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsTemplateA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.templateIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsTemplateAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsTemplateA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._templateIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateIds = this._templateIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsTemplateA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._templateIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._templateIds = value.templateIds;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // template_ids - computed: false, optional: true, required: false
  private _templateIds?: string[]; 
  public get templateIds() {
    return cdktf.Fn.tolist(this.getListAttribute('template_ids'));
  }
  public set templateIds(value: string[]) {
    this._templateIds = value;
  }
  public resetTemplateIds() {
    this._templateIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdsInput() {
    return this._templateIds;
  }
}

export class UserGroupPermissionsAppPermissionsTemplateAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsTemplateA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsTemplateAOutputReference {
    return new UserGroupPermissionsAppPermissionsTemplateAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsWorkflowA {
  /**
  * The actions allowed to be performed. Valid options are CREATE, READ, UPDATE, DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#actions UserGroupPermissionsA#actions}
  */
  readonly actions: string[];
  /**
  * The application IDs to which the permission applies. Leave empty to apply to all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#app_ids UserGroupPermissionsA#app_ids}
  */
  readonly appIds?: string[];
  /**
  * The filters to apply to the action. Valid options are: NON_PRODUCTION_WORKFLOWS, PRODUCTION_WORKFLOWS, WORKFLOW_TEMPLATES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#filters UserGroupPermissionsA#filters}
  */
  readonly filters?: string[];
}

export function userGroupPermissionsAppPermissionsWorkflowAToTerraform(struct?: UserGroupPermissionsAppPermissionsWorkflowA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    actions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actions),
    app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.appIds),
    filters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.filters),
  }
}


export function userGroupPermissionsAppPermissionsWorkflowAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsWorkflowA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    actions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    app_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.appIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    filters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.filters),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsWorkflowAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserGroupPermissionsAppPermissionsWorkflowA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actions !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions;
    }
    if (this._appIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.appIds = this._appIds;
    }
    if (this._filters !== undefined) {
      hasAnyValues = true;
      internalValueResult.filters = this._filters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsWorkflowA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actions = undefined;
      this._appIds = undefined;
      this._filters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actions = value.actions;
      this._appIds = value.appIds;
      this._filters = value.filters;
    }
  }

  // actions - computed: false, optional: false, required: true
  private _actions?: string[]; 
  public get actions() {
    return cdktf.Fn.tolist(this.getListAttribute('actions'));
  }
  public set actions(value: string[]) {
    this._actions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return cdktf.Fn.tolist(this.getListAttribute('app_ids'));
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // filters - computed: false, optional: true, required: false
  private _filters?: string[]; 
  public get filters() {
    return cdktf.Fn.tolist(this.getListAttribute('filters'));
  }
  public set filters(value: string[]) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }
}

export class UserGroupPermissionsAppPermissionsWorkflowAList extends cdktf.ComplexList {
  public internalValue? : UserGroupPermissionsAppPermissionsWorkflowA[] | cdktf.IResolvable

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
  public get(index: number): UserGroupPermissionsAppPermissionsWorkflowAOutputReference {
    return new UserGroupPermissionsAppPermissionsWorkflowAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserGroupPermissionsAppPermissionsA {
  /**
  * all block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#all UserGroupPermissionsA#all}
  */
  readonly all?: UserGroupPermissionsAppPermissionsAllA[] | cdktf.IResolvable;
  /**
  * deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#deployment UserGroupPermissionsA#deployment}
  */
  readonly deployment?: UserGroupPermissionsAppPermissionsDeploymentA[] | cdktf.IResolvable;
  /**
  * environment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#environment UserGroupPermissionsA#environment}
  */
  readonly environment?: UserGroupPermissionsAppPermissionsEnvironmentA[] | cdktf.IResolvable;
  /**
  * pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#pipeline UserGroupPermissionsA#pipeline}
  */
  readonly pipeline?: UserGroupPermissionsAppPermissionsPipelineA[] | cdktf.IResolvable;
  /**
  * provisioner block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#provisioner UserGroupPermissionsA#provisioner}
  */
  readonly provisioner?: UserGroupPermissionsAppPermissionsProvisionerA[] | cdktf.IResolvable;
  /**
  * service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#service UserGroupPermissionsA#service}
  */
  readonly service?: UserGroupPermissionsAppPermissionsServiceA[] | cdktf.IResolvable;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#template UserGroupPermissionsA#template}
  */
  readonly template?: UserGroupPermissionsAppPermissionsTemplateA[] | cdktf.IResolvable;
  /**
  * workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#workflow UserGroupPermissionsA#workflow}
  */
  readonly workflow?: UserGroupPermissionsAppPermissionsWorkflowA[] | cdktf.IResolvable;
}

export function userGroupPermissionsAppPermissionsAToTerraform(struct?: UserGroupPermissionsAppPermissionsAOutputReference | UserGroupPermissionsAppPermissionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.listMapper(userGroupPermissionsAppPermissionsAllAToTerraform, true)(struct!.all),
    deployment: cdktf.listMapper(userGroupPermissionsAppPermissionsDeploymentAToTerraform, true)(struct!.deployment),
    environment: cdktf.listMapper(userGroupPermissionsAppPermissionsEnvironmentAToTerraform, true)(struct!.environment),
    pipeline: cdktf.listMapper(userGroupPermissionsAppPermissionsPipelineAToTerraform, true)(struct!.pipeline),
    provisioner: cdktf.listMapper(userGroupPermissionsAppPermissionsProvisionerAToTerraform, true)(struct!.provisioner),
    service: cdktf.listMapper(userGroupPermissionsAppPermissionsServiceAToTerraform, true)(struct!.service),
    template: cdktf.listMapper(userGroupPermissionsAppPermissionsTemplateAToTerraform, true)(struct!.template),
    workflow: cdktf.listMapper(userGroupPermissionsAppPermissionsWorkflowAToTerraform, true)(struct!.workflow),
  }
}


export function userGroupPermissionsAppPermissionsAToHclTerraform(struct?: UserGroupPermissionsAppPermissionsAOutputReference | UserGroupPermissionsAppPermissionsA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsAllAToHclTerraform, true)(struct!.all),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsAllAList",
    },
    deployment: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsDeploymentAToHclTerraform, true)(struct!.deployment),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsDeploymentAList",
    },
    environment: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsEnvironmentAToHclTerraform, true)(struct!.environment),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsEnvironmentAList",
    },
    pipeline: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsPipelineAToHclTerraform, true)(struct!.pipeline),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsPipelineAList",
    },
    provisioner: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsProvisionerAToHclTerraform, true)(struct!.provisioner),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsProvisionerAList",
    },
    service: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsServiceAToHclTerraform, true)(struct!.service),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsServiceAList",
    },
    template: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsTemplateAToHclTerraform, true)(struct!.template),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsTemplateAList",
    },
    workflow: {
      value: cdktf.listMapperHcl(userGroupPermissionsAppPermissionsWorkflowAToHclTerraform, true)(struct!.workflow),
      isBlock: true,
      type: "set",
      storageClassType: "UserGroupPermissionsAppPermissionsWorkflowAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserGroupPermissionsAppPermissionsAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UserGroupPermissionsAppPermissionsA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all?.internalValue;
    }
    if (this._deployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment?.internalValue;
    }
    if (this._environment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment?.internalValue;
    }
    if (this._pipeline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pipeline = this._pipeline?.internalValue;
    }
    if (this._provisioner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.provisioner = this._provisioner?.internalValue;
    }
    if (this._service?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service?.internalValue;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    if (this._workflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflow = this._workflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserGroupPermissionsAppPermissionsA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all.internalValue = undefined;
      this._deployment.internalValue = undefined;
      this._environment.internalValue = undefined;
      this._pipeline.internalValue = undefined;
      this._provisioner.internalValue = undefined;
      this._service.internalValue = undefined;
      this._template.internalValue = undefined;
      this._workflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all.internalValue = value.all;
      this._deployment.internalValue = value.deployment;
      this._environment.internalValue = value.environment;
      this._pipeline.internalValue = value.pipeline;
      this._provisioner.internalValue = value.provisioner;
      this._service.internalValue = value.service;
      this._template.internalValue = value.template;
      this._workflow.internalValue = value.workflow;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all = new UserGroupPermissionsAppPermissionsAllAList(this, "all", true);
  public get all() {
    return this._all;
  }
  public putAll(value: UserGroupPermissionsAppPermissionsAllA[] | cdktf.IResolvable) {
    this._all.internalValue = value;
  }
  public resetAll() {
    this._all.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all.internalValue;
  }

  // deployment - computed: false, optional: true, required: false
  private _deployment = new UserGroupPermissionsAppPermissionsDeploymentAList(this, "deployment", true);
  public get deployment() {
    return this._deployment;
  }
  public putDeployment(value: UserGroupPermissionsAppPermissionsDeploymentA[] | cdktf.IResolvable) {
    this._deployment.internalValue = value;
  }
  public resetDeployment() {
    this._deployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment.internalValue;
  }

  // environment - computed: false, optional: true, required: false
  private _environment = new UserGroupPermissionsAppPermissionsEnvironmentAList(this, "environment", true);
  public get environment() {
    return this._environment;
  }
  public putEnvironment(value: UserGroupPermissionsAppPermissionsEnvironmentA[] | cdktf.IResolvable) {
    this._environment.internalValue = value;
  }
  public resetEnvironment() {
    this._environment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment.internalValue;
  }

  // pipeline - computed: false, optional: true, required: false
  private _pipeline = new UserGroupPermissionsAppPermissionsPipelineAList(this, "pipeline", true);
  public get pipeline() {
    return this._pipeline;
  }
  public putPipeline(value: UserGroupPermissionsAppPermissionsPipelineA[] | cdktf.IResolvable) {
    this._pipeline.internalValue = value;
  }
  public resetPipeline() {
    this._pipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineInput() {
    return this._pipeline.internalValue;
  }

  // provisioner - computed: false, optional: true, required: false
  private _provisioner = new UserGroupPermissionsAppPermissionsProvisionerAList(this, "provisioner", true);
  public get provisioner() {
    return this._provisioner;
  }
  public putProvisioner(value: UserGroupPermissionsAppPermissionsProvisionerA[] | cdktf.IResolvable) {
    this._provisioner.internalValue = value;
  }
  public resetProvisioner() {
    this._provisioner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionerInput() {
    return this._provisioner.internalValue;
  }

  // service - computed: false, optional: true, required: false
  private _service = new UserGroupPermissionsAppPermissionsServiceAList(this, "service", true);
  public get service() {
    return this._service;
  }
  public putService(value: UserGroupPermissionsAppPermissionsServiceA[] | cdktf.IResolvable) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new UserGroupPermissionsAppPermissionsTemplateAList(this, "template", true);
  public get template() {
    return this._template;
  }
  public putTemplate(value: UserGroupPermissionsAppPermissionsTemplateA[] | cdktf.IResolvable) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // workflow - computed: false, optional: true, required: false
  private _workflow = new UserGroupPermissionsAppPermissionsWorkflowAList(this, "workflow", true);
  public get workflow() {
    return this._workflow;
  }
  public putWorkflow(value: UserGroupPermissionsAppPermissionsWorkflowA[] | cdktf.IResolvable) {
    this._workflow.internalValue = value;
  }
  public resetWorkflow() {
    this._workflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowInput() {
    return this._workflow.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions harness_user_group_permissions}
*/
export class UserGroupPermissionsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harness_user_group_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserGroupPermissionsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserGroupPermissionsA to import
  * @param importFromId The id of the existing UserGroupPermissionsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserGroupPermissionsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harness_user_group_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/harness/harness/0.39.2/docs/resources/user_group_permissions harness_user_group_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserGroupPermissionsAConfig
  */
  public constructor(scope: Construct, id: string, config: UserGroupPermissionsAConfig) {
    super(scope, id, {
      terraformResourceType: 'harness_user_group_permissions',
      terraformGeneratorMetadata: {
        providerName: 'harness',
        providerVersion: '0.39.2',
        providerVersionConstraint: '0.39.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountPermissions = config.accountPermissions;
    this._id = config.id;
    this._userGroupId = config.userGroupId;
    this._appPermissions.internalValue = config.appPermissions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_permissions - computed: false, optional: true, required: false
  private _accountPermissions?: string[]; 
  public get accountPermissions() {
    return cdktf.Fn.tolist(this.getListAttribute('account_permissions'));
  }
  public set accountPermissions(value: string[]) {
    this._accountPermissions = value;
  }
  public resetAccountPermissions() {
    this._accountPermissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPermissionsInput() {
    return this._accountPermissions;
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

  // user_group_id - computed: false, optional: false, required: true
  private _userGroupId?: string; 
  public get userGroupId() {
    return this.getStringAttribute('user_group_id');
  }
  public set userGroupId(value: string) {
    this._userGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdInput() {
    return this._userGroupId;
  }

  // app_permissions - computed: false, optional: true, required: false
  private _appPermissions = new UserGroupPermissionsAppPermissionsAOutputReference(this, "app_permissions");
  public get appPermissions() {
    return this._appPermissions;
  }
  public putAppPermissions(value: UserGroupPermissionsAppPermissionsA) {
    this._appPermissions.internalValue = value;
  }
  public resetAppPermissions() {
    this._appPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appPermissionsInput() {
    return this._appPermissions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountPermissions),
      id: cdktf.stringToTerraform(this._id),
      user_group_id: cdktf.stringToTerraform(this._userGroupId),
      app_permissions: userGroupPermissionsAppPermissionsAToTerraform(this._appPermissions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountPermissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_id: {
        value: cdktf.stringToHclTerraform(this._userGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_permissions: {
        value: userGroupPermissionsAppPermissionsAToHclTerraform(this._appPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "UserGroupPermissionsAppPermissionsAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
