// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StfWebreceiverServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application shortcuts configurations for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#application_shortcuts StfWebreceiverService#application_shortcuts}
  */
  readonly applicationShortcuts?: StfWebreceiverServiceApplicationShortcuts;
  /**
  * WebReceiver Authentication Manager client options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#authentication_manager StfWebreceiverService#authentication_manager}
  */
  readonly authenticationManager?: StfWebreceiverServiceAuthenticationManager;
  /**
  * The authentication methods supported by the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#authentication_methods StfWebreceiverService#authentication_methods}
  */
  readonly authenticationMethods?: string[];
  /**
  * Communication settings used for the WebReceiver proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#communication StfWebreceiverService#communication}
  */
  readonly communication?: StfWebreceiverServiceCommunication;
  /**
  * The friendly name of the WebReceiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#friendly_name StfWebreceiverService#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Pluin Assistant configuration for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#plugin_assistant StfWebreceiverService#plugin_assistant}
  */
  readonly pluginAssistant?: StfWebreceiverServicePluginAssistant;
  /**
  * Resources Service settings for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#resources_service StfWebreceiverService#resources_service}
  */
  readonly resourcesService?: StfWebreceiverServiceResourcesService;
  /**
  * The IIS site id of the StoreFront WebReceiver. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#site_id StfWebreceiverService#site_id}
  */
  readonly siteId?: string;
  /**
  * The Virtual Path of the StoreFront Store Service linked to the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#store_virtual_path StfWebreceiverService#store_virtual_path}
  */
  readonly storeVirtualPath: string;
  /**
  * Communication settings used for the WebReceiver proxy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#strict_transport_security StfWebreceiverService#strict_transport_security}
  */
  readonly strictTransportSecurity?: StfWebreceiverServiceStrictTransportSecurity;
  /**
  * User interface configuration for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#user_interface StfWebreceiverService#user_interface}
  */
  readonly userInterface?: StfWebreceiverServiceUserInterface;
  /**
  * The IIS VirtualPath at which the WebReceiver will be configured to be accessed by Receivers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#virtual_path StfWebreceiverService#virtual_path}
  */
  readonly virtualPath: string;
  /**
  * Site Styles for the Web Receiver for Website.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#web_receiver_site_style StfWebreceiverService#web_receiver_site_style}
  */
  readonly webReceiverSiteStyle?: StfWebreceiverServiceWebReceiverSiteStyle;
}
export interface StfWebreceiverServiceApplicationShortcuts {
  /**
  * Set of gateways through which shortcuts will be provided to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#gateway_urls StfWebreceiverService#gateway_urls}
  */
  readonly gatewayUrls?: string[];
  /**
  * Display confirmation dialog when Receiver for Web cannot determine if an app shortcut originated from a trusted internal site.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#prompt_for_untrusted_shortcuts StfWebreceiverService#prompt_for_untrusted_shortcuts}
  */
  readonly promptForUntrustedShortcuts: boolean | cdktf.IResolvable;
  /**
  * Set of internal web sites that will provide app shortcuts to users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#trusted_urls StfWebreceiverService#trusted_urls}
  */
  readonly trustedUrls?: string[];
}

export function stfWebreceiverServiceApplicationShortcutsToTerraform(struct?: StfWebreceiverServiceApplicationShortcuts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gatewayUrls),
    prompt_for_untrusted_shortcuts: cdktf.booleanToTerraform(struct!.promptForUntrustedShortcuts),
    trusted_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.trustedUrls),
  }
}


export function stfWebreceiverServiceApplicationShortcutsToHclTerraform(struct?: StfWebreceiverServiceApplicationShortcuts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gatewayUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prompt_for_untrusted_shortcuts: {
      value: cdktf.booleanToHclTerraform(struct!.promptForUntrustedShortcuts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    trusted_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.trustedUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceApplicationShortcutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceApplicationShortcuts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayUrls = this._gatewayUrls;
    }
    if (this._promptForUntrustedShortcuts !== undefined) {
      hasAnyValues = true;
      internalValueResult.promptForUntrustedShortcuts = this._promptForUntrustedShortcuts;
    }
    if (this._trustedUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustedUrls = this._trustedUrls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceApplicationShortcuts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayUrls = undefined;
      this._promptForUntrustedShortcuts = undefined;
      this._trustedUrls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayUrls = value.gatewayUrls;
      this._promptForUntrustedShortcuts = value.promptForUntrustedShortcuts;
      this._trustedUrls = value.trustedUrls;
    }
  }

  // gateway_urls - computed: true, optional: true, required: false
  private _gatewayUrls?: string[]; 
  public get gatewayUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('gateway_urls'));
  }
  public set gatewayUrls(value: string[]) {
    this._gatewayUrls = value;
  }
  public resetGatewayUrls() {
    this._gatewayUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayUrlsInput() {
    return this._gatewayUrls;
  }

  // prompt_for_untrusted_shortcuts - computed: false, optional: false, required: true
  private _promptForUntrustedShortcuts?: boolean | cdktf.IResolvable; 
  public get promptForUntrustedShortcuts() {
    return this.getBooleanAttribute('prompt_for_untrusted_shortcuts');
  }
  public set promptForUntrustedShortcuts(value: boolean | cdktf.IResolvable) {
    this._promptForUntrustedShortcuts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get promptForUntrustedShortcutsInput() {
    return this._promptForUntrustedShortcuts;
  }

  // trusted_urls - computed: true, optional: true, required: false
  private _trustedUrls?: string[]; 
  public get trustedUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('trusted_urls'));
  }
  public set trustedUrls(value: string[]) {
    this._trustedUrls = value;
  }
  public resetTrustedUrls() {
    this._trustedUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustedUrlsInput() {
    return this._trustedUrls;
  }
}
export interface StfWebreceiverServiceAuthenticationManager {
  /**
  * The WebReceiver login form timeout in minutes. Defaults to `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#login_form_timeout StfWebreceiverService#login_form_timeout}
  */
  readonly loginFormTimeout?: number;
}

export function stfWebreceiverServiceAuthenticationManagerToTerraform(struct?: StfWebreceiverServiceAuthenticationManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    login_form_timeout: cdktf.numberToTerraform(struct!.loginFormTimeout),
  }
}


export function stfWebreceiverServiceAuthenticationManagerToHclTerraform(struct?: StfWebreceiverServiceAuthenticationManager | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    login_form_timeout: {
      value: cdktf.numberToHclTerraform(struct!.loginFormTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceAuthenticationManagerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceAuthenticationManager | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loginFormTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginFormTimeout = this._loginFormTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceAuthenticationManager | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loginFormTimeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loginFormTimeout = value.loginFormTimeout;
    }
  }

  // change_credentials_url - computed: true, optional: false, required: false
  public get changeCredentialsUrl() {
    return this.getStringAttribute('change_credentials_url');
  }

  // get_user_name_url - computed: true, optional: false, required: false
  public get fetchUserNameUrl() {
    return this.getStringAttribute('get_user_name_url');
  }

  // login_form_timeout - computed: true, optional: true, required: false
  private _loginFormTimeout?: number; 
  public get loginFormTimeout() {
    return this.getNumberAttribute('login_form_timeout');
  }
  public set loginFormTimeout(value: number) {
    this._loginFormTimeout = value;
  }
  public resetLoginFormTimeout() {
    this._loginFormTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginFormTimeoutInput() {
    return this._loginFormTimeout;
  }

  // logoff_url - computed: true, optional: false, required: false
  public get logoffUrl() {
    return this.getStringAttribute('logoff_url');
  }
}
export interface StfWebreceiverServiceCommunication {
  /**
  * The number of attempts WebReceiver should make to contact StoreFront before it gives up. Defaults to `1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#attempts StfWebreceiverService#attempts}
  */
  readonly attempts?: number;
  /**
  * Whether to use the loopback address for communications with the store service, rather than the actual StoreFront server URL. Available values are `On`, `Off`, `OnUsingHttp`. Defaults to `Off`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#loopback StfWebreceiverService#loopback}
  */
  readonly loopback?: string;
  /**
  * When loopback is set to `OnUsingHttp`, the port number to use for loopback communications. Defaults to `80`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#loopback_port_using_http StfWebreceiverService#loopback_port_using_http}
  */
  readonly loopbackPortUsingHttp?: number;
  /**
  * Whether the communications proxy is enabled. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#proxy_enabled StfWebreceiverService#proxy_enabled}
  */
  readonly proxyEnabled?: boolean | cdktf.IResolvable;
  /**
  * The port to use for the communications proxy. Defaults to `8888`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#proxy_port StfWebreceiverService#proxy_port}
  */
  readonly proxyPort?: number;
  /**
  * The name of the process acting as proxy. Defaults to `Fiddler`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#proxy_process_name StfWebreceiverService#proxy_process_name}
  */
  readonly proxyProcessName?: string;
  /**
  * Timeout value for communicating with StoreFront in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `0.0:3:0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#timeout StfWebreceiverService#timeout}
  */
  readonly timeout?: string;
}

export function stfWebreceiverServiceCommunicationToTerraform(struct?: StfWebreceiverServiceCommunication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attempts: cdktf.numberToTerraform(struct!.attempts),
    loopback: cdktf.stringToTerraform(struct!.loopback),
    loopback_port_using_http: cdktf.numberToTerraform(struct!.loopbackPortUsingHttp),
    proxy_enabled: cdktf.booleanToTerraform(struct!.proxyEnabled),
    proxy_port: cdktf.numberToTerraform(struct!.proxyPort),
    proxy_process_name: cdktf.stringToTerraform(struct!.proxyProcessName),
    timeout: cdktf.stringToTerraform(struct!.timeout),
  }
}


