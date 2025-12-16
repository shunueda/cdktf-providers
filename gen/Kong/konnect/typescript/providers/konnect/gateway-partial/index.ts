// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPartialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#control_plane_id GatewayPartial#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#redis_ce GatewayPartial#redis_ce}
  */
  readonly redisCe?: GatewayPartialRedisCe;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#redis_ee GatewayPartial#redis_ee}
  */
  readonly redisEe?: GatewayPartialRedisEe;
}
export interface GatewayPartialRedisCeConfig {
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#database GatewayPartial#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#host GatewayPartial#host}
  */
  readonly host?: string;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#password GatewayPartial#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#port GatewayPartial#port}
  */
  readonly port?: number;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#server_name GatewayPartial#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#ssl GatewayPartial#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#ssl_verify GatewayPartial#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#timeout GatewayPartial#timeout}
  */
  readonly timeout?: number;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#username GatewayPartial#username}
  */
  readonly username?: string;
}

export function gatewayPartialRedisCeConfigToTerraform(struct?: GatewayPartialRedisCeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.numberToTerraform(struct!.database),
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


export function gatewayPartialRedisCeConfigToHclTerraform(struct?: GatewayPartialRedisCeConfig | cdktf.IResolvable): any {
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

export class GatewayPartialRedisCeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPartialRedisCeConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
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

  public set internalValue(value: GatewayPartialRedisCeConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
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
export interface GatewayPartialRedisCe {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#config GatewayPartial#config}
  */
  readonly config?: GatewayPartialRedisCeConfig;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#created_at GatewayPartial#created_at}
  */
  readonly createdAt?: number;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#id GatewayPartial#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#name GatewayPartial#name}
  */
  readonly name?: string;
  /**
  * A set of strings representing tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#tags GatewayPartial#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#updated_at GatewayPartial#updated_at}
  */
  readonly updatedAt?: number;
}

export function gatewayPartialRedisCeToTerraform(struct?: GatewayPartialRedisCe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: gatewayPartialRedisCeConfigToTerraform(struct!.config),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
  }
}


export function gatewayPartialRedisCeToHclTerraform(struct?: GatewayPartialRedisCe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: gatewayPartialRedisCeConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPartialRedisCeConfig",
    },
    created_at: {
      value: cdktf.numberToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    updated_at: {
      value: cdktf.numberToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPartialRedisCeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPartialRedisCe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPartialRedisCe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._createdAt = undefined;
      this._id = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._createdAt = value.createdAt;
      this._id = value.id;
      this._name = value.name;
      this._tags = value.tags;
      this._updatedAt = value.updatedAt;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPartialRedisCeConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPartialRedisCeConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // name - computed: false, optional: true, required: false
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
}
export interface GatewayPartialRedisEeConfigClusterNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#ip GatewayPartial#ip}
  */
  readonly ip?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#port GatewayPartial#port}
  */
  readonly port?: number;
}

export function gatewayPartialRedisEeConfigClusterNodesToTerraform(struct?: GatewayPartialRedisEeConfigClusterNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPartialRedisEeConfigClusterNodesToHclTerraform(struct?: GatewayPartialRedisEeConfigClusterNodes | cdktf.IResolvable): any {
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

export class GatewayPartialRedisEeConfigClusterNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPartialRedisEeConfigClusterNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPartialRedisEeConfigClusterNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPartialRedisEeConfigClusterNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPartialRedisEeConfigClusterNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPartialRedisEeConfigClusterNodesOutputReference {
    return new GatewayPartialRedisEeConfigClusterNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPartialRedisEeConfigSentinelNodes {
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#host GatewayPartial#host}
  */
  readonly host?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#port GatewayPartial#port}
  */
  readonly port?: number;
}

export function gatewayPartialRedisEeConfigSentinelNodesToTerraform(struct?: GatewayPartialRedisEeConfigSentinelNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function gatewayPartialRedisEeConfigSentinelNodesToHclTerraform(struct?: GatewayPartialRedisEeConfigSentinelNodes | cdktf.IResolvable): any {
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

export class GatewayPartialRedisEeConfigSentinelNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPartialRedisEeConfigSentinelNodes | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPartialRedisEeConfigSentinelNodes | cdktf.IResolvable | undefined) {
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

export class GatewayPartialRedisEeConfigSentinelNodesList extends cdktf.ComplexList {
  public internalValue? : GatewayPartialRedisEeConfigSentinelNodes[] | cdktf.IResolvable

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
  public get(index: number): GatewayPartialRedisEeConfigSentinelNodesOutputReference {
    return new GatewayPartialRedisEeConfigSentinelNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPartialRedisEeConfig {
  /**
  * Maximum retry attempts for redirection. Default: 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#cluster_max_redirections GatewayPartial#cluster_max_redirections}
  */
  readonly clusterMaxRedirections?: number;
  /**
  * Cluster addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Cluster. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#cluster_nodes GatewayPartial#cluster_nodes}
  */
  readonly clusterNodes?: GatewayPartialRedisEeConfigClusterNodes[] | cdktf.IResolvable;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#connect_timeout GatewayPartial#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * If the connection to Redis is proxied (e.g. Envoy), set it `true`. Set the `host` and `port` to point to the proxy address. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#connection_is_proxied GatewayPartial#connection_is_proxied}
  */
  readonly connectionIsProxied?: boolean | cdktf.IResolvable;
  /**
  * Database to use for the Redis connection when using the `redis` strategy. Default: 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#database GatewayPartial#database}
  */
  readonly database?: number;
  /**
  * A string representing a host name, such as example.com. Default: "127.0.0.1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#host GatewayPartial#host}
  */
  readonly host?: string;
  /**
  * Limits the total number of opened connections for a pool. If the connection pool is full, connection queues above the limit go into the backlog queue. If the backlog queue is full, subsequent connect operations fail and return `nil`. Queued operations (subject to set timeouts) resume once the number of connections in the pool is less than `keepalive_pool_size`. If latency is high or throughput is low, try increasing this value. Empirically, this value is larger than `keepalive_pool_size`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#keepalive_backlog GatewayPartial#keepalive_backlog}
  */
  readonly keepaliveBacklog?: number;
  /**
  * The size limit for every cosocket connection pool associated with every remote server, per worker process. If neither `keepalive_pool_size` nor `keepalive_backlog` is specified, no pool is created. If `keepalive_pool_size` isn't specified but `keepalive_backlog` is specified, then the pool uses the default value. Try to increase (e.g. 512) this value if latency is high or throughput is low. Default: 256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#keepalive_pool_size GatewayPartial#keepalive_pool_size}
  */
  readonly keepalivePoolSize?: number;
  /**
  * Password to use for Redis connections. If undefined, no AUTH commands are sent to Redis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#password GatewayPartial#password}
  */
  readonly password?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 6379
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#port GatewayPartial#port}
  */
  readonly port?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#read_timeout GatewayPartial#read_timeout}
  */
  readonly readTimeout?: number;
  /**
  * An integer representing a timeout in milliseconds. Must be between 0 and 2^31-2. Default: 2000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#send_timeout GatewayPartial#send_timeout}
  */
  readonly sendTimeout?: number;
  /**
  * Sentinel master to use for Redis connections. Defining this value implies using Redis Sentinel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#sentinel_master GatewayPartial#sentinel_master}
  */
  readonly sentinelMaster?: string;
  /**
  * Sentinel node addresses to use for Redis connections when the `redis` strategy is defined. Defining this field implies using a Redis Sentinel. The minimum length of the array is 1 element.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#sentinel_nodes GatewayPartial#sentinel_nodes}
  */
  readonly sentinelNodes?: GatewayPartialRedisEeConfigSentinelNodes[] | cdktf.IResolvable;
  /**
  * Sentinel password to authenticate with a Redis Sentinel instance. If undefined, no AUTH commands are sent to Redis Sentinels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#sentinel_password GatewayPartial#sentinel_password}
  */
  readonly sentinelPassword?: string;
  /**
  * Sentinel role to use for Redis connections when the `redis` strategy is defined. Defining this value implies using Redis Sentinel. must be one of ["any", "master", "slave"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#sentinel_role GatewayPartial#sentinel_role}
  */
  readonly sentinelRole?: string;
  /**
  * Sentinel username to authenticate with a Redis Sentinel instance. If undefined, ACL authentication won't be performed. This requires Redis v6.2.0+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#sentinel_username GatewayPartial#sentinel_username}
  */
  readonly sentinelUsername?: string;
  /**
  * A string representing an SNI (server name indication) value for TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#server_name GatewayPartial#server_name}
  */
  readonly serverName?: string;
  /**
  * If set to true, uses SSL to connect to Redis. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#ssl GatewayPartial#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * If set to true, verifies the validity of the server SSL certificate. If setting this parameter, also configure `lua_ssl_trusted_certificate` in `kong.conf` to specify the CA (or server) certificate used by your Redis server. You may also need to configure `lua_ssl_verify_depth` accordingly. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#ssl_verify GatewayPartial#ssl_verify}
  */
  readonly sslVerify?: boolean | cdktf.IResolvable;
  /**
  * Username to use for Redis connections. If undefined, ACL authentication won't be performed. This requires Redis v6.0.0+. To be compatible with Redis v5.x.y, you can set it to `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#username GatewayPartial#username}
  */
  readonly username?: string;
}

export function gatewayPartialRedisEeConfigToTerraform(struct?: GatewayPartialRedisEeConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_max_redirections: cdktf.numberToTerraform(struct!.clusterMaxRedirections),
    cluster_nodes: cdktf.listMapper(gatewayPartialRedisEeConfigClusterNodesToTerraform, false)(struct!.clusterNodes),
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
    sentinel_nodes: cdktf.listMapper(gatewayPartialRedisEeConfigSentinelNodesToTerraform, false)(struct!.sentinelNodes),
    sentinel_password: cdktf.stringToTerraform(struct!.sentinelPassword),
    sentinel_role: cdktf.stringToTerraform(struct!.sentinelRole),
    sentinel_username: cdktf.stringToTerraform(struct!.sentinelUsername),
    server_name: cdktf.stringToTerraform(struct!.serverName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    ssl_verify: cdktf.booleanToTerraform(struct!.sslVerify),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function gatewayPartialRedisEeConfigToHclTerraform(struct?: GatewayPartialRedisEeConfig | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(gatewayPartialRedisEeConfigClusterNodesToHclTerraform, false)(struct!.clusterNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPartialRedisEeConfigClusterNodesList",
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
      value: cdktf.listMapperHcl(gatewayPartialRedisEeConfigSentinelNodesToHclTerraform, false)(struct!.sentinelNodes),
      isBlock: true,
      type: "list",
      storageClassType: "GatewayPartialRedisEeConfigSentinelNodesList",
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

export class GatewayPartialRedisEeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPartialRedisEeConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPartialRedisEeConfig | cdktf.IResolvable | undefined) {
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
  private _clusterNodes = new GatewayPartialRedisEeConfigClusterNodesList(this, "cluster_nodes", false);
  public get clusterNodes() {
    return this._clusterNodes;
  }
  public putClusterNodes(value: GatewayPartialRedisEeConfigClusterNodes[] | cdktf.IResolvable) {
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
  private _sentinelNodes = new GatewayPartialRedisEeConfigSentinelNodesList(this, "sentinel_nodes", false);
  public get sentinelNodes() {
    return this._sentinelNodes;
  }
  public putSentinelNodes(value: GatewayPartialRedisEeConfigSentinelNodes[] | cdktf.IResolvable) {
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
export interface GatewayPartialRedisEe {
  /**
  * Not Null
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#config GatewayPartial#config}
  */
  readonly config?: GatewayPartialRedisEeConfig;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#created_at GatewayPartial#created_at}
  */
  readonly createdAt?: number;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#id GatewayPartial#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#name GatewayPartial#name}
  */
  readonly name?: string;
  /**
  * A set of strings representing tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#tags GatewayPartial#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#updated_at GatewayPartial#updated_at}
  */
  readonly updatedAt?: number;
}

export function gatewayPartialRedisEeToTerraform(struct?: GatewayPartialRedisEe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: gatewayPartialRedisEeConfigToTerraform(struct!.config),
    created_at: cdktf.numberToTerraform(struct!.createdAt),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    updated_at: cdktf.numberToTerraform(struct!.updatedAt),
  }
}


export function gatewayPartialRedisEeToHclTerraform(struct?: GatewayPartialRedisEe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: gatewayPartialRedisEeConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPartialRedisEeConfig",
    },
    created_at: {
      value: cdktf.numberToHclTerraform(struct!.createdAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    updated_at: {
      value: cdktf.numberToHclTerraform(struct!.updatedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPartialRedisEeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPartialRedisEe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._createdAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdAt = this._createdAt;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._updatedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.updatedAt = this._updatedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPartialRedisEe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._createdAt = undefined;
      this._id = undefined;
      this._name = undefined;
      this._tags = undefined;
      this._updatedAt = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._createdAt = value.createdAt;
      this._id = value.id;
      this._name = value.name;
      this._tags = value.tags;
      this._updatedAt = value.updatedAt;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPartialRedisEeConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPartialRedisEeConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
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

  // name - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial konnect_gateway_partial}
*/
export class GatewayPartial extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_partial";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPartial resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPartial to import
  * @param importFromId The id of the existing GatewayPartial that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPartial to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_partial", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_partial konnect_gateway_partial} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPartialConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPartialConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_partial',
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
    this._controlPlaneId = config.controlPlaneId;
    this._redisCe.internalValue = config.redisCe;
    this._redisEe.internalValue = config.redisEe;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getNumberAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // redis_ce - computed: false, optional: true, required: false
  private _redisCe = new GatewayPartialRedisCeOutputReference(this, "redis_ce");
  public get redisCe() {
    return this._redisCe;
  }
  public putRedisCe(value: GatewayPartialRedisCe) {
    this._redisCe.internalValue = value;
  }
  public resetRedisCe() {
    this._redisCe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisCeInput() {
    return this._redisCe.internalValue;
  }

  // redis_ee - computed: false, optional: true, required: false
  private _redisEe = new GatewayPartialRedisEeOutputReference(this, "redis_ee");
  public get redisEe() {
    return this._redisEe;
  }
  public putRedisEe(value: GatewayPartialRedisEe) {
    this._redisEe.internalValue = value;
  }
  public resetRedisEe() {
    this._redisEe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redisEeInput() {
    return this._redisEe.internalValue;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getNumberAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      redis_ce: gatewayPartialRedisCeToTerraform(this._redisCe.internalValue),
      redis_ee: gatewayPartialRedisEeToTerraform(this._redisEe.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_plane_id: {
        value: cdktf.stringToHclTerraform(this._controlPlaneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redis_ce: {
        value: gatewayPartialRedisCeToHclTerraform(this._redisCe.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPartialRedisCe",
      },
      redis_ee: {
        value: gatewayPartialRedisEeToHclTerraform(this._redisEe.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPartialRedisEe",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
