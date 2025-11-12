// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementAdministratorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#authentication_method ManagementAdministrator#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#color ManagementAdministrator#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#comments ManagementAdministrator#comments}
  */
  readonly comments?: string;
  /**
  * Administrator email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#email ManagementAdministrator#email}
  */
  readonly email?: string;
  /**
  * Format: YYYY-MM-DD, YYYY-mm-ddThh:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#expiration_date ManagementAdministrator#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#id ManagementAdministrator#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#ignore_errors ManagementAdministrator#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#ignore_warnings ManagementAdministrator#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Administrator multi-domain profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#multi_domain_profile ManagementAdministrator#multi_domain_profile}
  */
  readonly multiDomainProfile?: string;
  /**
  * True if administrator must change password on the next login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#must_change_password ManagementAdministrator#must_change_password}
  */
  readonly mustChangePassword?: boolean | cdktf.IResolvable;
  /**
  * Object name. Should be unique in the domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#name ManagementAdministrator#name}
  */
  readonly name: string;
  /**
  * Administrator password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#password ManagementAdministrator#password}
  */
  readonly password?: string;
  /**
  * Administrator password hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#password_hash ManagementAdministrator#password_hash}
  */
  readonly passwordHash?: string;
  /**
  * Administrator phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#phone_number ManagementAdministrator#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * RADIUS server object identified by the name or UID. Must be set when "authentication-method" was selected to be "RADIUS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#radius_server ManagementAdministrator#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * TACACS server object identified by the name or UID. Must be set when "authentication-method" was selected to be "TACACS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#tacacs_server ManagementAdministrator#tacacs_server}
  */
  readonly tacacsServer?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#tags ManagementAdministrator#tags}
  */
  readonly tags?: string[];
  /**
  * permissions_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#permissions_profile ManagementAdministrator#permissions_profile}
  */
  readonly permissionsProfile?: ManagementAdministratorPermissionsProfile[] | cdktf.IResolvable;
}
export interface ManagementAdministratorPermissionsProfile {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#domain ManagementAdministrator#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#profile ManagementAdministrator#profile}
  */
  readonly profile: string;
}

