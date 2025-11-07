// https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhousedbopsProviderConfig {
  /**
  * Authentication configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#auth_config ClickhousedbopsProvider#auth_config}
  */
  readonly authConfig: ClickhousedbopsProviderAuthConfig;
  /**
  * The hostname to use to connect to the clickhouse instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#host ClickhousedbopsProvider#host}
  */
  readonly host: string;
  /**
  * The port to use to connect to the clickhouse instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#port ClickhousedbopsProvider#port}
  */
  readonly port: number;
  /**
  * The protocol to use to connect to clickhouse instance. Valid options are: native, nativesecure, http, https
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#protocol ClickhousedbopsProvider#protocol}
  */
  readonly protocol: string;
  /**
  * TLS configuration options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#tls_config ClickhousedbopsProvider#tls_config}
  */
  readonly tlsConfig?: ClickhousedbopsProviderTlsConfig;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#alias ClickhousedbopsProvider#alias}
  */
  readonly alias?: string;
}
export interface ClickhousedbopsProviderAuthConfig {
  /**
  * The password to use to authenticate to ClickHouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#password ClickhousedbopsProvider#password}
  */
  readonly password?: string;
  /**
  * The authentication method to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#strategy ClickhousedbopsProvider#strategy}
  */
  readonly strategy: string;
  /**
  * The username to use to authenticate to ClickHouse
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#username ClickhousedbopsProvider#username}
  */
  readonly username: string;
}

export function clickhousedbopsProviderAuthConfigToTerraform(struct?: ClickhousedbopsProviderAuthConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    strategy: cdktf.stringToTerraform(struct!.strategy),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function clickhousedbopsProviderAuthConfigToHclTerraform(struct?: ClickhousedbopsProviderAuthConfig | cdktf.IResolvable): any {
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
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
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

export interface ClickhousedbopsProviderTlsConfig {
  /**
  * Skip TLS cert verification when using the https protocol. This is insecure!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#insecure_skip_verify ClickhousedbopsProvider#insecure_skip_verify}
  */
  readonly insecureSkipVerify?: boolean | cdktf.IResolvable;
}

export function clickhousedbopsProviderTlsConfigToTerraform(struct?: ClickhousedbopsProviderTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insecure_skip_verify: cdktf.booleanToTerraform(struct!.insecureSkipVerify),
  }
}


export function clickhousedbopsProviderTlsConfigToHclTerraform(struct?: ClickhousedbopsProviderTlsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insecure_skip_verify: {
      value: cdktf.booleanToHclTerraform(struct!.insecureSkipVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs clickhousedbops}
*/
export class ClickhousedbopsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "clickhousedbops";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClickhousedbopsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClickhousedbopsProvider to import
  * @param importFromId The id of the existing ClickhousedbopsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClickhousedbopsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "clickhousedbops", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/clickhouse/clickhousedbops/1.3.1/docs clickhousedbops} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhousedbopsProviderConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhousedbopsProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'clickhousedbops',
      terraformGeneratorMetadata: {
        providerName: 'clickhousedbops',
        providerVersion: '1.3.1'
      },
      terraformProviderSource: 'ClickHouse/clickhousedbops'
    });
    this._authConfig = config.authConfig;
    this._host = config.host;
    this._port = config.port;
    this._protocol = config.protocol;
    this._tlsConfig = config.tlsConfig;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_config - computed: false, optional: false, required: true
  private _authConfig?: ClickhousedbopsProviderAuthConfig; 
  public get authConfig() {
    return this._authConfig;
  }
  public set authConfig(value: ClickhousedbopsProviderAuthConfig | undefined) {
    this._authConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this._port;
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this._protocol;
  }
  public set protocol(value: string | undefined) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // tls_config - computed: false, optional: true, required: false
  private _tlsConfig?: ClickhousedbopsProviderTlsConfig; 
  public get tlsConfig() {
    return this._tlsConfig;
  }
  public set tlsConfig(value: ClickhousedbopsProviderTlsConfig | undefined) {
    this._tlsConfig = value;
  }
  public resetTlsConfig() {
    this._tlsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsConfigInput() {
    return this._tlsConfig;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_config: clickhousedbopsProviderAuthConfigToTerraform(this._authConfig),
      host: cdktf.stringToTerraform(this._host),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      tls_config: clickhousedbopsProviderTlsConfigToTerraform(this._tlsConfig),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_config: {
        value: clickhousedbopsProviderAuthConfigToHclTerraform(this._authConfig),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhousedbopsProviderAuthConfig",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_config: {
        value: clickhousedbopsProviderTlsConfigToHclTerraform(this._tlsConfig),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhousedbopsProviderTlsConfig",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
