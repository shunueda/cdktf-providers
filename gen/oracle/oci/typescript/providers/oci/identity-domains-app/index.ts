// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdentityDomainsAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#access_token_expiry IdentityDomainsApp#access_token_expiry}
  */
  readonly accessTokenExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#active IdentityDomainsApp#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#all_url_schemes_allowed IdentityDomainsApp#all_url_schemes_allowed}
  */
  readonly allUrlSchemesAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allow_access_control IdentityDomainsApp#allow_access_control}
  */
  readonly allowAccessControl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allow_offline IdentityDomainsApp#allow_offline}
  */
  readonly allowOffline?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allowed_grants IdentityDomainsApp#allowed_grants}
  */
  readonly allowedGrants?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allowed_operations IdentityDomainsApp#allowed_operations}
  */
  readonly allowedOperations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#app_icon IdentityDomainsApp#app_icon}
  */
  readonly appIcon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#app_thumbnail IdentityDomainsApp#app_thumbnail}
  */
  readonly appThumbnail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#attribute_sets IdentityDomainsApp#attribute_sets}
  */
  readonly attributeSets?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#attributes IdentityDomainsApp#attributes}
  */
  readonly attributes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#audience IdentityDomainsApp#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#authorization IdentityDomainsApp#authorization}
  */
  readonly authorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#bypass_consent IdentityDomainsApp#bypass_consent}
  */
  readonly bypassConsent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#client_ip_checking IdentityDomainsApp#client_ip_checking}
  */
  readonly clientIpChecking?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#client_type IdentityDomainsApp#client_type}
  */
  readonly clientType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#contact_email_address IdentityDomainsApp#contact_email_address}
  */
  readonly contactEmailAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#delegated_service_names IdentityDomainsApp#delegated_service_names}
  */
  readonly delegatedServiceNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#description IdentityDomainsApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#disable_kmsi_token_authentication IdentityDomainsApp#disable_kmsi_token_authentication}
  */
  readonly disableKmsiTokenAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#display_name IdentityDomainsApp#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#error_page_url IdentityDomainsApp#error_page_url}
  */
  readonly errorPageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#force_delete IdentityDomainsApp#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#home_page_url IdentityDomainsApp#home_page_url}
  */
  readonly homePageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#icon IdentityDomainsApp#icon}
  */
  readonly icon?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#id_token_enc_algo IdentityDomainsApp#id_token_enc_algo}
  */
  readonly idTokenEncAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#idcs_endpoint IdentityDomainsApp#idcs_endpoint}
  */
  readonly idcsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_alias_app IdentityDomainsApp#is_alias_app}
  */
  readonly isAliasApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_enterprise_app IdentityDomainsApp#is_enterprise_app}
  */
  readonly isEnterpriseApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_form_fill IdentityDomainsApp#is_form_fill}
  */
  readonly isFormFill?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_kerberos_realm IdentityDomainsApp#is_kerberos_realm}
  */
  readonly isKerberosRealm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_login_target IdentityDomainsApp#is_login_target}
  */
  readonly isLoginTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_mobile_target IdentityDomainsApp#is_mobile_target}
  */
  readonly isMobileTarget?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_multicloud_service_app IdentityDomainsApp#is_multicloud_service_app}
  */
  readonly isMulticloudServiceApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_oauth_client IdentityDomainsApp#is_oauth_client}
  */
  readonly isOauthClient?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_oauth_resource IdentityDomainsApp#is_oauth_resource}
  */
  readonly isOauthResource?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_obligation_capable IdentityDomainsApp#is_obligation_capable}
  */
  readonly isObligationCapable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_radius_app IdentityDomainsApp#is_radius_app}
  */
  readonly isRadiusApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_saml_service_provider IdentityDomainsApp#is_saml_service_provider}
  */
  readonly isSamlServiceProvider?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_unmanaged_app IdentityDomainsApp#is_unmanaged_app}
  */
  readonly isUnmanagedApp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_web_tier_policy IdentityDomainsApp#is_web_tier_policy}
  */
  readonly isWebTierPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#landing_page_url IdentityDomainsApp#landing_page_url}
  */
  readonly landingPageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#linking_callback_url IdentityDomainsApp#linking_callback_url}
  */
  readonly linkingCallbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#login_mechanism IdentityDomainsApp#login_mechanism}
  */
  readonly loginMechanism?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#login_page_url IdentityDomainsApp#login_page_url}
  */
  readonly loginPageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#logout_page_url IdentityDomainsApp#logout_page_url}
  */
  readonly logoutPageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#logout_uri IdentityDomainsApp#logout_uri}
  */
  readonly logoutUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name IdentityDomainsApp#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#ocid IdentityDomainsApp#ocid}
  */
  readonly ocid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#post_logout_redirect_uris IdentityDomainsApp#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#privacy_policy_url IdentityDomainsApp#privacy_policy_url}
  */
  readonly privacyPolicyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#product_logo_url IdentityDomainsApp#product_logo_url}
  */
  readonly productLogoUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#product_name IdentityDomainsApp#product_name}
  */
  readonly productName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#redirect_uris IdentityDomainsApp#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#refresh_token_expiry IdentityDomainsApp#refresh_token_expiry}
  */
  readonly refreshTokenExpiry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#resource_type_schema_version IdentityDomainsApp#resource_type_schema_version}
  */
  readonly resourceTypeSchemaVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#schemas IdentityDomainsApp#schemas}
  */
  readonly schemas: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#secondary_audiences IdentityDomainsApp#secondary_audiences}
  */
  readonly secondaryAudiences?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#service_type_urn IdentityDomainsApp#service_type_urn}
  */
  readonly serviceTypeUrn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#service_type_version IdentityDomainsApp#service_type_version}
  */
  readonly serviceTypeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#show_in_my_apps IdentityDomainsApp#show_in_my_apps}
  */
  readonly showInMyApps?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#terms_of_service_url IdentityDomainsApp#terms_of_service_url}
  */
  readonly termsOfServiceUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#trust_scope IdentityDomainsApp#trust_scope}
  */
  readonly trustScope?: string;
  /**
  * alias_apps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#alias_apps IdentityDomainsApp#alias_apps}
  */
  readonly aliasApps?: IdentityDomainsAppAliasApps[] | cdktf.IResolvable;
  /**
  * allowed_scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allowed_scopes IdentityDomainsApp#allowed_scopes}
  */
  readonly allowedScopes?: IdentityDomainsAppAllowedScopes[] | cdktf.IResolvable;
  /**
  * allowed_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allowed_tags IdentityDomainsApp#allowed_tags}
  */
  readonly allowedTags?: IdentityDomainsAppAllowedTags[] | cdktf.IResolvable;
  /**
  * app_signon_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#app_signon_policy IdentityDomainsApp#app_signon_policy}
  */
  readonly appSignonPolicy?: IdentityDomainsAppAppSignonPolicy;
  /**
  * apps_network_perimeters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#apps_network_perimeters IdentityDomainsApp#apps_network_perimeters}
  */
  readonly appsNetworkPerimeters?: IdentityDomainsAppAppsNetworkPerimeters[] | cdktf.IResolvable;
  /**
  * as_opc_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#as_opc_service IdentityDomainsApp#as_opc_service}
  */
  readonly asOpcService?: IdentityDomainsAppAsOpcService;
  /**
  * attr_rendering_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#attr_rendering_metadata IdentityDomainsApp#attr_rendering_metadata}
  */
  readonly attrRenderingMetadata?: IdentityDomainsAppAttrRenderingMetadata[] | cdktf.IResolvable;
  /**
  * based_on_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#based_on_template IdentityDomainsApp#based_on_template}
  */
  readonly basedOnTemplate: IdentityDomainsAppBasedOnTemplate;
  /**
  * certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#certificates IdentityDomainsApp#certificates}
  */
  readonly certificates?: IdentityDomainsAppCertificates[] | cdktf.IResolvable;
  /**
  * identity_providers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#identity_providers IdentityDomainsApp#identity_providers}
  */
  readonly identityProviders?: IdentityDomainsAppIdentityProviders[] | cdktf.IResolvable;
  /**
  * idp_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#idp_policy IdentityDomainsApp#idp_policy}
  */
  readonly idpPolicy?: IdentityDomainsAppIdpPolicy;
  /**
  * protectable_secondary_audiences block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#protectable_secondary_audiences IdentityDomainsApp#protectable_secondary_audiences}
  */
  readonly protectableSecondaryAudiences?: IdentityDomainsAppProtectableSecondaryAudiences[] | cdktf.IResolvable;
  /**
  * radius_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#radius_policy IdentityDomainsApp#radius_policy}
  */
  readonly radiusPolicy?: IdentityDomainsAppRadiusPolicy;
  /**
  * saml_service_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#saml_service_provider IdentityDomainsApp#saml_service_provider}
  */
  readonly samlServiceProvider?: IdentityDomainsAppSamlServiceProvider;
  /**
  * scopes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#scopes IdentityDomainsApp#scopes}
  */
  readonly scopes?: IdentityDomainsAppScopes[] | cdktf.IResolvable;
  /**
  * service_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#service_params IdentityDomainsApp#service_params}
  */
  readonly serviceParams?: IdentityDomainsAppServiceParams[] | cdktf.IResolvable;
  /**
  * signon_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#signon_policy IdentityDomainsApp#signon_policy}
  */
  readonly signonPolicy?: IdentityDomainsAppSignonPolicy;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#tags IdentityDomainsApp#tags}
  */
  readonly tags?: IdentityDomainsAppTags[] | cdktf.IResolvable;
  /**
  * terms_of_use block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#terms_of_use IdentityDomainsApp#terms_of_use}
  */
  readonly termsOfUse?: IdentityDomainsAppTermsOfUse;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#timeouts IdentityDomainsApp#timeouts}
  */
  readonly timeouts?: IdentityDomainsAppTimeouts;
  /**
  * trust_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#trust_policies IdentityDomainsApp#trust_policies}
  */
  readonly trustPolicies?: IdentityDomainsAppTrustPolicies[] | cdktf.IResolvable;
  /**
  * urnietfparamsscimschemasoracleidcsextension_oci_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextension_oci_tags IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextension_oci_tags}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionOciTags?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTags;
  /**
  * urnietfparamsscimschemasoracleidcsextensiondbcs_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensiondbcs_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensiondbcs_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensiondbcsApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionenterprise_app_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionenterprise_app_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionenterprise_app_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionform_fill_app_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionform_fill_app_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionform_fill_app_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionformFillAppApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate;
  /**
  * urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionmanagedapp_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionmanagedapp_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionmanagedapp_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionmanagedappApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionopc_service_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionopc_service_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionopc_service_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionopcServiceApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionradius_app_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionradius_app_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionradius_app_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionradiusAppApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionrequestable_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionrequestable_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionrequestable_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionrequestableApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp;
  /**
  * urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app IdentityDomainsApp#urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app}
  */
  readonly urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp;
}
export interface IdentityDomainsAppAccounts {
}

