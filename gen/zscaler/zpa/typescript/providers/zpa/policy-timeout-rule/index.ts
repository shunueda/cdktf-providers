// https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyTimeoutRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  *   This is for providing the rule action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#action PolicyTimeoutRule#action}
  */
  readonly action?: string;
  /**
  * This field defines the description of the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#action_id PolicyTimeoutRule#action_id}
  */
  readonly actionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#bypass_default_rule PolicyTimeoutRule#bypass_default_rule}
  */
  readonly bypassDefaultRule?: boolean | cdktf.IResolvable;
  /**
  * This is for providing a customer message for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#custom_msg PolicyTimeoutRule#custom_msg}
  */
  readonly customMsg?: string;
  /**
  * This is for providing a customer message for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#default_rule PolicyTimeoutRule#default_rule}
  */
  readonly defaultRule?: boolean | cdktf.IResolvable;
  /**
  * This is the description of the access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#description PolicyTimeoutRule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#lss_default_rule PolicyTimeoutRule#lss_default_rule}
  */
  readonly lssDefaultRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#microtenant_id PolicyTimeoutRule#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * This is the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#name PolicyTimeoutRule#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#operator PolicyTimeoutRule#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#policy_set_id PolicyTimeoutRule#policy_set_id}
  */
  readonly policySetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#policy_type PolicyTimeoutRule#policy_type}
  */
  readonly policyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#priority PolicyTimeoutRule#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#reauth_default_rule PolicyTimeoutRule#reauth_default_rule}
  */
  readonly reauthDefaultRule?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#reauth_idle_timeout PolicyTimeoutRule#reauth_idle_timeout}
  */
  readonly reauthIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#reauth_timeout PolicyTimeoutRule#reauth_timeout}
  */
  readonly reauthTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#rule_order PolicyTimeoutRule#rule_order}
  */
  readonly ruleOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#zpn_cbi_profile_id PolicyTimeoutRule#zpn_cbi_profile_id}
  */
  readonly zpnCbiProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#zpn_inspection_profile_id PolicyTimeoutRule#zpn_inspection_profile_id}
  */
  readonly zpnInspectionProfileId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#zpn_isolation_profile_id PolicyTimeoutRule#zpn_isolation_profile_id}
  */
  readonly zpnIsolationProfileId?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#conditions PolicyTimeoutRule#conditions}
  */
  readonly conditions?: PolicyTimeoutRuleConditions[] | cdktf.IResolvable;
}
export interface PolicyTimeoutRuleConditionsOperands {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#idp_id PolicyTimeoutRule#idp_id}
  */
  readonly idpId?: string;
  /**
  * This signifies the key for the object type. String ID example: id 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#lhs PolicyTimeoutRule#lhs}
  */
  readonly lhs: string;
  /**
  * This denotes the value for the given object type. Its value depends upon the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#microtenant_id PolicyTimeoutRule#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#name PolicyTimeoutRule#name}
  */
  readonly name?: string;
  /**
  *   This is for specifying the policy critiera.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#object_type PolicyTimeoutRule#object_type}
  */
  readonly objectType: string;
  /**
  * This denotes the value for the given object type. Its value depends upon the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#rhs PolicyTimeoutRule#rhs}
  */
  readonly rhs?: string;
  /**
  * This denotes a list of values for the given object type. The value depend upon the key. If rhs is defined this list will be ignored
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#rhs_list PolicyTimeoutRule#rhs_list}
  */
  readonly rhsList?: string[];
}

export function policyTimeoutRuleConditionsOperandsToTerraform(struct?: PolicyTimeoutRuleConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    idp_id: cdktf.stringToTerraform(struct!.idpId),
    lhs: cdktf.stringToTerraform(struct!.lhs),
    microtenant_id: cdktf.stringToTerraform(struct!.microtenantId),
    name: cdktf.stringToTerraform(struct!.name),
    object_type: cdktf.stringToTerraform(struct!.objectType),
    rhs: cdktf.stringToTerraform(struct!.rhs),
    rhs_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.rhsList),
  }
}


