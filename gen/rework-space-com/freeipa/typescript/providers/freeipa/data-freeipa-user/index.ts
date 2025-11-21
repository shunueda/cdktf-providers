// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFreeipaUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * UID or Login
  * 
  * 	- The name must not exceed 32 characters.
  * 	- The name must contain only lowercase letters (a-z), digits (0-9), and the characters (. - _).
  * 	- The name must not start with a special character.
  * 	- A user and a group cannot have the same name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/user#name DataFreeipaUser#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/user freeipa_user}
*/
export class DataFreeipaUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFreeipaUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFreeipaUser to import
  * @param importFromId The id of the existing DataFreeipaUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFreeipaUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/data-sources/user freeipa_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFreeipaUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataFreeipaUserConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_user',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.4',
        providerVersionConstraint: '5.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_disabled - computed: true, optional: false, required: false
  public get accountDisabled() {
    return this.getBooleanAttribute('account_disabled');
  }

  // car_license - computed: true, optional: false, required: false
  public get carLicense() {
    return this.getListAttribute('car_license');
  }

  // city - computed: true, optional: false, required: false
  public get city() {
    return this.getStringAttribute('city');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email_address - computed: true, optional: false, required: false
  public get emailAddress() {
    return this.getListAttribute('email_address');
  }

  // employee_number - computed: true, optional: false, required: false
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }

  // employee_type - computed: true, optional: false, required: false
  public get employeeType() {
    return this.getStringAttribute('employee_type');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // full_name - computed: true, optional: false, required: false
  public get fullName() {
    return this.getStringAttribute('full_name');
  }

  // gecos - computed: true, optional: false, required: false
  public get gecos() {
    return this.getStringAttribute('gecos');
  }

  // gid_number - computed: true, optional: false, required: false
  public get gidNumber() {
    return this.getNumberAttribute('gid_number');
  }

  // home_directory - computed: true, optional: false, required: false
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // initials - computed: true, optional: false, required: false
  public get initials() {
    return this.getStringAttribute('initials');
  }

  // job_title - computed: true, optional: false, required: false
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }

  // krb_password_expiration - computed: true, optional: false, required: false
  public get krbPasswordExpiration() {
    return this.getStringAttribute('krb_password_expiration');
  }

  // krb_principal_expiration - computed: true, optional: false, required: false
  public get krbPrincipalExpiration() {
    return this.getStringAttribute('krb_principal_expiration');
  }

  // krb_principal_name - computed: true, optional: false, required: false
  public get krbPrincipalName() {
    return this.getListAttribute('krb_principal_name');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // login_shell - computed: true, optional: false, required: false
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }

  // manager - computed: true, optional: false, required: false
  public get manager() {
    return this.getStringAttribute('manager');
  }

  // memberof_group - computed: true, optional: false, required: false
  public get memberofGroup() {
    return this.getListAttribute('memberof_group');
  }

  // memberof_hbacrule - computed: true, optional: false, required: false
  public get memberofHbacrule() {
    return this.getListAttribute('memberof_hbacrule');
  }

  // memberof_indirect_group - computed: true, optional: false, required: false
  public get memberofIndirectGroup() {
    return this.getListAttribute('memberof_indirect_group');
  }

  // memberof_indirect_hbacrule - computed: true, optional: false, required: false
  public get memberofIndirectHbacrule() {
    return this.getListAttribute('memberof_indirect_hbacrule');
  }

  // memberof_indirect_sudorule - computed: true, optional: false, required: false
  public get memberofIndirectSudorule() {
    return this.getListAttribute('memberof_indirect_sudorule');
  }

  // memberof_sudorule - computed: true, optional: false, required: false
  public get memberofSudorule() {
    return this.getListAttribute('memberof_sudorule');
  }

  // mobile_numbers - computed: true, optional: false, required: false
  public get mobileNumbers() {
    return this.getListAttribute('mobile_numbers');
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

  // organisation_unit - computed: true, optional: false, required: false
  public get organisationUnit() {
    return this.getStringAttribute('organisation_unit');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // preferred_language - computed: true, optional: false, required: false
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getStringAttribute('province');
  }

  // random_password - computed: true, optional: false, required: false
  public get randomPassword() {
    return this.getBooleanAttribute('random_password');
  }

  // ssh_public_key - computed: true, optional: false, required: false
  public get sshPublicKey() {
    return this.getListAttribute('ssh_public_key');
  }

  // street_address - computed: true, optional: false, required: false
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }

  // telephone_numbers - computed: true, optional: false, required: false
  public get telephoneNumbers() {
    return this.getListAttribute('telephone_numbers');
  }

  // uid_number - computed: true, optional: false, required: false
  public get uidNumber() {
    return this.getNumberAttribute('uid_number');
  }

  // userclass - computed: true, optional: false, required: false
  public get userclass() {
    return this.getListAttribute('userclass');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
