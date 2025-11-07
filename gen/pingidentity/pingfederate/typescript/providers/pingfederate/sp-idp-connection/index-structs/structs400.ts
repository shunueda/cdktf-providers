import * as cdktf from 'cdktf';
import { SpIdpConnectionIdpBrowserSsoAdapterMappings,
spIdpConnectionIdpBrowserSsoAdapterMappingsToTerraform,
spIdpConnectionIdpBrowserSsoAdapterMappingsToHclTerraform,
SpIdpConnectionIdpBrowserSsoAdapterMappingsList,
SpIdpConnectionIdpBrowserSsoArtifact,
spIdpConnectionIdpBrowserSsoArtifactToTerraform,
spIdpConnectionIdpBrowserSsoArtifactToHclTerraform,
SpIdpConnectionIdpBrowserSsoArtifactOutputReference,
SpIdpConnectionIdpBrowserSsoAttributeContract,
spIdpConnectionIdpBrowserSsoAttributeContractToTerraform,
spIdpConnectionIdpBrowserSsoAttributeContractToHclTerraform,
SpIdpConnectionIdpBrowserSsoAttributeContractOutputReference,
SpIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappings,
spIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappingsToTerraform,
spIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappingsToHclTerraform,
SpIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappingsList,
SpIdpConnectionIdpBrowserSsoAuthnContextMappings,
spIdpConnectionIdpBrowserSsoAuthnContextMappingsToTerraform,
spIdpConnectionIdpBrowserSsoAuthnContextMappingsToHclTerraform,
SpIdpConnectionIdpBrowserSsoAuthnContextMappingsList,
SpIdpConnectionIdpBrowserSsoDecryptionPolicy,
spIdpConnectionIdpBrowserSsoDecryptionPolicyToTerraform,
spIdpConnectionIdpBrowserSsoDecryptionPolicyToHclTerraform,
SpIdpConnectionIdpBrowserSsoDecryptionPolicyOutputReference,
SpIdpConnectionIdpBrowserSsoJitProvisioning,
spIdpConnectionIdpBrowserSsoJitProvisioningToTerraform,
spIdpConnectionIdpBrowserSsoJitProvisioningToHclTerraform,
SpIdpConnectionIdpBrowserSsoJitProvisioningOutputReference,
SpIdpConnectionIdpBrowserSsoMessageCustomizations,
spIdpConnectionIdpBrowserSsoMessageCustomizationsToTerraform,
spIdpConnectionIdpBrowserSsoMessageCustomizationsToHclTerraform,
SpIdpConnectionIdpBrowserSsoMessageCustomizationsList,
SpIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRef,
spIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRefToTerraform,
spIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRefToHclTerraform,
SpIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRefOutputReference,
SpIdpConnectionIdpBrowserSsoOidcProviderSettings,
spIdpConnectionIdpBrowserSsoOidcProviderSettingsToTerraform,
spIdpConnectionIdpBrowserSsoOidcProviderSettingsToHclTerraform,
SpIdpConnectionIdpBrowserSsoOidcProviderSettingsOutputReference,
SpIdpConnectionIdpBrowserSsoSloServiceEndpoints,
spIdpConnectionIdpBrowserSsoSloServiceEndpointsToTerraform,
spIdpConnectionIdpBrowserSsoSloServiceEndpointsToHclTerraform,
SpIdpConnectionIdpBrowserSsoSloServiceEndpointsList,
SpIdpConnectionIdpBrowserSsoSsoOauthMapping,
spIdpConnectionIdpBrowserSsoSsoOauthMappingToTerraform,
spIdpConnectionIdpBrowserSsoSsoOauthMappingToHclTerraform,
SpIdpConnectionIdpBrowserSsoSsoOauthMappingOutputReference,
SpIdpConnectionIdpBrowserSsoSsoServiceEndpoints,
spIdpConnectionIdpBrowserSsoSsoServiceEndpointsToTerraform,
spIdpConnectionIdpBrowserSsoSsoServiceEndpointsToHclTerraform,
SpIdpConnectionIdpBrowserSsoSsoServiceEndpointsList,
SpIdpConnectionIdpBrowserSsoUrlWhitelistEntries,
spIdpConnectionIdpBrowserSsoUrlWhitelistEntriesToTerraform,
spIdpConnectionIdpBrowserSsoUrlWhitelistEntriesToHclTerraform,
SpIdpConnectionIdpBrowserSsoUrlWhitelistEntriesList } from './structs0'
export interface SpIdpConnectionIdpBrowserSso {
  /**
  * A list of adapters that map to incoming assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#adapter_mappings SpIdpConnection#adapter_mappings}
  */
  readonly adapterMappings?: SpIdpConnectionIdpBrowserSsoAdapterMappings[] | cdktf.IResolvable;
  /**
  * Specify to always sign the SAML ArtifactResponse. Default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#always_sign_artifact_response SpIdpConnection#always_sign_artifact_response}
  */
  readonly alwaysSignArtifactResponse?: boolean | cdktf.IResolvable;
  /**
  * The settings for an Artifact binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#artifact SpIdpConnection#artifact}
  */
  readonly artifact?: SpIdpConnectionIdpBrowserSsoArtifact;
  /**
  * Specify whether the incoming SAML assertions are signed rather than the entire SAML response being signed. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#assertions_signed SpIdpConnection#assertions_signed}
  */
  readonly assertionsSigned?: boolean | cdktf.IResolvable;
  /**
  * A set of user attributes that the IdP sends in the SAML assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract SpIdpConnection#attribute_contract}
  */
  readonly attributeContract?: SpIdpConnectionIdpBrowserSsoAttributeContract;
  /**
  * A list of Authentication Policy Contracts that map to incoming assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#authentication_policy_contract_mappings SpIdpConnection#authentication_policy_contract_mappings}
  */
  readonly authenticationPolicyContractMappings?: SpIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappings[] | cdktf.IResolvable;
  /**
  * A list of authentication context mappings between local and remote values. Applicable for SAML 2.0 and OIDC protocol connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#authn_context_mappings SpIdpConnection#authn_context_mappings}
  */
  readonly authnContextMappings?: SpIdpConnectionIdpBrowserSsoAuthnContextMappings[] | cdktf.IResolvable;
  /**
  * Defines what to decrypt in the browser-based SSO profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#decryption_policy SpIdpConnection#decryption_policy}
  */
  readonly decryptionPolicy?: SpIdpConnectionIdpBrowserSsoDecryptionPolicy;
  /**
  * The default target URL for this connection. If defined, this overrides the default URL. The default value is an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#default_target_url SpIdpConnection#default_target_url}
  */
  readonly defaultTargetUrl?: string;
  /**
  * The profiles that are enabled for browser-based SSO. SAML 2.0 supports all profiles whereas SAML 1.x IdP connections support both IdP and SP (non-standard) initiated SSO. This is required for SAMLx.x Connections. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#enabled_profiles SpIdpConnection#enabled_profiles}
  */
  readonly enabledProfiles?: string[];
  /**
  * Defines the process in which users authenticated by the IdP are associated with user accounts local to the SP. Options are `ACCOUNT_LINKING`, `ACCOUNT_MAPPING`, `NONE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#idp_identity_mapping SpIdpConnection#idp_identity_mapping}
  */
  readonly idpIdentityMapping: string;
  /**
  * The SAML bindings that are enabled for browser-based SSO. This is required for SAML 2.0 connections when the enabled profiles contain the SP-initiated SSO profile or either SLO profile. For SAML 1.x based connections, it is not used for SP Connections and it is optional for IdP Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#incoming_bindings SpIdpConnection#incoming_bindings}
  */
  readonly incomingBindings?: string[];
  /**
  * The settings used to specify how and when to provision user accounts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#jit_provisioning SpIdpConnection#jit_provisioning}
  */
  readonly jitProvisioning?: SpIdpConnectionIdpBrowserSsoJitProvisioning;
  /**
  * The message customizations for browser-based SSO. Depending on server settings, connection type, and protocol this may or may not be supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#message_customizations SpIdpConnection#message_customizations}
  */
  readonly messageCustomizations?: SpIdpConnectionIdpBrowserSsoMessageCustomizations[] | cdktf.IResolvable;
  /**
  * A reference to a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#oauth_authentication_policy_contract_ref SpIdpConnection#oauth_authentication_policy_contract_ref}
  */
  readonly oauthAuthenticationPolicyContractRef?: SpIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRef;
  /**
  * The OpenID Provider settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#oidc_provider_settings SpIdpConnection#oidc_provider_settings}
  */
  readonly oidcProviderSettings?: SpIdpConnectionIdpBrowserSsoOidcProviderSettings;
  /**
  * The browser-based SSO protocol to use. Options are `OIDC`, `SAML10`, `SAML11`, `SAML20`, `WSFED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#protocol SpIdpConnection#protocol}
  */
  readonly protocol: string;
  /**
  * Determines whether SAML authentication requests should be signed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#sign_authn_requests SpIdpConnection#sign_authn_requests}
  */
  readonly signAuthnRequests?: boolean | cdktf.IResolvable;
  /**
  * A list of possible endpoints to send SLO requests and responses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#slo_service_endpoints SpIdpConnection#slo_service_endpoints}
  */
  readonly sloServiceEndpoints?: SpIdpConnectionIdpBrowserSsoSloServiceEndpoints[] | cdktf.IResolvable;
  /**
  * IdP Browser SSO OAuth Attribute Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#sso_oauth_mapping SpIdpConnection#sso_oauth_mapping}
  */
  readonly ssoOauthMapping?: SpIdpConnectionIdpBrowserSsoSsoOauthMapping;
  /**
  * The IdP SSO endpoints that define where to send your authentication requests. Only required for SP initiated SSO. This is required for SAML x.x and WS-FED Connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#sso_service_endpoints SpIdpConnection#sso_service_endpoints}
  */
  readonly ssoServiceEndpoints?: SpIdpConnectionIdpBrowserSsoSsoServiceEndpoints[] | cdktf.IResolvable;
  /**
  * For WS-Federation connections, a whitelist of additional allowed domains and paths used to validate wreply for SLO, if enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#url_whitelist_entries SpIdpConnection#url_whitelist_entries}
  */
  readonly urlWhitelistEntries?: SpIdpConnectionIdpBrowserSsoUrlWhitelistEntries[] | cdktf.IResolvable;
}

export function spIdpConnectionIdpBrowserSsoToTerraform(struct?: SpIdpConnectionIdpBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adapter_mappings: cdktf.listMapper(spIdpConnectionIdpBrowserSsoAdapterMappingsToTerraform, false)(struct!.adapterMappings),
    always_sign_artifact_response: cdktf.booleanToTerraform(struct!.alwaysSignArtifactResponse),
    artifact: spIdpConnectionIdpBrowserSsoArtifactToTerraform(struct!.artifact),
    assertions_signed: cdktf.booleanToTerraform(struct!.assertionsSigned),
    attribute_contract: spIdpConnectionIdpBrowserSsoAttributeContractToTerraform(struct!.attributeContract),
    authentication_policy_contract_mappings: cdktf.listMapper(spIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappingsToTerraform, false)(struct!.authenticationPolicyContractMappings),
    authn_context_mappings: cdktf.listMapper(spIdpConnectionIdpBrowserSsoAuthnContextMappingsToTerraform, false)(struct!.authnContextMappings),
    decryption_policy: spIdpConnectionIdpBrowserSsoDecryptionPolicyToTerraform(struct!.decryptionPolicy),
    default_target_url: cdktf.stringToTerraform(struct!.defaultTargetUrl),
    enabled_profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledProfiles),
    idp_identity_mapping: cdktf.stringToTerraform(struct!.idpIdentityMapping),
    incoming_bindings: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.incomingBindings),
    jit_provisioning: spIdpConnectionIdpBrowserSsoJitProvisioningToTerraform(struct!.jitProvisioning),
    message_customizations: cdktf.listMapper(spIdpConnectionIdpBrowserSsoMessageCustomizationsToTerraform, false)(struct!.messageCustomizations),
    oauth_authentication_policy_contract_ref: spIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRefToTerraform(struct!.oauthAuthenticationPolicyContractRef),
    oidc_provider_settings: spIdpConnectionIdpBrowserSsoOidcProviderSettingsToTerraform(struct!.oidcProviderSettings),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sign_authn_requests: cdktf.booleanToTerraform(struct!.signAuthnRequests),
    slo_service_endpoints: cdktf.listMapper(spIdpConnectionIdpBrowserSsoSloServiceEndpointsToTerraform, false)(struct!.sloServiceEndpoints),
    sso_oauth_mapping: spIdpConnectionIdpBrowserSsoSsoOauthMappingToTerraform(struct!.ssoOauthMapping),
    sso_service_endpoints: cdktf.listMapper(spIdpConnectionIdpBrowserSsoSsoServiceEndpointsToTerraform, false)(struct!.ssoServiceEndpoints),
    url_whitelist_entries: cdktf.listMapper(spIdpConnectionIdpBrowserSsoUrlWhitelistEntriesToTerraform, false)(struct!.urlWhitelistEntries),
  }
}


