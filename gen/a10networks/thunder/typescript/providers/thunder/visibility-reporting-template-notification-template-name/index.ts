// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityReportingTemplateNotificationTemplateNameConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': Enable; 'disable': Disable;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#action VisibilityReportingTemplateNotificationTemplateName#action}
  */
  readonly action?: string;
  /**
  * Enable debug mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#debug_mode VisibilityReportingTemplateNotificationTemplateName#debug_mode}
  */
  readonly debugMode?: number;
  /**
  * Configure the host name(e.g www.a10networks.com)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#host_name VisibilityReportingTemplateNotificationTemplateName#host_name}
  */
  readonly hostName?: string;
  /**
  * Configure the http port to use(default 80) (http port(default 80))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#http_port VisibilityReportingTemplateNotificationTemplateName#http_port}
  */
  readonly httpPort?: number;
  /**
  * Configure the https port to use(default 443) (http port(default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#https_port VisibilityReportingTemplateNotificationTemplateName#https_port}
  */
  readonly httpsPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#id VisibilityReportingTemplateNotificationTemplateName#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Configure the host IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#ipv4_address VisibilityReportingTemplateNotificationTemplateName#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Configure the host IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#ipv6_address VisibilityReportingTemplateNotificationTemplateName#ipv6_address}
  */
  readonly ipv6Address?: string;
  /**
  * Notification template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#name VisibilityReportingTemplateNotificationTemplateName#name}
  */
  readonly name: string;
  /**
  * 'http': Use http protocol; 'https': Use https protocol(default);  (http protocol)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#protocol VisibilityReportingTemplateNotificationTemplateName#protocol}
  */
  readonly protocol?: string;
  /**
  * Configure the relative uri(e.g /example , default /)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#relative_uri VisibilityReportingTemplateNotificationTemplateName#relative_uri}
  */
  readonly relativeUri?: string;
  /**
  * Test connectivity to notification receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#test_connectivity VisibilityReportingTemplateNotificationTemplateName#test_connectivity}
  */
  readonly testConnectivity?: number;
  /**
  * Use management port for notifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#use_mgmt_port VisibilityReportingTemplateNotificationTemplateName#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#uuid VisibilityReportingTemplateNotificationTemplateName#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#authentication VisibilityReportingTemplateNotificationTemplateName#authentication}
  */
  readonly authentication?: VisibilityReportingTemplateNotificationTemplateNameAuthentication;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#sampling_enable VisibilityReportingTemplateNotificationTemplateName#sampling_enable}
  */
  readonly samplingEnable?: VisibilityReportingTemplateNotificationTemplateNameSamplingEnable[] | cdktf.IResolvable;
}
export interface VisibilityReportingTemplateNotificationTemplateNameAuthentication {
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#api_key VisibilityReportingTemplateNotificationTemplateName#api_key}
  */
  readonly apiKey?: number;
  /**
  * Configure api-key as a mode of authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#api_key_string VisibilityReportingTemplateNotificationTemplateName#api_key_string}
  */
  readonly apiKeyString?: string;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#auth_password VisibilityReportingTemplateNotificationTemplateName#auth_password}
  */
  readonly authPassword?: number;
  /**
  * Configure the authentication user password (Authentication password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#auth_password_string VisibilityReportingTemplateNotificationTemplateName#auth_password_string}
  */
  readonly authPasswordString?: string;
  /**
  * Configure the authentication user name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#auth_username VisibilityReportingTemplateNotificationTemplateName#auth_username}
  */
  readonly authUsername?: string;
  /**
  * Configure the authentication login uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#relative_login_uri VisibilityReportingTemplateNotificationTemplateName#relative_login_uri}
  */
  readonly relativeLoginUri?: string;
  /**
  * Configure the authentication logoff uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#relative_logoff_uri VisibilityReportingTemplateNotificationTemplateName#relative_logoff_uri}
  */
  readonly relativeLogoffUri?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#uuid VisibilityReportingTemplateNotificationTemplateName#uuid}
  */
  readonly uuid?: string;
}

