// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudApiGatewayApiAppApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * API interface unique ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api#api_id DataTencentcloudApiGatewayApiAppApi#api_id}
  */
  readonly apiId: string;
  /**
  * Api region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api#api_region DataTencentcloudApiGatewayApiAppApi#api_region}
  */
  readonly apiRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api#id DataTencentcloudApiGatewayApiAppApi#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Used to save apiAppApis.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api#result_output_file DataTencentcloudApiGatewayApiAppApi#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * The unique ID of the service where the API resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api#service_id DataTencentcloudApiGatewayApiAppApi#service_id}
  */
  readonly serviceId: string;
}
export interface DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRules {
}

export function dataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRulesToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRulesToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return cdktf.Fn.tolist(this.getListAttribute('value'));
  }
}

export class DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRulesOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultConstantParameters {
}

export function dataTencentcloudApiGatewayApiAppApiResultConstantParametersToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultConstantParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultConstantParametersToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultConstantParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultConstantParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultConstantParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultConstantParameters | undefined) {
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

export class DataTencentcloudApiGatewayApiAppApiResultConstantParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultConstantParametersOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultConstantParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultMicroServices {
}

export function dataTencentcloudApiGatewayApiAppApiResultMicroServicesToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultMicroServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultMicroServicesToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultMicroServices): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultMicroServicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultMicroServices | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultMicroServices | undefined) {
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

export class DataTencentcloudApiGatewayApiAppApiResultMicroServicesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultMicroServicesOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultMicroServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultOauthConfig {
}

export function dataTencentcloudApiGatewayApiAppApiResultOauthConfigToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultOauthConfigToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultOauthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultOauthConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultOauthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultOauthConfig | undefined) {
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

export class DataTencentcloudApiGatewayApiAppApiResultOauthConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultOauthConfigOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultOauthConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultRequestConfig {
}

export function dataTencentcloudApiGatewayApiAppApiResultRequestConfigToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultRequestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultRequestConfigToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultRequestConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultRequestConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultRequestConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultRequestConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }
}

export class DataTencentcloudApiGatewayApiAppApiResultRequestConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultRequestConfigOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultRequestConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultRequestParameters {
}