export function spIdpConnectionIdpBrowserSsoToHclTerraform(struct?: SpIdpConnectionIdpBrowserSso | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adapter_mappings: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpBrowserSsoAdapterMappingsToHclTerraform, false)(struct!.adapterMappings),
      isBlock: true,
      type: "list",
      storageClassType: "SpIdpConnectionIdpBrowserSsoAdapterMappingsList",
    },
    always_sign_artifact_response: {
      value: cdktf.booleanToHclTerraform(struct!.alwaysSignArtifactResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    artifact: {
      value: spIdpConnectionIdpBrowserSsoArtifactToHclTerraform(struct!.artifact),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpBrowserSsoArtifact",
    },
    assertions_signed: {
      value: cdktf.booleanToHclTerraform(struct!.assertionsSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    attribute_contract: {
      value: spIdpConnectionIdpBrowserSsoAttributeContractToHclTerraform(struct!.attributeContract),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpBrowserSsoAttributeContract",
    },
    authentication_policy_contract_mappings: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappingsToHclTerraform, false)(struct!.authenticationPolicyContractMappings),
      isBlock: true,
      type: "list",
      storageClassType: "SpIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappingsList",
    },
    authn_context_mappings: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpBrowserSsoAuthnContextMappingsToHclTerraform, false)(struct!.authnContextMappings),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpBrowserSsoAuthnContextMappingsList",
    },
    decryption_policy: {
      value: spIdpConnectionIdpBrowserSsoDecryptionPolicyToHclTerraform(struct!.decryptionPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpBrowserSsoDecryptionPolicy",
    },
    default_target_url: {
      value: cdktf.stringToHclTerraform(struct!.defaultTargetUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_profiles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledProfiles),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    idp_identity_mapping: {
      value: cdktf.stringToHclTerraform(struct!.idpIdentityMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incoming_bindings: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.incomingBindings),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    jit_provisioning: {
      value: spIdpConnectionIdpBrowserSsoJitProvisioningToHclTerraform(struct!.jitProvisioning),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpBrowserSsoJitProvisioning",
    },
    message_customizations: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpBrowserSsoMessageCustomizationsToHclTerraform, false)(struct!.messageCustomizations),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpBrowserSsoMessageCustomizationsList",
    },
    oauth_authentication_policy_contract_ref: {
      value: spIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRefToHclTerraform(struct!.oauthAuthenticationPolicyContractRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRef",
    },
    oidc_provider_settings: {
      value: spIdpConnectionIdpBrowserSsoOidcProviderSettingsToHclTerraform(struct!.oidcProviderSettings),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpBrowserSsoOidcProviderSettings",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_authn_requests: {
      value: cdktf.booleanToHclTerraform(struct!.signAuthnRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slo_service_endpoints: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpBrowserSsoSloServiceEndpointsToHclTerraform, false)(struct!.sloServiceEndpoints),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpBrowserSsoSloServiceEndpointsList",
    },
    sso_oauth_mapping: {
      value: spIdpConnectionIdpBrowserSsoSsoOauthMappingToHclTerraform(struct!.ssoOauthMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpBrowserSsoSsoOauthMapping",
    },
    sso_service_endpoints: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpBrowserSsoSsoServiceEndpointsToHclTerraform, false)(struct!.ssoServiceEndpoints),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpBrowserSsoSsoServiceEndpointsList",
    },
    url_whitelist_entries: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpBrowserSsoUrlWhitelistEntriesToHclTerraform, false)(struct!.urlWhitelistEntries),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpBrowserSsoUrlWhitelistEntriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpBrowserSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpBrowserSso | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adapterMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.adapterMappings = this._adapterMappings?.internalValue;
    }
    if (this._alwaysSignArtifactResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.alwaysSignArtifactResponse = this._alwaysSignArtifactResponse;
    }
    if (this._artifact?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifact = this._artifact?.internalValue;
    }
    if (this._assertionsSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionsSigned = this._assertionsSigned;
    }
    if (this._attributeContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContract = this._attributeContract?.internalValue;
    }
    if (this._authenticationPolicyContractMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationPolicyContractMappings = this._authenticationPolicyContractMappings?.internalValue;
    }
    if (this._authnContextMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnContextMappings = this._authnContextMappings?.internalValue;
    }
    if (this._decryptionPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptionPolicy = this._decryptionPolicy?.internalValue;
    }
    if (this._defaultTargetUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTargetUrl = this._defaultTargetUrl;
    }
    if (this._enabledProfiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledProfiles = this._enabledProfiles;
    }
    if (this._idpIdentityMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpIdentityMapping = this._idpIdentityMapping;
    }
    if (this._incomingBindings !== undefined) {
      hasAnyValues = true;
      internalValueResult.incomingBindings = this._incomingBindings;
    }
    if (this._jitProvisioning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jitProvisioning = this._jitProvisioning?.internalValue;
    }
    if (this._messageCustomizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageCustomizations = this._messageCustomizations?.internalValue;
    }
    if (this._oauthAuthenticationPolicyContractRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauthAuthenticationPolicyContractRef = this._oauthAuthenticationPolicyContractRef?.internalValue;
    }
    if (this._oidcProviderSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcProviderSettings = this._oidcProviderSettings?.internalValue;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._signAuthnRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.signAuthnRequests = this._signAuthnRequests;
    }
    if (this._sloServiceEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloServiceEndpoints = this._sloServiceEndpoints?.internalValue;
    }
    if (this._ssoOauthMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoOauthMapping = this._ssoOauthMapping?.internalValue;
    }
    if (this._ssoServiceEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoServiceEndpoints = this._ssoServiceEndpoints?.internalValue;
    }
    if (this._urlWhitelistEntries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlWhitelistEntries = this._urlWhitelistEntries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpBrowserSso | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adapterMappings.internalValue = undefined;
      this._alwaysSignArtifactResponse = undefined;
      this._artifact.internalValue = undefined;
      this._assertionsSigned = undefined;
      this._attributeContract.internalValue = undefined;
      this._authenticationPolicyContractMappings.internalValue = undefined;
      this._authnContextMappings.internalValue = undefined;
      this._decryptionPolicy.internalValue = undefined;
      this._defaultTargetUrl = undefined;
      this._enabledProfiles = undefined;
      this._idpIdentityMapping = undefined;
      this._incomingBindings = undefined;
      this._jitProvisioning.internalValue = undefined;
      this._messageCustomizations.internalValue = undefined;
      this._oauthAuthenticationPolicyContractRef.internalValue = undefined;
      this._oidcProviderSettings.internalValue = undefined;
      this._protocol = undefined;
      this._signAuthnRequests = undefined;
      this._sloServiceEndpoints.internalValue = undefined;
      this._ssoOauthMapping.internalValue = undefined;
      this._ssoServiceEndpoints.internalValue = undefined;
      this._urlWhitelistEntries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adapterMappings.internalValue = value.adapterMappings;
      this._alwaysSignArtifactResponse = value.alwaysSignArtifactResponse;
      this._artifact.internalValue = value.artifact;
      this._assertionsSigned = value.assertionsSigned;
      this._attributeContract.internalValue = value.attributeContract;
      this._authenticationPolicyContractMappings.internalValue = value.authenticationPolicyContractMappings;
      this._authnContextMappings.internalValue = value.authnContextMappings;
      this._decryptionPolicy.internalValue = value.decryptionPolicy;
      this._defaultTargetUrl = value.defaultTargetUrl;
      this._enabledProfiles = value.enabledProfiles;
      this._idpIdentityMapping = value.idpIdentityMapping;
      this._incomingBindings = value.incomingBindings;
      this._jitProvisioning.internalValue = value.jitProvisioning;
      this._messageCustomizations.internalValue = value.messageCustomizations;
      this._oauthAuthenticationPolicyContractRef.internalValue = value.oauthAuthenticationPolicyContractRef;
      this._oidcProviderSettings.internalValue = value.oidcProviderSettings;
      this._protocol = value.protocol;
      this._signAuthnRequests = value.signAuthnRequests;
      this._sloServiceEndpoints.internalValue = value.sloServiceEndpoints;
      this._ssoOauthMapping.internalValue = value.ssoOauthMapping;
      this._ssoServiceEndpoints.internalValue = value.ssoServiceEndpoints;
      this._urlWhitelistEntries.internalValue = value.urlWhitelistEntries;
    }
  }

  // adapter_mappings - computed: false, optional: true, required: false
  private _adapterMappings = new SpIdpConnectionIdpBrowserSsoAdapterMappingsList(this, "adapter_mappings", false);
  public get adapterMappings() {
    return this._adapterMappings;
  }
  public putAdapterMappings(value: SpIdpConnectionIdpBrowserSsoAdapterMappings[] | cdktf.IResolvable) {
    this._adapterMappings.internalValue = value;
  }
  public resetAdapterMappings() {
    this._adapterMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adapterMappingsInput() {
    return this._adapterMappings.internalValue;
  }

  // always_sign_artifact_response - computed: true, optional: true, required: false
  private _alwaysSignArtifactResponse?: boolean | cdktf.IResolvable; 
  public get alwaysSignArtifactResponse() {
    return this.getBooleanAttribute('always_sign_artifact_response');
  }
  public set alwaysSignArtifactResponse(value: boolean | cdktf.IResolvable) {
    this._alwaysSignArtifactResponse = value;
  }
  public resetAlwaysSignArtifactResponse() {
    this._alwaysSignArtifactResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysSignArtifactResponseInput() {
    return this._alwaysSignArtifactResponse;
  }

  // artifact - computed: false, optional: true, required: false
  private _artifact = new SpIdpConnectionIdpBrowserSsoArtifactOutputReference(this, "artifact");
  public get artifact() {
    return this._artifact;
  }
  public putArtifact(value: SpIdpConnectionIdpBrowserSsoArtifact) {
    this._artifact.internalValue = value;
  }
  public resetArtifact() {
    this._artifact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactInput() {
    return this._artifact.internalValue;
  }

  // assertions_signed - computed: true, optional: true, required: false
  private _assertionsSigned?: boolean | cdktf.IResolvable; 
  public get assertionsSigned() {
    return this.getBooleanAttribute('assertions_signed');
  }
  public set assertionsSigned(value: boolean | cdktf.IResolvable) {
    this._assertionsSigned = value;
  }
  public resetAssertionsSigned() {
    this._assertionsSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionsSignedInput() {
    return this._assertionsSigned;
  }

  // attribute_contract - computed: true, optional: true, required: false
  private _attributeContract = new SpIdpConnectionIdpBrowserSsoAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: SpIdpConnectionIdpBrowserSsoAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  public resetAttributeContract() {
    this._attributeContract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // authentication_policy_contract_mappings - computed: true, optional: true, required: false
  private _authenticationPolicyContractMappings = new SpIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappingsList(this, "authentication_policy_contract_mappings", false);
  public get authenticationPolicyContractMappings() {
    return this._authenticationPolicyContractMappings;
  }
  public putAuthenticationPolicyContractMappings(value: SpIdpConnectionIdpBrowserSsoAuthenticationPolicyContractMappings[] | cdktf.IResolvable) {
    this._authenticationPolicyContractMappings.internalValue = value;
  }
  public resetAuthenticationPolicyContractMappings() {
    this._authenticationPolicyContractMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyContractMappingsInput() {
    return this._authenticationPolicyContractMappings.internalValue;
  }

  // authn_context_mappings - computed: false, optional: true, required: false
  private _authnContextMappings = new SpIdpConnectionIdpBrowserSsoAuthnContextMappingsList(this, "authn_context_mappings", true);
  public get authnContextMappings() {
    return this._authnContextMappings;
  }
  public putAuthnContextMappings(value: SpIdpConnectionIdpBrowserSsoAuthnContextMappings[] | cdktf.IResolvable) {
    this._authnContextMappings.internalValue = value;
  }
  public resetAuthnContextMappings() {
    this._authnContextMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextMappingsInput() {
    return this._authnContextMappings.internalValue;
  }

  // decryption_policy - computed: true, optional: true, required: false
  private _decryptionPolicy = new SpIdpConnectionIdpBrowserSsoDecryptionPolicyOutputReference(this, "decryption_policy");
  public get decryptionPolicy() {
    return this._decryptionPolicy;
  }
  public putDecryptionPolicy(value: SpIdpConnectionIdpBrowserSsoDecryptionPolicy) {
    this._decryptionPolicy.internalValue = value;
  }
  public resetDecryptionPolicy() {
    this._decryptionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionPolicyInput() {
    return this._decryptionPolicy.internalValue;
  }

  // default_target_url - computed: true, optional: true, required: false
  private _defaultTargetUrl?: string; 
  public get defaultTargetUrl() {
    return this.getStringAttribute('default_target_url');
  }
  public set defaultTargetUrl(value: string) {
    this._defaultTargetUrl = value;
  }
  public resetDefaultTargetUrl() {
    this._defaultTargetUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTargetUrlInput() {
    return this._defaultTargetUrl;
  }

  // enabled_profiles - computed: false, optional: true, required: false
  private _enabledProfiles?: string[]; 
  public get enabledProfiles() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_profiles'));
  }
  public set enabledProfiles(value: string[]) {
    this._enabledProfiles = value;
  }
  public resetEnabledProfiles() {
    this._enabledProfiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledProfilesInput() {
    return this._enabledProfiles;
  }

  // idp_identity_mapping - computed: false, optional: false, required: true
  private _idpIdentityMapping?: string; 
  public get idpIdentityMapping() {
    return this.getStringAttribute('idp_identity_mapping');
  }
  public set idpIdentityMapping(value: string) {
    this._idpIdentityMapping = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdentityMappingInput() {
    return this._idpIdentityMapping;
  }

  // incoming_bindings - computed: false, optional: true, required: false
  private _incomingBindings?: string[]; 
  public get incomingBindings() {
    return cdktf.Fn.tolist(this.getListAttribute('incoming_bindings'));
  }
  public set incomingBindings(value: string[]) {
    this._incomingBindings = value;
  }
  public resetIncomingBindings() {
    this._incomingBindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incomingBindingsInput() {
    return this._incomingBindings;
  }

  // jit_provisioning - computed: false, optional: true, required: false
  private _jitProvisioning = new SpIdpConnectionIdpBrowserSsoJitProvisioningOutputReference(this, "jit_provisioning");
  public get jitProvisioning() {
    return this._jitProvisioning;
  }
  public putJitProvisioning(value: SpIdpConnectionIdpBrowserSsoJitProvisioning) {
    this._jitProvisioning.internalValue = value;
  }
  public resetJitProvisioning() {
    this._jitProvisioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitProvisioningInput() {
    return this._jitProvisioning.internalValue;
  }

  // message_customizations - computed: false, optional: true, required: false
  private _messageCustomizations = new SpIdpConnectionIdpBrowserSsoMessageCustomizationsList(this, "message_customizations", true);
  public get messageCustomizations() {
    return this._messageCustomizations;
  }
  public putMessageCustomizations(value: SpIdpConnectionIdpBrowserSsoMessageCustomizations[] | cdktf.IResolvable) {
    this._messageCustomizations.internalValue = value;
  }
  public resetMessageCustomizations() {
    this._messageCustomizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageCustomizationsInput() {
    return this._messageCustomizations.internalValue;
  }

  // oauth_authentication_policy_contract_ref - computed: false, optional: true, required: false
  private _oauthAuthenticationPolicyContractRef = new SpIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRefOutputReference(this, "oauth_authentication_policy_contract_ref");
  public get oauthAuthenticationPolicyContractRef() {
    return this._oauthAuthenticationPolicyContractRef;
  }
  public putOauthAuthenticationPolicyContractRef(value: SpIdpConnectionIdpBrowserSsoOauthAuthenticationPolicyContractRef) {
    this._oauthAuthenticationPolicyContractRef.internalValue = value;
  }
  public resetOauthAuthenticationPolicyContractRef() {
    this._oauthAuthenticationPolicyContractRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAuthenticationPolicyContractRefInput() {
    return this._oauthAuthenticationPolicyContractRef.internalValue;
  }

  // oidc_provider_settings - computed: false, optional: true, required: false
  private _oidcProviderSettings = new SpIdpConnectionIdpBrowserSsoOidcProviderSettingsOutputReference(this, "oidc_provider_settings");
  public get oidcProviderSettings() {
    return this._oidcProviderSettings;
  }
  public putOidcProviderSettings(value: SpIdpConnectionIdpBrowserSsoOidcProviderSettings) {
    this._oidcProviderSettings.internalValue = value;
  }
  public resetOidcProviderSettings() {
    this._oidcProviderSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcProviderSettingsInput() {
    return this._oidcProviderSettings.internalValue;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sign_authn_requests - computed: true, optional: true, required: false
  private _signAuthnRequests?: boolean | cdktf.IResolvable; 
  public get signAuthnRequests() {
    return this.getBooleanAttribute('sign_authn_requests');
  }
  public set signAuthnRequests(value: boolean | cdktf.IResolvable) {
    this._signAuthnRequests = value;
  }
  public resetSignAuthnRequests() {
    this._signAuthnRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAuthnRequestsInput() {
    return this._signAuthnRequests;
  }

  // slo_service_endpoints - computed: false, optional: true, required: false
  private _sloServiceEndpoints = new SpIdpConnectionIdpBrowserSsoSloServiceEndpointsList(this, "slo_service_endpoints", true);
  public get sloServiceEndpoints() {
    return this._sloServiceEndpoints;
  }
  public putSloServiceEndpoints(value: SpIdpConnectionIdpBrowserSsoSloServiceEndpoints[] | cdktf.IResolvable) {
    this._sloServiceEndpoints.internalValue = value;
  }
  public resetSloServiceEndpoints() {
    this._sloServiceEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloServiceEndpointsInput() {
    return this._sloServiceEndpoints.internalValue;
  }

  // sso_application_endpoint - computed: true, optional: false, required: false
  public get ssoApplicationEndpoint() {
    return this.getStringAttribute('sso_application_endpoint');
  }

  // sso_oauth_mapping - computed: false, optional: true, required: false
  private _ssoOauthMapping = new SpIdpConnectionIdpBrowserSsoSsoOauthMappingOutputReference(this, "sso_oauth_mapping");
  public get ssoOauthMapping() {
    return this._ssoOauthMapping;
  }
  public putSsoOauthMapping(value: SpIdpConnectionIdpBrowserSsoSsoOauthMapping) {
    this._ssoOauthMapping.internalValue = value;
  }
  public resetSsoOauthMapping() {
    this._ssoOauthMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoOauthMappingInput() {
    return this._ssoOauthMapping.internalValue;
  }

  // sso_service_endpoints - computed: false, optional: true, required: false
  private _ssoServiceEndpoints = new SpIdpConnectionIdpBrowserSsoSsoServiceEndpointsList(this, "sso_service_endpoints", true);
  public get ssoServiceEndpoints() {
    return this._ssoServiceEndpoints;
  }
  public putSsoServiceEndpoints(value: SpIdpConnectionIdpBrowserSsoSsoServiceEndpoints[] | cdktf.IResolvable) {
    this._ssoServiceEndpoints.internalValue = value;
  }
  public resetSsoServiceEndpoints() {
    this._ssoServiceEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoServiceEndpointsInput() {
    return this._ssoServiceEndpoints.internalValue;
  }

  // url_whitelist_entries - computed: false, optional: true, required: false
  private _urlWhitelistEntries = new SpIdpConnectionIdpBrowserSsoUrlWhitelistEntriesList(this, "url_whitelist_entries", true);
  public get urlWhitelistEntries() {
    return this._urlWhitelistEntries;
  }
  public putUrlWhitelistEntries(value: SpIdpConnectionIdpBrowserSsoUrlWhitelistEntries[] | cdktf.IResolvable) {
    this._urlWhitelistEntries.internalValue = value;
  }
  public resetUrlWhitelistEntries() {
    this._urlWhitelistEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlWhitelistEntriesInput() {
    return this._urlWhitelistEntries.internalValue;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRefToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRefToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `ACTOR_TOKEN`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `ATTRIBUTE_QUERY`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `EXPRESSION`, `FRAGMENT`, `IDENTITY_STORE_GROUP`, `IDENTITY_STORE_USER`, `IDP_CONNECTION`, `INPUTS`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `LOCAL_IDENTITY_PROFILE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `OAUTH_PERSISTENT_GRANT`, `PASSWORD_CREDENTIAL_VALIDATOR`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `REQUEST`, `SCIM_GROUP`, `SCIM_USER`, `SUBJECT_TOKEN`, `TEXT`, `TOKEN`, `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `TRACKED_HTTP_PARAMS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment {
  /**
  * A key that is meant to reference a source from which an attribute can be retrieved. This model is usually paired with a value which, depending on the SourceType, can be a hardcoded value or a reference to an attribute name specific to that SourceType. Not all values are applicable - a validation error will be returned for incorrect values.<br>For each SourceType, the value should be:<br>ACCOUNT_LINK - If account linking was enabled for the browser SSO, the value must be 'Local User ID', unless it has been overridden in PingFederate's server configuration.<br>ADAPTER - The value is one of the attributes of the IdP Adapter.<br>ASSERTION - The value is one of the attributes coming from the SAML assertion.<br>AUTHENTICATION_POLICY_CONTRACT - The value is one of the attributes coming from an authentication policy contract.<br>LOCAL_IDENTITY_PROFILE - The value is one of the fields coming from a local identity profile.<br>CONTEXT - The value must be one of the following ['TargetResource' or 'OAuthScopes' or 'ClientId' or 'AuthenticationCtx' or 'ClientIp' or 'Locale' or 'StsBasicAuthUsername' or 'StsSSLClientCertSubjectDN' or 'StsSSLClientCertChain' or 'VirtualServerId' or 'AuthenticatingAuthority' or 'DefaultPersistentGrantLifetime'.]<br>CLAIMS - Attributes provided by the OIDC Provider.<br>CUSTOM_DATA_STORE - The value is one of the attributes returned by this custom data store.<br>EXPRESSION - The value is an OGNL expression.<br>EXTENDED_CLIENT_METADATA - The value is from an OAuth extended client metadata parameter. This source type is deprecated and has been replaced by EXTENDED_PROPERTIES.<br>EXTENDED_PROPERTIES - The value is from an OAuth Client's extended property.<br>IDP_CONNECTION - The value is one of the attributes passed in by the IdP connection.<br>JDBC_DATA_STORE - The value is one of the column names returned from the JDBC attribute source.<br>LDAP_DATA_STORE - The value is one of the LDAP attributes supported by your LDAP data store.<br>MAPPED_ATTRIBUTES - The value is the name of one of the mapped attributes that is defined in the associated attribute mapping.<br>OAUTH_PERSISTENT_GRANT - The value is one of the attributes from the persistent grant.<br>PASSWORD_CREDENTIAL_VALIDATOR - The value is one of the attributes of the PCV.<br>NO_MAPPING - A placeholder value to indicate that an attribute currently has no mapped source.TEXT - A hardcoded value that is used to populate the corresponding attribute.<br>TOKEN - The value is one of the token attributes.<br>REQUEST - The value is from the request context such as the CIBA identity hint contract or the request contract for Ws-Trust.<br>TRACKED_HTTP_PARAMS - The value is from the original request parameters.<br>SUBJECT_TOKEN - The value is one of the OAuth 2.0 Token exchange subject_token attributes.<br>ACTOR_TOKEN - The value is one of the OAuth 2.0 Token exchange actor_token attributes.<br>TOKEN_EXCHANGE_PROCESSOR_POLICY - The value is one of the attributes coming from a Token Exchange Processor policy.<br>FRAGMENT - The value is one of the attributes coming from an authentication policy fragment.<br>INPUTS - The value is one of the attributes coming from an attribute defined in the input authentication policy contract for an authentication policy fragment.<br>ATTRIBUTE_QUERY - The value is one of the user attributes queried from an Attribute Authority.<br>IDENTITY_STORE_USER - The value is one of the attributes from a user identity store provisioner for SCIM processing.<br>IDENTITY_STORE_GROUP - The value is one of the attributes from a group identity store provisioner for SCIM processing.<br>SCIM_USER - The value is one of the attributes passed in from the SCIM user request.<br>SCIM_GROUP - The value is one of the attributes passed in from the SCIM group request.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#data_store_ref SpIdpConnection#data_store_ref}
  */
  readonly dataStoreRef: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#filter_fields SpIdpConnection#filter_fields}
  */
  readonly filterFields?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterFields = this._filterFields?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filterFields.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filterFields.internalValue = value.filterFields;
      this._id = value.id;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // filter_fields - computed: true, optional: true, required: false
  private _filterFields = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
    this._filterFields.internalValue = value;
  }
  public resetFilterFields() {
    this._filterFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFieldsInput() {
    return this._filterFields.internalValue;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#column_names SpIdpConnection#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#data_store_ref SpIdpConnection#data_store_ref}
  */
  readonly dataStoreRef: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#filter SpIdpConnection#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#schema SpIdpConnection#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#table SpIdpConnection#table}
  */
  readonly table: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._columnNames = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._columnNames = value.columnNames;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filter = value.filter;
      this._id = value.id;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // filter - computed: true, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: true, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#binary_encoding SpIdpConnection#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_encoding: {
      value: cdktf.stringToHclTerraform(struct!.binaryEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryEncoding = this._binaryEncoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryEncoding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryEncoding = value.binaryEncoding;
    }
  }

  // binary_encoding - computed: true, optional: true, required: false
  private _binaryEncoding?: string; 
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
  public set binaryEncoding(value: string) {
    this._binaryEncoding = value;
  }
  public resetBinaryEncoding() {
    this._binaryEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryEncodingInput() {
    return this._binaryEncoding;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#base_dn SpIdpConnection#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#binary_attribute_settings SpIdpConnection#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#data_store_ref SpIdpConnection#data_store_ref}
  */
  readonly dataStoreRef: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#member_of_nested_group SpIdpConnection#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#search_attributes SpIdpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#search_filter SpIdpConnection#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#search_scope SpIdpConnection#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_of_nested_group: {
      value: cdktf.booleanToHclTerraform(struct!.memberOfNestedGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_scope: {
      value: cdktf.stringToHclTerraform(struct!.searchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._binaryAttributeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAttributeSettings = this._binaryAttributeSettings?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._memberOfNestedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOfNestedGroup = this._memberOfNestedGroup;
    }
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._searchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScope = this._searchScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._baseDn = undefined;
      this._binaryAttributeSettings.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._memberOfNestedGroup = undefined;
      this._searchAttributes = undefined;
      this._searchFilter = undefined;
      this._searchScope = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._baseDn = value.baseDn;
      this._binaryAttributeSettings.internalValue = value.binaryAttributeSettings;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._id = value.id;
      this._memberOfNestedGroup = value.memberOfNestedGroup;
      this._searchAttributes = value.searchAttributes;
      this._searchFilter = value.searchFilter;
      this._searchScope = value.searchScope;
      this._type = value.type;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // binary_attribute_settings - computed: true, optional: true, required: false
  private _binaryAttributeSettings = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
    this._binaryAttributeSettings.internalValue = value;
  }
  public resetBinaryAttributeSettings() {
    this._binaryAttributeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAttributeSettingsInput() {
    return this._binaryAttributeSettings.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // member_of_nested_group - computed: true, optional: true, required: false
  private _memberOfNestedGroup?: boolean | cdktf.IResolvable; 
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }
  public set memberOfNestedGroup(value: boolean | cdktf.IResolvable) {
    this._memberOfNestedGroup = value;
  }
  public resetMemberOfNestedGroup() {
    this._memberOfNestedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfNestedGroupInput() {
    return this._memberOfNestedGroup;
  }

  // search_attributes - computed: true, optional: true, required: false
  private _searchAttributes?: string[]; 
  public get searchAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_attributes'));
  }
  public set searchAttributes(value: string[]) {
    this._searchAttributes = value;
  }
  public resetSearchAttributes() {
    this._searchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAttributesInput() {
    return this._searchAttributes;
  }

  // search_filter - computed: true, optional: false, required: true
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // search_scope - computed: true, optional: false, required: true
  private _searchScope?: string; 
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }
  public set searchScope(value: string) {
    this._searchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeInput() {
    return this._searchScope;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#custom_attribute_source SpIdpConnection#custom_attribute_source}
  */
  readonly customAttributeSource?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#jdbc_attribute_source SpIdpConnection#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#ldap_attribute_source SpIdpConnection#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributeSource = this._customAttributeSource?.internalValue;
    }
    if (this._jdbcAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcAttributeSource = this._jdbcAttributeSource?.internalValue;
    }
    if (this._ldapAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapAttributeSource = this._ldapAttributeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = undefined;
      this._jdbcAttributeSource.internalValue = undefined;
      this._ldapAttributeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = value.customAttributeSource;
      this._jdbcAttributeSource.internalValue = value.jdbcAttributeSource;
      this._ldapAttributeSource.internalValue = value.ldapAttributeSource;
    }
  }

  // custom_attribute_source - computed: true, optional: true, required: false
  private _customAttributeSource = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesCustomAttributeSource) {
    this._customAttributeSource.internalValue = value;
  }
  public resetCustomAttributeSource() {
    this._customAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeSourceInput() {
    return this._customAttributeSource.internalValue;
  }

  // jdbc_attribute_source - computed: true, optional: true, required: false
  private _jdbcAttributeSource = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesJdbcAttributeSource) {
    this._jdbcAttributeSource.internalValue = value;
  }
  public resetJdbcAttributeSource() {
    this._jdbcAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcAttributeSourceInput() {
    return this._jdbcAttributeSource.internalValue;
  }

  // ldap_attribute_source - computed: true, optional: true, required: false
  private _ldapAttributeSource = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesLdapAttributeSource) {
    this._ldapAttributeSource.internalValue = value;
  }
  public resetLdapAttributeSource() {
    this._ldapAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributeSourceInput() {
    return this._ldapAttributeSource.internalValue;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_name SpIdpConnection#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#condition SpIdpConnection#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#error_result SpIdpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._condition = undefined;
      this._errorResult = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._condition = value.condition;
      this._errorResult = value.errorResult;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // condition - computed: true, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#error_result SpIdpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#expression SpIdpConnection#expression}
  */
  readonly expression: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorResult = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorResult = value.errorResult;
      this._expression = value.expression;
    }
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // expression - computed: true, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#conditional_criteria SpIdpConnection#conditional_criteria}
  */
  readonly conditionalCriteria?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#expression_criteria SpIdpConnection#expression_criteria}
  */
  readonly expressionCriteria?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCriteria = this._conditionalCriteria?.internalValue;
    }
    if (this._expressionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCriteria = this._expressionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = undefined;
      this._expressionCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = value.conditionalCriteria;
      this._expressionCriteria.internalValue = value.expressionCriteria;
    }
  }

  // conditional_criteria - computed: true, optional: true, required: false
  private _conditionalCriteria = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
    this._conditionalCriteria.internalValue = value;
  }
  public resetConditionalCriteria() {
    this._conditionalCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCriteriaInput() {
    return this._conditionalCriteria.internalValue;
  }

  // expression_criteria - computed: true, optional: true, required: false
  private _expressionCriteria = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
    this._expressionCriteria.internalValue = value;
  }
  public resetExpressionCriteria() {
    this._expressionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionCriteriaInput() {
    return this._expressionCriteria.internalValue;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings {
  /**
  * A reference to a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#access_token_manager_ref SpIdpConnection#access_token_manager_ref}
  */
  readonly accessTokenManagerRef?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef;
  /**
  * A list of mappings from attribute names to their fulfillment values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_sources SpIdpConnection#attribute_sources}
  */
  readonly attributeSources?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources[] | cdktf.IResolvable;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#issuance_criteria SpIdpConnection#issuance_criteria}
  */
  readonly issuanceCriteria?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_manager_ref: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRefToTerraform(struct!.accessTokenManagerRef),
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesToTerraform, false)(struct!.attributeSources),
    issuance_criteria: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_manager_ref: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRefToHclTerraform(struct!.accessTokenManagerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef",
    },
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesList",
    },
    issuance_criteria: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenManagerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenManagerRef = this._accessTokenManagerRef?.internalValue;
    }
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._attributeSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeSources = this._attributeSources?.internalValue;
    }
    if (this._issuanceCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceCriteria = this._issuanceCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenManagerRef.internalValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._attributeSources.internalValue = undefined;
      this._issuanceCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenManagerRef.internalValue = value.accessTokenManagerRef;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._attributeSources.internalValue = value.attributeSources;
      this._issuanceCriteria.internalValue = value.issuanceCriteria;
    }
  }

  // access_token_manager_ref - computed: false, optional: true, required: false
  private _accessTokenManagerRef = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRefOutputReference(this, "access_token_manager_ref");
  public get accessTokenManagerRef() {
    return this._accessTokenManagerRef;
  }
  public putAccessTokenManagerRef(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAccessTokenManagerRef) {
    this._accessTokenManagerRef.internalValue = value;
  }
  public resetAccessTokenManagerRef() {
    this._accessTokenManagerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenManagerRefInput() {
    return this._accessTokenManagerRef.internalValue;
  }

  // attribute_contract_fulfillment - computed: false, optional: false, required: true
  private _attributeContractFulfillment = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributes {
}

export function spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributesToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributesToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributesOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes {
  /**
  * Specifies whether this attribute is masked in PingFederate logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#masked SpIdpConnection#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masked = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masked = value.masked;
      this._name = value.name;
    }
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
  }

  // name - computed: true, optional: false, required: true
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
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesOutputReference {
    return new SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract {
  /**
  * A list of additional attributes that are present in the incoming assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#extended_attributes SpIdpConnection#extended_attributes}
  */
  readonly extendedAttributes?: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_attributes: cdktf.listMapper(spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAttributes = this._extendedAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = value.extendedAttributes;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: true, required: false
  private _extendedAttributes = new SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }
}
export interface SpIdpConnectionIdpOauthGrantAttributeMapping {
  /**
  * A mapping in a connection that defines how access tokens are created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#access_token_manager_mappings SpIdpConnection#access_token_manager_mappings}
  */
  readonly accessTokenManagerMappings: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings[] | cdktf.IResolvable;
  /**
  * A set of user attributes that the IdP sends in the OAuth Assertion Grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#idp_oauth_attribute_contract SpIdpConnection#idp_oauth_attribute_contract}
  */
  readonly idpOauthAttributeContract: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract;
}

export function spIdpConnectionIdpOauthGrantAttributeMappingToTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_manager_mappings: cdktf.listMapper(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsToTerraform, false)(struct!.accessTokenManagerMappings),
    idp_oauth_attribute_contract: spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractToTerraform(struct!.idpOauthAttributeContract),
  }
}


export function spIdpConnectionIdpOauthGrantAttributeMappingToHclTerraform(struct?: SpIdpConnectionIdpOauthGrantAttributeMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_manager_mappings: {
      value: cdktf.listMapperHcl(spIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsToHclTerraform, false)(struct!.accessTokenManagerMappings),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsList",
    },
    idp_oauth_attribute_contract: {
      value: spIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractToHclTerraform(struct!.idpOauthAttributeContract),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionIdpOauthGrantAttributeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionIdpOauthGrantAttributeMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenManagerMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenManagerMappings = this._accessTokenManagerMappings?.internalValue;
    }
    if (this._idpOauthAttributeContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpOauthAttributeContract = this._idpOauthAttributeContract?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionIdpOauthGrantAttributeMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenManagerMappings.internalValue = undefined;
      this._idpOauthAttributeContract.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenManagerMappings.internalValue = value.accessTokenManagerMappings;
      this._idpOauthAttributeContract.internalValue = value.idpOauthAttributeContract;
    }
  }

  // access_token_manager_mappings - computed: false, optional: false, required: true
  private _accessTokenManagerMappings = new SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappingsList(this, "access_token_manager_mappings", true);
  public get accessTokenManagerMappings() {
    return this._accessTokenManagerMappings;
  }
  public putAccessTokenManagerMappings(value: SpIdpConnectionIdpOauthGrantAttributeMappingAccessTokenManagerMappings[] | cdktf.IResolvable) {
    this._accessTokenManagerMappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenManagerMappingsInput() {
    return this._accessTokenManagerMappings.internalValue;
  }

  // idp_oauth_attribute_contract - computed: false, optional: false, required: true
  private _idpOauthAttributeContract = new SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContractOutputReference(this, "idp_oauth_attribute_contract");
  public get idpOauthAttributeContract() {
    return this._idpOauthAttributeContract;
  }
  public putIdpOauthAttributeContract(value: SpIdpConnectionIdpOauthGrantAttributeMappingIdpOauthAttributeContract) {
    this._idpOauthAttributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpOauthAttributeContractInput() {
    return this._idpOauthAttributeContract.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningCustomSchemaAttributes {
  /**
  * Indicates whether the attribute is multi-valued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#multi_valued SpIdpConnection#multi_valued}
  */
  readonly multiValued?: boolean | cdktf.IResolvable;
  /**
  * Name of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name?: string;
  /**
  * List of sub-attributes for an attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#sub_attributes SpIdpConnection#sub_attributes}
  */
  readonly subAttributes?: string[];
  /**
  * Represents the name of each attribute type in case of multi-valued attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#types SpIdpConnection#types}
  */
  readonly types?: string[];
}

export function spIdpConnectionInboundProvisioningCustomSchemaAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningCustomSchemaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multi_valued: cdktf.booleanToTerraform(struct!.multiValued),
    name: cdktf.stringToTerraform(struct!.name),
    sub_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subAttributes),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
  }
}


export function spIdpConnectionInboundProvisioningCustomSchemaAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningCustomSchemaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multi_valued: {
      value: cdktf.booleanToHclTerraform(struct!.multiValued),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningCustomSchemaAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningCustomSchemaAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiValued !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValued = this._multiValued;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.subAttributes = this._subAttributes;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningCustomSchemaAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._multiValued = undefined;
      this._name = undefined;
      this._subAttributes = undefined;
      this._types = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._multiValued = value.multiValued;
      this._name = value.name;
      this._subAttributes = value.subAttributes;
      this._types = value.types;
    }
  }

  // multi_valued - computed: true, optional: true, required: false
  private _multiValued?: boolean | cdktf.IResolvable; 
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }
  public set multiValued(value: boolean | cdktf.IResolvable) {
    this._multiValued = value;
  }
  public resetMultiValued() {
    this._multiValued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedInput() {
    return this._multiValued;
  }

  // name - computed: true, optional: true, required: false
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

  // sub_attributes - computed: true, optional: true, required: false
  private _subAttributes?: string[]; 
  public get subAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('sub_attributes'));
  }
  public set subAttributes(value: string[]) {
    this._subAttributes = value;
  }
  public resetSubAttributes() {
    this._subAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAttributesInput() {
    return this._subAttributes;
  }

  // types - computed: true, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return cdktf.Fn.tolist(this.getListAttribute('types'));
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }
}

export class SpIdpConnectionInboundProvisioningCustomSchemaAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningCustomSchemaAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningCustomSchemaAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningCustomSchemaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningCustomSchema {
  /**
  * A custom SCIM attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attributes SpIdpConnection#attributes}
  */
  readonly attributes?: SpIdpConnectionInboundProvisioningCustomSchemaAttributes[] | cdktf.IResolvable;
  /**
  * Custom SCIM namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#namespace SpIdpConnection#namespace}
  */
  readonly namespace?: string;
}

export function spIdpConnectionInboundProvisioningCustomSchemaToTerraform(struct?: SpIdpConnectionInboundProvisioningCustomSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(spIdpConnectionInboundProvisioningCustomSchemaAttributesToTerraform, false)(struct!.attributes),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function spIdpConnectionInboundProvisioningCustomSchemaToHclTerraform(struct?: SpIdpConnectionInboundProvisioningCustomSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionInboundProvisioningCustomSchemaAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionInboundProvisioningCustomSchemaAttributesList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningCustomSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningCustomSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningCustomSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._namespace = value.namespace;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new SpIdpConnectionInboundProvisioningCustomSchemaAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: SpIdpConnectionInboundProvisioningCustomSchemaAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes {
  /**
  * Whether the sub-attribute is case exact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#case_exact SpIdpConnection#case_exact}
  */
  readonly caseExact?: boolean | cdktf.IResolvable;
  /**
  * Description of the sub-attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * Mutability of the sub-attribute. Options are `READONLY`, `WRITEONLY`, `READWRITE`, `IMMUTABLE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#mutability SpIdpConnection#mutability}
  */
  readonly mutability?: string;
  /**
  * Name of the sub-attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name?: string;
  /**
  * Whether the sub-attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#required SpIdpConnection#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Whether the sub-attribute is returned in the response. Options are `ALWAYS`, `DEFAULT`, `NEVER`, `REQUEST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#returned SpIdpConnection#returned}
  */
  readonly returned?: string;
  /**
  * Type of the sub-attribute. Options are `STRING`, `BOOLEAN`, `INTEGER`, `DECIMAL`, `DATETIME`, `BINARY`, `REFERENCE`, `COMPLEX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type?: string;
  /**
  * The uniqueness of the sub-attribute. Options are `NONE`, `GLOBAL`, `SERVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#uniqueness SpIdpConnection#uniqueness}
  */
  readonly uniqueness?: string;
}

export function spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_exact: cdktf.booleanToTerraform(struct!.caseExact),
    description: cdktf.stringToTerraform(struct!.description),
    mutability: cdktf.stringToTerraform(struct!.mutability),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    returned: cdktf.stringToTerraform(struct!.returned),
    type: cdktf.stringToTerraform(struct!.type),
    uniqueness: cdktf.stringToTerraform(struct!.uniqueness),
  }
}


export function spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_exact: {
      value: cdktf.booleanToHclTerraform(struct!.caseExact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mutability: {
      value: cdktf.stringToHclTerraform(struct!.mutability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    returned: {
      value: cdktf.stringToHclTerraform(struct!.returned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniqueness: {
      value: cdktf.stringToHclTerraform(struct!.uniqueness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseExact = this._caseExact;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._mutability !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutability = this._mutability;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._returned !== undefined) {
      hasAnyValues = true;
      internalValueResult.returned = this._returned;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueness !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueness = this._uniqueness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseExact = undefined;
      this._description = undefined;
      this._mutability = undefined;
      this._name = undefined;
      this._required = undefined;
      this._returned = undefined;
      this._type = undefined;
      this._uniqueness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseExact = value.caseExact;
      this._description = value.description;
      this._mutability = value.mutability;
      this._name = value.name;
      this._required = value.required;
      this._returned = value.returned;
      this._type = value.type;
      this._uniqueness = value.uniqueness;
    }
  }

  // case_exact - computed: true, optional: true, required: false
  private _caseExact?: boolean | cdktf.IResolvable; 
  public get caseExact() {
    return this.getBooleanAttribute('case_exact');
  }
  public set caseExact(value: boolean | cdktf.IResolvable) {
    this._caseExact = value;
  }
  public resetCaseExact() {
    this._caseExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseExactInput() {
    return this._caseExact;
  }

  // description - computed: true, optional: true, required: false
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

  // mutability - computed: true, optional: true, required: false
  private _mutability?: string; 
  public get mutability() {
    return this.getStringAttribute('mutability');
  }
  public set mutability(value: string) {
    this._mutability = value;
  }
  public resetMutability() {
    this._mutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutabilityInput() {
    return this._mutability;
  }

  // name - computed: true, optional: true, required: false
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // returned - computed: true, optional: true, required: false
  private _returned?: string; 
  public get returned() {
    return this.getStringAttribute('returned');
  }
  public set returned(value: string) {
    this._returned = value;
  }
  public resetReturned() {
    this._returned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnedInput() {
    return this._returned;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uniqueness - computed: true, optional: true, required: false
  private _uniqueness?: string; 
  public get uniqueness() {
    return this.getStringAttribute('uniqueness');
  }
  public set uniqueness(value: string) {
    this._uniqueness = value;
  }
  public resetUniqueness() {
    this._uniqueness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessInput() {
    return this._uniqueness;
  }
}

export class SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes {
  /**
  * List of canonical values for multi-valued attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#canonical_values SpIdpConnection#canonical_values}
  */
  readonly canonicalValues?: string[];
  /**
  * Whether the attribute is case exact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#case_exact SpIdpConnection#case_exact}
  */
  readonly caseExact?: boolean | cdktf.IResolvable;
  /**
  * Description of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * Indicates whether the attribute is multi-valued.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#multi_valued SpIdpConnection#multi_valued}
  */
  readonly multiValued?: boolean | cdktf.IResolvable;
  /**
  * Mutability of the attribute. Options are `READONLY`, `WRITEONLY`, `READWRITE`, `IMMUTABLE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#mutability SpIdpConnection#mutability}
  */
  readonly mutability?: string;
  /**
  * Name of the attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name?: string;
  /**
  * Whether the attribute is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#required SpIdpConnection#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Whether the attribute is returned in the response. Options are `ALWAYS`, `DEFAULT`, `NEVER`, `REQUEST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#returned SpIdpConnection#returned}
  */
  readonly returned?: string;
  /**
  * List of sub-attributes for complex attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#sub_attributes SpIdpConnection#sub_attributes}
  */
  readonly subAttributes?: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes[] | cdktf.IResolvable;
  /**
  * Type of the attribute. Options are `STRING`, `BOOLEAN`, `INTEGER`, `DECIMAL`, `DATETIME`, `BINARY`, `REFERENCE`, `COMPLEX`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type?: string;
  /**
  * The uniqueness of the attribute. Options are `NONE`, `GLOBAL`, `SERVER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#uniqueness SpIdpConnection#uniqueness}
  */
  readonly uniqueness?: string;
}

export function spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canonical_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.canonicalValues),
    case_exact: cdktf.booleanToTerraform(struct!.caseExact),
    description: cdktf.stringToTerraform(struct!.description),
    multi_valued: cdktf.booleanToTerraform(struct!.multiValued),
    mutability: cdktf.stringToTerraform(struct!.mutability),
    name: cdktf.stringToTerraform(struct!.name),
    required: cdktf.booleanToTerraform(struct!.required),
    returned: cdktf.stringToTerraform(struct!.returned),
    sub_attributes: cdktf.listMapper(spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesToTerraform, false)(struct!.subAttributes),
    type: cdktf.stringToTerraform(struct!.type),
    uniqueness: cdktf.stringToTerraform(struct!.uniqueness),
  }
}


export function spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    canonical_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.canonicalValues),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    case_exact: {
      value: cdktf.booleanToHclTerraform(struct!.caseExact),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_valued: {
      value: cdktf.booleanToHclTerraform(struct!.multiValued),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mutability: {
      value: cdktf.stringToHclTerraform(struct!.mutability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    returned: {
      value: cdktf.stringToHclTerraform(struct!.returned),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesToHclTerraform, false)(struct!.subAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesList",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uniqueness: {
      value: cdktf.stringToHclTerraform(struct!.uniqueness),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canonicalValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.canonicalValues = this._canonicalValues;
    }
    if (this._caseExact !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseExact = this._caseExact;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._multiValued !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiValued = this._multiValued;
    }
    if (this._mutability !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutability = this._mutability;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._returned !== undefined) {
      hasAnyValues = true;
      internalValueResult.returned = this._returned;
    }
    if (this._subAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subAttributes = this._subAttributes?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueness !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueness = this._uniqueness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._canonicalValues = undefined;
      this._caseExact = undefined;
      this._description = undefined;
      this._multiValued = undefined;
      this._mutability = undefined;
      this._name = undefined;
      this._required = undefined;
      this._returned = undefined;
      this._subAttributes.internalValue = undefined;
      this._type = undefined;
      this._uniqueness = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._canonicalValues = value.canonicalValues;
      this._caseExact = value.caseExact;
      this._description = value.description;
      this._multiValued = value.multiValued;
      this._mutability = value.mutability;
      this._name = value.name;
      this._required = value.required;
      this._returned = value.returned;
      this._subAttributes.internalValue = value.subAttributes;
      this._type = value.type;
      this._uniqueness = value.uniqueness;
    }
  }

  // canonical_values - computed: true, optional: true, required: false
  private _canonicalValues?: string[]; 
  public get canonicalValues() {
    return cdktf.Fn.tolist(this.getListAttribute('canonical_values'));
  }
  public set canonicalValues(value: string[]) {
    this._canonicalValues = value;
  }
  public resetCanonicalValues() {
    this._canonicalValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canonicalValuesInput() {
    return this._canonicalValues;
  }

  // case_exact - computed: true, optional: true, required: false
  private _caseExact?: boolean | cdktf.IResolvable; 
  public get caseExact() {
    return this.getBooleanAttribute('case_exact');
  }
  public set caseExact(value: boolean | cdktf.IResolvable) {
    this._caseExact = value;
  }
  public resetCaseExact() {
    this._caseExact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseExactInput() {
    return this._caseExact;
  }

  // description - computed: true, optional: true, required: false
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

  // multi_valued - computed: true, optional: true, required: false
  private _multiValued?: boolean | cdktf.IResolvable; 
  public get multiValued() {
    return this.getBooleanAttribute('multi_valued');
  }
  public set multiValued(value: boolean | cdktf.IResolvable) {
    this._multiValued = value;
  }
  public resetMultiValued() {
    this._multiValued = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiValuedInput() {
    return this._multiValued;
  }

  // mutability - computed: true, optional: true, required: false
  private _mutability?: string; 
  public get mutability() {
    return this.getStringAttribute('mutability');
  }
  public set mutability(value: string) {
    this._mutability = value;
  }
  public resetMutability() {
    this._mutability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mutabilityInput() {
    return this._mutability;
  }

  // name - computed: true, optional: true, required: false
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

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // returned - computed: true, optional: true, required: false
  private _returned?: string; 
  public get returned() {
    return this.getStringAttribute('returned');
  }
  public set returned(value: string) {
    this._returned = value;
  }
  public resetReturned() {
    this._returned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnedInput() {
    return this._returned;
  }

  // sub_attributes - computed: true, optional: true, required: false
  private _subAttributes = new SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributesList(this, "sub_attributes", true);
  public get subAttributes() {
    return this._subAttributes;
  }
  public putSubAttributes(value: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesSubAttributes[] | cdktf.IResolvable) {
    this._subAttributes.internalValue = value;
  }
  public resetSubAttributes() {
    this._subAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subAttributesInput() {
    return this._subAttributes.internalValue;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // uniqueness - computed: true, optional: true, required: false
  private _uniqueness?: string; 
  public get uniqueness() {
    return this.getStringAttribute('uniqueness');
  }
  public set uniqueness(value: string) {
    this._uniqueness = value;
  }
  public resetUniqueness() {
    this._uniqueness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniquenessInput() {
    return this._uniqueness;
  }
}

export class SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningCustomScim2Schema {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attributes SpIdpConnection#attributes}
  */
  readonly attributes?: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#namespace SpIdpConnection#namespace}
  */
  readonly namespace?: string;
}

export function spIdpConnectionInboundProvisioningCustomScim2SchemaToTerraform(struct?: SpIdpConnectionInboundProvisioningCustomScim2Schema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.listMapper(spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesToTerraform, false)(struct!.attributes),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function spIdpConnectionInboundProvisioningCustomScim2SchemaToHclTerraform(struct?: SpIdpConnectionInboundProvisioningCustomScim2Schema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionInboundProvisioningCustomScim2SchemaAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningCustomScim2SchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningCustomScim2Schema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningCustomScim2Schema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._namespace = value.namespace;
    }
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes = new SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: SpIdpConnectionInboundProvisioningCustomScim2SchemaAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name?: string;
}

export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // name - computed: true, optional: true, required: false
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
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes {
  /**
  * Specifies whether this attribute is masked in PingFederate logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#masked SpIdpConnection#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
}

export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masked = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masked = value.masked;
      this._name = value.name;
    }
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
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
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract {
  /**
  * A list of additional attributes that are added to the SCIM response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#extended_attributes SpIdpConnection#extended_attributes}
  */
  readonly extendedAttributes?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_attributes: cdktf.listMapper(spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAttributes = this._extendedAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = value.extendedAttributes;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: false, optional: true, required: false
  private _extendedAttributes = new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `ACTOR_TOKEN`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `ATTRIBUTE_QUERY`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `EXPRESSION`, `FRAGMENT`, `IDENTITY_STORE_GROUP`, `IDENTITY_STORE_USER`, `IDP_CONNECTION`, `INPUTS`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `LOCAL_IDENTITY_PROFILE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `OAUTH_PERSISTENT_GRANT`, `PASSWORD_CREDENTIAL_VALIDATOR`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `REQUEST`, `SCIM_GROUP`, `SCIM_USER`, `SUBJECT_TOKEN`, `TEXT`, `TOKEN`, `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `TRACKED_HTTP_PARAMS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSourceToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment {
  /**
  * A key that is meant to reference a source from which an attribute can be retrieved. This model is usually paired with a value which, depending on the SourceType, can be a hardcoded value or a reference to an attribute name specific to that SourceType. Not all values are applicable - a validation error will be returned for incorrect values.<br>For each SourceType, the value should be:<br>ACCOUNT_LINK - If account linking was enabled for the browser SSO, the value must be 'Local User ID', unless it has been overridden in PingFederate's server configuration.<br>ADAPTER - The value is one of the attributes of the IdP Adapter.<br>ASSERTION - The value is one of the attributes coming from the SAML assertion.<br>AUTHENTICATION_POLICY_CONTRACT - The value is one of the attributes coming from an authentication policy contract.<br>LOCAL_IDENTITY_PROFILE - The value is one of the fields coming from a local identity profile.<br>CONTEXT - The value must be one of the following ['TargetResource' or 'OAuthScopes' or 'ClientId' or 'AuthenticationCtx' or 'ClientIp' or 'Locale' or 'StsBasicAuthUsername' or 'StsSSLClientCertSubjectDN' or 'StsSSLClientCertChain' or 'VirtualServerId' or 'AuthenticatingAuthority' or 'DefaultPersistentGrantLifetime'.]<br>CLAIMS - Attributes provided by the OIDC Provider.<br>CUSTOM_DATA_STORE - The value is one of the attributes returned by this custom data store.<br>EXPRESSION - The value is an OGNL expression.<br>EXTENDED_CLIENT_METADATA - The value is from an OAuth extended client metadata parameter. This source type is deprecated and has been replaced by EXTENDED_PROPERTIES.<br>EXTENDED_PROPERTIES - The value is from an OAuth Client's extended property.<br>IDP_CONNECTION - The value is one of the attributes passed in by the IdP connection.<br>JDBC_DATA_STORE - The value is one of the column names returned from the JDBC attribute source.<br>LDAP_DATA_STORE - The value is one of the LDAP attributes supported by your LDAP data store.<br>MAPPED_ATTRIBUTES - The value is the name of one of the mapped attributes that is defined in the associated attribute mapping.<br>OAUTH_PERSISTENT_GRANT - The value is one of the attributes from the persistent grant.<br>PASSWORD_CREDENTIAL_VALIDATOR - The value is one of the attributes of the PCV.<br>NO_MAPPING - A placeholder value to indicate that an attribute currently has no mapped source.TEXT - A hardcoded value that is used to populate the corresponding attribute.<br>TOKEN - The value is one of the token attributes.<br>REQUEST - The value is from the request context such as the CIBA identity hint contract or the request contract for Ws-Trust.<br>TRACKED_HTTP_PARAMS - The value is from the original request parameters.<br>SUBJECT_TOKEN - The value is one of the OAuth 2.0 Token exchange subject_token attributes.<br>ACTOR_TOKEN - The value is one of the OAuth 2.0 Token exchange actor_token attributes.<br>TOKEN_EXCHANGE_PROCESSOR_POLICY - The value is one of the attributes coming from a Token Exchange Processor policy.<br>FRAGMENT - The value is one of the attributes coming from an authentication policy fragment.<br>INPUTS - The value is one of the attributes coming from an attribute defined in the input authentication policy contract for an authentication policy fragment.<br>ATTRIBUTE_QUERY - The value is one of the user attributes queried from an Attribute Authority.<br>IDENTITY_STORE_USER - The value is one of the attributes from a user identity store provisioner for SCIM processing.<br>IDENTITY_STORE_GROUP - The value is one of the attributes from a group identity store provisioner for SCIM processing.<br>SCIM_USER - The value is one of the attributes passed in from the SCIM user request.<br>SCIM_GROUP - The value is one of the attributes passed in from the SCIM group request.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentOutputReference {
    return new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
}

export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionInboundProvisioningGroupsReadGroupsAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsReadGroups {
  /**
  * A set of user attributes that the IdP sends in the SCIM response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract SpIdpConnection#attribute_contract}
  */
  readonly attributeContract: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract;
  /**
  * A list of user repository mappings from attribute names to their fulfillment values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_fulfillment SpIdpConnection#attribute_fulfillment}
  */
  readonly attributeFulfillment: { [key: string]: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment } | cdktf.IResolvable;
  /**
  * A list of LDAP data store attributes to populate a response to a user-provisioning request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attributes SpIdpConnection#attributes}
  */
  readonly attributes: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes[] | cdktf.IResolvable;
}

export function spIdpConnectionInboundProvisioningGroupsReadGroupsToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract: spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractToTerraform(struct!.attributeContract),
    attribute_fulfillment: cdktf.hashMapper(spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentToTerraform)(struct!.attributeFulfillment),
    attributes: cdktf.listMapper(spIdpConnectionInboundProvisioningGroupsReadGroupsAttributesToTerraform, false)(struct!.attributes),
  }
}


export function spIdpConnectionInboundProvisioningGroupsReadGroupsToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsReadGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract: {
      value: spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractToHclTerraform(struct!.attributeContract),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract",
    },
    attribute_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentToHclTerraform)(struct!.attributeFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentMap",
    },
    attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionInboundProvisioningGroupsReadGroupsAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsReadGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsReadGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContract = this._attributeContract?.internalValue;
    }
    if (this._attributeFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFulfillment = this._attributeFulfillment?.internalValue;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsReadGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContract.internalValue = undefined;
      this._attributeFulfillment.internalValue = undefined;
      this._attributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContract.internalValue = value.attributeContract;
      this._attributeFulfillment.internalValue = value.attributeFulfillment;
      this._attributes.internalValue = value.attributes;
    }
  }

  // attribute_contract - computed: false, optional: false, required: true
  private _attributeContract = new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // attribute_fulfillment - computed: false, optional: false, required: true
  private _attributeFulfillment = new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillmentMap(this, "attribute_fulfillment");
  public get attributeFulfillment() {
    return this._attributeFulfillment;
  }
  public putAttributeFulfillment(value: { [key: string]: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributeFulfillment } | cdktf.IResolvable) {
    this._attributeFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFulfillmentInput() {
    return this._attributeFulfillment.internalValue;
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes = new SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: SpIdpConnectionInboundProvisioningGroupsReadGroupsAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `ACTOR_TOKEN`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `ATTRIBUTE_QUERY`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `EXPRESSION`, `FRAGMENT`, `IDENTITY_STORE_GROUP`, `IDENTITY_STORE_USER`, `IDP_CONNECTION`, `INPUTS`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `LOCAL_IDENTITY_PROFILE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `OAUTH_PERSISTENT_GRANT`, `PASSWORD_CREDENTIAL_VALIDATOR`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `REQUEST`, `SCIM_GROUP`, `SCIM_USER`, `SUBJECT_TOKEN`, `TEXT`, `TOKEN`, `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `TRACKED_HTTP_PARAMS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSourceToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment {
  /**
  * A key that is meant to reference a source from which an attribute can be retrieved. This model is usually paired with a value which, depending on the SourceType, can be a hardcoded value or a reference to an attribute name specific to that SourceType. Not all values are applicable - a validation error will be returned for incorrect values.<br>For each SourceType, the value should be:<br>ACCOUNT_LINK - If account linking was enabled for the browser SSO, the value must be 'Local User ID', unless it has been overridden in PingFederate's server configuration.<br>ADAPTER - The value is one of the attributes of the IdP Adapter.<br>ASSERTION - The value is one of the attributes coming from the SAML assertion.<br>AUTHENTICATION_POLICY_CONTRACT - The value is one of the attributes coming from an authentication policy contract.<br>LOCAL_IDENTITY_PROFILE - The value is one of the fields coming from a local identity profile.<br>CONTEXT - The value must be one of the following ['TargetResource' or 'OAuthScopes' or 'ClientId' or 'AuthenticationCtx' or 'ClientIp' or 'Locale' or 'StsBasicAuthUsername' or 'StsSSLClientCertSubjectDN' or 'StsSSLClientCertChain' or 'VirtualServerId' or 'AuthenticatingAuthority' or 'DefaultPersistentGrantLifetime'.]<br>CLAIMS - Attributes provided by the OIDC Provider.<br>CUSTOM_DATA_STORE - The value is one of the attributes returned by this custom data store.<br>EXPRESSION - The value is an OGNL expression.<br>EXTENDED_CLIENT_METADATA - The value is from an OAuth extended client metadata parameter. This source type is deprecated and has been replaced by EXTENDED_PROPERTIES.<br>EXTENDED_PROPERTIES - The value is from an OAuth Client's extended property.<br>IDP_CONNECTION - The value is one of the attributes passed in by the IdP connection.<br>JDBC_DATA_STORE - The value is one of the column names returned from the JDBC attribute source.<br>LDAP_DATA_STORE - The value is one of the LDAP attributes supported by your LDAP data store.<br>MAPPED_ATTRIBUTES - The value is the name of one of the mapped attributes that is defined in the associated attribute mapping.<br>OAUTH_PERSISTENT_GRANT - The value is one of the attributes from the persistent grant.<br>PASSWORD_CREDENTIAL_VALIDATOR - The value is one of the attributes of the PCV.<br>NO_MAPPING - A placeholder value to indicate that an attribute currently has no mapped source.TEXT - A hardcoded value that is used to populate the corresponding attribute.<br>TOKEN - The value is one of the token attributes.<br>REQUEST - The value is from the request context such as the CIBA identity hint contract or the request contract for Ws-Trust.<br>TRACKED_HTTP_PARAMS - The value is from the original request parameters.<br>SUBJECT_TOKEN - The value is one of the OAuth 2.0 Token exchange subject_token attributes.<br>ACTOR_TOKEN - The value is one of the OAuth 2.0 Token exchange actor_token attributes.<br>TOKEN_EXCHANGE_PROCESSOR_POLICY - The value is one of the attributes coming from a Token Exchange Processor policy.<br>FRAGMENT - The value is one of the attributes coming from an authentication policy fragment.<br>INPUTS - The value is one of the attributes coming from an attribute defined in the input authentication policy contract for an authentication policy fragment.<br>ATTRIBUTE_QUERY - The value is one of the user attributes queried from an Attribute Authority.<br>IDENTITY_STORE_USER - The value is one of the attributes from a user identity store provisioner for SCIM processing.<br>IDENTITY_STORE_GROUP - The value is one of the attributes from a group identity store provisioner for SCIM processing.<br>SCIM_USER - The value is one of the attributes passed in from the SCIM user request.<br>SCIM_GROUP - The value is one of the attributes passed in from the SCIM group request.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentOutputReference {
    return new SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionInboundProvisioningGroupsWriteGroups {
  /**
  * A list of user repository mappings from attribute names to their fulfillment values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_fulfillment SpIdpConnection#attribute_fulfillment}
  */
  readonly attributeFulfillment: { [key: string]: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment } | cdktf.IResolvable;
}

export function spIdpConnectionInboundProvisioningGroupsWriteGroupsToTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsWriteGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_fulfillment: cdktf.hashMapper(spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentToTerraform)(struct!.attributeFulfillment),
  }
}


export function spIdpConnectionInboundProvisioningGroupsWriteGroupsToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroupsWriteGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentToHclTerraform)(struct!.attributeFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsWriteGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroupsWriteGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFulfillment = this._attributeFulfillment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroupsWriteGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeFulfillment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeFulfillment.internalValue = value.attributeFulfillment;
    }
  }

  // attribute_fulfillment - computed: false, optional: false, required: true
  private _attributeFulfillment = new SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillmentMap(this, "attribute_fulfillment");
  public get attributeFulfillment() {
    return this._attributeFulfillment;
  }
  public putAttributeFulfillment(value: { [key: string]: SpIdpConnectionInboundProvisioningGroupsWriteGroupsAttributeFulfillment } | cdktf.IResolvable) {
    this._attributeFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFulfillmentInput() {
    return this._attributeFulfillment.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningGroups {
  /**
  * Group info lookup and respond to incoming SCIM requests configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#read_groups SpIdpConnection#read_groups}
  */
  readonly readGroups: SpIdpConnectionInboundProvisioningGroupsReadGroups;
  /**
  * Group creation configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#write_groups SpIdpConnection#write_groups}
  */
  readonly writeGroups: SpIdpConnectionInboundProvisioningGroupsWriteGroups;
}

export function spIdpConnectionInboundProvisioningGroupsToTerraform(struct?: SpIdpConnectionInboundProvisioningGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_groups: spIdpConnectionInboundProvisioningGroupsReadGroupsToTerraform(struct!.readGroups),
    write_groups: spIdpConnectionInboundProvisioningGroupsWriteGroupsToTerraform(struct!.writeGroups),
  }
}


export function spIdpConnectionInboundProvisioningGroupsToHclTerraform(struct?: SpIdpConnectionInboundProvisioningGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_groups: {
      value: spIdpConnectionInboundProvisioningGroupsReadGroupsToHclTerraform(struct!.readGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsReadGroups",
    },
    write_groups: {
      value: spIdpConnectionInboundProvisioningGroupsWriteGroupsToHclTerraform(struct!.writeGroups),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningGroupsWriteGroups",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readGroups = this._readGroups?.internalValue;
    }
    if (this._writeGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeGroups = this._writeGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readGroups.internalValue = undefined;
      this._writeGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readGroups.internalValue = value.readGroups;
      this._writeGroups.internalValue = value.writeGroups;
    }
  }

  // read_groups - computed: false, optional: false, required: true
  private _readGroups = new SpIdpConnectionInboundProvisioningGroupsReadGroupsOutputReference(this, "read_groups");
  public get readGroups() {
    return this._readGroups;
  }
  public putReadGroups(value: SpIdpConnectionInboundProvisioningGroupsReadGroups) {
    this._readGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readGroupsInput() {
    return this._readGroups.internalValue;
  }

  // write_groups - computed: false, optional: false, required: true
  private _writeGroups = new SpIdpConnectionInboundProvisioningGroupsWriteGroupsOutputReference(this, "write_groups");
  public get writeGroups() {
    return this._writeGroups;
  }
  public putWriteGroups(value: SpIdpConnectionInboundProvisioningGroupsWriteGroups) {
    this._writeGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeGroupsInput() {
    return this._writeGroups.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningServiceProviderConfig {
  /**
  * The URI for the service provider's documentation. This only applies when using SCIM 2.0. Supported in PingFederate 12.3 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#documentation_uri SpIdpConnection#documentation_uri}
  */
  readonly documentationUri?: string;
}

export function spIdpConnectionInboundProvisioningServiceProviderConfigToTerraform(struct?: SpIdpConnectionInboundProvisioningServiceProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    documentation_uri: cdktf.stringToTerraform(struct!.documentationUri),
  }
}


export function spIdpConnectionInboundProvisioningServiceProviderConfigToHclTerraform(struct?: SpIdpConnectionInboundProvisioningServiceProviderConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    documentation_uri: {
      value: cdktf.stringToHclTerraform(struct!.documentationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningServiceProviderConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningServiceProviderConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._documentationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.documentationUri = this._documentationUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningServiceProviderConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._documentationUri = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._documentationUri = value.documentationUri;
    }
  }

  // documentation_uri - computed: false, optional: true, required: false
  private _documentationUri?: string; 
  public get documentationUri() {
    return this.getStringAttribute('documentation_uri');
  }
  public set documentationUri(value: string) {
    this._documentationUri = value;
  }
  public resetDocumentationUri() {
    this._documentationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationUriInput() {
    return this._documentationUri;
  }
}
export interface SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRefToTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRefToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore {
  /**
  * Identity Store Provisioner data store user repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#identity_store_provisioner_ref SpIdpConnection#identity_store_provisioner_ref}
  */
  readonly identityStoreProvisionerRef: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef;
}

export function spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreToTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_store_provisioner_ref: spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRefToTerraform(struct!.identityStoreProvisionerRef),
  }
}


export function spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_store_provisioner_ref: {
      value: spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRefToHclTerraform(struct!.identityStoreProvisionerRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityStoreProvisionerRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityStoreProvisionerRef = this._identityStoreProvisionerRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityStoreProvisionerRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityStoreProvisionerRef.internalValue = value.identityStoreProvisionerRef;
    }
  }

  // identity_store_provisioner_ref - computed: false, optional: false, required: true
  private _identityStoreProvisionerRef = new SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRefOutputReference(this, "identity_store_provisioner_ref");
  public get identityStoreProvisionerRef() {
    return this._identityStoreProvisionerRef;
  }
  public putIdentityStoreProvisionerRef(value: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreIdentityStoreProvisionerRef) {
    this._identityStoreProvisionerRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreProvisionerRefInput() {
    return this._identityStoreProvisionerRef.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRefToTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRefToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionInboundProvisioningUserRepositoryLdap {
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#base_dn SpIdpConnection#base_dn}
  */
  readonly baseDn?: string;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#data_store_ref SpIdpConnection#data_store_ref}
  */
  readonly dataStoreRef: SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef;
  /**
  * The expression that results in a unique group identifier, when combined with the Base DN. Only required when configuring the `inbound_provisioning.groups` attribute. Otherwise should not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#unique_group_id_filter SpIdpConnection#unique_group_id_filter}
  */
  readonly uniqueGroupIdFilter?: string;
  /**
  * The expression that results in a unique user identifier, when combined with the Base DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#unique_user_id_filter SpIdpConnection#unique_user_id_filter}
  */
  readonly uniqueUserIdFilter: string;
}

export function spIdpConnectionInboundProvisioningUserRepositoryLdapToTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    data_store_ref: spIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRefToTerraform(struct!.dataStoreRef),
    unique_group_id_filter: cdktf.stringToTerraform(struct!.uniqueGroupIdFilter),
    unique_user_id_filter: cdktf.stringToTerraform(struct!.uniqueUserIdFilter),
  }
}


export function spIdpConnectionInboundProvisioningUserRepositoryLdapToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepositoryLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_store_ref: {
      value: spIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef",
    },
    unique_group_id_filter: {
      value: cdktf.stringToHclTerraform(struct!.uniqueGroupIdFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_user_id_filter: {
      value: cdktf.stringToHclTerraform(struct!.uniqueUserIdFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUserRepositoryLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUserRepositoryLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._uniqueGroupIdFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueGroupIdFilter = this._uniqueGroupIdFilter;
    }
    if (this._uniqueUserIdFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueUserIdFilter = this._uniqueUserIdFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUserRepositoryLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._baseDn = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._uniqueGroupIdFilter = undefined;
      this._uniqueUserIdFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._baseDn = value.baseDn;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._uniqueGroupIdFilter = value.uniqueGroupIdFilter;
      this._uniqueUserIdFilter = value.uniqueUserIdFilter;
    }
  }

  // base_dn - computed: false, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // data_store_ref - computed: false, optional: false, required: true
  private _dataStoreRef = new SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpIdpConnectionInboundProvisioningUserRepositoryLdapDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // unique_group_id_filter - computed: true, optional: true, required: false
  private _uniqueGroupIdFilter?: string; 
  public get uniqueGroupIdFilter() {
    return this.getStringAttribute('unique_group_id_filter');
  }
  public set uniqueGroupIdFilter(value: string) {
    this._uniqueGroupIdFilter = value;
  }
  public resetUniqueGroupIdFilter() {
    this._uniqueGroupIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueGroupIdFilterInput() {
    return this._uniqueGroupIdFilter;
  }

  // unique_user_id_filter - computed: false, optional: false, required: true
  private _uniqueUserIdFilter?: string; 
  public get uniqueUserIdFilter() {
    return this.getStringAttribute('unique_user_id_filter');
  }
  public set uniqueUserIdFilter(value: string) {
    this._uniqueUserIdFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueUserIdFilterInput() {
    return this._uniqueUserIdFilter;
  }
}
export interface SpIdpConnectionInboundProvisioningUserRepository {
  /**
  * Identity Store Provisioner data store user repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#identity_store SpIdpConnection#identity_store}
  */
  readonly identityStore?: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore;
  /**
  * LDAP Active Directory data store user repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#ldap SpIdpConnection#ldap}
  */
  readonly ldap?: SpIdpConnectionInboundProvisioningUserRepositoryLdap;
}

export function spIdpConnectionInboundProvisioningUserRepositoryToTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identity_store: spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreToTerraform(struct!.identityStore),
    ldap: spIdpConnectionInboundProvisioningUserRepositoryLdapToTerraform(struct!.ldap),
  }
}


export function spIdpConnectionInboundProvisioningUserRepositoryToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUserRepository | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identity_store: {
      value: spIdpConnectionInboundProvisioningUserRepositoryIdentityStoreToHclTerraform(struct!.identityStore),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore",
    },
    ldap: {
      value: spIdpConnectionInboundProvisioningUserRepositoryLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUserRepositoryLdap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUserRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUserRepository | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identityStore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityStore = this._identityStore?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUserRepository | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identityStore.internalValue = undefined;
      this._ldap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identityStore.internalValue = value.identityStore;
      this._ldap.internalValue = value.ldap;
    }
  }

  // identity_store - computed: false, optional: true, required: false
  private _identityStore = new SpIdpConnectionInboundProvisioningUserRepositoryIdentityStoreOutputReference(this, "identity_store");
  public get identityStore() {
    return this._identityStore;
  }
  public putIdentityStore(value: SpIdpConnectionInboundProvisioningUserRepositoryIdentityStore) {
    this._identityStore.internalValue = value;
  }
  public resetIdentityStore() {
    this._identityStore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityStoreInput() {
    return this._identityStore.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new SpIdpConnectionInboundProvisioningUserRepositoryLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: SpIdpConnectionInboundProvisioningUserRepositoryLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributes {
}

export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // masked - computed: true, optional: false, required: false
  public get masked() {
    return this.getBooleanAttribute('masked');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes {
  /**
  * Specifies whether this attribute is masked in PingFederate logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#masked SpIdpConnection#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
}

export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masked = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masked = value.masked;
      this._name = value.name;
    }
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
  }

  // name - computed: true, optional: false, required: true
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
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract {
  /**
  * A list of additional attributes that are added to the SCIM response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#extended_attributes SpIdpConnection#extended_attributes}
  */
  readonly extendedAttributes?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_attributes: cdktf.listMapper(spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAttributes = this._extendedAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = value.extendedAttributes;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: true, required: false
  private _extendedAttributes = new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `ACTOR_TOKEN`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `ATTRIBUTE_QUERY`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `EXPRESSION`, `FRAGMENT`, `IDENTITY_STORE_GROUP`, `IDENTITY_STORE_USER`, `IDP_CONNECTION`, `INPUTS`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `LOCAL_IDENTITY_PROFILE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `OAUTH_PERSISTENT_GRANT`, `PASSWORD_CREDENTIAL_VALIDATOR`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `REQUEST`, `SCIM_GROUP`, `SCIM_USER`, `SUBJECT_TOKEN`, `TEXT`, `TOKEN`, `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `TRACKED_HTTP_PARAMS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSourceToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment {
  /**
  * A key that is meant to reference a source from which an attribute can be retrieved. This model is usually paired with a value which, depending on the SourceType, can be a hardcoded value or a reference to an attribute name specific to that SourceType. Not all values are applicable - a validation error will be returned for incorrect values.<br>For each SourceType, the value should be:<br>ACCOUNT_LINK - If account linking was enabled for the browser SSO, the value must be 'Local User ID', unless it has been overridden in PingFederate's server configuration.<br>ADAPTER - The value is one of the attributes of the IdP Adapter.<br>ASSERTION - The value is one of the attributes coming from the SAML assertion.<br>AUTHENTICATION_POLICY_CONTRACT - The value is one of the attributes coming from an authentication policy contract.<br>LOCAL_IDENTITY_PROFILE - The value is one of the fields coming from a local identity profile.<br>CONTEXT - The value must be one of the following ['TargetResource' or 'OAuthScopes' or 'ClientId' or 'AuthenticationCtx' or 'ClientIp' or 'Locale' or 'StsBasicAuthUsername' or 'StsSSLClientCertSubjectDN' or 'StsSSLClientCertChain' or 'VirtualServerId' or 'AuthenticatingAuthority' or 'DefaultPersistentGrantLifetime'.]<br>CLAIMS - Attributes provided by the OIDC Provider.<br>CUSTOM_DATA_STORE - The value is one of the attributes returned by this custom data store.<br>EXPRESSION - The value is an OGNL expression.<br>EXTENDED_CLIENT_METADATA - The value is from an OAuth extended client metadata parameter. This source type is deprecated and has been replaced by EXTENDED_PROPERTIES.<br>EXTENDED_PROPERTIES - The value is from an OAuth Client's extended property.<br>IDP_CONNECTION - The value is one of the attributes passed in by the IdP connection.<br>JDBC_DATA_STORE - The value is one of the column names returned from the JDBC attribute source.<br>LDAP_DATA_STORE - The value is one of the LDAP attributes supported by your LDAP data store.<br>MAPPED_ATTRIBUTES - The value is the name of one of the mapped attributes that is defined in the associated attribute mapping.<br>OAUTH_PERSISTENT_GRANT - The value is one of the attributes from the persistent grant.<br>PASSWORD_CREDENTIAL_VALIDATOR - The value is one of the attributes of the PCV.<br>NO_MAPPING - A placeholder value to indicate that an attribute currently has no mapped source.TEXT - A hardcoded value that is used to populate the corresponding attribute.<br>TOKEN - The value is one of the token attributes.<br>REQUEST - The value is from the request context such as the CIBA identity hint contract or the request contract for Ws-Trust.<br>TRACKED_HTTP_PARAMS - The value is from the original request parameters.<br>SUBJECT_TOKEN - The value is one of the OAuth 2.0 Token exchange subject_token attributes.<br>ACTOR_TOKEN - The value is one of the OAuth 2.0 Token exchange actor_token attributes.<br>TOKEN_EXCHANGE_PROCESSOR_POLICY - The value is one of the attributes coming from a Token Exchange Processor policy.<br>FRAGMENT - The value is one of the attributes coming from an authentication policy fragment.<br>INPUTS - The value is one of the attributes coming from an attribute defined in the input authentication policy contract for an authentication policy fragment.<br>ATTRIBUTE_QUERY - The value is one of the user attributes queried from an Attribute Authority.<br>IDENTITY_STORE_USER - The value is one of the attributes from a user identity store provisioner for SCIM processing.<br>IDENTITY_STORE_GROUP - The value is one of the attributes from a group identity store provisioner for SCIM processing.<br>SCIM_USER - The value is one of the attributes passed in from the SCIM user request.<br>SCIM_GROUP - The value is one of the attributes passed in from the SCIM group request.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentOutputReference {
    return new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionInboundProvisioningUsersReadUsersAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
}

export function spIdpConnectionInboundProvisioningUsersReadUsersAttributesToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionInboundProvisioningUsersReadUsersAttributesToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsersAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersReadUsersAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
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
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionInboundProvisioningUsersReadUsersAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionInboundProvisioningUsersReadUsersAttributesOutputReference {
    return new SpIdpConnectionInboundProvisioningUsersReadUsersAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionInboundProvisioningUsersReadUsers {
  /**
  * A set of user attributes that the IdP sends in the SCIM response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract SpIdpConnection#attribute_contract}
  */
  readonly attributeContract: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract;
  /**
  * A list of user repository mappings from attribute names to their fulfillment values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_fulfillment SpIdpConnection#attribute_fulfillment}
  */
  readonly attributeFulfillment: { [key: string]: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment } | cdktf.IResolvable;
  /**
  * A list of LDAP data store attributes to populate a response to a user-provisioning request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attributes SpIdpConnection#attributes}
  */
  readonly attributes: SpIdpConnectionInboundProvisioningUsersReadUsersAttributes[] | cdktf.IResolvable;
}

export function spIdpConnectionInboundProvisioningUsersReadUsersToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract: spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractToTerraform(struct!.attributeContract),
    attribute_fulfillment: cdktf.hashMapper(spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentToTerraform)(struct!.attributeFulfillment),
    attributes: cdktf.listMapper(spIdpConnectionInboundProvisioningUsersReadUsersAttributesToTerraform, false)(struct!.attributes),
  }
}


export function spIdpConnectionInboundProvisioningUsersReadUsersToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersReadUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract: {
      value: spIdpConnectionInboundProvisioningUsersReadUsersAttributeContractToHclTerraform(struct!.attributeContract),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract",
    },
    attribute_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentToHclTerraform)(struct!.attributeFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentMap",
    },
    attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionInboundProvisioningUsersReadUsersAttributesToHclTerraform, false)(struct!.attributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersReadUsersAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersReadUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersReadUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContract = this._attributeContract?.internalValue;
    }
    if (this._attributeFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFulfillment = this._attributeFulfillment?.internalValue;
    }
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersReadUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContract.internalValue = undefined;
      this._attributeFulfillment.internalValue = undefined;
      this._attributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContract.internalValue = value.attributeContract;
      this._attributeFulfillment.internalValue = value.attributeFulfillment;
      this._attributes.internalValue = value.attributes;
    }
  }

  // attribute_contract - computed: false, optional: false, required: true
  private _attributeContract = new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // attribute_fulfillment - computed: false, optional: false, required: true
  private _attributeFulfillment = new SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillmentMap(this, "attribute_fulfillment");
  public get attributeFulfillment() {
    return this._attributeFulfillment;
  }
  public putAttributeFulfillment(value: { [key: string]: SpIdpConnectionInboundProvisioningUsersReadUsersAttributeFulfillment } | cdktf.IResolvable) {
    this._attributeFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFulfillmentInput() {
    return this._attributeFulfillment.internalValue;
  }

  // attributes - computed: false, optional: false, required: true
  private _attributes = new SpIdpConnectionInboundProvisioningUsersReadUsersAttributesList(this, "attributes", true);
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: SpIdpConnectionInboundProvisioningUsersReadUsersAttributes[] | cdktf.IResolvable) {
    this._attributes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `ACTOR_TOKEN`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `ATTRIBUTE_QUERY`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `EXPRESSION`, `FRAGMENT`, `IDENTITY_STORE_GROUP`, `IDENTITY_STORE_USER`, `IDP_CONNECTION`, `INPUTS`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `LOCAL_IDENTITY_PROFILE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `OAUTH_PERSISTENT_GRANT`, `PASSWORD_CREDENTIAL_VALIDATOR`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `REQUEST`, `SCIM_GROUP`, `SCIM_USER`, `SUBJECT_TOKEN`, `TEXT`, `TOKEN`, `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `TRACKED_HTTP_PARAMS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSourceToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment {
  /**
  * A key that is meant to reference a source from which an attribute can be retrieved. This model is usually paired with a value which, depending on the SourceType, can be a hardcoded value or a reference to an attribute name specific to that SourceType. Not all values are applicable - a validation error will be returned for incorrect values.<br>For each SourceType, the value should be:<br>ACCOUNT_LINK - If account linking was enabled for the browser SSO, the value must be 'Local User ID', unless it has been overridden in PingFederate's server configuration.<br>ADAPTER - The value is one of the attributes of the IdP Adapter.<br>ASSERTION - The value is one of the attributes coming from the SAML assertion.<br>AUTHENTICATION_POLICY_CONTRACT - The value is one of the attributes coming from an authentication policy contract.<br>LOCAL_IDENTITY_PROFILE - The value is one of the fields coming from a local identity profile.<br>CONTEXT - The value must be one of the following ['TargetResource' or 'OAuthScopes' or 'ClientId' or 'AuthenticationCtx' or 'ClientIp' or 'Locale' or 'StsBasicAuthUsername' or 'StsSSLClientCertSubjectDN' or 'StsSSLClientCertChain' or 'VirtualServerId' or 'AuthenticatingAuthority' or 'DefaultPersistentGrantLifetime'.]<br>CLAIMS - Attributes provided by the OIDC Provider.<br>CUSTOM_DATA_STORE - The value is one of the attributes returned by this custom data store.<br>EXPRESSION - The value is an OGNL expression.<br>EXTENDED_CLIENT_METADATA - The value is from an OAuth extended client metadata parameter. This source type is deprecated and has been replaced by EXTENDED_PROPERTIES.<br>EXTENDED_PROPERTIES - The value is from an OAuth Client's extended property.<br>IDP_CONNECTION - The value is one of the attributes passed in by the IdP connection.<br>JDBC_DATA_STORE - The value is one of the column names returned from the JDBC attribute source.<br>LDAP_DATA_STORE - The value is one of the LDAP attributes supported by your LDAP data store.<br>MAPPED_ATTRIBUTES - The value is the name of one of the mapped attributes that is defined in the associated attribute mapping.<br>OAUTH_PERSISTENT_GRANT - The value is one of the attributes from the persistent grant.<br>PASSWORD_CREDENTIAL_VALIDATOR - The value is one of the attributes of the PCV.<br>NO_MAPPING - A placeholder value to indicate that an attribute currently has no mapped source.TEXT - A hardcoded value that is used to populate the corresponding attribute.<br>TOKEN - The value is one of the token attributes.<br>REQUEST - The value is from the request context such as the CIBA identity hint contract or the request contract for Ws-Trust.<br>TRACKED_HTTP_PARAMS - The value is from the original request parameters.<br>SUBJECT_TOKEN - The value is one of the OAuth 2.0 Token exchange subject_token attributes.<br>ACTOR_TOKEN - The value is one of the OAuth 2.0 Token exchange actor_token attributes.<br>TOKEN_EXCHANGE_PROCESSOR_POLICY - The value is one of the attributes coming from a Token Exchange Processor policy.<br>FRAGMENT - The value is one of the attributes coming from an authentication policy fragment.<br>INPUTS - The value is one of the attributes coming from an attribute defined in the input authentication policy contract for an authentication policy fragment.<br>ATTRIBUTE_QUERY - The value is one of the user attributes queried from an Attribute Authority.<br>IDENTITY_STORE_USER - The value is one of the attributes from a user identity store provisioner for SCIM processing.<br>IDENTITY_STORE_GROUP - The value is one of the attributes from a group identity store provisioner for SCIM processing.<br>SCIM_USER - The value is one of the attributes passed in from the SCIM user request.<br>SCIM_GROUP - The value is one of the attributes passed in from the SCIM group request.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentOutputReference {
    return new SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionInboundProvisioningUsersWriteUsers {
  /**
  * A list of user repository mappings from attribute names to their fulfillment values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_fulfillment SpIdpConnection#attribute_fulfillment}
  */
  readonly attributeFulfillment: { [key: string]: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment } | cdktf.IResolvable;
}

export function spIdpConnectionInboundProvisioningUsersWriteUsersToTerraform(struct?: SpIdpConnectionInboundProvisioningUsersWriteUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_fulfillment: cdktf.hashMapper(spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentToTerraform)(struct!.attributeFulfillment),
  }
}


export function spIdpConnectionInboundProvisioningUsersWriteUsersToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsersWriteUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentToHclTerraform)(struct!.attributeFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersWriteUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsersWriteUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeFulfillment = this._attributeFulfillment?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsersWriteUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeFulfillment.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeFulfillment.internalValue = value.attributeFulfillment;
    }
  }

  // attribute_fulfillment - computed: false, optional: false, required: true
  private _attributeFulfillment = new SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillmentMap(this, "attribute_fulfillment");
  public get attributeFulfillment() {
    return this._attributeFulfillment;
  }
  public putAttributeFulfillment(value: { [key: string]: SpIdpConnectionInboundProvisioningUsersWriteUsersAttributeFulfillment } | cdktf.IResolvable) {
    this._attributeFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeFulfillmentInput() {
    return this._attributeFulfillment.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioningUsers {
  /**
  * User info lookup and respond to incoming SCIM requests configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#read_users SpIdpConnection#read_users}
  */
  readonly readUsers: SpIdpConnectionInboundProvisioningUsersReadUsers;
  /**
  * User creation configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#write_users SpIdpConnection#write_users}
  */
  readonly writeUsers: SpIdpConnectionInboundProvisioningUsersWriteUsers;
}

export function spIdpConnectionInboundProvisioningUsersToTerraform(struct?: SpIdpConnectionInboundProvisioningUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_users: spIdpConnectionInboundProvisioningUsersReadUsersToTerraform(struct!.readUsers),
    write_users: spIdpConnectionInboundProvisioningUsersWriteUsersToTerraform(struct!.writeUsers),
  }
}


export function spIdpConnectionInboundProvisioningUsersToHclTerraform(struct?: SpIdpConnectionInboundProvisioningUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_users: {
      value: spIdpConnectionInboundProvisioningUsersReadUsersToHclTerraform(struct!.readUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersReadUsers",
    },
    write_users: {
      value: spIdpConnectionInboundProvisioningUsersWriteUsersToHclTerraform(struct!.writeUsers),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUsersWriteUsers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioningUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readUsers = this._readUsers?.internalValue;
    }
    if (this._writeUsers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeUsers = this._writeUsers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioningUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readUsers.internalValue = undefined;
      this._writeUsers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readUsers.internalValue = value.readUsers;
      this._writeUsers.internalValue = value.writeUsers;
    }
  }

  // read_users - computed: false, optional: false, required: true
  private _readUsers = new SpIdpConnectionInboundProvisioningUsersReadUsersOutputReference(this, "read_users");
  public get readUsers() {
    return this._readUsers;
  }
  public putReadUsers(value: SpIdpConnectionInboundProvisioningUsersReadUsers) {
    this._readUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get readUsersInput() {
    return this._readUsers.internalValue;
  }

  // write_users - computed: false, optional: false, required: true
  private _writeUsers = new SpIdpConnectionInboundProvisioningUsersWriteUsersOutputReference(this, "write_users");
  public get writeUsers() {
    return this._writeUsers;
  }
  public putWriteUsers(value: SpIdpConnectionInboundProvisioningUsersWriteUsers) {
    this._writeUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get writeUsersInput() {
    return this._writeUsers.internalValue;
  }
}
export interface SpIdpConnectionInboundProvisioning {
  /**
  * Specify behavior of how SCIM DELETE requests are handled. Options are `DISABLE_USER`, `PERMANENTLY_DELETE_USER`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#action_on_delete SpIdpConnection#action_on_delete}
  */
  readonly actionOnDelete?: string;
  /**
  * Custom SCIM Attributes configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#custom_schema SpIdpConnection#custom_schema}
  */
  readonly customSchema?: SpIdpConnectionInboundProvisioningCustomSchema;
  /**
  * Custom SCIM 2.0 Attributes configuration. Supported in PingFederate 12.3 and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#custom_scim2_schema SpIdpConnection#custom_scim2_schema}
  */
  readonly customScim2Schema?: SpIdpConnectionInboundProvisioningCustomScim2Schema;
  /**
  * Specify support for provisioning of groups. This only applies when using SCIM 1.1. Must be `true` to configure `groups` attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#group_support SpIdpConnection#group_support}
  */
  readonly groupSupport: boolean | cdktf.IResolvable;
  /**
  * Group creation and read configuration. Requires `group_support` to be `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#groups SpIdpConnection#groups}
  */
  readonly groups?: SpIdpConnectionInboundProvisioningGroups;
  /**
  * SCIM version to use for provisioning. The default is `SCIM11`. Options are `SCIM11`, `SCIM20`. Supported in PingFederate `12.3` and later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#scim_version SpIdpConnection#scim_version}
  */
  readonly scimVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#service_provider_config SpIdpConnection#service_provider_config}
  */
  readonly serviceProviderConfig?: SpIdpConnectionInboundProvisioningServiceProviderConfig;
  /**
  * SCIM Inbound Provisioning user repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#user_repository SpIdpConnection#user_repository}
  */
  readonly userRepository: SpIdpConnectionInboundProvisioningUserRepository;
  /**
  * User creation and read configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#users SpIdpConnection#users}
  */
  readonly users: SpIdpConnectionInboundProvisioningUsers;
}

export function spIdpConnectionInboundProvisioningToTerraform(struct?: SpIdpConnectionInboundProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_on_delete: cdktf.stringToTerraform(struct!.actionOnDelete),
    custom_schema: spIdpConnectionInboundProvisioningCustomSchemaToTerraform(struct!.customSchema),
    custom_scim2_schema: spIdpConnectionInboundProvisioningCustomScim2SchemaToTerraform(struct!.customScim2Schema),
    group_support: cdktf.booleanToTerraform(struct!.groupSupport),
    groups: spIdpConnectionInboundProvisioningGroupsToTerraform(struct!.groups),
    scim_version: cdktf.stringToTerraform(struct!.scimVersion),
    service_provider_config: spIdpConnectionInboundProvisioningServiceProviderConfigToTerraform(struct!.serviceProviderConfig),
    user_repository: spIdpConnectionInboundProvisioningUserRepositoryToTerraform(struct!.userRepository),
    users: spIdpConnectionInboundProvisioningUsersToTerraform(struct!.users),
  }
}


export function spIdpConnectionInboundProvisioningToHclTerraform(struct?: SpIdpConnectionInboundProvisioning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_on_delete: {
      value: cdktf.stringToHclTerraform(struct!.actionOnDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_schema: {
      value: spIdpConnectionInboundProvisioningCustomSchemaToHclTerraform(struct!.customSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningCustomSchema",
    },
    custom_scim2_schema: {
      value: spIdpConnectionInboundProvisioningCustomScim2SchemaToHclTerraform(struct!.customScim2Schema),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningCustomScim2Schema",
    },
    group_support: {
      value: cdktf.booleanToHclTerraform(struct!.groupSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: spIdpConnectionInboundProvisioningGroupsToHclTerraform(struct!.groups),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningGroups",
    },
    scim_version: {
      value: cdktf.stringToHclTerraform(struct!.scimVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_provider_config: {
      value: spIdpConnectionInboundProvisioningServiceProviderConfigToHclTerraform(struct!.serviceProviderConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningServiceProviderConfig",
    },
    user_repository: {
      value: spIdpConnectionInboundProvisioningUserRepositoryToHclTerraform(struct!.userRepository),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUserRepository",
    },
    users: {
      value: spIdpConnectionInboundProvisioningUsersToHclTerraform(struct!.users),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionInboundProvisioningUsers",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionInboundProvisioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionInboundProvisioning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionOnDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionOnDelete = this._actionOnDelete;
    }
    if (this._customSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSchema = this._customSchema?.internalValue;
    }
    if (this._customScim2Schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customScim2Schema = this._customScim2Schema?.internalValue;
    }
    if (this._groupSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupSupport = this._groupSupport;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    if (this._scimVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.scimVersion = this._scimVersion;
    }
    if (this._serviceProviderConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderConfig = this._serviceProviderConfig?.internalValue;
    }
    if (this._userRepository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userRepository = this._userRepository?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionInboundProvisioning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionOnDelete = undefined;
      this._customSchema.internalValue = undefined;
      this._customScim2Schema.internalValue = undefined;
      this._groupSupport = undefined;
      this._groups.internalValue = undefined;
      this._scimVersion = undefined;
      this._serviceProviderConfig.internalValue = undefined;
      this._userRepository.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionOnDelete = value.actionOnDelete;
      this._customSchema.internalValue = value.customSchema;
      this._customScim2Schema.internalValue = value.customScim2Schema;
      this._groupSupport = value.groupSupport;
      this._groups.internalValue = value.groups;
      this._scimVersion = value.scimVersion;
      this._serviceProviderConfig.internalValue = value.serviceProviderConfig;
      this._userRepository.internalValue = value.userRepository;
      this._users.internalValue = value.users;
    }
  }

  // action_on_delete - computed: false, optional: true, required: false
  private _actionOnDelete?: string; 
  public get actionOnDelete() {
    return this.getStringAttribute('action_on_delete');
  }
  public set actionOnDelete(value: string) {
    this._actionOnDelete = value;
  }
  public resetActionOnDelete() {
    this._actionOnDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionOnDeleteInput() {
    return this._actionOnDelete;
  }

  // custom_schema - computed: false, optional: true, required: false
  private _customSchema = new SpIdpConnectionInboundProvisioningCustomSchemaOutputReference(this, "custom_schema");
  public get customSchema() {
    return this._customSchema;
  }
  public putCustomSchema(value: SpIdpConnectionInboundProvisioningCustomSchema) {
    this._customSchema.internalValue = value;
  }
  public resetCustomSchema() {
    this._customSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSchemaInput() {
    return this._customSchema.internalValue;
  }

  // custom_scim2_schema - computed: false, optional: true, required: false
  private _customScim2Schema = new SpIdpConnectionInboundProvisioningCustomScim2SchemaOutputReference(this, "custom_scim2_schema");
  public get customScim2Schema() {
    return this._customScim2Schema;
  }
  public putCustomScim2Schema(value: SpIdpConnectionInboundProvisioningCustomScim2Schema) {
    this._customScim2Schema.internalValue = value;
  }
  public resetCustomScim2Schema() {
    this._customScim2Schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customScim2SchemaInput() {
    return this._customScim2Schema.internalValue;
  }

  // group_support - computed: false, optional: false, required: true
  private _groupSupport?: boolean | cdktf.IResolvable; 
  public get groupSupport() {
    return this.getBooleanAttribute('group_support');
  }
  public set groupSupport(value: boolean | cdktf.IResolvable) {
    this._groupSupport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupSupportInput() {
    return this._groupSupport;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new SpIdpConnectionInboundProvisioningGroupsOutputReference(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: SpIdpConnectionInboundProvisioningGroups) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // scim_version - computed: true, optional: true, required: false
  private _scimVersion?: string; 
  public get scimVersion() {
    return this.getStringAttribute('scim_version');
  }
  public set scimVersion(value: string) {
    this._scimVersion = value;
  }
  public resetScimVersion() {
    this._scimVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimVersionInput() {
    return this._scimVersion;
  }

  // service_provider_config - computed: false, optional: true, required: false
  private _serviceProviderConfig = new SpIdpConnectionInboundProvisioningServiceProviderConfigOutputReference(this, "service_provider_config");
  public get serviceProviderConfig() {
    return this._serviceProviderConfig;
  }
  public putServiceProviderConfig(value: SpIdpConnectionInboundProvisioningServiceProviderConfig) {
    this._serviceProviderConfig.internalValue = value;
  }
  public resetServiceProviderConfig() {
    this._serviceProviderConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderConfigInput() {
    return this._serviceProviderConfig.internalValue;
  }

  // user_repository - computed: false, optional: false, required: true
  private _userRepository = new SpIdpConnectionInboundProvisioningUserRepositoryOutputReference(this, "user_repository");
  public get userRepository() {
    return this._userRepository;
  }
  public putUserRepository(value: SpIdpConnectionInboundProvisioningUserRepository) {
    this._userRepository.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userRepositoryInput() {
    return this._userRepository.internalValue;
  }

  // users - computed: false, optional: false, required: true
  private _users = new SpIdpConnectionInboundProvisioningUsersOutputReference(this, "users");
  public get users() {
    return this._users;
  }
  public putUsers(value: SpIdpConnectionInboundProvisioningUsers) {
    this._users.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
export interface SpIdpConnectionMetadataReloadSettingsMetadataUrlRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionMetadataReloadSettingsMetadataUrlRefToTerraform(struct?: SpIdpConnectionMetadataReloadSettingsMetadataUrlRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionMetadataReloadSettingsMetadataUrlRefToHclTerraform(struct?: SpIdpConnectionMetadataReloadSettingsMetadataUrlRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionMetadataReloadSettingsMetadataUrlRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionMetadataReloadSettingsMetadataUrlRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionMetadataReloadSettingsMetadataUrlRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionMetadataReloadSettings {
  /**
  * Specifies whether the metadata of the connection will be automatically reloaded. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#enable_auto_metadata_update SpIdpConnection#enable_auto_metadata_update}
  */
  readonly enableAutoMetadataUpdate?: boolean | cdktf.IResolvable;
  /**
  * A reference to a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#metadata_url_ref SpIdpConnection#metadata_url_ref}
  */
  readonly metadataUrlRef: SpIdpConnectionMetadataReloadSettingsMetadataUrlRef;
}

export function spIdpConnectionMetadataReloadSettingsToTerraform(struct?: SpIdpConnectionMetadataReloadSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_metadata_update: cdktf.booleanToTerraform(struct!.enableAutoMetadataUpdate),
    metadata_url_ref: spIdpConnectionMetadataReloadSettingsMetadataUrlRefToTerraform(struct!.metadataUrlRef),
  }
}


export function spIdpConnectionMetadataReloadSettingsToHclTerraform(struct?: SpIdpConnectionMetadataReloadSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_metadata_update: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoMetadataUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metadata_url_ref: {
      value: spIdpConnectionMetadataReloadSettingsMetadataUrlRefToHclTerraform(struct!.metadataUrlRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionMetadataReloadSettingsMetadataUrlRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionMetadataReloadSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionMetadataReloadSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoMetadataUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoMetadataUpdate = this._enableAutoMetadataUpdate;
    }
    if (this._metadataUrlRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataUrlRef = this._metadataUrlRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionMetadataReloadSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableAutoMetadataUpdate = undefined;
      this._metadataUrlRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableAutoMetadataUpdate = value.enableAutoMetadataUpdate;
      this._metadataUrlRef.internalValue = value.metadataUrlRef;
    }
  }

  // enable_auto_metadata_update - computed: true, optional: true, required: false
  private _enableAutoMetadataUpdate?: boolean | cdktf.IResolvable; 
  public get enableAutoMetadataUpdate() {
    return this.getBooleanAttribute('enable_auto_metadata_update');
  }
  public set enableAutoMetadataUpdate(value: boolean | cdktf.IResolvable) {
    this._enableAutoMetadataUpdate = value;
  }
  public resetEnableAutoMetadataUpdate() {
    this._enableAutoMetadataUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoMetadataUpdateInput() {
    return this._enableAutoMetadataUpdate;
  }

  // metadata_url_ref - computed: false, optional: false, required: true
  private _metadataUrlRef = new SpIdpConnectionMetadataReloadSettingsMetadataUrlRefOutputReference(this, "metadata_url_ref");
  public get metadataUrlRef() {
    return this._metadataUrlRef;
  }
  public putMetadataUrlRef(value: SpIdpConnectionMetadataReloadSettingsMetadataUrlRef) {
    this._metadataUrlRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlRefInput() {
    return this._metadataUrlRef.internalValue;
  }
}
export interface SpIdpConnectionOidcClientCredentials {
  /**
  * The OpenID Connect client identitification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#client_id SpIdpConnection#client_id}
  */
  readonly clientId: string;
  /**
  * The OpenID Connect client secret. Only one of `client_secret` or `encrypted_secret` can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#client_secret SpIdpConnection#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Encrypted OpenID Connect client secret. Only one of `client_secret` or `encrypted_secret` can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#encrypted_secret SpIdpConnection#encrypted_secret}
  */
  readonly encryptedSecret?: string;
}

export function spIdpConnectionOidcClientCredentialsToTerraform(struct?: SpIdpConnectionOidcClientCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    encrypted_secret: cdktf.stringToTerraform(struct!.encryptedSecret),
  }
}


export function spIdpConnectionOidcClientCredentialsToHclTerraform(struct?: SpIdpConnectionOidcClientCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_secret: {
      value: cdktf.stringToHclTerraform(struct!.encryptedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionOidcClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionOidcClientCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._encryptedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSecret = this._encryptedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionOidcClientCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._encryptedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._encryptedSecret = value.encryptedSecret;
    }
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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // encrypted_secret - computed: true, optional: true, required: false
  private _encryptedSecret?: string; 
  public get encryptedSecret() {
    return this.getStringAttribute('encrypted_secret');
  }
  public set encryptedSecret(value: string) {
    this._encryptedSecret = value;
  }
  public resetEncryptedSecret() {
    this._encryptedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSecretInput() {
    return this._encryptedSecret;
  }
}
export interface SpIdpConnectionWsTrustAttributeContractCoreAttributes {
  /**
  * Specifies whether this attribute is masked in PingFederate logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#masked SpIdpConnection#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
}

export function spIdpConnectionWsTrustAttributeContractCoreAttributesToTerraform(struct?: SpIdpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionWsTrustAttributeContractCoreAttributesToHclTerraform(struct?: SpIdpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustAttributeContractCoreAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustAttributeContractCoreAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masked = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masked = value.masked;
      this._name = value.name;
    }
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
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
}

export class SpIdpConnectionWsTrustAttributeContractCoreAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionWsTrustAttributeContractCoreAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionWsTrustAttributeContractCoreAttributesOutputReference {
    return new SpIdpConnectionWsTrustAttributeContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionWsTrustAttributeContractExtendedAttributes {
  /**
  * Specifies whether this attribute is masked in PingFederate logs. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#masked SpIdpConnection#masked}
  */
  readonly masked?: boolean | cdktf.IResolvable;
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
}

export function spIdpConnectionWsTrustAttributeContractExtendedAttributesToTerraform(struct?: SpIdpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    masked: cdktf.booleanToTerraform(struct!.masked),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function spIdpConnectionWsTrustAttributeContractExtendedAttributesToHclTerraform(struct?: SpIdpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    masked: {
      value: cdktf.booleanToHclTerraform(struct!.masked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustAttributeContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._masked !== undefined) {
      hasAnyValues = true;
      internalValueResult.masked = this._masked;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustAttributeContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._masked = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._masked = value.masked;
      this._name = value.name;
    }
  }

  // masked - computed: true, optional: true, required: false
  private _masked?: boolean | cdktf.IResolvable; 
  public get masked() {
    return this.getBooleanAttribute('masked');
  }
  public set masked(value: boolean | cdktf.IResolvable) {
    this._masked = value;
  }
  public resetMasked() {
    this._masked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskedInput() {
    return this._masked;
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
}

export class SpIdpConnectionWsTrustAttributeContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionWsTrustAttributeContractExtendedAttributes[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionWsTrustAttributeContractExtendedAttributesOutputReference {
    return new SpIdpConnectionWsTrustAttributeContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionWsTrustAttributeContract {
  /**
  * A list of assertion attributes that are automatically populated by PingFederate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#core_attributes SpIdpConnection#core_attributes}
  */
  readonly coreAttributes?: SpIdpConnectionWsTrustAttributeContractCoreAttributes[] | cdktf.IResolvable;
  /**
  * A list of additional attributes that are receive in the incoming assertion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#extended_attributes SpIdpConnection#extended_attributes}
  */
  readonly extendedAttributes?: SpIdpConnectionWsTrustAttributeContractExtendedAttributes[] | cdktf.IResolvable;
}

export function spIdpConnectionWsTrustAttributeContractToTerraform(struct?: SpIdpConnectionWsTrustAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_attributes: cdktf.listMapper(spIdpConnectionWsTrustAttributeContractCoreAttributesToTerraform, false)(struct!.coreAttributes),
    extended_attributes: cdktf.listMapper(spIdpConnectionWsTrustAttributeContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function spIdpConnectionWsTrustAttributeContractToHclTerraform(struct?: SpIdpConnectionWsTrustAttributeContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionWsTrustAttributeContractCoreAttributesToHclTerraform, false)(struct!.coreAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionWsTrustAttributeContractCoreAttributesList",
    },
    extended_attributes: {
      value: cdktf.listMapperHcl(spIdpConnectionWsTrustAttributeContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionWsTrustAttributeContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustAttributeContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustAttributeContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreAttributes = this._coreAttributes?.internalValue;
    }
    if (this._extendedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAttributes = this._extendedAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustAttributeContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._coreAttributes.internalValue = undefined;
      this._extendedAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._coreAttributes.internalValue = value.coreAttributes;
      this._extendedAttributes.internalValue = value.extendedAttributes;
    }
  }

  // core_attributes - computed: false, optional: true, required: false
  private _coreAttributes = new SpIdpConnectionWsTrustAttributeContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }
  public putCoreAttributes(value: SpIdpConnectionWsTrustAttributeContractCoreAttributes[] | cdktf.IResolvable) {
    this._coreAttributes.internalValue = value;
  }
  public resetCoreAttributes() {
    this._coreAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreAttributesInput() {
    return this._coreAttributes.internalValue;
  }

  // extended_attributes - computed: false, optional: true, required: false
  private _extendedAttributes = new SpIdpConnectionWsTrustAttributeContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: SpIdpConnectionWsTrustAttributeContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `ACTOR_TOKEN`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `ATTRIBUTE_QUERY`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `EXPRESSION`, `FRAGMENT`, `IDENTITY_STORE_GROUP`, `IDENTITY_STORE_USER`, `IDP_CONNECTION`, `INPUTS`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `LOCAL_IDENTITY_PROFILE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `OAUTH_PERSISTENT_GRANT`, `PASSWORD_CREDENTIAL_VALIDATOR`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `REQUEST`, `SCIM_GROUP`, `SCIM_USER`, `SUBJECT_TOKEN`, `TEXT`, `TOKEN`, `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `TRACKED_HTTP_PARAMS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment {
  /**
  * A key that is meant to reference a source from which an attribute can be retrieved. This model is usually paired with a value which, depending on the SourceType, can be a hardcoded value or a reference to an attribute name specific to that SourceType. Not all values are applicable - a validation error will be returned for incorrect values.<br>For each SourceType, the value should be:<br>ACCOUNT_LINK - If account linking was enabled for the browser SSO, the value must be 'Local User ID', unless it has been overridden in PingFederate's server configuration.<br>ADAPTER - The value is one of the attributes of the IdP Adapter.<br>ASSERTION - The value is one of the attributes coming from the SAML assertion.<br>AUTHENTICATION_POLICY_CONTRACT - The value is one of the attributes coming from an authentication policy contract.<br>LOCAL_IDENTITY_PROFILE - The value is one of the fields coming from a local identity profile.<br>CONTEXT - The value must be one of the following ['TargetResource' or 'OAuthScopes' or 'ClientId' or 'AuthenticationCtx' or 'ClientIp' or 'Locale' or 'StsBasicAuthUsername' or 'StsSSLClientCertSubjectDN' or 'StsSSLClientCertChain' or 'VirtualServerId' or 'AuthenticatingAuthority' or 'DefaultPersistentGrantLifetime'.]<br>CLAIMS - Attributes provided by the OIDC Provider.<br>CUSTOM_DATA_STORE - The value is one of the attributes returned by this custom data store.<br>EXPRESSION - The value is an OGNL expression.<br>EXTENDED_CLIENT_METADATA - The value is from an OAuth extended client metadata parameter. This source type is deprecated and has been replaced by EXTENDED_PROPERTIES.<br>EXTENDED_PROPERTIES - The value is from an OAuth Client's extended property.<br>IDP_CONNECTION - The value is one of the attributes passed in by the IdP connection.<br>JDBC_DATA_STORE - The value is one of the column names returned from the JDBC attribute source.<br>LDAP_DATA_STORE - The value is one of the LDAP attributes supported by your LDAP data store.<br>MAPPED_ATTRIBUTES - The value is the name of one of the mapped attributes that is defined in the associated attribute mapping.<br>OAUTH_PERSISTENT_GRANT - The value is one of the attributes from the persistent grant.<br>PASSWORD_CREDENTIAL_VALIDATOR - The value is one of the attributes of the PCV.<br>NO_MAPPING - A placeholder value to indicate that an attribute currently has no mapped source.TEXT - A hardcoded value that is used to populate the corresponding attribute.<br>TOKEN - The value is one of the token attributes.<br>REQUEST - The value is from the request context such as the CIBA identity hint contract or the request contract for Ws-Trust.<br>TRACKED_HTTP_PARAMS - The value is from the original request parameters.<br>SUBJECT_TOKEN - The value is one of the OAuth 2.0 Token exchange subject_token attributes.<br>ACTOR_TOKEN - The value is one of the OAuth 2.0 Token exchange actor_token attributes.<br>TOKEN_EXCHANGE_PROCESSOR_POLICY - The value is one of the attributes coming from a Token Exchange Processor policy.<br>FRAGMENT - The value is one of the attributes coming from an authentication policy fragment.<br>INPUTS - The value is one of the attributes coming from an attribute defined in the input authentication policy contract for an authentication policy fragment.<br>ATTRIBUTE_QUERY - The value is one of the user attributes queried from an Attribute Authority.<br>IDENTITY_STORE_USER - The value is one of the attributes from a user identity store provisioner for SCIM processing.<br>IDENTITY_STORE_GROUP - The value is one of the attributes from a group identity store provisioner for SCIM processing.<br>SCIM_USER - The value is one of the attributes passed in from the SCIM user request.<br>SCIM_GROUP - The value is one of the attributes passed in from the SCIM group request.<br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields {
  /**
  * The name of this field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#name SpIdpConnection#name}
  */
  readonly name: string;
  /**
  * The value of this field. Whether or not the value is required will be determined by plugin validation checks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: true
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

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#data_store_ref SpIdpConnection#data_store_ref}
  */
  readonly dataStoreRef: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * The list of fields that can be used to filter a request to the custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#filter_fields SpIdpConnection#filter_fields}
  */
  readonly filterFields?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    data_store_ref: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter_fields: cdktf.listMapper(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToTerraform, false)(struct!.filterFields),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap",
    },
    data_store_ref: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_fields: {
      value: cdktf.listMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsToHclTerraform, false)(struct!.filterFields),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filterFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterFields = this._filterFields?.internalValue;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filterFields.internalValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filterFields.internalValue = value.filterFields;
      this._id = value.id;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // filter_fields - computed: true, optional: true, required: false
  private _filterFields = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFieldsList(this, "filter_fields", true);
  public get filterFields() {
    return this._filterFields;
  }
  public putFilterFields(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceFilterFields[] | cdktf.IResolvable) {
    this._filterFields.internalValue = value;
  }
  public resetFilterFields() {
    this._filterFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFieldsInput() {
    return this._filterFields.internalValue;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of column names used to construct the SQL query to retrieve data from the specified table in the datastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#column_names SpIdpConnection#column_names}
  */
  readonly columnNames?: string[];
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#data_store_ref SpIdpConnection#data_store_ref}
  */
  readonly dataStoreRef: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * The JDBC WHERE clause used to query your data store to locate a user record.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#filter SpIdpConnection#filter}
  */
  readonly filter: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lists the table structure that stores information within a database. Some databases, such as Oracle, require a schema for a JDBC query. Other databases, such as MySQL, do not require a schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#schema SpIdpConnection#schema}
  */
  readonly schema?: string;
  /**
  * The name of the database table. The name is used to construct the SQL query to retrieve data from the data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#table SpIdpConnection#table}
  */
  readonly table: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    column_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columnNames),
    data_store_ref: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    filter: cdktf.stringToTerraform(struct!.filter),
    id: cdktf.stringToTerraform(struct!.id),
    schema: cdktf.stringToTerraform(struct!.schema),
    table: cdktf.stringToTerraform(struct!.table),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap",
    },
    column_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columnNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    data_store_ref: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: cdktf.stringToHclTerraform(struct!.table),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._columnNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnNames = this._columnNames;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._columnNames = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._filter = undefined;
      this._id = undefined;
      this._schema = undefined;
      this._table = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._columnNames = value.columnNames;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._filter = value.filter;
      this._id = value.id;
      this._schema = value.schema;
      this._table = value.table;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // column_names - computed: true, optional: true, required: false
  private _columnNames?: string[]; 
  public get columnNames() {
    return cdktf.Fn.tolist(this.getListAttribute('column_names'));
  }
  public set columnNames(value: string[]) {
    this._columnNames = value;
  }
  public resetColumnNames() {
    this._columnNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnNamesInput() {
    return this._columnNames;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // filter - computed: true, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // table - computed: true, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment {
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource;
  /**
  * The value for this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value?: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings {
  /**
  * Get the encoding type for this attribute. If not specified, the default is BASE64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#binary_encoding SpIdpConnection#binary_encoding}
  */
  readonly binaryEncoding?: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binary_encoding: cdktf.stringToTerraform(struct!.binaryEncoding),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binary_encoding: {
      value: cdktf.stringToHclTerraform(struct!.binaryEncoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._binaryEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryEncoding = this._binaryEncoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._binaryEncoding = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._binaryEncoding = value.binaryEncoding;
    }
  }

  // binary_encoding - computed: true, optional: true, required: false
  private _binaryEncoding?: string; 
  public get binaryEncoding() {
    return this.getStringAttribute('binary_encoding');
  }
  public set binaryEncoding(value: string) {
    this._binaryEncoding = value;
  }
  public resetBinaryEncoding() {
    this._binaryEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryEncodingInput() {
    return this._binaryEncoding;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource {
  /**
  * Defines how an attribute in an attribute contract should be populated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment?: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * The base DN to search from. If not specified, the search will start at the LDAP's root.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#base_dn SpIdpConnection#base_dn}
  */
  readonly baseDn?: string;
  /**
  * The advanced settings for binary LDAP attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#binary_attribute_settings SpIdpConnection#binary_attribute_settings}
  */
  readonly binaryAttributeSettings?: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable;
  /**
  * Reference to the associated data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#data_store_ref SpIdpConnection#data_store_ref}
  */
  readonly dataStoreRef: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef;
  /**
  * The description of this attribute source. The description needs to be unique amongst the attribute sources for the mapping.<br>Note: Required for APC-to-SP Adapter Mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#description SpIdpConnection#description}
  */
  readonly description?: string;
  /**
  * The ID that defines this attribute source. Only alphanumeric characters allowed. Note: Required for OpenID Connect policy attribute sources, OAuth IdP adapter mappings, OAuth access token mappings and APC-to-SP Adapter Mappings. IdP Connections will ignore this property since it only allows one attribute source to be defined per mapping. IdP-to-SP Adapter Mappings can contain multiple attribute sources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set this to true to return transitive group memberships for the 'memberOf' attribute.  This only applies for Active Directory data sources.  All other data sources will be set to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#member_of_nested_group SpIdpConnection#member_of_nested_group}
  */
  readonly memberOfNestedGroup?: boolean | cdktf.IResolvable;
  /**
  * A list of LDAP attributes returned from search and available for mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#search_attributes SpIdpConnection#search_attributes}
  */
  readonly searchAttributes?: string[];
  /**
  * The LDAP filter that will be used to lookup the objects from the directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#search_filter SpIdpConnection#search_filter}
  */
  readonly searchFilter: string;
  /**
  * Determines the node depth of the query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#search_scope SpIdpConnection#search_scope}
  */
  readonly searchScope: string;
  /**
  * The data store type of this attribute source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    base_dn: cdktf.stringToTerraform(struct!.baseDn),
    binary_attribute_settings: cdktf.hashMapper(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToTerraform)(struct!.binaryAttributeSettings),
    data_store_ref: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToTerraform(struct!.dataStoreRef),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    member_of_nested_group: cdktf.booleanToTerraform(struct!.memberOfNestedGroup),
    search_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.searchAttributes),
    search_filter: cdktf.stringToTerraform(struct!.searchFilter),
    search_scope: cdktf.stringToTerraform(struct!.searchScope),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap",
    },
    base_dn: {
      value: cdktf.stringToHclTerraform(struct!.baseDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    binary_attribute_settings: {
      value: cdktf.hashMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsToHclTerraform)(struct!.binaryAttributeSettings),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap",
    },
    data_store_ref: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefToHclTerraform(struct!.dataStoreRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_of_nested_group: {
      value: cdktf.booleanToHclTerraform(struct!.memberOfNestedGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    search_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.searchAttributes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    search_filter: {
      value: cdktf.stringToHclTerraform(struct!.searchFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    search_scope: {
      value: cdktf.stringToHclTerraform(struct!.searchScope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._baseDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseDn = this._baseDn;
    }
    if (this._binaryAttributeSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.binaryAttributeSettings = this._binaryAttributeSettings?.internalValue;
    }
    if (this._dataStoreRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStoreRef = this._dataStoreRef?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._memberOfNestedGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberOfNestedGroup = this._memberOfNestedGroup;
    }
    if (this._searchAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchAttributes = this._searchAttributes;
    }
    if (this._searchFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFilter = this._searchFilter;
    }
    if (this._searchScope !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchScope = this._searchScope;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._baseDn = undefined;
      this._binaryAttributeSettings.internalValue = undefined;
      this._dataStoreRef.internalValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._memberOfNestedGroup = undefined;
      this._searchAttributes = undefined;
      this._searchFilter = undefined;
      this._searchScope = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._baseDn = value.baseDn;
      this._binaryAttributeSettings.internalValue = value.binaryAttributeSettings;
      this._dataStoreRef.internalValue = value.dataStoreRef;
      this._description = value.description;
      this._id = value.id;
      this._memberOfNestedGroup = value.memberOfNestedGroup;
      this._searchAttributes = value.searchAttributes;
      this._searchFilter = value.searchFilter;
      this._searchScope = value.searchScope;
      this._type = value.type;
    }
  }

  // attribute_contract_fulfillment - computed: true, optional: true, required: false
  private _attributeContractFulfillment = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  public resetAttributeContractFulfillment() {
    this._attributeContractFulfillment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // base_dn - computed: true, optional: true, required: false
  private _baseDn?: string; 
  public get baseDn() {
    return this.getStringAttribute('base_dn');
  }
  public set baseDn(value: string) {
    this._baseDn = value;
  }
  public resetBaseDn() {
    this._baseDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDnInput() {
    return this._baseDn;
  }

  // binary_attribute_settings - computed: true, optional: true, required: false
  private _binaryAttributeSettings = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettingsMap(this, "binary_attribute_settings");
  public get binaryAttributeSettings() {
    return this._binaryAttributeSettings;
  }
  public putBinaryAttributeSettings(value: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceBinaryAttributeSettings } | cdktf.IResolvable) {
    this._binaryAttributeSettings.internalValue = value;
  }
  public resetBinaryAttributeSettings() {
    this._binaryAttributeSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAttributeSettingsInput() {
    return this._binaryAttributeSettings.internalValue;
  }

  // data_store_ref - computed: true, optional: false, required: true
  private _dataStoreRef = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRefOutputReference(this, "data_store_ref");
  public get dataStoreRef() {
    return this._dataStoreRef;
  }
  public putDataStoreRef(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceDataStoreRef) {
    this._dataStoreRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreRefInput() {
    return this._dataStoreRef.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // member_of_nested_group - computed: true, optional: true, required: false
  private _memberOfNestedGroup?: boolean | cdktf.IResolvable; 
  public get memberOfNestedGroup() {
    return this.getBooleanAttribute('member_of_nested_group');
  }
  public set memberOfNestedGroup(value: boolean | cdktf.IResolvable) {
    this._memberOfNestedGroup = value;
  }
  public resetMemberOfNestedGroup() {
    this._memberOfNestedGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberOfNestedGroupInput() {
    return this._memberOfNestedGroup;
  }

  // search_attributes - computed: true, optional: true, required: false
  private _searchAttributes?: string[]; 
  public get searchAttributes() {
    return cdktf.Fn.tolist(this.getListAttribute('search_attributes'));
  }
  public set searchAttributes(value: string[]) {
    this._searchAttributes = value;
  }
  public resetSearchAttributes() {
    this._searchAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchAttributesInput() {
    return this._searchAttributes;
  }

  // search_filter - computed: true, optional: false, required: true
  private _searchFilter?: string; 
  public get searchFilter() {
    return this.getStringAttribute('search_filter');
  }
  public set searchFilter(value: string) {
    this._searchFilter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFilterInput() {
    return this._searchFilter;
  }

  // search_scope - computed: true, optional: false, required: true
  private _searchScope?: string; 
  public get searchScope() {
    return this.getStringAttribute('search_scope');
  }
  public set searchScope(value: string) {
    this._searchScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get searchScopeInput() {
    return this._searchScope;
  }

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources {
  /**
  * The configured settings used to look up attributes from a custom data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#custom_attribute_source SpIdpConnection#custom_attribute_source}
  */
  readonly customAttributeSource?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource;
  /**
  * The configured settings used to look up attributes from a JDBC data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#jdbc_attribute_source SpIdpConnection#jdbc_attribute_source}
  */
  readonly jdbcAttributeSource?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource;
  /**
  * The configured settings used to look up attributes from a LDAP data store.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#ldap_attribute_source SpIdpConnection#ldap_attribute_source}
  */
  readonly ldapAttributeSource?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_attribute_source: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceToTerraform(struct!.customAttributeSource),
    jdbc_attribute_source: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceToTerraform(struct!.jdbcAttributeSource),
    ldap_attribute_source: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceToTerraform(struct!.ldapAttributeSource),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_attribute_source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceToHclTerraform(struct!.customAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource",
    },
    jdbc_attribute_source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceToHclTerraform(struct!.jdbcAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource",
    },
    ldap_attribute_source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceToHclTerraform(struct!.ldapAttributeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributeSource = this._customAttributeSource?.internalValue;
    }
    if (this._jdbcAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jdbcAttributeSource = this._jdbcAttributeSource?.internalValue;
    }
    if (this._ldapAttributeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapAttributeSource = this._ldapAttributeSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = undefined;
      this._jdbcAttributeSource.internalValue = undefined;
      this._ldapAttributeSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customAttributeSource.internalValue = value.customAttributeSource;
      this._jdbcAttributeSource.internalValue = value.jdbcAttributeSource;
      this._ldapAttributeSource.internalValue = value.ldapAttributeSource;
    }
  }

  // custom_attribute_source - computed: true, optional: true, required: false
  private _customAttributeSource = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSourceOutputReference(this, "custom_attribute_source");
  public get customAttributeSource() {
    return this._customAttributeSource;
  }
  public putCustomAttributeSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesCustomAttributeSource) {
    this._customAttributeSource.internalValue = value;
  }
  public resetCustomAttributeSource() {
    this._customAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributeSourceInput() {
    return this._customAttributeSource.internalValue;
  }

  // jdbc_attribute_source - computed: true, optional: true, required: false
  private _jdbcAttributeSource = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSourceOutputReference(this, "jdbc_attribute_source");
  public get jdbcAttributeSource() {
    return this._jdbcAttributeSource;
  }
  public putJdbcAttributeSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesJdbcAttributeSource) {
    this._jdbcAttributeSource.internalValue = value;
  }
  public resetJdbcAttributeSource() {
    this._jdbcAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcAttributeSourceInput() {
    return this._jdbcAttributeSource.internalValue;
  }

  // ldap_attribute_source - computed: true, optional: true, required: false
  private _ldapAttributeSource = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSourceOutputReference(this, "ldap_attribute_source");
  public get ldapAttributeSource() {
    return this._ldapAttributeSource;
  }
  public putLdapAttributeSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesLdapAttributeSource) {
    this._ldapAttributeSource.internalValue = value;
  }
  public resetLdapAttributeSource() {
    this._ldapAttributeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapAttributeSourceInput() {
    return this._ldapAttributeSource.internalValue;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource {
  /**
  * The attribute source ID that refers to the attribute source that this key references. In some resources, the ID is optional and will be ignored. In these cases the ID should be omitted. If the source type is not an attribute source then the ID can be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The source type of this key. Options are `TOKEN_EXCHANGE_PROCESSOR_POLICY`, `ACCOUNT_LINK`, `ADAPTER`, `ASSERTION`, `CONTEXT`, `CUSTOM_DATA_STORE`, `EXPRESSION`, `JDBC_DATA_STORE`, `LDAP_DATA_STORE`, `PING_ONE_LDAP_GATEWAY_DATA_STORE`, `MAPPED_ATTRIBUTES`, `NO_MAPPING`, `TEXT`, `TOKEN`, `REQUEST`, `OAUTH_PERSISTENT_GRANT`, `SUBJECT_TOKEN`, `ACTOR_TOKEN`, `PASSWORD_CREDENTIAL_VALIDATOR`, `IDP_CONNECTION`, `AUTHENTICATION_POLICY_CONTRACT`, `CLAIMS`, `LOCAL_IDENTITY_PROFILE`, `EXTENDED_CLIENT_METADATA`, `EXTENDED_PROPERTIES`, `TRACKED_HTTP_PARAMS`, `FRAGMENT`, `INPUTS`, `ATTRIBUTE_QUERY`, `IDENTITY_STORE_USER`, `IDENTITY_STORE_GROUP`, `SCIM_USER`, `SCIM_GROUP`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#type SpIdpConnection#type}
  */
  readonly type: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._type = value.type;
    }
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

  // type - computed: true, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria {
  /**
  * The name of the attribute to use in this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_name SpIdpConnection#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The condition that will be applied to the source attribute's value and the expected value. Options are `EQUALS`, `EQUALS_CASE_INSENSITIVE`, `EQUALS_DN`, `NOT_EQUAL`, `NOT_EQUAL_CASE_INSENSITIVE`, `NOT_EQUAL_DN`, `MULTIVALUE_CONTAINS`, `MULTIVALUE_CONTAINS_CASE_INSENSITIVE`, `MULTIVALUE_CONTAINS_DN`, `MULTIVALUE_DOES_NOT_CONTAIN`, `MULTIVALUE_DOES_NOT_CONTAIN_CASE_INSENSITIVE`, `MULTIVALUE_DOES_NOT_CONTAIN_DN`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#condition SpIdpConnection#condition}
  */
  readonly condition: string;
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#error_result SpIdpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The attribute value source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#source SpIdpConnection#source}
  */
  readonly source: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource;
  /**
  * The expected value of this issuance criterion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#value SpIdpConnection#value}
  */
  readonly value: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_name: cdktf.stringToTerraform(struct!.attributeName),
    condition: cdktf.stringToTerraform(struct!.condition),
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    source: spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSourceToTerraform(struct!.source),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.attributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeName = this._attributeName;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeName = undefined;
      this._condition = undefined;
      this._errorResult = undefined;
      this._source.internalValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeName = value.attributeName;
      this._condition = value.condition;
      this._errorResult = value.errorResult;
      this._source.internalValue = value.source;
      this._value = value.value;
    }
  }

  // attribute_name - computed: true, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // condition - computed: true, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // source - computed: true, optional: false, required: true
  private _source = new SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // value - computed: true, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria {
  /**
  * The error result to return if this issuance criterion fails. This error result will show up in the PingFederate server logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#error_result SpIdpConnection#error_result}
  */
  readonly errorResult?: string;
  /**
  * The OGNL expression to evaluate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#expression SpIdpConnection#expression}
  */
  readonly expression: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_result: cdktf.stringToTerraform(struct!.errorResult),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_result: {
      value: cdktf.stringToHclTerraform(struct!.errorResult),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorResult !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResult = this._errorResult;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorResult = undefined;
      this._expression = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorResult = value.errorResult;
      this._expression = value.expression;
    }
  }

  // error_result - computed: true, optional: true, required: false
  private _errorResult?: string; 
  public get errorResult() {
    return this.getStringAttribute('error_result');
  }
  public set errorResult(value: string) {
    this._errorResult = value;
  }
  public resetErrorResult() {
    this._errorResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResultInput() {
    return this._errorResult;
  }

  // expression - computed: true, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria {
  /**
  * A list of conditional issuance criteria where existing attributes must satisfy their conditions against expected values in order for the transaction to continue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#conditional_criteria SpIdpConnection#conditional_criteria}
  */
  readonly conditionalCriteria?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable;
  /**
  * A list of expression issuance criteria where the OGNL expressions must evaluate to true in order for the transaction to continue. Expressions must be enabled in PingFederate to use expression criteria.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#expression_criteria SpIdpConnection#expression_criteria}
  */
  readonly expressionCriteria?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conditional_criteria: cdktf.listMapper(spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaToTerraform, false)(struct!.conditionalCriteria),
    expression_criteria: cdktf.listMapper(spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaToTerraform, false)(struct!.expressionCriteria),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conditional_criteria: {
      value: cdktf.listMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaToHclTerraform, false)(struct!.conditionalCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaList",
    },
    expression_criteria: {
      value: cdktf.listMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaToHclTerraform, false)(struct!.expressionCriteria),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionalCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionalCriteria = this._conditionalCriteria?.internalValue;
    }
    if (this._expressionCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionCriteria = this._expressionCriteria?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = undefined;
      this._expressionCriteria.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionalCriteria.internalValue = value.conditionalCriteria;
      this._expressionCriteria.internalValue = value.expressionCriteria;
    }
  }

  // conditional_criteria - computed: true, optional: true, required: false
  private _conditionalCriteria = new SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteriaList(this, "conditional_criteria", true);
  public get conditionalCriteria() {
    return this._conditionalCriteria;
  }
  public putConditionalCriteria(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaConditionalCriteria[] | cdktf.IResolvable) {
    this._conditionalCriteria.internalValue = value;
  }
  public resetConditionalCriteria() {
    this._conditionalCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionalCriteriaInput() {
    return this._conditionalCriteria.internalValue;
  }

  // expression_criteria - computed: true, optional: true, required: false
  private _expressionCriteria = new SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteriaList(this, "expression_criteria", true);
  public get expressionCriteria() {
    return this._expressionCriteria;
  }
  public putExpressionCriteria(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaExpressionCriteria[] | cdktf.IResolvable) {
    this._expressionCriteria.internalValue = value;
  }
  public resetExpressionCriteria() {
    this._expressionCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionCriteriaInput() {
    return this._expressionCriteria.internalValue;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#id SpIdpConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRefToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRefToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface SpIdpConnectionWsTrustTokenGeneratorMappings {
  /**
  * A list of mappings from attribute names to their fulfillment values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract_fulfillment SpIdpConnection#attribute_contract_fulfillment}
  */
  readonly attributeContractFulfillment: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment } | cdktf.IResolvable;
  /**
  * A list of configured data stores to look up attributes from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_sources SpIdpConnection#attribute_sources}
  */
  readonly attributeSources?: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources[] | cdktf.IResolvable;
  /**
  * Indicates whether the token generator mapping is the default mapping. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#default_mapping SpIdpConnection#default_mapping}
  */
  readonly defaultMapping?: boolean | cdktf.IResolvable;
  /**
  * The issuance criteria that this transaction must meet before the corresponding attribute contract is fulfilled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#issuance_criteria SpIdpConnection#issuance_criteria}
  */
  readonly issuanceCriteria?: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria;
  /**
  * The list of virtual server IDs that this mapping is restricted to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#restricted_virtual_entity_ids SpIdpConnection#restricted_virtual_entity_ids}
  */
  readonly restrictedVirtualEntityIds?: string[];
  /**
  * A reference to a resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#sp_token_generator_ref SpIdpConnection#sp_token_generator_ref}
  */
  readonly spTokenGeneratorRef: SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef;
}

export function spIdpConnectionWsTrustTokenGeneratorMappingsToTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract_fulfillment: cdktf.hashMapper(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentToTerraform)(struct!.attributeContractFulfillment),
    attribute_sources: cdktf.listMapper(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesToTerraform, false)(struct!.attributeSources),
    default_mapping: cdktf.booleanToTerraform(struct!.defaultMapping),
    issuance_criteria: spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaToTerraform(struct!.issuanceCriteria),
    restricted_virtual_entity_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.restrictedVirtualEntityIds),
    sp_token_generator_ref: spIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRefToTerraform(struct!.spTokenGeneratorRef),
  }
}


export function spIdpConnectionWsTrustTokenGeneratorMappingsToHclTerraform(struct?: SpIdpConnectionWsTrustTokenGeneratorMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract_fulfillment: {
      value: cdktf.hashMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentToHclTerraform)(struct!.attributeContractFulfillment),
      isBlock: true,
      type: "map",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentMap",
    },
    attribute_sources: {
      value: cdktf.listMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesToHclTerraform, false)(struct!.attributeSources),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesList",
    },
    default_mapping: {
      value: cdktf.booleanToHclTerraform(struct!.defaultMapping),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    issuance_criteria: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaToHclTerraform(struct!.issuanceCriteria),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria",
    },
    restricted_virtual_entity_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.restrictedVirtualEntityIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sp_token_generator_ref: {
      value: spIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRefToHclTerraform(struct!.spTokenGeneratorRef),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SpIdpConnectionWsTrustTokenGeneratorMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContractFulfillment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContractFulfillment = this._attributeContractFulfillment?.internalValue;
    }
    if (this._attributeSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeSources = this._attributeSources?.internalValue;
    }
    if (this._defaultMapping !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMapping = this._defaultMapping;
    }
    if (this._issuanceCriteria?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceCriteria = this._issuanceCriteria?.internalValue;
    }
    if (this._restrictedVirtualEntityIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.restrictedVirtualEntityIds = this._restrictedVirtualEntityIds;
    }
    if (this._spTokenGeneratorRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spTokenGeneratorRef = this._spTokenGeneratorRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrustTokenGeneratorMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = undefined;
      this._attributeSources.internalValue = undefined;
      this._defaultMapping = undefined;
      this._issuanceCriteria.internalValue = undefined;
      this._restrictedVirtualEntityIds = undefined;
      this._spTokenGeneratorRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContractFulfillment.internalValue = value.attributeContractFulfillment;
      this._attributeSources.internalValue = value.attributeSources;
      this._defaultMapping = value.defaultMapping;
      this._issuanceCriteria.internalValue = value.issuanceCriteria;
      this._restrictedVirtualEntityIds = value.restrictedVirtualEntityIds;
      this._spTokenGeneratorRef.internalValue = value.spTokenGeneratorRef;
    }
  }

  // attribute_contract_fulfillment - computed: false, optional: false, required: true
  private _attributeContractFulfillment = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillmentMap(this, "attribute_contract_fulfillment");
  public get attributeContractFulfillment() {
    return this._attributeContractFulfillment;
  }
  public putAttributeContractFulfillment(value: { [key: string]: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeContractFulfillment } | cdktf.IResolvable) {
    this._attributeContractFulfillment.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractFulfillmentInput() {
    return this._attributeContractFulfillment.internalValue;
  }

  // attribute_sources - computed: true, optional: true, required: false
  private _attributeSources = new SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSourcesList(this, "attribute_sources", true);
  public get attributeSources() {
    return this._attributeSources;
  }
  public putAttributeSources(value: SpIdpConnectionWsTrustTokenGeneratorMappingsAttributeSources[] | cdktf.IResolvable) {
    this._attributeSources.internalValue = value;
  }
  public resetAttributeSources() {
    this._attributeSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSourcesInput() {
    return this._attributeSources.internalValue;
  }

  // default_mapping - computed: false, optional: true, required: false
  private _defaultMapping?: boolean | cdktf.IResolvable; 
  public get defaultMapping() {
    return this.getBooleanAttribute('default_mapping');
  }
  public set defaultMapping(value: boolean | cdktf.IResolvable) {
    this._defaultMapping = value;
  }
  public resetDefaultMapping() {
    this._defaultMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultMappingInput() {
    return this._defaultMapping;
  }

  // issuance_criteria - computed: true, optional: true, required: false
  private _issuanceCriteria = new SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteriaOutputReference(this, "issuance_criteria");
  public get issuanceCriteria() {
    return this._issuanceCriteria;
  }
  public putIssuanceCriteria(value: SpIdpConnectionWsTrustTokenGeneratorMappingsIssuanceCriteria) {
    this._issuanceCriteria.internalValue = value;
  }
  public resetIssuanceCriteria() {
    this._issuanceCriteria.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceCriteriaInput() {
    return this._issuanceCriteria.internalValue;
  }

  // restricted_virtual_entity_ids - computed: false, optional: true, required: false
  private _restrictedVirtualEntityIds?: string[]; 
  public get restrictedVirtualEntityIds() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_virtual_entity_ids'));
  }
  public set restrictedVirtualEntityIds(value: string[]) {
    this._restrictedVirtualEntityIds = value;
  }
  public resetRestrictedVirtualEntityIds() {
    this._restrictedVirtualEntityIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedVirtualEntityIdsInput() {
    return this._restrictedVirtualEntityIds;
  }

  // sp_token_generator_ref - computed: false, optional: false, required: true
  private _spTokenGeneratorRef = new SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRefOutputReference(this, "sp_token_generator_ref");
  public get spTokenGeneratorRef() {
    return this._spTokenGeneratorRef;
  }
  public putSpTokenGeneratorRef(value: SpIdpConnectionWsTrustTokenGeneratorMappingsSpTokenGeneratorRef) {
    this._spTokenGeneratorRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spTokenGeneratorRefInput() {
    return this._spTokenGeneratorRef.internalValue;
  }
}

export class SpIdpConnectionWsTrustTokenGeneratorMappingsList extends cdktf.ComplexList {
  public internalValue? : SpIdpConnectionWsTrustTokenGeneratorMappings[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): SpIdpConnectionWsTrustTokenGeneratorMappingsOutputReference {
    return new SpIdpConnectionWsTrustTokenGeneratorMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SpIdpConnectionWsTrust {
  /**
  * A set of user attributes that this server will receive in the token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#attribute_contract SpIdpConnection#attribute_contract}
  */
  readonly attributeContract: SpIdpConnectionWsTrustAttributeContract;
  /**
  * Indicates whether a local token needs to be generated. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#generate_local_token SpIdpConnection#generate_local_token}
  */
  readonly generateLocalToken: boolean | cdktf.IResolvable;
  /**
  * A list of token generators to generate local tokens. Required if a local token needs to be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/sp_idp_connection#token_generator_mappings SpIdpConnection#token_generator_mappings}
  */
  readonly tokenGeneratorMappings?: SpIdpConnectionWsTrustTokenGeneratorMappings[] | cdktf.IResolvable;
}

export function spIdpConnectionWsTrustToTerraform(struct?: SpIdpConnectionWsTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute_contract: spIdpConnectionWsTrustAttributeContractToTerraform(struct!.attributeContract),
    generate_local_token: cdktf.booleanToTerraform(struct!.generateLocalToken),
    token_generator_mappings: cdktf.listMapper(spIdpConnectionWsTrustTokenGeneratorMappingsToTerraform, false)(struct!.tokenGeneratorMappings),
  }
}


export function spIdpConnectionWsTrustToHclTerraform(struct?: SpIdpConnectionWsTrust | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute_contract: {
      value: spIdpConnectionWsTrustAttributeContractToHclTerraform(struct!.attributeContract),
      isBlock: true,
      type: "struct",
      storageClassType: "SpIdpConnectionWsTrustAttributeContract",
    },
    generate_local_token: {
      value: cdktf.booleanToHclTerraform(struct!.generateLocalToken),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token_generator_mappings: {
      value: cdktf.listMapperHcl(spIdpConnectionWsTrustTokenGeneratorMappingsToHclTerraform, false)(struct!.tokenGeneratorMappings),
      isBlock: true,
      type: "set",
      storageClassType: "SpIdpConnectionWsTrustTokenGeneratorMappingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SpIdpConnectionWsTrustOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SpIdpConnectionWsTrust | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributeContract?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributeContract = this._attributeContract?.internalValue;
    }
    if (this._generateLocalToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateLocalToken = this._generateLocalToken;
    }
    if (this._tokenGeneratorMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenGeneratorMappings = this._tokenGeneratorMappings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SpIdpConnectionWsTrust | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributeContract.internalValue = undefined;
      this._generateLocalToken = undefined;
      this._tokenGeneratorMappings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributeContract.internalValue = value.attributeContract;
      this._generateLocalToken = value.generateLocalToken;
      this._tokenGeneratorMappings.internalValue = value.tokenGeneratorMappings;
    }
  }

  // attribute_contract - computed: false, optional: false, required: true
  private _attributeContract = new SpIdpConnectionWsTrustAttributeContractOutputReference(this, "attribute_contract");
  public get attributeContract() {
    return this._attributeContract;
  }
  public putAttributeContract(value: SpIdpConnectionWsTrustAttributeContract) {
    this._attributeContract.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeContractInput() {
    return this._attributeContract.internalValue;
  }

  // generate_local_token - computed: false, optional: false, required: true
  private _generateLocalToken?: boolean | cdktf.IResolvable; 
  public get generateLocalToken() {
    return this.getBooleanAttribute('generate_local_token');
  }
  public set generateLocalToken(value: boolean | cdktf.IResolvable) {
    this._generateLocalToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get generateLocalTokenInput() {
    return this._generateLocalToken;
  }

  // token_generator_mappings - computed: false, optional: true, required: false
  private _tokenGeneratorMappings = new SpIdpConnectionWsTrustTokenGeneratorMappingsList(this, "token_generator_mappings", true);
  public get tokenGeneratorMappings() {
    return this._tokenGeneratorMappings;
  }
  public putTokenGeneratorMappings(value: SpIdpConnectionWsTrustTokenGeneratorMappings[] | cdktf.IResolvable) {
    this._tokenGeneratorMappings.internalValue = value;
  }
  public resetTokenGeneratorMappings() {
    this._tokenGeneratorMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenGeneratorMappingsInput() {
    return this._tokenGeneratorMappings.internalValue;
  }
}
