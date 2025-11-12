// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLoginPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * if set to true, the suffix (@domain.com) of an unknown username input on the login screen will be matched against the org domains and will redirect to the registration of that organisation on success.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#allow_domain_discovery DefaultLoginPolicy#allow_domain_discovery}
  */
  readonly allowDomainDiscovery?: boolean | cdktf.IResolvable;
  /**
  * defines if a user is allowed to add a defined identity provider. E.g. Google auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#allow_external_idp DefaultLoginPolicy#allow_external_idp}
  */
  readonly allowExternalIdp: boolean | cdktf.IResolvable;
  /**
  * defines if a person is allowed to register a user on this organisation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#allow_register DefaultLoginPolicy#allow_register}
  */
  readonly allowRegister: boolean | cdktf.IResolvable;
  /**
  * defines where the user will be redirected to if the login is started without app context (e.g. from mail)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#default_redirect_uri DefaultLoginPolicy#default_redirect_uri}
  */
  readonly defaultRedirectUri: string;
  /**
  * defines if user can additionally (to the loginname) be identified by their verified email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#disable_login_with_email DefaultLoginPolicy#disable_login_with_email}
  */
  readonly disableLoginWithEmail?: boolean | cdktf.IResolvable;
  /**
  * defines if user can additionally (to the loginname) be identified by their verified phone number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#disable_login_with_phone DefaultLoginPolicy#disable_login_with_phone}
  */
  readonly disableLoginWithPhone?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#external_login_check_lifetime DefaultLoginPolicy#external_login_check_lifetime}
  */
  readonly externalLoginCheckLifetime: string;
  /**
  * defines if a user MUST use a multi factor to log in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#force_mfa DefaultLoginPolicy#force_mfa}
  */
  readonly forceMfa: boolean | cdktf.IResolvable;
  /**
  * if activated, ZITADEL only enforces MFA on local authentications. On authentications through MFA, ZITADEL won't prompt for MFA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#force_mfa_local_only DefaultLoginPolicy#force_mfa_local_only}
  */
  readonly forceMfaLocalOnly: boolean | cdktf.IResolvable;
  /**
  * defines if password reset link should be shown in the login screen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#hide_password_reset DefaultLoginPolicy#hide_password_reset}
  */
  readonly hidePasswordReset: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#id DefaultLoginPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * allowed idps to login or register
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#idps DefaultLoginPolicy#idps}
  */
  readonly idps?: string[];
  /**
  * defines if unknown username on login screen directly return an error or always display the password screen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#ignore_unknown_usernames DefaultLoginPolicy#ignore_unknown_usernames}
  */
  readonly ignoreUnknownUsernames: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#mfa_init_skip_lifetime DefaultLoginPolicy#mfa_init_skip_lifetime}
  */
  readonly mfaInitSkipLifetime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#multi_factor_check_lifetime DefaultLoginPolicy#multi_factor_check_lifetime}
  */
  readonly multiFactorCheckLifetime: string;
  /**
  * allowed multi factors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#multi_factors DefaultLoginPolicy#multi_factors}
  */
  readonly multiFactors?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#password_check_lifetime DefaultLoginPolicy#password_check_lifetime}
  */
  readonly passwordCheckLifetime: string;
  /**
  * defines if passwordless is allowed for users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#passwordless_type DefaultLoginPolicy#passwordless_type}
  */
  readonly passwordlessType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#second_factor_check_lifetime DefaultLoginPolicy#second_factor_check_lifetime}
  */
  readonly secondFactorCheckLifetime: string;
  /**
  * allowed second factors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#second_factors DefaultLoginPolicy#second_factors}
  */
  readonly secondFactors?: string[];
  /**
  * defines if a user is allowed to login with his username and password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#user_login DefaultLoginPolicy#user_login}
  */
  readonly userLogin: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy zitadel_default_login_policy}