export function stfWebreceiverServiceCommunicationToHclTerraform(struct?: StfWebreceiverServiceCommunication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attempts: {
      value: cdktf.numberToHclTerraform(struct!.attempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loopback: {
      value: cdktf.stringToHclTerraform(struct!.loopback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    loopback_port_using_http: {
      value: cdktf.numberToHclTerraform(struct!.loopbackPortUsingHttp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.proxyEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    proxy_port: {
      value: cdktf.numberToHclTerraform(struct!.proxyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_process_name: {
      value: cdktf.stringToHclTerraform(struct!.proxyProcessName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceCommunicationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceCommunication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.attempts = this._attempts;
    }
    if (this._loopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopback = this._loopback;
    }
    if (this._loopbackPortUsingHttp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopbackPortUsingHttp = this._loopbackPortUsingHttp;
    }
    if (this._proxyEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyEnabled = this._proxyEnabled;
    }
    if (this._proxyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyPort = this._proxyPort;
    }
    if (this._proxyProcessName !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProcessName = this._proxyProcessName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceCommunication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attempts = undefined;
      this._loopback = undefined;
      this._loopbackPortUsingHttp = undefined;
      this._proxyEnabled = undefined;
      this._proxyPort = undefined;
      this._proxyProcessName = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attempts = value.attempts;
      this._loopback = value.loopback;
      this._loopbackPortUsingHttp = value.loopbackPortUsingHttp;
      this._proxyEnabled = value.proxyEnabled;
      this._proxyPort = value.proxyPort;
      this._proxyProcessName = value.proxyProcessName;
      this._timeout = value.timeout;
    }
  }

  // attempts - computed: true, optional: true, required: false
  private _attempts?: number; 
  public get attempts() {
    return this.getNumberAttribute('attempts');
  }
  public set attempts(value: number) {
    this._attempts = value;
  }
  public resetAttempts() {
    this._attempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attemptsInput() {
    return this._attempts;
  }

  // loopback - computed: true, optional: true, required: false
  private _loopback?: string; 
  public get loopback() {
    return this.getStringAttribute('loopback');
  }
  public set loopback(value: string) {
    this._loopback = value;
  }
  public resetLoopback() {
    this._loopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackInput() {
    return this._loopback;
  }

  // loopback_port_using_http - computed: true, optional: true, required: false
  private _loopbackPortUsingHttp?: number; 
  public get loopbackPortUsingHttp() {
    return this.getNumberAttribute('loopback_port_using_http');
  }
  public set loopbackPortUsingHttp(value: number) {
    this._loopbackPortUsingHttp = value;
  }
  public resetLoopbackPortUsingHttp() {
    this._loopbackPortUsingHttp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopbackPortUsingHttpInput() {
    return this._loopbackPortUsingHttp;
  }

  // proxy_enabled - computed: true, optional: true, required: false
  private _proxyEnabled?: boolean | cdktf.IResolvable; 
  public get proxyEnabled() {
    return this.getBooleanAttribute('proxy_enabled');
  }
  public set proxyEnabled(value: boolean | cdktf.IResolvable) {
    this._proxyEnabled = value;
  }
  public resetProxyEnabled() {
    this._proxyEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyEnabledInput() {
    return this._proxyEnabled;
  }

  // proxy_port - computed: true, optional: true, required: false
  private _proxyPort?: number; 
  public get proxyPort() {
    return this.getNumberAttribute('proxy_port');
  }
  public set proxyPort(value: number) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_process_name - computed: true, optional: true, required: false
  private _proxyProcessName?: string; 
  public get proxyProcessName() {
    return this.getStringAttribute('proxy_process_name');
  }
  public set proxyProcessName(value: string) {
    this._proxyProcessName = value;
  }
  public resetProxyProcessName() {
    this._proxyProcessName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProcessNameInput() {
    return this._proxyProcessName;
  }

  // timeout - computed: true, optional: true, required: false
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
}
export interface StfWebreceiverServicePluginAssistant {
  /**
  * Enable the Plugin Assistant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#enabled StfWebreceiverService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Html5 Chrome Application Origins settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#html5_chrome_app_origins StfWebreceiverService#html5_chrome_app_origins}
  */
  readonly html5ChromeAppOrigins?: string;
  /**
  * The Html5 Chrome Application preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#html5_chrome_app_preferences StfWebreceiverService#html5_chrome_app_preferences}
  */
  readonly html5ChromeAppPreferences?: string;
  /**
  * Method of deploying and using the Html5 Receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#html5_enabled StfWebreceiverService#html5_enabled}
  */
  readonly html5Enabled?: string;
  /**
  * The supported Html5 platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#html5_platforms StfWebreceiverService#html5_platforms}
  */
  readonly html5Platforms?: string;
  /**
  * Html5 Receiver preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#html5_preferences StfWebreceiverService#html5_preferences}
  */
  readonly html5Preferences?: string;
  /**
  * Launch Html5 Receiver in the same browser tab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#html5_single_tab_launch StfWebreceiverService#html5_single_tab_launch}
  */
  readonly html5SingleTabLaunch?: boolean | cdktf.IResolvable;
  /**
  * Minimum version of the MacOS supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#macos_minimum_supported_version StfWebreceiverService#macos_minimum_supported_version}
  */
  readonly macosMinimumSupportedVersion?: string;
  /**
  * Path to the MacOS Receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#macos_path StfWebreceiverService#macos_path}
  */
  readonly macosPath?: string;
  /**
  * Enable the Receiver Protocol Handler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#protocol_handler_enabled StfWebreceiverService#protocol_handler_enabled}
  */
  readonly protocolHandlerEnabled?: boolean | cdktf.IResolvable;
  /**
  * The supported Protocol Handler platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#protocol_handler_platforms StfWebreceiverService#protocol_handler_platforms}
  */
  readonly protocolHandlerPlatforms?: string;
  /**
  * Skip the Protocol Handle double hop check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#protocol_handler_skip_double_hop_check_when_disabled StfWebreceiverService#protocol_handler_skip_double_hop_check_when_disabled}
  */
  readonly protocolHandlerSkipDoubleHopCheckWhenDisabled?: boolean | cdktf.IResolvable;
  /**
  * Show Plugin Assistant after the user logs in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_after_login StfWebreceiverService#show_after_login}
  */
  readonly showAfterLogin?: boolean | cdktf.IResolvable;
  /**
  * Prompt to upgrade older clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#upgrade_at_login StfWebreceiverService#upgrade_at_login}
  */
  readonly upgradeAtLogin?: boolean | cdktf.IResolvable;
  /**
  * Path to the Windows Receiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#win32_path StfWebreceiverService#win32_path}
  */
  readonly win32Path?: string;
}

export function stfWebreceiverServicePluginAssistantToTerraform(struct?: StfWebreceiverServicePluginAssistant | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    html5_chrome_app_origins: cdktf.stringToTerraform(struct!.html5ChromeAppOrigins),
    html5_chrome_app_preferences: cdktf.stringToTerraform(struct!.html5ChromeAppPreferences),
    html5_enabled: cdktf.stringToTerraform(struct!.html5Enabled),
    html5_platforms: cdktf.stringToTerraform(struct!.html5Platforms),
    html5_preferences: cdktf.stringToTerraform(struct!.html5Preferences),
    html5_single_tab_launch: cdktf.booleanToTerraform(struct!.html5SingleTabLaunch),
    macos_minimum_supported_version: cdktf.stringToTerraform(struct!.macosMinimumSupportedVersion),
    macos_path: cdktf.stringToTerraform(struct!.macosPath),
    protocol_handler_enabled: cdktf.booleanToTerraform(struct!.protocolHandlerEnabled),
    protocol_handler_platforms: cdktf.stringToTerraform(struct!.protocolHandlerPlatforms),
    protocol_handler_skip_double_hop_check_when_disabled: cdktf.booleanToTerraform(struct!.protocolHandlerSkipDoubleHopCheckWhenDisabled),
    show_after_login: cdktf.booleanToTerraform(struct!.showAfterLogin),
    upgrade_at_login: cdktf.booleanToTerraform(struct!.upgradeAtLogin),
    win32_path: cdktf.stringToTerraform(struct!.win32Path),
  }
}


export function stfWebreceiverServicePluginAssistantToHclTerraform(struct?: StfWebreceiverServicePluginAssistant | cdktf.IResolvable): any {
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
    html5_chrome_app_origins: {
      value: cdktf.stringToHclTerraform(struct!.html5ChromeAppOrigins),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html5_chrome_app_preferences: {
      value: cdktf.stringToHclTerraform(struct!.html5ChromeAppPreferences),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html5_enabled: {
      value: cdktf.stringToHclTerraform(struct!.html5Enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html5_platforms: {
      value: cdktf.stringToHclTerraform(struct!.html5Platforms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html5_preferences: {
      value: cdktf.stringToHclTerraform(struct!.html5Preferences),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    html5_single_tab_launch: {
      value: cdktf.booleanToHclTerraform(struct!.html5SingleTabLaunch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    macos_minimum_supported_version: {
      value: cdktf.stringToHclTerraform(struct!.macosMinimumSupportedVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    macos_path: {
      value: cdktf.stringToHclTerraform(struct!.macosPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_handler_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.protocolHandlerEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol_handler_platforms: {
      value: cdktf.stringToHclTerraform(struct!.protocolHandlerPlatforms),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_handler_skip_double_hop_check_when_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.protocolHandlerSkipDoubleHopCheckWhenDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_after_login: {
      value: cdktf.booleanToHclTerraform(struct!.showAfterLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    upgrade_at_login: {
      value: cdktf.booleanToHclTerraform(struct!.upgradeAtLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    win32_path: {
      value: cdktf.stringToHclTerraform(struct!.win32Path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServicePluginAssistantOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServicePluginAssistant | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._html5ChromeAppOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.html5ChromeAppOrigins = this._html5ChromeAppOrigins;
    }
    if (this._html5ChromeAppPreferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.html5ChromeAppPreferences = this._html5ChromeAppPreferences;
    }
    if (this._html5Enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.html5Enabled = this._html5Enabled;
    }
    if (this._html5Platforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.html5Platforms = this._html5Platforms;
    }
    if (this._html5Preferences !== undefined) {
      hasAnyValues = true;
      internalValueResult.html5Preferences = this._html5Preferences;
    }
    if (this._html5SingleTabLaunch !== undefined) {
      hasAnyValues = true;
      internalValueResult.html5SingleTabLaunch = this._html5SingleTabLaunch;
    }
    if (this._macosMinimumSupportedVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.macosMinimumSupportedVersion = this._macosMinimumSupportedVersion;
    }
    if (this._macosPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.macosPath = this._macosPath;
    }
    if (this._protocolHandlerEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolHandlerEnabled = this._protocolHandlerEnabled;
    }
    if (this._protocolHandlerPlatforms !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolHandlerPlatforms = this._protocolHandlerPlatforms;
    }
    if (this._protocolHandlerSkipDoubleHopCheckWhenDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolHandlerSkipDoubleHopCheckWhenDisabled = this._protocolHandlerSkipDoubleHopCheckWhenDisabled;
    }
    if (this._showAfterLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAfterLogin = this._showAfterLogin;
    }
    if (this._upgradeAtLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeAtLogin = this._upgradeAtLogin;
    }
    if (this._win32Path !== undefined) {
      hasAnyValues = true;
      internalValueResult.win32Path = this._win32Path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServicePluginAssistant | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._html5ChromeAppOrigins = undefined;
      this._html5ChromeAppPreferences = undefined;
      this._html5Enabled = undefined;
      this._html5Platforms = undefined;
      this._html5Preferences = undefined;
      this._html5SingleTabLaunch = undefined;
      this._macosMinimumSupportedVersion = undefined;
      this._macosPath = undefined;
      this._protocolHandlerEnabled = undefined;
      this._protocolHandlerPlatforms = undefined;
      this._protocolHandlerSkipDoubleHopCheckWhenDisabled = undefined;
      this._showAfterLogin = undefined;
      this._upgradeAtLogin = undefined;
      this._win32Path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._html5ChromeAppOrigins = value.html5ChromeAppOrigins;
      this._html5ChromeAppPreferences = value.html5ChromeAppPreferences;
      this._html5Enabled = value.html5Enabled;
      this._html5Platforms = value.html5Platforms;
      this._html5Preferences = value.html5Preferences;
      this._html5SingleTabLaunch = value.html5SingleTabLaunch;
      this._macosMinimumSupportedVersion = value.macosMinimumSupportedVersion;
      this._macosPath = value.macosPath;
      this._protocolHandlerEnabled = value.protocolHandlerEnabled;
      this._protocolHandlerPlatforms = value.protocolHandlerPlatforms;
      this._protocolHandlerSkipDoubleHopCheckWhenDisabled = value.protocolHandlerSkipDoubleHopCheckWhenDisabled;
      this._showAfterLogin = value.showAfterLogin;
      this._upgradeAtLogin = value.upgradeAtLogin;
      this._win32Path = value.win32Path;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // html5_chrome_app_origins - computed: false, optional: true, required: false
  private _html5ChromeAppOrigins?: string; 
  public get html5ChromeAppOrigins() {
    return this.getStringAttribute('html5_chrome_app_origins');
  }
  public set html5ChromeAppOrigins(value: string) {
    this._html5ChromeAppOrigins = value;
  }
  public resetHtml5ChromeAppOrigins() {
    this._html5ChromeAppOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get html5ChromeAppOriginsInput() {
    return this._html5ChromeAppOrigins;
  }

  // html5_chrome_app_preferences - computed: false, optional: true, required: false
  private _html5ChromeAppPreferences?: string; 
  public get html5ChromeAppPreferences() {
    return this.getStringAttribute('html5_chrome_app_preferences');
  }
  public set html5ChromeAppPreferences(value: string) {
    this._html5ChromeAppPreferences = value;
  }
  public resetHtml5ChromeAppPreferences() {
    this._html5ChromeAppPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get html5ChromeAppPreferencesInput() {
    return this._html5ChromeAppPreferences;
  }

  // html5_enabled - computed: false, optional: true, required: false
  private _html5Enabled?: string; 
  public get html5Enabled() {
    return this.getStringAttribute('html5_enabled');
  }
  public set html5Enabled(value: string) {
    this._html5Enabled = value;
  }
  public resetHtml5Enabled() {
    this._html5Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get html5EnabledInput() {
    return this._html5Enabled;
  }

  // html5_platforms - computed: false, optional: true, required: false
  private _html5Platforms?: string; 
  public get html5Platforms() {
    return this.getStringAttribute('html5_platforms');
  }
  public set html5Platforms(value: string) {
    this._html5Platforms = value;
  }
  public resetHtml5Platforms() {
    this._html5Platforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get html5PlatformsInput() {
    return this._html5Platforms;
  }

  // html5_preferences - computed: false, optional: true, required: false
  private _html5Preferences?: string; 
  public get html5Preferences() {
    return this.getStringAttribute('html5_preferences');
  }
  public set html5Preferences(value: string) {
    this._html5Preferences = value;
  }
  public resetHtml5Preferences() {
    this._html5Preferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get html5PreferencesInput() {
    return this._html5Preferences;
  }

  // html5_single_tab_launch - computed: false, optional: true, required: false
  private _html5SingleTabLaunch?: boolean | cdktf.IResolvable; 
  public get html5SingleTabLaunch() {
    return this.getBooleanAttribute('html5_single_tab_launch');
  }
  public set html5SingleTabLaunch(value: boolean | cdktf.IResolvable) {
    this._html5SingleTabLaunch = value;
  }
  public resetHtml5SingleTabLaunch() {
    this._html5SingleTabLaunch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get html5SingleTabLaunchInput() {
    return this._html5SingleTabLaunch;
  }

  // macos_minimum_supported_version - computed: false, optional: true, required: false
  private _macosMinimumSupportedVersion?: string; 
  public get macosMinimumSupportedVersion() {
    return this.getStringAttribute('macos_minimum_supported_version');
  }
  public set macosMinimumSupportedVersion(value: string) {
    this._macosMinimumSupportedVersion = value;
  }
  public resetMacosMinimumSupportedVersion() {
    this._macosMinimumSupportedVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosMinimumSupportedVersionInput() {
    return this._macosMinimumSupportedVersion;
  }

  // macos_path - computed: false, optional: true, required: false
  private _macosPath?: string; 
  public get macosPath() {
    return this.getStringAttribute('macos_path');
  }
  public set macosPath(value: string) {
    this._macosPath = value;
  }
  public resetMacosPath() {
    this._macosPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macosPathInput() {
    return this._macosPath;
  }

  // protocol_handler_enabled - computed: false, optional: true, required: false
  private _protocolHandlerEnabled?: boolean | cdktf.IResolvable; 
  public get protocolHandlerEnabled() {
    return this.getBooleanAttribute('protocol_handler_enabled');
  }
  public set protocolHandlerEnabled(value: boolean | cdktf.IResolvable) {
    this._protocolHandlerEnabled = value;
  }
  public resetProtocolHandlerEnabled() {
    this._protocolHandlerEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolHandlerEnabledInput() {
    return this._protocolHandlerEnabled;
  }

  // protocol_handler_platforms - computed: false, optional: true, required: false
  private _protocolHandlerPlatforms?: string; 
  public get protocolHandlerPlatforms() {
    return this.getStringAttribute('protocol_handler_platforms');
  }
  public set protocolHandlerPlatforms(value: string) {
    this._protocolHandlerPlatforms = value;
  }
  public resetProtocolHandlerPlatforms() {
    this._protocolHandlerPlatforms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolHandlerPlatformsInput() {
    return this._protocolHandlerPlatforms;
  }

  // protocol_handler_skip_double_hop_check_when_disabled - computed: false, optional: true, required: false
  private _protocolHandlerSkipDoubleHopCheckWhenDisabled?: boolean | cdktf.IResolvable; 
  public get protocolHandlerSkipDoubleHopCheckWhenDisabled() {
    return this.getBooleanAttribute('protocol_handler_skip_double_hop_check_when_disabled');
  }
  public set protocolHandlerSkipDoubleHopCheckWhenDisabled(value: boolean | cdktf.IResolvable) {
    this._protocolHandlerSkipDoubleHopCheckWhenDisabled = value;
  }
  public resetProtocolHandlerSkipDoubleHopCheckWhenDisabled() {
    this._protocolHandlerSkipDoubleHopCheckWhenDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolHandlerSkipDoubleHopCheckWhenDisabledInput() {
    return this._protocolHandlerSkipDoubleHopCheckWhenDisabled;
  }

  // show_after_login - computed: true, optional: true, required: false
  private _showAfterLogin?: boolean | cdktf.IResolvable; 
  public get showAfterLogin() {
    return this.getBooleanAttribute('show_after_login');
  }
  public set showAfterLogin(value: boolean | cdktf.IResolvable) {
    this._showAfterLogin = value;
  }
  public resetShowAfterLogin() {
    this._showAfterLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAfterLoginInput() {
    return this._showAfterLogin;
  }

  // upgrade_at_login - computed: true, optional: true, required: false
  private _upgradeAtLogin?: boolean | cdktf.IResolvable; 
  public get upgradeAtLogin() {
    return this.getBooleanAttribute('upgrade_at_login');
  }
  public set upgradeAtLogin(value: boolean | cdktf.IResolvable) {
    this._upgradeAtLogin = value;
  }
  public resetUpgradeAtLogin() {
    this._upgradeAtLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeAtLoginInput() {
    return this._upgradeAtLogin;
  }

  // win32_path - computed: false, optional: true, required: false
  private _win32Path?: string; 
  public get win32Path() {
    return this.getStringAttribute('win32_path');
  }
  public set win32Path(value: string) {
    this._win32Path = value;
  }
  public resetWin32Path() {
    this._win32Path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get win32PathInput() {
    return this._win32Path;
  }
}
export interface StfWebreceiverServiceResourcesService {
  /**
  * How long the ICA file data is cached in the memory of the Web Proxy. Defaults to `90`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#ica_file_cache_expiry StfWebreceiverService#ica_file_cache_expiry}
  */
  readonly icaFileCacheExpiry?: number;
  /**
  * The desired icon size sent to the Store Service in icon requests. Defaults to `128`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#icon_size StfWebreceiverService#icon_size}
  */
  readonly iconSize?: number;
  /**
  * Whether to cache icon data in the local file system. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#persistent_icon_cache_enabled StfWebreceiverService#persistent_icon_cache_enabled}
  */
  readonly persistentIconCacheEnabled?: boolean | cdktf.IResolvable;
  /**
  * Shows the Citrix Desktop Viewer window and toolbar when users access their desktops from legacy clients. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_desktop_viewer StfWebreceiverService#show_desktop_viewer}
  */
  readonly showDesktopViewer?: boolean | cdktf.IResolvable;
}

export function stfWebreceiverServiceResourcesServiceToTerraform(struct?: StfWebreceiverServiceResourcesService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ica_file_cache_expiry: cdktf.numberToTerraform(struct!.icaFileCacheExpiry),
    icon_size: cdktf.numberToTerraform(struct!.iconSize),
    persistent_icon_cache_enabled: cdktf.booleanToTerraform(struct!.persistentIconCacheEnabled),
    show_desktop_viewer: cdktf.booleanToTerraform(struct!.showDesktopViewer),
  }
}


export function stfWebreceiverServiceResourcesServiceToHclTerraform(struct?: StfWebreceiverServiceResourcesService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ica_file_cache_expiry: {
      value: cdktf.numberToHclTerraform(struct!.icaFileCacheExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icon_size: {
      value: cdktf.numberToHclTerraform(struct!.iconSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    persistent_icon_cache_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentIconCacheEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_desktop_viewer: {
      value: cdktf.booleanToHclTerraform(struct!.showDesktopViewer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceResourcesServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceResourcesService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icaFileCacheExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.icaFileCacheExpiry = this._icaFileCacheExpiry;
    }
    if (this._iconSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconSize = this._iconSize;
    }
    if (this._persistentIconCacheEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentIconCacheEnabled = this._persistentIconCacheEnabled;
    }
    if (this._showDesktopViewer !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDesktopViewer = this._showDesktopViewer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceResourcesService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._icaFileCacheExpiry = undefined;
      this._iconSize = undefined;
      this._persistentIconCacheEnabled = undefined;
      this._showDesktopViewer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._icaFileCacheExpiry = value.icaFileCacheExpiry;
      this._iconSize = value.iconSize;
      this._persistentIconCacheEnabled = value.persistentIconCacheEnabled;
      this._showDesktopViewer = value.showDesktopViewer;
    }
  }

  // ica_file_cache_expiry - computed: true, optional: true, required: false
  private _icaFileCacheExpiry?: number; 
  public get icaFileCacheExpiry() {
    return this.getNumberAttribute('ica_file_cache_expiry');
  }
  public set icaFileCacheExpiry(value: number) {
    this._icaFileCacheExpiry = value;
  }
  public resetIcaFileCacheExpiry() {
    this._icaFileCacheExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icaFileCacheExpiryInput() {
    return this._icaFileCacheExpiry;
  }

  // icon_size - computed: true, optional: true, required: false
  private _iconSize?: number; 
  public get iconSize() {
    return this.getNumberAttribute('icon_size');
  }
  public set iconSize(value: number) {
    this._iconSize = value;
  }
  public resetIconSize() {
    this._iconSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconSizeInput() {
    return this._iconSize;
  }

  // persistent_icon_cache_enabled - computed: true, optional: true, required: false
  private _persistentIconCacheEnabled?: boolean | cdktf.IResolvable; 
  public get persistentIconCacheEnabled() {
    return this.getBooleanAttribute('persistent_icon_cache_enabled');
  }
  public set persistentIconCacheEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentIconCacheEnabled = value;
  }
  public resetPersistentIconCacheEnabled() {
    this._persistentIconCacheEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentIconCacheEnabledInput() {
    return this._persistentIconCacheEnabled;
  }

  // show_desktop_viewer - computed: true, optional: true, required: false
  private _showDesktopViewer?: boolean | cdktf.IResolvable; 
  public get showDesktopViewer() {
    return this.getBooleanAttribute('show_desktop_viewer');
  }
  public set showDesktopViewer(value: boolean | cdktf.IResolvable) {
    this._showDesktopViewer = value;
  }
  public resetShowDesktopViewer() {
    this._showDesktopViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDesktopViewerInput() {
    return this._showDesktopViewer;
  }
}
export interface StfWebreceiverServiceStrictTransportSecurity {
  /**
  * Whether to enable the HTTP Strict Transport Security feature. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#enabled StfWebreceiverService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The time period for which browsers should apply HSTS to the RfWeb site in `dd.hh:mm:ss` format with 0's trimmed. Defaults to `90.0:0:0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#policy_duration StfWebreceiverService#policy_duration}
  */
  readonly policyDuration?: string;
}

export function stfWebreceiverServiceStrictTransportSecurityToTerraform(struct?: StfWebreceiverServiceStrictTransportSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    policy_duration: cdktf.stringToTerraform(struct!.policyDuration),
  }
}


export function stfWebreceiverServiceStrictTransportSecurityToHclTerraform(struct?: StfWebreceiverServiceStrictTransportSecurity | cdktf.IResolvable): any {
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
    policy_duration: {
      value: cdktf.stringToHclTerraform(struct!.policyDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceStrictTransportSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceStrictTransportSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._policyDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDuration = this._policyDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceStrictTransportSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._policyDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._policyDuration = value.policyDuration;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // policy_duration - computed: true, optional: true, required: false
  private _policyDuration?: string; 
  public get policyDuration() {
    return this.getStringAttribute('policy_duration');
  }
  public set policyDuration(value: string) {
    this._policyDuration = value;
  }
  public resetPolicyDuration() {
    this._policyDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDurationInput() {
    return this._policyDuration;
  }
}
export interface StfWebreceiverServiceUserInterfaceAppShortcuts {
  /**
  * Enable App Shortcuts to support session reconnect. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#allow_session_reconnect StfWebreceiverService#allow_session_reconnect}
  */
  readonly allowSessionReconnect?: boolean | cdktf.IResolvable;
  /**
  * Enable app shortcuts. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#enabled StfWebreceiverService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function stfWebreceiverServiceUserInterfaceAppShortcutsToTerraform(struct?: StfWebreceiverServiceUserInterfaceAppShortcuts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_session_reconnect: cdktf.booleanToTerraform(struct!.allowSessionReconnect),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function stfWebreceiverServiceUserInterfaceAppShortcutsToHclTerraform(struct?: StfWebreceiverServiceUserInterfaceAppShortcuts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_session_reconnect: {
      value: cdktf.booleanToHclTerraform(struct!.allowSessionReconnect),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceUserInterfaceAppShortcutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceUserInterfaceAppShortcuts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSessionReconnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSessionReconnect = this._allowSessionReconnect;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceUserInterfaceAppShortcuts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowSessionReconnect = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowSessionReconnect = value.allowSessionReconnect;
      this._enabled = value.enabled;
    }
  }

  // allow_session_reconnect - computed: true, optional: true, required: false
  private _allowSessionReconnect?: boolean | cdktf.IResolvable; 
  public get allowSessionReconnect() {
    return this.getBooleanAttribute('allow_session_reconnect');
  }
  public set allowSessionReconnect(value: boolean | cdktf.IResolvable) {
    this._allowSessionReconnect = value;
  }
  public resetAllowSessionReconnect() {
    this._allowSessionReconnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSessionReconnectInput() {
    return this._allowSessionReconnect;
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface StfWebreceiverServiceUserInterfaceProgressiveWebApp {
  /**
  * Enable Progressive Web App support. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#enabled StfWebreceiverService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Enable prompt to install Progressive Web App. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_install_prompt StfWebreceiverService#show_install_prompt}
  */
  readonly showInstallPrompt?: boolean | cdktf.IResolvable;
}

export function stfWebreceiverServiceUserInterfaceProgressiveWebAppToTerraform(struct?: StfWebreceiverServiceUserInterfaceProgressiveWebApp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    show_install_prompt: cdktf.booleanToTerraform(struct!.showInstallPrompt),
  }
}


export function stfWebreceiverServiceUserInterfaceProgressiveWebAppToHclTerraform(struct?: StfWebreceiverServiceUserInterfaceProgressiveWebApp | cdktf.IResolvable): any {
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
    show_install_prompt: {
      value: cdktf.booleanToHclTerraform(struct!.showInstallPrompt),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceUserInterfaceProgressiveWebAppOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceUserInterfaceProgressiveWebApp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._showInstallPrompt !== undefined) {
      hasAnyValues = true;
      internalValueResult.showInstallPrompt = this._showInstallPrompt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceUserInterfaceProgressiveWebApp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._showInstallPrompt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._showInstallPrompt = value.showInstallPrompt;
    }
  }

  // enabled - computed: true, optional: true, required: false
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

  // show_install_prompt - computed: true, optional: true, required: false
  private _showInstallPrompt?: boolean | cdktf.IResolvable; 
  public get showInstallPrompt() {
    return this.getBooleanAttribute('show_install_prompt');
  }
  public set showInstallPrompt(value: boolean | cdktf.IResolvable) {
    this._showInstallPrompt = value;
  }
  public resetShowInstallPrompt() {
    this._showInstallPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showInstallPromptInput() {
    return this._showInstallPrompt;
  }
}
export interface StfWebreceiverServiceUserInterfaceReceiverConfiguration {
  /**
  * Enable the Receiver Configuration .cr file download. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#enabled StfWebreceiverService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function stfWebreceiverServiceUserInterfaceReceiverConfigurationToTerraform(struct?: StfWebreceiverServiceUserInterfaceReceiverConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function stfWebreceiverServiceUserInterfaceReceiverConfigurationToHclTerraform(struct?: StfWebreceiverServiceUserInterfaceReceiverConfiguration | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceUserInterfaceReceiverConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceUserInterfaceReceiverConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceUserInterfaceReceiverConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // download_url - computed: true, optional: false, required: false
  public get downloadUrl() {
    return this.getStringAttribute('download_url');
  }

  // enabled - computed: true, optional: true, required: false
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
}
export interface StfWebreceiverServiceUserInterfaceUiViews {
  /**
  * The view to show after logon. Available values are `Auto`, `Desktops`, and `Apps`. Defaults to `Auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#default_view StfWebreceiverService#default_view}
  */
  readonly defaultView?: string;
  /**
  * Whether to show the apps view tab. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_apps_view StfWebreceiverService#show_apps_view}
  */
  readonly showAppsView?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the desktops tab. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_desktops_view StfWebreceiverService#show_desktops_view}
  */
  readonly showDesktopsView?: boolean | cdktf.IResolvable;
}

export function stfWebreceiverServiceUserInterfaceUiViewsToTerraform(struct?: StfWebreceiverServiceUserInterfaceUiViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_view: cdktf.stringToTerraform(struct!.defaultView),
    show_apps_view: cdktf.booleanToTerraform(struct!.showAppsView),
    show_desktops_view: cdktf.booleanToTerraform(struct!.showDesktopsView),
  }
}


export function stfWebreceiverServiceUserInterfaceUiViewsToHclTerraform(struct?: StfWebreceiverServiceUserInterfaceUiViews | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_view: {
      value: cdktf.stringToHclTerraform(struct!.defaultView),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_apps_view: {
      value: cdktf.booleanToHclTerraform(struct!.showAppsView),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_desktops_view: {
      value: cdktf.booleanToHclTerraform(struct!.showDesktopsView),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceUserInterfaceUiViewsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceUserInterfaceUiViews | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultView !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultView = this._defaultView;
    }
    if (this._showAppsView !== undefined) {
      hasAnyValues = true;
      internalValueResult.showAppsView = this._showAppsView;
    }
    if (this._showDesktopsView !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDesktopsView = this._showDesktopsView;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceUserInterfaceUiViews | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultView = undefined;
      this._showAppsView = undefined;
      this._showDesktopsView = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultView = value.defaultView;
      this._showAppsView = value.showAppsView;
      this._showDesktopsView = value.showDesktopsView;
    }
  }

  // default_view - computed: true, optional: true, required: false
  private _defaultView?: string; 
  public get defaultView() {
    return this.getStringAttribute('default_view');
  }
  public set defaultView(value: string) {
    this._defaultView = value;
  }
  public resetDefaultView() {
    this._defaultView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultViewInput() {
    return this._defaultView;
  }

  // show_apps_view - computed: true, optional: true, required: false
  private _showAppsView?: boolean | cdktf.IResolvable; 
  public get showAppsView() {
    return this.getBooleanAttribute('show_apps_view');
  }
  public set showAppsView(value: boolean | cdktf.IResolvable) {
    this._showAppsView = value;
  }
  public resetShowAppsView() {
    this._showAppsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAppsViewInput() {
    return this._showAppsView;
  }

  // show_desktops_view - computed: true, optional: true, required: false
  private _showDesktopsView?: boolean | cdktf.IResolvable; 
  public get showDesktopsView() {
    return this.getBooleanAttribute('show_desktops_view');
  }
  public set showDesktopsView(value: boolean | cdktf.IResolvable) {
    this._showDesktopsView = value;
  }
  public resetShowDesktopsView() {
    this._showDesktopsView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDesktopsViewInput() {
    return this._showDesktopsView;
  }
}
export interface StfWebreceiverServiceUserInterfaceWorkspaceControl {
  /**
  * Whether to perform auto-reconnect at login. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#auto_reconnect_at_logon StfWebreceiverService#auto_reconnect_at_logon}
  */
  readonly autoReconnectAtLogon?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable workspace control. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#enabled StfWebreceiverService#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether to disconnect or terminate HDX sessions when actively logging off Receiver for Web. Available values are `Disconnect`, `Terminate`, and `None`. Defaults to `Disconnect`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#logoff_action StfWebreceiverService#logoff_action}
  */
  readonly logoffAction?: string;
  /**
  * Whether to show the disconnect button/link. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_disconnect_button StfWebreceiverService#show_disconnect_button}
  */
  readonly showDisconnectButton?: boolean | cdktf.IResolvable;
  /**
  * Whether to show the reconnect button/link. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_reconnect_button StfWebreceiverService#show_reconnect_button}
  */
  readonly showReconnectButton?: boolean | cdktf.IResolvable;
}

export function stfWebreceiverServiceUserInterfaceWorkspaceControlToTerraform(struct?: StfWebreceiverServiceUserInterfaceWorkspaceControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_reconnect_at_logon: cdktf.booleanToTerraform(struct!.autoReconnectAtLogon),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    logoff_action: cdktf.stringToTerraform(struct!.logoffAction),
    show_disconnect_button: cdktf.booleanToTerraform(struct!.showDisconnectButton),
    show_reconnect_button: cdktf.booleanToTerraform(struct!.showReconnectButton),
  }
}


export function stfWebreceiverServiceUserInterfaceWorkspaceControlToHclTerraform(struct?: StfWebreceiverServiceUserInterfaceWorkspaceControl | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_reconnect_at_logon: {
      value: cdktf.booleanToHclTerraform(struct!.autoReconnectAtLogon),
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
    logoff_action: {
      value: cdktf.stringToHclTerraform(struct!.logoffAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_disconnect_button: {
      value: cdktf.booleanToHclTerraform(struct!.showDisconnectButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_reconnect_button: {
      value: cdktf.booleanToHclTerraform(struct!.showReconnectButton),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceUserInterfaceWorkspaceControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceUserInterfaceWorkspaceControl | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoReconnectAtLogon !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoReconnectAtLogon = this._autoReconnectAtLogon;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._logoffAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoffAction = this._logoffAction;
    }
    if (this._showDisconnectButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showDisconnectButton = this._showDisconnectButton;
    }
    if (this._showReconnectButton !== undefined) {
      hasAnyValues = true;
      internalValueResult.showReconnectButton = this._showReconnectButton;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceUserInterfaceWorkspaceControl | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoReconnectAtLogon = undefined;
      this._enabled = undefined;
      this._logoffAction = undefined;
      this._showDisconnectButton = undefined;
      this._showReconnectButton = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoReconnectAtLogon = value.autoReconnectAtLogon;
      this._enabled = value.enabled;
      this._logoffAction = value.logoffAction;
      this._showDisconnectButton = value.showDisconnectButton;
      this._showReconnectButton = value.showReconnectButton;
    }
  }

  // auto_reconnect_at_logon - computed: true, optional: true, required: false
  private _autoReconnectAtLogon?: boolean | cdktf.IResolvable; 
  public get autoReconnectAtLogon() {
    return this.getBooleanAttribute('auto_reconnect_at_logon');
  }
  public set autoReconnectAtLogon(value: boolean | cdktf.IResolvable) {
    this._autoReconnectAtLogon = value;
  }
  public resetAutoReconnectAtLogon() {
    this._autoReconnectAtLogon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReconnectAtLogonInput() {
    return this._autoReconnectAtLogon;
  }

  // enabled - computed: true, optional: true, required: false
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

  // logoff_action - computed: true, optional: true, required: false
  private _logoffAction?: string; 
  public get logoffAction() {
    return this.getStringAttribute('logoff_action');
  }
  public set logoffAction(value: string) {
    this._logoffAction = value;
  }
  public resetLogoffAction() {
    this._logoffAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoffActionInput() {
    return this._logoffAction;
  }

  // show_disconnect_button - computed: true, optional: true, required: false
  private _showDisconnectButton?: boolean | cdktf.IResolvable; 
  public get showDisconnectButton() {
    return this.getBooleanAttribute('show_disconnect_button');
  }
  public set showDisconnectButton(value: boolean | cdktf.IResolvable) {
    this._showDisconnectButton = value;
  }
  public resetShowDisconnectButton() {
    this._showDisconnectButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showDisconnectButtonInput() {
    return this._showDisconnectButton;
  }

  // show_reconnect_button - computed: true, optional: true, required: false
  private _showReconnectButton?: boolean | cdktf.IResolvable; 
  public get showReconnectButton() {
    return this.getBooleanAttribute('show_reconnect_button');
  }
  public set showReconnectButton(value: boolean | cdktf.IResolvable) {
    this._showReconnectButton = value;
  }
  public resetShowReconnectButton() {
    this._showReconnectButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showReconnectButtonInput() {
    return this._showReconnectButton;
  }
}
export interface StfWebreceiverServiceUserInterface {
  /**
  * App shortcuts configuration for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#app_shortcuts StfWebreceiverService#app_shortcuts}
  */
  readonly appShortcuts?: StfWebreceiverServiceUserInterfaceAppShortcuts;
  /**
  * Whether to auto-launch desktop at login if there is only one desktop available for the user. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#auto_launch_desktop StfWebreceiverService#auto_launch_desktop}
  */
  readonly autoLaunchDesktop?: boolean | cdktf.IResolvable;
  /**
  * Collapse the category view so that only the immediate contents of the selected category/sub-catagory are displayed. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#category_view_collapsed StfWebreceiverService#category_view_collapsed}
  */
  readonly categoryViewCollapsed?: boolean | cdktf.IResolvable;
  /**
  * Allows the user to turn off folder view when in a locked-down store or unauthenticated store. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#enable_apps_folder_view StfWebreceiverService#enable_apps_folder_view}
  */
  readonly enableAppsFolderView?: boolean | cdktf.IResolvable;
  /**
  * Move uncategorized apps into a folder named ‘Uncategorized’ when the category view is collapsed. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#move_app_to_uncategorized StfWebreceiverService#move_app_to_uncategorized}
  */
  readonly moveAppToUncategorized?: boolean | cdktf.IResolvable;
  /**
  * The time period in seconds for which the spinner control is displayed, after the user clicks on the App/Desktop icon within Receiver for Web. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#multi_click_timeout StfWebreceiverService#multi_click_timeout}
  */
  readonly multiClickTimeout?: number;
  /**
  * Prevent download of ICA Files. Defaults to `false`. StoreFront version 2402 or higher is required to modify this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#prevent_ica_downloads StfWebreceiverService#prevent_ica_downloads}
  */
  readonly preventIcaDownloads?: boolean | cdktf.IResolvable;
  /**
  * Progressive Web App configuration for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#progressive_web_app StfWebreceiverService#progressive_web_app}
  */
  readonly progressiveWebApp?: StfWebreceiverServiceUserInterfaceProgressiveWebApp;
  /**
  * Receiver configuration for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#receiver_configuration StfWebreceiverService#receiver_configuration}
  */
  readonly receiverConfiguration?: StfWebreceiverServiceUserInterfaceReceiverConfiguration;
  /**
  * Enable the Activity Manager within the end user interface. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_activity_manager StfWebreceiverService#show_activity_manager}
  */
  readonly showActivityManager?: boolean | cdktf.IResolvable;
  /**
  * Enable the showing of the First Time Use screen within the end user interface. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#show_first_time_use StfWebreceiverService#show_first_time_use}
  */
  readonly showFirstTimeUse?: boolean | cdktf.IResolvable;
  /**
  * UI view configuration for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#ui_views StfWebreceiverService#ui_views}
  */
  readonly uiViews?: StfWebreceiverServiceUserInterfaceUiViews;
  /**
  * Workspace control configuration for the WebReceiver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#workspace_control StfWebreceiverService#workspace_control}
  */
  readonly workspaceControl?: StfWebreceiverServiceUserInterfaceWorkspaceControl;
}

export function stfWebreceiverServiceUserInterfaceToTerraform(struct?: StfWebreceiverServiceUserInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_shortcuts: stfWebreceiverServiceUserInterfaceAppShortcutsToTerraform(struct!.appShortcuts),
    auto_launch_desktop: cdktf.booleanToTerraform(struct!.autoLaunchDesktop),
    category_view_collapsed: cdktf.booleanToTerraform(struct!.categoryViewCollapsed),
    enable_apps_folder_view: cdktf.booleanToTerraform(struct!.enableAppsFolderView),
    move_app_to_uncategorized: cdktf.booleanToTerraform(struct!.moveAppToUncategorized),
    multi_click_timeout: cdktf.numberToTerraform(struct!.multiClickTimeout),
    prevent_ica_downloads: cdktf.booleanToTerraform(struct!.preventIcaDownloads),
    progressive_web_app: stfWebreceiverServiceUserInterfaceProgressiveWebAppToTerraform(struct!.progressiveWebApp),
    receiver_configuration: stfWebreceiverServiceUserInterfaceReceiverConfigurationToTerraform(struct!.receiverConfiguration),
    show_activity_manager: cdktf.booleanToTerraform(struct!.showActivityManager),
    show_first_time_use: cdktf.booleanToTerraform(struct!.showFirstTimeUse),
    ui_views: stfWebreceiverServiceUserInterfaceUiViewsToTerraform(struct!.uiViews),
    workspace_control: stfWebreceiverServiceUserInterfaceWorkspaceControlToTerraform(struct!.workspaceControl),
  }
}


export function stfWebreceiverServiceUserInterfaceToHclTerraform(struct?: StfWebreceiverServiceUserInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_shortcuts: {
      value: stfWebreceiverServiceUserInterfaceAppShortcutsToHclTerraform(struct!.appShortcuts),
      isBlock: true,
      type: "struct",
      storageClassType: "StfWebreceiverServiceUserInterfaceAppShortcuts",
    },
    auto_launch_desktop: {
      value: cdktf.booleanToHclTerraform(struct!.autoLaunchDesktop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    category_view_collapsed: {
      value: cdktf.booleanToHclTerraform(struct!.categoryViewCollapsed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_apps_folder_view: {
      value: cdktf.booleanToHclTerraform(struct!.enableAppsFolderView),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    move_app_to_uncategorized: {
      value: cdktf.booleanToHclTerraform(struct!.moveAppToUncategorized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    multi_click_timeout: {
      value: cdktf.numberToHclTerraform(struct!.multiClickTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prevent_ica_downloads: {
      value: cdktf.booleanToHclTerraform(struct!.preventIcaDownloads),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    progressive_web_app: {
      value: stfWebreceiverServiceUserInterfaceProgressiveWebAppToHclTerraform(struct!.progressiveWebApp),
      isBlock: true,
      type: "struct",
      storageClassType: "StfWebreceiverServiceUserInterfaceProgressiveWebApp",
    },
    receiver_configuration: {
      value: stfWebreceiverServiceUserInterfaceReceiverConfigurationToHclTerraform(struct!.receiverConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "StfWebreceiverServiceUserInterfaceReceiverConfiguration",
    },
    show_activity_manager: {
      value: cdktf.booleanToHclTerraform(struct!.showActivityManager),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_first_time_use: {
      value: cdktf.booleanToHclTerraform(struct!.showFirstTimeUse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ui_views: {
      value: stfWebreceiverServiceUserInterfaceUiViewsToHclTerraform(struct!.uiViews),
      isBlock: true,
      type: "struct",
      storageClassType: "StfWebreceiverServiceUserInterfaceUiViews",
    },
    workspace_control: {
      value: stfWebreceiverServiceUserInterfaceWorkspaceControlToHclTerraform(struct!.workspaceControl),
      isBlock: true,
      type: "struct",
      storageClassType: "StfWebreceiverServiceUserInterfaceWorkspaceControl",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceUserInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceUserInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appShortcuts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.appShortcuts = this._appShortcuts?.internalValue;
    }
    if (this._autoLaunchDesktop !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoLaunchDesktop = this._autoLaunchDesktop;
    }
    if (this._categoryViewCollapsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryViewCollapsed = this._categoryViewCollapsed;
    }
    if (this._enableAppsFolderView !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAppsFolderView = this._enableAppsFolderView;
    }
    if (this._moveAppToUncategorized !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveAppToUncategorized = this._moveAppToUncategorized;
    }
    if (this._multiClickTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiClickTimeout = this._multiClickTimeout;
    }
    if (this._preventIcaDownloads !== undefined) {
      hasAnyValues = true;
      internalValueResult.preventIcaDownloads = this._preventIcaDownloads;
    }
    if (this._progressiveWebApp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.progressiveWebApp = this._progressiveWebApp?.internalValue;
    }
    if (this._receiverConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiverConfiguration = this._receiverConfiguration?.internalValue;
    }
    if (this._showActivityManager !== undefined) {
      hasAnyValues = true;
      internalValueResult.showActivityManager = this._showActivityManager;
    }
    if (this._showFirstTimeUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.showFirstTimeUse = this._showFirstTimeUse;
    }
    if (this._uiViews?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiViews = this._uiViews?.internalValue;
    }
    if (this._workspaceControl?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workspaceControl = this._workspaceControl?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceUserInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appShortcuts.internalValue = undefined;
      this._autoLaunchDesktop = undefined;
      this._categoryViewCollapsed = undefined;
      this._enableAppsFolderView = undefined;
      this._moveAppToUncategorized = undefined;
      this._multiClickTimeout = undefined;
      this._preventIcaDownloads = undefined;
      this._progressiveWebApp.internalValue = undefined;
      this._receiverConfiguration.internalValue = undefined;
      this._showActivityManager = undefined;
      this._showFirstTimeUse = undefined;
      this._uiViews.internalValue = undefined;
      this._workspaceControl.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appShortcuts.internalValue = value.appShortcuts;
      this._autoLaunchDesktop = value.autoLaunchDesktop;
      this._categoryViewCollapsed = value.categoryViewCollapsed;
      this._enableAppsFolderView = value.enableAppsFolderView;
      this._moveAppToUncategorized = value.moveAppToUncategorized;
      this._multiClickTimeout = value.multiClickTimeout;
      this._preventIcaDownloads = value.preventIcaDownloads;
      this._progressiveWebApp.internalValue = value.progressiveWebApp;
      this._receiverConfiguration.internalValue = value.receiverConfiguration;
      this._showActivityManager = value.showActivityManager;
      this._showFirstTimeUse = value.showFirstTimeUse;
      this._uiViews.internalValue = value.uiViews;
      this._workspaceControl.internalValue = value.workspaceControl;
    }
  }

  // app_shortcuts - computed: false, optional: true, required: false
  private _appShortcuts = new StfWebreceiverServiceUserInterfaceAppShortcutsOutputReference(this, "app_shortcuts");
  public get appShortcuts() {
    return this._appShortcuts;
  }
  public putAppShortcuts(value: StfWebreceiverServiceUserInterfaceAppShortcuts) {
    this._appShortcuts.internalValue = value;
  }
  public resetAppShortcuts() {
    this._appShortcuts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appShortcutsInput() {
    return this._appShortcuts.internalValue;
  }

  // auto_launch_desktop - computed: true, optional: true, required: false
  private _autoLaunchDesktop?: boolean | cdktf.IResolvable; 
  public get autoLaunchDesktop() {
    return this.getBooleanAttribute('auto_launch_desktop');
  }
  public set autoLaunchDesktop(value: boolean | cdktf.IResolvable) {
    this._autoLaunchDesktop = value;
  }
  public resetAutoLaunchDesktop() {
    this._autoLaunchDesktop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLaunchDesktopInput() {
    return this._autoLaunchDesktop;
  }

  // category_view_collapsed - computed: true, optional: true, required: false
  private _categoryViewCollapsed?: boolean | cdktf.IResolvable; 
  public get categoryViewCollapsed() {
    return this.getBooleanAttribute('category_view_collapsed');
  }
  public set categoryViewCollapsed(value: boolean | cdktf.IResolvable) {
    this._categoryViewCollapsed = value;
  }
  public resetCategoryViewCollapsed() {
    this._categoryViewCollapsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryViewCollapsedInput() {
    return this._categoryViewCollapsed;
  }

  // enable_apps_folder_view - computed: true, optional: true, required: false
  private _enableAppsFolderView?: boolean | cdktf.IResolvable; 
  public get enableAppsFolderView() {
    return this.getBooleanAttribute('enable_apps_folder_view');
  }
  public set enableAppsFolderView(value: boolean | cdktf.IResolvable) {
    this._enableAppsFolderView = value;
  }
  public resetEnableAppsFolderView() {
    this._enableAppsFolderView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAppsFolderViewInput() {
    return this._enableAppsFolderView;
  }

  // move_app_to_uncategorized - computed: true, optional: true, required: false
  private _moveAppToUncategorized?: boolean | cdktf.IResolvable; 
  public get moveAppToUncategorized() {
    return this.getBooleanAttribute('move_app_to_uncategorized');
  }
  public set moveAppToUncategorized(value: boolean | cdktf.IResolvable) {
    this._moveAppToUncategorized = value;
  }
  public resetMoveAppToUncategorized() {
    this._moveAppToUncategorized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveAppToUncategorizedInput() {
    return this._moveAppToUncategorized;
  }

  // multi_click_timeout - computed: true, optional: true, required: false
  private _multiClickTimeout?: number; 
  public get multiClickTimeout() {
    return this.getNumberAttribute('multi_click_timeout');
  }
  public set multiClickTimeout(value: number) {
    this._multiClickTimeout = value;
  }
  public resetMultiClickTimeout() {
    this._multiClickTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClickTimeoutInput() {
    return this._multiClickTimeout;
  }

  // prevent_ica_downloads - computed: true, optional: true, required: false
  private _preventIcaDownloads?: boolean | cdktf.IResolvable; 
  public get preventIcaDownloads() {
    return this.getBooleanAttribute('prevent_ica_downloads');
  }
  public set preventIcaDownloads(value: boolean | cdktf.IResolvable) {
    this._preventIcaDownloads = value;
  }
  public resetPreventIcaDownloads() {
    this._preventIcaDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventIcaDownloadsInput() {
    return this._preventIcaDownloads;
  }

  // progressive_web_app - computed: false, optional: true, required: false
  private _progressiveWebApp = new StfWebreceiverServiceUserInterfaceProgressiveWebAppOutputReference(this, "progressive_web_app");
  public get progressiveWebApp() {
    return this._progressiveWebApp;
  }
  public putProgressiveWebApp(value: StfWebreceiverServiceUserInterfaceProgressiveWebApp) {
    this._progressiveWebApp.internalValue = value;
  }
  public resetProgressiveWebApp() {
    this._progressiveWebApp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progressiveWebAppInput() {
    return this._progressiveWebApp.internalValue;
  }

  // receiver_configuration - computed: false, optional: true, required: false
  private _receiverConfiguration = new StfWebreceiverServiceUserInterfaceReceiverConfigurationOutputReference(this, "receiver_configuration");
  public get receiverConfiguration() {
    return this._receiverConfiguration;
  }
  public putReceiverConfiguration(value: StfWebreceiverServiceUserInterfaceReceiverConfiguration) {
    this._receiverConfiguration.internalValue = value;
  }
  public resetReceiverConfiguration() {
    this._receiverConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiverConfigurationInput() {
    return this._receiverConfiguration.internalValue;
  }

  // show_activity_manager - computed: true, optional: true, required: false
  private _showActivityManager?: boolean | cdktf.IResolvable; 
  public get showActivityManager() {
    return this.getBooleanAttribute('show_activity_manager');
  }
  public set showActivityManager(value: boolean | cdktf.IResolvable) {
    this._showActivityManager = value;
  }
  public resetShowActivityManager() {
    this._showActivityManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showActivityManagerInput() {
    return this._showActivityManager;
  }

  // show_first_time_use - computed: true, optional: true, required: false
  private _showFirstTimeUse?: boolean | cdktf.IResolvable; 
  public get showFirstTimeUse() {
    return this.getBooleanAttribute('show_first_time_use');
  }
  public set showFirstTimeUse(value: boolean | cdktf.IResolvable) {
    this._showFirstTimeUse = value;
  }
  public resetShowFirstTimeUse() {
    this._showFirstTimeUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showFirstTimeUseInput() {
    return this._showFirstTimeUse;
  }

  // ui_views - computed: false, optional: true, required: false
  private _uiViews = new StfWebreceiverServiceUserInterfaceUiViewsOutputReference(this, "ui_views");
  public get uiViews() {
    return this._uiViews;
  }
  public putUiViews(value: StfWebreceiverServiceUserInterfaceUiViews) {
    this._uiViews.internalValue = value;
  }
  public resetUiViews() {
    this._uiViews.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiViewsInput() {
    return this._uiViews.internalValue;
  }

  // workspace_control - computed: false, optional: true, required: false
  private _workspaceControl = new StfWebreceiverServiceUserInterfaceWorkspaceControlOutputReference(this, "workspace_control");
  public get workspaceControl() {
    return this._workspaceControl;
  }
  public putWorkspaceControl(value: StfWebreceiverServiceUserInterfaceWorkspaceControl) {
    this._workspaceControl.internalValue = value;
  }
  public resetWorkspaceControl() {
    this._workspaceControl.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceControlInput() {
    return this._workspaceControl.internalValue;
  }
}
export interface StfWebreceiverServiceWebReceiverSiteStyle {
  /**
  * Sets the background color of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#header_background_color StfWebreceiverService#header_background_color}
  */
  readonly headerBackgroundColor?: string;
  /**
  * Sets the foreground color of the header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#header_foreground_color StfWebreceiverService#header_foreground_color}
  */
  readonly headerForegroundColor?: string;
  /**
  * Points to the Header Logo's path in the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#header_logo_path StfWebreceiverService#header_logo_path}
  */
  readonly headerLogoPath?: string;
  /**
  * Whether to ignore non-existent logo files and continue to set colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#ignore_non_existent_logos StfWebreceiverService#ignore_non_existent_logos}
  */
  readonly ignoreNonExistentLogos?: boolean | cdktf.IResolvable;
  /**
  * Sets the link color of the page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#link_color StfWebreceiverService#link_color}
  */
  readonly linkColor?: string;
  /**
  * Points to the Logon Logo's path in the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#logon_logo_path StfWebreceiverService#logon_logo_path}
  */
  readonly logonLogoPath?: string;
}

export function stfWebreceiverServiceWebReceiverSiteStyleToTerraform(struct?: StfWebreceiverServiceWebReceiverSiteStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_background_color: cdktf.stringToTerraform(struct!.headerBackgroundColor),
    header_foreground_color: cdktf.stringToTerraform(struct!.headerForegroundColor),
    header_logo_path: cdktf.stringToTerraform(struct!.headerLogoPath),
    ignore_non_existent_logos: cdktf.booleanToTerraform(struct!.ignoreNonExistentLogos),
    link_color: cdktf.stringToTerraform(struct!.linkColor),
    logon_logo_path: cdktf.stringToTerraform(struct!.logonLogoPath),
  }
}


export function stfWebreceiverServiceWebReceiverSiteStyleToHclTerraform(struct?: StfWebreceiverServiceWebReceiverSiteStyle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_background_color: {
      value: cdktf.stringToHclTerraform(struct!.headerBackgroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_foreground_color: {
      value: cdktf.stringToHclTerraform(struct!.headerForegroundColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_logo_path: {
      value: cdktf.stringToHclTerraform(struct!.headerLogoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_non_existent_logos: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreNonExistentLogos),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    link_color: {
      value: cdktf.stringToHclTerraform(struct!.linkColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon_logo_path: {
      value: cdktf.stringToHclTerraform(struct!.logonLogoPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class StfWebreceiverServiceWebReceiverSiteStyleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): StfWebreceiverServiceWebReceiverSiteStyle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerBackgroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBackgroundColor = this._headerBackgroundColor;
    }
    if (this._headerForegroundColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerForegroundColor = this._headerForegroundColor;
    }
    if (this._headerLogoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerLogoPath = this._headerLogoPath;
    }
    if (this._ignoreNonExistentLogos !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreNonExistentLogos = this._ignoreNonExistentLogos;
    }
    if (this._linkColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkColor = this._linkColor;
    }
    if (this._logonLogoPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.logonLogoPath = this._logonLogoPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: StfWebreceiverServiceWebReceiverSiteStyle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._headerBackgroundColor = undefined;
      this._headerForegroundColor = undefined;
      this._headerLogoPath = undefined;
      this._ignoreNonExistentLogos = undefined;
      this._linkColor = undefined;
      this._logonLogoPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._headerBackgroundColor = value.headerBackgroundColor;
      this._headerForegroundColor = value.headerForegroundColor;
      this._headerLogoPath = value.headerLogoPath;
      this._ignoreNonExistentLogos = value.ignoreNonExistentLogos;
      this._linkColor = value.linkColor;
      this._logonLogoPath = value.logonLogoPath;
    }
  }

  // header_background_color - computed: true, optional: true, required: false
  private _headerBackgroundColor?: string; 
  public get headerBackgroundColor() {
    return this.getStringAttribute('header_background_color');
  }
  public set headerBackgroundColor(value: string) {
    this._headerBackgroundColor = value;
  }
  public resetHeaderBackgroundColor() {
    this._headerBackgroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBackgroundColorInput() {
    return this._headerBackgroundColor;
  }

  // header_foreground_color - computed: true, optional: true, required: false
  private _headerForegroundColor?: string; 
  public get headerForegroundColor() {
    return this.getStringAttribute('header_foreground_color');
  }
  public set headerForegroundColor(value: string) {
    this._headerForegroundColor = value;
  }
  public resetHeaderForegroundColor() {
    this._headerForegroundColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerForegroundColorInput() {
    return this._headerForegroundColor;
  }

  // header_logo_path - computed: true, optional: true, required: false
  private _headerLogoPath?: string; 
  public get headerLogoPath() {
    return this.getStringAttribute('header_logo_path');
  }
  public set headerLogoPath(value: string) {
    this._headerLogoPath = value;
  }
  public resetHeaderLogoPath() {
    this._headerLogoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerLogoPathInput() {
    return this._headerLogoPath;
  }

  // ignore_non_existent_logos - computed: false, optional: true, required: false
  private _ignoreNonExistentLogos?: boolean | cdktf.IResolvable; 
  public get ignoreNonExistentLogos() {
    return this.getBooleanAttribute('ignore_non_existent_logos');
  }
  public set ignoreNonExistentLogos(value: boolean | cdktf.IResolvable) {
    this._ignoreNonExistentLogos = value;
  }
  public resetIgnoreNonExistentLogos() {
    this._ignoreNonExistentLogos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreNonExistentLogosInput() {
    return this._ignoreNonExistentLogos;
  }

  // link_color - computed: true, optional: true, required: false
  private _linkColor?: string; 
  public get linkColor() {
    return this.getStringAttribute('link_color');
  }
  public set linkColor(value: string) {
    this._linkColor = value;
  }
  public resetLinkColor() {
    this._linkColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkColorInput() {
    return this._linkColor;
  }

  // logon_logo_path - computed: true, optional: true, required: false
  private _logonLogoPath?: string; 
  public get logonLogoPath() {
    return this.getStringAttribute('logon_logo_path');
  }
  public set logonLogoPath(value: string) {
    this._logonLogoPath = value;
  }
  public resetLogonLogoPath() {
    this._logonLogoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonLogoPathInput() {
    return this._logonLogoPath;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service citrix_stf_webreceiver_service}
*/
export class StfWebreceiverService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_stf_webreceiver_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StfWebreceiverService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StfWebreceiverService to import
  * @param importFromId The id of the existing StfWebreceiverService that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StfWebreceiverService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_stf_webreceiver_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/stf_webreceiver_service citrix_stf_webreceiver_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StfWebreceiverServiceConfig
  */
  public constructor(scope: Construct, id: string, config: StfWebreceiverServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_stf_webreceiver_service',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationShortcuts.internalValue = config.applicationShortcuts;
    this._authenticationManager.internalValue = config.authenticationManager;
    this._authenticationMethods = config.authenticationMethods;
    this._communication.internalValue = config.communication;
    this._friendlyName = config.friendlyName;
    this._pluginAssistant.internalValue = config.pluginAssistant;
    this._resourcesService.internalValue = config.resourcesService;
    this._siteId = config.siteId;
    this._storeVirtualPath = config.storeVirtualPath;
    this._strictTransportSecurity.internalValue = config.strictTransportSecurity;
    this._userInterface.internalValue = config.userInterface;
    this._virtualPath = config.virtualPath;
    this._webReceiverSiteStyle.internalValue = config.webReceiverSiteStyle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_shortcuts - computed: false, optional: true, required: false
  private _applicationShortcuts = new StfWebreceiverServiceApplicationShortcutsOutputReference(this, "application_shortcuts");
  public get applicationShortcuts() {
    return this._applicationShortcuts;
  }
  public putApplicationShortcuts(value: StfWebreceiverServiceApplicationShortcuts) {
    this._applicationShortcuts.internalValue = value;
  }
  public resetApplicationShortcuts() {
    this._applicationShortcuts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationShortcutsInput() {
    return this._applicationShortcuts.internalValue;
  }

  // authentication_manager - computed: false, optional: true, required: false
  private _authenticationManager = new StfWebreceiverServiceAuthenticationManagerOutputReference(this, "authentication_manager");
  public get authenticationManager() {
    return this._authenticationManager;
  }
  public putAuthenticationManager(value: StfWebreceiverServiceAuthenticationManager) {
    this._authenticationManager.internalValue = value;
  }
  public resetAuthenticationManager() {
    this._authenticationManager.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationManagerInput() {
    return this._authenticationManager.internalValue;
  }

  // authentication_methods - computed: true, optional: true, required: false
  private _authenticationMethods?: string[]; 
  public get authenticationMethods() {
    return cdktf.Fn.tolist(this.getListAttribute('authentication_methods'));
  }
  public set authenticationMethods(value: string[]) {
    this._authenticationMethods = value;
  }
  public resetAuthenticationMethods() {
    this._authenticationMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationMethodsInput() {
    return this._authenticationMethods;
  }

  // communication - computed: false, optional: true, required: false
  private _communication = new StfWebreceiverServiceCommunicationOutputReference(this, "communication");
  public get communication() {
    return this._communication;
  }
  public putCommunication(value: StfWebreceiverServiceCommunication) {
    this._communication.internalValue = value;
  }
  public resetCommunication() {
    this._communication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communicationInput() {
    return this._communication.internalValue;
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

  // plugin_assistant - computed: false, optional: true, required: false
  private _pluginAssistant = new StfWebreceiverServicePluginAssistantOutputReference(this, "plugin_assistant");
  public get pluginAssistant() {
    return this._pluginAssistant;
  }
  public putPluginAssistant(value: StfWebreceiverServicePluginAssistant) {
    this._pluginAssistant.internalValue = value;
  }
  public resetPluginAssistant() {
    this._pluginAssistant.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginAssistantInput() {
    return this._pluginAssistant.internalValue;
  }

  // resources_service - computed: false, optional: true, required: false
  private _resourcesService = new StfWebreceiverServiceResourcesServiceOutputReference(this, "resources_service");
  public get resourcesService() {
    return this._resourcesService;
  }
  public putResourcesService(value: StfWebreceiverServiceResourcesService) {
    this._resourcesService.internalValue = value;
  }
  public resetResourcesService() {
    this._resourcesService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesServiceInput() {
    return this._resourcesService.internalValue;
  }

  // site_id - computed: true, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // store_virtual_path - computed: false, optional: false, required: true
  private _storeVirtualPath?: string; 
  public get storeVirtualPath() {
    return this.getStringAttribute('store_virtual_path');
  }
  public set storeVirtualPath(value: string) {
    this._storeVirtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeVirtualPathInput() {
    return this._storeVirtualPath;
  }

  // strict_transport_security - computed: false, optional: true, required: false
  private _strictTransportSecurity = new StfWebreceiverServiceStrictTransportSecurityOutputReference(this, "strict_transport_security");
  public get strictTransportSecurity() {
    return this._strictTransportSecurity;
  }
  public putStrictTransportSecurity(value: StfWebreceiverServiceStrictTransportSecurity) {
    this._strictTransportSecurity.internalValue = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity.internalValue;
  }

  // user_interface - computed: false, optional: true, required: false
  private _userInterface = new StfWebreceiverServiceUserInterfaceOutputReference(this, "user_interface");
  public get userInterface() {
    return this._userInterface;
  }
  public putUserInterface(value: StfWebreceiverServiceUserInterface) {
    this._userInterface.internalValue = value;
  }
  public resetUserInterface() {
    this._userInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInterfaceInput() {
    return this._userInterface.internalValue;
  }

  // virtual_path - computed: false, optional: false, required: true
  private _virtualPath?: string; 
  public get virtualPath() {
    return this.getStringAttribute('virtual_path');
  }
  public set virtualPath(value: string) {
    this._virtualPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPathInput() {
    return this._virtualPath;
  }

  // web_receiver_site_style - computed: false, optional: true, required: false
  private _webReceiverSiteStyle = new StfWebreceiverServiceWebReceiverSiteStyleOutputReference(this, "web_receiver_site_style");
  public get webReceiverSiteStyle() {
    return this._webReceiverSiteStyle;
  }
  public putWebReceiverSiteStyle(value: StfWebreceiverServiceWebReceiverSiteStyle) {
    this._webReceiverSiteStyle.internalValue = value;
  }
  public resetWebReceiverSiteStyle() {
    this._webReceiverSiteStyle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webReceiverSiteStyleInput() {
    return this._webReceiverSiteStyle.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_shortcuts: stfWebreceiverServiceApplicationShortcutsToTerraform(this._applicationShortcuts.internalValue),
      authentication_manager: stfWebreceiverServiceAuthenticationManagerToTerraform(this._authenticationManager.internalValue),
      authentication_methods: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authenticationMethods),
      communication: stfWebreceiverServiceCommunicationToTerraform(this._communication.internalValue),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      plugin_assistant: stfWebreceiverServicePluginAssistantToTerraform(this._pluginAssistant.internalValue),
      resources_service: stfWebreceiverServiceResourcesServiceToTerraform(this._resourcesService.internalValue),
      site_id: cdktf.stringToTerraform(this._siteId),
      store_virtual_path: cdktf.stringToTerraform(this._storeVirtualPath),
      strict_transport_security: stfWebreceiverServiceStrictTransportSecurityToTerraform(this._strictTransportSecurity.internalValue),
      user_interface: stfWebreceiverServiceUserInterfaceToTerraform(this._userInterface.internalValue),
      virtual_path: cdktf.stringToTerraform(this._virtualPath),
      web_receiver_site_style: stfWebreceiverServiceWebReceiverSiteStyleToTerraform(this._webReceiverSiteStyle.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_shortcuts: {
        value: stfWebreceiverServiceApplicationShortcutsToHclTerraform(this._applicationShortcuts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServiceApplicationShortcuts",
      },
      authentication_manager: {
        value: stfWebreceiverServiceAuthenticationManagerToHclTerraform(this._authenticationManager.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServiceAuthenticationManager",
      },
      authentication_methods: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authenticationMethods),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      communication: {
        value: stfWebreceiverServiceCommunicationToHclTerraform(this._communication.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServiceCommunication",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_assistant: {
        value: stfWebreceiverServicePluginAssistantToHclTerraform(this._pluginAssistant.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServicePluginAssistant",
      },
      resources_service: {
        value: stfWebreceiverServiceResourcesServiceToHclTerraform(this._resourcesService.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServiceResourcesService",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_virtual_path: {
        value: cdktf.stringToHclTerraform(this._storeVirtualPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_transport_security: {
        value: stfWebreceiverServiceStrictTransportSecurityToHclTerraform(this._strictTransportSecurity.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServiceStrictTransportSecurity",
      },
      user_interface: {
        value: stfWebreceiverServiceUserInterfaceToHclTerraform(this._userInterface.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServiceUserInterface",
      },
      virtual_path: {
        value: cdktf.stringToHclTerraform(this._virtualPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_receiver_site_style: {
        value: stfWebreceiverServiceWebReceiverSiteStyleToHclTerraform(this._webReceiverSiteStyle.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "StfWebreceiverServiceWebReceiverSiteStyle",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
