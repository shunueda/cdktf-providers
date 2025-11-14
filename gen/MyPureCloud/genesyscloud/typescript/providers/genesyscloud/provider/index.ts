// https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GenesyscloudProviderConfig {
  /**
  * A string that the OAuth client uses to make requests. Can be set with the `GENESYSCLOUD_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#access_token GenesyscloudProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * AWS region where org exists. e.g. us-east-1. Can be set with the `GENESYSCLOUD_REGION` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#aws_region GenesyscloudProvider#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * If true, stack traces will be logged to a file instead of crashing the provider, whenever possible.
  * If the stack trace occurs within the create context and before the ID is set in the schema object, then the command will fail with the message
  * "Root object was present, but now absent." Can be set with the GENESYSCLOUD_LOG_STACK_TRACES environment variable. **WARNING**: This is a debugging feature that may cause your Terraform state to become out of sync with the API.
  * If you encounter any stack traces, please report them so we can address the underlying issues.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#log_stack_traces GenesyscloudProvider#log_stack_traces}
  */
  readonly logStackTraces?: boolean | cdktf.IResolvable;
  /**
  * Specifies the file path for the stack trace logs. Can be set with the `GENESYSCLOUD_LOG_STACK_TRACES_FILE_PATH` environment variable. Default value is genesyscloud_stack_traces.log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#log_stack_traces_file_path GenesyscloudProvider#log_stack_traces_file_path}
  */
  readonly logStackTracesFilePath?: string;
  /**
  * OAuthClient ID found on the OAuth page of Admin UI. Can be set with the `GENESYSCLOUD_OAUTHCLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#oauthclient_id GenesyscloudProvider#oauthclient_id}
  */
  readonly oauthclientId?: string;
  /**
  * OAuthClient secret found on the OAuth page of Admin UI. Can be set with the `GENESYSCLOUD_OAUTHCLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#oauthclient_secret GenesyscloudProvider#oauthclient_secret}
  */
  readonly oauthclientSecret?: string;
  /**
  * Enables debug tracing in the Genesys Cloud SDK client pool. Output will be written to standard log output. Can be set with the `GENESYSCLOUD_SDK_CLIENT_POOL_DEBUG` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#sdk_client_pool_debug GenesyscloudProvider#sdk_client_pool_debug}
  */
  readonly sdkClientPoolDebug?: boolean | cdktf.IResolvable;
  /**
  * Enables debug tracing in the Genesys Cloud SDK. Output will be written to the local file 'sdk_debug.log'. Can be set with the `GENESYSCLOUD_SDK_DEBUG` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#sdk_debug GenesyscloudProvider#sdk_debug}
  */
  readonly sdkDebug?: boolean | cdktf.IResolvable;
  /**
  * Specifies the file path for the log file. Can be set with the `GENESYSCLOUD_SDK_DEBUG_FILE_PATH` environment variable. Default value is sdk_debug.log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#sdk_debug_file_path GenesyscloudProvider#sdk_debug_file_path}
  */
  readonly sdkDebugFilePath?: string;
  /**
  * Specifies the data format of the 'sdk_debug.log'. Only applicable if sdk_debug is true. Can be set with the `GENESYSCLOUD_SDK_DEBUG_FORMAT` environment variable. Default value is Text.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#sdk_debug_format GenesyscloudProvider#sdk_debug_format}
  */
  readonly sdkDebugFormat?: string;
  /**
  * Timeout for acquiring a token from the pool. Can be set with the `GENESYSCLOUD_TOKEN_ACQUIRE_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#token_acquire_timeout GenesyscloudProvider#token_acquire_timeout}
  */
  readonly tokenAcquireTimeout?: string;
  /**
  * Timeout for initializing the token pool. Can be set with the `GENESYSCLOUD_TOKEN_INIT_TIMEOUT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#token_init_timeout GenesyscloudProvider#token_init_timeout}
  */
  readonly tokenInitTimeout?: string;
  /**
  * Max number of OAuth tokens in the token pool. Can be set with the `GENESYSCLOUD_TOKEN_POOL_SIZE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#token_pool_size GenesyscloudProvider#token_pool_size}
  */
  readonly tokenPoolSize?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#alias GenesyscloudProvider#alias}
  */
  readonly alias?: string;
  /**
  * gateway block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#gateway GenesyscloudProvider#gateway}
  */
  readonly gateway?: GenesyscloudProviderGateway[] | cdktf.IResolvable;
  /**
  * proxy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#proxy GenesyscloudProvider#proxy}
  */
  readonly proxy?: GenesyscloudProviderProxy;
}
export interface GenesyscloudProviderGatewayAuth {
  /**
  * Password for the Auth can be set with the `GENESYSCLOUD_PROXY_AUTH_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#password GenesyscloudProvider#password}
  */
  readonly password?: string;
  /**
  * UserName for the Auth can be set with the `GENESYSCLOUD_PROXY_AUTH_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#username GenesyscloudProvider#username}
  */
  readonly username?: string;
}

