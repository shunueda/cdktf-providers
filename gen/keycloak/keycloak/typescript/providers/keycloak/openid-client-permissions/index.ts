// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientPermissionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#client_id OpenidClientPermissions#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#id OpenidClientPermissions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#realm_id OpenidClientPermissions#realm_id}
  */
  readonly realmId: string;
  /**
  * configure_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#configure_scope OpenidClientPermissions#configure_scope}
  */
  readonly configureScope?: OpenidClientPermissionsConfigureScope;
  /**
  * manage_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#manage_scope OpenidClientPermissions#manage_scope}
  */
  readonly manageScope?: OpenidClientPermissionsManageScope;
  /**
  * map_roles_client_scope_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#map_roles_client_scope_scope OpenidClientPermissions#map_roles_client_scope_scope}
  */
  readonly mapRolesClientScopeScope?: OpenidClientPermissionsMapRolesClientScopeScope;
  /**
  * map_roles_composite_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#map_roles_composite_scope OpenidClientPermissions#map_roles_composite_scope}
  */
  readonly mapRolesCompositeScope?: OpenidClientPermissionsMapRolesCompositeScope;
  /**
  * map_roles_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#map_roles_scope OpenidClientPermissions#map_roles_scope}
  */
  readonly mapRolesScope?: OpenidClientPermissionsMapRolesScope;
  /**
  * token_exchange_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#token_exchange_scope OpenidClientPermissions#token_exchange_scope}
  */
  readonly tokenExchangeScope?: OpenidClientPermissionsTokenExchangeScope;
  /**
  * view_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#view_scope OpenidClientPermissions#view_scope}
  */
  readonly viewScope?: OpenidClientPermissionsViewScope;
}
export interface OpenidClientPermissionsConfigureScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#decision_strategy OpenidClientPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#description OpenidClientPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#policies OpenidClientPermissions#policies}
  */
  readonly policies?: string[];
}

