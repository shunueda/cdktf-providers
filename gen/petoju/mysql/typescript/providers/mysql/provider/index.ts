// https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#authentication_plugin MysqlProvider#authentication_plugin}
  */
  readonly authenticationPlugin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#conn_params MysqlProvider#conn_params}
  */
  readonly connParams?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#connect_retry_timeout_sec MysqlProvider#connect_retry_timeout_sec}
  */
  readonly connectRetryTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#endpoint MysqlProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#iam_database_authentication MysqlProvider#iam_database_authentication}
  */
  readonly iamDatabaseAuthentication?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#max_conn_lifetime_sec MysqlProvider#max_conn_lifetime_sec}
  */
  readonly maxConnLifetimeSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#max_open_conns MysqlProvider#max_open_conns}
  */
  readonly maxOpenConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#no_proxy MysqlProvider#no_proxy}
  */
  readonly noProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#password MysqlProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#private_ip MysqlProvider#private_ip}
  */
  readonly privateIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#proxy MysqlProvider#proxy}
  */
  readonly proxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#tls MysqlProvider#tls}
  */
  readonly tls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#username MysqlProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#alias MysqlProvider#alias}
  */
  readonly alias?: string;
  /**
  * aws_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#aws_config MysqlProvider#aws_config}
  */
  readonly awsConfig?: MysqlProviderAwsConfig[] | cdktf.IResolvable;
  /**
  * azure_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#azure_config MysqlProvider#azure_config}
  */
  readonly azureConfig?: MysqlProviderAzureConfig[] | cdktf.IResolvable;
  /**
  * custom_tls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#custom_tls MysqlProvider#custom_tls}
  */
  readonly customTls?: MysqlProviderCustomTls[] | cdktf.IResolvable;
}
export interface MysqlProviderAwsConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#access_key MysqlProvider#access_key}
  */
  readonly accessKey?: string;
  /**
  * Enable AWS RDS IAM authentication. When enabled, password is ignored and auth token is generated automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#aws_rds_iam_auth MysqlProvider#aws_rds_iam_auth}
  */
  readonly awsRdsIamAuth?: boolean | cdktf.IResolvable;
  /**
  * ARN of the RDS cluster for Data API access. Required when use_rds_data_api is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#cluster_arn MysqlProvider#cluster_arn}
  */
  readonly clusterArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#profile MysqlProvider#profile}
  */
  readonly profile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#region MysqlProvider#region}
  */
  readonly region?: string;
  /**
  * ARN of the IAM role to assume for AWS RDS IAM authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#role_arn MysqlProvider#role_arn}
  */
  readonly roleArn?: string;
  /**
  * ARN of the Secrets Manager secret containing database credentials. Required when use_rds_data_api is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#secret_arn MysqlProvider#secret_arn}
  */
  readonly secretArn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#secret_key MysqlProvider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Enable RDS Aurora Data API transport. When enabled, cluster_arn and secret_arn are required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#use_rds_data_api MysqlProvider#use_rds_data_api}
  */
  readonly useRdsDataApi?: boolean | cdktf.IResolvable;
}

export function mysqlProviderAwsConfigToTerraform(struct?: MysqlProviderAwsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    aws_rds_iam_auth: cdktf.booleanToTerraform(struct!.awsRdsIamAuth),
    cluster_arn: cdktf.stringToTerraform(struct!.clusterArn),
    profile: cdktf.stringToTerraform(struct!.profile),
    region: cdktf.stringToTerraform(struct!.region),
    role_arn: cdktf.stringToTerraform(struct!.roleArn),
    secret_arn: cdktf.stringToTerraform(struct!.secretArn),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    use_rds_data_api: cdktf.booleanToTerraform(struct!.useRdsDataApi),
  }
}


