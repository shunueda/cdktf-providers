// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#acs_url ProviderSaml#acs_url}
  */
  readonly acsUrl: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=-5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#assertion_valid_not_before ProviderSaml#assertion_valid_not_before}
  */
  readonly assertionValidNotBefore?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#assertion_valid_not_on_or_after ProviderSaml#assertion_valid_not_on_or_after}
  */
  readonly assertionValidNotOnOrAfter?: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#audience ProviderSaml#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#authentication_flow ProviderSaml#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#authn_context_class_ref_mapping ProviderSaml#authn_context_class_ref_mapping}
  */
  readonly authnContextClassRefMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#authorization_flow ProviderSaml#authorization_flow}
  */
  readonly authorizationFlow: string;
  /**
  * Defaults to ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#default_relay_state ProviderSaml#default_relay_state}
  */
  readonly defaultRelayState?: string;
  /**
  * Allowed values:
  *   - `http://www.w3.org/2000/09/xmldsig#sha1`
  *   - `http://www.w3.org/2001/04/xmlenc#sha256`
  *   - `http://www.w3.org/2001/04/xmldsig-more#sha384`
  *   - `http://www.w3.org/2001/04/xmlenc#sha512`
  *  Defaults to `http://www.w3.org/2001/04/xmlenc#sha256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#digest_algorithm ProviderSaml#digest_algorithm}
  */
  readonly digestAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#encryption_kp ProviderSaml#encryption_kp}
  */
  readonly encryptionKp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#id ProviderSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#invalidation_flow ProviderSaml#invalidation_flow}
  */
  readonly invalidationFlow: string;
  /**
  * Defaults to `authentik`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#issuer ProviderSaml#issuer}
  */
  readonly issuer?: string;
  /**
  * Allowed values:
  *   - `frontchannel_iframe`
  *   - `frontchannel_native`
  *   - `backchannel`
  *  Defaults to `backchannel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#logout_method ProviderSaml#logout_method}
  */
  readonly logoutMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#name ProviderSaml#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#name_id_mapping ProviderSaml#name_id_mapping}
  */
  readonly nameIdMapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#property_mappings ProviderSaml#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#session_valid_not_on_or_after ProviderSaml#session_valid_not_on_or_after}
  */
  readonly sessionValidNotOnOrAfter?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#sign_assertion ProviderSaml#sign_assertion}
  */
  readonly signAssertion?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#sign_logout_request ProviderSaml#sign_logout_request}
  */
  readonly signLogoutRequest?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#sign_response ProviderSaml#sign_response}
  */
  readonly signResponse?: boolean | cdktf.IResolvable;
  /**
  * Allowed values:
  *   - `http://www.w3.org/2000/09/xmldsig#rsa-sha1`
  *   - `http://www.w3.org/2001/04/xmldsig-more#rsa-sha256`
  *   - `http://www.w3.org/2001/04/xmldsig-more#rsa-sha384`
  *   - `http://www.w3.org/2001/04/xmldsig-more#rsa-sha512`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha1`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha256`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha384`
  *   - `http://www.w3.org/2001/04/xmldsig-more#ecdsa-sha512`
  *   - `http://www.w3.org/2000/09/xmldsig#dsa-sha1`
  *  Defaults to `http://www.w3.org/2001/04/xmldsig-more#rsa-sha256`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#signature_algorithm ProviderSaml#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#signing_kp ProviderSaml#signing_kp}
  */
  readonly signingKp?: string;
  /**
  * Allowed values:
  *   - `redirect`
  *   - `post`
  *  Defaults to `redirect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#sls_binding ProviderSaml#sls_binding}
  */
  readonly slsBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#sls_url ProviderSaml#sls_url}
  */
  readonly slsUrl?: string;
  /**
  * Allowed values:
  *   - `redirect`
  *   - `post`
  *  Defaults to `redirect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#sp_binding ProviderSaml#sp_binding}
  */
  readonly spBinding?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#url_slo_post ProviderSaml#url_slo_post}
  */
  readonly urlSloPost?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#url_slo_redirect ProviderSaml#url_slo_redirect}
  */
  readonly urlSloRedirect?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#url_sso_init ProviderSaml#url_sso_init}
  */
  readonly urlSsoInit?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#url_sso_post ProviderSaml#url_sso_post}
  */
  readonly urlSsoPost?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#url_sso_redirect ProviderSaml#url_sso_redirect}
  */
  readonly urlSsoRedirect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#verification_kp ProviderSaml#verification_kp}
  */
  readonly verificationKp?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml authentik_provider_saml}
