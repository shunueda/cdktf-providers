// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SamlClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#assertion_consumer_post_url SamlClient#assertion_consumer_post_url}
  */
  readonly assertionConsumerPostUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#assertion_consumer_redirect_url SamlClient#assertion_consumer_redirect_url}
  */
  readonly assertionConsumerRedirectUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#base_url SamlClient#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#canonicalization_method SamlClient#canonicalization_method}
  */
  readonly canonicalizationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#client_id SamlClient#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#client_signature_required SamlClient#client_signature_required}
  */
  readonly clientSignatureRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#description SamlClient#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#enabled SamlClient#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#encrypt_assertions SamlClient#encrypt_assertions}
  */
  readonly encryptAssertions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#encryption_certificate SamlClient#encryption_certificate}
  */
  readonly encryptionCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#extra_config SamlClient#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#force_name_id_format SamlClient#force_name_id_format}
  */
  readonly forceNameIdFormat?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#force_post_binding SamlClient#force_post_binding}
  */
  readonly forcePostBinding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#front_channel_logout SamlClient#front_channel_logout}
  */
  readonly frontChannelLogout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#full_scope_allowed SamlClient#full_scope_allowed}
  */
  readonly fullScopeAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#id SamlClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#idp_initiated_sso_relay_state SamlClient#idp_initiated_sso_relay_state}
  */
  readonly idpInitiatedSsoRelayState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#idp_initiated_sso_url_name SamlClient#idp_initiated_sso_url_name}
  */
  readonly idpInitiatedSsoUrlName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#include_authn_statement SamlClient#include_authn_statement}
  */
  readonly includeAuthnStatement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#login_theme SamlClient#login_theme}
  */
  readonly loginTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#logout_service_post_binding_url SamlClient#logout_service_post_binding_url}
  */
  readonly logoutServicePostBindingUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#logout_service_redirect_binding_url SamlClient#logout_service_redirect_binding_url}
  */
  readonly logoutServiceRedirectBindingUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#master_saml_processing_url SamlClient#master_saml_processing_url}
  */
  readonly masterSamlProcessingUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#name SamlClient#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#name_id_format SamlClient#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#realm_id SamlClient#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#root_url SamlClient#root_url}
  */
  readonly rootUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#sign_assertions SamlClient#sign_assertions}
  */
  readonly signAssertions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#sign_documents SamlClient#sign_documents}
  */
  readonly signDocuments?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#signature_algorithm SamlClient#signature_algorithm}
  */
  readonly signatureAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#signature_key_name SamlClient#signature_key_name}
  */
  readonly signatureKeyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#signing_certificate SamlClient#signing_certificate}
  */
  readonly signingCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#signing_private_key SamlClient#signing_private_key}
  */
  readonly signingPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#valid_redirect_uris SamlClient#valid_redirect_uris}
  */
  readonly validRedirectUris?: string[];
  /**
  * authentication_flow_binding_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#authentication_flow_binding_overrides SamlClient#authentication_flow_binding_overrides}
  */
  readonly authenticationFlowBindingOverrides?: SamlClientAuthenticationFlowBindingOverrides;
}
export interface SamlClientAuthenticationFlowBindingOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#browser_id SamlClient#browser_id}
  */
  readonly browserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#direct_grant_id SamlClient#direct_grant_id}
  */
  readonly directGrantId?: string;
}

export function samlClientAuthenticationFlowBindingOverridesToTerraform(struct?: SamlClientAuthenticationFlowBindingOverridesOutputReference | SamlClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_id: cdktf.stringToTerraform(struct!.browserId),
    direct_grant_id: cdktf.stringToTerraform(struct!.directGrantId),
  }
}