export function mysqlProviderAwsConfigToHclTerraform(struct?: MysqlProviderAwsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_rds_iam_auth: {
      value: cdktf.booleanToHclTerraform(struct!.awsRdsIamAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cluster_arn: {
      value: cdktf.stringToHclTerraform(struct!.clusterArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
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
    role_arn: {
      value: cdktf.stringToHclTerraform(struct!.roleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_arn: {
      value: cdktf.stringToHclTerraform(struct!.secretArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_rds_data_api: {
      value: cdktf.booleanToHclTerraform(struct!.useRdsDataApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface MysqlProviderAzureConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#client_id MysqlProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#client_secret MysqlProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#environment MysqlProvider#environment}
  */
  readonly environment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#tenant_id MysqlProvider#tenant_id}
  */
  readonly tenantId?: string;
}

export function mysqlProviderAzureConfigToTerraform(struct?: MysqlProviderAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    environment: cdktf.stringToTerraform(struct!.environment),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
  }
}


export function mysqlProviderAzureConfigToHclTerraform(struct?: MysqlProviderAzureConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface MysqlProviderCustomTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#ca_cert MysqlProvider#ca_cert}
  */
  readonly caCert: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#client_cert MysqlProvider#client_cert}
  */
  readonly clientCert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#client_key MysqlProvider#client_key}
  */
  readonly clientKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#config_key MysqlProvider#config_key}
  */
  readonly configKey?: string;
}

export function mysqlProviderCustomTlsToTerraform(struct?: MysqlProviderCustomTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: cdktf.stringToTerraform(struct!.caCert),
    client_cert: cdktf.stringToTerraform(struct!.clientCert),
    client_key: cdktf.stringToTerraform(struct!.clientKey),
    config_key: cdktf.stringToTerraform(struct!.configKey),
  }
}


export function mysqlProviderCustomTlsToHclTerraform(struct?: MysqlProviderCustomTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: cdktf.stringToHclTerraform(struct!.caCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert: {
      value: cdktf.stringToHclTerraform(struct!.clientCert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_key: {
      value: cdktf.stringToHclTerraform(struct!.clientKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_key: {
      value: cdktf.stringToHclTerraform(struct!.configKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs mysql}
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
  * @param importFromId The id of the existing MysqlProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MysqlProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/petoju/mysql/3.0.88/docs mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MysqlProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mysql',
      terraformGeneratorMetadata: {
        providerName: 'mysql',
        providerVersion: '3.0.88',
        providerVersionConstraint: '3.0.88'
      },
      terraformProviderSource: 'petoju/mysql'
    });
    this._authenticationPlugin = config.authenticationPlugin;
    this._connParams = config.connParams;
    this._connectRetryTimeoutSec = config.connectRetryTimeoutSec;
    this._endpoint = config.endpoint;
    this._iamDatabaseAuthentication = config.iamDatabaseAuthentication;
    this._maxConnLifetimeSec = config.maxConnLifetimeSec;
    this._maxOpenConns = config.maxOpenConns;
    this._noProxy = config.noProxy;
    this._password = config.password;
    this._privateIp = config.privateIp;
    this._proxy = config.proxy;
    this._tls = config.tls;
    this._username = config.username;
    this._alias = config.alias;
    this._awsConfig = config.awsConfig;
    this._azureConfig = config.azureConfig;
    this._customTls = config.customTls;
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

  // conn_params - computed: false, optional: true, required: false
  private _connParams?: { [key: string]: string }; 
  public get connParams() {
    return this._connParams;
  }
  public set connParams(value: { [key: string]: string } | undefined) {
    this._connParams = value;
  }
  public resetConnParams() {
    this._connParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connParamsInput() {
    return this._connParams;
  }

  // connect_retry_timeout_sec - computed: false, optional: true, required: false
  private _connectRetryTimeoutSec?: number; 
  public get connectRetryTimeoutSec() {
    return this._connectRetryTimeoutSec;
  }
  public set connectRetryTimeoutSec(value: number | undefined) {
    this._connectRetryTimeoutSec = value;
  }
  public resetConnectRetryTimeoutSec() {
    this._connectRetryTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectRetryTimeoutSecInput() {
    return this._connectRetryTimeoutSec;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // iam_database_authentication - computed: false, optional: true, required: false
  private _iamDatabaseAuthentication?: boolean | cdktf.IResolvable; 
  public get iamDatabaseAuthentication() {
    return this._iamDatabaseAuthentication;
  }
  public set iamDatabaseAuthentication(value: boolean | cdktf.IResolvable | undefined) {
    this._iamDatabaseAuthentication = value;
  }
  public resetIamDatabaseAuthentication() {
    this._iamDatabaseAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamDatabaseAuthenticationInput() {
    return this._iamDatabaseAuthentication;
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

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: string; 
  public get noProxy() {
    return this._noProxy;
  }
  public set noProxy(value: string | undefined) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
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

  // private_ip - computed: false, optional: true, required: false
  private _privateIp?: boolean | cdktf.IResolvable; 
  public get privateIp() {
    return this._privateIp;
  }
  public set privateIp(value: boolean | cdktf.IResolvable | undefined) {
    this._privateIp = value;
  }
  public resetPrivateIp() {
    this._privateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpInput() {
    return this._privateIp;
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

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
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

  // aws_config - computed: false, optional: true, required: false
  private _awsConfig?: MysqlProviderAwsConfig[] | cdktf.IResolvable; 
  public get awsConfig() {
    return this._awsConfig;
  }
  public set awsConfig(value: MysqlProviderAwsConfig[] | cdktf.IResolvable | undefined) {
    this._awsConfig = value;
  }
  public resetAwsConfig() {
    this._awsConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsConfigInput() {
    return this._awsConfig;
  }

  // azure_config - computed: false, optional: true, required: false
  private _azureConfig?: MysqlProviderAzureConfig[] | cdktf.IResolvable; 
  public get azureConfig() {
    return this._azureConfig;
  }
  public set azureConfig(value: MysqlProviderAzureConfig[] | cdktf.IResolvable | undefined) {
    this._azureConfig = value;
  }
  public resetAzureConfig() {
    this._azureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigInput() {
    return this._azureConfig;
  }

  // custom_tls - computed: false, optional: true, required: false
  private _customTls?: MysqlProviderCustomTls[] | cdktf.IResolvable; 
  public get customTls() {
    return this._customTls;
  }
  public set customTls(value: MysqlProviderCustomTls[] | cdktf.IResolvable | undefined) {
    this._customTls = value;
  }
  public resetCustomTls() {
    this._customTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTlsInput() {
    return this._customTls;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authentication_plugin: cdktf.stringToTerraform(this._authenticationPlugin),
      conn_params: cdktf.hashMapper(cdktf.stringToTerraform)(this._connParams),
      connect_retry_timeout_sec: cdktf.numberToTerraform(this._connectRetryTimeoutSec),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      iam_database_authentication: cdktf.booleanToTerraform(this._iamDatabaseAuthentication),
      max_conn_lifetime_sec: cdktf.numberToTerraform(this._maxConnLifetimeSec),
      max_open_conns: cdktf.numberToTerraform(this._maxOpenConns),
      no_proxy: cdktf.stringToTerraform(this._noProxy),
      password: cdktf.stringToTerraform(this._password),
      private_ip: cdktf.booleanToTerraform(this._privateIp),
      proxy: cdktf.stringToTerraform(this._proxy),
      tls: cdktf.stringToTerraform(this._tls),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
      aws_config: cdktf.listMapper(mysqlProviderAwsConfigToTerraform, true)(this._awsConfig),
      azure_config: cdktf.listMapper(mysqlProviderAzureConfigToTerraform, true)(this._azureConfig),
      custom_tls: cdktf.listMapper(mysqlProviderCustomTlsToTerraform, true)(this._customTls),
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
      conn_params: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._connParams),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      connect_retry_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._connectRetryTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iam_database_authentication: {
        value: cdktf.booleanToHclTerraform(this._iamDatabaseAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      no_proxy: {
        value: cdktf.stringToHclTerraform(this._noProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_ip: {
        value: cdktf.booleanToHclTerraform(this._privateIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      aws_config: {
        value: cdktf.listMapperHcl(mysqlProviderAwsConfigToHclTerraform, true)(this._awsConfig),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlProviderAwsConfigList",
      },
      azure_config: {
        value: cdktf.listMapperHcl(mysqlProviderAzureConfigToHclTerraform, true)(this._azureConfig),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlProviderAzureConfigList",
      },
      custom_tls: {
        value: cdktf.listMapperHcl(mysqlProviderCustomTlsToHclTerraform, true)(this._customTls),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlProviderCustomTlsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
