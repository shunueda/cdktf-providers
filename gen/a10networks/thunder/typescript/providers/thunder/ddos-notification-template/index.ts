// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNotificationTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable debug mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#debug_mode DdosNotificationTemplate#debug_mode}
  */
  readonly debugMode?: number;
  /**
  * Disable the notification template (Disable notification temaplate)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#disable DdosNotificationTemplate#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#id DdosNotificationTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS nofitication template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#name DdosNotificationTemplate#name}
  */
  readonly name: string;
  /**
  * Test connectivity to notification receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#test_connectivity DdosNotificationTemplate#test_connectivity}
  */
  readonly testConnectivity?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#user_tag DdosNotificationTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#uuid DdosNotificationTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * Dump zone IPs to the payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#verbose DdosNotificationTemplate#verbose}
  */
  readonly verbose?: number;
  /**
  * api block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#api DdosNotificationTemplate#api}
  */
  readonly api?: DdosNotificationTemplateApi;
}
export interface DdosNotificationTemplateApiAuthentication {
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#api_key DdosNotificationTemplate#api_key}
  */
  readonly apiKey?: number;
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#api_key_string DdosNotificationTemplate#api_key_string}
  */
  readonly apiKeyString?: string;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#auth_password DdosNotificationTemplate#auth_password}
  */
  readonly authPassword?: number;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#auth_password_val DdosNotificationTemplate#auth_password_val}
  */
  readonly authPasswordVal?: string;
  /**
  * Configure the authentication user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#auth_username DdosNotificationTemplate#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Configure the authentication login uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#relative_login_uri DdosNotificationTemplate#relative_login_uri}
  */
  readonly relativeLoginUri?: string;
  /**
  * Configure the authentication logoff uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#relative_logoff_uri DdosNotificationTemplate#relative_logoff_uri}
  */
  readonly relativeLogoffUri?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#uuid DdosNotificationTemplate#uuid}
  */
  readonly uuid?: string;
}

