// https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#id SecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Security policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#profile SecurityPolicy#profile}
  */
  readonly profile?: SecurityPolicyProfile;
}
export interface SecurityPolicyProfileMaskingRuleAction {
  /**
  * The reference id to be applied as masking profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#masking_profile_id SecurityPolicy#masking_profile_id}
  */
  readonly maskingProfileId: string;
  /**
  * Rule type. Defaults to `APPLY_MASKING_PROFILE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type?: string;
}

export function securityPolicyProfileMaskingRuleActionToTerraform(struct?: SecurityPolicyProfileMaskingRuleActionOutputReference | SecurityPolicyProfileMaskingRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masking_profile_id: cdktf.stringToTerraform(struct!.maskingProfileId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityPolicyProfileMaskingRuleActionToHclTerraform(struct?: SecurityPolicyProfileMaskingRuleActionOutputReference | SecurityPolicyProfileMaskingRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masking_profile_id: {
      value: cdktf.stringToHclTerraform(struct!.maskingProfileId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileMaskingRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileMaskingRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maskingProfileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskingProfileId = this._maskingProfileId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileMaskingRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maskingProfileId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maskingProfileId = value.maskingProfileId;
      this._type = value.type;
    }
  }

  // masking_profile_id - computed: false, optional: false, required: true
  private _maskingProfileId?: string; 
  public get maskingProfileId() {
    return this.getStringAttribute('masking_profile_id');
  }
  public set maskingProfileId(value: string) {
    this._maskingProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingProfileIdInput() {
    return this._maskingProfileId;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SecurityPolicyProfileMaskingRuleConditionalMasking {
  /**
  * Where condition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#where_condition SecurityPolicy#where_condition}
  */
  readonly whereCondition: string;
}

export function securityPolicyProfileMaskingRuleConditionalMaskingToTerraform(struct?: SecurityPolicyProfileMaskingRuleConditionalMaskingOutputReference | SecurityPolicyProfileMaskingRuleConditionalMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    where_condition: cdktf.stringToTerraform(struct!.whereCondition),
  }
}


export function securityPolicyProfileMaskingRuleConditionalMaskingToHclTerraform(struct?: SecurityPolicyProfileMaskingRuleConditionalMaskingOutputReference | SecurityPolicyProfileMaskingRuleConditionalMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    where_condition: {
      value: cdktf.stringToHclTerraform(struct!.whereCondition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileMaskingRuleConditionalMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileMaskingRuleConditionalMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._whereCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.whereCondition = this._whereCondition;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileMaskingRuleConditionalMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._whereCondition = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._whereCondition = value.whereCondition;
    }
  }

  // where_condition - computed: false, optional: false, required: true
  private _whereCondition?: string; 
  public get whereCondition() {
    return this.getStringAttribute('where_condition');
  }
  public set whereCondition(value: string) {
    this._whereCondition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whereConditionInput() {
    return this._whereCondition;
  }
}
export interface SecurityPolicyProfileMaskingRuleCriteriaIdentity {
  /**
  * Directory group ID for identity of type GROUP.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#group_id SecurityPolicy#group_id}
  */
  readonly groupId?: string;
  /**
  * User/group name for identity types of USER and IDP_GROUP or a custom expression based on attributes of the identity for CEL identity type.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * Identity type, valid types are: USER, DB_USER, IDP_GROUP, GROUP, DATABRICKS_GROUP, DATABRICKS_SERVICE_PRINCIPAL, SNOWFLAKE_ROLE, CEL, EVERYONE.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type: string;
}

export function securityPolicyProfileMaskingRuleCriteriaIdentityToTerraform(struct?: SecurityPolicyProfileMaskingRuleCriteriaIdentityOutputReference | SecurityPolicyProfileMaskingRuleCriteriaIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityPolicyProfileMaskingRuleCriteriaIdentityToHclTerraform(struct?: SecurityPolicyProfileMaskingRuleCriteriaIdentityOutputReference | SecurityPolicyProfileMaskingRuleCriteriaIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileMaskingRuleCriteriaIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileMaskingRuleCriteriaIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileMaskingRuleCriteriaIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
}
export interface SecurityPolicyProfileMaskingRuleCriteria {
  /**
  * Identity condition, for example IS_NOT, IS, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#condition SecurityPolicy#condition}
  */
  readonly condition: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#identity SecurityPolicy#identity}
  */
  readonly identity: SecurityPolicyProfileMaskingRuleCriteriaIdentity;
}

export function securityPolicyProfileMaskingRuleCriteriaToTerraform(struct?: SecurityPolicyProfileMaskingRuleCriteriaOutputReference | SecurityPolicyProfileMaskingRuleCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    identity: securityPolicyProfileMaskingRuleCriteriaIdentityToTerraform(struct!.identity),
  }
}


