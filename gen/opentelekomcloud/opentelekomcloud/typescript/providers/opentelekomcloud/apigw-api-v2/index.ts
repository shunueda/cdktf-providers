// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigwApiV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#body_description ApigwApiV2#body_description}
  */
  readonly bodyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#cors ApigwApiV2#cors}
  */
  readonly cors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#failure_response ApigwApiV2#failure_response}
  */
  readonly failureResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#gateway_id ApigwApiV2#gateway_id}
  */
  readonly gatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#group_id ApigwApiV2#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#id ApigwApiV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#match_mode ApigwApiV2#match_mode}
  */
  readonly matchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#region ApigwApiV2#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}
  */
  readonly requestMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}
  */
  readonly requestProtocol: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}
  */
  readonly requestUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#response_id ApigwApiV2#response_id}
  */
  readonly responseId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#security_authentication_enabled ApigwApiV2#security_authentication_enabled}
  */
  readonly securityAuthenticationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#security_authentication_type ApigwApiV2#security_authentication_type}
  */
  readonly securityAuthenticationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#success_response ApigwApiV2#success_response}
  */
  readonly successResponse?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#tags ApigwApiV2#tags}
  */
  readonly tags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#version ApigwApiV2#version}
  */
  readonly version?: string;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}
  */
  readonly backendParams?: ApigwApiV2BackendParams[] | cdktf.IResolvable;
  /**
  * func_graph block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#func_graph ApigwApiV2#func_graph}
  */
  readonly funcGraph?: ApigwApiV2FuncGraph;
  /**
  * func_graph_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#func_graph_policy ApigwApiV2#func_graph_policy}
  */
  readonly funcGraphPolicy?: ApigwApiV2FuncGraphPolicy[] | cdktf.IResolvable;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#http ApigwApiV2#http}
  */
  readonly http?: ApigwApiV2Http;
  /**
  * http_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#http_policy ApigwApiV2#http_policy}
  */
  readonly httpPolicy?: ApigwApiV2HttpPolicy[] | cdktf.IResolvable;
  /**
  * mock block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#mock ApigwApiV2#mock}
  */
  readonly mock?: ApigwApiV2Mock;
  /**
  * mock_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#mock_policy ApigwApiV2#mock_policy}
  */
  readonly mockPolicy?: ApigwApiV2MockPolicy[] | cdktf.IResolvable;
  /**
  * request_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_params ApigwApiV2#request_params}
  */
  readonly requestParams?: ApigwApiV2RequestParams[] | cdktf.IResolvable;
}
export interface ApigwApiV2BackendParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#location ApigwApiV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#value ApigwApiV2#value}
  */
  readonly value: string;
}

