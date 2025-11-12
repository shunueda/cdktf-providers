// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwingateUsersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Returns only users that exactly match this email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#email DataTwingateUsers#email}
  */
  readonly email?: string;
  /**
  * Match when the value exist in the email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#email_contains DataTwingateUsers#email_contains}
  */
  readonly emailContains?: string;
  /**
  * Match when the value does not exist in the email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#email_exclude DataTwingateUsers#email_exclude}
  */
  readonly emailExclude?: string;
  /**
  * The email of the user must start with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#email_prefix DataTwingateUsers#email_prefix}
  */
  readonly emailPrefix?: string;
  /**
  * The regular expression match of the email of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#email_regexp DataTwingateUsers#email_regexp}
  */
  readonly emailRegexp?: string;
  /**
  * The email of the user must end with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#email_suffix DataTwingateUsers#email_suffix}
  */
  readonly emailSuffix?: string;
  /**
  * Returns only users that exactly match the first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#first_name DataTwingateUsers#first_name}
  */
  readonly firstName?: string;
  /**
  * Match when the value exist in the first name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#first_name_contains DataTwingateUsers#first_name_contains}
  */
  readonly firstNameContains?: string;
  /**
  * Match when the value does not exist in the first name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#first_name_exclude DataTwingateUsers#first_name_exclude}
  */
  readonly firstNameExclude?: string;
  /**
  * The first name of the user must start with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#first_name_prefix DataTwingateUsers#first_name_prefix}
  */
  readonly firstNamePrefix?: string;
  /**
  * The regular expression match of the first name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#first_name_regexp DataTwingateUsers#first_name_regexp}
  */
  readonly firstNameRegexp?: string;
  /**
  * The first name of the user must end with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#first_name_suffix DataTwingateUsers#first_name_suffix}
  */
  readonly firstNameSuffix?: string;
  /**
  * Returns only users that exactly match the last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#last_name DataTwingateUsers#last_name}
  */
  readonly lastName?: string;
  /**
  * Match when the value exist in the last name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#last_name_contains DataTwingateUsers#last_name_contains}
  */
  readonly lastNameContains?: string;
  /**
  * Match when the value does not exist in the last name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#last_name_exclude DataTwingateUsers#last_name_exclude}
  */
  readonly lastNameExclude?: string;
  /**
  * The last name of the user must start with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#last_name_prefix DataTwingateUsers#last_name_prefix}
  */
  readonly lastNamePrefix?: string;
  /**
  * The regular expression match of the last name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#last_name_regexp DataTwingateUsers#last_name_regexp}
  */
  readonly lastNameRegexp?: string;
  /**
  * The last name of the user must end with the value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#last_name_suffix DataTwingateUsers#last_name_suffix}
  */
  readonly lastNameSuffix?: string;
  /**
  * Returns users that match a list of roles. Valid roles: `ADMIN`, `DEVOPS`, `SUPPORT`, `MEMBER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#roles DataTwingateUsers#roles}
  */
  readonly roles?: string[];
}
export interface DataTwingateUsersUsers {
}