export function securityPolicyProfileMaskingRuleCriteriaToHclTerraform(struct?: SecurityPolicyProfileMaskingRuleCriteriaOutputReference | SecurityPolicyProfileMaskingRuleCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: securityPolicyProfileMaskingRuleCriteriaIdentityToHclTerraform(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileMaskingRuleCriteriaIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileMaskingRuleCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileMaskingRuleCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileMaskingRuleCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._identity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._identity.internalValue = value.identity;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new SecurityPolicyProfileMaskingRuleCriteriaIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: SecurityPolicyProfileMaskingRuleCriteriaIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}
export interface SecurityPolicyProfileMaskingRule {
  /**
  * Is active rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#active SecurityPolicy#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#description SecurityPolicy#description}
  */
  readonly description: string;
  /**
  * Rule id, has to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#id SecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#action SecurityPolicy#action}
  */
  readonly action: SecurityPolicyProfileMaskingRuleAction;
  /**
  * conditional_masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#conditional_masking SecurityPolicy#conditional_masking}
  */
  readonly conditionalMasking?: SecurityPolicyProfileMaskingRuleConditionalMasking;
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#criteria SecurityPolicy#criteria}
  */
  readonly criteria: SecurityPolicyProfileMaskingRuleCriteria;
}

export function securityPolicyProfileMaskingRuleToTerraform(struct?: SecurityPolicyProfileMaskingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    action: securityPolicyProfileMaskingRuleActionToTerraform(struct!.action),
    conditional_masking: securityPolicyProfileMaskingRuleConditionalMaskingToTerraform(struct!.conditionalMasking),
    criteria: securityPolicyProfileMaskingRuleCriteriaToTerraform(struct!.criteria),
  }
}


export function securityPolicyProfileMaskingRuleToHclTerraform(struct?: SecurityPolicyProfileMaskingRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    action: {
      value: securityPolicyProfileMaskingRuleActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileMaskingRuleActionList",
    },
    conditional_masking: {
      value: securityPolicyProfileMaskingRuleConditionalMaskingToHclTerraform(struct!.conditionalMasking),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileMaskingRuleConditionalMaskingList",
    },
    criteria: {
      value: securityPolicyProfileMaskingRuleCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileMaskingRuleCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileMaskingRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyProfileMaskingRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._conditionalMasking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalMasking = this._conditionalMasking?.internalValue;
    }
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileMaskingRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._description = undefined;
      this._id = undefined;
      this._action.internalValue = undefined;
      this._conditionalMasking.internalValue = undefined;
      this._criteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._description = value.description;
      this._id = value.id;
      this._action.internalValue = value.action;
      this._conditionalMasking.internalValue = value.conditionalMasking;
      this._criteria.internalValue = value.criteria;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // action - computed: false, optional: false, required: true
  private _action = new SecurityPolicyProfileMaskingRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SecurityPolicyProfileMaskingRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // conditional_masking - computed: false, optional: true, required: false
  private _conditionalMasking = new SecurityPolicyProfileMaskingRuleConditionalMaskingOutputReference(this, "conditional_masking");
  public get conditionalMasking() {
    return this._conditionalMasking;
  }
  public putConditionalMasking(value: SecurityPolicyProfileMaskingRuleConditionalMasking) {
    this._conditionalMasking.internalValue = value;
  }
  public resetConditionalMasking() {
    this._conditionalMasking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalMaskingInput() {
    return this._conditionalMasking.internalValue;
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new SecurityPolicyProfileMaskingRuleCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: SecurityPolicyProfileMaskingRuleCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }
}

export class SecurityPolicyProfileMaskingRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyProfileMaskingRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyProfileMaskingRuleOutputReference {
    return new SecurityPolicyProfileMaskingRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyProfileMasking {
  /**
  * Is active.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#active SecurityPolicy#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule?: SecurityPolicyProfileMaskingRule[] | cdktf.IResolvable;
}

export function securityPolicyProfileMaskingToTerraform(struct?: SecurityPolicyProfileMaskingOutputReference | SecurityPolicyProfileMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    rule: cdktf.listMapper(securityPolicyProfileMaskingRuleToTerraform, true)(struct!.rule),
  }
}


export function securityPolicyProfileMaskingToHclTerraform(struct?: SecurityPolicyProfileMaskingOutputReference | SecurityPolicyProfileMasking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule: {
      value: cdktf.listMapperHcl(securityPolicyProfileMaskingRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileMaskingRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileMaskingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileMasking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileMasking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._rule.internalValue = value.rule;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new SecurityPolicyProfileMaskingRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityPolicyProfileMaskingRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityMappingDefaults {
  /**
  * Default values type. Allowed options: STRING, NUMERIC, CEL, SQL, NO_VALUE, ALL_OTHER_VALUES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type: string;
  /**
  * List of values, when NO_VALUE or ALL_OTHER_VALUES are defined, the list has to be empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#value SecurityPolicy#value}
  */
  readonly value: string[];
}

export function securityPolicyProfileRowLevelSecurityMappingDefaultsToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingDefaultsOutputReference | SecurityPolicyProfileRowLevelSecurityMappingDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function securityPolicyProfileRowLevelSecurityMappingDefaultsToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingDefaultsOutputReference | SecurityPolicyProfileRowLevelSecurityMappingDefaults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityMappingDefaultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityMappingDefaults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityMappingDefaults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentity {
  /**
  * Directory group ID for identity of type GROUP.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#group_id SecurityPolicy#group_id}
  */
  readonly groupId?: string;
  /**
  * User/group name for identity types of USER and IDP_GROUP or a custom expression based on attributes of the identity for CEL identity type.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name?: string;
  /**
  * Identity type, valid types are: USER, DB_USER, IDP_GROUP, GROUP, DATABRICKS_GROUP, DATABRICKS_SERVICE_PRINCIPAL, SNOWFLAKE_ROLE, CEL, EVERYONE.
  * Can not be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type: string;
}

export function securityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_id: cdktf.stringToTerraform(struct!.groupId),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_id: {
      value: cdktf.stringToHclTerraform(struct!.groupId),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupId = this._groupId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupId = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupId = value.groupId;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
}
export interface SecurityPolicyProfileRowLevelSecurityMappingFilterCriteria {
  /**
  * Identity condition, for example IS_NOT, IS, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#condition SecurityPolicy#condition}
  */
  readonly condition: string;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#identity SecurityPolicy#identity}
  */
  readonly identity: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentity;
}

export function securityPolicyProfileRowLevelSecurityMappingFilterCriteriaToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilterCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    identity: securityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityToTerraform(struct!.identity),
  }
}


