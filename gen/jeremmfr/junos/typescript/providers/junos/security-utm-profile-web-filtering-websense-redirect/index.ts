// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityUtmProfileWebFilteringWebsenseRedirectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set websense redirect account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#account SecurityUtmProfileWebFilteringWebsenseRedirect#account}
  */
  readonly account?: string;
  /**
  * Custom block message sent to HTTP client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#custom_block_message SecurityUtmProfileWebFilteringWebsenseRedirect#custom_block_message}
  */
  readonly customBlockMessage?: string;
  /**
  * Custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#custom_message SecurityUtmProfileWebFilteringWebsenseRedirect#custom_message}
  */
  readonly customMessage?: string;
  /**
  * The name of security utm feature-profile web-filtering websense-redirect profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#name SecurityUtmProfileWebFilteringWebsenseRedirect#name}
  */
  readonly name: string;
  /**
  * Do not perform safe-search for Juniper local protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#no_safe_search SecurityUtmProfileWebFilteringWebsenseRedirect#no_safe_search}
  */
  readonly noSafeSearch?: boolean | cdktf.IResolvable;
  /**
  * Set sockets number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#sockets SecurityUtmProfileWebFilteringWebsenseRedirect#sockets}
  */
  readonly sockets?: number;
  /**
  * Set timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#timeout SecurityUtmProfileWebFilteringWebsenseRedirect#timeout}
  */
  readonly timeout?: number;
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#category SecurityUtmProfileWebFilteringWebsenseRedirect#category}
  */
  readonly category?: SecurityUtmProfileWebFilteringWebsenseRedirectCategory[] | cdktf.IResolvable;
  /**
  * fallback_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#fallback_settings SecurityUtmProfileWebFilteringWebsenseRedirect#fallback_settings}
  */
  readonly fallbackSettings?: SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings;
  /**
  * server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#server SecurityUtmProfileWebFilteringWebsenseRedirect#server}
  */
  readonly server?: SecurityUtmProfileWebFilteringWebsenseRedirectServer;
}
export interface SecurityUtmProfileWebFilteringWebsenseRedirectCategory {
  /**
  * Action when web traffic matches category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#action SecurityUtmProfileWebFilteringWebsenseRedirect#action}
  */
  readonly action: string;
  /**
  * Custom message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#custom_message SecurityUtmProfileWebFilteringWebsenseRedirect#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Name of category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#name SecurityUtmProfileWebFilteringWebsenseRedirect#name}
  */
  readonly name: string;
}

