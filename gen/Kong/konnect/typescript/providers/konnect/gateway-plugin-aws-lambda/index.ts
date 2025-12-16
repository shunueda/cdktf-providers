// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginAwsLambdaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#config GatewayPluginAwsLambda#config}
  */
  readonly config?: GatewayPluginAwsLambdaConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#consumer GatewayPluginAwsLambda#consumer}
  */
  readonly consumer?: GatewayPluginAwsLambdaConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#control_plane_id GatewayPluginAwsLambda#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#created_at GatewayPluginAwsLambda#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#enabled GatewayPluginAwsLambda#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#id GatewayPluginAwsLambda#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#instance_name GatewayPluginAwsLambda#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#ordering GatewayPluginAwsLambda#ordering}
  */
  readonly ordering?: GatewayPluginAwsLambdaOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#partials GatewayPluginAwsLambda#partials}
  */
  readonly partials?: GatewayPluginAwsLambdaPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#protocols GatewayPluginAwsLambda#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#route GatewayPluginAwsLambda#route}
  */
  readonly route?: GatewayPluginAwsLambdaRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#service GatewayPluginAwsLambda#service}
  */
  readonly service?: GatewayPluginAwsLambdaService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#tags GatewayPluginAwsLambda#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#updated_at GatewayPluginAwsLambda#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginAwsLambdaConfigA {
  /**
  * The target AWS IAM role ARN used to invoke the Lambda function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#aws_assume_role_arn GatewayPluginAwsLambda#aws_assume_role_arn}
  */
  readonly awsAssumeRoleArn?: string;
  /**
  * Identifier to select the IMDS protocol version to use: `v1` or `v2`. Default: "v1"; must be one of ["v1", "v2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#aws_imds_protocol_version GatewayPluginAwsLambda#aws_imds_protocol_version}
  */
  readonly awsImdsProtocolVersion?: string;
  /**
  * The AWS key credential to be used when invoking the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#aws_key GatewayPluginAwsLambda#aws_key}
  */
  readonly awsKey?: string;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#aws_region GatewayPluginAwsLambda#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * The identifier of the assumed role session. Default: "kong"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#aws_role_session_name GatewayPluginAwsLambda#aws_role_session_name}
  */
  readonly awsRoleSessionName?: string;
  /**
  * The AWS secret credential to be used when invoking the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#aws_secret GatewayPluginAwsLambda#aws_secret}
  */
  readonly awsSecret?: string;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#aws_sts_endpoint_url GatewayPluginAwsLambda#aws_sts_endpoint_url}
  */
  readonly awsStsEndpointUrl?: string;
  /**
  * An optional value that defines whether the plugin should wrap requests into the Amazon API gateway. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#awsgateway_compatible GatewayPluginAwsLambda#awsgateway_compatible}
  */
  readonly awsgatewayCompatible?: boolean | cdktf.IResolvable;
  /**
  * An optional value that defines which version will be used to generate the AWS API Gateway compatible payload. The default will be `1.0`. Default: "1.0"; must be one of ["1.0", "2.0"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#awsgateway_compatible_payload_version GatewayPluginAwsLambda#awsgateway_compatible_payload_version}
  */
  readonly awsgatewayCompatiblePayloadVersion?: string;
  /**
  * An optional value that Base64-encodes the request body. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#base64_encode_body GatewayPluginAwsLambda#base64_encode_body}
  */
  readonly base64EncodeBody?: boolean | cdktf.IResolvable;
  /**
  * Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#disable_https GatewayPluginAwsLambda#disable_https}
  */
  readonly disableHttps?: boolean | cdktf.IResolvable;
  /**
  * An optional value that defines whether Kong should send empty arrays (returned by Lambda function) as `[]` arrays or `{}` objects in JSON responses. The value `legacy` means Kong will send empty arrays as `{}` objects in response. Default: "legacy"; must be one of ["correct", "legacy"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#empty_arrays_mode GatewayPluginAwsLambda#empty_arrays_mode}
  */
  readonly emptyArraysMode?: string;
  /**
  * An optional value that defines whether the request body is sent in the request_body field of the JSON-encoded request. If the body arguments can be parsed, they are sent in the separate request_body_args field of the request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#forward_request_body GatewayPluginAwsLambda#forward_request_body}
  */
  readonly forwardRequestBody?: boolean | cdktf.IResolvable;
  /**
  * An optional value that defines whether the original HTTP request headers are sent as a map in the request_headers field of the JSON-encoded request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#forward_request_headers GatewayPluginAwsLambda#forward_request_headers}
  */
  readonly forwardRequestHeaders?: boolean | cdktf.IResolvable;
  /**
  * An optional value that defines whether the original HTTP request method verb is sent in the request_method field of the JSON-encoded request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#forward_request_method GatewayPluginAwsLambda#forward_request_method}
  */
  readonly forwardRequestMethod?: boolean | cdktf.IResolvable;
  /**
  * An optional value that defines whether the original HTTP request URI is sent in the request_uri field of the JSON-encoded request. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#forward_request_uri GatewayPluginAwsLambda#forward_request_uri}
  */
  readonly forwardRequestUri?: boolean | cdktf.IResolvable;
  /**
  * The AWS Lambda function to invoke. Both function name and function ARN (including partial) are supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#function_name GatewayPluginAwsLambda#function_name}
  */
  readonly functionName?: string;
  /**
  * A string representing a host name, such as example.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#host GatewayPluginAwsLambda#host}
  */
  readonly host?: string;
  /**
  * The InvocationType to use when invoking the function. Available types are RequestResponse, Event, DryRun. Default: "RequestResponse"; must be one of ["DryRun", "Event", "RequestResponse"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#invocation_type GatewayPluginAwsLambda#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * An optional value that defines whether the response format to receive from the Lambda to this format. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#is_proxy_integration GatewayPluginAwsLambda#is_proxy_integration}
  */
  readonly isProxyIntegration?: boolean | cdktf.IResolvable;
  /**
  * An optional value in milliseconds that defines how long an idle connection lives before being closed. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#keepalive GatewayPluginAwsLambda#keepalive}
  */
  readonly keepalive?: number;
  /**
  * The LogType to use when invoking the function. By default, None and Tail are supported. Default: "Tail"; must be one of ["None", "Tail"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#log_type GatewayPluginAwsLambda#log_type}
  */
  readonly logType?: string;
  /**
  * An integer representing a port number between 0 and 65535, inclusive. Default: 443
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#port GatewayPluginAwsLambda#port}
  */
  readonly port?: number;
  /**
  * A string representing a URL, such as https://example.com/path/to/resource?q=search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#proxy_url GatewayPluginAwsLambda#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * The qualifier to use when invoking the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#qualifier GatewayPluginAwsLambda#qualifier}
  */
  readonly qualifier?: string;
  /**
  * An optional value that defines whether Kong should send large bodies that are buffered to disk. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#skip_large_bodies GatewayPluginAwsLambda#skip_large_bodies}
  */
  readonly skipLargeBodies?: boolean | cdktf.IResolvable;
  /**
  * An optional timeout in milliseconds when invoking the function. Default: 60000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#timeout GatewayPluginAwsLambda#timeout}
  */
  readonly timeout?: number;
  /**
  * The response status code to use (instead of the default 200, 202, or 204) in the case of an Unhandled Function Error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#unhandled_status GatewayPluginAwsLambda#unhandled_status}
  */
  readonly unhandledStatus?: number;
}

