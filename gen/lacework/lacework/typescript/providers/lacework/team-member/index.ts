// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to true to make the team member an administrator, otherwise the member will be a regular user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#administrator TeamMember#administrator}
  */
  readonly administrator?: boolean | cdktf.IResolvable;
  /**
  * The company name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#company TeamMember#company}
  */
  readonly company: string;
  /**
  * The email for the team member which will also be used as the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#email TeamMember#email}
  */
  readonly email: string;
  /**
  * The state of the team member, whether they are enabled or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#enabled TeamMember#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The first name of the team member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#first_name TeamMember#first_name}
  */
  readonly firstName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#id TeamMember#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The last name of the team member
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#last_name TeamMember#last_name}
  */
  readonly lastName: string;
  /**
  * organization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#organization TeamMember#organization}
  */
  readonly organization?: TeamMemberOrganization;
}
export interface TeamMemberOrganization {
  /**
  * List of accounts the team member is an admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#admin_accounts TeamMember#admin_accounts}
  */
  readonly adminAccounts?: string[];
  /**
  * Whether the team member is an org level administrator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#administrator TeamMember#administrator}
  */
  readonly administrator?: boolean | cdktf.IResolvable;
  /**
  * Whether the team member is an org level user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#user TeamMember#user}
  */
  readonly user?: boolean | cdktf.IResolvable;
  /**
  * List of accounts the team member is a user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#user_accounts TeamMember#user_accounts}
  */
  readonly userAccounts?: string[];
}

export function teamMemberOrganizationToTerraform(struct?: TeamMemberOrganizationOutputReference | TeamMemberOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminAccounts),
    administrator: cdktf.booleanToTerraform(struct!.administrator),
    user: cdktf.booleanToTerraform(struct!.user),
    user_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userAccounts),
  }
}


export function teamMemberOrganizationToHclTerraform(struct?: TeamMemberOrganizationOutputReference | TeamMemberOrganization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    administrator: {
      value: cdktf.booleanToHclTerraform(struct!.administrator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.booleanToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_accounts: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userAccounts),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TeamMemberOrganizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TeamMemberOrganization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminAccounts = this._adminAccounts;
    }
    if (this._administrator !== undefined) {
      hasAnyValues = true;
      internalValueResult.administrator = this._administrator;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._userAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAccounts = this._userAccounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TeamMemberOrganization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminAccounts = undefined;
      this._administrator = undefined;
      this._user = undefined;
      this._userAccounts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminAccounts = value.adminAccounts;
      this._administrator = value.administrator;
      this._user = value.user;
      this._userAccounts = value.userAccounts;
    }
  }

  // admin_accounts - computed: false, optional: true, required: false
  private _adminAccounts?: string[]; 
  public get adminAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_accounts'));
  }
  public set adminAccounts(value: string[]) {
    this._adminAccounts = value;
  }
  public resetAdminAccounts() {
    this._adminAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminAccountsInput() {
    return this._adminAccounts;
  }

  // administrator - computed: false, optional: true, required: false
  private _administrator?: boolean | cdktf.IResolvable; 
  public get administrator() {
    return this.getBooleanAttribute('administrator');
  }
  public set administrator(value: boolean | cdktf.IResolvable) {
    this._administrator = value;
  }
  public resetAdministrator() {
    this._administrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorInput() {
    return this._administrator;
  }

  // user - computed: false, optional: true, required: false
  private _user?: boolean | cdktf.IResolvable; 
  public get user() {
    return this.getBooleanAttribute('user');
  }
  public set user(value: boolean | cdktf.IResolvable) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // user_accounts - computed: false, optional: true, required: false
  private _userAccounts?: string[]; 
  public get userAccounts() {
    return cdktf.Fn.tolist(this.getListAttribute('user_accounts'));
  }
  public set userAccounts(value: string[]) {
    this._userAccounts = value;
  }
  public resetUserAccounts() {
    this._userAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountsInput() {
    return this._userAccounts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member lacework_team_member}
*/
export class TeamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_team_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeamMember to import
  * @param importFromId The id of the existing TeamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_team_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/team_member lacework_team_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: TeamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_team_member',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._administrator = config.administrator;
    this._company = config.company;
    this._email = config.email;
    this._enabled = config.enabled;
    this._firstName = config.firstName;
    this._id = config.id;
    this._lastName = config.lastName;
    this._organization.internalValue = config.organization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // administrator - computed: false, optional: true, required: false
  private _administrator?: boolean | cdktf.IResolvable; 
  public get administrator() {
    return this.getBooleanAttribute('administrator');
  }
  public set administrator(value: boolean | cdktf.IResolvable) {
    this._administrator = value;
  }
  public resetAdministrator() {
    this._administrator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get administratorInput() {
    return this._administrator;
  }

  // company - computed: false, optional: false, required: true
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

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

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // organization - computed: false, optional: true, required: false
  private _organization = new TeamMemberOrganizationOutputReference(this, "organization");
  public get organization() {
    return this._organization;
  }
  public putOrganization(value: TeamMemberOrganization) {
    this._organization.internalValue = value;
  }
  public resetOrganization() {
    this._organization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      administrator: cdktf.booleanToTerraform(this._administrator),
      company: cdktf.stringToTerraform(this._company),
      email: cdktf.stringToTerraform(this._email),
      enabled: cdktf.booleanToTerraform(this._enabled),
      first_name: cdktf.stringToTerraform(this._firstName),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      organization: teamMemberOrganizationToTerraform(this._organization.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      administrator: {
        value: cdktf.booleanToHclTerraform(this._administrator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      organization: {
        value: teamMemberOrganizationToHclTerraform(this._organization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TeamMemberOrganizationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
