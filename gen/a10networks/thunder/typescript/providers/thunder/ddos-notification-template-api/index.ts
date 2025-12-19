// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNotificationTemplateApiAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable authentication to communicate to the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#disable_authentication DdosNotificationTemplateApiA#disable_authentication}
  */
  readonly disableAuthentication?: number;
  /**
  * Configure the host IPv4 address to send notification (IPv4 address of the host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#host_ipv4_address DdosNotificationTemplateApiA#host_ipv4_address}
  */
  readonly hostIpv4Address?: string;
  /**
  * Configure the host IPv6 address to send notification (IPv6 address of the host)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#host_ipv6_address DdosNotificationTemplateApiA#host_ipv6_address}
  */
  readonly hostIpv6Address?: string;
  /**
  * host name(e.g www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#hostname DdosNotificationTemplateApiA#hostname}
  */
  readonly hostname?: string;
  /**
  * Configure the http port to use(default 80) (http port(default 80))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#http_port DdosNotificationTemplateApiA#http_port}
  */
  readonly httpPort?: number;
  /**
  * 'http': Use http protocol; 'https': Use https protocol(default);  (http protocol)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#http_protocol DdosNotificationTemplateApiA#http_protocol}
  */
  readonly httpProtocol?: string;
  /**
  * Configure the https port to use(default 443) (https port(default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#https_port DdosNotificationTemplateApiA#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#id DdosNotificationTemplateApiA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Notification_template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#notification_template_name DdosNotificationTemplateApiA#notification_template_name}
  */
  readonly notificationTemplateName: string;
  /**
  * Configure the relative uri for the api(e.g /example , default /) (api relative uri)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#relative_uri DdosNotificationTemplateApiA#relative_uri}
  */
  readonly relativeUri?: string;
  /**
  * Configure the api execution timeout(default 10secs) (api timeout)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#timeout DdosNotificationTemplateApiA#timeout}
  */
  readonly timeout?: number;
  /**
  * Use management port to send out notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#use_mgmt_port DdosNotificationTemplateApiA#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#uuid DdosNotificationTemplateApiA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#authentication DdosNotificationTemplateApiA#authentication}
  */
  readonly authentication?: DdosNotificationTemplateApiAuthenticationA;
}
export interface DdosNotificationTemplateApiAuthenticationA {
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#api_key DdosNotificationTemplateApiA#api_key}
  */
  readonly apiKey?: number;
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#api_key_string DdosNotificationTemplateApiA#api_key_string}
  */
  readonly apiKeyString?: string;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#auth_password DdosNotificationTemplateApiA#auth_password}
  */
  readonly authPassword?: number;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#auth_password_val DdosNotificationTemplateApiA#auth_password_val}
  */
  readonly authPasswordVal?: string;
  /**
  * Configure the authentication user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#auth_username DdosNotificationTemplateApiA#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Configure the authentication login uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#relative_login_uri DdosNotificationTemplateApiA#relative_login_uri}
  */
  readonly relativeLoginUri?: string;
  /**
  * Configure the authentication logoff uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#relative_logoff_uri DdosNotificationTemplateApiA#relative_logoff_uri}
  */
  readonly relativeLogoffUri?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#uuid DdosNotificationTemplateApiA#uuid}
  */
  readonly uuid?: string;
}

export function ddosNotificationTemplateApiAuthenticationAToTerraform(struct?: DdosNotificationTemplateApiAuthenticationAOutputReference | DdosNotificationTemplateApiAuthenticationA): any {
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


export function ddosNotificationTemplateApiAuthenticationAToHclTerraform(struct?: DdosNotificationTemplateApiAuthenticationAOutputReference | DdosNotificationTemplateApiAuthenticationA): any {
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

export class DdosNotificationTemplateApiAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNotificationTemplateApiAuthenticationA | undefined {
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

  public set internalValue(value: DdosNotificationTemplateApiAuthenticationA | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api thunder_ddos_notification_template_api}
*/
export class DdosNotificationTemplateApiA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_notification_template_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNotificationTemplateApiA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNotificationTemplateApiA to import
  * @param importFromId The id of the existing DdosNotificationTemplateApiA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNotificationTemplateApiA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_notification_template_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_notification_template_api thunder_ddos_notification_template_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNotificationTemplateApiAConfig
  */
  public constructor(scope: Construct, id: string, config: DdosNotificationTemplateApiAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_notification_template_api',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disableAuthentication = config.disableAuthentication;
    this._hostIpv4Address = config.hostIpv4Address;
    this._hostIpv6Address = config.hostIpv6Address;
    this._hostname = config.hostname;
    this._httpPort = config.httpPort;
    this._httpProtocol = config.httpProtocol;
    this._httpsPort = config.httpsPort;
    this._id = config.id;
    this._notificationTemplateName = config.notificationTemplateName;
    this._relativeUri = config.relativeUri;
    this._timeout = config.timeout;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._authentication.internalValue = config.authentication;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // notification_template_name - computed: false, optional: false, required: true
  private _notificationTemplateName?: string; 
  public get notificationTemplateName() {
    return this.getStringAttribute('notification_template_name');
  }
  public set notificationTemplateName(value: string) {
    this._notificationTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateNameInput() {
    return this._notificationTemplateName;
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
  private _authentication = new DdosNotificationTemplateApiAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: DdosNotificationTemplateApiAuthenticationA) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable_authentication: cdktf.numberToTerraform(this._disableAuthentication),
      host_ipv4_address: cdktf.stringToTerraform(this._hostIpv4Address),
      host_ipv6_address: cdktf.stringToTerraform(this._hostIpv6Address),
      hostname: cdktf.stringToTerraform(this._hostname),
      http_port: cdktf.numberToTerraform(this._httpPort),
      http_protocol: cdktf.stringToTerraform(this._httpProtocol),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      id: cdktf.stringToTerraform(this._id),
      notification_template_name: cdktf.stringToTerraform(this._notificationTemplateName),
      relative_uri: cdktf.stringToTerraform(this._relativeUri),
      timeout: cdktf.numberToTerraform(this._timeout),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: ddosNotificationTemplateApiAuthenticationAToTerraform(this._authentication.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable_authentication: {
        value: cdktf.numberToHclTerraform(this._disableAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_ipv4_address: {
        value: cdktf.stringToHclTerraform(this._hostIpv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_ipv6_address: {
        value: cdktf.stringToHclTerraform(this._hostIpv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_port: {
        value: cdktf.numberToHclTerraform(this._httpPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_protocol: {
        value: cdktf.stringToHclTerraform(this._httpProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      https_port: {
        value: cdktf.numberToHclTerraform(this._httpsPort),
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
      notification_template_name: {
        value: cdktf.stringToHclTerraform(this._notificationTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relative_uri: {
        value: cdktf.stringToHclTerraform(this._relativeUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_mgmt_port: {
        value: cdktf.numberToHclTerraform(this._useMgmtPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication: {
        value: ddosNotificationTemplateApiAuthenticationAToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNotificationTemplateApiAuthenticationAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
