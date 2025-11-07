// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IdpSteamConfig extends cdktf.TerraformMetaArguments {
  /**
  * The top-level button text to use on the FusionAuth login page for this Identity Provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#button_text IdpSteam#button_text}
  */
  readonly buttonText: string;
  /**
  * The top-level Steam client id for your Application. This value is retrieved from the Steam developer website when you setup your Steam developer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#client_id IdpSteam#client_id}
  */
  readonly clientId: string;
  /**
  * Determines if debug is enabled for this provider. When enabled, each time this provider is invoked to reconcile a login an Event Log will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#debug IdpSteam#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#enabled IdpSteam#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#id IdpSteam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID to use for the new identity provider. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#idp_id IdpSteam#idp_id}
  */
  readonly idpId?: string;
  /**
  * The unique Id of the lambda to used during the user reconcile process to map custom claims from the external identity provider to the FusionAuth user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#lambda_reconcile_id IdpSteam#lambda_reconcile_id}
  */
  readonly lambdaReconcileId?: string;
  /**
  * The linking strategy to use when creating the link between the {idp_display_name} Identity Provider and the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#linking_strategy IdpSteam#linking_strategy}
  */
  readonly linkingStrategy?: string;
  /**
  * The top-level scope that you are requesting from Steam.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#scope IdpSteam#scope}
  */
  readonly scope?: string;
  /**
  * The top-level web API key to use with the Steam Identity Provider when retrieving the player summary info. This value is retrieved from the Steam developer website when you setup your Steam developer account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#web_api_key IdpSteam#web_api_key}
  */
  readonly webApiKey: string;
  /**
  * application_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#application_configuration IdpSteam#application_configuration}
  */
  readonly applicationConfiguration?: IdpSteamApplicationConfiguration[] | cdktf.IResolvable;
  /**
  * tenant_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#tenant_configuration IdpSteam#tenant_configuration}
  */
  readonly tenantConfiguration?: IdpSteamTenantConfiguration[] | cdktf.IResolvable;
}
export interface IdpSteamApplicationConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#application_id IdpSteam#application_id}
  */
  readonly applicationId?: string;
  /**
  * This is an optional Application specific override for the top level button text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#button_text IdpSteam#button_text}
  */
  readonly buttonText?: string;
  /**
  * This is an optional Application specific override for the top level client_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#client_id IdpSteam#client_id}
  */
  readonly clientId?: string;
  /**
  * Determines if a UserRegistration is created for the User automatically or not. If a user doesn’t exist in FusionAuth and logs in through an identity provider, this boolean controls whether or not FusionAuth creates a registration for the User in the Application they are logging into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#create_registration IdpSteam#create_registration}
  */
  readonly createRegistration?: boolean | cdktf.IResolvable;
  /**
  * Determines if this identity provider is enabled for the Application specified by the applicationId key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#enabled IdpSteam#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * This is an optional Application specific override for the top level scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#scope IdpSteam#scope}
  */
  readonly scope?: string;
  /**
  * This is an optional Application specific override for the top level webAPIKey.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#web_api_key IdpSteam#web_api_key}
  */
  readonly webApiKey?: string;
}

export function idpSteamApplicationConfigurationToTerraform(struct?: IdpSteamApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    button_text: cdktf.stringToTerraform(struct!.buttonText),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    create_registration: cdktf.booleanToTerraform(struct!.createRegistration),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    scope: cdktf.stringToTerraform(struct!.scope),
    web_api_key: cdktf.stringToTerraform(struct!.webApiKey),
  }
}