export function gatewayPluginAwsLambdaConfigAToTerraform(struct?: GatewayPluginAwsLambdaConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_assume_role_arn: cdktf.stringToTerraform(struct!.awsAssumeRoleArn),
    aws_imds_protocol_version: cdktf.stringToTerraform(struct!.awsImdsProtocolVersion),
    aws_key: cdktf.stringToTerraform(struct!.awsKey),
    aws_region: cdktf.stringToTerraform(struct!.awsRegion),
    aws_role_session_name: cdktf.stringToTerraform(struct!.awsRoleSessionName),
    aws_secret: cdktf.stringToTerraform(struct!.awsSecret),
    aws_sts_endpoint_url: cdktf.stringToTerraform(struct!.awsStsEndpointUrl),
    awsgateway_compatible: cdktf.booleanToTerraform(struct!.awsgatewayCompatible),
    awsgateway_compatible_payload_version: cdktf.stringToTerraform(struct!.awsgatewayCompatiblePayloadVersion),
    base64_encode_body: cdktf.booleanToTerraform(struct!.base64EncodeBody),
    disable_https: cdktf.booleanToTerraform(struct!.disableHttps),
    empty_arrays_mode: cdktf.stringToTerraform(struct!.emptyArraysMode),
    forward_request_body: cdktf.booleanToTerraform(struct!.forwardRequestBody),
    forward_request_headers: cdktf.booleanToTerraform(struct!.forwardRequestHeaders),
    forward_request_method: cdktf.booleanToTerraform(struct!.forwardRequestMethod),
    forward_request_uri: cdktf.booleanToTerraform(struct!.forwardRequestUri),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    host: cdktf.stringToTerraform(struct!.host),
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
    is_proxy_integration: cdktf.booleanToTerraform(struct!.isProxyIntegration),
    keepalive: cdktf.numberToTerraform(struct!.keepalive),
    log_type: cdktf.stringToTerraform(struct!.logType),
    port: cdktf.numberToTerraform(struct!.port),
    proxy_url: cdktf.stringToTerraform(struct!.proxyUrl),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    skip_large_bodies: cdktf.booleanToTerraform(struct!.skipLargeBodies),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    unhandled_status: cdktf.numberToTerraform(struct!.unhandledStatus),
  }
}


