// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayPluginOasValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#config GatewayPluginOasValidation#config}
  */
  readonly config: GatewayPluginOasValidationConfigA;
  /**
  * If set, the plugin will activate only for requests where the specified has been authenticated. (Note that some plugins can not be restricted to consumers this way.). Leave unset for the plugin to activate regardless of the authenticated Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#consumer GatewayPluginOasValidation#consumer}
  */
  readonly consumer?: GatewayPluginOasValidationConsumer;
  /**
  * The UUID of your control plane. This variable is available in the Konnect manager. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#control_plane_id GatewayPluginOasValidation#control_plane_id}
  */
  readonly controlPlaneId: string;
  /**
  * Unix epoch when the resource was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#created_at GatewayPluginOasValidation#created_at}
  */
  readonly createdAt?: number;
  /**
  * Whether the plugin is applied. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#enabled GatewayPluginOasValidation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#id GatewayPluginOasValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#instance_name GatewayPluginOasValidation#instance_name}
  */
  readonly instanceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#ordering GatewayPluginOasValidation#ordering}
  */
  readonly ordering?: GatewayPluginOasValidationOrdering;
  /**
  * A list of partials to be used by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#partials GatewayPluginOasValidation#partials}
  */
  readonly partials?: GatewayPluginOasValidationPartials[] | cdktf.IResolvable;
  /**
  * A set of strings representing HTTP protocols. Default: ["grpc","grpcs","http","https"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#protocols GatewayPluginOasValidation#protocols}
  */
  readonly protocols?: string[];
  /**
  * If set, the plugin will only activate when receiving requests via the specified route. Leave unset for the plugin to activate regardless of the route being used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#route GatewayPluginOasValidation#route}
  */
  readonly route?: GatewayPluginOasValidationRoute;
  /**
  * If set, the plugin will only activate when receiving requests via one of the routes belonging to the specified Service. Leave unset for the plugin to activate regardless of the Service being matched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#service GatewayPluginOasValidation#service}
  */
  readonly service?: GatewayPluginOasValidationService;
  /**
  * An optional set of strings associated with the Plugin for grouping and filtering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#tags GatewayPluginOasValidation#tags}
  */
  readonly tags?: string[];
  /**
  * Unix epoch when the resource was last updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#updated_at GatewayPluginOasValidation#updated_at}
  */
  readonly updatedAt?: number;
}
export interface GatewayPluginOasValidationConfigA {
  /**
  * List of header parameters in the request that will be ignored when performing HTTP header validation. These are additional headers added to an API request beyond those defined in the API specification.  For example, you might include the HTTP header `User-Agent`, which lets servers and network peers identify the application, operating system, vendor, and/or version of the requesting user agent. Default: "Host,Content-Type,User-Agent,Accept,Content-Length"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#allowed_header_parameters GatewayPluginOasValidation#allowed_header_parameters}
  */
  readonly allowedHeaderParameters?: string;
  /**
  * The API specification defined using either Swagger or the OpenAPI. This can be either a JSON or YAML based file. If using a YAML file, the spec needs to be URI-Encoded to preserve the YAML format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#api_spec GatewayPluginOasValidation#api_spec}
  */
  readonly apiSpec: string;
  /**
  * Indicates whether the api_spec is URI-Encoded. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#api_spec_encoded GatewayPluginOasValidation#api_spec_encoded}
  */
  readonly apiSpecEncoded?: boolean | cdktf.IResolvable;
  /**
  * The base path to be used for path match evaluation. This value is ignored if `include_base_path` is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#custom_base_path GatewayPluginOasValidation#custom_base_path}
  */
  readonly customBasePath?: string;
  /**
  * If set to true, checks if HTTP header parameters in the request exist in the API specification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#header_parameter_check GatewayPluginOasValidation#header_parameter_check}
  */
  readonly headerParameterCheck?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to include the base path when performing path match evaluation. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#include_base_path GatewayPluginOasValidation#include_base_path}
  */
  readonly includeBasePath?: boolean | cdktf.IResolvable;
  /**
  * If set to true, notifications via event hooks are enabled, but request based validation failures don't affect the request flow. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#notify_only_request_validation_failure GatewayPluginOasValidation#notify_only_request_validation_failure}
  */
  readonly notifyOnlyRequestValidationFailure?: boolean | cdktf.IResolvable;
  /**
  * If set to true, notifications via event hooks are enabled, but response validation failures don't affect the response flow. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#notify_only_response_body_validation_failure GatewayPluginOasValidation#notify_only_response_body_validation_failure}
  */
  readonly notifyOnlyResponseBodyValidationFailure?: boolean | cdktf.IResolvable;
  /**
  * If set to true, checks if query parameters in the request exist in the API specification. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#query_parameter_check GatewayPluginOasValidation#query_parameter_check}
  */
  readonly queryParameterCheck?: boolean | cdktf.IResolvable;
  /**
  * If set to true, validates the request body content against the API specification. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#validate_request_body GatewayPluginOasValidation#validate_request_body}
  */
  readonly validateRequestBody?: boolean | cdktf.IResolvable;
  /**
  * If set to true, validates HTTP header parameters against the API specification. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#validate_request_header_params GatewayPluginOasValidation#validate_request_header_params}
  */
  readonly validateRequestHeaderParams?: boolean | cdktf.IResolvable;
  /**
  * If set to true, validates query parameters against the API specification. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#validate_request_query_params GatewayPluginOasValidation#validate_request_query_params}
  */
  readonly validateRequestQueryParams?: boolean | cdktf.IResolvable;
  /**
  * If set to true, validates URI parameters in the request against the API specification. Default: true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#validate_request_uri_params GatewayPluginOasValidation#validate_request_uri_params}
  */
  readonly validateRequestUriParams?: boolean | cdktf.IResolvable;
  /**
  * If set to true, validates the response from the upstream services against the API specification. If validation fails, it results in an `HTTP 406 Not Acceptable` status code. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#validate_response_body GatewayPluginOasValidation#validate_response_body}
  */
  readonly validateResponseBody?: boolean | cdktf.IResolvable;
  /**
  * If set to true, returns a detailed error message for invalid requests & responses. This is useful while testing. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#verbose_response GatewayPluginOasValidation#verbose_response}
  */
  readonly verboseResponse?: boolean | cdktf.IResolvable;
}

