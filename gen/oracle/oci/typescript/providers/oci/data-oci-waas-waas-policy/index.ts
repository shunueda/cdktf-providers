// https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/waas_waas_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWaasWaasPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/waas_waas_policy#id DataOciWaasWaasPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/waas_waas_policy#waas_policy_id DataOciWaasWaasPolicy#waas_policy_id}
  */
  readonly waasPolicyId: string;
}
export interface DataOciWaasWaasPolicyOriginGroupsOriginGroup {
}

export function dataOciWaasWaasPolicyOriginGroupsOriginGroupToTerraform(struct?: DataOciWaasWaasPolicyOriginGroupsOriginGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyOriginGroupsOriginGroupToHclTerraform(struct?: DataOciWaasWaasPolicyOriginGroupsOriginGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyOriginGroupsOriginGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyOriginGroupsOriginGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataOciWaasWaasPolicyOriginGroupsOriginGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference {
    return new DataOciWaasWaasPolicyOriginGroupsOriginGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyOriginGroups {
}

export function dataOciWaasWaasPolicyOriginGroupsToTerraform(struct?: DataOciWaasWaasPolicyOriginGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyOriginGroupsToHclTerraform(struct?: DataOciWaasWaasPolicyOriginGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyOriginGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyOriginGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyOriginGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // origin_group - computed: true, optional: false, required: false
  private _originGroup = new DataOciWaasWaasPolicyOriginGroupsOriginGroupList(this, "origin_group", false);
  public get originGroup() {
    return this._originGroup;
  }
}

export class DataOciWaasWaasPolicyOriginGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyOriginGroupsOutputReference {
    return new DataOciWaasWaasPolicyOriginGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyOriginsCustomHeaders {
}

export function dataOciWaasWaasPolicyOriginsCustomHeadersToTerraform(struct?: DataOciWaasWaasPolicyOriginsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyOriginsCustomHeadersToHclTerraform(struct?: DataOciWaasWaasPolicyOriginsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyOriginsCustomHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyOriginsCustomHeaders | undefined) {
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
    return this.getStringAttribute('value');
  }
}

export class DataOciWaasWaasPolicyOriginsCustomHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference {
    return new DataOciWaasWaasPolicyOriginsCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyOrigins {
}

export function dataOciWaasWaasPolicyOriginsToTerraform(struct?: DataOciWaasWaasPolicyOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyOriginsToHclTerraform(struct?: DataOciWaasWaasPolicyOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_headers - computed: true, optional: false, required: false
  private _customHeaders = new DataOciWaasWaasPolicyOriginsCustomHeadersList(this, "custom_headers", false);
  public get customHeaders() {
    return this._customHeaders;
  }

  // http_port - computed: true, optional: false, required: false
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }

  // https_port - computed: true, optional: false, required: false
  public get httpsPort() {
    return this.getNumberAttribute('https_port');
  }

  // label - computed: true, optional: false, required: false
  public get label() {
    return this.getStringAttribute('label');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class DataOciWaasWaasPolicyOriginsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyOriginsOutputReference {
    return new DataOciWaasWaasPolicyOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyPolicyConfigHealthChecks {
}

export function dataOciWaasWaasPolicyPolicyConfigHealthChecksToTerraform(struct?: DataOciWaasWaasPolicyPolicyConfigHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyPolicyConfigHealthChecksToHclTerraform(struct?: DataOciWaasWaasPolicyPolicyConfigHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyPolicyConfigHealthChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyPolicyConfigHealthChecks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // expected_response_code_group - computed: true, optional: false, required: false
  public get expectedResponseCodeGroup() {
    return this.getListAttribute('expected_response_code_group');
  }

  // expected_response_text - computed: true, optional: false, required: false
  public get expectedResponseText() {
    return this.getStringAttribute('expected_response_text');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new cdktf.StringMap(this, "headers");
  public get headers() {
    return this._headers;
  }

  // healthy_threshold - computed: true, optional: false, required: false
  public get healthyThreshold() {
    return this.getNumberAttribute('healthy_threshold');
  }

  // interval_in_seconds - computed: true, optional: false, required: false
  public get intervalInSeconds() {
    return this.getNumberAttribute('interval_in_seconds');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_response_text_check_enabled - computed: true, optional: false, required: false
  public get isResponseTextCheckEnabled() {
    return this.getBooleanAttribute('is_response_text_check_enabled');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // timeout_in_seconds - computed: true, optional: false, required: false
  public get timeoutInSeconds() {
    return this.getNumberAttribute('timeout_in_seconds');
  }

  // unhealthy_threshold - computed: true, optional: false, required: false
  public get unhealthyThreshold() {
    return this.getNumberAttribute('unhealthy_threshold');
  }
}

export class DataOciWaasWaasPolicyPolicyConfigHealthChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference {
    return new DataOciWaasWaasPolicyPolicyConfigHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod {
}

export function dataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodToTerraform(struct?: DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodToHclTerraform(struct?: DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // expiration_time_in_seconds - computed: true, optional: false, required: false
  public get expirationTimeInSeconds() {
    return this.getNumberAttribute('expiration_time_in_seconds');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference {
    return new DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyPolicyConfig {
}

export function dataOciWaasWaasPolicyPolicyConfigToTerraform(struct?: DataOciWaasWaasPolicyPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyPolicyConfigToHclTerraform(struct?: DataOciWaasWaasPolicyPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyPolicyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_id - computed: true, optional: false, required: false
  public get certificateId() {
    return this.getStringAttribute('certificate_id');
  }

  // cipher_group - computed: true, optional: false, required: false
  public get cipherGroup() {
    return this.getStringAttribute('cipher_group');
  }

  // client_address_header - computed: true, optional: false, required: false
  public get clientAddressHeader() {
    return this.getStringAttribute('client_address_header');
  }

  // health_checks - computed: true, optional: false, required: false
  private _healthChecks = new DataOciWaasWaasPolicyPolicyConfigHealthChecksList(this, "health_checks", false);
  public get healthChecks() {
    return this._healthChecks;
  }

  // is_behind_cdn - computed: true, optional: false, required: false
  public get isBehindCdn() {
    return this.getBooleanAttribute('is_behind_cdn');
  }

  // is_cache_control_respected - computed: true, optional: false, required: false
  public get isCacheControlRespected() {
    return this.getBooleanAttribute('is_cache_control_respected');
  }

  // is_https_enabled - computed: true, optional: false, required: false
  public get isHttpsEnabled() {
    return this.getBooleanAttribute('is_https_enabled');
  }

  // is_https_forced - computed: true, optional: false, required: false
  public get isHttpsForced() {
    return this.getBooleanAttribute('is_https_forced');
  }

  // is_origin_compression_enabled - computed: true, optional: false, required: false
  public get isOriginCompressionEnabled() {
    return this.getBooleanAttribute('is_origin_compression_enabled');
  }

  // is_response_buffering_enabled - computed: true, optional: false, required: false
  public get isResponseBufferingEnabled() {
    return this.getBooleanAttribute('is_response_buffering_enabled');
  }

  // is_sni_enabled - computed: true, optional: false, required: false
  public get isSniEnabled() {
    return this.getBooleanAttribute('is_sni_enabled');
  }

  // load_balancing_method - computed: true, optional: false, required: false
  private _loadBalancingMethod = new DataOciWaasWaasPolicyPolicyConfigLoadBalancingMethodList(this, "load_balancing_method", false);
  public get loadBalancingMethod() {
    return this._loadBalancingMethod;
  }

  // tls_protocols - computed: true, optional: false, required: false
  public get tlsProtocols() {
    return this.getListAttribute('tls_protocols');
  }

  // websocket_path_prefixes - computed: true, optional: false, required: false
  public get websocketPathPrefixes() {
    return this.getListAttribute('websocket_path_prefixes');
  }
}

export class DataOciWaasWaasPolicyPolicyConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyPolicyConfigOutputReference {
    return new DataOciWaasWaasPolicyPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigAccessRulesCriteria {
}

export function dataOciWaasWaasPolicyWafConfigAccessRulesCriteriaToTerraform(struct?: DataOciWaasWaasPolicyWafConfigAccessRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigAccessRulesCriteriaToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigAccessRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigAccessRulesCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigAccessRulesCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // is_case_sensitive - computed: true, optional: false, required: false
  public get isCaseSensitive() {
    return this.getBooleanAttribute('is_case_sensitive');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference {
    return new DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation {
}

export function dataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationToTerraform(struct?: DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulation | undefined) {
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

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference {
    return new DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigAccessRules {
}

export function dataOciWaasWaasPolicyWafConfigAccessRulesToTerraform(struct?: DataOciWaasWaasPolicyWafConfigAccessRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigAccessRulesToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigAccessRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigAccessRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigAccessRules | undefined) {
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

  // block_action - computed: true, optional: false, required: false
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: false
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: false
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: false
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: false
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // bypass_challenges - computed: true, optional: false, required: false
  public get bypassChallenges() {
    return this.getListAttribute('bypass_challenges');
  }

  // captcha_footer - computed: true, optional: false, required: false
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: false
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: false
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: false
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataOciWaasWaasPolicyWafConfigAccessRulesCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // redirect_response_code - computed: true, optional: false, required: false
  public get redirectResponseCode() {
    return this.getStringAttribute('redirect_response_code');
  }

  // redirect_url - computed: true, optional: false, required: false
  public get redirectUrl() {
    return this.getStringAttribute('redirect_url');
  }

  // response_header_manipulation - computed: true, optional: false, required: false
  private _responseHeaderManipulation = new DataOciWaasWaasPolicyWafConfigAccessRulesResponseHeaderManipulationList(this, "response_header_manipulation", false);
  public get responseHeaderManipulation() {
    return this._responseHeaderManipulation;
  }
}

export class DataOciWaasWaasPolicyWafConfigAccessRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference {
    return new DataOciWaasWaasPolicyWafConfigAccessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigAddressRateLimiting {
}

export function dataOciWaasWaasPolicyWafConfigAddressRateLimitingToTerraform(struct?: DataOciWaasWaasPolicyWafConfigAddressRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigAddressRateLimitingToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigAddressRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigAddressRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigAddressRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_rate_per_address - computed: true, optional: false, required: false
  public get allowedRatePerAddress() {
    return this.getNumberAttribute('allowed_rate_per_address');
  }

  // block_response_code - computed: true, optional: false, required: false
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // max_delayed_count_per_address - computed: true, optional: false, required: false
  public get maxDelayedCountPerAddress() {
    return this.getNumberAttribute('max_delayed_count_per_address');
  }
}

export class DataOciWaasWaasPolicyWafConfigAddressRateLimitingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference {
    return new DataOciWaasWaasPolicyWafConfigAddressRateLimitingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigCachingRulesCriteria {
}

export function dataOciWaasWaasPolicyWafConfigCachingRulesCriteriaToTerraform(struct?: DataOciWaasWaasPolicyWafConfigCachingRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigCachingRulesCriteriaToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigCachingRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigCachingRulesCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigCachingRulesCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference {
    return new DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigCachingRules {
}

export function dataOciWaasWaasPolicyWafConfigCachingRulesToTerraform(struct?: DataOciWaasWaasPolicyWafConfigCachingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigCachingRulesToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigCachingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigCachingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigCachingRules | undefined) {
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

  // caching_duration - computed: true, optional: false, required: false
  public get cachingDuration() {
    return this.getStringAttribute('caching_duration');
  }

  // client_caching_duration - computed: true, optional: false, required: false
  public get clientCachingDuration() {
    return this.getStringAttribute('client_caching_duration');
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataOciWaasWaasPolicyWafConfigCachingRulesCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }

  // is_client_caching_enabled - computed: true, optional: false, required: false
  public get isClientCachingEnabled() {
    return this.getBooleanAttribute('is_client_caching_enabled');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciWaasWaasPolicyWafConfigCachingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference {
    return new DataOciWaasWaasPolicyWafConfigCachingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigCaptchas {
}

export function dataOciWaasWaasPolicyWafConfigCaptchasToTerraform(struct?: DataOciWaasWaasPolicyWafConfigCaptchas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigCaptchasToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigCaptchas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigCaptchasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigCaptchas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigCaptchas | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // failure_message - computed: true, optional: false, required: false
  public get failureMessage() {
    return this.getStringAttribute('failure_message');
  }

  // footer_text - computed: true, optional: false, required: false
  public get footerText() {
    return this.getStringAttribute('footer_text');
  }

  // header_text - computed: true, optional: false, required: false
  public get headerText() {
    return this.getStringAttribute('header_text');
  }

  // session_expiration_in_seconds - computed: true, optional: false, required: false
  public get sessionExpirationInSeconds() {
    return this.getNumberAttribute('session_expiration_in_seconds');
  }

  // submit_label - computed: true, optional: false, required: false
  public get submitLabel() {
    return this.getStringAttribute('submit_label');
  }

  // title - computed: true, optional: false, required: false
  public get title() {
    return this.getStringAttribute('title');
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }
}

export class DataOciWaasWaasPolicyWafConfigCaptchasList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigCaptchasOutputReference {
    return new DataOciWaasWaasPolicyWafConfigCaptchasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions {
}

export function dataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsToTerraform(struct?: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusions - computed: true, optional: false, required: false
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // target - computed: true, optional: false, required: false
  public get target() {
    return this.getStringAttribute('target');
  }
}

export class DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference {
    return new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigCustomProtectionRules {
}

export function dataOciWaasWaasPolicyWafConfigCustomProtectionRulesToTerraform(struct?: DataOciWaasWaasPolicyWafConfigCustomProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigCustomProtectionRulesToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigCustomProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigCustomProtectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigCustomProtectionRules | undefined) {
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

  // exclusions - computed: true, optional: false, required: false
  private _exclusions = new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference {
    return new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings {
}

export function dataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsToTerraform(struct?: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_action - computed: true, optional: false, required: false
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: false
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: false
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: false
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: false
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // captcha_footer - computed: true, optional: false, required: false
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: false
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: false
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: false
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
}

export class DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference {
    return new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge {
}

export function dataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeToTerraform(struct?: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallenge | undefined) {
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

  // action_expiration_in_seconds - computed: true, optional: false, required: false
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }

  // challenge_settings - computed: true, optional: false, required: false
  private _challengeSettings = new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeChallengeSettingsList(this, "challenge_settings", false);
  public get challengeSettings() {
    return this._challengeSettings;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // failure_threshold_expiration_in_seconds - computed: true, optional: false, required: false
  public get failureThresholdExpirationInSeconds() {
    return this.getNumberAttribute('failure_threshold_expiration_in_seconds');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // max_address_count - computed: true, optional: false, required: false
  public get maxAddressCount() {
    return this.getNumberAttribute('max_address_count');
  }

  // max_address_count_expiration_in_seconds - computed: true, optional: false, required: false
  public get maxAddressCountExpirationInSeconds() {
    return this.getNumberAttribute('max_address_count_expiration_in_seconds');
  }
}

export class DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference {
    return new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings {
}

export function dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsToTerraform(struct?: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_action - computed: true, optional: false, required: false
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: false
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: false
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: false
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: false
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // captcha_footer - computed: true, optional: false, required: false
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: false
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: false
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: false
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
}

export class DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference {
    return new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader {
}

export function dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderToTerraform(struct?: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeader | undefined) {
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
    return this.getStringAttribute('value');
  }
}

export class DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference {
    return new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge {
}

export function dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeToTerraform(struct?: DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigHumanInteractionChallengeToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigHumanInteractionChallenge | undefined) {
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

  // action_expiration_in_seconds - computed: true, optional: false, required: false
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }

  // challenge_settings - computed: true, optional: false, required: false
  private _challengeSettings = new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeChallengeSettingsList(this, "challenge_settings", false);
  public get challengeSettings() {
    return this._challengeSettings;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // failure_threshold_expiration_in_seconds - computed: true, optional: false, required: false
  public get failureThresholdExpirationInSeconds() {
    return this.getNumberAttribute('failure_threshold_expiration_in_seconds');
  }

  // interaction_threshold - computed: true, optional: false, required: false
  public get interactionThreshold() {
    return this.getNumberAttribute('interaction_threshold');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_nat_enabled - computed: true, optional: false, required: false
  public get isNatEnabled() {
    return this.getBooleanAttribute('is_nat_enabled');
  }

  // recording_period_in_seconds - computed: true, optional: false, required: false
  public get recordingPeriodInSeconds() {
    return this.getNumberAttribute('recording_period_in_seconds');
  }

  // set_http_header - computed: true, optional: false, required: false
  private _setHttpHeader = new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeSetHttpHeaderList(this, "set_http_header", false);
  public get setHttpHeader() {
    return this._setHttpHeader;
  }
}

export class DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference {
    return new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings {
}

export function dataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsToTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // block_action - computed: true, optional: false, required: false
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: false
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: false
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: false
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: false
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // captcha_footer - computed: true, optional: false, required: false
  public get captchaFooter() {
    return this.getStringAttribute('captcha_footer');
  }

  // captcha_header - computed: true, optional: false, required: false
  public get captchaHeader() {
    return this.getStringAttribute('captcha_header');
  }

  // captcha_submit_label - computed: true, optional: false, required: false
  public get captchaSubmitLabel() {
    return this.getStringAttribute('captcha_submit_label');
  }

  // captcha_title - computed: true, optional: false, required: false
  public get captchaTitle() {
    return this.getStringAttribute('captcha_title');
  }
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference {
    return new DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigJsChallengeCriteria {
}

export function dataOciWaasWaasPolicyWafConfigJsChallengeCriteriaToTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallengeCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigJsChallengeCriteriaToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallengeCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigJsChallengeCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigJsChallengeCriteria | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // is_case_sensitive - computed: true, optional: false, required: false
  public get isCaseSensitive() {
    return this.getBooleanAttribute('is_case_sensitive');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference {
    return new DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader {
}

export function dataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderToTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeader | undefined) {
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
    return this.getStringAttribute('value');
  }
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference {
    return new DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigJsChallenge {
}

export function dataOciWaasWaasPolicyWafConfigJsChallengeToTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigJsChallengeToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigJsChallenge | undefined) {
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

  // action_expiration_in_seconds - computed: true, optional: false, required: false
  public get actionExpirationInSeconds() {
    return this.getNumberAttribute('action_expiration_in_seconds');
  }

  // are_redirects_challenged - computed: true, optional: false, required: false
  public get areRedirectsChallenged() {
    return this.getBooleanAttribute('are_redirects_challenged');
  }

  // challenge_settings - computed: true, optional: false, required: false
  private _challengeSettings = new DataOciWaasWaasPolicyWafConfigJsChallengeChallengeSettingsList(this, "challenge_settings", false);
  public get challengeSettings() {
    return this._challengeSettings;
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataOciWaasWaasPolicyWafConfigJsChallengeCriteriaList(this, "criteria", false);
  public get criteria() {
    return this._criteria;
  }

  // failure_threshold - computed: true, optional: false, required: false
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // is_nat_enabled - computed: true, optional: false, required: false
  public get isNatEnabled() {
    return this.getBooleanAttribute('is_nat_enabled');
  }

  // set_http_header - computed: true, optional: false, required: false
  private _setHttpHeader = new DataOciWaasWaasPolicyWafConfigJsChallengeSetHttpHeaderList(this, "set_http_header", false);
  public get setHttpHeader() {
    return this._setHttpHeader;
  }
}

export class DataOciWaasWaasPolicyWafConfigJsChallengeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference {
    return new DataOciWaasWaasPolicyWafConfigJsChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigProtectionSettings {
}

export function dataOciWaasWaasPolicyWafConfigProtectionSettingsToTerraform(struct?: DataOciWaasWaasPolicyWafConfigProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigProtectionSettingsToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigProtectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigProtectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_http_methods - computed: true, optional: false, required: false
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }

  // block_action - computed: true, optional: false, required: false
  public get blockAction() {
    return this.getStringAttribute('block_action');
  }

  // block_error_page_code - computed: true, optional: false, required: false
  public get blockErrorPageCode() {
    return this.getStringAttribute('block_error_page_code');
  }

  // block_error_page_description - computed: true, optional: false, required: false
  public get blockErrorPageDescription() {
    return this.getStringAttribute('block_error_page_description');
  }

  // block_error_page_message - computed: true, optional: false, required: false
  public get blockErrorPageMessage() {
    return this.getStringAttribute('block_error_page_message');
  }

  // block_response_code - computed: true, optional: false, required: false
  public get blockResponseCode() {
    return this.getNumberAttribute('block_response_code');
  }

  // is_response_inspected - computed: true, optional: false, required: false
  public get isResponseInspected() {
    return this.getBooleanAttribute('is_response_inspected');
  }

  // max_argument_count - computed: true, optional: false, required: false
  public get maxArgumentCount() {
    return this.getNumberAttribute('max_argument_count');
  }

  // max_name_length_per_argument - computed: true, optional: false, required: false
  public get maxNameLengthPerArgument() {
    return this.getNumberAttribute('max_name_length_per_argument');
  }

  // max_response_size_in_ki_b - computed: true, optional: false, required: false
  public get maxResponseSizeInKiB() {
    return this.getNumberAttribute('max_response_size_in_ki_b');
  }

  // max_total_name_length_of_arguments - computed: true, optional: false, required: false
  public get maxTotalNameLengthOfArguments() {
    return this.getNumberAttribute('max_total_name_length_of_arguments');
  }

  // media_types - computed: true, optional: false, required: false
  public get mediaTypes() {
    return this.getListAttribute('media_types');
  }

  // recommendations_period_in_days - computed: true, optional: false, required: false
  public get recommendationsPeriodInDays() {
    return this.getNumberAttribute('recommendations_period_in_days');
  }
}

export class DataOciWaasWaasPolicyWafConfigProtectionSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference {
    return new DataOciWaasWaasPolicyWafConfigProtectionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfigWhitelists {
}

export function dataOciWaasWaasPolicyWafConfigWhitelistsToTerraform(struct?: DataOciWaasWaasPolicyWafConfigWhitelists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigWhitelistsToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfigWhitelists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfigWhitelists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfigWhitelists | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address_lists - computed: true, optional: false, required: false
  public get addressLists() {
    return this.getListAttribute('address_lists');
  }

  // addresses - computed: true, optional: false, required: false
  public get addresses() {
    return this.getListAttribute('addresses');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataOciWaasWaasPolicyWafConfigWhitelistsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference {
    return new DataOciWaasWaasPolicyWafConfigWhitelistsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPolicyWafConfig {
}

export function dataOciWaasWaasPolicyWafConfigToTerraform(struct?: DataOciWaasWaasPolicyWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPolicyWafConfigToHclTerraform(struct?: DataOciWaasWaasPolicyWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPolicyWafConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPolicyWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPolicyWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_rules - computed: true, optional: false, required: false
  private _accessRules = new DataOciWaasWaasPolicyWafConfigAccessRulesList(this, "access_rules", false);
  public get accessRules() {
    return this._accessRules;
  }

  // address_rate_limiting - computed: true, optional: false, required: false
  private _addressRateLimiting = new DataOciWaasWaasPolicyWafConfigAddressRateLimitingList(this, "address_rate_limiting", false);
  public get addressRateLimiting() {
    return this._addressRateLimiting;
  }

  // caching_rules - computed: true, optional: false, required: false
  private _cachingRules = new DataOciWaasWaasPolicyWafConfigCachingRulesList(this, "caching_rules", false);
  public get cachingRules() {
    return this._cachingRules;
  }

  // captchas - computed: true, optional: false, required: false
  private _captchas = new DataOciWaasWaasPolicyWafConfigCaptchasList(this, "captchas", false);
  public get captchas() {
    return this._captchas;
  }

  // custom_protection_rules - computed: true, optional: false, required: false
  private _customProtectionRules = new DataOciWaasWaasPolicyWafConfigCustomProtectionRulesList(this, "custom_protection_rules", false);
  public get customProtectionRules() {
    return this._customProtectionRules;
  }

  // device_fingerprint_challenge - computed: true, optional: false, required: false
  private _deviceFingerprintChallenge = new DataOciWaasWaasPolicyWafConfigDeviceFingerprintChallengeList(this, "device_fingerprint_challenge", false);
  public get deviceFingerprintChallenge() {
    return this._deviceFingerprintChallenge;
  }

  // human_interaction_challenge - computed: true, optional: false, required: false
  private _humanInteractionChallenge = new DataOciWaasWaasPolicyWafConfigHumanInteractionChallengeList(this, "human_interaction_challenge", false);
  public get humanInteractionChallenge() {
    return this._humanInteractionChallenge;
  }

  // js_challenge - computed: true, optional: false, required: false
  private _jsChallenge = new DataOciWaasWaasPolicyWafConfigJsChallengeList(this, "js_challenge", false);
  public get jsChallenge() {
    return this._jsChallenge;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // origin_groups - computed: true, optional: false, required: false
  public get originGroups() {
    return this.getListAttribute('origin_groups');
  }

  // protection_settings - computed: true, optional: false, required: false
  private _protectionSettings = new DataOciWaasWaasPolicyWafConfigProtectionSettingsList(this, "protection_settings", false);
  public get protectionSettings() {
    return this._protectionSettings;
  }

  // whitelists - computed: true, optional: false, required: false
  private _whitelists = new DataOciWaasWaasPolicyWafConfigWhitelistsList(this, "whitelists", false);
  public get whitelists() {
    return this._whitelists;
  }
}

export class DataOciWaasWaasPolicyWafConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPolicyWafConfigOutputReference {
    return new DataOciWaasWaasPolicyWafConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/waas_waas_policy oci_waas_waas_policy}
*/
export class DataOciWaasWaasPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waas_waas_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWaasWaasPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWaasWaasPolicy to import
  * @param importFromId The id of the existing DataOciWaasWaasPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/waas_waas_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWaasWaasPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waas_waas_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.28.0/docs/data-sources/waas_waas_policy oci_waas_waas_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWaasWaasPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWaasWaasPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_waas_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.28.0',
        providerVersionConstraint: '7.28.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._waasPolicyId = config.waasPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_domains - computed: true, optional: false, required: false
  public get additionalDomains() {
    return this.getListAttribute('additional_domains');
  }

  // cname - computed: true, optional: false, required: false
  public get cname() {
    return this.getStringAttribute('cname');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // origin_groups - computed: true, optional: false, required: false
  private _originGroups = new DataOciWaasWaasPolicyOriginGroupsList(this, "origin_groups", false);
  public get originGroups() {
    return this._originGroups;
  }

  // origins - computed: true, optional: false, required: false
  private _origins = new DataOciWaasWaasPolicyOriginsList(this, "origins", false);
  public get origins() {
    return this._origins;
  }

  // policy_config - computed: true, optional: false, required: false
  private _policyConfig = new DataOciWaasWaasPolicyPolicyConfigList(this, "policy_config", false);
  public get policyConfig() {
    return this._policyConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // waas_policy_id - computed: false, optional: false, required: true
  private _waasPolicyId?: string; 
  public get waasPolicyId() {
    return this.getStringAttribute('waas_policy_id');
  }
  public set waasPolicyId(value: string) {
    this._waasPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get waasPolicyIdInput() {
    return this._waasPolicyId;
  }

  // waf_config - computed: true, optional: false, required: false
  private _wafConfig = new DataOciWaasWaasPolicyWafConfigList(this, "waf_config", false);
  public get wafConfig() {
    return this._wafConfig;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      waas_policy_id: cdktf.stringToTerraform(this._waasPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      waas_policy_id: {
        value: cdktf.stringToHclTerraform(this._waasPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