export function openidClientPermissionsConfigureScopeToTerraform(struct?: OpenidClientPermissionsConfigureScopeOutputReference | OpenidClientPermissionsConfigureScope): any {
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


export function openidClientPermissionsConfigureScopeToHclTerraform(struct?: OpenidClientPermissionsConfigureScopeOutputReference | OpenidClientPermissionsConfigureScope): any {
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

export class OpenidClientPermissionsConfigureScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientPermissionsConfigureScope | undefined {
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

  public set internalValue(value: OpenidClientPermissionsConfigureScope | undefined) {
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
export interface OpenidClientPermissionsManageScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#decision_strategy OpenidClientPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#description OpenidClientPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#policies OpenidClientPermissions#policies}
  */
  readonly policies?: string[];
}

export function openidClientPermissionsManageScopeToTerraform(struct?: OpenidClientPermissionsManageScopeOutputReference | OpenidClientPermissionsManageScope): any {
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


export function openidClientPermissionsManageScopeToHclTerraform(struct?: OpenidClientPermissionsManageScopeOutputReference | OpenidClientPermissionsManageScope): any {
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

export class OpenidClientPermissionsManageScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientPermissionsManageScope | undefined {
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

  public set internalValue(value: OpenidClientPermissionsManageScope | undefined) {
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
export interface OpenidClientPermissionsMapRolesClientScopeScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#decision_strategy OpenidClientPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#description OpenidClientPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#policies OpenidClientPermissions#policies}
  */
  readonly policies?: string[];
}

export function openidClientPermissionsMapRolesClientScopeScopeToTerraform(struct?: OpenidClientPermissionsMapRolesClientScopeScopeOutputReference | OpenidClientPermissionsMapRolesClientScopeScope): any {
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


export function openidClientPermissionsMapRolesClientScopeScopeToHclTerraform(struct?: OpenidClientPermissionsMapRolesClientScopeScopeOutputReference | OpenidClientPermissionsMapRolesClientScopeScope): any {
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

export class OpenidClientPermissionsMapRolesClientScopeScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientPermissionsMapRolesClientScopeScope | undefined {
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

  public set internalValue(value: OpenidClientPermissionsMapRolesClientScopeScope | undefined) {
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
export interface OpenidClientPermissionsMapRolesCompositeScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#decision_strategy OpenidClientPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#description OpenidClientPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#policies OpenidClientPermissions#policies}
  */
  readonly policies?: string[];
}

export function openidClientPermissionsMapRolesCompositeScopeToTerraform(struct?: OpenidClientPermissionsMapRolesCompositeScopeOutputReference | OpenidClientPermissionsMapRolesCompositeScope): any {
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


export function openidClientPermissionsMapRolesCompositeScopeToHclTerraform(struct?: OpenidClientPermissionsMapRolesCompositeScopeOutputReference | OpenidClientPermissionsMapRolesCompositeScope): any {
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

export class OpenidClientPermissionsMapRolesCompositeScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientPermissionsMapRolesCompositeScope | undefined {
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

  public set internalValue(value: OpenidClientPermissionsMapRolesCompositeScope | undefined) {
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
export interface OpenidClientPermissionsMapRolesScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#decision_strategy OpenidClientPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#description OpenidClientPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#policies OpenidClientPermissions#policies}
  */
  readonly policies?: string[];
}

export function openidClientPermissionsMapRolesScopeToTerraform(struct?: OpenidClientPermissionsMapRolesScopeOutputReference | OpenidClientPermissionsMapRolesScope): any {
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


export function openidClientPermissionsMapRolesScopeToHclTerraform(struct?: OpenidClientPermissionsMapRolesScopeOutputReference | OpenidClientPermissionsMapRolesScope): any {
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

export class OpenidClientPermissionsMapRolesScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientPermissionsMapRolesScope | undefined {
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

  public set internalValue(value: OpenidClientPermissionsMapRolesScope | undefined) {
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
export interface OpenidClientPermissionsTokenExchangeScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#decision_strategy OpenidClientPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#description OpenidClientPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#policies OpenidClientPermissions#policies}
  */
  readonly policies?: string[];
}

export function openidClientPermissionsTokenExchangeScopeToTerraform(struct?: OpenidClientPermissionsTokenExchangeScopeOutputReference | OpenidClientPermissionsTokenExchangeScope): any {
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


export function openidClientPermissionsTokenExchangeScopeToHclTerraform(struct?: OpenidClientPermissionsTokenExchangeScopeOutputReference | OpenidClientPermissionsTokenExchangeScope): any {
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

export class OpenidClientPermissionsTokenExchangeScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientPermissionsTokenExchangeScope | undefined {
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

  public set internalValue(value: OpenidClientPermissionsTokenExchangeScope | undefined) {
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
export interface OpenidClientPermissionsViewScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#decision_strategy OpenidClientPermissions#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#description OpenidClientPermissions#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#policies OpenidClientPermissions#policies}
  */
  readonly policies?: string[];
}

export function openidClientPermissionsViewScopeToTerraform(struct?: OpenidClientPermissionsViewScopeOutputReference | OpenidClientPermissionsViewScope): any {
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


export function openidClientPermissionsViewScopeToHclTerraform(struct?: OpenidClientPermissionsViewScopeOutputReference | OpenidClientPermissionsViewScope): any {
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

export class OpenidClientPermissionsViewScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientPermissionsViewScope | undefined {
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

  public set internalValue(value: OpenidClientPermissionsViewScope | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions keycloak_openid_client_permissions}
*/
export class OpenidClientPermissions extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client_permissions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClientPermissions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClientPermissions to import
  * @param importFromId The id of the existing OpenidClientPermissions that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClientPermissions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client_permissions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client_permissions keycloak_openid_client_permissions} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientPermissionsConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientPermissionsConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client_permissions',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._id = config.id;
    this._realmId = config.realmId;
    this._configureScope.internalValue = config.configureScope;
    this._manageScope.internalValue = config.manageScope;
    this._mapRolesClientScopeScope.internalValue = config.mapRolesClientScopeScope;
    this._mapRolesCompositeScope.internalValue = config.mapRolesCompositeScope;
    this._mapRolesScope.internalValue = config.mapRolesScope;
    this._tokenExchangeScope.internalValue = config.tokenExchangeScope;
    this._viewScope.internalValue = config.viewScope;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_resource_server_id - computed: true, optional: false, required: false
  public get authorizationResourceServerId() {
    return this.getStringAttribute('authorization_resource_server_id');
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
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

  // configure_scope - computed: false, optional: true, required: false
  private _configureScope = new OpenidClientPermissionsConfigureScopeOutputReference(this, "configure_scope");
  public get configureScope() {
    return this._configureScope;
  }
  public putConfigureScope(value: OpenidClientPermissionsConfigureScope) {
    this._configureScope.internalValue = value;
  }
  public resetConfigureScope() {
    this._configureScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureScopeInput() {
    return this._configureScope.internalValue;
  }

  // manage_scope - computed: false, optional: true, required: false
  private _manageScope = new OpenidClientPermissionsManageScopeOutputReference(this, "manage_scope");
  public get manageScope() {
    return this._manageScope;
  }
  public putManageScope(value: OpenidClientPermissionsManageScope) {
    this._manageScope.internalValue = value;
  }
  public resetManageScope() {
    this._manageScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageScopeInput() {
    return this._manageScope.internalValue;
  }

  // map_roles_client_scope_scope - computed: false, optional: true, required: false
  private _mapRolesClientScopeScope = new OpenidClientPermissionsMapRolesClientScopeScopeOutputReference(this, "map_roles_client_scope_scope");
  public get mapRolesClientScopeScope() {
    return this._mapRolesClientScopeScope;
  }
  public putMapRolesClientScopeScope(value: OpenidClientPermissionsMapRolesClientScopeScope) {
    this._mapRolesClientScopeScope.internalValue = value;
  }
  public resetMapRolesClientScopeScope() {
    this._mapRolesClientScopeScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapRolesClientScopeScopeInput() {
    return this._mapRolesClientScopeScope.internalValue;
  }

  // map_roles_composite_scope - computed: false, optional: true, required: false
  private _mapRolesCompositeScope = new OpenidClientPermissionsMapRolesCompositeScopeOutputReference(this, "map_roles_composite_scope");
  public get mapRolesCompositeScope() {
    return this._mapRolesCompositeScope;
  }
  public putMapRolesCompositeScope(value: OpenidClientPermissionsMapRolesCompositeScope) {
    this._mapRolesCompositeScope.internalValue = value;
  }
  public resetMapRolesCompositeScope() {
    this._mapRolesCompositeScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapRolesCompositeScopeInput() {
    return this._mapRolesCompositeScope.internalValue;
  }

  // map_roles_scope - computed: false, optional: true, required: false
  private _mapRolesScope = new OpenidClientPermissionsMapRolesScopeOutputReference(this, "map_roles_scope");
  public get mapRolesScope() {
    return this._mapRolesScope;
  }
  public putMapRolesScope(value: OpenidClientPermissionsMapRolesScope) {
    this._mapRolesScope.internalValue = value;
  }
  public resetMapRolesScope() {
    this._mapRolesScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapRolesScopeInput() {
    return this._mapRolesScope.internalValue;
  }

  // token_exchange_scope - computed: false, optional: true, required: false
  private _tokenExchangeScope = new OpenidClientPermissionsTokenExchangeScopeOutputReference(this, "token_exchange_scope");
  public get tokenExchangeScope() {
    return this._tokenExchangeScope;
  }
  public putTokenExchangeScope(value: OpenidClientPermissionsTokenExchangeScope) {
    this._tokenExchangeScope.internalValue = value;
  }
  public resetTokenExchangeScope() {
    this._tokenExchangeScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExchangeScopeInput() {
    return this._tokenExchangeScope.internalValue;
  }

  // view_scope - computed: false, optional: true, required: false
  private _viewScope = new OpenidClientPermissionsViewScopeOutputReference(this, "view_scope");
  public get viewScope() {
    return this._viewScope;
  }
  public putViewScope(value: OpenidClientPermissionsViewScope) {
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
      client_id: cdktf.stringToTerraform(this._clientId),
      id: cdktf.stringToTerraform(this._id),
      realm_id: cdktf.stringToTerraform(this._realmId),
      configure_scope: openidClientPermissionsConfigureScopeToTerraform(this._configureScope.internalValue),
      manage_scope: openidClientPermissionsManageScopeToTerraform(this._manageScope.internalValue),
      map_roles_client_scope_scope: openidClientPermissionsMapRolesClientScopeScopeToTerraform(this._mapRolesClientScopeScope.internalValue),
      map_roles_composite_scope: openidClientPermissionsMapRolesCompositeScopeToTerraform(this._mapRolesCompositeScope.internalValue),
      map_roles_scope: openidClientPermissionsMapRolesScopeToTerraform(this._mapRolesScope.internalValue),
      token_exchange_scope: openidClientPermissionsTokenExchangeScopeToTerraform(this._tokenExchangeScope.internalValue),
      view_scope: openidClientPermissionsViewScopeToTerraform(this._viewScope.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
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
      configure_scope: {
        value: openidClientPermissionsConfigureScopeToHclTerraform(this._configureScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientPermissionsConfigureScopeList",
      },
      manage_scope: {
        value: openidClientPermissionsManageScopeToHclTerraform(this._manageScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientPermissionsManageScopeList",
      },
      map_roles_client_scope_scope: {
        value: openidClientPermissionsMapRolesClientScopeScopeToHclTerraform(this._mapRolesClientScopeScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientPermissionsMapRolesClientScopeScopeList",
      },
      map_roles_composite_scope: {
        value: openidClientPermissionsMapRolesCompositeScopeToHclTerraform(this._mapRolesCompositeScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientPermissionsMapRolesCompositeScopeList",
      },
      map_roles_scope: {
        value: openidClientPermissionsMapRolesScopeToHclTerraform(this._mapRolesScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientPermissionsMapRolesScopeList",
      },
      token_exchange_scope: {
        value: openidClientPermissionsTokenExchangeScopeToHclTerraform(this._tokenExchangeScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientPermissionsTokenExchangeScopeList",
      },
      view_scope: {
        value: openidClientPermissionsViewScopeToHclTerraform(this._viewScope.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientPermissionsViewScopeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