export function gatewayPluginOasValidationConfigAToTerraform(struct?: GatewayPluginOasValidationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_header_parameters: cdktf.stringToTerraform(struct!.allowedHeaderParameters),
    api_spec: cdktf.stringToTerraform(struct!.apiSpec),
    api_spec_encoded: cdktf.booleanToTerraform(struct!.apiSpecEncoded),
    custom_base_path: cdktf.stringToTerraform(struct!.customBasePath),
    header_parameter_check: cdktf.booleanToTerraform(struct!.headerParameterCheck),
    include_base_path: cdktf.booleanToTerraform(struct!.includeBasePath),
    notify_only_request_validation_failure: cdktf.booleanToTerraform(struct!.notifyOnlyRequestValidationFailure),
    notify_only_response_body_validation_failure: cdktf.booleanToTerraform(struct!.notifyOnlyResponseBodyValidationFailure),
    query_parameter_check: cdktf.booleanToTerraform(struct!.queryParameterCheck),
    validate_request_body: cdktf.booleanToTerraform(struct!.validateRequestBody),
    validate_request_header_params: cdktf.booleanToTerraform(struct!.validateRequestHeaderParams),
    validate_request_query_params: cdktf.booleanToTerraform(struct!.validateRequestQueryParams),
    validate_request_uri_params: cdktf.booleanToTerraform(struct!.validateRequestUriParams),
    validate_response_body: cdktf.booleanToTerraform(struct!.validateResponseBody),
    verbose_response: cdktf.booleanToTerraform(struct!.verboseResponse),
  }
}


