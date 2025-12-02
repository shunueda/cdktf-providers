// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyMfaDefaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#duo PolicyMfaDefault#duo}
  */
  readonly duo?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#external_idp PolicyMfaDefault#external_idp}
  */
  readonly externalIdp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#external_idps PolicyMfaDefault#external_idps}
  */
  readonly externalIdps?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#fido_u2f PolicyMfaDefault#fido_u2f}
  */
  readonly fidoU2F?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#fido_webauthn PolicyMfaDefault#fido_webauthn}
  */
  readonly fidoWebauthn?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#google_otp PolicyMfaDefault#google_otp}
  */
  readonly googleOtp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#hotp PolicyMfaDefault#hotp}
  */
  readonly hotp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#id PolicyMfaDefault#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Is the policy using Okta Identity Engine (OIE) with authenticators instead of factors?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#is_oie PolicyMfaDefault#is_oie}
  */
  readonly isOie?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_call PolicyMfaDefault#okta_call}
  */
  readonly oktaCall?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_email PolicyMfaDefault#okta_email}
  */
  readonly oktaEmail?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_otp PolicyMfaDefault#okta_otp}
  */
  readonly oktaOtp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_password PolicyMfaDefault#okta_password}
  */
  readonly oktaPassword?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_push PolicyMfaDefault#okta_push}
  */
  readonly oktaPush?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_question PolicyMfaDefault#okta_question}
  */
  readonly oktaQuestion?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_sms PolicyMfaDefault#okta_sms}
  */
  readonly oktaSms?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#okta_verify PolicyMfaDefault#okta_verify}
  */
  readonly oktaVerify?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#onprem_mfa PolicyMfaDefault#onprem_mfa}
  */
  readonly onpremMfa?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#phone_number PolicyMfaDefault#phone_number}
  */
  readonly phoneNumber?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#rsa_token PolicyMfaDefault#rsa_token}
  */
  readonly rsaToken?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#security_question PolicyMfaDefault#security_question}
  */
  readonly securityQuestion?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#smart_card_idp PolicyMfaDefault#smart_card_idp}
  */
  readonly smartCardIdp?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#symantec_vip PolicyMfaDefault#symantec_vip}
  */
  readonly symantecVip?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#webauthn PolicyMfaDefault#webauthn}
  */
  readonly webauthn?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#yubikey_token PolicyMfaDefault#yubikey_token}
  */
  readonly yubikeyToken?: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default okta_policy_mfa_default}
