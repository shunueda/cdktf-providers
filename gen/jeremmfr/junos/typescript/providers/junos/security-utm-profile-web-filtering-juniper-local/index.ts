// https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUtmProfileWebFilteringJuniperLocalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom block message sent to HTTP client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#custom_block_message SecurityUtmProfileWebFilteringJuniperLocal#custom_block_message}
  */
  readonly customBlockMessage?: string;
  /**
  * Custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#custom_message SecurityUtmProfileWebFilteringJuniperLocal#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Default action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#default_action SecurityUtmProfileWebFilteringJuniperLocal#default_action}
  */
  readonly defaultAction?: string;
  /**
  * The name of security utm feature-profile web-filtering juniper-local profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#name SecurityUtmProfileWebFilteringJuniperLocal#name}
  */
  readonly name: string;
  /**
  * Do not perform safe-search for Juniper local protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#no_safe_search SecurityUtmProfileWebFilteringJuniperLocal#no_safe_search}
  */
  readonly noSafeSearch?: boolean | cdktf.IResolvable;
  /**
  * Set timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#timeout SecurityUtmProfileWebFilteringJuniperLocal#timeout}
  */
  readonly timeout?: number;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#category SecurityUtmProfileWebFilteringJuniperLocal#category}
  */
  readonly category?: SecurityUtmProfileWebFilteringJuniperLocalCategory[] | cdktf.IResolvable;
  /**
  * fallback_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#fallback_settings SecurityUtmProfileWebFilteringJuniperLocal#fallback_settings}
  */
  readonly fallbackSettings?: SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings;
}
export interface SecurityUtmProfileWebFilteringJuniperLocalCategory {
  /**
  * Action when web traffic matches category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#action SecurityUtmProfileWebFilteringJuniperLocal#action}
  */
  readonly action: string;
  /**
  * Custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#custom_message SecurityUtmProfileWebFilteringJuniperLocal#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Name of category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#name SecurityUtmProfileWebFilteringJuniperLocal#name}
  */
  readonly name: string;
}

