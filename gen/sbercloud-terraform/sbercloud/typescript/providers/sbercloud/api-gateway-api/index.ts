// https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the authorizer to which the API request used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#authorizer_id ApiGatewayApi#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * The description of the API request body, which can be an example request body, media type or parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#body_description ApiGatewayApi#body_description}
  */
  readonly bodyDescription?: string;
  /**
  * The content type of the request body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#content_type ApiGatewayApi#content_type}
  */
  readonly contentType?: string;
  /**
  * Whether CORS is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#cors ApiGatewayApi#cors}
  */
  readonly cors?: boolean | cdktf.IResolvable;
  /**
  * The API description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * The example response for a failure request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#failure_response ApiGatewayApi#failure_response}
  */
  readonly failureResponse?: string;
  /**
  * The ID of the API group to which the API belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#group_id ApiGatewayApi#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#id ApiGatewayApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The ID of the instance to which the API belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#instance_id ApiGatewayApi#instance_id}
  */
  readonly instanceId: string;
  /**
  * Whether to perform Base64 encoding on the body for interaction with FunctionGraph.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#is_send_fg_body_base64 ApiGatewayApi#is_send_fg_body_base64}
  */
  readonly isSendFgBodyBase64?: boolean | cdktf.IResolvable;
  /**
  * The matching mode of the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#matching ApiGatewayApi#matching}
  */
  readonly matching?: string;
  /**
  * The API name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * The region where the API is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#region ApiGatewayApi#region}
  */
  readonly region?: string;
  /**
  * The request method of the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_method ApiGatewayApi#request_method}
  */
  readonly requestMethod: string;
  /**
  * The request address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_path ApiGatewayApi#request_path}
  */
  readonly requestPath: string;
  /**
  * The request protocol of the API request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_protocol ApiGatewayApi#request_protocol}
  */
  readonly requestProtocol: string;
  /**
  * The ID of the custom response that API used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#response_id ApiGatewayApi#response_id}
  */
  readonly responseId?: string;
  /**
  * The security authentication mode of the API request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#security_authentication ApiGatewayApi#security_authentication}
  */
  readonly securityAuthentication?: string;
  /**
  * Whether the authentication of the application code is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#simple_authentication ApiGatewayApi#simple_authentication}
  */
  readonly simpleAuthentication?: boolean | cdktf.IResolvable;
  /**
  * The example response for a successful request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#success_response ApiGatewayApi#success_response}
  */
  readonly successResponse?: string;
  /**
  * The list of tags configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#tags ApiGatewayApi#tags}
  */
  readonly tags?: string[];
  /**
  * The API type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type: string;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#backend_params ApiGatewayApi#backend_params}
  */
  readonly backendParams?: ApiGatewayApiBackendParams[] | cdktf.IResolvable;
  /**
  * func_graph block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#func_graph ApiGatewayApi#func_graph}
  */
  readonly funcGraph?: ApiGatewayApiFuncGraph;
  /**
  * func_graph_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#func_graph_policy ApiGatewayApi#func_graph_policy}
  */
  readonly funcGraphPolicy?: ApiGatewayApiFuncGraphPolicy[] | cdktf.IResolvable;
  /**
  * mock block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mock ApiGatewayApi#mock}
  */
  readonly mock?: ApiGatewayApiMock;
  /**
  * mock_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mock_policy ApiGatewayApi#mock_policy}
  */
  readonly mockPolicy?: ApiGatewayApiMockPolicy[] | cdktf.IResolvable;
  /**
  * request_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_params ApiGatewayApi#request_params}
  */
  readonly requestParams?: ApiGatewayApiRequestParams[] | cdktf.IResolvable;
  /**
  * web block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#web ApiGatewayApi#web}
  */
  readonly web?: ApiGatewayApiWeb;
  /**
  * web_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#web_policy ApiGatewayApi#web_policy}
  */
  readonly webPolicy?: ApiGatewayApiWebPolicy[] | cdktf.IResolvable;
}
export interface ApiGatewayApiBackendParams {
  /**
  * The description of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * Where the parameter is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#location ApiGatewayApi#location}
  */
  readonly location: string;
  /**
  * The parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#system_param_type ApiGatewayApi#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * The parameter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type: string;
  /**
  * The value of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiBackendParamsToTerraform(struct?: ApiGatewayApiBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    system_param_type: cdktf.stringToTerraform(struct!.systemParamType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiBackendParamsToHclTerraform(struct?: ApiGatewayApiBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    system_param_type: {
      value: cdktf.stringToHclTerraform(struct!.systemParamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiBackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiBackendParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemParamType = this._systemParamType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiBackendParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._location = undefined;
      this._name = undefined;
      this._systemParamType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._location = value.location;
      this._name = value.name;
      this._systemParamType = value.systemParamType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system_param_type - computed: false, optional: true, required: false
  private _systemParamType?: string; 
  public get systemParamType() {
    return this.getStringAttribute('system_param_type');
  }
  public set systemParamType(value: string) {
    this._systemParamType = value;
  }
  public resetSystemParamType() {
    this._systemParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemParamTypeInput() {
    return this._systemParamType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayApiBackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiBackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiBackendParamsOutputReference {
    return new ApiGatewayApiBackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiFuncGraph {
  /**
  * The ID of the backend custom authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#authorizer_id ApiGatewayApi#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * The alias URN of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#function_alias_urn ApiGatewayApi#function_alias_urn}
  */
  readonly functionAliasUrn?: string;
  /**
  * The URN of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#function_urn ApiGatewayApi#function_urn}
  */
  readonly functionUrn: string;
  /**
  * The invocation type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#invocation_type ApiGatewayApi#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * The network architecture (framework) type of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#network_type ApiGatewayApi#network_type}
  */
  readonly networkType?: string;
  /**
  * The request protocol of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_protocol ApiGatewayApi#request_protocol}
  */
  readonly requestProtocol?: string;
  /**
  * The timeout for API requests to backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#timeout ApiGatewayApi#timeout}
  */
  readonly timeout?: number;
  /**
  * The version of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#version ApiGatewayApi#version}
  */
  readonly version?: string;
}

