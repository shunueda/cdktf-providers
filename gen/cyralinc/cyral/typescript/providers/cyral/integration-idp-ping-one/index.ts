// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationIdpPingOneConfig extends cdktf.TerraformMetaArguments {
  /**
  * An `alias` that uniquely identifies a IdP Integration draft. If set, will delete any correspondent draft and create a new IdP Integration with the same `alias`. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#draft_alias IntegrationIdpPingOne#draft_alias}
  */
  readonly draftAlias?: string;
  /**
  * samlp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#samlp IntegrationIdpPingOne#samlp}
  */
  readonly samlp: IntegrationIdpPingOneSamlp;
}
export interface IntegrationIdpPingOneSamlpConfig {
  /**
  * Clock skew in seconds that is tolerated when validating identity provider tokens. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#allowed_clock_skew IntegrationIdpPingOne#allowed_clock_skew}
  */
  readonly allowedClockSkew?: number;
  /**
  * Defaults to `false` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#back_channel_supported IntegrationIdpPingOne#back_channel_supported}
  */
  readonly backChannelSupported?: boolean | cdktf.IResolvable;
  /**
  * Full SAML metadata document that was used to import the SAML configuration, Base64 encoded. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#base_64_saml_metadata_document IntegrationIdpPingOne#base_64_saml_metadata_document}
  */
  readonly base64SamlMetadataDocument?: string;
  /**
  * Indicates whether the identity provider must authenticate the presenter directly rather than rely on a previous security context. Defaults to `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#disable_force_authentication IntegrationIdpPingOne#disable_force_authentication}
  */
  readonly disableForceAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the AuthnRequest must be sent using `HTTP-POST` binding. If `true`, `HTTP-REDIRECT` binding will be used. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#disable_post_binding_authn_request IntegrationIdpPingOne#disable_post_binding_authn_request}
  */
  readonly disablePostBindingAuthnRequest?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to respond to requests using `HTTP-POST` binding. If `true`, `HTTP-REDIRECT` binding will be used. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#disable_post_binding_logout IntegrationIdpPingOne#disable_post_binding_logout}
  */
  readonly disablePostBindingLogout?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to respond to requests using `HTTP-POST` binding. If `true`, `HTTP-REDIRECT` binding will be used. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#disable_post_binding_response IntegrationIdpPingOne#disable_post_binding_response}
  */
  readonly disablePostBindingResponse?: boolean | cdktf.IResolvable;
  /**
  * By default, the jwks URL is used for all SAML connections. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#disable_using_jwks_url IntegrationIdpPingOne#disable_using_jwks_url}
  */
  readonly disableUsingJwksUrl?: boolean | cdktf.IResolvable;
  /**
  * GUI order. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#gui_order IntegrationIdpPingOne#gui_order}
  */
  readonly guiOrder?: string;
  /**
  * Defaults to `false` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#hide_on_login_page IntegrationIdpPingOne#hide_on_login_page}
  */
  readonly hideOnLoginPage?: boolean | cdktf.IResolvable;
  /**
  * Type of `LDAP Group RDN` that identifies the name of a group within a DN. For example, if an LDAP DN sent in a SAML assertion is `cn=Everyone`, `ou=groups`, `dc=openam`, `dc=forgerock`, `dc=org` and the `LDAP Group RDN` Type is `cn` Cyral will interpret `Everyone` as the group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#ldap_group_attribute IntegrationIdpPingOne#ldap_group_attribute}
  */
  readonly ldapGroupAttribute?: string;
  /**
  * Defaults to `urn:oasis:names:tc:SAML:1.1:nameid-format:unspecified` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#name_id_policy_format IntegrationIdpPingOne#name_id_policy_format}
  */
  readonly nameIdPolicyFormat?: string;
  /**
  * Defaults to `SUBJECT` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#principal_type IntegrationIdpPingOne#principal_type}
  */
  readonly principalType?: string;
  /**
  * This is the full SAML metadata URL that was used to import the SAML configuration. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#saml_metadata_url IntegrationIdpPingOne#saml_metadata_url}
  */
  readonly samlMetadataUrl?: string;
  /**
  * Defaults to `KEY_ID` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#saml_xml_key_name_tranformer IntegrationIdpPingOne#saml_xml_key_name_tranformer}
  */
  readonly samlXmlKeyNameTranformer?: string;
  /**
  * Defaults to `RSA_SHA256` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#signature_type IntegrationIdpPingOne#signature_type}
  */
  readonly signatureType?: string;
  /**
  * Signing certificate used to validate signatures. Required if signature validation is enabled. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#signing_certificate IntegrationIdpPingOne#signing_certificate}
  */
  readonly signingCertificate?: string;
  /**
  * URL that must be used to send logout requests. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#single_logout_service_url IntegrationIdpPingOne#single_logout_service_url}
  */
  readonly singleLogoutServiceUrl?: string;
  /**
  * URL that must be used to send authentication requests (SAML AuthnRequest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#single_sign_on_service_url IntegrationIdpPingOne#single_sign_on_service_url}
  */
  readonly singleSignOnServiceUrl: string;
  /**
  * Defaults to `FORCE` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#sync_mode IntegrationIdpPingOne#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * Indicates whether the service provider expects an encrypted Assertion. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#want_assertions_encrypted IntegrationIdpPingOne#want_assertions_encrypted}
  */
  readonly wantAssertionsEncrypted?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `KEY_ID` if unset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#xml_sig_key_info_key_name_transformer IntegrationIdpPingOne#xml_sig_key_info_key_name_transformer}
  */
  readonly xmlSigKeyInfoKeyNameTransformer?: string;
}

