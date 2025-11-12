// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#auth_type ApiGatewayApi#auth_type}
  */
  readonly authType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#force_nonce_check ApiGatewayApi#force_nonce_check}
  */
  readonly forceNonceCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#group_id ApiGatewayApi#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#id ApiGatewayApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#service_type ApiGatewayApi#service_type}
  */
  readonly serviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#stage_names ApiGatewayApi#stage_names}
  */
  readonly stageNames?: string[];
  /**
  * constant_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#constant_parameters ApiGatewayApi#constant_parameters}
  */
  readonly constantParameters?: ApiGatewayApiConstantParameters[] | cdktf.IResolvable;
  /**
  * fc_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#fc_service_config ApiGatewayApi#fc_service_config}
  */
  readonly fcServiceConfig?: ApiGatewayApiFcServiceConfig;
  /**
  * http_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#http_service_config ApiGatewayApi#http_service_config}
  */
  readonly httpServiceConfig?: ApiGatewayApiHttpServiceConfig;
  /**
  * http_vpc_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#http_vpc_service_config ApiGatewayApi#http_vpc_service_config}
  */
  readonly httpVpcServiceConfig?: ApiGatewayApiHttpVpcServiceConfig;
  /**
  * mock_service_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#mock_service_config ApiGatewayApi#mock_service_config}
  */
  readonly mockServiceConfig?: ApiGatewayApiMockServiceConfig;
  /**
  * request_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#request_config ApiGatewayApi#request_config}
  */
  readonly requestConfig: ApiGatewayApiRequestConfig;
  /**
  * request_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#request_parameters ApiGatewayApi#request_parameters}
  */
  readonly requestParameters?: ApiGatewayApiRequestParameters[] | cdktf.IResolvable;
  /**
  * system_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#system_parameters ApiGatewayApi#system_parameters}
  */
  readonly systemParameters?: ApiGatewayApiSystemParameters[] | cdktf.IResolvable;
}
export interface ApiGatewayApiConstantParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#in ApiGatewayApi#in}
  */
  readonly in: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#value ApiGatewayApi#value}
  */
  readonly value: string;
}

