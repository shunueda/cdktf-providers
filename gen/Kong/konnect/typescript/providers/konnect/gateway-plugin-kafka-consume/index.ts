// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginKafkaConsumeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#config GatewayPluginKafkaConsume#config}
  */
  readonly config: GatewayPluginKafkaConsumeConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#consumer GatewayPluginKafkaConsume#consumer}
  */
  readonly consumer?: GatewayPluginKafkaConsumeConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#control_plane_id GatewayPluginKafkaConsume#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#created_at GatewayPluginKafkaConsume#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#enabled GatewayPluginKafkaConsume#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#id GatewayPluginKafkaConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#instance_name GatewayPluginKafkaConsume#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ordering GatewayPluginKafkaConsume#ordering}
  */
  readonly ordering?: GatewayPluginKafkaConsumeOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#partials GatewayPluginKafkaConsume#partials}
  */
  readonly partials?: GatewayPluginKafkaConsumePartials[] | cdktf.IResolvable;
  /**
  * A list of the request protocols that will trigger this plugin. The default value, as well as the possible values allowed on this field, may change depending on the plugin type. For example, plugins that only work in stream mode will only support tcp and tls. Default: ["grpc","grpcs","http","https","ws","wss"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#protocols GatewayPluginKafkaConsume#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#route GatewayPluginKafkaConsume#route}
  */
  readonly route?: GatewayPluginKafkaConsumeRoute;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#tags GatewayPluginKafkaConsume#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#updated_at GatewayPluginKafkaConsume#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginKafkaConsumeConfigAuthentication {
  /**
  * The SASL authentication mechanism.  Supported options: `PLAIN` or `SCRAM-SHA-256`. must be one of ["PLAIN", "SCRAM-SHA-256", "SCRAM-SHA-512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#mechanism GatewayPluginKafkaConsume#mechanism}
  */
  readonly mechanism?: string;
  /**
  * Password for SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#password GatewayPluginKafkaConsume#password}
  */
  readonly password?: string;
  /**
  * The authentication strategy for the plugin, the only option for the value is `sasl`. must be "sasl"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#strategy GatewayPluginKafkaConsume#strategy}
  */
  readonly strategy?: string;
  /**
  * Enable this to indicate `DelegationToken` authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#tokenauth GatewayPluginKafkaConsume#tokenauth}
  */
  readonly tokenauth?: boolean | cdktf.IResolvable;
  /**
  * Username for SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#user GatewayPluginKafkaConsume#user}
  */
  readonly user?: string;
}

