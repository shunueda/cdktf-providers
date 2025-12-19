// https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional advanced settings that may be relevant for a specific IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#advanced_settings AuthenticationSettings#advanced_settings}
  */
  readonly advancedSettings?: AuthenticationSettingsAdvancedSettings;
  /**
  * The default role automatically assigned to every user who authenticates to Cortex using SAML. This is an inherited role and is not the same as a direct role assigned to the user.
  * 
  * If a role with the same name exists on both Cortex Gateway and the tenant, the role will mapped to the role from the tenant. If you want to specifically use the role from Cortex Gateway, set the `is_account_role` parameter to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#default_role AuthenticationSettings#default_role}
  */
  readonly defaultRole?: string;
  /**
  * The email domain to associate with this IDP.
  * 
  * When configuring the very first SSO integration, this value should be empty as it will be used as the default SSO with a fixed, read-only value. 
  * 
  * When logging in, users are redirected to the IdP associated with this domain, or to the default IdP if no association exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#domain AuthenticationSettings#domain}
  */
  readonly domain: string;
  /**
  * The Idp's public X.509 digital certificate in PEM format for verification, which is copied from your organization's IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#idp_certificate AuthenticationSettings#idp_certificate}
  */
  readonly idpCertificate?: string;
  /**
  * The unique identifier of the IdP issuing SAML assertions, which is copied from your organization's IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#idp_issuer AuthenticationSettings#idp_issuer}
  */
  readonly idpIssuer?: string;
  /**
  * The login URL of your IdP. This should be copied from the SAML integration configuration on the IdP.
  * 
  * Example values:
  * - Okta: `https://cortex-test.okta.com/app/cortex-test/eacbt6b2jj08CasdUQ7sdf15d7/sso/SAML`
  * - Microsoft Azure: `https://login.microsoftonline.com/6a5a9780-96a4-41ef-bf45-0535d8a70025/saml2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#idp_sso_url AuthenticationSettings#idp_sso_url}
  */
  readonly idpSsoUrl?: string;
  /**
  * Whether the specified default role exists in Cortex Gateway or in the tenant. Set to `true` if the role was created in Cortex Gateway or `false` if the role was created in the tenant. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#is_account_role AuthenticationSettings#is_account_role}
  */
  readonly isAccountRole?: boolean | cdktf.IResolvable;
  /**
  * Attribute mappings dictated by your organization's IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#mappings AuthenticationSettings#mappings}
  */
  readonly mappings: AuthenticationSettingsMappings;
  /**
  * The metadata URL provides information about hte IdP's capabilities, endpoints, keys, and more. 
  * 
  * Example values: 
  * - Okta: `https://cortex-test.okta.com/app/exkbuuzw77Bh04V6M6b8/sso/saml/metadata`
  * - Microsoft Azure: `https://login.microsoftonline.com/6a5a9780-96a4-41ef-bf45-0535d8a70025/saml2/metadata`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#metadata_url AuthenticationSettings#metadata_url}
  */
  readonly metadataUrl?: string;
  /**
  * The name of the SSO integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#name AuthenticationSettings#name}
  */
  readonly name: string;
}
export interface AuthenticationSettingsAdvancedSettings {
  /**
  * Whether to remove the `RequestedAuthnContext` parameter from SAML requests.
  * 
  * If set to `true`, users will be able to log in using additional authentication methods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#authn_context_enabled AuthenticationSettings#authn_context_enabled}
  */
  readonly authnContextEnabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to force users to re-authenticate in order to access the Cortex tenant if requested by the IdP (even if they already authenticated to access other applications).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#force_authn AuthenticationSettings#force_authn}
  */
  readonly forceAuthn?: boolean | cdktf.IResolvable;
  /**
  * The URL of the IdP's Single Logout endpoint. Configuring this ensures that when a user logs out of Cortex, the IdP logs the user out of all applications in the current identity provider login session.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#idp_single_logout_url AuthenticationSettings#idp_single_logout_url}
  */
  readonly idpSingleLogoutUrl?: string;
  /**
  * The URL that users will be directed to after they've been authenticated by your organization's IdP and log into Cortex.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#relay_state AuthenticationSettings#relay_state}
  */
  readonly relayState?: string;
  /**
  * The syslog server's private key in PEM format for signing SAML responses. This is most relevant for the integration of Azure Directory Federation Services (ADFS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#service_provider_private_key AuthenticationSettings#service_provider_private_key}
  */
  readonly serviceProviderPrivateKey?: string;
  /**
  * The syslog server's public X.509 certificate in PEM format for IdP validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#service_provider_public_cert AuthenticationSettings#service_provider_public_cert}
  */
  readonly serviceProviderPublicCert?: string;
}

