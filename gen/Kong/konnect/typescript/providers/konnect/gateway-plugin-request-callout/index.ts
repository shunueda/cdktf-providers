// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginRequestCalloutConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#config GatewayPluginRequestCallout#config}
  */
  readonly config: GatewayPluginRequestCalloutConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#consumer GatewayPluginRequestCallout#consumer}
  */
  readonly consumer?: GatewayPluginRequestCalloutConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#consumer_group GatewayPluginRequestCallout#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginRequestCalloutConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#control_plane_id GatewayPluginRequestCallout#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#created_at GatewayPluginRequestCallout#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#enabled GatewayPluginRequestCallout#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#id GatewayPluginRequestCallout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#instance_name GatewayPluginRequestCallout#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#ordering GatewayPluginRequestCallout#ordering}
  */
  readonly ordering?: GatewayPluginRequestCalloutOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#partials GatewayPluginRequestCallout#partials}
  */
  readonly partials?: GatewayPluginRequestCalloutPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#protocols GatewayPluginRequestCallout#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#route GatewayPluginRequestCallout#route}
  */
  readonly route?: GatewayPluginRequestCalloutRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#service GatewayPluginRequestCallout#service}
  */
  readonly service?: GatewayPluginRequestCalloutService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#tags GatewayPluginRequestCallout#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#updated_at GatewayPluginRequestCallout#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginRequestCalloutConfigCacheMemory {
  /**
  * The name of the shared dictionary in which to hold cache entities when the memory strategy is selected. Note that this dictionary currently must be defined manually in the Kong Nginx template. Default: "kong_db_cache"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#dictionary_name GatewayPluginRequestCallout#dictionary_name}
  */
  readonly dictionaryName?: string;
}

export function gatewayPluginRequestCalloutConfigCacheMemoryToTerraform(struct?: GatewayPluginRequestCalloutConfigCacheMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dictionary_name: cdktf.stringToTerraform(struct!.dictionaryName),
  }
}


export function gatewayPluginRequestCalloutConfigCacheMemoryToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCacheMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dictionary_name: {
      value: cdktf.stringToHclTerraform(struct!.dictionaryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCacheMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCacheMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryName = this._dictionaryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCacheMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dictionaryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dictionaryName = value.dictionaryName;
    }
  }

  // dictionary_name - computed: true, optional: true, required: false
  private _dictionaryName?: string; 
  public get dictionaryName() {
    return this.getStringAttribute('dictionary_name');
  }
  public set dictionaryName(value: string) {
    this._dictionaryName = value;
  }
  public resetDictionaryName() {
    this._dictionaryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryNameInput() {
    return this._dictionaryName;
  }
}
export interface GatewayPluginRequestCalloutConfigCacheRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#ip GatewayPluginRequestCallout#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#port GatewayPluginRequestCallout#port}
  */
  readonly port?: number;
}

