// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginKafkaUpstreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#config GatewayPluginKafkaUpstream#config}
  */
  readonly config: GatewayPluginKafkaUpstreamConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#consumer GatewayPluginKafkaUpstream#consumer}
  */
  readonly consumer?: GatewayPluginKafkaUpstreamConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#control_plane_id GatewayPluginKafkaUpstream#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#created_at GatewayPluginKafkaUpstream#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#enabled GatewayPluginKafkaUpstream#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#id GatewayPluginKafkaUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#instance_name GatewayPluginKafkaUpstream#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#ordering GatewayPluginKafkaUpstream#ordering}
  */
  readonly ordering?: GatewayPluginKafkaUpstreamOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#partials GatewayPluginKafkaUpstream#partials}
  */
  readonly partials?: GatewayPluginKafkaUpstreamPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#protocols GatewayPluginKafkaUpstream#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#route GatewayPluginKafkaUpstream#route}
  */
  readonly route?: GatewayPluginKafkaUpstreamRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#service GatewayPluginKafkaUpstream#service}
  */
  readonly service?: GatewayPluginKafkaUpstreamService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#tags GatewayPluginKafkaUpstream#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#updated_at GatewayPluginKafkaUpstream#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginKafkaUpstreamConfigAuthentication {
  /**
  * The SASL authentication mechanism.  Supported options: `PLAIN`, `SCRAM-SHA-256`, or `SCRAM-SHA-512`. must be one of ["PLAIN", "SCRAM-SHA-256", "SCRAM-SHA-512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#mechanism GatewayPluginKafkaUpstream#mechanism}
  */
  readonly mechanism?: string;
  /**
  * Password for SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#password GatewayPluginKafkaUpstream#password}
  */
  readonly password?: string;
  /**
  * The authentication strategy for the plugin, the only option for the value is `sasl`. must be "sasl"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#strategy GatewayPluginKafkaUpstream#strategy}
  */
  readonly strategy?: string;
  /**
  * Enable this to indicate `DelegationToken` authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#tokenauth GatewayPluginKafkaUpstream#tokenauth}
  */
  readonly tokenauth?: boolean | cdktf.IResolvable;
  /**
  * Username for SASL authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#user GatewayPluginKafkaUpstream#user}
  */
  readonly user?: string;
}

