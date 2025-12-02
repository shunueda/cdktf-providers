// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyRuleSignonConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow or deny access based on the rule conditions: `ALLOW`, `DENY` or `CHALLENGE`. Default: `ALLOW`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#access PolicyRuleSignon#access}
  */
  readonly access?: string;
  /**
  * Authentication entrypoint: `ANY`, `RADIUS` or `LDAP_INTERFACE`. Default: `ANY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#authtype PolicyRuleSignon#authtype}
  */
  readonly authtype?: string;
  /**
  * List of behavior IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#behaviors PolicyRuleSignon#behaviors}
  */
  readonly behaviors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#id PolicyRuleSignon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply rule based on the IdP used: `ANY`, `OKTA` or `SPECIFIC_IDP`. Default: `ANY`. ~> **WARNING**: Use of `identity_provider` requires a feature flag to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#identity_provider PolicyRuleSignon#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * When identity_provider is `SPECIFIC_IDP` then this is the list of IdP IDs to apply the rule on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#identity_provider_ids PolicyRuleSignon#identity_provider_ids}
  */
  readonly identityProviderIds?: string[];
  /**
  * Elapsed time before the next MFA challenge
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#mfa_lifetime PolicyRuleSignon#mfa_lifetime}
  */
  readonly mfaLifetime?: number;
  /**
  * Prompt for MFA based on the device used, a factor session lifetime, or every sign-on attempt: `DEVICE`, `SESSION` or`ALWAYS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#mfa_prompt PolicyRuleSignon#mfa_prompt}
  */
  readonly mfaPrompt?: string;
  /**
  * Remember MFA device. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#mfa_remember_device PolicyRuleSignon#mfa_remember_device}
  */
  readonly mfaRememberDevice?: boolean | cdktf.IResolvable;
  /**
  * Require MFA. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#mfa_required PolicyRuleSignon#mfa_required}
  */
  readonly mfaRequired?: boolean | cdktf.IResolvable;
  /**
  * Policy Rule Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#name PolicyRuleSignon#name}
  */
  readonly name: string;
  /**
  * Network selection mode: `ANYWHERE`, `ZONE`, `ON_NETWORK`, or `OFF_NETWORK`. Default: `ANYWHERE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#network_connection PolicyRuleSignon#network_connection}
  */
  readonly networkConnection?: string;
  /**
  * Required if `network_connection` = `ZONE`. Indicates the network zones to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#network_excludes PolicyRuleSignon#network_excludes}
  */
  readonly networkExcludes?: string[];
  /**
  * Required if `network_connection` = `ZONE`. Indicates the network zones to include.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#network_includes PolicyRuleSignon#network_includes}
  */
  readonly networkIncludes?: string[];
  /**
  * Policy ID of the Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#policy_id PolicyRuleSignon#policy_id}
  */
  readonly policyId?: string;
  /**
  * Rule's primary factor. **WARNING** Ony works as a part of the Identity Engine. Valid values: `PASSWORD_IDP_ANY_FACTOR`, `PASSWORD_IDP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#primary_factor PolicyRuleSignon#primary_factor}
  */
  readonly primaryFactor?: string;
  /**
  * Rule priority. This attribute can be set to a valid priority. To avoid an endless diff situation an error is thrown if an invalid property is provided. The Okta API defaults to the last (lowest) if not provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#priority PolicyRuleSignon#priority}
  */
  readonly priority?: number;
  /**
  * Risc level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#risc_level PolicyRuleSignon#risc_level}
  */
  readonly riscLevel?: string;
  /**
  * Risk level: ANY, LOW, MEDIUM or HIGH. Default: `ANY`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#risk_level PolicyRuleSignon#risk_level}
  */
  readonly riskLevel?: string;
  /**
  * Max minutes a session can be idle. Default: `120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#session_idle PolicyRuleSignon#session_idle}
  */
  readonly sessionIdle?: number;
  /**
  * Max minutes a session is active: Disable = 0. Default: `120`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#session_lifetime PolicyRuleSignon#session_lifetime}
  */
  readonly sessionLifetime?: number;
  /**
  * Whether session cookies will last across browser sessions. Okta Administrators can never have persistent session cookies. Default: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#session_persistent PolicyRuleSignon#session_persistent}
  */
  readonly sessionPersistent?: boolean | cdktf.IResolvable;
  /**
  * Policy Rule Status: `ACTIVE` or `INACTIVE`. Default: `ACTIVE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#status PolicyRuleSignon#status}
  */
  readonly status?: string;
  /**
  * Set of User IDs to Exclude
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#users_excluded PolicyRuleSignon#users_excluded}
  */
  readonly usersExcluded?: string[];
  /**
  * factor_sequence block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#factor_sequence PolicyRuleSignon#factor_sequence}
  */
  readonly factorSequence?: PolicyRuleSignonFactorSequence[] | cdktf.IResolvable;
}
export interface PolicyRuleSignonFactorSequenceSecondaryCriteria {
  /**
  * Type of a Factor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#factor_type PolicyRuleSignon#factor_type}
  */
  readonly factorType: string;
  /**
  * Factor provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#provider PolicyRuleSignon#provider}
  */
  readonly provider: string;
}