export function identityDomainsAppAccountsToTerraform(struct?: IdentityDomainsAppAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppAccountsToHclTerraform(struct?: IdentityDomainsAppAccounts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppAccountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppAccounts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAccounts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // active - computed: true, optional: false, required: false
  public get active() {
    return this.getBooleanAttribute('active');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppAccountsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppAccountsOutputReference {
    return new IdentityDomainsAppAccountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppAdminRoles {
}

export function identityDomainsAppAdminRolesToTerraform(struct?: IdentityDomainsAppAdminRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppAdminRolesToHclTerraform(struct?: IdentityDomainsAppAdminRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppAdminRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppAdminRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAdminRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppAdminRolesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppAdminRolesOutputReference {
    return new IdentityDomainsAppAdminRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppCloudControlProperties {
}

export function identityDomainsAppCloudControlPropertiesToTerraform(struct?: IdentityDomainsAppCloudControlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppCloudControlPropertiesToHclTerraform(struct?: IdentityDomainsAppCloudControlProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppCloudControlPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppCloudControlProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppCloudControlProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // values - computed: true, optional: false, required: false
  public get values() {
    return this.getListAttribute('values');
  }
}

export class IdentityDomainsAppCloudControlPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppCloudControlPropertiesOutputReference {
    return new IdentityDomainsAppCloudControlPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppEditableAttributes {
}

export function identityDomainsAppEditableAttributesToTerraform(struct?: IdentityDomainsAppEditableAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppEditableAttributesToHclTerraform(struct?: IdentityDomainsAppEditableAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppEditableAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppEditableAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppEditableAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class IdentityDomainsAppEditableAttributesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppEditableAttributesOutputReference {
    return new IdentityDomainsAppEditableAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppGrantedAppRoles {
}

export function identityDomainsAppGrantedAppRolesToTerraform(struct?: IdentityDomainsAppGrantedAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppGrantedAppRolesToHclTerraform(struct?: IdentityDomainsAppGrantedAppRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppGrantedAppRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppGrantedAppRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppGrantedAppRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_role - computed: true, optional: false, required: false
  public get adminRole() {
    return this.getBooleanAttribute('admin_role');
  }

  // app_id - computed: true, optional: false, required: false
  public get appId() {
    return this.getStringAttribute('app_id');
  }

  // app_name - computed: true, optional: false, required: false
  public get appName() {
    return this.getStringAttribute('app_name');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // legacy_group_name - computed: true, optional: false, required: false
  public get legacyGroupName() {
    return this.getStringAttribute('legacy_group_name');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppGrantedAppRolesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppGrantedAppRolesOutputReference {
    return new IdentityDomainsAppGrantedAppRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppGrants {
}

export function identityDomainsAppGrantsToTerraform(struct?: IdentityDomainsAppGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppGrantsToHclTerraform(struct?: IdentityDomainsAppGrants): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppGrantsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppGrants | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppGrants | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // grant_mechanism - computed: true, optional: false, required: false
  public get grantMechanism() {
    return this.getStringAttribute('grant_mechanism');
  }

  // grantee_id - computed: true, optional: false, required: false
  public get granteeId() {
    return this.getStringAttribute('grantee_id');
  }

  // grantee_type - computed: true, optional: false, required: false
  public get granteeType() {
    return this.getStringAttribute('grantee_type');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppGrantsList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppGrantsOutputReference {
    return new IdentityDomainsAppGrantsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppIdcsCreatedBy {
}

export function identityDomainsAppIdcsCreatedByToTerraform(struct?: IdentityDomainsAppIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppIdcsCreatedByToHclTerraform(struct?: IdentityDomainsAppIdcsCreatedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppIdcsCreatedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppIdcsCreatedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppIdcsCreatedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppIdcsCreatedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppIdcsCreatedByOutputReference {
    return new IdentityDomainsAppIdcsCreatedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppIdcsLastModifiedBy {
}

export function identityDomainsAppIdcsLastModifiedByToTerraform(struct?: IdentityDomainsAppIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppIdcsLastModifiedByToHclTerraform(struct?: IdentityDomainsAppIdcsLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppIdcsLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppIdcsLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppIdcsLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppIdcsLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppIdcsLastModifiedByOutputReference {
    return new IdentityDomainsAppIdcsLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppMeta {
}

export function identityDomainsAppMetaToTerraform(struct?: IdentityDomainsAppMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppMetaToHclTerraform(struct?: IdentityDomainsAppMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppMetaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class IdentityDomainsAppMetaList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppMetaOutputReference {
    return new IdentityDomainsAppMetaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUserRoles {
}

export function identityDomainsAppUserRolesToTerraform(struct?: IdentityDomainsAppUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppUserRolesToHclTerraform(struct?: IdentityDomainsAppUserRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppUserRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUserRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUserRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppUserRolesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppUserRolesOutputReference {
    return new IdentityDomainsAppUserRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppAliasApps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppAliasAppsToTerraform(struct?: IdentityDomainsAppAliasApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppAliasAppsToHclTerraform(struct?: IdentityDomainsAppAliasApps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppAliasAppsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppAliasApps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAliasApps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppAliasAppsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppAliasApps[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppAliasAppsOutputReference {
    return new IdentityDomainsAppAliasAppsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppAllowedScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#fqs IdentityDomainsApp#fqs}
  */
  readonly fqs: string;
}

export function identityDomainsAppAllowedScopesToTerraform(struct?: IdentityDomainsAppAllowedScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fqs: cdktf.stringToTerraform(struct!.fqs),
  }
}


export function identityDomainsAppAllowedScopesToHclTerraform(struct?: IdentityDomainsAppAllowedScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fqs: {
      value: cdktf.stringToHclTerraform(struct!.fqs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppAllowedScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppAllowedScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fqs !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqs = this._fqs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAllowedScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fqs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fqs = value.fqs;
    }
  }

  // fqs - computed: false, optional: false, required: true
  private _fqs?: string; 
  public get fqs() {
    return this.getStringAttribute('fqs');
  }
  public set fqs(value: string) {
    this._fqs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fqsInput() {
    return this._fqs;
  }

  // id_of_defining_app - computed: true, optional: false, required: false
  public get idOfDefiningApp() {
    return this.getStringAttribute('id_of_defining_app');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
}

export class IdentityDomainsAppAllowedScopesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppAllowedScopes[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppAllowedScopesOutputReference {
    return new IdentityDomainsAppAllowedScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppAllowedTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#key IdentityDomainsApp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppAllowedTagsToTerraform(struct?: IdentityDomainsAppAllowedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppAllowedTagsToHclTerraform(struct?: IdentityDomainsAppAllowedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class IdentityDomainsAppAllowedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppAllowedTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAllowedTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppAllowedTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppAllowedTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppAllowedTagsOutputReference {
    return new IdentityDomainsAppAllowedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppAppSignonPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppAppSignonPolicyToTerraform(struct?: IdentityDomainsAppAppSignonPolicyOutputReference | IdentityDomainsAppAppSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppAppSignonPolicyToHclTerraform(struct?: IdentityDomainsAppAppSignonPolicyOutputReference | IdentityDomainsAppAppSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppAppSignonPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppAppSignonPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAppSignonPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppAppsNetworkPerimeters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppAppsNetworkPerimetersToTerraform(struct?: IdentityDomainsAppAppsNetworkPerimeters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppAppsNetworkPerimetersToHclTerraform(struct?: IdentityDomainsAppAppsNetworkPerimeters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppAppsNetworkPerimetersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppAppsNetworkPerimeters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAppsNetworkPerimeters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppAppsNetworkPerimetersList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppAppsNetworkPerimeters[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppAppsNetworkPerimetersOutputReference {
    return new IdentityDomainsAppAppsNetworkPerimetersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppAsOpcService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppAsOpcServiceToTerraform(struct?: IdentityDomainsAppAsOpcServiceOutputReference | IdentityDomainsAppAsOpcService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppAsOpcServiceToHclTerraform(struct?: IdentityDomainsAppAsOpcServiceOutputReference | IdentityDomainsAppAsOpcService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppAsOpcServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppAsOpcService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAsOpcService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppAttrRenderingMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#datatype IdentityDomainsApp#datatype}
  */
  readonly datatype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#helptext IdentityDomainsApp#helptext}
  */
  readonly helptext?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#label IdentityDomainsApp#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#max_length IdentityDomainsApp#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#max_size IdentityDomainsApp#max_size}
  */
  readonly maxSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#min_length IdentityDomainsApp#min_length}
  */
  readonly minLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#min_size IdentityDomainsApp#min_size}
  */
  readonly minSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name IdentityDomainsApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#order IdentityDomainsApp#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#read_only IdentityDomainsApp#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#regexp IdentityDomainsApp#regexp}
  */
  readonly regexp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#required IdentityDomainsApp#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#section IdentityDomainsApp#section}
  */
  readonly section?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#visible IdentityDomainsApp#visible}
  */
  readonly visible?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#widget IdentityDomainsApp#widget}
  */
  readonly widget?: string;
}

export function identityDomainsAppAttrRenderingMetadataToTerraform(struct?: IdentityDomainsAppAttrRenderingMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    datatype: cdktf.stringToTerraform(struct!.datatype),
    helptext: cdktf.stringToTerraform(struct!.helptext),
    label: cdktf.stringToTerraform(struct!.label),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    max_size: cdktf.numberToTerraform(struct!.maxSize),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    min_size: cdktf.numberToTerraform(struct!.minSize),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    regexp: cdktf.stringToTerraform(struct!.regexp),
    required: cdktf.booleanToTerraform(struct!.required),
    section: cdktf.stringToTerraform(struct!.section),
    visible: cdktf.booleanToTerraform(struct!.visible),
    widget: cdktf.stringToTerraform(struct!.widget),
  }
}


export function identityDomainsAppAttrRenderingMetadataToHclTerraform(struct?: IdentityDomainsAppAttrRenderingMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    datatype: {
      value: cdktf.stringToHclTerraform(struct!.datatype),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helptext: {
      value: cdktf.stringToHclTerraform(struct!.helptext),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_size: {
      value: cdktf.numberToHclTerraform(struct!.minSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    regexp: {
      value: cdktf.stringToHclTerraform(struct!.regexp),
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
    section: {
      value: cdktf.stringToHclTerraform(struct!.section),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    visible: {
      value: cdktf.booleanToHclTerraform(struct!.visible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    widget: {
      value: cdktf.stringToHclTerraform(struct!.widget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppAttrRenderingMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppAttrRenderingMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datatype !== undefined) {
      hasAnyValues = true;
      internalValueResult.datatype = this._datatype;
    }
    if (this._helptext !== undefined) {
      hasAnyValues = true;
      internalValueResult.helptext = this._helptext;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._maxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSize = this._maxSize;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._minSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSize = this._minSize;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._regexp !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexp = this._regexp;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._section !== undefined) {
      hasAnyValues = true;
      internalValueResult.section = this._section;
    }
    if (this._visible !== undefined) {
      hasAnyValues = true;
      internalValueResult.visible = this._visible;
    }
    if (this._widget !== undefined) {
      hasAnyValues = true;
      internalValueResult.widget = this._widget;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppAttrRenderingMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._datatype = undefined;
      this._helptext = undefined;
      this._label = undefined;
      this._maxLength = undefined;
      this._maxSize = undefined;
      this._minLength = undefined;
      this._minSize = undefined;
      this._name = undefined;
      this._order = undefined;
      this._readOnly = undefined;
      this._regexp = undefined;
      this._required = undefined;
      this._section = undefined;
      this._visible = undefined;
      this._widget = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._datatype = value.datatype;
      this._helptext = value.helptext;
      this._label = value.label;
      this._maxLength = value.maxLength;
      this._maxSize = value.maxSize;
      this._minLength = value.minLength;
      this._minSize = value.minSize;
      this._name = value.name;
      this._order = value.order;
      this._readOnly = value.readOnly;
      this._regexp = value.regexp;
      this._required = value.required;
      this._section = value.section;
      this._visible = value.visible;
      this._widget = value.widget;
    }
  }

  // datatype - computed: true, optional: true, required: false
  private _datatype?: string; 
  public get datatype() {
    return this.getStringAttribute('datatype');
  }
  public set datatype(value: string) {
    this._datatype = value;
  }
  public resetDatatype() {
    this._datatype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datatypeInput() {
    return this._datatype;
  }

  // helptext - computed: true, optional: true, required: false
  private _helptext?: string; 
  public get helptext() {
    return this.getStringAttribute('helptext');
  }
  public set helptext(value: string) {
    this._helptext = value;
  }
  public resetHelptext() {
    this._helptext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helptextInput() {
    return this._helptext;
  }

  // label - computed: true, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // max_length - computed: true, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: number; 
  public get maxSize() {
    return this.getNumberAttribute('max_size');
  }
  public set maxSize(value: number) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_length - computed: true, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: number; 
  public get minSize() {
    return this.getNumberAttribute('min_size');
  }
  public set minSize(value: number) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // read_only - computed: true, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // regexp - computed: true, optional: true, required: false
  private _regexp?: string; 
  public get regexp() {
    return this.getStringAttribute('regexp');
  }
  public set regexp(value: string) {
    this._regexp = value;
  }
  public resetRegexp() {
    this._regexp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexpInput() {
    return this._regexp;
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

  // section - computed: true, optional: true, required: false
  private _section?: string; 
  public get section() {
    return this.getStringAttribute('section');
  }
  public set section(value: string) {
    this._section = value;
  }
  public resetSection() {
    this._section = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectionInput() {
    return this._section;
  }

  // visible - computed: true, optional: true, required: false
  private _visible?: boolean | cdktf.IResolvable; 
  public get visible() {
    return this.getBooleanAttribute('visible');
  }
  public set visible(value: boolean | cdktf.IResolvable) {
    this._visible = value;
  }
  public resetVisible() {
    this._visible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get visibleInput() {
    return this._visible;
  }

  // widget - computed: true, optional: true, required: false
  private _widget?: string; 
  public get widget() {
    return this.getStringAttribute('widget');
  }
  public set widget(value: string) {
    this._widget = value;
  }
  public resetWidget() {
    this._widget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetInput() {
    return this._widget;
  }
}

export class IdentityDomainsAppAttrRenderingMetadataList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppAttrRenderingMetadata[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppAttrRenderingMetadataOutputReference {
    return new IdentityDomainsAppAttrRenderingMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppBasedOnTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#well_known_id IdentityDomainsApp#well_known_id}
  */
  readonly wellKnownId?: string;
}

export function identityDomainsAppBasedOnTemplateToTerraform(struct?: IdentityDomainsAppBasedOnTemplateOutputReference | IdentityDomainsAppBasedOnTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    well_known_id: cdktf.stringToTerraform(struct!.wellKnownId),
  }
}


export function identityDomainsAppBasedOnTemplateToHclTerraform(struct?: IdentityDomainsAppBasedOnTemplateOutputReference | IdentityDomainsAppBasedOnTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    well_known_id: {
      value: cdktf.stringToHclTerraform(struct!.wellKnownId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppBasedOnTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppBasedOnTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._wellKnownId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownId = this._wellKnownId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppBasedOnTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._wellKnownId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._wellKnownId = value.wellKnownId;
    }
  }

  // last_modified - computed: true, optional: false, required: false
  public get lastModified() {
    return this.getStringAttribute('last_modified');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

  // well_known_id - computed: true, optional: true, required: false
  private _wellKnownId?: string; 
  public get wellKnownId() {
    return this.getStringAttribute('well_known_id');
  }
  public set wellKnownId(value: string) {
    this._wellKnownId = value;
  }
  public resetWellKnownId() {
    this._wellKnownId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownIdInput() {
    return this._wellKnownId;
  }
}
export interface IdentityDomainsAppCertificates {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#cert_alias IdentityDomainsApp#cert_alias}
  */
  readonly certAlias: string;
}

export function identityDomainsAppCertificatesToTerraform(struct?: IdentityDomainsAppCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_alias: cdktf.stringToTerraform(struct!.certAlias),
  }
}


export function identityDomainsAppCertificatesToHclTerraform(struct?: IdentityDomainsAppCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert_alias: {
      value: cdktf.stringToHclTerraform(struct!.certAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.certAlias = this._certAlias;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certAlias = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certAlias = value.certAlias;
    }
  }

  // cert_alias - computed: false, optional: false, required: true
  private _certAlias?: string; 
  public get certAlias() {
    return this.getStringAttribute('cert_alias');
  }
  public set certAlias(value: string) {
    this._certAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certAliasInput() {
    return this._certAlias;
  }

  // kid - computed: true, optional: false, required: false
  public get kid() {
    return this.getStringAttribute('kid');
  }

  // sha1thumbprint - computed: true, optional: false, required: false
  public get sha1Thumbprint() {
    return this.getStringAttribute('sha1thumbprint');
  }

  // x509base64certificate - computed: true, optional: false, required: false
  public get x509Base64Certificate() {
    return this.getStringAttribute('x509base64certificate');
  }

  // x5t - computed: true, optional: false, required: false
  public get x5T() {
    return this.getStringAttribute('x5t');
  }
}

export class IdentityDomainsAppCertificatesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppCertificates[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppCertificatesOutputReference {
    return new IdentityDomainsAppCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppIdentityProviders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppIdentityProvidersToTerraform(struct?: IdentityDomainsAppIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppIdentityProvidersToHclTerraform(struct?: IdentityDomainsAppIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppIdentityProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppIdentityProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppIdentityProvidersList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppIdentityProviders[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppIdentityProvidersOutputReference {
    return new IdentityDomainsAppIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppIdpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppIdpPolicyToTerraform(struct?: IdentityDomainsAppIdpPolicyOutputReference | IdentityDomainsAppIdpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppIdpPolicyToHclTerraform(struct?: IdentityDomainsAppIdpPolicyOutputReference | IdentityDomainsAppIdpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppIdpPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppIdpPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppIdpPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppProtectableSecondaryAudiences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppProtectableSecondaryAudiencesToTerraform(struct?: IdentityDomainsAppProtectableSecondaryAudiences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppProtectableSecondaryAudiencesToHclTerraform(struct?: IdentityDomainsAppProtectableSecondaryAudiences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppProtectableSecondaryAudiencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppProtectableSecondaryAudiences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppProtectableSecondaryAudiences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppProtectableSecondaryAudiencesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppProtectableSecondaryAudiences[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppProtectableSecondaryAudiencesOutputReference {
    return new IdentityDomainsAppProtectableSecondaryAudiencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppRadiusPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppRadiusPolicyToTerraform(struct?: IdentityDomainsAppRadiusPolicyOutputReference | IdentityDomainsAppRadiusPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppRadiusPolicyToHclTerraform(struct?: IdentityDomainsAppRadiusPolicyOutputReference | IdentityDomainsAppRadiusPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppRadiusPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppRadiusPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppRadiusPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // _ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('_ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppSamlServiceProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppSamlServiceProviderToTerraform(struct?: IdentityDomainsAppSamlServiceProviderOutputReference | IdentityDomainsAppSamlServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppSamlServiceProviderToHclTerraform(struct?: IdentityDomainsAppSamlServiceProviderOutputReference | IdentityDomainsAppSamlServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppSamlServiceProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppSamlServiceProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppSamlServiceProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppScopes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#description IdentityDomainsApp#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#display_name IdentityDomainsApp#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#requires_consent IdentityDomainsApp#requires_consent}
  */
  readonly requiresConsent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppScopesToTerraform(struct?: IdentityDomainsAppScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    requires_consent: cdktf.booleanToTerraform(struct!.requiresConsent),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppScopesToHclTerraform(struct?: IdentityDomainsAppScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requires_consent: {
      value: cdktf.booleanToHclTerraform(struct!.requiresConsent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class IdentityDomainsAppScopesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._requiresConsent !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiresConsent = this._requiresConsent;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._requiresConsent = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._requiresConsent = value.requiresConsent;
      this._value = value.value;
    }
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

  // display_name - computed: true, optional: true, required: false
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

  // fqs - computed: true, optional: false, required: false
  public get fqs() {
    return this.getStringAttribute('fqs');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // requires_consent - computed: true, optional: true, required: false
  private _requiresConsent?: boolean | cdktf.IResolvable; 
  public get requiresConsent() {
    return this.getBooleanAttribute('requires_consent');
  }
  public set requiresConsent(value: boolean | cdktf.IResolvable) {
    this._requiresConsent = value;
  }
  public resetRequiresConsent() {
    this._requiresConsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiresConsentInput() {
    return this._requiresConsent;
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppScopesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppScopes[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppScopesOutputReference {
    return new IdentityDomainsAppScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppServiceParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name IdentityDomainsApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value?: string;
}

export function identityDomainsAppServiceParamsToTerraform(struct?: IdentityDomainsAppServiceParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppServiceParamsToHclTerraform(struct?: IdentityDomainsAppServiceParams | cdktf.IResolvable): any {
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

export class IdentityDomainsAppServiceParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppServiceParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: IdentityDomainsAppServiceParams | cdktf.IResolvable | undefined) {
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

export class IdentityDomainsAppServiceParamsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppServiceParams[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppServiceParamsOutputReference {
    return new IdentityDomainsAppServiceParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppSignonPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppSignonPolicyToTerraform(struct?: IdentityDomainsAppSignonPolicyOutputReference | IdentityDomainsAppSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppSignonPolicyToHclTerraform(struct?: IdentityDomainsAppSignonPolicyOutputReference | IdentityDomainsAppSignonPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppSignonPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppSignonPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppSignonPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#key IdentityDomainsApp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppTagsToTerraform(struct?: IdentityDomainsAppTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppTagsToHclTerraform(struct?: IdentityDomainsAppTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class IdentityDomainsAppTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppTagsOutputReference {
    return new IdentityDomainsAppTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppTermsOfUse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppTermsOfUseToTerraform(struct?: IdentityDomainsAppTermsOfUseOutputReference | IdentityDomainsAppTermsOfUse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppTermsOfUseToHclTerraform(struct?: IdentityDomainsAppTermsOfUseOutputReference | IdentityDomainsAppTermsOfUse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppTermsOfUseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppTermsOfUse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppTermsOfUse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#create IdentityDomainsApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#delete IdentityDomainsApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#update IdentityDomainsApp#update}
  */
  readonly update?: string;
}

export function identityDomainsAppTimeoutsToTerraform(struct?: IdentityDomainsAppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function identityDomainsAppTimeoutsToHclTerraform(struct?: IdentityDomainsAppTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IdentityDomainsAppTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface IdentityDomainsAppTrustPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppTrustPoliciesToTerraform(struct?: IdentityDomainsAppTrustPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppTrustPoliciesToHclTerraform(struct?: IdentityDomainsAppTrustPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppTrustPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppTrustPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppTrustPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppTrustPoliciesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppTrustPolicies[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppTrustPoliciesOutputReference {
    return new IdentityDomainsAppTrustPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#key IdentityDomainsApp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#namespace IdentityDomainsApp#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._namespace = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._namespace = value.namespace;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#key IdentityDomainsApp#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTags {
  /**
  * defined_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#defined_tags IdentityDomainsApp#defined_tags}
  */
  readonly definedTags?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags[] | cdktf.IResolvable;
  /**
  * freeform_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#freeform_tags IdentityDomainsApp#freeform_tags}
  */
  readonly freeformTags?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags[] | cdktf.IResolvable;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    defined_tags: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToTerraform, true)(struct!.definedTags),
    freeform_tags: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToTerraform, true)(struct!.freeformTags),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    defined_tags: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsToHclTerraform, true)(struct!.definedTags),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList",
    },
    freeform_tags: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsToHclTerraform, true)(struct!.freeformTags),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._definedTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.definedTags = this._definedTags?.internalValue;
    }
    if (this._freeformTags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.freeformTags = this._freeformTags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._definedTags.internalValue = undefined;
      this._freeformTags.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._definedTags.internalValue = value.definedTags;
      this._freeformTags.internalValue = value.freeformTags;
    }
  }

  // tag_slug - computed: true, optional: false, required: false
  public get tagSlug() {
    return this.getStringAttribute('tag_slug');
  }

  // defined_tags - computed: false, optional: true, required: false
  private _definedTags = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTagsList(this, "defined_tags", false);
  public get definedTags() {
    return this._definedTags;
  }
  public putDefinedTags(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsDefinedTags[] | cdktf.IResolvable) {
    this._definedTags.internalValue = value;
  }
  public resetDefinedTags() {
    this._definedTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags.internalValue;
  }

  // freeform_tags - computed: false, optional: true, required: false
  private _freeformTags = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTagsList(this, "freeform_tags", false);
  public get freeformTags() {
    return this._freeformTags;
  }
  public putFreeformTags(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsFreeformTags[] | cdktf.IResolvable) {
    this._freeformTags.internalValue = value;
  }
  public resetFreeformTags() {
    this._freeformTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#domain_name IdentityDomainsApp#domain_name}
  */
  readonly domainName?: string;
  /**
  * domain_app block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#domain_app IdentityDomainsApp#domain_app}
  */
  readonly domainApp?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    domain_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppToTerraform(struct!.domainApp),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_app: {
      value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppToHclTerraform(struct!.domainApp),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._domainApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainApp = this._domainApp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._domainName = undefined;
      this._domainApp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._domainName = value.domainName;
      this._domainApp.internalValue = value.domainApp;
    }
  }

  // domain_name - computed: true, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // domain_app - computed: false, optional: true, required: false
  private _domainApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainAppOutputReference(this, "domain_app");
  public get domainApp() {
    return this._domainApp;
  }
  public putDomainApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppDomainApp) {
    this._domainApp.internalValue = value;
  }
  public resetDomainApp() {
    this._domainApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAppInput() {
    return this._domainApp.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
    }
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allow_authz_decision_ttl IdentityDomainsApp#allow_authz_decision_ttl}
  */
  readonly allowAuthzDecisionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#deny_authz_decision_ttl IdentityDomainsApp#deny_authz_decision_ttl}
  */
  readonly denyAuthzDecisionTtl?: number;
  /**
  * allow_authz_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#allow_authz_policy IdentityDomainsApp#allow_authz_policy}
  */
  readonly allowAuthzPolicy?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy;
  /**
  * app_resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#app_resources IdentityDomainsApp#app_resources}
  */
  readonly appResources?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources[] | cdktf.IResolvable;
  /**
  * deny_authz_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#deny_authz_policy IdentityDomainsApp#deny_authz_policy}
  */
  readonly denyAuthzPolicy?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_authz_decision_ttl: cdktf.numberToTerraform(struct!.allowAuthzDecisionTtl),
    deny_authz_decision_ttl: cdktf.numberToTerraform(struct!.denyAuthzDecisionTtl),
    allow_authz_policy: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyToTerraform(struct!.allowAuthzPolicy),
    app_resources: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesToTerraform, true)(struct!.appResources),
    deny_authz_policy: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyToTerraform(struct!.denyAuthzPolicy),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_authz_decision_ttl: {
      value: cdktf.numberToHclTerraform(struct!.allowAuthzDecisionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deny_authz_decision_ttl: {
      value: cdktf.numberToHclTerraform(struct!.denyAuthzDecisionTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    allow_authz_policy: {
      value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyToHclTerraform(struct!.allowAuthzPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyList",
    },
    app_resources: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesToHclTerraform, true)(struct!.appResources),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesList",
    },
    deny_authz_policy: {
      value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyToHclTerraform(struct!.denyAuthzPolicy),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowAuthzDecisionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAuthzDecisionTtl = this._allowAuthzDecisionTtl;
    }
    if (this._denyAuthzDecisionTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAuthzDecisionTtl = this._denyAuthzDecisionTtl;
    }
    if (this._allowAuthzPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAuthzPolicy = this._allowAuthzPolicy?.internalValue;
    }
    if (this._appResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appResources = this._appResources?.internalValue;
    }
    if (this._denyAuthzPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.denyAuthzPolicy = this._denyAuthzPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowAuthzDecisionTtl = undefined;
      this._denyAuthzDecisionTtl = undefined;
      this._allowAuthzPolicy.internalValue = undefined;
      this._appResources.internalValue = undefined;
      this._denyAuthzPolicy.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowAuthzDecisionTtl = value.allowAuthzDecisionTtl;
      this._denyAuthzDecisionTtl = value.denyAuthzDecisionTtl;
      this._allowAuthzPolicy.internalValue = value.allowAuthzPolicy;
      this._appResources.internalValue = value.appResources;
      this._denyAuthzPolicy.internalValue = value.denyAuthzPolicy;
    }
  }

  // allow_authz_decision_ttl - computed: true, optional: true, required: false
  private _allowAuthzDecisionTtl?: number; 
  public get allowAuthzDecisionTtl() {
    return this.getNumberAttribute('allow_authz_decision_ttl');
  }
  public set allowAuthzDecisionTtl(value: number) {
    this._allowAuthzDecisionTtl = value;
  }
  public resetAllowAuthzDecisionTtl() {
    this._allowAuthzDecisionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthzDecisionTtlInput() {
    return this._allowAuthzDecisionTtl;
  }

  // deny_authz_decision_ttl - computed: true, optional: true, required: false
  private _denyAuthzDecisionTtl?: number; 
  public get denyAuthzDecisionTtl() {
    return this.getNumberAttribute('deny_authz_decision_ttl');
  }
  public set denyAuthzDecisionTtl(value: number) {
    this._denyAuthzDecisionTtl = value;
  }
  public resetDenyAuthzDecisionTtl() {
    this._denyAuthzDecisionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAuthzDecisionTtlInput() {
    return this._denyAuthzDecisionTtl;
  }

  // allow_authz_policy - computed: false, optional: true, required: false
  private _allowAuthzPolicy = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicyOutputReference(this, "allow_authz_policy");
  public get allowAuthzPolicy() {
    return this._allowAuthzPolicy;
  }
  public putAllowAuthzPolicy(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAllowAuthzPolicy) {
    this._allowAuthzPolicy.internalValue = value;
  }
  public resetAllowAuthzPolicy() {
    this._allowAuthzPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthzPolicyInput() {
    return this._allowAuthzPolicy.internalValue;
  }

  // app_resources - computed: false, optional: true, required: false
  private _appResources = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResourcesList(this, "app_resources", true);
  public get appResources() {
    return this._appResources;
  }
  public putAppResources(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppAppResources[] | cdktf.IResolvable) {
    this._appResources.internalValue = value;
  }
  public resetAppResources() {
    this._appResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appResourcesInput() {
    return this._appResources.internalValue;
  }

  // deny_authz_policy - computed: false, optional: true, required: false
  private _denyAuthzPolicy = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicyOutputReference(this, "deny_authz_policy");
  public get denyAuthzPolicy() {
    return this._denyAuthzPolicy;
  }
  public putDenyAuthzPolicy(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppDenyAuthzPolicy) {
    this._denyAuthzPolicy.internalValue = value;
  }
  public resetDenyAuthzPolicy() {
    this._denyAuthzPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyAuthzPolicyInput() {
    return this._denyAuthzPolicy.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_url IdentityDomainsApp#form_url}
  */
  readonly formUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_url_match_type IdentityDomainsApp#form_url_match_type}
  */
  readonly formUrlMatchType?: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    form_url: cdktf.stringToTerraform(struct!.formUrl),
    form_url_match_type: cdktf.stringToTerraform(struct!.formUrlMatchType),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    form_url: {
      value: cdktf.stringToHclTerraform(struct!.formUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_url_match_type: {
      value: cdktf.stringToHclTerraform(struct!.formUrlMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.formUrl = this._formUrl;
    }
    if (this._formUrlMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formUrlMatchType = this._formUrlMatchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._formUrl = undefined;
      this._formUrlMatchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._formUrl = value.formUrl;
      this._formUrlMatchType = value.formUrlMatchType;
    }
  }

  // form_url - computed: false, optional: false, required: true
  private _formUrl?: string; 
  public get formUrl() {
    return this.getStringAttribute('form_url');
  }
  public set formUrl(value: string) {
    this._formUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formUrlInput() {
    return this._formUrl;
  }

  // form_url_match_type - computed: true, optional: true, required: false
  private _formUrlMatchType?: string; 
  public get formUrlMatchType() {
    return this.getStringAttribute('form_url_match_type');
  }
  public set formUrlMatchType(value: string) {
    this._formUrlMatchType = value;
  }
  public resetFormUrlMatchType() {
    this._formUrlMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formUrlMatchTypeInput() {
    return this._formUrlMatchType;
  }
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#configuration IdentityDomainsApp#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_cred_method IdentityDomainsApp#form_cred_method}
  */
  readonly formCredMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_credential_sharing_group_id IdentityDomainsApp#form_credential_sharing_group_id}
  */
  readonly formCredentialSharingGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_type IdentityDomainsApp#form_type}
  */
  readonly formType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#reveal_password_on_form IdentityDomainsApp#reveal_password_on_form}
  */
  readonly revealPasswordOnForm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#user_name_form_expression IdentityDomainsApp#user_name_form_expression}
  */
  readonly userNameFormExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#user_name_form_template IdentityDomainsApp#user_name_form_template}
  */
  readonly userNameFormTemplate?: string;
  /**
  * form_fill_url_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_fill_url_match IdentityDomainsApp#form_fill_url_match}
  */
  readonly formFillUrlMatch?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch[] | cdktf.IResolvable;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    form_cred_method: cdktf.stringToTerraform(struct!.formCredMethod),
    form_credential_sharing_group_id: cdktf.stringToTerraform(struct!.formCredentialSharingGroupId),
    form_type: cdktf.stringToTerraform(struct!.formType),
    reveal_password_on_form: cdktf.booleanToTerraform(struct!.revealPasswordOnForm),
    user_name_form_expression: cdktf.stringToTerraform(struct!.userNameFormExpression),
    user_name_form_template: cdktf.stringToTerraform(struct!.userNameFormTemplate),
    form_fill_url_match: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchToTerraform, true)(struct!.formFillUrlMatch),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_cred_method: {
      value: cdktf.stringToHclTerraform(struct!.formCredMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_credential_sharing_group_id: {
      value: cdktf.stringToHclTerraform(struct!.formCredentialSharingGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_type: {
      value: cdktf.stringToHclTerraform(struct!.formType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reveal_password_on_form: {
      value: cdktf.booleanToHclTerraform(struct!.revealPasswordOnForm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_name_form_expression: {
      value: cdktf.stringToHclTerraform(struct!.userNameFormExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_form_template: {
      value: cdktf.stringToHclTerraform(struct!.userNameFormTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_fill_url_match: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchToHclTerraform, true)(struct!.formFillUrlMatch),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._formCredMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.formCredMethod = this._formCredMethod;
    }
    if (this._formCredentialSharingGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.formCredentialSharingGroupId = this._formCredentialSharingGroupId;
    }
    if (this._formType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formType = this._formType;
    }
    if (this._revealPasswordOnForm !== undefined) {
      hasAnyValues = true;
      internalValueResult.revealPasswordOnForm = this._revealPasswordOnForm;
    }
    if (this._userNameFormExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameFormExpression = this._userNameFormExpression;
    }
    if (this._userNameFormTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameFormTemplate = this._userNameFormTemplate;
    }
    if (this._formFillUrlMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formFillUrlMatch = this._formFillUrlMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._formCredMethod = undefined;
      this._formCredentialSharingGroupId = undefined;
      this._formType = undefined;
      this._revealPasswordOnForm = undefined;
      this._userNameFormExpression = undefined;
      this._userNameFormTemplate = undefined;
      this._formFillUrlMatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._formCredMethod = value.formCredMethod;
      this._formCredentialSharingGroupId = value.formCredentialSharingGroupId;
      this._formType = value.formType;
      this._revealPasswordOnForm = value.revealPasswordOnForm;
      this._userNameFormExpression = value.userNameFormExpression;
      this._userNameFormTemplate = value.userNameFormTemplate;
      this._formFillUrlMatch.internalValue = value.formFillUrlMatch;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // form_cred_method - computed: true, optional: true, required: false
  private _formCredMethod?: string; 
  public get formCredMethod() {
    return this.getStringAttribute('form_cred_method');
  }
  public set formCredMethod(value: string) {
    this._formCredMethod = value;
  }
  public resetFormCredMethod() {
    this._formCredMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formCredMethodInput() {
    return this._formCredMethod;
  }

  // form_credential_sharing_group_id - computed: true, optional: true, required: false
  private _formCredentialSharingGroupId?: string; 
  public get formCredentialSharingGroupId() {
    return this.getStringAttribute('form_credential_sharing_group_id');
  }
  public set formCredentialSharingGroupId(value: string) {
    this._formCredentialSharingGroupId = value;
  }
  public resetFormCredentialSharingGroupId() {
    this._formCredentialSharingGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formCredentialSharingGroupIdInput() {
    return this._formCredentialSharingGroupId;
  }

  // form_type - computed: true, optional: true, required: false
  private _formType?: string; 
  public get formType() {
    return this.getStringAttribute('form_type');
  }
  public set formType(value: string) {
    this._formType = value;
  }
  public resetFormType() {
    this._formType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formTypeInput() {
    return this._formType;
  }

  // reveal_password_on_form - computed: true, optional: true, required: false
  private _revealPasswordOnForm?: boolean | cdktf.IResolvable; 
  public get revealPasswordOnForm() {
    return this.getBooleanAttribute('reveal_password_on_form');
  }
  public set revealPasswordOnForm(value: boolean | cdktf.IResolvable) {
    this._revealPasswordOnForm = value;
  }
  public resetRevealPasswordOnForm() {
    this._revealPasswordOnForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealPasswordOnFormInput() {
    return this._revealPasswordOnForm;
  }

  // sync_from_template - computed: true, optional: false, required: false
  public get syncFromTemplate() {
    return this.getBooleanAttribute('sync_from_template');
  }

  // user_name_form_expression - computed: true, optional: true, required: false
  private _userNameFormExpression?: string; 
  public get userNameFormExpression() {
    return this.getStringAttribute('user_name_form_expression');
  }
  public set userNameFormExpression(value: string) {
    this._userNameFormExpression = value;
  }
  public resetUserNameFormExpression() {
    this._userNameFormExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameFormExpressionInput() {
    return this._userNameFormExpression;
  }

  // user_name_form_template - computed: true, optional: true, required: false
  private _userNameFormTemplate?: string; 
  public get userNameFormTemplate() {
    return this.getStringAttribute('user_name_form_template');
  }
  public set userNameFormTemplate(value: string) {
    this._userNameFormTemplate = value;
  }
  public resetUserNameFormTemplate() {
    this._userNameFormTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameFormTemplateInput() {
    return this._userNameFormTemplate;
  }

  // form_fill_url_match - computed: false, optional: true, required: false
  private _formFillUrlMatch = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatchList(this, "form_fill_url_match", true);
  public get formFillUrlMatch() {
    return this._formFillUrlMatch;
  }
  public putFormFillUrlMatch(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppFormFillUrlMatch[] | cdktf.IResolvable) {
    this._formFillUrlMatch.internalValue = value;
  }
  public resetFormFillUrlMatch() {
    this._formFillUrlMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFillUrlMatchInput() {
    return this._formFillUrlMatch.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_url IdentityDomainsApp#form_url}
  */
  readonly formUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_url_match_type IdentityDomainsApp#form_url_match_type}
  */
  readonly formUrlMatchType?: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    form_url: cdktf.stringToTerraform(struct!.formUrl),
    form_url_match_type: cdktf.stringToTerraform(struct!.formUrlMatchType),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    form_url: {
      value: cdktf.stringToHclTerraform(struct!.formUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_url_match_type: {
      value: cdktf.stringToHclTerraform(struct!.formUrlMatchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._formUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.formUrl = this._formUrl;
    }
    if (this._formUrlMatchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formUrlMatchType = this._formUrlMatchType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._formUrl = undefined;
      this._formUrlMatchType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._formUrl = value.formUrl;
      this._formUrlMatchType = value.formUrlMatchType;
    }
  }

  // form_url - computed: false, optional: false, required: true
  private _formUrl?: string; 
  public get formUrl() {
    return this.getStringAttribute('form_url');
  }
  public set formUrl(value: string) {
    this._formUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formUrlInput() {
    return this._formUrl;
  }

  // form_url_match_type - computed: true, optional: true, required: false
  private _formUrlMatchType?: string; 
  public get formUrlMatchType() {
    return this.getStringAttribute('form_url_match_type');
  }
  public set formUrlMatchType(value: string) {
    this._formUrlMatchType = value;
  }
  public resetFormUrlMatchType() {
    this._formUrlMatchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formUrlMatchTypeInput() {
    return this._formUrlMatchType;
  }
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#configuration IdentityDomainsApp#configuration}
  */
  readonly configuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_cred_method IdentityDomainsApp#form_cred_method}
  */
  readonly formCredMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_credential_sharing_group_id IdentityDomainsApp#form_credential_sharing_group_id}
  */
  readonly formCredentialSharingGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_type IdentityDomainsApp#form_type}
  */
  readonly formType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#reveal_password_on_form IdentityDomainsApp#reveal_password_on_form}
  */
  readonly revealPasswordOnForm?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#sync_from_template IdentityDomainsApp#sync_from_template}
  */
  readonly syncFromTemplate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#user_name_form_expression IdentityDomainsApp#user_name_form_expression}
  */
  readonly userNameFormExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#user_name_form_template IdentityDomainsApp#user_name_form_template}
  */
  readonly userNameFormTemplate?: string;
  /**
  * form_fill_url_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#form_fill_url_match IdentityDomainsApp#form_fill_url_match}
  */
  readonly formFillUrlMatch?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch[] | cdktf.IResolvable;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    form_cred_method: cdktf.stringToTerraform(struct!.formCredMethod),
    form_credential_sharing_group_id: cdktf.stringToTerraform(struct!.formCredentialSharingGroupId),
    form_type: cdktf.stringToTerraform(struct!.formType),
    reveal_password_on_form: cdktf.booleanToTerraform(struct!.revealPasswordOnForm),
    sync_from_template: cdktf.booleanToTerraform(struct!.syncFromTemplate),
    user_name_form_expression: cdktf.stringToTerraform(struct!.userNameFormExpression),
    user_name_form_template: cdktf.stringToTerraform(struct!.userNameFormTemplate),
    form_fill_url_match: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchToTerraform, true)(struct!.formFillUrlMatch),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_cred_method: {
      value: cdktf.stringToHclTerraform(struct!.formCredMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_credential_sharing_group_id: {
      value: cdktf.stringToHclTerraform(struct!.formCredentialSharingGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_type: {
      value: cdktf.stringToHclTerraform(struct!.formType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reveal_password_on_form: {
      value: cdktf.booleanToHclTerraform(struct!.revealPasswordOnForm),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sync_from_template: {
      value: cdktf.booleanToHclTerraform(struct!.syncFromTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_name_form_expression: {
      value: cdktf.stringToHclTerraform(struct!.userNameFormExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_form_template: {
      value: cdktf.stringToHclTerraform(struct!.userNameFormTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    form_fill_url_match: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchToHclTerraform, true)(struct!.formFillUrlMatch),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._formCredMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.formCredMethod = this._formCredMethod;
    }
    if (this._formCredentialSharingGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.formCredentialSharingGroupId = this._formCredentialSharingGroupId;
    }
    if (this._formType !== undefined) {
      hasAnyValues = true;
      internalValueResult.formType = this._formType;
    }
    if (this._revealPasswordOnForm !== undefined) {
      hasAnyValues = true;
      internalValueResult.revealPasswordOnForm = this._revealPasswordOnForm;
    }
    if (this._syncFromTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncFromTemplate = this._syncFromTemplate;
    }
    if (this._userNameFormExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameFormExpression = this._userNameFormExpression;
    }
    if (this._userNameFormTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameFormTemplate = this._userNameFormTemplate;
    }
    if (this._formFillUrlMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.formFillUrlMatch = this._formFillUrlMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._formCredMethod = undefined;
      this._formCredentialSharingGroupId = undefined;
      this._formType = undefined;
      this._revealPasswordOnForm = undefined;
      this._syncFromTemplate = undefined;
      this._userNameFormExpression = undefined;
      this._userNameFormTemplate = undefined;
      this._formFillUrlMatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._formCredMethod = value.formCredMethod;
      this._formCredentialSharingGroupId = value.formCredentialSharingGroupId;
      this._formType = value.formType;
      this._revealPasswordOnForm = value.revealPasswordOnForm;
      this._syncFromTemplate = value.syncFromTemplate;
      this._userNameFormExpression = value.userNameFormExpression;
      this._userNameFormTemplate = value.userNameFormTemplate;
      this._formFillUrlMatch.internalValue = value.formFillUrlMatch;
    }
  }

  // configuration - computed: true, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // form_cred_method - computed: true, optional: true, required: false
  private _formCredMethod?: string; 
  public get formCredMethod() {
    return this.getStringAttribute('form_cred_method');
  }
  public set formCredMethod(value: string) {
    this._formCredMethod = value;
  }
  public resetFormCredMethod() {
    this._formCredMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formCredMethodInput() {
    return this._formCredMethod;
  }

  // form_credential_sharing_group_id - computed: true, optional: true, required: false
  private _formCredentialSharingGroupId?: string; 
  public get formCredentialSharingGroupId() {
    return this.getStringAttribute('form_credential_sharing_group_id');
  }
  public set formCredentialSharingGroupId(value: string) {
    this._formCredentialSharingGroupId = value;
  }
  public resetFormCredentialSharingGroupId() {
    this._formCredentialSharingGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formCredentialSharingGroupIdInput() {
    return this._formCredentialSharingGroupId;
  }

  // form_type - computed: true, optional: true, required: false
  private _formType?: string; 
  public get formType() {
    return this.getStringAttribute('form_type');
  }
  public set formType(value: string) {
    this._formType = value;
  }
  public resetFormType() {
    this._formType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formTypeInput() {
    return this._formType;
  }

  // reveal_password_on_form - computed: true, optional: true, required: false
  private _revealPasswordOnForm?: boolean | cdktf.IResolvable; 
  public get revealPasswordOnForm() {
    return this.getBooleanAttribute('reveal_password_on_form');
  }
  public set revealPasswordOnForm(value: boolean | cdktf.IResolvable) {
    this._revealPasswordOnForm = value;
  }
  public resetRevealPasswordOnForm() {
    this._revealPasswordOnForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revealPasswordOnFormInput() {
    return this._revealPasswordOnForm;
  }

  // sync_from_template - computed: true, optional: true, required: false
  private _syncFromTemplate?: boolean | cdktf.IResolvable; 
  public get syncFromTemplate() {
    return this.getBooleanAttribute('sync_from_template');
  }
  public set syncFromTemplate(value: boolean | cdktf.IResolvable) {
    this._syncFromTemplate = value;
  }
  public resetSyncFromTemplate() {
    this._syncFromTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncFromTemplateInput() {
    return this._syncFromTemplate;
  }

  // user_name_form_expression - computed: true, optional: true, required: false
  private _userNameFormExpression?: string; 
  public get userNameFormExpression() {
    return this.getStringAttribute('user_name_form_expression');
  }
  public set userNameFormExpression(value: string) {
    this._userNameFormExpression = value;
  }
  public resetUserNameFormExpression() {
    this._userNameFormExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameFormExpressionInput() {
    return this._userNameFormExpression;
  }

  // user_name_form_template - computed: true, optional: true, required: false
  private _userNameFormTemplate?: string; 
  public get userNameFormTemplate() {
    return this.getStringAttribute('user_name_form_template');
  }
  public set userNameFormTemplate(value: string) {
    this._userNameFormTemplate = value;
  }
  public resetUserNameFormTemplate() {
    this._userNameFormTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameFormTemplateInput() {
    return this._userNameFormTemplate;
  }

  // form_fill_url_match - computed: false, optional: true, required: false
  private _formFillUrlMatch = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatchList(this, "form_fill_url_match", true);
  public get formFillUrlMatch() {
    return this._formFillUrlMatch;
  }
  public putFormFillUrlMatch(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateFormFillUrlMatch[] | cdktf.IResolvable) {
    this._formFillUrlMatch.internalValue = value;
  }
  public resetFormFillUrlMatch() {
    this._formFillUrlMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formFillUrlMatchInput() {
    return this._formFillUrlMatch.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#default_encryption_salt_type IdentityDomainsApp#default_encryption_salt_type}
  */
  readonly defaultEncryptionSaltType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#master_key IdentityDomainsApp#master_key}
  */
  readonly masterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#max_renewable_age IdentityDomainsApp#max_renewable_age}
  */
  readonly maxRenewableAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#max_ticket_life IdentityDomainsApp#max_ticket_life}
  */
  readonly maxTicketLife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#realm_name IdentityDomainsApp#realm_name}
  */
  readonly realmName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#supported_encryption_salt_types IdentityDomainsApp#supported_encryption_salt_types}
  */
  readonly supportedEncryptionSaltTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#ticket_flags IdentityDomainsApp#ticket_flags}
  */
  readonly ticketFlags?: number;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_encryption_salt_type: cdktf.stringToTerraform(struct!.defaultEncryptionSaltType),
    master_key: cdktf.stringToTerraform(struct!.masterKey),
    max_renewable_age: cdktf.numberToTerraform(struct!.maxRenewableAge),
    max_ticket_life: cdktf.numberToTerraform(struct!.maxTicketLife),
    realm_name: cdktf.stringToTerraform(struct!.realmName),
    supported_encryption_salt_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedEncryptionSaltTypes),
    ticket_flags: cdktf.numberToTerraform(struct!.ticketFlags),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_encryption_salt_type: {
      value: cdktf.stringToHclTerraform(struct!.defaultEncryptionSaltType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    master_key: {
      value: cdktf.stringToHclTerraform(struct!.masterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_renewable_age: {
      value: cdktf.numberToHclTerraform(struct!.maxRenewableAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_ticket_life: {
      value: cdktf.numberToHclTerraform(struct!.maxTicketLife),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    realm_name: {
      value: cdktf.stringToHclTerraform(struct!.realmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_encryption_salt_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedEncryptionSaltTypes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ticket_flags: {
      value: cdktf.numberToHclTerraform(struct!.ticketFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEncryptionSaltType !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEncryptionSaltType = this._defaultEncryptionSaltType;
    }
    if (this._masterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterKey = this._masterKey;
    }
    if (this._maxRenewableAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRenewableAge = this._maxRenewableAge;
    }
    if (this._maxTicketLife !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxTicketLife = this._maxTicketLife;
    }
    if (this._realmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.realmName = this._realmName;
    }
    if (this._supportedEncryptionSaltTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedEncryptionSaltTypes = this._supportedEncryptionSaltTypes;
    }
    if (this._ticketFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.ticketFlags = this._ticketFlags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEncryptionSaltType = undefined;
      this._masterKey = undefined;
      this._maxRenewableAge = undefined;
      this._maxTicketLife = undefined;
      this._realmName = undefined;
      this._supportedEncryptionSaltTypes = undefined;
      this._ticketFlags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEncryptionSaltType = value.defaultEncryptionSaltType;
      this._masterKey = value.masterKey;
      this._maxRenewableAge = value.maxRenewableAge;
      this._maxTicketLife = value.maxTicketLife;
      this._realmName = value.realmName;
      this._supportedEncryptionSaltTypes = value.supportedEncryptionSaltTypes;
      this._ticketFlags = value.ticketFlags;
    }
  }

  // default_encryption_salt_type - computed: true, optional: true, required: false
  private _defaultEncryptionSaltType?: string; 
  public get defaultEncryptionSaltType() {
    return this.getStringAttribute('default_encryption_salt_type');
  }
  public set defaultEncryptionSaltType(value: string) {
    this._defaultEncryptionSaltType = value;
  }
  public resetDefaultEncryptionSaltType() {
    this._defaultEncryptionSaltType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionSaltTypeInput() {
    return this._defaultEncryptionSaltType;
  }

  // master_key - computed: true, optional: true, required: false
  private _masterKey?: string; 
  public get masterKey() {
    return this.getStringAttribute('master_key');
  }
  public set masterKey(value: string) {
    this._masterKey = value;
  }
  public resetMasterKey() {
    this._masterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterKeyInput() {
    return this._masterKey;
  }

  // max_renewable_age - computed: true, optional: true, required: false
  private _maxRenewableAge?: number; 
  public get maxRenewableAge() {
    return this.getNumberAttribute('max_renewable_age');
  }
  public set maxRenewableAge(value: number) {
    this._maxRenewableAge = value;
  }
  public resetMaxRenewableAge() {
    this._maxRenewableAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRenewableAgeInput() {
    return this._maxRenewableAge;
  }

  // max_ticket_life - computed: true, optional: true, required: false
  private _maxTicketLife?: number; 
  public get maxTicketLife() {
    return this.getNumberAttribute('max_ticket_life');
  }
  public set maxTicketLife(value: number) {
    this._maxTicketLife = value;
  }
  public resetMaxTicketLife() {
    this._maxTicketLife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTicketLifeInput() {
    return this._maxTicketLife;
  }

  // realm_name - computed: true, optional: true, required: false
  private _realmName?: string; 
  public get realmName() {
    return this.getStringAttribute('realm_name');
  }
  public set realmName(value: string) {
    this._realmName = value;
  }
  public resetRealmName() {
    this._realmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmNameInput() {
    return this._realmName;
  }

  // supported_encryption_salt_types - computed: true, optional: true, required: false
  private _supportedEncryptionSaltTypes?: string[]; 
  public get supportedEncryptionSaltTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_encryption_salt_types'));
  }
  public set supportedEncryptionSaltTypes(value: string[]) {
    this._supportedEncryptionSaltTypes = value;
  }
  public resetSupportedEncryptionSaltTypes() {
    this._supportedEncryptionSaltTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedEncryptionSaltTypesInput() {
    return this._supportedEncryptionSaltTypes;
  }

  // ticket_flags - computed: true, optional: true, required: false
  private _ticketFlags?: number; 
  public get ticketFlags() {
    return this.getNumberAttribute('ticket_flags');
  }
  public set ticketFlags(value: number) {
    this._ticketFlags = value;
  }
  public resetTicketFlags() {
    this._ticketFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketFlagsInput() {
    return this._ticketFlags;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle {
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }

  // well_known_id - computed: true, optional: false, required: false
  public get wellKnownId() {
    return this.getStringAttribute('well_known_id');
  }
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges {
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridges | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses {
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // is_account_object_class - computed: true, optional: false, required: false
  public get isAccountObjectClass() {
    return this.getBooleanAttribute('is_account_object_class');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#confidential IdentityDomainsApp#confidential}
  */
  readonly confidential?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#display_name IdentityDomainsApp#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#help_message IdentityDomainsApp#help_message}
  */
  readonly helpMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#icf_type IdentityDomainsApp#icf_type}
  */
  readonly icfType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name IdentityDomainsApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#order IdentityDomainsApp#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#required IdentityDomainsApp#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value?: string[];
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential: cdktf.booleanToTerraform(struct!.confidential),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    help_message: cdktf.stringToTerraform(struct!.helpMessage),
    icf_type: cdktf.stringToTerraform(struct!.icfType),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential: {
      value: cdktf.booleanToHclTerraform(struct!.confidential),
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
    help_message: {
      value: cdktf.stringToHclTerraform(struct!.helpMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icf_type: {
      value: cdktf.stringToHclTerraform(struct!.icfType),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidential !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidential = this._confidential;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._helpMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpMessage = this._helpMessage;
    }
    if (this._icfType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icfType = this._icfType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidential = undefined;
      this._displayName = undefined;
      this._helpMessage = undefined;
      this._icfType = undefined;
      this._name = undefined;
      this._order = undefined;
      this._required = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidential = value.confidential;
      this._displayName = value.displayName;
      this._helpMessage = value.helpMessage;
      this._icfType = value.icfType;
      this._name = value.name;
      this._order = value.order;
      this._required = value.required;
      this._value = value.value;
    }
  }

  // confidential - computed: true, optional: true, required: false
  private _confidential?: boolean | cdktf.IResolvable; 
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }
  public set confidential(value: boolean | cdktf.IResolvable) {
    this._confidential = value;
  }
  public resetConfidential() {
    this._confidential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInput() {
    return this._confidential;
  }

  // display_name - computed: true, optional: true, required: false
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

  // help_message - computed: true, optional: true, required: false
  private _helpMessage?: string; 
  public get helpMessage() {
    return this.getStringAttribute('help_message');
  }
  public set helpMessage(value: string) {
    this._helpMessage = value;
  }
  public resetHelpMessage() {
    this._helpMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpMessageInput() {
    return this._helpMessage;
  }

  // icf_type - computed: false, optional: false, required: true
  private _icfType?: string; 
  public get icfType() {
    return this.getStringAttribute('icf_type');
  }
  public set icfType(value: string) {
    this._icfType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icfTypeInput() {
    return this._icfType;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#max_idle IdentityDomainsApp#max_idle}
  */
  readonly maxIdle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#max_objects IdentityDomainsApp#max_objects}
  */
  readonly maxObjects?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#max_wait IdentityDomainsApp#max_wait}
  */
  readonly maxWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#min_evictable_idle_time_millis IdentityDomainsApp#min_evictable_idle_time_millis}
  */
  readonly minEvictableIdleTimeMillis?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#min_idle IdentityDomainsApp#min_idle}
  */
  readonly minIdle?: number;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_idle: cdktf.numberToTerraform(struct!.maxIdle),
    max_objects: cdktf.numberToTerraform(struct!.maxObjects),
    max_wait: cdktf.numberToTerraform(struct!.maxWait),
    min_evictable_idle_time_millis: cdktf.numberToTerraform(struct!.minEvictableIdleTimeMillis),
    min_idle: cdktf.numberToTerraform(struct!.minIdle),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_idle: {
      value: cdktf.numberToHclTerraform(struct!.maxIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_objects: {
      value: cdktf.numberToHclTerraform(struct!.maxObjects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wait: {
      value: cdktf.numberToHclTerraform(struct!.maxWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_evictable_idle_time_millis: {
      value: cdktf.numberToHclTerraform(struct!.minEvictableIdleTimeMillis),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_idle: {
      value: cdktf.numberToHclTerraform(struct!.minIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIdle = this._maxIdle;
    }
    if (this._maxObjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxObjects = this._maxObjects;
    }
    if (this._maxWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWait = this._maxWait;
    }
    if (this._minEvictableIdleTimeMillis !== undefined) {
      hasAnyValues = true;
      internalValueResult.minEvictableIdleTimeMillis = this._minEvictableIdleTimeMillis;
    }
    if (this._minIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.minIdle = this._minIdle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxIdle = undefined;
      this._maxObjects = undefined;
      this._maxWait = undefined;
      this._minEvictableIdleTimeMillis = undefined;
      this._minIdle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxIdle = value.maxIdle;
      this._maxObjects = value.maxObjects;
      this._maxWait = value.maxWait;
      this._minEvictableIdleTimeMillis = value.minEvictableIdleTimeMillis;
      this._minIdle = value.minIdle;
    }
  }

  // max_idle - computed: true, optional: true, required: false
  private _maxIdle?: number; 
  public get maxIdle() {
    return this.getNumberAttribute('max_idle');
  }
  public set maxIdle(value: number) {
    this._maxIdle = value;
  }
  public resetMaxIdle() {
    this._maxIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIdleInput() {
    return this._maxIdle;
  }

  // max_objects - computed: true, optional: true, required: false
  private _maxObjects?: number; 
  public get maxObjects() {
    return this.getNumberAttribute('max_objects');
  }
  public set maxObjects(value: number) {
    this._maxObjects = value;
  }
  public resetMaxObjects() {
    this._maxObjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxObjectsInput() {
    return this._maxObjects;
  }

  // max_wait - computed: true, optional: true, required: false
  private _maxWait?: number; 
  public get maxWait() {
    return this.getNumberAttribute('max_wait');
  }
  public set maxWait(value: number) {
    this._maxWait = value;
  }
  public resetMaxWait() {
    this._maxWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitInput() {
    return this._maxWait;
  }

  // min_evictable_idle_time_millis - computed: true, optional: true, required: false
  private _minEvictableIdleTimeMillis?: number; 
  public get minEvictableIdleTimeMillis() {
    return this.getNumberAttribute('min_evictable_idle_time_millis');
  }
  public set minEvictableIdleTimeMillis(value: number) {
    this._minEvictableIdleTimeMillis = value;
  }
  public resetMinEvictableIdleTimeMillis() {
    this._minEvictableIdleTimeMillis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minEvictableIdleTimeMillisInput() {
    return this._minEvictableIdleTimeMillis;
  }

  // min_idle - computed: true, optional: true, required: false
  private _minIdle?: number; 
  public get minIdle() {
    return this.getNumberAttribute('min_idle');
  }
  public set minIdle(value: number) {
    this._minIdle = value;
  }
  public resetMinIdle() {
    this._minIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minIdleInput() {
    return this._minIdle;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#confidential IdentityDomainsApp#confidential}
  */
  readonly confidential?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#display_name IdentityDomainsApp#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#help_message IdentityDomainsApp#help_message}
  */
  readonly helpMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#icf_type IdentityDomainsApp#icf_type}
  */
  readonly icfType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name IdentityDomainsApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#order IdentityDomainsApp#order}
  */
  readonly order?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#required IdentityDomainsApp#required}
  */
  readonly required: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value?: string[];
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confidential: cdktf.booleanToTerraform(struct!.confidential),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    help_message: cdktf.stringToTerraform(struct!.helpMessage),
    icf_type: cdktf.stringToTerraform(struct!.icfType),
    name: cdktf.stringToTerraform(struct!.name),
    order: cdktf.numberToTerraform(struct!.order),
    required: cdktf.booleanToTerraform(struct!.required),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confidential: {
      value: cdktf.booleanToHclTerraform(struct!.confidential),
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
    help_message: {
      value: cdktf.stringToHclTerraform(struct!.helpMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icf_type: {
      value: cdktf.stringToHclTerraform(struct!.icfType),
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
    order: {
      value: cdktf.numberToHclTerraform(struct!.order),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confidential !== undefined) {
      hasAnyValues = true;
      internalValueResult.confidential = this._confidential;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._helpMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpMessage = this._helpMessage;
    }
    if (this._icfType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icfType = this._icfType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confidential = undefined;
      this._displayName = undefined;
      this._helpMessage = undefined;
      this._icfType = undefined;
      this._name = undefined;
      this._order = undefined;
      this._required = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confidential = value.confidential;
      this._displayName = value.displayName;
      this._helpMessage = value.helpMessage;
      this._icfType = value.icfType;
      this._name = value.name;
      this._order = value.order;
      this._required = value.required;
      this._value = value.value;
    }
  }

  // confidential - computed: true, optional: true, required: false
  private _confidential?: boolean | cdktf.IResolvable; 
  public get confidential() {
    return this.getBooleanAttribute('confidential');
  }
  public set confidential(value: boolean | cdktf.IResolvable) {
    this._confidential = value;
  }
  public resetConfidential() {
    this._confidential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confidentialInput() {
    return this._confidential;
  }

  // display_name - computed: true, optional: true, required: false
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

  // help_message - computed: true, optional: true, required: false
  private _helpMessage?: string; 
  public get helpMessage() {
    return this.getStringAttribute('help_message');
  }
  public set helpMessage(value: string) {
    this._helpMessage = value;
  }
  public resetHelpMessage() {
    this._helpMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpMessageInput() {
    return this._helpMessage;
  }

  // icf_type - computed: false, optional: false, required: true
  private _icfType?: string; 
  public get icfType() {
    return this.getStringAttribute('icf_type');
  }
  public set icfType(value: string) {
    this._icfType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get icfTypeInput() {
    return this._icfType;
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

  // order - computed: true, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // required - computed: false, optional: false, required: true
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
  public set value(value: string[]) {
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#display IdentityDomainsApp#display}
  */
  readonly display?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#well_known_id IdentityDomainsApp#well_known_id}
  */
  readonly wellKnownId?: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display: cdktf.stringToTerraform(struct!.display),
    value: cdktf.stringToTerraform(struct!.value),
    well_known_id: cdktf.stringToTerraform(struct!.wellKnownId),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display: {
      value: cdktf.stringToHclTerraform(struct!.display),
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
    well_known_id: {
      value: cdktf.stringToHclTerraform(struct!.wellKnownId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._display !== undefined) {
      hasAnyValues = true;
      internalValueResult.display = this._display;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._wellKnownId !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellKnownId = this._wellKnownId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._display = undefined;
      this._value = undefined;
      this._wellKnownId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._display = value.display;
      this._value = value.value;
      this._wellKnownId = value.wellKnownId;
    }
  }

  // display - computed: true, optional: true, required: false
  private _display?: string; 
  public get display() {
    return this.getStringAttribute('display');
  }
  public set display(value: string) {
    this._display = value;
  }
  public resetDisplay() {
    this._display = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayInput() {
    return this._display;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

  // well_known_id - computed: true, optional: true, required: false
  private _wellKnownId?: string; 
  public get wellKnownId() {
    return this.getStringAttribute('well_known_id');
  }
  public set wellKnownId(value: string) {
    this._wellKnownId = value;
  }
  public resetWellKnownId() {
    this._wellKnownId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellKnownIdInput() {
    return this._wellKnownId;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#access_token IdentityDomainsApp#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#access_token_expiry IdentityDomainsApp#access_token_expiry}
  */
  readonly accessTokenExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#refresh_token IdentityDomainsApp#refresh_token}
  */
  readonly refreshToken?: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    access_token_expiry: cdktf.stringToTerraform(struct!.accessTokenExpiry),
    refresh_token: cdktf.stringToTerraform(struct!.refreshToken),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_token_expiry: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token: {
      value: cdktf.stringToHclTerraform(struct!.refreshToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._accessTokenExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenExpiry = this._accessTokenExpiry;
    }
    if (this._refreshToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshToken = this._refreshToken;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._accessTokenExpiry = undefined;
      this._refreshToken = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._accessTokenExpiry = value.accessTokenExpiry;
      this._refreshToken = value.refreshToken;
    }
  }

  // access_token - computed: true, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // access_token_expiry - computed: true, optional: true, required: false
  private _accessTokenExpiry?: string; 
  public get accessTokenExpiry() {
    return this.getStringAttribute('access_token_expiry');
  }
  public set accessTokenExpiry(value: string) {
    this._accessTokenExpiry = value;
  }
  public resetAccessTokenExpiry() {
    this._accessTokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenExpiryInput() {
    return this._accessTokenExpiry;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#admin_consent_granted IdentityDomainsApp#admin_consent_granted}
  */
  readonly adminConsentGranted?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#connected IdentityDomainsApp#connected}
  */
  readonly connected?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#enable_auth_sync_new_user_notification IdentityDomainsApp#enable_auth_sync_new_user_notification}
  */
  readonly enableAuthSyncNewUserNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#enable_sync IdentityDomainsApp#enable_sync}
  */
  readonly enableSync?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#enable_sync_summary_report_notification IdentityDomainsApp#enable_sync_summary_report_notification}
  */
  readonly enableSyncSummaryReportNotification?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#is_authoritative IdentityDomainsApp#is_authoritative}
  */
  readonly isAuthoritative?: boolean | cdktf.IResolvable;
  /**
  * bundle_configuration_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#bundle_configuration_properties IdentityDomainsApp#bundle_configuration_properties}
  */
  readonly bundleConfigurationProperties?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties[] | cdktf.IResolvable;
  /**
  * bundle_pool_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#bundle_pool_configuration IdentityDomainsApp#bundle_pool_configuration}
  */
  readonly bundlePoolConfiguration?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration;
  /**
  * flat_file_bundle_configuration_properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#flat_file_bundle_configuration_properties IdentityDomainsApp#flat_file_bundle_configuration_properties}
  */
  readonly flatFileBundleConfigurationProperties?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties[] | cdktf.IResolvable;
  /**
  * flat_file_connector_bundle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#flat_file_connector_bundle IdentityDomainsApp#flat_file_connector_bundle}
  */
  readonly flatFileConnectorBundle?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle;
  /**
  * three_legged_oauth_credential block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#three_legged_oauth_credential IdentityDomainsApp#three_legged_oauth_credential}
  */
  readonly threeLeggedOauthCredential?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_consent_granted: cdktf.booleanToTerraform(struct!.adminConsentGranted),
    connected: cdktf.booleanToTerraform(struct!.connected),
    enable_auth_sync_new_user_notification: cdktf.booleanToTerraform(struct!.enableAuthSyncNewUserNotification),
    enable_sync: cdktf.booleanToTerraform(struct!.enableSync),
    enable_sync_summary_report_notification: cdktf.booleanToTerraform(struct!.enableSyncSummaryReportNotification),
    is_authoritative: cdktf.booleanToTerraform(struct!.isAuthoritative),
    bundle_configuration_properties: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesToTerraform, true)(struct!.bundleConfigurationProperties),
    bundle_pool_configuration: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationToTerraform(struct!.bundlePoolConfiguration),
    flat_file_bundle_configuration_properties: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesToTerraform, true)(struct!.flatFileBundleConfigurationProperties),
    flat_file_connector_bundle: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleToTerraform(struct!.flatFileConnectorBundle),
    three_legged_oauth_credential: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialToTerraform(struct!.threeLeggedOauthCredential),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_consent_granted: {
      value: cdktf.booleanToHclTerraform(struct!.adminConsentGranted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    connected: {
      value: cdktf.booleanToHclTerraform(struct!.connected),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_auth_sync_new_user_notification: {
      value: cdktf.booleanToHclTerraform(struct!.enableAuthSyncNewUserNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sync: {
      value: cdktf.booleanToHclTerraform(struct!.enableSync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_sync_summary_report_notification: {
      value: cdktf.booleanToHclTerraform(struct!.enableSyncSummaryReportNotification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_authoritative: {
      value: cdktf.booleanToHclTerraform(struct!.isAuthoritative),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bundle_configuration_properties: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesToHclTerraform, true)(struct!.bundleConfigurationProperties),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesList",
    },
    bundle_pool_configuration: {
      value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationToHclTerraform(struct!.bundlePoolConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationList",
    },
    flat_file_bundle_configuration_properties: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesToHclTerraform, true)(struct!.flatFileBundleConfigurationProperties),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesList",
    },
    flat_file_connector_bundle: {
      value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleToHclTerraform(struct!.flatFileConnectorBundle),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleList",
    },
    three_legged_oauth_credential: {
      value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialToHclTerraform(struct!.threeLeggedOauthCredential),
      isBlock: true,
      type: "list",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminConsentGranted !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminConsentGranted = this._adminConsentGranted;
    }
    if (this._connected !== undefined) {
      hasAnyValues = true;
      internalValueResult.connected = this._connected;
    }
    if (this._enableAuthSyncNewUserNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAuthSyncNewUserNotification = this._enableAuthSyncNewUserNotification;
    }
    if (this._enableSync !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSync = this._enableSync;
    }
    if (this._enableSyncSummaryReportNotification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSyncSummaryReportNotification = this._enableSyncSummaryReportNotification;
    }
    if (this._isAuthoritative !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthoritative = this._isAuthoritative;
    }
    if (this._bundleConfigurationProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundleConfigurationProperties = this._bundleConfigurationProperties?.internalValue;
    }
    if (this._bundlePoolConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bundlePoolConfiguration = this._bundlePoolConfiguration?.internalValue;
    }
    if (this._flatFileBundleConfigurationProperties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatFileBundleConfigurationProperties = this._flatFileBundleConfigurationProperties?.internalValue;
    }
    if (this._flatFileConnectorBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.flatFileConnectorBundle = this._flatFileConnectorBundle?.internalValue;
    }
    if (this._threeLeggedOauthCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.threeLeggedOauthCredential = this._threeLeggedOauthCredential?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminConsentGranted = undefined;
      this._connected = undefined;
      this._enableAuthSyncNewUserNotification = undefined;
      this._enableSync = undefined;
      this._enableSyncSummaryReportNotification = undefined;
      this._isAuthoritative = undefined;
      this._bundleConfigurationProperties.internalValue = undefined;
      this._bundlePoolConfiguration.internalValue = undefined;
      this._flatFileBundleConfigurationProperties.internalValue = undefined;
      this._flatFileConnectorBundle.internalValue = undefined;
      this._threeLeggedOauthCredential.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminConsentGranted = value.adminConsentGranted;
      this._connected = value.connected;
      this._enableAuthSyncNewUserNotification = value.enableAuthSyncNewUserNotification;
      this._enableSync = value.enableSync;
      this._enableSyncSummaryReportNotification = value.enableSyncSummaryReportNotification;
      this._isAuthoritative = value.isAuthoritative;
      this._bundleConfigurationProperties.internalValue = value.bundleConfigurationProperties;
      this._bundlePoolConfiguration.internalValue = value.bundlePoolConfiguration;
      this._flatFileBundleConfigurationProperties.internalValue = value.flatFileBundleConfigurationProperties;
      this._flatFileConnectorBundle.internalValue = value.flatFileConnectorBundle;
      this._threeLeggedOauthCredential.internalValue = value.threeLeggedOauthCredential;
    }
  }

  // account_form_visible - computed: true, optional: false, required: false
  public get accountFormVisible() {
    return this.getBooleanAttribute('account_form_visible');
  }

  // admin_consent_granted - computed: true, optional: true, required: false
  private _adminConsentGranted?: boolean | cdktf.IResolvable; 
  public get adminConsentGranted() {
    return this.getBooleanAttribute('admin_consent_granted');
  }
  public set adminConsentGranted(value: boolean | cdktf.IResolvable) {
    this._adminConsentGranted = value;
  }
  public resetAdminConsentGranted() {
    this._adminConsentGranted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminConsentGrantedInput() {
    return this._adminConsentGranted;
  }

  // can_be_authoritative - computed: true, optional: false, required: false
  public get canBeAuthoritative() {
    return this.getBooleanAttribute('can_be_authoritative');
  }

  // connected - computed: true, optional: true, required: false
  private _connected?: boolean | cdktf.IResolvable; 
  public get connected() {
    return this.getBooleanAttribute('connected');
  }
  public set connected(value: boolean | cdktf.IResolvable) {
    this._connected = value;
  }
  public resetConnected() {
    this._connected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectedInput() {
    return this._connected;
  }

  // connector_bundle - computed: true, optional: false, required: false
  private _connectorBundle = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppConnectorBundleList(this, "connector_bundle", false);
  public get connectorBundle() {
    return this._connectorBundle;
  }

  // enable_auth_sync_new_user_notification - computed: true, optional: true, required: false
  private _enableAuthSyncNewUserNotification?: boolean | cdktf.IResolvable; 
  public get enableAuthSyncNewUserNotification() {
    return this.getBooleanAttribute('enable_auth_sync_new_user_notification');
  }
  public set enableAuthSyncNewUserNotification(value: boolean | cdktf.IResolvable) {
    this._enableAuthSyncNewUserNotification = value;
  }
  public resetEnableAuthSyncNewUserNotification() {
    this._enableAuthSyncNewUserNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuthSyncNewUserNotificationInput() {
    return this._enableAuthSyncNewUserNotification;
  }

  // enable_sync - computed: true, optional: true, required: false
  private _enableSync?: boolean | cdktf.IResolvable; 
  public get enableSync() {
    return this.getBooleanAttribute('enable_sync');
  }
  public set enableSync(value: boolean | cdktf.IResolvable) {
    this._enableSync = value;
  }
  public resetEnableSync() {
    this._enableSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSyncInput() {
    return this._enableSync;
  }

  // enable_sync_summary_report_notification - computed: true, optional: true, required: false
  private _enableSyncSummaryReportNotification?: boolean | cdktf.IResolvable; 
  public get enableSyncSummaryReportNotification() {
    return this.getBooleanAttribute('enable_sync_summary_report_notification');
  }
  public set enableSyncSummaryReportNotification(value: boolean | cdktf.IResolvable) {
    this._enableSyncSummaryReportNotification = value;
  }
  public resetEnableSyncSummaryReportNotification() {
    this._enableSyncSummaryReportNotification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSyncSummaryReportNotificationInput() {
    return this._enableSyncSummaryReportNotification;
  }

  // identity_bridges - computed: true, optional: false, required: false
  private _identityBridges = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppIdentityBridgesList(this, "identity_bridges", false);
  public get identityBridges() {
    return this._identityBridges;
  }

  // is_authoritative - computed: true, optional: true, required: false
  private _isAuthoritative?: boolean | cdktf.IResolvable; 
  public get isAuthoritative() {
    return this.getBooleanAttribute('is_authoritative');
  }
  public set isAuthoritative(value: boolean | cdktf.IResolvable) {
    this._isAuthoritative = value;
  }
  public resetIsAuthoritative() {
    this._isAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthoritativeInput() {
    return this._isAuthoritative;
  }

  // is_directory - computed: true, optional: false, required: false
  public get isDirectory() {
    return this.getBooleanAttribute('is_directory');
  }

  // is_on_premise_app - computed: true, optional: false, required: false
  public get isOnPremiseApp() {
    return this.getBooleanAttribute('is_on_premise_app');
  }

  // is_schema_customization_supported - computed: true, optional: false, required: false
  public get isSchemaCustomizationSupported() {
    return this.getBooleanAttribute('is_schema_customization_supported');
  }

  // is_schema_discovery_supported - computed: true, optional: false, required: false
  public get isSchemaDiscoverySupported() {
    return this.getBooleanAttribute('is_schema_discovery_supported');
  }

  // is_three_legged_oauth_enabled - computed: true, optional: false, required: false
  public get isThreeLeggedOauthEnabled() {
    return this.getBooleanAttribute('is_three_legged_oauth_enabled');
  }

  // is_two_legged_oauth_enabled - computed: true, optional: false, required: false
  public get isTwoLeggedOauthEnabled() {
    return this.getBooleanAttribute('is_two_legged_oauth_enabled');
  }

  // object_classes - computed: true, optional: false, required: false
  private _objectClasses = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppObjectClassesList(this, "object_classes", false);
  public get objectClasses() {
    return this._objectClasses;
  }

  // sync_config_last_modified - computed: true, optional: false, required: false
  public get syncConfigLastModified() {
    return this.getStringAttribute('sync_config_last_modified');
  }

  // three_legged_oauth_provider_name - computed: true, optional: false, required: false
  public get threeLeggedOauthProviderName() {
    return this.getStringAttribute('three_legged_oauth_provider_name');
  }

  // bundle_configuration_properties - computed: false, optional: true, required: false
  private _bundleConfigurationProperties = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationPropertiesList(this, "bundle_configuration_properties", true);
  public get bundleConfigurationProperties() {
    return this._bundleConfigurationProperties;
  }
  public putBundleConfigurationProperties(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundleConfigurationProperties[] | cdktf.IResolvable) {
    this._bundleConfigurationProperties.internalValue = value;
  }
  public resetBundleConfigurationProperties() {
    this._bundleConfigurationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundleConfigurationPropertiesInput() {
    return this._bundleConfigurationProperties.internalValue;
  }

  // bundle_pool_configuration - computed: false, optional: true, required: false
  private _bundlePoolConfiguration = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfigurationOutputReference(this, "bundle_pool_configuration");
  public get bundlePoolConfiguration() {
    return this._bundlePoolConfiguration;
  }
  public putBundlePoolConfiguration(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppBundlePoolConfiguration) {
    this._bundlePoolConfiguration.internalValue = value;
  }
  public resetBundlePoolConfiguration() {
    this._bundlePoolConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlePoolConfigurationInput() {
    return this._bundlePoolConfiguration.internalValue;
  }

  // flat_file_bundle_configuration_properties - computed: false, optional: true, required: false
  private _flatFileBundleConfigurationProperties = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationPropertiesList(this, "flat_file_bundle_configuration_properties", true);
  public get flatFileBundleConfigurationProperties() {
    return this._flatFileBundleConfigurationProperties;
  }
  public putFlatFileBundleConfigurationProperties(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileBundleConfigurationProperties[] | cdktf.IResolvable) {
    this._flatFileBundleConfigurationProperties.internalValue = value;
  }
  public resetFlatFileBundleConfigurationProperties() {
    this._flatFileBundleConfigurationProperties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatFileBundleConfigurationPropertiesInput() {
    return this._flatFileBundleConfigurationProperties.internalValue;
  }

  // flat_file_connector_bundle - computed: false, optional: true, required: false
  private _flatFileConnectorBundle = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundleOutputReference(this, "flat_file_connector_bundle");
  public get flatFileConnectorBundle() {
    return this._flatFileConnectorBundle;
  }
  public putFlatFileConnectorBundle(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppFlatFileConnectorBundle) {
    this._flatFileConnectorBundle.internalValue = value;
  }
  public resetFlatFileConnectorBundle() {
    this._flatFileConnectorBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flatFileConnectorBundleInput() {
    return this._flatFileConnectorBundle.internalValue;
  }

  // three_legged_oauth_credential - computed: false, optional: true, required: false
  private _threeLeggedOauthCredential = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredentialOutputReference(this, "three_legged_oauth_credential");
  public get threeLeggedOauthCredential() {
    return this._threeLeggedOauthCredential;
  }
  public putThreeLeggedOauthCredential(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppThreeLeggedOauthCredential) {
    this._threeLeggedOauthCredential.internalValue = value;
  }
  public resetThreeLeggedOauthCredential() {
    this._threeLeggedOauthCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threeLeggedOauthCredentialInput() {
    return this._threeLeggedOauthCredential.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#multicloud_platform_url IdentityDomainsApp#multicloud_platform_url}
  */
  readonly multicloudPlatformUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#multicloud_service_type IdentityDomainsApp#multicloud_service_type}
  */
  readonly multicloudServiceType: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multicloud_platform_url: cdktf.stringToTerraform(struct!.multicloudPlatformUrl),
    multicloud_service_type: cdktf.stringToTerraform(struct!.multicloudServiceType),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multicloud_platform_url: {
      value: cdktf.stringToHclTerraform(struct!.multicloudPlatformUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multicloud_service_type: {
      value: cdktf.stringToHclTerraform(struct!.multicloudServiceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multicloudPlatformUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicloudPlatformUrl = this._multicloudPlatformUrl;
    }
    if (this._multicloudServiceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.multicloudServiceType = this._multicloudServiceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multicloudPlatformUrl = undefined;
      this._multicloudServiceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multicloudPlatformUrl = value.multicloudPlatformUrl;
      this._multicloudServiceType = value.multicloudServiceType;
    }
  }

  // multicloud_platform_url - computed: true, optional: true, required: false
  private _multicloudPlatformUrl?: string; 
  public get multicloudPlatformUrl() {
    return this.getStringAttribute('multicloud_platform_url');
  }
  public set multicloudPlatformUrl(value: string) {
    this._multicloudPlatformUrl = value;
  }
  public resetMulticloudPlatformUrl() {
    this._multicloudPlatformUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicloudPlatformUrlInput() {
    return this._multicloudPlatformUrl;
  }

  // multicloud_service_type - computed: false, optional: false, required: true
  private _multicloudServiceType?: string; 
  public get multicloudServiceType() {
    return this.getStringAttribute('multicloud_service_type');
  }
  public set multicloudServiceType(value: string) {
    this._multicloudServiceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get multicloudServiceTypeInput() {
    return this._multicloudServiceType;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#service_instance_identifier IdentityDomainsApp#service_instance_identifier}
  */
  readonly serviceInstanceIdentifier?: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_instance_identifier: cdktf.stringToTerraform(struct!.serviceInstanceIdentifier),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_instance_identifier: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceInstanceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceIdentifier = this._serviceInstanceIdentifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceInstanceIdentifier = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceInstanceIdentifier = value.serviceInstanceIdentifier;
    }
  }

  // current_federation_mode - computed: true, optional: false, required: false
  public get currentFederationMode() {
    return this.getStringAttribute('current_federation_mode');
  }

  // current_synchronization_mode - computed: true, optional: false, required: false
  public get currentSynchronizationMode() {
    return this.getStringAttribute('current_synchronization_mode');
  }

  // enabling_next_fed_sync_modes - computed: true, optional: false, required: false
  public get enablingNextFedSyncModes() {
    return this.getBooleanAttribute('enabling_next_fed_sync_modes');
  }

  // next_federation_mode - computed: true, optional: false, required: false
  public get nextFederationMode() {
    return this.getStringAttribute('next_federation_mode');
  }

  // next_synchronization_mode - computed: true, optional: false, required: false
  public get nextSynchronizationMode() {
    return this.getStringAttribute('next_synchronization_mode');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // service_instance_identifier - computed: true, optional: true, required: false
  private _serviceInstanceIdentifier?: string; 
  public get serviceInstanceIdentifier() {
    return this.getStringAttribute('service_instance_identifier');
  }
  public set serviceInstanceIdentifier(value: string) {
    this._serviceInstanceIdentifier = value;
  }
  public resetServiceInstanceIdentifier() {
    this._serviceInstanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceIdentifierInput() {
    return this._serviceInstanceIdentifier;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#value IdentityDomainsApp#value}
  */
  readonly value: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
    }
  }

  // display - computed: true, optional: false, required: false
  public get display() {
    return this.getStringAttribute('display');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: false, optional: false, required: true
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#capture_client_ip IdentityDomainsApp#capture_client_ip}
  */
  readonly captureClientIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#client_ip IdentityDomainsApp#client_ip}
  */
  readonly clientIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#country_code_response_attribute_id IdentityDomainsApp#country_code_response_attribute_id}
  */
  readonly countryCodeResponseAttributeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#end_user_ip_attribute IdentityDomainsApp#end_user_ip_attribute}
  */
  readonly endUserIpAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#group_membership_radius_attribute IdentityDomainsApp#group_membership_radius_attribute}
  */
  readonly groupMembershipRadiusAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#group_name_format IdentityDomainsApp#group_name_format}
  */
  readonly groupNameFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#include_group_in_response IdentityDomainsApp#include_group_in_response}
  */
  readonly includeGroupInResponse: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#password_and_otp_together IdentityDomainsApp#password_and_otp_together}
  */
  readonly passwordAndOtpTogether?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#port IdentityDomainsApp#port}
  */
  readonly port: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#radius_vendor_specific_id IdentityDomainsApp#radius_vendor_specific_id}
  */
  readonly radiusVendorSpecificId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#response_format IdentityDomainsApp#response_format}
  */
  readonly responseFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#response_format_delimiter IdentityDomainsApp#response_format_delimiter}
  */
  readonly responseFormatDelimiter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#secret_key IdentityDomainsApp#secret_key}
  */
  readonly secretKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#type_of_radius_app IdentityDomainsApp#type_of_radius_app}
  */
  readonly typeOfRadiusApp?: string;
  /**
  * group_membership_to_return block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#group_membership_to_return IdentityDomainsApp#group_membership_to_return}
  */
  readonly groupMembershipToReturn?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn[] | cdktf.IResolvable;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    capture_client_ip: cdktf.booleanToTerraform(struct!.captureClientIp),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    country_code_response_attribute_id: cdktf.stringToTerraform(struct!.countryCodeResponseAttributeId),
    end_user_ip_attribute: cdktf.stringToTerraform(struct!.endUserIpAttribute),
    group_membership_radius_attribute: cdktf.stringToTerraform(struct!.groupMembershipRadiusAttribute),
    group_name_format: cdktf.stringToTerraform(struct!.groupNameFormat),
    include_group_in_response: cdktf.booleanToTerraform(struct!.includeGroupInResponse),
    password_and_otp_together: cdktf.booleanToTerraform(struct!.passwordAndOtpTogether),
    port: cdktf.stringToTerraform(struct!.port),
    radius_vendor_specific_id: cdktf.stringToTerraform(struct!.radiusVendorSpecificId),
    response_format: cdktf.stringToTerraform(struct!.responseFormat),
    response_format_delimiter: cdktf.stringToTerraform(struct!.responseFormatDelimiter),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    type_of_radius_app: cdktf.stringToTerraform(struct!.typeOfRadiusApp),
    group_membership_to_return: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnToTerraform, true)(struct!.groupMembershipToReturn),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    capture_client_ip: {
      value: cdktf.booleanToHclTerraform(struct!.captureClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    country_code_response_attribute_id: {
      value: cdktf.stringToHclTerraform(struct!.countryCodeResponseAttributeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_user_ip_attribute: {
      value: cdktf.stringToHclTerraform(struct!.endUserIpAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_membership_radius_attribute: {
      value: cdktf.stringToHclTerraform(struct!.groupMembershipRadiusAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name_format: {
      value: cdktf.stringToHclTerraform(struct!.groupNameFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include_group_in_response: {
      value: cdktf.booleanToHclTerraform(struct!.includeGroupInResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_and_otp_together: {
      value: cdktf.booleanToHclTerraform(struct!.passwordAndOtpTogether),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_vendor_specific_id: {
      value: cdktf.stringToHclTerraform(struct!.radiusVendorSpecificId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_format: {
      value: cdktf.stringToHclTerraform(struct!.responseFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_format_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.responseFormatDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type_of_radius_app: {
      value: cdktf.stringToHclTerraform(struct!.typeOfRadiusApp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_membership_to_return: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnToHclTerraform, true)(struct!.groupMembershipToReturn),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captureClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.captureClientIp = this._captureClientIp;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._countryCodeResponseAttributeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCodeResponseAttributeId = this._countryCodeResponseAttributeId;
    }
    if (this._endUserIpAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.endUserIpAttribute = this._endUserIpAttribute;
    }
    if (this._groupMembershipRadiusAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMembershipRadiusAttribute = this._groupMembershipRadiusAttribute;
    }
    if (this._groupNameFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupNameFormat = this._groupNameFormat;
    }
    if (this._includeGroupInResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeGroupInResponse = this._includeGroupInResponse;
    }
    if (this._passwordAndOtpTogether !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordAndOtpTogether = this._passwordAndOtpTogether;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._radiusVendorSpecificId !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusVendorSpecificId = this._radiusVendorSpecificId;
    }
    if (this._responseFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFormat = this._responseFormat;
    }
    if (this._responseFormatDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFormatDelimiter = this._responseFormatDelimiter;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._typeOfRadiusApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeOfRadiusApp = this._typeOfRadiusApp;
    }
    if (this._groupMembershipToReturn?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupMembershipToReturn = this._groupMembershipToReturn?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captureClientIp = undefined;
      this._clientIp = undefined;
      this._countryCodeResponseAttributeId = undefined;
      this._endUserIpAttribute = undefined;
      this._groupMembershipRadiusAttribute = undefined;
      this._groupNameFormat = undefined;
      this._includeGroupInResponse = undefined;
      this._passwordAndOtpTogether = undefined;
      this._port = undefined;
      this._radiusVendorSpecificId = undefined;
      this._responseFormat = undefined;
      this._responseFormatDelimiter = undefined;
      this._secretKey = undefined;
      this._typeOfRadiusApp = undefined;
      this._groupMembershipToReturn.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captureClientIp = value.captureClientIp;
      this._clientIp = value.clientIp;
      this._countryCodeResponseAttributeId = value.countryCodeResponseAttributeId;
      this._endUserIpAttribute = value.endUserIpAttribute;
      this._groupMembershipRadiusAttribute = value.groupMembershipRadiusAttribute;
      this._groupNameFormat = value.groupNameFormat;
      this._includeGroupInResponse = value.includeGroupInResponse;
      this._passwordAndOtpTogether = value.passwordAndOtpTogether;
      this._port = value.port;
      this._radiusVendorSpecificId = value.radiusVendorSpecificId;
      this._responseFormat = value.responseFormat;
      this._responseFormatDelimiter = value.responseFormatDelimiter;
      this._secretKey = value.secretKey;
      this._typeOfRadiusApp = value.typeOfRadiusApp;
      this._groupMembershipToReturn.internalValue = value.groupMembershipToReturn;
    }
  }

  // capture_client_ip - computed: true, optional: true, required: false
  private _captureClientIp?: boolean | cdktf.IResolvable; 
  public get captureClientIp() {
    return this.getBooleanAttribute('capture_client_ip');
  }
  public set captureClientIp(value: boolean | cdktf.IResolvable) {
    this._captureClientIp = value;
  }
  public resetCaptureClientIp() {
    this._captureClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureClientIpInput() {
    return this._captureClientIp;
  }

  // client_ip - computed: false, optional: false, required: true
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // country_code_response_attribute_id - computed: true, optional: true, required: false
  private _countryCodeResponseAttributeId?: string; 
  public get countryCodeResponseAttributeId() {
    return this.getStringAttribute('country_code_response_attribute_id');
  }
  public set countryCodeResponseAttributeId(value: string) {
    this._countryCodeResponseAttributeId = value;
  }
  public resetCountryCodeResponseAttributeId() {
    this._countryCodeResponseAttributeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeResponseAttributeIdInput() {
    return this._countryCodeResponseAttributeId;
  }

  // end_user_ip_attribute - computed: true, optional: true, required: false
  private _endUserIpAttribute?: string; 
  public get endUserIpAttribute() {
    return this.getStringAttribute('end_user_ip_attribute');
  }
  public set endUserIpAttribute(value: string) {
    this._endUserIpAttribute = value;
  }
  public resetEndUserIpAttribute() {
    this._endUserIpAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserIpAttributeInput() {
    return this._endUserIpAttribute;
  }

  // group_membership_radius_attribute - computed: true, optional: true, required: false
  private _groupMembershipRadiusAttribute?: string; 
  public get groupMembershipRadiusAttribute() {
    return this.getStringAttribute('group_membership_radius_attribute');
  }
  public set groupMembershipRadiusAttribute(value: string) {
    this._groupMembershipRadiusAttribute = value;
  }
  public resetGroupMembershipRadiusAttribute() {
    this._groupMembershipRadiusAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipRadiusAttributeInput() {
    return this._groupMembershipRadiusAttribute;
  }

  // group_name_format - computed: true, optional: true, required: false
  private _groupNameFormat?: string; 
  public get groupNameFormat() {
    return this.getStringAttribute('group_name_format');
  }
  public set groupNameFormat(value: string) {
    this._groupNameFormat = value;
  }
  public resetGroupNameFormat() {
    this._groupNameFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameFormatInput() {
    return this._groupNameFormat;
  }

  // include_group_in_response - computed: false, optional: false, required: true
  private _includeGroupInResponse?: boolean | cdktf.IResolvable; 
  public get includeGroupInResponse() {
    return this.getBooleanAttribute('include_group_in_response');
  }
  public set includeGroupInResponse(value: boolean | cdktf.IResolvable) {
    this._includeGroupInResponse = value;
  }
  // Temporarily expose input value. Use with caution.
  public get includeGroupInResponseInput() {
    return this._includeGroupInResponse;
  }

  // password_and_otp_together - computed: true, optional: true, required: false
  private _passwordAndOtpTogether?: boolean | cdktf.IResolvable; 
  public get passwordAndOtpTogether() {
    return this.getBooleanAttribute('password_and_otp_together');
  }
  public set passwordAndOtpTogether(value: boolean | cdktf.IResolvable) {
    this._passwordAndOtpTogether = value;
  }
  public resetPasswordAndOtpTogether() {
    this._passwordAndOtpTogether = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordAndOtpTogetherInput() {
    return this._passwordAndOtpTogether;
  }

  // port - computed: false, optional: false, required: true
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // radius_vendor_specific_id - computed: true, optional: true, required: false
  private _radiusVendorSpecificId?: string; 
  public get radiusVendorSpecificId() {
    return this.getStringAttribute('radius_vendor_specific_id');
  }
  public set radiusVendorSpecificId(value: string) {
    this._radiusVendorSpecificId = value;
  }
  public resetRadiusVendorSpecificId() {
    this._radiusVendorSpecificId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusVendorSpecificIdInput() {
    return this._radiusVendorSpecificId;
  }

  // response_format - computed: true, optional: true, required: false
  private _responseFormat?: string; 
  public get responseFormat() {
    return this.getStringAttribute('response_format');
  }
  public set responseFormat(value: string) {
    this._responseFormat = value;
  }
  public resetResponseFormat() {
    this._responseFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFormatInput() {
    return this._responseFormat;
  }

  // response_format_delimiter - computed: true, optional: true, required: false
  private _responseFormatDelimiter?: string; 
  public get responseFormatDelimiter() {
    return this.getStringAttribute('response_format_delimiter');
  }
  public set responseFormatDelimiter(value: string) {
    this._responseFormatDelimiter = value;
  }
  public resetResponseFormatDelimiter() {
    this._responseFormatDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFormatDelimiterInput() {
    return this._responseFormatDelimiter;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // type_of_radius_app - computed: true, optional: true, required: false
  private _typeOfRadiusApp?: string; 
  public get typeOfRadiusApp() {
    return this.getStringAttribute('type_of_radius_app');
  }
  public set typeOfRadiusApp(value: string) {
    this._typeOfRadiusApp = value;
  }
  public resetTypeOfRadiusApp() {
    this._typeOfRadiusApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeOfRadiusAppInput() {
    return this._typeOfRadiusApp;
  }

  // group_membership_to_return - computed: false, optional: true, required: false
  private _groupMembershipToReturn = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturnList(this, "group_membership_to_return", true);
  public get groupMembershipToReturn() {
    return this._groupMembershipToReturn;
  }
  public putGroupMembershipToReturn(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppGroupMembershipToReturn[] | cdktf.IResolvable) {
    this._groupMembershipToReturn.internalValue = value;
  }
  public resetGroupMembershipToReturn() {
    this._groupMembershipToReturn.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMembershipToReturnInput() {
    return this._groupMembershipToReturn.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#requestable IdentityDomainsApp#requestable}
  */
  readonly requestable?: boolean | cdktf.IResolvable;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requestable: cdktf.booleanToTerraform(struct!.requestable),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    requestable: {
      value: cdktf.booleanToHclTerraform(struct!.requestable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requestable !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestable = this._requestable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requestable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requestable = value.requestable;
    }
  }

  // requestable - computed: true, optional: true, required: false
  private _requestable?: boolean | cdktf.IResolvable; 
  public get requestable() {
    return this.getBooleanAttribute('requestable');
  }
  public set requestable(value: boolean | cdktf.IResolvable) {
    this._requestable = value;
  }
  public resetRequestable() {
    this._requestable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestableInput() {
    return this._requestable;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes {
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // direction - computed: true, optional: false, required: false
  public get direction() {
    return this.getStringAttribute('direction');
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesList extends cdktf.ComplexList {

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#condition IdentityDomainsApp#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#format IdentityDomainsApp#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#group_name IdentityDomainsApp#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name IdentityDomainsApp#name}
  */
  readonly name: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    format: cdktf.stringToTerraform(struct!.format),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition = undefined;
      this._format = undefined;
      this._groupName = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition = value.condition;
      this._format = value.format;
      this._groupName = value.groupName;
      this._name = value.name;
    }
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // group_name - computed: true, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#format IdentityDomainsApp#format}
  */
  readonly format?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name IdentityDomainsApp#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#user_store_attribute_name IdentityDomainsApp#user_store_attribute_name}
  */
  readonly userStoreAttributeName: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    name: cdktf.stringToTerraform(struct!.name),
    user_store_attribute_name: cdktf.stringToTerraform(struct!.userStoreAttributeName),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    format: {
      value: cdktf.stringToHclTerraform(struct!.format),
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
    user_store_attribute_name: {
      value: cdktf.stringToHclTerraform(struct!.userStoreAttributeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._userStoreAttributeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userStoreAttributeName = this._userStoreAttributeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._format = undefined;
      this._name = undefined;
      this._userStoreAttributeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._format = value.format;
      this._name = value.name;
      this._userStoreAttributeName = value.userStoreAttributeName;
    }
  }

  // format - computed: true, optional: true, required: false
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  public resetFormat() {
    this._format = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // user_store_attribute_name - computed: false, optional: false, required: true
  private _userStoreAttributeName?: string; 
  public get userStoreAttributeName() {
    return this.getStringAttribute('user_store_attribute_name');
  }
  public set userStoreAttributeName(value: string) {
    this._userStoreAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userStoreAttributeNameInput() {
    return this._userStoreAttributeName;
  }
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesList extends cdktf.ComplexList {
  public internalValue? : IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes[] | cdktf.IResolvable

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
  public get(index: number): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesOutputReference {
    return new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#assertion_consumer_url IdentityDomainsApp#assertion_consumer_url}
  */
  readonly assertionConsumerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#encrypt_assertion IdentityDomainsApp#encrypt_assertion}
  */
  readonly encryptAssertion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#encryption_algorithm IdentityDomainsApp#encryption_algorithm}
  */
  readonly encryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#encryption_certificate IdentityDomainsApp#encryption_certificate}
  */
  readonly encryptionCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#federation_protocol IdentityDomainsApp#federation_protocol}
  */
  readonly federationProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#hok_acs_url IdentityDomainsApp#hok_acs_url}
  */
  readonly hokAcsUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#hok_required IdentityDomainsApp#hok_required}
  */
  readonly hokRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#include_signing_cert_in_signature IdentityDomainsApp#include_signing_cert_in_signature}
  */
  readonly includeSigningCertInSignature?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#key_encryption_algorithm IdentityDomainsApp#key_encryption_algorithm}
  */
  readonly keyEncryptionAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#logout_binding IdentityDomainsApp#logout_binding}
  */
  readonly logoutBinding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#logout_enabled IdentityDomainsApp#logout_enabled}
  */
  readonly logoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#logout_request_url IdentityDomainsApp#logout_request_url}
  */
  readonly logoutRequestUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#logout_response_url IdentityDomainsApp#logout_response_url}
  */
  readonly logoutResponseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#metadata IdentityDomainsApp#metadata}
  */
  readonly metadata?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name_id_format IdentityDomainsApp#name_id_format}
  */
  readonly nameIdFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#name_id_userstore_attribute IdentityDomainsApp#name_id_userstore_attribute}
  */
  readonly nameIdUserstoreAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#partner_provider_id IdentityDomainsApp#partner_provider_id}
  */
  readonly partnerProviderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#partner_provider_pattern IdentityDomainsApp#partner_provider_pattern}
  */
  readonly partnerProviderPattern?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#sign_response_or_assertion IdentityDomainsApp#sign_response_or_assertion}
  */
  readonly signResponseOrAssertion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#signature_hash_algorithm IdentityDomainsApp#signature_hash_algorithm}
  */
  readonly signatureHashAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#signing_certificate IdentityDomainsApp#signing_certificate}
  */
  readonly signingCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#succinct_id IdentityDomainsApp#succinct_id}
  */
  readonly succinctId?: string;
  /**
  * group_assertion_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#group_assertion_attributes IdentityDomainsApp#group_assertion_attributes}
  */
  readonly groupAssertionAttributes?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes[] | cdktf.IResolvable;
  /**
  * user_assertion_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#user_assertion_attributes IdentityDomainsApp#user_assertion_attributes}
  */
  readonly userAssertionAttributes?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes[] | cdktf.IResolvable;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assertion_consumer_url: cdktf.stringToTerraform(struct!.assertionConsumerUrl),
    encrypt_assertion: cdktf.booleanToTerraform(struct!.encryptAssertion),
    encryption_algorithm: cdktf.stringToTerraform(struct!.encryptionAlgorithm),
    encryption_certificate: cdktf.stringToTerraform(struct!.encryptionCertificate),
    federation_protocol: cdktf.stringToTerraform(struct!.federationProtocol),
    hok_acs_url: cdktf.stringToTerraform(struct!.hokAcsUrl),
    hok_required: cdktf.booleanToTerraform(struct!.hokRequired),
    include_signing_cert_in_signature: cdktf.booleanToTerraform(struct!.includeSigningCertInSignature),
    key_encryption_algorithm: cdktf.stringToTerraform(struct!.keyEncryptionAlgorithm),
    logout_binding: cdktf.stringToTerraform(struct!.logoutBinding),
    logout_enabled: cdktf.booleanToTerraform(struct!.logoutEnabled),
    logout_request_url: cdktf.stringToTerraform(struct!.logoutRequestUrl),
    logout_response_url: cdktf.stringToTerraform(struct!.logoutResponseUrl),
    metadata: cdktf.stringToTerraform(struct!.metadata),
    name_id_format: cdktf.stringToTerraform(struct!.nameIdFormat),
    name_id_userstore_attribute: cdktf.stringToTerraform(struct!.nameIdUserstoreAttribute),
    partner_provider_id: cdktf.stringToTerraform(struct!.partnerProviderId),
    partner_provider_pattern: cdktf.stringToTerraform(struct!.partnerProviderPattern),
    sign_response_or_assertion: cdktf.stringToTerraform(struct!.signResponseOrAssertion),
    signature_hash_algorithm: cdktf.stringToTerraform(struct!.signatureHashAlgorithm),
    signing_certificate: cdktf.stringToTerraform(struct!.signingCertificate),
    succinct_id: cdktf.stringToTerraform(struct!.succinctId),
    group_assertion_attributes: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesToTerraform, true)(struct!.groupAssertionAttributes),
    user_assertion_attributes: cdktf.listMapper(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesToTerraform, true)(struct!.userAssertionAttributes),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assertion_consumer_url: {
      value: cdktf.stringToHclTerraform(struct!.assertionConsumerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_assertion: {
      value: cdktf.booleanToHclTerraform(struct!.encryptAssertion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.encryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_certificate: {
      value: cdktf.stringToHclTerraform(struct!.encryptionCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    federation_protocol: {
      value: cdktf.stringToHclTerraform(struct!.federationProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hok_acs_url: {
      value: cdktf.stringToHclTerraform(struct!.hokAcsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hok_required: {
      value: cdktf.booleanToHclTerraform(struct!.hokRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_signing_cert_in_signature: {
      value: cdktf.booleanToHclTerraform(struct!.includeSigningCertInSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.keyEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_binding: {
      value: cdktf.stringToHclTerraform(struct!.logoutBinding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.logoutEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_request_url: {
      value: cdktf.stringToHclTerraform(struct!.logoutRequestUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_response_url: {
      value: cdktf.stringToHclTerraform(struct!.logoutResponseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.stringToHclTerraform(struct!.metadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_format: {
      value: cdktf.stringToHclTerraform(struct!.nameIdFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_id_userstore_attribute: {
      value: cdktf.stringToHclTerraform(struct!.nameIdUserstoreAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_provider_id: {
      value: cdktf.stringToHclTerraform(struct!.partnerProviderId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partner_provider_pattern: {
      value: cdktf.stringToHclTerraform(struct!.partnerProviderPattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sign_response_or_assertion: {
      value: cdktf.stringToHclTerraform(struct!.signResponseOrAssertion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_hash_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.signatureHashAlgorithm),
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
    succinct_id: {
      value: cdktf.stringToHclTerraform(struct!.succinctId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_assertion_attributes: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesToHclTerraform, true)(struct!.groupAssertionAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesList",
    },
    user_assertion_attributes: {
      value: cdktf.listMapperHcl(identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesToHclTerraform, true)(struct!.userAssertionAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assertionConsumerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionConsumerUrl = this._assertionConsumerUrl;
    }
    if (this._encryptAssertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptAssertion = this._encryptAssertion;
    }
    if (this._encryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionAlgorithm = this._encryptionAlgorithm;
    }
    if (this._encryptionCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionCertificate = this._encryptionCertificate;
    }
    if (this._federationProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.federationProtocol = this._federationProtocol;
    }
    if (this._hokAcsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.hokAcsUrl = this._hokAcsUrl;
    }
    if (this._hokRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.hokRequired = this._hokRequired;
    }
    if (this._includeSigningCertInSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeSigningCertInSignature = this._includeSigningCertInSignature;
    }
    if (this._keyEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncryptionAlgorithm = this._keyEncryptionAlgorithm;
    }
    if (this._logoutBinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutBinding = this._logoutBinding;
    }
    if (this._logoutEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutEnabled = this._logoutEnabled;
    }
    if (this._logoutRequestUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutRequestUrl = this._logoutRequestUrl;
    }
    if (this._logoutResponseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutResponseUrl = this._logoutResponseUrl;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._nameIdFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdFormat = this._nameIdFormat;
    }
    if (this._nameIdUserstoreAttribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameIdUserstoreAttribute = this._nameIdUserstoreAttribute;
    }
    if (this._partnerProviderId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerProviderId = this._partnerProviderId;
    }
    if (this._partnerProviderPattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.partnerProviderPattern = this._partnerProviderPattern;
    }
    if (this._signResponseOrAssertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.signResponseOrAssertion = this._signResponseOrAssertion;
    }
    if (this._signatureHashAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureHashAlgorithm = this._signatureHashAlgorithm;
    }
    if (this._signingCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.signingCertificate = this._signingCertificate;
    }
    if (this._succinctId !== undefined) {
      hasAnyValues = true;
      internalValueResult.succinctId = this._succinctId;
    }
    if (this._groupAssertionAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAssertionAttributes = this._groupAssertionAttributes?.internalValue;
    }
    if (this._userAssertionAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAssertionAttributes = this._userAssertionAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assertionConsumerUrl = undefined;
      this._encryptAssertion = undefined;
      this._encryptionAlgorithm = undefined;
      this._encryptionCertificate = undefined;
      this._federationProtocol = undefined;
      this._hokAcsUrl = undefined;
      this._hokRequired = undefined;
      this._includeSigningCertInSignature = undefined;
      this._keyEncryptionAlgorithm = undefined;
      this._logoutBinding = undefined;
      this._logoutEnabled = undefined;
      this._logoutRequestUrl = undefined;
      this._logoutResponseUrl = undefined;
      this._metadata = undefined;
      this._nameIdFormat = undefined;
      this._nameIdUserstoreAttribute = undefined;
      this._partnerProviderId = undefined;
      this._partnerProviderPattern = undefined;
      this._signResponseOrAssertion = undefined;
      this._signatureHashAlgorithm = undefined;
      this._signingCertificate = undefined;
      this._succinctId = undefined;
      this._groupAssertionAttributes.internalValue = undefined;
      this._userAssertionAttributes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assertionConsumerUrl = value.assertionConsumerUrl;
      this._encryptAssertion = value.encryptAssertion;
      this._encryptionAlgorithm = value.encryptionAlgorithm;
      this._encryptionCertificate = value.encryptionCertificate;
      this._federationProtocol = value.federationProtocol;
      this._hokAcsUrl = value.hokAcsUrl;
      this._hokRequired = value.hokRequired;
      this._includeSigningCertInSignature = value.includeSigningCertInSignature;
      this._keyEncryptionAlgorithm = value.keyEncryptionAlgorithm;
      this._logoutBinding = value.logoutBinding;
      this._logoutEnabled = value.logoutEnabled;
      this._logoutRequestUrl = value.logoutRequestUrl;
      this._logoutResponseUrl = value.logoutResponseUrl;
      this._metadata = value.metadata;
      this._nameIdFormat = value.nameIdFormat;
      this._nameIdUserstoreAttribute = value.nameIdUserstoreAttribute;
      this._partnerProviderId = value.partnerProviderId;
      this._partnerProviderPattern = value.partnerProviderPattern;
      this._signResponseOrAssertion = value.signResponseOrAssertion;
      this._signatureHashAlgorithm = value.signatureHashAlgorithm;
      this._signingCertificate = value.signingCertificate;
      this._succinctId = value.succinctId;
      this._groupAssertionAttributes.internalValue = value.groupAssertionAttributes;
      this._userAssertionAttributes.internalValue = value.userAssertionAttributes;
    }
  }

  // assertion_consumer_url - computed: true, optional: true, required: false
  private _assertionConsumerUrl?: string; 
  public get assertionConsumerUrl() {
    return this.getStringAttribute('assertion_consumer_url');
  }
  public set assertionConsumerUrl(value: string) {
    this._assertionConsumerUrl = value;
  }
  public resetAssertionConsumerUrl() {
    this._assertionConsumerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionConsumerUrlInput() {
    return this._assertionConsumerUrl;
  }

  // encrypt_assertion - computed: true, optional: true, required: false
  private _encryptAssertion?: boolean | cdktf.IResolvable; 
  public get encryptAssertion() {
    return this.getBooleanAttribute('encrypt_assertion');
  }
  public set encryptAssertion(value: boolean | cdktf.IResolvable) {
    this._encryptAssertion = value;
  }
  public resetEncryptAssertion() {
    this._encryptAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptAssertionInput() {
    return this._encryptAssertion;
  }

  // encryption_algorithm - computed: true, optional: true, required: false
  private _encryptionAlgorithm?: string; 
  public get encryptionAlgorithm() {
    return this.getStringAttribute('encryption_algorithm');
  }
  public set encryptionAlgorithm(value: string) {
    this._encryptionAlgorithm = value;
  }
  public resetEncryptionAlgorithm() {
    this._encryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionAlgorithmInput() {
    return this._encryptionAlgorithm;
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

  // federation_protocol - computed: true, optional: true, required: false
  private _federationProtocol?: string; 
  public get federationProtocol() {
    return this.getStringAttribute('federation_protocol');
  }
  public set federationProtocol(value: string) {
    this._federationProtocol = value;
  }
  public resetFederationProtocol() {
    this._federationProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get federationProtocolInput() {
    return this._federationProtocol;
  }

  // hok_acs_url - computed: true, optional: true, required: false
  private _hokAcsUrl?: string; 
  public get hokAcsUrl() {
    return this.getStringAttribute('hok_acs_url');
  }
  public set hokAcsUrl(value: string) {
    this._hokAcsUrl = value;
  }
  public resetHokAcsUrl() {
    this._hokAcsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hokAcsUrlInput() {
    return this._hokAcsUrl;
  }

  // hok_required - computed: true, optional: true, required: false
  private _hokRequired?: boolean | cdktf.IResolvable; 
  public get hokRequired() {
    return this.getBooleanAttribute('hok_required');
  }
  public set hokRequired(value: boolean | cdktf.IResolvable) {
    this._hokRequired = value;
  }
  public resetHokRequired() {
    this._hokRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hokRequiredInput() {
    return this._hokRequired;
  }

  // include_signing_cert_in_signature - computed: true, optional: true, required: false
  private _includeSigningCertInSignature?: boolean | cdktf.IResolvable; 
  public get includeSigningCertInSignature() {
    return this.getBooleanAttribute('include_signing_cert_in_signature');
  }
  public set includeSigningCertInSignature(value: boolean | cdktf.IResolvable) {
    this._includeSigningCertInSignature = value;
  }
  public resetIncludeSigningCertInSignature() {
    this._includeSigningCertInSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeSigningCertInSignatureInput() {
    return this._includeSigningCertInSignature;
  }

  // key_encryption_algorithm - computed: true, optional: true, required: false
  private _keyEncryptionAlgorithm?: string; 
  public get keyEncryptionAlgorithm() {
    return this.getStringAttribute('key_encryption_algorithm');
  }
  public set keyEncryptionAlgorithm(value: string) {
    this._keyEncryptionAlgorithm = value;
  }
  public resetKeyEncryptionAlgorithm() {
    this._keyEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEncryptionAlgorithmInput() {
    return this._keyEncryptionAlgorithm;
  }

  // last_notification_sent_time - computed: true, optional: false, required: false
  public get lastNotificationSentTime() {
    return this.getStringAttribute('last_notification_sent_time');
  }

  // logout_binding - computed: true, optional: true, required: false
  private _logoutBinding?: string; 
  public get logoutBinding() {
    return this.getStringAttribute('logout_binding');
  }
  public set logoutBinding(value: string) {
    this._logoutBinding = value;
  }
  public resetLogoutBinding() {
    this._logoutBinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutBindingInput() {
    return this._logoutBinding;
  }

  // logout_enabled - computed: true, optional: true, required: false
  private _logoutEnabled?: boolean | cdktf.IResolvable; 
  public get logoutEnabled() {
    return this.getBooleanAttribute('logout_enabled');
  }
  public set logoutEnabled(value: boolean | cdktf.IResolvable) {
    this._logoutEnabled = value;
  }
  public resetLogoutEnabled() {
    this._logoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutEnabledInput() {
    return this._logoutEnabled;
  }

  // logout_request_url - computed: true, optional: true, required: false
  private _logoutRequestUrl?: string; 
  public get logoutRequestUrl() {
    return this.getStringAttribute('logout_request_url');
  }
  public set logoutRequestUrl(value: string) {
    this._logoutRequestUrl = value;
  }
  public resetLogoutRequestUrl() {
    this._logoutRequestUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutRequestUrlInput() {
    return this._logoutRequestUrl;
  }

  // logout_response_url - computed: true, optional: true, required: false
  private _logoutResponseUrl?: string; 
  public get logoutResponseUrl() {
    return this.getStringAttribute('logout_response_url');
  }
  public set logoutResponseUrl(value: string) {
    this._logoutResponseUrl = value;
  }
  public resetLogoutResponseUrl() {
    this._logoutResponseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutResponseUrlInput() {
    return this._logoutResponseUrl;
  }

  // metadata - computed: true, optional: true, required: false
  private _metadata?: string; 
  public get metadata() {
    return this.getStringAttribute('metadata');
  }
  public set metadata(value: string) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
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

  // name_id_userstore_attribute - computed: true, optional: true, required: false
  private _nameIdUserstoreAttribute?: string; 
  public get nameIdUserstoreAttribute() {
    return this.getStringAttribute('name_id_userstore_attribute');
  }
  public set nameIdUserstoreAttribute(value: string) {
    this._nameIdUserstoreAttribute = value;
  }
  public resetNameIdUserstoreAttribute() {
    this._nameIdUserstoreAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameIdUserstoreAttributeInput() {
    return this._nameIdUserstoreAttribute;
  }

  // outbound_assertion_attributes - computed: true, optional: false, required: false
  private _outboundAssertionAttributes = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutboundAssertionAttributesList(this, "outbound_assertion_attributes", false);
  public get outboundAssertionAttributes() {
    return this._outboundAssertionAttributes;
  }

  // partner_provider_id - computed: true, optional: true, required: false
  private _partnerProviderId?: string; 
  public get partnerProviderId() {
    return this.getStringAttribute('partner_provider_id');
  }
  public set partnerProviderId(value: string) {
    this._partnerProviderId = value;
  }
  public resetPartnerProviderId() {
    this._partnerProviderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerProviderIdInput() {
    return this._partnerProviderId;
  }

  // partner_provider_pattern - computed: true, optional: true, required: false
  private _partnerProviderPattern?: string; 
  public get partnerProviderPattern() {
    return this.getStringAttribute('partner_provider_pattern');
  }
  public set partnerProviderPattern(value: string) {
    this._partnerProviderPattern = value;
  }
  public resetPartnerProviderPattern() {
    this._partnerProviderPattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerProviderPatternInput() {
    return this._partnerProviderPattern;
  }

  // sign_response_or_assertion - computed: true, optional: true, required: false
  private _signResponseOrAssertion?: string; 
  public get signResponseOrAssertion() {
    return this.getStringAttribute('sign_response_or_assertion');
  }
  public set signResponseOrAssertion(value: string) {
    this._signResponseOrAssertion = value;
  }
  public resetSignResponseOrAssertion() {
    this._signResponseOrAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signResponseOrAssertionInput() {
    return this._signResponseOrAssertion;
  }

  // signature_hash_algorithm - computed: true, optional: true, required: false
  private _signatureHashAlgorithm?: string; 
  public get signatureHashAlgorithm() {
    return this.getStringAttribute('signature_hash_algorithm');
  }
  public set signatureHashAlgorithm(value: string) {
    this._signatureHashAlgorithm = value;
  }
  public resetSignatureHashAlgorithm() {
    this._signatureHashAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureHashAlgorithmInput() {
    return this._signatureHashAlgorithm;
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

  // succinct_id - computed: true, optional: true, required: false
  private _succinctId?: string; 
  public get succinctId() {
    return this.getStringAttribute('succinct_id');
  }
  public set succinctId(value: string) {
    this._succinctId = value;
  }
  public resetSuccinctId() {
    this._succinctId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get succinctIdInput() {
    return this._succinctId;
  }

  // tenant_provider_id - computed: true, optional: false, required: false
  public get tenantProviderId() {
    return this.getStringAttribute('tenant_provider_id');
  }

  // group_assertion_attributes - computed: false, optional: true, required: false
  private _groupAssertionAttributes = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributesList(this, "group_assertion_attributes", true);
  public get groupAssertionAttributes() {
    return this._groupAssertionAttributes;
  }
  public putGroupAssertionAttributes(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppGroupAssertionAttributes[] | cdktf.IResolvable) {
    this._groupAssertionAttributes.internalValue = value;
  }
  public resetGroupAssertionAttributes() {
    this._groupAssertionAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAssertionAttributesInput() {
    return this._groupAssertionAttributes.internalValue;
  }

  // user_assertion_attributes - computed: false, optional: true, required: false
  private _userAssertionAttributes = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributesList(this, "user_assertion_attributes", true);
  public get userAssertionAttributes() {
    return this._userAssertionAttributes;
  }
  public putUserAssertionAttributes(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppUserAssertionAttributes[] | cdktf.IResolvable) {
    this._userAssertionAttributes.internalValue = value;
  }
  public resetUserAssertionAttributes() {
    this._userAssertionAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAssertionAttributesInput() {
    return this._userAssertionAttributes.internalValue;
  }
}
export interface IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#resource_ref IdentityDomainsApp#resource_ref}
  */
  readonly resourceRef?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#web_tier_policy_az_control IdentityDomainsApp#web_tier_policy_az_control}
  */
  readonly webTierPolicyAzControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#web_tier_policy_json IdentityDomainsApp#web_tier_policy_json}
  */
  readonly webTierPolicyJson?: string;
}

export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppToTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_ref: cdktf.booleanToTerraform(struct!.resourceRef),
    web_tier_policy_az_control: cdktf.stringToTerraform(struct!.webTierPolicyAzControl),
    web_tier_policy_json: cdktf.stringToTerraform(struct!.webTierPolicyJson),
  }
}


export function identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppToHclTerraform(struct?: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppOutputReference | IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_ref: {
      value: cdktf.booleanToHclTerraform(struct!.resourceRef),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    web_tier_policy_az_control: {
      value: cdktf.stringToHclTerraform(struct!.webTierPolicyAzControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_tier_policy_json: {
      value: cdktf.stringToHclTerraform(struct!.webTierPolicyJson),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceRef = this._resourceRef;
    }
    if (this._webTierPolicyAzControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTierPolicyAzControl = this._webTierPolicyAzControl;
    }
    if (this._webTierPolicyJson !== undefined) {
      hasAnyValues = true;
      internalValueResult.webTierPolicyJson = this._webTierPolicyJson;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceRef = undefined;
      this._webTierPolicyAzControl = undefined;
      this._webTierPolicyJson = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceRef = value.resourceRef;
      this._webTierPolicyAzControl = value.webTierPolicyAzControl;
      this._webTierPolicyJson = value.webTierPolicyJson;
    }
  }

  // resource_ref - computed: true, optional: true, required: false
  private _resourceRef?: boolean | cdktf.IResolvable; 
  public get resourceRef() {
    return this.getBooleanAttribute('resource_ref');
  }
  public set resourceRef(value: boolean | cdktf.IResolvable) {
    this._resourceRef = value;
  }
  public resetResourceRef() {
    this._resourceRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceRefInput() {
    return this._resourceRef;
  }

  // web_tier_policy_az_control - computed: true, optional: true, required: false
  private _webTierPolicyAzControl?: string; 
  public get webTierPolicyAzControl() {
    return this.getStringAttribute('web_tier_policy_az_control');
  }
  public set webTierPolicyAzControl(value: string) {
    this._webTierPolicyAzControl = value;
  }
  public resetWebTierPolicyAzControl() {
    this._webTierPolicyAzControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTierPolicyAzControlInput() {
    return this._webTierPolicyAzControl;
  }

  // web_tier_policy_json - computed: true, optional: true, required: false
  private _webTierPolicyJson?: string; 
  public get webTierPolicyJson() {
    return this.getStringAttribute('web_tier_policy_json');
  }
  public set webTierPolicyJson(value: string) {
    this._webTierPolicyJson = value;
  }
  public resetWebTierPolicyJson() {
    this._webTierPolicyJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webTierPolicyJsonInput() {
    return this._webTierPolicyJson;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app oci_identity_domains_app}
*/
export class IdentityDomainsApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_identity_domains_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdentityDomainsApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdentityDomainsApp to import
  * @param importFromId The id of the existing IdentityDomainsApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdentityDomainsApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_identity_domains_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/identity_domains_app oci_identity_domains_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdentityDomainsAppConfig
  */
  public constructor(scope: Construct, id: string, config: IdentityDomainsAppConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_identity_domains_app',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenExpiry = config.accessTokenExpiry;
    this._active = config.active;
    this._allUrlSchemesAllowed = config.allUrlSchemesAllowed;
    this._allowAccessControl = config.allowAccessControl;
    this._allowOffline = config.allowOffline;
    this._allowedGrants = config.allowedGrants;
    this._allowedOperations = config.allowedOperations;
    this._appIcon = config.appIcon;
    this._appThumbnail = config.appThumbnail;
    this._attributeSets = config.attributeSets;
    this._attributes = config.attributes;
    this._audience = config.audience;
    this._authorization = config.authorization;
    this._bypassConsent = config.bypassConsent;
    this._clientIpChecking = config.clientIpChecking;
    this._clientType = config.clientType;
    this._contactEmailAddress = config.contactEmailAddress;
    this._delegatedServiceNames = config.delegatedServiceNames;
    this._description = config.description;
    this._disableKmsiTokenAuthentication = config.disableKmsiTokenAuthentication;
    this._displayName = config.displayName;
    this._errorPageUrl = config.errorPageUrl;
    this._forceDelete = config.forceDelete;
    this._homePageUrl = config.homePageUrl;
    this._icon = config.icon;
    this._idTokenEncAlgo = config.idTokenEncAlgo;
    this._idcsEndpoint = config.idcsEndpoint;
    this._isAliasApp = config.isAliasApp;
    this._isEnterpriseApp = config.isEnterpriseApp;
    this._isFormFill = config.isFormFill;
    this._isKerberosRealm = config.isKerberosRealm;
    this._isLoginTarget = config.isLoginTarget;
    this._isMobileTarget = config.isMobileTarget;
    this._isMulticloudServiceApp = config.isMulticloudServiceApp;
    this._isOauthClient = config.isOauthClient;
    this._isOauthResource = config.isOauthResource;
    this._isObligationCapable = config.isObligationCapable;
    this._isRadiusApp = config.isRadiusApp;
    this._isSamlServiceProvider = config.isSamlServiceProvider;
    this._isUnmanagedApp = config.isUnmanagedApp;
    this._isWebTierPolicy = config.isWebTierPolicy;
    this._landingPageUrl = config.landingPageUrl;
    this._linkingCallbackUrl = config.linkingCallbackUrl;
    this._loginMechanism = config.loginMechanism;
    this._loginPageUrl = config.loginPageUrl;
    this._logoutPageUrl = config.logoutPageUrl;
    this._logoutUri = config.logoutUri;
    this._name = config.name;
    this._ocid = config.ocid;
    this._postLogoutRedirectUris = config.postLogoutRedirectUris;
    this._privacyPolicyUrl = config.privacyPolicyUrl;
    this._productLogoUrl = config.productLogoUrl;
    this._productName = config.productName;
    this._redirectUris = config.redirectUris;
    this._refreshTokenExpiry = config.refreshTokenExpiry;
    this._resourceTypeSchemaVersion = config.resourceTypeSchemaVersion;
    this._schemas = config.schemas;
    this._secondaryAudiences = config.secondaryAudiences;
    this._serviceTypeUrn = config.serviceTypeUrn;
    this._serviceTypeVersion = config.serviceTypeVersion;
    this._showInMyApps = config.showInMyApps;
    this._termsOfServiceUrl = config.termsOfServiceUrl;
    this._trustScope = config.trustScope;
    this._aliasApps.internalValue = config.aliasApps;
    this._allowedScopes.internalValue = config.allowedScopes;
    this._allowedTags.internalValue = config.allowedTags;
    this._appSignonPolicy.internalValue = config.appSignonPolicy;
    this._appsNetworkPerimeters.internalValue = config.appsNetworkPerimeters;
    this._asOpcService.internalValue = config.asOpcService;
    this._attrRenderingMetadata.internalValue = config.attrRenderingMetadata;
    this._basedOnTemplate.internalValue = config.basedOnTemplate;
    this._certificates.internalValue = config.certificates;
    this._identityProviders.internalValue = config.identityProviders;
    this._idpPolicy.internalValue = config.idpPolicy;
    this._protectableSecondaryAudiences.internalValue = config.protectableSecondaryAudiences;
    this._radiusPolicy.internalValue = config.radiusPolicy;
    this._samlServiceProvider.internalValue = config.samlServiceProvider;
    this._scopes.internalValue = config.scopes;
    this._serviceParams.internalValue = config.serviceParams;
    this._signonPolicy.internalValue = config.signonPolicy;
    this._tags.internalValue = config.tags;
    this._termsOfUse.internalValue = config.termsOfUse;
    this._timeouts.internalValue = config.timeouts;
    this._trustPolicies.internalValue = config.trustPolicies;
    this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue = config.urnietfparamsscimschemasoracleidcsextensionOciTags;
    this._urnietfparamsscimschemasoracleidcsextensiondbcsApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensiondbcsApp;
    this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp;
    this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionformFillAppApp;
    this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate.internalValue = config.urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate;
    this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp;
    this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionmanagedappApp;
    this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp;
    this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionopcServiceApp;
    this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionradiusAppApp;
    this._urnietfparamsscimschemasoracleidcsextensionrequestableApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionrequestableApp;
    this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp;
    this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp.internalValue = config.urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_expiry - computed: true, optional: true, required: false
  private _accessTokenExpiry?: number; 
  public get accessTokenExpiry() {
    return this.getNumberAttribute('access_token_expiry');
  }
  public set accessTokenExpiry(value: number) {
    this._accessTokenExpiry = value;
  }
  public resetAccessTokenExpiry() {
    this._accessTokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenExpiryInput() {
    return this._accessTokenExpiry;
  }

  // accounts - computed: true, optional: false, required: false
  private _accounts = new IdentityDomainsAppAccountsList(this, "accounts", false);
  public get accounts() {
    return this._accounts;
  }

  // active - computed: true, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // admin_roles - computed: true, optional: false, required: false
  private _adminRoles = new IdentityDomainsAppAdminRolesList(this, "admin_roles", false);
  public get adminRoles() {
    return this._adminRoles;
  }

  // all_url_schemes_allowed - computed: true, optional: true, required: false
  private _allUrlSchemesAllowed?: boolean | cdktf.IResolvable; 
  public get allUrlSchemesAllowed() {
    return this.getBooleanAttribute('all_url_schemes_allowed');
  }
  public set allUrlSchemesAllowed(value: boolean | cdktf.IResolvable) {
    this._allUrlSchemesAllowed = value;
  }
  public resetAllUrlSchemesAllowed() {
    this._allUrlSchemesAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUrlSchemesAllowedInput() {
    return this._allUrlSchemesAllowed;
  }

  // allow_access_control - computed: true, optional: true, required: false
  private _allowAccessControl?: boolean | cdktf.IResolvable; 
  public get allowAccessControl() {
    return this.getBooleanAttribute('allow_access_control');
  }
  public set allowAccessControl(value: boolean | cdktf.IResolvable) {
    this._allowAccessControl = value;
  }
  public resetAllowAccessControl() {
    this._allowAccessControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAccessControlInput() {
    return this._allowAccessControl;
  }

  // allow_offline - computed: true, optional: true, required: false
  private _allowOffline?: boolean | cdktf.IResolvable; 
  public get allowOffline() {
    return this.getBooleanAttribute('allow_offline');
  }
  public set allowOffline(value: boolean | cdktf.IResolvable) {
    this._allowOffline = value;
  }
  public resetAllowOffline() {
    this._allowOffline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOfflineInput() {
    return this._allowOffline;
  }

  // allowed_grants - computed: true, optional: true, required: false
  private _allowedGrants?: string[]; 
  public get allowedGrants() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_grants'));
  }
  public set allowedGrants(value: string[]) {
    this._allowedGrants = value;
  }
  public resetAllowedGrants() {
    this._allowedGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedGrantsInput() {
    return this._allowedGrants;
  }

  // allowed_operations - computed: true, optional: true, required: false
  private _allowedOperations?: string[]; 
  public get allowedOperations() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_operations'));
  }
  public set allowedOperations(value: string[]) {
    this._allowedOperations = value;
  }
  public resetAllowedOperations() {
    this._allowedOperations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOperationsInput() {
    return this._allowedOperations;
  }

  // app_icon - computed: true, optional: true, required: false
  private _appIcon?: string; 
  public get appIcon() {
    return this.getStringAttribute('app_icon');
  }
  public set appIcon(value: string) {
    this._appIcon = value;
  }
  public resetAppIcon() {
    this._appIcon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIconInput() {
    return this._appIcon;
  }

  // app_thumbnail - computed: true, optional: true, required: false
  private _appThumbnail?: string; 
  public get appThumbnail() {
    return this.getStringAttribute('app_thumbnail');
  }
  public set appThumbnail(value: string) {
    this._appThumbnail = value;
  }
  public resetAppThumbnail() {
    this._appThumbnail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appThumbnailInput() {
    return this._appThumbnail;
  }

  // attribute_sets - computed: false, optional: true, required: false
  private _attributeSets?: string[]; 
  public get attributeSets() {
    return this.getListAttribute('attribute_sets');
  }
  public set attributeSets(value: string[]) {
    this._attributeSets = value;
  }
  public resetAttributeSets() {
    this._attributeSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeSetsInput() {
    return this._attributeSets;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // audience - computed: true, optional: true, required: false
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

  // authorization - computed: false, optional: true, required: false
  private _authorization?: string; 
  public get authorization() {
    return this.getStringAttribute('authorization');
  }
  public set authorization(value: string) {
    this._authorization = value;
  }
  public resetAuthorization() {
    this._authorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization;
  }

  // bypass_consent - computed: true, optional: true, required: false
  private _bypassConsent?: boolean | cdktf.IResolvable; 
  public get bypassConsent() {
    return this.getBooleanAttribute('bypass_consent');
  }
  public set bypassConsent(value: boolean | cdktf.IResolvable) {
    this._bypassConsent = value;
  }
  public resetBypassConsent() {
    this._bypassConsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassConsentInput() {
    return this._bypassConsent;
  }

  // callback_service_url - computed: true, optional: false, required: false
  public get callbackServiceUrl() {
    return this.getStringAttribute('callback_service_url');
  }

  // client_ip_checking - computed: true, optional: true, required: false
  private _clientIpChecking?: string; 
  public get clientIpChecking() {
    return this.getStringAttribute('client_ip_checking');
  }
  public set clientIpChecking(value: string) {
    this._clientIpChecking = value;
  }
  public resetClientIpChecking() {
    this._clientIpChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpCheckingInput() {
    return this._clientIpChecking;
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_type - computed: true, optional: true, required: false
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  public resetClientType() {
    this._clientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // cloud_control_properties - computed: true, optional: false, required: false
  private _cloudControlProperties = new IdentityDomainsAppCloudControlPropertiesList(this, "cloud_control_properties", false);
  public get cloudControlProperties() {
    return this._cloudControlProperties;
  }

  // compartment_ocid - computed: true, optional: false, required: false
  public get compartmentOcid() {
    return this.getStringAttribute('compartment_ocid');
  }

  // contact_email_address - computed: true, optional: true, required: false
  private _contactEmailAddress?: string; 
  public get contactEmailAddress() {
    return this.getStringAttribute('contact_email_address');
  }
  public set contactEmailAddress(value: string) {
    this._contactEmailAddress = value;
  }
  public resetContactEmailAddress() {
    this._contactEmailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactEmailAddressInput() {
    return this._contactEmailAddress;
  }

  // delegated_service_names - computed: true, optional: true, required: false
  private _delegatedServiceNames?: string[]; 
  public get delegatedServiceNames() {
    return cdktf.Fn.tolist(this.getListAttribute('delegated_service_names'));
  }
  public set delegatedServiceNames(value: string[]) {
    this._delegatedServiceNames = value;
  }
  public resetDelegatedServiceNames() {
    this._delegatedServiceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delegatedServiceNamesInput() {
    return this._delegatedServiceNames;
  }

  // delete_in_progress - computed: true, optional: false, required: false
  public get deleteInProgress() {
    return this.getBooleanAttribute('delete_in_progress');
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

  // disable_kmsi_token_authentication - computed: true, optional: true, required: false
  private _disableKmsiTokenAuthentication?: boolean | cdktf.IResolvable; 
  public get disableKmsiTokenAuthentication() {
    return this.getBooleanAttribute('disable_kmsi_token_authentication');
  }
  public set disableKmsiTokenAuthentication(value: boolean | cdktf.IResolvable) {
    this._disableKmsiTokenAuthentication = value;
  }
  public resetDisableKmsiTokenAuthentication() {
    this._disableKmsiTokenAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableKmsiTokenAuthenticationInput() {
    return this._disableKmsiTokenAuthentication;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // domain_ocid - computed: true, optional: false, required: false
  public get domainOcid() {
    return this.getStringAttribute('domain_ocid');
  }

  // editable_attributes - computed: true, optional: false, required: false
  private _editableAttributes = new IdentityDomainsAppEditableAttributesList(this, "editable_attributes", false);
  public get editableAttributes() {
    return this._editableAttributes;
  }

  // error_page_url - computed: true, optional: true, required: false
  private _errorPageUrl?: string; 
  public get errorPageUrl() {
    return this.getStringAttribute('error_page_url');
  }
  public set errorPageUrl(value: string) {
    this._errorPageUrl = value;
  }
  public resetErrorPageUrl() {
    this._errorPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageUrlInput() {
    return this._errorPageUrl;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
  }

  // granted_app_roles - computed: true, optional: false, required: false
  private _grantedAppRoles = new IdentityDomainsAppGrantedAppRolesList(this, "granted_app_roles", false);
  public get grantedAppRoles() {
    return this._grantedAppRoles;
  }

  // grants - computed: true, optional: false, required: false
  private _grants = new IdentityDomainsAppGrantsList(this, "grants", false);
  public get grants() {
    return this._grants;
  }

  // hashed_client_secret - computed: true, optional: false, required: false
  public get hashedClientSecret() {
    return this.getStringAttribute('hashed_client_secret');
  }

  // home_page_url - computed: true, optional: true, required: false
  private _homePageUrl?: string; 
  public get homePageUrl() {
    return this.getStringAttribute('home_page_url');
  }
  public set homePageUrl(value: string) {
    this._homePageUrl = value;
  }
  public resetHomePageUrl() {
    this._homePageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homePageUrlInput() {
    return this._homePageUrl;
  }

  // icon - computed: true, optional: true, required: false
  private _icon?: string; 
  public get icon() {
    return this.getStringAttribute('icon');
  }
  public set icon(value: string) {
    this._icon = value;
  }
  public resetIcon() {
    this._icon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconInput() {
    return this._icon;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // id_token_enc_algo - computed: true, optional: true, required: false
  private _idTokenEncAlgo?: string; 
  public get idTokenEncAlgo() {
    return this.getStringAttribute('id_token_enc_algo');
  }
  public set idTokenEncAlgo(value: string) {
    this._idTokenEncAlgo = value;
  }
  public resetIdTokenEncAlgo() {
    this._idTokenEncAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenEncAlgoInput() {
    return this._idTokenEncAlgo;
  }

  // idcs_created_by - computed: true, optional: false, required: false
  private _idcsCreatedBy = new IdentityDomainsAppIdcsCreatedByList(this, "idcs_created_by", false);
  public get idcsCreatedBy() {
    return this._idcsCreatedBy;
  }

  // idcs_endpoint - computed: false, optional: false, required: true
  private _idcsEndpoint?: string; 
  public get idcsEndpoint() {
    return this.getStringAttribute('idcs_endpoint');
  }
  public set idcsEndpoint(value: string) {
    this._idcsEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idcsEndpointInput() {
    return this._idcsEndpoint;
  }

  // idcs_last_modified_by - computed: true, optional: false, required: false
  private _idcsLastModifiedBy = new IdentityDomainsAppIdcsLastModifiedByList(this, "idcs_last_modified_by", false);
  public get idcsLastModifiedBy() {
    return this._idcsLastModifiedBy;
  }

  // idcs_last_upgraded_in_release - computed: true, optional: false, required: false
  public get idcsLastUpgradedInRelease() {
    return this.getStringAttribute('idcs_last_upgraded_in_release');
  }

  // idcs_prevented_operations - computed: true, optional: false, required: false
  public get idcsPreventedOperations() {
    return this.getListAttribute('idcs_prevented_operations');
  }

  // infrastructure - computed: true, optional: false, required: false
  public get infrastructure() {
    return this.getBooleanAttribute('infrastructure');
  }

  // is_alias_app - computed: true, optional: true, required: false
  private _isAliasApp?: boolean | cdktf.IResolvable; 
  public get isAliasApp() {
    return this.getBooleanAttribute('is_alias_app');
  }
  public set isAliasApp(value: boolean | cdktf.IResolvable) {
    this._isAliasApp = value;
  }
  public resetIsAliasApp() {
    this._isAliasApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAliasAppInput() {
    return this._isAliasApp;
  }

  // is_database_service - computed: true, optional: false, required: false
  public get isDatabaseService() {
    return this.getBooleanAttribute('is_database_service');
  }

  // is_enterprise_app - computed: true, optional: true, required: false
  private _isEnterpriseApp?: boolean | cdktf.IResolvable; 
  public get isEnterpriseApp() {
    return this.getBooleanAttribute('is_enterprise_app');
  }
  public set isEnterpriseApp(value: boolean | cdktf.IResolvable) {
    this._isEnterpriseApp = value;
  }
  public resetIsEnterpriseApp() {
    this._isEnterpriseApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnterpriseAppInput() {
    return this._isEnterpriseApp;
  }

  // is_form_fill - computed: true, optional: true, required: false
  private _isFormFill?: boolean | cdktf.IResolvable; 
  public get isFormFill() {
    return this.getBooleanAttribute('is_form_fill');
  }
  public set isFormFill(value: boolean | cdktf.IResolvable) {
    this._isFormFill = value;
  }
  public resetIsFormFill() {
    this._isFormFill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFormFillInput() {
    return this._isFormFill;
  }

  // is_kerberos_realm - computed: true, optional: true, required: false
  private _isKerberosRealm?: boolean | cdktf.IResolvable; 
  public get isKerberosRealm() {
    return this.getBooleanAttribute('is_kerberos_realm');
  }
  public set isKerberosRealm(value: boolean | cdktf.IResolvable) {
    this._isKerberosRealm = value;
  }
  public resetIsKerberosRealm() {
    this._isKerberosRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isKerberosRealmInput() {
    return this._isKerberosRealm;
  }

  // is_login_target - computed: true, optional: true, required: false
  private _isLoginTarget?: boolean | cdktf.IResolvable; 
  public get isLoginTarget() {
    return this.getBooleanAttribute('is_login_target');
  }
  public set isLoginTarget(value: boolean | cdktf.IResolvable) {
    this._isLoginTarget = value;
  }
  public resetIsLoginTarget() {
    this._isLoginTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLoginTargetInput() {
    return this._isLoginTarget;
  }

  // is_managed_app - computed: true, optional: false, required: false
  public get isManagedApp() {
    return this.getBooleanAttribute('is_managed_app');
  }

  // is_mobile_target - computed: true, optional: true, required: false
  private _isMobileTarget?: boolean | cdktf.IResolvable; 
  public get isMobileTarget() {
    return this.getBooleanAttribute('is_mobile_target');
  }
  public set isMobileTarget(value: boolean | cdktf.IResolvable) {
    this._isMobileTarget = value;
  }
  public resetIsMobileTarget() {
    this._isMobileTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMobileTargetInput() {
    return this._isMobileTarget;
  }

  // is_multicloud_service_app - computed: true, optional: true, required: false
  private _isMulticloudServiceApp?: boolean | cdktf.IResolvable; 
  public get isMulticloudServiceApp() {
    return this.getBooleanAttribute('is_multicloud_service_app');
  }
  public set isMulticloudServiceApp(value: boolean | cdktf.IResolvable) {
    this._isMulticloudServiceApp = value;
  }
  public resetIsMulticloudServiceApp() {
    this._isMulticloudServiceApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMulticloudServiceAppInput() {
    return this._isMulticloudServiceApp;
  }

  // is_oauth_client - computed: true, optional: true, required: false
  private _isOauthClient?: boolean | cdktf.IResolvable; 
  public get isOauthClient() {
    return this.getBooleanAttribute('is_oauth_client');
  }
  public set isOauthClient(value: boolean | cdktf.IResolvable) {
    this._isOauthClient = value;
  }
  public resetIsOauthClient() {
    this._isOauthClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOauthClientInput() {
    return this._isOauthClient;
  }

  // is_oauth_resource - computed: true, optional: true, required: false
  private _isOauthResource?: boolean | cdktf.IResolvable; 
  public get isOauthResource() {
    return this.getBooleanAttribute('is_oauth_resource');
  }
  public set isOauthResource(value: boolean | cdktf.IResolvable) {
    this._isOauthResource = value;
  }
  public resetIsOauthResource() {
    this._isOauthResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isOauthResourceInput() {
    return this._isOauthResource;
  }

  // is_obligation_capable - computed: true, optional: true, required: false
  private _isObligationCapable?: boolean | cdktf.IResolvable; 
  public get isObligationCapable() {
    return this.getBooleanAttribute('is_obligation_capable');
  }
  public set isObligationCapable(value: boolean | cdktf.IResolvable) {
    this._isObligationCapable = value;
  }
  public resetIsObligationCapable() {
    this._isObligationCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isObligationCapableInput() {
    return this._isObligationCapable;
  }

  // is_opc_service - computed: true, optional: false, required: false
  public get isOpcService() {
    return this.getBooleanAttribute('is_opc_service');
  }

  // is_radius_app - computed: true, optional: true, required: false
  private _isRadiusApp?: boolean | cdktf.IResolvable; 
  public get isRadiusApp() {
    return this.getBooleanAttribute('is_radius_app');
  }
  public set isRadiusApp(value: boolean | cdktf.IResolvable) {
    this._isRadiusApp = value;
  }
  public resetIsRadiusApp() {
    this._isRadiusApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRadiusAppInput() {
    return this._isRadiusApp;
  }

  // is_saml_service_provider - computed: true, optional: true, required: false
  private _isSamlServiceProvider?: boolean | cdktf.IResolvable; 
  public get isSamlServiceProvider() {
    return this.getBooleanAttribute('is_saml_service_provider');
  }
  public set isSamlServiceProvider(value: boolean | cdktf.IResolvable) {
    this._isSamlServiceProvider = value;
  }
  public resetIsSamlServiceProvider() {
    this._isSamlServiceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSamlServiceProviderInput() {
    return this._isSamlServiceProvider;
  }

  // is_unmanaged_app - computed: true, optional: true, required: false
  private _isUnmanagedApp?: boolean | cdktf.IResolvable; 
  public get isUnmanagedApp() {
    return this.getBooleanAttribute('is_unmanaged_app');
  }
  public set isUnmanagedApp(value: boolean | cdktf.IResolvable) {
    this._isUnmanagedApp = value;
  }
  public resetIsUnmanagedApp() {
    this._isUnmanagedApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isUnmanagedAppInput() {
    return this._isUnmanagedApp;
  }

  // is_web_tier_policy - computed: true, optional: true, required: false
  private _isWebTierPolicy?: boolean | cdktf.IResolvable; 
  public get isWebTierPolicy() {
    return this.getBooleanAttribute('is_web_tier_policy');
  }
  public set isWebTierPolicy(value: boolean | cdktf.IResolvable) {
    this._isWebTierPolicy = value;
  }
  public resetIsWebTierPolicy() {
    this._isWebTierPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isWebTierPolicyInput() {
    return this._isWebTierPolicy;
  }

  // landing_page_url - computed: true, optional: true, required: false
  private _landingPageUrl?: string; 
  public get landingPageUrl() {
    return this.getStringAttribute('landing_page_url');
  }
  public set landingPageUrl(value: string) {
    this._landingPageUrl = value;
  }
  public resetLandingPageUrl() {
    this._landingPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landingPageUrlInput() {
    return this._landingPageUrl;
  }

  // linking_callback_url - computed: true, optional: true, required: false
  private _linkingCallbackUrl?: string; 
  public get linkingCallbackUrl() {
    return this.getStringAttribute('linking_callback_url');
  }
  public set linkingCallbackUrl(value: string) {
    this._linkingCallbackUrl = value;
  }
  public resetLinkingCallbackUrl() {
    this._linkingCallbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingCallbackUrlInput() {
    return this._linkingCallbackUrl;
  }

  // login_mechanism - computed: true, optional: true, required: false
  private _loginMechanism?: string; 
  public get loginMechanism() {
    return this.getStringAttribute('login_mechanism');
  }
  public set loginMechanism(value: string) {
    this._loginMechanism = value;
  }
  public resetLoginMechanism() {
    this._loginMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginMechanismInput() {
    return this._loginMechanism;
  }

  // login_page_url - computed: true, optional: true, required: false
  private _loginPageUrl?: string; 
  public get loginPageUrl() {
    return this.getStringAttribute('login_page_url');
  }
  public set loginPageUrl(value: string) {
    this._loginPageUrl = value;
  }
  public resetLoginPageUrl() {
    this._loginPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPageUrlInput() {
    return this._loginPageUrl;
  }

  // logout_page_url - computed: true, optional: true, required: false
  private _logoutPageUrl?: string; 
  public get logoutPageUrl() {
    return this.getStringAttribute('logout_page_url');
  }
  public set logoutPageUrl(value: string) {
    this._logoutPageUrl = value;
  }
  public resetLogoutPageUrl() {
    this._logoutPageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutPageUrlInput() {
    return this._logoutPageUrl;
  }

  // logout_uri - computed: true, optional: true, required: false
  private _logoutUri?: string; 
  public get logoutUri() {
    return this.getStringAttribute('logout_uri');
  }
  public set logoutUri(value: string) {
    this._logoutUri = value;
  }
  public resetLogoutUri() {
    this._logoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUriInput() {
    return this._logoutUri;
  }

  // meta - computed: true, optional: false, required: false
  private _meta = new IdentityDomainsAppMetaList(this, "meta", false);
  public get meta() {
    return this._meta;
  }

  // meter_as_opc_service - computed: true, optional: false, required: false
  public get meterAsOpcService() {
    return this.getBooleanAttribute('meter_as_opc_service');
  }

  // migrated - computed: true, optional: false, required: false
  public get migrated() {
    return this.getBooleanAttribute('migrated');
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

  // ocid - computed: true, optional: true, required: false
  private _ocid?: string; 
  public get ocid() {
    return this.getStringAttribute('ocid');
  }
  public set ocid(value: string) {
    this._ocid = value;
  }
  public resetOcid() {
    this._ocid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocidInput() {
    return this._ocid;
  }

  // post_logout_redirect_uris - computed: true, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
  }
  public set postLogoutRedirectUris(value: string[]) {
    this._postLogoutRedirectUris = value;
  }
  public resetPostLogoutRedirectUris() {
    this._postLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUrisInput() {
    return this._postLogoutRedirectUris;
  }

  // privacy_policy_url - computed: true, optional: true, required: false
  private _privacyPolicyUrl?: string; 
  public get privacyPolicyUrl() {
    return this.getStringAttribute('privacy_policy_url');
  }
  public set privacyPolicyUrl(value: string) {
    this._privacyPolicyUrl = value;
  }
  public resetPrivacyPolicyUrl() {
    this._privacyPolicyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyUrlInput() {
    return this._privacyPolicyUrl;
  }

  // product_logo_url - computed: true, optional: true, required: false
  private _productLogoUrl?: string; 
  public get productLogoUrl() {
    return this.getStringAttribute('product_logo_url');
  }
  public set productLogoUrl(value: string) {
    this._productLogoUrl = value;
  }
  public resetProductLogoUrl() {
    this._productLogoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productLogoUrlInput() {
    return this._productLogoUrl;
  }

  // product_name - computed: true, optional: true, required: false
  private _productName?: string; 
  public get productName() {
    return this.getStringAttribute('product_name');
  }
  public set productName(value: string) {
    this._productName = value;
  }
  public resetProductName() {
    this._productName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productNameInput() {
    return this._productName;
  }

  // ready_to_upgrade - computed: true, optional: false, required: false
  public get readyToUpgrade() {
    return this.getBooleanAttribute('ready_to_upgrade');
  }

  // redirect_uris - computed: true, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_token_expiry - computed: true, optional: true, required: false
  private _refreshTokenExpiry?: number; 
  public get refreshTokenExpiry() {
    return this.getNumberAttribute('refresh_token_expiry');
  }
  public set refreshTokenExpiry(value: number) {
    this._refreshTokenExpiry = value;
  }
  public resetRefreshTokenExpiry() {
    this._refreshTokenExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenExpiryInput() {
    return this._refreshTokenExpiry;
  }

  // resource_type_schema_version - computed: false, optional: true, required: false
  private _resourceTypeSchemaVersion?: string; 
  public get resourceTypeSchemaVersion() {
    return this.getStringAttribute('resource_type_schema_version');
  }
  public set resourceTypeSchemaVersion(value: string) {
    this._resourceTypeSchemaVersion = value;
  }
  public resetResourceTypeSchemaVersion() {
    this._resourceTypeSchemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeSchemaVersionInput() {
    return this._resourceTypeSchemaVersion;
  }

  // schemas - computed: false, optional: false, required: true
  private _schemas?: string[]; 
  public get schemas() {
    return this.getListAttribute('schemas');
  }
  public set schemas(value: string[]) {
    this._schemas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas;
  }

  // secondary_audiences - computed: true, optional: true, required: false
  private _secondaryAudiences?: string[]; 
  public get secondaryAudiences() {
    return cdktf.Fn.tolist(this.getListAttribute('secondary_audiences'));
  }
  public set secondaryAudiences(value: string[]) {
    this._secondaryAudiences = value;
  }
  public resetSecondaryAudiences() {
    this._secondaryAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryAudiencesInput() {
    return this._secondaryAudiences;
  }

  // service_type_urn - computed: true, optional: true, required: false
  private _serviceTypeUrn?: string; 
  public get serviceTypeUrn() {
    return this.getStringAttribute('service_type_urn');
  }
  public set serviceTypeUrn(value: string) {
    this._serviceTypeUrn = value;
  }
  public resetServiceTypeUrn() {
    this._serviceTypeUrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeUrnInput() {
    return this._serviceTypeUrn;
  }

  // service_type_version - computed: true, optional: true, required: false
  private _serviceTypeVersion?: string; 
  public get serviceTypeVersion() {
    return this.getStringAttribute('service_type_version');
  }
  public set serviceTypeVersion(value: string) {
    this._serviceTypeVersion = value;
  }
  public resetServiceTypeVersion() {
    this._serviceTypeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeVersionInput() {
    return this._serviceTypeVersion;
  }

  // show_in_my_apps - computed: true, optional: true, required: false
  private _showInMyApps?: boolean | cdktf.IResolvable; 
  public get showInMyApps() {
    return this.getBooleanAttribute('show_in_my_apps');
  }
  public set showInMyApps(value: boolean | cdktf.IResolvable) {
    this._showInMyApps = value;
  }
  public resetShowInMyApps() {
    this._showInMyApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInMyAppsInput() {
    return this._showInMyApps;
  }

  // tenancy_ocid - computed: true, optional: false, required: false
  public get tenancyOcid() {
    return this.getStringAttribute('tenancy_ocid');
  }

  // terms_of_service_url - computed: true, optional: true, required: false
  private _termsOfServiceUrl?: string; 
  public get termsOfServiceUrl() {
    return this.getStringAttribute('terms_of_service_url');
  }
  public set termsOfServiceUrl(value: string) {
    this._termsOfServiceUrl = value;
  }
  public resetTermsOfServiceUrl() {
    this._termsOfServiceUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfServiceUrlInput() {
    return this._termsOfServiceUrl;
  }

  // trust_scope - computed: true, optional: true, required: false
  private _trustScope?: string; 
  public get trustScope() {
    return this.getStringAttribute('trust_scope');
  }
  public set trustScope(value: string) {
    this._trustScope = value;
  }
  public resetTrustScope() {
    this._trustScope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustScopeInput() {
    return this._trustScope;
  }

  // user_roles - computed: true, optional: false, required: false
  private _userRoles = new IdentityDomainsAppUserRolesList(this, "user_roles", false);
  public get userRoles() {
    return this._userRoles;
  }

  // alias_apps - computed: false, optional: true, required: false
  private _aliasApps = new IdentityDomainsAppAliasAppsList(this, "alias_apps", true);
  public get aliasApps() {
    return this._aliasApps;
  }
  public putAliasApps(value: IdentityDomainsAppAliasApps[] | cdktf.IResolvable) {
    this._aliasApps.internalValue = value;
  }
  public resetAliasApps() {
    this._aliasApps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasAppsInput() {
    return this._aliasApps.internalValue;
  }

  // allowed_scopes - computed: false, optional: true, required: false
  private _allowedScopes = new IdentityDomainsAppAllowedScopesList(this, "allowed_scopes", true);
  public get allowedScopes() {
    return this._allowedScopes;
  }
  public putAllowedScopes(value: IdentityDomainsAppAllowedScopes[] | cdktf.IResolvable) {
    this._allowedScopes.internalValue = value;
  }
  public resetAllowedScopes() {
    this._allowedScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedScopesInput() {
    return this._allowedScopes.internalValue;
  }

  // allowed_tags - computed: false, optional: true, required: false
  private _allowedTags = new IdentityDomainsAppAllowedTagsList(this, "allowed_tags", true);
  public get allowedTags() {
    return this._allowedTags;
  }
  public putAllowedTags(value: IdentityDomainsAppAllowedTags[] | cdktf.IResolvable) {
    this._allowedTags.internalValue = value;
  }
  public resetAllowedTags() {
    this._allowedTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTagsInput() {
    return this._allowedTags.internalValue;
  }

  // app_signon_policy - computed: false, optional: true, required: false
  private _appSignonPolicy = new IdentityDomainsAppAppSignonPolicyOutputReference(this, "app_signon_policy");
  public get appSignonPolicy() {
    return this._appSignonPolicy;
  }
  public putAppSignonPolicy(value: IdentityDomainsAppAppSignonPolicy) {
    this._appSignonPolicy.internalValue = value;
  }
  public resetAppSignonPolicy() {
    this._appSignonPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appSignonPolicyInput() {
    return this._appSignonPolicy.internalValue;
  }

  // apps_network_perimeters - computed: false, optional: true, required: false
  private _appsNetworkPerimeters = new IdentityDomainsAppAppsNetworkPerimetersList(this, "apps_network_perimeters", true);
  public get appsNetworkPerimeters() {
    return this._appsNetworkPerimeters;
  }
  public putAppsNetworkPerimeters(value: IdentityDomainsAppAppsNetworkPerimeters[] | cdktf.IResolvable) {
    this._appsNetworkPerimeters.internalValue = value;
  }
  public resetAppsNetworkPerimeters() {
    this._appsNetworkPerimeters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsNetworkPerimetersInput() {
    return this._appsNetworkPerimeters.internalValue;
  }

  // as_opc_service - computed: false, optional: true, required: false
  private _asOpcService = new IdentityDomainsAppAsOpcServiceOutputReference(this, "as_opc_service");
  public get asOpcService() {
    return this._asOpcService;
  }
  public putAsOpcService(value: IdentityDomainsAppAsOpcService) {
    this._asOpcService.internalValue = value;
  }
  public resetAsOpcService() {
    this._asOpcService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asOpcServiceInput() {
    return this._asOpcService.internalValue;
  }

  // attr_rendering_metadata - computed: false, optional: true, required: false
  private _attrRenderingMetadata = new IdentityDomainsAppAttrRenderingMetadataList(this, "attr_rendering_metadata", true);
  public get attrRenderingMetadata() {
    return this._attrRenderingMetadata;
  }
  public putAttrRenderingMetadata(value: IdentityDomainsAppAttrRenderingMetadata[] | cdktf.IResolvable) {
    this._attrRenderingMetadata.internalValue = value;
  }
  public resetAttrRenderingMetadata() {
    this._attrRenderingMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attrRenderingMetadataInput() {
    return this._attrRenderingMetadata.internalValue;
  }

  // based_on_template - computed: false, optional: false, required: true
  private _basedOnTemplate = new IdentityDomainsAppBasedOnTemplateOutputReference(this, "based_on_template");
  public get basedOnTemplate() {
    return this._basedOnTemplate;
  }
  public putBasedOnTemplate(value: IdentityDomainsAppBasedOnTemplate) {
    this._basedOnTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get basedOnTemplateInput() {
    return this._basedOnTemplate.internalValue;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new IdentityDomainsAppCertificatesList(this, "certificates", true);
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: IdentityDomainsAppCertificates[] | cdktf.IResolvable) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
  }

  // identity_providers - computed: false, optional: true, required: false
  private _identityProviders = new IdentityDomainsAppIdentityProvidersList(this, "identity_providers", true);
  public get identityProviders() {
    return this._identityProviders;
  }
  public putIdentityProviders(value: IdentityDomainsAppIdentityProviders[] | cdktf.IResolvable) {
    this._identityProviders.internalValue = value;
  }
  public resetIdentityProviders() {
    this._identityProviders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProvidersInput() {
    return this._identityProviders.internalValue;
  }

  // idp_policy - computed: false, optional: true, required: false
  private _idpPolicy = new IdentityDomainsAppIdpPolicyOutputReference(this, "idp_policy");
  public get idpPolicy() {
    return this._idpPolicy;
  }
  public putIdpPolicy(value: IdentityDomainsAppIdpPolicy) {
    this._idpPolicy.internalValue = value;
  }
  public resetIdpPolicy() {
    this._idpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpPolicyInput() {
    return this._idpPolicy.internalValue;
  }

  // protectable_secondary_audiences - computed: false, optional: true, required: false
  private _protectableSecondaryAudiences = new IdentityDomainsAppProtectableSecondaryAudiencesList(this, "protectable_secondary_audiences", true);
  public get protectableSecondaryAudiences() {
    return this._protectableSecondaryAudiences;
  }
  public putProtectableSecondaryAudiences(value: IdentityDomainsAppProtectableSecondaryAudiences[] | cdktf.IResolvable) {
    this._protectableSecondaryAudiences.internalValue = value;
  }
  public resetProtectableSecondaryAudiences() {
    this._protectableSecondaryAudiences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectableSecondaryAudiencesInput() {
    return this._protectableSecondaryAudiences.internalValue;
  }

  // radius_policy - computed: false, optional: true, required: false
  private _radiusPolicy = new IdentityDomainsAppRadiusPolicyOutputReference(this, "radius_policy");
  public get radiusPolicy() {
    return this._radiusPolicy;
  }
  public putRadiusPolicy(value: IdentityDomainsAppRadiusPolicy) {
    this._radiusPolicy.internalValue = value;
  }
  public resetRadiusPolicy() {
    this._radiusPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPolicyInput() {
    return this._radiusPolicy.internalValue;
  }

  // saml_service_provider - computed: false, optional: true, required: false
  private _samlServiceProvider = new IdentityDomainsAppSamlServiceProviderOutputReference(this, "saml_service_provider");
  public get samlServiceProvider() {
    return this._samlServiceProvider;
  }
  public putSamlServiceProvider(value: IdentityDomainsAppSamlServiceProvider) {
    this._samlServiceProvider.internalValue = value;
  }
  public resetSamlServiceProvider() {
    this._samlServiceProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServiceProviderInput() {
    return this._samlServiceProvider.internalValue;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes = new IdentityDomainsAppScopesList(this, "scopes", true);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: IdentityDomainsAppScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }

  // service_params - computed: false, optional: true, required: false
  private _serviceParams = new IdentityDomainsAppServiceParamsList(this, "service_params", true);
  public get serviceParams() {
    return this._serviceParams;
  }
  public putServiceParams(value: IdentityDomainsAppServiceParams[] | cdktf.IResolvable) {
    this._serviceParams.internalValue = value;
  }
  public resetServiceParams() {
    this._serviceParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceParamsInput() {
    return this._serviceParams.internalValue;
  }

  // signon_policy - computed: false, optional: true, required: false
  private _signonPolicy = new IdentityDomainsAppSignonPolicyOutputReference(this, "signon_policy");
  public get signonPolicy() {
    return this._signonPolicy;
  }
  public putSignonPolicy(value: IdentityDomainsAppSignonPolicy) {
    this._signonPolicy.internalValue = value;
  }
  public resetSignonPolicy() {
    this._signonPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signonPolicyInput() {
    return this._signonPolicy.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new IdentityDomainsAppTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: IdentityDomainsAppTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // terms_of_use - computed: false, optional: true, required: false
  private _termsOfUse = new IdentityDomainsAppTermsOfUseOutputReference(this, "terms_of_use");
  public get termsOfUse() {
    return this._termsOfUse;
  }
  public putTermsOfUse(value: IdentityDomainsAppTermsOfUse) {
    this._termsOfUse.internalValue = value;
  }
  public resetTermsOfUse() {
    this._termsOfUse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get termsOfUseInput() {
    return this._termsOfUse.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new IdentityDomainsAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: IdentityDomainsAppTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // trust_policies - computed: false, optional: true, required: false
  private _trustPolicies = new IdentityDomainsAppTrustPoliciesList(this, "trust_policies", true);
  public get trustPolicies() {
    return this._trustPolicies;
  }
  public putTrustPolicies(value: IdentityDomainsAppTrustPolicies[] | cdktf.IResolvable) {
    this._trustPolicies.internalValue = value;
  }
  public resetTrustPolicies() {
    this._trustPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustPoliciesInput() {
    return this._trustPolicies.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextension_oci_tags - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionOciTags = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsOutputReference(this, "urnietfparamsscimschemasoracleidcsextension_oci_tags");
  public get urnietfparamsscimschemasoracleidcsextensionOciTags() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionOciTags(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTags) {
    this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionOciTags() {
    this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionOciTagsInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensiondbcs_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensiondbcsApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensiondbcs_app");
  public get urnietfparamsscimschemasoracleidcsextensiondbcsApp() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbcsApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensiondbcsApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsApp) {
    this._urnietfparamsscimschemasoracleidcsextensiondbcsApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensiondbcsApp() {
    this._urnietfparamsscimschemasoracleidcsextensiondbcsApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensiondbcsAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensiondbcsApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionenterprise_app_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionenterprise_app_app");
  public get urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp) {
    this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionenterpriseAppApp() {
    this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionenterpriseAppAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionform_fill_app_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionformFillAppApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionform_fill_app_app");
  public get urnietfparamsscimschemasoracleidcsextensionformFillAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionformFillAppApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppApp) {
    this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionformFillAppApp() {
    this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionformFillAppAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template");
  public get urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate() {
    return this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate) {
    this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate() {
    this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app");
  public get urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp) {
    this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionkerberosRealmApp() {
    this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionkerberosRealmAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionmanagedapp_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionmanagedappApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionmanagedapp_app");
  public get urnietfparamsscimschemasoracleidcsextensionmanagedappApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionmanagedappApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappApp) {
    this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionmanagedappApp() {
    this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionmanagedappAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app");
  public get urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp) {
    this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp() {
    this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionopc_service_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionopcServiceApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionopc_service_app");
  public get urnietfparamsscimschemasoracleidcsextensionopcServiceApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionopcServiceApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceApp) {
    this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionopcServiceApp() {
    this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionopcServiceAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionradius_app_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionradiusAppApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionradius_app_app");
  public get urnietfparamsscimschemasoracleidcsextensionradiusAppApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionradiusAppApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppApp) {
    this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionradiusAppApp() {
    this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionradiusAppAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionrequestable_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionrequestableApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionrequestable_app");
  public get urnietfparamsscimschemasoracleidcsextensionrequestableApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionrequestableApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionrequestableApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableApp) {
    this._urnietfparamsscimschemasoracleidcsextensionrequestableApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionrequestableApp() {
    this._urnietfparamsscimschemasoracleidcsextensionrequestableApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionrequestableAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionrequestableApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app");
  public get urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp) {
    this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp() {
    this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp.internalValue;
  }

  // urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app - computed: false, optional: true, required: false
  private _urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp = new IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppOutputReference(this, "urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app");
  public get urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp() {
    return this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp;
  }
  public putUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp(value: IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp) {
    this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp.internalValue = value;
  }
  public resetUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp() {
    this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppInput() {
    return this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_expiry: cdktf.numberToTerraform(this._accessTokenExpiry),
      active: cdktf.booleanToTerraform(this._active),
      all_url_schemes_allowed: cdktf.booleanToTerraform(this._allUrlSchemesAllowed),
      allow_access_control: cdktf.booleanToTerraform(this._allowAccessControl),
      allow_offline: cdktf.booleanToTerraform(this._allowOffline),
      allowed_grants: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedGrants),
      allowed_operations: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOperations),
      app_icon: cdktf.stringToTerraform(this._appIcon),
      app_thumbnail: cdktf.stringToTerraform(this._appThumbnail),
      attribute_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attributeSets),
      attributes: cdktf.stringToTerraform(this._attributes),
      audience: cdktf.stringToTerraform(this._audience),
      authorization: cdktf.stringToTerraform(this._authorization),
      bypass_consent: cdktf.booleanToTerraform(this._bypassConsent),
      client_ip_checking: cdktf.stringToTerraform(this._clientIpChecking),
      client_type: cdktf.stringToTerraform(this._clientType),
      contact_email_address: cdktf.stringToTerraform(this._contactEmailAddress),
      delegated_service_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._delegatedServiceNames),
      description: cdktf.stringToTerraform(this._description),
      disable_kmsi_token_authentication: cdktf.booleanToTerraform(this._disableKmsiTokenAuthentication),
      display_name: cdktf.stringToTerraform(this._displayName),
      error_page_url: cdktf.stringToTerraform(this._errorPageUrl),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      home_page_url: cdktf.stringToTerraform(this._homePageUrl),
      icon: cdktf.stringToTerraform(this._icon),
      id_token_enc_algo: cdktf.stringToTerraform(this._idTokenEncAlgo),
      idcs_endpoint: cdktf.stringToTerraform(this._idcsEndpoint),
      is_alias_app: cdktf.booleanToTerraform(this._isAliasApp),
      is_enterprise_app: cdktf.booleanToTerraform(this._isEnterpriseApp),
      is_form_fill: cdktf.booleanToTerraform(this._isFormFill),
      is_kerberos_realm: cdktf.booleanToTerraform(this._isKerberosRealm),
      is_login_target: cdktf.booleanToTerraform(this._isLoginTarget),
      is_mobile_target: cdktf.booleanToTerraform(this._isMobileTarget),
      is_multicloud_service_app: cdktf.booleanToTerraform(this._isMulticloudServiceApp),
      is_oauth_client: cdktf.booleanToTerraform(this._isOauthClient),
      is_oauth_resource: cdktf.booleanToTerraform(this._isOauthResource),
      is_obligation_capable: cdktf.booleanToTerraform(this._isObligationCapable),
      is_radius_app: cdktf.booleanToTerraform(this._isRadiusApp),
      is_saml_service_provider: cdktf.booleanToTerraform(this._isSamlServiceProvider),
      is_unmanaged_app: cdktf.booleanToTerraform(this._isUnmanagedApp),
      is_web_tier_policy: cdktf.booleanToTerraform(this._isWebTierPolicy),
      landing_page_url: cdktf.stringToTerraform(this._landingPageUrl),
      linking_callback_url: cdktf.stringToTerraform(this._linkingCallbackUrl),
      login_mechanism: cdktf.stringToTerraform(this._loginMechanism),
      login_page_url: cdktf.stringToTerraform(this._loginPageUrl),
      logout_page_url: cdktf.stringToTerraform(this._logoutPageUrl),
      logout_uri: cdktf.stringToTerraform(this._logoutUri),
      name: cdktf.stringToTerraform(this._name),
      ocid: cdktf.stringToTerraform(this._ocid),
      post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._postLogoutRedirectUris),
      privacy_policy_url: cdktf.stringToTerraform(this._privacyPolicyUrl),
      product_logo_url: cdktf.stringToTerraform(this._productLogoUrl),
      product_name: cdktf.stringToTerraform(this._productName),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
      refresh_token_expiry: cdktf.numberToTerraform(this._refreshTokenExpiry),
      resource_type_schema_version: cdktf.stringToTerraform(this._resourceTypeSchemaVersion),
      schemas: cdktf.listMapper(cdktf.stringToTerraform, false)(this._schemas),
      secondary_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._secondaryAudiences),
      service_type_urn: cdktf.stringToTerraform(this._serviceTypeUrn),
      service_type_version: cdktf.stringToTerraform(this._serviceTypeVersion),
      show_in_my_apps: cdktf.booleanToTerraform(this._showInMyApps),
      terms_of_service_url: cdktf.stringToTerraform(this._termsOfServiceUrl),
      trust_scope: cdktf.stringToTerraform(this._trustScope),
      alias_apps: cdktf.listMapper(identityDomainsAppAliasAppsToTerraform, true)(this._aliasApps.internalValue),
      allowed_scopes: cdktf.listMapper(identityDomainsAppAllowedScopesToTerraform, true)(this._allowedScopes.internalValue),
      allowed_tags: cdktf.listMapper(identityDomainsAppAllowedTagsToTerraform, true)(this._allowedTags.internalValue),
      app_signon_policy: identityDomainsAppAppSignonPolicyToTerraform(this._appSignonPolicy.internalValue),
      apps_network_perimeters: cdktf.listMapper(identityDomainsAppAppsNetworkPerimetersToTerraform, true)(this._appsNetworkPerimeters.internalValue),
      as_opc_service: identityDomainsAppAsOpcServiceToTerraform(this._asOpcService.internalValue),
      attr_rendering_metadata: cdktf.listMapper(identityDomainsAppAttrRenderingMetadataToTerraform, true)(this._attrRenderingMetadata.internalValue),
      based_on_template: identityDomainsAppBasedOnTemplateToTerraform(this._basedOnTemplate.internalValue),
      certificates: cdktf.listMapper(identityDomainsAppCertificatesToTerraform, true)(this._certificates.internalValue),
      identity_providers: cdktf.listMapper(identityDomainsAppIdentityProvidersToTerraform, true)(this._identityProviders.internalValue),
      idp_policy: identityDomainsAppIdpPolicyToTerraform(this._idpPolicy.internalValue),
      protectable_secondary_audiences: cdktf.listMapper(identityDomainsAppProtectableSecondaryAudiencesToTerraform, true)(this._protectableSecondaryAudiences.internalValue),
      radius_policy: identityDomainsAppRadiusPolicyToTerraform(this._radiusPolicy.internalValue),
      saml_service_provider: identityDomainsAppSamlServiceProviderToTerraform(this._samlServiceProvider.internalValue),
      scopes: cdktf.listMapper(identityDomainsAppScopesToTerraform, true)(this._scopes.internalValue),
      service_params: cdktf.listMapper(identityDomainsAppServiceParamsToTerraform, true)(this._serviceParams.internalValue),
      signon_policy: identityDomainsAppSignonPolicyToTerraform(this._signonPolicy.internalValue),
      tags: cdktf.listMapper(identityDomainsAppTagsToTerraform, true)(this._tags.internalValue),
      terms_of_use: identityDomainsAppTermsOfUseToTerraform(this._termsOfUse.internalValue),
      timeouts: identityDomainsAppTimeoutsToTerraform(this._timeouts.internalValue),
      trust_policies: cdktf.listMapper(identityDomainsAppTrustPoliciesToTerraform, true)(this._trustPolicies.internalValue),
      urnietfparamsscimschemasoracleidcsextension_oci_tags: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsToTerraform(this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue),
      urnietfparamsscimschemasoracleidcsextensiondbcs_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensiondbcsApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionenterprise_app_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionform_fill_app_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateToTerraform(this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate.internalValue),
      urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionmanagedapp_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionopc_service_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionradius_app_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionrequestable_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionrequestableApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp.internalValue),
      urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppToTerraform(this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_expiry: {
        value: cdktf.numberToHclTerraform(this._accessTokenExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      all_url_schemes_allowed: {
        value: cdktf.booleanToHclTerraform(this._allUrlSchemesAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_access_control: {
        value: cdktf.booleanToHclTerraform(this._allowAccessControl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_offline: {
        value: cdktf.booleanToHclTerraform(this._allowOffline),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_grants: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedGrants),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allowed_operations: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOperations),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      app_icon: {
        value: cdktf.stringToHclTerraform(this._appIcon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_thumbnail: {
        value: cdktf.stringToHclTerraform(this._appThumbnail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attributeSets),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
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
      authorization: {
        value: cdktf.stringToHclTerraform(this._authorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_consent: {
        value: cdktf.booleanToHclTerraform(this._bypassConsent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_ip_checking: {
        value: cdktf.stringToHclTerraform(this._clientIpChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_type: {
        value: cdktf.stringToHclTerraform(this._clientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_email_address: {
        value: cdktf.stringToHclTerraform(this._contactEmailAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delegated_service_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._delegatedServiceNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_kmsi_token_authentication: {
        value: cdktf.booleanToHclTerraform(this._disableKmsiTokenAuthentication),
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
      error_page_url: {
        value: cdktf.stringToHclTerraform(this._errorPageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_delete: {
        value: cdktf.booleanToHclTerraform(this._forceDelete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      home_page_url: {
        value: cdktf.stringToHclTerraform(this._homePageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon: {
        value: cdktf.stringToHclTerraform(this._icon),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id_token_enc_algo: {
        value: cdktf.stringToHclTerraform(this._idTokenEncAlgo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idcs_endpoint: {
        value: cdktf.stringToHclTerraform(this._idcsEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_alias_app: {
        value: cdktf.booleanToHclTerraform(this._isAliasApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enterprise_app: {
        value: cdktf.booleanToHclTerraform(this._isEnterpriseApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_form_fill: {
        value: cdktf.booleanToHclTerraform(this._isFormFill),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_kerberos_realm: {
        value: cdktf.booleanToHclTerraform(this._isKerberosRealm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_login_target: {
        value: cdktf.booleanToHclTerraform(this._isLoginTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_mobile_target: {
        value: cdktf.booleanToHclTerraform(this._isMobileTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_multicloud_service_app: {
        value: cdktf.booleanToHclTerraform(this._isMulticloudServiceApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_oauth_client: {
        value: cdktf.booleanToHclTerraform(this._isOauthClient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_oauth_resource: {
        value: cdktf.booleanToHclTerraform(this._isOauthResource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_obligation_capable: {
        value: cdktf.booleanToHclTerraform(this._isObligationCapable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_radius_app: {
        value: cdktf.booleanToHclTerraform(this._isRadiusApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_saml_service_provider: {
        value: cdktf.booleanToHclTerraform(this._isSamlServiceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_unmanaged_app: {
        value: cdktf.booleanToHclTerraform(this._isUnmanagedApp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_web_tier_policy: {
        value: cdktf.booleanToHclTerraform(this._isWebTierPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      landing_page_url: {
        value: cdktf.stringToHclTerraform(this._landingPageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linking_callback_url: {
        value: cdktf.stringToHclTerraform(this._linkingCallbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_mechanism: {
        value: cdktf.stringToHclTerraform(this._loginMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_page_url: {
        value: cdktf.stringToHclTerraform(this._loginPageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_page_url: {
        value: cdktf.stringToHclTerraform(this._logoutPageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_uri: {
        value: cdktf.stringToHclTerraform(this._logoutUri),
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
      ocid: {
        value: cdktf.stringToHclTerraform(this._ocid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_logout_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._postLogoutRedirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      privacy_policy_url: {
        value: cdktf.stringToHclTerraform(this._privacyPolicyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_logo_url: {
        value: cdktf.stringToHclTerraform(this._productLogoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_name: {
        value: cdktf.stringToHclTerraform(this._productName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_token_expiry: {
        value: cdktf.numberToHclTerraform(this._refreshTokenExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_type_schema_version: {
        value: cdktf.stringToHclTerraform(this._resourceTypeSchemaVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schemas: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._schemas),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      secondary_audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._secondaryAudiences),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_type_urn: {
        value: cdktf.stringToHclTerraform(this._serviceTypeUrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type_version: {
        value: cdktf.stringToHclTerraform(this._serviceTypeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_in_my_apps: {
        value: cdktf.booleanToHclTerraform(this._showInMyApps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      terms_of_service_url: {
        value: cdktf.stringToHclTerraform(this._termsOfServiceUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_scope: {
        value: cdktf.stringToHclTerraform(this._trustScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias_apps: {
        value: cdktf.listMapperHcl(identityDomainsAppAliasAppsToHclTerraform, true)(this._aliasApps.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppAliasAppsList",
      },
      allowed_scopes: {
        value: cdktf.listMapperHcl(identityDomainsAppAllowedScopesToHclTerraform, true)(this._allowedScopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppAllowedScopesList",
      },
      allowed_tags: {
        value: cdktf.listMapperHcl(identityDomainsAppAllowedTagsToHclTerraform, true)(this._allowedTags.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppAllowedTagsList",
      },
      app_signon_policy: {
        value: identityDomainsAppAppSignonPolicyToHclTerraform(this._appSignonPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppAppSignonPolicyList",
      },
      apps_network_perimeters: {
        value: cdktf.listMapperHcl(identityDomainsAppAppsNetworkPerimetersToHclTerraform, true)(this._appsNetworkPerimeters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppAppsNetworkPerimetersList",
      },
      as_opc_service: {
        value: identityDomainsAppAsOpcServiceToHclTerraform(this._asOpcService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppAsOpcServiceList",
      },
      attr_rendering_metadata: {
        value: cdktf.listMapperHcl(identityDomainsAppAttrRenderingMetadataToHclTerraform, true)(this._attrRenderingMetadata.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppAttrRenderingMetadataList",
      },
      based_on_template: {
        value: identityDomainsAppBasedOnTemplateToHclTerraform(this._basedOnTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppBasedOnTemplateList",
      },
      certificates: {
        value: cdktf.listMapperHcl(identityDomainsAppCertificatesToHclTerraform, true)(this._certificates.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppCertificatesList",
      },
      identity_providers: {
        value: cdktf.listMapperHcl(identityDomainsAppIdentityProvidersToHclTerraform, true)(this._identityProviders.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppIdentityProvidersList",
      },
      idp_policy: {
        value: identityDomainsAppIdpPolicyToHclTerraform(this._idpPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppIdpPolicyList",
      },
      protectable_secondary_audiences: {
        value: cdktf.listMapperHcl(identityDomainsAppProtectableSecondaryAudiencesToHclTerraform, true)(this._protectableSecondaryAudiences.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppProtectableSecondaryAudiencesList",
      },
      radius_policy: {
        value: identityDomainsAppRadiusPolicyToHclTerraform(this._radiusPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppRadiusPolicyList",
      },
      saml_service_provider: {
        value: identityDomainsAppSamlServiceProviderToHclTerraform(this._samlServiceProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppSamlServiceProviderList",
      },
      scopes: {
        value: cdktf.listMapperHcl(identityDomainsAppScopesToHclTerraform, true)(this._scopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppScopesList",
      },
      service_params: {
        value: cdktf.listMapperHcl(identityDomainsAppServiceParamsToHclTerraform, true)(this._serviceParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppServiceParamsList",
      },
      signon_policy: {
        value: identityDomainsAppSignonPolicyToHclTerraform(this._signonPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppSignonPolicyList",
      },
      tags: {
        value: cdktf.listMapperHcl(identityDomainsAppTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppTagsList",
      },
      terms_of_use: {
        value: identityDomainsAppTermsOfUseToHclTerraform(this._termsOfUse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppTermsOfUseList",
      },
      timeouts: {
        value: identityDomainsAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IdentityDomainsAppTimeouts",
      },
      trust_policies: {
        value: cdktf.listMapperHcl(identityDomainsAppTrustPoliciesToHclTerraform, true)(this._trustPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdentityDomainsAppTrustPoliciesList",
      },
      urnietfparamsscimschemasoracleidcsextension_oci_tags: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionOciTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionOciTagsList",
      },
      urnietfparamsscimschemasoracleidcsextensiondbcs_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensiondbcsApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensiondbcsAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionenterprise_app_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionenterpriseAppApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionenterpriseAppAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionform_fill_app_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionformFillAppApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionform_fill_app_template_app_template: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionformFillAppTemplateAppTemplateList",
      },
      urnietfparamsscimschemasoracleidcsextensionkerberos_realm_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionkerberosRealmApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionkerberosRealmAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionmanagedapp_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionmanagedappApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmanagedappAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionmulticloud_service_app_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionmulticloudServiceAppAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionopc_service_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionopcServiceApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionopcServiceAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionradius_app_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionradiusAppApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionradiusAppAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionrequestable_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionrequestableApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionrequestableAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionsaml_service_provider_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionsamlServiceProviderApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionsamlServiceProviderAppList",
      },
      urnietfparamsscimschemasoracleidcsextensionweb_tier_policy_app: {
        value: identityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppToHclTerraform(this._urnietfparamsscimschemasoracleidcsextensionwebTierPolicyApp.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IdentityDomainsAppUrnietfparamsscimschemasoracleidcsextensionwebTierPolicyAppList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
