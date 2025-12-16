// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAiRateLimitingAdvancedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#config GatewayPluginAiRateLimitingAdvanced#config}
  */
  readonly config: GatewayPluginAiRateLimitingAdvancedConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#consumer GatewayPluginAiRateLimitingAdvanced#consumer}
  */
  readonly consumer?: GatewayPluginAiRateLimitingAdvancedConsumer;
  /**
  * If set, the plugin will activate only for requests where the specified consumer group has been authenticated. (Note that some plugins can not be restricted to consumers groups this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer Groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#consumer_group GatewayPluginAiRateLimitingAdvanced#consumer_group}
  */
  readonly consumerGroup?: GatewayPluginAiRateLimitingAdvancedConsumerGroup;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#control_plane_id GatewayPluginAiRateLimitingAdvanced#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#created_at GatewayPluginAiRateLimitingAdvanced#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#enabled GatewayPluginAiRateLimitingAdvanced#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#id GatewayPluginAiRateLimitingAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#instance_name GatewayPluginAiRateLimitingAdvanced#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#ordering GatewayPluginAiRateLimitingAdvanced#ordering}
  */
  readonly ordering?: GatewayPluginAiRateLimitingAdvancedOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#partials GatewayPluginAiRateLimitingAdvanced#partials}
  */
  readonly partials?: GatewayPluginAiRateLimitingAdvancedPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#protocols GatewayPluginAiRateLimitingAdvanced#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#route GatewayPluginAiRateLimitingAdvanced#route}
  */
  readonly route?: GatewayPluginAiRateLimitingAdvancedRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#service GatewayPluginAiRateLimitingAdvanced#service}
  */
  readonly service?: GatewayPluginAiRateLimitingAdvancedService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#tags GatewayPluginAiRateLimitingAdvanced#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#updated_at GatewayPluginAiRateLimitingAdvanced#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAiRateLimitingAdvancedConfigLlmProviders {
  /**
  * One or more requests-per-window limits to apply. There must be a matching number of window limits and sizes specified. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#limit GatewayPluginAiRateLimitingAdvanced#limit}
  */
  readonly limit?: number[];
  /**
  * The LLM provider to which the rate limit applies. Not Null; must be one of ["anthropic", "azure", "bedrock", "cohere", "gemini", "huggingface", "llama2", "mistral", "openai", "requestPrompt"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#name GatewayPluginAiRateLimitingAdvanced#name}
  */
  readonly name?: string;
  /**
  * One or more window sizes to apply a limit to (defined in seconds). There must be a matching number of window limits and sizes specified. Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#window_size GatewayPluginAiRateLimitingAdvanced#window_size}
  */
  readonly windowSize?: number[];
}

export function gatewayPluginAiRateLimitingAdvancedConfigLlmProvidersToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigLlmProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.limit),
    name: cdktf.stringToTerraform(struct!.name),
    window_size: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.windowSize),
  }
}


export function gatewayPluginAiRateLimitingAdvancedConfigLlmProvidersToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigLlmProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.limit),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_size: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.windowSize),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiRateLimitingAdvancedConfigLlmProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedConfigLlmProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._windowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSize = this._windowSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedConfigLlmProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limit = undefined;
      this._name = undefined;
      this._windowSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limit = value.limit;
      this._name = value.name;
      this._windowSize = value.windowSize;
    }
  }

  // limit - computed: true, optional: true, required: false
  private _limit?: number[]; 
  public get limit() {
    return this.getNumberListAttribute('limit');
  }
  public set limit(value: number[]) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // window_size - computed: true, optional: true, required: false
  private _windowSize?: number[]; 
  public get windowSize() {
    return this.getNumberListAttribute('window_size');
  }
  public set windowSize(value: number[]) {
    this._windowSize = value;
  }
  public resetWindowSize() {
    this._windowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSizeInput() {
    return this._windowSize;
  }
}

