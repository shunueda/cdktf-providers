// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SupportAssistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set T&C accepted or rejected status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#accepted_terms SupportAssist#accepted_terms}
  */
  readonly acceptedTerms?: boolean | cdktf.IResolvable;
  /**
  * SupportAssist access key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#access_key SupportAssist#access_key}
  */
  readonly accessKey?: string;
  /**
  * True indicates automatic case creation is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#automatic_case_creation SupportAssist#automatic_case_creation}
  */
  readonly automaticCaseCreation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#connections SupportAssist#connections}
  */
  readonly connections?: SupportAssistConnections;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#contact SupportAssist#contact}
  */
  readonly contact?: SupportAssistContact;
  /**
  * True indicates downloads are enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#enable_download SupportAssist#enable_download}
  */
  readonly enableDownload?: boolean | cdktf.IResolvable;
  /**
  * Allow remote support.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#enable_remote_support SupportAssist#enable_remote_support}
  */
  readonly enableRemoteSupport?: boolean | cdktf.IResolvable;
  /**
  * SupportAssist pin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#pin SupportAssist#pin}
  */
  readonly pin?: string;
  /**
  * Whether SupportAssist is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#supportassist_enabled SupportAssist#supportassist_enabled}
  */
  readonly supportassistEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#telemetry SupportAssist#telemetry}
  */
  readonly telemetry?: SupportAssistTelemetry;
}
export interface SupportAssistConnectionsGatewayEndpoints {
  /**
  * Whether this gateway is enabled/disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#enabled SupportAssist#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Gateway hostname or IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#host SupportAssist#host}
  */
  readonly host?: string;
  /**
  * Gateway port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#port SupportAssist#port}
  */
  readonly port?: number;
  /**
  * Gateway's priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#priority SupportAssist#priority}
  */
  readonly priority?: number;
  /**
  * Whether to use Proxy for this gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#use_proxy SupportAssist#use_proxy}
  */
  readonly useProxy?: boolean | cdktf.IResolvable;
  /**
  * Whether to validate SSL for this gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#validate_ssl SupportAssist#validate_ssl}
  */
  readonly validateSsl?: boolean | cdktf.IResolvable;
}

export function supportAssistConnectionsGatewayEndpointsToTerraform(struct?: SupportAssistConnectionsGatewayEndpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_proxy: cdktf.booleanToTerraform(struct!.useProxy),
    validate_ssl: cdktf.booleanToTerraform(struct!.validateSsl),
  }
}


