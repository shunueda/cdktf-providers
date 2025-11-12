// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable if new users can read any stored tokens. This assigns the broker.read-token role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#add_read_token_role_on_create SamlIdentityProvider#add_read_token_role_on_create}
  */
  readonly addReadTokenRoleOnCreate?: boolean | cdktf.IResolvable;
  /**
  * The alias uniquely identifies an identity provider and it is also used to build the redirect uri.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#alias SamlIdentityProvider#alias}
  */
  readonly alias: string;
  /**
  * Enable/disable authenticate users by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#authenticate_by_default SamlIdentityProvider#authenticate_by_default}
  */
  readonly authenticateByDefault?: boolean | cdktf.IResolvable;
  /**
  * AuthnContext ClassRefs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#authn_context_class_refs SamlIdentityProvider#authn_context_class_refs}
  */
  readonly authnContextClassRefs?: string[];
  /**
  * AuthnContext Comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#authn_context_comparison_type SamlIdentityProvider#authn_context_comparison_type}
  */
  readonly authnContextComparisonType?: string;
  /**
  * AuthnContext DeclRefs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#authn_context_decl_refs SamlIdentityProvider#authn_context_decl_refs}
  */
  readonly authnContextDeclRefs?: string[];
  /**
  * Does the external IDP support backchannel logout?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#backchannel_supported SamlIdentityProvider#backchannel_supported}
  */
  readonly backchannelSupported?: boolean | cdktf.IResolvable;
  /**
  * Friendly name for Identity Providers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#display_name SamlIdentityProvider#display_name}
  */
  readonly displayName?: string;
  /**
  * Enable/disable this identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#enabled SamlIdentityProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Entity ID that will be used to uniquely identify this SAML Service Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#entity_id SamlIdentityProvider#entity_id}
  */
  readonly entityId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#extra_config SamlIdentityProvider#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Alias of authentication flow, which is triggered after first login with this identity provider. Term 'First Login' means that there is not yet existing Keycloak account linked with the authenticated identity provider account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#first_broker_login_flow_alias SamlIdentityProvider#first_broker_login_flow_alias}
  */
  readonly firstBrokerLoginFlowAlias?: string;
  /**
  * Require Force Authn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#force_authn SamlIdentityProvider#force_authn}
  */
  readonly forceAuthn?: boolean | cdktf.IResolvable;
  /**
  * GUI Order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#gui_order SamlIdentityProvider#gui_order}
  */
  readonly guiOrder?: string;
  /**
  * Hide On Login Page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#hide_on_login_page SamlIdentityProvider#hide_on_login_page}
  */
  readonly hideOnLoginPage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#id SamlIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, users cannot log in through this provider.  They can only link to this provider.  This is useful if you don't want to allow login from the provider, but want to integrate with a provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#link_only SamlIdentityProvider#link_only}
  */
  readonly linkOnly?: boolean | cdktf.IResolvable;
  /**
  * Login Hint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#login_hint SamlIdentityProvider#login_hint}
  */
  readonly loginHint?: string;
  /**
  * Name ID Policy Format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#name_id_policy_format SamlIdentityProvider#name_id_policy_format}
  */
  readonly nameIdPolicyFormat?: string;
  /**
  * Post Binding Authn Request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#post_binding_authn_request SamlIdentityProvider#post_binding_authn_request}
  */
  readonly postBindingAuthnRequest?: boolean | cdktf.IResolvable;
  /**
  * Post Binding Logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#post_binding_logout SamlIdentityProvider#post_binding_logout}
  */
  readonly postBindingLogout?: boolean | cdktf.IResolvable;
  /**
  * Post Binding Response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#post_binding_response SamlIdentityProvider#post_binding_response}
  */
  readonly postBindingResponse?: boolean | cdktf.IResolvable;
  /**
  * Alias of authentication flow, which is triggered after each login with this identity provider. Useful if you want additional verification of each user authenticated with this identity provider (for example OTP). Leave this empty if you don't want any additional authenticators to be triggered after login with this identity provider. Also note, that authenticator implementations must assume that user is already set in ClientSession as identity provider already set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#post_broker_login_flow_alias SamlIdentityProvider#post_broker_login_flow_alias}
  */
  readonly postBrokerLoginFlowAlias?: string;
  /**
  * Principal Attribute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#principal_attribute SamlIdentityProvider#principal_attribute}
  */
  readonly principalAttribute?: string;
  /**
  * Principal Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#principal_type SamlIdentityProvider#principal_type}
  */
  readonly principalType?: string;
  /**
  * provider id, is always saml, unless you have a custom implementation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#provider_id SamlIdentityProvider#provider_id}
  */
  readonly providerId?: string;
  /**
  * Realm Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#realm SamlIdentityProvider#realm}
  */
  readonly realm: string;
  /**
  * Signing Algorithm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#signature_algorithm SamlIdentityProvider#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Signing Certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#signing_certificate SamlIdentityProvider#signing_certificate}
  */
  readonly signingCertificate?: string;
  /**
  * Logout URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#single_logout_service_url SamlIdentityProvider#single_logout_service_url}
  */
  readonly singleLogoutServiceUrl?: string;
  /**
  * SSO Logout URL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#single_sign_on_service_url SamlIdentityProvider#single_sign_on_service_url}
  */
  readonly singleSignOnServiceUrl: string;
  /**
  * Enable/disable if tokens must be stored after authenticating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#store_token SamlIdentityProvider#store_token}
  */
  readonly storeToken?: boolean | cdktf.IResolvable;
  /**
  * Sync Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#sync_mode SamlIdentityProvider#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * If enabled then email provided by this provider is not verified even if verification is enabled for the realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#trust_email SamlIdentityProvider#trust_email}
  */
  readonly trustEmail?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable signature validation of SAML responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#validate_signature SamlIdentityProvider#validate_signature}
  */
  readonly validateSignature?: boolean | cdktf.IResolvable;
  /**
  * Want Assertions Encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#want_assertions_encrypted SamlIdentityProvider#want_assertions_encrypted}
  */
  readonly wantAssertionsEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Want Assertions Signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#want_assertions_signed SamlIdentityProvider#want_assertions_signed}
  */
  readonly wantAssertionsSigned?: boolean | cdktf.IResolvable;
  /**
  * Sign Key Transformer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#xml_sign_key_info_key_name_transformer SamlIdentityProvider#xml_sign_key_info_key_name_transformer}
  */
  readonly xmlSignKeyInfoKeyNameTransformer?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider keycloak_saml_identity_provider}