export function samlClientAuthenticationFlowBindingOverridesToHclTerraform(struct?: SamlClientAuthenticationFlowBindingOverridesOutputReference | SamlClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser_id: {
      value: cdktf.stringToHclTerraform(struct!.browserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_grant_id: {
      value: cdktf.stringToHclTerraform(struct!.directGrantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SamlClientAuthenticationFlowBindingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SamlClientAuthenticationFlowBindingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserId = this._browserId;
    }
    if (this._directGrantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directGrantId = this._directGrantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SamlClientAuthenticationFlowBindingOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browserId = undefined;
      this._directGrantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browserId = value.browserId;
      this._directGrantId = value.directGrantId;
    }
  }

  // browser_id - computed: false, optional: true, required: false
  private _browserId?: string; 
  public get browserId() {
    return this.getStringAttribute('browser_id');
  }
  public set browserId(value: string) {
    this._browserId = value;
  }
  public resetBrowserId() {
    this._browserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserIdInput() {
    return this._browserId;
  }

  // direct_grant_id - computed: false, optional: true, required: false
  private _directGrantId?: string; 
  public get directGrantId() {
    return this.getStringAttribute('direct_grant_id');
  }
  public set directGrantId(value: string) {
    this._directGrantId = value;
  }
  public resetDirectGrantId() {
    this._directGrantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directGrantIdInput() {
    return this._directGrantId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client keycloak_saml_client}
*/
export class SamlClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_saml_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SamlClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SamlClient to import
  * @param importFromId The id of the existing SamlClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SamlClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_saml_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/resources/saml_client keycloak_saml_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SamlClientConfig
  */
  public constructor(scope: Construct, id: string, config: SamlClientConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_saml_client',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assertionConsumerPostUrl = config.assertionConsumerPostUrl;
    this._assertionConsumerRedirectUrl = config.assertionConsumerRedirectUrl;
    this._baseUrl = config.baseUrl;
    this._canonicalizationMethod = config.canonicalizationMethod;
    this._clientId = config.clientId;
    this._clientSignatureRequired = config.clientSignatureRequired;
    this._description = config.description;
    this._enabled = config.enabled;
    this._encryptAssertions = config.encryptAssertions;
    this._encryptionCertificate = config.encryptionCertificate;
    this._extraConfig = config.extraConfig;
    this._forceNameIdFormat = config.forceNameIdFormat;
    this._forcePostBinding = config.forcePostBinding;
    this._frontChannelLogout = config.frontChannelLogout;
    this._fullScopeAllowed = config.fullScopeAllowed;
    this._id = config.id;
    this._idpInitiatedSsoRelayState = config.idpInitiatedSsoRelayState;
    this._idpInitiatedSsoUrlName = config.idpInitiatedSsoUrlName;
    this._includeAuthnStatement = config.includeAuthnStatement;
    this._loginTheme = config.loginTheme;
    this._logoutServicePostBindingUrl = config.logoutServicePostBindingUrl;
    this._logoutServiceRedirectBindingUrl = config.logoutServiceRedirectBindingUrl;
    this._masterSamlProcessingUrl = config.masterSamlProcessingUrl;
    this._name = config.name;
    this._nameIdFormat = config.nameIdFormat;
    this._realmId = config.realmId;
    this._rootUrl = config.rootUrl;
    this._signAssertions = config.signAssertions;
    this._signDocuments = config.signDocuments;
    this._signatureAlgorithm = config.signatureAlgorithm;
    this._signatureKeyName = config.signatureKeyName;
    this._signingCertificate = config.signingCertificate;
    this._signingPrivateKey = config.signingPrivateKey;
    this._validRedirectUris = config.validRedirectUris;
    this._authenticationFlowBindingOverrides.internalValue = config.authenticationFlowBindingOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assertion_consumer_post_url - computed: false, optional: true, required: false
  private _assertionConsumerPostUrl?: string; 
  public get assertionConsumerPostUrl() {
    return this.getStringAttribute('assertion_consumer_post_url');
  }
  public set assertionConsumerPostUrl(value: string) {
    this._assertionConsumerPostUrl = value;
  }
  public resetAssertionConsumerPostUrl() {
    this._assertionConsumerPostUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionConsumerPostUrlInput() {
    return this._assertionConsumerPostUrl;
  }

  // assertion_consumer_redirect_url - computed: false, optional: true, required: false
  private _assertionConsumerRedirectUrl?: string; 
  public get assertionConsumerRedirectUrl() {
    return this.getStringAttribute('assertion_consumer_redirect_url');
  }
  public set assertionConsumerRedirectUrl(value: string) {
    this._assertionConsumerRedirectUrl = value;
  }
  public resetAssertionConsumerRedirectUrl() {
    this._assertionConsumerRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionConsumerRedirectUrlInput() {
    return this._assertionConsumerRedirectUrl;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // canonicalization_method - computed: false, optional: true, required: false
  private _canonicalizationMethod?: string; 
  public get canonicalizationMethod() {
    return this.getStringAttribute('canonicalization_method');
  }
  public set canonicalizationMethod(value: string) {
    this._canonicalizationMethod = value;
  }
  public resetCanonicalizationMethod() {
    this._canonicalizationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalizationMethodInput() {
    return this._canonicalizationMethod;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_signature_required - computed: false, optional: true, required: false
  private _clientSignatureRequired?: boolean | cdktf.IResolvable; 
  public get clientSignatureRequired() {
    return this.getBooleanAttribute('client_signature_required');
  }
  public set clientSignatureRequired(value: boolean | cdktf.IResolvable) {
    this._clientSignatureRequired = value;
  }
  public resetClientSignatureRequired() {
    this._clientSignatureRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSignatureRequiredInput() {
    return this._clientSignatureRequired;
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

  // encrypt_assertions - computed: false, optional: true, required: false
  private _encryptAssertions?: boolean | cdktf.IResolvable; 
  public get encryptAssertions() {
    return this.getBooleanAttribute('encrypt_assertions');
  }
  public set encryptAssertions(value: boolean | cdktf.IResolvable) {
    this._encryptAssertions = value;
  }
  public resetEncryptAssertions() {
    this._encryptAssertions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAssertionsInput() {
    return this._encryptAssertions;
  }

  // encryption_certificate - computed: true, optional: true, required: false
  private _encryptionCertificate?: string; 
  public get encryptionCertificate() {
    return this.getStringAttribute('encryption_certificate');
  }
  public set encryptionCertificate(value: string) {
    this._encryptionCertificate = value;
  }
  public resetEncryptionCertificate() {
    this._encryptionCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionCertificateInput() {
    return this._encryptionCertificate;
  }

  // encryption_certificate_sha1 - computed: true, optional: false, required: false
  public get encryptionCertificateSha1() {
    return this.getStringAttribute('encryption_certificate_sha1');
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

  // force_name_id_format - computed: false, optional: true, required: false
  private _forceNameIdFormat?: boolean | cdktf.IResolvable; 
  public get forceNameIdFormat() {
    return this.getBooleanAttribute('force_name_id_format');
  }
  public set forceNameIdFormat(value: boolean | cdktf.IResolvable) {
    this._forceNameIdFormat = value;
  }
  public resetForceNameIdFormat() {
    this._forceNameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNameIdFormatInput() {
    return this._forceNameIdFormat;
  }

  // force_post_binding - computed: false, optional: true, required: false
  private _forcePostBinding?: boolean | cdktf.IResolvable; 
  public get forcePostBinding() {
    return this.getBooleanAttribute('force_post_binding');
  }
  public set forcePostBinding(value: boolean | cdktf.IResolvable) {
    this._forcePostBinding = value;
  }
  public resetForcePostBinding() {
    this._forcePostBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePostBindingInput() {
    return this._forcePostBinding;
  }

  // front_channel_logout - computed: false, optional: true, required: false
  private _frontChannelLogout?: boolean | cdktf.IResolvable; 
  public get frontChannelLogout() {
    return this.getBooleanAttribute('front_channel_logout');
  }
  public set frontChannelLogout(value: boolean | cdktf.IResolvable) {
    this._frontChannelLogout = value;
  }
  public resetFrontChannelLogout() {
    this._frontChannelLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontChannelLogoutInput() {
    return this._frontChannelLogout;
  }

  // full_scope_allowed - computed: false, optional: true, required: false
  private _fullScopeAllowed?: boolean | cdktf.IResolvable; 
  public get fullScopeAllowed() {
    return this.getBooleanAttribute('full_scope_allowed');
  }
  public set fullScopeAllowed(value: boolean | cdktf.IResolvable) {
    this._fullScopeAllowed = value;
  }
  public resetFullScopeAllowed() {
    this._fullScopeAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullScopeAllowedInput() {
    return this._fullScopeAllowed;
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

  // idp_initiated_sso_relay_state - computed: false, optional: true, required: false
  private _idpInitiatedSsoRelayState?: string; 
  public get idpInitiatedSsoRelayState() {
    return this.getStringAttribute('idp_initiated_sso_relay_state');
  }
  public set idpInitiatedSsoRelayState(value: string) {
    this._idpInitiatedSsoRelayState = value;
  }
  public resetIdpInitiatedSsoRelayState() {
    this._idpInitiatedSsoRelayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInitiatedSsoRelayStateInput() {
    return this._idpInitiatedSsoRelayState;
  }

  // idp_initiated_sso_url_name - computed: false, optional: true, required: false
  private _idpInitiatedSsoUrlName?: string; 
  public get idpInitiatedSsoUrlName() {
    return this.getStringAttribute('idp_initiated_sso_url_name');
  }
  public set idpInitiatedSsoUrlName(value: string) {
    this._idpInitiatedSsoUrlName = value;
  }
  public resetIdpInitiatedSsoUrlName() {
    this._idpInitiatedSsoUrlName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpInitiatedSsoUrlNameInput() {
    return this._idpInitiatedSsoUrlName;
  }

  // include_authn_statement - computed: false, optional: true, required: false
  private _includeAuthnStatement?: boolean | cdktf.IResolvable; 
  public get includeAuthnStatement() {
    return this.getBooleanAttribute('include_authn_statement');
  }
  public set includeAuthnStatement(value: boolean | cdktf.IResolvable) {
    this._includeAuthnStatement = value;
  }
  public resetIncludeAuthnStatement() {
    this._includeAuthnStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeAuthnStatementInput() {
    return this._includeAuthnStatement;
  }

  // login_theme - computed: false, optional: true, required: false
  private _loginTheme?: string; 
  public get loginTheme() {
    return this.getStringAttribute('login_theme');
  }
  public set loginTheme(value: string) {
    this._loginTheme = value;
  }
  public resetLoginTheme() {
    this._loginTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginThemeInput() {
    return this._loginTheme;
  }

  // logout_service_post_binding_url - computed: false, optional: true, required: false
  private _logoutServicePostBindingUrl?: string; 
  public get logoutServicePostBindingUrl() {
    return this.getStringAttribute('logout_service_post_binding_url');
  }
  public set logoutServicePostBindingUrl(value: string) {
    this._logoutServicePostBindingUrl = value;
  }
  public resetLogoutServicePostBindingUrl() {
    this._logoutServicePostBindingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutServicePostBindingUrlInput() {
    return this._logoutServicePostBindingUrl;
  }

  // logout_service_redirect_binding_url - computed: false, optional: true, required: false
  private _logoutServiceRedirectBindingUrl?: string; 
  public get logoutServiceRedirectBindingUrl() {
    return this.getStringAttribute('logout_service_redirect_binding_url');
  }
  public set logoutServiceRedirectBindingUrl(value: string) {
    this._logoutServiceRedirectBindingUrl = value;
  }
  public resetLogoutServiceRedirectBindingUrl() {
    this._logoutServiceRedirectBindingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutServiceRedirectBindingUrlInput() {
    return this._logoutServiceRedirectBindingUrl;
  }

  // master_saml_processing_url - computed: false, optional: true, required: false
  private _masterSamlProcessingUrl?: string; 
  public get masterSamlProcessingUrl() {
    return this.getStringAttribute('master_saml_processing_url');
  }
  public set masterSamlProcessingUrl(value: string) {
    this._masterSamlProcessingUrl = value;
  }
  public resetMasterSamlProcessingUrl() {
    this._masterSamlProcessingUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterSamlProcessingUrlInput() {
    return this._masterSamlProcessingUrl;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_id_format - computed: true, optional: true, required: false
  private _nameIdFormat?: string; 
  public get nameIdFormat() {
    return this.getStringAttribute('name_id_format');
  }
  public set nameIdFormat(value: string) {
    this._nameIdFormat = value;
  }
  public resetNameIdFormat() {
    this._nameIdFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdFormatInput() {
    return this._nameIdFormat;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // root_url - computed: false, optional: true, required: false
  private _rootUrl?: string; 
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }
  public set rootUrl(value: string) {
    this._rootUrl = value;
  }
  public resetRootUrl() {
    this._rootUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUrlInput() {
    return this._rootUrl;
  }

  // sign_assertions - computed: false, optional: true, required: false
  private _signAssertions?: boolean | cdktf.IResolvable; 
  public get signAssertions() {
    return this.getBooleanAttribute('sign_assertions');
  }
  public set signAssertions(value: boolean | cdktf.IResolvable) {
    this._signAssertions = value;
  }
  public resetSignAssertions() {
    this._signAssertions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAssertionsInput() {
    return this._signAssertions;
  }

  // sign_documents - computed: false, optional: true, required: false
  private _signDocuments?: boolean | cdktf.IResolvable; 
  public get signDocuments() {
    return this.getBooleanAttribute('sign_documents');
  }
  public set signDocuments(value: boolean | cdktf.IResolvable) {
    this._signDocuments = value;
  }
  public resetSignDocuments() {
    this._signDocuments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signDocumentsInput() {
    return this._signDocuments;
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

  // signature_key_name - computed: false, optional: true, required: false
  private _signatureKeyName?: string; 
  public get signatureKeyName() {
    return this.getStringAttribute('signature_key_name');
  }
  public set signatureKeyName(value: string) {
    this._signatureKeyName = value;
  }
  public resetSignatureKeyName() {
    this._signatureKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureKeyNameInput() {
    return this._signatureKeyName;
  }

  // signing_certificate - computed: true, optional: true, required: false
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

  // signing_certificate_sha1 - computed: true, optional: false, required: false
  public get signingCertificateSha1() {
    return this.getStringAttribute('signing_certificate_sha1');
  }

  // signing_private_key - computed: true, optional: true, required: false
  private _signingPrivateKey?: string; 
  public get signingPrivateKey() {
    return this.getStringAttribute('signing_private_key');
  }
  public set signingPrivateKey(value: string) {
    this._signingPrivateKey = value;
  }
  public resetSigningPrivateKey() {
    this._signingPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingPrivateKeyInput() {
    return this._signingPrivateKey;
  }

  // signing_private_key_sha1 - computed: true, optional: false, required: false
  public get signingPrivateKeySha1() {
    return this.getStringAttribute('signing_private_key_sha1');
  }

  // valid_redirect_uris - computed: false, optional: true, required: false
  private _validRedirectUris?: string[]; 
  public get validRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_redirect_uris'));
  }
  public set validRedirectUris(value: string[]) {
    this._validRedirectUris = value;
  }
  public resetValidRedirectUris() {
    this._validRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validRedirectUrisInput() {
    return this._validRedirectUris;
  }

  // authentication_flow_binding_overrides - computed: false, optional: true, required: false
  private _authenticationFlowBindingOverrides = new SamlClientAuthenticationFlowBindingOverridesOutputReference(this, "authentication_flow_binding_overrides");
  public get authenticationFlowBindingOverrides() {
    return this._authenticationFlowBindingOverrides;
  }
  public putAuthenticationFlowBindingOverrides(value: SamlClientAuthenticationFlowBindingOverrides) {
    this._authenticationFlowBindingOverrides.internalValue = value;
  }
  public resetAuthenticationFlowBindingOverrides() {
    this._authenticationFlowBindingOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowBindingOverridesInput() {
    return this._authenticationFlowBindingOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assertion_consumer_post_url: cdktf.stringToTerraform(this._assertionConsumerPostUrl),
      assertion_consumer_redirect_url: cdktf.stringToTerraform(this._assertionConsumerRedirectUrl),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      canonicalization_method: cdktf.stringToTerraform(this._canonicalizationMethod),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_signature_required: cdktf.booleanToTerraform(this._clientSignatureRequired),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      encrypt_assertions: cdktf.booleanToTerraform(this._encryptAssertions),
      encryption_certificate: cdktf.stringToTerraform(this._encryptionCertificate),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      force_name_id_format: cdktf.booleanToTerraform(this._forceNameIdFormat),
      force_post_binding: cdktf.booleanToTerraform(this._forcePostBinding),
      front_channel_logout: cdktf.booleanToTerraform(this._frontChannelLogout),
      full_scope_allowed: cdktf.booleanToTerraform(this._fullScopeAllowed),
      id: cdktf.stringToTerraform(this._id),
      idp_initiated_sso_relay_state: cdktf.stringToTerraform(this._idpInitiatedSsoRelayState),
      idp_initiated_sso_url_name: cdktf.stringToTerraform(this._idpInitiatedSsoUrlName),
      include_authn_statement: cdktf.booleanToTerraform(this._includeAuthnStatement),
      login_theme: cdktf.stringToTerraform(this._loginTheme),
      logout_service_post_binding_url: cdktf.stringToTerraform(this._logoutServicePostBindingUrl),
      logout_service_redirect_binding_url: cdktf.stringToTerraform(this._logoutServiceRedirectBindingUrl),
      master_saml_processing_url: cdktf.stringToTerraform(this._masterSamlProcessingUrl),
      name: cdktf.stringToTerraform(this._name),
      name_id_format: cdktf.stringToTerraform(this._nameIdFormat),
      realm_id: cdktf.stringToTerraform(this._realmId),
      root_url: cdktf.stringToTerraform(this._rootUrl),
      sign_assertions: cdktf.booleanToTerraform(this._signAssertions),
      sign_documents: cdktf.booleanToTerraform(this._signDocuments),
      signature_algorithm: cdktf.stringToTerraform(this._signatureAlgorithm),
      signature_key_name: cdktf.stringToTerraform(this._signatureKeyName),
      signing_certificate: cdktf.stringToTerraform(this._signingCertificate),
      signing_private_key: cdktf.stringToTerraform(this._signingPrivateKey),
      valid_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._validRedirectUris),
      authentication_flow_binding_overrides: samlClientAuthenticationFlowBindingOverridesToTerraform(this._authenticationFlowBindingOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assertion_consumer_post_url: {
        value: cdktf.stringToHclTerraform(this._assertionConsumerPostUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assertion_consumer_redirect_url: {
        value: cdktf.stringToHclTerraform(this._assertionConsumerRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      canonicalization_method: {
        value: cdktf.stringToHclTerraform(this._canonicalizationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_signature_required: {
        value: cdktf.booleanToHclTerraform(this._clientSignatureRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      encrypt_assertions: {
        value: cdktf.booleanToHclTerraform(this._encryptAssertions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      encryption_certificate: {
        value: cdktf.stringToHclTerraform(this._encryptionCertificate),
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
      force_name_id_format: {
        value: cdktf.booleanToHclTerraform(this._forceNameIdFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_post_binding: {
        value: cdktf.booleanToHclTerraform(this._forcePostBinding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      front_channel_logout: {
        value: cdktf.booleanToHclTerraform(this._frontChannelLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_scope_allowed: {
        value: cdktf.booleanToHclTerraform(this._fullScopeAllowed),
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
      idp_initiated_sso_relay_state: {
        value: cdktf.stringToHclTerraform(this._idpInitiatedSsoRelayState),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_initiated_sso_url_name: {
        value: cdktf.stringToHclTerraform(this._idpInitiatedSsoUrlName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      include_authn_statement: {
        value: cdktf.booleanToHclTerraform(this._includeAuthnStatement),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_theme: {
        value: cdktf.stringToHclTerraform(this._loginTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_service_post_binding_url: {
        value: cdktf.stringToHclTerraform(this._logoutServicePostBindingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_service_redirect_binding_url: {
        value: cdktf.stringToHclTerraform(this._logoutServiceRedirectBindingUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_saml_processing_url: {
        value: cdktf.stringToHclTerraform(this._masterSamlProcessingUrl),
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
      name_id_format: {
        value: cdktf.stringToHclTerraform(this._nameIdFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_url: {
        value: cdktf.stringToHclTerraform(this._rootUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sign_assertions: {
        value: cdktf.booleanToHclTerraform(this._signAssertions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sign_documents: {
        value: cdktf.booleanToHclTerraform(this._signDocuments),
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
      signature_key_name: {
        value: cdktf.stringToHclTerraform(this._signatureKeyName),
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
      signing_private_key: {
        value: cdktf.stringToHclTerraform(this._signingPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._validRedirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_flow_binding_overrides: {
        value: samlClientAuthenticationFlowBindingOverridesToHclTerraform(this._authenticationFlowBindingOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SamlClientAuthenticationFlowBindingOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