export function gatewayPluginAwsLambdaConfigAToHclTerraform(struct?: GatewayPluginAwsLambdaConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_assume_role_arn: {
      value: cdktf.stringToHclTerraform(struct!.awsAssumeRoleArn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_imds_protocol_version: {
      value: cdktf.stringToHclTerraform(struct!.awsImdsProtocolVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_key: {
      value: cdktf.stringToHclTerraform(struct!.awsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_region: {
      value: cdktf.stringToHclTerraform(struct!.awsRegion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_role_session_name: {
      value: cdktf.stringToHclTerraform(struct!.awsRoleSessionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_secret: {
      value: cdktf.stringToHclTerraform(struct!.awsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aws_sts_endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.awsStsEndpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    awsgateway_compatible: {
      value: cdktf.booleanToHclTerraform(struct!.awsgatewayCompatible),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    awsgateway_compatible_payload_version: {
      value: cdktf.stringToHclTerraform(struct!.awsgatewayCompatiblePayloadVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    base64_encode_body: {
      value: cdktf.booleanToHclTerraform(struct!.base64EncodeBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_https: {
      value: cdktf.booleanToHclTerraform(struct!.disableHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    empty_arrays_mode: {
      value: cdktf.stringToHclTerraform(struct!.emptyArraysMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forward_request_body: {
      value: cdktf.booleanToHclTerraform(struct!.forwardRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_request_headers: {
      value: cdktf.booleanToHclTerraform(struct!.forwardRequestHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_request_method: {
      value: cdktf.booleanToHclTerraform(struct!.forwardRequestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    forward_request_uri: {
      value: cdktf.booleanToHclTerraform(struct!.forwardRequestUri),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
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
    invocation_type: {
      value: cdktf.stringToHclTerraform(struct!.invocationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_proxy_integration: {
      value: cdktf.booleanToHclTerraform(struct!.isProxyIntegration),
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
    log_type: {
      value: cdktf.stringToHclTerraform(struct!.logType),
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
    proxy_url: {
      value: cdktf.stringToHclTerraform(struct!.proxyUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    qualifier: {
      value: cdktf.stringToHclTerraform(struct!.qualifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_large_bodies: {
      value: cdktf.booleanToHclTerraform(struct!.skipLargeBodies),
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
    unhandled_status: {
      value: cdktf.numberToHclTerraform(struct!.unhandledStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAwsLambdaConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAwsLambdaConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsAssumeRoleArn !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsAssumeRoleArn = this._awsAssumeRoleArn;
    }
    if (this._awsImdsProtocolVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsImdsProtocolVersion = this._awsImdsProtocolVersion;
    }
    if (this._awsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsKey = this._awsKey;
    }
    if (this._awsRegion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRegion = this._awsRegion;
    }
    if (this._awsRoleSessionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsRoleSessionName = this._awsRoleSessionName;
    }
    if (this._awsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsSecret = this._awsSecret;
    }
    if (this._awsStsEndpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsStsEndpointUrl = this._awsStsEndpointUrl;
    }
    if (this._awsgatewayCompatible !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsgatewayCompatible = this._awsgatewayCompatible;
    }
    if (this._awsgatewayCompatiblePayloadVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsgatewayCompatiblePayloadVersion = this._awsgatewayCompatiblePayloadVersion;
    }
    if (this._base64EncodeBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64EncodeBody = this._base64EncodeBody;
    }
    if (this._disableHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableHttps = this._disableHttps;
    }
    if (this._emptyArraysMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyArraysMode = this._emptyArraysMode;
    }
    if (this._forwardRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRequestBody = this._forwardRequestBody;
    }
    if (this._forwardRequestHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRequestHeaders = this._forwardRequestHeaders;
    }
    if (this._forwardRequestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRequestMethod = this._forwardRequestMethod;
    }
    if (this._forwardRequestUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardRequestUri = this._forwardRequestUri;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._isProxyIntegration !== undefined) {
      hasAnyValues = true;
      internalValueResult.isProxyIntegration = this._isProxyIntegration;
    }
    if (this._keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepalive = this._keepalive;
    }
    if (this._logType !== undefined) {
      hasAnyValues = true;
      internalValueResult.logType = this._logType;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._proxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyUrl = this._proxyUrl;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    if (this._skipLargeBodies !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLargeBodies = this._skipLargeBodies;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._unhandledStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhandledStatus = this._unhandledStatus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginAwsLambdaConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsAssumeRoleArn = undefined;
      this._awsImdsProtocolVersion = undefined;
      this._awsKey = undefined;
      this._awsRegion = undefined;
      this._awsRoleSessionName = undefined;
      this._awsSecret = undefined;
      this._awsStsEndpointUrl = undefined;
      this._awsgatewayCompatible = undefined;
      this._awsgatewayCompatiblePayloadVersion = undefined;
      this._base64EncodeBody = undefined;
      this._disableHttps = undefined;
      this._emptyArraysMode = undefined;
      this._forwardRequestBody = undefined;
      this._forwardRequestHeaders = undefined;
      this._forwardRequestMethod = undefined;
      this._forwardRequestUri = undefined;
      this._functionName = undefined;
      this._host = undefined;
      this._invocationType = undefined;
      this._isProxyIntegration = undefined;
      this._keepalive = undefined;
      this._logType = undefined;
      this._port = undefined;
      this._proxyUrl = undefined;
      this._qualifier = undefined;
      this._skipLargeBodies = undefined;
      this._timeout = undefined;
      this._unhandledStatus = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsAssumeRoleArn = value.awsAssumeRoleArn;
      this._awsImdsProtocolVersion = value.awsImdsProtocolVersion;
      this._awsKey = value.awsKey;
      this._awsRegion = value.awsRegion;
      this._awsRoleSessionName = value.awsRoleSessionName;
      this._awsSecret = value.awsSecret;
      this._awsStsEndpointUrl = value.awsStsEndpointUrl;
      this._awsgatewayCompatible = value.awsgatewayCompatible;
      this._awsgatewayCompatiblePayloadVersion = value.awsgatewayCompatiblePayloadVersion;
      this._base64EncodeBody = value.base64EncodeBody;
      this._disableHttps = value.disableHttps;
      this._emptyArraysMode = value.emptyArraysMode;
      this._forwardRequestBody = value.forwardRequestBody;
      this._forwardRequestHeaders = value.forwardRequestHeaders;
      this._forwardRequestMethod = value.forwardRequestMethod;
      this._forwardRequestUri = value.forwardRequestUri;
      this._functionName = value.functionName;
      this._host = value.host;
      this._invocationType = value.invocationType;
      this._isProxyIntegration = value.isProxyIntegration;
      this._keepalive = value.keepalive;
      this._logType = value.logType;
      this._port = value.port;
      this._proxyUrl = value.proxyUrl;
      this._qualifier = value.qualifier;
      this._skipLargeBodies = value.skipLargeBodies;
      this._timeout = value.timeout;
      this._unhandledStatus = value.unhandledStatus;
    }
  }

  // aws_assume_role_arn - computed: true, optional: true, required: false
  private _awsAssumeRoleArn?: string; 
  public get awsAssumeRoleArn() {
    return this.getStringAttribute('aws_assume_role_arn');
  }
  public set awsAssumeRoleArn(value: string) {
    this._awsAssumeRoleArn = value;
  }
  public resetAwsAssumeRoleArn() {
    this._awsAssumeRoleArn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAssumeRoleArnInput() {
    return this._awsAssumeRoleArn;
  }

  // aws_imds_protocol_version - computed: true, optional: true, required: false
  private _awsImdsProtocolVersion?: string; 
  public get awsImdsProtocolVersion() {
    return this.getStringAttribute('aws_imds_protocol_version');
  }
  public set awsImdsProtocolVersion(value: string) {
    this._awsImdsProtocolVersion = value;
  }
  public resetAwsImdsProtocolVersion() {
    this._awsImdsProtocolVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsImdsProtocolVersionInput() {
    return this._awsImdsProtocolVersion;
  }

  // aws_key - computed: true, optional: true, required: false
  private _awsKey?: string; 
  public get awsKey() {
    return this.getStringAttribute('aws_key');
  }
  public set awsKey(value: string) {
    this._awsKey = value;
  }
  public resetAwsKey() {
    this._awsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsKeyInput() {
    return this._awsKey;
  }

  // aws_region - computed: true, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // aws_role_session_name - computed: true, optional: true, required: false
  private _awsRoleSessionName?: string; 
  public get awsRoleSessionName() {
    return this.getStringAttribute('aws_role_session_name');
  }
  public set awsRoleSessionName(value: string) {
    this._awsRoleSessionName = value;
  }
  public resetAwsRoleSessionName() {
    this._awsRoleSessionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRoleSessionNameInput() {
    return this._awsRoleSessionName;
  }

  // aws_secret - computed: true, optional: true, required: false
  private _awsSecret?: string; 
  public get awsSecret() {
    return this.getStringAttribute('aws_secret');
  }
  public set awsSecret(value: string) {
    this._awsSecret = value;
  }
  public resetAwsSecret() {
    this._awsSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretInput() {
    return this._awsSecret;
  }

  // aws_sts_endpoint_url - computed: true, optional: true, required: false
  private _awsStsEndpointUrl?: string; 
  public get awsStsEndpointUrl() {
    return this.getStringAttribute('aws_sts_endpoint_url');
  }
  public set awsStsEndpointUrl(value: string) {
    this._awsStsEndpointUrl = value;
  }
  public resetAwsStsEndpointUrl() {
    this._awsStsEndpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsStsEndpointUrlInput() {
    return this._awsStsEndpointUrl;
  }

  // awsgateway_compatible - computed: true, optional: true, required: false
  private _awsgatewayCompatible?: boolean | cdktf.IResolvable; 
  public get awsgatewayCompatible() {
    return this.getBooleanAttribute('awsgateway_compatible');
  }
  public set awsgatewayCompatible(value: boolean | cdktf.IResolvable) {
    this._awsgatewayCompatible = value;
  }
  public resetAwsgatewayCompatible() {
    this._awsgatewayCompatible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgatewayCompatibleInput() {
    return this._awsgatewayCompatible;
  }

  // awsgateway_compatible_payload_version - computed: true, optional: true, required: false
  private _awsgatewayCompatiblePayloadVersion?: string; 
  public get awsgatewayCompatiblePayloadVersion() {
    return this.getStringAttribute('awsgateway_compatible_payload_version');
  }
  public set awsgatewayCompatiblePayloadVersion(value: string) {
    this._awsgatewayCompatiblePayloadVersion = value;
  }
  public resetAwsgatewayCompatiblePayloadVersion() {
    this._awsgatewayCompatiblePayloadVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsgatewayCompatiblePayloadVersionInput() {
    return this._awsgatewayCompatiblePayloadVersion;
  }

  // base64_encode_body - computed: true, optional: true, required: false
  private _base64EncodeBody?: boolean | cdktf.IResolvable; 
  public get base64EncodeBody() {
    return this.getBooleanAttribute('base64_encode_body');
  }
  public set base64EncodeBody(value: boolean | cdktf.IResolvable) {
    this._base64EncodeBody = value;
  }
  public resetBase64EncodeBody() {
    this._base64EncodeBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodeBodyInput() {
    return this._base64EncodeBody;
  }

  // disable_https - computed: true, optional: true, required: false
  private _disableHttps?: boolean | cdktf.IResolvable; 
  public get disableHttps() {
    return this.getBooleanAttribute('disable_https');
  }
  public set disableHttps(value: boolean | cdktf.IResolvable) {
    this._disableHttps = value;
  }
  public resetDisableHttps() {
    this._disableHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableHttpsInput() {
    return this._disableHttps;
  }

  // empty_arrays_mode - computed: true, optional: true, required: false
  private _emptyArraysMode?: string; 
  public get emptyArraysMode() {
    return this.getStringAttribute('empty_arrays_mode');
  }
  public set emptyArraysMode(value: string) {
    this._emptyArraysMode = value;
  }
  public resetEmptyArraysMode() {
    this._emptyArraysMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyArraysModeInput() {
    return this._emptyArraysMode;
  }

  // forward_request_body - computed: true, optional: true, required: false
  private _forwardRequestBody?: boolean | cdktf.IResolvable; 
  public get forwardRequestBody() {
    return this.getBooleanAttribute('forward_request_body');
  }
  public set forwardRequestBody(value: boolean | cdktf.IResolvable) {
    this._forwardRequestBody = value;
  }
  public resetForwardRequestBody() {
    this._forwardRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRequestBodyInput() {
    return this._forwardRequestBody;
  }

  // forward_request_headers - computed: true, optional: true, required: false
  private _forwardRequestHeaders?: boolean | cdktf.IResolvable; 
  public get forwardRequestHeaders() {
    return this.getBooleanAttribute('forward_request_headers');
  }
  public set forwardRequestHeaders(value: boolean | cdktf.IResolvable) {
    this._forwardRequestHeaders = value;
  }
  public resetForwardRequestHeaders() {
    this._forwardRequestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRequestHeadersInput() {
    return this._forwardRequestHeaders;
  }

  // forward_request_method - computed: true, optional: true, required: false
  private _forwardRequestMethod?: boolean | cdktf.IResolvable; 
  public get forwardRequestMethod() {
    return this.getBooleanAttribute('forward_request_method');
  }
  public set forwardRequestMethod(value: boolean | cdktf.IResolvable) {
    this._forwardRequestMethod = value;
  }
  public resetForwardRequestMethod() {
    this._forwardRequestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRequestMethodInput() {
    return this._forwardRequestMethod;
  }

  // forward_request_uri - computed: true, optional: true, required: false
  private _forwardRequestUri?: boolean | cdktf.IResolvable; 
  public get forwardRequestUri() {
    return this.getBooleanAttribute('forward_request_uri');
  }
  public set forwardRequestUri(value: boolean | cdktf.IResolvable) {
    this._forwardRequestUri = value;
  }
  public resetForwardRequestUri() {
    this._forwardRequestUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardRequestUriInput() {
    return this._forwardRequestUri;
  }

  // function_name - computed: true, optional: true, required: false
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  public resetFunctionName() {
    this._functionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // invocation_type - computed: true, optional: true, required: false
  private _invocationType?: string; 
  public get invocationType() {
    return this.getStringAttribute('invocation_type');
  }
  public set invocationType(value: string) {
    this._invocationType = value;
  }
  public resetInvocationType() {
    this._invocationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationTypeInput() {
    return this._invocationType;
  }

  // is_proxy_integration - computed: true, optional: true, required: false
  private _isProxyIntegration?: boolean | cdktf.IResolvable; 
  public get isProxyIntegration() {
    return this.getBooleanAttribute('is_proxy_integration');
  }
  public set isProxyIntegration(value: boolean | cdktf.IResolvable) {
    this._isProxyIntegration = value;
  }
  public resetIsProxyIntegration() {
    this._isProxyIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isProxyIntegrationInput() {
    return this._isProxyIntegration;
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

  // log_type - computed: true, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
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

  // proxy_url - computed: true, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this.getStringAttribute('proxy_url');
  }
  public set proxyUrl(value: string) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
  }

  // qualifier - computed: true, optional: true, required: false
  private _qualifier?: string; 
  public get qualifier() {
    return this.getStringAttribute('qualifier');
  }
  public set qualifier(value: string) {
    this._qualifier = value;
  }
  public resetQualifier() {
    this._qualifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qualifierInput() {
    return this._qualifier;
  }

  // skip_large_bodies - computed: true, optional: true, required: false
  private _skipLargeBodies?: boolean | cdktf.IResolvable; 
  public get skipLargeBodies() {
    return this.getBooleanAttribute('skip_large_bodies');
  }
  public set skipLargeBodies(value: boolean | cdktf.IResolvable) {
    this._skipLargeBodies = value;
  }
  public resetSkipLargeBodies() {
    this._skipLargeBodies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLargeBodiesInput() {
    return this._skipLargeBodies;
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

  // unhandled_status - computed: true, optional: true, required: false
  private _unhandledStatus?: number; 
  public get unhandledStatus() {
    return this.getNumberAttribute('unhandled_status');
  }
  public set unhandledStatus(value: number) {
    this._unhandledStatus = value;
  }
  public resetUnhandledStatus() {
    this._unhandledStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhandledStatusInput() {
    return this._unhandledStatus;
  }
}
export interface GatewayPluginAwsLambdaConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#id GatewayPluginAwsLambda#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAwsLambdaConsumerToTerraform(struct?: GatewayPluginAwsLambdaConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAwsLambdaConsumerToHclTerraform(struct?: GatewayPluginAwsLambdaConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginAwsLambdaConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAwsLambdaConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAwsLambdaConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAwsLambdaOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#access GatewayPluginAwsLambda#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAwsLambdaOrderingAfterToTerraform(struct?: GatewayPluginAwsLambdaOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAwsLambdaOrderingAfterToHclTerraform(struct?: GatewayPluginAwsLambdaOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginAwsLambdaOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAwsLambdaOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAwsLambdaOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAwsLambdaOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#access GatewayPluginAwsLambda#access}
  */
  readonly access?: string[];
}

export function gatewayPluginAwsLambdaOrderingBeforeToTerraform(struct?: GatewayPluginAwsLambdaOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginAwsLambdaOrderingBeforeToHclTerraform(struct?: GatewayPluginAwsLambdaOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginAwsLambdaOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAwsLambdaOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAwsLambdaOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAwsLambdaOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#after GatewayPluginAwsLambda#after}
  */
  readonly after?: GatewayPluginAwsLambdaOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#before GatewayPluginAwsLambda#before}
  */
  readonly before?: GatewayPluginAwsLambdaOrderingBefore;
}

export function gatewayPluginAwsLambdaOrderingToTerraform(struct?: GatewayPluginAwsLambdaOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginAwsLambdaOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginAwsLambdaOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginAwsLambdaOrderingToHclTerraform(struct?: GatewayPluginAwsLambdaOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginAwsLambdaOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAwsLambdaOrderingAfter",
    },
    before: {
      value: gatewayPluginAwsLambdaOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginAwsLambdaOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginAwsLambdaOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAwsLambdaOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAwsLambdaOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginAwsLambdaOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginAwsLambdaOrderingAfter) {
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
  private _before = new GatewayPluginAwsLambdaOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginAwsLambdaOrderingBefore) {
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
export interface GatewayPluginAwsLambdaPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#id GatewayPluginAwsLambda#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#name GatewayPluginAwsLambda#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#path GatewayPluginAwsLambda#path}
  */
  readonly path?: string;
}

export function gatewayPluginAwsLambdaPartialsToTerraform(struct?: GatewayPluginAwsLambdaPartials | cdktf.IResolvable): any {
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


export function gatewayPluginAwsLambdaPartialsToHclTerraform(struct?: GatewayPluginAwsLambdaPartials | cdktf.IResolvable): any {
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

export class GatewayPluginAwsLambdaPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginAwsLambdaPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAwsLambdaPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginAwsLambdaPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginAwsLambdaPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginAwsLambdaPartialsOutputReference {
    return new GatewayPluginAwsLambdaPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginAwsLambdaRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#id GatewayPluginAwsLambda#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAwsLambdaRouteToTerraform(struct?: GatewayPluginAwsLambdaRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAwsLambdaRouteToHclTerraform(struct?: GatewayPluginAwsLambdaRoute | cdktf.IResolvable): any {
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

export class GatewayPluginAwsLambdaRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAwsLambdaRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAwsLambdaRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginAwsLambdaService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#id GatewayPluginAwsLambda#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginAwsLambdaServiceToTerraform(struct?: GatewayPluginAwsLambdaService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginAwsLambdaServiceToHclTerraform(struct?: GatewayPluginAwsLambdaService | cdktf.IResolvable): any {
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

export class GatewayPluginAwsLambdaServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginAwsLambdaService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginAwsLambdaService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda konnect_gateway_plugin_aws_lambda}
*/
export class GatewayPluginAwsLambda extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_aws_lambda";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginAwsLambda resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginAwsLambda to import
  * @param importFromId The id of the existing GatewayPluginAwsLambda that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginAwsLambda to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_aws_lambda", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_aws_lambda konnect_gateway_plugin_aws_lambda} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginAwsLambdaConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginAwsLambdaConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_aws_lambda',
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

  // config - computed: true, optional: true, required: false
  private _config = new GatewayPluginAwsLambdaConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginAwsLambdaConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginAwsLambdaConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginAwsLambdaConsumer) {
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
  private _ordering = new GatewayPluginAwsLambdaOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginAwsLambdaOrdering) {
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
  private _partials = new GatewayPluginAwsLambdaPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginAwsLambdaPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginAwsLambdaRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginAwsLambdaRoute) {
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
  private _service = new GatewayPluginAwsLambdaServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginAwsLambdaService) {
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
      config: gatewayPluginAwsLambdaConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginAwsLambdaConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginAwsLambdaOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginAwsLambdaPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginAwsLambdaRouteToTerraform(this._route.internalValue),
      service: gatewayPluginAwsLambdaServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginAwsLambdaConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAwsLambdaConfigA",
      },
      consumer: {
        value: gatewayPluginAwsLambdaConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAwsLambdaConsumer",
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
        value: gatewayPluginAwsLambdaOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAwsLambdaOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginAwsLambdaPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginAwsLambdaPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginAwsLambdaRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAwsLambdaRoute",
      },
      service: {
        value: gatewayPluginAwsLambdaServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginAwsLambdaService",
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