export function policyRuleSignonFactorSequenceSecondaryCriteriaToTerraform(struct?: PolicyRuleSignonFactorSequenceSecondaryCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    factor_type: cdktf.stringToTerraform(struct!.factorType),
    provider: cdktf.stringToTerraform(struct!.provider),
  }
}


export function policyRuleSignonFactorSequenceSecondaryCriteriaToHclTerraform(struct?: PolicyRuleSignonFactorSequenceSecondaryCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    factor_type: {
      value: cdktf.stringToHclTerraform(struct!.factorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleSignonFactorSequenceSecondaryCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._factorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.factorType = this._factorType;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleSignonFactorSequenceSecondaryCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._factorType = undefined;
      this._provider = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._factorType = value.factorType;
      this._provider = value.provider;
    }
  }

  // factor_type - computed: false, optional: false, required: true
  private _factorType?: string; 
  public get factorType() {
    return this.getStringAttribute('factor_type');
  }
  public set factorType(value: string) {
    this._factorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get factorTypeInput() {
    return this._factorType;
  }

  // provider - computed: false, optional: false, required: true
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }
}

export class PolicyRuleSignonFactorSequenceSecondaryCriteriaList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleSignonFactorSequenceSecondaryCriteria[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference {
    return new PolicyRuleSignonFactorSequenceSecondaryCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyRuleSignonFactorSequence {
  /**
  * Type of a Factor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#primary_criteria_factor_type PolicyRuleSignon#primary_criteria_factor_type}
  */
  readonly primaryCriteriaFactorType: string;
  /**
  * Factor provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#primary_criteria_provider PolicyRuleSignon#primary_criteria_provider}
  */
  readonly primaryCriteriaProvider: string;
  /**
  * secondary_criteria block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#secondary_criteria PolicyRuleSignon#secondary_criteria}
  */
  readonly secondaryCriteria?: PolicyRuleSignonFactorSequenceSecondaryCriteria[] | cdktf.IResolvable;
}

export function policyRuleSignonFactorSequenceToTerraform(struct?: PolicyRuleSignonFactorSequence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary_criteria_factor_type: cdktf.stringToTerraform(struct!.primaryCriteriaFactorType),
    primary_criteria_provider: cdktf.stringToTerraform(struct!.primaryCriteriaProvider),
    secondary_criteria: cdktf.listMapper(policyRuleSignonFactorSequenceSecondaryCriteriaToTerraform, true)(struct!.secondaryCriteria),
  }
}


export function policyRuleSignonFactorSequenceToHclTerraform(struct?: PolicyRuleSignonFactorSequence | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary_criteria_factor_type: {
      value: cdktf.stringToHclTerraform(struct!.primaryCriteriaFactorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_criteria_provider: {
      value: cdktf.stringToHclTerraform(struct!.primaryCriteriaProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secondary_criteria: {
      value: cdktf.listMapperHcl(policyRuleSignonFactorSequenceSecondaryCriteriaToHclTerraform, true)(struct!.secondaryCriteria),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyRuleSignonFactorSequenceSecondaryCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyRuleSignonFactorSequenceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyRuleSignonFactorSequence | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primaryCriteriaFactorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryCriteriaFactorType = this._primaryCriteriaFactorType;
    }
    if (this._primaryCriteriaProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryCriteriaProvider = this._primaryCriteriaProvider;
    }
    if (this._secondaryCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryCriteria = this._secondaryCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyRuleSignonFactorSequence | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primaryCriteriaFactorType = undefined;
      this._primaryCriteriaProvider = undefined;
      this._secondaryCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primaryCriteriaFactorType = value.primaryCriteriaFactorType;
      this._primaryCriteriaProvider = value.primaryCriteriaProvider;
      this._secondaryCriteria.internalValue = value.secondaryCriteria;
    }
  }

  // primary_criteria_factor_type - computed: false, optional: false, required: true
  private _primaryCriteriaFactorType?: string; 
  public get primaryCriteriaFactorType() {
    return this.getStringAttribute('primary_criteria_factor_type');
  }
  public set primaryCriteriaFactorType(value: string) {
    this._primaryCriteriaFactorType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryCriteriaFactorTypeInput() {
    return this._primaryCriteriaFactorType;
  }

  // primary_criteria_provider - computed: false, optional: false, required: true
  private _primaryCriteriaProvider?: string; 
  public get primaryCriteriaProvider() {
    return this.getStringAttribute('primary_criteria_provider');
  }
  public set primaryCriteriaProvider(value: string) {
    this._primaryCriteriaProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryCriteriaProviderInput() {
    return this._primaryCriteriaProvider;
  }

  // secondary_criteria - computed: false, optional: true, required: false
  private _secondaryCriteria = new PolicyRuleSignonFactorSequenceSecondaryCriteriaList(this, "secondary_criteria", false);
  public get secondaryCriteria() {
    return this._secondaryCriteria;
  }
  public putSecondaryCriteria(value: PolicyRuleSignonFactorSequenceSecondaryCriteria[] | cdktf.IResolvable) {
    this._secondaryCriteria.internalValue = value;
  }
  public resetSecondaryCriteria() {
    this._secondaryCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryCriteriaInput() {
    return this._secondaryCriteria.internalValue;
  }
}

export class PolicyRuleSignonFactorSequenceList extends cdktf.ComplexList {
  public internalValue? : PolicyRuleSignonFactorSequence[] | cdktf.IResolvable

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
  public get(index: number): PolicyRuleSignonFactorSequenceOutputReference {
    return new PolicyRuleSignonFactorSequenceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon okta_policy_rule_signon}
*/
export class PolicyRuleSignon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_rule_signon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyRuleSignon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyRuleSignon to import
  * @param importFromId The id of the existing PolicyRuleSignon that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyRuleSignon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_policy_rule_signon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_rule_signon okta_policy_rule_signon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyRuleSignonConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyRuleSignonConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_rule_signon',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._access = config.access;
    this._authtype = config.authtype;
    this._behaviors = config.behaviors;
    this._id = config.id;
    this._identityProvider = config.identityProvider;
    this._identityProviderIds = config.identityProviderIds;
    this._mfaLifetime = config.mfaLifetime;
    this._mfaPrompt = config.mfaPrompt;
    this._mfaRememberDevice = config.mfaRememberDevice;
    this._mfaRequired = config.mfaRequired;
    this._name = config.name;
    this._networkConnection = config.networkConnection;
    this._networkExcludes = config.networkExcludes;
    this._networkIncludes = config.networkIncludes;
    this._policyId = config.policyId;
    this._primaryFactor = config.primaryFactor;
    this._priority = config.priority;
    this._riscLevel = config.riscLevel;
    this._riskLevel = config.riskLevel;
    this._sessionIdle = config.sessionIdle;
    this._sessionLifetime = config.sessionLifetime;
    this._sessionPersistent = config.sessionPersistent;
    this._status = config.status;
    this._usersExcluded = config.usersExcluded;
    this._factorSequence.internalValue = config.factorSequence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access - computed: false, optional: true, required: false
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }

  // authtype - computed: false, optional: true, required: false
  private _authtype?: string; 
  public get authtype() {
    return this.getStringAttribute('authtype');
  }
  public set authtype(value: string) {
    this._authtype = value;
  }
  public resetAuthtype() {
    this._authtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authtypeInput() {
    return this._authtype;
  }

  // behaviors - computed: false, optional: true, required: false
  private _behaviors?: string[]; 
  public get behaviors() {
    return cdktf.Fn.tolist(this.getListAttribute('behaviors'));
  }
  public set behaviors(value: string[]) {
    this._behaviors = value;
  }
  public resetBehaviors() {
    this._behaviors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorsInput() {
    return this._behaviors;
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

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }

  // identity_provider_ids - computed: false, optional: true, required: false
  private _identityProviderIds?: string[]; 
  public get identityProviderIds() {
    return this.getListAttribute('identity_provider_ids');
  }
  public set identityProviderIds(value: string[]) {
    this._identityProviderIds = value;
  }
  public resetIdentityProviderIds() {
    this._identityProviderIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderIdsInput() {
    return this._identityProviderIds;
  }

  // mfa_lifetime - computed: false, optional: true, required: false
  private _mfaLifetime?: number; 
  public get mfaLifetime() {
    return this.getNumberAttribute('mfa_lifetime');
  }
  public set mfaLifetime(value: number) {
    this._mfaLifetime = value;
  }
  public resetMfaLifetime() {
    this._mfaLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaLifetimeInput() {
    return this._mfaLifetime;
  }

  // mfa_prompt - computed: false, optional: true, required: false
  private _mfaPrompt?: string; 
  public get mfaPrompt() {
    return this.getStringAttribute('mfa_prompt');
  }
  public set mfaPrompt(value: string) {
    this._mfaPrompt = value;
  }
  public resetMfaPrompt() {
    this._mfaPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaPromptInput() {
    return this._mfaPrompt;
  }

  // mfa_remember_device - computed: false, optional: true, required: false
  private _mfaRememberDevice?: boolean | cdktf.IResolvable; 
  public get mfaRememberDevice() {
    return this.getBooleanAttribute('mfa_remember_device');
  }
  public set mfaRememberDevice(value: boolean | cdktf.IResolvable) {
    this._mfaRememberDevice = value;
  }
  public resetMfaRememberDevice() {
    this._mfaRememberDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaRememberDeviceInput() {
    return this._mfaRememberDevice;
  }

  // mfa_required - computed: false, optional: true, required: false
  private _mfaRequired?: boolean | cdktf.IResolvable; 
  public get mfaRequired() {
    return this.getBooleanAttribute('mfa_required');
  }
  public set mfaRequired(value: boolean | cdktf.IResolvable) {
    this._mfaRequired = value;
  }
  public resetMfaRequired() {
    this._mfaRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaRequiredInput() {
    return this._mfaRequired;
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

  // network_connection - computed: false, optional: true, required: false
  private _networkConnection?: string; 
  public get networkConnection() {
    return this.getStringAttribute('network_connection');
  }
  public set networkConnection(value: string) {
    this._networkConnection = value;
  }
  public resetNetworkConnection() {
    this._networkConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkConnectionInput() {
    return this._networkConnection;
  }

  // network_excludes - computed: false, optional: true, required: false
  private _networkExcludes?: string[]; 
  public get networkExcludes() {
    return this.getListAttribute('network_excludes');
  }
  public set networkExcludes(value: string[]) {
    this._networkExcludes = value;
  }
  public resetNetworkExcludes() {
    this._networkExcludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkExcludesInput() {
    return this._networkExcludes;
  }

  // network_includes - computed: false, optional: true, required: false
  private _networkIncludes?: string[]; 
  public get networkIncludes() {
    return this.getListAttribute('network_includes');
  }
  public set networkIncludes(value: string[]) {
    this._networkIncludes = value;
  }
  public resetNetworkIncludes() {
    this._networkIncludes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIncludesInput() {
    return this._networkIncludes;
  }

  // policy_id - computed: false, optional: true, required: false
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  public resetPolicyId() {
    this._policyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // primary_factor - computed: true, optional: true, required: false
  private _primaryFactor?: string; 
  public get primaryFactor() {
    return this.getStringAttribute('primary_factor');
  }
  public set primaryFactor(value: string) {
    this._primaryFactor = value;
  }
  public resetPrimaryFactor() {
    this._primaryFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryFactorInput() {
    return this._primaryFactor;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // risc_level - computed: false, optional: true, required: false
  private _riscLevel?: string; 
  public get riscLevel() {
    return this.getStringAttribute('risc_level');
  }
  public set riscLevel(value: string) {
    this._riscLevel = value;
  }
  public resetRiscLevel() {
    this._riscLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riscLevelInput() {
    return this._riscLevel;
  }

  // risk_level - computed: false, optional: true, required: false
  private _riskLevel?: string; 
  public get riskLevel() {
    return this.getStringAttribute('risk_level');
  }
  public set riskLevel(value: string) {
    this._riskLevel = value;
  }
  public resetRiskLevel() {
    this._riskLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get riskLevelInput() {
    return this._riskLevel;
  }

  // session_idle - computed: false, optional: true, required: false
  private _sessionIdle?: number; 
  public get sessionIdle() {
    return this.getNumberAttribute('session_idle');
  }
  public set sessionIdle(value: number) {
    this._sessionIdle = value;
  }
  public resetSessionIdle() {
    this._sessionIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdleInput() {
    return this._sessionIdle;
  }

  // session_lifetime - computed: false, optional: true, required: false
  private _sessionLifetime?: number; 
  public get sessionLifetime() {
    return this.getNumberAttribute('session_lifetime');
  }
  public set sessionLifetime(value: number) {
    this._sessionLifetime = value;
  }
  public resetSessionLifetime() {
    this._sessionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLifetimeInput() {
    return this._sessionLifetime;
  }

  // session_persistent - computed: false, optional: true, required: false
  private _sessionPersistent?: boolean | cdktf.IResolvable; 
  public get sessionPersistent() {
    return this.getBooleanAttribute('session_persistent');
  }
  public set sessionPersistent(value: boolean | cdktf.IResolvable) {
    this._sessionPersistent = value;
  }
  public resetSessionPersistent() {
    this._sessionPersistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPersistentInput() {
    return this._sessionPersistent;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // users_excluded - computed: false, optional: true, required: false
  private _usersExcluded?: string[]; 
  public get usersExcluded() {
    return cdktf.Fn.tolist(this.getListAttribute('users_excluded'));
  }
  public set usersExcluded(value: string[]) {
    this._usersExcluded = value;
  }
  public resetUsersExcluded() {
    this._usersExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersExcludedInput() {
    return this._usersExcluded;
  }

  // factor_sequence - computed: false, optional: true, required: false
  private _factorSequence = new PolicyRuleSignonFactorSequenceList(this, "factor_sequence", false);
  public get factorSequence() {
    return this._factorSequence;
  }
  public putFactorSequence(value: PolicyRuleSignonFactorSequence[] | cdktf.IResolvable) {
    this._factorSequence.internalValue = value;
  }
  public resetFactorSequence() {
    this._factorSequence.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorSequenceInput() {
    return this._factorSequence.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access: cdktf.stringToTerraform(this._access),
      authtype: cdktf.stringToTerraform(this._authtype),
      behaviors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._behaviors),
      id: cdktf.stringToTerraform(this._id),
      identity_provider: cdktf.stringToTerraform(this._identityProvider),
      identity_provider_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._identityProviderIds),
      mfa_lifetime: cdktf.numberToTerraform(this._mfaLifetime),
      mfa_prompt: cdktf.stringToTerraform(this._mfaPrompt),
      mfa_remember_device: cdktf.booleanToTerraform(this._mfaRememberDevice),
      mfa_required: cdktf.booleanToTerraform(this._mfaRequired),
      name: cdktf.stringToTerraform(this._name),
      network_connection: cdktf.stringToTerraform(this._networkConnection),
      network_excludes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkExcludes),
      network_includes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._networkIncludes),
      policy_id: cdktf.stringToTerraform(this._policyId),
      primary_factor: cdktf.stringToTerraform(this._primaryFactor),
      priority: cdktf.numberToTerraform(this._priority),
      risc_level: cdktf.stringToTerraform(this._riscLevel),
      risk_level: cdktf.stringToTerraform(this._riskLevel),
      session_idle: cdktf.numberToTerraform(this._sessionIdle),
      session_lifetime: cdktf.numberToTerraform(this._sessionLifetime),
      session_persistent: cdktf.booleanToTerraform(this._sessionPersistent),
      status: cdktf.stringToTerraform(this._status),
      users_excluded: cdktf.listMapper(cdktf.stringToTerraform, false)(this._usersExcluded),
      factor_sequence: cdktf.listMapper(policyRuleSignonFactorSequenceToTerraform, true)(this._factorSequence.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access: {
        value: cdktf.stringToHclTerraform(this._access),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authtype: {
        value: cdktf.stringToHclTerraform(this._authtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      behaviors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._behaviors),
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
      identity_provider: {
        value: cdktf.stringToHclTerraform(this._identityProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._identityProviderIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mfa_lifetime: {
        value: cdktf.numberToHclTerraform(this._mfaLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mfa_prompt: {
        value: cdktf.stringToHclTerraform(this._mfaPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mfa_remember_device: {
        value: cdktf.booleanToHclTerraform(this._mfaRememberDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mfa_required: {
        value: cdktf.booleanToHclTerraform(this._mfaRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_connection: {
        value: cdktf.stringToHclTerraform(this._networkConnection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_excludes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkExcludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      network_includes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._networkIncludes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_factor: {
        value: cdktf.stringToHclTerraform(this._primaryFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      risc_level: {
        value: cdktf.stringToHclTerraform(this._riscLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      risk_level: {
        value: cdktf.stringToHclTerraform(this._riskLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_idle: {
        value: cdktf.numberToHclTerraform(this._sessionIdle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_lifetime: {
        value: cdktf.numberToHclTerraform(this._sessionLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_persistent: {
        value: cdktf.booleanToHclTerraform(this._sessionPersistent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      users_excluded: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._usersExcluded),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      factor_sequence: {
        value: cdktf.listMapperHcl(policyRuleSignonFactorSequenceToHclTerraform, true)(this._factorSequence.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyRuleSignonFactorSequenceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