*/
export class PolicyMfaDefault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_policy_mfa_default";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyMfaDefault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyMfaDefault to import
  * @param importFromId The id of the existing PolicyMfaDefault that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyMfaDefault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_policy_mfa_default", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/resources/policy_mfa_default okta_policy_mfa_default} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyMfaDefaultConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PolicyMfaDefaultConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta_policy_mfa_default',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._duo = config.duo;
    this._externalIdp = config.externalIdp;
    this._externalIdps = config.externalIdps;
    this._fidoU2F = config.fidoU2F;
    this._fidoWebauthn = config.fidoWebauthn;
    this._googleOtp = config.googleOtp;
    this._hotp = config.hotp;
    this._id = config.id;
    this._isOie = config.isOie;
    this._oktaCall = config.oktaCall;
    this._oktaEmail = config.oktaEmail;
    this._oktaOtp = config.oktaOtp;
    this._oktaPassword = config.oktaPassword;
    this._oktaPush = config.oktaPush;
    this._oktaQuestion = config.oktaQuestion;
    this._oktaSms = config.oktaSms;
    this._oktaVerify = config.oktaVerify;
    this._onpremMfa = config.onpremMfa;
    this._phoneNumber = config.phoneNumber;
    this._rsaToken = config.rsaToken;
    this._securityQuestion = config.securityQuestion;
    this._smartCardIdp = config.smartCardIdp;
    this._symantecVip = config.symantecVip;
    this._webauthn = config.webauthn;
    this._yubikeyToken = config.yubikeyToken;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_included_group_id - computed: true, optional: false, required: false
  public get defaultIncludedGroupId() {
    return this.getStringAttribute('default_included_group_id');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duo - computed: false, optional: true, required: false
  private _duo?: { [key: string]: string }; 
  public get duo() {
    return this.getStringMapAttribute('duo');
  }
  public set duo(value: { [key: string]: string }) {
    this._duo = value;
  }
  public resetDuo() {
    this._duo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duoInput() {
    return this._duo;
  }

  // external_idp - computed: false, optional: true, required: false
  private _externalIdp?: { [key: string]: string }; 
  public get externalIdp() {
    return this.getStringMapAttribute('external_idp');
  }
  public set externalIdp(value: { [key: string]: string }) {
    this._externalIdp = value;
  }
  public resetExternalIdp() {
    this._externalIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdpInput() {
    return this._externalIdp;
  }

  // external_idps - computed: false, optional: true, required: false
  private _externalIdps?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get externalIdps() {
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('external_idps')));
  }
  public set externalIdps(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._externalIdps = value;
  }
  public resetExternalIdps() {
    this._externalIdps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdpsInput() {
    return this._externalIdps;
  }

  // fido_u2f - computed: false, optional: true, required: false
  private _fidoU2F?: { [key: string]: string }; 
  public get fidoU2F() {
    return this.getStringMapAttribute('fido_u2f');
  }
  public set fidoU2F(value: { [key: string]: string }) {
    this._fidoU2F = value;
  }
  public resetFidoU2F() {
    this._fidoU2F = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fidoU2FInput() {
    return this._fidoU2F;
  }

  // fido_webauthn - computed: false, optional: true, required: false
  private _fidoWebauthn?: { [key: string]: string }; 
  public get fidoWebauthn() {
    return this.getStringMapAttribute('fido_webauthn');
  }
  public set fidoWebauthn(value: { [key: string]: string }) {
    this._fidoWebauthn = value;
  }
  public resetFidoWebauthn() {
    this._fidoWebauthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fidoWebauthnInput() {
    return this._fidoWebauthn;
  }

  // google_otp - computed: false, optional: true, required: false
  private _googleOtp?: { [key: string]: string }; 
  public get googleOtp() {
    return this.getStringMapAttribute('google_otp');
  }
  public set googleOtp(value: { [key: string]: string }) {
    this._googleOtp = value;
  }
  public resetGoogleOtp() {
    this._googleOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleOtpInput() {
    return this._googleOtp;
  }

  // hotp - computed: false, optional: true, required: false
  private _hotp?: { [key: string]: string }; 
  public get hotp() {
    return this.getStringMapAttribute('hotp');
  }
  public set hotp(value: { [key: string]: string }) {
    this._hotp = value;
  }
  public resetHotp() {
    this._hotp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotpInput() {
    return this._hotp;
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

  // is_oie - computed: false, optional: true, required: false
  private _isOie?: boolean | cdktf.IResolvable; 
  public get isOie() {
    return this.getBooleanAttribute('is_oie');
  }
  public set isOie(value: boolean | cdktf.IResolvable) {
    this._isOie = value;
  }
  public resetIsOie() {
    this._isOie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOieInput() {
    return this._isOie;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // okta_call - computed: false, optional: true, required: false
  private _oktaCall?: { [key: string]: string }; 
  public get oktaCall() {
    return this.getStringMapAttribute('okta_call');
  }
  public set oktaCall(value: { [key: string]: string }) {
    this._oktaCall = value;
  }
  public resetOktaCall() {
    this._oktaCall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaCallInput() {
    return this._oktaCall;
  }

  // okta_email - computed: false, optional: true, required: false
  private _oktaEmail?: { [key: string]: string }; 
  public get oktaEmail() {
    return this.getStringMapAttribute('okta_email');
  }
  public set oktaEmail(value: { [key: string]: string }) {
    this._oktaEmail = value;
  }
  public resetOktaEmail() {
    this._oktaEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaEmailInput() {
    return this._oktaEmail;
  }

  // okta_otp - computed: false, optional: true, required: false
  private _oktaOtp?: { [key: string]: string }; 
  public get oktaOtp() {
    return this.getStringMapAttribute('okta_otp');
  }
  public set oktaOtp(value: { [key: string]: string }) {
    this._oktaOtp = value;
  }
  public resetOktaOtp() {
    this._oktaOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaOtpInput() {
    return this._oktaOtp;
  }

  // okta_password - computed: false, optional: true, required: false
  private _oktaPassword?: { [key: string]: string }; 
  public get oktaPassword() {
    return this.getStringMapAttribute('okta_password');
  }
  public set oktaPassword(value: { [key: string]: string }) {
    this._oktaPassword = value;
  }
  public resetOktaPassword() {
    this._oktaPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaPasswordInput() {
    return this._oktaPassword;
  }

  // okta_push - computed: false, optional: true, required: false
  private _oktaPush?: { [key: string]: string }; 
  public get oktaPush() {
    return this.getStringMapAttribute('okta_push');
  }
  public set oktaPush(value: { [key: string]: string }) {
    this._oktaPush = value;
  }
  public resetOktaPush() {
    this._oktaPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaPushInput() {
    return this._oktaPush;
  }

  // okta_question - computed: false, optional: true, required: false
  private _oktaQuestion?: { [key: string]: string }; 
  public get oktaQuestion() {
    return this.getStringMapAttribute('okta_question');
  }
  public set oktaQuestion(value: { [key: string]: string }) {
    this._oktaQuestion = value;
  }
  public resetOktaQuestion() {
    this._oktaQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaQuestionInput() {
    return this._oktaQuestion;
  }

  // okta_sms - computed: false, optional: true, required: false
  private _oktaSms?: { [key: string]: string }; 
  public get oktaSms() {
    return this.getStringMapAttribute('okta_sms');
  }
  public set oktaSms(value: { [key: string]: string }) {
    this._oktaSms = value;
  }
  public resetOktaSms() {
    this._oktaSms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaSmsInput() {
    return this._oktaSms;
  }

  // okta_verify - computed: false, optional: true, required: false
  private _oktaVerify?: { [key: string]: string }; 
  public get oktaVerify() {
    return this.getStringMapAttribute('okta_verify');
  }
  public set oktaVerify(value: { [key: string]: string }) {
    this._oktaVerify = value;
  }
  public resetOktaVerify() {
    this._oktaVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oktaVerifyInput() {
    return this._oktaVerify;
  }

  // onprem_mfa - computed: false, optional: true, required: false
  private _onpremMfa?: { [key: string]: string }; 
  public get onpremMfa() {
    return this.getStringMapAttribute('onprem_mfa');
  }
  public set onpremMfa(value: { [key: string]: string }) {
    this._onpremMfa = value;
  }
  public resetOnpremMfa() {
    this._onpremMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onpremMfaInput() {
    return this._onpremMfa;
  }

  // phone_number - computed: false, optional: true, required: false
  private _phoneNumber?: { [key: string]: string }; 
  public get phoneNumber() {
    return this.getStringMapAttribute('phone_number');
  }
  public set phoneNumber(value: { [key: string]: string }) {
    this._phoneNumber = value;
  }
  public resetPhoneNumber() {
    this._phoneNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneNumberInput() {
    return this._phoneNumber;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rsa_token - computed: false, optional: true, required: false
  private _rsaToken?: { [key: string]: string }; 
  public get rsaToken() {
    return this.getStringMapAttribute('rsa_token');
  }
  public set rsaToken(value: { [key: string]: string }) {
    this._rsaToken = value;
  }
  public resetRsaToken() {
    this._rsaToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaTokenInput() {
    return this._rsaToken;
  }

  // security_question - computed: false, optional: true, required: false
  private _securityQuestion?: { [key: string]: string }; 
  public get securityQuestion() {
    return this.getStringMapAttribute('security_question');
  }
  public set securityQuestion(value: { [key: string]: string }) {
    this._securityQuestion = value;
  }
  public resetSecurityQuestion() {
    this._securityQuestion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityQuestionInput() {
    return this._securityQuestion;
  }

  // smart_card_idp - computed: false, optional: true, required: false
  private _smartCardIdp?: { [key: string]: string }; 
  public get smartCardIdp() {
    return this.getStringMapAttribute('smart_card_idp');
  }
  public set smartCardIdp(value: { [key: string]: string }) {
    this._smartCardIdp = value;
  }
  public resetSmartCardIdp() {
    this._smartCardIdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartCardIdpInput() {
    return this._smartCardIdp;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // symantec_vip - computed: false, optional: true, required: false
  private _symantecVip?: { [key: string]: string }; 
  public get symantecVip() {
    return this.getStringMapAttribute('symantec_vip');
  }
  public set symantecVip(value: { [key: string]: string }) {
    this._symantecVip = value;
  }
  public resetSymantecVip() {
    this._symantecVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get symantecVipInput() {
    return this._symantecVip;
  }

  // webauthn - computed: false, optional: true, required: false
  private _webauthn?: { [key: string]: string }; 
  public get webauthn() {
    return this.getStringMapAttribute('webauthn');
  }
  public set webauthn(value: { [key: string]: string }) {
    this._webauthn = value;
  }
  public resetWebauthn() {
    this._webauthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webauthnInput() {
    return this._webauthn;
  }

  // yubikey_token - computed: false, optional: true, required: false
  private _yubikeyToken?: { [key: string]: string }; 
  public get yubikeyToken() {
    return this.getStringMapAttribute('yubikey_token');
  }
  public set yubikeyToken(value: { [key: string]: string }) {
    this._yubikeyToken = value;
  }
  public resetYubikeyToken() {
    this._yubikeyToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yubikeyTokenInput() {
    return this._yubikeyToken;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duo: cdktf.hashMapper(cdktf.stringToTerraform)(this._duo),
      external_idp: cdktf.hashMapper(cdktf.stringToTerraform)(this._externalIdp),
      external_idps: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._externalIdps),
      fido_u2f: cdktf.hashMapper(cdktf.stringToTerraform)(this._fidoU2F),
      fido_webauthn: cdktf.hashMapper(cdktf.stringToTerraform)(this._fidoWebauthn),
      google_otp: cdktf.hashMapper(cdktf.stringToTerraform)(this._googleOtp),
      hotp: cdktf.hashMapper(cdktf.stringToTerraform)(this._hotp),
      id: cdktf.stringToTerraform(this._id),
      is_oie: cdktf.booleanToTerraform(this._isOie),
      okta_call: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaCall),
      okta_email: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaEmail),
      okta_otp: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaOtp),
      okta_password: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaPassword),
      okta_push: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaPush),
      okta_question: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaQuestion),
      okta_sms: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaSms),
      okta_verify: cdktf.hashMapper(cdktf.stringToTerraform)(this._oktaVerify),
      onprem_mfa: cdktf.hashMapper(cdktf.stringToTerraform)(this._onpremMfa),
      phone_number: cdktf.hashMapper(cdktf.stringToTerraform)(this._phoneNumber),
      rsa_token: cdktf.hashMapper(cdktf.stringToTerraform)(this._rsaToken),
      security_question: cdktf.hashMapper(cdktf.stringToTerraform)(this._securityQuestion),
      smart_card_idp: cdktf.hashMapper(cdktf.stringToTerraform)(this._smartCardIdp),
      symantec_vip: cdktf.hashMapper(cdktf.stringToTerraform)(this._symantecVip),
      webauthn: cdktf.hashMapper(cdktf.stringToTerraform)(this._webauthn),
      yubikey_token: cdktf.hashMapper(cdktf.stringToTerraform)(this._yubikeyToken),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duo: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._duo),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_idp: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._externalIdp),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      external_idps: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._externalIdps),
        isBlock: false,
        type: "set",
        storageClassType: "stringMapList",
      },
      fido_u2f: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._fidoU2F),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      fido_webauthn: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._fidoWebauthn),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      google_otp: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._googleOtp),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hotp: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._hotp),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_oie: {
        value: cdktf.booleanToHclTerraform(this._isOie),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      okta_call: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaCall),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      okta_email: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaEmail),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      okta_otp: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaOtp),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      okta_password: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaPassword),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      okta_push: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaPush),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      okta_question: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaQuestion),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      okta_sms: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaSms),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      okta_verify: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._oktaVerify),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      onprem_mfa: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._onpremMfa),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      phone_number: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._phoneNumber),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      rsa_token: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._rsaToken),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      security_question: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._securityQuestion),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      smart_card_idp: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._smartCardIdp),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      symantec_vip: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._symantecVip),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      webauthn: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._webauthn),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      yubikey_token: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._yubikeyToken),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
