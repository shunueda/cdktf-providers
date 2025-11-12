// https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagedIdentityAccessRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of resource paths of service accounts allowed to use the managed identity associated with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#allowed_service_accounts ManagedIdentityAccessRule#allowed_service_accounts}
  */
  readonly allowedServiceAccounts?: string[];
  /**
  * List of names of teams allowed to use the managed identity associated with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#allowed_teams ManagedIdentityAccessRule#allowed_teams}
  */
  readonly allowedTeams?: string[];
  /**
  * List of usernames allowed to use the managed identity associated with this rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#allowed_users ManagedIdentityAccessRule#allowed_users}
  */
  readonly allowedUsers?: string[];
  /**
  * String identifier of the connected managed identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#managed_identity_id ManagedIdentityAccessRule#managed_identity_id}
  */
  readonly managedIdentityId: string;
  /**
  * Used to verify that a module has an in-toto attestation that is signed with the specified public key and an optional predicate type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#module_attestation_policies ManagedIdentityAccessRule#module_attestation_policies}
  */
  readonly moduleAttestationPolicies?: ManagedIdentityAccessRuleModuleAttestationPolicies[] | cdktf.IResolvable;
  /**
  * Type of job, plan or apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#run_stage ManagedIdentityAccessRule#run_stage}
  */
  readonly runStage: string;
  /**
  * Type of access rule: eligible_principals or module_attestation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#type ManagedIdentityAccessRule#type}
  */
  readonly type: string;
  /**
  * Whether to verify that the workspace's current state is from the same module source, default is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#verify_state_lineage ManagedIdentityAccessRule#verify_state_lineage}
  */
  readonly verifyStateLineage?: boolean | cdktf.IResolvable;
}
export interface ManagedIdentityAccessRuleModuleAttestationPolicies {
  /**
  * Optional predicate type for this attestation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#predicate_type ManagedIdentityAccessRule#predicate_type}
  */
  readonly predicateType?: string;
  /**
  * Public key in PEM format for this attestation policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#public_key ManagedIdentityAccessRule#public_key}
  */
  readonly publicKey: string;
}

export function managedIdentityAccessRuleModuleAttestationPoliciesToTerraform(struct?: ManagedIdentityAccessRuleModuleAttestationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    predicate_type: cdktf.stringToTerraform(struct!.predicateType),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
  }
}


export function managedIdentityAccessRuleModuleAttestationPoliciesToHclTerraform(struct?: ManagedIdentityAccessRuleModuleAttestationPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    predicate_type: {
      value: cdktf.stringToHclTerraform(struct!.predicateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagedIdentityAccessRuleModuleAttestationPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagedIdentityAccessRuleModuleAttestationPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._predicateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.predicateType = this._predicateType;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagedIdentityAccessRuleModuleAttestationPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._predicateType = undefined;
      this._publicKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._predicateType = value.predicateType;
      this._publicKey = value.publicKey;
    }
  }

  // predicate_type - computed: true, optional: true, required: false
  private _predicateType?: string; 
  public get predicateType() {
    return this.getStringAttribute('predicate_type');
  }
  public set predicateType(value: string) {
    this._predicateType = value;
  }
  public resetPredicateType() {
    this._predicateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predicateTypeInput() {
    return this._predicateType;
  }

  // public_key - computed: true, optional: false, required: true
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }
}

