// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiGatewayImportOpenApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * OpenAPI body content.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api#content ApiGatewayImportOpenApi#content}
  */
  readonly content: string;
  /**
  * The Content version defaults to OpenAPI and currently only supports OpenAPI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api#content_version ApiGatewayImportOpenApi#content_version}
  */
  readonly contentVersion?: string;
  /**
  * The Content format can only be YAML or JSON, and the default is YAML.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api#encode_type ApiGatewayImportOpenApi#encode_type}
  */
  readonly encodeType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api#id ApiGatewayImportOpenApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The unique ID of the service where the API is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api#service_id ApiGatewayImportOpenApi#service_id}
  */
  readonly serviceId: string;
}
export interface ApiGatewayImportOpenApiConstantParameters {
}

export function apiGatewayImportOpenApiConstantParametersToTerraform(struct?: ApiGatewayImportOpenApiConstantParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiConstantParametersToHclTerraform(struct?: ApiGatewayImportOpenApiConstantParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiConstantParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiConstantParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiConstantParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }
}

export class ApiGatewayImportOpenApiConstantParametersList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiConstantParametersOutputReference {
    return new ApiGatewayImportOpenApiConstantParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiMicroServices {
}

export function apiGatewayImportOpenApiMicroServicesToTerraform(struct?: ApiGatewayImportOpenApiMicroServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiMicroServicesToHclTerraform(struct?: ApiGatewayImportOpenApiMicroServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiMicroServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiMicroServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiMicroServices | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cluster_id - computed: true, optional: false, required: false
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }

  // micro_service_name - computed: true, optional: false, required: false
  public get microServiceName() {
    return this.getStringAttribute('micro_service_name');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
}

export class ApiGatewayImportOpenApiMicroServicesList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiMicroServicesOutputReference {
    return new ApiGatewayImportOpenApiMicroServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiOauthConfig {
}

export function apiGatewayImportOpenApiOauthConfigToTerraform(struct?: ApiGatewayImportOpenApiOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiOauthConfigToHclTerraform(struct?: ApiGatewayImportOpenApiOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiOauthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiOauthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // login_redirect_url - computed: true, optional: false, required: false
  public get loginRedirectUrl() {
    return this.getStringAttribute('login_redirect_url');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // token_location - computed: true, optional: false, required: false
  public get tokenLocation() {
    return this.getStringAttribute('token_location');
  }
}

export class ApiGatewayImportOpenApiOauthConfigList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiOauthConfigOutputReference {
    return new ApiGatewayImportOpenApiOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiRequestParameters {
}

export function apiGatewayImportOpenApiRequestParametersToTerraform(struct?: ApiGatewayImportOpenApiRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiRequestParametersToHclTerraform(struct?: ApiGatewayImportOpenApiRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiRequestParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiRequestParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiRequestParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getBooleanAttribute('required');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ApiGatewayImportOpenApiRequestParametersList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiRequestParametersOutputReference {
    return new ApiGatewayImportOpenApiRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiResponseErrorCodes {
}

export function apiGatewayImportOpenApiResponseErrorCodesToTerraform(struct?: ApiGatewayImportOpenApiResponseErrorCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiResponseErrorCodesToHclTerraform(struct?: ApiGatewayImportOpenApiResponseErrorCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiResponseErrorCodesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiResponseErrorCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiResponseErrorCodes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // converted_code - computed: true, optional: false, required: false
  public get convertedCode() {
    return this.getNumberAttribute('converted_code');
  }

  // desc - computed: true, optional: false, required: false
  public get desc() {
    return this.getStringAttribute('desc');
  }

  // msg - computed: true, optional: false, required: false
  public get msg() {
    return this.getStringAttribute('msg');
  }

  // need_convert - computed: true, optional: false, required: false
  public get needConvert() {
    return this.getBooleanAttribute('need_convert');
  }
}

export class ApiGatewayImportOpenApiResponseErrorCodesList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiResponseErrorCodesOutputReference {
    return new ApiGatewayImportOpenApiResponseErrorCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiServiceConfigCosConfig {
}

export function apiGatewayImportOpenApiServiceConfigCosConfigToTerraform(struct?: ApiGatewayImportOpenApiServiceConfigCosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiServiceConfigCosConfigToHclTerraform(struct?: ApiGatewayImportOpenApiServiceConfigCosConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiServiceConfigCosConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiServiceConfigCosConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiServiceConfigCosConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // authorization - computed: true, optional: false, required: false
  public get authorization() {
    return this.getBooleanAttribute('authorization');
  }

  // bucket_name - computed: true, optional: false, required: false
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }

  // path_match_mode - computed: true, optional: false, required: false
  public get pathMatchMode() {
    return this.getStringAttribute('path_match_mode');
  }
}

export class ApiGatewayImportOpenApiServiceConfigCosConfigList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiServiceConfigCosConfigOutputReference {
    return new ApiGatewayImportOpenApiServiceConfigCosConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiServiceParameters {
}

export function apiGatewayImportOpenApiServiceParametersToTerraform(struct?: ApiGatewayImportOpenApiServiceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiServiceParametersToHclTerraform(struct?: ApiGatewayImportOpenApiServiceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiServiceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiServiceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiServiceParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_value - computed: true, optional: false, required: false
  public get defaultValue() {
    return this.getStringAttribute('default_value');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // relevant_request_parameter_desc - computed: true, optional: false, required: false
  public get relevantRequestParameterDesc() {
    return this.getStringAttribute('relevant_request_parameter_desc');
  }

  // relevant_request_parameter_name - computed: true, optional: false, required: false
  public get relevantRequestParameterName() {
    return this.getStringAttribute('relevant_request_parameter_name');
  }

  // relevant_request_parameter_position - computed: true, optional: false, required: false
  public get relevantRequestParameterPosition() {
    return this.getStringAttribute('relevant_request_parameter_position');
  }

  // relevant_request_parameter_type - computed: true, optional: false, required: false
  public get relevantRequestParameterType() {
    return this.getStringAttribute('relevant_request_parameter_type');
  }
}

export class ApiGatewayImportOpenApiServiceParametersList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiServiceParametersOutputReference {
    return new ApiGatewayImportOpenApiServiceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiServiceTsfHealthCheckConf {
}

export function apiGatewayImportOpenApiServiceTsfHealthCheckConfToTerraform(struct?: ApiGatewayImportOpenApiServiceTsfHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiServiceTsfHealthCheckConfToHclTerraform(struct?: ApiGatewayImportOpenApiServiceTsfHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiServiceTsfHealthCheckConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiServiceTsfHealthCheckConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiServiceTsfHealthCheckConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_threshold_percentage - computed: true, optional: false, required: false
  public get errorThresholdPercentage() {
    return this.getNumberAttribute('error_threshold_percentage');
  }

  // is_health_check - computed: true, optional: false, required: false
  public get isHealthCheck() {
    return this.getBooleanAttribute('is_health_check');
  }

  // request_volume_threshold - computed: true, optional: false, required: false
  public get requestVolumeThreshold() {
    return this.getNumberAttribute('request_volume_threshold');
  }

  // sleep_window_in_milliseconds - computed: true, optional: false, required: false
  public get sleepWindowInMilliseconds() {
    return this.getNumberAttribute('sleep_window_in_milliseconds');
  }
}

export class ApiGatewayImportOpenApiServiceTsfHealthCheckConfList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiServiceTsfHealthCheckConfOutputReference {
    return new ApiGatewayImportOpenApiServiceTsfHealthCheckConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApiGatewayImportOpenApiServiceTsfLoadBalanceConf {
}

export function apiGatewayImportOpenApiServiceTsfLoadBalanceConfToTerraform(struct?: ApiGatewayImportOpenApiServiceTsfLoadBalanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiGatewayImportOpenApiServiceTsfLoadBalanceConfToHclTerraform(struct?: ApiGatewayImportOpenApiServiceTsfLoadBalanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiGatewayImportOpenApiServiceTsfLoadBalanceConfOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiGatewayImportOpenApiServiceTsfLoadBalanceConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiGatewayImportOpenApiServiceTsfLoadBalanceConf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_load_balance - computed: true, optional: false, required: false
  public get isLoadBalance() {
    return this.getBooleanAttribute('is_load_balance');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // session_stick_required - computed: true, optional: false, required: false
  public get sessionStickRequired() {
    return this.getBooleanAttribute('session_stick_required');
  }

  // session_stick_timeout - computed: true, optional: false, required: false
  public get sessionStickTimeout() {
    return this.getNumberAttribute('session_stick_timeout');
  }
}

export class ApiGatewayImportOpenApiServiceTsfLoadBalanceConfList extends cdktf.ComplexList {

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
  public get(index: number): ApiGatewayImportOpenApiServiceTsfLoadBalanceConfOutputReference {
    return new ApiGatewayImportOpenApiServiceTsfLoadBalanceConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api tencentcloud_api_gateway_import_open_api}
*/
export class ApiGatewayImportOpenApi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_import_open_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiGatewayImportOpenApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiGatewayImportOpenApi to import
  * @param importFromId The id of the existing ApiGatewayImportOpenApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiGatewayImportOpenApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_import_open_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/api_gateway_import_open_api tencentcloud_api_gateway_import_open_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiGatewayImportOpenApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiGatewayImportOpenApiConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_import_open_api',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._content = config.content;
    this._contentVersion = config.contentVersion;
    this._encodeType = config.encodeType;
    this._id = config.id;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_business_type - computed: true, optional: false, required: false
  public get apiBusinessType() {
    return this.getStringAttribute('api_business_type');
  }

  // api_desc - computed: true, optional: false, required: false
  public get apiDesc() {
    return this.getStringAttribute('api_desc');
  }

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // api_name - computed: true, optional: false, required: false
  public get apiName() {
    return this.getStringAttribute('api_name');
  }

  // api_type - computed: true, optional: false, required: false
  public get apiType() {
    return this.getStringAttribute('api_type');
  }

  // auth_relation_api_id - computed: true, optional: false, required: false
  public get authRelationApiId() {
    return this.getStringAttribute('auth_relation_api_id');
  }

  // auth_type - computed: true, optional: false, required: false
  public get authType() {
    return this.getStringAttribute('auth_type');
  }

  // constant_parameters - computed: true, optional: false, required: false
  private _constantParameters = new ApiGatewayImportOpenApiConstantParametersList(this, "constant_parameters", true);
  public get constantParameters() {
    return this._constantParameters;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // content_version - computed: false, optional: true, required: false
  private _contentVersion?: string; 
  public get contentVersion() {
    return this.getStringAttribute('content_version');
  }
  public set contentVersion(value: string) {
    this._contentVersion = value;
  }
  public resetContentVersion() {
    this._contentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentVersionInput() {
    return this._contentVersion;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_cors - computed: true, optional: false, required: false
  public get enableCors() {
    return this.getBooleanAttribute('enable_cors');
  }

  // encode_type - computed: false, optional: true, required: false
  private _encodeType?: string; 
  public get encodeType() {
    return this.getStringAttribute('encode_type');
  }
  public set encodeType(value: string) {
    this._encodeType = value;
  }
  public resetEncodeType() {
    this._encodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodeTypeInput() {
    return this._encodeType;
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

  // is_base64_encoded - computed: true, optional: false, required: false
  public get isBase64Encoded() {
    return this.getBooleanAttribute('is_base64_encoded');
  }

  // is_debug_after_charge - computed: true, optional: false, required: false
  public get isDebugAfterCharge() {
    return this.getBooleanAttribute('is_debug_after_charge');
  }

  // is_delete_response_error_codes - computed: true, optional: false, required: false
  public get isDeleteResponseErrorCodes() {
    return this.getBooleanAttribute('is_delete_response_error_codes');
  }

  // micro_services - computed: true, optional: false, required: false
  private _microServices = new ApiGatewayImportOpenApiMicroServicesList(this, "micro_services", true);
  public get microServices() {
    return this._microServices;
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new ApiGatewayImportOpenApiOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // request_config_method - computed: true, optional: false, required: false
  public get requestConfigMethod() {
    return this.getStringAttribute('request_config_method');
  }

  // request_config_path - computed: true, optional: false, required: false
  public get requestConfigPath() {
    return this.getStringAttribute('request_config_path');
  }

  // request_parameters - computed: true, optional: false, required: false
  private _requestParameters = new ApiGatewayImportOpenApiRequestParametersList(this, "request_parameters", true);
  public get requestParameters() {
    return this._requestParameters;
  }

  // response_error_codes - computed: true, optional: false, required: false
  private _responseErrorCodes = new ApiGatewayImportOpenApiResponseErrorCodesList(this, "response_error_codes", true);
  public get responseErrorCodes() {
    return this._responseErrorCodes;
  }

  // response_fail_example - computed: true, optional: false, required: false
  public get responseFailExample() {
    return this.getStringAttribute('response_fail_example');
  }

  // response_success_example - computed: true, optional: false, required: false
  public get responseSuccessExample() {
    return this.getStringAttribute('response_success_example');
  }

  // response_type - computed: true, optional: false, required: false
  public get responseType() {
    return this.getStringAttribute('response_type');
  }

  // service_config_cos_config - computed: true, optional: false, required: false
  private _serviceConfigCosConfig = new ApiGatewayImportOpenApiServiceConfigCosConfigList(this, "service_config_cos_config", false);
  public get serviceConfigCosConfig() {
    return this._serviceConfigCosConfig;
  }

  // service_config_method - computed: true, optional: false, required: false
  public get serviceConfigMethod() {
    return this.getStringAttribute('service_config_method');
  }

  // service_config_mock_return_message - computed: true, optional: false, required: false
  public get serviceConfigMockReturnMessage() {
    return this.getStringAttribute('service_config_mock_return_message');
  }

  // service_config_path - computed: true, optional: false, required: false
  public get serviceConfigPath() {
    return this.getStringAttribute('service_config_path');
  }

  // service_config_product - computed: true, optional: false, required: false
  public get serviceConfigProduct() {
    return this.getStringAttribute('service_config_product');
  }

  // service_config_scf_function_name - computed: true, optional: false, required: false
  public get serviceConfigScfFunctionName() {
    return this.getStringAttribute('service_config_scf_function_name');
  }

  // service_config_scf_function_namespace - computed: true, optional: false, required: false
  public get serviceConfigScfFunctionNamespace() {
    return this.getStringAttribute('service_config_scf_function_namespace');
  }

  // service_config_scf_function_qualifier - computed: true, optional: false, required: false
  public get serviceConfigScfFunctionQualifier() {
    return this.getStringAttribute('service_config_scf_function_qualifier');
  }

  // service_config_scf_function_type - computed: true, optional: false, required: false
  public get serviceConfigScfFunctionType() {
    return this.getStringAttribute('service_config_scf_function_type');
  }

  // service_config_scf_is_integrated_response - computed: true, optional: false, required: false
  public get serviceConfigScfIsIntegratedResponse() {
    return this.getBooleanAttribute('service_config_scf_is_integrated_response');
  }

  // service_config_timeout - computed: true, optional: false, required: false
  public get serviceConfigTimeout() {
    return this.getNumberAttribute('service_config_timeout');
  }

  // service_config_type - computed: true, optional: false, required: false
  public get serviceConfigType() {
    return this.getStringAttribute('service_config_type');
  }

  // service_config_upstream_id - computed: true, optional: false, required: false
  public get serviceConfigUpstreamId() {
    return this.getStringAttribute('service_config_upstream_id');
  }

  // service_config_url - computed: true, optional: false, required: false
  public get serviceConfigUrl() {
    return this.getStringAttribute('service_config_url');
  }

  // service_config_vpc_id - computed: true, optional: false, required: false
  public get serviceConfigVpcId() {
    return this.getStringAttribute('service_config_vpc_id');
  }

  // service_config_websocket_cleanup_function_name - computed: true, optional: false, required: false
  public get serviceConfigWebsocketCleanupFunctionName() {
    return this.getStringAttribute('service_config_websocket_cleanup_function_name');
  }

  // service_config_websocket_cleanup_function_namespace - computed: true, optional: false, required: false
  public get serviceConfigWebsocketCleanupFunctionNamespace() {
    return this.getStringAttribute('service_config_websocket_cleanup_function_namespace');
  }

  // service_config_websocket_cleanup_function_qualifier - computed: true, optional: false, required: false
  public get serviceConfigWebsocketCleanupFunctionQualifier() {
    return this.getStringAttribute('service_config_websocket_cleanup_function_qualifier');
  }

  // service_config_websocket_register_function_name - computed: true, optional: false, required: false
  public get serviceConfigWebsocketRegisterFunctionName() {
    return this.getStringAttribute('service_config_websocket_register_function_name');
  }

  // service_config_websocket_register_function_namespace - computed: true, optional: false, required: false
  public get serviceConfigWebsocketRegisterFunctionNamespace() {
    return this.getStringAttribute('service_config_websocket_register_function_namespace');
  }

  // service_config_websocket_register_function_qualifier - computed: true, optional: false, required: false
  public get serviceConfigWebsocketRegisterFunctionQualifier() {
    return this.getStringAttribute('service_config_websocket_register_function_qualifier');
  }

  // service_config_websocket_transport_function_name - computed: true, optional: false, required: false
  public get serviceConfigWebsocketTransportFunctionName() {
    return this.getStringAttribute('service_config_websocket_transport_function_name');
  }

  // service_config_websocket_transport_function_namespace - computed: true, optional: false, required: false
  public get serviceConfigWebsocketTransportFunctionNamespace() {
    return this.getStringAttribute('service_config_websocket_transport_function_namespace');
  }

  // service_config_websocket_transport_function_qualifier - computed: true, optional: false, required: false
  public get serviceConfigWebsocketTransportFunctionQualifier() {
    return this.getStringAttribute('service_config_websocket_transport_function_qualifier');
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_parameters - computed: true, optional: false, required: false
  private _serviceParameters = new ApiGatewayImportOpenApiServiceParametersList(this, "service_parameters", false);
  public get serviceParameters() {
    return this._serviceParameters;
  }

  // service_tsf_health_check_conf - computed: true, optional: false, required: false
  private _serviceTsfHealthCheckConf = new ApiGatewayImportOpenApiServiceTsfHealthCheckConfList(this, "service_tsf_health_check_conf", false);
  public get serviceTsfHealthCheckConf() {
    return this._serviceTsfHealthCheckConf;
  }

  // service_tsf_load_balance_conf - computed: true, optional: false, required: false
  private _serviceTsfLoadBalanceConf = new ApiGatewayImportOpenApiServiceTsfLoadBalanceConfList(this, "service_tsf_load_balance_conf", false);
  public get serviceTsfLoadBalanceConf() {
    return this._serviceTsfLoadBalanceConf;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      content: cdktf.stringToTerraform(this._content),
      content_version: cdktf.stringToTerraform(this._contentVersion),
      encode_type: cdktf.stringToTerraform(this._encodeType),
      id: cdktf.stringToTerraform(this._id),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_version: {
        value: cdktf.stringToHclTerraform(this._contentVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encode_type: {
        value: cdktf.stringToHclTerraform(this._encodeType),
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
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
