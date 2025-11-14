// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Internal ID for an existing default role, e.g. 'employee'. This can be set to manage permissions on existing default roles.  Note: Changing the default_role_id attribute will cause this auth_role to be dropped and recreated with a new ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#default_role_id AuthRole#default_role_id}
  */
  readonly defaultRoleId?: string;
  /**
  * Role description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#description AuthRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#id AuthRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Role name. This cannot be modified for default roles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#name AuthRole#name}
  */
  readonly name: string;
  /**
  * General role permissions. e.g. 'group_creation'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#permissions AuthRole#permissions}
  */
  readonly permissions?: string[];
  /**
  * permission_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#permission_policies AuthRole#permission_policies}
  */
  readonly permissionPolicies?: AuthRolePermissionPolicies[] | cdktf.IResolvable;
}
export interface AuthRolePermissionPoliciesConditionsTermsOperands {
  /**
  * Queue ID for QUEUE types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#queue_id AuthRole#queue_id}
  */
  readonly queueId?: string;
  /**
  * Value type (USER | QUEUE | SCALAR | VARIABLE).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#type AuthRole#type}
  */
  readonly type: string;
  /**
  * User ID for USER types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#user_id AuthRole#user_id}
  */
  readonly userId?: string;
  /**
  * Value for operand. For USER or QUEUE types, use user_id or queue_id instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#value AuthRole#value}
  */
  readonly value?: string;
}