export function gatewayPluginOasValidationConfigAToHclTerraform(struct?: GatewayPluginOasValidationConfigA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_header_parameters: {
      value: cdktf.stringToHclTerraform(struct!.allowedHeaderParameters),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_spec: {
      value: cdktf.stringToHclTerraform(struct!.apiSpec),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_spec_encoded: {
      value: cdktf.booleanToHclTerraform(struct!.apiSpecEncoded),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_base_path: {
      value: cdktf.stringToHclTerraform(struct!.customBasePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    header_parameter_check: {
      value: cdktf.booleanToHclTerraform(struct!.headerParameterCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_base_path: {
      value: cdktf.booleanToHclTerraform(struct!.includeBasePath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_only_request_validation_failure: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnlyRequestValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    notify_only_response_body_validation_failure: {
      value: cdktf.booleanToHclTerraform(struct!.notifyOnlyResponseBodyValidationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_parameter_check: {
      value: cdktf.booleanToHclTerraform(struct!.queryParameterCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_request_body: {
      value: cdktf.booleanToHclTerraform(struct!.validateRequestBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_request_header_params: {
      value: cdktf.booleanToHclTerraform(struct!.validateRequestHeaderParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_request_query_params: {
      value: cdktf.booleanToHclTerraform(struct!.validateRequestQueryParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_request_uri_params: {
      value: cdktf.booleanToHclTerraform(struct!.validateRequestUriParams),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_response_body: {
      value: cdktf.booleanToHclTerraform(struct!.validateResponseBody),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verbose_response: {
      value: cdktf.booleanToHclTerraform(struct!.verboseResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOasValidationConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOasValidationConfigA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedHeaderParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedHeaderParameters = this._allowedHeaderParameters;
    }
    if (this._apiSpec !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSpec = this._apiSpec;
    }
    if (this._apiSpecEncoded !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiSpecEncoded = this._apiSpecEncoded;
    }
    if (this._customBasePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.customBasePath = this._customBasePath;
    }
    if (this._headerParameterCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerParameterCheck = this._headerParameterCheck;
    }
    if (this._includeBasePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeBasePath = this._includeBasePath;
    }
    if (this._notifyOnlyRequestValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnlyRequestValidationFailure = this._notifyOnlyRequestValidationFailure;
    }
    if (this._notifyOnlyResponseBodyValidationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyOnlyResponseBodyValidationFailure = this._notifyOnlyResponseBodyValidationFailure;
    }
    if (this._queryParameterCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryParameterCheck = this._queryParameterCheck;
    }
    if (this._validateRequestBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateRequestBody = this._validateRequestBody;
    }
    if (this._validateRequestHeaderParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateRequestHeaderParams = this._validateRequestHeaderParams;
    }
    if (this._validateRequestQueryParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateRequestQueryParams = this._validateRequestQueryParams;
    }
    if (this._validateRequestUriParams !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateRequestUriParams = this._validateRequestUriParams;
    }
    if (this._validateResponseBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateResponseBody = this._validateResponseBody;
    }
    if (this._verboseResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.verboseResponse = this._verboseResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GatewayPluginOasValidationConfigA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedHeaderParameters = undefined;
      this._apiSpec = undefined;
      this._apiSpecEncoded = undefined;
      this._customBasePath = undefined;
      this._headerParameterCheck = undefined;
      this._includeBasePath = undefined;
      this._notifyOnlyRequestValidationFailure = undefined;
      this._notifyOnlyResponseBodyValidationFailure = undefined;
      this._queryParameterCheck = undefined;
      this._validateRequestBody = undefined;
      this._validateRequestHeaderParams = undefined;
      this._validateRequestQueryParams = undefined;
      this._validateRequestUriParams = undefined;
      this._validateResponseBody = undefined;
      this._verboseResponse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedHeaderParameters = value.allowedHeaderParameters;
      this._apiSpec = value.apiSpec;
      this._apiSpecEncoded = value.apiSpecEncoded;
      this._customBasePath = value.customBasePath;
      this._headerParameterCheck = value.headerParameterCheck;
      this._includeBasePath = value.includeBasePath;
      this._notifyOnlyRequestValidationFailure = value.notifyOnlyRequestValidationFailure;
      this._notifyOnlyResponseBodyValidationFailure = value.notifyOnlyResponseBodyValidationFailure;
      this._queryParameterCheck = value.queryParameterCheck;
      this._validateRequestBody = value.validateRequestBody;
      this._validateRequestHeaderParams = value.validateRequestHeaderParams;
      this._validateRequestQueryParams = value.validateRequestQueryParams;
      this._validateRequestUriParams = value.validateRequestUriParams;
      this._validateResponseBody = value.validateResponseBody;
      this._verboseResponse = value.verboseResponse;
    }
  }

  // allowed_header_parameters - computed: true, optional: true, required: false
  private _allowedHeaderParameters?: string; 
  public get allowedHeaderParameters() {
    return this.getStringAttribute('allowed_header_parameters');
  }
  public set allowedHeaderParameters(value: string) {
    this._allowedHeaderParameters = value;
  }
  public resetAllowedHeaderParameters() {
    this._allowedHeaderParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedHeaderParametersInput() {
    return this._allowedHeaderParameters;
  }

  // api_spec - computed: false, optional: false, required: true
  private _apiSpec?: string; 
  public get apiSpec() {
    return this.getStringAttribute('api_spec');
  }
  public set apiSpec(value: string) {
    this._apiSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSpecInput() {
    return this._apiSpec;
  }

  // api_spec_encoded - computed: true, optional: true, required: false
  private _apiSpecEncoded?: boolean | cdktf.IResolvable; 
  public get apiSpecEncoded() {
    return this.getBooleanAttribute('api_spec_encoded');
  }
  public set apiSpecEncoded(value: boolean | cdktf.IResolvable) {
    this._apiSpecEncoded = value;
  }
  public resetApiSpecEncoded() {
    this._apiSpecEncoded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSpecEncodedInput() {
    return this._apiSpecEncoded;
  }

  // custom_base_path - computed: false, optional: true, required: false
  private _customBasePath?: string; 
  public get customBasePath() {
    return this.getStringAttribute('custom_base_path');
  }
  public set customBasePath(value: string) {
    this._customBasePath = value;
  }
  public resetCustomBasePath() {
    this._customBasePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBasePathInput() {
    return this._customBasePath;
  }

  // header_parameter_check - computed: true, optional: true, required: false
  private _headerParameterCheck?: boolean | cdktf.IResolvable; 
  public get headerParameterCheck() {
    return this.getBooleanAttribute('header_parameter_check');
  }
  public set headerParameterCheck(value: boolean | cdktf.IResolvable) {
    this._headerParameterCheck = value;
  }
  public resetHeaderParameterCheck() {
    this._headerParameterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerParameterCheckInput() {
    return this._headerParameterCheck;
  }

  // include_base_path - computed: true, optional: true, required: false
  private _includeBasePath?: boolean | cdktf.IResolvable; 
  public get includeBasePath() {
    return this.getBooleanAttribute('include_base_path');
  }
  public set includeBasePath(value: boolean | cdktf.IResolvable) {
    this._includeBasePath = value;
  }
  public resetIncludeBasePath() {
    this._includeBasePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeBasePathInput() {
    return this._includeBasePath;
  }

  // notify_only_request_validation_failure - computed: true, optional: true, required: false
  private _notifyOnlyRequestValidationFailure?: boolean | cdktf.IResolvable; 
  public get notifyOnlyRequestValidationFailure() {
    return this.getBooleanAttribute('notify_only_request_validation_failure');
  }
  public set notifyOnlyRequestValidationFailure(value: boolean | cdktf.IResolvable) {
    this._notifyOnlyRequestValidationFailure = value;
  }
  public resetNotifyOnlyRequestValidationFailure() {
    this._notifyOnlyRequestValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnlyRequestValidationFailureInput() {
    return this._notifyOnlyRequestValidationFailure;
  }

  // notify_only_response_body_validation_failure - computed: true, optional: true, required: false
  private _notifyOnlyResponseBodyValidationFailure?: boolean | cdktf.IResolvable; 
  public get notifyOnlyResponseBodyValidationFailure() {
    return this.getBooleanAttribute('notify_only_response_body_validation_failure');
  }
  public set notifyOnlyResponseBodyValidationFailure(value: boolean | cdktf.IResolvable) {
    this._notifyOnlyResponseBodyValidationFailure = value;
  }
  public resetNotifyOnlyResponseBodyValidationFailure() {
    this._notifyOnlyResponseBodyValidationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyOnlyResponseBodyValidationFailureInput() {
    return this._notifyOnlyResponseBodyValidationFailure;
  }

  // query_parameter_check - computed: true, optional: true, required: false
  private _queryParameterCheck?: boolean | cdktf.IResolvable; 
  public get queryParameterCheck() {
    return this.getBooleanAttribute('query_parameter_check');
  }
  public set queryParameterCheck(value: boolean | cdktf.IResolvable) {
    this._queryParameterCheck = value;
  }
  public resetQueryParameterCheck() {
    this._queryParameterCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryParameterCheckInput() {
    return this._queryParameterCheck;
  }

  // validate_request_body - computed: true, optional: true, required: false
  private _validateRequestBody?: boolean | cdktf.IResolvable; 
  public get validateRequestBody() {
    return this.getBooleanAttribute('validate_request_body');
  }
  public set validateRequestBody(value: boolean | cdktf.IResolvable) {
    this._validateRequestBody = value;
  }
  public resetValidateRequestBody() {
    this._validateRequestBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestBodyInput() {
    return this._validateRequestBody;
  }

  // validate_request_header_params - computed: true, optional: true, required: false
  private _validateRequestHeaderParams?: boolean | cdktf.IResolvable; 
  public get validateRequestHeaderParams() {
    return this.getBooleanAttribute('validate_request_header_params');
  }
  public set validateRequestHeaderParams(value: boolean | cdktf.IResolvable) {
    this._validateRequestHeaderParams = value;
  }
  public resetValidateRequestHeaderParams() {
    this._validateRequestHeaderParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestHeaderParamsInput() {
    return this._validateRequestHeaderParams;
  }

  // validate_request_query_params - computed: true, optional: true, required: false
  private _validateRequestQueryParams?: boolean | cdktf.IResolvable; 
  public get validateRequestQueryParams() {
    return this.getBooleanAttribute('validate_request_query_params');
  }
  public set validateRequestQueryParams(value: boolean | cdktf.IResolvable) {
    this._validateRequestQueryParams = value;
  }
  public resetValidateRequestQueryParams() {
    this._validateRequestQueryParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestQueryParamsInput() {
    return this._validateRequestQueryParams;
  }

  // validate_request_uri_params - computed: true, optional: true, required: false
  private _validateRequestUriParams?: boolean | cdktf.IResolvable; 
  public get validateRequestUriParams() {
    return this.getBooleanAttribute('validate_request_uri_params');
  }
  public set validateRequestUriParams(value: boolean | cdktf.IResolvable) {
    this._validateRequestUriParams = value;
  }
  public resetValidateRequestUriParams() {
    this._validateRequestUriParams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateRequestUriParamsInput() {
    return this._validateRequestUriParams;
  }

  // validate_response_body - computed: true, optional: true, required: false
  private _validateResponseBody?: boolean | cdktf.IResolvable; 
  public get validateResponseBody() {
    return this.getBooleanAttribute('validate_response_body');
  }
  public set validateResponseBody(value: boolean | cdktf.IResolvable) {
    this._validateResponseBody = value;
  }
  public resetValidateResponseBody() {
    this._validateResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateResponseBodyInput() {
    return this._validateResponseBody;
  }

  // verbose_response - computed: true, optional: true, required: false
  private _verboseResponse?: boolean | cdktf.IResolvable; 
  public get verboseResponse() {
    return this.getBooleanAttribute('verbose_response');
  }
  public set verboseResponse(value: boolean | cdktf.IResolvable) {
    this._verboseResponse = value;
  }
  public resetVerboseResponse() {
    this._verboseResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verboseResponseInput() {
    return this._verboseResponse;
  }
}
export interface GatewayPluginOasValidationConsumer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#id GatewayPluginOasValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOasValidationConsumerToTerraform(struct?: GatewayPluginOasValidationConsumer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOasValidationConsumerToHclTerraform(struct?: GatewayPluginOasValidationConsumer | cdktf.IResolvable): any {
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

export class GatewayPluginOasValidationConsumerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOasValidationConsumer | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOasValidationConsumer | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOasValidationOrderingAfter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#access GatewayPluginOasValidation#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOasValidationOrderingAfterToTerraform(struct?: GatewayPluginOasValidationOrderingAfter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOasValidationOrderingAfterToHclTerraform(struct?: GatewayPluginOasValidationOrderingAfter | cdktf.IResolvable): any {
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

export class GatewayPluginOasValidationOrderingAfterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOasValidationOrderingAfter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOasValidationOrderingAfter | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOasValidationOrderingBefore {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#access GatewayPluginOasValidation#access}
  */
  readonly access?: string[];
}

export function gatewayPluginOasValidationOrderingBeforeToTerraform(struct?: GatewayPluginOasValidationOrderingBefore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.access),
  }
}


export function gatewayPluginOasValidationOrderingBeforeToHclTerraform(struct?: GatewayPluginOasValidationOrderingBefore | cdktf.IResolvable): any {
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

export class GatewayPluginOasValidationOrderingBeforeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOasValidationOrderingBefore | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOasValidationOrderingBefore | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOasValidationOrdering {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#after GatewayPluginOasValidation#after}
  */
  readonly after?: GatewayPluginOasValidationOrderingAfter;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#before GatewayPluginOasValidation#before}
  */
  readonly before?: GatewayPluginOasValidationOrderingBefore;
}

export function gatewayPluginOasValidationOrderingToTerraform(struct?: GatewayPluginOasValidationOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    after: gatewayPluginOasValidationOrderingAfterToTerraform(struct!.after),
    before: gatewayPluginOasValidationOrderingBeforeToTerraform(struct!.before),
  }
}


export function gatewayPluginOasValidationOrderingToHclTerraform(struct?: GatewayPluginOasValidationOrdering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    after: {
      value: gatewayPluginOasValidationOrderingAfterToHclTerraform(struct!.after),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOasValidationOrderingAfter",
    },
    before: {
      value: gatewayPluginOasValidationOrderingBeforeToHclTerraform(struct!.before),
      isBlock: true,
      type: "struct",
      storageClassType: "GatewayPluginOasValidationOrderingBefore",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GatewayPluginOasValidationOrderingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOasValidationOrdering | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOasValidationOrdering | cdktf.IResolvable | undefined) {
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
  private _after = new GatewayPluginOasValidationOrderingAfterOutputReference(this, "after");
  public get after() {
    return this._after;
  }
  public putAfter(value: GatewayPluginOasValidationOrderingAfter) {
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
  private _before = new GatewayPluginOasValidationOrderingBeforeOutputReference(this, "before");
  public get before() {
    return this._before;
  }
  public putBefore(value: GatewayPluginOasValidationOrderingBefore) {
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
export interface GatewayPluginOasValidationPartials {
  /**
  * A string representing a UUID (universally unique identifier).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#id GatewayPluginOasValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique string representing a UTF-8 encoded name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#name GatewayPluginOasValidation#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#path GatewayPluginOasValidation#path}
  */
  readonly path?: string;
}

export function gatewayPluginOasValidationPartialsToTerraform(struct?: GatewayPluginOasValidationPartials | cdktf.IResolvable): any {
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


export function gatewayPluginOasValidationPartialsToHclTerraform(struct?: GatewayPluginOasValidationPartials | cdktf.IResolvable): any {
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

export class GatewayPluginOasValidationPartialsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GatewayPluginOasValidationPartials | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOasValidationPartials | cdktf.IResolvable | undefined) {
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

export class GatewayPluginOasValidationPartialsList extends cdktf.ComplexList {
  public internalValue? : GatewayPluginOasValidationPartials[] | cdktf.IResolvable

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
  public get(index: number): GatewayPluginOasValidationPartialsOutputReference {
    return new GatewayPluginOasValidationPartialsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GatewayPluginOasValidationRoute {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#id GatewayPluginOasValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOasValidationRouteToTerraform(struct?: GatewayPluginOasValidationRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOasValidationRouteToHclTerraform(struct?: GatewayPluginOasValidationRoute | cdktf.IResolvable): any {
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

export class GatewayPluginOasValidationRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOasValidationRoute | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOasValidationRoute | cdktf.IResolvable | undefined) {
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
export interface GatewayPluginOasValidationService {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#id GatewayPluginOasValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

export function gatewayPluginOasValidationServiceToTerraform(struct?: GatewayPluginOasValidationService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function gatewayPluginOasValidationServiceToHclTerraform(struct?: GatewayPluginOasValidationService | cdktf.IResolvable): any {
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

export class GatewayPluginOasValidationServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GatewayPluginOasValidationService | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GatewayPluginOasValidationService | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation konnect_gateway_plugin_oas_validation}
*/
export class GatewayPluginOasValidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_gateway_plugin_oas_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayPluginOasValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayPluginOasValidation to import
  * @param importFromId The id of the existing GatewayPluginOasValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayPluginOasValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_gateway_plugin_oas_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/gateway_plugin_oas_validation konnect_gateway_plugin_oas_validation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayPluginOasValidationConfig
  */
  public constructor(scope: Construct, id: string, config: GatewayPluginOasValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_gateway_plugin_oas_validation',
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

  // config - computed: false, optional: false, required: true
  private _config = new GatewayPluginOasValidationConfigAOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: GatewayPluginOasValidationConfigA) {
    this._config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // consumer - computed: true, optional: true, required: false
  private _consumer = new GatewayPluginOasValidationConsumerOutputReference(this, "consumer");
  public get consumer() {
    return this._consumer;
  }
  public putConsumer(value: GatewayPluginOasValidationConsumer) {
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
  private _ordering = new GatewayPluginOasValidationOrderingOutputReference(this, "ordering");
  public get ordering() {
    return this._ordering;
  }
  public putOrdering(value: GatewayPluginOasValidationOrdering) {
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
  private _partials = new GatewayPluginOasValidationPartialsList(this, "partials", false);
  public get partials() {
    return this._partials;
  }
  public putPartials(value: GatewayPluginOasValidationPartials[] | cdktf.IResolvable) {
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
  private _route = new GatewayPluginOasValidationRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: GatewayPluginOasValidationRoute) {
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
  private _service = new GatewayPluginOasValidationServiceOutputReference(this, "service");
  public get service() {
    return this._service;
  }
  public putService(value: GatewayPluginOasValidationService) {
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
      config: gatewayPluginOasValidationConfigAToTerraform(this._config.internalValue),
      consumer: gatewayPluginOasValidationConsumerToTerraform(this._consumer.internalValue),
      control_plane_id: cdktf.stringToTerraform(this._controlPlaneId),
      created_at: cdktf.numberToTerraform(this._createdAt),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      instance_name: cdktf.stringToTerraform(this._instanceName),
      ordering: gatewayPluginOasValidationOrderingToTerraform(this._ordering.internalValue),
      partials: cdktf.listMapper(gatewayPluginOasValidationPartialsToTerraform, false)(this._partials.internalValue),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      route: gatewayPluginOasValidationRouteToTerraform(this._route.internalValue),
      service: gatewayPluginOasValidationServiceToTerraform(this._service.internalValue),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      updated_at: cdktf.numberToTerraform(this._updatedAt),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: gatewayPluginOasValidationConfigAToHclTerraform(this._config.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOasValidationConfigA",
      },
      consumer: {
        value: gatewayPluginOasValidationConsumerToHclTerraform(this._consumer.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOasValidationConsumer",
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
        value: gatewayPluginOasValidationOrderingToHclTerraform(this._ordering.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOasValidationOrdering",
      },
      partials: {
        value: cdktf.listMapperHcl(gatewayPluginOasValidationPartialsToHclTerraform, false)(this._partials.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GatewayPluginOasValidationPartialsList",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      route: {
        value: gatewayPluginOasValidationRouteToHclTerraform(this._route.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOasValidationRoute",
      },
      service: {
        value: gatewayPluginOasValidationServiceToHclTerraform(this._service.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GatewayPluginOasValidationService",
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
