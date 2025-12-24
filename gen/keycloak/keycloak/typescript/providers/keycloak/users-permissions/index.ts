// https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UsersPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#id UsersPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#realm_id UsersPermissions#realm_id}
  */
  readonly realmId: string;
  /**
  * impersonate_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#impersonate_scope UsersPermissions#impersonate_scope}
  */
  readonly impersonateScope?: UsersPermissionsImpersonateScope;
  /**
  * manage_group_membership_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#manage_group_membership_scope UsersPermissions#manage_group_membership_scope}
  */
  readonly manageGroupMembershipScope?: UsersPermissionsManageGroupMembershipScope;
  /**
  * manage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#manage_scope UsersPermissions#manage_scope}
  */
  readonly manageScope?: UsersPermissionsManageScope;
  /**
  * map_roles_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#map_roles_scope UsersPermissions#map_roles_scope}
  */
  readonly mapRolesScope?: UsersPermissionsMapRolesScope;
  /**
  * user_impersonated_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#user_impersonated_scope UsersPermissions#user_impersonated_scope}
  */
  readonly userImpersonatedScope?: UsersPermissionsUserImpersonatedScope;
  /**
  * view_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#view_scope UsersPermissions#view_scope}
  */
  readonly viewScope?: UsersPermissionsViewScope;
}
export interface UsersPermissionsImpersonateScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#decision_strategy UsersPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#description UsersPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#policies UsersPermissions#policies}
  */
  readonly policies?: string[];
}

export function usersPermissionsImpersonateScopeToTerraform(struct?: UsersPermissionsImpersonateScopeOutputReference | UsersPermissionsImpersonateScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function usersPermissionsImpersonateScopeToHclTerraform(struct?: UsersPermissionsImpersonateScopeOutputReference | UsersPermissionsImpersonateScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsersPermissionsImpersonateScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UsersPermissionsImpersonateScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsersPermissionsImpersonateScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._policies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._policies = value.policies;
    }
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
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
}
export interface UsersPermissionsManageGroupMembershipScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#decision_strategy UsersPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#description UsersPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#policies UsersPermissions#policies}
  */
  readonly policies?: string[];
}

export function usersPermissionsManageGroupMembershipScopeToTerraform(struct?: UsersPermissionsManageGroupMembershipScopeOutputReference | UsersPermissionsManageGroupMembershipScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function usersPermissionsManageGroupMembershipScopeToHclTerraform(struct?: UsersPermissionsManageGroupMembershipScopeOutputReference | UsersPermissionsManageGroupMembershipScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsersPermissionsManageGroupMembershipScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UsersPermissionsManageGroupMembershipScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsersPermissionsManageGroupMembershipScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._policies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._policies = value.policies;
    }
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
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
}
export interface UsersPermissionsManageScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#decision_strategy UsersPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#description UsersPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#policies UsersPermissions#policies}
  */
  readonly policies?: string[];
}

export function usersPermissionsManageScopeToTerraform(struct?: UsersPermissionsManageScopeOutputReference | UsersPermissionsManageScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function usersPermissionsManageScopeToHclTerraform(struct?: UsersPermissionsManageScopeOutputReference | UsersPermissionsManageScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsersPermissionsManageScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UsersPermissionsManageScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsersPermissionsManageScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._policies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._policies = value.policies;
    }
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
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
}
export interface UsersPermissionsMapRolesScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#decision_strategy UsersPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#description UsersPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#policies UsersPermissions#policies}
  */
  readonly policies?: string[];
}

export function usersPermissionsMapRolesScopeToTerraform(struct?: UsersPermissionsMapRolesScopeOutputReference | UsersPermissionsMapRolesScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function usersPermissionsMapRolesScopeToHclTerraform(struct?: UsersPermissionsMapRolesScopeOutputReference | UsersPermissionsMapRolesScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsersPermissionsMapRolesScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UsersPermissionsMapRolesScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsersPermissionsMapRolesScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._policies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._policies = value.policies;
    }
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
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
}
export interface UsersPermissionsUserImpersonatedScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#decision_strategy UsersPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#description UsersPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#policies UsersPermissions#policies}
  */
  readonly policies?: string[];
}

export function usersPermissionsUserImpersonatedScopeToTerraform(struct?: UsersPermissionsUserImpersonatedScopeOutputReference | UsersPermissionsUserImpersonatedScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function usersPermissionsUserImpersonatedScopeToHclTerraform(struct?: UsersPermissionsUserImpersonatedScopeOutputReference | UsersPermissionsUserImpersonatedScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsersPermissionsUserImpersonatedScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UsersPermissionsUserImpersonatedScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsersPermissionsUserImpersonatedScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._policies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._policies = value.policies;
    }
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
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
}
export interface UsersPermissionsViewScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#decision_strategy UsersPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#description UsersPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#policies UsersPermissions#policies}
  */
  readonly policies?: string[];
}

export function usersPermissionsViewScopeToTerraform(struct?: UsersPermissionsViewScopeOutputReference | UsersPermissionsViewScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    description: cdktf.stringToTerraform(struct!.description),
    policies: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policies),
  }
}