export function visibilityReportingTemplateNotificationTemplateNameAuthenticationToTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameAuthenticationOutputReference | VisibilityReportingTemplateNotificationTemplateNameAuthentication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_key: cdktf.numberToTerraform(struct!.apiKey),
    api_key_string: cdktf.stringToTerraform(struct!.apiKeyString),
    auth_password: cdktf.numberToTerraform(struct!.authPassword),
    auth_password_string: cdktf.stringToTerraform(struct!.authPasswordString),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    relative_login_uri: cdktf.stringToTerraform(struct!.relativeLoginUri),
    relative_logoff_uri: cdktf.stringToTerraform(struct!.relativeLogoffUri),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityReportingTemplateNotificationTemplateNameAuthenticationToHclTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameAuthenticationOutputReference | VisibilityReportingTemplateNotificationTemplateNameAuthentication): any {
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
    auth_password_string: {
      value: cdktf.stringToHclTerraform(struct!.authPasswordString),
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

export class VisibilityReportingTemplateNotificationTemplateNameAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityReportingTemplateNotificationTemplateNameAuthentication | undefined {
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
    if (this._authPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPasswordString = this._authPasswordString;
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

  public set internalValue(value: VisibilityReportingTemplateNotificationTemplateNameAuthentication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiKey = undefined;
      this._apiKeyString = undefined;
      this._authPassword = undefined;
      this._authPasswordString = undefined;
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
      this._authPasswordString = value.authPasswordString;
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

  // auth_password_string - computed: false, optional: true, required: false
  private _authPasswordString?: string; 
  public get authPasswordString() {
    return this.getStringAttribute('auth_password_string');
  }
  public set authPasswordString(value: string) {
    this._authPasswordString = value;
  }
  public resetAuthPasswordString() {
    this._authPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordStringInput() {
    return this._authPasswordString;
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
export interface VisibilityReportingTemplateNotificationTemplateNameSamplingEnable {
  /**
  * 'all': all; 'sent_successful': Sent successful; 'send_fail': Send failures; 'response_fail': Response failures;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#counters1 VisibilityReportingTemplateNotificationTemplateName#counters1}
  */
  readonly counters1?: string;
}

export function visibilityReportingTemplateNotificationTemplateNameSamplingEnableToTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function visibilityReportingTemplateNotificationTemplateNameSamplingEnableToHclTerraform(struct?: VisibilityReportingTemplateNotificationTemplateNameSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityReportingTemplateNotificationTemplateNameSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityReportingTemplateNotificationTemplateNameSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityReportingTemplateNotificationTemplateNameSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class VisibilityReportingTemplateNotificationTemplateNameSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : VisibilityReportingTemplateNotificationTemplateNameSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): VisibilityReportingTemplateNotificationTemplateNameSamplingEnableOutputReference {
    return new VisibilityReportingTemplateNotificationTemplateNameSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name thunder_visibility_reporting_template_notification_template_name}
*/
export class VisibilityReportingTemplateNotificationTemplateName extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_reporting_template_notification_template_name";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityReportingTemplateNotificationTemplateName resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityReportingTemplateNotificationTemplateName to import
  * @param importFromId The id of the existing VisibilityReportingTemplateNotificationTemplateName that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityReportingTemplateNotificationTemplateName to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_reporting_template_notification_template_name", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_reporting_template_notification_template_name thunder_visibility_reporting_template_notification_template_name} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityReportingTemplateNotificationTemplateNameConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityReportingTemplateNotificationTemplateNameConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_reporting_template_notification_template_name',
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
    this._action = config.action;
    this._debugMode = config.debugMode;
    this._hostName = config.hostName;
    this._httpPort = config.httpPort;
    this._httpsPort = config.httpsPort;
    this._id = config.id;
    this._ipv4Address = config.ipv4Address;
    this._ipv6Address = config.ipv6Address;
    this._name = config.name;
    this._protocol = config.protocol;
    this._relativeUri = config.relativeUri;
    this._testConnectivity = config.testConnectivity;
    this._useMgmtPort = config.useMgmtPort;
    this._uuid = config.uuid;
    this._authentication.internalValue = config.authentication;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

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

  // host_name - computed: false, optional: true, required: false
  private _hostName?: string; 
  public get hostName() {
    return this.getStringAttribute('host_name');
  }
  public set hostName(value: string) {
    this._hostName = value;
  }
  public resetHostName() {
    this._hostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostNameInput() {
    return this._hostName;
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv6_address - computed: false, optional: true, required: false
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  public resetIpv6Address() {
    this._ipv6Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
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

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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
  private _authentication = new VisibilityReportingTemplateNotificationTemplateNameAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: VisibilityReportingTemplateNotificationTemplateNameAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VisibilityReportingTemplateNotificationTemplateNameSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VisibilityReportingTemplateNotificationTemplateNameSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      debug_mode: cdktf.numberToTerraform(this._debugMode),
      host_name: cdktf.stringToTerraform(this._hostName),
      http_port: cdktf.numberToTerraform(this._httpPort),
      https_port: cdktf.numberToTerraform(this._httpsPort),
      id: cdktf.stringToTerraform(this._id),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      name: cdktf.stringToTerraform(this._name),
      protocol: cdktf.stringToTerraform(this._protocol),
      relative_uri: cdktf.stringToTerraform(this._relativeUri),
      test_connectivity: cdktf.numberToTerraform(this._testConnectivity),
      use_mgmt_port: cdktf.numberToTerraform(this._useMgmtPort),
      uuid: cdktf.stringToTerraform(this._uuid),
      authentication: visibilityReportingTemplateNotificationTemplateNameAuthenticationToTerraform(this._authentication.internalValue),
      sampling_enable: cdktf.listMapper(visibilityReportingTemplateNotificationTemplateNameSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      debug_mode: {
        value: cdktf.numberToHclTerraform(this._debugMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host_name: {
        value: cdktf.stringToHclTerraform(this._hostName),
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
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
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
      test_connectivity: {
        value: cdktf.numberToHclTerraform(this._testConnectivity),
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
        value: visibilityReportingTemplateNotificationTemplateNameAuthenticationToHclTerraform(this._authentication.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityReportingTemplateNotificationTemplateNameAuthenticationList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(visibilityReportingTemplateNotificationTemplateNameSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityReportingTemplateNotificationTemplateNameSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
