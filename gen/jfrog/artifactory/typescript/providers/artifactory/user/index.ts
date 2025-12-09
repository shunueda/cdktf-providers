// https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Optional, Default: false) When enabled, this user is an administrator with all the ensuing privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#admin User#admin}
  */
  readonly admin?: boolean | cdktf.IResolvable;
  /**
  * (Optional, Default: true) When enabled, this user can only access the system through the REST API. This option cannot be set if the user has Admin privileges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#disable_ui_access User#disable_ui_access}
  */
  readonly disableUiAccess?: boolean | cdktf.IResolvable;
  /**
  * Email for user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#email User#email}
  */
  readonly email: string;
  /**
  * List of groups this user is a part of. **Notes:** If this attribute is not specified then user's group membership is set to empty. User will not be part of default "readers" group automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#groups User#groups}
  */
  readonly groups?: string[];
  /**
  * (Optional, Default: false) When enabled, disables the fallback mechanism for using an internal password when external authentication (such as LDAP) is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#internal_password_disabled User#internal_password_disabled}
  */
  readonly internalPasswordDisabled?: boolean | cdktf.IResolvable;
  /**
  * Username for user. May contain lowercase letters, numbers and symbols: '.-_@' for self-hosted. For SaaS, '+' is also allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * (Optional, Sensitive) Password for the user. When omitted, a random password is generated using the following password policy: 12 characters with 1 digit, 1 symbol, with upper and lower case letters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Password policy to match JFrog Access to provide validation before API request.
  * 
  * ->Due to Terraform limitation with interpolated value, we can only validate interpolated value prior to making API requests. This means `terraform validate` or `terraform plan` will not return error if `password` does not meet `password_policy` criteria.
  * 
  * Default values: `uppercase=1`, `lowercase=1`, `special_char=0`, `digit=1`, `length=8`. Also see [Supported Access Configurations](https://jfrog.com/help/r/jfrog-installation-setup-documentation/supported-access-configurations) for more details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#password_policy User#password_policy}
  */
  readonly passwordPolicy?: UserPasswordPolicy;
  /**
  * (Optional, Default: true) When enabled, this user can update their profile details (except for the password. Only an administrator can update the password). There may be cases in which you want to leave this unset to prevent users from updating their profile. For example, a departmental user with a single password shared between all department members.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#profile_updatable User#profile_updatable}
  */
  readonly profileUpdatable?: boolean | cdktf.IResolvable;
}
export interface UserPasswordPolicy {
  /**
  * Minimum number of digits that the password must contain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#digit User#digit}
  */
  readonly digit?: number;
  /**
  * Minimum length of the password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#length User#length}
  */
  readonly length?: number;
  /**
  * Minimum number of lowercase letters that the password must contain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#lowercase User#lowercase}
  */
  readonly lowercase?: number;
  /**
  * Minimum number of special char that the password must contain. Special chars list: ``!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~``
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#special_char User#special_char}
  */
  readonly specialChar?: number;
  /**
  * Minimum number of uppercase letters that the password must contain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#uppercase User#uppercase}
  */
  readonly uppercase?: number;
}

export function userPasswordPolicyToTerraform(struct?: UserPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    digit: cdktf.numberToTerraform(struct!.digit),
    length: cdktf.numberToTerraform(struct!.length),
    lowercase: cdktf.numberToTerraform(struct!.lowercase),
    special_char: cdktf.numberToTerraform(struct!.specialChar),
    uppercase: cdktf.numberToTerraform(struct!.uppercase),
  }
}