*/
export class DefaultLoginPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_default_login_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLoginPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLoginPolicy to import
  * @param importFromId The id of the existing DefaultLoginPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLoginPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_default_login_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_policy zitadel_default_login_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLoginPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultLoginPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_default_login_policy',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowDomainDiscovery = config.allowDomainDiscovery;
    this._allowExternalIdp = config.allowExternalIdp;
    this._allowRegister = config.allowRegister;
    this._defaultRedirectUri = config.defaultRedirectUri;
    this._disableLoginWithEmail = config.disableLoginWithEmail;
    this._disableLoginWithPhone = config.disableLoginWithPhone;
    this._externalLoginCheckLifetime = config.externalLoginCheckLifetime;
    this._forceMfa = config.forceMfa;
    this._forceMfaLocalOnly = config.forceMfaLocalOnly;
    this._hidePasswordReset = config.hidePasswordReset;
    this._id = config.id;
    this._idps = config.idps;
    this._ignoreUnknownUsernames = config.ignoreUnknownUsernames;
    this._mfaInitSkipLifetime = config.mfaInitSkipLifetime;
    this._multiFactorCheckLifetime = config.multiFactorCheckLifetime;
    this._multiFactors = config.multiFactors;
    this._passwordCheckLifetime = config.passwordCheckLifetime;
    this._passwordlessType = config.passwordlessType;
    this._secondFactorCheckLifetime = config.secondFactorCheckLifetime;
    this._secondFactors = config.secondFactors;
    this._userLogin = config.userLogin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_domain_discovery - computed: false, optional: true, required: false
  private _allowDomainDiscovery?: boolean | cdktf.IResolvable; 
  public get allowDomainDiscovery() {
    return this.getBooleanAttribute('allow_domain_discovery');
  }
  public set allowDomainDiscovery(value: boolean | cdktf.IResolvable) {
    this._allowDomainDiscovery = value;
  }
  public resetAllowDomainDiscovery() {
    this._allowDomainDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowDomainDiscoveryInput() {
    return this._allowDomainDiscovery;
  }

  // allow_external_idp - computed: false, optional: false, required: true
  private _allowExternalIdp?: boolean | cdktf.IResolvable; 
  public get allowExternalIdp() {
    return this.getBooleanAttribute('allow_external_idp');
  }
  public set allowExternalIdp(value: boolean | cdktf.IResolvable) {
    this._allowExternalIdp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowExternalIdpInput() {
    return this._allowExternalIdp;
  }

  // allow_register - computed: false, optional: false, required: true
  private _allowRegister?: boolean | cdktf.IResolvable; 
  public get allowRegister() {
    return this.getBooleanAttribute('allow_register');
  }
  public set allowRegister(value: boolean | cdktf.IResolvable) {
    this._allowRegister = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRegisterInput() {
    return this._allowRegister;
  }

  // default_redirect_uri - computed: false, optional: false, required: true
  private _defaultRedirectUri?: string; 
  public get defaultRedirectUri() {
    return this.getStringAttribute('default_redirect_uri');
  }
  public set defaultRedirectUri(value: string) {
    this._defaultRedirectUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectUriInput() {
    return this._defaultRedirectUri;
  }

  // disable_login_with_email - computed: false, optional: true, required: false
  private _disableLoginWithEmail?: boolean | cdktf.IResolvable; 
  public get disableLoginWithEmail() {
    return this.getBooleanAttribute('disable_login_with_email');
  }
  public set disableLoginWithEmail(value: boolean | cdktf.IResolvable) {
    this._disableLoginWithEmail = value;
  }
  public resetDisableLoginWithEmail() {
    this._disableLoginWithEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLoginWithEmailInput() {
    return this._disableLoginWithEmail;
  }

  // disable_login_with_phone - computed: false, optional: true, required: false
  private _disableLoginWithPhone?: boolean | cdktf.IResolvable; 
  public get disableLoginWithPhone() {
    return this.getBooleanAttribute('disable_login_with_phone');
  }
  public set disableLoginWithPhone(value: boolean | cdktf.IResolvable) {
    this._disableLoginWithPhone = value;
  }
  public resetDisableLoginWithPhone() {
    this._disableLoginWithPhone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableLoginWithPhoneInput() {
    return this._disableLoginWithPhone;
  }

  // external_login_check_lifetime - computed: false, optional: false, required: true
  private _externalLoginCheckLifetime?: string; 
  public get externalLoginCheckLifetime() {
    return this.getStringAttribute('external_login_check_lifetime');
  }
  public set externalLoginCheckLifetime(value: string) {
    this._externalLoginCheckLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLoginCheckLifetimeInput() {
    return this._externalLoginCheckLifetime;
  }

  // force_mfa - computed: false, optional: false, required: true
  private _forceMfa?: boolean | cdktf.IResolvable; 
  public get forceMfa() {
    return this.getBooleanAttribute('force_mfa');
  }
  public set forceMfa(value: boolean | cdktf.IResolvable) {
    this._forceMfa = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMfaInput() {
    return this._forceMfa;
  }

  // force_mfa_local_only - computed: false, optional: false, required: true
  private _forceMfaLocalOnly?: boolean | cdktf.IResolvable; 
  public get forceMfaLocalOnly() {
    return this.getBooleanAttribute('force_mfa_local_only');
  }
  public set forceMfaLocalOnly(value: boolean | cdktf.IResolvable) {
    this._forceMfaLocalOnly = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forceMfaLocalOnlyInput() {
    return this._forceMfaLocalOnly;
  }

  // hide_password_reset - computed: false, optional: false, required: true
  private _hidePasswordReset?: boolean | cdktf.IResolvable; 
  public get hidePasswordReset() {
    return this.getBooleanAttribute('hide_password_reset');
  }
  public set hidePasswordReset(value: boolean | cdktf.IResolvable) {
    this._hidePasswordReset = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hidePasswordResetInput() {
    return this._hidePasswordReset;
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

  // idps - computed: false, optional: true, required: false
  private _idps?: string[]; 
  public get idps() {
    return cdktf.Fn.tolist(this.getListAttribute('idps'));
  }
  public set idps(value: string[]) {
    this._idps = value;
  }
  public resetIdps() {
    this._idps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpsInput() {
    return this._idps;
  }

  // ignore_unknown_usernames - computed: false, optional: false, required: true
  private _ignoreUnknownUsernames?: boolean | cdktf.IResolvable; 
  public get ignoreUnknownUsernames() {
    return this.getBooleanAttribute('ignore_unknown_usernames');
  }
  public set ignoreUnknownUsernames(value: boolean | cdktf.IResolvable) {
    this._ignoreUnknownUsernames = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownUsernamesInput() {
    return this._ignoreUnknownUsernames;
  }

  // mfa_init_skip_lifetime - computed: false, optional: false, required: true
  private _mfaInitSkipLifetime?: string; 
  public get mfaInitSkipLifetime() {
    return this.getStringAttribute('mfa_init_skip_lifetime');
  }
  public set mfaInitSkipLifetime(value: string) {
    this._mfaInitSkipLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaInitSkipLifetimeInput() {
    return this._mfaInitSkipLifetime;
  }

  // multi_factor_check_lifetime - computed: false, optional: false, required: true
  private _multiFactorCheckLifetime?: string; 
  public get multiFactorCheckLifetime() {
    return this.getStringAttribute('multi_factor_check_lifetime');
  }
  public set multiFactorCheckLifetime(value: string) {
    this._multiFactorCheckLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorCheckLifetimeInput() {
    return this._multiFactorCheckLifetime;
  }

  // multi_factors - computed: false, optional: true, required: false
  private _multiFactors?: string[]; 
  public get multiFactors() {
    return cdktf.Fn.tolist(this.getListAttribute('multi_factors'));
  }
  public set multiFactors(value: string[]) {
    this._multiFactors = value;
  }
  public resetMultiFactors() {
    this._multiFactors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorsInput() {
    return this._multiFactors;
  }

  // password_check_lifetime - computed: false, optional: false, required: true
  private _passwordCheckLifetime?: string; 
  public get passwordCheckLifetime() {
    return this.getStringAttribute('password_check_lifetime');
  }
  public set passwordCheckLifetime(value: string) {
    this._passwordCheckLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCheckLifetimeInput() {
    return this._passwordCheckLifetime;
  }

  // passwordless_type - computed: false, optional: false, required: true
  private _passwordlessType?: string; 
  public get passwordlessType() {
    return this.getStringAttribute('passwordless_type');
  }
  public set passwordlessType(value: string) {
    this._passwordlessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessTypeInput() {
    return this._passwordlessType;
  }

  // second_factor_check_lifetime - computed: false, optional: false, required: true
  private _secondFactorCheckLifetime?: string; 
  public get secondFactorCheckLifetime() {
    return this.getStringAttribute('second_factor_check_lifetime');
  }
  public set secondFactorCheckLifetime(value: string) {
    this._secondFactorCheckLifetime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secondFactorCheckLifetimeInput() {
    return this._secondFactorCheckLifetime;
  }

  // second_factors - computed: false, optional: true, required: false
  private _secondFactors?: string[]; 
  public get secondFactors() {
    return cdktf.Fn.tolist(this.getListAttribute('second_factors'));
  }
  public set secondFactors(value: string[]) {
    this._secondFactors = value;
  }
  public resetSecondFactors() {
    this._secondFactors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondFactorsInput() {
    return this._secondFactors;
  }

  // user_login - computed: false, optional: false, required: true
  private _userLogin?: boolean | cdktf.IResolvable; 
  public get userLogin() {
    return this.getBooleanAttribute('user_login');
  }
  public set userLogin(value: boolean | cdktf.IResolvable) {
    this._userLogin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userLoginInput() {
    return this._userLogin;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_domain_discovery: cdktf.booleanToTerraform(this._allowDomainDiscovery),
      allow_external_idp: cdktf.booleanToTerraform(this._allowExternalIdp),
      allow_register: cdktf.booleanToTerraform(this._allowRegister),
      default_redirect_uri: cdktf.stringToTerraform(this._defaultRedirectUri),
      disable_login_with_email: cdktf.booleanToTerraform(this._disableLoginWithEmail),
      disable_login_with_phone: cdktf.booleanToTerraform(this._disableLoginWithPhone),
      external_login_check_lifetime: cdktf.stringToTerraform(this._externalLoginCheckLifetime),
      force_mfa: cdktf.booleanToTerraform(this._forceMfa),
      force_mfa_local_only: cdktf.booleanToTerraform(this._forceMfaLocalOnly),
      hide_password_reset: cdktf.booleanToTerraform(this._hidePasswordReset),
      id: cdktf.stringToTerraform(this._id),
      idps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._idps),
      ignore_unknown_usernames: cdktf.booleanToTerraform(this._ignoreUnknownUsernames),
      mfa_init_skip_lifetime: cdktf.stringToTerraform(this._mfaInitSkipLifetime),
      multi_factor_check_lifetime: cdktf.stringToTerraform(this._multiFactorCheckLifetime),
      multi_factors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._multiFactors),
      password_check_lifetime: cdktf.stringToTerraform(this._passwordCheckLifetime),
      passwordless_type: cdktf.stringToTerraform(this._passwordlessType),
      second_factor_check_lifetime: cdktf.stringToTerraform(this._secondFactorCheckLifetime),
      second_factors: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondFactors),
      user_login: cdktf.booleanToTerraform(this._userLogin),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_domain_discovery: {
        value: cdktf.booleanToHclTerraform(this._allowDomainDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_external_idp: {
        value: cdktf.booleanToHclTerraform(this._allowExternalIdp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_register: {
        value: cdktf.booleanToHclTerraform(this._allowRegister),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_redirect_uri: {
        value: cdktf.stringToHclTerraform(this._defaultRedirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_login_with_email: {
        value: cdktf.booleanToHclTerraform(this._disableLoginWithEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_login_with_phone: {
        value: cdktf.booleanToHclTerraform(this._disableLoginWithPhone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_login_check_lifetime: {
        value: cdktf.stringToHclTerraform(this._externalLoginCheckLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_mfa: {
        value: cdktf.booleanToHclTerraform(this._forceMfa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_mfa_local_only: {
        value: cdktf.booleanToHclTerraform(this._forceMfaLocalOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hide_password_reset: {
        value: cdktf.booleanToHclTerraform(this._hidePasswordReset),
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
      idps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._idps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ignore_unknown_usernames: {
        value: cdktf.booleanToHclTerraform(this._ignoreUnknownUsernames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mfa_init_skip_lifetime: {
        value: cdktf.stringToHclTerraform(this._mfaInitSkipLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_factor_check_lifetime: {
        value: cdktf.stringToHclTerraform(this._multiFactorCheckLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_factors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._multiFactors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      password_check_lifetime: {
        value: cdktf.stringToHclTerraform(this._passwordCheckLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwordless_type: {
        value: cdktf.stringToHclTerraform(this._passwordlessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      second_factor_check_lifetime: {
        value: cdktf.stringToHclTerraform(this._secondFactorCheckLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      second_factors: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondFactors),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      user_login: {
        value: cdktf.booleanToHclTerraform(this._userLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
