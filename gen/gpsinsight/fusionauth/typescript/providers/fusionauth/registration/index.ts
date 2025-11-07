// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Id of the Application that this registration is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#application_id Registration#application_id}
  */
  readonly applicationId: string;
  /**
  * The authentication token that may be used in place of the User’s password when authenticating against this application represented by this registration. This parameter is ignored if generateAuthenticationToken is set to true and instead the value will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#authentication_token Registration#authentication_token}
  */
  readonly authenticationToken?: string;
  /**
  * An object that can hold any information about the User for this registration that should be persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#data Registration#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Determines if FusionAuth should generate an Authentication Token for this registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#generate_authentication_token Registration#generate_authentication_token}
  */
  readonly generateAuthenticationToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#id Registration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * An array of locale strings that give, in order, the User’s preferred languages for this registration. These are important for email templates and other localizable text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#preferred_languages Registration#preferred_languages}
  */
  readonly preferredLanguages?: string[];
  /**
  * The list of roles that the User has for this registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#roles Registration#roles}
  */
  readonly roles?: string[];
  /**
  * Indicates to FusionAuth that it should skip registration verification even if it is enabled for the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#skip_registration_validation Registration#skip_registration_validation}
  */
  readonly skipRegistrationValidation?: boolean | cdktf.IResolvable;
  /**
  * The User’s preferred timezone for this registration. The string will be in an IANA time zone format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#timezone Registration#timezone}
  */
  readonly timezone?: string;
  /**
  * The Id of the User that is registering for the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#user_id Registration#user_id}
  */
  readonly userId: string;
  /**
  * The username of the User for this registration only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#username Registration#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration fusionauth_registration}
*/
export class Registration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_registration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Registration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Registration to import
  * @param importFromId The id of the existing Registration that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Registration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_registration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/registration fusionauth_registration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistrationConfig
  */
  public constructor(scope: Construct, id: string, config: RegistrationConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_registration',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationId = config.applicationId;
    this._authenticationToken = config.authenticationToken;
    this._data = config.data;
    this._generateAuthenticationToken = config.generateAuthenticationToken;
    this._id = config.id;
    this._preferredLanguages = config.preferredLanguages;
    this._roles = config.roles;
    this._skipRegistrationValidation = config.skipRegistrationValidation;
    this._timezone = config.timezone;
    this._userId = config.userId;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // authentication_token - computed: true, optional: true, required: false
  private _authenticationToken?: string; 
  public get authenticationToken() {
    return this.getStringAttribute('authentication_token');
  }
  public set authenticationToken(value: string) {
    this._authenticationToken = value;
  }
  public resetAuthenticationToken() {
    this._authenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenInput() {
    return this._authenticationToken;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // generate_authentication_token - computed: false, optional: true, required: false
  private _generateAuthenticationToken?: boolean | cdktf.IResolvable; 
  public get generateAuthenticationToken() {
    return this.getBooleanAttribute('generate_authentication_token');
  }
  public set generateAuthenticationToken(value: boolean | cdktf.IResolvable) {
    this._generateAuthenticationToken = value;
  }
  public resetGenerateAuthenticationToken() {
    this._generateAuthenticationToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateAuthenticationTokenInput() {
    return this._generateAuthenticationToken;
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

  // preferred_languages - computed: false, optional: true, required: false
  private _preferredLanguages?: string[]; 
  public get preferredLanguages() {
    return cdktf.Fn.tolist(this.getListAttribute('preferred_languages'));
  }
  public set preferredLanguages(value: string[]) {
    this._preferredLanguages = value;
  }
  public resetPreferredLanguages() {
    this._preferredLanguages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguagesInput() {
    return this._preferredLanguages;
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

  // skip_registration_validation - computed: false, optional: true, required: false
  private _skipRegistrationValidation?: boolean | cdktf.IResolvable; 
  public get skipRegistrationValidation() {
    return this.getBooleanAttribute('skip_registration_validation');
  }
  public set skipRegistrationValidation(value: boolean | cdktf.IResolvable) {
    this._skipRegistrationValidation = value;
  }
  public resetSkipRegistrationValidation() {
    this._skipRegistrationValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipRegistrationValidationInput() {
    return this._skipRegistrationValidation;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_id: cdktf.stringToTerraform(this._applicationId),
      authentication_token: cdktf.stringToTerraform(this._authenticationToken),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      generate_authentication_token: cdktf.booleanToTerraform(this._generateAuthenticationToken),
      id: cdktf.stringToTerraform(this._id),
      preferred_languages: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredLanguages),
      roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._roles),
      skip_registration_validation: cdktf.booleanToTerraform(this._skipRegistrationValidation),
      timezone: cdktf.stringToTerraform(this._timezone),
      user_id: cdktf.stringToTerraform(this._userId),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_token: {
        value: cdktf.stringToHclTerraform(this._authenticationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      generate_authentication_token: {
        value: cdktf.booleanToHclTerraform(this._generateAuthenticationToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_languages: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredLanguages),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._roles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      skip_registration_validation: {
        value: cdktf.booleanToHclTerraform(this._skipRegistrationValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