export function genesyscloudProviderGatewayAuthToTerraform(struct?: GenesyscloudProviderGatewayAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function genesyscloudProviderGatewayAuthToHclTerraform(struct?: GenesyscloudProviderGatewayAuth): any {
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

export interface GenesyscloudProviderGatewayPathParams {
  /**
  * Path name for Gateway Path Params can be set with the `GENESYSCLOUD_GATEWAY_PATH_NAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#path_name GenesyscloudProvider#path_name}
  */
  readonly pathName: string;
  /**
  * Path value for Gateway Path Params can be set with the `GENESYSCLOUD_GATEWAY_PATH_VALUE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#path_value GenesyscloudProvider#path_value}
  */
  readonly pathValue: string;
}

export function genesyscloudProviderGatewayPathParamsToTerraform(struct?: GenesyscloudProviderGatewayPathParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path_name: cdktf.stringToTerraform(struct!.pathName),
    path_value: cdktf.stringToTerraform(struct!.pathValue),
  }
}


export function genesyscloudProviderGatewayPathParamsToHclTerraform(struct?: GenesyscloudProviderGatewayPathParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path_name: {
      value: cdktf.stringToHclTerraform(struct!.pathName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path_value: {
      value: cdktf.stringToHclTerraform(struct!.pathValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface GenesyscloudProviderGateway {
  /**
  * Host for the gateway can be set with the `GENESYSCLOUD_GATEWAY_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#host GenesyscloudProvider#host}
  */
  readonly host?: string;
  /**
  * Port for the gateway can be set with the `GENESYSCLOUD_GATEWAY_PORT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#port GenesyscloudProvider#port}
  */
  readonly port?: string;
  /**
  * Protocol for the gateway can be set with the `GENESYSCLOUD_GATEWAY_PROTOCOL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#protocol GenesyscloudProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#auth GenesyscloudProvider#auth}
  */
  readonly auth?: GenesyscloudProviderGatewayAuth;
  /**
  * path_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#path_params GenesyscloudProvider#path_params}
  */
  readonly pathParams?: GenesyscloudProviderGatewayPathParams[] | cdktf.IResolvable;
}

export function genesyscloudProviderGatewayToTerraform(struct?: GenesyscloudProviderGateway | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    auth: genesyscloudProviderGatewayAuthToTerraform(struct!.auth),
    path_params: cdktf.listMapper(genesyscloudProviderGatewayPathParamsToTerraform, true)(struct!.pathParams),
  }
}


export function genesyscloudProviderGatewayToHclTerraform(struct?: GenesyscloudProviderGateway | cdktf.IResolvable): any {
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
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: genesyscloudProviderGatewayAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "set",
      storageClassType: "GenesyscloudProviderGatewayAuthList",
    },
    path_params: {
      value: cdktf.listMapperHcl(genesyscloudProviderGatewayPathParamsToHclTerraform, true)(struct!.pathParams),
      isBlock: true,
      type: "set",
      storageClassType: "GenesyscloudProviderGatewayPathParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export interface GenesyscloudProviderProxyAuth {
  /**
  * Password for the Auth can be set with the `GENESYSCLOUD_PROXY_AUTH_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#password GenesyscloudProvider#password}
  */
  readonly password?: string;
  /**
  * UserName for the Auth can be set with the `GENESYSCLOUD_PROXY_AUTH_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#username GenesyscloudProvider#username}
  */
  readonly username?: string;
}

export function genesyscloudProviderProxyAuthToTerraform(struct?: GenesyscloudProviderProxyAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function genesyscloudProviderProxyAuthToHclTerraform(struct?: GenesyscloudProviderProxyAuth): any {
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

export interface GenesyscloudProviderProxy {
  /**
  * Host for the proxy can be set with the `GENESYSCLOUD_PROXY_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#host GenesyscloudProvider#host}
  */
  readonly host?: string;
  /**
  * Port for the proxy can be set with the `GENESYSCLOUD_PROXY_PORT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#port GenesyscloudProvider#port}
  */
  readonly port?: string;
  /**
  * Protocol for the proxy can be set with the `GENESYSCLOUD_PROXY_PROTOCOL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#protocol GenesyscloudProvider#protocol}
  */
  readonly protocol?: string;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#auth GenesyscloudProvider#auth}
  */
  readonly auth?: GenesyscloudProviderProxyAuth;
}

export function genesyscloudProviderProxyToTerraform(struct?: GenesyscloudProviderProxy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    auth: genesyscloudProviderProxyAuthToTerraform(struct!.auth),
  }
}


export function genesyscloudProviderProxyToHclTerraform(struct?: GenesyscloudProviderProxy): any {
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
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth: {
      value: genesyscloudProviderProxyAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "set",
      storageClassType: "GenesyscloudProviderProxyAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}


/**
* Represents a {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs genesyscloud}
*/
export class GenesyscloudProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "genesyscloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GenesyscloudProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GenesyscloudProvider to import
  * @param importFromId The id of the existing GenesyscloudProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GenesyscloudProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "genesyscloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mypurecloud/genesyscloud/1.71.1/docs genesyscloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GenesyscloudProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GenesyscloudProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'genesyscloud',
      terraformGeneratorMetadata: {
        providerName: 'genesyscloud',
        providerVersion: '1.71.1',
        providerVersionConstraint: '1.71.1'
      },
      terraformProviderSource: 'MyPureCloud/genesyscloud'
    });
    this._accessToken = config.accessToken;
    this._awsRegion = config.awsRegion;
    this._logStackTraces = config.logStackTraces;
    this._logStackTracesFilePath = config.logStackTracesFilePath;
    this._oauthclientId = config.oauthclientId;
    this._oauthclientSecret = config.oauthclientSecret;
    this._sdkClientPoolDebug = config.sdkClientPoolDebug;
    this._sdkDebug = config.sdkDebug;
    this._sdkDebugFilePath = config.sdkDebugFilePath;
    this._sdkDebugFormat = config.sdkDebugFormat;
    this._tokenAcquireTimeout = config.tokenAcquireTimeout;
    this._tokenInitTimeout = config.tokenInitTimeout;
    this._tokenPoolSize = config.tokenPoolSize;
    this._alias = config.alias;
    this._gateway = config.gateway;
    this._proxy = config.proxy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this._awsRegion;
  }
  public set awsRegion(value: string | undefined) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // log_stack_traces - computed: false, optional: true, required: false
  private _logStackTraces?: boolean | cdktf.IResolvable; 
  public get logStackTraces() {
    return this._logStackTraces;
  }
  public set logStackTraces(value: boolean | cdktf.IResolvable | undefined) {
    this._logStackTraces = value;
  }
  public resetLogStackTraces() {
    this._logStackTraces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStackTracesInput() {
    return this._logStackTraces;
  }

  // log_stack_traces_file_path - computed: false, optional: true, required: false
  private _logStackTracesFilePath?: string; 
  public get logStackTracesFilePath() {
    return this._logStackTracesFilePath;
  }
  public set logStackTracesFilePath(value: string | undefined) {
    this._logStackTracesFilePath = value;
  }
  public resetLogStackTracesFilePath() {
    this._logStackTracesFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStackTracesFilePathInput() {
    return this._logStackTracesFilePath;
  }

  // oauthclient_id - computed: false, optional: true, required: false
  private _oauthclientId?: string; 
  public get oauthclientId() {
    return this._oauthclientId;
  }
  public set oauthclientId(value: string | undefined) {
    this._oauthclientId = value;
  }
  public resetOauthclientId() {
    this._oauthclientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthclientIdInput() {
    return this._oauthclientId;
  }

  // oauthclient_secret - computed: false, optional: true, required: false
  private _oauthclientSecret?: string; 
  public get oauthclientSecret() {
    return this._oauthclientSecret;
  }
  public set oauthclientSecret(value: string | undefined) {
    this._oauthclientSecret = value;
  }
  public resetOauthclientSecret() {
    this._oauthclientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthclientSecretInput() {
    return this._oauthclientSecret;
  }

  // sdk_client_pool_debug - computed: false, optional: true, required: false
  private _sdkClientPoolDebug?: boolean | cdktf.IResolvable; 
  public get sdkClientPoolDebug() {
    return this._sdkClientPoolDebug;
  }
  public set sdkClientPoolDebug(value: boolean | cdktf.IResolvable | undefined) {
    this._sdkClientPoolDebug = value;
  }
  public resetSdkClientPoolDebug() {
    this._sdkClientPoolDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkClientPoolDebugInput() {
    return this._sdkClientPoolDebug;
  }

  // sdk_debug - computed: false, optional: true, required: false
  private _sdkDebug?: boolean | cdktf.IResolvable; 
  public get sdkDebug() {
    return this._sdkDebug;
  }
  public set sdkDebug(value: boolean | cdktf.IResolvable | undefined) {
    this._sdkDebug = value;
  }
  public resetSdkDebug() {
    this._sdkDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkDebugInput() {
    return this._sdkDebug;
  }

  // sdk_debug_file_path - computed: false, optional: true, required: false
  private _sdkDebugFilePath?: string; 
  public get sdkDebugFilePath() {
    return this._sdkDebugFilePath;
  }
  public set sdkDebugFilePath(value: string | undefined) {
    this._sdkDebugFilePath = value;
  }
  public resetSdkDebugFilePath() {
    this._sdkDebugFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkDebugFilePathInput() {
    return this._sdkDebugFilePath;
  }

  // sdk_debug_format - computed: false, optional: true, required: false
  private _sdkDebugFormat?: string; 
  public get sdkDebugFormat() {
    return this._sdkDebugFormat;
  }
  public set sdkDebugFormat(value: string | undefined) {
    this._sdkDebugFormat = value;
  }
  public resetSdkDebugFormat() {
    this._sdkDebugFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdkDebugFormatInput() {
    return this._sdkDebugFormat;
  }

  // token_acquire_timeout - computed: false, optional: true, required: false
  private _tokenAcquireTimeout?: string; 
  public get tokenAcquireTimeout() {
    return this._tokenAcquireTimeout;
  }
  public set tokenAcquireTimeout(value: string | undefined) {
    this._tokenAcquireTimeout = value;
  }
  public resetTokenAcquireTimeout() {
    this._tokenAcquireTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAcquireTimeoutInput() {
    return this._tokenAcquireTimeout;
  }

  // token_init_timeout - computed: false, optional: true, required: false
  private _tokenInitTimeout?: string; 
  public get tokenInitTimeout() {
    return this._tokenInitTimeout;
  }
  public set tokenInitTimeout(value: string | undefined) {
    this._tokenInitTimeout = value;
  }
  public resetTokenInitTimeout() {
    this._tokenInitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInitTimeoutInput() {
    return this._tokenInitTimeout;
  }

  // token_pool_size - computed: false, optional: true, required: false
  private _tokenPoolSize?: number; 
  public get tokenPoolSize() {
    return this._tokenPoolSize;
  }
  public set tokenPoolSize(value: number | undefined) {
    this._tokenPoolSize = value;
  }
  public resetTokenPoolSize() {
    this._tokenPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenPoolSizeInput() {
    return this._tokenPoolSize;
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

  // gateway - computed: false, optional: true, required: false
  private _gateway?: GenesyscloudProviderGateway[] | cdktf.IResolvable; 
  public get gateway() {
    return this._gateway;
  }
  public set gateway(value: GenesyscloudProviderGateway[] | cdktf.IResolvable | undefined) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // proxy - computed: false, optional: true, required: false
  private _proxy?: GenesyscloudProviderProxy; 
  public get proxy() {
    return this._proxy;
  }
  public set proxy(value: GenesyscloudProviderProxy | undefined) {
    this._proxy = value;
  }
  public resetProxy() {
    this._proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyInput() {
    return this._proxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token: cdktf.stringToTerraform(this._accessToken),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      log_stack_traces: cdktf.booleanToTerraform(this._logStackTraces),
      log_stack_traces_file_path: cdktf.stringToTerraform(this._logStackTracesFilePath),
      oauthclient_id: cdktf.stringToTerraform(this._oauthclientId),
      oauthclient_secret: cdktf.stringToTerraform(this._oauthclientSecret),
      sdk_client_pool_debug: cdktf.booleanToTerraform(this._sdkClientPoolDebug),
      sdk_debug: cdktf.booleanToTerraform(this._sdkDebug),
      sdk_debug_file_path: cdktf.stringToTerraform(this._sdkDebugFilePath),
      sdk_debug_format: cdktf.stringToTerraform(this._sdkDebugFormat),
      token_acquire_timeout: cdktf.stringToTerraform(this._tokenAcquireTimeout),
      token_init_timeout: cdktf.stringToTerraform(this._tokenInitTimeout),
      token_pool_size: cdktf.numberToTerraform(this._tokenPoolSize),
      alias: cdktf.stringToTerraform(this._alias),
      gateway: cdktf.listMapper(genesyscloudProviderGatewayToTerraform, true)(this._gateway),
      proxy: genesyscloudProviderProxyToTerraform(this._proxy),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_stack_traces: {
        value: cdktf.booleanToHclTerraform(this._logStackTraces),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_stack_traces_file_path: {
        value: cdktf.stringToHclTerraform(this._logStackTracesFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauthclient_id: {
        value: cdktf.stringToHclTerraform(this._oauthclientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauthclient_secret: {
        value: cdktf.stringToHclTerraform(this._oauthclientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdk_client_pool_debug: {
        value: cdktf.booleanToHclTerraform(this._sdkClientPoolDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sdk_debug: {
        value: cdktf.booleanToHclTerraform(this._sdkDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sdk_debug_file_path: {
        value: cdktf.stringToHclTerraform(this._sdkDebugFilePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdk_debug_format: {
        value: cdktf.stringToHclTerraform(this._sdkDebugFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_acquire_timeout: {
        value: cdktf.stringToHclTerraform(this._tokenAcquireTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_init_timeout: {
        value: cdktf.stringToHclTerraform(this._tokenInitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_pool_size: {
        value: cdktf.numberToHclTerraform(this._tokenPoolSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway: {
        value: cdktf.listMapperHcl(genesyscloudProviderGatewayToHclTerraform, true)(this._gateway),
        isBlock: true,
        type: "set",
        storageClassType: "GenesyscloudProviderGatewayList",
      },
      proxy: {
        value: genesyscloudProviderProxyToHclTerraform(this._proxy),
        isBlock: true,
        type: "set",
        storageClassType: "GenesyscloudProviderProxyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