export function supportAssistConnectionsGatewayEndpointsToHclTerraform(struct?: SupportAssistConnectionsGatewayEndpoints | cdktf.IResolvable): any {
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
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_proxy: {
      value: cdktf.booleanToHclTerraform(struct!.useProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.validateSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupportAssistConnectionsGatewayEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SupportAssistConnectionsGatewayEndpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._useProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.useProxy = this._useProxy;
    }
    if (this._validateSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateSsl = this._validateSsl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupportAssistConnectionsGatewayEndpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._host = undefined;
      this._port = undefined;
      this._priority = undefined;
      this._useProxy = undefined;
      this._validateSsl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._host = value.host;
      this._port = value.port;
      this._priority = value.priority;
      this._useProxy = value.useProxy;
      this._validateSsl = value.validateSsl;
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

  // host - computed: true, optional: true, required: false
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

  // port - computed: true, optional: true, required: false
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

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_proxy - computed: true, optional: true, required: false
  private _useProxy?: boolean | cdktf.IResolvable; 
  public get useProxy() {
    return this.getBooleanAttribute('use_proxy');
  }
  public set useProxy(value: boolean | cdktf.IResolvable) {
    this._useProxy = value;
  }
  public resetUseProxy() {
    this._useProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useProxyInput() {
    return this._useProxy;
  }

  // validate_ssl - computed: true, optional: true, required: false
  private _validateSsl?: boolean | cdktf.IResolvable; 
  public get validateSsl() {
    return this.getBooleanAttribute('validate_ssl');
  }
  public set validateSsl(value: boolean | cdktf.IResolvable) {
    this._validateSsl = value;
  }
  public resetValidateSsl() {
    this._validateSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateSslInput() {
    return this._validateSsl;
  }
}

export class SupportAssistConnectionsGatewayEndpointsList extends cdktf.ComplexList {
  public internalValue? : SupportAssistConnectionsGatewayEndpoints[] | cdktf.IResolvable

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
  public get(index: number): SupportAssistConnectionsGatewayEndpointsOutputReference {
    return new SupportAssistConnectionsGatewayEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SupportAssistConnections {
  /**
  * Gateway details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#gateway_endpoints SupportAssist#gateway_endpoints}
  */
  readonly gatewayEndpoints?: SupportAssistConnectionsGatewayEndpoints[] | cdktf.IResolvable;
  /**
  * Connection Mode for SupportAssist: can be direct or via gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#mode SupportAssist#mode}
  */
  readonly mode?: string;
  /**
  * Network pools for gateway use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#network_pools SupportAssist#network_pools}
  */
  readonly networkPools?: string[];
}

export function supportAssistConnectionsToTerraform(struct?: SupportAssistConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_endpoints: cdktf.listMapper(supportAssistConnectionsGatewayEndpointsToTerraform, false)(struct!.gatewayEndpoints),
    mode: cdktf.stringToTerraform(struct!.mode),
    network_pools: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.networkPools),
  }
}


export function supportAssistConnectionsToHclTerraform(struct?: SupportAssistConnections | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_endpoints: {
      value: cdktf.listMapperHcl(supportAssistConnectionsGatewayEndpointsToHclTerraform, false)(struct!.gatewayEndpoints),
      isBlock: true,
      type: "list",
      storageClassType: "SupportAssistConnectionsGatewayEndpointsList",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_pools: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.networkPools),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupportAssistConnectionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupportAssistConnections | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayEndpoints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayEndpoints = this._gatewayEndpoints?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._networkPools !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPools = this._networkPools;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupportAssistConnections | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayEndpoints.internalValue = undefined;
      this._mode = undefined;
      this._networkPools = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayEndpoints.internalValue = value.gatewayEndpoints;
      this._mode = value.mode;
      this._networkPools = value.networkPools;
    }
  }

  // gateway_endpoints - computed: true, optional: true, required: false
  private _gatewayEndpoints = new SupportAssistConnectionsGatewayEndpointsList(this, "gateway_endpoints", false);
  public get gatewayEndpoints() {
    return this._gatewayEndpoints;
  }
  public putGatewayEndpoints(value: SupportAssistConnectionsGatewayEndpoints[] | cdktf.IResolvable) {
    this._gatewayEndpoints.internalValue = value;
  }
  public resetGatewayEndpoints() {
    this._gatewayEndpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayEndpointsInput() {
    return this._gatewayEndpoints.internalValue;
  }

  // mode - computed: true, optional: true, required: false
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

  // network_pools - computed: true, optional: true, required: false
  private _networkPools?: string[]; 
  public get networkPools() {
    return this.getListAttribute('network_pools');
  }
  public set networkPools(value: string[]) {
    this._networkPools = value;
  }
  public resetNetworkPools() {
    this._networkPools = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPoolsInput() {
    return this._networkPools;
  }
}
export interface SupportAssistContactPrimary {
  /**
  * Contact's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#email SupportAssist#email}
  */
  readonly email?: string;
  /**
  * Contact's first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#first_name SupportAssist#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#language SupportAssist#language}
  */
  readonly language?: string;
  /**
  * Contact's last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#last_name SupportAssist#last_name}
  */
  readonly lastName?: string;
  /**
  * Contact's phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#phone SupportAssist#phone}
  */
  readonly phone?: string;
}

export function supportAssistContactPrimaryToTerraform(struct?: SupportAssistContactPrimary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    language: cdktf.stringToTerraform(struct!.language),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}


export function supportAssistContactPrimaryToHclTerraform(struct?: SupportAssistContactPrimary | cdktf.IResolvable): any {
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
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
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
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupportAssistContactPrimaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupportAssistContactPrimary | cdktf.IResolvable | undefined {
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
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupportAssistContactPrimary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._language = undefined;
      this._lastName = undefined;
      this._phone = undefined;
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
      this._language = value.language;
      this._lastName = value.lastName;
      this._phone = value.phone;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // phone - computed: true, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }
}
export interface SupportAssistContactSecondary {
  /**
  * Contact's email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#email SupportAssist#email}
  */
  readonly email?: string;
  /**
  * Contact's first name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#first_name SupportAssist#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#language SupportAssist#language}
  */
  readonly language?: string;
  /**
  * Contact's last name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#last_name SupportAssist#last_name}
  */
  readonly lastName?: string;
  /**
  * Contact's phone number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#phone SupportAssist#phone}
  */
  readonly phone?: string;
}

export function supportAssistContactSecondaryToTerraform(struct?: SupportAssistContactSecondary | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    first_name: cdktf.stringToTerraform(struct!.firstName),
    language: cdktf.stringToTerraform(struct!.language),
    last_name: cdktf.stringToTerraform(struct!.lastName),
    phone: cdktf.stringToTerraform(struct!.phone),
  }
}


export function supportAssistContactSecondaryToHclTerraform(struct?: SupportAssistContactSecondary | cdktf.IResolvable): any {
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
    language: {
      value: cdktf.stringToHclTerraform(struct!.language),
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
    phone: {
      value: cdktf.stringToHclTerraform(struct!.phone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupportAssistContactSecondaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupportAssistContactSecondary | cdktf.IResolvable | undefined {
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
    if (this._language !== undefined) {
      hasAnyValues = true;
      internalValueResult.language = this._language;
    }
    if (this._lastName !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName;
    }
    if (this._phone !== undefined) {
      hasAnyValues = true;
      internalValueResult.phone = this._phone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupportAssistContactSecondary | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._firstName = undefined;
      this._language = undefined;
      this._lastName = undefined;
      this._phone = undefined;
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
      this._language = value.language;
      this._lastName = value.lastName;
      this._phone = value.phone;
    }
  }

  // email - computed: true, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // first_name - computed: true, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // language - computed: true, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // last_name - computed: true, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // phone - computed: true, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }
}
export interface SupportAssistContact {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#primary SupportAssist#primary}
  */
  readonly primary?: SupportAssistContactPrimary;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#secondary SupportAssist#secondary}
  */
  readonly secondary?: SupportAssistContactSecondary;
}

export function supportAssistContactToTerraform(struct?: SupportAssistContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primary: supportAssistContactPrimaryToTerraform(struct!.primary),
    secondary: supportAssistContactSecondaryToTerraform(struct!.secondary),
  }
}


export function supportAssistContactToHclTerraform(struct?: SupportAssistContact | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    primary: {
      value: supportAssistContactPrimaryToHclTerraform(struct!.primary),
      isBlock: true,
      type: "struct",
      storageClassType: "SupportAssistContactPrimary",
    },
    secondary: {
      value: supportAssistContactSecondaryToHclTerraform(struct!.secondary),
      isBlock: true,
      type: "struct",
      storageClassType: "SupportAssistContactSecondary",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupportAssistContactOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupportAssistContact | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary?.internalValue;
    }
    if (this._secondary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondary = this._secondary?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupportAssistContact | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._primary.internalValue = undefined;
      this._secondary.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._primary.internalValue = value.primary;
      this._secondary.internalValue = value.secondary;
    }
  }

  // primary - computed: true, optional: true, required: false
  private _primary = new SupportAssistContactPrimaryOutputReference(this, "primary");
  public get primary() {
    return this._primary;
  }
  public putPrimary(value: SupportAssistContactPrimary) {
    this._primary.internalValue = value;
  }
  public resetPrimary() {
    this._primary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary.internalValue;
  }

  // secondary - computed: true, optional: true, required: false
  private _secondary = new SupportAssistContactSecondaryOutputReference(this, "secondary");
  public get secondary() {
    return this._secondary;
  }
  public putSecondary(value: SupportAssistContactSecondary) {
    this._secondary.internalValue = value;
  }
  public resetSecondary() {
    this._secondary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryInput() {
    return this._secondary.internalValue;
  }
}
export interface SupportAssistTelemetry {
  /**
  * Change the offline collection period for when the connection to gateway is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#offline_collection_period SupportAssist#offline_collection_period}
  */
  readonly offlineCollectionPeriod?: number;
  /**
  * Change the status of telemetry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#telemetry_enabled SupportAssist#telemetry_enabled}
  */
  readonly telemetryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Change if files are kept after upload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#telemetry_persist SupportAssist#telemetry_persist}
  */
  readonly telemetryPersist?: boolean | cdktf.IResolvable;
  /**
  * Change the number of threads for telemetry gathers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#telemetry_threads SupportAssist#telemetry_threads}
  */
  readonly telemetryThreads?: number;
}

export function supportAssistTelemetryToTerraform(struct?: SupportAssistTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offline_collection_period: cdktf.numberToTerraform(struct!.offlineCollectionPeriod),
    telemetry_enabled: cdktf.booleanToTerraform(struct!.telemetryEnabled),
    telemetry_persist: cdktf.booleanToTerraform(struct!.telemetryPersist),
    telemetry_threads: cdktf.numberToTerraform(struct!.telemetryThreads),
  }
}


export function supportAssistTelemetryToHclTerraform(struct?: SupportAssistTelemetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offline_collection_period: {
      value: cdktf.numberToHclTerraform(struct!.offlineCollectionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telemetry_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.telemetryEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    telemetry_persist: {
      value: cdktf.booleanToHclTerraform(struct!.telemetryPersist),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    telemetry_threads: {
      value: cdktf.numberToHclTerraform(struct!.telemetryThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SupportAssistTelemetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SupportAssistTelemetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offlineCollectionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineCollectionPeriod = this._offlineCollectionPeriod;
    }
    if (this._telemetryEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryEnabled = this._telemetryEnabled;
    }
    if (this._telemetryPersist !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryPersist = this._telemetryPersist;
    }
    if (this._telemetryThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetryThreads = this._telemetryThreads;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SupportAssistTelemetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offlineCollectionPeriod = undefined;
      this._telemetryEnabled = undefined;
      this._telemetryPersist = undefined;
      this._telemetryThreads = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offlineCollectionPeriod = value.offlineCollectionPeriod;
      this._telemetryEnabled = value.telemetryEnabled;
      this._telemetryPersist = value.telemetryPersist;
      this._telemetryThreads = value.telemetryThreads;
    }
  }

  // offline_collection_period - computed: true, optional: true, required: false
  private _offlineCollectionPeriod?: number; 
  public get offlineCollectionPeriod() {
    return this.getNumberAttribute('offline_collection_period');
  }
  public set offlineCollectionPeriod(value: number) {
    this._offlineCollectionPeriod = value;
  }
  public resetOfflineCollectionPeriod() {
    this._offlineCollectionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineCollectionPeriodInput() {
    return this._offlineCollectionPeriod;
  }

  // telemetry_enabled - computed: true, optional: true, required: false
  private _telemetryEnabled?: boolean | cdktf.IResolvable; 
  public get telemetryEnabled() {
    return this.getBooleanAttribute('telemetry_enabled');
  }
  public set telemetryEnabled(value: boolean | cdktf.IResolvable) {
    this._telemetryEnabled = value;
  }
  public resetTelemetryEnabled() {
    this._telemetryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryEnabledInput() {
    return this._telemetryEnabled;
  }

  // telemetry_persist - computed: true, optional: true, required: false
  private _telemetryPersist?: boolean | cdktf.IResolvable; 
  public get telemetryPersist() {
    return this.getBooleanAttribute('telemetry_persist');
  }
  public set telemetryPersist(value: boolean | cdktf.IResolvable) {
    this._telemetryPersist = value;
  }
  public resetTelemetryPersist() {
    this._telemetryPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryPersistInput() {
    return this._telemetryPersist;
  }

  // telemetry_threads - computed: true, optional: true, required: false
  private _telemetryThreads?: number; 
  public get telemetryThreads() {
    return this.getNumberAttribute('telemetry_threads');
  }
  public set telemetryThreads(value: number) {
    this._telemetryThreads = value;
  }
  public resetTelemetryThreads() {
    this._telemetryThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryThreadsInput() {
    return this._telemetryThreads;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist powerscale_support_assist}
*/
export class SupportAssist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_support_assist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SupportAssist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SupportAssist to import
  * @param importFromId The id of the existing SupportAssist that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SupportAssist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_support_assist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/support_assist powerscale_support_assist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SupportAssistConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SupportAssistConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_support_assist',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acceptedTerms = config.acceptedTerms;
    this._accessKey = config.accessKey;
    this._automaticCaseCreation = config.automaticCaseCreation;
    this._connections.internalValue = config.connections;
    this._contact.internalValue = config.contact;
    this._enableDownload = config.enableDownload;
    this._enableRemoteSupport = config.enableRemoteSupport;
    this._pin = config.pin;
    this._supportassistEnabled = config.supportassistEnabled;
    this._telemetry.internalValue = config.telemetry;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accepted_terms - computed: true, optional: true, required: false
  private _acceptedTerms?: boolean | cdktf.IResolvable; 
  public get acceptedTerms() {
    return this.getBooleanAttribute('accepted_terms');
  }
  public set acceptedTerms(value: boolean | cdktf.IResolvable) {
    this._acceptedTerms = value;
  }
  public resetAcceptedTerms() {
    this._acceptedTerms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptedTermsInput() {
    return this._acceptedTerms;
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // automatic_case_creation - computed: true, optional: true, required: false
  private _automaticCaseCreation?: boolean | cdktf.IResolvable; 
  public get automaticCaseCreation() {
    return this.getBooleanAttribute('automatic_case_creation');
  }
  public set automaticCaseCreation(value: boolean | cdktf.IResolvable) {
    this._automaticCaseCreation = value;
  }
  public resetAutomaticCaseCreation() {
    this._automaticCaseCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticCaseCreationInput() {
    return this._automaticCaseCreation;
  }

  // connections - computed: true, optional: true, required: false
  private _connections = new SupportAssistConnectionsOutputReference(this, "connections");
  public get connections() {
    return this._connections;
  }
  public putConnections(value: SupportAssistConnections) {
    this._connections.internalValue = value;
  }
  public resetConnections() {
    this._connections.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionsInput() {
    return this._connections.internalValue;
  }

  // contact - computed: true, optional: true, required: false
  private _contact = new SupportAssistContactOutputReference(this, "contact");
  public get contact() {
    return this._contact;
  }
  public putContact(value: SupportAssistContact) {
    this._contact.internalValue = value;
  }
  public resetContact() {
    this._contact.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact.internalValue;
  }

  // enable_download - computed: true, optional: true, required: false
  private _enableDownload?: boolean | cdktf.IResolvable; 
  public get enableDownload() {
    return this.getBooleanAttribute('enable_download');
  }
  public set enableDownload(value: boolean | cdktf.IResolvable) {
    this._enableDownload = value;
  }
  public resetEnableDownload() {
    this._enableDownload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDownloadInput() {
    return this._enableDownload;
  }

  // enable_remote_support - computed: true, optional: true, required: false
  private _enableRemoteSupport?: boolean | cdktf.IResolvable; 
  public get enableRemoteSupport() {
    return this.getBooleanAttribute('enable_remote_support');
  }
  public set enableRemoteSupport(value: boolean | cdktf.IResolvable) {
    this._enableRemoteSupport = value;
  }
  public resetEnableRemoteSupport() {
    this._enableRemoteSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRemoteSupportInput() {
    return this._enableRemoteSupport;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pin - computed: false, optional: true, required: false
  private _pin?: string; 
  public get pin() {
    return this.getStringAttribute('pin');
  }
  public set pin(value: string) {
    this._pin = value;
  }
  public resetPin() {
    this._pin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinInput() {
    return this._pin;
  }

  // supportassist_enabled - computed: true, optional: true, required: false
  private _supportassistEnabled?: boolean | cdktf.IResolvable; 
  public get supportassistEnabled() {
    return this.getBooleanAttribute('supportassist_enabled');
  }
  public set supportassistEnabled(value: boolean | cdktf.IResolvable) {
    this._supportassistEnabled = value;
  }
  public resetSupportassistEnabled() {
    this._supportassistEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportassistEnabledInput() {
    return this._supportassistEnabled;
  }

  // telemetry - computed: true, optional: true, required: false
  private _telemetry = new SupportAssistTelemetryOutputReference(this, "telemetry");
  public get telemetry() {
    return this._telemetry;
  }
  public putTelemetry(value: SupportAssistTelemetry) {
    this._telemetry.internalValue = value;
  }
  public resetTelemetry() {
    this._telemetry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accepted_terms: cdktf.booleanToTerraform(this._acceptedTerms),
      access_key: cdktf.stringToTerraform(this._accessKey),
      automatic_case_creation: cdktf.booleanToTerraform(this._automaticCaseCreation),
      connections: supportAssistConnectionsToTerraform(this._connections.internalValue),
      contact: supportAssistContactToTerraform(this._contact.internalValue),
      enable_download: cdktf.booleanToTerraform(this._enableDownload),
      enable_remote_support: cdktf.booleanToTerraform(this._enableRemoteSupport),
      pin: cdktf.stringToTerraform(this._pin),
      supportassist_enabled: cdktf.booleanToTerraform(this._supportassistEnabled),
      telemetry: supportAssistTelemetryToTerraform(this._telemetry.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accepted_terms: {
        value: cdktf.booleanToHclTerraform(this._acceptedTerms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      automatic_case_creation: {
        value: cdktf.booleanToHclTerraform(this._automaticCaseCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connections: {
        value: supportAssistConnectionsToHclTerraform(this._connections.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupportAssistConnections",
      },
      contact: {
        value: supportAssistContactToHclTerraform(this._contact.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupportAssistContact",
      },
      enable_download: {
        value: cdktf.booleanToHclTerraform(this._enableDownload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_remote_support: {
        value: cdktf.booleanToHclTerraform(this._enableRemoteSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pin: {
        value: cdktf.stringToHclTerraform(this._pin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supportassist_enabled: {
        value: cdktf.booleanToHclTerraform(this._supportassistEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      telemetry: {
        value: supportAssistTelemetryToHclTerraform(this._telemetry.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SupportAssistTelemetry",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