export function gatewayPluginKafkaConsumeConfigAuthenticationToTerraform(struct?: GatewayPluginKafkaConsumeConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mechanism: cdktf.stringToTerraform(struct!.mechanism),
    password: cdktf.stringToTerraform(struct!.password),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    tokenauth: cdktf.booleanToTerraform(struct!.tokenauth),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function gatewayPluginKafkaConsumeConfigAuthenticationToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mechanism: {
      value: cdktf.stringToHclTerraform(struct!.mechanism),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tokenauth: {
      value: cdktf.booleanToHclTerraform(struct!.tokenauth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mechanism !== undefined) {
      hasAnyValues = true;
      internalValueResult.mechanism = this._mechanism;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._tokenauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenauth = this._tokenauth;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mechanism = undefined;
      this._password = undefined;
      this._strategy = undefined;
      this._tokenauth = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mechanism = value.mechanism;
      this._password = value.password;
      this._strategy = value.strategy;
      this._tokenauth = value.tokenauth;
      this._user = value.user;
    }
  }

  // mechanism - computed: true, optional: true, required: false
  private _mechanism?: string; 
  public get mechanism() {
    return this.getStringAttribute('mechanism');
  }
  public set mechanism(value: string) {
    this._mechanism = value;
  }
  public resetMechanism() {
    this._mechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mechanismInput() {
    return this._mechanism;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // strategy - computed: true, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }

  // tokenauth - computed: true, optional: true, required: false
  private _tokenauth?: boolean | cdktf.IResolvable; 
  public get tokenauth() {
    return this.getBooleanAttribute('tokenauth');
  }
  public set tokenauth(value: boolean | cdktf.IResolvable) {
    this._tokenauth = value;
  }
  public resetTokenauth() {
    this._tokenauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenauthInput() {
    return this._tokenauth;
  }

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface GatewayPluginKafkaConsumeConfigBootstrapServers {
  /**
  * A string representing a host name, such as example.com. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#host GatewayPluginKafkaConsume#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#port GatewayPluginKafkaConsume#port}
  */
  readonly port?: number;
}

export function gatewayPluginKafkaConsumeConfigBootstrapServersToTerraform(struct?: GatewayPluginKafkaConsumeConfigBootstrapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginKafkaConsumeConfigBootstrapServersToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigBootstrapServers | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigBootstrapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginKafkaConsumeConfigBootstrapServers | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigBootstrapServers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._port = undefined;
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
    }
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
}

export class GatewayPluginKafkaConsumeConfigBootstrapServersList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginKafkaConsumeConfigBootstrapServers[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginKafkaConsumeConfigBootstrapServersOutputReference {
    return new GatewayPluginKafkaConsumeConfigBootstrapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#password GatewayPluginKafkaConsume#password}
  */
  readonly password?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#username GatewayPluginKafkaConsume#username}
  */
  readonly username?: string;
}

export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasicToTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasicToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2 {
  /**
  * List of audiences passed to the IdP when obtaining a new token. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#audience GatewayPluginKafkaConsume#audience}
  */
  readonly audience?: string[];
  /**
  * The client ID for the application registration in the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#client_id GatewayPluginKafkaConsume#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret for the application registration in the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#client_secret GatewayPluginKafkaConsume#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth grant type to be used. Default: "client_credentials"; must be one of ["client_credentials", "password"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#grant_type GatewayPluginKafkaConsume#grant_type}
  */
  readonly grantType?: string;
  /**
  * The password to use if `config.oauth.grant_type` is set to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#password GatewayPluginKafkaConsume#password}
  */
  readonly password?: string;
  /**
  * List of scopes to request from the IdP when obtaining a new token. Default: ["openid"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#scopes GatewayPluginKafkaConsume#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint URI. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#token_endpoint GatewayPluginKafkaConsume#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Extra headers to be passed in the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#token_headers GatewayPluginKafkaConsume#token_headers}
  */
  readonly tokenHeaders?: { [key: string]: string };
  /**
  * Extra post arguments to be passed in the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#token_post_args GatewayPluginKafkaConsume#token_post_args}
  */
  readonly tokenPostArgs?: { [key: string]: string };
  /**
  * The username to use if `config.oauth.grant_type` is set to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#username GatewayPluginKafkaConsume#username}
  */
  readonly username?: string;
}

export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ToTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audience),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    grant_type: cdktf.stringToTerraform(struct!.grantType),
    password: cdktf.stringToTerraform(struct!.password),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    token_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokenHeaders),
    token_post_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokenPostArgs),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audience),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_type: {
      value: cdktf.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokenHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token_post_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokenPostArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._tokenHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeaders = this._tokenHeaders;
    }
    if (this._tokenPostArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPostArgs = this._tokenPostArgs;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._grantType = undefined;
      this._password = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
      this._tokenHeaders = undefined;
      this._tokenPostArgs = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._grantType = value.grantType;
      this._password = value.password;
      this._scopes = value.scopes;
      this._tokenEndpoint = value.tokenEndpoint;
      this._tokenHeaders = value.tokenHeaders;
      this._tokenPostArgs = value.tokenPostArgs;
      this._username = value.username;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string[]; 
  public get audience() {
    return this.getListAttribute('audience');
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // grant_type - computed: true, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_endpoint - computed: true, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // token_headers - computed: true, optional: true, required: false
  private _tokenHeaders?: { [key: string]: string }; 
  public get tokenHeaders() {
    return this.getStringMapAttribute('token_headers');
  }
  public set tokenHeaders(value: { [key: string]: string }) {
    this._tokenHeaders = value;
  }
  public resetTokenHeaders() {
    this._tokenHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersInput() {
    return this._tokenHeaders;
  }

  // token_post_args - computed: true, optional: true, required: false
  private _tokenPostArgs?: { [key: string]: string }; 
  public get tokenPostArgs() {
    return this.getStringMapAttribute('token_post_args');
  }
  public set tokenPostArgs(value: { [key: string]: string }) {
    this._tokenPostArgs = value;
  }
  public resetTokenPostArgs() {
    this._tokenPostArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPostArgsInput() {
    return this._tokenPostArgs;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client {
  /**
  * The authentication method used in client requests to the IdP. Supported values are: `client_secret_basic` to send `client_id` and `client_secret` in the `Authorization: Basic` header, `client_secret_post` to send `client_id` and `client_secret` as part of the request body, or `client_secret_jwt` to send a JWT signed with the `client_secret` using the client assertion as part of the body. Default: "client_secret_post"; must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#auth_method GatewayPluginKafkaConsume#auth_method}
  */
  readonly authMethod?: string;
  /**
  * The algorithm to use with JWT when using `client_secret_jwt` authentication. Default: "HS512"; must be one of ["HS256", "HS512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#client_secret_jwt_alg GatewayPluginKafkaConsume#client_secret_jwt_alg}
  */
  readonly clientSecretJwtAlg?: string;
  /**
  * The proxy to use when making HTTP requests to the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#http_proxy GatewayPluginKafkaConsume#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The `Proxy-Authorization` header value to be used with `http_proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#http_proxy_authorization GatewayPluginKafkaConsume#http_proxy_authorization}
  */
  readonly httpProxyAuthorization?: string;
  /**
  * The HTTP version used for requests made by this plugin. Supported values: `1.1` for HTTP 1.1 and `1.0` for HTTP 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#http_version GatewayPluginKafkaConsume#http_version}
  */
  readonly httpVersion?: number;
  /**
  * The proxy to use when making HTTPS requests to the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#https_proxy GatewayPluginKafkaConsume#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The `Proxy-Authorization` header value to be used with `https_proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#https_proxy_authorization GatewayPluginKafkaConsume#https_proxy_authorization}
  */
  readonly httpsProxyAuthorization?: string;
  /**
  * Whether to use keepalive connections to the IdP. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#keep_alive GatewayPluginKafkaConsume#keep_alive}
  */
  readonly keepAlive?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of hosts that should not be proxied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#no_proxy GatewayPluginKafkaConsume#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Whether to verify the certificate presented by the IdP when using HTTPS. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ssl_verify GatewayPluginKafkaConsume#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Network I/O timeout for requests to the IdP in milliseconds. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#timeout GatewayPluginKafkaConsume#timeout}
  */
  readonly timeout?: number;
}

export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ClientToTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    client_secret_jwt_alg: cdktf.stringToTerraform(struct!.clientSecretJwtAlg),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    http_proxy_authorization: cdktf.stringToTerraform(struct!.httpProxyAuthorization),
    http_version: cdktf.numberToTerraform(struct!.httpVersion),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    https_proxy_authorization: cdktf.stringToTerraform(struct!.httpsProxyAuthorization),
    keep_alive: cdktf.booleanToTerraform(struct!.keepAlive),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ClientToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_jwt_alg: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretJwtAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.numberToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive: {
      value: cdktf.booleanToHclTerraform(struct!.keepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._clientSecretJwtAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretJwtAlg = this._clientSecretJwtAlg;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyAuthorization = this._httpProxyAuthorization;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._httpsProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyAuthorization = this._httpsProxyAuthorization;
    }
    if (this._keepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlive = this._keepAlive;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._clientSecretJwtAlg = undefined;
      this._httpProxy = undefined;
      this._httpProxyAuthorization = undefined;
      this._httpVersion = undefined;
      this._httpsProxy = undefined;
      this._httpsProxyAuthorization = undefined;
      this._keepAlive = undefined;
      this._noProxy = undefined;
      this._sslVerify = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._clientSecretJwtAlg = value.clientSecretJwtAlg;
      this._httpProxy = value.httpProxy;
      this._httpProxyAuthorization = value.httpProxyAuthorization;
      this._httpVersion = value.httpVersion;
      this._httpsProxy = value.httpsProxy;
      this._httpsProxyAuthorization = value.httpsProxyAuthorization;
      this._keepAlive = value.keepAlive;
      this._noProxy = value.noProxy;
      this._sslVerify = value.sslVerify;
      this._timeout = value.timeout;
    }
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // client_secret_jwt_alg - computed: true, optional: true, required: false
  private _clientSecretJwtAlg?: string; 
  public get clientSecretJwtAlg() {
    return this.getStringAttribute('client_secret_jwt_alg');
  }
  public set clientSecretJwtAlg(value: string) {
    this._clientSecretJwtAlg = value;
  }
  public resetClientSecretJwtAlg() {
    this._clientSecretJwtAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretJwtAlgInput() {
    return this._clientSecretJwtAlg;
  }

  // http_proxy - computed: true, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // http_proxy_authorization - computed: true, optional: true, required: false
  private _httpProxyAuthorization?: string; 
  public get httpProxyAuthorization() {
    return this.getStringAttribute('http_proxy_authorization');
  }
  public set httpProxyAuthorization(value: string) {
    this._httpProxyAuthorization = value;
  }
  public resetHttpProxyAuthorization() {
    this._httpProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyAuthorizationInput() {
    return this._httpProxyAuthorization;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: number; 
  public get httpVersion() {
    return this.getNumberAttribute('http_version');
  }
  public set httpVersion(value: number) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // https_proxy - computed: true, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // https_proxy_authorization - computed: true, optional: true, required: false
  private _httpsProxyAuthorization?: string; 
  public get httpsProxyAuthorization() {
    return this.getStringAttribute('https_proxy_authorization');
  }
  public set httpsProxyAuthorization(value: string) {
    this._httpsProxyAuthorization = value;
  }
  public resetHttpsProxyAuthorization() {
    this._httpsProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyAuthorizationInput() {
    return this._httpsProxyAuthorization;
  }

  // keep_alive - computed: true, optional: true, required: false
  private _keepAlive?: boolean | cdktf.IResolvable; 
  public get keepAlive() {
    return this.getBooleanAttribute('keep_alive');
  }
  public set keepAlive(value: boolean | cdktf.IResolvable) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // no_proxy - computed: true, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // timeout - computed: true, optional: true, required: false
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
}
export interface GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#basic GatewayPluginKafkaConsume#basic}
  */
  readonly basic?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic;
  /**
  * Authentication mode to use with the schema registry. Default: "none"; must be one of ["basic", "none", "oauth2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#mode GatewayPluginKafkaConsume#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#oauth2 GatewayPluginKafkaConsume#oauth2}
  */
  readonly oauth2?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#oauth2_client GatewayPluginKafkaConsume#oauth2_client}
  */
  readonly oauth2Client?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client;
}

export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationToTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasicToTerraform(struct!.basic),
    mode: cdktf.stringToTerraform(struct!.mode),
    oauth2: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ToTerraform(struct!.oauth2),
    oauth2_client: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ClientToTerraform(struct!.oauth2Client),
  }
}


export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2: {
      value: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2",
    },
    oauth2_client: {
      value: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ClientToHclTerraform(struct!.oauth2Client),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._oauth2Client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Client = this._oauth2Client?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basic.internalValue = undefined;
      this._mode = undefined;
      this._oauth2.internalValue = undefined;
      this._oauth2Client.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basic.internalValue = value.basic;
      this._mode = value.mode;
      this._oauth2.internalValue = value.oauth2;
      this._oauth2Client.internalValue = value.oauth2Client;
    }
  }

  // basic - computed: true, optional: true, required: false
  private _basic = new GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
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

  // oauth2 - computed: true, optional: true, required: false
  private _oauth2 = new GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // oauth2_client - computed: true, optional: true, required: false
  private _oauth2Client = new GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }
  public putOauth2Client(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOauth2Client) {
    this._oauth2Client.internalValue = value;
  }
  public resetOauth2Client() {
    this._oauth2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientInput() {
    return this._oauth2Client.internalValue;
  }
}
export interface GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#authentication GatewayPluginKafkaConsume#authentication}
  */
  readonly authentication?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication;
  /**
  * Set to false to disable SSL certificate verification when connecting to the schema registry. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ssl_verify GatewayPluginKafkaConsume#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * The TTL in seconds for the schema registry cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ttl GatewayPluginKafkaConsume#ttl}
  */
  readonly ttl?: number;
  /**
  * The URL of the schema registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#url GatewayPluginKafkaConsume#url}
  */
  readonly url?: string;
}

export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentToTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationToTerraform(struct!.authentication),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._sslVerify = undefined;
      this._ttl = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._sslVerify = value.sslVerify;
      this._ttl = value.ttl;
      this._url = value.url;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // url - computed: true, optional: true, required: false
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
export interface GatewayPluginKafkaConsumeConfigSchemaRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#confluent GatewayPluginKafkaConsume#confluent}
  */
  readonly confluent?: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent;
}

export function gatewayPluginKafkaConsumeConfigSchemaRegistryToTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confluent: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentToTerraform(struct!.confluent),
  }
}


export function gatewayPluginKafkaConsumeConfigSchemaRegistryToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confluent: {
      value: gatewayPluginKafkaConsumeConfigSchemaRegistryConfluentToHclTerraform(struct!.confluent),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigSchemaRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigSchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confluent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluent = this._confluent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigSchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confluent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confluent.internalValue = value.confluent;
    }
  }

  // confluent - computed: true, optional: true, required: false
  private _confluent = new GatewayPluginKafkaConsumeConfigSchemaRegistryConfluentOutputReference(this, "confluent");
  public get confluent() {
    return this._confluent;
  }
  public putConfluent(value: GatewayPluginKafkaConsumeConfigSchemaRegistryConfluent) {
    this._confluent.internalValue = value;
  }
  public resetConfluent() {
    this._confluent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentInput() {
    return this._confluent.internalValue;
  }
}
export interface GatewayPluginKafkaConsumeConfigSecurity {
  /**
  * UUID of certificate entity for mTLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#certificate_id GatewayPluginKafkaConsume#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Enables TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ssl GatewayPluginKafkaConsume#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
}

export function gatewayPluginKafkaConsumeConfigSecurityToTerraform(struct?: GatewayPluginKafkaConsumeConfigSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
  }
}


export function gatewayPluginKafkaConsumeConfigSecurityToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_id: {
      value: cdktf.stringToHclTerraform(struct!.certificateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigSecurity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateId = this._certificateId;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigSecurity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateId = undefined;
      this._ssl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateId = value.certificateId;
      this._ssl = value.ssl;
    }
  }

  // certificate_id - computed: true, optional: true, required: false
  private _certificateId?: string; 
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }
  public set certificateId(value: string) {
    this._certificateId = value;
  }
  public resetCertificateId() {
    this._certificateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateIdInput() {
    return this._certificateId;
  }

  // ssl - computed: true, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }
}
export interface GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#password GatewayPluginKafkaConsume#password}
  */
  readonly password?: string;
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#username GatewayPluginKafkaConsume#username}
  */
  readonly username?: string;
}