export class ManagedIdentityAccessRuleModuleAttestationPoliciesList extends cdktf.ComplexList {
  public internalValue? : ManagedIdentityAccessRuleModuleAttestationPolicies[] | cdktf.IResolvable

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
  public get(index: number): ManagedIdentityAccessRuleModuleAttestationPoliciesOutputReference {
    return new ManagedIdentityAccessRuleModuleAttestationPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule tharsis_managed_identity_access_rule}
*/
export class ManagedIdentityAccessRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_managed_identity_access_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagedIdentityAccessRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagedIdentityAccessRule to import
  * @param importFromId The id of the existing ManagedIdentityAccessRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagedIdentityAccessRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_managed_identity_access_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.14.1/docs/resources/managed_identity_access_rule tharsis_managed_identity_access_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagedIdentityAccessRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ManagedIdentityAccessRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_managed_identity_access_rule',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.14.1',
        providerVersionConstraint: '0.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedServiceAccounts = config.allowedServiceAccounts;
    this._allowedTeams = config.allowedTeams;
    this._allowedUsers = config.allowedUsers;
    this._managedIdentityId = config.managedIdentityId;
    this._moduleAttestationPolicies.internalValue = config.moduleAttestationPolicies;
    this._runStage = config.runStage;
    this._type = config.type;
    this._verifyStateLineage = config.verifyStateLineage;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_service_accounts - computed: true, optional: true, required: false
  private _allowedServiceAccounts?: string[]; 
  public get allowedServiceAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_service_accounts'));
  }
  public set allowedServiceAccounts(value: string[]) {
    this._allowedServiceAccounts = value;
  }
  public resetAllowedServiceAccounts() {
    this._allowedServiceAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedServiceAccountsInput() {
    return this._allowedServiceAccounts;
  }

  // allowed_teams - computed: true, optional: true, required: false
  private _allowedTeams?: string[]; 
  public get allowedTeams() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_teams'));
  }
  public set allowedTeams(value: string[]) {
    this._allowedTeams = value;
  }
  public resetAllowedTeams() {
    this._allowedTeams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTeamsInput() {
    return this._allowedTeams;
  }

  // allowed_users - computed: true, optional: true, required: false
  private _allowedUsers?: string[]; 
  public get allowedUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_users'));
  }
  public set allowedUsers(value: string[]) {
    this._allowedUsers = value;
  }
  public resetAllowedUsers() {
    this._allowedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedUsersInput() {
    return this._allowedUsers;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_identity_id - computed: false, optional: false, required: true
  private _managedIdentityId?: string; 
  public get managedIdentityId() {
    return this.getStringAttribute('managed_identity_id');
  }
  public set managedIdentityId(value: string) {
    this._managedIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityIdInput() {
    return this._managedIdentityId;
  }

  // module_attestation_policies - computed: true, optional: true, required: false
  private _moduleAttestationPolicies = new ManagedIdentityAccessRuleModuleAttestationPoliciesList(this, "module_attestation_policies", false);
  public get moduleAttestationPolicies() {
    return this._moduleAttestationPolicies;
  }
  public putModuleAttestationPolicies(value: ManagedIdentityAccessRuleModuleAttestationPolicies[] | cdktf.IResolvable) {
    this._moduleAttestationPolicies.internalValue = value;
  }
  public resetModuleAttestationPolicies() {
    this._moduleAttestationPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleAttestationPoliciesInput() {
    return this._moduleAttestationPolicies.internalValue;
  }

  // run_stage - computed: false, optional: false, required: true
  private _runStage?: string; 
  public get runStage() {
    return this.getStringAttribute('run_stage');
  }
  public set runStage(value: string) {
    this._runStage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get runStageInput() {
    return this._runStage;
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

  // verify_state_lineage - computed: true, optional: true, required: false
  private _verifyStateLineage?: boolean | cdktf.IResolvable; 
  public get verifyStateLineage() {
    return this.getBooleanAttribute('verify_state_lineage');
  }
  public set verifyStateLineage(value: boolean | cdktf.IResolvable) {
    this._verifyStateLineage = value;
  }
  public resetVerifyStateLineage() {
    this._verifyStateLineage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyStateLineageInput() {
    return this._verifyStateLineage;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_service_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedServiceAccounts),
      allowed_teams: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedTeams),
      allowed_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedUsers),
      managed_identity_id: cdktf.stringToTerraform(this._managedIdentityId),
      module_attestation_policies: cdktf.listMapper(managedIdentityAccessRuleModuleAttestationPoliciesToTerraform, false)(this._moduleAttestationPolicies.internalValue),
      run_stage: cdktf.stringToTerraform(this._runStage),
      type: cdktf.stringToTerraform(this._type),
      verify_state_lineage: cdktf.booleanToTerraform(this._verifyStateLineage),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_service_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedServiceAccounts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_teams: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedTeams),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      managed_identity_id: {
        value: cdktf.stringToHclTerraform(this._managedIdentityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      module_attestation_policies: {
        value: cdktf.listMapperHcl(managedIdentityAccessRuleModuleAttestationPoliciesToHclTerraform, false)(this._moduleAttestationPolicies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagedIdentityAccessRuleModuleAttestationPoliciesList",
      },
      run_stage: {
        value: cdktf.stringToHclTerraform(this._runStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_state_lineage: {
        value: cdktf.booleanToHclTerraform(this._verifyStateLineage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