export class GatewayPluginAiRateLimitingAdvancedConfigLlmProvidersList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiRateLimitingAdvancedConfigLlmProviders[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiRateLimitingAdvancedConfigLlmProvidersOutputReference {
    return new GatewayPluginAiRateLimitingAdvancedConfigLlmProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#ip GatewayPluginAiRateLimitingAdvanced#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#port GatewayPluginAiRateLimitingAdvanced#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesOutputReference {
    return new GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#host GatewayPluginAiRateLimitingAdvanced#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#port GatewayPluginAiRateLimitingAdvanced#port}
  */
  readonly port?: number;
}

export function gatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesOutputReference {
    return new GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiRateLimitingAdvancedConfigRedis {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#cluster_max_redirections GatewayPluginAiRateLimitingAdvanced#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#cluster_nodes GatewayPluginAiRateLimitingAdvanced#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#connect_timeout GatewayPluginAiRateLimitingAdvanced#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#connection_is_proxied GatewayPluginAiRateLimitingAdvanced#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#database GatewayPluginAiRateLimitingAdvanced#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#host GatewayPluginAiRateLimitingAdvanced#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#keepalive_backlog GatewayPluginAiRateLimitingAdvanced#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#keepalive_pool_size GatewayPluginAiRateLimitingAdvanced#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#password GatewayPluginAiRateLimitingAdvanced#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#port GatewayPluginAiRateLimitingAdvanced#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#read_timeout GatewayPluginAiRateLimitingAdvanced#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#send_timeout GatewayPluginAiRateLimitingAdvanced#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#sentinel_master GatewayPluginAiRateLimitingAdvanced#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#sentinel_nodes GatewayPluginAiRateLimitingAdvanced#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#sentinel_password GatewayPluginAiRateLimitingAdvanced#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#sentinel_role GatewayPluginAiRateLimitingAdvanced#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#sentinel_username GatewayPluginAiRateLimitingAdvanced#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#server_name GatewayPluginAiRateLimitingAdvanced#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#ssl GatewayPluginAiRateLimitingAdvanced#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#ssl_verify GatewayPluginAiRateLimitingAdvanced#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#username GatewayPluginAiRateLimitingAdvanced#username}
  */
  readonly username?: string;
}

export function gatewayPluginAiRateLimitingAdvancedConfigRedisToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesToTerraform, false)(struct!.clusterNodes),
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
    sentinel_nodes: cdktf.listMapper(gatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginAiRateLimitingAdvancedConfigRedisToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigRedis | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesList",
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
      value: cdktf.listMapperHcl(gatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesList",
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

export class GatewayPluginAiRateLimitingAdvancedConfigRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedConfigRedis | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedConfigRedis | cdktf.IResolvable | undefined) {
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
  private _clusterNodes = new GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPluginAiRateLimitingAdvancedConfigRedisClusterNodes[] | cdktf.IResolvable) {
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
  private _sentinelNodes = new GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPluginAiRateLimitingAdvancedConfigRedisSentinelNodes[] | cdktf.IResolvable) {
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
export interface GatewayPluginAiRateLimitingAdvancedConfigA {
  /**
  * The shared dictionary where counters are stored. When the plugin is configured to synchronize counter data externally (that is `config.strategy` is `cluster` or `redis` and `config.sync_rate` isn't `-1`), this dictionary serves as a buffer to populate counters in the data store on each synchronization cycle. Default: "kong_rate_limiting_counters"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#dictionary_name GatewayPluginAiRateLimitingAdvanced#dictionary_name}
  */
  readonly dictionaryName?: string;
  /**
  * If set to `true`, this doesn't count denied requests (status = `429`). If set to `false`, all requests, including denied ones, are counted. This parameter only affects the `sliding` window_type and the request prompt provider. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#disable_penalty GatewayPluginAiRateLimitingAdvanced#disable_penalty}
  */
  readonly disablePenalty?: boolean | cdktf.IResolvable;
  /**
  * Set a custom error code to return when the rate limit is exceeded. Default: 429
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#error_code GatewayPluginAiRateLimitingAdvanced#error_code}
  */
  readonly errorCode?: number;
  /**
  * Optionally hide informative response that would otherwise provide information about the provider in the error message. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#error_hide_providers GatewayPluginAiRateLimitingAdvanced#error_hide_providers}
  */
  readonly errorHideProviders?: boolean | cdktf.IResolvable;
  /**
  * Set a custom error message to return when the rate limit is exceeded. Default: "AI token rate limit exceeded for provider(s): "
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#error_message GatewayPluginAiRateLimitingAdvanced#error_message}
  */
  readonly errorMessage?: string;
  /**
  * A string representing an HTTP header name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#header_name GatewayPluginAiRateLimitingAdvanced#header_name}
  */
  readonly headerName?: string;
  /**
  * Optionally hide informative response headers that would otherwise provide information about the current status of limits and counters. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#hide_client_headers GatewayPluginAiRateLimitingAdvanced#hide_client_headers}
  */
  readonly hideClientHeaders?: boolean | cdktf.IResolvable;
  /**
  * The type of identifier used to generate the rate limit key. Defines the scope used to increment the rate limiting counters. Can be `ip`, `credential`, `consumer`, `service`, `header`, `path` or `consumer-group`. Note if `identifier` is `consumer-group`, the plugin must be applied on a consumer group entity. Because a consumer may belong to multiple consumer groups, the plugin needs to know explicitly which consumer group to limit the rate. Default: "consumer"; must be one of ["consumer", "consumer-group", "credential", "header", "ip", "path", "service"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#identifier GatewayPluginAiRateLimitingAdvanced#identifier}
  */
  readonly identifier?: string;
  /**
  * LLM input and output format and schema to use. Default: "openai"; must be one of ["bedrock", "cohere", "gemini", "huggingface", "openai"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#llm_format GatewayPluginAiRateLimitingAdvanced#llm_format}
  */
  readonly llmFormat?: string;
  /**
  * The provider config. Takes an array of `name`, `limit` and `window size` values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#llm_providers GatewayPluginAiRateLimitingAdvanced#llm_providers}
  */
  readonly llmProviders: GatewayPluginAiRateLimitingAdvancedConfigLlmProviders[] | cdktf.IResolvable;
  /**
  * The rate limiting library namespace to use for this plugin instance. Counter data and sync configuration is isolated in each namespace. NOTE: For the plugin instances sharing the same namespace, all the configurations that are required for synchronizing counters, e.g. `strategy`, `redis`, `sync_rate`, `dictionary_name`, need to be the same.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#namespace GatewayPluginAiRateLimitingAdvanced#namespace}
  */
  readonly namespace?: string;
  /**
  * A string representing a URL path, such as /path/to/resource. Must start with a forward slash (/) and must not contain empty segments (i.e., two consecutive forward slashes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#path GatewayPluginAiRateLimitingAdvanced#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#redis GatewayPluginAiRateLimitingAdvanced#redis}
  */
  readonly redis?: GatewayPluginAiRateLimitingAdvancedConfigRedis;
  /**
  * If defined, it use custom function to count requests for the request prompt provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#request_prompt_count_function GatewayPluginAiRateLimitingAdvanced#request_prompt_count_function}
  */
  readonly requestPromptCountFunction?: string;
  /**
  * The upper bound of a jitter (random delay) in seconds to be added to the `Retry-After` header of denied requests (status = `429`) in order to prevent all the clients from coming back at the same time. The lower bound of the jitter is `0`; in this case, the `Retry-After` header is equal to the `RateLimit-Reset` header. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#retry_after_jitter_max GatewayPluginAiRateLimitingAdvanced#retry_after_jitter_max}
  */
  readonly retryAfterJitterMax?: number;
  /**
  * The rate-limiting strategy to use for retrieving and incrementing the limits. Available values are: `local` and `cluster`. Default: "local"; must be one of ["cluster", "local", "redis"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#strategy GatewayPluginAiRateLimitingAdvanced#strategy}
  */
  readonly strategy?: string;
  /**
  * How often to sync counter data to the central data store. A value of 0 results in synchronous behavior; a value of -1 ignores sync behavior entirely and only stores counters in node memory. A value greater than 0 will sync the counters in the specified number of seconds. The minimum allowed interval is 0.02 seconds (20ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#sync_rate GatewayPluginAiRateLimitingAdvanced#sync_rate}
  */
  readonly syncRate?: number;
  /**
  * What tokens to use for cost calculation. Available values are: `total_tokens` `prompt_tokens`, `completion_tokens` or `cost`. Default: "total_tokens"; must be one of ["completion_tokens", "cost", "prompt_tokens", "total_tokens"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#tokens_count_strategy GatewayPluginAiRateLimitingAdvanced#tokens_count_strategy}
  */
  readonly tokensCountStrategy?: string;
  /**
  * Sets the time window type to either `sliding` (default) or `fixed`. Sliding windows apply the rate limiting logic while taking into account previous hit rates (from the window that immediately precedes the current) using a dynamic weight. Fixed windows consist of buckets that are statically assigned to a definitive time range, each request is mapped to only one fixed window based on its timestamp and will affect only that window's counters. Default: "sliding"; must be one of ["fixed", "sliding"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#window_type GatewayPluginAiRateLimitingAdvanced#window_type}
  */
  readonly windowType?: string;
}

export function gatewayPluginAiRateLimitingAdvancedConfigAToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dictionary_name: cdktf.stringToTerraform(struct!.dictionaryName),
    disable_penalty: cdktf.booleanToTerraform(struct!.disablePenalty),
    error_code: cdktf.numberToTerraform(struct!.errorCode),
    error_hide_providers: cdktf.booleanToTerraform(struct!.errorHideProviders),
    error_message: cdktf.stringToTerraform(struct!.errorMessage),
    header_name: cdktf.stringToTerraform(struct!.headerName),
    hide_client_headers: cdktf.booleanToTerraform(struct!.hideClientHeaders),
    identifier: cdktf.stringToTerraform(struct!.identifier),
    llm_format: cdktf.stringToTerraform(struct!.llmFormat),
    llm_providers: cdktf.listMapper(gatewayPluginAiRateLimitingAdvancedConfigLlmProvidersToTerraform, false)(struct!.llmProviders),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    path: cdktf.stringToTerraform(struct!.path),
    redis: gatewayPluginAiRateLimitingAdvancedConfigRedisToTerraform(struct!.redis),
    request_prompt_count_function: cdktf.stringToTerraform(struct!.requestPromptCountFunction),
    retry_after_jitter_max: cdktf.numberToTerraform(struct!.retryAfterJitterMax),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    sync_rate: cdktf.numberToTerraform(struct!.syncRate),
    tokens_count_strategy: cdktf.stringToTerraform(struct!.tokensCountStrategy),
    window_type: cdktf.stringToTerraform(struct!.windowType),
  }
}


export function gatewayPluginAiRateLimitingAdvancedConfigAToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConfigA | cdktf.IResolvable): any {
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
    disable_penalty: {
      value: cdktf.booleanToHclTerraform(struct!.disablePenalty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error_code: {
      value: cdktf.numberToHclTerraform(struct!.errorCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_hide_providers: {
      value: cdktf.booleanToHclTerraform(struct!.errorHideProviders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    error_message: {
      value: cdktf.stringToHclTerraform(struct!.errorMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_name: {
      value: cdktf.stringToHclTerraform(struct!.headerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_client_headers: {
      value: cdktf.booleanToHclTerraform(struct!.hideClientHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_format: {
      value: cdktf.stringToHclTerraform(struct!.llmFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    llm_providers: {
      value: cdktf.listMapperHcl(gatewayPluginAiRateLimitingAdvancedConfigLlmProvidersToHclTerraform, false)(struct!.llmProviders),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPluginAiRateLimitingAdvancedConfigLlmProvidersList",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
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
    redis: {
      value: gatewayPluginAiRateLimitingAdvancedConfigRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRateLimitingAdvancedConfigRedis",
    },
    request_prompt_count_function: {
      value: cdktf.stringToHclTerraform(struct!.requestPromptCountFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_after_jitter_max: {
      value: cdktf.numberToHclTerraform(struct!.retryAfterJitterMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sync_rate: {
      value: cdktf.numberToHclTerraform(struct!.syncRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tokens_count_strategy: {
      value: cdktf.stringToHclTerraform(struct!.tokensCountStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    window_type: {
      value: cdktf.stringToHclTerraform(struct!.windowType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiRateLimitingAdvancedConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dictionaryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionaryName = this._dictionaryName;
    }
    if (this._disablePenalty !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePenalty = this._disablePenalty;
    }
    if (this._errorCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCode = this._errorCode;
    }
    if (this._errorHideProviders !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorHideProviders = this._errorHideProviders;
    }
    if (this._errorMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMessage = this._errorMessage;
    }
    if (this._headerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerName = this._headerName;
    }
    if (this._hideClientHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideClientHeaders = this._hideClientHeaders;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    if (this._llmFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmFormat = this._llmFormat;
    }
    if (this._llmProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.llmProviders = this._llmProviders?.internalValue;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._requestPromptCountFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPromptCountFunction = this._requestPromptCountFunction;
    }
    if (this._retryAfterJitterMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAfterJitterMax = this._retryAfterJitterMax;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    if (this._syncRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRate = this._syncRate;
    }
    if (this._tokensCountStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokensCountStrategy = this._tokensCountStrategy;
    }
    if (this._windowType !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowType = this._windowType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dictionaryName = undefined;
      this._disablePenalty = undefined;
      this._errorCode = undefined;
      this._errorHideProviders = undefined;
      this._errorMessage = undefined;
      this._headerName = undefined;
      this._hideClientHeaders = undefined;
      this._identifier = undefined;
      this._llmFormat = undefined;
      this._llmProviders.internalValue = undefined;
      this._namespace = undefined;
      this._path = undefined;
      this._redis.internalValue = undefined;
      this._requestPromptCountFunction = undefined;
      this._retryAfterJitterMax = undefined;
      this._strategy = undefined;
      this._syncRate = undefined;
      this._tokensCountStrategy = undefined;
      this._windowType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dictionaryName = value.dictionaryName;
      this._disablePenalty = value.disablePenalty;
      this._errorCode = value.errorCode;
      this._errorHideProviders = value.errorHideProviders;
      this._errorMessage = value.errorMessage;
      this._headerName = value.headerName;
      this._hideClientHeaders = value.hideClientHeaders;
      this._identifier = value.identifier;
      this._llmFormat = value.llmFormat;
      this._llmProviders.internalValue = value.llmProviders;
      this._namespace = value.namespace;
      this._path = value.path;
      this._redis.internalValue = value.redis;
      this._requestPromptCountFunction = value.requestPromptCountFunction;
      this._retryAfterJitterMax = value.retryAfterJitterMax;
      this._strategy = value.strategy;
      this._syncRate = value.syncRate;
      this._tokensCountStrategy = value.tokensCountStrategy;
      this._windowType = value.windowType;
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

  // disable_penalty - computed: true, optional: true, required: false
  private _disablePenalty?: boolean | cdktf.IResolvable; 
  public get disablePenalty() {
    return this.getBooleanAttribute('disable_penalty');
  }
  public set disablePenalty(value: boolean | cdktf.IResolvable) {
    this._disablePenalty = value;
  }
  public resetDisablePenalty() {
    this._disablePenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePenaltyInput() {
    return this._disablePenalty;
  }

  // error_code - computed: true, optional: true, required: false
  private _errorCode?: number; 
  public get errorCode() {
    return this.getNumberAttribute('error_code');
  }
  public set errorCode(value: number) {
    this._errorCode = value;
  }
  public resetErrorCode() {
    this._errorCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCodeInput() {
    return this._errorCode;
  }

  // error_hide_providers - computed: true, optional: true, required: false
  private _errorHideProviders?: boolean | cdktf.IResolvable; 
  public get errorHideProviders() {
    return this.getBooleanAttribute('error_hide_providers');
  }
  public set errorHideProviders(value: boolean | cdktf.IResolvable) {
    this._errorHideProviders = value;
  }
  public resetErrorHideProviders() {
    this._errorHideProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorHideProvidersInput() {
    return this._errorHideProviders;
  }

  // error_message - computed: true, optional: true, required: false
  private _errorMessage?: string; 
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }
  public set errorMessage(value: string) {
    this._errorMessage = value;
  }
  public resetErrorMessage() {
    this._errorMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMessageInput() {
    return this._errorMessage;
  }

  // header_name - computed: false, optional: true, required: false
  private _headerName?: string; 
  public get headerName() {
    return this.getStringAttribute('header_name');
  }
  public set headerName(value: string) {
    this._headerName = value;
  }
  public resetHeaderName() {
    this._headerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameInput() {
    return this._headerName;
  }

  // hide_client_headers - computed: true, optional: true, required: false
  private _hideClientHeaders?: boolean | cdktf.IResolvable; 
  public get hideClientHeaders() {
    return this.getBooleanAttribute('hide_client_headers');
  }
  public set hideClientHeaders(value: boolean | cdktf.IResolvable) {
    this._hideClientHeaders = value;
  }
  public resetHideClientHeaders() {
    this._hideClientHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideClientHeadersInput() {
    return this._hideClientHeaders;
  }

  // identifier - computed: true, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // llm_format - computed: true, optional: true, required: false
  private _llmFormat?: string; 
  public get llmFormat() {
    return this.getStringAttribute('llm_format');
  }
  public set llmFormat(value: string) {
    this._llmFormat = value;
  }
  public resetLlmFormat() {
    this._llmFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get llmFormatInput() {
    return this._llmFormat;
  }

  // llm_providers - computed: false, optional: false, required: true
  private _llmProviders = new GatewayPluginAiRateLimitingAdvancedConfigLlmProvidersList(this, "llm_providers", false);
  public get llmProviders() {
    return this._llmProviders;
  }
  public putLlmProviders(value: GatewayPluginAiRateLimitingAdvancedConfigLlmProviders[] | cdktf.IResolvable) {
    this._llmProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get llmProvidersInput() {
    return this._llmProviders.internalValue;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // path - computed: false, optional: true, required: false
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

  // redis - computed: true, optional: true, required: false
  private _redis = new GatewayPluginAiRateLimitingAdvancedConfigRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginAiRateLimitingAdvancedConfigRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // request_prompt_count_function - computed: false, optional: true, required: false
  private _requestPromptCountFunction?: string; 
  public get requestPromptCountFunction() {
    return this.getStringAttribute('request_prompt_count_function');
  }
  public set requestPromptCountFunction(value: string) {
    this._requestPromptCountFunction = value;
  }
  public resetRequestPromptCountFunction() {
    this._requestPromptCountFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPromptCountFunctionInput() {
    return this._requestPromptCountFunction;
  }

  // retry_after_jitter_max - computed: true, optional: true, required: false
  private _retryAfterJitterMax?: number; 
  public get retryAfterJitterMax() {
    return this.getNumberAttribute('retry_after_jitter_max');
  }
  public set retryAfterJitterMax(value: number) {
    this._retryAfterJitterMax = value;
  }
  public resetRetryAfterJitterMax() {
    this._retryAfterJitterMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAfterJitterMaxInput() {
    return this._retryAfterJitterMax;
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

  // sync_rate - computed: false, optional: true, required: false
  private _syncRate?: number; 
  public get syncRate() {
    return this.getNumberAttribute('sync_rate');
  }
  public set syncRate(value: number) {
    this._syncRate = value;
  }
  public resetSyncRate() {
    this._syncRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRateInput() {
    return this._syncRate;
  }

  // tokens_count_strategy - computed: true, optional: true, required: false
  private _tokensCountStrategy?: string; 
  public get tokensCountStrategy() {
    return this.getStringAttribute('tokens_count_strategy');
  }
  public set tokensCountStrategy(value: string) {
    this._tokensCountStrategy = value;
  }
  public resetTokensCountStrategy() {
    this._tokensCountStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokensCountStrategyInput() {
    return this._tokensCountStrategy;
  }

  // window_type - computed: true, optional: true, required: false
  private _windowType?: string; 
  public get windowType() {
    return this.getStringAttribute('window_type');
  }
  public set windowType(value: string) {
    this._windowType = value;
  }
  public resetWindowType() {
    this._windowType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowTypeInput() {
    return this._windowType;
  }
}
export interface GatewayPluginAiRateLimitingAdvancedConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#id GatewayPluginAiRateLimitingAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRateLimitingAdvancedConsumerToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRateLimitingAdvancedConsumerToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRateLimitingAdvancedConsumerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#id GatewayPluginAiRateLimitingAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRateLimitingAdvancedConsumerGroupToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConsumerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRateLimitingAdvancedConsumerGroupToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedConsumerGroup | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedConsumerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedConsumerGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedConsumerGroup | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRateLimitingAdvancedOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#access GatewayPluginAiRateLimitingAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiRateLimitingAdvancedOrderingAfterToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiRateLimitingAdvancedOrderingAfterToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRateLimitingAdvancedOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#access GatewayPluginAiRateLimitingAdvanced#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAiRateLimitingAdvancedOrderingBeforeToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAiRateLimitingAdvancedOrderingBeforeToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRateLimitingAdvancedOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#after GatewayPluginAiRateLimitingAdvanced#after}
  */
  readonly after?: GatewayPluginAiRateLimitingAdvancedOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#before GatewayPluginAiRateLimitingAdvanced#before}
  */
  readonly before?: GatewayPluginAiRateLimitingAdvancedOrderingBefore;
}

export function gatewayPluginAiRateLimitingAdvancedOrderingToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAiRateLimitingAdvancedOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAiRateLimitingAdvancedOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAiRateLimitingAdvancedOrderingToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAiRateLimitingAdvancedOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRateLimitingAdvancedOrderingAfter",
    },
    before: {
      value: gatewayPluginAiRateLimitingAdvancedOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAiRateLimitingAdvancedOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAiRateLimitingAdvancedOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAiRateLimitingAdvancedOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAiRateLimitingAdvancedOrderingAfter) {
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
  private _before = new GatewayPluginAiRateLimitingAdvancedOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAiRateLimitingAdvancedOrderingBefore) {
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
export interface GatewayPluginAiRateLimitingAdvancedPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#id GatewayPluginAiRateLimitingAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#name GatewayPluginAiRateLimitingAdvanced#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#path GatewayPluginAiRateLimitingAdvanced#path}
  */
  readonly path?: string;
}

export function gatewayPluginAiRateLimitingAdvancedPartialsToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAiRateLimitingAdvancedPartialsToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAiRateLimitingAdvancedPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAiRateLimitingAdvancedPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAiRateLimitingAdvancedPartialsOutputReference {
    return new GatewayPluginAiRateLimitingAdvancedPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAiRateLimitingAdvancedRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#id GatewayPluginAiRateLimitingAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRateLimitingAdvancedRouteToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRateLimitingAdvancedRouteToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAiRateLimitingAdvancedService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#id GatewayPluginAiRateLimitingAdvanced#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAiRateLimitingAdvancedServiceToTerraform(struct?: GatewayPluginAiRateLimitingAdvancedService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAiRateLimitingAdvancedServiceToHclTerraform(struct?: GatewayPluginAiRateLimitingAdvancedService | cdktf.IResolvable): any {
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

export class GatewayPluginAiRateLimitingAdvancedServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAiRateLimitingAdvancedService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAiRateLimitingAdvancedService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced konnect_gateway_plugin_ai_rate_limiting_advanced}
*/
export class GatewayPluginAiRateLimitingAdvanced extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_ai_rate_limiting_advanced";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAiRateLimitingAdvanced resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAiRateLimitingAdvanced to import
  * @param importFromId The id of the existing GatewayPluginAiRateLimitingAdvanced that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAiRateLimitingAdvanced to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_ai_rate_limiting_advanced", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_ai_rate_limiting_advanced konnect_gateway_plugin_ai_rate_limiting_advanced} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAiRateLimitingAdvancedConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAiRateLimitingAdvancedConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_ai_rate_limiting_advanced',
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
  private _config = new GatewayPluginAiRateLimitingAdvancedConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAiRateLimitingAdvancedConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAiRateLimitingAdvancedConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAiRateLimitingAdvancedConsumer) {
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
  private _consumerGroup = new GatewayPluginAiRateLimitingAdvancedConsumerGroupOutputReference(this, "consumer_group");
  public get consumerGroup() {
    return this._consumerGroup;
  }
  public putConsumerGroup(value: GatewayPluginAiRateLimitingAdvancedConsumerGroup) {
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
  private _ordering = new GatewayPluginAiRateLimitingAdvancedOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAiRateLimitingAdvancedOrdering) {
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
  private _partials = new GatewayPluginAiRateLimitingAdvancedPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAiRateLimitingAdvancedPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAiRateLimitingAdvancedRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAiRateLimitingAdvancedRoute) {
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
  private _service = new GatewayPluginAiRateLimitingAdvancedServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAiRateLimitingAdvancedService) {
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
      config: gatewayPluginAiRateLimitingAdvancedConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAiRateLimitingAdvancedConsumerToTerraform(this._consumer.internalValue),
      consumer_group: gatewayPluginAiRateLimitingAdvancedConsumerGroupToTerraform(this._consumerGroup.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAiRateLimitingAdvancedOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAiRateLimitingAdvancedPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAiRateLimitingAdvancedRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAiRateLimitingAdvancedServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAiRateLimitingAdvancedConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRateLimitingAdvancedConfigA",
      },
      consumer: {
        value: gatewayPluginAiRateLimitingAdvancedConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRateLimitingAdvancedConsumer",
      },
      consumer_group: {
        value: gatewayPluginAiRateLimitingAdvancedConsumerGroupToHclTerraform(this._consumerGroup.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRateLimitingAdvancedConsumerGroup",
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
        value: gatewayPluginAiRateLimitingAdvancedOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRateLimitingAdvancedOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAiRateLimitingAdvancedPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAiRateLimitingAdvancedPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAiRateLimitingAdvancedRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRateLimitingAdvancedRoute",
      },
      service: {
        value: gatewayPluginAiRateLimitingAdvancedServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAiRateLimitingAdvancedService",
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
