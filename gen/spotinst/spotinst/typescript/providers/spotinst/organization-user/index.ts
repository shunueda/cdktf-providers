// https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#email OrganizationUser#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#first_name OrganizationUser#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#id OrganizationUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#last_name OrganizationUser#last_name}
  */
  readonly lastName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#password OrganizationUser#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#role OrganizationUser#role}
  */
  readonly role?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#user_group_ids OrganizationUser#user_group_ids}
  */
  readonly userGroupIds?: string[];
  /**
  * policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#policies OrganizationUser#policies}
  */
  readonly policies?: OrganizationUserPolicies[] | cdktf.IResolvable;
}
export interface OrganizationUserPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#policy_account_ids OrganizationUser#policy_account_ids}
  */
  readonly policyAccountIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#policy_id OrganizationUser#policy_id}
  */
  readonly policyId: string;
}

export function organizationUserPoliciesToTerraform(struct?: OrganizationUserPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy_account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.policyAccountIds),
    policy_id: cdktf.stringToTerraform(struct!.policyId),
  }
}


export function organizationUserPoliciesToHclTerraform(struct?: OrganizationUserPolicies | cdktf.IResolvable): any {
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

export class OrganizationUserPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OrganizationUserPolicies | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrganizationUserPolicies | cdktf.IResolvable | undefined) {
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

  // policy_account_ids - computed: false, optional: false, required: true
  private _policyAccountIds?: string[]; 
  public get policyAccountIds() {
    return this.getListAttribute('policy_account_ids');
  }
  public set policyAccountIds(value: string[]) {
    this._policyAccountIds = value;
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

export class OrganizationUserPoliciesList extends cdktf.ComplexList {
  public internalValue? : OrganizationUserPolicies[] | cdktf.IResolvable

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
  public get(index: number): OrganizationUserPoliciesOutputReference {
    return new OrganizationUserPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user spotinst_organization_user}
*/
export class OrganizationUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spotinst_organization_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrganizationUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrganizationUser to import
  * @param importFromId The id of the existing OrganizationUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrganizationUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spotinst_organization_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spotinst/spotinst/1.231.0/docs/resources/organization_user spotinst_organization_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationUserConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationUserConfig) {
    super(scope, id, {
      terraformResourceType: 'spotinst_organization_user',
      terraformGeneratorMetadata: {
        providerName: 'spotinst',
        providerVersion: '1.231.0',
        providerVersionConstraint: '1.231.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._password = config.password;
    this._role = config.role;
    this._userGroupIds = config.userGroupIds;
    this._policies.internalValue = config.policies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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

  // policies - computed: false, optional: true, required: false
  private _policies = new OrganizationUserPoliciesList(this, "policies", true);
  public get policies() {
    return this._policies;
  }
  public putPolicies(value: OrganizationUserPolicies[] | cdktf.IResolvable) {
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
      email: cdktf.stringToTerraform(this._email),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      password: cdktf.stringToTerraform(this._password),
      role: cdktf.stringToTerraform(this._role),
      user_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userGroupIds),
      policies: cdktf.listMapper(organizationUserPoliciesToTerraform, true)(this._policies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
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
      policies: {
        value: cdktf.listMapperHcl(organizationUserPoliciesToHclTerraform, true)(this._policies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OrganizationUserPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
