// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginSamlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#config GatewayPluginSaml#config}
  */
  readonly config: GatewayPluginSamlConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#control_plane_id GatewayPluginSaml#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#created_at GatewayPluginSaml#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#enabled GatewayPluginSaml#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#id GatewayPluginSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#instance_name GatewayPluginSaml#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#ordering GatewayPluginSaml#ordering}
  */
  readonly ordering?: GatewayPluginSamlOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#partials GatewayPluginSaml#partials}
  */
  readonly partials?: GatewayPluginSamlPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#protocols GatewayPluginSaml#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#route GatewayPluginSaml#route}
  */
  readonly route?: GatewayPluginSamlRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#service GatewayPluginSaml#service}
  */
  readonly service?: GatewayPluginSamlService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#tags GatewayPluginSaml#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#updated_at GatewayPluginSaml#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginSamlConfigRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#ip GatewayPluginSaml#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#port GatewayPluginSaml#port}
  */
  readonly port?: number;
}

export function gatewayPluginSamlConfigRedisClusterNodesToTerraform(struct?: GatewayPluginSamlConfigRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginSamlConfigRedisClusterNodesToHclTerraform(struct?: GatewayPluginSamlConfigRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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

export class GatewayPluginSamlConfigRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSamlConfigRedisClusterNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSamlConfigRedisClusterNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ip = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

export class GatewayPluginSamlConfigRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSamlConfigRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSamlConfigRedisClusterNodesOutputReference {
    return new GatewayPluginSamlConfigRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSamlConfigRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#host GatewayPluginSaml#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#port GatewayPluginSaml#port}
  */
  readonly port?: number;
}

export function gatewayPluginSamlConfigRedisSentinelNodesToTerraform(struct?: GatewayPluginSamlConfigRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginSamlConfigRedisSentinelNodesToHclTerraform(struct?: GatewayPluginSamlConfigRedisSentinelNodes | cdktf.IResolvable): any {
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

export class GatewayPluginSamlConfigRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSamlConfigRedisSentinelNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSamlConfigRedisSentinelNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginSamlConfigRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSamlConfigRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSamlConfigRedisSentinelNodesOutputReference {
    return new GatewayPluginSamlConfigRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSamlConfigRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#cluster_max_redirections GatewayPluginSaml#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#cluster_nodes GatewayPluginSaml#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginSamlConfigRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#connect_timeout GatewayPluginSaml#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#connection_is_proxied GatewayPluginSaml#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#database GatewayPluginSaml#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#host GatewayPluginSaml#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#keepalive_backlog GatewayPluginSaml#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#keepalive_pool_size GatewayPluginSaml#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#password GatewayPluginSaml#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#port GatewayPluginSaml#port}
  */
  readonly port?: number;
  /**
  * The Redis session key prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#prefix GatewayPluginSaml#prefix}
  */
  readonly prefix?: string;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#read_timeout GatewayPluginSaml#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#send_timeout GatewayPluginSaml#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#sentinel_master GatewayPluginSaml#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#sentinel_nodes GatewayPluginSaml#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginSamlConfigRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#sentinel_password GatewayPluginSaml#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#sentinel_role GatewayPluginSaml#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#sentinel_username GatewayPluginSaml#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#server_name GatewayPluginSaml#server_name}
  */
  readonly serverName?: string;
  /**
  * The Redis unix socket path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#socket GatewayPluginSaml#socket}
  */
  readonly socket?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#ssl GatewayPluginSaml#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#ssl_verify GatewayPluginSaml#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#username GatewayPluginSaml#username}
  */
  readonly username?: string;
}

export function gatewayPluginSamlConfigRedisToTerraform(struct?: GatewayPluginSamlConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginSamlConfigRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connection_is_proxied: cdktf.booleanToTerraform(struct!.connectionIsProxied),
    database: cdktf.numberToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    keepalive_backlog: cdktf.numberToTerraform(struct!.keepaliveBacklog),
    keepalive_pool_size: cdktf.numberToTerraform(struct!.keepalivePoolSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    sentinel_master: cdktf.stringToTerraform(struct!.sentinelMaster),
    sentinel_nodes: cdktf.listMapper(gatewayPluginSamlConfigRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    socket: cdktf.stringToTerraform(struct!.socket),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginSamlConfigRedisToHclTerraform(struct?: GatewayPluginSamlConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_max_redirections: {
      value: cdktf.numberToHclTerraform(struct!.clusterMaxRedirections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginSamlConfigRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginSamlConfigRedisClusterNodesList",
    },
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_is_proxied: {
      value: cdktf.booleanToHclTerraform(struct!.connectionIsProxied),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    database: {
      value: cdktf.numberToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_backlog: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveBacklog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.keepalivePoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
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
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.readTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sendTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sentinel_master: {
      value: cdktf.stringToHclTerraform(struct!.sentinelMaster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_nodes: {
      value: cdktf.listMapperHcl(gatewayPluginSamlConfigRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginSamlConfigRedisSentinelNodesList",
    },
    sentinel_password: {
      value: cdktf.stringToHclTerraform(struct!.sentinelPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_role: {
      value: cdktf.stringToHclTerraform(struct!.sentinelRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sentinel_username: {
      value: cdktf.stringToHclTerraform(struct!.sentinelUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_name: {
      value: cdktf.stringToHclTerraform(struct!.serverName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    socket: {
      value: cdktf.stringToHclTerraform(struct!.socket),
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
    ssl_verify: {
      value: cdktf.booleanToHclTerraform(struct!.sslVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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

export class GatewayPluginSamlConfigRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSamlConfigRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterMaxRedirections !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterMaxRedirections = this._clusterMaxRedirections;
    }
    if (this._clusterNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterNodes = this._clusterNodes?.internalValue;
    }
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._connectionIsProxied !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionIsProxied = this._connectionIsProxied;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._keepaliveBacklog !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveBacklog = this._keepaliveBacklog;
    }
    if (this._keepalivePoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalivePoolSize = this._keepalivePoolSize;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._readTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.readTimeout = this._readTimeout;
    }
    if (this._sendTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTimeout = this._sendTimeout;
    }
    if (this._sentinelMaster !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelMaster = this._sentinelMaster;
    }
    if (this._sentinelNodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelNodes = this._sentinelNodes?.internalValue;
    }
    if (this._sentinelPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelPassword = this._sentinelPassword;
    }
    if (this._sentinelRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelRole = this._sentinelRole;
    }
    if (this._sentinelUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.sentinelUsername = this._sentinelUsername;
    }
    if (this._serverName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverName = this._serverName;
    }
    if (this._socket !== undefined) {
      hasAnyValues = true;
      internalValueResult.socket = this._socket;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSamlConfigRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = undefined;
      this._clusterNodes.internalValue = undefined;
      this._connectTimeout = undefined;
      this._connectionIsProxied = undefined;
      this._database = undefined;
      this._host = undefined;
      this._keepaliveBacklog = undefined;
      this._keepalivePoolSize = undefined;
      this._password = undefined;
      this._port = undefined;
      this._prefix = undefined;
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._sentinelMaster = undefined;
      this._sentinelNodes.internalValue = undefined;
      this._sentinelPassword = undefined;
      this._sentinelRole = undefined;
      this._sentinelUsername = undefined;
      this._serverName = undefined;
      this._socket = undefined;
      this._ssl = undefined;
      this._sslVerify = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterMaxRedirections = value.clusterMaxRedirections;
      this._clusterNodes.internalValue = value.clusterNodes;
      this._connectTimeout = value.connectTimeout;
      this._connectionIsProxied = value.connectionIsProxied;
      this._database = value.database;
      this._host = value.host;
      this._keepaliveBacklog = value.keepaliveBacklog;
      this._keepalivePoolSize = value.keepalivePoolSize;
      this._password = value.password;
      this._port = value.port;
      this._prefix = value.prefix;
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._sentinelMaster = value.sentinelMaster;
      this._sentinelNodes.internalValue = value.sentinelNodes;
      this._sentinelPassword = value.sentinelPassword;
      this._sentinelRole = value.sentinelRole;
      this._sentinelUsername = value.sentinelUsername;
      this._serverName = value.serverName;
      this._socket = value.socket;
      this._ssl = value.ssl;
      this._sslVerify = value.sslVerify;
      this._username = value.username;
    }
  }

  // cluster_max_redirections - computed: true, optional: true, required: false
  private _clusterMaxRedirections?: number; 
  public get clusterMaxRedirections() {
    return this.getNumberAttribute('cluster_max_redirections');
  }
  public set clusterMaxRedirections(value: number) {
    this._clusterMaxRedirections = value;
  }
  public resetClusterMaxRedirections() {
    this._clusterMaxRedirections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterMaxRedirectionsInput() {
    return this._clusterMaxRedirections;
  }

  // cluster_nodes - computed: true, optional: true, required: false
  private _clusterNodes = new GatewayPluginSamlConfigRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginSamlConfigRedisClusterNodes[] | cdktf.IResolvable) {
    this._clusterNodes.internalValue = value;
  }
  public resetClusterNodes() {
    this._clusterNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNodesInput() {
    return this._clusterNodes.internalValue;
  }

  // connect_timeout - computed: true, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // connection_is_proxied - computed: true, optional: true, required: false
  private _connectionIsProxied?: boolean | cdktf.IResolvable; 
  public get connectionIsProxied() {
    return this.getBooleanAttribute('connection_is_proxied');
  }
  public set connectionIsProxied(value: boolean | cdktf.IResolvable) {
    this._connectionIsProxied = value;
  }
  public resetConnectionIsProxied() {
    this._connectionIsProxied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIsProxiedInput() {
    return this._connectionIsProxied;
  }

  // database - computed: true, optional: true, required: false
  private _database?: number; 
  public get database() {
    return this.getNumberAttribute('database');
  }
  public set database(value: number) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // keepalive_backlog - computed: true, optional: true, required: false
  private _keepaliveBacklog?: number; 
  public get keepaliveBacklog() {
    return this.getNumberAttribute('keepalive_backlog');
  }
  public set keepaliveBacklog(value: number) {
    this._keepaliveBacklog = value;
  }
  public resetKeepaliveBacklog() {
    this._keepaliveBacklog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveBacklogInput() {
    return this._keepaliveBacklog;
  }

  // keepalive_pool_size - computed: true, optional: true, required: false
  private _keepalivePoolSize?: number; 
  public get keepalivePoolSize() {
    return this.getNumberAttribute('keepalive_pool_size');
  }
  public set keepalivePoolSize(value: number) {
    this._keepalivePoolSize = value;
  }
  public resetKeepalivePoolSize() {
    this._keepalivePoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepalivePoolSizeInput() {
    return this._keepalivePoolSize;
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

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // read_timeout - computed: true, optional: true, required: false
  private _readTimeout?: number; 
  public get readTimeout() {
    return this.getNumberAttribute('read_timeout');
  }
  public set readTimeout(value: number) {
    this._readTimeout = value;
  }
  public resetReadTimeout() {
    this._readTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readTimeoutInput() {
    return this._readTimeout;
  }

  // send_timeout - computed: true, optional: true, required: false
  private _sendTimeout?: number; 
  public get sendTimeout() {
    return this.getNumberAttribute('send_timeout');
  }
  public set sendTimeout(value: number) {
    this._sendTimeout = value;
  }
  public resetSendTimeout() {
    this._sendTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTimeoutInput() {
    return this._sendTimeout;
  }

  // sentinel_master - computed: true, optional: true, required: false
  private _sentinelMaster?: string; 
  public get sentinelMaster() {
    return this.getStringAttribute('sentinel_master');
  }
  public set sentinelMaster(value: string) {
    this._sentinelMaster = value;
  }
  public resetSentinelMaster() {
    this._sentinelMaster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelMasterInput() {
    return this._sentinelMaster;
  }

  // sentinel_nodes - computed: true, optional: true, required: false
  private _sentinelNodes = new GatewayPluginSamlConfigRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginSamlConfigRedisSentinelNodes[] | cdktf.IResolvable) {
    this._sentinelNodes.internalValue = value;
  }
  public resetSentinelNodes() {
    this._sentinelNodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelNodesInput() {
    return this._sentinelNodes.internalValue;
  }

  // sentinel_password - computed: true, optional: true, required: false
  private _sentinelPassword?: string; 
  public get sentinelPassword() {
    return this.getStringAttribute('sentinel_password');
  }
  public set sentinelPassword(value: string) {
    this._sentinelPassword = value;
  }
  public resetSentinelPassword() {
    this._sentinelPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelPasswordInput() {
    return this._sentinelPassword;
  }

  // sentinel_role - computed: true, optional: true, required: false
  private _sentinelRole?: string; 
  public get sentinelRole() {
    return this.getStringAttribute('sentinel_role');
  }
  public set sentinelRole(value: string) {
    this._sentinelRole = value;
  }
  public resetSentinelRole() {
    this._sentinelRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelRoleInput() {
    return this._sentinelRole;
  }

  // sentinel_username - computed: true, optional: true, required: false
  private _sentinelUsername?: string; 
  public get sentinelUsername() {
    return this.getStringAttribute('sentinel_username');
  }
  public set sentinelUsername(value: string) {
    this._sentinelUsername = value;
  }
  public resetSentinelUsername() {
    this._sentinelUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sentinelUsernameInput() {
    return this._sentinelUsername;
  }

  // server_name - computed: true, optional: true, required: false
  private _serverName?: string; 
  public get serverName() {
    return this.getStringAttribute('server_name');
  }
  public set serverName(value: string) {
    this._serverName = value;
  }
  public resetServerName() {
    this._serverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNameInput() {
    return this._serverName;
  }

  // socket - computed: true, optional: true, required: false
  private _socket?: string; 
  public get socket() {
    return this.getStringAttribute('socket');
  }
  public set socket(value: string) {
    this._socket = value;
  }
  public resetSocket() {
    this._socket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketInput() {
    return this._socket;
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
export interface GatewayPluginSamlConfigA {
  /**
  * An optional string (consumer UUID or username) value to use as an “anonymous” consumer. If not set, a Kong Consumer must exist for the SAML IdP user credentials, mapping the username format to the Kong Consumer username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#anonymous GatewayPluginSaml#anonymous}
  */
  readonly anonymous?: string;
  /**
  * A string representing a URL path, such as /path/to/resource. Must start with a forward slash (/) and must not contain empty segments (i.e., two consecutive forward slashes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#assertion_consumer_path GatewayPluginSaml#assertion_consumer_path}
  */
  readonly assertionConsumerPath: string;
  /**
  * The public certificate provided by the IdP. This is used to validate responses from the IdP.  Only include the contents of the certificate. Do not include the header (`BEGIN CERTIFICATE`) and footer (`END CERTIFICATE`) lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#idp_certificate GatewayPluginSaml#idp_certificate}
  */
  readonly idpCertificate?: string;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#idp_sso_url GatewayPluginSaml#idp_sso_url}
  */
  readonly idpSsoUrl: string;
  /**
  * The unique identifier of the IdP application. Formatted as a URL containing information about the IdP so the SP can validate that the SAML assertions it receives are issued from the correct IdP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#issuer GatewayPluginSaml#issuer}
  */
  readonly issuer: string;
  /**
  * The requested `NameId` format. Options available are: - `Unspecified` - `EmailAddress` - `Persistent` - `Transient`. Default: "EmailAddress"; must be one of ["EmailAddress", "Persistent", "Transient", "Unspecified"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#nameid_format GatewayPluginSaml#nameid_format}
  */
  readonly nameidFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#redis GatewayPluginSaml#redis}
  */
  readonly redis?: GatewayPluginSamlConfigRedis;
  /**
  * The digest algorithm for Authn requests: - `SHA256` - `SHA1`. Default: "SHA256"; must be one of ["SHA1", "SHA256"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#request_digest_algorithm GatewayPluginSaml#request_digest_algorithm}
  */
  readonly requestDigestAlgorithm?: string;
  /**
  * The signature algorithm for signing Authn requests. Options available are: - `SHA256` - `SHA384` - `SHA512`. Default: "SHA256"; must be one of ["SHA256", "SHA384", "SHA512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#request_signature_algorithm GatewayPluginSaml#request_signature_algorithm}
  */
  readonly requestSignatureAlgorithm?: string;
  /**
  * The certificate for signing requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#request_signing_certificate GatewayPluginSaml#request_signing_certificate}
  */
  readonly requestSigningCertificate?: string;
  /**
  * The private key for signing requests.  If this parameter is set, requests sent to the IdP are signed.  The `request_signing_certificate` parameter must be set as well.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#request_signing_key GatewayPluginSaml#request_signing_key}
  */
  readonly requestSigningKey?: string;
  /**
  * The algorithm for verifying digest in SAML responses: - `SHA256` - `SHA1`. Default: "SHA256"; must be one of ["SHA1", "SHA256"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#response_digest_algorithm GatewayPluginSaml#response_digest_algorithm}
  */
  readonly responseDigestAlgorithm?: string;
  /**
  * The private encryption key required to decrypt encrypted assertions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#response_encryption_key GatewayPluginSaml#response_encryption_key}
  */
  readonly responseEncryptionKey?: string;
  /**
  * The algorithm for validating signatures in SAML responses. Options available are: - `SHA256` - `SHA384` - `SHA512`. Default: "SHA256"; must be one of ["SHA256", "SHA384", "SHA512"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#response_signature_algorithm GatewayPluginSaml#response_signature_algorithm}
  */
  readonly responseSignatureAlgorithm?: string;
  /**
  * The session cookie absolute timeout in seconds. Specifies how long the session can be used until it is no longer valid. Default: 86400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_absolute_timeout GatewayPluginSaml#session_absolute_timeout}
  */
  readonly sessionAbsoluteTimeout?: number;
  /**
  * The session audience, for example "my-application". Default: "default"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_audience GatewayPluginSaml#session_audience}
  */
  readonly sessionAudience?: string;
  /**
  * The session cookie domain flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_cookie_domain GatewayPluginSaml#session_cookie_domain}
  */
  readonly sessionCookieDomain?: string;
  /**
  * Forbids JavaScript from accessing the cookie, for example, through the `Document.cookie` property. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_cookie_http_only GatewayPluginSaml#session_cookie_http_only}
  */
  readonly sessionCookieHttpOnly?: boolean | cdktf.IResolvable;
  /**
  * The session cookie name. Default: "session"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_cookie_name GatewayPluginSaml#session_cookie_name}
  */
  readonly sessionCookieName?: string;
  /**
  * A string representing a URL path, such as /path/to/resource. Must start with a forward slash (/) and must not contain empty segments (i.e., two consecutive forward slashes). Default: "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_cookie_path GatewayPluginSaml#session_cookie_path}
  */
  readonly sessionCookiePath?: string;
  /**
  * Controls whether a cookie is sent with cross-origin requests, providing some protection against cross-site request forgery attacks. Default: "Lax"; must be one of ["Default", "Lax", "None", "Strict"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_cookie_same_site GatewayPluginSaml#session_cookie_same_site}
  */
  readonly sessionCookieSameSite?: string;
  /**
  * The cookie is only sent to the server when a request is made with the https:scheme (except on localhost), and therefore is more resistant to man-in-the-middle attacks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_cookie_secure GatewayPluginSaml#session_cookie_secure}
  */
  readonly sessionCookieSecure?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, audiences are forced to share the same subject. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_enforce_same_subject GatewayPluginSaml#session_enforce_same_subject}
  */
  readonly sessionEnforceSameSubject?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, the storage key (session ID) is hashed for extra security. Hashing the storage key means it is impossible to decrypt data from the storage without a cookie. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_hash_storage_key GatewayPluginSaml#session_hash_storage_key}
  */
  readonly sessionHashStorageKey?: boolean | cdktf.IResolvable;
  /**
  * When set to `true`, the value of subject is hashed before being stored. Only applies when `session_store_metadata` is enabled. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_hash_subject GatewayPluginSaml#session_hash_subject}
  */
  readonly sessionHashSubject?: boolean | cdktf.IResolvable;
  /**
  * The session cookie idle time in seconds. Default: 900
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_idling_timeout GatewayPluginSaml#session_idling_timeout}
  */
  readonly sessionIdlingTimeout?: number;
  /**
  * The memcached host. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_memcached_host GatewayPluginSaml#session_memcached_host}
  */
  readonly sessionMemcachedHost?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 11211
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_memcached_port GatewayPluginSaml#session_memcached_port}
  */
  readonly sessionMemcachedPort?: number;
  /**
  * The memcached session key prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_memcached_prefix GatewayPluginSaml#session_memcached_prefix}
  */
  readonly sessionMemcachedPrefix?: string;
  /**
  * The memcached unix socket path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_memcached_socket GatewayPluginSaml#session_memcached_socket}
  */
  readonly sessionMemcachedSocket?: string;
  /**
  * Enables or disables persistent sessions. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_remember GatewayPluginSaml#session_remember}
  */
  readonly sessionRemember?: boolean | cdktf.IResolvable;
  /**
  * Persistent session absolute timeout in seconds. Default: 2592000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_remember_absolute_timeout GatewayPluginSaml#session_remember_absolute_timeout}
  */
  readonly sessionRememberAbsoluteTimeout?: number;
  /**
  * Persistent session cookie name. Default: "remember"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_remember_cookie_name GatewayPluginSaml#session_remember_cookie_name}
  */
  readonly sessionRememberCookieName?: string;
  /**
  * Persistent session rolling timeout in seconds. Default: 604800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_remember_rolling_timeout GatewayPluginSaml#session_remember_rolling_timeout}
  */
  readonly sessionRememberRollingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_request_headers GatewayPluginSaml#session_request_headers}
  */
  readonly sessionRequestHeaders?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_response_headers GatewayPluginSaml#session_response_headers}
  */
  readonly sessionResponseHeaders?: string[];
  /**
  * The session cookie absolute timeout in seconds. Specifies how long the session can be used until it is no longer valid. Default: 3600
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_rolling_timeout GatewayPluginSaml#session_rolling_timeout}
  */
  readonly sessionRollingTimeout?: number;
  /**
  * The session secret. This must be a random string of 32 characters from the base64 alphabet (letters, numbers, `/`, `_` and `+`). It is used as the secret key for encrypting session data as well as state information that is sent to the IdP in the authentication exchange.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_secret GatewayPluginSaml#session_secret}
  */
  readonly sessionSecret: string;
  /**
  * The session storage for session data: - `cookie`: stores session data with the session cookie. The session cannot be invalidated or revoked without changing the session secret, but is stateless, and doesn't require a database. - `memcached`: stores session data in memcached - `redis`: stores session data in Redis. Default: "cookie"; must be one of ["cookie", "memcache", "memcached", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_storage GatewayPluginSaml#session_storage}
  */
  readonly sessionStorage?: string;
  /**
  * Configures whether or not session metadata should be stored. This includes information about the active sessions for the `specific_audience` belonging to a specific subject. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#session_store_metadata GatewayPluginSaml#session_store_metadata}
  */
  readonly sessionStoreMetadata?: boolean | cdktf.IResolvable;
  /**
  * Enable signature validation for SAML responses. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#validate_assertion_signature GatewayPluginSaml#validate_assertion_signature}
  */
  readonly validateAssertionSignature?: boolean | cdktf.IResolvable;
}

export function gatewayPluginSamlConfigAToTerraform(struct?: GatewayPluginSamlConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anonymous: cdktf.stringToTerraform(struct!.anonymous),
    assertion_consumer_path: cdktf.stringToTerraform(struct!.assertionConsumerPath),
    idp_certificate: cdktf.stringToTerraform(struct!.idpCertificate),
    idp_sso_url: cdktf.stringToTerraform(struct!.idpSsoUrl),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    nameid_format: cdktf.stringToTerraform(struct!.nameidFormat),
    redis: gatewayPluginSamlConfigRedisToTerraform(struct!.redis),
    request_digest_algorithm: cdktf.stringToTerraform(struct!.requestDigestAlgorithm),
    request_signature_algorithm: cdktf.stringToTerraform(struct!.requestSignatureAlgorithm),
    request_signing_certificate: cdktf.stringToTerraform(struct!.requestSigningCertificate),
    request_signing_key: cdktf.stringToTerraform(struct!.requestSigningKey),
    response_digest_algorithm: cdktf.stringToTerraform(struct!.responseDigestAlgorithm),
    response_encryption_key: cdktf.stringToTerraform(struct!.responseEncryptionKey),
    response_signature_algorithm: cdktf.stringToTerraform(struct!.responseSignatureAlgorithm),
    session_absolute_timeout: cdktf.numberToTerraform(struct!.sessionAbsoluteTimeout),
    session_audience: cdktf.stringToTerraform(struct!.sessionAudience),
    session_cookie_domain: cdktf.stringToTerraform(struct!.sessionCookieDomain),
    session_cookie_http_only: cdktf.booleanToTerraform(struct!.sessionCookieHttpOnly),
    session_cookie_name: cdktf.stringToTerraform(struct!.sessionCookieName),
    session_cookie_path: cdktf.stringToTerraform(struct!.sessionCookiePath),
    session_cookie_same_site: cdktf.stringToTerraform(struct!.sessionCookieSameSite),
    session_cookie_secure: cdktf.booleanToTerraform(struct!.sessionCookieSecure),
    session_enforce_same_subject: cdktf.booleanToTerraform(struct!.sessionEnforceSameSubject),
    session_hash_storage_key: cdktf.booleanToTerraform(struct!.sessionHashStorageKey),
    session_hash_subject: cdktf.booleanToTerraform(struct!.sessionHashSubject),
    session_idling_timeout: cdktf.numberToTerraform(struct!.sessionIdlingTimeout),
    session_memcached_host: cdktf.stringToTerraform(struct!.sessionMemcachedHost),
    session_memcached_port: cdktf.numberToTerraform(struct!.sessionMemcachedPort),
    session_memcached_prefix: cdktf.stringToTerraform(struct!.sessionMemcachedPrefix),
    session_memcached_socket: cdktf.stringToTerraform(struct!.sessionMemcachedSocket),
    session_remember: cdktf.booleanToTerraform(struct!.sessionRemember),
    session_remember_absolute_timeout: cdktf.numberToTerraform(struct!.sessionRememberAbsoluteTimeout),
    session_remember_cookie_name: cdktf.stringToTerraform(struct!.sessionRememberCookieName),
    session_remember_rolling_timeout: cdktf.numberToTerraform(struct!.sessionRememberRollingTimeout),
    session_request_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionRequestHeaders),
    session_response_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sessionResponseHeaders),
    session_rolling_timeout: cdktf.numberToTerraform(struct!.sessionRollingTimeout),
    session_secret: cdktf.stringToTerraform(struct!.sessionSecret),
    session_storage: cdktf.stringToTerraform(struct!.sessionStorage),
    session_store_metadata: cdktf.booleanToTerraform(struct!.sessionStoreMetadata),
    validate_assertion_signature: cdktf.booleanToTerraform(struct!.validateAssertionSignature),
  }
}


export function gatewayPluginSamlConfigAToHclTerraform(struct?: GatewayPluginSamlConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anonymous: {
      value: cdktf.stringToHclTerraform(struct!.anonymous),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    assertion_consumer_path: {
      value: cdktf.stringToHclTerraform(struct!.assertionConsumerPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_certificate: {
      value: cdktf.stringToHclTerraform(struct!.idpCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idp_sso_url: {
      value: cdktf.stringToHclTerraform(struct!.idpSsoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nameid_format: {
      value: cdktf.stringToHclTerraform(struct!.nameidFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redis: {
      value: gatewayPluginSamlConfigRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSamlConfigRedis",
    },
    request_digest_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.requestDigestAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.requestSignatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_signing_certificate: {
      value: cdktf.stringToHclTerraform(struct!.requestSigningCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_signing_key: {
      value: cdktf.stringToHclTerraform(struct!.requestSigningKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_digest_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.responseDigestAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.responseEncryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_signature_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.responseSignatureAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_absolute_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionAbsoluteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_audience: {
      value: cdktf.stringToHclTerraform(struct!.sessionAudience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_domain: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_http_only: {
      value: cdktf.booleanToHclTerraform(struct!.sessionCookieHttpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_path: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookiePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_same_site: {
      value: cdktf.stringToHclTerraform(struct!.sessionCookieSameSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_cookie_secure: {
      value: cdktf.booleanToHclTerraform(struct!.sessionCookieSecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_enforce_same_subject: {
      value: cdktf.booleanToHclTerraform(struct!.sessionEnforceSameSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_hash_storage_key: {
      value: cdktf.booleanToHclTerraform(struct!.sessionHashStorageKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_hash_subject: {
      value: cdktf.booleanToHclTerraform(struct!.sessionHashSubject),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_idling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionIdlingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_memcached_host: {
      value: cdktf.stringToHclTerraform(struct!.sessionMemcachedHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_memcached_port: {
      value: cdktf.numberToHclTerraform(struct!.sessionMemcachedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_memcached_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sessionMemcachedPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_memcached_socket: {
      value: cdktf.stringToHclTerraform(struct!.sessionMemcachedSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_remember: {
      value: cdktf.booleanToHclTerraform(struct!.sessionRemember),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_remember_absolute_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionRememberAbsoluteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_remember_cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.sessionRememberCookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_remember_rolling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionRememberRollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_request_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sessionRequestHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_response_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sessionResponseHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    session_rolling_timeout: {
      value: cdktf.numberToHclTerraform(struct!.sessionRollingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_secret: {
      value: cdktf.stringToHclTerraform(struct!.sessionSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_storage: {
      value: cdktf.stringToHclTerraform(struct!.sessionStorage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_store_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.sessionStoreMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_assertion_signature: {
      value: cdktf.booleanToHclTerraform(struct!.validateAssertionSignature),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSamlConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSamlConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anonymous !== undefined) {
      hasAnyValues = true;
      internalValueResult.anonymous = this._anonymous;
    }
    if (this._assertionConsumerPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.assertionConsumerPath = this._assertionConsumerPath;
    }
    if (this._idpCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpCertificate = this._idpCertificate;
    }
    if (this._idpSsoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.idpSsoUrl = this._idpSsoUrl;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._nameidFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameidFormat = this._nameidFormat;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._requestDigestAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDigestAlgorithm = this._requestDigestAlgorithm;
    }
    if (this._requestSignatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSignatureAlgorithm = this._requestSignatureAlgorithm;
    }
    if (this._requestSigningCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSigningCertificate = this._requestSigningCertificate;
    }
    if (this._requestSigningKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSigningKey = this._requestSigningKey;
    }
    if (this._responseDigestAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseDigestAlgorithm = this._responseDigestAlgorithm;
    }
    if (this._responseEncryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseEncryptionKey = this._responseEncryptionKey;
    }
    if (this._responseSignatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSignatureAlgorithm = this._responseSignatureAlgorithm;
    }
    if (this._sessionAbsoluteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAbsoluteTimeout = this._sessionAbsoluteTimeout;
    }
    if (this._sessionAudience !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAudience = this._sessionAudience;
    }
    if (this._sessionCookieDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieDomain = this._sessionCookieDomain;
    }
    if (this._sessionCookieHttpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieHttpOnly = this._sessionCookieHttpOnly;
    }
    if (this._sessionCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieName = this._sessionCookieName;
    }
    if (this._sessionCookiePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookiePath = this._sessionCookiePath;
    }
    if (this._sessionCookieSameSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSameSite = this._sessionCookieSameSite;
    }
    if (this._sessionCookieSecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCookieSecure = this._sessionCookieSecure;
    }
    if (this._sessionEnforceSameSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEnforceSameSubject = this._sessionEnforceSameSubject;
    }
    if (this._sessionHashStorageKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionHashStorageKey = this._sessionHashStorageKey;
    }
    if (this._sessionHashSubject !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionHashSubject = this._sessionHashSubject;
    }
    if (this._sessionIdlingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionIdlingTimeout = this._sessionIdlingTimeout;
    }
    if (this._sessionMemcachedHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedHost = this._sessionMemcachedHost;
    }
    if (this._sessionMemcachedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedPort = this._sessionMemcachedPort;
    }
    if (this._sessionMemcachedPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedPrefix = this._sessionMemcachedPrefix;
    }
    if (this._sessionMemcachedSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMemcachedSocket = this._sessionMemcachedSocket;
    }
    if (this._sessionRemember !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRemember = this._sessionRemember;
    }
    if (this._sessionRememberAbsoluteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRememberAbsoluteTimeout = this._sessionRememberAbsoluteTimeout;
    }
    if (this._sessionRememberCookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRememberCookieName = this._sessionRememberCookieName;
    }
    if (this._sessionRememberRollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRememberRollingTimeout = this._sessionRememberRollingTimeout;
    }
    if (this._sessionRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRequestHeaders = this._sessionRequestHeaders;
    }
    if (this._sessionResponseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionResponseHeaders = this._sessionResponseHeaders;
    }
    if (this._sessionRollingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionRollingTimeout = this._sessionRollingTimeout;
    }
    if (this._sessionSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionSecret = this._sessionSecret;
    }
    if (this._sessionStorage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStorage = this._sessionStorage;
    }
    if (this._sessionStoreMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStoreMetadata = this._sessionStoreMetadata;
    }
    if (this._validateAssertionSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateAssertionSignature = this._validateAssertionSignature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginSamlConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._anonymous = undefined;
      this._assertionConsumerPath = undefined;
      this._idpCertificate = undefined;
      this._idpSsoUrl = undefined;
      this._issuer = undefined;
      this._nameidFormat = undefined;
      this._redis.internalValue = undefined;
      this._requestDigestAlgorithm = undefined;
      this._requestSignatureAlgorithm = undefined;
      this._requestSigningCertificate = undefined;
      this._requestSigningKey = undefined;
      this._responseDigestAlgorithm = undefined;
      this._responseEncryptionKey = undefined;
      this._responseSignatureAlgorithm = undefined;
      this._sessionAbsoluteTimeout = undefined;
      this._sessionAudience = undefined;
      this._sessionCookieDomain = undefined;
      this._sessionCookieHttpOnly = undefined;
      this._sessionCookieName = undefined;
      this._sessionCookiePath = undefined;
      this._sessionCookieSameSite = undefined;
      this._sessionCookieSecure = undefined;
      this._sessionEnforceSameSubject = undefined;
      this._sessionHashStorageKey = undefined;
      this._sessionHashSubject = undefined;
      this._sessionIdlingTimeout = undefined;
      this._sessionMemcachedHost = undefined;
      this._sessionMemcachedPort = undefined;
      this._sessionMemcachedPrefix = undefined;
      this._sessionMemcachedSocket = undefined;
      this._sessionRemember = undefined;
      this._sessionRememberAbsoluteTimeout = undefined;
      this._sessionRememberCookieName = undefined;
      this._sessionRememberRollingTimeout = undefined;
      this._sessionRequestHeaders = undefined;
      this._sessionResponseHeaders = undefined;
      this._sessionRollingTimeout = undefined;
      this._sessionSecret = undefined;
      this._sessionStorage = undefined;
      this._sessionStoreMetadata = undefined;
      this._validateAssertionSignature = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._anonymous = value.anonymous;
      this._assertionConsumerPath = value.assertionConsumerPath;
      this._idpCertificate = value.idpCertificate;
      this._idpSsoUrl = value.idpSsoUrl;
      this._issuer = value.issuer;
      this._nameidFormat = value.nameidFormat;
      this._redis.internalValue = value.redis;
      this._requestDigestAlgorithm = value.requestDigestAlgorithm;
      this._requestSignatureAlgorithm = value.requestSignatureAlgorithm;
      this._requestSigningCertificate = value.requestSigningCertificate;
      this._requestSigningKey = value.requestSigningKey;
      this._responseDigestAlgorithm = value.responseDigestAlgorithm;
      this._responseEncryptionKey = value.responseEncryptionKey;
      this._responseSignatureAlgorithm = value.responseSignatureAlgorithm;
      this._sessionAbsoluteTimeout = value.sessionAbsoluteTimeout;
      this._sessionAudience = value.sessionAudience;
      this._sessionCookieDomain = value.sessionCookieDomain;
      this._sessionCookieHttpOnly = value.sessionCookieHttpOnly;
      this._sessionCookieName = value.sessionCookieName;
      this._sessionCookiePath = value.sessionCookiePath;
      this._sessionCookieSameSite = value.sessionCookieSameSite;
      this._sessionCookieSecure = value.sessionCookieSecure;
      this._sessionEnforceSameSubject = value.sessionEnforceSameSubject;
      this._sessionHashStorageKey = value.sessionHashStorageKey;
      this._sessionHashSubject = value.sessionHashSubject;
      this._sessionIdlingTimeout = value.sessionIdlingTimeout;
      this._sessionMemcachedHost = value.sessionMemcachedHost;
      this._sessionMemcachedPort = value.sessionMemcachedPort;
      this._sessionMemcachedPrefix = value.sessionMemcachedPrefix;
      this._sessionMemcachedSocket = value.sessionMemcachedSocket;
      this._sessionRemember = value.sessionRemember;
      this._sessionRememberAbsoluteTimeout = value.sessionRememberAbsoluteTimeout;
      this._sessionRememberCookieName = value.sessionRememberCookieName;
      this._sessionRememberRollingTimeout = value.sessionRememberRollingTimeout;
      this._sessionRequestHeaders = value.sessionRequestHeaders;
      this._sessionResponseHeaders = value.sessionResponseHeaders;
      this._sessionRollingTimeout = value.sessionRollingTimeout;
      this._sessionSecret = value.sessionSecret;
      this._sessionStorage = value.sessionStorage;
      this._sessionStoreMetadata = value.sessionStoreMetadata;
      this._validateAssertionSignature = value.validateAssertionSignature;
    }
  }

  // anonymous - computed: false, optional: true, required: false
  private _anonymous?: string; 
  public get anonymous() {
    return this.getStringAttribute('anonymous');
  }
  public set anonymous(value: string) {
    this._anonymous = value;
  }
  public resetAnonymous() {
    this._anonymous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anonymousInput() {
    return this._anonymous;
  }

  // assertion_consumer_path - computed: false, optional: false, required: true
  private _assertionConsumerPath?: string; 
  public get assertionConsumerPath() {
    return this.getStringAttribute('assertion_consumer_path');
  }
  public set assertionConsumerPath(value: string) {
    this._assertionConsumerPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionConsumerPathInput() {
    return this._assertionConsumerPath;
  }

  // idp_certificate - computed: false, optional: true, required: false
  private _idpCertificate?: string; 
  public get idpCertificate() {
    return this.getStringAttribute('idp_certificate');
  }
  public set idpCertificate(value: string) {
    this._idpCertificate = value;
  }
  public resetIdpCertificate() {
    this._idpCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idpCertificateInput() {
    return this._idpCertificate;
  }

  // idp_sso_url - computed: false, optional: false, required: true
  private _idpSsoUrl?: string; 
  public get idpSsoUrl() {
    return this.getStringAttribute('idp_sso_url');
  }
  public set idpSsoUrl(value: string) {
    this._idpSsoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idpSsoUrlInput() {
    return this._idpSsoUrl;
  }

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // nameid_format - computed: true, optional: true, required: false
  private _nameidFormat?: string; 
  public get nameidFormat() {
    return this.getStringAttribute('nameid_format');
  }
  public set nameidFormat(value: string) {
    this._nameidFormat = value;
  }
  public resetNameidFormat() {
    this._nameidFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameidFormatInput() {
    return this._nameidFormat;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new GatewayPluginSamlConfigRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginSamlConfigRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // request_digest_algorithm - computed: true, optional: true, required: false
  private _requestDigestAlgorithm?: string; 
  public get requestDigestAlgorithm() {
    return this.getStringAttribute('request_digest_algorithm');
  }
  public set requestDigestAlgorithm(value: string) {
    this._requestDigestAlgorithm = value;
  }
  public resetRequestDigestAlgorithm() {
    this._requestDigestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDigestAlgorithmInput() {
    return this._requestDigestAlgorithm;
  }

  // request_signature_algorithm - computed: true, optional: true, required: false
  private _requestSignatureAlgorithm?: string; 
  public get requestSignatureAlgorithm() {
    return this.getStringAttribute('request_signature_algorithm');
  }
  public set requestSignatureAlgorithm(value: string) {
    this._requestSignatureAlgorithm = value;
  }
  public resetRequestSignatureAlgorithm() {
    this._requestSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSignatureAlgorithmInput() {
    return this._requestSignatureAlgorithm;
  }

  // request_signing_certificate - computed: false, optional: true, required: false
  private _requestSigningCertificate?: string; 
  public get requestSigningCertificate() {
    return this.getStringAttribute('request_signing_certificate');
  }
  public set requestSigningCertificate(value: string) {
    this._requestSigningCertificate = value;
  }
  public resetRequestSigningCertificate() {
    this._requestSigningCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSigningCertificateInput() {
    return this._requestSigningCertificate;
  }

  // request_signing_key - computed: false, optional: true, required: false
  private _requestSigningKey?: string; 
  public get requestSigningKey() {
    return this.getStringAttribute('request_signing_key');
  }
  public set requestSigningKey(value: string) {
    this._requestSigningKey = value;
  }
  public resetRequestSigningKey() {
    this._requestSigningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSigningKeyInput() {
    return this._requestSigningKey;
  }

  // response_digest_algorithm - computed: true, optional: true, required: false
  private _responseDigestAlgorithm?: string; 
  public get responseDigestAlgorithm() {
    return this.getStringAttribute('response_digest_algorithm');
  }
  public set responseDigestAlgorithm(value: string) {
    this._responseDigestAlgorithm = value;
  }
  public resetResponseDigestAlgorithm() {
    this._responseDigestAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseDigestAlgorithmInput() {
    return this._responseDigestAlgorithm;
  }

  // response_encryption_key - computed: false, optional: true, required: false
  private _responseEncryptionKey?: string; 
  public get responseEncryptionKey() {
    return this.getStringAttribute('response_encryption_key');
  }
  public set responseEncryptionKey(value: string) {
    this._responseEncryptionKey = value;
  }
  public resetResponseEncryptionKey() {
    this._responseEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseEncryptionKeyInput() {
    return this._responseEncryptionKey;
  }

  // response_signature_algorithm - computed: true, optional: true, required: false
  private _responseSignatureAlgorithm?: string; 
  public get responseSignatureAlgorithm() {
    return this.getStringAttribute('response_signature_algorithm');
  }
  public set responseSignatureAlgorithm(value: string) {
    this._responseSignatureAlgorithm = value;
  }
  public resetResponseSignatureAlgorithm() {
    this._responseSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSignatureAlgorithmInput() {
    return this._responseSignatureAlgorithm;
  }

  // session_absolute_timeout - computed: true, optional: true, required: false
  private _sessionAbsoluteTimeout?: number; 
  public get sessionAbsoluteTimeout() {
    return this.getNumberAttribute('session_absolute_timeout');
  }
  public set sessionAbsoluteTimeout(value: number) {
    this._sessionAbsoluteTimeout = value;
  }
  public resetSessionAbsoluteTimeout() {
    this._sessionAbsoluteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAbsoluteTimeoutInput() {
    return this._sessionAbsoluteTimeout;
  }

  // session_audience - computed: true, optional: true, required: false
  private _sessionAudience?: string; 
  public get sessionAudience() {
    return this.getStringAttribute('session_audience');
  }
  public set sessionAudience(value: string) {
    this._sessionAudience = value;
  }
  public resetSessionAudience() {
    this._sessionAudience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAudienceInput() {
    return this._sessionAudience;
  }

  // session_cookie_domain - computed: false, optional: true, required: false
  private _sessionCookieDomain?: string; 
  public get sessionCookieDomain() {
    return this.getStringAttribute('session_cookie_domain');
  }
  public set sessionCookieDomain(value: string) {
    this._sessionCookieDomain = value;
  }
  public resetSessionCookieDomain() {
    this._sessionCookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieDomainInput() {
    return this._sessionCookieDomain;
  }

  // session_cookie_http_only - computed: true, optional: true, required: false
  private _sessionCookieHttpOnly?: boolean | cdktf.IResolvable; 
  public get sessionCookieHttpOnly() {
    return this.getBooleanAttribute('session_cookie_http_only');
  }
  public set sessionCookieHttpOnly(value: boolean | cdktf.IResolvable) {
    this._sessionCookieHttpOnly = value;
  }
  public resetSessionCookieHttpOnly() {
    this._sessionCookieHttpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieHttpOnlyInput() {
    return this._sessionCookieHttpOnly;
  }

  // session_cookie_name - computed: true, optional: true, required: false
  private _sessionCookieName?: string; 
  public get sessionCookieName() {
    return this.getStringAttribute('session_cookie_name');
  }
  public set sessionCookieName(value: string) {
    this._sessionCookieName = value;
  }
  public resetSessionCookieName() {
    this._sessionCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieNameInput() {
    return this._sessionCookieName;
  }

  // session_cookie_path - computed: true, optional: true, required: false
  private _sessionCookiePath?: string; 
  public get sessionCookiePath() {
    return this.getStringAttribute('session_cookie_path');
  }
  public set sessionCookiePath(value: string) {
    this._sessionCookiePath = value;
  }
  public resetSessionCookiePath() {
    this._sessionCookiePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookiePathInput() {
    return this._sessionCookiePath;
  }

  // session_cookie_same_site - computed: true, optional: true, required: false
  private _sessionCookieSameSite?: string; 
  public get sessionCookieSameSite() {
    return this.getStringAttribute('session_cookie_same_site');
  }
  public set sessionCookieSameSite(value: string) {
    this._sessionCookieSameSite = value;
  }
  public resetSessionCookieSameSite() {
    this._sessionCookieSameSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSameSiteInput() {
    return this._sessionCookieSameSite;
  }

  // session_cookie_secure - computed: false, optional: true, required: false
  private _sessionCookieSecure?: boolean | cdktf.IResolvable; 
  public get sessionCookieSecure() {
    return this.getBooleanAttribute('session_cookie_secure');
  }
  public set sessionCookieSecure(value: boolean | cdktf.IResolvable) {
    this._sessionCookieSecure = value;
  }
  public resetSessionCookieSecure() {
    this._sessionCookieSecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCookieSecureInput() {
    return this._sessionCookieSecure;
  }

  // session_enforce_same_subject - computed: true, optional: true, required: false
  private _sessionEnforceSameSubject?: boolean | cdktf.IResolvable; 
  public get sessionEnforceSameSubject() {
    return this.getBooleanAttribute('session_enforce_same_subject');
  }
  public set sessionEnforceSameSubject(value: boolean | cdktf.IResolvable) {
    this._sessionEnforceSameSubject = value;
  }
  public resetSessionEnforceSameSubject() {
    this._sessionEnforceSameSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEnforceSameSubjectInput() {
    return this._sessionEnforceSameSubject;
  }

  // session_hash_storage_key - computed: true, optional: true, required: false
  private _sessionHashStorageKey?: boolean | cdktf.IResolvable; 
  public get sessionHashStorageKey() {
    return this.getBooleanAttribute('session_hash_storage_key');
  }
  public set sessionHashStorageKey(value: boolean | cdktf.IResolvable) {
    this._sessionHashStorageKey = value;
  }
  public resetSessionHashStorageKey() {
    this._sessionHashStorageKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionHashStorageKeyInput() {
    return this._sessionHashStorageKey;
  }

  // session_hash_subject - computed: true, optional: true, required: false
  private _sessionHashSubject?: boolean | cdktf.IResolvable; 
  public get sessionHashSubject() {
    return this.getBooleanAttribute('session_hash_subject');
  }
  public set sessionHashSubject(value: boolean | cdktf.IResolvable) {
    this._sessionHashSubject = value;
  }
  public resetSessionHashSubject() {
    this._sessionHashSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionHashSubjectInput() {
    return this._sessionHashSubject;
  }

  // session_idling_timeout - computed: true, optional: true, required: false
  private _sessionIdlingTimeout?: number; 
  public get sessionIdlingTimeout() {
    return this.getNumberAttribute('session_idling_timeout');
  }
  public set sessionIdlingTimeout(value: number) {
    this._sessionIdlingTimeout = value;
  }
  public resetSessionIdlingTimeout() {
    this._sessionIdlingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionIdlingTimeoutInput() {
    return this._sessionIdlingTimeout;
  }

  // session_memcached_host - computed: true, optional: true, required: false
  private _sessionMemcachedHost?: string; 
  public get sessionMemcachedHost() {
    return this.getStringAttribute('session_memcached_host');
  }
  public set sessionMemcachedHost(value: string) {
    this._sessionMemcachedHost = value;
  }
  public resetSessionMemcachedHost() {
    this._sessionMemcachedHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedHostInput() {
    return this._sessionMemcachedHost;
  }

  // session_memcached_port - computed: true, optional: true, required: false
  private _sessionMemcachedPort?: number; 
  public get sessionMemcachedPort() {
    return this.getNumberAttribute('session_memcached_port');
  }
  public set sessionMemcachedPort(value: number) {
    this._sessionMemcachedPort = value;
  }
  public resetSessionMemcachedPort() {
    this._sessionMemcachedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedPortInput() {
    return this._sessionMemcachedPort;
  }

  // session_memcached_prefix - computed: false, optional: true, required: false
  private _sessionMemcachedPrefix?: string; 
  public get sessionMemcachedPrefix() {
    return this.getStringAttribute('session_memcached_prefix');
  }
  public set sessionMemcachedPrefix(value: string) {
    this._sessionMemcachedPrefix = value;
  }
  public resetSessionMemcachedPrefix() {
    this._sessionMemcachedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedPrefixInput() {
    return this._sessionMemcachedPrefix;
  }

  // session_memcached_socket - computed: false, optional: true, required: false
  private _sessionMemcachedSocket?: string; 
  public get sessionMemcachedSocket() {
    return this.getStringAttribute('session_memcached_socket');
  }
  public set sessionMemcachedSocket(value: string) {
    this._sessionMemcachedSocket = value;
  }
  public resetSessionMemcachedSocket() {
    this._sessionMemcachedSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMemcachedSocketInput() {
    return this._sessionMemcachedSocket;
  }

  // session_remember - computed: true, optional: true, required: false
  private _sessionRemember?: boolean | cdktf.IResolvable; 
  public get sessionRemember() {
    return this.getBooleanAttribute('session_remember');
  }
  public set sessionRemember(value: boolean | cdktf.IResolvable) {
    this._sessionRemember = value;
  }
  public resetSessionRemember() {
    this._sessionRemember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberInput() {
    return this._sessionRemember;
  }

  // session_remember_absolute_timeout - computed: true, optional: true, required: false
  private _sessionRememberAbsoluteTimeout?: number; 
  public get sessionRememberAbsoluteTimeout() {
    return this.getNumberAttribute('session_remember_absolute_timeout');
  }
  public set sessionRememberAbsoluteTimeout(value: number) {
    this._sessionRememberAbsoluteTimeout = value;
  }
  public resetSessionRememberAbsoluteTimeout() {
    this._sessionRememberAbsoluteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberAbsoluteTimeoutInput() {
    return this._sessionRememberAbsoluteTimeout;
  }

  // session_remember_cookie_name - computed: true, optional: true, required: false
  private _sessionRememberCookieName?: string; 
  public get sessionRememberCookieName() {
    return this.getStringAttribute('session_remember_cookie_name');
  }
  public set sessionRememberCookieName(value: string) {
    this._sessionRememberCookieName = value;
  }
  public resetSessionRememberCookieName() {
    this._sessionRememberCookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberCookieNameInput() {
    return this._sessionRememberCookieName;
  }

  // session_remember_rolling_timeout - computed: true, optional: true, required: false
  private _sessionRememberRollingTimeout?: number; 
  public get sessionRememberRollingTimeout() {
    return this.getNumberAttribute('session_remember_rolling_timeout');
  }
  public set sessionRememberRollingTimeout(value: number) {
    this._sessionRememberRollingTimeout = value;
  }
  public resetSessionRememberRollingTimeout() {
    this._sessionRememberRollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRememberRollingTimeoutInput() {
    return this._sessionRememberRollingTimeout;
  }

  // session_request_headers - computed: false, optional: true, required: false
  private _sessionRequestHeaders?: string[]; 
  public get sessionRequestHeaders() {
    return this.getListAttribute('session_request_headers');
  }
  public set sessionRequestHeaders(value: string[]) {
    this._sessionRequestHeaders = value;
  }
  public resetSessionRequestHeaders() {
    this._sessionRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRequestHeadersInput() {
    return this._sessionRequestHeaders;
  }

  // session_response_headers - computed: false, optional: true, required: false
  private _sessionResponseHeaders?: string[]; 
  public get sessionResponseHeaders() {
    return this.getListAttribute('session_response_headers');
  }
  public set sessionResponseHeaders(value: string[]) {
    this._sessionResponseHeaders = value;
  }
  public resetSessionResponseHeaders() {
    this._sessionResponseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionResponseHeadersInput() {
    return this._sessionResponseHeaders;
  }

  // session_rolling_timeout - computed: true, optional: true, required: false
  private _sessionRollingTimeout?: number; 
  public get sessionRollingTimeout() {
    return this.getNumberAttribute('session_rolling_timeout');
  }
  public set sessionRollingTimeout(value: number) {
    this._sessionRollingTimeout = value;
  }
  public resetSessionRollingTimeout() {
    this._sessionRollingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionRollingTimeoutInput() {
    return this._sessionRollingTimeout;
  }

  // session_secret - computed: false, optional: false, required: true
  private _sessionSecret?: string; 
  public get sessionSecret() {
    return this.getStringAttribute('session_secret');
  }
  public set sessionSecret(value: string) {
    this._sessionSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSecretInput() {
    return this._sessionSecret;
  }

  // session_storage - computed: true, optional: true, required: false
  private _sessionStorage?: string; 
  public get sessionStorage() {
    return this.getStringAttribute('session_storage');
  }
  public set sessionStorage(value: string) {
    this._sessionStorage = value;
  }
  public resetSessionStorage() {
    this._sessionStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStorageInput() {
    return this._sessionStorage;
  }

  // session_store_metadata - computed: true, optional: true, required: false
  private _sessionStoreMetadata?: boolean | cdktf.IResolvable; 
  public get sessionStoreMetadata() {
    return this.getBooleanAttribute('session_store_metadata');
  }
  public set sessionStoreMetadata(value: boolean | cdktf.IResolvable) {
    this._sessionStoreMetadata = value;
  }
  public resetSessionStoreMetadata() {
    this._sessionStoreMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStoreMetadataInput() {
    return this._sessionStoreMetadata;
  }

  // validate_assertion_signature - computed: true, optional: true, required: false
  private _validateAssertionSignature?: boolean | cdktf.IResolvable; 
  public get validateAssertionSignature() {
    return this.getBooleanAttribute('validate_assertion_signature');
  }
  public set validateAssertionSignature(value: boolean | cdktf.IResolvable) {
    this._validateAssertionSignature = value;
  }
  public resetValidateAssertionSignature() {
    this._validateAssertionSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateAssertionSignatureInput() {
    return this._validateAssertionSignature;
  }
}
export interface GatewayPluginSamlOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#access GatewayPluginSaml#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSamlOrderingAfterToTerraform(struct?: GatewayPluginSamlOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSamlOrderingAfterToHclTerraform(struct?: GatewayPluginSamlOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginSamlOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSamlOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSamlOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSamlOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#access GatewayPluginSaml#access}
  */
  readonly access?: string[];
}

export function gatewayPluginSamlOrderingBeforeToTerraform(struct?: GatewayPluginSamlOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginSamlOrderingBeforeToHclTerraform(struct?: GatewayPluginSamlOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginSamlOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSamlOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSamlOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSamlOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#after GatewayPluginSaml#after}
  */
  readonly after?: GatewayPluginSamlOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#before GatewayPluginSaml#before}
  */
  readonly before?: GatewayPluginSamlOrderingBefore;
}

export function gatewayPluginSamlOrderingToTerraform(struct?: GatewayPluginSamlOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginSamlOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginSamlOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginSamlOrderingToHclTerraform(struct?: GatewayPluginSamlOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginSamlOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSamlOrderingAfter",
    },
    before: {
      value: gatewayPluginSamlOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginSamlOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginSamlOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSamlOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSamlOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginSamlOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginSamlOrderingAfter) {
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
  private _before = new GatewayPluginSamlOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginSamlOrderingBefore) {
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
export interface GatewayPluginSamlPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#id GatewayPluginSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#name GatewayPluginSaml#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#path GatewayPluginSaml#path}
  */
  readonly path?: string;
}

export function gatewayPluginSamlPartialsToTerraform(struct?: GatewayPluginSamlPartials | cdktf.IResolvable): any {
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


export function gatewayPluginSamlPartialsToHclTerraform(struct?: GatewayPluginSamlPartials | cdktf.IResolvable): any {
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

export class GatewayPluginSamlPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginSamlPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSamlPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginSamlPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginSamlPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginSamlPartialsOutputReference {
    return new GatewayPluginSamlPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginSamlRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#id GatewayPluginSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSamlRouteToTerraform(struct?: GatewayPluginSamlRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSamlRouteToHclTerraform(struct?: GatewayPluginSamlRoute | cdktf.IResolvable): any {
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

export class GatewayPluginSamlRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSamlRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSamlRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginSamlService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#id GatewayPluginSaml#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginSamlServiceToTerraform(struct?: GatewayPluginSamlService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginSamlServiceToHclTerraform(struct?: GatewayPluginSamlService | cdktf.IResolvable): any {
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

export class GatewayPluginSamlServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginSamlService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginSamlService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml konnect_gateway_plugin_saml}
*/
export class GatewayPluginSaml extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_saml";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginSaml resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginSaml to import
  * @param importFromId The id of the existing GatewayPluginSaml that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginSaml to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_saml", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_saml konnect_gateway_plugin_saml} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginSamlConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginSamlConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_saml',
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
  private _config = new GatewayPluginSamlConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginSamlConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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
  private _ordering = new GatewayPluginSamlOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginSamlOrdering) {
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
  private _partials = new GatewayPluginSamlPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginSamlPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginSamlRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginSamlRoute) {
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
  private _service = new GatewayPluginSamlServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginSamlService) {
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
      config: gatewayPluginSamlConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginSamlOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginSamlPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginSamlRouteToTerraform(this._route.internalValue),
      service: gatewayPluginSamlServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginSamlConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSamlConfigA",
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
        value: gatewayPluginSamlOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSamlOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginSamlPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginSamlPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginSamlRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSamlRoute",
      },
      service: {
        value: gatewayPluginSamlServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginSamlService",
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
