// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of supported ACR values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#acr_values_supported Tenant#acr_values_supported}
  */
  readonly acrValuesSupported?: string[];
  /**
  * Whether to accept an organization name instead of an ID on auth endpoints.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#allow_organization_name_in_authentication_api Tenant#allow_organization_name_in_authentication_api}
  */
  readonly allowOrganizationNameInAuthenticationApi?: boolean | cdktf.IResolvable;
  /**
  * URLs that Auth0 may redirect to after logout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#allowed_logout_urls Tenant#allowed_logout_urls}
  */
  readonly allowedLogoutUrls?: string[];
  /**
  * Whether to enable flexible factors for MFA in the PostLogin action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#customize_mfa_in_postlogin_action Tenant#customize_mfa_in_postlogin_action}
  */
  readonly customizeMfaInPostloginAction?: boolean | cdktf.IResolvable;
  /**
  * API Audience to use by default for API Authorization flows. This setting is equivalent to appending the audience to every authorization request made to the tenant for every application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#default_audience Tenant#default_audience}
  */
  readonly defaultAudience?: string;
  /**
  * Name of the connection to be used for Password Grant exchanges. Options include `auth0-adldap`, `ad`, `auth0`, `email`, `sms`, `waad`, and `adfs`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#default_directory Tenant#default_directory}
  */
  readonly defaultDirectory?: string;
  /**
  * The default absolute redirection URI. Must be HTTPS or an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#default_redirection_uri Tenant#default_redirection_uri}
  */
  readonly defaultRedirectionUri?: string;
  /**
  * Disable list of supported ACR values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#disable_acr_values_supported Tenant#disable_acr_values_supported}
  */
  readonly disableAcrValuesSupported?: boolean | cdktf.IResolvable;
  /**
  * Supported locales for the user interface. The first locale in the list will be used to set the default locale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enabled_locales Tenant#enabled_locales}
  */
  readonly enabledLocales?: string[];
  /**
  * Friendly name for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#friendly_name Tenant#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#id Tenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of hours during which a session can be inactive before the user must log in again.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#idle_session_lifetime Tenant#idle_session_lifetime}
  */
  readonly idleSessionLifetime?: number;
  /**
  * URL of logo to be shown for the tenant. Recommended size is 150px x 150px. If no URL is provided, the Auth0 logo will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#picture_url Tenant#picture_url}
  */
  readonly pictureUrl?: string;
  /**
  * Enable pushed authorization requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#pushed_authorization_requests_supported Tenant#pushed_authorization_requests_supported}
  */
  readonly pushedAuthorizationRequestsSupported?: boolean | cdktf.IResolvable;
  /**
  * Selected sandbox version for the extensibility environment, which allows you to use custom scripts to extend parts of Auth0's functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#sandbox_version Tenant#sandbox_version}
  */
  readonly sandboxVersion?: string;
  /**
  * Number of hours during which a session will stay valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#session_lifetime Tenant#session_lifetime}
  */
  readonly sessionLifetime?: number;
  /**
  * Indicates whether the confirmation prompt appears when using non-verifiable callback URIs. Set to true to skip the prompt, false to show it, or null to unset. Accepts (true/false/null) or ("true"/"false"/"null") 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#skip_non_verifiable_callback_uri_confirmation_prompt Tenant#skip_non_verifiable_callback_uri_confirmation_prompt}
  */
  readonly skipNonVerifiableCallbackUriConfirmationPrompt?: string;
  /**
  * Support email address for authenticating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#support_email Tenant#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Support URL for authenticating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#support_url Tenant#support_url}
  */
  readonly supportUrl?: string;
  /**
  * default_token_quota block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#default_token_quota Tenant#default_token_quota}
  */
  readonly defaultTokenQuota?: TenantDefaultTokenQuota;
  /**
  * error_page block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#error_page Tenant#error_page}
  */
  readonly errorPage?: TenantErrorPage;
  /**
  * flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#flags Tenant#flags}
  */
  readonly flags?: TenantFlags;
  /**
  * mtls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#mtls Tenant#mtls}
  */
  readonly mtls?: TenantMtls;
  /**
  * oidc_logout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#oidc_logout Tenant#oidc_logout}
  */
  readonly oidcLogout?: TenantOidcLogout;
  /**
  * session_cookie block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#session_cookie Tenant#session_cookie}
  */
  readonly sessionCookie?: TenantSessionCookie;
  /**
  * sessions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#sessions Tenant#sessions}
  */
  readonly sessions?: TenantSessions;
}
export interface TenantDefaultTokenQuotaClientsClientCredentials {
  /**
  * If enabled, the quota will be enforced and requests in excess of the quota will fail. If disabled, the quota will not be enforced, but notifications for requests exceeding the quota will be available in logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enforce Tenant#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of issued tokens per day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#per_day Tenant#per_day}
  */
  readonly perDay?: number;
  /**
  * Maximum number of issued tokens per hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#per_hour Tenant#per_hour}
  */
  readonly perHour?: number;
}

export function tenantDefaultTokenQuotaClientsClientCredentialsToTerraform(struct?: TenantDefaultTokenQuotaClientsClientCredentialsOutputReference | TenantDefaultTokenQuotaClientsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    per_day: cdktf.numberToTerraform(struct!.perDay),
    per_hour: cdktf.numberToTerraform(struct!.perHour),
  }
}