export function apigwApiV2BackendParamsToTerraform(struct?: ApigwApiV2BackendParams | cdktf.IResolvable): any {
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


export function apigwApiV2BackendParamsToHclTerraform(struct?: ApigwApiV2BackendParams | cdktf.IResolvable): any {
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

export class ApigwApiV2BackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2BackendParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigwApiV2BackendParams | cdktf.IResolvable | undefined) {
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

export class ApigwApiV2BackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2BackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2BackendParamsOutputReference {
    return new ApigwApiV2BackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2FuncGraph {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}
  */
  readonly functionUrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#version ApigwApiV2#version}
  */
  readonly version?: string;
}

export function apigwApiV2FuncGraphToTerraform(struct?: ApigwApiV2FuncGraphOutputReference | ApigwApiV2FuncGraph): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    description: cdktf.stringToTerraform(struct!.description),
    function_urn: cdktf.stringToTerraform(struct!.functionUrn),
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function apigwApiV2FuncGraphToHclTerraform(struct?: ApigwApiV2FuncGraphOutputReference | ApigwApiV2FuncGraph): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class ApigwApiV2FuncGraphOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigwApiV2FuncGraph | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
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

  public set internalValue(value: ApigwApiV2FuncGraph | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerId = undefined;
      this._description = undefined;
      this._functionUrn = undefined;
      this._invocationType = undefined;
      this._networkType = undefined;
      this._timeout = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerId = value.authorizerId;
      this._description = value.description;
      this._functionUrn = value.functionUrn;
      this._invocationType = value.invocationType;
      this._networkType = value.networkType;
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

  // network_type - computed: true, optional: true, required: false
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
export interface ApigwApiV2FuncGraphPolicyBackendParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#location ApigwApiV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#value ApigwApiV2#value}
  */
  readonly value: string;
}

export function apigwApiV2FuncGraphPolicyBackendParamsToTerraform(struct?: ApigwApiV2FuncGraphPolicyBackendParams | cdktf.IResolvable): any {
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


export function apigwApiV2FuncGraphPolicyBackendParamsToHclTerraform(struct?: ApigwApiV2FuncGraphPolicyBackendParams | cdktf.IResolvable): any {
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

export class ApigwApiV2FuncGraphPolicyBackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2FuncGraphPolicyBackendParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigwApiV2FuncGraphPolicyBackendParams | cdktf.IResolvable | undefined) {
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

export class ApigwApiV2FuncGraphPolicyBackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2FuncGraphPolicyBackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2FuncGraphPolicyBackendParamsOutputReference {
    return new ApigwApiV2FuncGraphPolicyBackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2FuncGraphPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}
  */
  readonly paramName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#value ApigwApiV2#value}
  */
  readonly value: string;
}

export function apigwApiV2FuncGraphPolicyConditionsToTerraform(struct?: ApigwApiV2FuncGraphPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: cdktf.stringToTerraform(struct!.origin),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apigwApiV2FuncGraphPolicyConditionsToHclTerraform(struct?: ApigwApiV2FuncGraphPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class ApigwApiV2FuncGraphPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2FuncGraphPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
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

  public set internalValue(value: ApigwApiV2FuncGraphPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origin = undefined;
      this._paramName = undefined;
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
      this._origin = value.origin;
      this._paramName = value.paramName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class ApigwApiV2FuncGraphPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2FuncGraphPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2FuncGraphPolicyConditionsOutputReference {
    return new ApigwApiV2FuncGraphPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2FuncGraphPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}
  */
  readonly effectiveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#function_urn ApigwApiV2#function_urn}
  */
  readonly functionUrn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#invocation_type ApigwApiV2#invocation_type}
  */
  readonly invocationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#network_type ApigwApiV2#network_type}
  */
  readonly networkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#version ApigwApiV2#version}
  */
  readonly version?: string;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}
  */
  readonly backendParams?: ApigwApiV2FuncGraphPolicyBackendParams[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}
  */
  readonly conditions: ApigwApiV2FuncGraphPolicyConditions[] | cdktf.IResolvable;
}

export function apigwApiV2FuncGraphPolicyToTerraform(struct?: ApigwApiV2FuncGraphPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    effective_mode: cdktf.stringToTerraform(struct!.effectiveMode),
    function_urn: cdktf.stringToTerraform(struct!.functionUrn),
    invocation_type: cdktf.stringToTerraform(struct!.invocationType),
    name: cdktf.stringToTerraform(struct!.name),
    network_type: cdktf.stringToTerraform(struct!.networkType),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    version: cdktf.stringToTerraform(struct!.version),
    backend_params: cdktf.listMapper(apigwApiV2FuncGraphPolicyBackendParamsToTerraform, true)(struct!.backendParams),
    conditions: cdktf.listMapper(apigwApiV2FuncGraphPolicyConditionsToTerraform, true)(struct!.conditions),
  }
}


export function apigwApiV2FuncGraphPolicyToHclTerraform(struct?: ApigwApiV2FuncGraphPolicy | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(apigwApiV2FuncGraphPolicyBackendParamsToHclTerraform, true)(struct!.backendParams),
      isBlock: true,
      type: "set",
      storageClassType: "ApigwApiV2FuncGraphPolicyBackendParamsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(apigwApiV2FuncGraphPolicyConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ApigwApiV2FuncGraphPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigwApiV2FuncGraphPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2FuncGraphPolicy | cdktf.IResolvable | undefined {
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
    if (this._functionUrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionUrn = this._functionUrn;
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

  public set internalValue(value: ApigwApiV2FuncGraphPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerId = undefined;
      this._effectiveMode = undefined;
      this._functionUrn = undefined;
      this._invocationType = undefined;
      this._name = undefined;
      this._networkType = undefined;
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
      this._functionUrn = value.functionUrn;
      this._invocationType = value.invocationType;
      this._name = value.name;
      this._networkType = value.networkType;
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
  private _backendParams = new ApigwApiV2FuncGraphPolicyBackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApigwApiV2FuncGraphPolicyBackendParams[] | cdktf.IResolvable) {
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
  private _conditions = new ApigwApiV2FuncGraphPolicyConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ApigwApiV2FuncGraphPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ApigwApiV2FuncGraphPolicyList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2FuncGraphPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2FuncGraphPolicyOutputReference {
    return new ApigwApiV2FuncGraphPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2Http {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}
  */
  readonly requestMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}
  */
  readonly requestProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}
  */
  readonly requestUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#ssl_enable ApigwApiV2#ssl_enable}
  */
  readonly sslEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}
  */
  readonly urlDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#version ApigwApiV2#version}
  */
  readonly version?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}
  */
  readonly vpcChannelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}
  */
  readonly vpcChannelProxyHost?: string;
}

export function apigwApiV2HttpToTerraform(struct?: ApigwApiV2HttpOutputReference | ApigwApiV2Http): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    description: cdktf.stringToTerraform(struct!.description),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    request_protocol: cdktf.stringToTerraform(struct!.requestProtocol),
    request_uri: cdktf.stringToTerraform(struct!.requestUri),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    ssl_enable: cdktf.booleanToTerraform(struct!.sslEnable),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url_domain: cdktf.stringToTerraform(struct!.urlDomain),
    version: cdktf.stringToTerraform(struct!.version),
    vpc_channel_id: cdktf.stringToTerraform(struct!.vpcChannelId),
    vpc_channel_proxy_host: cdktf.stringToTerraform(struct!.vpcChannelProxyHost),
  }
}