export function usersPermissionsViewScopeToHclTerraform(struct?: UsersPermissionsViewScopeOutputReference | UsersPermissionsViewScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policies: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policies),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UsersPermissionsViewScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): UsersPermissionsViewScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._policies !== undefined) {
      hasAnyValues = true;
      internalValueResult.policies = this._policies;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UsersPermissionsViewScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._decisionStrategy = undefined;
      this._description = undefined;
      this._policies = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._decisionStrategy = value.decisionStrategy;
      this._description = value.description;
      this._policies = value.policies;
    }
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
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

  // policies - computed: false, optional: true, required: false
  private _policies?: string[]; 
  public get policies() {
    return cdktf.Fn.tolist(this.getListAttribute('policies'));
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions keycloak_users_permissions}
*/
export class UsersPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_users_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UsersPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UsersPermissions to import
  * @param importFromId The id of the existing UsersPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UsersPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_users_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/users_permissions keycloak_users_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UsersPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: UsersPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_users_permissions',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.6.0',
        providerVersionConstraint: '5.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._realmId = config.realmId;
    this._impersonateScope.internalValue = config.impersonateScope;
    this._manageGroupMembershipScope.internalValue = config.manageGroupMembershipScope;
    this._manageScope.internalValue = config.manageScope;
    this._mapRolesScope.internalValue = config.mapRolesScope;
    this._userImpersonatedScope.internalValue = config.userImpersonatedScope;
    this._viewScope.internalValue = config.viewScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_resource_server_id - computed: true, optional: false, required: false
  public get authorizationResourceServerId() {
    return this.getStringAttribute('authorization_resource_server_id');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // impersonate_scope - computed: false, optional: true, required: false
  private _impersonateScope = new UsersPermissionsImpersonateScopeOutputReference(this, "impersonate_scope");
  public get impersonateScope() {
    return this._impersonateScope;
  }
  public putImpersonateScope(value: UsersPermissionsImpersonateScope) {
    this._impersonateScope.internalValue = value;
  }
  public resetImpersonateScope() {
    this._impersonateScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get impersonateScopeInput() {
    return this._impersonateScope.internalValue;
  }

  // manage_group_membership_scope - computed: false, optional: true, required: false
  private _manageGroupMembershipScope = new UsersPermissionsManageGroupMembershipScopeOutputReference(this, "manage_group_membership_scope");
  public get manageGroupMembershipScope() {
    return this._manageGroupMembershipScope;
  }
  public putManageGroupMembershipScope(value: UsersPermissionsManageGroupMembershipScope) {
    this._manageGroupMembershipScope.internalValue = value;
  }
  public resetManageGroupMembershipScope() {
    this._manageGroupMembershipScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageGroupMembershipScopeInput() {
    return this._manageGroupMembershipScope.internalValue;
  }

  // manage_scope - computed: false, optional: true, required: false
  private _manageScope = new UsersPermissionsManageScopeOutputReference(this, "manage_scope");
  public get manageScope() {
    return this._manageScope;
  }
  public putManageScope(value: UsersPermissionsManageScope) {
    this._manageScope.internalValue = value;
  }
  public resetManageScope() {
    this._manageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageScopeInput() {
    return this._manageScope.internalValue;
  }

  // map_roles_scope - computed: false, optional: true, required: false
  private _mapRolesScope = new UsersPermissionsMapRolesScopeOutputReference(this, "map_roles_scope");
  public get mapRolesScope() {
    return this._mapRolesScope;
  }
  public putMapRolesScope(value: UsersPermissionsMapRolesScope) {
    this._mapRolesScope.internalValue = value;
  }
  public resetMapRolesScope() {
    this._mapRolesScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapRolesScopeInput() {
    return this._mapRolesScope.internalValue;
  }

  // user_impersonated_scope - computed: false, optional: true, required: false
  private _userImpersonatedScope = new UsersPermissionsUserImpersonatedScopeOutputReference(this, "user_impersonated_scope");
  public get userImpersonatedScope() {
    return this._userImpersonatedScope;
  }
  public putUserImpersonatedScope(value: UsersPermissionsUserImpersonatedScope) {
    this._userImpersonatedScope.internalValue = value;
  }
  public resetUserImpersonatedScope() {
    this._userImpersonatedScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userImpersonatedScopeInput() {
    return this._userImpersonatedScope.internalValue;
  }

  // view_scope - computed: false, optional: true, required: false
  private _viewScope = new UsersPermissionsViewScopeOutputReference(this, "view_scope");
  public get viewScope() {
    return this._viewScope;
  }
  public putViewScope(value: UsersPermissionsViewScope) {
    this._viewScope.internalValue = value;
  }
  public resetViewScope() {
    this._viewScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewScopeInput() {
    return this._viewScope.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
      impersonate_scope: usersPermissionsImpersonateScopeToTerraform(this._impersonateScope.internalValue),
      manage_group_membership_scope: usersPermissionsManageGroupMembershipScopeToTerraform(this._manageGroupMembershipScope.internalValue),
      manage_scope: usersPermissionsManageScopeToTerraform(this._manageScope.internalValue),
      map_roles_scope: usersPermissionsMapRolesScopeToTerraform(this._mapRolesScope.internalValue),
      user_impersonated_scope: usersPermissionsUserImpersonatedScopeToTerraform(this._userImpersonatedScope.internalValue),
      view_scope: usersPermissionsViewScopeToTerraform(this._viewScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      impersonate_scope: {
        value: usersPermissionsImpersonateScopeToHclTerraform(this._impersonateScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsersPermissionsImpersonateScopeList",
      },
      manage_group_membership_scope: {
        value: usersPermissionsManageGroupMembershipScopeToHclTerraform(this._manageGroupMembershipScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsersPermissionsManageGroupMembershipScopeList",
      },
      manage_scope: {
        value: usersPermissionsManageScopeToHclTerraform(this._manageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsersPermissionsManageScopeList",
      },
      map_roles_scope: {
        value: usersPermissionsMapRolesScopeToHclTerraform(this._mapRolesScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsersPermissionsMapRolesScopeList",
      },
      user_impersonated_scope: {
        value: usersPermissionsUserImpersonatedScopeToHclTerraform(this._userImpersonatedScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsersPermissionsUserImpersonatedScopeList",
      },
      view_scope: {
        value: usersPermissionsViewScopeToHclTerraform(this._viewScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "UsersPermissionsViewScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
