// https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationProgrammaticUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * accounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#accounts OrganizationProgrammaticUser#accounts}
  */
  readonly accounts?: OrganizationProgrammaticUserAccounts[] | cdktf.IResolvable;
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#policies OrganizationProgrammaticUser#policies}
  */
  readonly policies?: OrganizationProgrammaticUserPolicies[] | cdktf.IResolvable;
}
export interface OrganizationProgrammaticUserAccounts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#account_id OrganizationProgrammaticUser#account_id}
  */
  readonly accountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#account_role OrganizationProgrammaticUser#account_role}
  */
  readonly accountRole: string;
}

export function organizationProgrammaticUserAccountsToTerraform(struct?: OrganizationProgrammaticUserAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_id: cdktf.stringToTerraform(struct!.accountId),
    account_role: cdktf.stringToTerraform(struct!.accountRole),
  }
}


export function organizationProgrammaticUserAccountsToHclTerraform(struct?: OrganizationProgrammaticUserAccounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_id: {
      value: cdktf.stringToHclTerraform(struct!.accountId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_role: {
      value: cdktf.stringToHclTerraform(struct!.accountRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationProgrammaticUserAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationProgrammaticUserAccounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountId = this._accountId;
    }
    if (this._accountRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountRole = this._accountRole;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationProgrammaticUserAccounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountId = undefined;
      this._accountRole = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountId = value.accountId;
      this._accountRole = value.accountRole;
    }
  }

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // account_role - computed: false, optional: false, required: true
  private _accountRole?: string; 
  public get accountRole() {
    return this.getStringAttribute('account_role');
  }
  public set accountRole(value: string) {
    this._accountRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountRoleInput() {
    return this._accountRole;
  }
}

export class OrganizationProgrammaticUserAccountsList extends cdktf.ComplexList {
  public internalValue? : OrganizationProgrammaticUserAccounts[] | cdktf.IResolvable

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
  public get(index: number): OrganizationProgrammaticUserAccountsOutputReference {
    return new OrganizationProgrammaticUserAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OrganizationProgrammaticUserPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#policy_account_ids OrganizationProgrammaticUser#policy_account_ids}
  */
  readonly policyAccountIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#policy_id OrganizationProgrammaticUser#policy_id}
  */
  readonly policyId: string;
}

export function organizationProgrammaticUserPoliciesToTerraform(struct?: OrganizationProgrammaticUserPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyAccountIds),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
  }
}


export function organizationProgrammaticUserPoliciesToHclTerraform(struct?: OrganizationProgrammaticUserPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy_account_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.policyAccountIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    policy_id: {
      value: cdktf.stringToHclTerraform(struct!.policyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrganizationProgrammaticUserPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationProgrammaticUserPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policyAccountIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyAccountIds = this._policyAccountIds;
    }
    if (this._policyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyId = this._policyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrganizationProgrammaticUserPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._policyAccountIds = undefined;
      this._policyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._policyAccountIds = value.policyAccountIds;
      this._policyId = value.policyId;
    }
  }

  // policy_account_ids - computed: false, optional: true, required: false
  private _policyAccountIds?: string[]; 
  public get policyAccountIds() {
    return this.getListAttribute('policy_account_ids');
  }
  public set policyAccountIds(value: string[]) {
    this._policyAccountIds = value;
  }
  public resetPolicyAccountIds() {
    this._policyAccountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyAccountIdsInput() {
    return this._policyAccountIds;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }
}

export class OrganizationProgrammaticUserPoliciesList extends cdktf.ComplexList {
  public internalValue? : OrganizationProgrammaticUserPolicies[] | cdktf.IResolvable

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
  public get(index: number): OrganizationProgrammaticUserPoliciesOutputReference {
    return new OrganizationProgrammaticUserPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user spotinst_organization_programmatic_user}
*/
export class OrganizationProgrammaticUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_organization_programmatic_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationProgrammaticUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationProgrammaticUser to import
  * @param importFromId The id of the existing OrganizationProgrammaticUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationProgrammaticUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_organization_programmatic_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.230.0/docs/resources/organization_programmatic_user spotinst_organization_programmatic_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationProgrammaticUserConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationProgrammaticUserConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_organization_programmatic_user',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.230.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._userGroupIds = config.userGroupIds;
    this._accounts.internalValue = config.accounts;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // user_group_ids - computed: false, optional: true, required: false
  private _userGroupIds?: string[]; 
  public get userGroupIds() {
    return this.getListAttribute('user_group_ids');
  }
  public set userGroupIds(value: string[]) {
    this._userGroupIds = value;
  }
  public resetUserGroupIds() {
    this._userGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // accounts - computed: false, optional: true, required: false
  private _accounts = new OrganizationProgrammaticUserAccountsList(this, "accounts", true);
  public get accounts() {
    return this._accounts;
  }
  public putAccounts(value: OrganizationProgrammaticUserAccounts[] | cdktf.IResolvable) {
    this._accounts.internalValue = value;
  }
  public resetAccounts() {
    this._accounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountsInput() {
    return this._accounts.internalValue;
  }

  // policies - computed: false, optional: true, required: false
  private _policies = new OrganizationProgrammaticUserPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: OrganizationProgrammaticUserPolicies[] | cdktf.IResolvable) {
    this._policies.internalValue = value;
  }
  public resetPolicies() {
    this._policies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policiesInput() {
    return this._policies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      accounts: cdktf.listMapper(organizationProgrammaticUserAccountsToTerraform, true)(this._accounts.internalValue),
      policies: cdktf.listMapper(organizationProgrammaticUserPoliciesToTerraform, true)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      accounts: {
        value: cdktf.listMapperHcl(organizationProgrammaticUserAccountsToHclTerraform, true)(this._accounts.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrganizationProgrammaticUserAccountsList",
      },
      policies: {
        value: cdktf.listMapperHcl(organizationProgrammaticUserPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrganizationProgrammaticUserPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