export function authRolePermissionPoliciesConditionsTermsOperandsToTerraform(struct?: AuthRolePermissionPoliciesConditionsTermsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    queue_id: cdktf.stringToTerraform(struct!.queueId),
    type: cdktf.stringToTerraform(struct!.type),
    user_id: cdktf.stringToTerraform(struct!.userId),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function authRolePermissionPoliciesConditionsTermsOperandsToHclTerraform(struct?: AuthRolePermissionPoliciesConditionsTermsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    queue_id: {
      value: cdktf.stringToHclTerraform(struct!.queueId),
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
    user_id: {
      value: cdktf.stringToHclTerraform(struct!.userId),
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

export class AuthRolePermissionPoliciesConditionsTermsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthRolePermissionPoliciesConditionsTermsOperands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._queueId !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueId = this._queueId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userId = this._userId;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthRolePermissionPoliciesConditionsTermsOperands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._queueId = undefined;
      this._type = undefined;
      this._userId = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._queueId = value.queueId;
      this._type = value.type;
      this._userId = value.userId;
      this._value = value.value;
    }
  }

  // queue_id - computed: false, optional: true, required: false
  private _queueId?: string; 
  public get queueId() {
    return this.getStringAttribute('queue_id');
  }
  public set queueId(value: string) {
    this._queueId = value;
  }
  public resetQueueId() {
    this._queueId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueIdInput() {
    return this._queueId;
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

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
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

export class AuthRolePermissionPoliciesConditionsTermsOperandsList extends cdktf.ComplexList {
  public internalValue? : AuthRolePermissionPoliciesConditionsTermsOperands[] | cdktf.IResolvable

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
  public get(index: number): AuthRolePermissionPoliciesConditionsTermsOperandsOutputReference {
    return new AuthRolePermissionPoliciesConditionsTermsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthRolePermissionPoliciesConditionsTerms {
  /**
  * Operator type (EQ | IN | GE | GT | LE | LT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#operator AuthRole#operator}
  */
  readonly operator: string;
  /**
  * Variable name being compared. This varies depending on the permission.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#variable_name AuthRole#variable_name}
  */
  readonly variableName: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#operands AuthRole#operands}
  */
  readonly operands: AuthRolePermissionPoliciesConditionsTermsOperands[] | cdktf.IResolvable;
}

export function authRolePermissionPoliciesConditionsTermsToTerraform(struct?: AuthRolePermissionPoliciesConditionsTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    variable_name: cdktf.stringToTerraform(struct!.variableName),
    operands: cdktf.listMapper(authRolePermissionPoliciesConditionsTermsOperandsToTerraform, true)(struct!.operands),
  }
}


export function authRolePermissionPoliciesConditionsTermsToHclTerraform(struct?: AuthRolePermissionPoliciesConditionsTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variable_name: {
      value: cdktf.stringToHclTerraform(struct!.variableName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operands: {
      value: cdktf.listMapperHcl(authRolePermissionPoliciesConditionsTermsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "set",
      storageClassType: "AuthRolePermissionPoliciesConditionsTermsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthRolePermissionPoliciesConditionsTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthRolePermissionPoliciesConditionsTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._variableName !== undefined) {
      hasAnyValues = true;
      internalValueResult.variableName = this._variableName;
    }
    if (this._operands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operands = this._operands?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthRolePermissionPoliciesConditionsTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._variableName = undefined;
      this._operands.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._variableName = value.variableName;
      this._operands.internalValue = value.operands;
    }
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

  // variable_name - computed: false, optional: false, required: true
  private _variableName?: string; 
  public get variableName() {
    return this.getStringAttribute('variable_name');
  }
  public set variableName(value: string) {
    this._variableName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableNameInput() {
    return this._variableName;
  }

  // operands - computed: false, optional: false, required: true
  private _operands = new AuthRolePermissionPoliciesConditionsTermsOperandsList(this, "operands", true);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: AuthRolePermissionPoliciesConditionsTermsOperands[] | cdktf.IResolvable) {
    this._operands.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operandsInput() {
    return this._operands.internalValue;
  }
}

export class AuthRolePermissionPoliciesConditionsTermsList extends cdktf.ComplexList {
  public internalValue? : AuthRolePermissionPoliciesConditionsTerms[] | cdktf.IResolvable

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
  public get(index: number): AuthRolePermissionPoliciesConditionsTermsOutputReference {
    return new AuthRolePermissionPoliciesConditionsTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AuthRolePermissionPoliciesConditions {
  /**
  * Conjunction for condition terms (AND | OR).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#conjunction AuthRole#conjunction}
  */
  readonly conjunction: string;
  /**
  * terms block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#terms AuthRole#terms}
  */
  readonly terms: AuthRolePermissionPoliciesConditionsTerms[] | cdktf.IResolvable;
}

export function authRolePermissionPoliciesConditionsToTerraform(struct?: AuthRolePermissionPoliciesConditionsOutputReference | AuthRolePermissionPoliciesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conjunction: cdktf.stringToTerraform(struct!.conjunction),
    terms: cdktf.listMapper(authRolePermissionPoliciesConditionsTermsToTerraform, true)(struct!.terms),
  }
}


export function authRolePermissionPoliciesConditionsToHclTerraform(struct?: AuthRolePermissionPoliciesConditionsOutputReference | AuthRolePermissionPoliciesConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conjunction: {
      value: cdktf.stringToHclTerraform(struct!.conjunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    terms: {
      value: cdktf.listMapperHcl(authRolePermissionPoliciesConditionsTermsToHclTerraform, true)(struct!.terms),
      isBlock: true,
      type: "set",
      storageClassType: "AuthRolePermissionPoliciesConditionsTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthRolePermissionPoliciesConditionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AuthRolePermissionPoliciesConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conjunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.conjunction = this._conjunction;
    }
    if (this._terms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.terms = this._terms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthRolePermissionPoliciesConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._conjunction = undefined;
      this._terms.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._conjunction = value.conjunction;
      this._terms.internalValue = value.terms;
    }
  }

  // conjunction - computed: false, optional: false, required: true
  private _conjunction?: string; 
  public get conjunction() {
    return this.getStringAttribute('conjunction');
  }
  public set conjunction(value: string) {
    this._conjunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conjunctionInput() {
    return this._conjunction;
  }

  // terms - computed: false, optional: false, required: true
  private _terms = new AuthRolePermissionPoliciesConditionsTermsList(this, "terms", true);
  public get terms() {
    return this._terms;
  }
  public putTerms(value: AuthRolePermissionPoliciesConditionsTerms[] | cdktf.IResolvable) {
    this._terms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get termsInput() {
    return this._terms.internalValue;
  }
}
export interface AuthRolePermissionPolicies {
  /**
  * Actions allowed on the entity or '*' for all. e.g. 'add'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#action_set AuthRole#action_set}
  */
  readonly actionSet: string[];
  /**
  * Permission domain. e.g 'directory'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#domain AuthRole#domain}
  */
  readonly domain: string;
  /**
  * Permission entity or '*' for all. e.g. 'user'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#entity_name AuthRole#entity_name}
  */
  readonly entityName: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#conditions AuthRole#conditions}
  */
  readonly conditions?: AuthRolePermissionPoliciesConditions;
}

export function authRolePermissionPoliciesToTerraform(struct?: AuthRolePermissionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_set: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.actionSet),
    domain: cdktf.stringToTerraform(struct!.domain),
    entity_name: cdktf.stringToTerraform(struct!.entityName),
    conditions: authRolePermissionPoliciesConditionsToTerraform(struct!.conditions),
  }
}


export function authRolePermissionPoliciesToHclTerraform(struct?: AuthRolePermissionPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_set: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.actionSet),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_name: {
      value: cdktf.stringToHclTerraform(struct!.entityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    conditions: {
      value: authRolePermissionPoliciesConditionsToHclTerraform(struct!.conditions),
      isBlock: true,
      type: "list",
      storageClassType: "AuthRolePermissionPoliciesConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthRolePermissionPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AuthRolePermissionPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSet = this._actionSet;
    }
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._entityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityName = this._entityName;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthRolePermissionPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionSet = undefined;
      this._domain = undefined;
      this._entityName = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionSet = value.actionSet;
      this._domain = value.domain;
      this._entityName = value.entityName;
      this._conditions.internalValue = value.conditions;
    }
  }

  // action_set - computed: false, optional: false, required: true
  private _actionSet?: string[]; 
  public get actionSet() {
    return cdktf.Fn.tolist(this.getListAttribute('action_set'));
  }
  public set actionSet(value: string[]) {
    this._actionSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSetInput() {
    return this._actionSet;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new AuthRolePermissionPoliciesConditionsOutputReference(this, "conditions");
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AuthRolePermissionPoliciesConditions) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class AuthRolePermissionPoliciesList extends cdktf.ComplexList {
  public internalValue? : AuthRolePermissionPolicies[] | cdktf.IResolvable

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
  public get(index: number): AuthRolePermissionPoliciesOutputReference {
    return new AuthRolePermissionPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role genesyscloud_auth_role}
*/
export class AuthRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud_auth_role";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthRole resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthRole to import
  * @param importFromId The id of the existing AuthRole that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthRole to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud_auth_role", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs/resources/auth_role genesyscloud_auth_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthRoleConfig
  */
  public constructor(scope: Construct, id: string, config: AuthRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud_auth_role',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultRoleId = config.defaultRoleId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._permissions = config.permissions;
    this._permissionPolicies.internalValue = config.permissionPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_role_id - computed: false, optional: true, required: false
  private _defaultRoleId?: string; 
  public get defaultRoleId() {
    return this.getStringAttribute('default_role_id');
  }
  public set defaultRoleId(value: string) {
    this._defaultRoleId = value;
  }
  public resetDefaultRoleId() {
    this._defaultRoleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleIdInput() {
    return this._defaultRoleId;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // permission_policies - computed: false, optional: true, required: false
  private _permissionPolicies = new AuthRolePermissionPoliciesList(this, "permission_policies", true);
  public get permissionPolicies() {
    return this._permissionPolicies;
  }
  public putPermissionPolicies(value: AuthRolePermissionPolicies[] | cdktf.IResolvable) {
    this._permissionPolicies.internalValue = value;
  }
  public resetPermissionPolicies() {
    this._permissionPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionPoliciesInput() {
    return this._permissionPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_role_id: cdktf.stringToTerraform(this._defaultRoleId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      permission_policies: cdktf.listMapper(authRolePermissionPoliciesToTerraform, true)(this._permissionPolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_role_id: {
        value: cdktf.stringToHclTerraform(this._defaultRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permissions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._permissions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      permission_policies: {
        value: cdktf.listMapperHcl(authRolePermissionPoliciesToHclTerraform, true)(this._permissionPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AuthRolePermissionPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