export function idpSteamApplicationConfigurationToHclTerraform(struct?: IdpSteamApplicationConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    button_text: {
      value: cdktf.stringToHclTerraform(struct!.buttonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_registration: {
      value: cdktf.booleanToHclTerraform(struct!.createRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_api_key: {
      value: cdktf.stringToHclTerraform(struct!.webApiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSteamApplicationConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSteamApplicationConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._buttonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.buttonText = this._buttonText;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._createRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.createRegistration = this._createRegistration;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._webApiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.webApiKey = this._webApiKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSteamApplicationConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._buttonText = undefined;
      this._clientId = undefined;
      this._createRegistration = undefined;
      this._enabled = undefined;
      this._scope = undefined;
      this._webApiKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._buttonText = value.buttonText;
      this._clientId = value.clientId;
      this._createRegistration = value.createRegistration;
      this._enabled = value.enabled;
      this._scope = value.scope;
      this._webApiKey = value.webApiKey;
    }
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // button_text - computed: false, optional: true, required: false
  private _buttonText?: string; 
  public get buttonText() {
    return this.getStringAttribute('button_text');
  }
  public set buttonText(value: string) {
    this._buttonText = value;
  }
  public resetButtonText() {
    this._buttonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextInput() {
    return this._buttonText;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // create_registration - computed: false, optional: true, required: false
  private _createRegistration?: boolean | cdktf.IResolvable; 
  public get createRegistration() {
    return this.getBooleanAttribute('create_registration');
  }
  public set createRegistration(value: boolean | cdktf.IResolvable) {
    this._createRegistration = value;
  }
  public resetCreateRegistration() {
    this._createRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createRegistrationInput() {
    return this._createRegistration;
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

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // web_api_key - computed: false, optional: true, required: false
  private _webApiKey?: string; 
  public get webApiKey() {
    return this.getStringAttribute('web_api_key');
  }
  public set webApiKey(value: string) {
    this._webApiKey = value;
  }
  public resetWebApiKey() {
    this._webApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webApiKeyInput() {
    return this._webApiKey;
  }
}

export class IdpSteamApplicationConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpSteamApplicationConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpSteamApplicationConfigurationOutputReference {
    return new IdpSteamApplicationConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface IdpSteamTenantConfiguration {
  /**
  * When enabled, the number of identity provider links a user may create is enforced by maximumLinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#limit_user_link_count_enabled IdpSteam#limit_user_link_count_enabled}
  */
  readonly limitUserLinkCountEnabled?: boolean | cdktf.IResolvable;
  /**
  * Determines if this provider is enabled. If it is false then it will be disabled globally.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#limit_user_link_count_maximum_links IdpSteam#limit_user_link_count_maximum_links}
  */
  readonly limitUserLinkCountMaximumLinks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#tenant_id IdpSteam#tenant_id}
  */
  readonly tenantId?: string;
}

export function idpSteamTenantConfigurationToTerraform(struct?: IdpSteamTenantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_user_link_count_enabled: cdktf.booleanToTerraform(struct!.limitUserLinkCountEnabled),
    limit_user_link_count_maximum_links: cdktf.numberToTerraform(struct!.limitUserLinkCountMaximumLinks),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function idpSteamTenantConfigurationToHclTerraform(struct?: IdpSteamTenantConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_user_link_count_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.limitUserLinkCountEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit_user_link_count_maximum_links: {
      value: cdktf.numberToHclTerraform(struct!.limitUserLinkCountMaximumLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IdpSteamTenantConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IdpSteamTenantConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitUserLinkCountEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitUserLinkCountEnabled = this._limitUserLinkCountEnabled;
    }
    if (this._limitUserLinkCountMaximumLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitUserLinkCountMaximumLinks = this._limitUserLinkCountMaximumLinks;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IdpSteamTenantConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitUserLinkCountEnabled = undefined;
      this._limitUserLinkCountMaximumLinks = undefined;
      this._tenantId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitUserLinkCountEnabled = value.limitUserLinkCountEnabled;
      this._limitUserLinkCountMaximumLinks = value.limitUserLinkCountMaximumLinks;
      this._tenantId = value.tenantId;
    }
  }

  // limit_user_link_count_enabled - computed: false, optional: true, required: false
  private _limitUserLinkCountEnabled?: boolean | cdktf.IResolvable; 
  public get limitUserLinkCountEnabled() {
    return this.getBooleanAttribute('limit_user_link_count_enabled');
  }
  public set limitUserLinkCountEnabled(value: boolean | cdktf.IResolvable) {
    this._limitUserLinkCountEnabled = value;
  }
  public resetLimitUserLinkCountEnabled() {
    this._limitUserLinkCountEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUserLinkCountEnabledInput() {
    return this._limitUserLinkCountEnabled;
  }

  // limit_user_link_count_maximum_links - computed: false, optional: true, required: false
  private _limitUserLinkCountMaximumLinks?: number; 
  public get limitUserLinkCountMaximumLinks() {
    return this.getNumberAttribute('limit_user_link_count_maximum_links');
  }
  public set limitUserLinkCountMaximumLinks(value: number) {
    this._limitUserLinkCountMaximumLinks = value;
  }
  public resetLimitUserLinkCountMaximumLinks() {
    this._limitUserLinkCountMaximumLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitUserLinkCountMaximumLinksInput() {
    return this._limitUserLinkCountMaximumLinks;
  }

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }
}

export class IdpSteamTenantConfigurationList extends cdktf.ComplexList {
  public internalValue? : IdpSteamTenantConfiguration[] | cdktf.IResolvable

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
  public get(index: number): IdpSteamTenantConfigurationOutputReference {
    return new IdpSteamTenantConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam fusionauth_idp_steam}
*/
export class IdpSteam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_idp_steam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IdpSteam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IdpSteam to import
  * @param importFromId The id of the existing IdpSteam that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IdpSteam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_idp_steam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/idp_steam fusionauth_idp_steam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IdpSteamConfig
  */
  public constructor(scope: Construct, id: string, config: IdpSteamConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_idp_steam',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buttonText = config.buttonText;
    this._clientId = config.clientId;
    this._debug = config.debug;
    this._enabled = config.enabled;
    this._id = config.id;
    this._idpId = config.idpId;
    this._lambdaReconcileId = config.lambdaReconcileId;
    this._linkingStrategy = config.linkingStrategy;
    this._scope = config.scope;
    this._webApiKey = config.webApiKey;
    this._applicationConfiguration.internalValue = config.applicationConfiguration;
    this._tenantConfiguration.internalValue = config.tenantConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // button_text - computed: false, optional: false, required: true
  private _buttonText?: string; 
  public get buttonText() {
    return this.getStringAttribute('button_text');
  }
  public set buttonText(value: string) {
    this._buttonText = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buttonTextInput() {
    return this._buttonText;
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

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
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

  // idp_id - computed: false, optional: true, required: false
  private _idpId?: string; 
  public get idpId() {
    return this.getStringAttribute('idp_id');
  }
  public set idpId(value: string) {
    this._idpId = value;
  }
  public resetIdpId() {
    this._idpId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpIdInput() {
    return this._idpId;
  }

  // lambda_reconcile_id - computed: false, optional: true, required: false
  private _lambdaReconcileId?: string; 
  public get lambdaReconcileId() {
    return this.getStringAttribute('lambda_reconcile_id');
  }
  public set lambdaReconcileId(value: string) {
    this._lambdaReconcileId = value;
  }
  public resetLambdaReconcileId() {
    this._lambdaReconcileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaReconcileIdInput() {
    return this._lambdaReconcileId;
  }

  // linking_strategy - computed: true, optional: true, required: false
  private _linkingStrategy?: string; 
  public get linkingStrategy() {
    return this.getStringAttribute('linking_strategy');
  }
  public set linkingStrategy(value: string) {
    this._linkingStrategy = value;
  }
  public resetLinkingStrategy() {
    this._linkingStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingStrategyInput() {
    return this._linkingStrategy;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // web_api_key - computed: false, optional: false, required: true
  private _webApiKey?: string; 
  public get webApiKey() {
    return this.getStringAttribute('web_api_key');
  }
  public set webApiKey(value: string) {
    this._webApiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webApiKeyInput() {
    return this._webApiKey;
  }

  // application_configuration - computed: false, optional: true, required: false
  private _applicationConfiguration = new IdpSteamApplicationConfigurationList(this, "application_configuration", true);
  public get applicationConfiguration() {
    return this._applicationConfiguration;
  }
  public putApplicationConfiguration(value: IdpSteamApplicationConfiguration[] | cdktf.IResolvable) {
    this._applicationConfiguration.internalValue = value;
  }
  public resetApplicationConfiguration() {
    this._applicationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationConfigurationInput() {
    return this._applicationConfiguration.internalValue;
  }

  // tenant_configuration - computed: false, optional: true, required: false
  private _tenantConfiguration = new IdpSteamTenantConfigurationList(this, "tenant_configuration", true);
  public get tenantConfiguration() {
    return this._tenantConfiguration;
  }
  public putTenantConfiguration(value: IdpSteamTenantConfiguration[] | cdktf.IResolvable) {
    this._tenantConfiguration.internalValue = value;
  }
  public resetTenantConfiguration() {
    this._tenantConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantConfigurationInput() {
    return this._tenantConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      button_text: cdktf.stringToTerraform(this._buttonText),
      client_id: cdktf.stringToTerraform(this._clientId),
      debug: cdktf.booleanToTerraform(this._debug),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      idp_id: cdktf.stringToTerraform(this._idpId),
      lambda_reconcile_id: cdktf.stringToTerraform(this._lambdaReconcileId),
      linking_strategy: cdktf.stringToTerraform(this._linkingStrategy),
      scope: cdktf.stringToTerraform(this._scope),
      web_api_key: cdktf.stringToTerraform(this._webApiKey),
      application_configuration: cdktf.listMapper(idpSteamApplicationConfigurationToTerraform, true)(this._applicationConfiguration.internalValue),
      tenant_configuration: cdktf.listMapper(idpSteamTenantConfigurationToTerraform, true)(this._tenantConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      button_text: {
        value: cdktf.stringToHclTerraform(this._buttonText),
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
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      idp_id: {
        value: cdktf.stringToHclTerraform(this._idpId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_reconcile_id: {
        value: cdktf.stringToHclTerraform(this._lambdaReconcileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linking_strategy: {
        value: cdktf.stringToHclTerraform(this._linkingStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_api_key: {
        value: cdktf.stringToHclTerraform(this._webApiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_configuration: {
        value: cdktf.listMapperHcl(idpSteamApplicationConfigurationToHclTerraform, true)(this._applicationConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpSteamApplicationConfigurationList",
      },
      tenant_configuration: {
        value: cdktf.listMapperHcl(idpSteamTenantConfigurationToHclTerraform, true)(this._tenantConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "IdpSteamTenantConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