export function gatewayPluginRequestCalloutConfigCacheRedisClusterNodesToTerraform(struct?: GatewayPluginRequestCalloutConfigCacheRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginRequestCalloutConfigCacheRedisClusterNodesToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCacheRedisClusterNodes | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutConfigCacheRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginRequestCalloutConfigCacheRedisClusterNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutConfigCacheRedisClusterNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginRequestCalloutConfigCacheRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginRequestCalloutConfigCacheRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginRequestCalloutConfigCacheRedisClusterNodesOutputReference {
    return new GatewayPluginRequestCalloutConfigCacheRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#host GatewayPluginRequestCallout#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#port GatewayPluginRequestCallout#port}
  */
  readonly port?: number;
}

export function gatewayPluginRequestCalloutConfigCacheRedisSentinelNodesToTerraform(struct?: GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginRequestCalloutConfigCacheRedisSentinelNodesToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutConfigCacheRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginRequestCalloutConfigCacheRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginRequestCalloutConfigCacheRedisSentinelNodesOutputReference {
    return new GatewayPluginRequestCalloutConfigCacheRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginRequestCalloutConfigCacheRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#cluster_max_redirections GatewayPluginRequestCallout#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#cluster_nodes GatewayPluginRequestCallout#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginRequestCalloutConfigCacheRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#connect_timeout GatewayPluginRequestCallout#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#connection_is_proxied GatewayPluginRequestCallout#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#database GatewayPluginRequestCallout#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#host GatewayPluginRequestCallout#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#keepalive_backlog GatewayPluginRequestCallout#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#keepalive_pool_size GatewayPluginRequestCallout#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#password GatewayPluginRequestCallout#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#port GatewayPluginRequestCallout#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#read_timeout GatewayPluginRequestCallout#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#send_timeout GatewayPluginRequestCallout#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#sentinel_master GatewayPluginRequestCallout#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#sentinel_nodes GatewayPluginRequestCallout#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#sentinel_password GatewayPluginRequestCallout#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#sentinel_role GatewayPluginRequestCallout#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#sentinel_username GatewayPluginRequestCallout#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#server_name GatewayPluginRequestCallout#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#ssl GatewayPluginRequestCallout#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#ssl_verify GatewayPluginRequestCallout#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#username GatewayPluginRequestCallout#username}
  */
  readonly username?: string;
}

export function gatewayPluginRequestCalloutConfigCacheRedisToTerraform(struct?: GatewayPluginRequestCalloutConfigCacheRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginRequestCalloutConfigCacheRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    connection_is_proxied: cdktf.booleanToTerraform(struct!.connectionIsProxied),
    database: cdktf.numberToTerraform(struct!.database),
    host: cdktf.stringToTerraform(struct!.host),
    keepalive_backlog: cdktf.numberToTerraform(struct!.keepaliveBacklog),
    keepalive_pool_size: cdktf.numberToTerraform(struct!.keepalivePoolSize),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    read_timeout: cdktf.numberToTerraform(struct!.readTimeout),
    send_timeout: cdktf.numberToTerraform(struct!.sendTimeout),
    sentinel_master: cdktf.stringToTerraform(struct!.sentinelMaster),
    sentinel_nodes: cdktf.listMapper(gatewayPluginRequestCalloutConfigCacheRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginRequestCalloutConfigCacheRedisToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCacheRedis | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gatewayPluginRequestCalloutConfigCacheRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginRequestCalloutConfigCacheRedisClusterNodesList",
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
      value: cdktf.listMapperHcl(gatewayPluginRequestCalloutConfigCacheRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginRequestCalloutConfigCacheRedisSentinelNodesList",
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

export class GatewayPluginRequestCalloutConfigCacheRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCacheRedis | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutConfigCacheRedis | cdktf.IResolvable | undefined) {
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
      this._readTimeout = undefined;
      this._sendTimeout = undefined;
      this._sentinelMaster = undefined;
      this._sentinelNodes.internalValue = undefined;
      this._sentinelPassword = undefined;
      this._sentinelRole = undefined;
      this._sentinelUsername = undefined;
      this._serverName = undefined;
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
      this._readTimeout = value.readTimeout;
      this._sendTimeout = value.sendTimeout;
      this._sentinelMaster = value.sentinelMaster;
      this._sentinelNodes.internalValue = value.sentinelNodes;
      this._sentinelPassword = value.sentinelPassword;
      this._sentinelRole = value.sentinelRole;
      this._sentinelUsername = value.sentinelUsername;
      this._serverName = value.serverName;
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
  private _clusterNodes = new GatewayPluginRequestCalloutConfigCacheRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginRequestCalloutConfigCacheRedisClusterNodes[] | cdktf.IResolvable) {
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
  private _sentinelNodes = new GatewayPluginRequestCalloutConfigCacheRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginRequestCalloutConfigCacheRedisSentinelNodes[] | cdktf.IResolvable) {
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
export interface GatewayPluginRequestCalloutConfigCache {
  /**
  * TTL in seconds of cache entities. Default: 300
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#cache_ttl GatewayPluginRequestCallout#cache_ttl}
  */
  readonly cacheTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#memory GatewayPluginRequestCallout#memory}
  */
  readonly memory?: GatewayPluginRequestCalloutConfigCacheMemory;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#redis GatewayPluginRequestCallout#redis}
  */
  readonly redis?: GatewayPluginRequestCalloutConfigCacheRedis;
  /**
  * The backing data store in which to hold cache entities. Accepted values are: `off`, `memory`, and `redis`. Default: "off"; must be one of ["memory", "off", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#strategy GatewayPluginRequestCallout#strategy}
  */
  readonly strategy?: string;
}

export function gatewayPluginRequestCalloutConfigCacheToTerraform(struct?: GatewayPluginRequestCalloutConfigCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_ttl: cdktf.numberToTerraform(struct!.cacheTtl),
    memory: gatewayPluginRequestCalloutConfigCacheMemoryToTerraform(struct!.memory),
    redis: gatewayPluginRequestCalloutConfigCacheRedisToTerraform(struct!.redis),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function gatewayPluginRequestCalloutConfigCacheToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_ttl: {
      value: cdktf.numberToHclTerraform(struct!.cacheTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    memory: {
      value: gatewayPluginRequestCalloutConfigCacheMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCacheMemory",
    },
    redis: {
      value: gatewayPluginRequestCalloutConfigCacheRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCacheRedis",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheTtl = this._cacheTtl;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cacheTtl = undefined;
      this._memory.internalValue = undefined;
      this._redis.internalValue = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cacheTtl = value.cacheTtl;
      this._memory.internalValue = value.memory;
      this._redis.internalValue = value.redis;
      this._strategy = value.strategy;
    }
  }

  // cache_ttl - computed: true, optional: true, required: false
  private _cacheTtl?: number; 
  public get cacheTtl() {
    return this.getNumberAttribute('cache_ttl');
  }
  public set cacheTtl(value: number) {
    this._cacheTtl = value;
  }
  public resetCacheTtl() {
    this._cacheTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTtlInput() {
    return this._cacheTtl;
  }

  // memory - computed: true, optional: true, required: false
  private _memory = new GatewayPluginRequestCalloutConfigCacheMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: GatewayPluginRequestCalloutConfigCacheMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new GatewayPluginRequestCalloutConfigCacheRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginRequestCalloutConfigCacheRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
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
}
export interface GatewayPluginRequestCalloutConfigCalloutsCache {
  /**
  * If `true`, skips caching the callout response. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#bypass GatewayPluginRequestCallout#bypass}
  */
  readonly bypass?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigCalloutsCacheToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypass: cdktf.booleanToTerraform(struct!.bypass),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsCacheToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypass: {
      value: cdktf.booleanToHclTerraform(struct!.bypass),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypass = this._bypass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bypass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bypass = value.bypass;
    }
  }

  // bypass - computed: true, optional: true, required: false
  private _bypass?: boolean | cdktf.IResolvable; 
  public get bypass() {
    return this.getBooleanAttribute('bypass');
  }
  public set bypass(value: boolean | cdktf.IResolvable) {
    this._bypass = value;
  }
  public resetBypass() {
    this._bypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassInput() {
    return this._bypass;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequestBody {
  /**
  * The custom body fields to be added to the callout HTTP request. Values can contain Lua expressions in the form $(some_lua_expression). The syntax is based on `request-transformer-advanced` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#custom GatewayPluginRequestCallout#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * If `true`, decodes the request's body and make it available for customizations. Only JSON content type is supported. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#decode GatewayPluginRequestCallout#decode}
  */
  readonly decode?: boolean | cdktf.IResolvable;
  /**
  * If `true`, forwards the incoming request's body to the callout request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#forward GatewayPluginRequestCallout#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestBodyToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.custom),
    decode: cdktf.booleanToTerraform(struct!.decode),
    forward: cdktf.booleanToTerraform(struct!.forward),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestBodyToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.custom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    decode: {
      value: cdktf.booleanToHclTerraform(struct!.decode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsRequestBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequestBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._decode !== undefined) {
      hasAnyValues = true;
      internalValueResult.decode = this._decode;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequestBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._decode = undefined;
      this._forward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._decode = value.decode;
      this._forward = value.forward;
    }
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // decode - computed: true, optional: true, required: false
  private _decode?: boolean | cdktf.IResolvable; 
  public get decode() {
    return this.getBooleanAttribute('decode');
  }
  public set decode(value: boolean | cdktf.IResolvable) {
    this._decode = value;
  }
  public resetDecode() {
    this._decode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeInput() {
    return this._decode;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequestError {
  /**
  * The error code to respond with if `on_error` is `fail` or if `retries` is achieved. Default: 400
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#error_response_code GatewayPluginRequestCallout#error_response_code}
  */
  readonly errorResponseCode?: number;
  /**
  * The error mesasge to respond with if `on_error` is set to `fail` or if `retries` is achieved. Templating with Lua expressions is supported. Default: "service callout error"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#error_response_msg GatewayPluginRequestCallout#error_response_msg}
  */
  readonly errorResponseMsg?: string;
  /**
  * The list of HTTP status codes considered errors under the error handling policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#http_statuses GatewayPluginRequestCallout#http_statuses}
  */
  readonly httpStatuses?: number[];
  /**
  * Default: "fail"; must be one of ["continue", "fail", "retry"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#on_error GatewayPluginRequestCallout#on_error}
  */
  readonly onError?: string;
  /**
  * The number of retries the plugin will attempt on TCP and HTTP errors if `on_error` is set to `retry`. Default: 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#retries GatewayPluginRequestCallout#retries}
  */
  readonly retries?: number;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestErrorToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    error_response_code: cdktf.numberToTerraform(struct!.errorResponseCode),
    error_response_msg: cdktf.stringToTerraform(struct!.errorResponseMsg),
    http_statuses: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.httpStatuses),
    on_error: cdktf.stringToTerraform(struct!.onError),
    retries: cdktf.numberToTerraform(struct!.retries),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestErrorToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestError | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    error_response_code: {
      value: cdktf.numberToHclTerraform(struct!.errorResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_response_msg: {
      value: cdktf.stringToHclTerraform(struct!.errorResponseMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_statuses: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.httpStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    on_error: {
      value: cdktf.stringToHclTerraform(struct!.onError),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retries: {
      value: cdktf.numberToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsRequestErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequestError | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errorResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseCode = this._errorResponseCode;
    }
    if (this._errorResponseMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorResponseMsg = this._errorResponseMsg;
    }
    if (this._httpStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpStatuses = this._httpStatuses;
    }
    if (this._onError !== undefined) {
      hasAnyValues = true;
      internalValueResult.onError = this._onError;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequestError | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._errorResponseCode = undefined;
      this._errorResponseMsg = undefined;
      this._httpStatuses = undefined;
      this._onError = undefined;
      this._retries = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._errorResponseCode = value.errorResponseCode;
      this._errorResponseMsg = value.errorResponseMsg;
      this._httpStatuses = value.httpStatuses;
      this._onError = value.onError;
      this._retries = value.retries;
    }
  }

  // error_response_code - computed: true, optional: true, required: false
  private _errorResponseCode?: number; 
  public get errorResponseCode() {
    return this.getNumberAttribute('error_response_code');
  }
  public set errorResponseCode(value: number) {
    this._errorResponseCode = value;
  }
  public resetErrorResponseCode() {
    this._errorResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseCodeInput() {
    return this._errorResponseCode;
  }

  // error_response_msg - computed: true, optional: true, required: false
  private _errorResponseMsg?: string; 
  public get errorResponseMsg() {
    return this.getStringAttribute('error_response_msg');
  }
  public set errorResponseMsg(value: string) {
    this._errorResponseMsg = value;
  }
  public resetErrorResponseMsg() {
    this._errorResponseMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorResponseMsgInput() {
    return this._errorResponseMsg;
  }

  // http_statuses - computed: true, optional: true, required: false
  private _httpStatuses?: number[]; 
  public get httpStatuses() {
    return this.getNumberListAttribute('http_statuses');
  }
  public set httpStatuses(value: number[]) {
    this._httpStatuses = value;
  }
  public resetHttpStatuses() {
    this._httpStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpStatusesInput() {
    return this._httpStatuses;
  }

  // on_error - computed: true, optional: true, required: false
  private _onError?: string; 
  public get onError() {
    return this.getStringAttribute('on_error');
  }
  public set onError(value: string) {
    this._onError = value;
  }
  public resetOnError() {
    this._onError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onErrorInput() {
    return this._onError;
  }

  // retries - computed: true, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this.getNumberAttribute('retries');
  }
  public set retries(value: number) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequestHeaders {
  /**
  * The custom headers to be added in the callout HTTP request. Values can contain Lua expressions in the form `$(some_lua_expression)`. The syntax is based on `request-transformer-advanced` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#custom GatewayPluginRequestCallout#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * If `true`, forwards the incoming request's headers to the callout request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#forward GatewayPluginRequestCallout#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestHeadersToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.custom),
    forward: cdktf.booleanToTerraform(struct!.forward),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestHeadersToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.custom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsRequestHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequestHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequestHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._forward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._forward = value.forward;
    }
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy {
  /**
  * The password to authenticate with, if the forward proxy is protected by basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#auth_password GatewayPluginRequestCallout#auth_password}
  */
  readonly authPassword?: string;
  /**
  * The username to authenticate with, if the forward proxy is protected by basic authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#auth_username GatewayPluginRequestCallout#auth_username}
  */
  readonly authUsername?: string;
  /**
  * The HTTP proxy URL. This proxy server will be used for HTTP requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#http_proxy GatewayPluginRequestCallout#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * The HTTPS proxy URL. This proxy server will be used for HTTPS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#https_proxy GatewayPluginRequestCallout#https_proxy}
  */
  readonly httpsProxy?: string;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxyToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_password: cdktf.stringToTerraform(struct!.authPassword),
    auth_username: cdktf.stringToTerraform(struct!.authUsername),
    http_proxy: cdktf.stringToTerraform(struct!.httpProxy),
    https_proxy: cdktf.stringToTerraform(struct!.httpsProxy),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxyToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_password: {
      value: cdktf.stringToHclTerraform(struct!.authPassword),
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
    http_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_proxy: {
      value: cdktf.stringToHclTerraform(struct!.httpsProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPassword = this._authPassword;
    }
    if (this._authUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUsername = this._authUsername;
    }
    if (this._httpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxy = this._httpProxy;
    }
    if (this._httpsProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsProxy = this._httpsProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authPassword = undefined;
      this._authUsername = undefined;
      this._httpProxy = undefined;
      this._httpsProxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authPassword = value.authPassword;
      this._authUsername = value.authUsername;
      this._httpProxy = value.httpProxy;
      this._httpsProxy = value.httpsProxy;
    }
  }

  // auth_password - computed: true, optional: true, required: false
  private _authPassword?: string; 
  public get authPassword() {
    return this.getStringAttribute('auth_password');
  }
  public set authPassword(value: string) {
    this._authPassword = value;
  }
  public resetAuthPassword() {
    this._authPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPasswordInput() {
    return this._authPassword;
  }

  // auth_username - computed: true, optional: true, required: false
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
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts {
  /**
  * The socket connect timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#connect GatewayPluginRequestCallout#connect}
  */
  readonly connect?: number;
  /**
  * The socket read timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#read GatewayPluginRequestCallout#read}
  */
  readonly read?: number;
  /**
  * The socket write timeout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#write GatewayPluginRequestCallout#write}
  */
  readonly write?: number;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeoutsToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect: cdktf.numberToTerraform(struct!.connect),
    read: cdktf.numberToTerraform(struct!.read),
    write: cdktf.numberToTerraform(struct!.write),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeoutsToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect: {
      value: cdktf.numberToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read: {
      value: cdktf.numberToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write: {
      value: cdktf.numberToHclTerraform(struct!.write),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._write !== undefined) {
      hasAnyValues = true;
      internalValueResult.write = this._write;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connect = undefined;
      this._read = undefined;
      this._write = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connect = value.connect;
      this._read = value.read;
      this._write = value.write;
    }
  }

  // connect - computed: true, optional: true, required: false
  private _connect?: number; 
  public get connect() {
    return this.getNumberAttribute('connect');
  }
  public set connect(value: number) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // read - computed: true, optional: true, required: false
  private _read?: number; 
  public get read() {
    return this.getNumberAttribute('read');
  }
  public set read(value: number) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // write - computed: true, optional: true, required: false
  private _write?: number; 
  public get write() {
    return this.getNumberAttribute('write');
  }
  public set write(value: number) {
    this._write = value;
  }
  public resetWrite() {
    this._write = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeInput() {
    return this._write;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts {
  /**
  * Proxy settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#proxy GatewayPluginRequestCallout#proxy}
  */
  readonly proxy?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy;
  /**
  * The SNI used in the callout request. Defaults to host if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#ssl_server_name GatewayPluginRequestCallout#ssl_server_name}
  */
  readonly sslServerName?: string;
  /**
  * If set to `true`, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#ssl_verify GatewayPluginRequestCallout#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Socket timeouts in milliseconds. All or none must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#timeouts GatewayPluginRequestCallout#timeouts}
  */
  readonly timeouts?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy: gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxyToTerraform(struct!.proxy),
    ssl_server_name: cdktf.stringToTerraform(struct!.sslServerName),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    timeouts: gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeoutsToTerraform(struct!.timeouts),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxyToHclTerraform(struct!.proxy),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy",
    },
    ssl_server_name: {
      value: cdktf.stringToHclTerraform(struct!.sslServerName),
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
    timeouts: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeoutsToHclTerraform(struct!.timeouts),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxy = this._proxy?.internalValue;
    }
    if (this._sslServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslServerName = this._sslServerName;
    }
    if (this._sslVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslVerify = this._sslVerify;
    }
    if (this._timeouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._proxy.internalValue = undefined;
      this._sslServerName = undefined;
      this._sslVerify = undefined;
      this._timeouts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._proxy.internalValue = value.proxy;
      this._sslServerName = value.sslServerName;
      this._sslVerify = value.sslVerify;
      this._timeouts.internalValue = value.timeouts;
    }
  }

  // proxy - computed: true, optional: true, required: false
  private _proxy = new GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxyOutputReference(this, "proxy");
  public get proxy() {
    return this._proxy;
  }
  public putProxy(value: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsProxy) {
    this._proxy.internalValue = value;
  }
  public resetProxy() {
    this._proxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy.internalValue;
  }

  // ssl_server_name - computed: true, optional: true, required: false
  private _sslServerName?: string; 
  public get sslServerName() {
    return this.getStringAttribute('ssl_server_name');
  }
  public set sslServerName(value: string) {
    this._sslServerName = value;
  }
  public resetSslServerName() {
    this._sslServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerNameInput() {
    return this._sslServerName;
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

  // timeouts - computed: true, optional: true, required: false
  private _timeouts = new GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequestQuery {
  /**
  * The custom query params to be added in the callout HTTP request. Values can contain Lua expressions in the form `$(some_lua_expression)`. The syntax is based on `request-transformer-advanced` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#custom GatewayPluginRequestCallout#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * If `true`, forwards the incoming request's query params to the callout request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#forward GatewayPluginRequestCallout#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestQueryToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.custom),
    forward: cdktf.booleanToTerraform(struct!.forward),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestQueryToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequestQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.custom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsRequestQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequestQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequestQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._forward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._forward = value.forward;
    }
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsRequest {
  /**
  * Callout request body customizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#body GatewayPluginRequestCallout#body}
  */
  readonly body?: GatewayPluginRequestCalloutConfigCalloutsRequestBody;
  /**
  * Lua code that executes before the callout request is made. **Warning** can impact system behavior. Standard Lua sandboxing restrictions apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#by_lua GatewayPluginRequestCallout#by_lua}
  */
  readonly byLua?: string;
  /**
  * The error handling policy the plugin will apply to TCP and HTTP errors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#error GatewayPluginRequestCallout#error}
  */
  readonly error?: GatewayPluginRequestCalloutConfigCalloutsRequestError;
  /**
  * Callout request header customizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#headers GatewayPluginRequestCallout#headers}
  */
  readonly headers?: GatewayPluginRequestCalloutConfigCalloutsRequestHeaders;
  /**
  * HTTP connection parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#http_opts GatewayPluginRequestCallout#http_opts}
  */
  readonly httpOpts?: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts;
  /**
  * The HTTP method that will be requested. Default: "GET"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#method GatewayPluginRequestCallout#method}
  */
  readonly method?: string;
  /**
  * Callout request query param customizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#query GatewayPluginRequestCallout#query}
  */
  readonly query?: GatewayPluginRequestCalloutConfigCalloutsRequestQuery;
  /**
  * The URL that will be requested. Values can contain Lua expressions in the form `$(some_lua_expression)`. The syntax is based on `request-transformer-advanced` templates. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#url GatewayPluginRequestCallout#url}
  */
  readonly url?: string;
}

export function gatewayPluginRequestCalloutConfigCalloutsRequestToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: gatewayPluginRequestCalloutConfigCalloutsRequestBodyToTerraform(struct!.body),
    by_lua: cdktf.stringToTerraform(struct!.byLua),
    error: gatewayPluginRequestCalloutConfigCalloutsRequestErrorToTerraform(struct!.error),
    headers: gatewayPluginRequestCalloutConfigCalloutsRequestHeadersToTerraform(struct!.headers),
    http_opts: gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsToTerraform(struct!.httpOpts),
    method: cdktf.stringToTerraform(struct!.method),
    query: gatewayPluginRequestCalloutConfigCalloutsRequestQueryToTerraform(struct!.query),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsRequestToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequestBody",
    },
    by_lua: {
      value: cdktf.stringToHclTerraform(struct!.byLua),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestErrorToHclTerraform(struct!.error),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequestError",
    },
    headers: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequestHeaders",
    },
    http_opts: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsToHclTerraform(struct!.httpOpts),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequestQuery",
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

export class GatewayPluginRequestCalloutConfigCalloutsRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._byLua !== undefined) {
      hasAnyValues = true;
      internalValueResult.byLua = this._byLua;
    }
    if (this._error?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._httpOpts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOpts = this._httpOpts?.internalValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._byLua = undefined;
      this._error.internalValue = undefined;
      this._headers.internalValue = undefined;
      this._httpOpts.internalValue = undefined;
      this._method = undefined;
      this._query.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._byLua = value.byLua;
      this._error.internalValue = value.error;
      this._headers.internalValue = value.headers;
      this._httpOpts.internalValue = value.httpOpts;
      this._method = value.method;
      this._query.internalValue = value.query;
      this._url = value.url;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body = new GatewayPluginRequestCalloutConfigCalloutsRequestBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: GatewayPluginRequestCalloutConfigCalloutsRequestBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // by_lua - computed: true, optional: true, required: false
  private _byLua?: string; 
  public get byLua() {
    return this.getStringAttribute('by_lua');
  }
  public set byLua(value: string) {
    this._byLua = value;
  }
  public resetByLua() {
    this._byLua = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byLuaInput() {
    return this._byLua;
  }

  // error - computed: true, optional: true, required: false
  private _error = new GatewayPluginRequestCalloutConfigCalloutsRequestErrorOutputReference(this, "error");
  public get error() {
    return this._error;
  }
  public putError(value: GatewayPluginRequestCalloutConfigCalloutsRequestError) {
    this._error.internalValue = value;
  }
  public resetError() {
    this._error.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error.internalValue;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new GatewayPluginRequestCalloutConfigCalloutsRequestHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GatewayPluginRequestCalloutConfigCalloutsRequestHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // http_opts - computed: true, optional: true, required: false
  private _httpOpts = new GatewayPluginRequestCalloutConfigCalloutsRequestHttpOptsOutputReference(this, "http_opts");
  public get httpOpts() {
    return this._httpOpts;
  }
  public putHttpOpts(value: GatewayPluginRequestCalloutConfigCalloutsRequestHttpOpts) {
    this._httpOpts.internalValue = value;
  }
  public resetHttpOpts() {
    this._httpOpts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOptsInput() {
    return this._httpOpts.internalValue;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // query - computed: true, optional: true, required: false
  private _query = new GatewayPluginRequestCalloutConfigCalloutsRequestQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: GatewayPluginRequestCalloutConfigCalloutsRequestQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
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
export interface GatewayPluginRequestCalloutConfigCalloutsResponseBody {
  /**
  * If `true`, decodes the response body before storing into the context. Only JSON is supported. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#decode GatewayPluginRequestCallout#decode}
  */
  readonly decode?: boolean | cdktf.IResolvable;
  /**
  * If `false`, skips storing the callout response body into kong.ctx.shared.callouts.<name>.response.body. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#store GatewayPluginRequestCallout#store}
  */
  readonly store?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigCalloutsResponseBodyToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    decode: cdktf.booleanToTerraform(struct!.decode),
    store: cdktf.booleanToTerraform(struct!.store),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsResponseBodyToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsResponseBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    decode: {
      value: cdktf.booleanToHclTerraform(struct!.decode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    store: {
      value: cdktf.booleanToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsResponseBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsResponseBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._decode !== undefined) {
      hasAnyValues = true;
      internalValueResult.decode = this._decode;
    }
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsResponseBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._decode = undefined;
      this._store = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._decode = value.decode;
      this._store = value.store;
    }
  }

  // decode - computed: true, optional: true, required: false
  private _decode?: boolean | cdktf.IResolvable; 
  public get decode() {
    return this.getBooleanAttribute('decode');
  }
  public set decode(value: boolean | cdktf.IResolvable) {
    this._decode = value;
  }
  public resetDecode() {
    this._decode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeInput() {
    return this._decode;
  }

  // store - computed: true, optional: true, required: false
  private _store?: boolean | cdktf.IResolvable; 
  public get store() {
    return this.getBooleanAttribute('store');
  }
  public set store(value: boolean | cdktf.IResolvable) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsResponseHeaders {
  /**
  * If `false`, skips storing the callout response headers into kong.ctx.shared.callouts.<name>.response.headers. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#store GatewayPluginRequestCallout#store}
  */
  readonly store?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigCalloutsResponseHeadersToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    store: cdktf.booleanToTerraform(struct!.store),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsResponseHeadersToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsResponseHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    store: {
      value: cdktf.booleanToHclTerraform(struct!.store),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsResponseHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsResponseHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._store !== undefined) {
      hasAnyValues = true;
      internalValueResult.store = this._store;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsResponseHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._store = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._store = value.store;
    }
  }

  // store - computed: true, optional: true, required: false
  private _store?: boolean | cdktf.IResolvable; 
  public get store() {
    return this.getBooleanAttribute('store');
  }
  public set store(value: boolean | cdktf.IResolvable) {
    this._store = value;
  }
  public resetStore() {
    this._store = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInput() {
    return this._store;
  }
}
export interface GatewayPluginRequestCalloutConfigCalloutsResponse {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#body GatewayPluginRequestCallout#body}
  */
  readonly body?: GatewayPluginRequestCalloutConfigCalloutsResponseBody;
  /**
  * Lua code that executes after the callout response is received, before caching takes place. Can produce side effects. Standard Lua sandboxing restrictions apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#by_lua GatewayPluginRequestCallout#by_lua}
  */
  readonly byLua?: string;
  /**
  * Callout response header customizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#headers GatewayPluginRequestCallout#headers}
  */
  readonly headers?: GatewayPluginRequestCalloutConfigCalloutsResponseHeaders;
}

export function gatewayPluginRequestCalloutConfigCalloutsResponseToTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: gatewayPluginRequestCalloutConfigCalloutsResponseBodyToTerraform(struct!.body),
    by_lua: cdktf.stringToTerraform(struct!.byLua),
    headers: gatewayPluginRequestCalloutConfigCalloutsResponseHeadersToTerraform(struct!.headers),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsResponseToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCalloutsResponse | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: gatewayPluginRequestCalloutConfigCalloutsResponseBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsResponseBody",
    },
    by_lua: {
      value: cdktf.stringToHclTerraform(struct!.byLua),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: gatewayPluginRequestCalloutConfigCalloutsResponseHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsResponseHeaders",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsResponseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigCalloutsResponse | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._byLua !== undefined) {
      hasAnyValues = true;
      internalValueResult.byLua = this._byLua;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCalloutsResponse | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._byLua = undefined;
      this._headers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._byLua = value.byLua;
      this._headers.internalValue = value.headers;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body = new GatewayPluginRequestCalloutConfigCalloutsResponseBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: GatewayPluginRequestCalloutConfigCalloutsResponseBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // by_lua - computed: true, optional: true, required: false
  private _byLua?: string; 
  public get byLua() {
    return this.getStringAttribute('by_lua');
  }
  public set byLua(value: string) {
    this._byLua = value;
  }
  public resetByLua() {
    this._byLua = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byLuaInput() {
    return this._byLua;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new GatewayPluginRequestCalloutConfigCalloutsResponseHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GatewayPluginRequestCalloutConfigCalloutsResponseHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface GatewayPluginRequestCalloutConfigCallouts {
  /**
  * Callout caching configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#cache GatewayPluginRequestCallout#cache}
  */
  readonly cache?: GatewayPluginRequestCalloutConfigCalloutsCache;
  /**
  * An array of callout names the current callout depends on. This dependency list determines the callout execution order via a topological sorting algorithm. Default: []
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#depends_on GatewayPluginRequestCallout#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * A string identifier for a callout. A callout object is referenceable via its name in the `kong.ctx.shared.callouts.<name>`. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#name GatewayPluginRequestCallout#name}
  */
  readonly name?: string;
  /**
  * The customizations for the callout request. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#request GatewayPluginRequestCallout#request}
  */
  readonly request?: GatewayPluginRequestCalloutConfigCalloutsRequest;
  /**
  * Configurations of callout response handling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#response GatewayPluginRequestCallout#response}
  */
  readonly response?: GatewayPluginRequestCalloutConfigCalloutsResponse;
}

export function gatewayPluginRequestCalloutConfigCalloutsToTerraform(struct?: GatewayPluginRequestCalloutConfigCallouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: gatewayPluginRequestCalloutConfigCalloutsCacheToTerraform(struct!.cache),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    name: cdktf.stringToTerraform(struct!.name),
    request: gatewayPluginRequestCalloutConfigCalloutsRequestToTerraform(struct!.request),
    response: gatewayPluginRequestCalloutConfigCalloutsResponseToTerraform(struct!.response),
  }
}


export function gatewayPluginRequestCalloutConfigCalloutsToHclTerraform(struct?: GatewayPluginRequestCalloutConfigCallouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: gatewayPluginRequestCalloutConfigCalloutsCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsCache",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request: {
      value: gatewayPluginRequestCalloutConfigCalloutsRequestToHclTerraform(struct!.request),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsRequest",
    },
    response: {
      value: gatewayPluginRequestCalloutConfigCalloutsResponseToHclTerraform(struct!.response),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsResponse",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigCalloutsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginRequestCalloutConfigCallouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request?.internalValue;
    }
    if (this._response?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigCallouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cache.internalValue = undefined;
      this._dependsOn = undefined;
      this._name = undefined;
      this._request.internalValue = undefined;
      this._response.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cache.internalValue = value.cache;
      this._dependsOn = value.dependsOn;
      this._name = value.name;
      this._request.internalValue = value.request;
      this._response.internalValue = value.response;
    }
  }

  // cache - computed: true, optional: true, required: false
  private _cache = new GatewayPluginRequestCalloutConfigCalloutsCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: GatewayPluginRequestCalloutConfigCalloutsCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // depends_on - computed: true, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
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

  // request - computed: true, optional: true, required: false
  private _request = new GatewayPluginRequestCalloutConfigCalloutsRequestOutputReference(this, "request");
  public get request() {
    return this._request;
  }
  public putRequest(value: GatewayPluginRequestCalloutConfigCalloutsRequest) {
    this._request.internalValue = value;
  }
  public resetRequest() {
    this._request.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request.internalValue;
  }

  // response - computed: true, optional: true, required: false
  private _response = new GatewayPluginRequestCalloutConfigCalloutsResponseOutputReference(this, "response");
  public get response() {
    return this._response;
  }
  public putResponse(value: GatewayPluginRequestCalloutConfigCalloutsResponse) {
    this._response.internalValue = value;
  }
  public resetResponse() {
    this._response.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response.internalValue;
  }
}

export class GatewayPluginRequestCalloutConfigCalloutsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginRequestCalloutConfigCallouts[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginRequestCalloutConfigCalloutsOutputReference {
    return new GatewayPluginRequestCalloutConfigCalloutsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginRequestCalloutConfigUpstreamBody {
  /**
  * The custom body fields to be added in the upstream request body. Values can contain Lua expressions in the form $(some_lua_expression). The syntax is based on `request-transformer-advanced` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#custom GatewayPluginRequestCallout#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * If `true`, decodes the request's body to make it available for upstream by_lua customizations. Only JSON content type is supported. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#decode GatewayPluginRequestCallout#decode}
  */
  readonly decode?: boolean | cdktf.IResolvable;
  /**
  * If `false`, skips forwarding the incoming request's body to the upstream request. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#forward GatewayPluginRequestCallout#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigUpstreamBodyToTerraform(struct?: GatewayPluginRequestCalloutConfigUpstreamBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.custom),
    decode: cdktf.booleanToTerraform(struct!.decode),
    forward: cdktf.booleanToTerraform(struct!.forward),
  }
}


export function gatewayPluginRequestCalloutConfigUpstreamBodyToHclTerraform(struct?: GatewayPluginRequestCalloutConfigUpstreamBody | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.custom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    decode: {
      value: cdktf.booleanToHclTerraform(struct!.decode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigUpstreamBodyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigUpstreamBody | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._decode !== undefined) {
      hasAnyValues = true;
      internalValueResult.decode = this._decode;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigUpstreamBody | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._decode = undefined;
      this._forward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._decode = value.decode;
      this._forward = value.forward;
    }
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // decode - computed: true, optional: true, required: false
  private _decode?: boolean | cdktf.IResolvable; 
  public get decode() {
    return this.getBooleanAttribute('decode');
  }
  public set decode(value: boolean | cdktf.IResolvable) {
    this._decode = value;
  }
  public resetDecode() {
    this._decode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decodeInput() {
    return this._decode;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }
}
export interface GatewayPluginRequestCalloutConfigUpstreamHeaders {
  /**
  * The custom headers to be added in the upstream HTTP request. Values can contain Lua expressions in the form $(some_lua_expression). The syntax is based on `request-transformer-advanced` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#custom GatewayPluginRequestCallout#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * If `false`, does not forward request headers to upstream request. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#forward GatewayPluginRequestCallout#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigUpstreamHeadersToTerraform(struct?: GatewayPluginRequestCalloutConfigUpstreamHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.custom),
    forward: cdktf.booleanToTerraform(struct!.forward),
  }
}


export function gatewayPluginRequestCalloutConfigUpstreamHeadersToHclTerraform(struct?: GatewayPluginRequestCalloutConfigUpstreamHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.custom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigUpstreamHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigUpstreamHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigUpstreamHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._forward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._forward = value.forward;
    }
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }
}
export interface GatewayPluginRequestCalloutConfigUpstreamQuery {
  /**
  * The custom query params to be added in the upstream HTTP request. Values can contain Lua expressions in the form `$(some_lua_expression)`. The syntax is based on `request-transformer-advanced` templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#custom GatewayPluginRequestCallout#custom}
  */
  readonly custom?: { [key: string]: string };
  /**
  * If `false`, does not forward request query params to upstream request. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#forward GatewayPluginRequestCallout#forward}
  */
  readonly forward?: boolean | cdktf.IResolvable;
}

export function gatewayPluginRequestCalloutConfigUpstreamQueryToTerraform(struct?: GatewayPluginRequestCalloutConfigUpstreamQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.custom),
    forward: cdktf.booleanToTerraform(struct!.forward),
  }
}


export function gatewayPluginRequestCalloutConfigUpstreamQueryToHclTerraform(struct?: GatewayPluginRequestCalloutConfigUpstreamQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.custom),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    forward: {
      value: cdktf.booleanToHclTerraform(struct!.forward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigUpstreamQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigUpstreamQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._custom !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom;
    }
    if (this._forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.forward = this._forward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigUpstreamQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._custom = undefined;
      this._forward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._custom = value.custom;
      this._forward = value.forward;
    }
  }

  // custom - computed: true, optional: true, required: false
  private _custom?: { [key: string]: string }; 
  public get custom() {
    return this.getStringMapAttribute('custom');
  }
  public set custom(value: { [key: string]: string }) {
    this._custom = value;
  }
  public resetCustom() {
    this._custom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom;
  }

  // forward - computed: true, optional: true, required: false
  private _forward?: boolean | cdktf.IResolvable; 
  public get forward() {
    return this.getBooleanAttribute('forward');
  }
  public set forward(value: boolean | cdktf.IResolvable) {
    this._forward = value;
  }
  public resetForward() {
    this._forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardInput() {
    return this._forward;
  }
}
export interface GatewayPluginRequestCalloutConfigUpstream {
  /**
  * Callout request body customizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#body GatewayPluginRequestCallout#body}
  */
  readonly body?: GatewayPluginRequestCalloutConfigUpstreamBody;
  /**
  * Lua code that executes before the upstream request is made. Can produce side effects. Standard Lua sandboxing restrictions apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#by_lua GatewayPluginRequestCallout#by_lua}
  */
  readonly byLua?: string;
  /**
  * Callout request header customizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#headers GatewayPluginRequestCallout#headers}
  */
  readonly headers?: GatewayPluginRequestCalloutConfigUpstreamHeaders;
  /**
  * Upstream request query param customizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#query GatewayPluginRequestCallout#query}
  */
  readonly query?: GatewayPluginRequestCalloutConfigUpstreamQuery;
}

export function gatewayPluginRequestCalloutConfigUpstreamToTerraform(struct?: GatewayPluginRequestCalloutConfigUpstream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: gatewayPluginRequestCalloutConfigUpstreamBodyToTerraform(struct!.body),
    by_lua: cdktf.stringToTerraform(struct!.byLua),
    headers: gatewayPluginRequestCalloutConfigUpstreamHeadersToTerraform(struct!.headers),
    query: gatewayPluginRequestCalloutConfigUpstreamQueryToTerraform(struct!.query),
  }
}


export function gatewayPluginRequestCalloutConfigUpstreamToHclTerraform(struct?: GatewayPluginRequestCalloutConfigUpstream | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body: {
      value: gatewayPluginRequestCalloutConfigUpstreamBodyToHclTerraform(struct!.body),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigUpstreamBody",
    },
    by_lua: {
      value: cdktf.stringToHclTerraform(struct!.byLua),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    headers: {
      value: gatewayPluginRequestCalloutConfigUpstreamHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigUpstreamHeaders",
    },
    query: {
      value: gatewayPluginRequestCalloutConfigUpstreamQueryToHclTerraform(struct!.query),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigUpstreamQuery",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigUpstreamOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigUpstream | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._body?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.body = this._body?.internalValue;
    }
    if (this._byLua !== undefined) {
      hasAnyValues = true;
      internalValueResult.byLua = this._byLua;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    if (this._query?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigUpstream | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._body.internalValue = undefined;
      this._byLua = undefined;
      this._headers.internalValue = undefined;
      this._query.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._body.internalValue = value.body;
      this._byLua = value.byLua;
      this._headers.internalValue = value.headers;
      this._query.internalValue = value.query;
    }
  }

  // body - computed: true, optional: true, required: false
  private _body = new GatewayPluginRequestCalloutConfigUpstreamBodyOutputReference(this, "body");
  public get body() {
    return this._body;
  }
  public putBody(value: GatewayPluginRequestCalloutConfigUpstreamBody) {
    this._body.internalValue = value;
  }
  public resetBody() {
    this._body.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body.internalValue;
  }

  // by_lua - computed: true, optional: true, required: false
  private _byLua?: string; 
  public get byLua() {
    return this.getStringAttribute('by_lua');
  }
  public set byLua(value: string) {
    this._byLua = value;
  }
  public resetByLua() {
    this._byLua = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get byLuaInput() {
    return this._byLua;
  }

  // headers - computed: true, optional: true, required: false
  private _headers = new GatewayPluginRequestCalloutConfigUpstreamHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: GatewayPluginRequestCalloutConfigUpstreamHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }

  // query - computed: true, optional: true, required: false
  private _query = new GatewayPluginRequestCalloutConfigUpstreamQueryOutputReference(this, "query");
  public get query() {
    return this._query;
  }
  public putQuery(value: GatewayPluginRequestCalloutConfigUpstreamQuery) {
    this._query.internalValue = value;
  }
  public resetQuery() {
    this._query.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query.internalValue;
  }
}
export interface GatewayPluginRequestCalloutConfigA {
  /**
  * Plugin global caching configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#cache GatewayPluginRequestCallout#cache}
  */
  readonly cache?: GatewayPluginRequestCalloutConfigCache;
  /**
  * A collection of callout objects, where each object represents an HTTP request made in the context of a proxy request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#callouts GatewayPluginRequestCallout#callouts}
  */
  readonly callouts: GatewayPluginRequestCalloutConfigCallouts[] | cdktf.IResolvable;
  /**
  * Customizations to the upstream request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#upstream GatewayPluginRequestCallout#upstream}
  */
  readonly upstream?: GatewayPluginRequestCalloutConfigUpstream;
}

export function gatewayPluginRequestCalloutConfigAToTerraform(struct?: GatewayPluginRequestCalloutConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: gatewayPluginRequestCalloutConfigCacheToTerraform(struct!.cache),
    callouts: cdktf.listMapper(gatewayPluginRequestCalloutConfigCalloutsToTerraform, false)(struct!.callouts),
    upstream: gatewayPluginRequestCalloutConfigUpstreamToTerraform(struct!.upstream),
  }
}


export function gatewayPluginRequestCalloutConfigAToHclTerraform(struct?: GatewayPluginRequestCalloutConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: gatewayPluginRequestCalloutConfigCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigCache",
    },
    callouts: {
      value: cdktf.listMapperHcl(gatewayPluginRequestCalloutConfigCalloutsToHclTerraform, false)(struct!.callouts),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginRequestCalloutConfigCalloutsList",
    },
    upstream: {
      value: gatewayPluginRequestCalloutConfigUpstreamToHclTerraform(struct!.upstream),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutConfigUpstream",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._callouts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.callouts = this._callouts?.internalValue;
    }
    if (this._upstream?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upstream = this._upstream?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginRequestCalloutConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cache.internalValue = undefined;
      this._callouts.internalValue = undefined;
      this._upstream.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cache.internalValue = value.cache;
      this._callouts.internalValue = value.callouts;
      this._upstream.internalValue = value.upstream;
    }
  }

  // cache - computed: true, optional: true, required: false
  private _cache = new GatewayPluginRequestCalloutConfigCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: GatewayPluginRequestCalloutConfigCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // callouts - computed: false, optional: false, required: true
  private _callouts = new GatewayPluginRequestCalloutConfigCalloutsList(this, "callouts", false);
  public get callouts() {
    return this._callouts;
  }
  public putCallouts(value: GatewayPluginRequestCalloutConfigCallouts[] | cdktf.IResolvable) {
    this._callouts.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get calloutsInput() {
    return this._callouts.internalValue;
  }

  // upstream - computed: true, optional: true, required: false
  private _upstream = new GatewayPluginRequestCalloutConfigUpstreamOutputReference(this, "upstream");
  public get upstream() {
    return this._upstream;
  }
  public putUpstream(value: GatewayPluginRequestCalloutConfigUpstream) {
    this._upstream.internalValue = value;
  }
  public resetUpstream() {
    this._upstream.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamInput() {
    return this._upstream.internalValue;
  }
}
export interface GatewayPluginRequestCalloutConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#id GatewayPluginRequestCallout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginRequestCalloutConsumerToTerraform(struct?: GatewayPluginRequestCalloutConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginRequestCalloutConsumerToHclTerraform(struct?: GatewayPluginRequestCalloutConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginRequestCalloutConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#id GatewayPluginRequestCallout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginRequestCalloutConsumerGroupToTerraform(struct?: GatewayPluginRequestCalloutConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginRequestCalloutConsumerGroupToHclTerraform(struct?: GatewayPluginRequestCalloutConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginRequestCalloutOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#access GatewayPluginRequestCallout#access}
  */
  readonly access?: string[];
}

export function gatewayPluginRequestCalloutOrderingAfterToTerraform(struct?: GatewayPluginRequestCalloutOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginRequestCalloutOrderingAfterToHclTerraform(struct?: GatewayPluginRequestCalloutOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginRequestCalloutOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#access GatewayPluginRequestCallout#access}
  */
  readonly access?: string[];
}

export function gatewayPluginRequestCalloutOrderingBeforeToTerraform(struct?: GatewayPluginRequestCalloutOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginRequestCalloutOrderingBeforeToHclTerraform(struct?: GatewayPluginRequestCalloutOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginRequestCalloutOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#after GatewayPluginRequestCallout#after}
  */
  readonly after?: GatewayPluginRequestCalloutOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#before GatewayPluginRequestCallout#before}
  */
  readonly before?: GatewayPluginRequestCalloutOrderingBefore;
}

export function gatewayPluginRequestCalloutOrderingToTerraform(struct?: GatewayPluginRequestCalloutOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginRequestCalloutOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginRequestCalloutOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginRequestCalloutOrderingToHclTerraform(struct?: GatewayPluginRequestCalloutOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginRequestCalloutOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutOrderingAfter",
    },
    before: {
      value: gatewayPluginRequestCalloutOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginRequestCalloutOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginRequestCalloutOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginRequestCalloutOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginRequestCalloutOrderingAfter) {
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
  private _before = new GatewayPluginRequestCalloutOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginRequestCalloutOrderingBefore) {
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
export interface GatewayPluginRequestCalloutPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#id GatewayPluginRequestCallout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#name GatewayPluginRequestCallout#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#path GatewayPluginRequestCallout#path}
  */
  readonly path?: string;
}

export function gatewayPluginRequestCalloutPartialsToTerraform(struct?: GatewayPluginRequestCalloutPartials | cdktf.IResolvable): any {
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


export function gatewayPluginRequestCalloutPartialsToHclTerraform(struct?: GatewayPluginRequestCalloutPartials | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginRequestCalloutPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginRequestCalloutPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginRequestCalloutPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginRequestCalloutPartialsOutputReference {
    return new GatewayPluginRequestCalloutPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginRequestCalloutRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#id GatewayPluginRequestCallout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginRequestCalloutRouteToTerraform(struct?: GatewayPluginRequestCalloutRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginRequestCalloutRouteToHclTerraform(struct?: GatewayPluginRequestCalloutRoute | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginRequestCalloutService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#id GatewayPluginRequestCallout#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginRequestCalloutServiceToTerraform(struct?: GatewayPluginRequestCalloutService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginRequestCalloutServiceToHclTerraform(struct?: GatewayPluginRequestCalloutService | cdktf.IResolvable): any {
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

export class GatewayPluginRequestCalloutServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginRequestCalloutService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginRequestCalloutService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout konnect_gateway_plugin_request_callout}
*/
export class GatewayPluginRequestCallout extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_request_callout";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginRequestCallout resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginRequestCallout to import
  * @param importFromId The id of the existing GatewayPluginRequestCallout that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginRequestCallout to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_request_callout", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_request_callout konnect_gateway_plugin_request_callout} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginRequestCalloutConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginRequestCalloutConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_request_callout',
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
    this._consumerGroup.internalValue = config.consumerGroup;
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
  private _config = new GatewayPluginRequestCalloutConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginRequestCalloutConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginRequestCalloutConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginRequestCalloutConsumer) {
    this._consumer.internalValue = value;
  }
  public resetConsumer() {
    this._consumer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerInput() {
    return this._consumer.internalValue;
  }

  // consumer_group - computed: true, optional: true, required: false
  private _consumerGroup = new GatewayPluginRequestCalloutConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginRequestCalloutConsumerGroup) {
    this._consumerGroup.internalValue = value;
  }
  public resetConsumerGroup() {
    this._consumerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupInput() {
    return this._consumerGroup.internalValue;
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
  private _ordering = new GatewayPluginRequestCalloutOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginRequestCalloutOrdering) {
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
  private _partials = new GatewayPluginRequestCalloutPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginRequestCalloutPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginRequestCalloutRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginRequestCalloutRoute) {
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
  private _service = new GatewayPluginRequestCalloutServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginRequestCalloutService) {
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
      config: gatewayPluginRequestCalloutConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginRequestCalloutConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginRequestCalloutConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginRequestCalloutOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginRequestCalloutPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginRequestCalloutRouteToTerraform(this._route.internalValue),
      service: gatewayPluginRequestCalloutServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginRequestCalloutConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginRequestCalloutConfigA",
      },
      consumer: {
        value: gatewayPluginRequestCalloutConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginRequestCalloutConsumer",
      },
      consumer_group: {
        value: gatewayPluginRequestCalloutConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginRequestCalloutConsumerGroup",
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
        value: gatewayPluginRequestCalloutOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginRequestCalloutOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginRequestCalloutPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginRequestCalloutPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginRequestCalloutRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginRequestCalloutRoute",
      },
      service: {
        value: gatewayPluginRequestCalloutServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginRequestCalloutService",
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