export function securityPolicyProfileRowLevelSecurityMappingFilterCriteriaToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilterCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identity: {
      value: securityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityToHclTerraform(struct!.identity),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityMappingFilterCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._condition = undefined;
      this._identity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._condition = value.condition;
      this._identity.internalValue = value.identity;
    }
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityMappingFilterValues {
  /**
  * Values type. Allowed options: STRING, NUMERIC, CEL, SQL, ANY_VALUE, ALL_OTHER_VALUES.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type: string;
  /**
  * List of values, when ANY_VALUE or ALL_OTHER_VALUES are defined, the list has to be empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#value SecurityPolicy#value}
  */
  readonly value: string[];
}

export function securityPolicyProfileRowLevelSecurityMappingFilterValuesToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterValuesOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilterValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function securityPolicyProfileRowLevelSecurityMappingFilterValuesToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterValuesOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilterValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityMappingFilterValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityMappingFilterValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityMappingFilterValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._value = value.value;
    }
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

  // value - computed: false, optional: false, required: true
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityMappingFilter {
  /**
  * criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#criteria SecurityPolicy#criteria}
  */
  readonly criteria: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteria;
  /**
  * values block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#values SecurityPolicy#values}
  */
  readonly values: SecurityPolicyProfileRowLevelSecurityMappingFilterValues;
}

export function securityPolicyProfileRowLevelSecurityMappingFilterToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    criteria: securityPolicyProfileRowLevelSecurityMappingFilterCriteriaToTerraform(struct!.criteria),
    values: securityPolicyProfileRowLevelSecurityMappingFilterValuesToTerraform(struct!.values),
  }
}


export function securityPolicyProfileRowLevelSecurityMappingFilterToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMappingFilterOutputReference | SecurityPolicyProfileRowLevelSecurityMappingFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    criteria: {
      value: securityPolicyProfileRowLevelSecurityMappingFilterCriteriaToHclTerraform(struct!.criteria),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaList",
    },
    values: {
      value: securityPolicyProfileRowLevelSecurityMappingFilterValuesToHclTerraform(struct!.values),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityMappingFilterValuesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityMappingFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityMappingFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._criteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.criteria = this._criteria?.internalValue;
    }
    if (this._values?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityMappingFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._criteria.internalValue = undefined;
      this._values.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._criteria.internalValue = value.criteria;
      this._values.internalValue = value.values;
    }
  }

  // criteria - computed: false, optional: false, required: true
  private _criteria = new SecurityPolicyProfileRowLevelSecurityMappingFilterCriteriaOutputReference(this, "criteria");
  public get criteria() {
    return this._criteria;
  }
  public putCriteria(value: SecurityPolicyProfileRowLevelSecurityMappingFilterCriteria) {
    this._criteria.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get criteriaInput() {
    return this._criteria.internalValue;
  }

  // values - computed: false, optional: false, required: true
  private _values = new SecurityPolicyProfileRowLevelSecurityMappingFilterValuesOutputReference(this, "values");
  public get values() {
    return this._values;
  }
  public putValues(value: SecurityPolicyProfileRowLevelSecurityMappingFilterValues) {
    this._values.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values.internalValue;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityMapping {
  /**
  * Filter name, has to be unique in this policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * defaults block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#defaults SecurityPolicy#defaults}
  */
  readonly defaults: SecurityPolicyProfileRowLevelSecurityMappingDefaults;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#filter SecurityPolicy#filter}
  */
  readonly filter: SecurityPolicyProfileRowLevelSecurityMappingFilter;
}

export function securityPolicyProfileRowLevelSecurityMappingToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    defaults: securityPolicyProfileRowLevelSecurityMappingDefaultsToTerraform(struct!.defaults),
    filter: securityPolicyProfileRowLevelSecurityMappingFilterToTerraform(struct!.filter),
  }
}