export function tenantDefaultTokenQuotaClientsClientCredentialsToHclTerraform(struct?: TenantDefaultTokenQuotaClientsClientCredentialsOutputReference | TenantDefaultTokenQuotaClientsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_day: {
      value: cdktf.numberToHclTerraform(struct!.perDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_hour: {
      value: cdktf.numberToHclTerraform(struct!.perHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantDefaultTokenQuotaClientsClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantDefaultTokenQuotaClientsClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._perDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.perDay = this._perDay;
    }
    if (this._perHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.perHour = this._perHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantDefaultTokenQuotaClientsClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._perDay = undefined;
      this._perHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._perDay = value.perDay;
      this._perHour = value.perHour;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // per_day - computed: false, optional: true, required: false
  private _perDay?: number; 
  public get perDay() {
    return this.getNumberAttribute('per_day');
  }
  public set perDay(value: number) {
    this._perDay = value;
  }
  public resetPerDay() {
    this._perDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perDayInput() {
    return this._perDay;
  }

  // per_hour - computed: false, optional: true, required: false
  private _perHour?: number; 
  public get perHour() {
    return this.getNumberAttribute('per_hour');
  }
  public set perHour(value: number) {
    this._perHour = value;
  }
  public resetPerHour() {
    this._perHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHourInput() {
    return this._perHour;
  }
}
export interface TenantDefaultTokenQuotaClients {
  /**
  * client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#client_credentials Tenant#client_credentials}
  */
  readonly clientCredentials: TenantDefaultTokenQuotaClientsClientCredentials;
}

export function tenantDefaultTokenQuotaClientsToTerraform(struct?: TenantDefaultTokenQuotaClientsOutputReference | TenantDefaultTokenQuotaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_credentials: tenantDefaultTokenQuotaClientsClientCredentialsToTerraform(struct!.clientCredentials),
  }
}


export function tenantDefaultTokenQuotaClientsToHclTerraform(struct?: TenantDefaultTokenQuotaClientsOutputReference | TenantDefaultTokenQuotaClients): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_credentials: {
      value: tenantDefaultTokenQuotaClientsClientCredentialsToHclTerraform(struct!.clientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "TenantDefaultTokenQuotaClientsClientCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantDefaultTokenQuotaClientsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantDefaultTokenQuotaClients | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentials = this._clientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantDefaultTokenQuotaClients | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCredentials.internalValue = value.clientCredentials;
    }
  }

  // client_credentials - computed: false, optional: false, required: true
  private _clientCredentials = new TenantDefaultTokenQuotaClientsClientCredentialsOutputReference(this, "client_credentials");
  public get clientCredentials() {
    return this._clientCredentials;
  }
  public putClientCredentials(value: TenantDefaultTokenQuotaClientsClientCredentials) {
    this._clientCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsInput() {
    return this._clientCredentials.internalValue;
  }
}
export interface TenantDefaultTokenQuotaOrganizationsClientCredentials {
  /**
  * If enabled, the quota will be enforced and requests in excess of the quota will fail. If disabled, the quota will not be enforced, but notifications for requests exceeding the quota will be available in logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enforce Tenant#enforce}
  */
  readonly enforce?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of issued tokens per day
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#per_day Tenant#per_day}
  */
  readonly perDay?: number;
  /**
  * Maximum number of issued tokens per hour
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#per_hour Tenant#per_hour}
  */
  readonly perHour?: number;
}

export function tenantDefaultTokenQuotaOrganizationsClientCredentialsToTerraform(struct?: TenantDefaultTokenQuotaOrganizationsClientCredentialsOutputReference | TenantDefaultTokenQuotaOrganizationsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: cdktf.booleanToTerraform(struct!.enforce),
    per_day: cdktf.numberToTerraform(struct!.perDay),
    per_hour: cdktf.numberToTerraform(struct!.perHour),
  }
}


export function tenantDefaultTokenQuotaOrganizationsClientCredentialsToHclTerraform(struct?: TenantDefaultTokenQuotaOrganizationsClientCredentialsOutputReference | TenantDefaultTokenQuotaOrganizationsClientCredentials): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: cdktf.booleanToHclTerraform(struct!.enforce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    per_day: {
      value: cdktf.numberToHclTerraform(struct!.perDay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_hour: {
      value: cdktf.numberToHclTerraform(struct!.perHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantDefaultTokenQuotaOrganizationsClientCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantDefaultTokenQuotaOrganizationsClientCredentials | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce;
    }
    if (this._perDay !== undefined) {
      hasAnyValues = true;
      internalValueResult.perDay = this._perDay;
    }
    if (this._perHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.perHour = this._perHour;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantDefaultTokenQuotaOrganizationsClientCredentials | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce = undefined;
      this._perDay = undefined;
      this._perHour = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce = value.enforce;
      this._perDay = value.perDay;
      this._perHour = value.perHour;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce?: boolean | cdktf.IResolvable; 
  public get enforce() {
    return this.getBooleanAttribute('enforce');
  }
  public set enforce(value: boolean | cdktf.IResolvable) {
    this._enforce = value;
  }
  public resetEnforce() {
    this._enforce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce;
  }

  // per_day - computed: false, optional: true, required: false
  private _perDay?: number; 
  public get perDay() {
    return this.getNumberAttribute('per_day');
  }
  public set perDay(value: number) {
    this._perDay = value;
  }
  public resetPerDay() {
    this._perDay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perDayInput() {
    return this._perDay;
  }

  // per_hour - computed: false, optional: true, required: false
  private _perHour?: number; 
  public get perHour() {
    return this.getNumberAttribute('per_hour');
  }
  public set perHour(value: number) {
    this._perHour = value;
  }
  public resetPerHour() {
    this._perHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perHourInput() {
    return this._perHour;
  }
}
export interface TenantDefaultTokenQuotaOrganizations {
  /**
  * client_credentials block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#client_credentials Tenant#client_credentials}
  */
  readonly clientCredentials: TenantDefaultTokenQuotaOrganizationsClientCredentials;
}

export function tenantDefaultTokenQuotaOrganizationsToTerraform(struct?: TenantDefaultTokenQuotaOrganizationsOutputReference | TenantDefaultTokenQuotaOrganizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_credentials: tenantDefaultTokenQuotaOrganizationsClientCredentialsToTerraform(struct!.clientCredentials),
  }
}


export function tenantDefaultTokenQuotaOrganizationsToHclTerraform(struct?: TenantDefaultTokenQuotaOrganizationsOutputReference | TenantDefaultTokenQuotaOrganizations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_credentials: {
      value: tenantDefaultTokenQuotaOrganizationsClientCredentialsToHclTerraform(struct!.clientCredentials),
      isBlock: true,
      type: "list",
      storageClassType: "TenantDefaultTokenQuotaOrganizationsClientCredentialsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantDefaultTokenQuotaOrganizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantDefaultTokenQuotaOrganizations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentials = this._clientCredentials?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantDefaultTokenQuotaOrganizations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientCredentials.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientCredentials.internalValue = value.clientCredentials;
    }
  }

  // client_credentials - computed: false, optional: false, required: true
  private _clientCredentials = new TenantDefaultTokenQuotaOrganizationsClientCredentialsOutputReference(this, "client_credentials");
  public get clientCredentials() {
    return this._clientCredentials;
  }
  public putClientCredentials(value: TenantDefaultTokenQuotaOrganizationsClientCredentials) {
    this._clientCredentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsInput() {
    return this._clientCredentials.internalValue;
  }
}
export interface TenantDefaultTokenQuota {
  /**
  * clients block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#clients Tenant#clients}
  */
  readonly clients?: TenantDefaultTokenQuotaClients;
  /**
  * organizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#organizations Tenant#organizations}
  */
  readonly organizations?: TenantDefaultTokenQuotaOrganizations;
}

export function tenantDefaultTokenQuotaToTerraform(struct?: TenantDefaultTokenQuotaOutputReference | TenantDefaultTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clients: tenantDefaultTokenQuotaClientsToTerraform(struct!.clients),
    organizations: tenantDefaultTokenQuotaOrganizationsToTerraform(struct!.organizations),
  }
}


export function tenantDefaultTokenQuotaToHclTerraform(struct?: TenantDefaultTokenQuotaOutputReference | TenantDefaultTokenQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clients: {
      value: tenantDefaultTokenQuotaClientsToHclTerraform(struct!.clients),
      isBlock: true,
      type: "list",
      storageClassType: "TenantDefaultTokenQuotaClientsList",
    },
    organizations: {
      value: tenantDefaultTokenQuotaOrganizationsToHclTerraform(struct!.organizations),
      isBlock: true,
      type: "list",
      storageClassType: "TenantDefaultTokenQuotaOrganizationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantDefaultTokenQuotaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantDefaultTokenQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clients?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clients = this._clients?.internalValue;
    }
    if (this._organizations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantDefaultTokenQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clients.internalValue = undefined;
      this._organizations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clients.internalValue = value.clients;
      this._organizations.internalValue = value.organizations;
    }
  }

  // clients - computed: false, optional: true, required: false
  private _clients = new TenantDefaultTokenQuotaClientsOutputReference(this, "clients");
  public get clients() {
    return this._clients;
  }
  public putClients(value: TenantDefaultTokenQuotaClients) {
    this._clients.internalValue = value;
  }
  public resetClients() {
    this._clients.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsInput() {
    return this._clients.internalValue;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations = new TenantDefaultTokenQuotaOrganizationsOutputReference(this, "organizations");
  public get organizations() {
    return this._organizations;
  }
  public putOrganizations(value: TenantDefaultTokenQuotaOrganizations) {
    this._organizations.internalValue = value;
  }
  public resetOrganizations() {
    this._organizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations.internalValue;
  }
}
export interface TenantErrorPage {
  /**
  * Custom Error HTML (Liquid syntax is supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#html Tenant#html}
  */
  readonly html?: string;
  /**
  * Whether to show the link to log as part of the default error page (true, default) or not to show the link (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#show_log_link Tenant#show_log_link}
  */
  readonly showLogLink?: boolean | cdktf.IResolvable;
  /**
  * URL to redirect to when an error occurs instead of showing the default error page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#url Tenant#url}
  */
  readonly url?: string;
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

  // html - computed: false, optional: true, required: false
  private _html?: string; 
  public get html() {
    return this.getStringAttribute('html');
  }
  public set html(value: string) {
    this._html = value;
  }
  public resetHtml() {
    this._html = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htmlInput() {
    return this._html;
  }

  // show_log_link - computed: false, optional: true, required: false
  private _showLogLink?: boolean | cdktf.IResolvable; 
  public get showLogLink() {
    return this.getBooleanAttribute('show_log_link');
  }
  public set showLogLink(value: boolean | cdktf.IResolvable) {
    this._showLogLink = value;
  }
  public resetShowLogLink() {
    this._showLogLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showLogLinkInput() {
    return this._showLogLink;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface TenantFlags {
  /**
  * Whether the legacy delegation endpoint will be enabled for your account (true) or not available (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#allow_legacy_delegation_grant_types Tenant#allow_legacy_delegation_grant_types}
  */
  readonly allowLegacyDelegationGrantTypes?: boolean | cdktf.IResolvable;
  /**
  * Whether the legacy `auth/ro` endpoint (used with resource owner password and passwordless features) will be enabled for your account (true) or not available (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#allow_legacy_ro_grant_types Tenant#allow_legacy_ro_grant_types}
  */
  readonly allowLegacyRoGrantTypes?: boolean | cdktf.IResolvable;
  /**
  * If enabled, customers can use Tokeninfo Endpoint, otherwise they can not use it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#allow_legacy_tokeninfo_endpoint Tenant#allow_legacy_tokeninfo_endpoint}
  */
  readonly allowLegacyTokeninfoEndpoint?: boolean | cdktf.IResolvable;
  /**
  * Enables new insights activity page view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#dashboard_insights_view Tenant#dashboard_insights_view}
  */
  readonly dashboardInsightsView?: boolean | cdktf.IResolvable;
  /**
  * Enables beta access to log streaming changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#dashboard_log_streams_next Tenant#dashboard_log_streams_next}
  */
  readonly dashboardLogStreamsNext?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether classic Universal Login prompts include additional security headers to prevent clickjacking.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#disable_clickjack_protection_headers Tenant#disable_clickjack_protection_headers}
  */
  readonly disableClickjackProtectionHeaders?: boolean | cdktf.IResolvable;
  /**
  * Disables SAML fields map fix for bad mappings with repeated attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#disable_fields_map_fix Tenant#disable_fields_map_fix}
  */
  readonly disableFieldsMapFix?: boolean | cdktf.IResolvable;
  /**
  * If true, SMS phone numbers will not be obfuscated in Management API GET calls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#disable_management_api_sms_obfuscation Tenant#disable_management_api_sms_obfuscation}
  */
  readonly disableManagementApiSmsObfuscation?: boolean | cdktf.IResolvable;
  /**
  * If enabled, users will be presented with an email verification prompt during their first login when using Azure AD or ADFS connections.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_adfs_waad_email_verification Tenant#enable_adfs_waad_email_verification}
  */
  readonly enableAdfsWaadEmailVerification?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the APIs section is enabled for the tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_apis_section Tenant#enable_apis_section}
  */
  readonly enableApisSection?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether all current connections should be enabled when a new client is created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_client_connections Tenant#enable_client_connections}
  */
  readonly enableClientConnections?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the tenant allows custom domains in emails. Before enabling this flag, you must have a custom domain with status: `ready`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_custom_domain_in_emails Tenant#enable_custom_domain_in_emails}
  */
  readonly enableCustomDomainInEmails?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the tenant allows dynamic client registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_dynamic_client_registration Tenant#enable_dynamic_client_registration}
  */
  readonly enableDynamicClientRegistration?: boolean | cdktf.IResolvable;
  /**
  * Whether ID tokens can be used to authorize some types of requests to API v2 (true) or not (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_idtoken_api2 Tenant#enable_idtoken_api2}
  */
  readonly enableIdtokenApi2?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use the older v2 legacy logs search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_legacy_logs_search_v2 Tenant#enable_legacy_logs_search_v2}
  */
  readonly enableLegacyLogsSearchV2?: boolean | cdktf.IResolvable;
  /**
  * Whether ID tokens and the userinfo endpoint includes a complete user profile (true) or only OpenID Connect claims (false).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_legacy_profile Tenant#enable_legacy_profile}
  */
  readonly enableLegacyProfile?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether advanced API Authorization scenarios are enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_pipeline2 Tenant#enable_pipeline2}
  */
  readonly enablePipeline2?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether the public sign up process shows a `user_exists` error if the user already exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_public_signup_user_exists_error Tenant#enable_public_signup_user_exists_error}
  */
  readonly enablePublicSignupUserExistsError?: boolean | cdktf.IResolvable;
  /**
  * Flag indicating whether users will not be prompted to confirm log in before SSO redirection. This flag applies to existing tenants only; new tenants have it enforced as true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_sso Tenant#enable_sso}
  */
  readonly enableSso?: boolean | cdktf.IResolvable;
  /**
  * Used to allow users to pick which factor to enroll with from the list of available MFA factors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#mfa_show_factor_list_on_enrollment Tenant#mfa_show_factor_list_on_enrollment}
  */
  readonly mfaShowFactorListOnEnrollment?: boolean | cdktf.IResolvable;
  /**
  * Do not Publish Enterprise Connections Information with IdP domains on the lock configuration file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#no_disclose_enterprise_connections Tenant#no_disclose_enterprise_connections}
  */
  readonly noDiscloseEnterpriseConnections?: boolean | cdktf.IResolvable;
  /**
  * Remove `alg` from jwks(JSON Web Key Sets).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#remove_alg_from_jwks Tenant#remove_alg_from_jwks}
  */
  readonly removeAlgFromJwks?: boolean | cdktf.IResolvable;
  /**
  * This Flag is not supported by the Auth0 Management API and will be removed in the next major release.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#require_pushed_authorization_requests Tenant#require_pushed_authorization_requests}
  */
  readonly requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable;
  /**
  * Delete underlying grant when a refresh token is revoked via the Authentication API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#revoke_refresh_token_grant Tenant#revoke_refresh_token_grant}
  */
  readonly revokeRefreshTokenGrant?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to use scope descriptions for consent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#use_scope_descriptions_for_consent Tenant#use_scope_descriptions_for_consent}
  */
  readonly useScopeDescriptionsForConsent?: boolean | cdktf.IResolvable;
}

export function tenantFlagsToTerraform(struct?: TenantFlagsOutputReference | TenantFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_legacy_delegation_grant_types: cdktf.booleanToTerraform(struct!.allowLegacyDelegationGrantTypes),
    allow_legacy_ro_grant_types: cdktf.booleanToTerraform(struct!.allowLegacyRoGrantTypes),
    allow_legacy_tokeninfo_endpoint: cdktf.booleanToTerraform(struct!.allowLegacyTokeninfoEndpoint),
    dashboard_insights_view: cdktf.booleanToTerraform(struct!.dashboardInsightsView),
    dashboard_log_streams_next: cdktf.booleanToTerraform(struct!.dashboardLogStreamsNext),
    disable_clickjack_protection_headers: cdktf.booleanToTerraform(struct!.disableClickjackProtectionHeaders),
    disable_fields_map_fix: cdktf.booleanToTerraform(struct!.disableFieldsMapFix),
    disable_management_api_sms_obfuscation: cdktf.booleanToTerraform(struct!.disableManagementApiSmsObfuscation),
    enable_adfs_waad_email_verification: cdktf.booleanToTerraform(struct!.enableAdfsWaadEmailVerification),
    enable_apis_section: cdktf.booleanToTerraform(struct!.enableApisSection),
    enable_client_connections: cdktf.booleanToTerraform(struct!.enableClientConnections),
    enable_custom_domain_in_emails: cdktf.booleanToTerraform(struct!.enableCustomDomainInEmails),
    enable_dynamic_client_registration: cdktf.booleanToTerraform(struct!.enableDynamicClientRegistration),
    enable_idtoken_api2: cdktf.booleanToTerraform(struct!.enableIdtokenApi2),
    enable_legacy_logs_search_v2: cdktf.booleanToTerraform(struct!.enableLegacyLogsSearchV2),
    enable_legacy_profile: cdktf.booleanToTerraform(struct!.enableLegacyProfile),
    enable_pipeline2: cdktf.booleanToTerraform(struct!.enablePipeline2),
    enable_public_signup_user_exists_error: cdktf.booleanToTerraform(struct!.enablePublicSignupUserExistsError),
    enable_sso: cdktf.booleanToTerraform(struct!.enableSso),
    mfa_show_factor_list_on_enrollment: cdktf.booleanToTerraform(struct!.mfaShowFactorListOnEnrollment),
    no_disclose_enterprise_connections: cdktf.booleanToTerraform(struct!.noDiscloseEnterpriseConnections),
    remove_alg_from_jwks: cdktf.booleanToTerraform(struct!.removeAlgFromJwks),
    require_pushed_authorization_requests: cdktf.booleanToTerraform(struct!.requirePushedAuthorizationRequests),
    revoke_refresh_token_grant: cdktf.booleanToTerraform(struct!.revokeRefreshTokenGrant),
    use_scope_descriptions_for_consent: cdktf.booleanToTerraform(struct!.useScopeDescriptionsForConsent),
  }
}


export function tenantFlagsToHclTerraform(struct?: TenantFlagsOutputReference | TenantFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_legacy_delegation_grant_types: {
      value: cdktf.booleanToHclTerraform(struct!.allowLegacyDelegationGrantTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_legacy_ro_grant_types: {
      value: cdktf.booleanToHclTerraform(struct!.allowLegacyRoGrantTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_legacy_tokeninfo_endpoint: {
      value: cdktf.booleanToHclTerraform(struct!.allowLegacyTokeninfoEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dashboard_insights_view: {
      value: cdktf.booleanToHclTerraform(struct!.dashboardInsightsView),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dashboard_log_streams_next: {
      value: cdktf.booleanToHclTerraform(struct!.dashboardLogStreamsNext),
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
    disable_fields_map_fix: {
      value: cdktf.booleanToHclTerraform(struct!.disableFieldsMapFix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_management_api_sms_obfuscation: {
      value: cdktf.booleanToHclTerraform(struct!.disableManagementApiSmsObfuscation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_adfs_waad_email_verification: {
      value: cdktf.booleanToHclTerraform(struct!.enableAdfsWaadEmailVerification),
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
    enable_idtoken_api2: {
      value: cdktf.booleanToHclTerraform(struct!.enableIdtokenApi2),
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
    enable_legacy_profile: {
      value: cdktf.booleanToHclTerraform(struct!.enableLegacyProfile),
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
    enable_sso: {
      value: cdktf.booleanToHclTerraform(struct!.enableSso),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mfa_show_factor_list_on_enrollment: {
      value: cdktf.booleanToHclTerraform(struct!.mfaShowFactorListOnEnrollment),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_disclose_enterprise_connections: {
      value: cdktf.booleanToHclTerraform(struct!.noDiscloseEnterpriseConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remove_alg_from_jwks: {
      value: cdktf.booleanToHclTerraform(struct!.removeAlgFromJwks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_pushed_authorization_requests: {
      value: cdktf.booleanToHclTerraform(struct!.requirePushedAuthorizationRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    revoke_refresh_token_grant: {
      value: cdktf.booleanToHclTerraform(struct!.revokeRefreshTokenGrant),
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
    if (this._allowLegacyDelegationGrantTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLegacyDelegationGrantTypes = this._allowLegacyDelegationGrantTypes;
    }
    if (this._allowLegacyRoGrantTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLegacyRoGrantTypes = this._allowLegacyRoGrantTypes;
    }
    if (this._allowLegacyTokeninfoEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowLegacyTokeninfoEndpoint = this._allowLegacyTokeninfoEndpoint;
    }
    if (this._dashboardInsightsView !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardInsightsView = this._dashboardInsightsView;
    }
    if (this._dashboardLogStreamsNext !== undefined) {
      hasAnyValues = true;
      internalValueResult.dashboardLogStreamsNext = this._dashboardLogStreamsNext;
    }
    if (this._disableClickjackProtectionHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableClickjackProtectionHeaders = this._disableClickjackProtectionHeaders;
    }
    if (this._disableFieldsMapFix !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableFieldsMapFix = this._disableFieldsMapFix;
    }
    if (this._disableManagementApiSmsObfuscation !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableManagementApiSmsObfuscation = this._disableManagementApiSmsObfuscation;
    }
    if (this._enableAdfsWaadEmailVerification !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAdfsWaadEmailVerification = this._enableAdfsWaadEmailVerification;
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
    if (this._enableIdtokenApi2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIdtokenApi2 = this._enableIdtokenApi2;
    }
    if (this._enableLegacyLogsSearchV2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLegacyLogsSearchV2 = this._enableLegacyLogsSearchV2;
    }
    if (this._enableLegacyProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLegacyProfile = this._enableLegacyProfile;
    }
    if (this._enablePipeline2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePipeline2 = this._enablePipeline2;
    }
    if (this._enablePublicSignupUserExistsError !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicSignupUserExistsError = this._enablePublicSignupUserExistsError;
    }
    if (this._enableSso !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSso = this._enableSso;
    }
    if (this._mfaShowFactorListOnEnrollment !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaShowFactorListOnEnrollment = this._mfaShowFactorListOnEnrollment;
    }
    if (this._noDiscloseEnterpriseConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.noDiscloseEnterpriseConnections = this._noDiscloseEnterpriseConnections;
    }
    if (this._removeAlgFromJwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeAlgFromJwks = this._removeAlgFromJwks;
    }
    if (this._requirePushedAuthorizationRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePushedAuthorizationRequests = this._requirePushedAuthorizationRequests;
    }
    if (this._revokeRefreshTokenGrant !== undefined) {
      hasAnyValues = true;
      internalValueResult.revokeRefreshTokenGrant = this._revokeRefreshTokenGrant;
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
      this._allowLegacyDelegationGrantTypes = undefined;
      this._allowLegacyRoGrantTypes = undefined;
      this._allowLegacyTokeninfoEndpoint = undefined;
      this._dashboardInsightsView = undefined;
      this._dashboardLogStreamsNext = undefined;
      this._disableClickjackProtectionHeaders = undefined;
      this._disableFieldsMapFix = undefined;
      this._disableManagementApiSmsObfuscation = undefined;
      this._enableAdfsWaadEmailVerification = undefined;
      this._enableApisSection = undefined;
      this._enableClientConnections = undefined;
      this._enableCustomDomainInEmails = undefined;
      this._enableDynamicClientRegistration = undefined;
      this._enableIdtokenApi2 = undefined;
      this._enableLegacyLogsSearchV2 = undefined;
      this._enableLegacyProfile = undefined;
      this._enablePipeline2 = undefined;
      this._enablePublicSignupUserExistsError = undefined;
      this._enableSso = undefined;
      this._mfaShowFactorListOnEnrollment = undefined;
      this._noDiscloseEnterpriseConnections = undefined;
      this._removeAlgFromJwks = undefined;
      this._requirePushedAuthorizationRequests = undefined;
      this._revokeRefreshTokenGrant = undefined;
      this._useScopeDescriptionsForConsent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowLegacyDelegationGrantTypes = value.allowLegacyDelegationGrantTypes;
      this._allowLegacyRoGrantTypes = value.allowLegacyRoGrantTypes;
      this._allowLegacyTokeninfoEndpoint = value.allowLegacyTokeninfoEndpoint;
      this._dashboardInsightsView = value.dashboardInsightsView;
      this._dashboardLogStreamsNext = value.dashboardLogStreamsNext;
      this._disableClickjackProtectionHeaders = value.disableClickjackProtectionHeaders;
      this._disableFieldsMapFix = value.disableFieldsMapFix;
      this._disableManagementApiSmsObfuscation = value.disableManagementApiSmsObfuscation;
      this._enableAdfsWaadEmailVerification = value.enableAdfsWaadEmailVerification;
      this._enableApisSection = value.enableApisSection;
      this._enableClientConnections = value.enableClientConnections;
      this._enableCustomDomainInEmails = value.enableCustomDomainInEmails;
      this._enableDynamicClientRegistration = value.enableDynamicClientRegistration;
      this._enableIdtokenApi2 = value.enableIdtokenApi2;
      this._enableLegacyLogsSearchV2 = value.enableLegacyLogsSearchV2;
      this._enableLegacyProfile = value.enableLegacyProfile;
      this._enablePipeline2 = value.enablePipeline2;
      this._enablePublicSignupUserExistsError = value.enablePublicSignupUserExistsError;
      this._enableSso = value.enableSso;
      this._mfaShowFactorListOnEnrollment = value.mfaShowFactorListOnEnrollment;
      this._noDiscloseEnterpriseConnections = value.noDiscloseEnterpriseConnections;
      this._removeAlgFromJwks = value.removeAlgFromJwks;
      this._requirePushedAuthorizationRequests = value.requirePushedAuthorizationRequests;
      this._revokeRefreshTokenGrant = value.revokeRefreshTokenGrant;
      this._useScopeDescriptionsForConsent = value.useScopeDescriptionsForConsent;
    }
  }

  // allow_legacy_delegation_grant_types - computed: true, optional: true, required: false
  private _allowLegacyDelegationGrantTypes?: boolean | cdktf.IResolvable; 
  public get allowLegacyDelegationGrantTypes() {
    return this.getBooleanAttribute('allow_legacy_delegation_grant_types');
  }
  public set allowLegacyDelegationGrantTypes(value: boolean | cdktf.IResolvable) {
    this._allowLegacyDelegationGrantTypes = value;
  }
  public resetAllowLegacyDelegationGrantTypes() {
    this._allowLegacyDelegationGrantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLegacyDelegationGrantTypesInput() {
    return this._allowLegacyDelegationGrantTypes;
  }

  // allow_legacy_ro_grant_types - computed: true, optional: true, required: false
  private _allowLegacyRoGrantTypes?: boolean | cdktf.IResolvable; 
  public get allowLegacyRoGrantTypes() {
    return this.getBooleanAttribute('allow_legacy_ro_grant_types');
  }
  public set allowLegacyRoGrantTypes(value: boolean | cdktf.IResolvable) {
    this._allowLegacyRoGrantTypes = value;
  }
  public resetAllowLegacyRoGrantTypes() {
    this._allowLegacyRoGrantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLegacyRoGrantTypesInput() {
    return this._allowLegacyRoGrantTypes;
  }

  // allow_legacy_tokeninfo_endpoint - computed: true, optional: true, required: false
  private _allowLegacyTokeninfoEndpoint?: boolean | cdktf.IResolvable; 
  public get allowLegacyTokeninfoEndpoint() {
    return this.getBooleanAttribute('allow_legacy_tokeninfo_endpoint');
  }
  public set allowLegacyTokeninfoEndpoint(value: boolean | cdktf.IResolvable) {
    this._allowLegacyTokeninfoEndpoint = value;
  }
  public resetAllowLegacyTokeninfoEndpoint() {
    this._allowLegacyTokeninfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowLegacyTokeninfoEndpointInput() {
    return this._allowLegacyTokeninfoEndpoint;
  }

  // dashboard_insights_view - computed: true, optional: true, required: false
  private _dashboardInsightsView?: boolean | cdktf.IResolvable; 
  public get dashboardInsightsView() {
    return this.getBooleanAttribute('dashboard_insights_view');
  }
  public set dashboardInsightsView(value: boolean | cdktf.IResolvable) {
    this._dashboardInsightsView = value;
  }
  public resetDashboardInsightsView() {
    this._dashboardInsightsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardInsightsViewInput() {
    return this._dashboardInsightsView;
  }

  // dashboard_log_streams_next - computed: true, optional: true, required: false
  private _dashboardLogStreamsNext?: boolean | cdktf.IResolvable; 
  public get dashboardLogStreamsNext() {
    return this.getBooleanAttribute('dashboard_log_streams_next');
  }
  public set dashboardLogStreamsNext(value: boolean | cdktf.IResolvable) {
    this._dashboardLogStreamsNext = value;
  }
  public resetDashboardLogStreamsNext() {
    this._dashboardLogStreamsNext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dashboardLogStreamsNextInput() {
    return this._dashboardLogStreamsNext;
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

  // disable_fields_map_fix - computed: true, optional: true, required: false
  private _disableFieldsMapFix?: boolean | cdktf.IResolvable; 
  public get disableFieldsMapFix() {
    return this.getBooleanAttribute('disable_fields_map_fix');
  }
  public set disableFieldsMapFix(value: boolean | cdktf.IResolvable) {
    this._disableFieldsMapFix = value;
  }
  public resetDisableFieldsMapFix() {
    this._disableFieldsMapFix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableFieldsMapFixInput() {
    return this._disableFieldsMapFix;
  }

  // disable_management_api_sms_obfuscation - computed: true, optional: true, required: false
  private _disableManagementApiSmsObfuscation?: boolean | cdktf.IResolvable; 
  public get disableManagementApiSmsObfuscation() {
    return this.getBooleanAttribute('disable_management_api_sms_obfuscation');
  }
  public set disableManagementApiSmsObfuscation(value: boolean | cdktf.IResolvable) {
    this._disableManagementApiSmsObfuscation = value;
  }
  public resetDisableManagementApiSmsObfuscation() {
    this._disableManagementApiSmsObfuscation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableManagementApiSmsObfuscationInput() {
    return this._disableManagementApiSmsObfuscation;
  }

  // enable_adfs_waad_email_verification - computed: true, optional: true, required: false
  private _enableAdfsWaadEmailVerification?: boolean | cdktf.IResolvable; 
  public get enableAdfsWaadEmailVerification() {
    return this.getBooleanAttribute('enable_adfs_waad_email_verification');
  }
  public set enableAdfsWaadEmailVerification(value: boolean | cdktf.IResolvable) {
    this._enableAdfsWaadEmailVerification = value;
  }
  public resetEnableAdfsWaadEmailVerification() {
    this._enableAdfsWaadEmailVerification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAdfsWaadEmailVerificationInput() {
    return this._enableAdfsWaadEmailVerification;
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

  // enable_idtoken_api2 - computed: true, optional: true, required: false
  private _enableIdtokenApi2?: boolean | cdktf.IResolvable; 
  public get enableIdtokenApi2() {
    return this.getBooleanAttribute('enable_idtoken_api2');
  }
  public set enableIdtokenApi2(value: boolean | cdktf.IResolvable) {
    this._enableIdtokenApi2 = value;
  }
  public resetEnableIdtokenApi2() {
    this._enableIdtokenApi2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdtokenApi2Input() {
    return this._enableIdtokenApi2;
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

  // enable_legacy_profile - computed: true, optional: true, required: false
  private _enableLegacyProfile?: boolean | cdktf.IResolvable; 
  public get enableLegacyProfile() {
    return this.getBooleanAttribute('enable_legacy_profile');
  }
  public set enableLegacyProfile(value: boolean | cdktf.IResolvable) {
    this._enableLegacyProfile = value;
  }
  public resetEnableLegacyProfile() {
    this._enableLegacyProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLegacyProfileInput() {
    return this._enableLegacyProfile;
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

  // enable_sso - computed: true, optional: true, required: false
  private _enableSso?: boolean | cdktf.IResolvable; 
  public get enableSso() {
    return this.getBooleanAttribute('enable_sso');
  }
  public set enableSso(value: boolean | cdktf.IResolvable) {
    this._enableSso = value;
  }
  public resetEnableSso() {
    this._enableSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSsoInput() {
    return this._enableSso;
  }

  // mfa_show_factor_list_on_enrollment - computed: true, optional: true, required: false
  private _mfaShowFactorListOnEnrollment?: boolean | cdktf.IResolvable; 
  public get mfaShowFactorListOnEnrollment() {
    return this.getBooleanAttribute('mfa_show_factor_list_on_enrollment');
  }
  public set mfaShowFactorListOnEnrollment(value: boolean | cdktf.IResolvable) {
    this._mfaShowFactorListOnEnrollment = value;
  }
  public resetMfaShowFactorListOnEnrollment() {
    this._mfaShowFactorListOnEnrollment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaShowFactorListOnEnrollmentInput() {
    return this._mfaShowFactorListOnEnrollment;
  }

  // no_disclose_enterprise_connections - computed: true, optional: true, required: false
  private _noDiscloseEnterpriseConnections?: boolean | cdktf.IResolvable; 
  public get noDiscloseEnterpriseConnections() {
    return this.getBooleanAttribute('no_disclose_enterprise_connections');
  }
  public set noDiscloseEnterpriseConnections(value: boolean | cdktf.IResolvable) {
    this._noDiscloseEnterpriseConnections = value;
  }
  public resetNoDiscloseEnterpriseConnections() {
    this._noDiscloseEnterpriseConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noDiscloseEnterpriseConnectionsInput() {
    return this._noDiscloseEnterpriseConnections;
  }

  // remove_alg_from_jwks - computed: true, optional: true, required: false
  private _removeAlgFromJwks?: boolean | cdktf.IResolvable; 
  public get removeAlgFromJwks() {
    return this.getBooleanAttribute('remove_alg_from_jwks');
  }
  public set removeAlgFromJwks(value: boolean | cdktf.IResolvable) {
    this._removeAlgFromJwks = value;
  }
  public resetRemoveAlgFromJwks() {
    this._removeAlgFromJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeAlgFromJwksInput() {
    return this._removeAlgFromJwks;
  }

  // require_pushed_authorization_requests - computed: true, optional: true, required: false
  private _requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable; 
  public get requirePushedAuthorizationRequests() {
    return this.getBooleanAttribute('require_pushed_authorization_requests');
  }
  public set requirePushedAuthorizationRequests(value: boolean | cdktf.IResolvable) {
    this._requirePushedAuthorizationRequests = value;
  }
  public resetRequirePushedAuthorizationRequests() {
    this._requirePushedAuthorizationRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePushedAuthorizationRequestsInput() {
    return this._requirePushedAuthorizationRequests;
  }

  // revoke_refresh_token_grant - computed: true, optional: true, required: false
  private _revokeRefreshTokenGrant?: boolean | cdktf.IResolvable; 
  public get revokeRefreshTokenGrant() {
    return this.getBooleanAttribute('revoke_refresh_token_grant');
  }
  public set revokeRefreshTokenGrant(value: boolean | cdktf.IResolvable) {
    this._revokeRefreshTokenGrant = value;
  }
  public resetRevokeRefreshTokenGrant() {
    this._revokeRefreshTokenGrant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeRefreshTokenGrantInput() {
    return this._revokeRefreshTokenGrant;
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
export interface TenantMtls {
  /**
  * Disable mTLS settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#disable Tenant#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Enable mTLS endpoint aliases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#enable_endpoint_aliases Tenant#enable_endpoint_aliases}
  */
  readonly enableEndpointAliases?: boolean | cdktf.IResolvable;
}

export function tenantMtlsToTerraform(struct?: TenantMtlsOutputReference | TenantMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable: cdktf.booleanToTerraform(struct!.disable),
    enable_endpoint_aliases: cdktf.booleanToTerraform(struct!.enableEndpointAliases),
  }
}


export function tenantMtlsToHclTerraform(struct?: TenantMtlsOutputReference | TenantMtls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable: {
      value: cdktf.booleanToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_endpoint_aliases: {
      value: cdktf.booleanToHclTerraform(struct!.enableEndpointAliases),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantMtlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantMtls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._enableEndpointAliases !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableEndpointAliases = this._enableEndpointAliases;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantMtls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disable = undefined;
      this._enableEndpointAliases = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disable = value.disable;
      this._enableEndpointAliases = value.enableEndpointAliases;
    }
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // enable_endpoint_aliases - computed: false, optional: true, required: false
  private _enableEndpointAliases?: boolean | cdktf.IResolvable; 
  public get enableEndpointAliases() {
    return this.getBooleanAttribute('enable_endpoint_aliases');
  }
  public set enableEndpointAliases(value: boolean | cdktf.IResolvable) {
    this._enableEndpointAliases = value;
  }
  public resetEnableEndpointAliases() {
    this._enableEndpointAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEndpointAliasesInput() {
    return this._enableEndpointAliases;
  }
}
export interface TenantOidcLogout {
  /**
  * Enable the end_session_endpoint URL in the .well-known discovery configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#rp_logout_end_session_endpoint_discovery Tenant#rp_logout_end_session_endpoint_discovery}
  */
  readonly rpLogoutEndSessionEndpointDiscovery: boolean | cdktf.IResolvable;
}

export function tenantOidcLogoutToTerraform(struct?: TenantOidcLogoutOutputReference | TenantOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rp_logout_end_session_endpoint_discovery: cdktf.booleanToTerraform(struct!.rpLogoutEndSessionEndpointDiscovery),
  }
}


export function tenantOidcLogoutToHclTerraform(struct?: TenantOidcLogoutOutputReference | TenantOidcLogout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rp_logout_end_session_endpoint_discovery: {
      value: cdktf.booleanToHclTerraform(struct!.rpLogoutEndSessionEndpointDiscovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantOidcLogoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantOidcLogout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpLogoutEndSessionEndpointDiscovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpLogoutEndSessionEndpointDiscovery = this._rpLogoutEndSessionEndpointDiscovery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantOidcLogout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rpLogoutEndSessionEndpointDiscovery = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rpLogoutEndSessionEndpointDiscovery = value.rpLogoutEndSessionEndpointDiscovery;
    }
  }

  // rp_logout_end_session_endpoint_discovery - computed: false, optional: false, required: true
  private _rpLogoutEndSessionEndpointDiscovery?: boolean | cdktf.IResolvable; 
  public get rpLogoutEndSessionEndpointDiscovery() {
    return this.getBooleanAttribute('rp_logout_end_session_endpoint_discovery');
  }
  public set rpLogoutEndSessionEndpointDiscovery(value: boolean | cdktf.IResolvable) {
    this._rpLogoutEndSessionEndpointDiscovery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rpLogoutEndSessionEndpointDiscoveryInput() {
    return this._rpLogoutEndSessionEndpointDiscovery;
  }
}
export interface TenantSessionCookie {
  /**
  * Behavior of tenant session cookie. Accepts either "persistent" or "non-persistent".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#mode Tenant#mode}
  */
  readonly mode?: string;
}

export function tenantSessionCookieToTerraform(struct?: TenantSessionCookieOutputReference | TenantSessionCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function tenantSessionCookieToHclTerraform(struct?: TenantSessionCookieOutputReference | TenantSessionCookie): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantSessionCookieOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantSessionCookie | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantSessionCookie | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface TenantSessions {
  /**
  * When active, users will be presented with a consent prompt to confirm the logout request if the request is not trustworthy. Turn off the consent prompt to bypass user confirmation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#oidc_logout_prompt_enabled Tenant#oidc_logout_prompt_enabled}
  */
  readonly oidcLogoutPromptEnabled: boolean | cdktf.IResolvable;
}

export function tenantSessionsToTerraform(struct?: TenantSessionsOutputReference | TenantSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oidc_logout_prompt_enabled: cdktf.booleanToTerraform(struct!.oidcLogoutPromptEnabled),
  }
}


export function tenantSessionsToHclTerraform(struct?: TenantSessionsOutputReference | TenantSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oidc_logout_prompt_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.oidcLogoutPromptEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantSessionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oidcLogoutPromptEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.oidcLogoutPromptEnabled = this._oidcLogoutPromptEnabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantSessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oidcLogoutPromptEnabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oidcLogoutPromptEnabled = value.oidcLogoutPromptEnabled;
    }
  }

  // oidc_logout_prompt_enabled - computed: false, optional: false, required: true
  private _oidcLogoutPromptEnabled?: boolean | cdktf.IResolvable; 
  public get oidcLogoutPromptEnabled() {
    return this.getBooleanAttribute('oidc_logout_prompt_enabled');
  }
  public set oidcLogoutPromptEnabled(value: boolean | cdktf.IResolvable) {
    this._oidcLogoutPromptEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcLogoutPromptEnabledInput() {
    return this._oidcLogoutPromptEnabled;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant auth0_tenant}
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
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/tenant auth0_tenant} Resource
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
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acrValuesSupported = config.acrValuesSupported;
    this._allowOrganizationNameInAuthenticationApi = config.allowOrganizationNameInAuthenticationApi;
    this._allowedLogoutUrls = config.allowedLogoutUrls;
    this._customizeMfaInPostloginAction = config.customizeMfaInPostloginAction;
    this._defaultAudience = config.defaultAudience;
    this._defaultDirectory = config.defaultDirectory;
    this._defaultRedirectionUri = config.defaultRedirectionUri;
    this._disableAcrValuesSupported = config.disableAcrValuesSupported;
    this._enabledLocales = config.enabledLocales;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._idleSessionLifetime = config.idleSessionLifetime;
    this._pictureUrl = config.pictureUrl;
    this._pushedAuthorizationRequestsSupported = config.pushedAuthorizationRequestsSupported;
    this._sandboxVersion = config.sandboxVersion;
    this._sessionLifetime = config.sessionLifetime;
    this._skipNonVerifiableCallbackUriConfirmationPrompt = config.skipNonVerifiableCallbackUriConfirmationPrompt;
    this._supportEmail = config.supportEmail;
    this._supportUrl = config.supportUrl;
    this._defaultTokenQuota.internalValue = config.defaultTokenQuota;
    this._errorPage.internalValue = config.errorPage;
    this._flags.internalValue = config.flags;
    this._mtls.internalValue = config.mtls;
    this._oidcLogout.internalValue = config.oidcLogout;
    this._sessionCookie.internalValue = config.sessionCookie;
    this._sessions.internalValue = config.sessions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acr_values_supported - computed: true, optional: true, required: false
  private _acrValuesSupported?: string[]; 
  public get acrValuesSupported() {
    return cdktf.Fn.tolist(this.getListAttribute('acr_values_supported'));
  }
  public set acrValuesSupported(value: string[]) {
    this._acrValuesSupported = value;
  }
  public resetAcrValuesSupported() {
    this._acrValuesSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrValuesSupportedInput() {
    return this._acrValuesSupported;
  }

  // allow_organization_name_in_authentication_api - computed: true, optional: true, required: false
  private _allowOrganizationNameInAuthenticationApi?: boolean | cdktf.IResolvable; 
  public get allowOrganizationNameInAuthenticationApi() {
    return this.getBooleanAttribute('allow_organization_name_in_authentication_api');
  }
  public set allowOrganizationNameInAuthenticationApi(value: boolean | cdktf.IResolvable) {
    this._allowOrganizationNameInAuthenticationApi = value;
  }
  public resetAllowOrganizationNameInAuthenticationApi() {
    this._allowOrganizationNameInAuthenticationApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOrganizationNameInAuthenticationApiInput() {
    return this._allowOrganizationNameInAuthenticationApi;
  }

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

  // customize_mfa_in_postlogin_action - computed: true, optional: true, required: false
  private _customizeMfaInPostloginAction?: boolean | cdktf.IResolvable; 
  public get customizeMfaInPostloginAction() {
    return this.getBooleanAttribute('customize_mfa_in_postlogin_action');
  }
  public set customizeMfaInPostloginAction(value: boolean | cdktf.IResolvable) {
    this._customizeMfaInPostloginAction = value;
  }
  public resetCustomizeMfaInPostloginAction() {
    this._customizeMfaInPostloginAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customizeMfaInPostloginActionInput() {
    return this._customizeMfaInPostloginAction;
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

  // disable_acr_values_supported - computed: true, optional: true, required: false
  private _disableAcrValuesSupported?: boolean | cdktf.IResolvable; 
  public get disableAcrValuesSupported() {
    return this.getBooleanAttribute('disable_acr_values_supported');
  }
  public set disableAcrValuesSupported(value: boolean | cdktf.IResolvable) {
    this._disableAcrValuesSupported = value;
  }
  public resetDisableAcrValuesSupported() {
    this._disableAcrValuesSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAcrValuesSupportedInput() {
    return this._disableAcrValuesSupported;
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

  // idle_session_lifetime - computed: false, optional: true, required: false
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

  // pushed_authorization_requests_supported - computed: true, optional: true, required: false
  private _pushedAuthorizationRequestsSupported?: boolean | cdktf.IResolvable; 
  public get pushedAuthorizationRequestsSupported() {
    return this.getBooleanAttribute('pushed_authorization_requests_supported');
  }
  public set pushedAuthorizationRequestsSupported(value: boolean | cdktf.IResolvable) {
    this._pushedAuthorizationRequestsSupported = value;
  }
  public resetPushedAuthorizationRequestsSupported() {
    this._pushedAuthorizationRequestsSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushedAuthorizationRequestsSupportedInput() {
    return this._pushedAuthorizationRequestsSupported;
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

  // session_lifetime - computed: false, optional: true, required: false
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

  // skip_non_verifiable_callback_uri_confirmation_prompt - computed: false, optional: true, required: false
  private _skipNonVerifiableCallbackUriConfirmationPrompt?: string; 
  public get skipNonVerifiableCallbackUriConfirmationPrompt() {
    return this.getStringAttribute('skip_non_verifiable_callback_uri_confirmation_prompt');
  }
  public set skipNonVerifiableCallbackUriConfirmationPrompt(value: string) {
    this._skipNonVerifiableCallbackUriConfirmationPrompt = value;
  }
  public resetSkipNonVerifiableCallbackUriConfirmationPrompt() {
    this._skipNonVerifiableCallbackUriConfirmationPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipNonVerifiableCallbackUriConfirmationPromptInput() {
    return this._skipNonVerifiableCallbackUriConfirmationPrompt;
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

  // default_token_quota - computed: false, optional: true, required: false
  private _defaultTokenQuota = new TenantDefaultTokenQuotaOutputReference(this, "default_token_quota");
  public get defaultTokenQuota() {
    return this._defaultTokenQuota;
  }
  public putDefaultTokenQuota(value: TenantDefaultTokenQuota) {
    this._defaultTokenQuota.internalValue = value;
  }
  public resetDefaultTokenQuota() {
    this._defaultTokenQuota.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTokenQuotaInput() {
    return this._defaultTokenQuota.internalValue;
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

  // mtls - computed: false, optional: true, required: false
  private _mtls = new TenantMtlsOutputReference(this, "mtls");
  public get mtls() {
    return this._mtls;
  }
  public putMtls(value: TenantMtls) {
    this._mtls.internalValue = value;
  }
  public resetMtls() {
    this._mtls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtlsInput() {
    return this._mtls.internalValue;
  }

  // oidc_logout - computed: false, optional: true, required: false
  private _oidcLogout = new TenantOidcLogoutOutputReference(this, "oidc_logout");
  public get oidcLogout() {
    return this._oidcLogout;
  }
  public putOidcLogout(value: TenantOidcLogout) {
    this._oidcLogout.internalValue = value;
  }
  public resetOidcLogout() {
    this._oidcLogout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcLogoutInput() {
    return this._oidcLogout.internalValue;
  }

  // session_cookie - computed: false, optional: true, required: false
  private _sessionCookie = new TenantSessionCookieOutputReference(this, "session_cookie");
  public get sessionCookie() {
    return this._sessionCookie;
  }
  public putSessionCookie(value: TenantSessionCookie) {
    this._sessionCookie.internalValue = value;
  }
  public resetSessionCookie() {
    this._sessionCookie.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieInput() {
    return this._sessionCookie.internalValue;
  }

  // sessions - computed: false, optional: true, required: false
  private _sessions = new TenantSessionsOutputReference(this, "sessions");
  public get sessions() {
    return this._sessions;
  }
  public putSessions(value: TenantSessions) {
    this._sessions.internalValue = value;
  }
  public resetSessions() {
    this._sessions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsInput() {
    return this._sessions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acr_values_supported: cdktf.listMapper(cdktf.stringToTerraform, false)(this._acrValuesSupported),
      allow_organization_name_in_authentication_api: cdktf.booleanToTerraform(this._allowOrganizationNameInAuthenticationApi),
      allowed_logout_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedLogoutUrls),
      customize_mfa_in_postlogin_action: cdktf.booleanToTerraform(this._customizeMfaInPostloginAction),
      default_audience: cdktf.stringToTerraform(this._defaultAudience),
      default_directory: cdktf.stringToTerraform(this._defaultDirectory),
      default_redirection_uri: cdktf.stringToTerraform(this._defaultRedirectionUri),
      disable_acr_values_supported: cdktf.booleanToTerraform(this._disableAcrValuesSupported),
      enabled_locales: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledLocales),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      idle_session_lifetime: cdktf.numberToTerraform(this._idleSessionLifetime),
      picture_url: cdktf.stringToTerraform(this._pictureUrl),
      pushed_authorization_requests_supported: cdktf.booleanToTerraform(this._pushedAuthorizationRequestsSupported),
      sandbox_version: cdktf.stringToTerraform(this._sandboxVersion),
      session_lifetime: cdktf.numberToTerraform(this._sessionLifetime),
      skip_non_verifiable_callback_uri_confirmation_prompt: cdktf.stringToTerraform(this._skipNonVerifiableCallbackUriConfirmationPrompt),
      support_email: cdktf.stringToTerraform(this._supportEmail),
      support_url: cdktf.stringToTerraform(this._supportUrl),
      default_token_quota: tenantDefaultTokenQuotaToTerraform(this._defaultTokenQuota.internalValue),
      error_page: tenantErrorPageToTerraform(this._errorPage.internalValue),
      flags: tenantFlagsToTerraform(this._flags.internalValue),
      mtls: tenantMtlsToTerraform(this._mtls.internalValue),
      oidc_logout: tenantOidcLogoutToTerraform(this._oidcLogout.internalValue),
      session_cookie: tenantSessionCookieToTerraform(this._sessionCookie.internalValue),
      sessions: tenantSessionsToTerraform(this._sessions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acr_values_supported: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._acrValuesSupported),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_organization_name_in_authentication_api: {
        value: cdktf.booleanToHclTerraform(this._allowOrganizationNameInAuthenticationApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_logout_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedLogoutUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      customize_mfa_in_postlogin_action: {
        value: cdktf.booleanToHclTerraform(this._customizeMfaInPostloginAction),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      disable_acr_values_supported: {
        value: cdktf.booleanToHclTerraform(this._disableAcrValuesSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      pushed_authorization_requests_supported: {
        value: cdktf.booleanToHclTerraform(this._pushedAuthorizationRequestsSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      skip_non_verifiable_callback_uri_confirmation_prompt: {
        value: cdktf.stringToHclTerraform(this._skipNonVerifiableCallbackUriConfirmationPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      default_token_quota: {
        value: tenantDefaultTokenQuotaToHclTerraform(this._defaultTokenQuota.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantDefaultTokenQuotaList",
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
      mtls: {
        value: tenantMtlsToHclTerraform(this._mtls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantMtlsList",
      },
      oidc_logout: {
        value: tenantOidcLogoutToHclTerraform(this._oidcLogout.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantOidcLogoutList",
      },
      session_cookie: {
        value: tenantSessionCookieToHclTerraform(this._sessionCookie.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantSessionCookieList",
      },
      sessions: {
        value: tenantSessionsToHclTerraform(this._sessions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantSessionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