export function securityUtmProfileWebFilteringWebsenseRedirectCategoryToTerraform(struct?: SecurityUtmProfileWebFilteringWebsenseRedirectCategory | cdktf.IResolvable): any {
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


export function securityUtmProfileWebFilteringWebsenseRedirectCategoryToHclTerraform(struct?: SecurityUtmProfileWebFilteringWebsenseRedirectCategory | cdktf.IResolvable): any {
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

export class SecurityUtmProfileWebFilteringWebsenseRedirectCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SecurityUtmProfileWebFilteringWebsenseRedirectCategory | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityUtmProfileWebFilteringWebsenseRedirectCategory | cdktf.IResolvable | undefined) {
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

export class SecurityUtmProfileWebFilteringWebsenseRedirectCategoryList extends cdktf.ComplexList {
  public internalValue? : SecurityUtmProfileWebFilteringWebsenseRedirectCategory[] | cdktf.IResolvable

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
  public get(index: number): SecurityUtmProfileWebFilteringWebsenseRedirectCategoryOutputReference {
    return new SecurityUtmProfileWebFilteringWebsenseRedirectCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings {
  /**
  * Default action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#default SecurityUtmProfileWebFilteringWebsenseRedirect#default}
  */
  readonly default?: string;
  /**
  * Action when device cannot connect to server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#server_connectivity SecurityUtmProfileWebFilteringWebsenseRedirect#server_connectivity}
  */
  readonly serverConnectivity?: string;
  /**
  * Action when connection to server timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#timeout SecurityUtmProfileWebFilteringWebsenseRedirect#timeout}
  */
  readonly timeout?: string;
  /**
  * Action when requests exceed the limit of engine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#too_many_requests SecurityUtmProfileWebFilteringWebsenseRedirect#too_many_requests}
  */
  readonly tooManyRequests?: string;
}

export function securityUtmProfileWebFilteringWebsenseRedirectFallbackSettingsToTerraform(struct?: SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings | cdktf.IResolvable): any {
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


export function securityUtmProfileWebFilteringWebsenseRedirectFallbackSettingsToHclTerraform(struct?: SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings | cdktf.IResolvable): any {
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

export class SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings | cdktf.IResolvable | undefined) {
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
export interface SecurityUtmProfileWebFilteringWebsenseRedirectServer {
  /**
  * Server host IP address or string host name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#host SecurityUtmProfileWebFilteringWebsenseRedirect#host}
  */
  readonly host?: string;
  /**
  * Server port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#port SecurityUtmProfileWebFilteringWebsenseRedirect#port}
  */
  readonly port?: number;
  /**
  * Routing instance used to connect server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#routing_instance SecurityUtmProfileWebFilteringWebsenseRedirect#routing_instance}
  */
  readonly routingInstance?: string;
  /**
  * Source ip address used to connect server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#source_address SecurityUtmProfileWebFilteringWebsenseRedirect#source_address}
  */
  readonly sourceAddress?: string;
}

export function securityUtmProfileWebFilteringWebsenseRedirectServerToTerraform(struct?: SecurityUtmProfileWebFilteringWebsenseRedirectServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    routing_instance: cdktf.stringToTerraform(struct!.routingInstance),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
  }
}


export function securityUtmProfileWebFilteringWebsenseRedirectServerToHclTerraform(struct?: SecurityUtmProfileWebFilteringWebsenseRedirectServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    routing_instance: {
      value: cdktf.stringToHclTerraform(struct!.routingInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityUtmProfileWebFilteringWebsenseRedirectServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityUtmProfileWebFilteringWebsenseRedirectServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._routingInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.routingInstance = this._routingInstance;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityUtmProfileWebFilteringWebsenseRedirectServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._routingInstance = undefined;
      this._sourceAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._port = value.port;
      this._routingInstance = value.routingInstance;
      this._sourceAddress = value.sourceAddress;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // routing_instance - computed: false, optional: true, required: false
  private _routingInstance?: string; 
  public get routingInstance() {
    return this.getStringAttribute('routing_instance');
  }
  public set routingInstance(value: string) {
    this._routingInstance = value;
  }
  public resetRoutingInstance() {
    this._routingInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingInstanceInput() {
    return this._routingInstance;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect junos_security_utm_profile_web_filtering_websense_redirect}
*/
export class SecurityUtmProfileWebFilteringWebsenseRedirect extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_security_utm_profile_web_filtering_websense_redirect";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityUtmProfileWebFilteringWebsenseRedirect resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityUtmProfileWebFilteringWebsenseRedirect to import
  * @param importFromId The id of the existing SecurityUtmProfileWebFilteringWebsenseRedirect that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityUtmProfileWebFilteringWebsenseRedirect to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_security_utm_profile_web_filtering_websense_redirect", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/security_utm_profile_web_filtering_websense_redirect junos_security_utm_profile_web_filtering_websense_redirect} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityUtmProfileWebFilteringWebsenseRedirectConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityUtmProfileWebFilteringWebsenseRedirectConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_security_utm_profile_web_filtering_websense_redirect',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._account = config.account;
    this._customBlockMessage = config.customBlockMessage;
    this._customMessage = config.customMessage;
    this._name = config.name;
    this._noSafeSearch = config.noSafeSearch;
    this._sockets = config.sockets;
    this._timeout = config.timeout;
    this._category.internalValue = config.category;
    this._fallbackSettings.internalValue = config.fallbackSettings;
    this._server.internalValue = config.server;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account - computed: false, optional: true, required: false
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  public resetAccount() {
    this._account = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

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

  // sockets - computed: false, optional: true, required: false
  private _sockets?: number; 
  public get sockets() {
    return this.getNumberAttribute('sockets');
  }
  public set sockets(value: number) {
    this._sockets = value;
  }
  public resetSockets() {
    this._sockets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketsInput() {
    return this._sockets;
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
  private _category = new SecurityUtmProfileWebFilteringWebsenseRedirectCategoryList(this, "category", false);
  public get category() {
    return this._category;
  }
  public putCategory(value: SecurityUtmProfileWebFilteringWebsenseRedirectCategory[] | cdktf.IResolvable) {
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
  private _fallbackSettings = new SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettingsOutputReference(this, "fallback_settings");
  public get fallbackSettings() {
    return this._fallbackSettings;
  }
  public putFallbackSettings(value: SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings) {
    this._fallbackSettings.internalValue = value;
  }
  public resetFallbackSettings() {
    this._fallbackSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackSettingsInput() {
    return this._fallbackSettings.internalValue;
  }

  // server - computed: false, optional: true, required: false
  private _server = new SecurityUtmProfileWebFilteringWebsenseRedirectServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: SecurityUtmProfileWebFilteringWebsenseRedirectServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account: cdktf.stringToTerraform(this._account),
      custom_block_message: cdktf.stringToTerraform(this._customBlockMessage),
      custom_message: cdktf.stringToTerraform(this._customMessage),
      name: cdktf.stringToTerraform(this._name),
      no_safe_search: cdktf.booleanToTerraform(this._noSafeSearch),
      sockets: cdktf.numberToTerraform(this._sockets),
      timeout: cdktf.numberToTerraform(this._timeout),
      category: cdktf.listMapper(securityUtmProfileWebFilteringWebsenseRedirectCategoryToTerraform, true)(this._category.internalValue),
      fallback_settings: securityUtmProfileWebFilteringWebsenseRedirectFallbackSettingsToTerraform(this._fallbackSettings.internalValue),
      server: securityUtmProfileWebFilteringWebsenseRedirectServerToTerraform(this._server.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account: {
        value: cdktf.stringToHclTerraform(this._account),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      sockets: {
        value: cdktf.numberToHclTerraform(this._sockets),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      category: {
        value: cdktf.listMapperHcl(securityUtmProfileWebFilteringWebsenseRedirectCategoryToHclTerraform, true)(this._category.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityUtmProfileWebFilteringWebsenseRedirectCategoryList",
      },
      fallback_settings: {
        value: securityUtmProfileWebFilteringWebsenseRedirectFallbackSettingsToHclTerraform(this._fallbackSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmProfileWebFilteringWebsenseRedirectFallbackSettings",
      },
      server: {
        value: securityUtmProfileWebFilteringWebsenseRedirectServerToHclTerraform(this._server.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityUtmProfileWebFilteringWebsenseRedirectServer",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