export function gatewayPluginKafkaUpstreamConfigAuthenticationToTerraform(struct?: GatewayPluginKafkaUpstreamConfigAuthentication | cdktf.IResolvable): any {
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


export function gatewayPluginKafkaUpstreamConfigAuthenticationToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigAuthentication | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamConfigAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigAuthentication | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginKafkaUpstreamConfigBootstrapServers {
  /**
  * A string representing a host name, such as example.com. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#host GatewayPluginKafkaUpstream#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#port GatewayPluginKafkaUpstream#port}
  */
  readonly port?: number;
}

export function gatewayPluginKafkaUpstreamConfigBootstrapServersToTerraform(struct?: GatewayPluginKafkaUpstreamConfigBootstrapServers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginKafkaUpstreamConfigBootstrapServersToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigBootstrapServers | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamConfigBootstrapServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginKafkaUpstreamConfigBootstrapServers | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigBootstrapServers | cdktf.IResolvable | undefined) {
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

export class GatewayPluginKafkaUpstreamConfigBootstrapServersList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginKafkaUpstreamConfigBootstrapServers[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginKafkaUpstreamConfigBootstrapServersOutputReference {
    return new GatewayPluginKafkaUpstreamConfigBootstrapServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#password GatewayPluginKafkaUpstream#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#username GatewayPluginKafkaUpstream#username}
  */
  readonly username: string;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasicToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasicToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic | cdktf.IResolvable | undefined) {
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

  // password - computed: true, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: true, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2 {
  /**
  * List of audiences passed to the IdP when obtaining a new token. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#audience GatewayPluginKafkaUpstream#audience}
  */
  readonly audience?: string[];
  /**
  * The client ID for the application registration in the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#client_id GatewayPluginKafkaUpstream#client_id}
  */
  readonly clientId?: string;
  /**
  * The client secret for the application registration in the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#client_secret GatewayPluginKafkaUpstream#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * The OAuth grant type to be used. Default: "client_credentials"; must be one of ["client_credentials", "password"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#grant_type GatewayPluginKafkaUpstream#grant_type}
  */
  readonly grantType?: string;
  /**
  * The password to use if `config.oauth.grant_type` is set to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#password GatewayPluginKafkaUpstream#password}
  */
  readonly password?: string;
  /**
  * List of scopes to request from the IdP when obtaining a new token. Default: ["openid"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#scopes GatewayPluginKafkaUpstream#scopes}
  */
  readonly scopes?: string[];
  /**
  * The token endpoint URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#token_endpoint GatewayPluginKafkaUpstream#token_endpoint}
  */
  readonly tokenEndpoint: string;
  /**
  * Extra headers to be passed in the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#token_headers GatewayPluginKafkaUpstream#token_headers}
  */
  readonly tokenHeaders?: { [key: string]: string };
  /**
  * Extra post arguments to be passed in the token endpoint request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#token_post_args GatewayPluginKafkaUpstream#token_post_args}
  */
  readonly tokenPostArgs?: { [key: string]: string };
  /**
  * The username to use if `config.oauth.grant_type` is set to `password`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#username GatewayPluginKafkaUpstream#username}
  */
  readonly username?: string;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable): any {
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


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2 | cdktf.IResolvable | undefined) {
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

  // token_endpoint - computed: true, optional: false, required: true
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
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
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client {
  /**
  * The authentication method used in client requests to the IdP. Supported values are: `client_secret_basic` to send `client_id` and `client_secret` in the `Authorization: Basic` header, `client_secret_post` to send `client_id` and `client_secret` as part of the request body, or `client_secret_jwt` to send a JWT signed with the `client_secret` using the client assertion as part of the body. Default: "client_secret_post"; must be one of ["client_secret_basic", "client_secret_jwt", "client_secret_post", "none"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#auth_method GatewayPluginKafkaUpstream#auth_method}
  */
  readonly authMethod?: string;
  /**
  * The algorithm to use with JWT when using `client_secret_jwt` authentication. Default: "HS512"; must be one of ["HS256", "HS512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#client_secret_jwt_alg GatewayPluginKafkaUpstream#client_secret_jwt_alg}
  */
  readonly clientSecretJwtAlg?: string;
  /**
  * The proxy to use when making HTTP requests to the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#http_proxy GatewayPluginKafkaUpstream#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The `Proxy-Authorization` header value to be used with `http_proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#http_proxy_authorization GatewayPluginKafkaUpstream#http_proxy_authorization}
  */
  readonly httpProxyAuthorization?: string;
  /**
  * The HTTP version used for requests made by this plugin. Supported values: `1.1` for HTTP 1.1 and `1.0` for HTTP 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#http_version GatewayPluginKafkaUpstream#http_version}
  */
  readonly httpVersion?: number;
  /**
  * The proxy to use when making HTTPS requests to the IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#https_proxy GatewayPluginKafkaUpstream#https_proxy}
  */
  readonly httpsProxy?: string;
  /**
  * The `Proxy-Authorization` header value to be used with `https_proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#https_proxy_authorization GatewayPluginKafkaUpstream#https_proxy_authorization}
  */
  readonly httpsProxyAuthorization?: string;
  /**
  * Whether to use keepalive connections to the IdP. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#keep_alive GatewayPluginKafkaUpstream#keep_alive}
  */
  readonly keepAlive?: boolean | cdktf.IResolvable;
  /**
  * A comma-separated list of hosts that should not be proxied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#no_proxy GatewayPluginKafkaUpstream#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Whether to verify the certificate presented by the IdP when using HTTPS. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#ssl_verify GatewayPluginKafkaUpstream#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Network I/O timeout for requests to the IdP in milliseconds. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#timeout GatewayPluginKafkaUpstream#timeout}
  */
  readonly timeout?: number;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ClientToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable): any {
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


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ClientToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ClientOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#basic GatewayPluginKafkaUpstream#basic}
  */
  readonly basic?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic;
  /**
  * Authentication mode to use with the schema registry. Default: "none"; must be one of ["basic", "none", "oauth2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#mode GatewayPluginKafkaUpstream#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#oauth2 GatewayPluginKafkaUpstream#oauth2}
  */
  readonly oauth2?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#oauth2_client GatewayPluginKafkaUpstream#oauth2_client}
  */
  readonly oauth2Client?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasicToTerraform(struct!.basic),
    mode: cdktf.stringToTerraform(struct!.mode),
    oauth2: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ToTerraform(struct!.oauth2),
    oauth2_client: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ClientToTerraform(struct!.oauth2Client),
  }
}


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oauth2: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ToHclTerraform(struct!.oauth2),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2",
    },
    oauth2_client: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ClientToHclTerraform(struct!.oauth2Client),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication | cdktf.IResolvable | undefined) {
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
  private _basic = new GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationBasic) {
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
  private _oauth2 = new GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2OutputReference(this, "oauth2");
  public get oauth2() {
    return this._oauth2;
  }
  public putOauth2(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2) {
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
  private _oauth2Client = new GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2ClientOutputReference(this, "oauth2_client");
  public get oauth2Client() {
    return this._oauth2Client;
  }
  public putOauth2Client(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOauth2Client) {
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
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema {
  /**
  * The schema version to use for serialization/deserialization. Use 'latest' to always fetch the most recent version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#schema_version GatewayPluginKafkaUpstream#schema_version}
  */
  readonly schemaVersion?: string;
  /**
  * The name of the subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#subject_name GatewayPluginKafkaUpstream#subject_name}
  */
  readonly subjectName?: string;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchemaToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_version: cdktf.stringToTerraform(struct!.schemaVersion),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
  }
}


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchemaToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_version: {
      value: cdktf.stringToHclTerraform(struct!.schemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersion = this._schemaVersion;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaVersion = undefined;
      this._subjectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaVersion = value.schemaVersion;
      this._subjectName = value.subjectName;
    }
  }

  // schema_version - computed: true, optional: true, required: false
  private _schemaVersion?: string; 
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }
  public set schemaVersion(value: string) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // subject_name - computed: true, optional: true, required: false
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  public resetSubjectName() {
    this._subjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }
}
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema {
  /**
  * The schema version to use for serialization/deserialization. Use 'latest' to always fetch the most recent version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#schema_version GatewayPluginKafkaUpstream#schema_version}
  */
  readonly schemaVersion?: string;
  /**
  * The name of the subject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#subject_name GatewayPluginKafkaUpstream#subject_name}
  */
  readonly subjectName?: string;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchemaToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schema_version: cdktf.stringToTerraform(struct!.schemaVersion),
    subject_name: cdktf.stringToTerraform(struct!.subjectName),
  }
}


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchemaToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    schema_version: {
      value: cdktf.stringToHclTerraform(struct!.schemaVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_name: {
      value: cdktf.stringToHclTerraform(struct!.subjectName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchemaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schemaVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaVersion = this._schemaVersion;
    }
    if (this._subjectName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectName = this._subjectName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schemaVersion = undefined;
      this._subjectName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schemaVersion = value.schemaVersion;
      this._subjectName = value.subjectName;
    }
  }

  // schema_version - computed: true, optional: true, required: false
  private _schemaVersion?: string; 
  public get schemaVersion() {
    return this.getStringAttribute('schema_version');
  }
  public set schemaVersion(value: string) {
    this._schemaVersion = value;
  }
  public resetSchemaVersion() {
    this._schemaVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaVersionInput() {
    return this._schemaVersion;
  }

  // subject_name - computed: true, optional: true, required: false
  private _subjectName?: string; 
  public get subjectName() {
    return this.getStringAttribute('subject_name');
  }
  public set subjectName(value: string) {
    this._subjectName = value;
  }
  public resetSubjectName() {
    this._subjectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectNameInput() {
    return this._subjectName;
  }
}
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#authentication GatewayPluginKafkaUpstream#authentication}
  */
  readonly authentication?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#key_schema GatewayPluginKafkaUpstream#key_schema}
  */
  readonly keySchema?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema;
  /**
  * Set to false to disable SSL certificate verification when connecting to the schema registry. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#ssl_verify GatewayPluginKafkaUpstream#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * The TTL in seconds for the schema registry cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#ttl GatewayPluginKafkaUpstream#ttl}
  */
  readonly ttl?: number;
  /**
  * The URL of the schema registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#url GatewayPluginKafkaUpstream#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#value_schema GatewayPluginKafkaUpstream#value_schema}
  */
  readonly valueSchema?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationToTerraform(struct!.authentication),
    key_schema: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchemaToTerraform(struct!.keySchema),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    ttl: cdktf.numberToTerraform(struct!.ttl),
    url: cdktf.stringToTerraform(struct!.url),
    value_schema: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchemaToTerraform(struct!.valueSchema),
  }
}


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication",
    },
    key_schema: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchemaToHclTerraform(struct!.keySchema),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema",
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
    value_schema: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchemaToHclTerraform(struct!.valueSchema),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._keySchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySchema = this._keySchema?.internalValue;
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
    if (this._valueSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSchema = this._valueSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication.internalValue = undefined;
      this._keySchema.internalValue = undefined;
      this._sslVerify = undefined;
      this._ttl = undefined;
      this._url = undefined;
      this._valueSchema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication.internalValue = value.authentication;
      this._keySchema.internalValue = value.keySchema;
      this._sslVerify = value.sslVerify;
      this._ttl = value.ttl;
      this._url = value.url;
      this._valueSchema.internalValue = value.valueSchema;
    }
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // key_schema - computed: true, optional: true, required: false
  private _keySchema = new GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchemaOutputReference(this, "key_schema");
  public get keySchema() {
    return this._keySchema;
  }
  public putKeySchema(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentKeySchema) {
    this._keySchema.internalValue = value;
  }
  public resetKeySchema() {
    this._keySchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySchemaInput() {
    return this._keySchema.internalValue;
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

  // value_schema - computed: true, optional: true, required: false
  private _valueSchema = new GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchemaOutputReference(this, "value_schema");
  public get valueSchema() {
    return this._valueSchema;
  }
  public putValueSchema(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentValueSchema) {
    this._valueSchema.internalValue = value;
  }
  public resetValueSchema() {
    this._valueSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSchemaInput() {
    return this._valueSchema.internalValue;
  }
}
export interface GatewayPluginKafkaUpstreamConfigSchemaRegistry {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#confluent GatewayPluginKafkaUpstream#confluent}
  */
  readonly confluent?: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent;
}

export function gatewayPluginKafkaUpstreamConfigSchemaRegistryToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confluent: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentToTerraform(struct!.confluent),
  }
}