export function authenticationSettingsAdvancedSettingsToTerraform(struct?: AuthenticationSettingsAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authn_context_enabled: cdktf.booleanToTerraform(struct!.authnContextEnabled),
    force_authn: cdktf.booleanToTerraform(struct!.forceAuthn),
    idp_single_logout_url: cdktf.stringToTerraform(struct!.idpSingleLogoutUrl),
    relay_state: cdktf.stringToTerraform(struct!.relayState),
    service_provider_private_key: cdktf.stringToTerraform(struct!.serviceProviderPrivateKey),
    service_provider_public_cert: cdktf.stringToTerraform(struct!.serviceProviderPublicCert),
  }
}


export function authenticationSettingsAdvancedSettingsToHclTerraform(struct?: AuthenticationSettingsAdvancedSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authn_context_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.authnContextEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_authn: {
      value: cdktf.booleanToHclTerraform(struct!.forceAuthn),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    idp_single_logout_url: {
      value: cdktf.stringToHclTerraform(struct!.idpSingleLogoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relay_state: {
      value: cdktf.stringToHclTerraform(struct!.relayState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_provider_private_key: {
      value: cdktf.stringToHclTerraform(struct!.serviceProviderPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_provider_public_cert: {
      value: cdktf.stringToHclTerraform(struct!.serviceProviderPublicCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationSettingsAdvancedSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationSettingsAdvancedSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authnContextEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnContextEnabled = this._authnContextEnabled;
    }
    if (this._forceAuthn !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceAuthn = this._forceAuthn;
    }
    if (this._idpSingleLogoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSingleLogoutUrl = this._idpSingleLogoutUrl;
    }
    if (this._relayState !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayState = this._relayState;
    }
    if (this._serviceProviderPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderPrivateKey = this._serviceProviderPrivateKey;
    }
    if (this._serviceProviderPublicCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceProviderPublicCert = this._serviceProviderPublicCert;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationSettingsAdvancedSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authnContextEnabled = undefined;
      this._forceAuthn = undefined;
      this._idpSingleLogoutUrl = undefined;
      this._relayState = undefined;
      this._serviceProviderPrivateKey = undefined;
      this._serviceProviderPublicCert = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authnContextEnabled = value.authnContextEnabled;
      this._forceAuthn = value.forceAuthn;
      this._idpSingleLogoutUrl = value.idpSingleLogoutUrl;
      this._relayState = value.relayState;
      this._serviceProviderPrivateKey = value.serviceProviderPrivateKey;
      this._serviceProviderPublicCert = value.serviceProviderPublicCert;
    }
  }

  // authn_context_enabled - computed: true, optional: true, required: false
  private _authnContextEnabled?: boolean | cdktf.IResolvable; 
  public get authnContextEnabled() {
    return this.getBooleanAttribute('authn_context_enabled');
  }
  public set authnContextEnabled(value: boolean | cdktf.IResolvable) {
    this._authnContextEnabled = value;
  }
  public resetAuthnContextEnabled() {
    this._authnContextEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnContextEnabledInput() {
    return this._authnContextEnabled;
  }

  // force_authn - computed: true, optional: true, required: false
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

  // idp_single_logout_url - computed: true, optional: true, required: false
  private _idpSingleLogoutUrl?: string; 
  public get idpSingleLogoutUrl() {
    return this.getStringAttribute('idp_single_logout_url');
  }
  public set idpSingleLogoutUrl(value: string) {
    this._idpSingleLogoutUrl = value;
  }
  public resetIdpSingleLogoutUrl() {
    this._idpSingleLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSingleLogoutUrlInput() {
    return this._idpSingleLogoutUrl;
  }

  // relay_state - computed: true, optional: true, required: false
  private _relayState?: string; 
  public get relayState() {
    return this.getStringAttribute('relay_state');
  }
  public set relayState(value: string) {
    this._relayState = value;
  }
  public resetRelayState() {
    this._relayState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayStateInput() {
    return this._relayState;
  }

  // service_provider_private_key - computed: true, optional: true, required: false
  private _serviceProviderPrivateKey?: string; 
  public get serviceProviderPrivateKey() {
    return this.getStringAttribute('service_provider_private_key');
  }
  public set serviceProviderPrivateKey(value: string) {
    this._serviceProviderPrivateKey = value;
  }
  public resetServiceProviderPrivateKey() {
    this._serviceProviderPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderPrivateKeyInput() {
    return this._serviceProviderPrivateKey;
  }

  // service_provider_public_cert - computed: true, optional: true, required: false
  private _serviceProviderPublicCert?: string; 
  public get serviceProviderPublicCert() {
    return this.getStringAttribute('service_provider_public_cert');
  }
  public set serviceProviderPublicCert(value: string) {
    this._serviceProviderPublicCert = value;
  }
  public resetServiceProviderPublicCert() {
    this._serviceProviderPublicCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderPublicCertInput() {
    return this._serviceProviderPublicCert;
  }
}
export interface AuthenticationSettingsMappings {
  /**
  * The IdP attribute mapped to the user's email address in the Syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#email AuthenticationSettings#email}
  */
  readonly email: string;
  /**
  * The IdP attribute mapped to the user's first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#first_name AuthenticationSettings#first_name}
  */
  readonly firstName: string;
  /**
  * The IdP attribute mapped to the user's group membership for authorization.
  * 
  * Cortex requires the IdP to send the group membership as part of the SAML token. Some IdPs send values in a format that include a comma, which is not compatible with Cortex. To resolve this, you must configure your IdP to send a single value without a comma for each group membership. For example, if your IdP sends the Group DN (a comma-separated list) by default, you must configure the IdP to send the Group CN (Common Name) instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#group_name AuthenticationSettings#group_name}
  */
  readonly groupName: string;
  /**
  * The IdP attribute mapped to the user's last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#last_name AuthenticationSettings#last_name}
  */
  readonly lastName: string;
}

export function authenticationSettingsMappingsToTerraform(struct?: AuthenticationSettingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    group_name: cdktf.stringToTerraform(struct!.groupName),
    last_name: cdktf.stringToTerraform(struct!.lastName),
  }
}


export function authenticationSettingsMappingsToHclTerraform(struct?: AuthenticationSettingsMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    first_name: {
      value: cdktf.stringToHclTerraform(struct!.firstName),
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
    last_name: {
      value: cdktf.stringToHclTerraform(struct!.lastName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AuthenticationSettingsMappingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AuthenticationSettingsMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstName !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName;
    }
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AuthenticationSettingsMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._groupName = undefined;
      this._lastName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._firstName = value.firstName;
      this._groupName = value.groupName;
      this._lastName = value.lastName;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings cortexcloud_authentication_settings}
*/
export class AuthenticationSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cortexcloud_authentication_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuthenticationSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuthenticationSettings to import
  * @param importFromId The id of the existing AuthenticationSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuthenticationSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cortexcloud_authentication_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cortexcloud/1.0.2/docs/resources/authentication_settings cortexcloud_authentication_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'cortexcloud_authentication_settings',
      terraformGeneratorMetadata: {
        providerName: 'cortexcloud',
        providerVersion: '1.0.2',
        providerVersionConstraint: '1.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedSettings.internalValue = config.advancedSettings;
    this._defaultRole = config.defaultRole;
    this._domain = config.domain;
    this._idpCertificate = config.idpCertificate;
    this._idpIssuer = config.idpIssuer;
    this._idpSsoUrl = config.idpSsoUrl;
    this._isAccountRole = config.isAccountRole;
    this._mappings.internalValue = config.mappings;
    this._metadataUrl = config.metadataUrl;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_settings - computed: true, optional: true, required: false
  private _advancedSettings = new AuthenticationSettingsAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: AuthenticationSettingsAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // default_role - computed: true, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // idp_certificate - computed: true, optional: true, required: false
  private _idpCertificate?: string; 
  public get idpCertificate() {
    return this.getStringAttribute('idp_certificate');
  }
  public set idpCertificate(value: string) {
    this._idpCertificate = value;
  }
  public resetIdpCertificate() {
    this._idpCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertificateInput() {
    return this._idpCertificate;
  }

  // idp_enabled - computed: true, optional: false, required: false
  public get idpEnabled() {
    return this.getBooleanAttribute('idp_enabled');
  }

  // idp_issuer - computed: true, optional: true, required: false
  private _idpIssuer?: string; 
  public get idpIssuer() {
    return this.getStringAttribute('idp_issuer');
  }
  public set idpIssuer(value: string) {
    this._idpIssuer = value;
  }
  public resetIdpIssuer() {
    this._idpIssuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIssuerInput() {
    return this._idpIssuer;
  }

  // idp_sso_url - computed: true, optional: true, required: false
  private _idpSsoUrl?: string; 
  public get idpSsoUrl() {
    return this.getStringAttribute('idp_sso_url');
  }
  public set idpSsoUrl(value: string) {
    this._idpSsoUrl = value;
  }
  public resetIdpSsoUrl() {
    this._idpSsoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSsoUrlInput() {
    return this._idpSsoUrl;
  }

  // is_account_role - computed: true, optional: true, required: false
  private _isAccountRole?: boolean | cdktf.IResolvable; 
  public get isAccountRole() {
    return this.getBooleanAttribute('is_account_role');
  }
  public set isAccountRole(value: boolean | cdktf.IResolvable) {
    this._isAccountRole = value;
  }
  public resetIsAccountRole() {
    this._isAccountRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAccountRoleInput() {
    return this._isAccountRole;
  }

  // mappings - computed: false, optional: false, required: true
  private _mappings = new AuthenticationSettingsMappingsOutputReference(this, "mappings");
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: AuthenticationSettingsMappings) {
    this._mappings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // metadata_url - computed: true, optional: true, required: false
  private _metadataUrl?: string; 
  public get metadataUrl() {
    return this.getStringAttribute('metadata_url');
  }
  public set metadataUrl(value: string) {
    this._metadataUrl = value;
  }
  public resetMetadataUrl() {
    this._metadataUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataUrlInput() {
    return this._metadataUrl;
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

  // sp_entity_id - computed: true, optional: false, required: false
  public get spEntityId() {
    return this.getStringAttribute('sp_entity_id');
  }

  // sp_logout_url - computed: true, optional: false, required: false
  public get spLogoutUrl() {
    return this.getStringAttribute('sp_logout_url');
  }

  // sp_url - computed: true, optional: false, required: false
  public get spUrl() {
    return this.getStringAttribute('sp_url');
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_settings: authenticationSettingsAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      default_role: cdktf.stringToTerraform(this._defaultRole),
      domain: cdktf.stringToTerraform(this._domain),
      idp_certificate: cdktf.stringToTerraform(this._idpCertificate),
      idp_issuer: cdktf.stringToTerraform(this._idpIssuer),
      idp_sso_url: cdktf.stringToTerraform(this._idpSsoUrl),
      is_account_role: cdktf.booleanToTerraform(this._isAccountRole),
      mappings: authenticationSettingsMappingsToTerraform(this._mappings.internalValue),
      metadata_url: cdktf.stringToTerraform(this._metadataUrl),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_settings: {
        value: authenticationSettingsAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationSettingsAdvancedSettings",
      },
      default_role: {
        value: cdktf.stringToHclTerraform(this._defaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_certificate: {
        value: cdktf.stringToHclTerraform(this._idpCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_issuer: {
        value: cdktf.stringToHclTerraform(this._idpIssuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idp_sso_url: {
        value: cdktf.stringToHclTerraform(this._idpSsoUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_account_role: {
        value: cdktf.booleanToHclTerraform(this._isAccountRole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mappings: {
        value: authenticationSettingsMappingsToHclTerraform(this._mappings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AuthenticationSettingsMappings",
      },
      metadata_url: {
        value: cdktf.stringToHclTerraform(this._metadataUrl),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
