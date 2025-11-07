// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InternalUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Account Name Alias will be used to send email notifications about password expiration. This field is only supported from ISE 3.2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#account_name_alias InternalUser#account_name_alias}
  */
  readonly accountNameAlias?: string;
  /**
  * Requires the user to change the password
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#change_password InternalUser#change_password}
  */
  readonly changePassword?: boolean | cdktf.IResolvable;
  /**
  * Key value map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#custom_attributes InternalUser#custom_attributes}
  */
  readonly customAttributes?: string;
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#description InternalUser#description}
  */
  readonly description?: string;
  /**
  * Email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#email InternalUser#email}
  */
  readonly email?: string;
  /**
  * This field is added in ISE 2.0 to support TACACS+
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#enable_password InternalUser#enable_password}
  */
  readonly enablePassword?: string;
  /**
  * Whether the user is enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#enabled InternalUser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * First name of the internal user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#first_name InternalUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Comma separated list of identity group IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#identity_groups InternalUser#identity_groups}
  */
  readonly identityGroups?: string;
  /**
  * Last name of the internal user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#last_name InternalUser#last_name}
  */
  readonly lastName?: string;
  /**
  * The name of the internal user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#name InternalUser#name}
  */
  readonly name: string;
  /**
  * The password of the internal user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#password InternalUser#password}
  */
  readonly password: string;
  /**
  * The ID store where the internal user's password is kept
  *   - Default value: `Internal Users`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#password_id_store InternalUser#password_id_store}
  */
  readonly passwordIdStore?: string;
  /**
  * Set to `true` to indicate the user password never expires. This will not apply to Users who are also ISE Admins. This field is only supported from ISE 3.2.
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#password_never_expires InternalUser#password_never_expires}
  */
  readonly passwordNeverExpires?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user ise_internal_user}
*/
export class InternalUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_internal_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InternalUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InternalUser to import
  * @param importFromId The id of the existing InternalUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InternalUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_internal_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/internal_user ise_internal_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InternalUserConfig
  */
  public constructor(scope: Construct, id: string, config: InternalUserConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_internal_user',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountNameAlias = config.accountNameAlias;
    this._changePassword = config.changePassword;
    this._customAttributes = config.customAttributes;
    this._description = config.description;
    this._email = config.email;
    this._enablePassword = config.enablePassword;
    this._enabled = config.enabled;
    this._firstName = config.firstName;
    this._identityGroups = config.identityGroups;
    this._lastName = config.lastName;
    this._name = config.name;
    this._password = config.password;
    this._passwordIdStore = config.passwordIdStore;
    this._passwordNeverExpires = config.passwordNeverExpires;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name_alias - computed: false, optional: true, required: false
  private _accountNameAlias?: string; 
  public get accountNameAlias() {
    return this.getStringAttribute('account_name_alias');
  }
  public set accountNameAlias(value: string) {
    this._accountNameAlias = value;
  }
  public resetAccountNameAlias() {
    this._accountNameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameAliasInput() {
    return this._accountNameAlias;
  }

  // change_password - computed: true, optional: true, required: false
  private _changePassword?: boolean | cdktf.IResolvable; 
  public get changePassword() {
    return this.getBooleanAttribute('change_password');
  }
  public set changePassword(value: boolean | cdktf.IResolvable) {
    this._changePassword = value;
  }
  public resetChangePassword() {
    this._changePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: string; 
  public get customAttributes() {
    return this.getStringAttribute('custom_attributes');
  }
  public set customAttributes(value: string) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
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

  // enable_password - computed: false, optional: true, required: false
  private _enablePassword?: string; 
  public get enablePassword() {
    return this.getStringAttribute('enable_password');
  }
  public set enablePassword(value: string) {
    this._enablePassword = value;
  }
  public resetEnablePassword() {
    this._enablePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasswordInput() {
    return this._enablePassword;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_groups - computed: false, optional: true, required: false
  private _identityGroups?: string; 
  public get identityGroups() {
    return this.getStringAttribute('identity_groups');
  }
  public set identityGroups(value: string) {
    this._identityGroups = value;
  }
  public resetIdentityGroups() {
    this._identityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityGroupsInput() {
    return this._identityGroups;
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

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_id_store - computed: true, optional: true, required: false
  private _passwordIdStore?: string; 
  public get passwordIdStore() {
    return this.getStringAttribute('password_id_store');
  }
  public set passwordIdStore(value: string) {
    this._passwordIdStore = value;
  }
  public resetPasswordIdStore() {
    this._passwordIdStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordIdStoreInput() {
    return this._passwordIdStore;
  }

  // password_never_expires - computed: true, optional: true, required: false
  private _passwordNeverExpires?: boolean | cdktf.IResolvable; 
  public get passwordNeverExpires() {
    return this.getBooleanAttribute('password_never_expires');
  }
  public set passwordNeverExpires(value: boolean | cdktf.IResolvable) {
    this._passwordNeverExpires = value;
  }
  public resetPasswordNeverExpires() {
    this._passwordNeverExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNeverExpiresInput() {
    return this._passwordNeverExpires;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_name_alias: cdktf.stringToTerraform(this._accountNameAlias),
      change_password: cdktf.booleanToTerraform(this._changePassword),
      custom_attributes: cdktf.stringToTerraform(this._customAttributes),
      description: cdktf.stringToTerraform(this._description),
      email: cdktf.stringToTerraform(this._email),
      enable_password: cdktf.stringToTerraform(this._enablePassword),
      enabled: cdktf.booleanToTerraform(this._enabled),
      first_name: cdktf.stringToTerraform(this._firstName),
      identity_groups: cdktf.stringToTerraform(this._identityGroups),
      last_name: cdktf.stringToTerraform(this._lastName),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      password_id_store: cdktf.stringToTerraform(this._passwordIdStore),
      password_never_expires: cdktf.booleanToTerraform(this._passwordNeverExpires),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name_alias: {
        value: cdktf.stringToHclTerraform(this._accountNameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password: {
        value: cdktf.booleanToHclTerraform(this._changePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_attributes: {
        value: cdktf.stringToHclTerraform(this._customAttributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      enable_password: {
        value: cdktf.stringToHclTerraform(this._enablePassword),
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
      identity_groups: {
        value: cdktf.stringToHclTerraform(this._identityGroups),
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
      password_id_store: {
        value: cdktf.stringToHclTerraform(this._passwordIdStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_never_expires: {
        value: cdktf.booleanToHclTerraform(this._passwordNeverExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
