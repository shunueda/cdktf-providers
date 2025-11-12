// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RepositoryNetworkAccessPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Is the network access policy enabled? Default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#enabled RepositoryNetworkAccessPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Determines what happens if an incoming connection matches one of the rules in `network_access_rule`. If set to true, the connection is blocked if it matches some rule (and allowed otherwise). Otherwise set to false, the connection is allowed only if it matches some rule. Default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#network_access_rules_block_access RepositoryNetworkAccessPolicy#network_access_rules_block_access}
  */
  readonly networkAccessRulesBlockAccess?: boolean | cdktf.IResolvable;
  /**
  * ID of the repository for which to configure a network access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#repository_id RepositoryNetworkAccessPolicy#repository_id}
  */
  readonly repositoryId: string;
  /**
  * network_access_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#network_access_rule RepositoryNetworkAccessPolicy#network_access_rule}
  */
  readonly networkAccessRule?: RepositoryNetworkAccessPolicyNetworkAccessRule[] | cdktf.IResolvable;
}
export interface RepositoryNetworkAccessPolicyNetworkAccessRule {
  /**
  * Specify which accounts this rule applies to. The account name must match an existing account in your database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#db_accounts RepositoryNetworkAccessPolicy#db_accounts}
  */
  readonly dbAccounts?: string[];
  /**
  * Description of the network access policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#description RepositoryNetworkAccessPolicy#description}
  */
  readonly description?: string;
  /**
  * Name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#name RepositoryNetworkAccessPolicy#name}
  */
  readonly name: string;
  /**
  * Specify IPs to restrict the range of allowed IP addresses for this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#source_ips RepositoryNetworkAccessPolicy#source_ips}
  */
  readonly sourceIps?: string[];
}

export function repositoryNetworkAccessPolicyNetworkAccessRuleToTerraform(struct?: RepositoryNetworkAccessPolicyNetworkAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dbAccounts),
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIps),
  }
}


export function repositoryNetworkAccessPolicyNetworkAccessRuleToHclTerraform(struct?: RepositoryNetworkAccessPolicyNetworkAccessRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dbAccounts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RepositoryNetworkAccessPolicyNetworkAccessRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RepositoryNetworkAccessPolicyNetworkAccessRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbAccounts = this._dbAccounts;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._sourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIps = this._sourceIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RepositoryNetworkAccessPolicyNetworkAccessRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbAccounts = undefined;
      this._description = undefined;
      this._name = undefined;
      this._sourceIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbAccounts = value.dbAccounts;
      this._description = value.description;
      this._name = value.name;
      this._sourceIps = value.sourceIps;
    }
  }

  // db_accounts - computed: false, optional: true, required: false
  private _dbAccounts?: string[]; 
  public get dbAccounts() {
    return this.getListAttribute('db_accounts');
  }
  public set dbAccounts(value: string[]) {
    this._dbAccounts = value;
  }
  public resetDbAccounts() {
    this._dbAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbAccountsInput() {
    return this._dbAccounts;
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

  // source_ips - computed: false, optional: true, required: false
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return this.getListAttribute('source_ips');
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  public resetSourceIps() {
    this._sourceIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }
}

export class RepositoryNetworkAccessPolicyNetworkAccessRuleList extends cdktf.ComplexList {
  public internalValue? : RepositoryNetworkAccessPolicyNetworkAccessRule[] | cdktf.IResolvable

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
  public get(index: number): RepositoryNetworkAccessPolicyNetworkAccessRuleOutputReference {
    return new RepositoryNetworkAccessPolicyNetworkAccessRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy cyral_repository_network_access_policy}
*/
export class RepositoryNetworkAccessPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_repository_network_access_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RepositoryNetworkAccessPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RepositoryNetworkAccessPolicy to import
  * @param importFromId The id of the existing RepositoryNetworkAccessPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RepositoryNetworkAccessPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_repository_network_access_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/repository_network_access_policy cyral_repository_network_access_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RepositoryNetworkAccessPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: RepositoryNetworkAccessPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_repository_network_access_policy',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._networkAccessRulesBlockAccess = config.networkAccessRulesBlockAccess;
    this._repositoryId = config.repositoryId;
    this._networkAccessRule.internalValue = config.networkAccessRule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // network_access_rules_block_access - computed: false, optional: true, required: false
  private _networkAccessRulesBlockAccess?: boolean | cdktf.IResolvable; 
  public get networkAccessRulesBlockAccess() {
    return this.getBooleanAttribute('network_access_rules_block_access');
  }
  public set networkAccessRulesBlockAccess(value: boolean | cdktf.IResolvable) {
    this._networkAccessRulesBlockAccess = value;
  }
  public resetNetworkAccessRulesBlockAccess() {
    this._networkAccessRulesBlockAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessRulesBlockAccessInput() {
    return this._networkAccessRulesBlockAccess;
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

  // network_access_rule - computed: false, optional: true, required: false
  private _networkAccessRule = new RepositoryNetworkAccessPolicyNetworkAccessRuleList(this, "network_access_rule", true);
  public get networkAccessRule() {
    return this._networkAccessRule;
  }
  public putNetworkAccessRule(value: RepositoryNetworkAccessPolicyNetworkAccessRule[] | cdktf.IResolvable) {
    this._networkAccessRule.internalValue = value;
  }
  public resetNetworkAccessRule() {
    this._networkAccessRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkAccessRuleInput() {
    return this._networkAccessRule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      network_access_rules_block_access: cdktf.booleanToTerraform(this._networkAccessRulesBlockAccess),
      repository_id: cdktf.stringToTerraform(this._repositoryId),
      network_access_rule: cdktf.listMapper(repositoryNetworkAccessPolicyNetworkAccessRuleToTerraform, true)(this._networkAccessRule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_access_rules_block_access: {
        value: cdktf.booleanToHclTerraform(this._networkAccessRulesBlockAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      repository_id: {
        value: cdktf.stringToHclTerraform(this._repositoryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_access_rule: {
        value: cdktf.listMapperHcl(repositoryNetworkAccessPolicyNetworkAccessRuleToHclTerraform, true)(this._networkAccessRule.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RepositoryNetworkAccessPolicyNetworkAccessRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
