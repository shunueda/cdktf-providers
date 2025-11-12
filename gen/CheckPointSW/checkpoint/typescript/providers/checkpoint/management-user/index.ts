// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * User allowed locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#allowed_locations ManagementUser#allowed_locations}
  */
  readonly allowedLocations?: { [key: string]: string };
  /**
  * Authentication method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#authentication_method ManagementUser#authentication_method}
  */
  readonly authenticationMethod?: string;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#color ManagementUser#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#comments ManagementUser#comments}
  */
  readonly comments?: string;
  /**
  * Connect every day.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#connect_daily ManagementUser#connect_daily}
  */
  readonly connectDaily?: boolean | cdktf.IResolvable;
  /**
  * Days users allow to connect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#connect_on_days ManagementUser#connect_on_days}
  */
  readonly connectOnDays?: string[];
  /**
  * User email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#email ManagementUser#email}
  */
  readonly email?: string;
  /**
  * User encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#encryption ManagementUser#encryption}
  */
  readonly encryption?: { [key: string]: string };
  /**
  * Expiration date in format: yyyy-MM-dd.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#expiration_date ManagementUser#expiration_date}
  */
  readonly expirationDate?: string;
  /**
  * Allow users connect from hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#from_hour ManagementUser#from_hour}
  */
  readonly fromHour?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#id ManagementUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#ignore_errors ManagementUser#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#ignore_warnings ManagementUser#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#name ManagementUser#name}
  */
  readonly name: string;
  /**
  * Checkpoint password authentication method identified by the name or UID. Must be set when "authentication-method" was selected to be "Check Point Password".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#password ManagementUser#password}
  */
  readonly password?: string;
  /**
  * User phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#phone_number ManagementUser#phone_number}
  */
  readonly phoneNumber?: string;
  /**
  * RADIUS server object identified by the name or UID. Must be set when "authentication-method" was selected to be "RADIUS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#radius_server ManagementUser#radius_server}
  */
  readonly radiusServer?: string;
  /**
  * TACACS server object identified by the name or UID. Must be set when "authentication-method" was selected to be "TACACS".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#tacacs_server ManagementUser#tacacs_server}
  */
  readonly tacacsServer?: string;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#tags ManagementUser#tags}
  */
  readonly tags?: string[];
  /**
  * User template name or UID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#template ManagementUser#template}
  */
  readonly template?: string;
  /**
  * Allow users connect until hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#to_hour ManagementUser#to_hour}
  */
  readonly toHour?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user checkpoint_management_user}
*/
export class ManagementUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementUser to import
  * @param importFromId The id of the existing ManagementUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_user checkpoint_management_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementUserConfig
  */
  public constructor(scope: Construct, id: string, config: ManagementUserConfig) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_user',
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
    this._allowedLocations = config.allowedLocations;
    this._authenticationMethod = config.authenticationMethod;
    this._color = config.color;
    this._comments = config.comments;
    this._connectDaily = config.connectDaily;
    this._connectOnDays = config.connectOnDays;
    this._email = config.email;
    this._encryption = config.encryption;
    this._expirationDate = config.expirationDate;
    this._fromHour = config.fromHour;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._name = config.name;
    this._password = config.password;
    this._phoneNumber = config.phoneNumber;
    this._radiusServer = config.radiusServer;
    this._tacacsServer = config.tacacsServer;
    this._tags = config.tags;
    this._template = config.template;
    this._toHour = config.toHour;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_locations - computed: false, optional: true, required: false
  private _allowedLocations?: { [key: string]: string }; 
  public get allowedLocations() {
    return this.getStringMapAttribute('allowed_locations');
  }
  public set allowedLocations(value: { [key: string]: string }) {
    this._allowedLocations = value;
  }
  public resetAllowedLocations() {
    this._allowedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedLocationsInput() {
    return this._allowedLocations;
  }

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

  // connect_daily - computed: false, optional: true, required: false
  private _connectDaily?: boolean | cdktf.IResolvable; 
  public get connectDaily() {
    return this.getBooleanAttribute('connect_daily');
  }
  public set connectDaily(value: boolean | cdktf.IResolvable) {
    this._connectDaily = value;
  }
  public resetConnectDaily() {
    this._connectDaily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectDailyInput() {
    return this._connectDaily;
  }

  // connect_on_days - computed: false, optional: true, required: false
  private _connectOnDays?: string[]; 
  public get connectOnDays() {
    return cdktf.Fn.tolist(this.getListAttribute('connect_on_days'));
  }
  public set connectOnDays(value: string[]) {
    this._connectOnDays = value;
  }
  public resetConnectOnDays() {
    this._connectOnDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectOnDaysInput() {
    return this._connectOnDays;
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

  // encryption - computed: false, optional: true, required: false
  private _encryption?: { [key: string]: string }; 
  public get encryption() {
    return this.getStringMapAttribute('encryption');
  }
  public set encryption(value: { [key: string]: string }) {
    this._encryption = value;
  }
  public resetEncryption() {
    this._encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption;
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

  // from_hour - computed: false, optional: true, required: false
  private _fromHour?: string; 
  public get fromHour() {
    return this.getStringAttribute('from_hour');
  }
  public set fromHour(value: string) {
    this._fromHour = value;
  }
  public resetFromHour() {
    this._fromHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromHourInput() {
    return this._fromHour;
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

  // template - computed: false, optional: true, required: false
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // to_hour - computed: false, optional: true, required: false
  private _toHour?: string; 
  public get toHour() {
    return this.getStringAttribute('to_hour');
  }
  public set toHour(value: string) {
    this._toHour = value;
  }
  public resetToHour() {
    this._toHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toHourInput() {
    return this._toHour;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_locations: cdktf.hashMapper(cdktf.stringToTerraform)(this._allowedLocations),
      authentication_method: cdktf.stringToTerraform(this._authenticationMethod),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      connect_daily: cdktf.booleanToTerraform(this._connectDaily),
      connect_on_days: cdktf.listMapper(cdktf.stringToTerraform, false)(this._connectOnDays),
      email: cdktf.stringToTerraform(this._email),
      encryption: cdktf.hashMapper(cdktf.stringToTerraform)(this._encryption),
      expiration_date: cdktf.stringToTerraform(this._expirationDate),
      from_hour: cdktf.stringToTerraform(this._fromHour),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      name: cdktf.stringToTerraform(this._name),
      password: cdktf.stringToTerraform(this._password),
      phone_number: cdktf.stringToTerraform(this._phoneNumber),
      radius_server: cdktf.stringToTerraform(this._radiusServer),
      tacacs_server: cdktf.stringToTerraform(this._tacacsServer),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      template: cdktf.stringToTerraform(this._template),
      to_hour: cdktf.stringToTerraform(this._toHour),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_locations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._allowedLocations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
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
      connect_daily: {
        value: cdktf.booleanToHclTerraform(this._connectDaily),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connect_on_days: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._connectOnDays),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._encryption),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      expiration_date: {
        value: cdktf.stringToHclTerraform(this._expirationDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_hour: {
        value: cdktf.stringToHclTerraform(this._fromHour),
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
      template: {
        value: cdktf.stringToHclTerraform(this._template),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to_hour: {
        value: cdktf.stringToHclTerraform(this._toHour),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