export function apiGatewayApiConstantParametersToTerraform(struct?: ApiGatewayApiConstantParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    in: cdktf.stringToTerraform(struct!.in),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function apiGatewayApiConstantParametersToHclTerraform(struct?: ApiGatewayApiConstantParameters | cdktf.IResolvable): any {
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
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
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

export class ApiGatewayApiConstantParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiConstantParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiConstantParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._in = undefined;
      this._name = undefined;
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
      this._in = value.in;
      this._name = value.name;
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

  // in - computed: false, optional: false, required: true
  private _in?: string; 
  public get in() {
    return this.getStringAttribute('in');
  }
  public set in(value: string) {
    this._in = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
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

export class ApiGatewayApiConstantParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiConstantParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiConstantParametersOutputReference {
    return new ApiGatewayApiConstantParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiFcServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#arn_role ApiGatewayApi#arn_role}
  */
  readonly arnRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#function_base_url ApiGatewayApi#function_base_url}
  */
  readonly functionBaseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#function_name ApiGatewayApi#function_name}
  */
  readonly functionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#function_type ApiGatewayApi#function_type}
  */
  readonly functionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#function_version ApiGatewayApi#function_version}
  */
  readonly functionVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#method ApiGatewayApi#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#only_business_path ApiGatewayApi#only_business_path}
  */
  readonly onlyBusinessPath?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#path ApiGatewayApi#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#qualifier ApiGatewayApi#qualifier}
  */
  readonly qualifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#region ApiGatewayApi#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#service_name ApiGatewayApi#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#timeout ApiGatewayApi#timeout}
  */
  readonly timeout: number;
}

export function apiGatewayApiFcServiceConfigToTerraform(struct?: ApiGatewayApiFcServiceConfigOutputReference | ApiGatewayApiFcServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arn_role: cdktf.stringToTerraform(struct!.arnRole),
    function_base_url: cdktf.stringToTerraform(struct!.functionBaseUrl),
    function_name: cdktf.stringToTerraform(struct!.functionName),
    function_type: cdktf.stringToTerraform(struct!.functionType),
    function_version: cdktf.stringToTerraform(struct!.functionVersion),
    method: cdktf.stringToTerraform(struct!.method),
    only_business_path: cdktf.booleanToTerraform(struct!.onlyBusinessPath),
    path: cdktf.stringToTerraform(struct!.path),
    qualifier: cdktf.stringToTerraform(struct!.qualifier),
    region: cdktf.stringToTerraform(struct!.region),
    service_name: cdktf.stringToTerraform(struct!.serviceName),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function apiGatewayApiFcServiceConfigToHclTerraform(struct?: ApiGatewayApiFcServiceConfigOutputReference | ApiGatewayApiFcServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arn_role: {
      value: cdktf.stringToHclTerraform(struct!.arnRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_base_url: {
      value: cdktf.stringToHclTerraform(struct!.functionBaseUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_name: {
      value: cdktf.stringToHclTerraform(struct!.functionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_type: {
      value: cdktf.stringToHclTerraform(struct!.functionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    function_version: {
      value: cdktf.stringToHclTerraform(struct!.functionVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    only_business_path: {
      value: cdktf.booleanToHclTerraform(struct!.onlyBusinessPath),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
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
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceName),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiFcServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiFcServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arnRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.arnRole = this._arnRole;
    }
    if (this._functionBaseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionBaseUrl = this._functionBaseUrl;
    }
    if (this._functionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionName = this._functionName;
    }
    if (this._functionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionType = this._functionType;
    }
    if (this._functionVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionVersion = this._functionVersion;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._onlyBusinessPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlyBusinessPath = this._onlyBusinessPath;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._qualifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.qualifier = this._qualifier;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._serviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceName = this._serviceName;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiFcServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arnRole = undefined;
      this._functionBaseUrl = undefined;
      this._functionName = undefined;
      this._functionType = undefined;
      this._functionVersion = undefined;
      this._method = undefined;
      this._onlyBusinessPath = undefined;
      this._path = undefined;
      this._qualifier = undefined;
      this._region = undefined;
      this._serviceName = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arnRole = value.arnRole;
      this._functionBaseUrl = value.functionBaseUrl;
      this._functionName = value.functionName;
      this._functionType = value.functionType;
      this._functionVersion = value.functionVersion;
      this._method = value.method;
      this._onlyBusinessPath = value.onlyBusinessPath;
      this._path = value.path;
      this._qualifier = value.qualifier;
      this._region = value.region;
      this._serviceName = value.serviceName;
      this._timeout = value.timeout;
    }
  }

  // arn_role - computed: false, optional: false, required: true
  private _arnRole?: string; 
  public get arnRole() {
    return this.getStringAttribute('arn_role');
  }
  public set arnRole(value: string) {
    this._arnRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get arnRoleInput() {
    return this._arnRole;
  }

  // function_base_url - computed: false, optional: true, required: false
  private _functionBaseUrl?: string; 
  public get functionBaseUrl() {
    return this.getStringAttribute('function_base_url');
  }
  public set functionBaseUrl(value: string) {
    this._functionBaseUrl = value;
  }
  public resetFunctionBaseUrl() {
    this._functionBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionBaseUrlInput() {
    return this._functionBaseUrl;
  }

  // function_name - computed: false, optional: true, required: false
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

  // function_type - computed: false, optional: true, required: false
  private _functionType?: string; 
  public get functionType() {
    return this.getStringAttribute('function_type');
  }
  public set functionType(value: string) {
    this._functionType = value;
  }
  public resetFunctionType() {
    this._functionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTypeInput() {
    return this._functionType;
  }

  // function_version - computed: false, optional: true, required: false
  private _functionVersion?: string; 
  public get functionVersion() {
    return this.getStringAttribute('function_version');
  }
  public set functionVersion(value: string) {
    this._functionVersion = value;
  }
  public resetFunctionVersion() {
    this._functionVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionVersionInput() {
    return this._functionVersion;
  }

  // method - computed: true, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // only_business_path - computed: false, optional: true, required: false
  private _onlyBusinessPath?: boolean | cdktf.IResolvable; 
  public get onlyBusinessPath() {
    return this.getBooleanAttribute('only_business_path');
  }
  public set onlyBusinessPath(value: boolean | cdktf.IResolvable) {
    this._onlyBusinessPath = value;
  }
  public resetOnlyBusinessPath() {
    this._onlyBusinessPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyBusinessPathInput() {
    return this._onlyBusinessPath;
  }

  // path - computed: false, optional: true, required: false
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

  // qualifier - computed: false, optional: true, required: false
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

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // service_name - computed: false, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ApiGatewayApiHttpServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#address ApiGatewayApi#address}
  */
  readonly address: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#aone_name ApiGatewayApi#aone_name}
  */
  readonly aoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#content_type_category ApiGatewayApi#content_type_category}
  */
  readonly contentTypeCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#content_type_value ApiGatewayApi#content_type_value}
  */
  readonly contentTypeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#method ApiGatewayApi#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#path ApiGatewayApi#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#timeout ApiGatewayApi#timeout}
  */
  readonly timeout: number;
}

export function apiGatewayApiHttpServiceConfigToTerraform(struct?: ApiGatewayApiHttpServiceConfigOutputReference | ApiGatewayApiHttpServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    aone_name: cdktf.stringToTerraform(struct!.aoneName),
    content_type_category: cdktf.stringToTerraform(struct!.contentTypeCategory),
    content_type_value: cdktf.stringToTerraform(struct!.contentTypeValue),
    method: cdktf.stringToTerraform(struct!.method),
    path: cdktf.stringToTerraform(struct!.path),
    timeout: cdktf.numberToTerraform(struct!.timeout),
  }
}


export function apiGatewayApiHttpServiceConfigToHclTerraform(struct?: ApiGatewayApiHttpServiceConfigOutputReference | ApiGatewayApiHttpServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    aone_name: {
      value: cdktf.stringToHclTerraform(struct!.aoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type_category: {
      value: cdktf.stringToHclTerraform(struct!.contentTypeCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type_value: {
      value: cdktf.stringToHclTerraform(struct!.contentTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiHttpServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiHttpServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._aoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aoneName = this._aoneName;
    }
    if (this._contentTypeCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeCategory = this._contentTypeCategory;
    }
    if (this._contentTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeValue = this._contentTypeValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiHttpServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._aoneName = undefined;
      this._contentTypeCategory = undefined;
      this._contentTypeValue = undefined;
      this._method = undefined;
      this._path = undefined;
      this._timeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._aoneName = value.aoneName;
      this._contentTypeCategory = value.contentTypeCategory;
      this._contentTypeValue = value.contentTypeValue;
      this._method = value.method;
      this._path = value.path;
      this._timeout = value.timeout;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // aone_name - computed: false, optional: true, required: false
  private _aoneName?: string; 
  public get aoneName() {
    return this.getStringAttribute('aone_name');
  }
  public set aoneName(value: string) {
    this._aoneName = value;
  }
  public resetAoneName() {
    this._aoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoneNameInput() {
    return this._aoneName;
  }

  // content_type_category - computed: true, optional: true, required: false
  private _contentTypeCategory?: string; 
  public get contentTypeCategory() {
    return this.getStringAttribute('content_type_category');
  }
  public set contentTypeCategory(value: string) {
    this._contentTypeCategory = value;
  }
  public resetContentTypeCategory() {
    this._contentTypeCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeCategoryInput() {
    return this._contentTypeCategory;
  }

  // content_type_value - computed: true, optional: true, required: false
  private _contentTypeValue?: string; 
  public get contentTypeValue() {
    return this.getStringAttribute('content_type_value');
  }
  public set contentTypeValue(value: string) {
    this._contentTypeValue = value;
  }
  public resetContentTypeValue() {
    this._contentTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeValueInput() {
    return this._contentTypeValue;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }
}
export interface ApiGatewayApiHttpVpcServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#aone_name ApiGatewayApi#aone_name}
  */
  readonly aoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#content_type_category ApiGatewayApi#content_type_category}
  */
  readonly contentTypeCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#content_type_value ApiGatewayApi#content_type_value}
  */
  readonly contentTypeValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#method ApiGatewayApi#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#path ApiGatewayApi#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#timeout ApiGatewayApi#timeout}
  */
  readonly timeout: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#vpc_scheme ApiGatewayApi#vpc_scheme}
  */
  readonly vpcScheme?: string;
}

export function apiGatewayApiHttpVpcServiceConfigToTerraform(struct?: ApiGatewayApiHttpVpcServiceConfigOutputReference | ApiGatewayApiHttpVpcServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aone_name: cdktf.stringToTerraform(struct!.aoneName),
    content_type_category: cdktf.stringToTerraform(struct!.contentTypeCategory),
    content_type_value: cdktf.stringToTerraform(struct!.contentTypeValue),
    method: cdktf.stringToTerraform(struct!.method),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    vpc_scheme: cdktf.stringToTerraform(struct!.vpcScheme),
  }
}


export function apiGatewayApiHttpVpcServiceConfigToHclTerraform(struct?: ApiGatewayApiHttpVpcServiceConfigOutputReference | ApiGatewayApiHttpVpcServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aone_name: {
      value: cdktf.stringToHclTerraform(struct!.aoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type_category: {
      value: cdktf.stringToHclTerraform(struct!.contentTypeCategory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_type_value: {
      value: cdktf.stringToHclTerraform(struct!.contentTypeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
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
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vpc_scheme: {
      value: cdktf.stringToHclTerraform(struct!.vpcScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiHttpVpcServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiHttpVpcServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aoneName = this._aoneName;
    }
    if (this._contentTypeCategory !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeCategory = this._contentTypeCategory;
    }
    if (this._contentTypeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypeValue = this._contentTypeValue;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._vpcScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcScheme = this._vpcScheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiHttpVpcServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aoneName = undefined;
      this._contentTypeCategory = undefined;
      this._contentTypeValue = undefined;
      this._method = undefined;
      this._name = undefined;
      this._path = undefined;
      this._timeout = undefined;
      this._vpcScheme = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aoneName = value.aoneName;
      this._contentTypeCategory = value.contentTypeCategory;
      this._contentTypeValue = value.contentTypeValue;
      this._method = value.method;
      this._name = value.name;
      this._path = value.path;
      this._timeout = value.timeout;
      this._vpcScheme = value.vpcScheme;
    }
  }

  // aone_name - computed: false, optional: true, required: false
  private _aoneName?: string; 
  public get aoneName() {
    return this.getStringAttribute('aone_name');
  }
  public set aoneName(value: string) {
    this._aoneName = value;
  }
  public resetAoneName() {
    this._aoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoneNameInput() {
    return this._aoneName;
  }

  // content_type_category - computed: true, optional: true, required: false
  private _contentTypeCategory?: string; 
  public get contentTypeCategory() {
    return this.getStringAttribute('content_type_category');
  }
  public set contentTypeCategory(value: string) {
    this._contentTypeCategory = value;
  }
  public resetContentTypeCategory() {
    this._contentTypeCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeCategoryInput() {
    return this._contentTypeCategory;
  }

  // content_type_value - computed: true, optional: true, required: false
  private _contentTypeValue?: string; 
  public get contentTypeValue() {
    return this.getStringAttribute('content_type_value');
  }
  public set contentTypeValue(value: string) {
    this._contentTypeValue = value;
  }
  public resetContentTypeValue() {
    this._contentTypeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeValueInput() {
    return this._contentTypeValue;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
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

  // timeout - computed: false, optional: false, required: true
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // vpc_scheme - computed: false, optional: true, required: false
  private _vpcScheme?: string; 
  public get vpcScheme() {
    return this.getStringAttribute('vpc_scheme');
  }
  public set vpcScheme(value: string) {
    this._vpcScheme = value;
  }
  public resetVpcScheme() {
    this._vpcScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSchemeInput() {
    return this._vpcScheme;
  }
}
export interface ApiGatewayApiMockServiceConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#aone_name ApiGatewayApi#aone_name}
  */
  readonly aoneName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#result ApiGatewayApi#result}
  */
  readonly result: string;
}

export function apiGatewayApiMockServiceConfigToTerraform(struct?: ApiGatewayApiMockServiceConfigOutputReference | ApiGatewayApiMockServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aone_name: cdktf.stringToTerraform(struct!.aoneName),
    result: cdktf.stringToTerraform(struct!.result),
  }
}


export function apiGatewayApiMockServiceConfigToHclTerraform(struct?: ApiGatewayApiMockServiceConfigOutputReference | ApiGatewayApiMockServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aone_name: {
      value: cdktf.stringToHclTerraform(struct!.aoneName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    result: {
      value: cdktf.stringToHclTerraform(struct!.result),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiMockServiceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiMockServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aoneName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aoneName = this._aoneName;
    }
    if (this._result !== undefined) {
      hasAnyValues = true;
      internalValueResult.result = this._result;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiMockServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aoneName = undefined;
      this._result = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aoneName = value.aoneName;
      this._result = value.result;
    }
  }

  // aone_name - computed: false, optional: true, required: false
  private _aoneName?: string; 
  public get aoneName() {
    return this.getStringAttribute('aone_name');
  }
  public set aoneName(value: string) {
    this._aoneName = value;
  }
  public resetAoneName() {
    this._aoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aoneNameInput() {
    return this._aoneName;
  }

  // result - computed: false, optional: false, required: true
  private _result?: string; 
  public get result() {
    return this.getStringAttribute('result');
  }
  public set result(value: string) {
    this._result = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resultInput() {
    return this._result;
  }
}
export interface ApiGatewayApiRequestConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#body_format ApiGatewayApi#body_format}
  */
  readonly bodyFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#method ApiGatewayApi#method}
  */
  readonly method: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#mode ApiGatewayApi#mode}
  */
  readonly mode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#path ApiGatewayApi#path}
  */
  readonly path: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#protocol ApiGatewayApi#protocol}
  */
  readonly protocol: string;
}

export function apiGatewayApiRequestConfigToTerraform(struct?: ApiGatewayApiRequestConfigOutputReference | ApiGatewayApiRequestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_format: cdktf.stringToTerraform(struct!.bodyFormat),
    method: cdktf.stringToTerraform(struct!.method),
    mode: cdktf.stringToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function apiGatewayApiRequestConfigToHclTerraform(struct?: ApiGatewayApiRequestConfigOutputReference | ApiGatewayApiRequestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_format: {
      value: cdktf.stringToHclTerraform(struct!.bodyFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiRequestConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApiGatewayApiRequestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyFormat = this._bodyFormat;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiRequestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyFormat = undefined;
      this._method = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._protocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyFormat = value.bodyFormat;
      this._method = value.method;
      this._mode = value.mode;
      this._path = value.path;
      this._protocol = value.protocol;
    }
  }

  // body_format - computed: false, optional: true, required: false
  private _bodyFormat?: string; 
  public get bodyFormat() {
    return this.getStringAttribute('body_format');
  }
  public set bodyFormat(value: string) {
    this._bodyFormat = value;
  }
  public resetBodyFormat() {
    this._bodyFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyFormatInput() {
    return this._bodyFormat;
  }

  // method - computed: false, optional: false, required: true
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}
export interface ApiGatewayApiRequestParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#default_value ApiGatewayApi#default_value}
  */
  readonly defaultValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#description ApiGatewayApi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#in ApiGatewayApi#in}
  */
  readonly in: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#in_service ApiGatewayApi#in_service}
  */
  readonly inService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#name_service ApiGatewayApi#name_service}
  */
  readonly nameService: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#required ApiGatewayApi#required}
  */
  readonly required: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#type ApiGatewayApi#type}
  */
  readonly type: string;
}

export function apiGatewayApiRequestParametersToTerraform(struct?: ApiGatewayApiRequestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_value: cdktf.stringToTerraform(struct!.defaultValue),
    description: cdktf.stringToTerraform(struct!.description),
    in: cdktf.stringToTerraform(struct!.in),
    in_service: cdktf.stringToTerraform(struct!.inService),
    name: cdktf.stringToTerraform(struct!.name),
    name_service: cdktf.stringToTerraform(struct!.nameService),
    required: cdktf.stringToTerraform(struct!.required),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apiGatewayApiRequestParametersToHclTerraform(struct?: ApiGatewayApiRequestParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_value: {
      value: cdktf.stringToHclTerraform(struct!.defaultValue),
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
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_service: {
      value: cdktf.stringToHclTerraform(struct!.inService),
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
    name_service: {
      value: cdktf.stringToHclTerraform(struct!.nameService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.stringToHclTerraform(struct!.required),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiRequestParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiRequestParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultValue = this._defaultValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._inService !== undefined) {
      hasAnyValues = true;
      internalValueResult.inService = this._inService;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameService !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameService = this._nameService;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiRequestParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultValue = undefined;
      this._description = undefined;
      this._in = undefined;
      this._inService = undefined;
      this._name = undefined;
      this._nameService = undefined;
      this._required = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultValue = value.defaultValue;
      this._description = value.description;
      this._in = value.in;
      this._inService = value.inService;
      this._name = value.name;
      this._nameService = value.nameService;
      this._required = value.required;
      this._type = value.type;
    }
  }

  // default_value - computed: false, optional: true, required: false
  private _defaultValue?: string; 
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }
  public set defaultValue(value: string) {
    this._defaultValue = value;
  }
  public resetDefaultValue() {
    this._defaultValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultValueInput() {
    return this._defaultValue;
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

  // in - computed: false, optional: false, required: true
  private _in?: string; 
  public get in() {
    return this.getStringAttribute('in');
  }
  public set in(value: string) {
    this._in = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
  }

  // in_service - computed: false, optional: false, required: true
  private _inService?: string; 
  public get inService() {
    return this.getStringAttribute('in_service');
  }
  public set inService(value: string) {
    this._inService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inServiceInput() {
    return this._inService;
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

  // name_service - computed: false, optional: false, required: true
  private _nameService?: string; 
  public get nameService() {
    return this.getStringAttribute('name_service');
  }
  public set nameService(value: string) {
    this._nameService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServiceInput() {
    return this._nameService;
  }

  // required - computed: false, optional: false, required: true
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
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
}

export class ApiGatewayApiRequestParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiRequestParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiRequestParametersOutputReference {
    return new ApiGatewayApiRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayApiSystemParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#in ApiGatewayApi#in}
  */
  readonly in: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#name ApiGatewayApi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#name_service ApiGatewayApi#name_service}
  */
  readonly nameService: string;
}

export function apiGatewayApiSystemParametersToTerraform(struct?: ApiGatewayApiSystemParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    in: cdktf.stringToTerraform(struct!.in),
    name: cdktf.stringToTerraform(struct!.name),
    name_service: cdktf.stringToTerraform(struct!.nameService),
  }
}


export function apiGatewayApiSystemParametersToHclTerraform(struct?: ApiGatewayApiSystemParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    in: {
      value: cdktf.stringToHclTerraform(struct!.in),
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
    name_service: {
      value: cdktf.stringToHclTerraform(struct!.nameService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApiGatewayApiSystemParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiGatewayApiSystemParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._in !== undefined) {
      hasAnyValues = true;
      internalValueResult.in = this._in;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameService !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameService = this._nameService;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayApiSystemParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._in = undefined;
      this._name = undefined;
      this._nameService = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._in = value.in;
      this._name = value.name;
      this._nameService = value.nameService;
    }
  }

  // in - computed: false, optional: false, required: true
  private _in?: string; 
  public get in() {
    return this.getStringAttribute('in');
  }
  public set in(value: string) {
    this._in = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inInput() {
    return this._in;
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

  // name_service - computed: false, optional: false, required: true
  private _nameService?: string; 
  public get nameService() {
    return this.getStringAttribute('name_service');
  }
  public set nameService(value: string) {
    this._nameService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServiceInput() {
    return this._nameService;
  }
}

export class ApiGatewayApiSystemParametersList extends cdktf.ComplexList {
  public internalValue? : ApiGatewayApiSystemParameters[] | cdktf.IResolvable

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
  public get(index: number): ApiGatewayApiSystemParametersOutputReference {
    return new ApiGatewayApiSystemParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api alicloud_api_gateway_api}
*/
export class ApiGatewayApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_api_gateway_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayApi to import
  * @param importFromId The id of the existing ApiGatewayApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_api_gateway_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/api_gateway_api alicloud_api_gateway_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayApiConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_api_gateway_api',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._description = config.description;
    this._forceNonceCheck = config.forceNonceCheck;
    this._groupId = config.groupId;
    this._id = config.id;
    this._name = config.name;
    this._serviceType = config.serviceType;
    this._stageNames = config.stageNames;
    this._constantParameters.internalValue = config.constantParameters;
    this._fcServiceConfig.internalValue = config.fcServiceConfig;
    this._httpServiceConfig.internalValue = config.httpServiceConfig;
    this._httpVpcServiceConfig.internalValue = config.httpVpcServiceConfig;
    this._mockServiceConfig.internalValue = config.mockServiceConfig;
    this._requestConfig.internalValue = config.requestConfig;
    this._requestParameters.internalValue = config.requestParameters;
    this._systemParameters.internalValue = config.systemParameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // force_nonce_check - computed: true, optional: true, required: false
  private _forceNonceCheck?: boolean | cdktf.IResolvable; 
  public get forceNonceCheck() {
    return this.getBooleanAttribute('force_nonce_check');
  }
  public set forceNonceCheck(value: boolean | cdktf.IResolvable) {
    this._forceNonceCheck = value;
  }
  public resetForceNonceCheck() {
    this._forceNonceCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceNonceCheckInput() {
    return this._forceNonceCheck;
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

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // stage_names - computed: false, optional: true, required: false
  private _stageNames?: string[]; 
  public get stageNames() {
    return cdktf.Fn.tolist(this.getListAttribute('stage_names'));
  }
  public set stageNames(value: string[]) {
    this._stageNames = value;
  }
  public resetStageNames() {
    this._stageNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageNamesInput() {
    return this._stageNames;
  }

  // constant_parameters - computed: false, optional: true, required: false
  private _constantParameters = new ApiGatewayApiConstantParametersList(this, "constant_parameters", true);
  public get constantParameters() {
    return this._constantParameters;
  }
  public putConstantParameters(value: ApiGatewayApiConstantParameters[] | cdktf.IResolvable) {
    this._constantParameters.internalValue = value;
  }
  public resetConstantParameters() {
    this._constantParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constantParametersInput() {
    return this._constantParameters.internalValue;
  }

  // fc_service_config - computed: false, optional: true, required: false
  private _fcServiceConfig = new ApiGatewayApiFcServiceConfigOutputReference(this, "fc_service_config");
  public get fcServiceConfig() {
    return this._fcServiceConfig;
  }
  public putFcServiceConfig(value: ApiGatewayApiFcServiceConfig) {
    this._fcServiceConfig.internalValue = value;
  }
  public resetFcServiceConfig() {
    this._fcServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcServiceConfigInput() {
    return this._fcServiceConfig.internalValue;
  }

  // http_service_config - computed: false, optional: true, required: false
  private _httpServiceConfig = new ApiGatewayApiHttpServiceConfigOutputReference(this, "http_service_config");
  public get httpServiceConfig() {
    return this._httpServiceConfig;
  }
  public putHttpServiceConfig(value: ApiGatewayApiHttpServiceConfig) {
    this._httpServiceConfig.internalValue = value;
  }
  public resetHttpServiceConfig() {
    this._httpServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServiceConfigInput() {
    return this._httpServiceConfig.internalValue;
  }

  // http_vpc_service_config - computed: false, optional: true, required: false
  private _httpVpcServiceConfig = new ApiGatewayApiHttpVpcServiceConfigOutputReference(this, "http_vpc_service_config");
  public get httpVpcServiceConfig() {
    return this._httpVpcServiceConfig;
  }
  public putHttpVpcServiceConfig(value: ApiGatewayApiHttpVpcServiceConfig) {
    this._httpVpcServiceConfig.internalValue = value;
  }
  public resetHttpVpcServiceConfig() {
    this._httpVpcServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVpcServiceConfigInput() {
    return this._httpVpcServiceConfig.internalValue;
  }

  // mock_service_config - computed: false, optional: true, required: false
  private _mockServiceConfig = new ApiGatewayApiMockServiceConfigOutputReference(this, "mock_service_config");
  public get mockServiceConfig() {
    return this._mockServiceConfig;
  }
  public putMockServiceConfig(value: ApiGatewayApiMockServiceConfig) {
    this._mockServiceConfig.internalValue = value;
  }
  public resetMockServiceConfig() {
    this._mockServiceConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mockServiceConfigInput() {
    return this._mockServiceConfig.internalValue;
  }

  // request_config - computed: false, optional: false, required: true
  private _requestConfig = new ApiGatewayApiRequestConfigOutputReference(this, "request_config");
  public get requestConfig() {
    return this._requestConfig;
  }
  public putRequestConfig(value: ApiGatewayApiRequestConfig) {
    this._requestConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestConfigInput() {
    return this._requestConfig.internalValue;
  }

  // request_parameters - computed: false, optional: true, required: false
  private _requestParameters = new ApiGatewayApiRequestParametersList(this, "request_parameters", true);
  public get requestParameters() {
    return this._requestParameters;
  }
  public putRequestParameters(value: ApiGatewayApiRequestParameters[] | cdktf.IResolvable) {
    this._requestParameters.internalValue = value;
  }
  public resetRequestParameters() {
    this._requestParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestParametersInput() {
    return this._requestParameters.internalValue;
  }

  // system_parameters - computed: false, optional: true, required: false
  private _systemParameters = new ApiGatewayApiSystemParametersList(this, "system_parameters", true);
  public get systemParameters() {
    return this._systemParameters;
  }
  public putSystemParameters(value: ApiGatewayApiSystemParameters[] | cdktf.IResolvable) {
    this._systemParameters.internalValue = value;
  }
  public resetSystemParameters() {
    this._systemParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemParametersInput() {
    return this._systemParameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      force_nonce_check: cdktf.booleanToTerraform(this._forceNonceCheck),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      service_type: cdktf.stringToTerraform(this._serviceType),
      stage_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._stageNames),
      constant_parameters: cdktf.listMapper(apiGatewayApiConstantParametersToTerraform, true)(this._constantParameters.internalValue),
      fc_service_config: apiGatewayApiFcServiceConfigToTerraform(this._fcServiceConfig.internalValue),
      http_service_config: apiGatewayApiHttpServiceConfigToTerraform(this._httpServiceConfig.internalValue),
      http_vpc_service_config: apiGatewayApiHttpVpcServiceConfigToTerraform(this._httpVpcServiceConfig.internalValue),
      mock_service_config: apiGatewayApiMockServiceConfigToTerraform(this._mockServiceConfig.internalValue),
      request_config: apiGatewayApiRequestConfigToTerraform(this._requestConfig.internalValue),
      request_parameters: cdktf.listMapper(apiGatewayApiRequestParametersToTerraform, true)(this._requestParameters.internalValue),
      system_parameters: cdktf.listMapper(apiGatewayApiSystemParametersToTerraform, true)(this._systemParameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_nonce_check: {
        value: cdktf.booleanToHclTerraform(this._forceNonceCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stage_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._stageNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      constant_parameters: {
        value: cdktf.listMapperHcl(apiGatewayApiConstantParametersToHclTerraform, true)(this._constantParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiConstantParametersList",
      },
      fc_service_config: {
        value: apiGatewayApiFcServiceConfigToHclTerraform(this._fcServiceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiFcServiceConfigList",
      },
      http_service_config: {
        value: apiGatewayApiHttpServiceConfigToHclTerraform(this._httpServiceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiHttpServiceConfigList",
      },
      http_vpc_service_config: {
        value: apiGatewayApiHttpVpcServiceConfigToHclTerraform(this._httpVpcServiceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiHttpVpcServiceConfigList",
      },
      mock_service_config: {
        value: apiGatewayApiMockServiceConfigToHclTerraform(this._mockServiceConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiMockServiceConfigList",
      },
      request_config: {
        value: apiGatewayApiRequestConfigToHclTerraform(this._requestConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApiGatewayApiRequestConfigList",
      },
      request_parameters: {
        value: cdktf.listMapperHcl(apiGatewayApiRequestParametersToHclTerraform, true)(this._requestParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiRequestParametersList",
      },
      system_parameters: {
        value: cdktf.listMapperHcl(apiGatewayApiSystemParametersToHclTerraform, true)(this._systemParameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApiGatewayApiSystemParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