*/
export class SamlIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_saml_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlIdentityProvider to import
  * @param importFromId The id of the existing SamlIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_saml_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_identity_provider keycloak_saml_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SamlIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_saml_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0',
        providerVersionConstraint: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addReadTokenRoleOnCreate = config.addReadTokenRoleOnCreate;
    this._alias = config.alias;
    this._authenticateByDefault = config.authenticateByDefault;
    this._authnContextClassRefs = config.authnContextClassRefs;
    this._authnContextComparisonType = config.authnContextComparisonType;
    this._authnContextDeclRefs = config.authnContextDeclRefs;
    this._backchannelSupported = config.backchannelSupported;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._entityId = config.entityId;
    this._extraConfig = config.extraConfig;
    this._firstBrokerLoginFlowAlias = config.firstBrokerLoginFlowAlias;
    this._forceAuthn = config.forceAuthn;
    this._guiOrder = config.guiOrder;
    this._hideOnLoginPage = config.hideOnLoginPage;
    this._id = config.id;
    this._linkOnly = config.linkOnly;
    this._loginHint = config.loginHint;
    this._nameIdPolicyFormat = config.nameIdPolicyFormat;
    this._postBindingAuthnRequest = config.postBindingAuthnRequest;
    this._postBindingLogout = config.postBindingLogout;
    this._postBindingResponse = config.postBindingResponse;
    this._postBrokerLoginFlowAlias = config.postBrokerLoginFlowAlias;
    this._principalAttribute = config.principalAttribute;
    this._principalType = config.principalType;
    this._providerId = config.providerId;
    this._realm = config.realm;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._signingCertificate = config.signingCertificate;
    this._singleLogoutServiceUrl = config.singleLogoutServiceUrl;
    this._singleSignOnServiceUrl = config.singleSignOnServiceUrl;
    this._storeToken = config.storeToken;
    this._syncMode = config.syncMode;
    this._trustEmail = config.trustEmail;
    this._validateSignature = config.validateSignature;
    this._wantAssertionsEncrypted = config.wantAssertionsEncrypted;
    this._wantAssertionsSigned = config.wantAssertionsSigned;
    this._xmlSignKeyInfoKeyNameTransformer = config.xmlSignKeyInfoKeyNameTransformer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_read_token_role_on_create - computed: false, optional: true, required: false
  private _addReadTokenRoleOnCreate?: boolean | cdktf.IResolvable; 
  public get addReadTokenRoleOnCreate() {
    return this.getBooleanAttribute('add_read_token_role_on_create');
  }
  public set addReadTokenRoleOnCreate(value: boolean | cdktf.IResolvable) {
    this._addReadTokenRoleOnCreate = value;
  }
  public resetAddReadTokenRoleOnCreate() {
    this._addReadTokenRoleOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addReadTokenRoleOnCreateInput() {
    return this._addReadTokenRoleOnCreate;
  }

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // authenticate_by_default - computed: false, optional: true, required: false
  private _authenticateByDefault?: boolean | cdktf.IResolvable; 
  public get authenticateByDefault() {
    return this.getBooleanAttribute('authenticate_by_default');
  }
  public set authenticateByDefault(value: boolean | cdktf.IResolvable) {
    this._authenticateByDefault = value;
  }
  public resetAuthenticateByDefault() {
    this._authenticateByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateByDefaultInput() {
    return this._authenticateByDefault;
  }

  // authn_context_class_refs - computed: false, optional: true, required: false
  private _authnContextClassRefs?: string[]; 
  public get authnContextClassRefs() {
    return this.getListAttribute('authn_context_class_refs');
  }
  public set authnContextClassRefs(value: string[]) {
    this._authnContextClassRefs = value;
  }
  public resetAuthnContextClassRefs() {
    this._authnContextClassRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextClassRefsInput() {
    return this._authnContextClassRefs;
  }

  // authn_context_comparison_type - computed: false, optional: true, required: false
  private _authnContextComparisonType?: string; 
  public get authnContextComparisonType() {
    return this.getStringAttribute('authn_context_comparison_type');
  }
  public set authnContextComparisonType(value: string) {
    this._authnContextComparisonType = value;
  }
  public resetAuthnContextComparisonType() {
    this._authnContextComparisonType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextComparisonTypeInput() {
    return this._authnContextComparisonType;
  }

  // authn_context_decl_refs - computed: false, optional: true, required: false
  private _authnContextDeclRefs?: string[]; 
  public get authnContextDeclRefs() {
    return this.getListAttribute('authn_context_decl_refs');
  }
  public set authnContextDeclRefs(value: string[]) {
    this._authnContextDeclRefs = value;
  }
  public resetAuthnContextDeclRefs() {
    this._authnContextDeclRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextDeclRefsInput() {
    return this._authnContextDeclRefs;
  }

  // backchannel_supported - computed: false, optional: true, required: false
  private _backchannelSupported?: boolean | cdktf.IResolvable; 
  public get backchannelSupported() {
    return this.getBooleanAttribute('backchannel_supported');
  }
  public set backchannelSupported(value: boolean | cdktf.IResolvable) {
    this._backchannelSupported = value;
  }
  public resetBackchannelSupported() {
    this._backchannelSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelSupportedInput() {
    return this._backchannelSupported;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // entity_id - computed: false, optional: false, required: true
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: { [key: string]: string }; 
  public get extraConfig() {
    return this.getStringMapAttribute('extra_config');
  }
  public set extraConfig(value: { [key: string]: string }) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // first_broker_login_flow_alias - computed: false, optional: true, required: false
  private _firstBrokerLoginFlowAlias?: string; 
  public get firstBrokerLoginFlowAlias() {
    return this.getStringAttribute('first_broker_login_flow_alias');
  }
  public set firstBrokerLoginFlowAlias(value: string) {
    this._firstBrokerLoginFlowAlias = value;
  }
  public resetFirstBrokerLoginFlowAlias() {
    this._firstBrokerLoginFlowAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstBrokerLoginFlowAliasInput() {
    return this._firstBrokerLoginFlowAlias;
  }

  // force_authn - computed: false, optional: true, required: false
  private _forceAuthn?: boolean | cdktf.IResolvable; 
  public get forceAuthn() {
    return this.getBooleanAttribute('force_authn');
  }
  public set forceAuthn(value: boolean | cdktf.IResolvable) {
    this._forceAuthn = value;
  }
  public resetForceAuthn() {
    this._forceAuthn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceAuthnInput() {
    return this._forceAuthn;
  }

  // gui_order - computed: false, optional: true, required: false
  private _guiOrder?: string; 
  public get guiOrder() {
    return this.getStringAttribute('gui_order');
  }
  public set guiOrder(value: string) {
    this._guiOrder = value;
  }
  public resetGuiOrder() {
    this._guiOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiOrderInput() {
    return this._guiOrder;
  }

  // hide_on_login_page - computed: false, optional: true, required: false
  private _hideOnLoginPage?: boolean | cdktf.IResolvable; 
  public get hideOnLoginPage() {
    return this.getBooleanAttribute('hide_on_login_page');
  }
  public set hideOnLoginPage(value: boolean | cdktf.IResolvable) {
    this._hideOnLoginPage = value;
  }
  public resetHideOnLoginPage() {
    this._hideOnLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOnLoginPageInput() {
    return this._hideOnLoginPage;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // link_only - computed: false, optional: true, required: false
  private _linkOnly?: boolean | cdktf.IResolvable; 
  public get linkOnly() {
    return this.getBooleanAttribute('link_only');
  }
  public set linkOnly(value: boolean | cdktf.IResolvable) {
    this._linkOnly = value;
  }
  public resetLinkOnly() {
    this._linkOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOnlyInput() {
    return this._linkOnly;
  }

  // login_hint - computed: false, optional: true, required: false
  private _loginHint?: string; 
  public get loginHint() {
    return this.getStringAttribute('login_hint');
  }
  public set loginHint(value: string) {
    this._loginHint = value;
  }
  public resetLoginHint() {
    this._loginHint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginHintInput() {
    return this._loginHint;
  }

  // name_id_policy_format - computed: false, optional: true, required: false
  private _nameIdPolicyFormat?: string; 
  public get nameIdPolicyFormat() {
    return this.getStringAttribute('name_id_policy_format');
  }
  public set nameIdPolicyFormat(value: string) {
    this._nameIdPolicyFormat = value;
  }
  public resetNameIdPolicyFormat() {
    this._nameIdPolicyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdPolicyFormatInput() {
    return this._nameIdPolicyFormat;
  }

  // post_binding_authn_request - computed: false, optional: true, required: false
  private _postBindingAuthnRequest?: boolean | cdktf.IResolvable; 
  public get postBindingAuthnRequest() {
    return this.getBooleanAttribute('post_binding_authn_request');
  }
  public set postBindingAuthnRequest(value: boolean | cdktf.IResolvable) {
    this._postBindingAuthnRequest = value;
  }
  public resetPostBindingAuthnRequest() {
    this._postBindingAuthnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBindingAuthnRequestInput() {
    return this._postBindingAuthnRequest;
  }

  // post_binding_logout - computed: false, optional: true, required: false
  private _postBindingLogout?: boolean | cdktf.IResolvable; 
  public get postBindingLogout() {
    return this.getBooleanAttribute('post_binding_logout');
  }
  public set postBindingLogout(value: boolean | cdktf.IResolvable) {
    this._postBindingLogout = value;
  }
  public resetPostBindingLogout() {
    this._postBindingLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBindingLogoutInput() {
    return this._postBindingLogout;
  }

  // post_binding_response - computed: false, optional: true, required: false
  private _postBindingResponse?: boolean | cdktf.IResolvable; 
  public get postBindingResponse() {
    return this.getBooleanAttribute('post_binding_response');
  }
  public set postBindingResponse(value: boolean | cdktf.IResolvable) {
    this._postBindingResponse = value;
  }
  public resetPostBindingResponse() {
    this._postBindingResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBindingResponseInput() {
    return this._postBindingResponse;
  }

  // post_broker_login_flow_alias - computed: false, optional: true, required: false
  private _postBrokerLoginFlowAlias?: string; 
  public get postBrokerLoginFlowAlias() {
    return this.getStringAttribute('post_broker_login_flow_alias');
  }
  public set postBrokerLoginFlowAlias(value: string) {
    this._postBrokerLoginFlowAlias = value;
  }
  public resetPostBrokerLoginFlowAlias() {
    this._postBrokerLoginFlowAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBrokerLoginFlowAliasInput() {
    return this._postBrokerLoginFlowAlias;
  }

  // principal_attribute - computed: false, optional: true, required: false
  private _principalAttribute?: string; 
  public get principalAttribute() {
    return this.getStringAttribute('principal_attribute');
  }
  public set principalAttribute(value: string) {
    this._principalAttribute = value;
  }
  public resetPrincipalAttribute() {
    this._principalAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalAttributeInput() {
    return this._principalAttribute;
  }

  // principal_type - computed: false, optional: true, required: false
  private _principalType?: string; 
  public get principalType() {
    return this.getStringAttribute('principal_type');
  }
  public set principalType(value: string) {
    this._principalType = value;
  }
  public resetPrincipalType() {
    this._principalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get principalTypeInput() {
    return this._principalType;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // signature_algorithm - computed: false, optional: true, required: false
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  public resetSignatureAlgorithm() {
    this._signatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm;
  }

  // signing_certificate - computed: false, optional: true, required: false
  private _signingCertificate?: string; 
  public get signingCertificate() {
    return this.getStringAttribute('signing_certificate');
  }
  public set signingCertificate(value: string) {
    this._signingCertificate = value;
  }
  public resetSigningCertificate() {
    this._signingCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingCertificateInput() {
    return this._signingCertificate;
  }

  // single_logout_service_url - computed: false, optional: true, required: false
  private _singleLogoutServiceUrl?: string; 
  public get singleLogoutServiceUrl() {
    return this.getStringAttribute('single_logout_service_url');
  }
  public set singleLogoutServiceUrl(value: string) {
    this._singleLogoutServiceUrl = value;
  }
  public resetSingleLogoutServiceUrl() {
    this._singleLogoutServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutServiceUrlInput() {
    return this._singleLogoutServiceUrl;
  }

  // single_sign_on_service_url - computed: false, optional: false, required: true
  private _singleSignOnServiceUrl?: string; 
  public get singleSignOnServiceUrl() {
    return this.getStringAttribute('single_sign_on_service_url');
  }
  public set singleSignOnServiceUrl(value: string) {
    this._singleSignOnServiceUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get singleSignOnServiceUrlInput() {
    return this._singleSignOnServiceUrl;
  }

  // store_token - computed: false, optional: true, required: false
  private _storeToken?: boolean | cdktf.IResolvable; 
  public get storeToken() {
    return this.getBooleanAttribute('store_token');
  }
  public set storeToken(value: boolean | cdktf.IResolvable) {
    this._storeToken = value;
  }
  public resetStoreToken() {
    this._storeToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTokenInput() {
    return this._storeToken;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // trust_email - computed: false, optional: true, required: false
  private _trustEmail?: boolean | cdktf.IResolvable; 
  public get trustEmail() {
    return this.getBooleanAttribute('trust_email');
  }
  public set trustEmail(value: boolean | cdktf.IResolvable) {
    this._trustEmail = value;
  }
  public resetTrustEmail() {
    this._trustEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustEmailInput() {
    return this._trustEmail;
  }

  // validate_signature - computed: false, optional: true, required: false
  private _validateSignature?: boolean | cdktf.IResolvable; 
  public get validateSignature() {
    return this.getBooleanAttribute('validate_signature');
  }
  public set validateSignature(value: boolean | cdktf.IResolvable) {
    this._validateSignature = value;
  }
  public resetValidateSignature() {
    this._validateSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSignatureInput() {
    return this._validateSignature;
  }

  // want_assertions_encrypted - computed: false, optional: true, required: false
  private _wantAssertionsEncrypted?: boolean | cdktf.IResolvable; 
  public get wantAssertionsEncrypted() {
    return this.getBooleanAttribute('want_assertions_encrypted');
  }
  public set wantAssertionsEncrypted(value: boolean | cdktf.IResolvable) {
    this._wantAssertionsEncrypted = value;
  }
  public resetWantAssertionsEncrypted() {
    this._wantAssertionsEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantAssertionsEncryptedInput() {
    return this._wantAssertionsEncrypted;
  }

  // want_assertions_signed - computed: false, optional: true, required: false
  private _wantAssertionsSigned?: boolean | cdktf.IResolvable; 
  public get wantAssertionsSigned() {
    return this.getBooleanAttribute('want_assertions_signed');
  }
  public set wantAssertionsSigned(value: boolean | cdktf.IResolvable) {
    this._wantAssertionsSigned = value;
  }
  public resetWantAssertionsSigned() {
    this._wantAssertionsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantAssertionsSignedInput() {
    return this._wantAssertionsSigned;
  }

  // xml_sign_key_info_key_name_transformer - computed: false, optional: true, required: false
  private _xmlSignKeyInfoKeyNameTransformer?: string; 
  public get xmlSignKeyInfoKeyNameTransformer() {
    return this.getStringAttribute('xml_sign_key_info_key_name_transformer');
  }
  public set xmlSignKeyInfoKeyNameTransformer(value: string) {
    this._xmlSignKeyInfoKeyNameTransformer = value;
  }
  public resetXmlSignKeyInfoKeyNameTransformer() {
    this._xmlSignKeyInfoKeyNameTransformer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSignKeyInfoKeyNameTransformerInput() {
    return this._xmlSignKeyInfoKeyNameTransformer;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_read_token_role_on_create: cdktf.booleanToTerraform(this._addReadTokenRoleOnCreate),
      alias: cdktf.stringToTerraform(this._alias),
      authenticate_by_default: cdktf.booleanToTerraform(this._authenticateByDefault),
      authn_context_class_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authnContextClassRefs),
      authn_context_comparison_type: cdktf.stringToTerraform(this._authnContextComparisonType),
      authn_context_decl_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authnContextDeclRefs),
      backchannel_supported: cdktf.booleanToTerraform(this._backchannelSupported),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      entity_id: cdktf.stringToTerraform(this._entityId),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      first_broker_login_flow_alias: cdktf.stringToTerraform(this._firstBrokerLoginFlowAlias),
      force_authn: cdktf.booleanToTerraform(this._forceAuthn),
      gui_order: cdktf.stringToTerraform(this._guiOrder),
      hide_on_login_page: cdktf.booleanToTerraform(this._hideOnLoginPage),
      id: cdktf.stringToTerraform(this._id),
      link_only: cdktf.booleanToTerraform(this._linkOnly),
      login_hint: cdktf.stringToTerraform(this._loginHint),
      name_id_policy_format: cdktf.stringToTerraform(this._nameIdPolicyFormat),
      post_binding_authn_request: cdktf.booleanToTerraform(this._postBindingAuthnRequest),
      post_binding_logout: cdktf.booleanToTerraform(this._postBindingLogout),
      post_binding_response: cdktf.booleanToTerraform(this._postBindingResponse),
      post_broker_login_flow_alias: cdktf.stringToTerraform(this._postBrokerLoginFlowAlias),
      principal_attribute: cdktf.stringToTerraform(this._principalAttribute),
      principal_type: cdktf.stringToTerraform(this._principalType),
      provider_id: cdktf.stringToTerraform(this._providerId),
      realm: cdktf.stringToTerraform(this._realm),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      signing_certificate: cdktf.stringToTerraform(this._signingCertificate),
      single_logout_service_url: cdktf.stringToTerraform(this._singleLogoutServiceUrl),
      single_sign_on_service_url: cdktf.stringToTerraform(this._singleSignOnServiceUrl),
      store_token: cdktf.booleanToTerraform(this._storeToken),
      sync_mode: cdktf.stringToTerraform(this._syncMode),
      trust_email: cdktf.booleanToTerraform(this._trustEmail),
      validate_signature: cdktf.booleanToTerraform(this._validateSignature),
      want_assertions_encrypted: cdktf.booleanToTerraform(this._wantAssertionsEncrypted),
      want_assertions_signed: cdktf.booleanToTerraform(this._wantAssertionsSigned),
      xml_sign_key_info_key_name_transformer: cdktf.stringToTerraform(this._xmlSignKeyInfoKeyNameTransformer),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_read_token_role_on_create: {
        value: cdktf.booleanToHclTerraform(this._addReadTokenRoleOnCreate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticate_by_default: {
        value: cdktf.booleanToHclTerraform(this._authenticateByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authn_context_class_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authnContextClassRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      authn_context_comparison_type: {
        value: cdktf.stringToHclTerraform(this._authnContextComparisonType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authn_context_decl_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authnContextDeclRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      backchannel_supported: {
        value: cdktf.booleanToHclTerraform(this._backchannelSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      entity_id: {
        value: cdktf.stringToHclTerraform(this._entityId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extra_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      first_broker_login_flow_alias: {
        value: cdktf.stringToHclTerraform(this._firstBrokerLoginFlowAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_authn: {
        value: cdktf.booleanToHclTerraform(this._forceAuthn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gui_order: {
        value: cdktf.stringToHclTerraform(this._guiOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_on_login_page: {
        value: cdktf.booleanToHclTerraform(this._hideOnLoginPage),
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
      link_only: {
        value: cdktf.booleanToHclTerraform(this._linkOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_hint: {
        value: cdktf.stringToHclTerraform(this._loginHint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_id_policy_format: {
        value: cdktf.stringToHclTerraform(this._nameIdPolicyFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_binding_authn_request: {
        value: cdktf.booleanToHclTerraform(this._postBindingAuthnRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      post_binding_logout: {
        value: cdktf.booleanToHclTerraform(this._postBindingLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      post_binding_response: {
        value: cdktf.booleanToHclTerraform(this._postBindingResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      post_broker_login_flow_alias: {
        value: cdktf.stringToHclTerraform(this._postBrokerLoginFlowAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_attribute: {
        value: cdktf.stringToHclTerraform(this._principalAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      principal_type: {
        value: cdktf.stringToHclTerraform(this._principalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_certificate: {
        value: cdktf.stringToHclTerraform(this._signingCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_logout_service_url: {
        value: cdktf.stringToHclTerraform(this._singleLogoutServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      single_sign_on_service_url: {
        value: cdktf.stringToHclTerraform(this._singleSignOnServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_token: {
        value: cdktf.booleanToHclTerraform(this._storeToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_mode: {
        value: cdktf.stringToHclTerraform(this._syncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_email: {
        value: cdktf.booleanToHclTerraform(this._trustEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      validate_signature: {
        value: cdktf.booleanToHclTerraform(this._validateSignature),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      want_assertions_encrypted: {
        value: cdktf.booleanToHclTerraform(this._wantAssertionsEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      want_assertions_signed: {
        value: cdktf.booleanToHclTerraform(this._wantAssertionsSigned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      xml_sign_key_info_key_name_transformer: {
        value: cdktf.stringToHclTerraform(this._xmlSignKeyInfoKeyNameTransformer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
