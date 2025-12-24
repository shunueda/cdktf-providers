// https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#group_id GroupPermissions#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#id GroupPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#realm_id GroupPermissions#realm_id}
  */
  readonly realmId: string;
  /**
  * manage_members_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#manage_members_scope GroupPermissions#manage_members_scope}
  */
  readonly manageMembersScope?: GroupPermissionsManageMembersScope;
  /**
  * manage_membership_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#manage_membership_scope GroupPermissions#manage_membership_scope}
  */
  readonly manageMembershipScope?: GroupPermissionsManageMembershipScope;
  /**
  * manage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#manage_scope GroupPermissions#manage_scope}
  */
  readonly manageScope?: GroupPermissionsManageScope;
  /**
  * view_members_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#view_members_scope GroupPermissions#view_members_scope}
  */
  readonly viewMembersScope?: GroupPermissionsViewMembersScope;
  /**
  * view_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#view_scope GroupPermissions#view_scope}
  */
  readonly viewScope?: GroupPermissionsViewScope;
}
export interface GroupPermissionsManageMembersScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#decision_strategy GroupPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#description GroupPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#policies GroupPermissions#policies}
  */
  readonly policies?: string[];
}

export function groupPermissionsManageMembersScopeToTerraform(struct?: GroupPermissionsManageMembersScopeOutputReference | GroupPermissionsManageMembersScope): any {
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


export function groupPermissionsManageMembersScopeToHclTerraform(struct?: GroupPermissionsManageMembersScopeOutputReference | GroupPermissionsManageMembersScope): any {
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

export class GroupPermissionsManageMembersScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupPermissionsManageMembersScope | undefined {
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

  public set internalValue(value: GroupPermissionsManageMembersScope | undefined) {
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
export interface GroupPermissionsManageMembershipScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#decision_strategy GroupPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#description GroupPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#policies GroupPermissions#policies}
  */
  readonly policies?: string[];
}

export function groupPermissionsManageMembershipScopeToTerraform(struct?: GroupPermissionsManageMembershipScopeOutputReference | GroupPermissionsManageMembershipScope): any {
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


export function groupPermissionsManageMembershipScopeToHclTerraform(struct?: GroupPermissionsManageMembershipScopeOutputReference | GroupPermissionsManageMembershipScope): any {
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

export class GroupPermissionsManageMembershipScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupPermissionsManageMembershipScope | undefined {
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

  public set internalValue(value: GroupPermissionsManageMembershipScope | undefined) {
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
export interface GroupPermissionsManageScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#decision_strategy GroupPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#description GroupPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#policies GroupPermissions#policies}
  */
  readonly policies?: string[];
}

export function groupPermissionsManageScopeToTerraform(struct?: GroupPermissionsManageScopeOutputReference | GroupPermissionsManageScope): any {
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


export function groupPermissionsManageScopeToHclTerraform(struct?: GroupPermissionsManageScopeOutputReference | GroupPermissionsManageScope): any {
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

export class GroupPermissionsManageScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupPermissionsManageScope | undefined {
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

  public set internalValue(value: GroupPermissionsManageScope | undefined) {
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
export interface GroupPermissionsViewMembersScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#decision_strategy GroupPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#description GroupPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#policies GroupPermissions#policies}
  */
  readonly policies?: string[];
}

export function groupPermissionsViewMembersScopeToTerraform(struct?: GroupPermissionsViewMembersScopeOutputReference | GroupPermissionsViewMembersScope): any {
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


export function groupPermissionsViewMembersScopeToHclTerraform(struct?: GroupPermissionsViewMembersScopeOutputReference | GroupPermissionsViewMembersScope): any {
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

export class GroupPermissionsViewMembersScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupPermissionsViewMembersScope | undefined {
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

  public set internalValue(value: GroupPermissionsViewMembersScope | undefined) {
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
export interface GroupPermissionsViewScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#decision_strategy GroupPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#description GroupPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#policies GroupPermissions#policies}
  */
  readonly policies?: string[];
}

export function groupPermissionsViewScopeToTerraform(struct?: GroupPermissionsViewScopeOutputReference | GroupPermissionsViewScope): any {
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


export function groupPermissionsViewScopeToHclTerraform(struct?: GroupPermissionsViewScopeOutputReference | GroupPermissionsViewScope): any {
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

export class GroupPermissionsViewScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GroupPermissionsViewScope | undefined {
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

  public set internalValue(value: GroupPermissionsViewScope | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions keycloak_group_permissions}
*/
export class GroupPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_group_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GroupPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GroupPermissions to import
  * @param importFromId The id of the existing GroupPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GroupPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_group_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.6.0/docs/resources/group_permissions keycloak_group_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: GroupPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_group_permissions',
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
    this._groupId = config.groupId;
    this._id = config.id;
    this._realmId = config.realmId;
    this._manageMembersScope.internalValue = config.manageMembersScope;
    this._manageMembershipScope.internalValue = config.manageMembershipScope;
    this._manageScope.internalValue = config.manageScope;
    this._viewMembersScope.internalValue = config.viewMembersScope;
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

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // manage_members_scope - computed: false, optional: true, required: false
  private _manageMembersScope = new GroupPermissionsManageMembersScopeOutputReference(this, "manage_members_scope");
  public get manageMembersScope() {
    return this._manageMembersScope;
  }
  public putManageMembersScope(value: GroupPermissionsManageMembersScope) {
    this._manageMembersScope.internalValue = value;
  }
  public resetManageMembersScope() {
    this._manageMembersScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMembersScopeInput() {
    return this._manageMembersScope.internalValue;
  }

  // manage_membership_scope - computed: false, optional: true, required: false
  private _manageMembershipScope = new GroupPermissionsManageMembershipScopeOutputReference(this, "manage_membership_scope");
  public get manageMembershipScope() {
    return this._manageMembershipScope;
  }
  public putManageMembershipScope(value: GroupPermissionsManageMembershipScope) {
    this._manageMembershipScope.internalValue = value;
  }
  public resetManageMembershipScope() {
    this._manageMembershipScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageMembershipScopeInput() {
    return this._manageMembershipScope.internalValue;
  }

  // manage_scope - computed: false, optional: true, required: false
  private _manageScope = new GroupPermissionsManageScopeOutputReference(this, "manage_scope");
  public get manageScope() {
    return this._manageScope;
  }
  public putManageScope(value: GroupPermissionsManageScope) {
    this._manageScope.internalValue = value;
  }
  public resetManageScope() {
    this._manageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageScopeInput() {
    return this._manageScope.internalValue;
  }

  // view_members_scope - computed: false, optional: true, required: false
  private _viewMembersScope = new GroupPermissionsViewMembersScopeOutputReference(this, "view_members_scope");
  public get viewMembersScope() {
    return this._viewMembersScope;
  }
  public putViewMembersScope(value: GroupPermissionsViewMembersScope) {
    this._viewMembersScope.internalValue = value;
  }
  public resetViewMembersScope() {
    this._viewMembersScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewMembersScopeInput() {
    return this._viewMembersScope.internalValue;
  }

  // view_scope - computed: false, optional: true, required: false
  private _viewScope = new GroupPermissionsViewScopeOutputReference(this, "view_scope");
  public get viewScope() {
    return this._viewScope;
  }
  public putViewScope(value: GroupPermissionsViewScope) {
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
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
      manage_members_scope: groupPermissionsManageMembersScopeToTerraform(this._manageMembersScope.internalValue),
      manage_membership_scope: groupPermissionsManageMembershipScopeToTerraform(this._manageMembershipScope.internalValue),
      manage_scope: groupPermissionsManageScopeToTerraform(this._manageScope.internalValue),
      view_members_scope: groupPermissionsViewMembersScopeToTerraform(this._viewMembersScope.internalValue),
      view_scope: groupPermissionsViewScopeToTerraform(this._viewScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manage_members_scope: {
        value: groupPermissionsManageMembersScopeToHclTerraform(this._manageMembersScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupPermissionsManageMembersScopeList",
      },
      manage_membership_scope: {
        value: groupPermissionsManageMembershipScopeToHclTerraform(this._manageMembershipScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupPermissionsManageMembershipScopeList",
      },
      manage_scope: {
        value: groupPermissionsManageScopeToHclTerraform(this._manageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupPermissionsManageScopeList",
      },
      view_members_scope: {
        value: groupPermissionsViewMembersScopeToHclTerraform(this._viewMembersScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupPermissionsViewMembersScopeList",
      },
      view_scope: {
        value: groupPermissionsViewScopeToHclTerraform(this._viewScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GroupPermissionsViewScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