export function policyTimeoutRuleConditionsOperandsToHclTerraform(struct?: PolicyTimeoutRuleConditionsOperands | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    idp_id: {
      value: cdktf.stringToHclTerraform(struct!.idpId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lhs: {
      value: cdktf.stringToHclTerraform(struct!.lhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    microtenant_id: {
      value: cdktf.stringToHclTerraform(struct!.microtenantId),
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
    object_type: {
      value: cdktf.stringToHclTerraform(struct!.objectType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rhs: {
      value: cdktf.stringToHclTerraform(struct!.rhs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rhs_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.rhsList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTimeoutRuleConditionsOperandsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTimeoutRuleConditionsOperands | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._idpId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpId = this._idpId;
    }
    if (this._lhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.lhs = this._lhs;
    }
    if (this._microtenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.microtenantId = this._microtenantId;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._objectType !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectType = this._objectType;
    }
    if (this._rhs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rhs = this._rhs;
    }
    if (this._rhsList !== undefined) {
      hasAnyValues = true;
      internalValueResult.rhsList = this._rhsList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTimeoutRuleConditionsOperands | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._idpId = undefined;
      this._lhs = undefined;
      this._microtenantId = undefined;
      this._name = undefined;
      this._objectType = undefined;
      this._rhs = undefined;
      this._rhsList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._idpId = value.idpId;
      this._lhs = value.lhs;
      this._microtenantId = value.microtenantId;
      this._name = value.name;
      this._objectType = value.objectType;
      this._rhs = value.rhs;
      this._rhsList = value.rhsList;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idp_id - computed: true, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // lhs - computed: false, optional: false, required: true
  private _lhs?: string; 
  public get lhs() {
    return this.getStringAttribute('lhs');
  }
  public set lhs(value: string) {
    this._lhs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lhsInput() {
    return this._lhs;
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // object_type - computed: false, optional: false, required: true
  private _objectType?: string; 
  public get objectType() {
    return this.getStringAttribute('object_type');
  }
  public set objectType(value: string) {
    this._objectType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectTypeInput() {
    return this._objectType;
  }

  // rhs - computed: true, optional: true, required: false
  private _rhs?: string; 
  public get rhs() {
    return this.getStringAttribute('rhs');
  }
  public set rhs(value: string) {
    this._rhs = value;
  }
  public resetRhs() {
    this._rhs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhsInput() {
    return this._rhs;
  }

  // rhs_list - computed: true, optional: true, required: false
  private _rhsList?: string[]; 
  public get rhsList() {
    return cdktf.Fn.tolist(this.getListAttribute('rhs_list'));
  }
  public set rhsList(value: string[]) {
    this._rhsList = value;
  }
  public resetRhsList() {
    this._rhsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rhsListInput() {
    return this._rhsList;
  }
}

export class PolicyTimeoutRuleConditionsOperandsList extends cdktf.ComplexList {
  public internalValue? : PolicyTimeoutRuleConditionsOperands[] | cdktf.IResolvable

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
  public get(index: number): PolicyTimeoutRuleConditionsOperandsOutputReference {
    return new PolicyTimeoutRuleConditionsOperandsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyTimeoutRuleConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#microtenant_id PolicyTimeoutRule#microtenant_id}
  */
  readonly microtenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#operator PolicyTimeoutRule#operator}
  */
  readonly operator: string;
  /**
  * operands block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#operands PolicyTimeoutRule#operands}
  */
  readonly operands?: PolicyTimeoutRuleConditionsOperands[] | cdktf.IResolvable;
}

export function policyTimeoutRuleConditionsToTerraform(struct?: PolicyTimeoutRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    microtenant_id: cdktf.stringToTerraform(struct!.microtenantId),
    operator: cdktf.stringToTerraform(struct!.operator),
    operands: cdktf.listMapper(policyTimeoutRuleConditionsOperandsToTerraform, true)(struct!.operands),
  }
}


export function policyTimeoutRuleConditionsToHclTerraform(struct?: PolicyTimeoutRuleConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    microtenant_id: {
      value: cdktf.stringToHclTerraform(struct!.microtenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operands: {
      value: cdktf.listMapperHcl(policyTimeoutRuleConditionsOperandsToHclTerraform, true)(struct!.operands),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyTimeoutRuleConditionsOperandsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyTimeoutRuleConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyTimeoutRuleConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._microtenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.microtenantId = this._microtenantId;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._operands?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operands = this._operands?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyTimeoutRuleConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._microtenantId = undefined;
      this._operator = undefined;
      this._operands.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._microtenantId = value.microtenantId;
      this._operator = value.operator;
      this._operands.internalValue = value.operands;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // operands - computed: false, optional: true, required: false
  private _operands = new PolicyTimeoutRuleConditionsOperandsList(this, "operands", false);
  public get operands() {
    return this._operands;
  }
  public putOperands(value: PolicyTimeoutRuleConditionsOperands[] | cdktf.IResolvable) {
    this._operands.internalValue = value;
  }
  public resetOperands() {
    this._operands.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operandsInput() {
    return this._operands.internalValue;
  }
}

export class PolicyTimeoutRuleConditionsList extends cdktf.ComplexList {
  public internalValue? : PolicyTimeoutRuleConditions[] | cdktf.IResolvable

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
  public get(index: number): PolicyTimeoutRuleConditionsOutputReference {
    return new PolicyTimeoutRuleConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule zpa_policy_timeout_rule}
*/
export class PolicyTimeoutRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zpa_policy_timeout_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyTimeoutRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyTimeoutRule to import
  * @param importFromId The id of the existing PolicyTimeoutRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyTimeoutRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zpa_policy_timeout_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zpa/4.3.5/docs/resources/policy_timeout_rule zpa_policy_timeout_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyTimeoutRuleConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyTimeoutRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zpa_policy_timeout_rule',
      terraformGeneratorMetadata: {
        providerName: 'zpa',
        providerVersion: '4.3.5',
        providerVersionConstraint: '4.3.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._actionId = config.actionId;
    this._bypassDefaultRule = config.bypassDefaultRule;
    this._customMsg = config.customMsg;
    this._defaultRule = config.defaultRule;
    this._description = config.description;
    this._lssDefaultRule = config.lssDefaultRule;
    this._microtenantId = config.microtenantId;
    this._name = config.name;
    this._operator = config.operator;
    this._policySetId = config.policySetId;
    this._policyType = config.policyType;
    this._priority = config.priority;
    this._reauthDefaultRule = config.reauthDefaultRule;
    this._reauthIdleTimeout = config.reauthIdleTimeout;
    this._reauthTimeout = config.reauthTimeout;
    this._ruleOrder = config.ruleOrder;
    this._zpnCbiProfileId = config.zpnCbiProfileId;
    this._zpnInspectionProfileId = config.zpnInspectionProfileId;
    this._zpnIsolationProfileId = config.zpnIsolationProfileId;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_id - computed: false, optional: true, required: false
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  public resetActionId() {
    this._actionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // bypass_default_rule - computed: true, optional: true, required: false
  private _bypassDefaultRule?: boolean | cdktf.IResolvable; 
  public get bypassDefaultRule() {
    return this.getBooleanAttribute('bypass_default_rule');
  }
  public set bypassDefaultRule(value: boolean | cdktf.IResolvable) {
    this._bypassDefaultRule = value;
  }
  public resetBypassDefaultRule() {
    this._bypassDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassDefaultRuleInput() {
    return this._bypassDefaultRule;
  }

  // custom_msg - computed: true, optional: true, required: false
  private _customMsg?: string; 
  public get customMsg() {
    return this.getStringAttribute('custom_msg');
  }
  public set customMsg(value: string) {
    this._customMsg = value;
  }
  public resetCustomMsg() {
    this._customMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMsgInput() {
    return this._customMsg;
  }

  // default_rule - computed: true, optional: true, required: false
  private _defaultRule?: boolean | cdktf.IResolvable; 
  public get defaultRule() {
    return this.getBooleanAttribute('default_rule');
  }
  public set defaultRule(value: boolean | cdktf.IResolvable) {
    this._defaultRule = value;
  }
  public resetDefaultRule() {
    this._defaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRuleInput() {
    return this._defaultRule;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lss_default_rule - computed: false, optional: true, required: false
  private _lssDefaultRule?: boolean | cdktf.IResolvable; 
  public get lssDefaultRule() {
    return this.getBooleanAttribute('lss_default_rule');
  }
  public set lssDefaultRule(value: boolean | cdktf.IResolvable) {
    this._lssDefaultRule = value;
  }
  public resetLssDefaultRule() {
    this._lssDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lssDefaultRuleInput() {
    return this._lssDefaultRule;
  }

  // microtenant_id - computed: true, optional: true, required: false
  private _microtenantId?: string; 
  public get microtenantId() {
    return this.getStringAttribute('microtenant_id');
  }
  public set microtenantId(value: string) {
    this._microtenantId = value;
  }
  public resetMicrotenantId() {
    this._microtenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microtenantIdInput() {
    return this._microtenantId;
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

  // operator - computed: true, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // policy_set_id - computed: true, optional: true, required: false
  private _policySetId?: string; 
  public get policySetId() {
    return this.getStringAttribute('policy_set_id');
  }
  public set policySetId(value: string) {
    this._policySetId = value;
  }
  public resetPolicySetId() {
    this._policySetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policySetIdInput() {
    return this._policySetId;
  }

  // policy_type - computed: true, optional: true, required: false
  private _policyType?: string; 
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }
  public set policyType(value: string) {
    this._policyType = value;
  }
  public resetPolicyType() {
    this._policyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyTypeInput() {
    return this._policyType;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // reauth_default_rule - computed: true, optional: true, required: false
  private _reauthDefaultRule?: boolean | cdktf.IResolvable; 
  public get reauthDefaultRule() {
    return this.getBooleanAttribute('reauth_default_rule');
  }
  public set reauthDefaultRule(value: boolean | cdktf.IResolvable) {
    this._reauthDefaultRule = value;
  }
  public resetReauthDefaultRule() {
    this._reauthDefaultRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthDefaultRuleInput() {
    return this._reauthDefaultRule;
  }

  // reauth_idle_timeout - computed: false, optional: true, required: false
  private _reauthIdleTimeout?: string; 
  public get reauthIdleTimeout() {
    return this.getStringAttribute('reauth_idle_timeout');
  }
  public set reauthIdleTimeout(value: string) {
    this._reauthIdleTimeout = value;
  }
  public resetReauthIdleTimeout() {
    this._reauthIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthIdleTimeoutInput() {
    return this._reauthIdleTimeout;
  }

  // reauth_timeout - computed: false, optional: true, required: false
  private _reauthTimeout?: string; 
  public get reauthTimeout() {
    return this.getStringAttribute('reauth_timeout');
  }
  public set reauthTimeout(value: string) {
    this._reauthTimeout = value;
  }
  public resetReauthTimeout() {
    this._reauthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reauthTimeoutInput() {
    return this._reauthTimeout;
  }

  // rule_order - computed: true, optional: true, required: false
  private _ruleOrder?: string; 
  public get ruleOrder() {
    return this.getStringAttribute('rule_order');
  }
  public set ruleOrder(value: string) {
    this._ruleOrder = value;
  }
  public resetRuleOrder() {
    this._ruleOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleOrderInput() {
    return this._ruleOrder;
  }

  // zpn_cbi_profile_id - computed: true, optional: true, required: false
  private _zpnCbiProfileId?: string; 
  public get zpnCbiProfileId() {
    return this.getStringAttribute('zpn_cbi_profile_id');
  }
  public set zpnCbiProfileId(value: string) {
    this._zpnCbiProfileId = value;
  }
  public resetZpnCbiProfileId() {
    this._zpnCbiProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnCbiProfileIdInput() {
    return this._zpnCbiProfileId;
  }

  // zpn_inspection_profile_id - computed: true, optional: true, required: false
  private _zpnInspectionProfileId?: string; 
  public get zpnInspectionProfileId() {
    return this.getStringAttribute('zpn_inspection_profile_id');
  }
  public set zpnInspectionProfileId(value: string) {
    this._zpnInspectionProfileId = value;
  }
  public resetZpnInspectionProfileId() {
    this._zpnInspectionProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnInspectionProfileIdInput() {
    return this._zpnInspectionProfileId;
  }

  // zpn_isolation_profile_id - computed: true, optional: true, required: false
  private _zpnIsolationProfileId?: string; 
  public get zpnIsolationProfileId() {
    return this.getStringAttribute('zpn_isolation_profile_id');
  }
  public set zpnIsolationProfileId(value: string) {
    this._zpnIsolationProfileId = value;
  }
  public resetZpnIsolationProfileId() {
    this._zpnIsolationProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zpnIsolationProfileIdInput() {
    return this._zpnIsolationProfileId;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new PolicyTimeoutRuleConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: PolicyTimeoutRuleConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      action_id: cdktf.stringToTerraform(this._actionId),
      bypass_default_rule: cdktf.booleanToTerraform(this._bypassDefaultRule),
      custom_msg: cdktf.stringToTerraform(this._customMsg),
      default_rule: cdktf.booleanToTerraform(this._defaultRule),
      description: cdktf.stringToTerraform(this._description),
      lss_default_rule: cdktf.booleanToTerraform(this._lssDefaultRule),
      microtenant_id: cdktf.stringToTerraform(this._microtenantId),
      name: cdktf.stringToTerraform(this._name),
      operator: cdktf.stringToTerraform(this._operator),
      policy_set_id: cdktf.stringToTerraform(this._policySetId),
      policy_type: cdktf.stringToTerraform(this._policyType),
      priority: cdktf.stringToTerraform(this._priority),
      reauth_default_rule: cdktf.booleanToTerraform(this._reauthDefaultRule),
      reauth_idle_timeout: cdktf.stringToTerraform(this._reauthIdleTimeout),
      reauth_timeout: cdktf.stringToTerraform(this._reauthTimeout),
      rule_order: cdktf.stringToTerraform(this._ruleOrder),
      zpn_cbi_profile_id: cdktf.stringToTerraform(this._zpnCbiProfileId),
      zpn_inspection_profile_id: cdktf.stringToTerraform(this._zpnInspectionProfileId),
      zpn_isolation_profile_id: cdktf.stringToTerraform(this._zpnIsolationProfileId),
      conditions: cdktf.listMapper(policyTimeoutRuleConditionsToTerraform, true)(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_id: {
        value: cdktf.stringToHclTerraform(this._actionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_default_rule: {
        value: cdktf.booleanToHclTerraform(this._bypassDefaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_msg: {
        value: cdktf.stringToHclTerraform(this._customMsg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_rule: {
        value: cdktf.booleanToHclTerraform(this._defaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lss_default_rule: {
        value: cdktf.booleanToHclTerraform(this._lssDefaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      microtenant_id: {
        value: cdktf.stringToHclTerraform(this._microtenantId),
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
      operator: {
        value: cdktf.stringToHclTerraform(this._operator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_set_id: {
        value: cdktf.stringToHclTerraform(this._policySetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_type: {
        value: cdktf.stringToHclTerraform(this._policyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauth_default_rule: {
        value: cdktf.booleanToHclTerraform(this._reauthDefaultRule),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reauth_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._reauthIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reauth_timeout: {
        value: cdktf.stringToHclTerraform(this._reauthTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_order: {
        value: cdktf.stringToHclTerraform(this._ruleOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpn_cbi_profile_id: {
        value: cdktf.stringToHclTerraform(this._zpnCbiProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpn_inspection_profile_id: {
        value: cdktf.stringToHclTerraform(this._zpnInspectionProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zpn_isolation_profile_id: {
        value: cdktf.stringToHclTerraform(this._zpnIsolationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(policyTimeoutRuleConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyTimeoutRuleConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