export function gatewayPluginKafkaUpstreamConfigSchemaRegistryToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSchemaRegistry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confluent: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentToHclTerraform(struct!.confluent),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaUpstreamConfigSchemaRegistryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSchemaRegistry | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSchemaRegistry | cdktf.IResolvable | undefined) {
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
  private _confluent = new GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluentOutputReference(this, "confluent");
  public get confluent() {
    return this._confluent;
  }
  public putConfluent(value: GatewayPluginKafkaUpstreamConfigSchemaRegistryConfluent) {
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
export interface GatewayPluginKafkaUpstreamConfigSecurity {
  /**
  * UUID of certificate entity for mTLS authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#certificate_id GatewayPluginKafkaUpstream#certificate_id}
  */
  readonly certificateId?: string;
  /**
  * Enables TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#ssl GatewayPluginKafkaUpstream#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
}

export function gatewayPluginKafkaUpstreamConfigSecurityToTerraform(struct?: GatewayPluginKafkaUpstreamConfigSecurity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_id: cdktf.stringToTerraform(struct!.certificateId),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
  }
}


export function gatewayPluginKafkaUpstreamConfigSecurityToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigSecurity | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamConfigSecurityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigSecurity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigSecurity | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginKafkaUpstreamConfigA {
  /**
  * The list of allowed topic names to which messages can be sent. The default topic configured in the `topic` field is always allowed, regardless of its inclusion in `allowed_topics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#allowed_topics GatewayPluginKafkaUpstream#allowed_topics}
  */
  readonly allowedTopics?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#authentication GatewayPluginKafkaUpstream#authentication}
  */
  readonly authentication?: GatewayPluginKafkaUpstreamConfigAuthentication;
  /**
  * Set of bootstrap brokers in a `{host: host, port: port}` list format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#bootstrap_servers GatewayPluginKafkaUpstream#bootstrap_servers}
  */
  readonly bootstrapServers?: GatewayPluginKafkaUpstreamConfigBootstrapServers[] | cdktf.IResolvable;
  /**
  * An identifier for the Kafka cluster. By default, this field generates a random string. You can also set your own custom cluster identifier.  If more than one Kafka plugin is configured without a `cluster_name` (that is, if the default autogenerated value is removed), these plugins will use the same producer, and by extension, the same cluster. Logs will be sent to the leader of the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#cluster_name GatewayPluginKafkaUpstream#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * Include the request body in the message. At least one of these must be true: `forward_method`, `forward_uri`, `forward_headers`, `forward_body`. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#forward_body GatewayPluginKafkaUpstream#forward_body}
  */
  readonly forwardBody?: boolean | cdktf.IResolvable;
  /**
  * Include the request headers in the message. At least one of these must be true: `forward_method`, `forward_uri`, `forward_headers`, `forward_body`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#forward_headers GatewayPluginKafkaUpstream#forward_headers}
  */
  readonly forwardHeaders?: boolean | cdktf.IResolvable;
  /**
  * Include the request method in the message. At least one of these must be true: `forward_method`, `forward_uri`, `forward_headers`, `forward_body`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#forward_method GatewayPluginKafkaUpstream#forward_method}
  */
  readonly forwardMethod?: boolean | cdktf.IResolvable;
  /**
  * Include the request URI and URI arguments (as in, query arguments) in the message. At least one of these must be true: `forward_method`, `forward_uri`, `forward_headers`, `forward_body`. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#forward_uri GatewayPluginKafkaUpstream#forward_uri}
  */
  readonly forwardUri?: boolean | cdktf.IResolvable;
  /**
  * Keepalive timeout in milliseconds. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#keepalive GatewayPluginKafkaUpstream#keepalive}
  */
  readonly keepalive?: number;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#keepalive_enabled GatewayPluginKafkaUpstream#keepalive_enabled}
  */
  readonly keepaliveEnabled?: boolean | cdktf.IResolvable;
  /**
  * The request query parameter name that contains the Kafka message key. If specified, messages with the same key will be sent to the same Kafka partition, ensuring consistent ordering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#key_query_arg GatewayPluginKafkaUpstream#key_query_arg}
  */
  readonly keyQueryArg?: string;
  /**
  * The Lua functions that manipulates the message being sent to the Kafka topic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#message_by_lua_functions GatewayPluginKafkaUpstream#message_by_lua_functions}
  */
  readonly messageByLuaFunctions?: string[];
  /**
  * Flag to enable asynchronous mode. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_async GatewayPluginKafkaUpstream#producer_async}
  */
  readonly producerAsync?: boolean | cdktf.IResolvable;
  /**
  * Maximum number of messages that can be buffered in memory in asynchronous mode. Default: 50000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_async_buffering_limits_messages_in_memory GatewayPluginKafkaUpstream#producer_async_buffering_limits_messages_in_memory}
  */
  readonly producerAsyncBufferingLimitsMessagesInMemory?: number;
  /**
  * Maximum time interval in milliseconds between buffer flushes in asynchronous mode. Default: 1000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_async_flush_timeout GatewayPluginKafkaUpstream#producer_async_flush_timeout}
  */
  readonly producerAsyncFlushTimeout?: number;
  /**
  * The number of acknowledgments the producer requires the leader to have received before considering a request complete. Allowed values: 0 for no acknowledgments; 1 for only the leader; and -1 for the full ISR (In-Sync Replica set). Default: 1; must be one of ["-1", "0", "1"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_request_acks GatewayPluginKafkaUpstream#producer_request_acks}
  */
  readonly producerRequestAcks?: number;
  /**
  * Maximum size of a Produce request in bytes. Default: 1048576
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_request_limits_bytes_per_request GatewayPluginKafkaUpstream#producer_request_limits_bytes_per_request}
  */
  readonly producerRequestLimitsBytesPerRequest?: number;
  /**
  * Maximum number of messages to include into a single producer request. Default: 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_request_limits_messages_per_request GatewayPluginKafkaUpstream#producer_request_limits_messages_per_request}
  */
  readonly producerRequestLimitsMessagesPerRequest?: number;
  /**
  * Backoff interval between retry attempts in milliseconds. Default: 100
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_request_retries_backoff_timeout GatewayPluginKafkaUpstream#producer_request_retries_backoff_timeout}
  */
  readonly producerRequestRetriesBackoffTimeout?: number;
  /**
  * Maximum number of retry attempts per single Produce request. Default: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_request_retries_max_attempts GatewayPluginKafkaUpstream#producer_request_retries_max_attempts}
  */
  readonly producerRequestRetriesMaxAttempts?: number;
  /**
  * Time to wait for a Produce response in milliseconds. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#producer_request_timeout GatewayPluginKafkaUpstream#producer_request_timeout}
  */
  readonly producerRequestTimeout?: number;
  /**
  * The plugin-global schema registry configuration. This can be overwritten by the topic configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#schema_registry GatewayPluginKafkaUpstream#schema_registry}
  */
  readonly schemaRegistry?: GatewayPluginKafkaUpstreamConfigSchemaRegistry;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#security GatewayPluginKafkaUpstream#security}
  */
  readonly security?: GatewayPluginKafkaUpstreamConfigSecurity;
  /**
  * Socket timeout in milliseconds. Default: 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#timeout GatewayPluginKafkaUpstream#timeout}
  */
  readonly timeout?: number;
  /**
  * The default Kafka topic to publish to if the query parameter defined in the `topics_query_arg` does not exist in the request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#topic GatewayPluginKafkaUpstream#topic}
  */
  readonly topic: string;
  /**
  * The request query parameter name that contains the topics to publish to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#topics_query_arg GatewayPluginKafkaUpstream#topics_query_arg}
  */
  readonly topicsQueryArg?: string;
}

export function gatewayPluginKafkaUpstreamConfigAToTerraform(struct?: GatewayPluginKafkaUpstreamConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_topics: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedTopics),
    authentication: gatewayPluginKafkaUpstreamConfigAuthenticationToTerraform(struct!.authentication),
    bootstrap_servers: cdktf.listMapper(gatewayPluginKafkaUpstreamConfigBootstrapServersToTerraform, false)(struct!.bootstrapServers),
    cluster_name: cdktf.stringToTerraform(struct!.clusterName),
    forward_body: cdktf.booleanToTerraform(struct!.forwardBody),
    forward_headers: cdktf.booleanToTerraform(struct!.forwardHeaders),
    forward_method: cdktf.booleanToTerraform(struct!.forwardMethod),
    forward_uri: cdktf.booleanToTerraform(struct!.forwardUri),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    keepalive_enabled: cdktf.booleanToTerraform(struct!.keepaliveEnabled),
    key_query_arg: cdktf.stringToTerraform(struct!.keyQueryArg),
    message_by_lua_functions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.messageByLuaFunctions),
    producer_async: cdktf.booleanToTerraform(struct!.producerAsync),
    producer_async_buffering_limits_messages_in_memory: cdktf.numberToTerraform(struct!.producerAsyncBufferingLimitsMessagesInMemory),
    producer_async_flush_timeout: cdktf.numberToTerraform(struct!.producerAsyncFlushTimeout),
    producer_request_acks: cdktf.numberToTerraform(struct!.producerRequestAcks),
    producer_request_limits_bytes_per_request: cdktf.numberToTerraform(struct!.producerRequestLimitsBytesPerRequest),
    producer_request_limits_messages_per_request: cdktf.numberToTerraform(struct!.producerRequestLimitsMessagesPerRequest),
    producer_request_retries_backoff_timeout: cdktf.numberToTerraform(struct!.producerRequestRetriesBackoffTimeout),
    producer_request_retries_max_attempts: cdktf.numberToTerraform(struct!.producerRequestRetriesMaxAttempts),
    producer_request_timeout: cdktf.numberToTerraform(struct!.producerRequestTimeout),
    schema_registry: gatewayPluginKafkaUpstreamConfigSchemaRegistryToTerraform(struct!.schemaRegistry),
    security: gatewayPluginKafkaUpstreamConfigSecurityToTerraform(struct!.security),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    topic: cdktf.stringToTerraform(struct!.topic),
    topics_query_arg: cdktf.stringToTerraform(struct!.topicsQueryArg),
  }
}


