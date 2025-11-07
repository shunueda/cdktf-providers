// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryAccessRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#repository_id RepositoryAccessRules#repository_id}
  */
  readonly repositoryId: string;
  /**
  * ID of the database account. This should be the attribute `user_account_id` of the resource `cyral_repository_user_account`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#user_account_id RepositoryAccessRules#user_account_id}
  */
  readonly userAccountId: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#rule RepositoryAccessRules#rule}
  */
  readonly rule: RepositoryAccessRulesRule[] | cdktf.IResolvable;
}
export interface RepositoryAccessRulesRuleConfig {
  /**
  * Extra authorization policies, such as PagerDuty or DUO. Use the attribute `id` from resources `cyral_integration_pager_duty` and `cyral_integration_mfa_duo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#policy_ids RepositoryAccessRules#policy_ids}
  */
  readonly policyIds: string[];
}

export function repositoryAccessRulesRuleConfigToTerraform(struct?: RepositoryAccessRulesRuleConfigOutputReference | RepositoryAccessRulesRuleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyIds),
  }
}


export function repositoryAccessRulesRuleConfigToHclTerraform(struct?: RepositoryAccessRulesRuleConfigOutputReference | RepositoryAccessRulesRuleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryAccessRulesRuleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryAccessRulesRuleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyIds = this._policyIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryAccessRulesRuleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policyIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policyIds = value.policyIds;
    }
  }

  // policy_ids - computed: false, optional: false, required: true
  private _policyIds?: string[]; 
  public get policyIds() {
    return this.getListAttribute('policy_ids');
  }
  public set policyIds(value: string[]) {
    this._policyIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds;
  }
}
export interface RepositoryAccessRulesRuleIdentity {
  /**
  * The name of the person/group getting access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#name RepositoryAccessRules#name}
  */
  readonly name: string;
  /**
  * Identity type. List of supported values: 
  *   - `username`
  *   - `email`
  *   - `group`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#type RepositoryAccessRules#type}
  */
  readonly type: string;
}

export function repositoryAccessRulesRuleIdentityToTerraform(struct?: RepositoryAccessRulesRuleIdentityOutputReference | RepositoryAccessRulesRuleIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function repositoryAccessRulesRuleIdentityToHclTerraform(struct?: RepositoryAccessRulesRuleIdentityOutputReference | RepositoryAccessRulesRuleIdentity): any {
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

export class RepositoryAccessRulesRuleIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RepositoryAccessRulesRuleIdentity | undefined {
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

  public set internalValue(value: RepositoryAccessRulesRuleIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
export interface RepositoryAccessRulesRule {
  /**
  * The start time for the grant. Format is: `yyyy-mm-ddThh:mm:ssZ`. Eg. `2022-01-24T18:30:00Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#valid_from RepositoryAccessRules#valid_from}
  */
  readonly validFrom?: string;
  /**
  * The end time for the grant. Format is: `yyyy-mm-ddThh:mm:ssZ`. Eg. `2022-01-24T18:30:00Z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#valid_until RepositoryAccessRules#valid_until}
  */
  readonly validUntil?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#config RepositoryAccessRules#config}
  */
  readonly config?: RepositoryAccessRulesRuleConfig;
  /**
  * identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#identity RepositoryAccessRules#identity}
  */
  readonly identity: RepositoryAccessRulesRuleIdentity;
}

export function repositoryAccessRulesRuleToTerraform(struct?: RepositoryAccessRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    valid_from: cdktf.stringToTerraform(struct!.validFrom),
    valid_until: cdktf.stringToTerraform(struct!.validUntil),
    config: repositoryAccessRulesRuleConfigToTerraform(struct!.config),
    identity: repositoryAccessRulesRuleIdentityToTerraform(struct!.identity),
  }
}


export function repositoryAccessRulesRuleToHclTerraform(struct?: RepositoryAccessRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    valid_from: {
      value: cdktf.stringToHclTerraform(struct!.validFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_until: {
      value: cdktf.stringToHclTerraform(struct!.validUntil),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: repositoryAccessRulesRuleConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryAccessRulesRuleConfigList",
    },
    identity: {
      value: repositoryAccessRulesRuleIdentityToHclTerraform(struct!.identity),
      isBlock: true,
      type: "set",
      storageClassType: "RepositoryAccessRulesRuleIdentityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryAccessRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryAccessRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._validFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.validFrom = this._validFrom;
    }
    if (this._validUntil !== undefined) {
      hasAnyValues = true;
      internalValueResult.validUntil = this._validUntil;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._identity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identity = this._identity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryAccessRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._validFrom = undefined;
      this._validUntil = undefined;
      this._config.internalValue = undefined;
      this._identity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._validFrom = value.validFrom;
      this._validUntil = value.validUntil;
      this._config.internalValue = value.config;
      this._identity.internalValue = value.identity;
    }
  }

  // valid_from - computed: false, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // config - computed: false, optional: true, required: false
  private _config = new RepositoryAccessRulesRuleConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: RepositoryAccessRulesRuleConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // identity - computed: false, optional: false, required: true
  private _identity = new RepositoryAccessRulesRuleIdentityOutputReference(this, "identity");
  public get identity() {
    return this._identity;
  }
  public putIdentity(value: RepositoryAccessRulesRuleIdentity) {
    this._identity.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityInput() {
    return this._identity.internalValue;
  }
}

export class RepositoryAccessRulesRuleList extends cdktf.ComplexList {
  public internalValue? : RepositoryAccessRulesRule[] | cdktf.IResolvable

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
  public get(index: number): RepositoryAccessRulesRuleOutputReference {
    return new RepositoryAccessRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules cyral_repository_access_rules}
*/
export class RepositoryAccessRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_repository_access_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryAccessRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryAccessRules to import
  * @param importFromId The id of the existing RepositoryAccessRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryAccessRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_repository_access_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_access_rules cyral_repository_access_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryAccessRulesConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryAccessRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_repository_access_rules',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._repositoryId = config.repositoryId;
    this._userAccountId = config.userAccountId;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // repository_id - computed: false, optional: false, required: true
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // user_account_id - computed: false, optional: false, required: true
  private _userAccountId?: string; 
  public get userAccountId() {
    return this.getStringAttribute('user_account_id');
  }
  public set userAccountId(value: string) {
    this._userAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountIdInput() {
    return this._userAccountId;
  }

  // rule - computed: false, optional: false, required: true
  private _rule = new RepositoryAccessRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: RepositoryAccessRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      user_account_id: cdktf.stringToTerraform(this._userAccountId),
      rule: cdktf.listMapper(repositoryAccessRulesRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_account_id: {
        value: cdktf.stringToHclTerraform(this._userAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(repositoryAccessRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RepositoryAccessRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
