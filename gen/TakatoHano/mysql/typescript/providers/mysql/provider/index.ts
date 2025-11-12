// https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#authentication_plugin MysqlProvider#authentication_plugin}
  */
  readonly authenticationPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#endpoint MysqlProvider#endpoint}
  */
  readonly endpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#max_conn_lifetime_sec MysqlProvider#max_conn_lifetime_sec}
  */
  readonly maxConnLifetimeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#max_open_conns MysqlProvider#max_open_conns}
  */
  readonly maxOpenConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#password MysqlProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#proxy MysqlProvider#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#tls MysqlProvider#tls}
  */
  readonly tls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#username MysqlProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#alias MysqlProvider#alias}
  */
  readonly alias?: string;
  /**
  * aws_ssm_session_manager_client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#aws_ssm_session_manager_client_config MysqlProvider#aws_ssm_session_manager_client_config}
  */
  readonly awsSsmSessionManagerClientConfig?: MysqlProviderAwsSsmSessionManagerClientConfig;
  /**
  * port_forward_client_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#port_forward_client_config MysqlProvider#port_forward_client_config}
  */
  readonly portForwardClientConfig?: MysqlProviderPortForwardClientConfig;
}
export interface MysqlProviderAwsSsmSessionManagerClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#aws_profile MysqlProvider#aws_profile}
  */
  readonly awsProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#ec2_instance_id MysqlProvider#ec2_instance_id}
  */
  readonly ec2InstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#rds_endpoint MysqlProvider#rds_endpoint}
  */
  readonly rdsEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#region MysqlProvider#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#ssh_key_path MysqlProvider#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#ssh_user MysqlProvider#ssh_user}
  */
  readonly sshUser?: string;
}

export function mysqlProviderAwsSsmSessionManagerClientConfigToTerraform(struct?: MysqlProviderAwsSsmSessionManagerClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_profile: cdktf.stringToTerraform(struct!.awsProfile),
    ec2_instance_id: cdktf.stringToTerraform(struct!.ec2InstanceId),
    rds_endpoint: cdktf.stringToTerraform(struct!.rdsEndpoint),
    region: cdktf.stringToTerraform(struct!.region),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
  }
}