export function dataTwingateUsersUsersToTerraform(struct?: DataTwingateUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateUsersUsersToHclTerraform(struct?: DataTwingateUsersUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateUsersUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataTwingateUsersUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateUsersUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataTwingateUsersUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataTwingateUsersUsersOutputReference {
    return new DataTwingateUsersUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users twingate_users}
*/
export class DataTwingateUsers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_users";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwingateUsers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwingateUsers to import
  * @param importFromId The id of the existing DataTwingateUsers that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwingateUsers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_users", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/users twingate_users} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwingateUsersConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTwingateUsersConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'twingate_users',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0',
        providerVersionConstraint: '3.5.0'
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
    this._emailContains = config.emailContains;
    this._emailExclude = config.emailExclude;
    this._emailPrefix = config.emailPrefix;
    this._emailRegexp = config.emailRegexp;
    this._emailSuffix = config.emailSuffix;
    this._firstName = config.firstName;
    this._firstNameContains = config.firstNameContains;
    this._firstNameExclude = config.firstNameExclude;
    this._firstNamePrefix = config.firstNamePrefix;
    this._firstNameRegexp = config.firstNameRegexp;
    this._firstNameSuffix = config.firstNameSuffix;
    this._lastName = config.lastName;
    this._lastNameContains = config.lastNameContains;
    this._lastNameExclude = config.lastNameExclude;
    this._lastNamePrefix = config.lastNamePrefix;
    this._lastNameRegexp = config.lastNameRegexp;
    this._lastNameSuffix = config.lastNameSuffix;
    this._roles = config.roles;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // email_contains - computed: false, optional: true, required: false
  private _emailContains?: string; 
  public get emailContains() {
    return this.getStringAttribute('email_contains');
  }
  public set emailContains(value: string) {
    this._emailContains = value;
  }
  public resetEmailContains() {
    this._emailContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailContainsInput() {
    return this._emailContains;
  }

  // email_exclude - computed: false, optional: true, required: false
  private _emailExclude?: string; 
  public get emailExclude() {
    return this.getStringAttribute('email_exclude');
  }
  public set emailExclude(value: string) {
    this._emailExclude = value;
  }
  public resetEmailExclude() {
    this._emailExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailExcludeInput() {
    return this._emailExclude;
  }

  // email_prefix - computed: false, optional: true, required: false
  private _emailPrefix?: string; 
  public get emailPrefix() {
    return this.getStringAttribute('email_prefix');
  }
  public set emailPrefix(value: string) {
    this._emailPrefix = value;
  }
  public resetEmailPrefix() {
    this._emailPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailPrefixInput() {
    return this._emailPrefix;
  }

  // email_regexp - computed: false, optional: true, required: false
  private _emailRegexp?: string; 
  public get emailRegexp() {
    return this.getStringAttribute('email_regexp');
  }
  public set emailRegexp(value: string) {
    this._emailRegexp = value;
  }
  public resetEmailRegexp() {
    this._emailRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailRegexpInput() {
    return this._emailRegexp;
  }

  // email_suffix - computed: false, optional: true, required: false
  private _emailSuffix?: string; 
  public get emailSuffix() {
    return this.getStringAttribute('email_suffix');
  }
  public set emailSuffix(value: string) {
    this._emailSuffix = value;
  }
  public resetEmailSuffix() {
    this._emailSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSuffixInput() {
    return this._emailSuffix;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // first_name_contains - computed: false, optional: true, required: false
  private _firstNameContains?: string; 
  public get firstNameContains() {
    return this.getStringAttribute('first_name_contains');
  }
  public set firstNameContains(value: string) {
    this._firstNameContains = value;
  }
  public resetFirstNameContains() {
    this._firstNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameContainsInput() {
    return this._firstNameContains;
  }

  // first_name_exclude - computed: false, optional: true, required: false
  private _firstNameExclude?: string; 
  public get firstNameExclude() {
    return this.getStringAttribute('first_name_exclude');
  }
  public set firstNameExclude(value: string) {
    this._firstNameExclude = value;
  }
  public resetFirstNameExclude() {
    this._firstNameExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameExcludeInput() {
    return this._firstNameExclude;
  }

  // first_name_prefix - computed: false, optional: true, required: false
  private _firstNamePrefix?: string; 
  public get firstNamePrefix() {
    return this.getStringAttribute('first_name_prefix');
  }
  public set firstNamePrefix(value: string) {
    this._firstNamePrefix = value;
  }
  public resetFirstNamePrefix() {
    this._firstNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNamePrefixInput() {
    return this._firstNamePrefix;
  }

  // first_name_regexp - computed: false, optional: true, required: false
  private _firstNameRegexp?: string; 
  public get firstNameRegexp() {
    return this.getStringAttribute('first_name_regexp');
  }
  public set firstNameRegexp(value: string) {
    this._firstNameRegexp = value;
  }
  public resetFirstNameRegexp() {
    this._firstNameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameRegexpInput() {
    return this._firstNameRegexp;
  }

  // first_name_suffix - computed: false, optional: true, required: false
  private _firstNameSuffix?: string; 
  public get firstNameSuffix() {
    return this.getStringAttribute('first_name_suffix');
  }
  public set firstNameSuffix(value: string) {
    this._firstNameSuffix = value;
  }
  public resetFirstNameSuffix() {
    this._firstNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameSuffixInput() {
    return this._firstNameSuffix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // last_name_contains - computed: false, optional: true, required: false
  private _lastNameContains?: string; 
  public get lastNameContains() {
    return this.getStringAttribute('last_name_contains');
  }
  public set lastNameContains(value: string) {
    this._lastNameContains = value;
  }
  public resetLastNameContains() {
    this._lastNameContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameContainsInput() {
    return this._lastNameContains;
  }

  // last_name_exclude - computed: false, optional: true, required: false
  private _lastNameExclude?: string; 
  public get lastNameExclude() {
    return this.getStringAttribute('last_name_exclude');
  }
  public set lastNameExclude(value: string) {
    this._lastNameExclude = value;
  }
  public resetLastNameExclude() {
    this._lastNameExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameExcludeInput() {
    return this._lastNameExclude;
  }

  // last_name_prefix - computed: false, optional: true, required: false
  private _lastNamePrefix?: string; 
  public get lastNamePrefix() {
    return this.getStringAttribute('last_name_prefix');
  }
  public set lastNamePrefix(value: string) {
    this._lastNamePrefix = value;
  }
  public resetLastNamePrefix() {
    this._lastNamePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNamePrefixInput() {
    return this._lastNamePrefix;
  }

  // last_name_regexp - computed: false, optional: true, required: false
  private _lastNameRegexp?: string; 
  public get lastNameRegexp() {
    return this.getStringAttribute('last_name_regexp');
  }
  public set lastNameRegexp(value: string) {
    this._lastNameRegexp = value;
  }
  public resetLastNameRegexp() {
    this._lastNameRegexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameRegexpInput() {
    return this._lastNameRegexp;
  }

  // last_name_suffix - computed: false, optional: true, required: false
  private _lastNameSuffix?: string; 
  public get lastNameSuffix() {
    return this.getStringAttribute('last_name_suffix');
  }
  public set lastNameSuffix(value: string) {
    this._lastNameSuffix = value;
  }
  public resetLastNameSuffix() {
    this._lastNameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameSuffixInput() {
    return this._lastNameSuffix;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return cdktf.Fn.tolist(this.getListAttribute('roles'));
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataTwingateUsersUsersList(this, "users", false);
  public get users() {
    return this._users;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      email_contains: cdktf.stringToTerraform(this._emailContains),
      email_exclude: cdktf.stringToTerraform(this._emailExclude),
      email_prefix: cdktf.stringToTerraform(this._emailPrefix),
      email_regexp: cdktf.stringToTerraform(this._emailRegexp),
      email_suffix: cdktf.stringToTerraform(this._emailSuffix),
      first_name: cdktf.stringToTerraform(this._firstName),
      first_name_contains: cdktf.stringToTerraform(this._firstNameContains),
      first_name_exclude: cdktf.stringToTerraform(this._firstNameExclude),
      first_name_prefix: cdktf.stringToTerraform(this._firstNamePrefix),
      first_name_regexp: cdktf.stringToTerraform(this._firstNameRegexp),
      first_name_suffix: cdktf.stringToTerraform(this._firstNameSuffix),
      last_name: cdktf.stringToTerraform(this._lastName),
      last_name_contains: cdktf.stringToTerraform(this._lastNameContains),
      last_name_exclude: cdktf.stringToTerraform(this._lastNameExclude),
      last_name_prefix: cdktf.stringToTerraform(this._lastNamePrefix),
      last_name_regexp: cdktf.stringToTerraform(this._lastNameRegexp),
      last_name_suffix: cdktf.stringToTerraform(this._lastNameSuffix),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
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
      email_contains: {
        value: cdktf.stringToHclTerraform(this._emailContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_exclude: {
        value: cdktf.stringToHclTerraform(this._emailExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_prefix: {
        value: cdktf.stringToHclTerraform(this._emailPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_regexp: {
        value: cdktf.stringToHclTerraform(this._emailRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_suffix: {
        value: cdktf.stringToHclTerraform(this._emailSuffix),
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
      first_name_contains: {
        value: cdktf.stringToHclTerraform(this._firstNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name_exclude: {
        value: cdktf.stringToHclTerraform(this._firstNameExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name_prefix: {
        value: cdktf.stringToHclTerraform(this._firstNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name_regexp: {
        value: cdktf.stringToHclTerraform(this._firstNameRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name_suffix: {
        value: cdktf.stringToHclTerraform(this._firstNameSuffix),
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
      last_name_contains: {
        value: cdktf.stringToHclTerraform(this._lastNameContains),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name_exclude: {
        value: cdktf.stringToHclTerraform(this._lastNameExclude),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name_prefix: {
        value: cdktf.stringToHclTerraform(this._lastNamePrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name_regexp: {
        value: cdktf.stringToHclTerraform(this._lastNameRegexp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name_suffix: {
        value: cdktf.stringToHclTerraform(this._lastNameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