export function integrationIdpPingOneSamlpConfigToTerraform(struct?: IntegrationIdpPingOneSamlpConfigOutputReference | IntegrationIdpPingOneSamlpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_clock_skew: cdktf.numberToTerraform(struct!.allowedClockSkew),
    back_channel_supported: cdktf.booleanToTerraform(struct!.backChannelSupported),
    base_64_saml_metadata_document: cdktf.stringToTerraform(struct!.base64SamlMetadataDocument),
    disable_force_authentication: cdktf.booleanToTerraform(struct!.disableForceAuthentication),
    disable_post_binding_authn_request: cdktf.booleanToTerraform(struct!.disablePostBindingAuthnRequest),
    disable_post_binding_logout: cdktf.booleanToTerraform(struct!.disablePostBindingLogout),
    disable_post_binding_response: cdktf.booleanToTerraform(struct!.disablePostBindingResponse),
    disable_using_jwks_url: cdktf.booleanToTerraform(struct!.disableUsingJwksUrl),
    gui_order: cdktf.stringToTerraform(struct!.guiOrder),
    hide_on_login_page: cdktf.booleanToTerraform(struct!.hideOnLoginPage),
    ldap_group_attribute: cdktf.stringToTerraform(struct!.ldapGroupAttribute),
    name_id_policy_format: cdktf.stringToTerraform(struct!.nameIdPolicyFormat),
    principal_type: cdktf.stringToTerraform(struct!.principalType),
    saml_metadata_url: cdktf.stringToTerraform(struct!.samlMetadataUrl),
    saml_xml_key_name_tranformer: cdktf.stringToTerraform(struct!.samlXmlKeyNameTranformer),
    signature_type: cdktf.stringToTerraform(struct!.signatureType),
    signing_certificate: cdktf.stringToTerraform(struct!.signingCertificate),
    single_logout_service_url: cdktf.stringToTerraform(struct!.singleLogoutServiceUrl),
    single_sign_on_service_url: cdktf.stringToTerraform(struct!.singleSignOnServiceUrl),
    sync_mode: cdktf.stringToTerraform(struct!.syncMode),
    want_assertions_encrypted: cdktf.booleanToTerraform(struct!.wantAssertionsEncrypted),
    xml_sig_key_info_key_name_transformer: cdktf.stringToTerraform(struct!.xmlSigKeyInfoKeyNameTransformer),
  }
}