export function apigwApiV2HttpToHclTerraform(struct?: ApigwApiV2HttpOutputReference | ApigwApiV2Http): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    request_uri: {
      value: cdktf.stringToHclTerraform(struct!.requestUri),
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
    url_domain: {
      value: cdktf.stringToHclTerraform(struct!.urlDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_channel_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_channel_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.vpcChannelProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigwApiV2HttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigwApiV2Http | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProtocol = this._requestProtocol;
    }
    if (this._requestUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri;
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
    if (this._urlDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlDomain = this._urlDomain;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._vpcChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcChannelId = this._vpcChannelId;
    }
    if (this._vpcChannelProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcChannelProxyHost = this._vpcChannelProxyHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigwApiV2Http | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerId = undefined;
      this._description = undefined;
      this._requestMethod = undefined;
      this._requestProtocol = undefined;
      this._requestUri = undefined;
      this._retryCount = undefined;
      this._sslEnable = undefined;
      this._timeout = undefined;
      this._urlDomain = undefined;
      this._version = undefined;
      this._vpcChannelId = undefined;
      this._vpcChannelProxyHost = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerId = value.authorizerId;
      this._description = value.description;
      this._requestMethod = value.requestMethod;
      this._requestProtocol = value.requestProtocol;
      this._requestUri = value.requestUri;
      this._retryCount = value.retryCount;
      this._sslEnable = value.sslEnable;
      this._timeout = value.timeout;
      this._urlDomain = value.urlDomain;
      this._version = value.version;
      this._vpcChannelId = value.vpcChannelId;
      this._vpcChannelProxyHost = value.vpcChannelProxyHost;
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

  // request_uri - computed: false, optional: false, required: true
  private _requestUri?: string; 
  public get requestUri() {
    return this.getStringAttribute('request_uri');
  }
  public set requestUri(value: string) {
    this._requestUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri;
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

  // url_domain - computed: false, optional: true, required: false
  private _urlDomain?: string; 
  public get urlDomain() {
    return this.getStringAttribute('url_domain');
  }
  public set urlDomain(value: string) {
    this._urlDomain = value;
  }
  public resetUrlDomain() {
    this._urlDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlDomainInput() {
    return this._urlDomain;
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

  // vpc_channel_proxy_host - computed: false, optional: true, required: false
  private _vpcChannelProxyHost?: string; 
  public get vpcChannelProxyHost() {
    return this.getStringAttribute('vpc_channel_proxy_host');
  }
  public set vpcChannelProxyHost(value: string) {
    this._vpcChannelProxyHost = value;
  }
  public resetVpcChannelProxyHost() {
    this._vpcChannelProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcChannelProxyHostInput() {
    return this._vpcChannelProxyHost;
  }
}
export interface ApigwApiV2HttpPolicyBackendParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#location ApigwApiV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#value ApigwApiV2#value}
  */
  readonly value: string;
}

export function apigwApiV2HttpPolicyBackendParamsToTerraform(struct?: ApigwApiV2HttpPolicyBackendParams | cdktf.IResolvable): any {
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


export function apigwApiV2HttpPolicyBackendParamsToHclTerraform(struct?: ApigwApiV2HttpPolicyBackendParams | cdktf.IResolvable): any {
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

export class ApigwApiV2HttpPolicyBackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2HttpPolicyBackendParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigwApiV2HttpPolicyBackendParams | cdktf.IResolvable | undefined) {
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

export class ApigwApiV2HttpPolicyBackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2HttpPolicyBackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2HttpPolicyBackendParamsOutputReference {
    return new ApigwApiV2HttpPolicyBackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2HttpPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}
  */
  readonly paramName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#value ApigwApiV2#value}
  */
  readonly value: string;
}

export function apigwApiV2HttpPolicyConditionsToTerraform(struct?: ApigwApiV2HttpPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: cdktf.stringToTerraform(struct!.origin),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apigwApiV2HttpPolicyConditionsToHclTerraform(struct?: ApigwApiV2HttpPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class ApigwApiV2HttpPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2HttpPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
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

  public set internalValue(value: ApigwApiV2HttpPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origin = undefined;
      this._paramName = undefined;
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
      this._origin = value.origin;
      this._paramName = value.paramName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class ApigwApiV2HttpPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2HttpPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2HttpPolicyConditionsOutputReference {
    return new ApigwApiV2HttpPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2HttpPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}
  */
  readonly effectiveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_method ApigwApiV2#request_method}
  */
  readonly requestMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_protocol ApigwApiV2#request_protocol}
  */
  readonly requestProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#request_uri ApigwApiV2#request_uri}
  */
  readonly requestUri: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#retry_count ApigwApiV2#retry_count}
  */
  readonly retryCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#timeout ApigwApiV2#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#url_domain ApigwApiV2#url_domain}
  */
  readonly urlDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#vpc_channel_id ApigwApiV2#vpc_channel_id}
  */
  readonly vpcChannelId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#vpc_channel_proxy_host ApigwApiV2#vpc_channel_proxy_host}
  */
  readonly vpcChannelProxyHost?: string;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}
  */
  readonly backendParams?: ApigwApiV2HttpPolicyBackendParams[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}
  */
  readonly conditions: ApigwApiV2HttpPolicyConditions[] | cdktf.IResolvable;
}

export function apigwApiV2HttpPolicyToTerraform(struct?: ApigwApiV2HttpPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    effective_mode: cdktf.stringToTerraform(struct!.effectiveMode),
    name: cdktf.stringToTerraform(struct!.name),
    request_method: cdktf.stringToTerraform(struct!.requestMethod),
    request_protocol: cdktf.stringToTerraform(struct!.requestProtocol),
    request_uri: cdktf.stringToTerraform(struct!.requestUri),
    retry_count: cdktf.numberToTerraform(struct!.retryCount),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url_domain: cdktf.stringToTerraform(struct!.urlDomain),
    vpc_channel_id: cdktf.stringToTerraform(struct!.vpcChannelId),
    vpc_channel_proxy_host: cdktf.stringToTerraform(struct!.vpcChannelProxyHost),
    backend_params: cdktf.listMapper(apigwApiV2HttpPolicyBackendParamsToTerraform, true)(struct!.backendParams),
    conditions: cdktf.listMapper(apigwApiV2HttpPolicyConditionsToTerraform, true)(struct!.conditions),
  }
}


export function apigwApiV2HttpPolicyToHclTerraform(struct?: ApigwApiV2HttpPolicy | cdktf.IResolvable): any {
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
    request_uri: {
      value: cdktf.stringToHclTerraform(struct!.requestUri),
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
    url_domain: {
      value: cdktf.stringToHclTerraform(struct!.urlDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_channel_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcChannelId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_channel_proxy_host: {
      value: cdktf.stringToHclTerraform(struct!.vpcChannelProxyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backend_params: {
      value: cdktf.listMapperHcl(apigwApiV2HttpPolicyBackendParamsToHclTerraform, true)(struct!.backendParams),
      isBlock: true,
      type: "set",
      storageClassType: "ApigwApiV2HttpPolicyBackendParamsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(apigwApiV2HttpPolicyConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ApigwApiV2HttpPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigwApiV2HttpPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2HttpPolicy | cdktf.IResolvable | undefined {
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
    if (this._requestMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethod = this._requestMethod;
    }
    if (this._requestProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestProtocol = this._requestProtocol;
    }
    if (this._requestUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUri = this._requestUri;
    }
    if (this._retryCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryCount = this._retryCount;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._urlDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlDomain = this._urlDomain;
    }
    if (this._vpcChannelId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcChannelId = this._vpcChannelId;
    }
    if (this._vpcChannelProxyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcChannelProxyHost = this._vpcChannelProxyHost;
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

  public set internalValue(value: ApigwApiV2HttpPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerId = undefined;
      this._effectiveMode = undefined;
      this._name = undefined;
      this._requestMethod = undefined;
      this._requestProtocol = undefined;
      this._requestUri = undefined;
      this._retryCount = undefined;
      this._timeout = undefined;
      this._urlDomain = undefined;
      this._vpcChannelId = undefined;
      this._vpcChannelProxyHost = undefined;
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
      this._requestMethod = value.requestMethod;
      this._requestProtocol = value.requestProtocol;
      this._requestUri = value.requestUri;
      this._retryCount = value.retryCount;
      this._timeout = value.timeout;
      this._urlDomain = value.urlDomain;
      this._vpcChannelId = value.vpcChannelId;
      this._vpcChannelProxyHost = value.vpcChannelProxyHost;
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

  // request_uri - computed: false, optional: false, required: true
  private _requestUri?: string; 
  public get requestUri() {
    return this.getStringAttribute('request_uri');
  }
  public set requestUri(value: string) {
    this._requestUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri;
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

  // url_domain - computed: false, optional: true, required: false
  private _urlDomain?: string; 
  public get urlDomain() {
    return this.getStringAttribute('url_domain');
  }
  public set urlDomain(value: string) {
    this._urlDomain = value;
  }
  public resetUrlDomain() {
    this._urlDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlDomainInput() {
    return this._urlDomain;
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

  // vpc_channel_proxy_host - computed: false, optional: true, required: false
  private _vpcChannelProxyHost?: string; 
  public get vpcChannelProxyHost() {
    return this.getStringAttribute('vpc_channel_proxy_host');
  }
  public set vpcChannelProxyHost(value: string) {
    this._vpcChannelProxyHost = value;
  }
  public resetVpcChannelProxyHost() {
    this._vpcChannelProxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcChannelProxyHostInput() {
    return this._vpcChannelProxyHost;
  }

  // backend_params - computed: false, optional: true, required: false
  private _backendParams = new ApigwApiV2HttpPolicyBackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApigwApiV2HttpPolicyBackendParams[] | cdktf.IResolvable) {
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
  private _conditions = new ApigwApiV2HttpPolicyConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ApigwApiV2HttpPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ApigwApiV2HttpPolicyList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2HttpPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2HttpPolicyOutputReference {
    return new ApigwApiV2HttpPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2Mock {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#response ApigwApiV2#response}
  */
  readonly response?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#version ApigwApiV2#version}
  */
  readonly version?: string;
}

export function apigwApiV2MockToTerraform(struct?: ApigwApiV2MockOutputReference | ApigwApiV2Mock): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    description: cdktf.stringToTerraform(struct!.description),
    response: cdktf.stringToTerraform(struct!.response),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function apigwApiV2MockToHclTerraform(struct?: ApigwApiV2MockOutputReference | ApigwApiV2Mock): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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

export class ApigwApiV2MockOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigwApiV2Mock | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizerId = this._authorizerId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._response !== undefined) {
      hasAnyValues = true;
      internalValueResult.response = this._response;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigwApiV2Mock | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizerId = undefined;
      this._description = undefined;
      this._response = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizerId = value.authorizerId;
      this._description = value.description;
      this._response = value.response;
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
export interface ApigwApiV2MockPolicyBackendParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#location ApigwApiV2#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#system_param_type ApigwApiV2#system_param_type}
  */
  readonly systemParamType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#value ApigwApiV2#value}
  */
  readonly value: string;
}

export function apigwApiV2MockPolicyBackendParamsToTerraform(struct?: ApigwApiV2MockPolicyBackendParams | cdktf.IResolvable): any {
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


export function apigwApiV2MockPolicyBackendParamsToHclTerraform(struct?: ApigwApiV2MockPolicyBackendParams | cdktf.IResolvable): any {
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

export class ApigwApiV2MockPolicyBackendParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2MockPolicyBackendParams | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigwApiV2MockPolicyBackendParams | cdktf.IResolvable | undefined) {
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

export class ApigwApiV2MockPolicyBackendParamsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2MockPolicyBackendParams[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2MockPolicyBackendParamsOutputReference {
    return new ApigwApiV2MockPolicyBackendParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2MockPolicyConditions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#origin ApigwApiV2#origin}
  */
  readonly origin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#param_name ApigwApiV2#param_name}
  */
  readonly paramName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#value ApigwApiV2#value}
  */
  readonly value: string;
}

export function apigwApiV2MockPolicyConditionsToTerraform(struct?: ApigwApiV2MockPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    origin: cdktf.stringToTerraform(struct!.origin),
    param_name: cdktf.stringToTerraform(struct!.paramName),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apigwApiV2MockPolicyConditionsToHclTerraform(struct?: ApigwApiV2MockPolicyConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    origin: {
      value: cdktf.stringToHclTerraform(struct!.origin),
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

export class ApigwApiV2MockPolicyConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2MockPolicyConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._origin !== undefined) {
      hasAnyValues = true;
      internalValueResult.origin = this._origin;
    }
    if (this._paramName !== undefined) {
      hasAnyValues = true;
      internalValueResult.paramName = this._paramName;
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

  public set internalValue(value: ApigwApiV2MockPolicyConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._origin = undefined;
      this._paramName = undefined;
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
      this._origin = value.origin;
      this._paramName = value.paramName;
      this._type = value.type;
      this._value = value.value;
    }
  }

  // origin - computed: false, optional: true, required: false
  private _origin?: string; 
  public get origin() {
    return this.getStringAttribute('origin');
  }
  public set origin(value: string) {
    this._origin = value;
  }
  public resetOrigin() {
    this._origin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInput() {
    return this._origin;
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

export class ApigwApiV2MockPolicyConditionsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2MockPolicyConditions[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2MockPolicyConditionsOutputReference {
    return new ApigwApiV2MockPolicyConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2MockPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#authorizer_id ApigwApiV2#authorizer_id}
  */
  readonly authorizerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#effective_mode ApigwApiV2#effective_mode}
  */
  readonly effectiveMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#response ApigwApiV2#response}
  */
  readonly response?: string;
  /**
  * backend_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#backend_params ApigwApiV2#backend_params}
  */
  readonly backendParams?: ApigwApiV2MockPolicyBackendParams[] | cdktf.IResolvable;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#conditions ApigwApiV2#conditions}
  */
  readonly conditions: ApigwApiV2MockPolicyConditions[] | cdktf.IResolvable;
}

export function apigwApiV2MockPolicyToTerraform(struct?: ApigwApiV2MockPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorizer_id: cdktf.stringToTerraform(struct!.authorizerId),
    effective_mode: cdktf.stringToTerraform(struct!.effectiveMode),
    name: cdktf.stringToTerraform(struct!.name),
    response: cdktf.stringToTerraform(struct!.response),
    backend_params: cdktf.listMapper(apigwApiV2MockPolicyBackendParamsToTerraform, true)(struct!.backendParams),
    conditions: cdktf.listMapper(apigwApiV2MockPolicyConditionsToTerraform, true)(struct!.conditions),
  }
}


export function apigwApiV2MockPolicyToHclTerraform(struct?: ApigwApiV2MockPolicy | cdktf.IResolvable): any {
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
    backend_params: {
      value: cdktf.listMapperHcl(apigwApiV2MockPolicyBackendParamsToHclTerraform, true)(struct!.backendParams),
      isBlock: true,
      type: "set",
      storageClassType: "ApigwApiV2MockPolicyBackendParamsList",
    },
    conditions: {
      value: cdktf.listMapperHcl(apigwApiV2MockPolicyConditionsToHclTerraform, true)(struct!.conditions),
      isBlock: true,
      type: "set",
      storageClassType: "ApigwApiV2MockPolicyConditionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigwApiV2MockPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2MockPolicy | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigwApiV2MockPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authorizerId = undefined;
      this._effectiveMode = undefined;
      this._name = undefined;
      this._response = undefined;
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

  // backend_params - computed: false, optional: true, required: false
  private _backendParams = new ApigwApiV2MockPolicyBackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApigwApiV2MockPolicyBackendParams[] | cdktf.IResolvable) {
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
  private _conditions = new ApigwApiV2MockPolicyConditionsList(this, "conditions", true);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ApigwApiV2MockPolicyConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}

export class ApigwApiV2MockPolicyList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2MockPolicy[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2MockPolicyOutputReference {
    return new ApigwApiV2MockPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigwApiV2RequestParams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#default ApigwApiV2#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#description ApigwApiV2#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#enumeration ApigwApiV2#enumeration}
  */
  readonly enumeration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#location ApigwApiV2#location}
  */
  readonly location?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#maximum ApigwApiV2#maximum}
  */
  readonly maximum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#minimum ApigwApiV2#minimum}
  */
  readonly minimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#name ApigwApiV2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#passthrough ApigwApiV2#passthrough}
  */
  readonly passthrough?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#required ApigwApiV2#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#sample ApigwApiV2#sample}
  */
  readonly sample?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#type ApigwApiV2#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#validity_check ApigwApiV2#validity_check}
  */
  readonly validityCheck?: boolean | cdktf.IResolvable;
}

export function apigwApiV2RequestParamsToTerraform(struct?: ApigwApiV2RequestParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
    description: cdktf.stringToTerraform(struct!.description),
    enumeration: cdktf.stringToTerraform(struct!.enumeration),
    location: cdktf.stringToTerraform(struct!.location),
    maximum: cdktf.numberToTerraform(struct!.maximum),
    minimum: cdktf.numberToTerraform(struct!.minimum),
    name: cdktf.stringToTerraform(struct!.name),
    passthrough: cdktf.booleanToTerraform(struct!.passthrough),
    required: cdktf.booleanToTerraform(struct!.required),
    sample: cdktf.stringToTerraform(struct!.sample),
    type: cdktf.stringToTerraform(struct!.type),
    validity_check: cdktf.booleanToTerraform(struct!.validityCheck),
  }
}


export function apigwApiV2RequestParamsToHclTerraform(struct?: ApigwApiV2RequestParams | cdktf.IResolvable): any {
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
    sample: {
      value: cdktf.stringToHclTerraform(struct!.sample),
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
    validity_check: {
      value: cdktf.booleanToHclTerraform(struct!.validityCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigwApiV2RequestParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigwApiV2RequestParams | cdktf.IResolvable | undefined {
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
    if (this._passthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.passthrough = this._passthrough;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._sample !== undefined) {
      hasAnyValues = true;
      internalValueResult.sample = this._sample;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._validityCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.validityCheck = this._validityCheck;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigwApiV2RequestParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
      this._description = undefined;
      this._enumeration = undefined;
      this._location = undefined;
      this._maximum = undefined;
      this._minimum = undefined;
      this._name = undefined;
      this._passthrough = undefined;
      this._required = undefined;
      this._sample = undefined;
      this._type = undefined;
      this._validityCheck = undefined;
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
      this._location = value.location;
      this._maximum = value.maximum;
      this._minimum = value.minimum;
      this._name = value.name;
      this._passthrough = value.passthrough;
      this._required = value.required;
      this._sample = value.sample;
      this._type = value.type;
      this._validityCheck = value.validityCheck;
    }
  }

  // default - computed: false, optional: true, required: false
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

  // maximum - computed: false, optional: true, required: false
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

  // minimum - computed: false, optional: true, required: false
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

  // passthrough - computed: false, optional: true, required: false
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

  // required - computed: false, optional: true, required: false
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

  // sample - computed: false, optional: true, required: false
  private _sample?: string; 
  public get sample() {
    return this.getStringAttribute('sample');
  }
  public set sample(value: string) {
    this._sample = value;
  }
  public resetSample() {
    this._sample = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleInput() {
    return this._sample;
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

  // validity_check - computed: false, optional: true, required: false
  private _validityCheck?: boolean | cdktf.IResolvable; 
  public get validityCheck() {
    return this.getBooleanAttribute('validity_check');
  }
  public set validityCheck(value: boolean | cdktf.IResolvable) {
    this._validityCheck = value;
  }
  public resetValidityCheck() {
    this._validityCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validityCheckInput() {
    return this._validityCheck;
  }
}

export class ApigwApiV2RequestParamsList extends cdktf.ComplexList {
  public internalValue? : ApigwApiV2RequestParams[] | cdktf.IResolvable

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
  public get(index: number): ApigwApiV2RequestParamsOutputReference {
    return new ApigwApiV2RequestParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2 opentelekomcloud_apigw_api_v2}
*/
export class ApigwApiV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_apigw_api_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigwApiV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigwApiV2 to import
  * @param importFromId The id of the existing ApigwApiV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigwApiV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_apigw_api_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.55/docs/resources/apigw_api_v2 opentelekomcloud_apigw_api_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigwApiV2Config
  */
  public constructor(scope: Construct, id: string, config: ApigwApiV2Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_apigw_api_v2',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.55',
        providerVersionConstraint: '1.36.55'
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
    this._cors = config.cors;
    this._description = config.description;
    this._failureResponse = config.failureResponse;
    this._gatewayId = config.gatewayId;
    this._groupId = config.groupId;
    this._id = config.id;
    this._matchMode = config.matchMode;
    this._name = config.name;
    this._region = config.region;
    this._requestMethod = config.requestMethod;
    this._requestProtocol = config.requestProtocol;
    this._requestUri = config.requestUri;
    this._responseId = config.responseId;
    this._securityAuthenticationEnabled = config.securityAuthenticationEnabled;
    this._securityAuthenticationType = config.securityAuthenticationType;
    this._successResponse = config.successResponse;
    this._tags = config.tags;
    this._type = config.type;
    this._version = config.version;
    this._backendParams.internalValue = config.backendParams;
    this._funcGraph.internalValue = config.funcGraph;
    this._funcGraphPolicy.internalValue = config.funcGraphPolicy;
    this._http.internalValue = config.http;
    this._httpPolicy.internalValue = config.httpPolicy;
    this._mock.internalValue = config.mock;
    this._mockPolicy.internalValue = config.mockPolicy;
    this._requestParams.internalValue = config.requestParams;
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

  // gateway_id - computed: false, optional: false, required: true
  private _gatewayId?: string; 
  public get gatewayId() {
    return this.getStringAttribute('gateway_id');
  }
  public set gatewayId(value: string) {
    this._gatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIdInput() {
    return this._gatewayId;
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

  // match_mode - computed: false, optional: true, required: false
  private _matchMode?: string; 
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  public resetMatchMode() {
    this._matchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode;
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

  // request_uri - computed: false, optional: false, required: true
  private _requestUri?: string; 
  public get requestUri() {
    return this.getStringAttribute('request_uri');
  }
  public set requestUri(value: string) {
    this._requestUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUriInput() {
    return this._requestUri;
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

  // security_authentication_enabled - computed: true, optional: true, required: false
  private _securityAuthenticationEnabled?: boolean | cdktf.IResolvable; 
  public get securityAuthenticationEnabled() {
    return this.getBooleanAttribute('security_authentication_enabled');
  }
  public set securityAuthenticationEnabled(value: boolean | cdktf.IResolvable) {
    this._securityAuthenticationEnabled = value;
  }
  public resetSecurityAuthenticationEnabled() {
    this._securityAuthenticationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAuthenticationEnabledInput() {
    return this._securityAuthenticationEnabled;
  }

  // security_authentication_type - computed: false, optional: true, required: false
  private _securityAuthenticationType?: string; 
  public get securityAuthenticationType() {
    return this.getStringAttribute('security_authentication_type');
  }
  public set securityAuthenticationType(value: string) {
    this._securityAuthenticationType = value;
  }
  public resetSecurityAuthenticationType() {
    this._securityAuthenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityAuthenticationTypeInput() {
    return this._securityAuthenticationType;
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
  private _backendParams = new ApigwApiV2BackendParamsList(this, "backend_params", true);
  public get backendParams() {
    return this._backendParams;
  }
  public putBackendParams(value: ApigwApiV2BackendParams[] | cdktf.IResolvable) {
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
  private _funcGraph = new ApigwApiV2FuncGraphOutputReference(this, "func_graph");
  public get funcGraph() {
    return this._funcGraph;
  }
  public putFuncGraph(value: ApigwApiV2FuncGraph) {
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
  private _funcGraphPolicy = new ApigwApiV2FuncGraphPolicyList(this, "func_graph_policy", true);
  public get funcGraphPolicy() {
    return this._funcGraphPolicy;
  }
  public putFuncGraphPolicy(value: ApigwApiV2FuncGraphPolicy[] | cdktf.IResolvable) {
    this._funcGraphPolicy.internalValue = value;
  }
  public resetFuncGraphPolicy() {
    this._funcGraphPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get funcGraphPolicyInput() {
    return this._funcGraphPolicy.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new ApigwApiV2HttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: ApigwApiV2Http) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // http_policy - computed: false, optional: true, required: false
  private _httpPolicy = new ApigwApiV2HttpPolicyList(this, "http_policy", true);
  public get httpPolicy() {
    return this._httpPolicy;
  }
  public putHttpPolicy(value: ApigwApiV2HttpPolicy[] | cdktf.IResolvable) {
    this._httpPolicy.internalValue = value;
  }
  public resetHttpPolicy() {
    this._httpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPolicyInput() {
    return this._httpPolicy.internalValue;
  }

  // mock - computed: false, optional: true, required: false
  private _mock = new ApigwApiV2MockOutputReference(this, "mock");
  public get mock() {
    return this._mock;
  }
  public putMock(value: ApigwApiV2Mock) {
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
  private _mockPolicy = new ApigwApiV2MockPolicyList(this, "mock_policy", true);
  public get mockPolicy() {
    return this._mockPolicy;
  }
  public putMockPolicy(value: ApigwApiV2MockPolicy[] | cdktf.IResolvable) {
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
  private _requestParams = new ApigwApiV2RequestParamsList(this, "request_params", true);
  public get requestParams() {
    return this._requestParams;
  }
  public putRequestParams(value: ApigwApiV2RequestParams[] | cdktf.IResolvable) {
    this._requestParams.internalValue = value;
  }
  public resetRequestParams() {
    this._requestParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParamsInput() {
    return this._requestParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorizer_id: cdktf.stringToTerraform(this._authorizerId),
      body_description: cdktf.stringToTerraform(this._bodyDescription),
      cors: cdktf.booleanToTerraform(this._cors),
      description: cdktf.stringToTerraform(this._description),
      failure_response: cdktf.stringToTerraform(this._failureResponse),
      gateway_id: cdktf.stringToTerraform(this._gatewayId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      match_mode: cdktf.stringToTerraform(this._matchMode),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      request_method: cdktf.stringToTerraform(this._requestMethod),
      request_protocol: cdktf.stringToTerraform(this._requestProtocol),
      request_uri: cdktf.stringToTerraform(this._requestUri),
      response_id: cdktf.stringToTerraform(this._responseId),
      security_authentication_enabled: cdktf.booleanToTerraform(this._securityAuthenticationEnabled),
      security_authentication_type: cdktf.stringToTerraform(this._securityAuthenticationType),
      success_response: cdktf.stringToTerraform(this._successResponse),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      version: cdktf.stringToTerraform(this._version),
      backend_params: cdktf.listMapper(apigwApiV2BackendParamsToTerraform, true)(this._backendParams.internalValue),
      func_graph: apigwApiV2FuncGraphToTerraform(this._funcGraph.internalValue),
      func_graph_policy: cdktf.listMapper(apigwApiV2FuncGraphPolicyToTerraform, true)(this._funcGraphPolicy.internalValue),
      http: apigwApiV2HttpToTerraform(this._http.internalValue),
      http_policy: cdktf.listMapper(apigwApiV2HttpPolicyToTerraform, true)(this._httpPolicy.internalValue),
      mock: apigwApiV2MockToTerraform(this._mock.internalValue),
      mock_policy: cdktf.listMapper(apigwApiV2MockPolicyToTerraform, true)(this._mockPolicy.internalValue),
      request_params: cdktf.listMapper(apigwApiV2RequestParamsToTerraform, true)(this._requestParams.internalValue),
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
      gateway_id: {
        value: cdktf.stringToHclTerraform(this._gatewayId),
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
      match_mode: {
        value: cdktf.stringToHclTerraform(this._matchMode),
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
      request_protocol: {
        value: cdktf.stringToHclTerraform(this._requestProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_uri: {
        value: cdktf.stringToHclTerraform(this._requestUri),
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
      security_authentication_enabled: {
        value: cdktf.booleanToHclTerraform(this._securityAuthenticationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_authentication_type: {
        value: cdktf.stringToHclTerraform(this._securityAuthenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backend_params: {
        value: cdktf.listMapperHcl(apigwApiV2BackendParamsToHclTerraform, true)(this._backendParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApigwApiV2BackendParamsList",
      },
      func_graph: {
        value: apigwApiV2FuncGraphToHclTerraform(this._funcGraph.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigwApiV2FuncGraphList",
      },
      func_graph_policy: {
        value: cdktf.listMapperHcl(apigwApiV2FuncGraphPolicyToHclTerraform, true)(this._funcGraphPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApigwApiV2FuncGraphPolicyList",
      },
      http: {
        value: apigwApiV2HttpToHclTerraform(this._http.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigwApiV2HttpList",
      },
      http_policy: {
        value: cdktf.listMapperHcl(apigwApiV2HttpPolicyToHclTerraform, true)(this._httpPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApigwApiV2HttpPolicyList",
      },
      mock: {
        value: apigwApiV2MockToHclTerraform(this._mock.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigwApiV2MockList",
      },
      mock_policy: {
        value: cdktf.listMapperHcl(apigwApiV2MockPolicyToHclTerraform, true)(this._mockPolicy.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApigwApiV2MockPolicyList",
      },
      request_params: {
        value: cdktf.listMapperHcl(apigwApiV2RequestParamsToHclTerraform, true)(this._requestParams.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApigwApiV2RequestParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