export function userPasswordPolicyToHclTerraform(struct?: UserPasswordPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    digit: {
      value: cdktf.numberToHclTerraform(struct!.digit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lowercase: {
      value: cdktf.numberToHclTerraform(struct!.lowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    special_char: {
      value: cdktf.numberToHclTerraform(struct!.specialChar),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uppercase: {
      value: cdktf.numberToHclTerraform(struct!.uppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class UserPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserPasswordPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._digit !== undefined) {
      hasAnyValues = true;
      internalValueResult.digit = this._digit;
    }
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._lowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowercase = this._lowercase;
    }
    if (this._specialChar !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialChar = this._specialChar;
    }
    if (this._uppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.uppercase = this._uppercase;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserPasswordPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._digit = undefined;
      this._length = undefined;
      this._lowercase = undefined;
      this._specialChar = undefined;
      this._uppercase = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._digit = value.digit;
      this._length = value.length;
      this._lowercase = value.lowercase;
      this._specialChar = value.specialChar;
      this._uppercase = value.uppercase;
    }
  }

  // digit - computed: false, optional: true, required: false
  private _digit?: number; 
  public get digit() {
    return this.getNumberAttribute('digit');
  }
  public set digit(value: number) {
    this._digit = value;
  }
  public resetDigit() {
    this._digit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitInput() {
    return this._digit;
  }

  // length - computed: false, optional: true, required: false
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  public resetLength() {
    this._length = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // lowercase - computed: false, optional: true, required: false
  private _lowercase?: number; 
  public get lowercase() {
    return this.getNumberAttribute('lowercase');
  }
  public set lowercase(value: number) {
    this._lowercase = value;
  }
  public resetLowercase() {
    this._lowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowercaseInput() {
    return this._lowercase;
  }

  // special_char - computed: false, optional: true, required: false
  private _specialChar?: number; 
  public get specialChar() {
    return this.getNumberAttribute('special_char');
  }
  public set specialChar(value: number) {
    this._specialChar = value;
  }
  public resetSpecialChar() {
    this._specialChar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialCharInput() {
    return this._specialChar;
  }

  // uppercase - computed: false, optional: true, required: false
  private _uppercase?: number; 
  public get uppercase() {
    return this.getNumberAttribute('uppercase');
  }
  public set uppercase(value: number) {
    this._uppercase = value;
  }
  public resetUppercase() {
    this._uppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uppercaseInput() {
    return this._uppercase;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user artifactory_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "artifactory_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "artifactory_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jfrog/artifactory/12.11.1/docs/resources/user artifactory_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'artifactory_user',
      terraformGeneratorMetadata: {
        providerName: 'artifactory',
        providerVersion: '12.11.1',
        providerVersionConstraint: '12.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admin = config.admin;
    this._disableUiAccess = config.disableUiAccess;
    this._email = config.email;
    this._groups = config.groups;
    this._internalPasswordDisabled = config.internalPasswordDisabled;
    this._name = config.name;
    this._password = config.password;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._profileUpdatable = config.profileUpdatable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin - computed: true, optional: true, required: false
  private _admin?: boolean | cdktf.IResolvable; 
  public get admin() {
    return this.getBooleanAttribute('admin');
  }
  public set admin(value: boolean | cdktf.IResolvable) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // disable_ui_access - computed: true, optional: true, required: false
  private _disableUiAccess?: boolean | cdktf.IResolvable; 
  public get disableUiAccess() {
    return this.getBooleanAttribute('disable_ui_access');
  }
  public set disableUiAccess(value: boolean | cdktf.IResolvable) {
    this._disableUiAccess = value;
  }
  public resetDisableUiAccess() {
    this._disableUiAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUiAccessInput() {
    return this._disableUiAccess;
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

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_password_disabled - computed: true, optional: true, required: false
  private _internalPasswordDisabled?: boolean | cdktf.IResolvable; 
  public get internalPasswordDisabled() {
    return this.getBooleanAttribute('internal_password_disabled');
  }
  public set internalPasswordDisabled(value: boolean | cdktf.IResolvable) {
    this._internalPasswordDisabled = value;
  }
  public resetInternalPasswordDisabled() {
    this._internalPasswordDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalPasswordDisabledInput() {
    return this._internalPasswordDisabled;
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

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new UserPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: UserPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // profile_updatable - computed: true, optional: true, required: false
  private _profileUpdatable?: boolean | cdktf.IResolvable; 
  public get profileUpdatable() {
    return this.getBooleanAttribute('profile_updatable');
  }
  public set profileUpdatable(value: boolean | cdktf.IResolvable) {
    this._profileUpdatable = value;
  }
  public resetProfileUpdatable() {
    this._profileUpdatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUpdatableInput() {
    return this._profileUpdatable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admin: cdktf.booleanToTerraform(this._admin),
      disable_ui_access: cdktf.booleanToTerraform(this._disableUiAccess),
      email: cdktf.stringToTerraform(this._email),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      internal_password_disabled: cdktf.booleanToTerraform(this._internalPasswordDisabled),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_policy: userPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      profile_updatable: cdktf.booleanToTerraform(this._profileUpdatable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admin: {
        value: cdktf.booleanToHclTerraform(this._admin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_ui_access: {
        value: cdktf.booleanToHclTerraform(this._disableUiAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      internal_password_disabled: {
        value: cdktf.booleanToHclTerraform(this._internalPasswordDisabled),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_policy: {
        value: userPasswordPolicyToHclTerraform(this._passwordPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserPasswordPolicy",
      },
      profile_updatable: {
        value: cdktf.booleanToHclTerraform(this._profileUpdatable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