export function securityPolicyProfileRowLevelSecurityMappingToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityMapping | cdktf.IResolvable): any {
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
    defaults: {
      value: securityPolicyProfileRowLevelSecurityMappingDefaultsToHclTerraform(struct!.defaults),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityMappingDefaultsList",
    },
    filter: {
      value: securityPolicyProfileRowLevelSecurityMappingFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityMappingFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._defaults?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaults = this._defaults?.internalValue;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._defaults.internalValue = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._defaults.internalValue = value.defaults;
      this._filter.internalValue = value.filter;
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

  // defaults - computed: false, optional: false, required: true
  private _defaults = new SecurityPolicyProfileRowLevelSecurityMappingDefaultsOutputReference(this, "defaults");
  public get defaults() {
    return this._defaults;
  }
  public putDefaults(value: SecurityPolicyProfileRowLevelSecurityMappingDefaults) {
    this._defaults.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsInput() {
    return this._defaults.internalValue;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SecurityPolicyProfileRowLevelSecurityMappingFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityPolicyProfileRowLevelSecurityMappingFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SecurityPolicyProfileRowLevelSecurityMappingList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyProfileRowLevelSecurityMapping[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyProfileRowLevelSecurityMappingOutputReference {
    return new SecurityPolicyProfileRowLevelSecurityMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocation {
  /**
  * Catalog name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#catalog SecurityPolicy#catalog}
  */
  readonly catalog: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#db SecurityPolicy#db}
  */
  readonly db?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#table SecurityPolicy#table}
  */
  readonly table?: string;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    catalog: cdktf.stringToTerraform(struct!.catalog),
    db: cdktf.stringToTerraform(struct!.db),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    catalog: {
      value: cdktf.stringToHclTerraform(struct!.catalog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._catalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalog = this._catalog;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._catalog = undefined;
      this._db = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._catalog = value.catalog;
      this._db = value.db;
      this._table = value.table;
    }
  }

  // catalog - computed: false, optional: false, required: true
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocation {
  /**
  * Collection name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#collection SecurityPolicy#collection}
  */
  readonly collection?: string;
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#db SecurityPolicy#db}
  */
  readonly db: string;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collection: cdktf.stringToTerraform(struct!.collection),
    db: cdktf.stringToTerraform(struct!.db),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collection: {
      value: cdktf.stringToHclTerraform(struct!.collection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collection !== undefined) {
      hasAnyValues = true;
      internalValueResult.collection = this._collection;
    }
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._collection = undefined;
      this._db = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._collection = value.collection;
      this._db = value.db;
    }
  }

  // collection - computed: false, optional: true, required: false
  private _collection?: string; 
  public get collection() {
    return this.getStringAttribute('collection');
  }
  public set collection(value: string) {
    this._collection = value;
  }
  public resetCollection() {
    this._collection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionInput() {
    return this._collection;
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#db SecurityPolicy#db}
  */
  readonly db: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#table SecurityPolicy#table}
  */
  readonly table?: string;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._db = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._db = value.db;
      this._table = value.table;
    }
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocation {
  /**
  * Database name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#db SecurityPolicy#db}
  */
  readonly db: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#schema SecurityPolicy#schema}
  */
  readonly schema?: string;
  /**
  * Table name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#table SecurityPolicy#table}
  */
  readonly table?: string;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._db = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._db = value.db;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: false, optional: true, required: false
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  public resetTable() {
    this._table = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3Location {
  /**
  * Bucket name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#bucket SecurityPolicy#bucket}
  */
  readonly bucket: string;
  /**
  * Object Key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#object_key SecurityPolicy#object_key}
  */
  readonly objectKey?: string;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    object_key: cdktf.stringToTerraform(struct!.objectKey),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3Location): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_key: {
      value: cdktf.stringToHclTerraform(struct!.objectKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3Location | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._objectKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectKey = this._objectKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3Location | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._objectKey = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._objectKey = value.objectKey;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // object_key - computed: false, optional: true, required: false
  private _objectKey?: string; 
  public get objectKey() {
    return this.getStringAttribute('object_key');
  }
  public set objectKey(value: string) {
    this._objectKey = value;
  }
  public resetObjectKey() {
    this._objectKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectKeyInput() {
    return this._objectKey;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilterLocation {
  /**
  * athena_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#athena_location SecurityPolicy#athena_location}
  */
  readonly athenaLocation?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocation;
  /**
  * mongo_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#mongo_location SecurityPolicy#mongo_location}
  */
  readonly mongoLocation?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocation;
  /**
  * mysql_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#mysql_location SecurityPolicy#mysql_location}
  */
  readonly mysqlLocation?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocation;
  /**
  * relational_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#relational_location SecurityPolicy#relational_location}
  */
  readonly relationalLocation?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocation;
  /**
  * s3_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#s3_location SecurityPolicy#s3_location}
  */
  readonly s3Location?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3Location;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterLocationToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    athena_location: securityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationToTerraform(struct!.athenaLocation),
    mongo_location: securityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationToTerraform(struct!.mongoLocation),
    mysql_location: securityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationToTerraform(struct!.mysqlLocation),
    relational_location: securityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationToTerraform(struct!.relationalLocation),
    s3_location: securityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationToTerraform(struct!.s3Location),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterLocationToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    athena_location: {
      value: securityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationToHclTerraform(struct!.athenaLocation),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationList",
    },
    mongo_location: {
      value: securityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationToHclTerraform(struct!.mongoLocation),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationList",
    },
    mysql_location: {
      value: securityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationToHclTerraform(struct!.mysqlLocation),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationList",
    },
    relational_location: {
      value: securityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationToHclTerraform(struct!.relationalLocation),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationList",
    },
    s3_location: {
      value: securityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationToHclTerraform(struct!.s3Location),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilterLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._athenaLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.athenaLocation = this._athenaLocation?.internalValue;
    }
    if (this._mongoLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mongoLocation = this._mongoLocation?.internalValue;
    }
    if (this._mysqlLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlLocation = this._mysqlLocation?.internalValue;
    }
    if (this._relationalLocation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.relationalLocation = this._relationalLocation?.internalValue;
    }
    if (this._s3Location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Location = this._s3Location?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._athenaLocation.internalValue = undefined;
      this._mongoLocation.internalValue = undefined;
      this._mysqlLocation.internalValue = undefined;
      this._relationalLocation.internalValue = undefined;
      this._s3Location.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._athenaLocation.internalValue = value.athenaLocation;
      this._mongoLocation.internalValue = value.mongoLocation;
      this._mysqlLocation.internalValue = value.mysqlLocation;
      this._relationalLocation.internalValue = value.relationalLocation;
      this._s3Location.internalValue = value.s3Location;
    }
  }

  // athena_location - computed: false, optional: true, required: false
  private _athenaLocation = new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocationOutputReference(this, "athena_location");
  public get athenaLocation() {
    return this._athenaLocation;
  }
  public putAthenaLocation(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationAthenaLocation) {
    this._athenaLocation.internalValue = value;
  }
  public resetAthenaLocation() {
    this._athenaLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get athenaLocationInput() {
    return this._athenaLocation.internalValue;
  }

  // mongo_location - computed: false, optional: true, required: false
  private _mongoLocation = new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocationOutputReference(this, "mongo_location");
  public get mongoLocation() {
    return this._mongoLocation;
  }
  public putMongoLocation(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMongoLocation) {
    this._mongoLocation.internalValue = value;
  }
  public resetMongoLocation() {
    this._mongoLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mongoLocationInput() {
    return this._mongoLocation.internalValue;
  }

  // mysql_location - computed: false, optional: true, required: false
  private _mysqlLocation = new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocationOutputReference(this, "mysql_location");
  public get mysqlLocation() {
    return this._mysqlLocation;
  }
  public putMysqlLocation(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationMysqlLocation) {
    this._mysqlLocation.internalValue = value;
  }
  public resetMysqlLocation() {
    this._mysqlLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlLocationInput() {
    return this._mysqlLocation.internalValue;
  }

  // relational_location - computed: false, optional: true, required: false
  private _relationalLocation = new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocationOutputReference(this, "relational_location");
  public get relationalLocation() {
    return this._relationalLocation;
  }
  public putRelationalLocation(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationRelationalLocation) {
    this._relationalLocation.internalValue = value;
  }
  public resetRelationalLocation() {
    this._relationalLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationalLocationInput() {
    return this._relationalLocation.internalValue;
  }

  // s3_location - computed: false, optional: true, required: false
  private _s3Location = new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3LocationOutputReference(this, "s3_location");
  public get s3Location() {
    return this._s3Location;
  }
  public putS3Location(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationS3Location) {
    this._s3Location.internalValue = value;
  }
  public resetS3Location() {
    this._s3Location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3LocationInput() {
    return this._s3Location.internalValue;
  }
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyProfileRowLevelSecurityRuleFilterLocation[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationOutputReference {
    return new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull {
  /**
  * The name of the location part.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#name SecurityPolicy#name}
  */
  readonly name: string;
  /**
  * The type of the location part. Optional values: TABLE, COLUMN, SEMANTIC_MODEL, REPORT, DASHBOARD, DATABASE, SCHEMA, JSON_PATH, WAREHOUSE, ENDPOINT, TYPE, FIELD, EXTERNAL_LOCATION, CATALOG, BUCKET, OBJECT, COLLECTION, VIEW, etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#type SecurityPolicy#type}
  */
  readonly type: string;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull | cdktf.IResolvable): any {
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._type = value.type;
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
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullOutputReference {
    return new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRuleFilter {
  /**
  * Describes if logic yaml contains complex configuration. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#advanced SecurityPolicy#advanced}
  */
  readonly advanced?: boolean | cdktf.IResolvable;
  /**
  * Datastore ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#datastore_id SecurityPolicy#datastore_id}
  */
  readonly datastoreId: string;
  /**
  * The part separated location path in the data store. Includes an array of path parts when part types are defined with default definitions. For example ['a', 'b', 'c'] in Snowflake data store will path to table 'a' under schema 'b' under database 'a'. Conflicts with 'location', 'location_path', and 'location_parts_full' fields
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#location_parts SecurityPolicy#location_parts}
  */
  readonly locationParts?: string[];
  /**
  * The short presentation of the location path in the data store. Includes `.` separated string when part types are defined with default definitions. For example 'a.b.c' in Snowflake data store will path to table 'a' under schema 'b' under database 'a'.  Conflicts with 'location', 'location_parts', and 'location_parts_full' fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#location_path SecurityPolicy#location_path}
  */
  readonly locationPath?: string;
  /**
  * Conditional rule, for more info see https://satoricyber.com/docs/security-policies/#setting-up-data-filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#logic_yaml SecurityPolicy#logic_yaml}
  */
  readonly logicYaml: string;
  /**
  * location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#location SecurityPolicy#location}
  */
  readonly location?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocation[] | cdktf.IResolvable;
  /**
  * location_parts_full block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#location_parts_full SecurityPolicy#location_parts_full}
  */
  readonly locationPartsFull?: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull[] | cdktf.IResolvable;
}

export function securityPolicyProfileRowLevelSecurityRuleFilterToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advanced: cdktf.booleanToTerraform(struct!.advanced),
    datastore_id: cdktf.stringToTerraform(struct!.datastoreId),
    location_parts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.locationParts),
    location_path: cdktf.stringToTerraform(struct!.locationPath),
    logic_yaml: cdktf.stringToTerraform(struct!.logicYaml),
    location: cdktf.listMapper(securityPolicyProfileRowLevelSecurityRuleFilterLocationToTerraform, true)(struct!.location),
    location_parts_full: cdktf.listMapper(securityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullToTerraform, true)(struct!.locationPartsFull),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleFilterToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRuleFilterOutputReference | SecurityPolicyProfileRowLevelSecurityRuleFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advanced: {
      value: cdktf.booleanToHclTerraform(struct!.advanced),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    datastore_id: {
      value: cdktf.stringToHclTerraform(struct!.datastoreId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location_parts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.locationParts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    location_path: {
      value: cdktf.stringToHclTerraform(struct!.locationPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logic_yaml: {
      value: cdktf.stringToHclTerraform(struct!.logicYaml),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.listMapperHcl(securityPolicyProfileRowLevelSecurityRuleFilterLocationToHclTerraform, true)(struct!.location),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterLocationList",
    },
    location_parts_full: {
      value: cdktf.listMapperHcl(securityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullToHclTerraform, true)(struct!.locationPartsFull),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRuleFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advanced !== undefined) {
      hasAnyValues = true;
      internalValueResult.advanced = this._advanced;
    }
    if (this._datastoreId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreId = this._datastoreId;
    }
    if (this._locationParts !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationParts = this._locationParts;
    }
    if (this._locationPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPath = this._locationPath;
    }
    if (this._logicYaml !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicYaml = this._logicYaml;
    }
    if (this._location?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location?.internalValue;
    }
    if (this._locationPartsFull?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationPartsFull = this._locationPartsFull?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRuleFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._advanced = undefined;
      this._datastoreId = undefined;
      this._locationParts = undefined;
      this._locationPath = undefined;
      this._logicYaml = undefined;
      this._location.internalValue = undefined;
      this._locationPartsFull.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._advanced = value.advanced;
      this._datastoreId = value.datastoreId;
      this._locationParts = value.locationParts;
      this._locationPath = value.locationPath;
      this._logicYaml = value.logicYaml;
      this._location.internalValue = value.location;
      this._locationPartsFull.internalValue = value.locationPartsFull;
    }
  }

  // advanced - computed: false, optional: true, required: false
  private _advanced?: boolean | cdktf.IResolvable; 
  public get advanced() {
    return this.getBooleanAttribute('advanced');
  }
  public set advanced(value: boolean | cdktf.IResolvable) {
    this._advanced = value;
  }
  public resetAdvanced() {
    this._advanced = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedInput() {
    return this._advanced;
  }

  // datastore_id - computed: false, optional: false, required: true
  private _datastoreId?: string; 
  public get datastoreId() {
    return this.getStringAttribute('datastore_id');
  }
  public set datastoreId(value: string) {
    this._datastoreId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreIdInput() {
    return this._datastoreId;
  }

  // location_parts - computed: false, optional: true, required: false
  private _locationParts?: string[]; 
  public get locationParts() {
    return this.getListAttribute('location_parts');
  }
  public set locationParts(value: string[]) {
    this._locationParts = value;
  }
  public resetLocationParts() {
    this._locationParts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPartsInput() {
    return this._locationParts;
  }

  // location_path - computed: false, optional: true, required: false
  private _locationPath?: string; 
  public get locationPath() {
    return this.getStringAttribute('location_path');
  }
  public set locationPath(value: string) {
    this._locationPath = value;
  }
  public resetLocationPath() {
    this._locationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPathInput() {
    return this._locationPath;
  }

  // logic_yaml - computed: false, optional: false, required: true
  private _logicYaml?: string; 
  public get logicYaml() {
    return this.getStringAttribute('logic_yaml');
  }
  public set logicYaml(value: string) {
    this._logicYaml = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicYamlInput() {
    return this._logicYaml;
  }

  // location - computed: false, optional: true, required: false
  private _location = new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationList(this, "location", false);
  public get location() {
    return this._location;
  }
  public putLocation(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocation[] | cdktf.IResolvable) {
    this._location.internalValue = value;
  }
  public resetLocation() {
    this._location.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location.internalValue;
  }

  // location_parts_full - computed: false, optional: true, required: false
  private _locationPartsFull = new SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFullList(this, "location_parts_full", false);
  public get locationPartsFull() {
    return this._locationPartsFull;
  }
  public putLocationPartsFull(value: SecurityPolicyProfileRowLevelSecurityRuleFilterLocationPartsFull[] | cdktf.IResolvable) {
    this._locationPartsFull.internalValue = value;
  }
  public resetLocationPartsFull() {
    this._locationPartsFull.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationPartsFullInput() {
    return this._locationPartsFull.internalValue;
  }
}
export interface SecurityPolicyProfileRowLevelSecurityRule {
  /**
  * Is active rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#active SecurityPolicy#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * Rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#description SecurityPolicy#description}
  */
  readonly description: string;
  /**
  * Rule id, has to be unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#id SecurityPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#filter SecurityPolicy#filter}
  */
  readonly filter: SecurityPolicyProfileRowLevelSecurityRuleFilter;
}

export function securityPolicyProfileRowLevelSecurityRuleToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    filter: securityPolicyProfileRowLevelSecurityRuleFilterToTerraform(struct!.filter),
  }
}


export function securityPolicyProfileRowLevelSecurityRuleToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    filter: {
      value: securityPolicyProfileRowLevelSecurityRuleFilterToHclTerraform(struct!.filter),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleFilterList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityPolicyProfileRowLevelSecurityRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._filter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurityRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._active = undefined;
      this._description = undefined;
      this._id = undefined;
      this._filter.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._active = value.active;
      this._description = value.description;
      this._id = value.id;
      this._filter.internalValue = value.filter;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // filter - computed: false, optional: false, required: true
  private _filter = new SecurityPolicyProfileRowLevelSecurityRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: SecurityPolicyProfileRowLevelSecurityRuleFilter) {
    this._filter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }
}

export class SecurityPolicyProfileRowLevelSecurityRuleList extends cdktf.ComplexList {
  public internalValue? : SecurityPolicyProfileRowLevelSecurityRule[] | cdktf.IResolvable

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
  public get(index: number): SecurityPolicyProfileRowLevelSecurityRuleOutputReference {
    return new SecurityPolicyProfileRowLevelSecurityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityPolicyProfileRowLevelSecurity {
  /**
  * Row level security activation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#active SecurityPolicy#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#mapping SecurityPolicy#mapping}
  */
  readonly mapping?: SecurityPolicyProfileRowLevelSecurityMapping[] | cdktf.IResolvable;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#rule SecurityPolicy#rule}
  */
  readonly rule?: SecurityPolicyProfileRowLevelSecurityRule[] | cdktf.IResolvable;
}

export function securityPolicyProfileRowLevelSecurityToTerraform(struct?: SecurityPolicyProfileRowLevelSecurityOutputReference | SecurityPolicyProfileRowLevelSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active: cdktf.booleanToTerraform(struct!.active),
    mapping: cdktf.listMapper(securityPolicyProfileRowLevelSecurityMappingToTerraform, true)(struct!.mapping),
    rule: cdktf.listMapper(securityPolicyProfileRowLevelSecurityRuleToTerraform, true)(struct!.rule),
  }
}


export function securityPolicyProfileRowLevelSecurityToHclTerraform(struct?: SecurityPolicyProfileRowLevelSecurityOutputReference | SecurityPolicyProfileRowLevelSecurity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active: {
      value: cdktf.booleanToHclTerraform(struct!.active),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mapping: {
      value: cdktf.listMapperHcl(securityPolicyProfileRowLevelSecurityMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityMappingList",
    },
    rule: {
      value: cdktf.listMapperHcl(securityPolicyProfileRowLevelSecurityRuleToHclTerraform, true)(struct!.rule),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileRowLevelSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfileRowLevelSecurity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._active !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active;
    }
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    if (this._rule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfileRowLevelSecurity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._active = undefined;
      this._mapping.internalValue = undefined;
      this._rule.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._active = value.active;
      this._mapping.internalValue = value.mapping;
      this._rule.internalValue = value.rule;
    }
  }

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new SecurityPolicyProfileRowLevelSecurityMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: SecurityPolicyProfileRowLevelSecurityMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new SecurityPolicyProfileRowLevelSecurityRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: SecurityPolicyProfileRowLevelSecurityRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }
}
export interface SecurityPolicyProfile {
  /**
  * masking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#masking SecurityPolicy#masking}
  */
  readonly masking?: SecurityPolicyProfileMasking;
  /**
  * row_level_security block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#row_level_security SecurityPolicy#row_level_security}
  */
  readonly rowLevelSecurity?: SecurityPolicyProfileRowLevelSecurity;
}

export function securityPolicyProfileToTerraform(struct?: SecurityPolicyProfileOutputReference | SecurityPolicyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masking: securityPolicyProfileMaskingToTerraform(struct!.masking),
    row_level_security: securityPolicyProfileRowLevelSecurityToTerraform(struct!.rowLevelSecurity),
  }
}


export function securityPolicyProfileToHclTerraform(struct?: SecurityPolicyProfileOutputReference | SecurityPolicyProfile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masking: {
      value: securityPolicyProfileMaskingToHclTerraform(struct!.masking),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileMaskingList",
    },
    row_level_security: {
      value: securityPolicyProfileRowLevelSecurityToHclTerraform(struct!.rowLevelSecurity),
      isBlock: true,
      type: "list",
      storageClassType: "SecurityPolicyProfileRowLevelSecurityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityPolicyProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityPolicyProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.masking = this._masking?.internalValue;
    }
    if (this._rowLevelSecurity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowLevelSecurity = this._rowLevelSecurity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityPolicyProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._masking.internalValue = undefined;
      this._rowLevelSecurity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._masking.internalValue = value.masking;
      this._rowLevelSecurity.internalValue = value.rowLevelSecurity;
    }
  }

  // masking - computed: false, optional: true, required: false
  private _masking = new SecurityPolicyProfileMaskingOutputReference(this, "masking");
  public get masking() {
    return this._masking;
  }
  public putMasking(value: SecurityPolicyProfileMasking) {
    this._masking.internalValue = value;
  }
  public resetMasking() {
    this._masking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskingInput() {
    return this._masking.internalValue;
  }

  // row_level_security - computed: false, optional: true, required: false
  private _rowLevelSecurity = new SecurityPolicyProfileRowLevelSecurityOutputReference(this, "row_level_security");
  public get rowLevelSecurity() {
    return this._rowLevelSecurity;
  }
  public putRowLevelSecurity(value: SecurityPolicyProfileRowLevelSecurity) {
    this._rowLevelSecurity.internalValue = value;
  }
  public resetRowLevelSecurity() {
    this._rowLevelSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowLevelSecurityInput() {
    return this._rowLevelSecurity.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy satori_security_policy}
*/
export class SecurityPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "satori_security_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityPolicy to import
  * @param importFromId The id of the existing SecurityPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "satori_security_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/satoricyber/satori/0.2.8/docs/resources/security_policy satori_security_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'satori_security_policy',
      terraformGeneratorMetadata: {
        providerName: 'satori',
        providerVersion: '0.2.8'
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
    this._name = config.name;
    this._profile.internalValue = config.profile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // profile - computed: false, optional: true, required: false
  private _profile = new SecurityPolicyProfileOutputReference(this, "profile");
  public get profile() {
    return this._profile;
  }
  public putProfile(value: SecurityPolicyProfile) {
    this._profile.internalValue = value;
  }
  public resetProfile() {
    this._profile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      profile: securityPolicyProfileToTerraform(this._profile.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: securityPolicyProfileToHclTerraform(this._profile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityPolicyProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