export function apiGatewayApiFuncGraphToTerraform(struct?: ApiGatewayApiFuncGraphOutputReference | ApiGatewayApiFuncGraph): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    function_alias_urn: cdktf.stringToTerraform(struct!.functionAliasUrn),
    function_urn: cdktf.stringToTerraform(struct!.functionUrn),
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    request_protocol: cdktf.stringToTerraform(struct!.requestProtocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function apiGatewayApiFuncGraphToHclTerraform(struct?: ApiGatewayApiFuncGraphOutputReference | ApiGatewayApiFuncGraph): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_alias_urn: {
      value: cdktf.stringToHclTerraform(struct!.functionAliasUrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_urn: {
      value: cdktf.stringToHclTerraform(struct!.functionUrn),
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
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_protocol: {
      value: cdktf.stringToHclTerraform(struct!.requestProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiFuncGraphOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiFuncGraph | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._functionAliasUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAliasUrn = this._functionAliasUrn;
    }
    if (this._functionUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionUrn = this._functionUrn;
    }
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._requestProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProtocol = this._requestProtocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiFuncGraph | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerId = undefined;
      this._functionAliasUrn = undefined;
      this._functionUrn = undefined;
      this._invocationType = undefined;
      this._networkType = undefined;
      this._requestProtocol = undefined;
      this._timeout = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerId = value.authorizerId;
      this._functionAliasUrn = value.functionAliasUrn;
      this._functionUrn = value.functionUrn;
      this._invocationType = value.invocationType;
      this._networkType = value.networkType;
      this._requestProtocol = value.requestProtocol;
      this._timeout = value.timeout;
      this._version = value.version;
    }
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // function_alias_urn - computed: false, optional: true, required: false
  private _functionAliasUrn?: string; 
  public get functionAliasUrn() {
    return this.getStringAttribute('function_alias_urn');
  }
  public set functionAliasUrn(value: string) {
    this._functionAliasUrn = value;
  }
  public resetFunctionAliasUrn() {
    this._functionAliasUrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAliasUrnInput() {
    return this._functionAliasUrn;
  }

  // function_urn - computed: false, optional: false, required: true
  private _functionUrn?: string; 
  public get functionUrn() {
    return this.getStringAttribute('function_urn');
  }
  public set functionUrn(value: string) {
    this._functionUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUrnInput() {
    return this._functionUrn;
  }

  // invocation_type - computed: false, optional: true, required: false
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

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // request_protocol - computed: false, optional: true, required: false
  private _requestProtocol?: string; 
  public get requestProtocol() {
    return this.getStringAttribute('request_protocol');
  }
  public set requestProtocol(value: string) {
    this._requestProtocol = value;
  }
  public resetRequestProtocol() {
    this._requestProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProtocolInput() {
    return this._requestProtocol;
  }

  // timeout - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface ApiGatewayApiFuncGraphPolicyBackendParams {
  /**
  * The description of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * Where the parameter is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#location ApiGatewayApi#location}
  */
  readonly location: string;
  /**
  * The parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#system_param_type ApiGatewayApi#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * The parameter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type: string;
  /**
  * The value of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiFuncGraphPolicyBackendParamsToTerraform(struct?: ApiGatewayApiFuncGraphPolicyBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    system_param_type: cdktf.stringToTerraform(struct!.systemParamType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiFuncGraphPolicyBackendParamsToHclTerraform(struct?: ApiGatewayApiFuncGraphPolicyBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    system_param_type: {
      value: cdktf.stringToHclTerraform(struct!.systemParamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiFuncGraphPolicyBackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiFuncGraphPolicyBackendParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemParamType = this._systemParamType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiFuncGraphPolicyBackendParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._location = undefined;
      this._name = undefined;
      this._systemParamType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._location = value.location;
      this._name = value.name;
      this._systemParamType = value.systemParamType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system_param_type - computed: false, optional: true, required: false
  private _systemParamType?: string; 
  public get systemParamType() {
    return this.getStringAttribute('system_param_type');
  }
  public set systemParamType(value: string) {
    this._systemParamType = value;
  }
  public resetSystemParamType() {
    this._systemParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemParamTypeInput() {
    return this._systemParamType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayApiFuncGraphPolicyBackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiFuncGraphPolicyBackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiFuncGraphPolicyBackendParamsOutputReference {
    return new ApiGatewayApiFuncGraphPolicyBackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiFuncGraphPolicyConditions {
  /**
  * The cookie parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#cookie_name ApiGatewayApi#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * The frontend authentication parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#frontend_authorizer_name ApiGatewayApi#frontend_authorizer_name}
  */
  readonly frontendAuthorizerName?: string;
  /**
  * The location of a parameter generated after orchestration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mapped_param_location ApiGatewayApi#mapped_param_location}
  */
  readonly mappedParamLocation?: string;
  /**
  * The name of a parameter generated after orchestration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mapped_param_name ApiGatewayApi#mapped_param_name}
  */
  readonly mappedParamName?: string;
  /**
  * The request parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#param_name ApiGatewayApi#param_name}
  */
  readonly paramName?: string;
  /**
  * The type of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#source ApiGatewayApi#source}
  */
  readonly source?: string;
  /**
  * The gateway built-in parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#sys_name ApiGatewayApi#sys_name}
  */
  readonly sysName?: string;
  /**
  * The condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type?: string;
  /**
  * The value of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiFuncGraphPolicyConditionsToTerraform(struct?: ApiGatewayApiFuncGraphPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    frontend_authorizer_name: cdktf.stringToTerraform(struct!.frontendAuthorizerName),
    mapped_param_location: cdktf.stringToTerraform(struct!.mappedParamLocation),
    mapped_param_name: cdktf.stringToTerraform(struct!.mappedParamName),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    source: cdktf.stringToTerraform(struct!.source),
    sys_name: cdktf.stringToTerraform(struct!.sysName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiFuncGraphPolicyConditionsToHclTerraform(struct?: ApiGatewayApiFuncGraphPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_authorizer_name: {
      value: cdktf.stringToHclTerraform(struct!.frontendAuthorizerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapped_param_location: {
      value: cdktf.stringToHclTerraform(struct!.mappedParamLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapped_param_name: {
      value: cdktf.stringToHclTerraform(struct!.mappedParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_name: {
      value: cdktf.stringToHclTerraform(struct!.sysName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiFuncGraphPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiFuncGraphPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._frontendAuthorizerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendAuthorizerName = this._frontendAuthorizerName;
    }
    if (this._mappedParamLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedParamLocation = this._mappedParamLocation;
    }
    if (this._mappedParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedParamName = this._mappedParamName;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sysName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysName = this._sysName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiFuncGraphPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieName = undefined;
      this._frontendAuthorizerName = undefined;
      this._mappedParamLocation = undefined;
      this._mappedParamName = undefined;
      this._paramName = undefined;
      this._source = undefined;
      this._sysName = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieName = value.cookieName;
      this._frontendAuthorizerName = value.frontendAuthorizerName;
      this._mappedParamLocation = value.mappedParamLocation;
      this._mappedParamName = value.mappedParamName;
      this._paramName = value.paramName;
      this._source = value.source;
      this._sysName = value.sysName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // frontend_authorizer_name - computed: false, optional: true, required: false
  private _frontendAuthorizerName?: string; 
  public get frontendAuthorizerName() {
    return this.getStringAttribute('frontend_authorizer_name');
  }
  public set frontendAuthorizerName(value: string) {
    this._frontendAuthorizerName = value;
  }
  public resetFrontendAuthorizerName() {
    this._frontendAuthorizerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendAuthorizerNameInput() {
    return this._frontendAuthorizerName;
  }

  // mapped_param_location - computed: false, optional: true, required: false
  private _mappedParamLocation?: string; 
  public get mappedParamLocation() {
    return this.getStringAttribute('mapped_param_location');
  }
  public set mappedParamLocation(value: string) {
    this._mappedParamLocation = value;
  }
  public resetMappedParamLocation() {
    this._mappedParamLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedParamLocationInput() {
    return this._mappedParamLocation;
  }

  // mapped_param_name - computed: false, optional: true, required: false
  private _mappedParamName?: string; 
  public get mappedParamName() {
    return this.getStringAttribute('mapped_param_name');
  }
  public set mappedParamName(value: string) {
    this._mappedParamName = value;
  }
  public resetMappedParamName() {
    this._mappedParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedParamNameInput() {
    return this._mappedParamName;
  }

  // param_name - computed: false, optional: true, required: false
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  public resetParamName() {
    this._paramName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sys_name - computed: false, optional: true, required: false
  private _sysName?: string; 
  public get sysName() {
    return this.getStringAttribute('sys_name');
  }
  public set sysName(value: string) {
    this._sysName = value;
  }
  public resetSysName() {
    this._sysName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysNameInput() {
    return this._sysName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayApiFuncGraphPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiFuncGraphPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiFuncGraphPolicyConditionsOutputReference {
    return new ApiGatewayApiFuncGraphPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiFuncGraphPolicy {
  /**
  * The ID of the backend custom authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#authorizer_id ApiGatewayApi#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * The effective mode of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#effective_mode ApiGatewayApi#effective_mode}
  */
  readonly effectiveMode?: string;
  /**
  * The alias URN of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#function_alias_urn ApiGatewayApi#function_alias_urn}
  */
  readonly functionAliasUrn?: string;
  /**
  * The URN of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#function_urn ApiGatewayApi#function_urn}
  */
  readonly functionUrn: string;
  /**
  * The invocation mode of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#invocation_mode ApiGatewayApi#invocation_mode}
  */
  readonly invocationMode?: string;
  /**
  * The invocation mode of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#invocation_type ApiGatewayApi#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * The name of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * The network (framework) type of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#network_type ApiGatewayApi#network_type}
  */
  readonly networkType?: string;
  /**
  * The request protocol of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_protocol ApiGatewayApi#request_protocol}
  */
  readonly requestProtocol?: string;
  /**
  * The timeout for API requests to backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#timeout ApiGatewayApi#timeout}
  */
  readonly timeout?: number;
  /**
  * The version of the FunctionGraph function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#version ApiGatewayApi#version}
  */
  readonly version?: string;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#backend_params ApiGatewayApi#backend_params}
  */
  readonly backendParams?: ApiGatewayApiFuncGraphPolicyBackendParams[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#conditions ApiGatewayApi#conditions}
  */
  readonly conditions: ApiGatewayApiFuncGraphPolicyConditions[] | cdktf.IResolvable;
}

export function apiGatewayApiFuncGraphPolicyToTerraform(struct?: ApiGatewayApiFuncGraphPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    effective_mode: cdktf.stringToTerraform(struct!.effectiveMode),
    function_alias_urn: cdktf.stringToTerraform(struct!.functionAliasUrn),
    function_urn: cdktf.stringToTerraform(struct!.functionUrn),
    invocation_mode: cdktf.stringToTerraform(struct!.invocationMode),
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
    name: cdktf.stringToTerraform(struct!.name),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    request_protocol: cdktf.stringToTerraform(struct!.requestProtocol),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    version: cdktf.stringToTerraform(struct!.version),
    backend_params: cdktf.listMapper(apiGatewayApiFuncGraphPolicyBackendParamsToTerraform, true)(struct!.backendParams),
    conditions: cdktf.listMapper(apiGatewayApiFuncGraphPolicyConditionsToTerraform, true)(struct!.conditions),
  }
}


export function apiGatewayApiFuncGraphPolicyToHclTerraform(struct?: ApiGatewayApiFuncGraphPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_mode: {
      value: cdktf.stringToHclTerraform(struct!.effectiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_alias_urn: {
      value: cdktf.stringToHclTerraform(struct!.functionAliasUrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_urn: {
      value: cdktf.stringToHclTerraform(struct!.functionUrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invocation_mode: {
      value: cdktf.stringToHclTerraform(struct!.invocationMode),
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_type: {
      value: cdktf.stringToHclTerraform(struct!.networkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_protocol: {
      value: cdktf.stringToHclTerraform(struct!.requestProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_params: {
      value: cdktf.listMapperHcl(apiGatewayApiFuncGraphPolicyBackendParamsToHclTerraform, true)(struct!.backendParams),
      isBlock: true,
      type: "set",
      storageClassType: "ApiGatewayApiFuncGraphPolicyBackendParamsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(apiGatewayApiFuncGraphPolicyConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ApiGatewayApiFuncGraphPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiFuncGraphPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiFuncGraphPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._effectiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveMode = this._effectiveMode;
    }
    if (this._functionAliasUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionAliasUrn = this._functionAliasUrn;
    }
    if (this._functionUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionUrn = this._functionUrn;
    }
    if (this._invocationMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationMode = this._invocationMode;
    }
    if (this._invocationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invocationType = this._invocationType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._networkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkType = this._networkType;
    }
    if (this._requestProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProtocol = this._requestProtocol;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._backendParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendParams = this._backendParams?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiFuncGraphPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerId = undefined;
      this._effectiveMode = undefined;
      this._functionAliasUrn = undefined;
      this._functionUrn = undefined;
      this._invocationMode = undefined;
      this._invocationType = undefined;
      this._name = undefined;
      this._networkType = undefined;
      this._requestProtocol = undefined;
      this._timeout = undefined;
      this._version = undefined;
      this._backendParams.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizerId = value.authorizerId;
      this._effectiveMode = value.effectiveMode;
      this._functionAliasUrn = value.functionAliasUrn;
      this._functionUrn = value.functionUrn;
      this._invocationMode = value.invocationMode;
      this._invocationType = value.invocationType;
      this._name = value.name;
      this._networkType = value.networkType;
      this._requestProtocol = value.requestProtocol;
      this._timeout = value.timeout;
      this._version = value.version;
      this._backendParams.internalValue = value.backendParams;
      this._conditions.internalValue = value.conditions;
    }
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // effective_mode - computed: false, optional: true, required: false
  private _effectiveMode?: string; 
  public get effectiveMode() {
    return this.getStringAttribute('effective_mode');
  }
  public set effectiveMode(value: string) {
    this._effectiveMode = value;
  }
  public resetEffectiveMode() {
    this._effectiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveModeInput() {
    return this._effectiveMode;
  }

  // function_alias_urn - computed: false, optional: true, required: false
  private _functionAliasUrn?: string; 
  public get functionAliasUrn() {
    return this.getStringAttribute('function_alias_urn');
  }
  public set functionAliasUrn(value: string) {
    this._functionAliasUrn = value;
  }
  public resetFunctionAliasUrn() {
    this._functionAliasUrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionAliasUrnInput() {
    return this._functionAliasUrn;
  }

  // function_urn - computed: false, optional: false, required: true
  private _functionUrn?: string; 
  public get functionUrn() {
    return this.getStringAttribute('function_urn');
  }
  public set functionUrn(value: string) {
    this._functionUrn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionUrnInput() {
    return this._functionUrn;
  }

  // invocation_mode - computed: false, optional: true, required: false
  private _invocationMode?: string; 
  public get invocationMode() {
    return this.getStringAttribute('invocation_mode');
  }
  public set invocationMode(value: string) {
    this._invocationMode = value;
  }
  public resetInvocationMode() {
    this._invocationMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invocationModeInput() {
    return this._invocationMode;
  }

  // invocation_type - computed: false, optional: true, required: false
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // network_type - computed: false, optional: true, required: false
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  public resetNetworkType() {
    this._networkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
  }

  // request_protocol - computed: false, optional: true, required: false
  private _requestProtocol?: string; 
  public get requestProtocol() {
    return this.getStringAttribute('request_protocol');
  }
  public set requestProtocol(value: string) {
    this._requestProtocol = value;
  }
  public resetRequestProtocol() {
    this._requestProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProtocolInput() {
    return this._requestProtocol;
  }

  // timeout - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // backend_params - computed: false, optional: true, required: false
  private _backendParams = new ApiGatewayApiFuncGraphPolicyBackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApiGatewayApiFuncGraphPolicyBackendParams[] | cdktf.IResolvable) {
    this._backendParams.internalValue = value;
  }
  public resetBackendParams() {
    this._backendParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendParamsInput() {
    return this._backendParams.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new ApiGatewayApiFuncGraphPolicyConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ApiGatewayApiFuncGraphPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ApiGatewayApiFuncGraphPolicyList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiFuncGraphPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiFuncGraphPolicyOutputReference {
    return new ApiGatewayApiFuncGraphPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiMock {
  /**
  * The ID of the backend custom authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#authorizer_id ApiGatewayApi#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * The response content of the mock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#response ApiGatewayApi#response}
  */
  readonly response?: string;
  /**
  * The custom status code of the mock response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#status_code ApiGatewayApi#status_code}
  */
  readonly statusCode?: number;
}

export function apiGatewayApiMockToTerraform(struct?: ApiGatewayApiMockOutputReference | ApiGatewayApiMock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    response: cdktf.stringToTerraform(struct!.response),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
  }
}


export function apiGatewayApiMockToHclTerraform(struct?: ApiGatewayApiMockOutputReference | ApiGatewayApiMock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiMockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiMock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiMock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerId = undefined;
      this._response = undefined;
      this._statusCode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerId = value.authorizerId;
      this._response = value.response;
      this._statusCode = value.statusCode;
    }
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }
}
export interface ApiGatewayApiMockPolicyBackendParams {
  /**
  * The description of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * Where the parameter is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#location ApiGatewayApi#location}
  */
  readonly location: string;
  /**
  * The parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#system_param_type ApiGatewayApi#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * The parameter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type: string;
  /**
  * The value of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiMockPolicyBackendParamsToTerraform(struct?: ApiGatewayApiMockPolicyBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    system_param_type: cdktf.stringToTerraform(struct!.systemParamType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiMockPolicyBackendParamsToHclTerraform(struct?: ApiGatewayApiMockPolicyBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    system_param_type: {
      value: cdktf.stringToHclTerraform(struct!.systemParamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiMockPolicyBackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiMockPolicyBackendParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemParamType = this._systemParamType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiMockPolicyBackendParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._location = undefined;
      this._name = undefined;
      this._systemParamType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._location = value.location;
      this._name = value.name;
      this._systemParamType = value.systemParamType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system_param_type - computed: false, optional: true, required: false
  private _systemParamType?: string; 
  public get systemParamType() {
    return this.getStringAttribute('system_param_type');
  }
  public set systemParamType(value: string) {
    this._systemParamType = value;
  }
  public resetSystemParamType() {
    this._systemParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemParamTypeInput() {
    return this._systemParamType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayApiMockPolicyBackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiMockPolicyBackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiMockPolicyBackendParamsOutputReference {
    return new ApiGatewayApiMockPolicyBackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiMockPolicyConditions {
  /**
  * The cookie parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#cookie_name ApiGatewayApi#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * The frontend authentication parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#frontend_authorizer_name ApiGatewayApi#frontend_authorizer_name}
  */
  readonly frontendAuthorizerName?: string;
  /**
  * The location of a parameter generated after orchestration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mapped_param_location ApiGatewayApi#mapped_param_location}
  */
  readonly mappedParamLocation?: string;
  /**
  * The name of a parameter generated after orchestration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mapped_param_name ApiGatewayApi#mapped_param_name}
  */
  readonly mappedParamName?: string;
  /**
  * The request parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#param_name ApiGatewayApi#param_name}
  */
  readonly paramName?: string;
  /**
  * The type of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#source ApiGatewayApi#source}
  */
  readonly source?: string;
  /**
  * The gateway built-in parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#sys_name ApiGatewayApi#sys_name}
  */
  readonly sysName?: string;
  /**
  * The condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type?: string;
  /**
  * The value of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiMockPolicyConditionsToTerraform(struct?: ApiGatewayApiMockPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    frontend_authorizer_name: cdktf.stringToTerraform(struct!.frontendAuthorizerName),
    mapped_param_location: cdktf.stringToTerraform(struct!.mappedParamLocation),
    mapped_param_name: cdktf.stringToTerraform(struct!.mappedParamName),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    source: cdktf.stringToTerraform(struct!.source),
    sys_name: cdktf.stringToTerraform(struct!.sysName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiMockPolicyConditionsToHclTerraform(struct?: ApiGatewayApiMockPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_authorizer_name: {
      value: cdktf.stringToHclTerraform(struct!.frontendAuthorizerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapped_param_location: {
      value: cdktf.stringToHclTerraform(struct!.mappedParamLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapped_param_name: {
      value: cdktf.stringToHclTerraform(struct!.mappedParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_name: {
      value: cdktf.stringToHclTerraform(struct!.sysName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiMockPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiMockPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._frontendAuthorizerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendAuthorizerName = this._frontendAuthorizerName;
    }
    if (this._mappedParamLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedParamLocation = this._mappedParamLocation;
    }
    if (this._mappedParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedParamName = this._mappedParamName;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sysName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysName = this._sysName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiMockPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieName = undefined;
      this._frontendAuthorizerName = undefined;
      this._mappedParamLocation = undefined;
      this._mappedParamName = undefined;
      this._paramName = undefined;
      this._source = undefined;
      this._sysName = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieName = value.cookieName;
      this._frontendAuthorizerName = value.frontendAuthorizerName;
      this._mappedParamLocation = value.mappedParamLocation;
      this._mappedParamName = value.mappedParamName;
      this._paramName = value.paramName;
      this._source = value.source;
      this._sysName = value.sysName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // frontend_authorizer_name - computed: false, optional: true, required: false
  private _frontendAuthorizerName?: string; 
  public get frontendAuthorizerName() {
    return this.getStringAttribute('frontend_authorizer_name');
  }
  public set frontendAuthorizerName(value: string) {
    this._frontendAuthorizerName = value;
  }
  public resetFrontendAuthorizerName() {
    this._frontendAuthorizerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendAuthorizerNameInput() {
    return this._frontendAuthorizerName;
  }

  // mapped_param_location - computed: false, optional: true, required: false
  private _mappedParamLocation?: string; 
  public get mappedParamLocation() {
    return this.getStringAttribute('mapped_param_location');
  }
  public set mappedParamLocation(value: string) {
    this._mappedParamLocation = value;
  }
  public resetMappedParamLocation() {
    this._mappedParamLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedParamLocationInput() {
    return this._mappedParamLocation;
  }

  // mapped_param_name - computed: false, optional: true, required: false
  private _mappedParamName?: string; 
  public get mappedParamName() {
    return this.getStringAttribute('mapped_param_name');
  }
  public set mappedParamName(value: string) {
    this._mappedParamName = value;
  }
  public resetMappedParamName() {
    this._mappedParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedParamNameInput() {
    return this._mappedParamName;
  }

  // param_name - computed: false, optional: true, required: false
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  public resetParamName() {
    this._paramName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sys_name - computed: false, optional: true, required: false
  private _sysName?: string; 
  public get sysName() {
    return this.getStringAttribute('sys_name');
  }
  public set sysName(value: string) {
    this._sysName = value;
  }
  public resetSysName() {
    this._sysName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysNameInput() {
    return this._sysName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayApiMockPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiMockPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiMockPolicyConditionsOutputReference {
    return new ApiGatewayApiMockPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiMockPolicy {
  /**
  * The ID of the backend custom authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#authorizer_id ApiGatewayApi#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * The effective mode of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#effective_mode ApiGatewayApi#effective_mode}
  */
  readonly effectiveMode?: string;
  /**
  * The backend policy name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * The response content of the mock.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#response ApiGatewayApi#response}
  */
  readonly response?: string;
  /**
  * The custom status code of the mock response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#status_code ApiGatewayApi#status_code}
  */
  readonly statusCode?: number;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#backend_params ApiGatewayApi#backend_params}
  */
  readonly backendParams?: ApiGatewayApiMockPolicyBackendParams[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#conditions ApiGatewayApi#conditions}
  */
  readonly conditions: ApiGatewayApiMockPolicyConditions[] | cdktf.IResolvable;
}

export function apiGatewayApiMockPolicyToTerraform(struct?: ApiGatewayApiMockPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    effective_mode: cdktf.stringToTerraform(struct!.effectiveMode),
    name: cdktf.stringToTerraform(struct!.name),
    response: cdktf.stringToTerraform(struct!.response),
    status_code: cdktf.numberToTerraform(struct!.statusCode),
    backend_params: cdktf.listMapper(apiGatewayApiMockPolicyBackendParamsToTerraform, true)(struct!.backendParams),
    conditions: cdktf.listMapper(apiGatewayApiMockPolicyConditionsToTerraform, true)(struct!.conditions),
  }
}


export function apiGatewayApiMockPolicyToHclTerraform(struct?: ApiGatewayApiMockPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_mode: {
      value: cdktf.stringToHclTerraform(struct!.effectiveMode),
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
    response: {
      value: cdktf.stringToHclTerraform(struct!.response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.numberToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backend_params: {
      value: cdktf.listMapperHcl(apiGatewayApiMockPolicyBackendParamsToHclTerraform, true)(struct!.backendParams),
      isBlock: true,
      type: "set",
      storageClassType: "ApiGatewayApiMockPolicyBackendParamsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(apiGatewayApiMockPolicyConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ApiGatewayApiMockPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiMockPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiMockPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._effectiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveMode = this._effectiveMode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._backendParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendParams = this._backendParams?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiMockPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerId = undefined;
      this._effectiveMode = undefined;
      this._name = undefined;
      this._response = undefined;
      this._statusCode = undefined;
      this._backendParams.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizerId = value.authorizerId;
      this._effectiveMode = value.effectiveMode;
      this._name = value.name;
      this._response = value.response;
      this._statusCode = value.statusCode;
      this._backendParams.internalValue = value.backendParams;
      this._conditions.internalValue = value.conditions;
    }
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // effective_mode - computed: false, optional: true, required: false
  private _effectiveMode?: string; 
  public get effectiveMode() {
    return this.getStringAttribute('effective_mode');
  }
  public set effectiveMode(value: string) {
    this._effectiveMode = value;
  }
  public resetEffectiveMode() {
    this._effectiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveModeInput() {
    return this._effectiveMode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // response - computed: false, optional: true, required: false
  private _response?: string; 
  public get response() {
    return this.getStringAttribute('response');
  }
  public set response(value: string) {
    this._response = value;
  }
  public resetResponse() {
    this._response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseInput() {
    return this._response;
  }

  // status_code - computed: true, optional: true, required: false
  private _statusCode?: number; 
  public get statusCode() {
    return this.getNumberAttribute('status_code');
  }
  public set statusCode(value: number) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
  }

  // backend_params - computed: false, optional: true, required: false
  private _backendParams = new ApiGatewayApiMockPolicyBackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApiGatewayApiMockPolicyBackendParams[] | cdktf.IResolvable) {
    this._backendParams.internalValue = value;
  }
  public resetBackendParams() {
    this._backendParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendParamsInput() {
    return this._backendParams.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new ApiGatewayApiMockPolicyConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ApiGatewayApiMockPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ApiGatewayApiMockPolicyList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiMockPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiMockPolicyOutputReference {
    return new ApiGatewayApiMockPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiRequestParams {
  /**
  * The default value of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#default ApiGatewayApi#default}
  */
  readonly default?: string;
  /**
  * The parameter description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * The enumerated value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#enumeration ApiGatewayApi#enumeration}
  */
  readonly enumeration?: string;
  /**
  * The parameter example.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#example ApiGatewayApi#example}
  */
  readonly example?: string;
  /**
  * Where this parameter is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#location ApiGatewayApi#location}
  */
  readonly location?: string;
  /**
  * The maximum value or length (string parameter) for parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#maximum ApiGatewayApi#maximum}
  */
  readonly maximum?: number;
  /**
  * The minimum value or length (string parameter) for parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#minimum ApiGatewayApi#minimum}
  */
  readonly minimum?: number;
  /**
  * The name of the request parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * The list of orchestration rules that parameter used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#orchestrations ApiGatewayApi#orchestrations}
  */
  readonly orchestrations?: string[];
  /**
  * Whether to transparently transfer the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#passthrough ApiGatewayApi#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * Whether this parameter is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#required ApiGatewayApi#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * The parameter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type?: string;
  /**
  * Whether to enable the parameter validation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#valid_enable ApiGatewayApi#valid_enable}
  */
  readonly validEnable?: number;
}

export function apiGatewayApiRequestParamsToTerraform(struct?: ApiGatewayApiRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    enumeration: cdktf.stringToTerraform(struct!.enumeration),
    example: cdktf.stringToTerraform(struct!.example),
    location: cdktf.stringToTerraform(struct!.location),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    name: cdktf.stringToTerraform(struct!.name),
    orchestrations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orchestrations),
    passthrough: cdktf.booleanToTerraform(struct!.passthrough),
    required: cdktf.booleanToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
    valid_enable: cdktf.numberToTerraform(struct!.validEnable),
  }
}


export function apiGatewayApiRequestParamsToHclTerraform(struct?: ApiGatewayApiRequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enumeration: {
      value: cdktf.stringToHclTerraform(struct!.enumeration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    example: {
      value: cdktf.stringToHclTerraform(struct!.example),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum: {
      value: cdktf.numberToHclTerraform(struct!.maximum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum: {
      value: cdktf.numberToHclTerraform(struct!.minimum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orchestrations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orchestrations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    passthrough: {
      value: cdktf.booleanToHclTerraform(struct!.passthrough),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    valid_enable: {
      value: cdktf.numberToHclTerraform(struct!.validEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiRequestParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiRequestParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enumeration !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumeration = this._enumeration;
    }
    if (this._example !== undefined) {
      hasAnyValues = true;
      internalValueResult.example = this._example;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._maximum !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximum = this._maximum;
    }
    if (this._minimum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimum = this._minimum;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orchestrations !== undefined) {
      hasAnyValues = true;
      internalValueResult.orchestrations = this._orchestrations;
    }
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._validEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.validEnable = this._validEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiRequestParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._enumeration = undefined;
      this._example = undefined;
      this._location = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._name = undefined;
      this._orchestrations = undefined;
      this._passthrough = undefined;
      this._required = undefined;
      this._type = undefined;
      this._validEnable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
      this._description = value.description;
      this._enumeration = value.enumeration;
      this._example = value.example;
      this._location = value.location;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._name = value.name;
      this._orchestrations = value.orchestrations;
      this._passthrough = value.passthrough;
      this._required = value.required;
      this._type = value.type;
      this._validEnable = value.validEnable;
    }
  }

  // default - computed: true, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enumeration - computed: true, optional: true, required: false
  private _enumeration?: string; 
  public get enumeration() {
    return this.getStringAttribute('enumeration');
  }
  public set enumeration(value: string) {
    this._enumeration = value;
  }
  public resetEnumeration() {
    this._enumeration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumerationInput() {
    return this._enumeration;
  }

  // example - computed: true, optional: true, required: false
  private _example?: string; 
  public get example() {
    return this.getStringAttribute('example');
  }
  public set example(value: string) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // maximum - computed: true, optional: true, required: false
  private _maximum?: number; 
  public get maximum() {
    return this.getNumberAttribute('maximum');
  }
  public set maximum(value: number) {
    this._maximum = value;
  }
  public resetMaximum() {
    this._maximum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumInput() {
    return this._maximum;
  }

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // orchestrations - computed: false, optional: true, required: false
  private _orchestrations?: string[]; 
  public get orchestrations() {
    return this.getListAttribute('orchestrations');
  }
  public set orchestrations(value: string[]) {
    this._orchestrations = value;
  }
  public resetOrchestrations() {
    this._orchestrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestrationsInput() {
    return this._orchestrations;
  }

  // passthrough - computed: true, optional: true, required: false
  private _passthrough?: boolean | cdktf.IResolvable; 
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }
  public set passthrough(value: boolean | cdktf.IResolvable) {
    this._passthrough = value;
  }
  public resetPassthrough() {
    this._passthrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughInput() {
    return this._passthrough;
  }

  // required - computed: true, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // valid_enable - computed: true, optional: true, required: false
  private _validEnable?: number; 
  public get validEnable() {
    return this.getNumberAttribute('valid_enable');
  }
  public set validEnable(value: number) {
    this._validEnable = value;
  }
  public resetValidEnable() {
    this._validEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validEnableInput() {
    return this._validEnable;
  }
}

export class ApiGatewayApiRequestParamsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiRequestParams[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiRequestParamsOutputReference {
    return new ApiGatewayApiRequestParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiWeb {
  /**
  * The ID of the backend custom authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#authorizer_id ApiGatewayApi#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * The backend service address, which consists of a domain name or IP address, and a port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#backend_address ApiGatewayApi#backend_address}
  */
  readonly backendAddress?: string;
  /**
  * The proxy host header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#host_header ApiGatewayApi#host_header}
  */
  readonly hostHeader?: string;
  /**
  * The backend request path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#path ApiGatewayApi#path}
  */
  readonly path: string;
  /**
  * The backend request method of the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_method ApiGatewayApi#request_method}
  */
  readonly requestMethod?: string;
  /**
  * The web protocol type of the API request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_protocol ApiGatewayApi#request_protocol}
  */
  readonly requestProtocol?: string;
  /**
  * The number of retry attempts to request the backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#retry_count ApiGatewayApi#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Whether to enable two-way authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#ssl_enable ApiGatewayApi#ssl_enable}
  */
  readonly sslEnable?: boolean | cdktf.IResolvable;
  /**
  * The timeout for API requests to backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#timeout ApiGatewayApi#timeout}
  */
  readonly timeout?: number;
  /**
  * The VPC channel ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#vpc_channel_id ApiGatewayApi#vpc_channel_id}
  */
  readonly vpcChannelId?: string;
}

export function apiGatewayApiWebToTerraform(struct?: ApiGatewayApiWebOutputReference | ApiGatewayApiWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    backend_address: cdktf.stringToTerraform(struct!.backendAddress),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    path: cdktf.stringToTerraform(struct!.path),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    request_protocol: cdktf.stringToTerraform(struct!.requestProtocol),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    ssl_enable: cdktf.booleanToTerraform(struct!.sslEnable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    vpc_channel_id: cdktf.stringToTerraform(struct!.vpcChannelId),
  }
}


export function apiGatewayApiWebToHclTerraform(struct?: ApiGatewayApiWebOutputReference | ApiGatewayApiWeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_address: {
      value: cdktf.stringToHclTerraform(struct!.backendAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
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
    request_method: {
      value: cdktf.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_protocol: {
      value: cdktf.stringToHclTerraform(struct!.requestProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_enable: {
      value: cdktf.booleanToHclTerraform(struct!.sslEnable),
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
    vpc_channel_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiWebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiWeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._backendAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendAddress = this._backendAddress;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProtocol = this._requestProtocol;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._sslEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslEnable = this._sslEnable;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._vpcChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcChannelId = this._vpcChannelId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiWeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerId = undefined;
      this._backendAddress = undefined;
      this._hostHeader = undefined;
      this._path = undefined;
      this._requestMethod = undefined;
      this._requestProtocol = undefined;
      this._retryCount = undefined;
      this._sslEnable = undefined;
      this._timeout = undefined;
      this._vpcChannelId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerId = value.authorizerId;
      this._backendAddress = value.backendAddress;
      this._hostHeader = value.hostHeader;
      this._path = value.path;
      this._requestMethod = value.requestMethod;
      this._requestProtocol = value.requestProtocol;
      this._retryCount = value.retryCount;
      this._sslEnable = value.sslEnable;
      this._timeout = value.timeout;
      this._vpcChannelId = value.vpcChannelId;
    }
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // backend_address - computed: false, optional: true, required: false
  private _backendAddress?: string; 
  public get backendAddress() {
    return this.getStringAttribute('backend_address');
  }
  public set backendAddress(value: string) {
    this._backendAddress = value;
  }
  public resetBackendAddress() {
    this._backendAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressInput() {
    return this._backendAddress;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // request_method - computed: false, optional: true, required: false
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  public resetRequestMethod() {
    this._requestMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_protocol - computed: false, optional: true, required: false
  private _requestProtocol?: string; 
  public get requestProtocol() {
    return this.getStringAttribute('request_protocol');
  }
  public set requestProtocol(value: string) {
    this._requestProtocol = value;
  }
  public resetRequestProtocol() {
    this._requestProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProtocolInput() {
    return this._requestProtocol;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // ssl_enable - computed: false, optional: true, required: false
  private _sslEnable?: boolean | cdktf.IResolvable; 
  public get sslEnable() {
    return this.getBooleanAttribute('ssl_enable');
  }
  public set sslEnable(value: boolean | cdktf.IResolvable) {
    this._sslEnable = value;
  }
  public resetSslEnable() {
    this._sslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnableInput() {
    return this._sslEnable;
  }

  // timeout - computed: false, optional: true, required: false
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

  // vpc_channel_id - computed: false, optional: true, required: false
  private _vpcChannelId?: string; 
  public get vpcChannelId() {
    return this.getStringAttribute('vpc_channel_id');
  }
  public set vpcChannelId(value: string) {
    this._vpcChannelId = value;
  }
  public resetVpcChannelId() {
    this._vpcChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcChannelIdInput() {
    return this._vpcChannelId;
  }
}
export interface ApiGatewayApiWebPolicyBackendParams {
  /**
  * The description of the parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * Where the parameter is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#location ApiGatewayApi#location}
  */
  readonly location: string;
  /**
  * The parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#system_param_type ApiGatewayApi#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * The parameter type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type: string;
  /**
  * The value of the parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiWebPolicyBackendParamsToTerraform(struct?: ApiGatewayApiWebPolicyBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
    system_param_type: cdktf.stringToTerraform(struct!.systemParamType),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiWebPolicyBackendParamsToHclTerraform(struct?: ApiGatewayApiWebPolicyBackendParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
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
    system_param_type: {
      value: cdktf.stringToHclTerraform(struct!.systemParamType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiWebPolicyBackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiWebPolicyBackendParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._systemParamType !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemParamType = this._systemParamType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiWebPolicyBackendParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._location = undefined;
      this._name = undefined;
      this._systemParamType = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._location = value.location;
      this._name = value.name;
      this._systemParamType = value.systemParamType;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // system_param_type - computed: false, optional: true, required: false
  private _systemParamType?: string; 
  public get systemParamType() {
    return this.getStringAttribute('system_param_type');
  }
  public set systemParamType(value: string) {
    this._systemParamType = value;
  }
  public resetSystemParamType() {
    this._systemParamType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemParamTypeInput() {
    return this._systemParamType;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayApiWebPolicyBackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiWebPolicyBackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiWebPolicyBackendParamsOutputReference {
    return new ApiGatewayApiWebPolicyBackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiWebPolicyConditions {
  /**
  * The cookie parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#cookie_name ApiGatewayApi#cookie_name}
  */
  readonly cookieName?: string;
  /**
  * The frontend authentication parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#frontend_authorizer_name ApiGatewayApi#frontend_authorizer_name}
  */
  readonly frontendAuthorizerName?: string;
  /**
  * The location of a parameter generated after orchestration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mapped_param_location ApiGatewayApi#mapped_param_location}
  */
  readonly mappedParamLocation?: string;
  /**
  * The name of a parameter generated after orchestration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#mapped_param_name ApiGatewayApi#mapped_param_name}
  */
  readonly mappedParamName?: string;
  /**
  * The request parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#param_name ApiGatewayApi#param_name}
  */
  readonly paramName?: string;
  /**
  * The type of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#source ApiGatewayApi#source}
  */
  readonly source?: string;
  /**
  * The gateway built-in parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#sys_name ApiGatewayApi#sys_name}
  */
  readonly sysName?: string;
  /**
  * The condition type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type?: string;
  /**
  * The value of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiWebPolicyConditionsToTerraform(struct?: ApiGatewayApiWebPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cookie_name: cdktf.stringToTerraform(struct!.cookieName),
    frontend_authorizer_name: cdktf.stringToTerraform(struct!.frontendAuthorizerName),
    mapped_param_location: cdktf.stringToTerraform(struct!.mappedParamLocation),
    mapped_param_name: cdktf.stringToTerraform(struct!.mappedParamName),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    source: cdktf.stringToTerraform(struct!.source),
    sys_name: cdktf.stringToTerraform(struct!.sysName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiWebPolicyConditionsToHclTerraform(struct?: ApiGatewayApiWebPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cookie_name: {
      value: cdktf.stringToHclTerraform(struct!.cookieName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frontend_authorizer_name: {
      value: cdktf.stringToHclTerraform(struct!.frontendAuthorizerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapped_param_location: {
      value: cdktf.stringToHclTerraform(struct!.mappedParamLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mapped_param_name: {
      value: cdktf.stringToHclTerraform(struct!.mappedParamName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    param_name: {
      value: cdktf.stringToHclTerraform(struct!.paramName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sys_name: {
      value: cdktf.stringToHclTerraform(struct!.sysName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiWebPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiWebPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cookieName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieName = this._cookieName;
    }
    if (this._frontendAuthorizerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.frontendAuthorizerName = this._frontendAuthorizerName;
    }
    if (this._mappedParamLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedParamLocation = this._mappedParamLocation;
    }
    if (this._mappedParamName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappedParamName = this._mappedParamName;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._sysName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysName = this._sysName;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiWebPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cookieName = undefined;
      this._frontendAuthorizerName = undefined;
      this._mappedParamLocation = undefined;
      this._mappedParamName = undefined;
      this._paramName = undefined;
      this._source = undefined;
      this._sysName = undefined;
      this._type = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cookieName = value.cookieName;
      this._frontendAuthorizerName = value.frontendAuthorizerName;
      this._mappedParamLocation = value.mappedParamLocation;
      this._mappedParamName = value.mappedParamName;
      this._paramName = value.paramName;
      this._source = value.source;
      this._sysName = value.sysName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // cookie_name - computed: false, optional: true, required: false
  private _cookieName?: string; 
  public get cookieName() {
    return this.getStringAttribute('cookie_name');
  }
  public set cookieName(value: string) {
    this._cookieName = value;
  }
  public resetCookieName() {
    this._cookieName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieNameInput() {
    return this._cookieName;
  }

  // frontend_authorizer_name - computed: false, optional: true, required: false
  private _frontendAuthorizerName?: string; 
  public get frontendAuthorizerName() {
    return this.getStringAttribute('frontend_authorizer_name');
  }
  public set frontendAuthorizerName(value: string) {
    this._frontendAuthorizerName = value;
  }
  public resetFrontendAuthorizerName() {
    this._frontendAuthorizerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontendAuthorizerNameInput() {
    return this._frontendAuthorizerName;
  }

  // mapped_param_location - computed: false, optional: true, required: false
  private _mappedParamLocation?: string; 
  public get mappedParamLocation() {
    return this.getStringAttribute('mapped_param_location');
  }
  public set mappedParamLocation(value: string) {
    this._mappedParamLocation = value;
  }
  public resetMappedParamLocation() {
    this._mappedParamLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedParamLocationInput() {
    return this._mappedParamLocation;
  }

  // mapped_param_name - computed: false, optional: true, required: false
  private _mappedParamName?: string; 
  public get mappedParamName() {
    return this.getStringAttribute('mapped_param_name');
  }
  public set mappedParamName(value: string) {
    this._mappedParamName = value;
  }
  public resetMappedParamName() {
    this._mappedParamName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedParamNameInput() {
    return this._mappedParamName;
  }

  // param_name - computed: false, optional: true, required: false
  private _paramName?: string; 
  public get paramName() {
    return this.getStringAttribute('param_name');
  }
  public set paramName(value: string) {
    this._paramName = value;
  }
  public resetParamName() {
    this._paramName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramNameInput() {
    return this._paramName;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // sys_name - computed: false, optional: true, required: false
  private _sysName?: string; 
  public get sysName() {
    return this.getStringAttribute('sys_name');
  }
  public set sysName(value: string) {
    this._sysName = value;
  }
  public resetSysName() {
    this._sysName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysNameInput() {
    return this._sysName;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ApiGatewayApiWebPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiWebPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiWebPolicyConditionsOutputReference {
    return new ApiGatewayApiWebPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiWebPolicy {
  /**
  * The ID of the backend custom authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#authorizer_id ApiGatewayApi#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * The backend service address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#backend_address ApiGatewayApi#backend_address}
  */
  readonly backendAddress?: string;
  /**
  * The effective mode of the backend policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#effective_mode ApiGatewayApi#effective_mode}
  */
  readonly effectiveMode?: string;
  /**
  * The proxy host header.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#host_header ApiGatewayApi#host_header}
  */
  readonly hostHeader?: string;
  /**
  * The name of the web policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * The backend request address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#path ApiGatewayApi#path}
  */
  readonly path: string;
  /**
  * The backend request method of the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_method ApiGatewayApi#request_method}
  */
  readonly requestMethod: string;
  /**
  * The backend request protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#request_protocol ApiGatewayApi#request_protocol}
  */
  readonly requestProtocol?: string;
  /**
  * The number of retry attempts to request the backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#retry_count ApiGatewayApi#retry_count}
  */
  readonly retryCount?: number;
  /**
  * The timeout for API requests to backend service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#timeout ApiGatewayApi#timeout}
  */
  readonly timeout?: number;
  /**
  * The VPC channel ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#vpc_channel_id ApiGatewayApi#vpc_channel_id}
  */
  readonly vpcChannelId?: string;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#backend_params ApiGatewayApi#backend_params}
  */
  readonly backendParams?: ApiGatewayApiWebPolicyBackendParams[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#conditions ApiGatewayApi#conditions}
  */
  readonly conditions: ApiGatewayApiWebPolicyConditions[] | cdktf.IResolvable;
}

export function apiGatewayApiWebPolicyToTerraform(struct?: ApiGatewayApiWebPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    backend_address: cdktf.stringToTerraform(struct!.backendAddress),
    effective_mode: cdktf.stringToTerraform(struct!.effectiveMode),
    host_header: cdktf.stringToTerraform(struct!.hostHeader),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    request_protocol: cdktf.stringToTerraform(struct!.requestProtocol),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    vpc_channel_id: cdktf.stringToTerraform(struct!.vpcChannelId),
    backend_params: cdktf.listMapper(apiGatewayApiWebPolicyBackendParamsToTerraform, true)(struct!.backendParams),
    conditions: cdktf.listMapper(apiGatewayApiWebPolicyConditionsToTerraform, true)(struct!.conditions),
  }
}


export function apiGatewayApiWebPolicyToHclTerraform(struct?: ApiGatewayApiWebPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorizer_id: {
      value: cdktf.stringToHclTerraform(struct!.authorizerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_address: {
      value: cdktf.stringToHclTerraform(struct!.backendAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    effective_mode: {
      value: cdktf.stringToHclTerraform(struct!.effectiveMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_header: {
      value: cdktf.stringToHclTerraform(struct!.hostHeader),
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
    request_method: {
      value: cdktf.stringToHclTerraform(struct!.requestMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_protocol: {
      value: cdktf.stringToHclTerraform(struct!.requestProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retry_count: {
      value: cdktf.numberToHclTerraform(struct!.retryCount),
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
    vpc_channel_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_params: {
      value: cdktf.listMapperHcl(apiGatewayApiWebPolicyBackendParamsToHclTerraform, true)(struct!.backendParams),
      isBlock: true,
      type: "set",
      storageClassType: "ApiGatewayApiWebPolicyBackendParamsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(apiGatewayApiWebPolicyConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ApiGatewayApiWebPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiWebPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiWebPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._backendAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendAddress = this._backendAddress;
    }
    if (this._effectiveMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.effectiveMode = this._effectiveMode;
    }
    if (this._hostHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostHeader = this._hostHeader;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProtocol = this._requestProtocol;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._vpcChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcChannelId = this._vpcChannelId;
    }
    if (this._backendParams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backendParams = this._backendParams?.internalValue;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiWebPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerId = undefined;
      this._backendAddress = undefined;
      this._effectiveMode = undefined;
      this._hostHeader = undefined;
      this._name = undefined;
      this._path = undefined;
      this._requestMethod = undefined;
      this._requestProtocol = undefined;
      this._retryCount = undefined;
      this._timeout = undefined;
      this._vpcChannelId = undefined;
      this._backendParams.internalValue = undefined;
      this._conditions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authorizerId = value.authorizerId;
      this._backendAddress = value.backendAddress;
      this._effectiveMode = value.effectiveMode;
      this._hostHeader = value.hostHeader;
      this._name = value.name;
      this._path = value.path;
      this._requestMethod = value.requestMethod;
      this._requestProtocol = value.requestProtocol;
      this._retryCount = value.retryCount;
      this._timeout = value.timeout;
      this._vpcChannelId = value.vpcChannelId;
      this._backendParams.internalValue = value.backendParams;
      this._conditions.internalValue = value.conditions;
    }
  }

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // backend_address - computed: false, optional: true, required: false
  private _backendAddress?: string; 
  public get backendAddress() {
    return this.getStringAttribute('backend_address');
  }
  public set backendAddress(value: string) {
    this._backendAddress = value;
  }
  public resetBackendAddress() {
    this._backendAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendAddressInput() {
    return this._backendAddress;
  }

  // effective_mode - computed: false, optional: true, required: false
  private _effectiveMode?: string; 
  public get effectiveMode() {
    return this.getStringAttribute('effective_mode');
  }
  public set effectiveMode(value: string) {
    this._effectiveMode = value;
  }
  public resetEffectiveMode() {
    this._effectiveMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveModeInput() {
    return this._effectiveMode;
  }

  // host_header - computed: false, optional: true, required: false
  private _hostHeader?: string; 
  public get hostHeader() {
    return this.getStringAttribute('host_header');
  }
  public set hostHeader(value: string) {
    this._hostHeader = value;
  }
  public resetHostHeader() {
    this._hostHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostHeaderInput() {
    return this._hostHeader;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // request_method - computed: false, optional: false, required: true
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_protocol - computed: false, optional: true, required: false
  private _requestProtocol?: string; 
  public get requestProtocol() {
    return this.getStringAttribute('request_protocol');
  }
  public set requestProtocol(value: string) {
    this._requestProtocol = value;
  }
  public resetRequestProtocol() {
    this._requestProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProtocolInput() {
    return this._requestProtocol;
  }

  // retry_count - computed: false, optional: true, required: false
  private _retryCount?: number; 
  public get retryCount() {
    return this.getNumberAttribute('retry_count');
  }
  public set retryCount(value: number) {
    this._retryCount = value;
  }
  public resetRetryCount() {
    this._retryCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryCountInput() {
    return this._retryCount;
  }

  // timeout - computed: false, optional: true, required: false
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

  // vpc_channel_id - computed: false, optional: true, required: false
  private _vpcChannelId?: string; 
  public get vpcChannelId() {
    return this.getStringAttribute('vpc_channel_id');
  }
  public set vpcChannelId(value: string) {
    this._vpcChannelId = value;
  }
  public resetVpcChannelId() {
    this._vpcChannelId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcChannelIdInput() {
    return this._vpcChannelId;
  }

  // backend_params - computed: false, optional: true, required: false
  private _backendParams = new ApiGatewayApiWebPolicyBackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApiGatewayApiWebPolicyBackendParams[] | cdktf.IResolvable) {
    this._backendParams.internalValue = value;
  }
  public resetBackendParams() {
    this._backendParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendParamsInput() {
    return this._backendParams.internalValue;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new ApiGatewayApiWebPolicyConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ApiGatewayApiWebPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ApiGatewayApiWebPolicyList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiWebPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiWebPolicyOutputReference {
    return new ApiGatewayApiWebPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api sbercloud_api_gateway_api}
*/
export class ApiGatewayApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sbercloud_api_gateway_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayApi to import
  * @param importFromId The id of the existing ApiGatewayApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sbercloud_api_gateway_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sbercloud-terraform/sbercloud/1.12.15/docs/resources/api_gateway_api sbercloud_api_gateway_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayApiConfig) {
    super(scope, id, {
      terraformResourceType: 'sbercloud_api_gateway_api',
      terraformGeneratorMetadata: {
        providerName: 'sbercloud',
        providerVersion: '1.12.15',
        providerVersionConstraint: '1.12.15'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizerId = config.authorizerId;
    this._bodyDescription = config.bodyDescription;
    this._contentType = config.contentType;
    this._cors = config.cors;
    this._description = config.description;
    this._failureResponse = config.failureResponse;
    this._groupId = config.groupId;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._isSendFgBodyBase64 = config.isSendFgBodyBase64;
    this._matching = config.matching;
    this._name = config.name;
    this._region = config.region;
    this._requestMethod = config.requestMethod;
    this._requestPath = config.requestPath;
    this._requestProtocol = config.requestProtocol;
    this._responseId = config.responseId;
    this._securityAuthentication = config.securityAuthentication;
    this._simpleAuthentication = config.simpleAuthentication;
    this._successResponse = config.successResponse;
    this._tags = config.tags;
    this._type = config.type;
    this._backendParams.internalValue = config.backendParams;
    this._funcGraph.internalValue = config.funcGraph;
    this._funcGraphPolicy.internalValue = config.funcGraphPolicy;
    this._mock.internalValue = config.mock;
    this._mockPolicy.internalValue = config.mockPolicy;
    this._requestParams.internalValue = config.requestParams;
    this._web.internalValue = config.web;
    this._webPolicy.internalValue = config.webPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorizer_id - computed: false, optional: true, required: false
  private _authorizerId?: string; 
  public get authorizerId() {
    return this.getStringAttribute('authorizer_id');
  }
  public set authorizerId(value: string) {
    this._authorizerId = value;
  }
  public resetAuthorizerId() {
    this._authorizerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizerIdInput() {
    return this._authorizerId;
  }

  // body_description - computed: false, optional: true, required: false
  private _bodyDescription?: string; 
  public get bodyDescription() {
    return this.getStringAttribute('body_description');
  }
  public set bodyDescription(value: string) {
    this._bodyDescription = value;
  }
  public resetBodyDescription() {
    this._bodyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyDescriptionInput() {
    return this._bodyDescription;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // cors - computed: false, optional: true, required: false
  private _cors?: boolean | cdktf.IResolvable; 
  public get cors() {
    return this.getBooleanAttribute('cors');
  }
  public set cors(value: boolean | cdktf.IResolvable) {
    this._cors = value;
  }
  public resetCors() {
    this._cors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get corsInput() {
    return this._cors;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // failure_response - computed: false, optional: true, required: false
  private _failureResponse?: string; 
  public get failureResponse() {
    return this.getStringAttribute('failure_response');
  }
  public set failureResponse(value: string) {
    this._failureResponse = value;
  }
  public resetFailureResponse() {
    this._failureResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureResponseInput() {
    return this._failureResponse;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // is_send_fg_body_base64 - computed: false, optional: true, required: false
  private _isSendFgBodyBase64?: boolean | cdktf.IResolvable; 
  public get isSendFgBodyBase64() {
    return this.getBooleanAttribute('is_send_fg_body_base64');
  }
  public set isSendFgBodyBase64(value: boolean | cdktf.IResolvable) {
    this._isSendFgBodyBase64 = value;
  }
  public resetIsSendFgBodyBase64() {
    this._isSendFgBodyBase64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSendFgBodyBase64Input() {
    return this._isSendFgBodyBase64;
  }

  // matching - computed: false, optional: true, required: false
  private _matching?: string; 
  public get matching() {
    return this.getStringAttribute('matching');
  }
  public set matching(value: string) {
    this._matching = value;
  }
  public resetMatching() {
    this._matching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingInput() {
    return this._matching;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // registered_at - computed: true, optional: false, required: false
  public get registeredAt() {
    return this.getStringAttribute('registered_at');
  }

  // request_method - computed: false, optional: false, required: true
  private _requestMethod?: string; 
  public get requestMethod() {
    return this.getStringAttribute('request_method');
  }
  public set requestMethod(value: string) {
    this._requestMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInput() {
    return this._requestMethod;
  }

  // request_path - computed: false, optional: false, required: true
  private _requestPath?: string; 
  public get requestPath() {
    return this.getStringAttribute('request_path');
  }
  public set requestPath(value: string) {
    this._requestPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPathInput() {
    return this._requestPath;
  }

  // request_protocol - computed: false, optional: false, required: true
  private _requestProtocol?: string; 
  public get requestProtocol() {
    return this.getStringAttribute('request_protocol');
  }
  public set requestProtocol(value: string) {
    this._requestProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestProtocolInput() {
    return this._requestProtocol;
  }

  // response_id - computed: false, optional: true, required: false
  private _responseId?: string; 
  public get responseId() {
    return this.getStringAttribute('response_id');
  }
  public set responseId(value: string) {
    this._responseId = value;
  }
  public resetResponseId() {
    this._responseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseIdInput() {
    return this._responseId;
  }

  // security_authentication - computed: false, optional: true, required: false
  private _securityAuthentication?: string; 
  public get securityAuthentication() {
    return this.getStringAttribute('security_authentication');
  }
  public set securityAuthentication(value: string) {
    this._securityAuthentication = value;
  }
  public resetSecurityAuthentication() {
    this._securityAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAuthenticationInput() {
    return this._securityAuthentication;
  }

  // simple_authentication - computed: true, optional: true, required: false
  private _simpleAuthentication?: boolean | cdktf.IResolvable; 
  public get simpleAuthentication() {
    return this.getBooleanAttribute('simple_authentication');
  }
  public set simpleAuthentication(value: boolean | cdktf.IResolvable) {
    this._simpleAuthentication = value;
  }
  public resetSimpleAuthentication() {
    this._simpleAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleAuthenticationInput() {
    return this._simpleAuthentication;
  }

  // success_response - computed: false, optional: true, required: false
  private _successResponse?: string; 
  public get successResponse() {
    return this.getStringAttribute('success_response');
  }
  public set successResponse(value: string) {
    this._successResponse = value;
  }
  public resetSuccessResponse() {
    this._successResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successResponseInput() {
    return this._successResponse;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // backend_params - computed: false, optional: true, required: false
  private _backendParams = new ApiGatewayApiBackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApiGatewayApiBackendParams[] | cdktf.IResolvable) {
    this._backendParams.internalValue = value;
  }
  public resetBackendParams() {
    this._backendParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backendParamsInput() {
    return this._backendParams.internalValue;
  }

  // func_graph - computed: false, optional: true, required: false
  private _funcGraph = new ApiGatewayApiFuncGraphOutputReference(this, "func_graph");
  public get funcGraph() {
    return this._funcGraph;
  }
  public putFuncGraph(value: ApiGatewayApiFuncGraph) {
    this._funcGraph.internalValue = value;
  }
  public resetFuncGraph() {
    this._funcGraph.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcGraphInput() {
    return this._funcGraph.internalValue;
  }

  // func_graph_policy - computed: false, optional: true, required: false
  private _funcGraphPolicy = new ApiGatewayApiFuncGraphPolicyList(this, "func_graph_policy", true);
  public get funcGraphPolicy() {
    return this._funcGraphPolicy;
  }
  public putFuncGraphPolicy(value: ApiGatewayApiFuncGraphPolicy[] | cdktf.IResolvable) {
    this._funcGraphPolicy.internalValue = value;
  }
  public resetFuncGraphPolicy() {
    this._funcGraphPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcGraphPolicyInput() {
    return this._funcGraphPolicy.internalValue;
  }

  // mock - computed: false, optional: true, required: false
  private _mock = new ApiGatewayApiMockOutputReference(this, "mock");
  public get mock() {
    return this._mock;
  }
  public putMock(value: ApiGatewayApiMock) {
    this._mock.internalValue = value;
  }
  public resetMock() {
    this._mock.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockInput() {
    return this._mock.internalValue;
  }

  // mock_policy - computed: false, optional: true, required: false
  private _mockPolicy = new ApiGatewayApiMockPolicyList(this, "mock_policy", true);
  public get mockPolicy() {
    return this._mockPolicy;
  }
  public putMockPolicy(value: ApiGatewayApiMockPolicy[] | cdktf.IResolvable) {
    this._mockPolicy.internalValue = value;
  }
  public resetMockPolicy() {
    this._mockPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockPolicyInput() {
    return this._mockPolicy.internalValue;
  }

  // request_params - computed: false, optional: true, required: false
  private _requestParams = new ApiGatewayApiRequestParamsList(this, "request_params", true);
  public get requestParams() {
    return this._requestParams;
  }
  public putRequestParams(value: ApiGatewayApiRequestParams[] | cdktf.IResolvable) {
    this._requestParams.internalValue = value;
  }
  public resetRequestParams() {
    this._requestParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParamsInput() {
    return this._requestParams.internalValue;
  }

  // web - computed: false, optional: true, required: false
  private _web = new ApiGatewayApiWebOutputReference(this, "web");
  public get web() {
    return this._web;
  }
  public putWeb(value: ApiGatewayApiWeb) {
    this._web.internalValue = value;
  }
  public resetWeb() {
    this._web.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webInput() {
    return this._web.internalValue;
  }

  // web_policy - computed: false, optional: true, required: false
  private _webPolicy = new ApiGatewayApiWebPolicyList(this, "web_policy", true);
  public get webPolicy() {
    return this._webPolicy;
  }
  public putWebPolicy(value: ApiGatewayApiWebPolicy[] | cdktf.IResolvable) {
    this._webPolicy.internalValue = value;
  }
  public resetWebPolicy() {
    this._webPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPolicyInput() {
    return this._webPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_id: cdktf.stringToTerraform(this._authorizerId),
      body_description: cdktf.stringToTerraform(this._bodyDescription),
      content_type: cdktf.stringToTerraform(this._contentType),
      cors: cdktf.booleanToTerraform(this._cors),
      description: cdktf.stringToTerraform(this._description),
      failure_response: cdktf.stringToTerraform(this._failureResponse),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      is_send_fg_body_base64: cdktf.booleanToTerraform(this._isSendFgBodyBase64),
      matching: cdktf.stringToTerraform(this._matching),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      request_method: cdktf.stringToTerraform(this._requestMethod),
      request_path: cdktf.stringToTerraform(this._requestPath),
      request_protocol: cdktf.stringToTerraform(this._requestProtocol),
      response_id: cdktf.stringToTerraform(this._responseId),
      security_authentication: cdktf.stringToTerraform(this._securityAuthentication),
      simple_authentication: cdktf.booleanToTerraform(this._simpleAuthentication),
      success_response: cdktf.stringToTerraform(this._successResponse),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      backend_params: cdktf.listMapper(apiGatewayApiBackendParamsToTerraform, true)(this._backendParams.internalValue),
      func_graph: apiGatewayApiFuncGraphToTerraform(this._funcGraph.internalValue),
      func_graph_policy: cdktf.listMapper(apiGatewayApiFuncGraphPolicyToTerraform, true)(this._funcGraphPolicy.internalValue),
      mock: apiGatewayApiMockToTerraform(this._mock.internalValue),
      mock_policy: cdktf.listMapper(apiGatewayApiMockPolicyToTerraform, true)(this._mockPolicy.internalValue),
      request_params: cdktf.listMapper(apiGatewayApiRequestParamsToTerraform, true)(this._requestParams.internalValue),
      web: apiGatewayApiWebToTerraform(this._web.internalValue),
      web_policy: cdktf.listMapper(apiGatewayApiWebPolicyToTerraform, true)(this._webPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorizer_id: {
        value: cdktf.stringToHclTerraform(this._authorizerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      body_description: {
        value: cdktf.stringToHclTerraform(this._bodyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cors: {
        value: cdktf.booleanToHclTerraform(this._cors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      failure_response: {
        value: cdktf.stringToHclTerraform(this._failureResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_send_fg_body_base64: {
        value: cdktf.booleanToHclTerraform(this._isSendFgBodyBase64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      matching: {
        value: cdktf.stringToHclTerraform(this._matching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_method: {
        value: cdktf.stringToHclTerraform(this._requestMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_path: {
        value: cdktf.stringToHclTerraform(this._requestPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_protocol: {
        value: cdktf.stringToHclTerraform(this._requestProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_id: {
        value: cdktf.stringToHclTerraform(this._responseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_authentication: {
        value: cdktf.stringToHclTerraform(this._securityAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      simple_authentication: {
        value: cdktf.booleanToHclTerraform(this._simpleAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      success_response: {
        value: cdktf.stringToHclTerraform(this._successResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_params: {
        value: cdktf.listMapperHcl(apiGatewayApiBackendParamsToHclTerraform, true)(this._backendParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiBackendParamsList",
      },
      func_graph: {
        value: apiGatewayApiFuncGraphToHclTerraform(this._funcGraph.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiFuncGraphList",
      },
      func_graph_policy: {
        value: cdktf.listMapperHcl(apiGatewayApiFuncGraphPolicyToHclTerraform, true)(this._funcGraphPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiFuncGraphPolicyList",
      },
      mock: {
        value: apiGatewayApiMockToHclTerraform(this._mock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiMockList",
      },
      mock_policy: {
        value: cdktf.listMapperHcl(apiGatewayApiMockPolicyToHclTerraform, true)(this._mockPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiMockPolicyList",
      },
      request_params: {
        value: cdktf.listMapperHcl(apiGatewayApiRequestParamsToHclTerraform, true)(this._requestParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiRequestParamsList",
      },
      web: {
        value: apiGatewayApiWebToHclTerraform(this._web.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiWebList",
      },
      web_policy: {
        value: cdktf.listMapperHcl(apiGatewayApiWebPolicyToHclTerraform, true)(this._webPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiWebPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