export function dataTencentcloudApiGatewayApiAppApiResultRequestParametersToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultRequestParametersToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultRequestParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultRequestParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultRequestParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultRequestParameters | undefined) {
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

export class DataTencentcloudApiGatewayApiAppApiResultRequestParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultRequestParametersOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultRequestParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodes {
}

export function dataTencentcloudApiGatewayApiAppApiResultResponseErrorCodesToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultResponseErrorCodesToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodes | undefined) {
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

export class DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodesList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodesOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultServiceConfig {
}

export function dataTencentcloudApiGatewayApiAppApiResultServiceConfigToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultServiceConfigToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultServiceConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultServiceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultServiceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // product - computed: true, optional: false, required: false
  public get product() {
    return this.getStringAttribute('product');
  }

  // uniq_vpc_id - computed: true, optional: false, required: false
  public get uniqVpcId() {
    return this.getStringAttribute('uniq_vpc_id');
  }

  // upstream_id - computed: true, optional: false, required: false
  public get upstreamId() {
    return this.getStringAttribute('upstream_id');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataTencentcloudApiGatewayApiAppApiResultServiceConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultServiceConfigOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultServiceConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultServiceParameters {
}

export function dataTencentcloudApiGatewayApiAppApiResultServiceParametersToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultServiceParametersToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultServiceParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultServiceParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultServiceParameters | undefined) {
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
}

export class DataTencentcloudApiGatewayApiAppApiResultServiceParametersList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultServiceParametersOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultServiceParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConf {
}

export function dataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConfToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConfToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConf | undefined) {
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

export class DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConfList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConfOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConf {
}

export function dataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConfToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConfToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConfOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConf | undefined) {
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

export class DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConfList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConfOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConfOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResultTags {
}

export function dataTencentcloudApiGatewayApiAppApiResultTagsToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultTagsToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResultTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResultTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResultTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataTencentcloudApiGatewayApiAppApiResultTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultTagsOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataTencentcloudApiGatewayApiAppApiResult {
}

export function dataTencentcloudApiGatewayApiAppApiResultToTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTencentcloudApiGatewayApiAppApiResultToHclTerraform(struct?: DataTencentcloudApiGatewayApiAppApiResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTencentcloudApiGatewayApiAppApiResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataTencentcloudApiGatewayApiAppApiResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTencentcloudApiGatewayApiAppApiResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // base64_encoded_trigger_rules - computed: true, optional: false, required: false
  private _base64EncodedTriggerRules = new DataTencentcloudApiGatewayApiAppApiResultBase64EncodedTriggerRulesList(this, "base64_encoded_trigger_rules", false);
  public get base64EncodedTriggerRules() {
    return this._base64EncodedTriggerRules;
  }

  // constant_parameters - computed: true, optional: false, required: false
  private _constantParameters = new DataTencentcloudApiGatewayApiAppApiResultConstantParametersList(this, "constant_parameters", false);
  public get constantParameters() {
    return this._constantParameters;
  }

  // created_time - computed: true, optional: false, required: false
  public get createdTime() {
    return this.getStringAttribute('created_time');
  }

  // enable_cors - computed: true, optional: false, required: false
  public get enableCors() {
    return this.getBooleanAttribute('enable_cors');
  }

  // environments - computed: true, optional: false, required: false
  public get environments() {
    return cdktf.Fn.tolist(this.getListAttribute('environments'));
  }

  // internal_domain - computed: true, optional: false, required: false
  public get internalDomain() {
    return this.getStringAttribute('internal_domain');
  }

  // is_base64_encoded - computed: true, optional: false, required: false
  public get isBase64Encoded() {
    return this.getBooleanAttribute('is_base64_encoded');
  }

  // is_base64_trigger - computed: true, optional: false, required: false
  public get isBase64Trigger() {
    return this.getBooleanAttribute('is_base64_trigger');
  }

  // is_debug_after_charge - computed: true, optional: false, required: false
  public get isDebugAfterCharge() {
    return this.getBooleanAttribute('is_debug_after_charge');
  }

  // micro_services - computed: true, optional: false, required: false
  private _microServices = new DataTencentcloudApiGatewayApiAppApiResultMicroServicesList(this, "micro_services", false);
  public get microServices() {
    return this._microServices;
  }

  // micro_services_info - computed: true, optional: false, required: false
  public get microServicesInfo() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('micro_services_info')));
  }

  // modified_time - computed: true, optional: false, required: false
  public get modifiedTime() {
    return this.getStringAttribute('modified_time');
  }

  // oauth_config - computed: true, optional: false, required: false
  private _oauthConfig = new DataTencentcloudApiGatewayApiAppApiResultOauthConfigList(this, "oauth_config", false);
  public get oauthConfig() {
    return this._oauthConfig;
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // request_config - computed: true, optional: false, required: false
  private _requestConfig = new DataTencentcloudApiGatewayApiAppApiResultRequestConfigList(this, "request_config", false);
  public get requestConfig() {
    return this._requestConfig;
  }

  // request_parameters - computed: true, optional: false, required: false
  private _requestParameters = new DataTencentcloudApiGatewayApiAppApiResultRequestParametersList(this, "request_parameters", false);
  public get requestParameters() {
    return this._requestParameters;
  }

  // response_error_codes - computed: true, optional: false, required: false
  private _responseErrorCodes = new DataTencentcloudApiGatewayApiAppApiResultResponseErrorCodesList(this, "response_error_codes", false);
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

  // service_config - computed: true, optional: false, required: false
  private _serviceConfig = new DataTencentcloudApiGatewayApiAppApiResultServiceConfigList(this, "service_config", false);
  public get serviceConfig() {
    return this._serviceConfig;
  }

  // service_desc - computed: true, optional: false, required: false
  public get serviceDesc() {
    return this.getStringAttribute('service_desc');
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_mock_return_message - computed: true, optional: false, required: false
  public get serviceMockReturnMessage() {
    return this.getStringAttribute('service_mock_return_message');
  }

  // service_name - computed: true, optional: false, required: false
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }

  // service_parameters - computed: true, optional: false, required: false
  private _serviceParameters = new DataTencentcloudApiGatewayApiAppApiResultServiceParametersList(this, "service_parameters", false);
  public get serviceParameters() {
    return this._serviceParameters;
  }

  // service_scf_function_name - computed: true, optional: false, required: false
  public get serviceScfFunctionName() {
    return this.getStringAttribute('service_scf_function_name');
  }

  // service_scf_function_namespace - computed: true, optional: false, required: false
  public get serviceScfFunctionNamespace() {
    return this.getStringAttribute('service_scf_function_namespace');
  }

  // service_scf_function_qualifier - computed: true, optional: false, required: false
  public get serviceScfFunctionQualifier() {
    return this.getStringAttribute('service_scf_function_qualifier');
  }

  // service_scf_is_integrated_response - computed: true, optional: false, required: false
  public get serviceScfIsIntegratedResponse() {
    return this.getBooleanAttribute('service_scf_is_integrated_response');
  }

  // service_timeout - computed: true, optional: false, required: false
  public get serviceTimeout() {
    return this.getNumberAttribute('service_timeout');
  }

  // service_tsf_health_check_conf - computed: true, optional: false, required: false
  private _serviceTsfHealthCheckConf = new DataTencentcloudApiGatewayApiAppApiResultServiceTsfHealthCheckConfList(this, "service_tsf_health_check_conf", false);
  public get serviceTsfHealthCheckConf() {
    return this._serviceTsfHealthCheckConf;
  }

  // service_tsf_load_balance_conf - computed: true, optional: false, required: false
  private _serviceTsfLoadBalanceConf = new DataTencentcloudApiGatewayApiAppApiResultServiceTsfLoadBalanceConfList(this, "service_tsf_load_balance_conf", false);
  public get serviceTsfLoadBalanceConf() {
    return this._serviceTsfLoadBalanceConf;
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_websocket_cleanup_function_name - computed: true, optional: false, required: false
  public get serviceWebsocketCleanupFunctionName() {
    return this.getStringAttribute('service_websocket_cleanup_function_name');
  }

  // service_websocket_cleanup_function_namespace - computed: true, optional: false, required: false
  public get serviceWebsocketCleanupFunctionNamespace() {
    return this.getStringAttribute('service_websocket_cleanup_function_namespace');
  }

  // service_websocket_cleanup_function_qualifier - computed: true, optional: false, required: false
  public get serviceWebsocketCleanupFunctionQualifier() {
    return this.getStringAttribute('service_websocket_cleanup_function_qualifier');
  }

  // service_websocket_register_function_name - computed: true, optional: false, required: false
  public get serviceWebsocketRegisterFunctionName() {
    return this.getStringAttribute('service_websocket_register_function_name');
  }

  // service_websocket_register_function_namespace - computed: true, optional: false, required: false
  public get serviceWebsocketRegisterFunctionNamespace() {
    return this.getStringAttribute('service_websocket_register_function_namespace');
  }

  // service_websocket_register_function_qualifier - computed: true, optional: false, required: false
  public get serviceWebsocketRegisterFunctionQualifier() {
    return this.getStringAttribute('service_websocket_register_function_qualifier');
  }

  // service_websocket_transport_function_name - computed: true, optional: false, required: false
  public get serviceWebsocketTransportFunctionName() {
    return this.getStringAttribute('service_websocket_transport_function_name');
  }

  // service_websocket_transport_function_namespace - computed: true, optional: false, required: false
  public get serviceWebsocketTransportFunctionNamespace() {
    return this.getStringAttribute('service_websocket_transport_function_namespace');
  }

  // service_websocket_transport_function_qualifier - computed: true, optional: false, required: false
  public get serviceWebsocketTransportFunctionQualifier() {
    return this.getStringAttribute('service_websocket_transport_function_qualifier');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new DataTencentcloudApiGatewayApiAppApiResultTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
}

export class DataTencentcloudApiGatewayApiAppApiResultList extends cdktf.ComplexList {

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
  public get(index: number): DataTencentcloudApiGatewayApiAppApiResultOutputReference {
    return new DataTencentcloudApiGatewayApiAppApiResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api tencentcloud_api_gateway_api_app_api}
*/
export class DataTencentcloudApiGatewayApiAppApi extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_api_gateway_api_app_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudApiGatewayApiAppApi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudApiGatewayApiAppApi to import
  * @param importFromId The id of the existing DataTencentcloudApiGatewayApiAppApi that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudApiGatewayApiAppApi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_api_gateway_api_app_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.36/docs/data-sources/api_gateway_api_app_api tencentcloud_api_gateway_api_app_api} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudApiGatewayApiAppApiConfig
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudApiGatewayApiAppApiConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_api_gateway_api_app_api',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.36',
        providerVersionConstraint: '1.82.36'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiId = config.apiId;
    this._apiRegion = config.apiRegion;
    this._id = config.id;
    this._resultOutputFile = config.resultOutputFile;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: false, optional: false, required: true
  private _apiId?: string; 
  public get apiId() {
    return this.getStringAttribute('api_id');
  }
  public set apiId(value: string) {
    this._apiId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiIdInput() {
    return this._apiId;
  }

  // api_region - computed: false, optional: false, required: true
  private _apiRegion?: string; 
  public get apiRegion() {
    return this.getStringAttribute('api_region');
  }
  public set apiRegion(value: string) {
    this._apiRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRegionInput() {
    return this._apiRegion;
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

  // result - computed: true, optional: false, required: false
  private _result = new DataTencentcloudApiGatewayApiAppApiResultList(this, "result", false);
  public get result() {
    return this._result;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_id: cdktf.stringToTerraform(this._apiId),
      api_region: cdktf.stringToTerraform(this._apiRegion),
      id: cdktf.stringToTerraform(this._id),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_id: {
        value: cdktf.stringToHclTerraform(this._apiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_region: {
        value: cdktf.stringToHclTerraform(this._apiRegion),
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
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
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