export function managementAdministratorPermissionsProfileToTerraform(struct?: ManagementAdministratorPermissionsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function managementAdministratorPermissionsProfileToHclTerraform(struct?: ManagementAdministratorPermissionsProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ManagementAdministratorPermissionsProfileOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ManagementAdministratorPermissionsProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ManagementAdministratorPermissionsProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._profile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._profile = value.profile;
    }
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

export class ManagementAdministratorPermissionsProfileList extends cdktf.ComplexList {
  public internalValue? : ManagementAdministratorPermissionsProfile[] | cdktf.IResolvable

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
  public get(index: number): ManagementAdministratorPermissionsProfileOutputReference {
    return new ManagementAdministratorPermissionsProfileOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator checkpoint_management_administrator}
*/
export class ManagementAdministrator extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_administrator";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementAdministrator resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementAdministrator to import
  * @param importFromId The id of the existing ManagementAdministrator that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementAdministrator to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_administrator", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_administrator checkpoint_management_administrator} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementAdministratorConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementAdministratorConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_administrator',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authenticationMethod = config.authenticationMethod;
    this._color = config.color;
    this._comments = config.comments;
    this._email = config.email;
    this._expirationDate = config.expirationDate;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._multiDomainProfile = config.multiDomainProfile;
    this._mustChangePassword = config.mustChangePassword;
    this._name = config.name;
    this._password = config.password;
    this._passwordHash = config.passwordHash;
    this._phoneNumber = config.phoneNumber;
    this._radiusServer = config.radiusServer;
    this._tacacsServer = config.tacacsServer;
    this._tags = config.tags;
    this._permissionsProfile.internalValue = config.permissionsProfile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_method - computed: false, optional: true, required: false
  private _authenticationMethod?: string; 
  public get authenticationMethod() {
    return this.getStringAttribute('authentication_method');
  }
  public set authenticationMethod(value: string) {
    this._authenticationMethod = value;
  }
  public resetAuthenticationMethod() {
    this._authenticationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodInput() {
    return this._authenticationMethod;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

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

  // expiration_date - computed: false, optional: true, required: false
  private _expirationDate?: string; 
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }
  public set expirationDate(value: string) {
    this._expirationDate = value;
  }
  public resetExpirationDate() {
    this._expirationDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationDateInput() {
    return this._expirationDate;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // multi_domain_profile - computed: false, optional: true, required: false
  private _multiDomainProfile?: string; 
  public get multiDomainProfile() {
    return this.getStringAttribute('multi_domain_profile');
  }
  public set multiDomainProfile(value: string) {
    this._multiDomainProfile = value;
  }
  public resetMultiDomainProfile() {
    this._multiDomainProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDomainProfileInput() {
    return this._multiDomainProfile;
  }

  // must_change_password - computed: false, optional: true, required: false
  private _mustChangePassword?: boolean | cdktf.IResolvable; 
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
  }
  public set mustChangePassword(value: boolean | cdktf.IResolvable) {
    this._mustChangePassword = value;
  }
  public resetMustChangePassword() {
    this._mustChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordInput() {
    return this._mustChangePassword;
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

  // password - computed: false, optional: true, required: false
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

  // password_hash - computed: false, optional: true, required: false
  private _passwordHash?: string; 
  public get passwordHash() {
    return this.getStringAttribute('password_hash');
  }
  public set passwordHash(value: string) {
    this._passwordHash = value;
  }
  public resetPasswordHash() {
    this._passwordHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordHashInput() {
    return this._passwordHash;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: string; 
  public get phoneNumber() {
    return this.getStringAttribute('phone_number');
  }
  public set phoneNumber(value: string) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // radius_server - computed: false, optional: true, required: false
  private _radiusServer?: string; 
  public get radiusServer() {
    return this.getStringAttribute('radius_server');
  }
  public set radiusServer(value: string) {
    this._radiusServer = value;
  }
  public resetRadiusServer() {
    this._radiusServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusServerInput() {
    return this._radiusServer;
  }

  // sic_name - computed: true, optional: false, required: false
  public get sicName() {
    return this.getStringAttribute('sic_name');
  }

  // tacacs_server - computed: false, optional: true, required: false
  private _tacacsServer?: string; 
  public get tacacsServer() {
    return this.getStringAttribute('tacacs_server');
  }
  public set tacacsServer(value: string) {
    this._tacacsServer = value;
  }
  public resetTacacsServer() {
    this._tacacsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsServerInput() {
    return this._tacacsServer;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // permissions_profile - computed: false, optional: true, required: false
  private _permissionsProfile = new ManagementAdministratorPermissionsProfileList(this, "permissions_profile", false);
  public get permissionsProfile() {
    return this._permissionsProfile;
  }
  public putPermissionsProfile(value: ManagementAdministratorPermissionsProfile[] | cdktf.IResolvable) {
    this._permissionsProfile.internalValue = value;
  }
  public resetPermissionsProfile() {
    this._permissionsProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsProfileInput() {
    return this._permissionsProfile.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      email: cdktf.stringToTerraform(this._email),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      multi_domain_profile: cdktf.stringToTerraform(this._multiDomainProfile),
      must_change_password: cdktf.booleanToTerraform(this._mustChangePassword),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_hash: cdktf.stringToTerraform(this._passwordHash),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      tacacs_server: cdktf.stringToTerraform(this._tacacsServer),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      permissions_profile: cdktf.listMapper(managementAdministratorPermissionsProfileToTerraform, true)(this._permissionsProfile.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_method: {
        value: cdktf.stringToHclTerraform(this._authenticationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
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
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
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
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_domain_profile: {
        value: cdktf.stringToHclTerraform(this._multiDomainProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      must_change_password: {
        value: cdktf.booleanToHclTerraform(this._mustChangePassword),
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
      password_hash: {
        value: cdktf.stringToHclTerraform(this._passwordHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone_number: {
        value: cdktf.stringToHclTerraform(this._phoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radius_server: {
        value: cdktf.stringToHclTerraform(this._radiusServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacacs_server: {
        value: cdktf.stringToHclTerraform(this._tacacsServer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      permissions_profile: {
        value: cdktf.listMapperHcl(managementAdministratorPermissionsProfileToHclTerraform, true)(this._permissionsProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ManagementAdministratorPermissionsProfileList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