export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasicToTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasicToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._password = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2 {
  /**
  * List of audiences passed to the IdP when obtaining a new token. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#audience GatewayPluginKafkaConsume#audience}
  */
  readonly audience?: string[];
  /**
  * The client ID for the application registration in the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#client_id GatewayPluginKafkaConsume#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret for the application registration in the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#client_secret GatewayPluginKafkaConsume#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth grant type to be used. Default: "client_credentials"; must be one of ["client_credentials", "password"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#grant_type GatewayPluginKafkaConsume#grant_type}
  */
  readonly grantType?: string;
  /**
  * The password to use if `config.oauth.grant_type` is set to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#password GatewayPluginKafkaConsume#password}
  */
  readonly password?: string;
  /**
  * List of scopes to request from the IdP when obtaining a new token. Default: ["openid"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#scopes GatewayPluginKafkaConsume#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint URI. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#token_endpoint GatewayPluginKafkaConsume#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Extra headers to be passed in the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#token_headers GatewayPluginKafkaConsume#token_headers}
  */
  readonly tokenHeaders?: { [key: string]: string };
  /**
  * Extra post arguments to be passed in the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#token_post_args GatewayPluginKafkaConsume#token_post_args}
  */
  readonly tokenPostArgs?: { [key: string]: string };
  /**
  * The username to use if `config.oauth.grant_type` is set to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#username GatewayPluginKafkaConsume#username}
  */
  readonly username?: string;
}

