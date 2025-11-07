// https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#allowed_logout_urls Tenant#allowed_logout_urls}
  */
  readonly allowedLogoutUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#default_audience Tenant#default_audience}
  */
  readonly defaultAudience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#default_directory Tenant#default_directory}
  */
  readonly defaultDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#default_redirection_uri Tenant#default_redirection_uri}
  */
  readonly defaultRedirectionUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enabled_locales Tenant#enabled_locales}
  */
  readonly enabledLocales?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#friendly_name Tenant#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#id Tenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#idle_session_lifetime Tenant#idle_session_lifetime}
  */
  readonly idleSessionLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#picture_url Tenant#picture_url}
  */
  readonly pictureUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#sandbox_version Tenant#sandbox_version}
  */
  readonly sandboxVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#session_lifetime Tenant#session_lifetime}
  */
  readonly sessionLifetime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#support_email Tenant#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#support_url Tenant#support_url}
  */
  readonly supportUrl?: string;
  /**
  * change_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#change_password Tenant#change_password}
  */
  readonly changePassword?: TenantChangePassword;
  /**
  * error_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#error_page Tenant#error_page}
  */
  readonly errorPage?: TenantErrorPage;
  /**
  * flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#flags Tenant#flags}
  */
  readonly flags?: TenantFlags;
  /**
  * guardian_mfa_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#guardian_mfa_page Tenant#guardian_mfa_page}
  */
  readonly guardianMfaPage?: TenantGuardianMfaPage;
  /**
  * universal_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#universal_login Tenant#universal_login}
  */
  readonly universalLogin?: TenantUniversalLogin;
}
export interface TenantChangePassword {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#html Tenant#html}
  */
  readonly html: string;
}

export function tenantChangePasswordToTerraform(struct?: TenantChangePasswordOutputReference | TenantChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    html: cdktf.stringToTerraform(struct!.html),
  }
}


export function tenantChangePasswordToHclTerraform(struct?: TenantChangePasswordOutputReference | TenantChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    html: {
      value: cdktf.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantChangePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantChangePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantChangePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._html = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._html = value.html;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }
}
export interface TenantErrorPage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#html Tenant#html}
  */
  readonly html: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#show_log_link Tenant#show_log_link}
  */
  readonly showLogLink: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#url Tenant#url}
  */
  readonly url: string;
}