export function gatewayPluginKafkaUpstreamConfigAToHclTerraform(struct?: GatewayPluginKafkaUpstreamConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_topics: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedTopics),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    authentication: {
      value: gatewayPluginKafkaUpstreamConfigAuthenticationToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigAuthentication",
    },
    bootstrap_servers: {
      value: cdktf.listMapperHcl(gatewayPluginKafkaUpstreamConfigBootstrapServersToHclTerraform, false)(struct!.bootstrapServers),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginKafkaUpstreamConfigBootstrapServersList",
    },
    cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.clusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_body: {
      value: cdktf.booleanToHclTerraform(struct!.forwardBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_headers: {
      value: cdktf.booleanToHclTerraform(struct!.forwardHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_method: {
      value: cdktf.booleanToHclTerraform(struct!.forwardMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_uri: {
      value: cdktf.booleanToHclTerraform(struct!.forwardUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive: {
      value: cdktf.numberToHclTerraform(struct!.keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.keepaliveEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_query_arg: {
      value: cdktf.stringToHclTerraform(struct!.keyQueryArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_by_lua_functions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.messageByLuaFunctions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    producer_async: {
      value: cdktf.booleanToHclTerraform(struct!.producerAsync),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    producer_async_buffering_limits_messages_in_memory: {
      value: cdktf.numberToHclTerraform(struct!.producerAsyncBufferingLimitsMessagesInMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_async_flush_timeout: {
      value: cdktf.numberToHclTerraform(struct!.producerAsyncFlushTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_request_acks: {
      value: cdktf.numberToHclTerraform(struct!.producerRequestAcks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_request_limits_bytes_per_request: {
      value: cdktf.numberToHclTerraform(struct!.producerRequestLimitsBytesPerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_request_limits_messages_per_request: {
      value: cdktf.numberToHclTerraform(struct!.producerRequestLimitsMessagesPerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_request_retries_backoff_timeout: {
      value: cdktf.numberToHclTerraform(struct!.producerRequestRetriesBackoffTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_request_retries_max_attempts: {
      value: cdktf.numberToHclTerraform(struct!.producerRequestRetriesMaxAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    producer_request_timeout: {
      value: cdktf.numberToHclTerraform(struct!.producerRequestTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schema_registry: {
      value: gatewayPluginKafkaUpstreamConfigSchemaRegistryToHclTerraform(struct!.schemaRegistry),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSchemaRegistry",
    },
    security: {
      value: gatewayPluginKafkaUpstreamConfigSecurityToHclTerraform(struct!.security),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamConfigSecurity",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topics_query_arg: {
      value: cdktf.stringToHclTerraform(struct!.topicsQueryArg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaUpstreamConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedTopics !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedTopics = this._allowedTopics;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._bootstrapServers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrapServers = this._bootstrapServers?.internalValue;
    }
    if (this._clusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterName = this._clusterName;
    }
    if (this._forwardBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardBody = this._forwardBody;
    }
    if (this._forwardHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardHeaders = this._forwardHeaders;
    }
    if (this._forwardMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardMethod = this._forwardMethod;
    }
    if (this._forwardUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardUri = this._forwardUri;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._keepaliveEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveEnabled = this._keepaliveEnabled;
    }
    if (this._keyQueryArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyQueryArg = this._keyQueryArg;
    }
    if (this._messageByLuaFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageByLuaFunctions = this._messageByLuaFunctions;
    }
    if (this._producerAsync !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerAsync = this._producerAsync;
    }
    if (this._producerAsyncBufferingLimitsMessagesInMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerAsyncBufferingLimitsMessagesInMemory = this._producerAsyncBufferingLimitsMessagesInMemory;
    }
    if (this._producerAsyncFlushTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerAsyncFlushTimeout = this._producerAsyncFlushTimeout;
    }
    if (this._producerRequestAcks !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerRequestAcks = this._producerRequestAcks;
    }
    if (this._producerRequestLimitsBytesPerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerRequestLimitsBytesPerRequest = this._producerRequestLimitsBytesPerRequest;
    }
    if (this._producerRequestLimitsMessagesPerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerRequestLimitsMessagesPerRequest = this._producerRequestLimitsMessagesPerRequest;
    }
    if (this._producerRequestRetriesBackoffTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerRequestRetriesBackoffTimeout = this._producerRequestRetriesBackoffTimeout;
    }
    if (this._producerRequestRetriesMaxAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerRequestRetriesMaxAttempts = this._producerRequestRetriesMaxAttempts;
    }
    if (this._producerRequestTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.producerRequestTimeout = this._producerRequestTimeout;
    }
    if (this._schemaRegistry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaRegistry = this._schemaRegistry?.internalValue;
    }
    if (this._security?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security?.internalValue;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    if (this._topicsQueryArg !== undefined) {
      hasAnyValues = true;
      internalValueResult.topicsQueryArg = this._topicsQueryArg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginKafkaUpstreamConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedTopics = undefined;
      this._authentication.internalValue = undefined;
      this._bootstrapServers.internalValue = undefined;
      this._clusterName = undefined;
      this._forwardBody = undefined;
      this._forwardHeaders = undefined;
      this._forwardMethod = undefined;
      this._forwardUri = undefined;
      this._keepalive = undefined;
      this._keepaliveEnabled = undefined;
      this._keyQueryArg = undefined;
      this._messageByLuaFunctions = undefined;
      this._producerAsync = undefined;
      this._producerAsyncBufferingLimitsMessagesInMemory = undefined;
      this._producerAsyncFlushTimeout = undefined;
      this._producerRequestAcks = undefined;
      this._producerRequestLimitsBytesPerRequest = undefined;
      this._producerRequestLimitsMessagesPerRequest = undefined;
      this._producerRequestRetriesBackoffTimeout = undefined;
      this._producerRequestRetriesMaxAttempts = undefined;
      this._producerRequestTimeout = undefined;
      this._schemaRegistry.internalValue = undefined;
      this._security.internalValue = undefined;
      this._timeout = undefined;
      this._topic = undefined;
      this._topicsQueryArg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedTopics = value.allowedTopics;
      this._authentication.internalValue = value.authentication;
      this._bootstrapServers.internalValue = value.bootstrapServers;
      this._clusterName = value.clusterName;
      this._forwardBody = value.forwardBody;
      this._forwardHeaders = value.forwardHeaders;
      this._forwardMethod = value.forwardMethod;
      this._forwardUri = value.forwardUri;
      this._keepalive = value.keepalive;
      this._keepaliveEnabled = value.keepaliveEnabled;
      this._keyQueryArg = value.keyQueryArg;
      this._messageByLuaFunctions = value.messageByLuaFunctions;
      this._producerAsync = value.producerAsync;
      this._producerAsyncBufferingLimitsMessagesInMemory = value.producerAsyncBufferingLimitsMessagesInMemory;
      this._producerAsyncFlushTimeout = value.producerAsyncFlushTimeout;
      this._producerRequestAcks = value.producerRequestAcks;
      this._producerRequestLimitsBytesPerRequest = value.producerRequestLimitsBytesPerRequest;
      this._producerRequestLimitsMessagesPerRequest = value.producerRequestLimitsMessagesPerRequest;
      this._producerRequestRetriesBackoffTimeout = value.producerRequestRetriesBackoffTimeout;
      this._producerRequestRetriesMaxAttempts = value.producerRequestRetriesMaxAttempts;
      this._producerRequestTimeout = value.producerRequestTimeout;
      this._schemaRegistry.internalValue = value.schemaRegistry;
      this._security.internalValue = value.security;
      this._timeout = value.timeout;
      this._topic = value.topic;
      this._topicsQueryArg = value.topicsQueryArg;
    }
  }

  // allowed_topics - computed: false, optional: true, required: false
  private _allowedTopics?: string[]; 
  public get allowedTopics() {
    return this.getListAttribute('allowed_topics');
  }
  public set allowedTopics(value: string[]) {
    this._allowedTopics = value;
  }
  public resetAllowedTopics() {
    this._allowedTopics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedTopicsInput() {
    return this._allowedTopics;
  }

  // authentication - computed: true, optional: true, required: false
  private _authentication = new GatewayPluginKafkaUpstreamConfigAuthenticationOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: GatewayPluginKafkaUpstreamConfigAuthentication) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // bootstrap_servers - computed: false, optional: true, required: false
  private _bootstrapServers = new GatewayPluginKafkaUpstreamConfigBootstrapServersList(this, "bootstrap_servers", false);
  public get bootstrapServers() {
    return this._bootstrapServers;
  }
  public putBootstrapServers(value: GatewayPluginKafkaUpstreamConfigBootstrapServers[] | cdktf.IResolvable) {
    this._bootstrapServers.internalValue = value;
  }
  public resetBootstrapServers() {
    this._bootstrapServers.internalValue = undefined;
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

  // forward_body - computed: true, optional: true, required: false
  private _forwardBody?: boolean | cdktf.IResolvable; 
  public get forwardBody() {
    return this.getBooleanAttribute('forward_body');
  }
  public set forwardBody(value: boolean | cdktf.IResolvable) {
    this._forwardBody = value;
  }
  public resetForwardBody() {
    this._forwardBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardBodyInput() {
    return this._forwardBody;
  }

  // forward_headers - computed: true, optional: true, required: false
  private _forwardHeaders?: boolean | cdktf.IResolvable; 
  public get forwardHeaders() {
    return this.getBooleanAttribute('forward_headers');
  }
  public set forwardHeaders(value: boolean | cdktf.IResolvable) {
    this._forwardHeaders = value;
  }
  public resetForwardHeaders() {
    this._forwardHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardHeadersInput() {
    return this._forwardHeaders;
  }

  // forward_method - computed: true, optional: true, required: false
  private _forwardMethod?: boolean | cdktf.IResolvable; 
  public get forwardMethod() {
    return this.getBooleanAttribute('forward_method');
  }
  public set forwardMethod(value: boolean | cdktf.IResolvable) {
    this._forwardMethod = value;
  }
  public resetForwardMethod() {
    this._forwardMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardMethodInput() {
    return this._forwardMethod;
  }

  // forward_uri - computed: true, optional: true, required: false
  private _forwardUri?: boolean | cdktf.IResolvable; 
  public get forwardUri() {
    return this.getBooleanAttribute('forward_uri');
  }
  public set forwardUri(value: boolean | cdktf.IResolvable) {
    this._forwardUri = value;
  }
  public resetForwardUri() {
    this._forwardUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUriInput() {
    return this._forwardUri;
  }

  // keepalive - computed: true, optional: true, required: false
  private _keepalive?: number; 
  public get keepalive() {
    return this.getNumberAttribute('keepalive');
  }
  public set keepalive(value: number) {
    this._keepalive = value;
  }
  public resetKeepalive() {
    this._keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveInput() {
    return this._keepalive;
  }

  // keepalive_enabled - computed: true, optional: true, required: false
  private _keepaliveEnabled?: boolean | cdktf.IResolvable; 
  public get keepaliveEnabled() {
    return this.getBooleanAttribute('keepalive_enabled');
  }
  public set keepaliveEnabled(value: boolean | cdktf.IResolvable) {
    this._keepaliveEnabled = value;
  }
  public resetKeepaliveEnabled() {
    this._keepaliveEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveEnabledInput() {
    return this._keepaliveEnabled;
  }

  // key_query_arg - computed: false, optional: true, required: false
  private _keyQueryArg?: string; 
  public get keyQueryArg() {
    return this.getStringAttribute('key_query_arg');
  }
  public set keyQueryArg(value: string) {
    this._keyQueryArg = value;
  }
  public resetKeyQueryArg() {
    this._keyQueryArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyQueryArgInput() {
    return this._keyQueryArg;
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

  // producer_async - computed: true, optional: true, required: false
  private _producerAsync?: boolean | cdktf.IResolvable; 
  public get producerAsync() {
    return this.getBooleanAttribute('producer_async');
  }
  public set producerAsync(value: boolean | cdktf.IResolvable) {
    this._producerAsync = value;
  }
  public resetProducerAsync() {
    this._producerAsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerAsyncInput() {
    return this._producerAsync;
  }

  // producer_async_buffering_limits_messages_in_memory - computed: true, optional: true, required: false
  private _producerAsyncBufferingLimitsMessagesInMemory?: number; 
  public get producerAsyncBufferingLimitsMessagesInMemory() {
    return this.getNumberAttribute('producer_async_buffering_limits_messages_in_memory');
  }
  public set producerAsyncBufferingLimitsMessagesInMemory(value: number) {
    this._producerAsyncBufferingLimitsMessagesInMemory = value;
  }
  public resetProducerAsyncBufferingLimitsMessagesInMemory() {
    this._producerAsyncBufferingLimitsMessagesInMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerAsyncBufferingLimitsMessagesInMemoryInput() {
    return this._producerAsyncBufferingLimitsMessagesInMemory;
  }

  // producer_async_flush_timeout - computed: true, optional: true, required: false
  private _producerAsyncFlushTimeout?: number; 
  public get producerAsyncFlushTimeout() {
    return this.getNumberAttribute('producer_async_flush_timeout');
  }
  public set producerAsyncFlushTimeout(value: number) {
    this._producerAsyncFlushTimeout = value;
  }
  public resetProducerAsyncFlushTimeout() {
    this._producerAsyncFlushTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerAsyncFlushTimeoutInput() {
    return this._producerAsyncFlushTimeout;
  }

  // producer_request_acks - computed: true, optional: true, required: false
  private _producerRequestAcks?: number; 
  public get producerRequestAcks() {
    return this.getNumberAttribute('producer_request_acks');
  }
  public set producerRequestAcks(value: number) {
    this._producerRequestAcks = value;
  }
  public resetProducerRequestAcks() {
    this._producerRequestAcks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRequestAcksInput() {
    return this._producerRequestAcks;
  }

  // producer_request_limits_bytes_per_request - computed: true, optional: true, required: false
  private _producerRequestLimitsBytesPerRequest?: number; 
  public get producerRequestLimitsBytesPerRequest() {
    return this.getNumberAttribute('producer_request_limits_bytes_per_request');
  }
  public set producerRequestLimitsBytesPerRequest(value: number) {
    this._producerRequestLimitsBytesPerRequest = value;
  }
  public resetProducerRequestLimitsBytesPerRequest() {
    this._producerRequestLimitsBytesPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRequestLimitsBytesPerRequestInput() {
    return this._producerRequestLimitsBytesPerRequest;
  }

  // producer_request_limits_messages_per_request - computed: true, optional: true, required: false
  private _producerRequestLimitsMessagesPerRequest?: number; 
  public get producerRequestLimitsMessagesPerRequest() {
    return this.getNumberAttribute('producer_request_limits_messages_per_request');
  }
  public set producerRequestLimitsMessagesPerRequest(value: number) {
    this._producerRequestLimitsMessagesPerRequest = value;
  }
  public resetProducerRequestLimitsMessagesPerRequest() {
    this._producerRequestLimitsMessagesPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRequestLimitsMessagesPerRequestInput() {
    return this._producerRequestLimitsMessagesPerRequest;
  }

  // producer_request_retries_backoff_timeout - computed: true, optional: true, required: false
  private _producerRequestRetriesBackoffTimeout?: number; 
  public get producerRequestRetriesBackoffTimeout() {
    return this.getNumberAttribute('producer_request_retries_backoff_timeout');
  }
  public set producerRequestRetriesBackoffTimeout(value: number) {
    this._producerRequestRetriesBackoffTimeout = value;
  }
  public resetProducerRequestRetriesBackoffTimeout() {
    this._producerRequestRetriesBackoffTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRequestRetriesBackoffTimeoutInput() {
    return this._producerRequestRetriesBackoffTimeout;
  }

  // producer_request_retries_max_attempts - computed: true, optional: true, required: false
  private _producerRequestRetriesMaxAttempts?: number; 
  public get producerRequestRetriesMaxAttempts() {
    return this.getNumberAttribute('producer_request_retries_max_attempts');
  }
  public set producerRequestRetriesMaxAttempts(value: number) {
    this._producerRequestRetriesMaxAttempts = value;
  }
  public resetProducerRequestRetriesMaxAttempts() {
    this._producerRequestRetriesMaxAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRequestRetriesMaxAttemptsInput() {
    return this._producerRequestRetriesMaxAttempts;
  }

  // producer_request_timeout - computed: true, optional: true, required: false
  private _producerRequestTimeout?: number; 
  public get producerRequestTimeout() {
    return this.getNumberAttribute('producer_request_timeout');
  }
  public set producerRequestTimeout(value: number) {
    this._producerRequestTimeout = value;
  }
  public resetProducerRequestTimeout() {
    this._producerRequestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get producerRequestTimeoutInput() {
    return this._producerRequestTimeout;
  }

  // schema_registry - computed: true, optional: true, required: false
  private _schemaRegistry = new GatewayPluginKafkaUpstreamConfigSchemaRegistryOutputReference(this, "schema_registry");
  public get schemaRegistry() {
    return this._schemaRegistry;
  }
  public putSchemaRegistry(value: GatewayPluginKafkaUpstreamConfigSchemaRegistry) {
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
  private _security = new GatewayPluginKafkaUpstreamConfigSecurityOutputReference(this, "security");
  public get security() {
    return this._security;
  }
  public putSecurity(value: GatewayPluginKafkaUpstreamConfigSecurity) {
    this._security.internalValue = value;
  }
  public resetSecurity() {
    this._security.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security.internalValue;
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

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }

  // topics_query_arg - computed: false, optional: true, required: false
  private _topicsQueryArg?: string; 
  public get topicsQueryArg() {
    return this.getStringAttribute('topics_query_arg');
  }
  public set topicsQueryArg(value: string) {
    this._topicsQueryArg = value;
  }
  public resetTopicsQueryArg() {
    this._topicsQueryArg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicsQueryArgInput() {
    return this._topicsQueryArg;
  }
}
export interface GatewayPluginKafkaUpstreamConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#id GatewayPluginKafkaUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginKafkaUpstreamConsumerToTerraform(struct?: GatewayPluginKafkaUpstreamConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginKafkaUpstreamConsumerToHclTerraform(struct?: GatewayPluginKafkaUpstreamConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginKafkaUpstreamOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#access GatewayPluginKafkaUpstream#access}
  */
  readonly access?: string[];
}

export function gatewayPluginKafkaUpstreamOrderingAfterToTerraform(struct?: GatewayPluginKafkaUpstreamOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginKafkaUpstreamOrderingAfterToHclTerraform(struct?: GatewayPluginKafkaUpstreamOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginKafkaUpstreamOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#access GatewayPluginKafkaUpstream#access}
  */
  readonly access?: string[];
}

export function gatewayPluginKafkaUpstreamOrderingBeforeToTerraform(struct?: GatewayPluginKafkaUpstreamOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginKafkaUpstreamOrderingBeforeToHclTerraform(struct?: GatewayPluginKafkaUpstreamOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginKafkaUpstreamOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#after GatewayPluginKafkaUpstream#after}
  */
  readonly after?: GatewayPluginKafkaUpstreamOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#before GatewayPluginKafkaUpstream#before}
  */
  readonly before?: GatewayPluginKafkaUpstreamOrderingBefore;
}

export function gatewayPluginKafkaUpstreamOrderingToTerraform(struct?: GatewayPluginKafkaUpstreamOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginKafkaUpstreamOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginKafkaUpstreamOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginKafkaUpstreamOrderingToHclTerraform(struct?: GatewayPluginKafkaUpstreamOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginKafkaUpstreamOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamOrderingAfter",
    },
    before: {
      value: gatewayPluginKafkaUpstreamOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginKafkaUpstreamOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginKafkaUpstreamOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginKafkaUpstreamOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginKafkaUpstreamOrderingAfter) {
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
  private _before = new GatewayPluginKafkaUpstreamOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginKafkaUpstreamOrderingBefore) {
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
export interface GatewayPluginKafkaUpstreamPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#id GatewayPluginKafkaUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#name GatewayPluginKafkaUpstream#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#path GatewayPluginKafkaUpstream#path}
  */
  readonly path?: string;
}

export function gatewayPluginKafkaUpstreamPartialsToTerraform(struct?: GatewayPluginKafkaUpstreamPartials | cdktf.IResolvable): any {
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


export function gatewayPluginKafkaUpstreamPartialsToHclTerraform(struct?: GatewayPluginKafkaUpstreamPartials | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginKafkaUpstreamPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginKafkaUpstreamPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginKafkaUpstreamPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginKafkaUpstreamPartialsOutputReference {
    return new GatewayPluginKafkaUpstreamPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginKafkaUpstreamRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#id GatewayPluginKafkaUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginKafkaUpstreamRouteToTerraform(struct?: GatewayPluginKafkaUpstreamRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginKafkaUpstreamRouteToHclTerraform(struct?: GatewayPluginKafkaUpstreamRoute | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginKafkaUpstreamService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#id GatewayPluginKafkaUpstream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginKafkaUpstreamServiceToTerraform(struct?: GatewayPluginKafkaUpstreamService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginKafkaUpstreamServiceToHclTerraform(struct?: GatewayPluginKafkaUpstreamService | cdktf.IResolvable): any {
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

export class GatewayPluginKafkaUpstreamServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginKafkaUpstreamService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginKafkaUpstreamService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream konnect_gateway_plugin_kafka_upstream}
*/
export class GatewayPluginKafkaUpstream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_kafka_upstream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginKafkaUpstream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginKafkaUpstream to import
  * @param importFromId The id of the existing GatewayPluginKafkaUpstream that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginKafkaUpstream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_kafka_upstream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_kafka_upstream konnect_gateway_plugin_kafka_upstream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginKafkaUpstreamConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginKafkaUpstreamConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_kafka_upstream',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
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
    this._service.internalValue = config.service;
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginKafkaUpstreamConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginKafkaUpstreamConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginKafkaUpstreamConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginKafkaUpstreamConsumer) {
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
  private _ordering = new GatewayPluginKafkaUpstreamOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginKafkaUpstreamOrdering) {
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
  private _partials = new GatewayPluginKafkaUpstreamPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginKafkaUpstreamPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginKafkaUpstreamRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginKafkaUpstreamRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // service - computed: true, optional: true, required: false
  private _service = new GatewayPluginKafkaUpstreamServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginKafkaUpstreamService) {
    this._service.internalValue = value;
  }
  public resetService() {
    this._service.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service.internalValue;
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
      config: gatewayPluginKafkaUpstreamConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginKafkaUpstreamConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginKafkaUpstreamOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginKafkaUpstreamPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginKafkaUpstreamRouteToTerraform(this._route.internalValue),
      service: gatewayPluginKafkaUpstreamServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginKafkaUpstreamConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaUpstreamConfigA",
      },
      consumer: {
        value: gatewayPluginKafkaUpstreamConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaUpstreamConsumer",
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
        value: gatewayPluginKafkaUpstreamOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaUpstreamOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginKafkaUpstreamPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginKafkaUpstreamPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginKafkaUpstreamRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaUpstreamRoute",
      },
      service: {
        value: gatewayPluginKafkaUpstreamServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginKafkaUpstreamService",
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
