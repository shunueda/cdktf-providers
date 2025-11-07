// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StageAuthenticatorSmsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#account_sid StageAuthenticatorSms#account_sid}
  */
  readonly accountSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#auth StageAuthenticatorSms#auth}
  */
  readonly auth: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#auth_password StageAuthenticatorSms#auth_password}
  */
  readonly authPassword?: string;
  /**
  * Allowed values:
  *   - `basic`
  *   - `bearer`
  *  Defaults to `basic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#auth_type StageAuthenticatorSms#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#configure_flow StageAuthenticatorSms#configure_flow}
  */
  readonly configureFlow?: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#friendly_name StageAuthenticatorSms#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#from_number StageAuthenticatorSms#from_number}
  */
  readonly fromNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#id StageAuthenticatorSms#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#mapping StageAuthenticatorSms#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#name StageAuthenticatorSms#name}
  */
  readonly name: string;
  /**
  * Allowed values:
  *   - `twilio`
  *   - `generic`
  *  Defaults to `twilio`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#sms_provider StageAuthenticatorSms#sms_provider}
  */
  readonly smsProvider?: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#verify_only StageAuthenticatorSms#verify_only}
  */
  readonly verifyOnly?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms authentik_stage_authenticator_sms}
*/
export class StageAuthenticatorSms extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_stage_authenticator_sms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StageAuthenticatorSms resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StageAuthenticatorSms to import
  * @param importFromId The id of the existing StageAuthenticatorSms that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StageAuthenticatorSms to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_stage_authenticator_sms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/stage_authenticator_sms authentik_stage_authenticator_sms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StageAuthenticatorSmsConfig
  */
  public constructor(scope: Construct, id: string, config: StageAuthenticatorSmsConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_stage_authenticator_sms',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountSid = config.accountSid;
    this._auth = config.auth;
    this._authPassword = config.authPassword;
    this._authType = config.authType;
    this._configureFlow = config.configureFlow;
    this._friendlyName = config.friendlyName;
    this._fromNumber = config.fromNumber;
    this._id = config.id;
    this._mapping = config.mapping;
    this._name = config.name;
    this._smsProvider = config.smsProvider;
    this._verifyOnly = config.verifyOnly;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_sid - computed: false, optional: false, required: true
  private _accountSid?: string; 
  public get accountSid() {
    return this.getStringAttribute('account_sid');
  }
  public set accountSid(value: string) {
    this._accountSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountSidInput() {
    return this._accountSid;
  }

  // auth - computed: false, optional: false, required: true
  private _auth?: string; 
  public get auth() {
    return this.getStringAttribute('auth');
  }
  public set auth(value: string) {
    this._auth = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // configure_flow - computed: false, optional: true, required: false
  private _configureFlow?: string; 
  public get configureFlow() {
    return this.getStringAttribute('configure_flow');
  }
  public set configureFlow(value: string) {
    this._configureFlow = value;
  }
  public resetConfigureFlow() {
    this._configureFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureFlowInput() {
    return this._configureFlow;
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
  }

  // from_number - computed: false, optional: false, required: true
  private _fromNumber?: string; 
  public get fromNumber() {
    return this.getStringAttribute('from_number');
  }
  public set fromNumber(value: string) {
    this._fromNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromNumberInput() {
    return this._fromNumber;
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

  // mapping - computed: false, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
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

  // sms_provider - computed: false, optional: true, required: false
  private _smsProvider?: string; 
  public get smsProvider() {
    return this.getStringAttribute('sms_provider');
  }
  public set smsProvider(value: string) {
    this._smsProvider = value;
  }
  public resetSmsProvider() {
    this._smsProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsProviderInput() {
    return this._smsProvider;
  }

  // verify_only - computed: false, optional: true, required: false
  private _verifyOnly?: boolean | cdktf.IResolvable; 
  public get verifyOnly() {
    return this.getBooleanAttribute('verify_only');
  }
  public set verifyOnly(value: boolean | cdktf.IResolvable) {
    this._verifyOnly = value;
  }
  public resetVerifyOnly() {
    this._verifyOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyOnlyInput() {
    return this._verifyOnly;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_sid: cdktf.stringToTerraform(this._accountSid),
      auth: cdktf.stringToTerraform(this._auth),
      auth_password: cdktf.stringToTerraform(this._authPassword),
      auth_type: cdktf.stringToTerraform(this._authType),
      configure_flow: cdktf.stringToTerraform(this._configureFlow),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      from_number: cdktf.stringToTerraform(this._fromNumber),
      id: cdktf.stringToTerraform(this._id),
      mapping: cdktf.stringToTerraform(this._mapping),
      name: cdktf.stringToTerraform(this._name),
      sms_provider: cdktf.stringToTerraform(this._smsProvider),
      verify_only: cdktf.booleanToTerraform(this._verifyOnly),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_sid: {
        value: cdktf.stringToHclTerraform(this._accountSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth: {
        value: cdktf.stringToHclTerraform(this._auth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_password: {
        value: cdktf.stringToHclTerraform(this._authPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configure_flow: {
        value: cdktf.stringToHclTerraform(this._configureFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_number: {
        value: cdktf.stringToHclTerraform(this._fromNumber),
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
      mapping: {
        value: cdktf.stringToHclTerraform(this._mapping),
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
      sms_provider: {
        value: cdktf.stringToHclTerraform(this._smsProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_only: {
        value: cdktf.booleanToHclTerraform(this._verifyOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