export function tenantErrorPageToTerraform(struct?: TenantErrorPageOutputReference | TenantErrorPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    html: cdktf.stringToTerraform(struct!.html),
    show_log_link: cdktf.booleanToTerraform(struct!.showLogLink),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function tenantErrorPageToHclTerraform(struct?: TenantErrorPageOutputReference | TenantErrorPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    html: {
      value: cdktf.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_log_link: {
      value: cdktf.booleanToHclTerraform(struct!.showLogLink),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantErrorPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantErrorPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    if (this._showLogLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.showLogLink = this._showLogLink;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantErrorPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._html = undefined;
      this._showLogLink = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._html = value.html;
      this._showLogLink = value.showLogLink;
      this._url = value.url;
    }
  }

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }

  // show_log_link - computed: false, optional: false, required: true
  private _showLogLink?: boolean | cdktf.IResolvable; 
  public get showLogLink() {
    return this.getBooleanAttribute('show_log_link');
  }
  public set showLogLink(value: boolean | cdktf.IResolvable) {
    this._showLogLink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogLinkInput() {
    return this._showLogLink;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TenantFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#change_pwd_flow_v1 Tenant#change_pwd_flow_v1}
  */
  readonly changePwdFlowV1?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#disable_clickjack_protection_headers Tenant#disable_clickjack_protection_headers}
  */
  readonly disableClickjackProtectionHeaders?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enable_apis_section Tenant#enable_apis_section}
  */
  readonly enableApisSection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enable_client_connections Tenant#enable_client_connections}
  */
  readonly enableClientConnections?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enable_custom_domain_in_emails Tenant#enable_custom_domain_in_emails}
  */
  readonly enableCustomDomainInEmails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enable_dynamic_client_registration Tenant#enable_dynamic_client_registration}
  */
  readonly enableDynamicClientRegistration?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enable_legacy_logs_search_v2 Tenant#enable_legacy_logs_search_v2}
  */
  readonly enableLegacyLogsSearchV2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enable_pipeline2 Tenant#enable_pipeline2}
  */
  readonly enablePipeline2?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enable_public_signup_user_exists_error Tenant#enable_public_signup_user_exists_error}
  */
  readonly enablePublicSignupUserExistsError?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#universal_login Tenant#universal_login}
  */
  readonly universalLogin?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#use_scope_descriptions_for_consent Tenant#use_scope_descriptions_for_consent}
  */
  readonly useScopeDescriptionsForConsent?: boolean | cdktf.IResolvable;
}

export function tenantFlagsToTerraform(struct?: TenantFlagsOutputReference | TenantFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_pwd_flow_v1: cdktf.booleanToTerraform(struct!.changePwdFlowV1),
    disable_clickjack_protection_headers: cdktf.booleanToTerraform(struct!.disableClickjackProtectionHeaders),
    enable_apis_section: cdktf.booleanToTerraform(struct!.enableApisSection),
    enable_client_connections: cdktf.booleanToTerraform(struct!.enableClientConnections),
    enable_custom_domain_in_emails: cdktf.booleanToTerraform(struct!.enableCustomDomainInEmails),
    enable_dynamic_client_registration: cdktf.booleanToTerraform(struct!.enableDynamicClientRegistration),
    enable_legacy_logs_search_v2: cdktf.booleanToTerraform(struct!.enableLegacyLogsSearchV2),
    enable_pipeline2: cdktf.booleanToTerraform(struct!.enablePipeline2),
    enable_public_signup_user_exists_error: cdktf.booleanToTerraform(struct!.enablePublicSignupUserExistsError),
    universal_login: cdktf.booleanToTerraform(struct!.universalLogin),
    use_scope_descriptions_for_consent: cdktf.booleanToTerraform(struct!.useScopeDescriptionsForConsent),
  }
}


export function tenantFlagsToHclTerraform(struct?: TenantFlagsOutputReference | TenantFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_pwd_flow_v1: {
      value: cdktf.booleanToHclTerraform(struct!.changePwdFlowV1),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_clickjack_protection_headers: {
      value: cdktf.booleanToHclTerraform(struct!.disableClickjackProtectionHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_apis_section: {
      value: cdktf.booleanToHclTerraform(struct!.enableApisSection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_client_connections: {
      value: cdktf.booleanToHclTerraform(struct!.enableClientConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_custom_domain_in_emails: {
      value: cdktf.booleanToHclTerraform(struct!.enableCustomDomainInEmails),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_dynamic_client_registration: {
      value: cdktf.booleanToHclTerraform(struct!.enableDynamicClientRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_legacy_logs_search_v2: {
      value: cdktf.booleanToHclTerraform(struct!.enableLegacyLogsSearchV2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_pipeline2: {
      value: cdktf.booleanToHclTerraform(struct!.enablePipeline2),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_public_signup_user_exists_error: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicSignupUserExistsError),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    universal_login: {
      value: cdktf.booleanToHclTerraform(struct!.universalLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_scope_descriptions_for_consent: {
      value: cdktf.booleanToHclTerraform(struct!.useScopeDescriptionsForConsent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changePwdFlowV1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.changePwdFlowV1 = this._changePwdFlowV1;
    }
    if (this._disableClickjackProtectionHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClickjackProtectionHeaders = this._disableClickjackProtectionHeaders;
    }
    if (this._enableApisSection !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableApisSection = this._enableApisSection;
    }
    if (this._enableClientConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableClientConnections = this._enableClientConnections;
    }
    if (this._enableCustomDomainInEmails !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCustomDomainInEmails = this._enableCustomDomainInEmails;
    }
    if (this._enableDynamicClientRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDynamicClientRegistration = this._enableDynamicClientRegistration;
    }
    if (this._enableLegacyLogsSearchV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLegacyLogsSearchV2 = this._enableLegacyLogsSearchV2;
    }
    if (this._enablePipeline2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePipeline2 = this._enablePipeline2;
    }
    if (this._enablePublicSignupUserExistsError !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicSignupUserExistsError = this._enablePublicSignupUserExistsError;
    }
    if (this._universalLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.universalLogin = this._universalLogin;
    }
    if (this._useScopeDescriptionsForConsent !== undefined) {
      hasAnyValues = true;
      internalValueResult.useScopeDescriptionsForConsent = this._useScopeDescriptionsForConsent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changePwdFlowV1 = undefined;
      this._disableClickjackProtectionHeaders = undefined;
      this._enableApisSection = undefined;
      this._enableClientConnections = undefined;
      this._enableCustomDomainInEmails = undefined;
      this._enableDynamicClientRegistration = undefined;
      this._enableLegacyLogsSearchV2 = undefined;
      this._enablePipeline2 = undefined;
      this._enablePublicSignupUserExistsError = undefined;
      this._universalLogin = undefined;
      this._useScopeDescriptionsForConsent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changePwdFlowV1 = value.changePwdFlowV1;
      this._disableClickjackProtectionHeaders = value.disableClickjackProtectionHeaders;
      this._enableApisSection = value.enableApisSection;
      this._enableClientConnections = value.enableClientConnections;
      this._enableCustomDomainInEmails = value.enableCustomDomainInEmails;
      this._enableDynamicClientRegistration = value.enableDynamicClientRegistration;
      this._enableLegacyLogsSearchV2 = value.enableLegacyLogsSearchV2;
      this._enablePipeline2 = value.enablePipeline2;
      this._enablePublicSignupUserExistsError = value.enablePublicSignupUserExistsError;
      this._universalLogin = value.universalLogin;
      this._useScopeDescriptionsForConsent = value.useScopeDescriptionsForConsent;
    }
  }

  // change_pwd_flow_v1 - computed: true, optional: true, required: false
  private _changePwdFlowV1?: boolean | cdktf.IResolvable; 
  public get changePwdFlowV1() {
    return this.getBooleanAttribute('change_pwd_flow_v1');
  }
  public set changePwdFlowV1(value: boolean | cdktf.IResolvable) {
    this._changePwdFlowV1 = value;
  }
  public resetChangePwdFlowV1() {
    this._changePwdFlowV1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePwdFlowV1Input() {
    return this._changePwdFlowV1;
  }

  // disable_clickjack_protection_headers - computed: true, optional: true, required: false
  private _disableClickjackProtectionHeaders?: boolean | cdktf.IResolvable; 
  public get disableClickjackProtectionHeaders() {
    return this.getBooleanAttribute('disable_clickjack_protection_headers');
  }
  public set disableClickjackProtectionHeaders(value: boolean | cdktf.IResolvable) {
    this._disableClickjackProtectionHeaders = value;
  }
  public resetDisableClickjackProtectionHeaders() {
    this._disableClickjackProtectionHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableClickjackProtectionHeadersInput() {
    return this._disableClickjackProtectionHeaders;
  }

  // enable_apis_section - computed: true, optional: true, required: false
  private _enableApisSection?: boolean | cdktf.IResolvable; 
  public get enableApisSection() {
    return this.getBooleanAttribute('enable_apis_section');
  }
  public set enableApisSection(value: boolean | cdktf.IResolvable) {
    this._enableApisSection = value;
  }
  public resetEnableApisSection() {
    this._enableApisSection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableApisSectionInput() {
    return this._enableApisSection;
  }

  // enable_client_connections - computed: true, optional: true, required: false
  private _enableClientConnections?: boolean | cdktf.IResolvable; 
  public get enableClientConnections() {
    return this.getBooleanAttribute('enable_client_connections');
  }
  public set enableClientConnections(value: boolean | cdktf.IResolvable) {
    this._enableClientConnections = value;
  }
  public resetEnableClientConnections() {
    this._enableClientConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableClientConnectionsInput() {
    return this._enableClientConnections;
  }

  // enable_custom_domain_in_emails - computed: true, optional: true, required: false
  private _enableCustomDomainInEmails?: boolean | cdktf.IResolvable; 
  public get enableCustomDomainInEmails() {
    return this.getBooleanAttribute('enable_custom_domain_in_emails');
  }
  public set enableCustomDomainInEmails(value: boolean | cdktf.IResolvable) {
    this._enableCustomDomainInEmails = value;
  }
  public resetEnableCustomDomainInEmails() {
    this._enableCustomDomainInEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCustomDomainInEmailsInput() {
    return this._enableCustomDomainInEmails;
  }

  // enable_dynamic_client_registration - computed: true, optional: true, required: false
  private _enableDynamicClientRegistration?: boolean | cdktf.IResolvable; 
  public get enableDynamicClientRegistration() {
    return this.getBooleanAttribute('enable_dynamic_client_registration');
  }
  public set enableDynamicClientRegistration(value: boolean | cdktf.IResolvable) {
    this._enableDynamicClientRegistration = value;
  }
  public resetEnableDynamicClientRegistration() {
    this._enableDynamicClientRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDynamicClientRegistrationInput() {
    return this._enableDynamicClientRegistration;
  }

  // enable_legacy_logs_search_v2 - computed: true, optional: true, required: false
  private _enableLegacyLogsSearchV2?: boolean | cdktf.IResolvable; 
  public get enableLegacyLogsSearchV2() {
    return this.getBooleanAttribute('enable_legacy_logs_search_v2');
  }
  public set enableLegacyLogsSearchV2(value: boolean | cdktf.IResolvable) {
    this._enableLegacyLogsSearchV2 = value;
  }
  public resetEnableLegacyLogsSearchV2() {
    this._enableLegacyLogsSearchV2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyLogsSearchV2Input() {
    return this._enableLegacyLogsSearchV2;
  }

  // enable_pipeline2 - computed: true, optional: true, required: false
  private _enablePipeline2?: boolean | cdktf.IResolvable; 
  public get enablePipeline2() {
    return this.getBooleanAttribute('enable_pipeline2');
  }
  public set enablePipeline2(value: boolean | cdktf.IResolvable) {
    this._enablePipeline2 = value;
  }
  public resetEnablePipeline2() {
    this._enablePipeline2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePipeline2Input() {
    return this._enablePipeline2;
  }

  // enable_public_signup_user_exists_error - computed: true, optional: true, required: false
  private _enablePublicSignupUserExistsError?: boolean | cdktf.IResolvable; 
  public get enablePublicSignupUserExistsError() {
    return this.getBooleanAttribute('enable_public_signup_user_exists_error');
  }
  public set enablePublicSignupUserExistsError(value: boolean | cdktf.IResolvable) {
    this._enablePublicSignupUserExistsError = value;
  }
  public resetEnablePublicSignupUserExistsError() {
    this._enablePublicSignupUserExistsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicSignupUserExistsErrorInput() {
    return this._enablePublicSignupUserExistsError;
  }

  // universal_login - computed: true, optional: true, required: false
  private _universalLogin?: boolean | cdktf.IResolvable; 
  public get universalLogin() {
    return this.getBooleanAttribute('universal_login');
  }
  public set universalLogin(value: boolean | cdktf.IResolvable) {
    this._universalLogin = value;
  }
  public resetUniversalLogin() {
    this._universalLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalLoginInput() {
    return this._universalLogin;
  }

  // use_scope_descriptions_for_consent - computed: true, optional: true, required: false
  private _useScopeDescriptionsForConsent?: boolean | cdktf.IResolvable; 
  public get useScopeDescriptionsForConsent() {
    return this.getBooleanAttribute('use_scope_descriptions_for_consent');
  }
  public set useScopeDescriptionsForConsent(value: boolean | cdktf.IResolvable) {
    this._useScopeDescriptionsForConsent = value;
  }
  public resetUseScopeDescriptionsForConsent() {
    this._useScopeDescriptionsForConsent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useScopeDescriptionsForConsentInput() {
    return this._useScopeDescriptionsForConsent;
  }
}
export interface TenantGuardianMfaPage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#html Tenant#html}
  */
  readonly html: string;
}

export function tenantGuardianMfaPageToTerraform(struct?: TenantGuardianMfaPageOutputReference | TenantGuardianMfaPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    html: cdktf.stringToTerraform(struct!.html),
  }
}


export function tenantGuardianMfaPageToHclTerraform(struct?: TenantGuardianMfaPageOutputReference | TenantGuardianMfaPage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    html: {
      value: cdktf.stringToHclTerraform(struct!.html),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantGuardianMfaPageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantGuardianMfaPage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._html !== undefined) {
      hasAnyValues = true;
      internalValueResult.html = this._html;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantGuardianMfaPage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._html = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._html = value.html;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // html - computed: false, optional: false, required: true
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }
}
export interface TenantUniversalLoginColors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#page_background Tenant#page_background}
  */
  readonly pageBackground?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#primary Tenant#primary}
  */
  readonly primary?: string;
}

export function tenantUniversalLoginColorsToTerraform(struct?: TenantUniversalLoginColorsOutputReference | TenantUniversalLoginColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    page_background: cdktf.stringToTerraform(struct!.pageBackground),
    primary: cdktf.stringToTerraform(struct!.primary),
  }
}


export function tenantUniversalLoginColorsToHclTerraform(struct?: TenantUniversalLoginColorsOutputReference | TenantUniversalLoginColors): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    page_background: {
      value: cdktf.stringToHclTerraform(struct!.pageBackground),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantUniversalLoginColorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantUniversalLoginColors | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pageBackground !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageBackground = this._pageBackground;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantUniversalLoginColors | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pageBackground = undefined;
      this._primary = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pageBackground = value.pageBackground;
      this._primary = value.primary;
    }
  }

  // page_background - computed: true, optional: true, required: false
  private _pageBackground?: string; 
  public get pageBackground() {
    return this.getStringAttribute('page_background');
  }
  public set pageBackground(value: string) {
    this._pageBackground = value;
  }
  public resetPageBackground() {
    this._pageBackground = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageBackgroundInput() {
    return this._pageBackground;
  }

  // primary - computed: true, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }
}
export interface TenantUniversalLogin {
  /**
  * colors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#colors Tenant#colors}
  */
  readonly colors?: TenantUniversalLoginColors;
}

export function tenantUniversalLoginToTerraform(struct?: TenantUniversalLoginOutputReference | TenantUniversalLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    colors: tenantUniversalLoginColorsToTerraform(struct!.colors),
  }
}


export function tenantUniversalLoginToHclTerraform(struct?: TenantUniversalLoginOutputReference | TenantUniversalLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    colors: {
      value: tenantUniversalLoginColorsToHclTerraform(struct!.colors),
      isBlock: true,
      type: "list",
      storageClassType: "TenantUniversalLoginColorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantUniversalLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantUniversalLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._colors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.colors = this._colors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantUniversalLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._colors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._colors.internalValue = value.colors;
    }
  }

  // colors - computed: false, optional: true, required: false
  private _colors = new TenantUniversalLoginColorsOutputReference(this, "colors");
  public get colors() {
    return this._colors;
  }
  public putColors(value: TenantUniversalLoginColors) {
    this._colors.internalValue = value;
  }
  public resetColors() {
    this._colors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorsInput() {
    return this._colors.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant auth0_tenant}
*/
export class Tenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tenant to import
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/alexkappa/auth0/0.26.2/docs/resources/tenant auth0_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConfig = {}
  */
  public constructor(scope: Construct, id: string, config: TenantConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0_tenant',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '0.26.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedLogoutUrls = config.allowedLogoutUrls;
    this._defaultAudience = config.defaultAudience;
    this._defaultDirectory = config.defaultDirectory;
    this._defaultRedirectionUri = config.defaultRedirectionUri;
    this._enabledLocales = config.enabledLocales;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._idleSessionLifetime = config.idleSessionLifetime;
    this._pictureUrl = config.pictureUrl;
    this._sandboxVersion = config.sandboxVersion;
    this._sessionLifetime = config.sessionLifetime;
    this._supportEmail = config.supportEmail;
    this._supportUrl = config.supportUrl;
    this._changePassword.internalValue = config.changePassword;
    this._errorPage.internalValue = config.errorPage;
    this._flags.internalValue = config.flags;
    this._guardianMfaPage.internalValue = config.guardianMfaPage;
    this._universalLogin.internalValue = config.universalLogin;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_logout_urls - computed: true, optional: true, required: false
  private _allowedLogoutUrls?: string[]; 
  public get allowedLogoutUrls() {
    return this.getListAttribute('allowed_logout_urls');
  }
  public set allowedLogoutUrls(value: string[]) {
    this._allowedLogoutUrls = value;
  }
  public resetAllowedLogoutUrls() {
    this._allowedLogoutUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedLogoutUrlsInput() {
    return this._allowedLogoutUrls;
  }

  // default_audience - computed: true, optional: true, required: false
  private _defaultAudience?: string; 
  public get defaultAudience() {
    return this.getStringAttribute('default_audience');
  }
  public set defaultAudience(value: string) {
    this._defaultAudience = value;
  }
  public resetDefaultAudience() {
    this._defaultAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAudienceInput() {
    return this._defaultAudience;
  }

  // default_directory - computed: true, optional: true, required: false
  private _defaultDirectory?: string; 
  public get defaultDirectory() {
    return this.getStringAttribute('default_directory');
  }
  public set defaultDirectory(value: string) {
    this._defaultDirectory = value;
  }
  public resetDefaultDirectory() {
    this._defaultDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDirectoryInput() {
    return this._defaultDirectory;
  }

  // default_redirection_uri - computed: true, optional: true, required: false
  private _defaultRedirectionUri?: string; 
  public get defaultRedirectionUri() {
    return this.getStringAttribute('default_redirection_uri');
  }
  public set defaultRedirectionUri(value: string) {
    this._defaultRedirectionUri = value;
  }
  public resetDefaultRedirectionUri() {
    this._defaultRedirectionUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRedirectionUriInput() {
    return this._defaultRedirectionUri;
  }

  // enabled_locales - computed: true, optional: true, required: false
  private _enabledLocales?: string[]; 
  public get enabledLocales() {
    return this.getListAttribute('enabled_locales');
  }
  public set enabledLocales(value: string[]) {
    this._enabledLocales = value;
  }
  public resetEnabledLocales() {
    this._enabledLocales = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledLocalesInput() {
    return this._enabledLocales;
  }

  // friendly_name - computed: true, optional: true, required: false
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

  // idle_session_lifetime - computed: true, optional: true, required: false
  private _idleSessionLifetime?: number; 
  public get idleSessionLifetime() {
    return this.getNumberAttribute('idle_session_lifetime');
  }
  public set idleSessionLifetime(value: number) {
    this._idleSessionLifetime = value;
  }
  public resetIdleSessionLifetime() {
    this._idleSessionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleSessionLifetimeInput() {
    return this._idleSessionLifetime;
  }

  // picture_url - computed: true, optional: true, required: false
  private _pictureUrl?: string; 
  public get pictureUrl() {
    return this.getStringAttribute('picture_url');
  }
  public set pictureUrl(value: string) {
    this._pictureUrl = value;
  }
  public resetPictureUrl() {
    this._pictureUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pictureUrlInput() {
    return this._pictureUrl;
  }

  // sandbox_version - computed: true, optional: true, required: false
  private _sandboxVersion?: string; 
  public get sandboxVersion() {
    return this.getStringAttribute('sandbox_version');
  }
  public set sandboxVersion(value: string) {
    this._sandboxVersion = value;
  }
  public resetSandboxVersion() {
    this._sandboxVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sandboxVersionInput() {
    return this._sandboxVersion;
  }

  // session_lifetime - computed: true, optional: true, required: false
  private _sessionLifetime?: number; 
  public get sessionLifetime() {
    return this.getNumberAttribute('session_lifetime');
  }
  public set sessionLifetime(value: number) {
    this._sessionLifetime = value;
  }
  public resetSessionLifetime() {
    this._sessionLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLifetimeInput() {
    return this._sessionLifetime;
  }

  // support_email - computed: true, optional: true, required: false
  private _supportEmail?: string; 
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  public resetSupportEmail() {
    this._supportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail;
  }

  // support_url - computed: true, optional: true, required: false
  private _supportUrl?: string; 
  public get supportUrl() {
    return this.getStringAttribute('support_url');
  }
  public set supportUrl(value: string) {
    this._supportUrl = value;
  }
  public resetSupportUrl() {
    this._supportUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportUrlInput() {
    return this._supportUrl;
  }

  // change_password - computed: false, optional: true, required: false
  private _changePassword = new TenantChangePasswordOutputReference(this, "change_password");
  public get changePassword() {
    return this._changePassword;
  }
  public putChangePassword(value: TenantChangePassword) {
    this._changePassword.internalValue = value;
  }
  public resetChangePassword() {
    this._changePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword.internalValue;
  }

  // error_page - computed: false, optional: true, required: false
  private _errorPage = new TenantErrorPageOutputReference(this, "error_page");
  public get errorPage() {
    return this._errorPage;
  }
  public putErrorPage(value: TenantErrorPage) {
    this._errorPage.internalValue = value;
  }
  public resetErrorPage() {
    this._errorPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorPageInput() {
    return this._errorPage.internalValue;
  }

  // flags - computed: false, optional: true, required: false
  private _flags = new TenantFlagsOutputReference(this, "flags");
  public get flags() {
    return this._flags;
  }
  public putFlags(value: TenantFlags) {
    this._flags.internalValue = value;
  }
  public resetFlags() {
    this._flags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags.internalValue;
  }

  // guardian_mfa_page - computed: false, optional: true, required: false
  private _guardianMfaPage = new TenantGuardianMfaPageOutputReference(this, "guardian_mfa_page");
  public get guardianMfaPage() {
    return this._guardianMfaPage;
  }
  public putGuardianMfaPage(value: TenantGuardianMfaPage) {
    this._guardianMfaPage.internalValue = value;
  }
  public resetGuardianMfaPage() {
    this._guardianMfaPage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardianMfaPageInput() {
    return this._guardianMfaPage.internalValue;
  }

  // universal_login - computed: false, optional: true, required: false
  private _universalLogin = new TenantUniversalLoginOutputReference(this, "universal_login");
  public get universalLogin() {
    return this._universalLogin;
  }
  public putUniversalLogin(value: TenantUniversalLogin) {
    this._universalLogin.internalValue = value;
  }
  public resetUniversalLogin() {
    this._universalLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get universalLoginInput() {
    return this._universalLogin.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedLogoutUrls),
      default_audience: cdktf.stringToTerraform(this._defaultAudience),
      default_directory: cdktf.stringToTerraform(this._defaultDirectory),
      default_redirection_uri: cdktf.stringToTerraform(this._defaultRedirectionUri),
      enabled_locales: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledLocales),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      idle_session_lifetime: cdktf.numberToTerraform(this._idleSessionLifetime),
      picture_url: cdktf.stringToTerraform(this._pictureUrl),
      sandbox_version: cdktf.stringToTerraform(this._sandboxVersion),
      session_lifetime: cdktf.numberToTerraform(this._sessionLifetime),
      support_email: cdktf.stringToTerraform(this._supportEmail),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      change_password: tenantChangePasswordToTerraform(this._changePassword.internalValue),
      error_page: tenantErrorPageToTerraform(this._errorPage.internalValue),
      flags: tenantFlagsToTerraform(this._flags.internalValue),
      guardian_mfa_page: tenantGuardianMfaPageToTerraform(this._guardianMfaPage.internalValue),
      universal_login: tenantUniversalLoginToTerraform(this._universalLogin.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_logout_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedLogoutUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      default_audience: {
        value: cdktf.stringToHclTerraform(this._defaultAudience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_directory: {
        value: cdktf.stringToHclTerraform(this._defaultDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_redirection_uri: {
        value: cdktf.stringToHclTerraform(this._defaultRedirectionUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled_locales: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledLocales),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      idle_session_lifetime: {
        value: cdktf.numberToHclTerraform(this._idleSessionLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      picture_url: {
        value: cdktf.stringToHclTerraform(this._pictureUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sandbox_version: {
        value: cdktf.stringToHclTerraform(this._sandboxVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_lifetime: {
        value: cdktf.numberToHclTerraform(this._sessionLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      support_email: {
        value: cdktf.stringToHclTerraform(this._supportEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_url: {
        value: cdktf.stringToHclTerraform(this._supportUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_password: {
        value: tenantChangePasswordToHclTerraform(this._changePassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantChangePasswordList",
      },
      error_page: {
        value: tenantErrorPageToHclTerraform(this._errorPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantErrorPageList",
      },
      flags: {
        value: tenantFlagsToHclTerraform(this._flags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantFlagsList",
      },
      guardian_mfa_page: {
        value: tenantGuardianMfaPageToHclTerraform(this._guardianMfaPage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantGuardianMfaPageList",
      },
      universal_login: {
        value: tenantUniversalLoginToHclTerraform(this._universalLogin.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantUniversalLoginList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