*/
export class ProviderSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderSaml to import
  * @param importFromId The id of the existing ProviderSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_saml authentik_provider_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderSamlConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_saml',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acsUrl = config.acsUrl;
    this._assertionValidNotBefore = config.assertionValidNotBefore;
    this._assertionValidNotOnOrAfter = config.assertionValidNotOnOrAfter;
    this._audience = config.audience;
    this._authenticationFlow = config.authenticationFlow;
    this._authnContextClassRefMapping = config.authnContextClassRefMapping;
    this._authorizationFlow = config.authorizationFlow;
    this._defaultRelayState = config.defaultRelayState;
    this._digestAlgorithm = config.digestAlgorithm;
    this._encryptionKp = config.encryptionKp;
    this._id = config.id;
    this._invalidationFlow = config.invalidationFlow;
    this._issuer = config.issuer;
    this._logoutMethod = config.logoutMethod;
    this._name = config.name;
    this._nameIdMapping = config.nameIdMapping;
    this._propertyMappings = config.propertyMappings;
    this._sessionValidNotOnOrAfter = config.sessionValidNotOnOrAfter;
    this._signAssertion = config.signAssertion;
    this._signLogoutRequest = config.signLogoutRequest;
    this._signResponse = config.signResponse;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._signingKp = config.signingKp;
    this._slsBinding = config.slsBinding;
    this._slsUrl = config.slsUrl;
    this._spBinding = config.spBinding;
    this._urlSloPost = config.urlSloPost;
    this._urlSloRedirect = config.urlSloRedirect;
    this._urlSsoInit = config.urlSsoInit;
    this._urlSsoPost = config.urlSsoPost;
    this._urlSsoRedirect = config.urlSsoRedirect;
    this._verificationKp = config.verificationKp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acs_url - computed: false, optional: false, required: true
  private _acsUrl?: string; 
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }
  public set acsUrl(value: string) {
    this._acsUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acsUrlInput() {
    return this._acsUrl;
  }

  // assertion_valid_not_before - computed: false, optional: true, required: false
  private _assertionValidNotBefore?: string; 
  public get assertionValidNotBefore() {
    return this.getStringAttribute('assertion_valid_not_before');
  }
  public set assertionValidNotBefore(value: string) {
    this._assertionValidNotBefore = value;
  }
  public resetAssertionValidNotBefore() {
    this._assertionValidNotBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionValidNotBeforeInput() {
    return this._assertionValidNotBefore;
  }

  // assertion_valid_not_on_or_after - computed: false, optional: true, required: false
  private _assertionValidNotOnOrAfter?: string; 
  public get assertionValidNotOnOrAfter() {
    return this.getStringAttribute('assertion_valid_not_on_or_after');
  }
  public set assertionValidNotOnOrAfter(value: string) {
    this._assertionValidNotOnOrAfter = value;
  }
  public resetAssertionValidNotOnOrAfter() {
    this._assertionValidNotOnOrAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionValidNotOnOrAfterInput() {
    return this._assertionValidNotOnOrAfter;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow?: string; 
  public get authenticationFlow() {
    return this.getStringAttribute('authentication_flow');
  }
  public set authenticationFlow(value: string) {
    this._authenticationFlow = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow;
  }

  // authn_context_class_ref_mapping - computed: false, optional: true, required: false
  private _authnContextClassRefMapping?: string; 
  public get authnContextClassRefMapping() {
    return this.getStringAttribute('authn_context_class_ref_mapping');
  }
  public set authnContextClassRefMapping(value: string) {
    this._authnContextClassRefMapping = value;
  }
  public resetAuthnContextClassRefMapping() {
    this._authnContextClassRefMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextClassRefMappingInput() {
    return this._authnContextClassRefMapping;
  }

  // authorization_flow - computed: false, optional: false, required: true
  private _authorizationFlow?: string; 
  public get authorizationFlow() {
    return this.getStringAttribute('authorization_flow');
  }
  public set authorizationFlow(value: string) {
    this._authorizationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationFlowInput() {
    return this._authorizationFlow;
  }

  // default_relay_state - computed: false, optional: true, required: false
  private _defaultRelayState?: string; 
  public get defaultRelayState() {
    return this.getStringAttribute('default_relay_state');
  }
  public set defaultRelayState(value: string) {
    this._defaultRelayState = value;
  }
  public resetDefaultRelayState() {
    this._defaultRelayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRelayStateInput() {
    return this._defaultRelayState;
  }

  // digest_algorithm - computed: false, optional: true, required: false
  private _digestAlgorithm?: string; 
  public get digestAlgorithm() {
    return this.getStringAttribute('digest_algorithm');
  }
  public set digestAlgorithm(value: string) {
    this._digestAlgorithm = value;
  }
  public resetDigestAlgorithm() {
    this._digestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digestAlgorithmInput() {
    return this._digestAlgorithm;
  }

  // encryption_kp - computed: false, optional: true, required: false
  private _encryptionKp?: string; 
  public get encryptionKp() {
    return this.getStringAttribute('encryption_kp');
  }
  public set encryptionKp(value: string) {
    this._encryptionKp = value;
  }
  public resetEncryptionKp() {
    this._encryptionKp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKpInput() {
    return this._encryptionKp;
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

  // invalidation_flow - computed: false, optional: false, required: true
  private _invalidationFlow?: string; 
  public get invalidationFlow() {
    return this.getStringAttribute('invalidation_flow');
  }
  public set invalidationFlow(value: string) {
    this._invalidationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidationFlowInput() {
    return this._invalidationFlow;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // logout_method - computed: false, optional: true, required: false
  private _logoutMethod?: string; 
  public get logoutMethod() {
    return this.getStringAttribute('logout_method');
  }
  public set logoutMethod(value: string) {
    this._logoutMethod = value;
  }
  public resetLogoutMethod() {
    this._logoutMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutMethodInput() {
    return this._logoutMethod;
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

  // name_id_mapping - computed: false, optional: true, required: false
  private _nameIdMapping?: string; 
  public get nameIdMapping() {
    return this.getStringAttribute('name_id_mapping');
  }
  public set nameIdMapping(value: string) {
    this._nameIdMapping = value;
  }
  public resetNameIdMapping() {
    this._nameIdMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdMappingInput() {
    return this._nameIdMapping;
  }

  // property_mappings - computed: false, optional: true, required: false
  private _propertyMappings?: string[]; 
  public get propertyMappings() {
    return this.getListAttribute('property_mappings');
  }
  public set propertyMappings(value: string[]) {
    this._propertyMappings = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings;
  }

  // session_valid_not_on_or_after - computed: false, optional: true, required: false
  private _sessionValidNotOnOrAfter?: string; 
  public get sessionValidNotOnOrAfter() {
    return this.getStringAttribute('session_valid_not_on_or_after');
  }
  public set sessionValidNotOnOrAfter(value: string) {
    this._sessionValidNotOnOrAfter = value;
  }
  public resetSessionValidNotOnOrAfter() {
    this._sessionValidNotOnOrAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionValidNotOnOrAfterInput() {
    return this._sessionValidNotOnOrAfter;
  }

  // sign_assertion - computed: false, optional: true, required: false
  private _signAssertion?: boolean | cdktf.IResolvable; 
  public get signAssertion() {
    return this.getBooleanAttribute('sign_assertion');
  }
  public set signAssertion(value: boolean | cdktf.IResolvable) {
    this._signAssertion = value;
  }
  public resetSignAssertion() {
    this._signAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAssertionInput() {
    return this._signAssertion;
  }

  // sign_logout_request - computed: false, optional: true, required: false
  private _signLogoutRequest?: boolean | cdktf.IResolvable; 
  public get signLogoutRequest() {
    return this.getBooleanAttribute('sign_logout_request');
  }
  public set signLogoutRequest(value: boolean | cdktf.IResolvable) {
    this._signLogoutRequest = value;
  }
  public resetSignLogoutRequest() {
    this._signLogoutRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signLogoutRequestInput() {
    return this._signLogoutRequest;
  }

  // sign_response - computed: false, optional: true, required: false
  private _signResponse?: boolean | cdktf.IResolvable; 
  public get signResponse() {
    return this.getBooleanAttribute('sign_response');
  }
  public set signResponse(value: boolean | cdktf.IResolvable) {
    this._signResponse = value;
  }
  public resetSignResponse() {
    this._signResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signResponseInput() {
    return this._signResponse;
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

  // signing_kp - computed: false, optional: true, required: false
  private _signingKp?: string; 
  public get signingKp() {
    return this.getStringAttribute('signing_kp');
  }
  public set signingKp(value: string) {
    this._signingKp = value;
  }
  public resetSigningKp() {
    this._signingKp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKpInput() {
    return this._signingKp;
  }

  // sls_binding - computed: false, optional: true, required: false
  private _slsBinding?: string; 
  public get slsBinding() {
    return this.getStringAttribute('sls_binding');
  }
  public set slsBinding(value: string) {
    this._slsBinding = value;
  }
  public resetSlsBinding() {
    this._slsBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsBindingInput() {
    return this._slsBinding;
  }

  // sls_url - computed: false, optional: true, required: false
  private _slsUrl?: string; 
  public get slsUrl() {
    return this.getStringAttribute('sls_url');
  }
  public set slsUrl(value: string) {
    this._slsUrl = value;
  }
  public resetSlsUrl() {
    this._slsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsUrlInput() {
    return this._slsUrl;
  }

  // sp_binding - computed: false, optional: true, required: false
  private _spBinding?: string; 
  public get spBinding() {
    return this.getStringAttribute('sp_binding');
  }
  public set spBinding(value: string) {
    this._spBinding = value;
  }
  public resetSpBinding() {
    this._spBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spBindingInput() {
    return this._spBinding;
  }

  // url_slo_post - computed: true, optional: true, required: false
  private _urlSloPost?: string; 
  public get urlSloPost() {
    return this.getStringAttribute('url_slo_post');
  }
  public set urlSloPost(value: string) {
    this._urlSloPost = value;
  }
  public resetUrlSloPost() {
    this._urlSloPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSloPostInput() {
    return this._urlSloPost;
  }

  // url_slo_redirect - computed: true, optional: true, required: false
  private _urlSloRedirect?: string; 
  public get urlSloRedirect() {
    return this.getStringAttribute('url_slo_redirect');
  }
  public set urlSloRedirect(value: string) {
    this._urlSloRedirect = value;
  }
  public resetUrlSloRedirect() {
    this._urlSloRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSloRedirectInput() {
    return this._urlSloRedirect;
  }

  // url_sso_init - computed: true, optional: true, required: false
  private _urlSsoInit?: string; 
  public get urlSsoInit() {
    return this.getStringAttribute('url_sso_init');
  }
  public set urlSsoInit(value: string) {
    this._urlSsoInit = value;
  }
  public resetUrlSsoInit() {
    this._urlSsoInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSsoInitInput() {
    return this._urlSsoInit;
  }

  // url_sso_post - computed: true, optional: true, required: false
  private _urlSsoPost?: string; 
  public get urlSsoPost() {
    return this.getStringAttribute('url_sso_post');
  }
  public set urlSsoPost(value: string) {
    this._urlSsoPost = value;
  }
  public resetUrlSsoPost() {
    this._urlSsoPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSsoPostInput() {
    return this._urlSsoPost;
  }

  // url_sso_redirect - computed: true, optional: true, required: false
  private _urlSsoRedirect?: string; 
  public get urlSsoRedirect() {
    return this.getStringAttribute('url_sso_redirect');
  }
  public set urlSsoRedirect(value: string) {
    this._urlSsoRedirect = value;
  }
  public resetUrlSsoRedirect() {
    this._urlSsoRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSsoRedirectInput() {
    return this._urlSsoRedirect;
  }

  // verification_kp - computed: false, optional: true, required: false
  private _verificationKp?: string; 
  public get verificationKp() {
    return this.getStringAttribute('verification_kp');
  }
  public set verificationKp(value: string) {
    this._verificationKp = value;
  }
  public resetVerificationKp() {
    this._verificationKp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationKpInput() {
    return this._verificationKp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acs_url: cdktf.stringToTerraform(this._acsUrl),
      assertion_valid_not_before: cdktf.stringToTerraform(this._assertionValidNotBefore),
      assertion_valid_not_on_or_after: cdktf.stringToTerraform(this._assertionValidNotOnOrAfter),
      audience: cdktf.stringToTerraform(this._audience),
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      authn_context_class_ref_mapping: cdktf.stringToTerraform(this._authnContextClassRefMapping),
      authorization_flow: cdktf.stringToTerraform(this._authorizationFlow),
      default_relay_state: cdktf.stringToTerraform(this._defaultRelayState),
      digest_algorithm: cdktf.stringToTerraform(this._digestAlgorithm),
      encryption_kp: cdktf.stringToTerraform(this._encryptionKp),
      id: cdktf.stringToTerraform(this._id),
      invalidation_flow: cdktf.stringToTerraform(this._invalidationFlow),
      issuer: cdktf.stringToTerraform(this._issuer),
      logout_method: cdktf.stringToTerraform(this._logoutMethod),
      name: cdktf.stringToTerraform(this._name),
      name_id_mapping: cdktf.stringToTerraform(this._nameIdMapping),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      session_valid_not_on_or_after: cdktf.stringToTerraform(this._sessionValidNotOnOrAfter),
      sign_assertion: cdktf.booleanToTerraform(this._signAssertion),
      sign_logout_request: cdktf.booleanToTerraform(this._signLogoutRequest),
      sign_response: cdktf.booleanToTerraform(this._signResponse),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      signing_kp: cdktf.stringToTerraform(this._signingKp),
      sls_binding: cdktf.stringToTerraform(this._slsBinding),
      sls_url: cdktf.stringToTerraform(this._slsUrl),
      sp_binding: cdktf.stringToTerraform(this._spBinding),
      url_slo_post: cdktf.stringToTerraform(this._urlSloPost),
      url_slo_redirect: cdktf.stringToTerraform(this._urlSloRedirect),
      url_sso_init: cdktf.stringToTerraform(this._urlSsoInit),
      url_sso_post: cdktf.stringToTerraform(this._urlSsoPost),
      url_sso_redirect: cdktf.stringToTerraform(this._urlSsoRedirect),
      verification_kp: cdktf.stringToTerraform(this._verificationKp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acs_url: {
        value: cdktf.stringToHclTerraform(this._acsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assertion_valid_not_before: {
        value: cdktf.stringToHclTerraform(this._assertionValidNotBefore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assertion_valid_not_on_or_after: {
        value: cdktf.stringToHclTerraform(this._assertionValidNotOnOrAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_flow: {
        value: cdktf.stringToHclTerraform(this._authenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authn_context_class_ref_mapping: {
        value: cdktf.stringToHclTerraform(this._authnContextClassRefMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_flow: {
        value: cdktf.stringToHclTerraform(this._authorizationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_relay_state: {
        value: cdktf.stringToHclTerraform(this._defaultRelayState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digest_algorithm: {
        value: cdktf.stringToHclTerraform(this._digestAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_kp: {
        value: cdktf.stringToHclTerraform(this._encryptionKp),
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
      invalidation_flow: {
        value: cdktf.stringToHclTerraform(this._invalidationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_method: {
        value: cdktf.stringToHclTerraform(this._logoutMethod),
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
      name_id_mapping: {
        value: cdktf.stringToHclTerraform(this._nameIdMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      session_valid_not_on_or_after: {
        value: cdktf.stringToHclTerraform(this._sessionValidNotOnOrAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_assertion: {
        value: cdktf.booleanToHclTerraform(this._signAssertion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sign_logout_request: {
        value: cdktf.booleanToHclTerraform(this._signLogoutRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sign_response: {
        value: cdktf.booleanToHclTerraform(this._signResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._signatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_kp: {
        value: cdktf.stringToHclTerraform(this._signingKp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_binding: {
        value: cdktf.stringToHclTerraform(this._slsBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_url: {
        value: cdktf.stringToHclTerraform(this._slsUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sp_binding: {
        value: cdktf.stringToHclTerraform(this._spBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_slo_post: {
        value: cdktf.stringToHclTerraform(this._urlSloPost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_slo_redirect: {
        value: cdktf.stringToHclTerraform(this._urlSloRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_sso_init: {
        value: cdktf.stringToHclTerraform(this._urlSsoInit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_sso_post: {
        value: cdktf.stringToHclTerraform(this._urlSsoPost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_sso_redirect: {
        value: cdktf.stringToHclTerraform(this._urlSsoRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_kp: {
        value: cdktf.stringToHclTerraform(this._verificationKp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