export function mysqlProviderAwsSsmSessionManagerClientConfigToHclTerraform(struct?: MysqlProviderAwsSsmSessionManagerClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_profile: {
      value: cdktf.stringToHclTerraform(struct!.awsProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ec2_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.ec2InstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rds_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.rdsEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface MysqlProviderPortForwardClientConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#db_endpoint MysqlProvider#db_endpoint}
  */
  readonly dbEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#remote_host MysqlProvider#remote_host}
  */
  readonly remoteHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#ssh_key_path MysqlProvider#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#ssh_user MysqlProvider#ssh_user}
  */
  readonly sshUser?: string;
}

export function mysqlProviderPortForwardClientConfigToTerraform(struct?: MysqlProviderPortForwardClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_endpoint: cdktf.stringToTerraform(struct!.dbEndpoint),
    remote_host: cdktf.stringToTerraform(struct!.remoteHost),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
  }
}


export function mysqlProviderPortForwardClientConfigToHclTerraform(struct?: MysqlProviderPortForwardClientConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.dbEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_host: {
      value: cdktf.stringToHclTerraform(struct!.remoteHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs mysql}
*/
export class MysqlProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MysqlProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MysqlProvider to import
  * @param importFromId The id of the existing MysqlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/takatohano/mysql/1.2.1/docs mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlProviderConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'mysql',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      terraformProviderSource: 'TakatoHano/mysql'
    });
    this._authenticationPlugin = config.authenticationPlugin;
    this._endpoint = config.endpoint;
    this._maxConnLifetimeSec = config.maxConnLifetimeSec;
    this._maxOpenConns = config.maxOpenConns;
    this._password = config.password;
    this._proxy = config.proxy;
    this._tls = config.tls;
    this._username = config.username;
    this._alias = config.alias;
    this._awsSsmSessionManagerClientConfig = config.awsSsmSessionManagerClientConfig;
    this._portForwardClientConfig = config.portForwardClientConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authentication_plugin - computed: false, optional: true, required: false
  private _authenticationPlugin?: string; 
  public get authenticationPlugin() {
    return this._authenticationPlugin;
  }
  public set authenticationPlugin(value: string | undefined) {
    this._authenticationPlugin = value;
  }
  public resetAuthenticationPlugin() {
    this._authenticationPlugin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPluginInput() {
    return this._authenticationPlugin;
  }

  // endpoint - computed: false, optional: false, required: true
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // max_conn_lifetime_sec - computed: false, optional: true, required: false
  private _maxConnLifetimeSec?: number; 
  public get maxConnLifetimeSec() {
    return this._maxConnLifetimeSec;
  }
  public set maxConnLifetimeSec(value: number | undefined) {
    this._maxConnLifetimeSec = value;
  }
  public resetMaxConnLifetimeSec() {
    this._maxConnLifetimeSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnLifetimeSecInput() {
    return this._maxConnLifetimeSec;
  }

  // max_open_conns - computed: false, optional: true, required: false
  private _maxOpenConns?: number; 
  public get maxOpenConns() {
    return this._maxOpenConns;
  }
  public set maxOpenConns(value: number | undefined) {
    this._maxOpenConns = value;
  }
  public resetMaxOpenConns() {
    this._maxOpenConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxOpenConnsInput() {
    return this._maxOpenConns;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: string; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: string | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // tls - computed: false, optional: true, required: false
  private _tls?: string; 
  public get tls() {
    return this._tls;
  }
  public set tls(value: string | undefined) {
    this._tls = value;
  }
  public resetTls() {
    this._tls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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

  // aws_ssm_session_manager_client_config - computed: false, optional: true, required: false
  private _awsSsmSessionManagerClientConfig?: MysqlProviderAwsSsmSessionManagerClientConfig; 
  public get awsSsmSessionManagerClientConfig() {
    return this._awsSsmSessionManagerClientConfig;
  }
  public set awsSsmSessionManagerClientConfig(value: MysqlProviderAwsSsmSessionManagerClientConfig | undefined) {
    this._awsSsmSessionManagerClientConfig = value;
  }
  public resetAwsSsmSessionManagerClientConfig() {
    this._awsSsmSessionManagerClientConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSsmSessionManagerClientConfigInput() {
    return this._awsSsmSessionManagerClientConfig;
  }

  // port_forward_client_config - computed: false, optional: true, required: false
  private _portForwardClientConfig?: MysqlProviderPortForwardClientConfig; 
  public get portForwardClientConfig() {
    return this._portForwardClientConfig;
  }
  public set portForwardClientConfig(value: MysqlProviderPortForwardClientConfig | undefined) {
    this._portForwardClientConfig = value;
  }
  public resetPortForwardClientConfig() {
    this._portForwardClientConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portForwardClientConfigInput() {
    return this._portForwardClientConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_plugin: cdktf.stringToTerraform(this._authenticationPlugin),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      max_conn_lifetime_sec: cdktf.numberToTerraform(this._maxConnLifetimeSec),
      max_open_conns: cdktf.numberToTerraform(this._maxOpenConns),
      password: cdktf.stringToTerraform(this._password),
      proxy: cdktf.stringToTerraform(this._proxy),
      tls: cdktf.stringToTerraform(this._tls),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      aws_ssm_session_manager_client_config: mysqlProviderAwsSsmSessionManagerClientConfigToTerraform(this._awsSsmSessionManagerClientConfig),
      port_forward_client_config: mysqlProviderPortForwardClientConfigToTerraform(this._portForwardClientConfig),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authentication_plugin: {
        value: cdktf.stringToHclTerraform(this._authenticationPlugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_conn_lifetime_sec: {
        value: cdktf.numberToHclTerraform(this._maxConnLifetimeSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_open_conns: {
        value: cdktf.numberToHclTerraform(this._maxOpenConns),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy: {
        value: cdktf.stringToHclTerraform(this._proxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls: {
        value: cdktf.stringToHclTerraform(this._tls),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_ssm_session_manager_client_config: {
        value: mysqlProviderAwsSsmSessionManagerClientConfigToHclTerraform(this._awsSsmSessionManagerClientConfig),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlProviderAwsSsmSessionManagerClientConfigList",
      },
      port_forward_client_config: {
        value: mysqlProviderPortForwardClientConfigToHclTerraform(this._portForwardClientConfig),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlProviderPortForwardClientConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