export function securityUtmProfileWebFilteringJuniperLocalCategoryToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperLocalCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    custom_message: cdktf.stringToTerraform(struct!.customMessage),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function securityUtmProfileWebFilteringJuniperLocalCategoryToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperLocalCategory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_message: {
      value: cdktf.stringToHclTerraform(struct!.customMessage),
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

export class SecurityUtmProfileWebFilteringJuniperLocalCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperLocalCategory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._customMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.customMessage = this._customMessage;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperLocalCategory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._customMessage = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._customMessage = value.customMessage;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
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

export class SecurityUtmProfileWebFilteringJuniperLocalCategoryList extends cdktf.ComplexList {
  public internalValue? : SecurityUtmProfileWebFilteringJuniperLocalCategory[] | cdktf.IResolvable

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
  public get(index: number): SecurityUtmProfileWebFilteringJuniperLocalCategoryOutputReference {
    return new SecurityUtmProfileWebFilteringJuniperLocalCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings {
  /**
  * Default action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#default SecurityUtmProfileWebFilteringJuniperLocal#default}
  */
  readonly default?: string;
  /**
  * Action when device cannot connect to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#server_connectivity SecurityUtmProfileWebFilteringJuniperLocal#server_connectivity}
  */
  readonly serverConnectivity?: string;
  /**
  * Action when connection to server timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#timeout SecurityUtmProfileWebFilteringJuniperLocal#timeout}
  */
  readonly timeout?: string;
  /**
  * Action when requests exceed the limit of engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#too_many_requests SecurityUtmProfileWebFilteringJuniperLocal#too_many_requests}
  */
  readonly tooManyRequests?: string;
}

export function securityUtmProfileWebFilteringJuniperLocalFallbackSettingsToTerraform(struct?: SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    server_connectivity: cdktf.stringToTerraform(struct!.serverConnectivity),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    too_many_requests: cdktf.stringToTerraform(struct!.tooManyRequests),
  }
}


export function securityUtmProfileWebFilteringJuniperLocalFallbackSettingsToHclTerraform(struct?: SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_connectivity: {
      value: cdktf.stringToHclTerraform(struct!.serverConnectivity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    too_many_requests: {
      value: cdktf.stringToHclTerraform(struct!.tooManyRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmProfileWebFilteringJuniperLocalFallbackSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._serverConnectivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnectivity = this._serverConnectivity;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tooManyRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyRequests = this._tooManyRequests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._serverConnectivity = undefined;
      this._timeout = undefined;
      this._tooManyRequests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._serverConnectivity = value.serverConnectivity;
      this._timeout = value.timeout;
      this._tooManyRequests = value.tooManyRequests;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // server_connectivity - computed: false, optional: true, required: false
  private _serverConnectivity?: string; 
  public get serverConnectivity() {
    return this.getStringAttribute('server_connectivity');
  }
  public set serverConnectivity(value: string) {
    this._serverConnectivity = value;
  }
  public resetServerConnectivity() {
    this._serverConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnectivityInput() {
    return this._serverConnectivity;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // too_many_requests - computed: false, optional: true, required: false
  private _tooManyRequests?: string; 
  public get tooManyRequests() {
    return this.getStringAttribute('too_many_requests');
  }
  public set tooManyRequests(value: string) {
    this._tooManyRequests = value;
  }
  public resetTooManyRequests() {
    this._tooManyRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyRequestsInput() {
    return this._tooManyRequests;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local junos_security_utm_profile_web_filtering_juniper_local}
*/
export class SecurityUtmProfileWebFilteringJuniperLocal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_utm_profile_web_filtering_juniper_local";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUtmProfileWebFilteringJuniperLocal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUtmProfileWebFilteringJuniperLocal to import
  * @param importFromId The id of the existing SecurityUtmProfileWebFilteringJuniperLocal that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUtmProfileWebFilteringJuniperLocal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_utm_profile_web_filtering_juniper_local", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.15.0/docs/resources/security_utm_profile_web_filtering_juniper_local junos_security_utm_profile_web_filtering_juniper_local} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUtmProfileWebFilteringJuniperLocalConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUtmProfileWebFilteringJuniperLocalConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_utm_profile_web_filtering_juniper_local',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customBlockMessage = config.customBlockMessage;
    this._customMessage = config.customMessage;
    this._defaultAction = config.defaultAction;
    this._name = config.name;
    this._noSafeSearch = config.noSafeSearch;
    this._timeout = config.timeout;
    this._category.internalValue = config.category;
    this._fallbackSettings.internalValue = config.fallbackSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_block_message - computed: false, optional: true, required: false
  private _customBlockMessage?: string; 
  public get customBlockMessage() {
    return this.getStringAttribute('custom_block_message');
  }
  public set customBlockMessage(value: string) {
    this._customBlockMessage = value;
  }
  public resetCustomBlockMessage() {
    this._customBlockMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBlockMessageInput() {
    return this._customBlockMessage;
  }

  // custom_message - computed: false, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // default_action - computed: false, optional: true, required: false
  private _defaultAction?: string; 
  public get defaultAction() {
    return this.getStringAttribute('default_action');
  }
  public set defaultAction(value: string) {
    this._defaultAction = value;
  }
  public resetDefaultAction() {
    this._defaultAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultActionInput() {
    return this._defaultAction;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // no_safe_search - computed: false, optional: true, required: false
  private _noSafeSearch?: boolean | cdktf.IResolvable; 
  public get noSafeSearch() {
    return this.getBooleanAttribute('no_safe_search');
  }
  public set noSafeSearch(value: boolean | cdktf.IResolvable) {
    this._noSafeSearch = value;
  }
  public resetNoSafeSearch() {
    this._noSafeSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSafeSearchInput() {
    return this._noSafeSearch;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // category - computed: false, optional: true, required: false
  private _category = new SecurityUtmProfileWebFilteringJuniperLocalCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: SecurityUtmProfileWebFilteringJuniperLocalCategory[] | cdktf.IResolvable) {
    this._category.internalValue = value;
  }
  public resetCategory() {
    this._category.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // fallback_settings - computed: false, optional: true, required: false
  private _fallbackSettings = new SecurityUtmProfileWebFilteringJuniperLocalFallbackSettingsOutputReference(this, "fallback_settings");
  public get fallbackSettings() {
    return this._fallbackSettings;
  }
  public putFallbackSettings(value: SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings) {
    this._fallbackSettings.internalValue = value;
  }
  public resetFallbackSettings() {
    this._fallbackSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackSettingsInput() {
    return this._fallbackSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_block_message: cdktf.stringToTerraform(this._customBlockMessage),
      custom_message: cdktf.stringToTerraform(this._customMessage),
      default_action: cdktf.stringToTerraform(this._defaultAction),
      name: cdktf.stringToTerraform(this._name),
      no_safe_search: cdktf.booleanToTerraform(this._noSafeSearch),
      timeout: cdktf.numberToTerraform(this._timeout),
      category: cdktf.listMapper(securityUtmProfileWebFilteringJuniperLocalCategoryToTerraform, true)(this._category.internalValue),
      fallback_settings: securityUtmProfileWebFilteringJuniperLocalFallbackSettingsToTerraform(this._fallbackSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_block_message: {
        value: cdktf.stringToHclTerraform(this._customBlockMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_message: {
        value: cdktf.stringToHclTerraform(this._customMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_action: {
        value: cdktf.stringToHclTerraform(this._defaultAction),
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
      no_safe_search: {
        value: cdktf.booleanToHclTerraform(this._noSafeSearch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      category: {
        value: cdktf.listMapperHcl(securityUtmProfileWebFilteringJuniperLocalCategoryToHclTerraform, true)(this._category.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityUtmProfileWebFilteringJuniperLocalCategoryList",
      },
      fallback_settings: {
        value: securityUtmProfileWebFilteringJuniperLocalFallbackSettingsToHclTerraform(this._fallbackSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmProfileWebFilteringJuniperLocalFallbackSettings",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