export function integrationIdpPingOneSamlpConfigToHclTerraform(struct?: IntegrationIdpPingOneSamlpConfigOutputReference | IntegrationIdpPingOneSamlpConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_clock_skew: {
      value: cdktf.numberToHclTerraform(struct!.allowedClockSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    back_channel_supported: {
      value: cdktf.booleanToHclTerraform(struct!.backChannelSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    base_64_saml_metadata_document: {
      value: cdktf.stringToHclTerraform(struct!.base64SamlMetadataDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_force_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.disableForceAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_post_binding_authn_request: {
      value: cdktf.booleanToHclTerraform(struct!.disablePostBindingAuthnRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_post_binding_logout: {
      value: cdktf.booleanToHclTerraform(struct!.disablePostBindingLogout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_post_binding_response: {
      value: cdktf.booleanToHclTerraform(struct!.disablePostBindingResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_using_jwks_url: {
      value: cdktf.booleanToHclTerraform(struct!.disableUsingJwksUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    gui_order: {
      value: cdktf.stringToHclTerraform(struct!.guiOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_on_login_page: {
      value: cdktf.booleanToHclTerraform(struct!.hideOnLoginPage),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ldap_group_attribute: {
      value: cdktf.stringToHclTerraform(struct!.ldapGroupAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_policy_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdPolicyFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    principal_type: {
      value: cdktf.stringToHclTerraform(struct!.principalType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_metadata_url: {
      value: cdktf.stringToHclTerraform(struct!.samlMetadataUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    saml_xml_key_name_tranformer: {
      value: cdktf.stringToHclTerraform(struct!.samlXmlKeyNameTranformer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_type: {
      value: cdktf.stringToHclTerraform(struct!.signatureType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signing_certificate: {
      value: cdktf.stringToHclTerraform(struct!.signingCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_logout_service_url: {
      value: cdktf.stringToHclTerraform(struct!.singleLogoutServiceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    single_sign_on_service_url: {
      value: cdktf.stringToHclTerraform(struct!.singleSignOnServiceUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_mode: {
      value: cdktf.stringToHclTerraform(struct!.syncMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    want_assertions_encrypted: {
      value: cdktf.booleanToHclTerraform(struct!.wantAssertionsEncrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xml_sig_key_info_key_name_transformer: {
      value: cdktf.stringToHclTerraform(struct!.xmlSigKeyInfoKeyNameTransformer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIdpPingOneSamlpConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationIdpPingOneSamlpConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedClockSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedClockSkew = this._allowedClockSkew;
    }
    if (this._backChannelSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.backChannelSupported = this._backChannelSupported;
    }
    if (this._base64SamlMetadataDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64SamlMetadataDocument = this._base64SamlMetadataDocument;
    }
    if (this._disableForceAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableForceAuthentication = this._disableForceAuthentication;
    }
    if (this._disablePostBindingAuthnRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePostBindingAuthnRequest = this._disablePostBindingAuthnRequest;
    }
    if (this._disablePostBindingLogout !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePostBindingLogout = this._disablePostBindingLogout;
    }
    if (this._disablePostBindingResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePostBindingResponse = this._disablePostBindingResponse;
    }
    if (this._disableUsingJwksUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableUsingJwksUrl = this._disableUsingJwksUrl;
    }
    if (this._guiOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.guiOrder = this._guiOrder;
    }
    if (this._hideOnLoginPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideOnLoginPage = this._hideOnLoginPage;
    }
    if (this._ldapGroupAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapGroupAttribute = this._ldapGroupAttribute;
    }
    if (this._nameIdPolicyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdPolicyFormat = this._nameIdPolicyFormat;
    }
    if (this._principalType !== undefined) {
      hasAnyValues = true;
      internalValueResult.principalType = this._principalType;
    }
    if (this._samlMetadataUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlMetadataUrl = this._samlMetadataUrl;
    }
    if (this._samlXmlKeyNameTranformer !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlXmlKeyNameTranformer = this._samlXmlKeyNameTranformer;
    }
    if (this._signatureType !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureType = this._signatureType;
    }
    if (this._signingCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingCertificate = this._signingCertificate;
    }
    if (this._singleLogoutServiceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleLogoutServiceUrl = this._singleLogoutServiceUrl;
    }
    if (this._singleSignOnServiceUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleSignOnServiceUrl = this._singleSignOnServiceUrl;
    }
    if (this._syncMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncMode = this._syncMode;
    }
    if (this._wantAssertionsEncrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.wantAssertionsEncrypted = this._wantAssertionsEncrypted;
    }
    if (this._xmlSigKeyInfoKeyNameTransformer !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlSigKeyInfoKeyNameTransformer = this._xmlSigKeyInfoKeyNameTransformer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIdpPingOneSamlpConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedClockSkew = undefined;
      this._backChannelSupported = undefined;
      this._base64SamlMetadataDocument = undefined;
      this._disableForceAuthentication = undefined;
      this._disablePostBindingAuthnRequest = undefined;
      this._disablePostBindingLogout = undefined;
      this._disablePostBindingResponse = undefined;
      this._disableUsingJwksUrl = undefined;
      this._guiOrder = undefined;
      this._hideOnLoginPage = undefined;
      this._ldapGroupAttribute = undefined;
      this._nameIdPolicyFormat = undefined;
      this._principalType = undefined;
      this._samlMetadataUrl = undefined;
      this._samlXmlKeyNameTranformer = undefined;
      this._signatureType = undefined;
      this._signingCertificate = undefined;
      this._singleLogoutServiceUrl = undefined;
      this._singleSignOnServiceUrl = undefined;
      this._syncMode = undefined;
      this._wantAssertionsEncrypted = undefined;
      this._xmlSigKeyInfoKeyNameTransformer = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedClockSkew = value.allowedClockSkew;
      this._backChannelSupported = value.backChannelSupported;
      this._base64SamlMetadataDocument = value.base64SamlMetadataDocument;
      this._disableForceAuthentication = value.disableForceAuthentication;
      this._disablePostBindingAuthnRequest = value.disablePostBindingAuthnRequest;
      this._disablePostBindingLogout = value.disablePostBindingLogout;
      this._disablePostBindingResponse = value.disablePostBindingResponse;
      this._disableUsingJwksUrl = value.disableUsingJwksUrl;
      this._guiOrder = value.guiOrder;
      this._hideOnLoginPage = value.hideOnLoginPage;
      this._ldapGroupAttribute = value.ldapGroupAttribute;
      this._nameIdPolicyFormat = value.nameIdPolicyFormat;
      this._principalType = value.principalType;
      this._samlMetadataUrl = value.samlMetadataUrl;
      this._samlXmlKeyNameTranformer = value.samlXmlKeyNameTranformer;
      this._signatureType = value.signatureType;
      this._signingCertificate = value.signingCertificate;
      this._singleLogoutServiceUrl = value.singleLogoutServiceUrl;
      this._singleSignOnServiceUrl = value.singleSignOnServiceUrl;
      this._syncMode = value.syncMode;
      this._wantAssertionsEncrypted = value.wantAssertionsEncrypted;
      this._xmlSigKeyInfoKeyNameTransformer = value.xmlSigKeyInfoKeyNameTransformer;
    }
  }

  // allowed_clock_skew - computed: false, optional: true, required: false
  private _allowedClockSkew?: number; 
  public get allowedClockSkew() {
    return this.getNumberAttribute('allowed_clock_skew');
  }
  public set allowedClockSkew(value: number) {
    this._allowedClockSkew = value;
  }
  public resetAllowedClockSkew() {
    this._allowedClockSkew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedClockSkewInput() {
    return this._allowedClockSkew;
  }

  // back_channel_supported - computed: false, optional: true, required: false
  private _backChannelSupported?: boolean | cdktf.IResolvable; 
  public get backChannelSupported() {
    return this.getBooleanAttribute('back_channel_supported');
  }
  public set backChannelSupported(value: boolean | cdktf.IResolvable) {
    this._backChannelSupported = value;
  }
  public resetBackChannelSupported() {
    this._backChannelSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backChannelSupportedInput() {
    return this._backChannelSupported;
  }

  // base_64_saml_metadata_document - computed: false, optional: true, required: false
  private _base64SamlMetadataDocument?: string; 
  public get base64SamlMetadataDocument() {
    return this.getStringAttribute('base_64_saml_metadata_document');
  }
  public set base64SamlMetadataDocument(value: string) {
    this._base64SamlMetadataDocument = value;
  }
  public resetBase64SamlMetadataDocument() {
    this._base64SamlMetadataDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64SamlMetadataDocumentInput() {
    return this._base64SamlMetadataDocument;
  }

  // disable_force_authentication - computed: false, optional: true, required: false
  private _disableForceAuthentication?: boolean | cdktf.IResolvable; 
  public get disableForceAuthentication() {
    return this.getBooleanAttribute('disable_force_authentication');
  }
  public set disableForceAuthentication(value: boolean | cdktf.IResolvable) {
    this._disableForceAuthentication = value;
  }
  public resetDisableForceAuthentication() {
    this._disableForceAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableForceAuthenticationInput() {
    return this._disableForceAuthentication;
  }

  // disable_post_binding_authn_request - computed: false, optional: true, required: false
  private _disablePostBindingAuthnRequest?: boolean | cdktf.IResolvable; 
  public get disablePostBindingAuthnRequest() {
    return this.getBooleanAttribute('disable_post_binding_authn_request');
  }
  public set disablePostBindingAuthnRequest(value: boolean | cdktf.IResolvable) {
    this._disablePostBindingAuthnRequest = value;
  }
  public resetDisablePostBindingAuthnRequest() {
    this._disablePostBindingAuthnRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePostBindingAuthnRequestInput() {
    return this._disablePostBindingAuthnRequest;
  }

  // disable_post_binding_logout - computed: false, optional: true, required: false
  private _disablePostBindingLogout?: boolean | cdktf.IResolvable; 
  public get disablePostBindingLogout() {
    return this.getBooleanAttribute('disable_post_binding_logout');
  }
  public set disablePostBindingLogout(value: boolean | cdktf.IResolvable) {
    this._disablePostBindingLogout = value;
  }
  public resetDisablePostBindingLogout() {
    this._disablePostBindingLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePostBindingLogoutInput() {
    return this._disablePostBindingLogout;
  }

  // disable_post_binding_response - computed: false, optional: true, required: false
  private _disablePostBindingResponse?: boolean | cdktf.IResolvable; 
  public get disablePostBindingResponse() {
    return this.getBooleanAttribute('disable_post_binding_response');
  }
  public set disablePostBindingResponse(value: boolean | cdktf.IResolvable) {
    this._disablePostBindingResponse = value;
  }
  public resetDisablePostBindingResponse() {
    this._disablePostBindingResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePostBindingResponseInput() {
    return this._disablePostBindingResponse;
  }

  // disable_using_jwks_url - computed: false, optional: true, required: false
  private _disableUsingJwksUrl?: boolean | cdktf.IResolvable; 
  public get disableUsingJwksUrl() {
    return this.getBooleanAttribute('disable_using_jwks_url');
  }
  public set disableUsingJwksUrl(value: boolean | cdktf.IResolvable) {
    this._disableUsingJwksUrl = value;
  }
  public resetDisableUsingJwksUrl() {
    this._disableUsingJwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUsingJwksUrlInput() {
    return this._disableUsingJwksUrl;
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

  // ldap_group_attribute - computed: false, optional: true, required: false
  private _ldapGroupAttribute?: string; 
  public get ldapGroupAttribute() {
    return this.getStringAttribute('ldap_group_attribute');
  }
  public set ldapGroupAttribute(value: string) {
    this._ldapGroupAttribute = value;
  }
  public resetLdapGroupAttribute() {
    this._ldapGroupAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapGroupAttributeInput() {
    return this._ldapGroupAttribute;
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

  // saml_metadata_url - computed: false, optional: true, required: false
  private _samlMetadataUrl?: string; 
  public get samlMetadataUrl() {
    return this.getStringAttribute('saml_metadata_url');
  }
  public set samlMetadataUrl(value: string) {
    this._samlMetadataUrl = value;
  }
  public resetSamlMetadataUrl() {
    this._samlMetadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlMetadataUrlInput() {
    return this._samlMetadataUrl;
  }

  // saml_xml_key_name_tranformer - computed: false, optional: true, required: false
  private _samlXmlKeyNameTranformer?: string; 
  public get samlXmlKeyNameTranformer() {
    return this.getStringAttribute('saml_xml_key_name_tranformer');
  }
  public set samlXmlKeyNameTranformer(value: string) {
    this._samlXmlKeyNameTranformer = value;
  }
  public resetSamlXmlKeyNameTranformer() {
    this._samlXmlKeyNameTranformer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlXmlKeyNameTranformerInput() {
    return this._samlXmlKeyNameTranformer;
  }

  // signature_type - computed: false, optional: true, required: false
  private _signatureType?: string; 
  public get signatureType() {
    return this.getStringAttribute('signature_type');
  }
  public set signatureType(value: string) {
    this._signatureType = value;
  }
  public resetSignatureType() {
    this._signatureType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureTypeInput() {
    return this._signatureType;
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

  // xml_sig_key_info_key_name_transformer - computed: false, optional: true, required: false
  private _xmlSigKeyInfoKeyNameTransformer?: string; 
  public get xmlSigKeyInfoKeyNameTransformer() {
    return this.getStringAttribute('xml_sig_key_info_key_name_transformer');
  }
  public set xmlSigKeyInfoKeyNameTransformer(value: string) {
    this._xmlSigKeyInfoKeyNameTransformer = value;
  }
  public resetXmlSigKeyInfoKeyNameTransformer() {
    this._xmlSigKeyInfoKeyNameTransformer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSigKeyInfoKeyNameTransformerInput() {
    return this._xmlSigKeyInfoKeyNameTransformer;
  }
}
export interface IntegrationIdpPingOneSamlp {
  /**
  * Adds read token role on creation. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#add_read_token_role_on_create IntegrationIdpPingOne#add_read_token_role_on_create}
  */
  readonly addReadTokenRoleOnCreate?: boolean | cdktf.IResolvable;
  /**
  * Disable maps to Keycloak's `enabled` field. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#disabled IntegrationIdpPingOne#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the IdP Integration displayed in the control plane. Defaults to `PingOne`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#display_name IntegrationIdpPingOne#display_name}
  */
  readonly displayName?: string;
  /**
  * Alias of authentication flow, which is triggered after `First Login` with this identity provider. Term `First Login` means that no Keycloak account is currently linked to the authenticated identity provider account. Defaults to `SAML_First_Broker`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#first_broker_login_flow_alias IntegrationIdpPingOne#first_broker_login_flow_alias}
  */
  readonly firstBrokerLoginFlowAlias?: string;
  /**
  * If true, users cannot log in through this identity provider. They can only link to this identity provider. This is useful if you don't want to allow login from the identity provider, but want to integrate with an identity provider. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#link_only IntegrationIdpPingOne#link_only}
  */
  readonly linkOnly?: boolean | cdktf.IResolvable;
  /**
  * Alias of authentication flow, which is triggered after each login with this identity provider. Useful if you want additional verification of each user authenticated with this identity provider (for example OTP). Leave this empty if you need no any additional authenticators to be triggered after login with this identity provider. Defaults to `""`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#post_broker_login_flow_alias IntegrationIdpPingOne#post_broker_login_flow_alias}
  */
  readonly postBrokerLoginFlowAlias?: string;
  /**
  * This is the provider ID of `saml`. Defaults to `saml`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#provider_id IntegrationIdpPingOne#provider_id}
  */
  readonly providerId?: string;
  /**
  * Enable if tokens must be stored after authenticating users. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#store_token IntegrationIdpPingOne#store_token}
  */
  readonly storeToken?: boolean | cdktf.IResolvable;
  /**
  * If the identity provider supplies an email address this email address will be trusted. If the realm required email validation, users that log in from this identity provider will not have to go through the email verification process. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#trust_email IntegrationIdpPingOne#trust_email}
  */
  readonly trustEmail?: boolean | cdktf.IResolvable;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#config IntegrationIdpPingOne#config}
  */
  readonly config: IntegrationIdpPingOneSamlpConfig;
}

export function integrationIdpPingOneSamlpToTerraform(struct?: IntegrationIdpPingOneSamlpOutputReference | IntegrationIdpPingOneSamlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    add_read_token_role_on_create: cdktf.booleanToTerraform(struct!.addReadTokenRoleOnCreate),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    first_broker_login_flow_alias: cdktf.stringToTerraform(struct!.firstBrokerLoginFlowAlias),
    link_only: cdktf.booleanToTerraform(struct!.linkOnly),
    post_broker_login_flow_alias: cdktf.stringToTerraform(struct!.postBrokerLoginFlowAlias),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    store_token: cdktf.booleanToTerraform(struct!.storeToken),
    trust_email: cdktf.booleanToTerraform(struct!.trustEmail),
    config: integrationIdpPingOneSamlpConfigToTerraform(struct!.config),
  }
}


export function integrationIdpPingOneSamlpToHclTerraform(struct?: IntegrationIdpPingOneSamlpOutputReference | IntegrationIdpPingOneSamlp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    add_read_token_role_on_create: {
      value: cdktf.booleanToHclTerraform(struct!.addReadTokenRoleOnCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_broker_login_flow_alias: {
      value: cdktf.stringToHclTerraform(struct!.firstBrokerLoginFlowAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_only: {
      value: cdktf.booleanToHclTerraform(struct!.linkOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    post_broker_login_flow_alias: {
      value: cdktf.stringToHclTerraform(struct!.postBrokerLoginFlowAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    store_token: {
      value: cdktf.booleanToHclTerraform(struct!.storeToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trust_email: {
      value: cdktf.booleanToHclTerraform(struct!.trustEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    config: {
      value: integrationIdpPingOneSamlpConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "set",
      storageClassType: "IntegrationIdpPingOneSamlpConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationIdpPingOneSamlpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IntegrationIdpPingOneSamlp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addReadTokenRoleOnCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.addReadTokenRoleOnCreate = this._addReadTokenRoleOnCreate;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._firstBrokerLoginFlowAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstBrokerLoginFlowAlias = this._firstBrokerLoginFlowAlias;
    }
    if (this._linkOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkOnly = this._linkOnly;
    }
    if (this._postBrokerLoginFlowAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.postBrokerLoginFlowAlias = this._postBrokerLoginFlowAlias;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._storeToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.storeToken = this._storeToken;
    }
    if (this._trustEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustEmail = this._trustEmail;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationIdpPingOneSamlp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._addReadTokenRoleOnCreate = undefined;
      this._disabled = undefined;
      this._displayName = undefined;
      this._firstBrokerLoginFlowAlias = undefined;
      this._linkOnly = undefined;
      this._postBrokerLoginFlowAlias = undefined;
      this._providerId = undefined;
      this._storeToken = undefined;
      this._trustEmail = undefined;
      this._config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._addReadTokenRoleOnCreate = value.addReadTokenRoleOnCreate;
      this._disabled = value.disabled;
      this._displayName = value.displayName;
      this._firstBrokerLoginFlowAlias = value.firstBrokerLoginFlowAlias;
      this._linkOnly = value.linkOnly;
      this._postBrokerLoginFlowAlias = value.postBrokerLoginFlowAlias;
      this._providerId = value.providerId;
      this._storeToken = value.storeToken;
      this._trustEmail = value.trustEmail;
      this._config.internalValue = value.config;
    }
  }

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

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // config - computed: false, optional: false, required: true
  private _config = new IntegrationIdpPingOneSamlpConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: IntegrationIdpPingOneSamlpConfig) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one cyral_integration_idp_ping_one}
*/
export class IntegrationIdpPingOne extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_integration_idp_ping_one";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationIdpPingOne resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationIdpPingOne to import
  * @param importFromId The id of the existing IntegrationIdpPingOne that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationIdpPingOne to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_integration_idp_ping_one", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/integration_idp_ping_one cyral_integration_idp_ping_one} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationIdpPingOneConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationIdpPingOneConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_integration_idp_ping_one',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3',
        providerVersionConstraint: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._draftAlias = config.draftAlias;
    this._samlp.internalValue = config.samlp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // draft_alias - computed: false, optional: true, required: false
  private _draftAlias?: string; 
  public get draftAlias() {
    return this.getStringAttribute('draft_alias');
  }
  public set draftAlias(value: string) {
    this._draftAlias = value;
  }
  public resetDraftAlias() {
    this._draftAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get draftAliasInput() {
    return this._draftAlias;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // samlp - computed: false, optional: false, required: true
  private _samlp = new IntegrationIdpPingOneSamlpOutputReference(this, "samlp");
  public get samlp() {
    return this._samlp;
  }
  public putSamlp(value: IntegrationIdpPingOneSamlp) {
    this._samlp.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get samlpInput() {
    return this._samlp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      draft_alias: cdktf.stringToTerraform(this._draftAlias),
      samlp: integrationIdpPingOneSamlpToTerraform(this._samlp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      draft_alias: {
        value: cdktf.stringToHclTerraform(this._draftAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      samlp: {
        value: integrationIdpPingOneSamlpToHclTerraform(this._samlp.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IntegrationIdpPingOneSamlpList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