export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ToTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.audience),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    grant_type: cdktf.stringToTerraform(struct!.grantType),
    password: cdktf.stringToTerraform(struct!.password),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
    token_endpoint: cdktf.stringToTerraform(struct!.tokenEndpoint),
    token_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokenHeaders),
    token_post_args: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tokenPostArgs),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.audience),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_type: {
      value: cdktf.stringToHclTerraform(struct!.grantType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    token_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokenHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    token_post_args: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tokenPostArgs),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._grantType !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantType = this._grantType;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    if (this._tokenEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpoint = this._tokenEndpoint;
    }
    if (this._tokenHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenHeaders = this._tokenHeaders;
    }
    if (this._tokenPostArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenPostArgs = this._tokenPostArgs;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._grantType = undefined;
      this._password = undefined;
      this._scopes = undefined;
      this._tokenEndpoint = undefined;
      this._tokenHeaders = undefined;
      this._tokenPostArgs = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._grantType = value.grantType;
      this._password = value.password;
      this._scopes = value.scopes;
      this._tokenEndpoint = value.tokenEndpoint;
      this._tokenHeaders = value.tokenHeaders;
      this._tokenPostArgs = value.tokenPostArgs;
      this._username = value.username;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string[]; 
  public get audience() {
    return this.getListAttribute('audience');
  }
  public set audience(value: string[]) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // client_id - computed: true, optional: true, required: false
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

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // grant_type - computed: true, optional: true, required: false
  private _grantType?: string; 
  public get grantType() {
    return this.getStringAttribute('grant_type');
  }
  public set grantType(value: string) {
    this._grantType = value;
  }
  public resetGrantType() {
    this._grantType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypeInput() {
    return this._grantType;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this.getListAttribute('scopes');
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // token_endpoint - computed: true, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // token_headers - computed: true, optional: true, required: false
  private _tokenHeaders?: { [key: string]: string }; 
  public get tokenHeaders() {
    return this.getStringMapAttribute('token_headers');
  }
  public set tokenHeaders(value: { [key: string]: string }) {
    this._tokenHeaders = value;
  }
  public resetTokenHeaders() {
    this._tokenHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenHeadersInput() {
    return this._tokenHeaders;
  }

  // token_post_args - computed: true, optional: true, required: false
  private _tokenPostArgs?: { [key: string]: string }; 
  public get tokenPostArgs() {
    return this.getStringMapAttribute('token_post_args');
  }
  public set tokenPostArgs(value: { [key: string]: string }) {
    this._tokenPostArgs = value;
  }
  public resetTokenPostArgs() {
    this._tokenPostArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPostArgsInput() {
    return this._tokenPostArgs;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client {
  /**
  * The authentication method used in client requests to the IdP. Supported values are: `client_secret_basic` to send `client_id` and `client_secret` in the `Authorization: Basic` header, `client_secret_post` to send `client_id` and `client_secret` as part of the request body, or `client_secret_jwt` to send a JWT signed with the `client_secret` using the client assertion as part of the body. Default: "client_secret_post"; must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#auth_method GatewayPluginKafkaConsume#auth_method}
  */
  readonly authMethod?: string;
  /**
  * The algorithm to use with JWT when using `client_secret_jwt` authentication. Default: "HS512"; must be one of ["HS256", "HS512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#client_secret_jwt_alg GatewayPluginKafkaConsume#client_secret_jwt_alg}
  */
  readonly clientSecretJwtAlg?: string;
  /**
  * The proxy to use when making HTTP requests to the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#http_proxy GatewayPluginKafkaConsume#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The `Proxy-Authorization` header value to be used with `http_proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#http_proxy_authorization GatewayPluginKafkaConsume#http_proxy_authorization}
  */
  readonly httpProxyAuthorization?: string;
  /**
  * The HTTP version used for requests made by this plugin. Supported values: `1.1` for HTTP 1.1 and `1.0` for HTTP 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#http_version GatewayPluginKafkaConsume#http_version}
  */
  readonly httpVersion?: number;
  /**
  * The proxy to use when making HTTPS requests to the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#https_proxy GatewayPluginKafkaConsume#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The `Proxy-Authorization` header value to be used with `https_proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#https_proxy_authorization GatewayPluginKafkaConsume#https_proxy_authorization}
  */
  readonly httpsProxyAuthorization?: string;
  /**
  * Whether to use keepalive connections to the IdP. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#keep_alive GatewayPluginKafkaConsume#keep_alive}
  */
  readonly keepAlive?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of hosts that should not be proxied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#no_proxy GatewayPluginKafkaConsume#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Whether to verify the certificate presented by the IdP when using HTTPS. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ssl_verify GatewayPluginKafkaConsume#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Network I/O timeout for requests to the IdP in milliseconds. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#timeout GatewayPluginKafkaConsume#timeout}
  */
  readonly timeout?: number;
}

export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ClientToTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    client_secret_jwt_alg: cdktf.stringToTerraform(struct!.clientSecretJwtAlg),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    http_proxy_authorization: cdktf.stringToTerraform(struct!.httpProxyAuthorization),
    http_version: cdktf.numberToTerraform(struct!.httpVersion),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
    https_proxy_authorization: cdktf.stringToTerraform(struct!.httpsProxyAuthorization),
    keep_alive: cdktf.booleanToTerraform(struct!.keepAlive),
    no_proxy: cdktf.stringToTerraform(struct!.noProxy),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ClientToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_method: {
      value: cdktf.stringToHclTerraform(struct!.authMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret_jwt_alg: {
      value: cdktf.stringToHclTerraform(struct!.clientSecretJwtAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.numberToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy_authorization: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxyAuthorization),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_alive: {
      value: cdktf.booleanToHclTerraform(struct!.keepAlive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_proxy: {
      value: cdktf.stringToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._clientSecretJwtAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecretJwtAlg = this._clientSecretJwtAlg;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyAuthorization = this._httpProxyAuthorization;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    if (this._httpsProxyAuthorization !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxyAuthorization = this._httpsProxyAuthorization;
    }
    if (this._keepAlive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAlive = this._keepAlive;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._clientSecretJwtAlg = undefined;
      this._httpProxy = undefined;
      this._httpProxyAuthorization = undefined;
      this._httpVersion = undefined;
      this._httpsProxy = undefined;
      this._httpsProxyAuthorization = undefined;
      this._keepAlive = undefined;
      this._noProxy = undefined;
      this._sslVerify = undefined;
      this._timeout = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._clientSecretJwtAlg = value.clientSecretJwtAlg;
      this._httpProxy = value.httpProxy;
      this._httpProxyAuthorization = value.httpProxyAuthorization;
      this._httpVersion = value.httpVersion;
      this._httpsProxy = value.httpsProxy;
      this._httpsProxyAuthorization = value.httpsProxyAuthorization;
      this._keepAlive = value.keepAlive;
      this._noProxy = value.noProxy;
      this._sslVerify = value.sslVerify;
      this._timeout = value.timeout;
    }
  }

  // auth_method - computed: true, optional: true, required: false
  private _authMethod?: string; 
  public get authMethod() {
    return this.getStringAttribute('auth_method');
  }
  public set authMethod(value: string) {
    this._authMethod = value;
  }
  public resetAuthMethod() {
    this._authMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod;
  }

  // client_secret_jwt_alg - computed: true, optional: true, required: false
  private _clientSecretJwtAlg?: string; 
  public get clientSecretJwtAlg() {
    return this.getStringAttribute('client_secret_jwt_alg');
  }
  public set clientSecretJwtAlg(value: string) {
    this._clientSecretJwtAlg = value;
  }
  public resetClientSecretJwtAlg() {
    this._clientSecretJwtAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretJwtAlgInput() {
    return this._clientSecretJwtAlg;
  }

  // http_proxy - computed: true, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this.getStringAttribute('http_proxy');
  }
  public set httpProxy(value: string) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // http_proxy_authorization - computed: true, optional: true, required: false
  private _httpProxyAuthorization?: string; 
  public get httpProxyAuthorization() {
    return this.getStringAttribute('http_proxy_authorization');
  }
  public set httpProxyAuthorization(value: string) {
    this._httpProxyAuthorization = value;
  }
  public resetHttpProxyAuthorization() {
    this._httpProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyAuthorizationInput() {
    return this._httpProxyAuthorization;
  }

  // http_version - computed: true, optional: true, required: false
  private _httpVersion?: number; 
  public get httpVersion() {
    return this.getNumberAttribute('http_version');
  }
  public set httpVersion(value: number) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // https_proxy - computed: true, optional: true, required: false
  private _httpsProxy?: string; 
  public get httpsProxy() {
    return this.getStringAttribute('https_proxy');
  }
  public set httpsProxy(value: string) {
    this._httpsProxy = value;
  }
  public resetHttpsProxy() {
    this._httpsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyInput() {
    return this._httpsProxy;
  }

  // https_proxy_authorization - computed: true, optional: true, required: false
  private _httpsProxyAuthorization?: string; 
  public get httpsProxyAuthorization() {
    return this.getStringAttribute('https_proxy_authorization');
  }
  public set httpsProxyAuthorization(value: string) {
    this._httpsProxyAuthorization = value;
  }
  public resetHttpsProxyAuthorization() {
    this._httpsProxyAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsProxyAuthorizationInput() {
    return this._httpsProxyAuthorization;
  }

  // keep_alive - computed: true, optional: true, required: false
  private _keepAlive?: boolean | cdktf.IResolvable; 
  public get keepAlive() {
    return this.getBooleanAttribute('keep_alive');
  }
  public set keepAlive(value: boolean | cdktf.IResolvable) {
    this._keepAlive = value;
  }
  public resetKeepAlive() {
    this._keepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive;
  }

  // no_proxy - computed: true, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this.getStringAttribute('no_proxy');
  }
  public set noProxy(value: string) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // timeout - computed: true, optional: true, required: false
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
}
export interface GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#basic GatewayPluginKafkaConsume#basic}
  */
  readonly basic?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic;
  /**
  * Authentication mode to use with the schema registry. Default: "none"; must be one of ["basic", "none", "oauth2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#mode GatewayPluginKafkaConsume#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#oauth2 GatewayPluginKafkaConsume#oauth2}
  */
  readonly oauth2?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#oauth2_client GatewayPluginKafkaConsume#oauth2_client}
  */
  readonly oauth2Client?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client;
}

export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationToTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasicToTerraform(struct!.basic),
    mode: cdktf.stringToTerraform(struct!.mode),
    oauth2: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ToTerraform(struct!.oauth2),
    oauth2_client: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ClientToTerraform(struct!.oauth2Client),
  }
}


export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2: {
      value: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2",
    },
    oauth2_client: {
      value: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ClientToHclTerraform(struct!.oauth2Client),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._oauth2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2 = this._oauth2?.internalValue;
    }
    if (this._oauth2Client?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2Client = this._oauth2Client?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basic.internalValue = undefined;
      this._mode = undefined;
      this._oauth2.internalValue = undefined;
      this._oauth2Client.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basic.internalValue = value.basic;
      this._mode = value.mode;
      this._oauth2.internalValue = value.oauth2;
      this._oauth2Client.internalValue = value.oauth2Client;
    }
  }

  // basic - computed: true, optional: true, required: false
  private _basic = new GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
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

  // oauth2 - computed: true, optional: true, required: false
  private _oauth2 = new GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2) {
    this._oauth2.internalValue = value;
  }
  public resetOauth2() {
    this._oauth2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2Input() {
    return this._oauth2.internalValue;
  }

  // oauth2_client - computed: true, optional: true, required: false
  private _oauth2Client = new GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }
  public putOauth2Client(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOauth2Client) {
    this._oauth2Client.internalValue = value;
  }
  public resetOauth2Client() {
    this._oauth2Client.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientInput() {
    return this._oauth2Client.internalValue;
  }
}
export interface GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#authentication GatewayPluginKafkaConsume#authentication}
  */
  readonly authentication?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication;
  /**
  * Set to false to disable SSL certificate verification when connecting to the schema registry. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ssl_verify GatewayPluginKafkaConsume#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * The TTL in seconds for the schema registry cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#ttl GatewayPluginKafkaConsume#ttl}
  */
  readonly ttl?: number;
  /**
  * The URL of the schema registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#url GatewayPluginKafkaConsume#url}
  */
  readonly url?: string;
}

export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentToTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationToTerraform(struct!.authentication),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication",
    },
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._sslVerify = undefined;
      this._ttl = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._sslVerify = value.sslVerify;
      this._ttl = value.ttl;
      this._url = value.url;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // ssl_verify - computed: true, optional: true, required: false
  private _sslVerify?: boolean | cdktf.IResolvable; 
  public get sslVerify() {
    return this.getBooleanAttribute('ssl_verify');
  }
  public set sslVerify(value: boolean | cdktf.IResolvable) {
    this._sslVerify = value;
  }
  public resetSslVerify() {
    this._sslVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVerifyInput() {
    return this._sslVerify;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // url - computed: true, optional: true, required: false
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
export interface GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#confluent GatewayPluginKafkaConsume#confluent}
  */
  readonly confluent?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent;
}

export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryToTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confluent: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentToTerraform(struct!.confluent),
  }
}


export function gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confluent: {
      value: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentToHclTerraform(struct!.confluent),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confluent?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.confluent = this._confluent?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._confluent.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._confluent.internalValue = value.confluent;
    }
  }

  // confluent - computed: true, optional: true, required: false
  private _confluent = new GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluentOutputReference(this, "confluent");
  public get confluent() {
    return this._confluent;
  }
  public putConfluent(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryConfluent) {
    this._confluent.internalValue = value;
  }
  public resetConfluent() {
    this._confluent.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confluentInput() {
    return this._confluent.internalValue;
  }
}
export interface GatewayPluginKafkaConsumeConfigTopics {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#name GatewayPluginKafkaConsume#name}
  */
  readonly name?: string;
  /**
  * The plugin-global schema registry configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#schema_registry GatewayPluginKafkaConsume#schema_registry}
  */
  readonly schemaRegistry?: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry;
}

export function gatewayPluginKafkaConsumeConfigTopicsToTerraform(struct?: GatewayPluginKafkaConsumeConfigTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    schema_registry: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryToTerraform(struct!.schemaRegistry),
  }
}


export function gatewayPluginKafkaConsumeConfigTopicsToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigTopics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry: {
      value: gatewayPluginKafkaConsumeConfigTopicsSchemaRegistryToHclTerraform(struct!.schemaRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigTopicsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginKafkaConsumeConfigTopics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schemaRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigTopics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._schemaRegistry.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._schemaRegistry.internalValue = value.schemaRegistry;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema_registry - computed: true, optional: true, required: false
  private _schemaRegistry = new GatewayPluginKafkaConsumeConfigTopicsSchemaRegistryOutputReference(this, "schema_registry");
  public get schemaRegistry() {
    return this._schemaRegistry;
  }
  public putSchemaRegistry(value: GatewayPluginKafkaConsumeConfigTopicsSchemaRegistry) {
    this._schemaRegistry.internalValue = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry.internalValue;
  }
}

export class GatewayPluginKafkaConsumeConfigTopicsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginKafkaConsumeConfigTopics[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginKafkaConsumeConfigTopicsOutputReference {
    return new GatewayPluginKafkaConsumeConfigTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginKafkaConsumeConfigA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#authentication GatewayPluginKafkaConsume#authentication}
  */
  readonly authentication?: GatewayPluginKafkaConsumeConfigAuthentication;
  /**
  * The offset to start from when there is no initial offset in the consumer group. Default: "latest"; must be one of ["earliest", "latest"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#auto_offset_reset GatewayPluginKafkaConsume#auto_offset_reset}
  */
  readonly autoOffsetReset?: string;
  /**
  * Set of bootstrap brokers in a `{host: host, port: port}` list format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#bootstrap_servers GatewayPluginKafkaConsume#bootstrap_servers}
  */
  readonly bootstrapServers: GatewayPluginKafkaConsumeConfigBootstrapServers[] | cdktf.IResolvable;
  /**
  * An identifier for the Kafka cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#cluster_name GatewayPluginKafkaConsume#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * The strategy to use for committing offsets. Default: "auto"; must be one of ["auto", "off"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#commit_strategy GatewayPluginKafkaConsume#commit_strategy}
  */
  readonly commitStrategy?: string;
  /**
  * The topic to use for the Dead Letter Queue.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#dlq_topic GatewayPluginKafkaConsume#dlq_topic}
  */
  readonly dlqTopic?: string;
  /**
  * Enables Dead Letter Queue. When enabled, if the message doesn't conform to the schema (from Schema Registry) or there's an error in the `message_by_lua_functions`, it will be forwarded to `dlq_topic` that can be processed later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#enable_dlq GatewayPluginKafkaConsume#enable_dlq}
  */
  readonly enableDlq?: boolean | cdktf.IResolvable;
  /**
  * The Lua functions that manipulates the message being sent to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#message_by_lua_functions GatewayPluginKafkaConsume#message_by_lua_functions}
  */
  readonly messageByLuaFunctions?: string[];
  /**
  * The deserializer to use for the consumed messages. Default: "noop"; must be one of ["json", "noop"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#message_deserializer GatewayPluginKafkaConsume#message_deserializer}
  */
  readonly messageDeserializer?: string;
  /**
  * The mode of operation for the plugin. Default: "http-get"; must be one of ["http-get", "server-sent-events", "websocket"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#mode GatewayPluginKafkaConsume#mode}
  */
  readonly mode?: string;
  /**
  * The plugin-global schema registry configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#schema_registry GatewayPluginKafkaConsume#schema_registry}
  */
  readonly schemaRegistry?: GatewayPluginKafkaConsumeConfigSchemaRegistry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#security GatewayPluginKafkaConsume#security}
  */
  readonly security?: GatewayPluginKafkaConsumeConfigSecurity;
  /**
  * The Kafka topics and their configuration you want to consume from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#topics GatewayPluginKafkaConsume#topics}
  */
  readonly topics: GatewayPluginKafkaConsumeConfigTopics[] | cdktf.IResolvable;
}

export function gatewayPluginKafkaConsumeConfigAToTerraform(struct?: GatewayPluginKafkaConsumeConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: gatewayPluginKafkaConsumeConfigAuthenticationToTerraform(struct!.authentication),
    auto_offset_reset: cdktf.stringToTerraform(struct!.autoOffsetReset),
    bootstrap_servers: cdktf.listMapper(gatewayPluginKafkaConsumeConfigBootstrapServersToTerraform, false)(struct!.bootstrapServers),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    commit_strategy: cdktf.stringToTerraform(struct!.commitStrategy),
    dlq_topic: cdktf.stringToTerraform(struct!.dlqTopic),
    enable_dlq: cdktf.booleanToTerraform(struct!.enableDlq),
    message_by_lua_functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messageByLuaFunctions),
    message_deserializer: cdktf.stringToTerraform(struct!.messageDeserializer),
    mode: cdktf.stringToTerraform(struct!.mode),
    schema_registry: gatewayPluginKafkaConsumeConfigSchemaRegistryToTerraform(struct!.schemaRegistry),
    security: gatewayPluginKafkaConsumeConfigSecurityToTerraform(struct!.security),
    topics: cdktf.listMapper(gatewayPluginKafkaConsumeConfigTopicsToTerraform, false)(struct!.topics),
  }
}


export function gatewayPluginKafkaConsumeConfigAToHclTerraform(struct?: GatewayPluginKafkaConsumeConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: gatewayPluginKafkaConsumeConfigAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigAuthentication",
    },
    auto_offset_reset: {
      value: cdktf.stringToHclTerraform(struct!.autoOffsetReset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bootstrap_servers: {
      value: cdktf.listMapperHcl(gatewayPluginKafkaConsumeConfigBootstrapServersToHclTerraform, false)(struct!.bootstrapServers),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginKafkaConsumeConfigBootstrapServersList",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commit_strategy: {
      value: cdktf.stringToHclTerraform(struct!.commitStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlq_topic: {
      value: cdktf.stringToHclTerraform(struct!.dlqTopic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_dlq: {
      value: cdktf.booleanToHclTerraform(struct!.enableDlq),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    message_by_lua_functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messageByLuaFunctions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    message_deserializer: {
      value: cdktf.stringToHclTerraform(struct!.messageDeserializer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema_registry: {
      value: gatewayPluginKafkaConsumeConfigSchemaRegistryToHclTerraform(struct!.schemaRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigSchemaRegistry",
    },
    security: {
      value: gatewayPluginKafkaConsumeConfigSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeConfigSecurity",
    },
    topics: {
      value: cdktf.listMapperHcl(gatewayPluginKafkaConsumeConfigTopicsToHclTerraform, false)(struct!.topics),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginKafkaConsumeConfigTopicsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._autoOffsetReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoOffsetReset = this._autoOffsetReset;
    }
    if (this._bootstrapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._commitStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.commitStrategy = this._commitStrategy;
    }
    if (this._dlqTopic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlqTopic = this._dlqTopic;
    }
    if (this._enableDlq !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableDlq = this._enableDlq;
    }
    if (this._messageByLuaFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageByLuaFunctions = this._messageByLuaFunctions;
    }
    if (this._messageDeserializer !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDeserializer = this._messageDeserializer;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._schemaRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._topics?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topics = this._topics?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._autoOffsetReset = undefined;
      this._bootstrapServers.internalValue = undefined;
      this._clusterName = undefined;
      this._commitStrategy = undefined;
      this._dlqTopic = undefined;
      this._enableDlq = undefined;
      this._messageByLuaFunctions = undefined;
      this._messageDeserializer = undefined;
      this._mode = undefined;
      this._schemaRegistry.internalValue = undefined;
      this._security.internalValue = undefined;
      this._topics.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._autoOffsetReset = value.autoOffsetReset;
      this._bootstrapServers.internalValue = value.bootstrapServers;
      this._clusterName = value.clusterName;
      this._commitStrategy = value.commitStrategy;
      this._dlqTopic = value.dlqTopic;
      this._enableDlq = value.enableDlq;
      this._messageByLuaFunctions = value.messageByLuaFunctions;
      this._messageDeserializer = value.messageDeserializer;
      this._mode = value.mode;
      this._schemaRegistry.internalValue = value.schemaRegistry;
      this._security.internalValue = value.security;
      this._topics.internalValue = value.topics;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new GatewayPluginKafkaConsumeConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginKafkaConsumeConfigAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // auto_offset_reset - computed: true, optional: true, required: false
  private _autoOffsetReset?: string; 
  public get autoOffsetReset() {
    return this.getStringAttribute('auto_offset_reset');
  }
  public set autoOffsetReset(value: string) {
    this._autoOffsetReset = value;
  }
  public resetAutoOffsetReset() {
    this._autoOffsetReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoOffsetResetInput() {
    return this._autoOffsetReset;
  }

  // bootstrap_servers - computed: false, optional: false, required: true
  private _bootstrapServers = new GatewayPluginKafkaConsumeConfigBootstrapServersList(this, "bootstrap_servers", false);
  public get bootstrapServers() {
    return this._bootstrapServers;
  }
  public putBootstrapServers(value: GatewayPluginKafkaConsumeConfigBootstrapServers[] | cdktf.IResolvable) {
    this._bootstrapServers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapServersInput() {
    return this._bootstrapServers.internalValue;
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // commit_strategy - computed: true, optional: true, required: false
  private _commitStrategy?: string; 
  public get commitStrategy() {
    return this.getStringAttribute('commit_strategy');
  }
  public set commitStrategy(value: string) {
    this._commitStrategy = value;
  }
  public resetCommitStrategy() {
    this._commitStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commitStrategyInput() {
    return this._commitStrategy;
  }

  // dlq_topic - computed: false, optional: true, required: false
  private _dlqTopic?: string; 
  public get dlqTopic() {
    return this.getStringAttribute('dlq_topic');
  }
  public set dlqTopic(value: string) {
    this._dlqTopic = value;
  }
  public resetDlqTopic() {
    this._dlqTopic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlqTopicInput() {
    return this._dlqTopic;
  }

  // enable_dlq - computed: false, optional: true, required: false
  private _enableDlq?: boolean | cdktf.IResolvable; 
  public get enableDlq() {
    return this.getBooleanAttribute('enable_dlq');
  }
  public set enableDlq(value: boolean | cdktf.IResolvable) {
    this._enableDlq = value;
  }
  public resetEnableDlq() {
    this._enableDlq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDlqInput() {
    return this._enableDlq;
  }

  // message_by_lua_functions - computed: false, optional: true, required: false
  private _messageByLuaFunctions?: string[]; 
  public get messageByLuaFunctions() {
    return this.getListAttribute('message_by_lua_functions');
  }
  public set messageByLuaFunctions(value: string[]) {
    this._messageByLuaFunctions = value;
  }
  public resetMessageByLuaFunctions() {
    this._messageByLuaFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageByLuaFunctionsInput() {
    return this._messageByLuaFunctions;
  }

  // message_deserializer - computed: true, optional: true, required: false
  private _messageDeserializer?: string; 
  public get messageDeserializer() {
    return this.getStringAttribute('message_deserializer');
  }
  public set messageDeserializer(value: string) {
    this._messageDeserializer = value;
  }
  public resetMessageDeserializer() {
    this._messageDeserializer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDeserializerInput() {
    return this._messageDeserializer;
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

  // schema_registry - computed: true, optional: true, required: false
  private _schemaRegistry = new GatewayPluginKafkaConsumeConfigSchemaRegistryOutputReference(this, "schema_registry");
  public get schemaRegistry() {
    return this._schemaRegistry;
  }
  public putSchemaRegistry(value: GatewayPluginKafkaConsumeConfigSchemaRegistry) {
    this._schemaRegistry.internalValue = value;
  }
  public resetSchemaRegistry() {
    this._schemaRegistry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaRegistryInput() {
    return this._schemaRegistry.internalValue;
  }

  // security - computed: true, optional: true, required: false
  private _security = new GatewayPluginKafkaConsumeConfigSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: GatewayPluginKafkaConsumeConfigSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
  }

  // topics - computed: false, optional: false, required: true
  private _topics = new GatewayPluginKafkaConsumeConfigTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }
  public putTopics(value: GatewayPluginKafkaConsumeConfigTopics[] | cdktf.IResolvable) {
    this._topics.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsInput() {
    return this._topics.internalValue;
  }
}
export interface GatewayPluginKafkaConsumeConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#id GatewayPluginKafkaConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginKafkaConsumeConsumerToTerraform(struct?: GatewayPluginKafkaConsumeConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginKafkaConsumeConsumerToHclTerraform(struct?: GatewayPluginKafkaConsumeConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeConsumer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeConsumer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}
export interface GatewayPluginKafkaConsumeOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#access GatewayPluginKafkaConsume#access}
  */
  readonly access?: string[];
}

export function gatewayPluginKafkaConsumeOrderingAfterToTerraform(struct?: GatewayPluginKafkaConsumeOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginKafkaConsumeOrderingAfterToHclTerraform(struct?: GatewayPluginKafkaConsumeOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeOrderingAfter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeOrderingAfter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginKafkaConsumeOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#access GatewayPluginKafkaConsume#access}
  */
  readonly access?: string[];
}

export function gatewayPluginKafkaConsumeOrderingBeforeToTerraform(struct?: GatewayPluginKafkaConsumeOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginKafkaConsumeOrderingBeforeToHclTerraform(struct?: GatewayPluginKafkaConsumeOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.access),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeOrderingBefore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeOrderingBefore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._access = value.access;
    }
  }

  // access - computed: true, optional: true, required: false
  private _access?: string[]; 
  public get access() {
    return this.getListAttribute('access');
  }
  public set access(value: string[]) {
    this._access = value;
  }
  public resetAccess() {
    this._access = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
  }
}
export interface GatewayPluginKafkaConsumeOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#after GatewayPluginKafkaConsume#after}
  */
  readonly after?: GatewayPluginKafkaConsumeOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#before GatewayPluginKafkaConsume#before}
  */
  readonly before?: GatewayPluginKafkaConsumeOrderingBefore;
}

export function gatewayPluginKafkaConsumeOrderingToTerraform(struct?: GatewayPluginKafkaConsumeOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginKafkaConsumeOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginKafkaConsumeOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginKafkaConsumeOrderingToHclTerraform(struct?: GatewayPluginKafkaConsumeOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginKafkaConsumeOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeOrderingAfter",
    },
    before: {
      value: gatewayPluginKafkaConsumeOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaConsumeOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeOrdering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._after?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.after = this._after?.internalValue;
    }
    if (this._before?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.before = this._before?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeOrdering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._after.internalValue = undefined;
      this._before.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._after.internalValue = value.after;
      this._before.internalValue = value.before;
    }
  }

  // after - computed: true, optional: true, required: false
  private _after = new GatewayPluginKafkaConsumeOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginKafkaConsumeOrderingAfter) {
    this._after.internalValue = value;
  }
  public resetAfter() {
    this._after.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after.internalValue;
  }

  // before - computed: true, optional: true, required: false
  private _before = new GatewayPluginKafkaConsumeOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginKafkaConsumeOrderingBefore) {
    this._before.internalValue = value;
  }
  public resetBefore() {
    this._before.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beforeInput() {
    return this._before.internalValue;
  }
}
export interface GatewayPluginKafkaConsumePartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#id GatewayPluginKafkaConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#name GatewayPluginKafkaConsume#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#path GatewayPluginKafkaConsume#path}
  */
  readonly path?: string;
}

export function gatewayPluginKafkaConsumePartialsToTerraform(struct?: GatewayPluginKafkaConsumePartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function gatewayPluginKafkaConsumePartialsToHclTerraform(struct?: GatewayPluginKafkaConsumePartials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumePartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginKafkaConsumePartials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumePartials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
      this._path = value.path;
    }
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class GatewayPluginKafkaConsumePartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginKafkaConsumePartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginKafkaConsumePartialsOutputReference {
    return new GatewayPluginKafkaConsumePartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginKafkaConsumeRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#id GatewayPluginKafkaConsume#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginKafkaConsumeRouteToTerraform(struct?: GatewayPluginKafkaConsumeRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginKafkaConsumeRouteToHclTerraform(struct?: GatewayPluginKafkaConsumeRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaConsumeRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaConsumeRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaConsumeRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume konnect_gateway_plugin_kafka_consume}
*/
export class GatewayPluginKafkaConsume extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_kafka_consume";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginKafkaConsume resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginKafkaConsume to import
  * @param importFromId The id of the existing GatewayPluginKafkaConsume that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginKafkaConsume to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_kafka_consume", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_kafka_consume konnect_gateway_plugin_kafka_consume} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginKafkaConsumeConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginKafkaConsumeConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_kafka_consume',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config.internalValue = config.config;
    this._consumer.internalValue = config.consumer;
    this._controlPlaneId = config.controlPlaneId;
    this._createdAt = config.createdAt;
    this._enabled = config.enabled;
    this._id = config.id;
    this._instanceName = config.instanceName;
    this._ordering.internalValue = config.ordering;
    this._partials.internalValue = config.partials;
    this._protocols = config.protocols;
    this._route.internalValue = config.route;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginKafkaConsumeConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginKafkaConsumeConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginKafkaConsumeConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginKafkaConsumeConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // control_plane_id - computed: false, optional: false, required: true
  private _controlPlaneId?: string; 
  public get controlPlaneId() {
    return this.getStringAttribute('control_plane_id');
  }
  public set controlPlaneId(value: string) {
    this._controlPlaneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlPlaneIdInput() {
    return this._controlPlaneId;
  }

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: number; 
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }
  public set createdAt(value: number) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // instance_name - computed: false, optional: true, required: false
  private _instanceName?: string; 
  public get instanceName() {
    return this.getStringAttribute('instance_name');
  }
  public set instanceName(value: string) {
    this._instanceName = value;
  }
  public resetInstanceName() {
    this._instanceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceNameInput() {
    return this._instanceName;
  }

  // ordering - computed: true, optional: true, required: false
  private _ordering = new GatewayPluginKafkaConsumeOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginKafkaConsumeOrdering) {
    this._ordering.internalValue = value;
  }
  public resetOrdering() {
    this._ordering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderingInput() {
    return this._ordering.internalValue;
  }

  // partials - computed: false, optional: true, required: false
  private _partials = new GatewayPluginKafkaConsumePartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginKafkaConsumePartials[] | cdktf.IResolvable) {
    this._partials.internalValue = value;
  }
  public resetPartials() {
    this._partials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialsInput() {
    return this._partials.internalValue;
  }

  // protocols - computed: true, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // route - computed: true, optional: true, required: false
  private _route = new GatewayPluginKafkaConsumeRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginKafkaConsumeRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: number; 
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }
  public set updatedAt(value: number) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: gatewayPluginKafkaConsumeConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginKafkaConsumeConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginKafkaConsumeOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginKafkaConsumePartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginKafkaConsumeRouteToTerraform(this._route.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginKafkaConsumeConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaConsumeConfigA",
      },
      consumer: {
        value: gatewayPluginKafkaConsumeConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaConsumeConsumer",
      },
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_at: {
        value: cdktf.numberToHclTerraform(this._createdAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      instance_name: {
        value: cdktf.stringToHclTerraform(this._instanceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ordering: {
        value: gatewayPluginKafkaConsumeOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaConsumeOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginKafkaConsumePartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginKafkaConsumePartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginKafkaConsumeRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaConsumeRoute",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      updated_at: {
        value: cdktf.numberToHclTerraform(this._updatedAt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
