// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAcmeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#config GatewayPluginAcme#config}
  */
  readonly config: GatewayPluginAcmeConfigA;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#control_plane_id GatewayPluginAcme#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#created_at GatewayPluginAcme#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#enabled GatewayPluginAcme#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#id GatewayPluginAcme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#instance_name GatewayPluginAcme#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#ordering GatewayPluginAcme#ordering}
  */
  readonly ordering?: GatewayPluginAcmeOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#partials GatewayPluginAcme#partials}
  */
  readonly partials?: GatewayPluginAcmePartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#protocols GatewayPluginAcme#protocols}
  */
  readonly protocols?: string[];
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#tags GatewayPluginAcme#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#updated_at GatewayPluginAcme#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAcmeConfigAccountKey {
  /**
  * The Key ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#key_id GatewayPluginAcme#key_id}
  */
  readonly keyId: string;
  /**
  * The ID of the key set to associate the Key ID with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#key_set GatewayPluginAcme#key_set}
  */
  readonly keySet?: string;
}

export function gatewayPluginAcmeConfigAccountKeyToTerraform(struct?: GatewayPluginAcmeConfigAccountKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.stringToTerraform(struct!.keyId),
    key_set: cdktf.stringToTerraform(struct!.keySet),
  }
}


export function gatewayPluginAcmeConfigAccountKeyToHclTerraform(struct?: GatewayPluginAcmeConfigAccountKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_set: {
      value: cdktf.stringToHclTerraform(struct!.keySet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeConfigAccountKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigAccountKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keySet !== undefined) {
      hasAnyValues = true;
      internalValueResult.keySet = this._keySet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigAccountKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keySet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keySet = value.keySet;
    }
  }

  // key_id - computed: true, optional: false, required: true
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_set - computed: true, optional: true, required: false
  private _keySet?: string; 
  public get keySet() {
    return this.getStringAttribute('key_set');
  }
  public set keySet(value: string) {
    this._keySet = value;
  }
  public resetKeySet() {
    this._keySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySetInput() {
    return this._keySet;
  }
}
export interface GatewayPluginAcmeConfigStorageConfigConsul {
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#host GatewayPluginAcme#host}
  */
  readonly host?: string;
  /**
  * Boolean representation of https. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#https GatewayPluginAcme#https}
  */
  readonly https?: boolean | cdktf.IResolvable;
  /**
  * KV prefix path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#kv_path GatewayPluginAcme#kv_path}
  */
  readonly kvPath?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#port GatewayPluginAcme#port}
  */
  readonly port?: number;
  /**
  * Timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#timeout GatewayPluginAcme#timeout}
  */
  readonly timeout?: number;
  /**
  * Consul ACL token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#token GatewayPluginAcme#token}
  */
  readonly token?: string;
}

export function gatewayPluginAcmeConfigStorageConfigConsulToTerraform(struct?: GatewayPluginAcmeConfigStorageConfigConsul | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    https: cdktf.booleanToTerraform(struct!.https),
    kv_path: cdktf.stringToTerraform(struct!.kvPath),
    port: cdktf.numberToTerraform(struct!.port),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function gatewayPluginAcmeConfigStorageConfigConsulToHclTerraform(struct?: GatewayPluginAcmeConfigStorageConfigConsul | cdktf.IResolvable): any {
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
    https: {
      value: cdktf.booleanToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kv_path: {
      value: cdktf.stringToHclTerraform(struct!.kvPath),
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeConfigStorageConfigConsulOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigStorageConfigConsul | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._kvPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvPath = this._kvPath;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigStorageConfigConsul | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._https = undefined;
      this._kvPath = undefined;
      this._port = undefined;
      this._timeout = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._https = value.https;
      this._kvPath = value.kvPath;
      this._port = value.port;
      this._timeout = value.timeout;
      this._token = value.token;
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

  // https - computed: true, optional: true, required: false
  private _https?: boolean | cdktf.IResolvable; 
  public get https() {
    return this.getBooleanAttribute('https');
  }
  public set https(value: boolean | cdktf.IResolvable) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // kv_path - computed: true, optional: true, required: false
  private _kvPath?: string; 
  public get kvPath() {
    return this.getStringAttribute('kv_path');
  }
  public set kvPath(value: string) {
    this._kvPath = value;
  }
  public resetKvPath() {
    this._kvPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvPathInput() {
    return this._kvPath;
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

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface GatewayPluginAcmeConfigStorageConfigRedisExtraOptions {
  /**
  * A namespace to prepend to all keys stored in Redis. Default: ""
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#namespace GatewayPluginAcme#namespace}
  */
  readonly namespace?: string;
  /**
  * The number of keys to return in Redis SCAN calls. Default: 10
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#scan_count GatewayPluginAcme#scan_count}
  */
  readonly scanCount?: number;
}

export function gatewayPluginAcmeConfigStorageConfigRedisExtraOptionsToTerraform(struct?: GatewayPluginAcmeConfigStorageConfigRedisExtraOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    scan_count: cdktf.numberToTerraform(struct!.scanCount),
  }
}


export function gatewayPluginAcmeConfigStorageConfigRedisExtraOptionsToHclTerraform(struct?: GatewayPluginAcmeConfigStorageConfigRedisExtraOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scan_count: {
      value: cdktf.numberToHclTerraform(struct!.scanCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeConfigStorageConfigRedisExtraOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigStorageConfigRedisExtraOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._scanCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.scanCount = this._scanCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigStorageConfigRedisExtraOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._scanCount = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._scanCount = value.scanCount;
    }
  }

  // namespace - computed: true, optional: true, required: false
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

  // scan_count - computed: true, optional: true, required: false
  private _scanCount?: number; 
  public get scanCount() {
    return this.getNumberAttribute('scan_count');
  }
  public set scanCount(value: number) {
    this._scanCount = value;
  }
  public resetScanCount() {
    this._scanCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanCountInput() {
    return this._scanCount;
  }
}
export interface GatewayPluginAcmeConfigStorageConfigRedis {
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#database GatewayPluginAcme#database}
  */
  readonly database?: number;
  /**
  * Custom ACME Redis options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#extra_options GatewayPluginAcme#extra_options}
  */
  readonly extraOptions?: GatewayPluginAcmeConfigStorageConfigRedisExtraOptions;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#host GatewayPluginAcme#host}
  */
  readonly host?: string;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#password GatewayPluginAcme#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#port GatewayPluginAcme#port}
  */
  readonly port?: number;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#server_name GatewayPluginAcme#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#ssl GatewayPluginAcme#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#ssl_verify GatewayPluginAcme#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#timeout GatewayPluginAcme#timeout}
  */
  readonly timeout?: number;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#username GatewayPluginAcme#username}
  */
  readonly username?: string;
}

export function gatewayPluginAcmeConfigStorageConfigRedisToTerraform(struct?: GatewayPluginAcmeConfigStorageConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.numberToTerraform(struct!.database),
    extra_options: gatewayPluginAcmeConfigStorageConfigRedisExtraOptionsToTerraform(struct!.extraOptions),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPluginAcmeConfigStorageConfigRedisToHclTerraform(struct?: GatewayPluginAcmeConfigStorageConfigRedis | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.numberToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra_options: {
      value: gatewayPluginAcmeConfigStorageConfigRedisExtraOptionsToHclTerraform(struct!.extraOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeConfigStorageConfigRedisExtraOptions",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
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
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class GatewayPluginAcmeConfigStorageConfigRedisOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigStorageConfigRedis | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._extraOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraOptions = this._extraOptions?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
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
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigStorageConfigRedis | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._extraOptions.internalValue = undefined;
      this._host = undefined;
      this._password = undefined;
      this._port = undefined;
      this._serverName = undefined;
      this._ssl = undefined;
      this._sslVerify = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._extraOptions.internalValue = value.extraOptions;
      this._host = value.host;
      this._password = value.password;
      this._port = value.port;
      this._serverName = value.serverName;
      this._ssl = value.ssl;
      this._sslVerify = value.sslVerify;
      this._timeout = value.timeout;
      this._username = value.username;
    }
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

  // extra_options - computed: true, optional: true, required: false
  private _extraOptions = new GatewayPluginAcmeConfigStorageConfigRedisExtraOptionsOutputReference(this, "extra_options");
  public get extraOptions() {
    return this._extraOptions;
  }
  public putExtraOptions(value: GatewayPluginAcmeConfigStorageConfigRedisExtraOptions) {
    this._extraOptions.internalValue = value;
  }
  public resetExtraOptions() {
    this._extraOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraOptionsInput() {
    return this._extraOptions.internalValue;
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
export interface GatewayPluginAcmeConfigStorageConfigShm {
  /**
  * Name of shared memory zone used for Kong API gateway storage. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#shm_name GatewayPluginAcme#shm_name}
  */
  readonly shmName?: string;
}

export function gatewayPluginAcmeConfigStorageConfigShmToTerraform(struct?: GatewayPluginAcmeConfigStorageConfigShm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shm_name: cdktf.stringToTerraform(struct!.shmName),
  }
}


export function gatewayPluginAcmeConfigStorageConfigShmToHclTerraform(struct?: GatewayPluginAcmeConfigStorageConfigShm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shm_name: {
      value: cdktf.stringToHclTerraform(struct!.shmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeConfigStorageConfigShmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigStorageConfigShm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._shmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shmName = this._shmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigStorageConfigShm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._shmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._shmName = value.shmName;
    }
  }

  // shm_name - computed: true, optional: true, required: false
  private _shmName?: string; 
  public get shmName() {
    return this.getStringAttribute('shm_name');
  }
  public set shmName(value: string) {
    this._shmName = value;
  }
  public resetShmName() {
    this._shmName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shmNameInput() {
    return this._shmName;
  }
}
export interface GatewayPluginAcmeConfigStorageConfigVault {
  /**
  * Auth Method, default to token, can be 'token' or 'kubernetes'. Default: "token"; must be one of ["kubernetes", "token"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#auth_method GatewayPluginAcme#auth_method}
  */
  readonly authMethod?: string;
  /**
  * Vault's authentication path to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#auth_path GatewayPluginAcme#auth_path}
  */
  readonly authPath?: string;
  /**
  * The role to try and assign.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#auth_role GatewayPluginAcme#auth_role}
  */
  readonly authRole?: string;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#host GatewayPluginAcme#host}
  */
  readonly host?: string;
  /**
  * Boolean representation of https. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#https GatewayPluginAcme#https}
  */
  readonly https?: boolean | cdktf.IResolvable;
  /**
  * The path to the JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#jwt_path GatewayPluginAcme#jwt_path}
  */
  readonly jwtPath?: string;
  /**
  * KV prefix path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#kv_path GatewayPluginAcme#kv_path}
  */
  readonly kvPath?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#port GatewayPluginAcme#port}
  */
  readonly port?: number;
  /**
  * Timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#timeout GatewayPluginAcme#timeout}
  */
  readonly timeout?: number;
  /**
  * SNI used in request, default to host if omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#tls_server_name GatewayPluginAcme#tls_server_name}
  */
  readonly tlsServerName?: string;
  /**
  * Turn on TLS verification. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#tls_verify GatewayPluginAcme#tls_verify}
  */
  readonly tlsVerify?: boolean | cdktf.IResolvable;
  /**
  * Consul ACL token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#token GatewayPluginAcme#token}
  */
  readonly token?: string;
}

export function gatewayPluginAcmeConfigStorageConfigVaultToTerraform(struct?: GatewayPluginAcmeConfigStorageConfigVault | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_method: cdktf.stringToTerraform(struct!.authMethod),
    auth_path: cdktf.stringToTerraform(struct!.authPath),
    auth_role: cdktf.stringToTerraform(struct!.authRole),
    host: cdktf.stringToTerraform(struct!.host),
    https: cdktf.booleanToTerraform(struct!.https),
    jwt_path: cdktf.stringToTerraform(struct!.jwtPath),
    kv_path: cdktf.stringToTerraform(struct!.kvPath),
    port: cdktf.numberToTerraform(struct!.port),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    tls_server_name: cdktf.stringToTerraform(struct!.tlsServerName),
    tls_verify: cdktf.booleanToTerraform(struct!.tlsVerify),
    token: cdktf.stringToTerraform(struct!.token),
  }
}


export function gatewayPluginAcmeConfigStorageConfigVaultToHclTerraform(struct?: GatewayPluginAcmeConfigStorageConfigVault | cdktf.IResolvable): any {
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
    auth_path: {
      value: cdktf.stringToHclTerraform(struct!.authPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_role: {
      value: cdktf.stringToHclTerraform(struct!.authRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https: {
      value: cdktf.booleanToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    jwt_path: {
      value: cdktf.stringToHclTerraform(struct!.jwtPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kv_path: {
      value: cdktf.stringToHclTerraform(struct!.kvPath),
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_server_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsServerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.tlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeConfigStorageConfigVaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigStorageConfigVault | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.authMethod = this._authMethod;
    }
    if (this._authPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.authPath = this._authPath;
    }
    if (this._authRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.authRole = this._authRole;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._jwtPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtPath = this._jwtPath;
    }
    if (this._kvPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.kvPath = this._kvPath;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._tlsServerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsServerName = this._tlsServerName;
    }
    if (this._tlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsVerify = this._tlsVerify;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigStorageConfigVault | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authMethod = undefined;
      this._authPath = undefined;
      this._authRole = undefined;
      this._host = undefined;
      this._https = undefined;
      this._jwtPath = undefined;
      this._kvPath = undefined;
      this._port = undefined;
      this._timeout = undefined;
      this._tlsServerName = undefined;
      this._tlsVerify = undefined;
      this._token = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authMethod = value.authMethod;
      this._authPath = value.authPath;
      this._authRole = value.authRole;
      this._host = value.host;
      this._https = value.https;
      this._jwtPath = value.jwtPath;
      this._kvPath = value.kvPath;
      this._port = value.port;
      this._timeout = value.timeout;
      this._tlsServerName = value.tlsServerName;
      this._tlsVerify = value.tlsVerify;
      this._token = value.token;
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

  // auth_path - computed: true, optional: true, required: false
  private _authPath?: string; 
  public get authPath() {
    return this.getStringAttribute('auth_path');
  }
  public set authPath(value: string) {
    this._authPath = value;
  }
  public resetAuthPath() {
    this._authPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authPathInput() {
    return this._authPath;
  }

  // auth_role - computed: true, optional: true, required: false
  private _authRole?: string; 
  public get authRole() {
    return this.getStringAttribute('auth_role');
  }
  public set authRole(value: string) {
    this._authRole = value;
  }
  public resetAuthRole() {
    this._authRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRoleInput() {
    return this._authRole;
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

  // https - computed: true, optional: true, required: false
  private _https?: boolean | cdktf.IResolvable; 
  public get https() {
    return this.getBooleanAttribute('https');
  }
  public set https(value: boolean | cdktf.IResolvable) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // jwt_path - computed: true, optional: true, required: false
  private _jwtPath?: string; 
  public get jwtPath() {
    return this.getStringAttribute('jwt_path');
  }
  public set jwtPath(value: string) {
    this._jwtPath = value;
  }
  public resetJwtPath() {
    this._jwtPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtPathInput() {
    return this._jwtPath;
  }

  // kv_path - computed: true, optional: true, required: false
  private _kvPath?: string; 
  public get kvPath() {
    return this.getStringAttribute('kv_path');
  }
  public set kvPath(value: string) {
    this._kvPath = value;
  }
  public resetKvPath() {
    this._kvPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvPathInput() {
    return this._kvPath;
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

  // tls_server_name - computed: true, optional: true, required: false
  private _tlsServerName?: string; 
  public get tlsServerName() {
    return this.getStringAttribute('tls_server_name');
  }
  public set tlsServerName(value: string) {
    this._tlsServerName = value;
  }
  public resetTlsServerName() {
    this._tlsServerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsServerNameInput() {
    return this._tlsServerName;
  }

  // tls_verify - computed: true, optional: true, required: false
  private _tlsVerify?: boolean | cdktf.IResolvable; 
  public get tlsVerify() {
    return this.getBooleanAttribute('tls_verify');
  }
  public set tlsVerify(value: boolean | cdktf.IResolvable) {
    this._tlsVerify = value;
  }
  public resetTlsVerify() {
    this._tlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsVerifyInput() {
    return this._tlsVerify;
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }
}
export interface GatewayPluginAcmeConfigStorageConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#consul GatewayPluginAcme#consul}
  */
  readonly consul?: GatewayPluginAcmeConfigStorageConfigConsul;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#kong GatewayPluginAcme#kong}
  */
  readonly kong?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#redis GatewayPluginAcme#redis}
  */
  readonly redis?: GatewayPluginAcmeConfigStorageConfigRedis;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#shm GatewayPluginAcme#shm}
  */
  readonly shm?: GatewayPluginAcmeConfigStorageConfigShm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#vault GatewayPluginAcme#vault}
  */
  readonly vault?: GatewayPluginAcmeConfigStorageConfigVault;
}

export function gatewayPluginAcmeConfigStorageConfigToTerraform(struct?: GatewayPluginAcmeConfigStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consul: gatewayPluginAcmeConfigStorageConfigConsulToTerraform(struct!.consul),
    kong: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.kong),
    redis: gatewayPluginAcmeConfigStorageConfigRedisToTerraform(struct!.redis),
    shm: gatewayPluginAcmeConfigStorageConfigShmToTerraform(struct!.shm),
    vault: gatewayPluginAcmeConfigStorageConfigVaultToTerraform(struct!.vault),
  }
}


export function gatewayPluginAcmeConfigStorageConfigToHclTerraform(struct?: GatewayPluginAcmeConfigStorageConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consul: {
      value: gatewayPluginAcmeConfigStorageConfigConsulToHclTerraform(struct!.consul),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeConfigStorageConfigConsul",
    },
    kong: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.kong),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    redis: {
      value: gatewayPluginAcmeConfigStorageConfigRedisToHclTerraform(struct!.redis),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeConfigStorageConfigRedis",
    },
    shm: {
      value: gatewayPluginAcmeConfigStorageConfigShmToHclTerraform(struct!.shm),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeConfigStorageConfigShm",
    },
    vault: {
      value: gatewayPluginAcmeConfigStorageConfigVaultToHclTerraform(struct!.vault),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeConfigStorageConfigVault",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeConfigStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigStorageConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consul?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.consul = this._consul?.internalValue;
    }
    if (this._kong !== undefined) {
      hasAnyValues = true;
      internalValueResult.kong = this._kong;
    }
    if (this._redis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redis = this._redis?.internalValue;
    }
    if (this._shm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shm = this._shm?.internalValue;
    }
    if (this._vault?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vault = this._vault?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigStorageConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._consul.internalValue = undefined;
      this._kong = undefined;
      this._redis.internalValue = undefined;
      this._shm.internalValue = undefined;
      this._vault.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._consul.internalValue = value.consul;
      this._kong = value.kong;
      this._redis.internalValue = value.redis;
      this._shm.internalValue = value.shm;
      this._vault.internalValue = value.vault;
    }
  }

  // consul - computed: true, optional: true, required: false
  private _consul = new GatewayPluginAcmeConfigStorageConfigConsulOutputReference(this, "consul");
  public get consul() {
    return this._consul;
  }
  public putConsul(value: GatewayPluginAcmeConfigStorageConfigConsul) {
    this._consul.internalValue = value;
  }
  public resetConsul() {
    this._consul.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consulInput() {
    return this._consul.internalValue;
  }

  // kong - computed: true, optional: true, required: false
  private _kong?: { [key: string]: string }; 
  public get kong() {
    return this.getStringMapAttribute('kong');
  }
  public set kong(value: { [key: string]: string }) {
    this._kong = value;
  }
  public resetKong() {
    this._kong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kongInput() {
    return this._kong;
  }

  // redis - computed: true, optional: true, required: false
  private _redis = new GatewayPluginAcmeConfigStorageConfigRedisOutputReference(this, "redis");
  public get redis() {
    return this._redis;
  }
  public putRedis(value: GatewayPluginAcmeConfigStorageConfigRedis) {
    this._redis.internalValue = value;
  }
  public resetRedis() {
    this._redis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisInput() {
    return this._redis.internalValue;
  }

  // shm - computed: true, optional: true, required: false
  private _shm = new GatewayPluginAcmeConfigStorageConfigShmOutputReference(this, "shm");
  public get shm() {
    return this._shm;
  }
  public putShm(value: GatewayPluginAcmeConfigStorageConfigShm) {
    this._shm.internalValue = value;
  }
  public resetShm() {
    this._shm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shmInput() {
    return this._shm.internalValue;
  }

  // vault - computed: true, optional: true, required: false
  private _vault = new GatewayPluginAcmeConfigStorageConfigVaultOutputReference(this, "vault");
  public get vault() {
    return this._vault;
  }
  public putVault(value: GatewayPluginAcmeConfigStorageConfigVault) {
    this._vault.internalValue = value;
  }
  public resetVault() {
    this._vault.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultInput() {
    return this._vault.internalValue;
  }
}
export interface GatewayPluginAcmeConfigA {
  /**
  * The account identifier. Can be reused in a different plugin instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#account_email GatewayPluginAcme#account_email}
  */
  readonly accountEmail: string;
  /**
  * The private key associated with the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#account_key GatewayPluginAcme#account_key}
  */
  readonly accountKey?: GatewayPluginAcmeConfigAccountKey;
  /**
  * If set to `true`, the plugin allows all domains and ignores any values in the `domains` list. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#allow_any_domain GatewayPluginAcme#allow_any_domain}
  */
  readonly allowAnyDomain?: boolean | cdktf.IResolvable;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search. Default: "https://acme-v02.api.letsencrypt.org/directory"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#api_uri GatewayPluginAcme#api_uri}
  */
  readonly apiUri?: string;
  /**
  * The certificate type to create. The possible values are `rsa` for RSA certificate or `ecc` for EC certificate. Default: "rsa"; must be one of ["ecc", "rsa"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#cert_type GatewayPluginAcme#cert_type}
  */
  readonly certType?: string;
  /**
  * An array of strings representing hosts. A valid host is a string containing one or more labels separated by periods, with at most one wildcard label ('*')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#domains GatewayPluginAcme#domains}
  */
  readonly domains?: string[];
  /**
  * External account binding (EAB) base64-encoded URL string of the HMAC key. You usually don't need to set this unless it is explicitly required by the CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#eab_hmac_key GatewayPluginAcme#eab_hmac_key}
  */
  readonly eabHmacKey?: string;
  /**
  * External account binding (EAB) key id. You usually don't need to set this unless it is explicitly required by the CA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#eab_kid GatewayPluginAcme#eab_kid}
  */
  readonly eabKid?: string;
  /**
  * A boolean value that controls whether to include the IPv4 address in the common name field of generated certificates. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#enable_ipv4_common_name GatewayPluginAcme#enable_ipv4_common_name}
  */
  readonly enableIpv4CommonName?: boolean | cdktf.IResolvable;
  /**
  * Minutes to wait for each domain that fails to create a certificate. This applies to both a
  * new certificate and a renewal certificate.
  * Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#fail_backoff_minutes GatewayPluginAcme#fail_backoff_minutes}
  */
  readonly failBackoffMinutes?: number;
  /**
  * A string value that specifies the preferred certificate chain to use when generating certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#preferred_chain GatewayPluginAcme#preferred_chain}
  */
  readonly preferredChain?: string;
  /**
  * Days remaining to renew the certificate before it expires. Default: 14
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#renew_threshold_days GatewayPluginAcme#renew_threshold_days}
  */
  readonly renewThresholdDays?: number;
  /**
  * RSA private key size for the certificate. The possible values are 2048, 3072, or 4096. Default: 4096; must be one of ["2048", "3072", "4096"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#rsa_key_size GatewayPluginAcme#rsa_key_size}
  */
  readonly rsaKeySize?: number;
  /**
  * The backend storage type to use. In DB-less mode and Konnect, `kong` storage is unavailable. In hybrid mode and Konnect, `shm` storage is unavailable. `shm` storage does not persist during Kong restarts and does not work for Kong running on different machines, so consider using one of `kong`, `redis`, `consul`, or `vault` in production. Default: "shm"; must be one of ["consul", "kong", "redis", "shm", "vault"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#storage GatewayPluginAcme#storage}
  */
  readonly storage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#storage_config GatewayPluginAcme#storage_config}
  */
  readonly storageConfig?: GatewayPluginAcmeConfigStorageConfig;
  /**
  * If you are using Let's Encrypt, you must set this to `true` to agree the terms of service. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#tos_accepted GatewayPluginAcme#tos_accepted}
  */
  readonly tosAccepted?: boolean | cdktf.IResolvable;
}

export function gatewayPluginAcmeConfigAToTerraform(struct?: GatewayPluginAcmeConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account_email: cdktf.stringToTerraform(struct!.accountEmail),
    account_key: gatewayPluginAcmeConfigAccountKeyToTerraform(struct!.accountKey),
    allow_any_domain: cdktf.booleanToTerraform(struct!.allowAnyDomain),
    api_uri: cdktf.stringToTerraform(struct!.apiUri),
    cert_type: cdktf.stringToTerraform(struct!.certType),
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    eab_hmac_key: cdktf.stringToTerraform(struct!.eabHmacKey),
    eab_kid: cdktf.stringToTerraform(struct!.eabKid),
    enable_ipv4_common_name: cdktf.booleanToTerraform(struct!.enableIpv4CommonName),
    fail_backoff_minutes: cdktf.numberToTerraform(struct!.failBackoffMinutes),
    preferred_chain: cdktf.stringToTerraform(struct!.preferredChain),
    renew_threshold_days: cdktf.numberToTerraform(struct!.renewThresholdDays),
    rsa_key_size: cdktf.numberToTerraform(struct!.rsaKeySize),
    storage: cdktf.stringToTerraform(struct!.storage),
    storage_config: gatewayPluginAcmeConfigStorageConfigToTerraform(struct!.storageConfig),
    tos_accepted: cdktf.booleanToTerraform(struct!.tosAccepted),
  }
}


export function gatewayPluginAcmeConfigAToHclTerraform(struct?: GatewayPluginAcmeConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account_email: {
      value: cdktf.stringToHclTerraform(struct!.accountEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    account_key: {
      value: gatewayPluginAcmeConfigAccountKeyToHclTerraform(struct!.accountKey),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeConfigAccountKey",
    },
    allow_any_domain: {
      value: cdktf.booleanToHclTerraform(struct!.allowAnyDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    api_uri: {
      value: cdktf.stringToHclTerraform(struct!.apiUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_type: {
      value: cdktf.stringToHclTerraform(struct!.certType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    eab_hmac_key: {
      value: cdktf.stringToHclTerraform(struct!.eabHmacKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    eab_kid: {
      value: cdktf.stringToHclTerraform(struct!.eabKid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_ipv4_common_name: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv4CommonName),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fail_backoff_minutes: {
      value: cdktf.numberToHclTerraform(struct!.failBackoffMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_chain: {
      value: cdktf.stringToHclTerraform(struct!.preferredChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    renew_threshold_days: {
      value: cdktf.numberToHclTerraform(struct!.renewThresholdDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsa_key_size: {
      value: cdktf.numberToHclTerraform(struct!.rsaKeySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_config: {
      value: gatewayPluginAcmeConfigStorageConfigToHclTerraform(struct!.storageConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeConfigStorageConfig",
    },
    tos_accepted: {
      value: cdktf.booleanToHclTerraform(struct!.tosAccepted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accountEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountEmail = this._accountEmail;
    }
    if (this._accountKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountKey = this._accountKey?.internalValue;
    }
    if (this._allowAnyDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowAnyDomain = this._allowAnyDomain;
    }
    if (this._apiUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiUri = this._apiUri;
    }
    if (this._certType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certType = this._certType;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._eabHmacKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.eabHmacKey = this._eabHmacKey;
    }
    if (this._eabKid !== undefined) {
      hasAnyValues = true;
      internalValueResult.eabKid = this._eabKid;
    }
    if (this._enableIpv4CommonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv4CommonName = this._enableIpv4CommonName;
    }
    if (this._failBackoffMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.failBackoffMinutes = this._failBackoffMinutes;
    }
    if (this._preferredChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredChain = this._preferredChain;
    }
    if (this._renewThresholdDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.renewThresholdDays = this._renewThresholdDays;
    }
    if (this._rsaKeySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsaKeySize = this._rsaKeySize;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    if (this._tosAccepted !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosAccepted = this._tosAccepted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAcmeConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accountEmail = undefined;
      this._accountKey.internalValue = undefined;
      this._allowAnyDomain = undefined;
      this._apiUri = undefined;
      this._certType = undefined;
      this._domains = undefined;
      this._eabHmacKey = undefined;
      this._eabKid = undefined;
      this._enableIpv4CommonName = undefined;
      this._failBackoffMinutes = undefined;
      this._preferredChain = undefined;
      this._renewThresholdDays = undefined;
      this._rsaKeySize = undefined;
      this._storage = undefined;
      this._storageConfig.internalValue = undefined;
      this._tosAccepted = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accountEmail = value.accountEmail;
      this._accountKey.internalValue = value.accountKey;
      this._allowAnyDomain = value.allowAnyDomain;
      this._apiUri = value.apiUri;
      this._certType = value.certType;
      this._domains = value.domains;
      this._eabHmacKey = value.eabHmacKey;
      this._eabKid = value.eabKid;
      this._enableIpv4CommonName = value.enableIpv4CommonName;
      this._failBackoffMinutes = value.failBackoffMinutes;
      this._preferredChain = value.preferredChain;
      this._renewThresholdDays = value.renewThresholdDays;
      this._rsaKeySize = value.rsaKeySize;
      this._storage = value.storage;
      this._storageConfig.internalValue = value.storageConfig;
      this._tosAccepted = value.tosAccepted;
    }
  }

  // account_email - computed: false, optional: false, required: true
  private _accountEmail?: string; 
  public get accountEmail() {
    return this.getStringAttribute('account_email');
  }
  public set accountEmail(value: string) {
    this._accountEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountEmailInput() {
    return this._accountEmail;
  }

  // account_key - computed: true, optional: true, required: false
  private _accountKey = new GatewayPluginAcmeConfigAccountKeyOutputReference(this, "account_key");
  public get accountKey() {
    return this._accountKey;
  }
  public putAccountKey(value: GatewayPluginAcmeConfigAccountKey) {
    this._accountKey.internalValue = value;
  }
  public resetAccountKey() {
    this._accountKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountKeyInput() {
    return this._accountKey.internalValue;
  }

  // allow_any_domain - computed: true, optional: true, required: false
  private _allowAnyDomain?: boolean | cdktf.IResolvable; 
  public get allowAnyDomain() {
    return this.getBooleanAttribute('allow_any_domain');
  }
  public set allowAnyDomain(value: boolean | cdktf.IResolvable) {
    this._allowAnyDomain = value;
  }
  public resetAllowAnyDomain() {
    this._allowAnyDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAnyDomainInput() {
    return this._allowAnyDomain;
  }

  // api_uri - computed: true, optional: true, required: false
  private _apiUri?: string; 
  public get apiUri() {
    return this.getStringAttribute('api_uri');
  }
  public set apiUri(value: string) {
    this._apiUri = value;
  }
  public resetApiUri() {
    this._apiUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUriInput() {
    return this._apiUri;
  }

  // cert_type - computed: true, optional: true, required: false
  private _certType?: string; 
  public get certType() {
    return this.getStringAttribute('cert_type');
  }
  public set certType(value: string) {
    this._certType = value;
  }
  public resetCertType() {
    this._certType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certTypeInput() {
    return this._certType;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // eab_hmac_key - computed: false, optional: true, required: false
  private _eabHmacKey?: string; 
  public get eabHmacKey() {
    return this.getStringAttribute('eab_hmac_key');
  }
  public set eabHmacKey(value: string) {
    this._eabHmacKey = value;
  }
  public resetEabHmacKey() {
    this._eabHmacKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabHmacKeyInput() {
    return this._eabHmacKey;
  }

  // eab_kid - computed: false, optional: true, required: false
  private _eabKid?: string; 
  public get eabKid() {
    return this.getStringAttribute('eab_kid');
  }
  public set eabKid(value: string) {
    this._eabKid = value;
  }
  public resetEabKid() {
    this._eabKid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eabKidInput() {
    return this._eabKid;
  }

  // enable_ipv4_common_name - computed: true, optional: true, required: false
  private _enableIpv4CommonName?: boolean | cdktf.IResolvable; 
  public get enableIpv4CommonName() {
    return this.getBooleanAttribute('enable_ipv4_common_name');
  }
  public set enableIpv4CommonName(value: boolean | cdktf.IResolvable) {
    this._enableIpv4CommonName = value;
  }
  public resetEnableIpv4CommonName() {
    this._enableIpv4CommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv4CommonNameInput() {
    return this._enableIpv4CommonName;
  }

  // fail_backoff_minutes - computed: true, optional: true, required: false
  private _failBackoffMinutes?: number; 
  public get failBackoffMinutes() {
    return this.getNumberAttribute('fail_backoff_minutes');
  }
  public set failBackoffMinutes(value: number) {
    this._failBackoffMinutes = value;
  }
  public resetFailBackoffMinutes() {
    this._failBackoffMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failBackoffMinutesInput() {
    return this._failBackoffMinutes;
  }

  // preferred_chain - computed: false, optional: true, required: false
  private _preferredChain?: string; 
  public get preferredChain() {
    return this.getStringAttribute('preferred_chain');
  }
  public set preferredChain(value: string) {
    this._preferredChain = value;
  }
  public resetPreferredChain() {
    this._preferredChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredChainInput() {
    return this._preferredChain;
  }

  // renew_threshold_days - computed: true, optional: true, required: false
  private _renewThresholdDays?: number; 
  public get renewThresholdDays() {
    return this.getNumberAttribute('renew_threshold_days');
  }
  public set renewThresholdDays(value: number) {
    this._renewThresholdDays = value;
  }
  public resetRenewThresholdDays() {
    this._renewThresholdDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renewThresholdDaysInput() {
    return this._renewThresholdDays;
  }

  // rsa_key_size - computed: true, optional: true, required: false
  private _rsaKeySize?: number; 
  public get rsaKeySize() {
    return this.getNumberAttribute('rsa_key_size');
  }
  public set rsaKeySize(value: number) {
    this._rsaKeySize = value;
  }
  public resetRsaKeySize() {
    this._rsaKeySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaKeySizeInput() {
    return this._rsaKeySize;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // storage_config - computed: true, optional: true, required: false
  private _storageConfig = new GatewayPluginAcmeConfigStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: GatewayPluginAcmeConfigStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  public resetStorageConfig() {
    this._storageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }

  // tos_accepted - computed: true, optional: true, required: false
  private _tosAccepted?: boolean | cdktf.IResolvable; 
  public get tosAccepted() {
    return this.getBooleanAttribute('tos_accepted');
  }
  public set tosAccepted(value: boolean | cdktf.IResolvable) {
    this._tosAccepted = value;
  }
  public resetTosAccepted() {
    this._tosAccepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosAcceptedInput() {
    return this._tosAccepted;
  }
}
export interface GatewayPluginAcmeOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#access GatewayPluginAcme#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAcmeOrderingAfterToTerraform(struct?: GatewayPluginAcmeOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAcmeOrderingAfterToHclTerraform(struct?: GatewayPluginAcmeOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAcmeOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAcmeOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAcmeOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#access GatewayPluginAcme#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAcmeOrderingBeforeToTerraform(struct?: GatewayPluginAcmeOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAcmeOrderingBeforeToHclTerraform(struct?: GatewayPluginAcmeOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAcmeOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAcmeOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAcmeOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#after GatewayPluginAcme#after}
  */
  readonly after?: GatewayPluginAcmeOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#before GatewayPluginAcme#before}
  */
  readonly before?: GatewayPluginAcmeOrderingBefore;
}

export function gatewayPluginAcmeOrderingToTerraform(struct?: GatewayPluginAcmeOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAcmeOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAcmeOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAcmeOrderingToHclTerraform(struct?: GatewayPluginAcmeOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAcmeOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeOrderingAfter",
    },
    before: {
      value: gatewayPluginAcmeOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAcmeOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAcmeOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAcmeOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAcmeOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAcmeOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAcmeOrderingAfter) {
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
  private _before = new GatewayPluginAcmeOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAcmeOrderingBefore) {
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
export interface GatewayPluginAcmePartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#id GatewayPluginAcme#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#name GatewayPluginAcme#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#path GatewayPluginAcme#path}
  */
  readonly path?: string;
}

export function gatewayPluginAcmePartialsToTerraform(struct?: GatewayPluginAcmePartials | cdktf.IResolvable): any {
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


export function gatewayPluginAcmePartialsToHclTerraform(struct?: GatewayPluginAcmePartials | cdktf.IResolvable): any {
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

export class GatewayPluginAcmePartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAcmePartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAcmePartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAcmePartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAcmePartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAcmePartialsOutputReference {
    return new GatewayPluginAcmePartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme konnect_gateway_plugin_acme}
*/
export class GatewayPluginAcme extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_acme";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAcme resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAcme to import
  * @param importFromId The id of the existing GatewayPluginAcme that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAcme to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_acme", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/gateway_plugin_acme konnect_gateway_plugin_acme} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAcmeConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAcmeConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_acme',
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
    this._tags = config.tags;
    this._updatedAt = config.updatedAt;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginAcmeConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAcmeConfigA) {
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
  private _ordering = new GatewayPluginAcmeOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAcmeOrdering) {
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
  private _partials = new GatewayPluginAcmePartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAcmePartials[] | cdktf.IResolvable) {
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
      config: gatewayPluginAcmeConfigAToTerraform(this._config.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAcmeOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAcmePartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAcmeConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAcmeConfigA",
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
        value: gatewayPluginAcmeOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAcmeOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAcmePartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAcmePartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