export function ddosNotificationTemplateApiAuthenticationToTerraform(struct?: DdosNotificationTemplateApiAuthenticationOutputReference | DdosNotificationTemplateApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.numberToTerraform(struct!.apiKey),
    api_key_string: cdktf.stringToTerraform(struct!.apiKeyString),
    auth_password: cdktf.numberToTerraform(struct!.authPassword),
    auth_password_val: cdktf.stringToTerraform(struct!.authPasswordVal),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    relative_login_uri: cdktf.stringToTerraform(struct!.relativeLoginUri),
    relative_logoff_uri: cdktf.stringToTerraform(struct!.relativeLogoffUri),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosNotificationTemplateApiAuthenticationToHclTerraform(struct?: DdosNotificationTemplateApiAuthenticationOutputReference | DdosNotificationTemplateApiAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_key: {
      value: cdktf.numberToHclTerraform(struct!.apiKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    api_key_string: {
      value: cdktf.stringToHclTerraform(struct!.apiKeyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_password: {
      value: cdktf.numberToHclTerraform(struct!.authPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_password_val: {
      value: cdktf.stringToHclTerraform(struct!.authPasswordVal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_username: {
      value: cdktf.stringToHclTerraform(struct!.authUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_login_uri: {
      value: cdktf.stringToHclTerraform(struct!.relativeLoginUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_logoff_uri: {
      value: cdktf.stringToHclTerraform(struct!.relativeLogoffUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNotificationTemplateApiAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNotificationTemplateApiAuthentication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey;
    }
    if (this._apiKeyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyString = this._apiKeyString;
    }
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authPasswordVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPasswordVal = this._authPasswordVal;
    }
    if (this._authUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsername = this._authUsername;
    }
    if (this._relativeLoginUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLoginUri = this._relativeLoginUri;
    }
    if (this._relativeLogoffUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLogoffUri = this._relativeLogoffUri;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNotificationTemplateApiAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._apiKeyString = undefined;
      this._authPassword = undefined;
      this._authPasswordVal = undefined;
      this._authUsername = undefined;
      this._relativeLoginUri = undefined;
      this._relativeLogoffUri = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiKey = value.apiKey;
      this._apiKeyString = value.apiKeyString;
      this._authPassword = value.authPassword;
      this._authPasswordVal = value.authPasswordVal;
      this._authUsername = value.authUsername;
      this._relativeLoginUri = value.relativeLoginUri;
      this._relativeLogoffUri = value.relativeLogoffUri;
      this._uuid = value.uuid;
    }
  }

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: number; 
  public get apiKey() {
    return this.getNumberAttribute('api_key');
  }
  public set apiKey(value: number) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_key_string - computed: false, optional: true, required: false
  private _apiKeyString?: string; 
  public get apiKeyString() {
    return this.getStringAttribute('api_key_string');
  }
  public set apiKeyString(value: string) {
    this._apiKeyString = value;
  }
  public resetApiKeyString() {
    this._apiKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyStringInput() {
    return this._apiKeyString;
  }

  // auth_password - computed: false, optional: true, required: false
  private _authPassword?: number; 
  public get authPassword() {
    return this.getNumberAttribute('auth_password');
  }
  public set authPassword(value: number) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_password_val - computed: false, optional: true, required: false
  private _authPasswordVal?: string; 
  public get authPasswordVal() {
    return this.getStringAttribute('auth_password_val');
  }
  public set authPasswordVal(value: string) {
    this._authPasswordVal = value;
  }
  public resetAuthPasswordVal() {
    this._authPasswordVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordValInput() {
    return this._authPasswordVal;
  }

  // auth_username - computed: false, optional: true, required: false
  private _authUsername?: string; 
  public get authUsername() {
    return this.getStringAttribute('auth_username');
  }
  public set authUsername(value: string) {
    this._authUsername = value;
  }
  public resetAuthUsername() {
    this._authUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUsernameInput() {
    return this._authUsername;
  }

  // relative_login_uri - computed: false, optional: true, required: false
  private _relativeLoginUri?: string; 
  public get relativeLoginUri() {
    return this.getStringAttribute('relative_login_uri');
  }
  public set relativeLoginUri(value: string) {
    this._relativeLoginUri = value;
  }
  public resetRelativeLoginUri() {
    this._relativeLoginUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLoginUriInput() {
    return this._relativeLoginUri;
  }

  // relative_logoff_uri - computed: false, optional: true, required: false
  private _relativeLogoffUri?: string; 
  public get relativeLogoffUri() {
    return this.getStringAttribute('relative_logoff_uri');
  }
  public set relativeLogoffUri(value: string) {
    this._relativeLogoffUri = value;
  }
  public resetRelativeLogoffUri() {
    this._relativeLogoffUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLogoffUriInput() {
    return this._relativeLogoffUri;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface DdosNotificationTemplateApi {
  /**
  * Disable authentication to communicate to the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#disable_authentication DdosNotificationTemplate#disable_authentication}
  */
  readonly disableAuthentication?: number;
  /**
  * Configure the host IPv4 address to send notification (IPv4 address of the host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#host_ipv4_address DdosNotificationTemplate#host_ipv4_address}
  */
  readonly hostIpv4Address?: string;
  /**
  * Configure the host IPv6 address to send notification (IPv6 address of the host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#host_ipv6_address DdosNotificationTemplate#host_ipv6_address}
  */
  readonly hostIpv6Address?: string;
  /**
  * host name(e.g www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#hostname DdosNotificationTemplate#hostname}
  */
  readonly hostname?: string;
  /**
  * Configure the http port to use(default 80) (http port(default 80))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#http_port DdosNotificationTemplate#http_port}
  */
  readonly httpPort?: number;
  /**
  * 'http': Use http protocol; 'https': Use https protocol(default);  (http protocol)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#http_protocol DdosNotificationTemplate#http_protocol}
  */
  readonly httpProtocol?: string;
  /**
  * Configure the https port to use(default 443) (https port(default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#https_port DdosNotificationTemplate#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Configure the relative uri for the api(e.g /example , default /) (api relative uri)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#relative_uri DdosNotificationTemplate#relative_uri}
  */
  readonly relativeUri?: string;
  /**
  * Configure the api execution timeout(default 10secs) (api timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#timeout DdosNotificationTemplate#timeout}
  */
  readonly timeout?: number;
  /**
  * Use management port to send out notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#use_mgmt_port DdosNotificationTemplate#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#uuid DdosNotificationTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#authentication DdosNotificationTemplate#authentication}
  */
  readonly authentication?: DdosNotificationTemplateApiAuthentication;
}

export function ddosNotificationTemplateApiToTerraform(struct?: DdosNotificationTemplateApiOutputReference | DdosNotificationTemplateApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_authentication: cdktf.numberToTerraform(struct!.disableAuthentication),
    host_ipv4_address: cdktf.stringToTerraform(struct!.hostIpv4Address),
    host_ipv6_address: cdktf.stringToTerraform(struct!.hostIpv6Address),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    http_protocol: cdktf.stringToTerraform(struct!.httpProtocol),
    https_port: cdktf.numberToTerraform(struct!.httpsPort),
    relative_uri: cdktf.stringToTerraform(struct!.relativeUri),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: ddosNotificationTemplateApiAuthenticationToTerraform(struct!.authentication),
  }
}


export function ddosNotificationTemplateApiToHclTerraform(struct?: DdosNotificationTemplateApiOutputReference | DdosNotificationTemplateApi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_authentication: {
      value: cdktf.numberToHclTerraform(struct!.disableAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.hostIpv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_ipv6_address: {
      value: cdktf.stringToHclTerraform(struct!.hostIpv6Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_protocol: {
      value: cdktf.stringToHclTerraform(struct!.httpProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relative_uri: {
      value: cdktf.stringToHclTerraform(struct!.relativeUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: ddosNotificationTemplateApiAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNotificationTemplateApiAuthenticationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNotificationTemplateApiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNotificationTemplateApi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableAuthentication = this._disableAuthentication;
    }
    if (this._hostIpv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpv4Address = this._hostIpv4Address;
    }
    if (this._hostIpv6Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIpv6Address = this._hostIpv6Address;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProtocol = this._httpProtocol;
    }
    if (this._httpsPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPort = this._httpsPort;
    }
    if (this._relativeUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeUri = this._relativeUri;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNotificationTemplateApi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableAuthentication = undefined;
      this._hostIpv4Address = undefined;
      this._hostIpv6Address = undefined;
      this._hostname = undefined;
      this._httpPort = undefined;
      this._httpProtocol = undefined;
      this._httpsPort = undefined;
      this._relativeUri = undefined;
      this._timeout = undefined;
      this._useMgmtPort = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableAuthentication = value.disableAuthentication;
      this._hostIpv4Address = value.hostIpv4Address;
      this._hostIpv6Address = value.hostIpv6Address;
      this._hostname = value.hostname;
      this._httpPort = value.httpPort;
      this._httpProtocol = value.httpProtocol;
      this._httpsPort = value.httpsPort;
      this._relativeUri = value.relativeUri;
      this._timeout = value.timeout;
      this._useMgmtPort = value.useMgmtPort;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
    }
  }

  // disable_authentication - computed: false, optional: true, required: false
  private _disableAuthentication?: number; 
  public get disableAuthentication() {
    return this.getNumberAttribute('disable_authentication');
  }
  public set disableAuthentication(value: number) {
    this._disableAuthentication = value;
  }
  public resetDisableAuthentication() {
    this._disableAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAuthenticationInput() {
    return this._disableAuthentication;
  }

  // host_ipv4_address - computed: false, optional: true, required: false
  private _hostIpv4Address?: string; 
  public get hostIpv4Address() {
    return this.getStringAttribute('host_ipv4_address');
  }
  public set hostIpv4Address(value: string) {
    this._hostIpv4Address = value;
  }
  public resetHostIpv4Address() {
    this._hostIpv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv4AddressInput() {
    return this._hostIpv4Address;
  }

  // host_ipv6_address - computed: false, optional: true, required: false
  private _hostIpv6Address?: string; 
  public get hostIpv6Address() {
    return this.getStringAttribute('host_ipv6_address');
  }
  public set hostIpv6Address(value: string) {
    this._hostIpv6Address = value;
  }
  public resetHostIpv6Address() {
    this._hostIpv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIpv6AddressInput() {
    return this._hostIpv6Address;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_protocol - computed: false, optional: true, required: false
  private _httpProtocol?: string; 
  public get httpProtocol() {
    return this.getStringAttribute('http_protocol');
  }
  public set httpProtocol(value: string) {
    this._httpProtocol = value;
  }
  public resetHttpProtocol() {
    this._httpProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProtocolInput() {
    return this._httpProtocol;
  }

  // https_port - computed: false, optional: true, required: false
  private _httpsPort?: number; 
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }
  public set httpsPort(value: number) {
    this._httpsPort = value;
  }
  public resetHttpsPort() {
    this._httpsPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPortInput() {
    return this._httpsPort;
  }

  // relative_uri - computed: false, optional: true, required: false
  private _relativeUri?: string; 
  public get relativeUri() {
    return this.getStringAttribute('relative_uri');
  }
  public set relativeUri(value: string) {
    this._relativeUri = value;
  }
  public resetRelativeUri() {
    this._relativeUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeUriInput() {
    return this._relativeUri;
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

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication = new DdosNotificationTemplateApiAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DdosNotificationTemplateApiAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template thunder_ddos_notification_template}
*/
export class DdosNotificationTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_notification_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNotificationTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNotificationTemplate to import
  * @param importFromId The id of the existing DdosNotificationTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNotificationTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_notification_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_notification_template thunder_ddos_notification_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNotificationTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DdosNotificationTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_notification_template',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._debugMode = config.debugMode;
    this._disable = config.disable;
    this._id = config.id;
    this._name = config.name;
    this._testConnectivity = config.testConnectivity;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._verbose = config.verbose;
    this._api.internalValue = config.api;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_mode - computed: false, optional: true, required: false
  private _debugMode?: number; 
  public get debugMode() {
    return this.getNumberAttribute('debug_mode');
  }
  public set debugMode(value: number) {
    this._debugMode = value;
  }
  public resetDebugMode() {
    this._debugMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugModeInput() {
    return this._debugMode;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // test_connectivity - computed: false, optional: true, required: false
  private _testConnectivity?: number; 
  public get testConnectivity() {
    return this.getNumberAttribute('test_connectivity');
  }
  public set testConnectivity(value: number) {
    this._testConnectivity = value;
  }
  public resetTestConnectivity() {
    this._testConnectivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testConnectivityInput() {
    return this._testConnectivity;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // verbose - computed: false, optional: true, required: false
  private _verbose?: number; 
  public get verbose() {
    return this.getNumberAttribute('verbose');
  }
  public set verbose(value: number) {
    this._verbose = value;
  }
  public resetVerbose() {
    this._verbose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseInput() {
    return this._verbose;
  }

  // api - computed: false, optional: true, required: false
  private _api = new DdosNotificationTemplateApiOutputReference(this, "api");
  public get api() {
    return this._api;
  }
  public putApi(value: DdosNotificationTemplateApi) {
    this._api.internalValue = value;
  }
  public resetApi() {
    this._api.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiInput() {
    return this._api.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug_mode: cdktf.numberToTerraform(this._debugMode),
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      test_connectivity: cdktf.numberToTerraform(this._testConnectivity),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      verbose: cdktf.numberToTerraform(this._verbose),
      api: ddosNotificationTemplateApiToTerraform(this._api.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_mode: {
        value: cdktf.numberToHclTerraform(this._debugMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      test_connectivity: {
        value: cdktf.numberToHclTerraform(this._testConnectivity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verbose: {
        value: cdktf.numberToHclTerraform(this._verbose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api: {
        value: ddosNotificationTemplateApiToHclTerraform(this._api.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNotificationTemplateApiList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
