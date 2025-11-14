// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWaasWaasPoliciesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#compartment_id DataOciWaasWaasPolicies#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#display_names DataOciWaasWaasPolicies#display_names}
  */
  readonly displayNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#id DataOciWaasWaasPolicies#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#ids DataOciWaasWaasPolicies#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#states DataOciWaasWaasPolicies#states}
  */
  readonly states?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#time_created_greater_than_or_equal_to DataOciWaasWaasPolicies#time_created_greater_than_or_equal_to}
  */
  readonly timeCreatedGreaterThanOrEqualTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#time_created_less_than DataOciWaasWaasPolicies#time_created_less_than}
  */
  readonly timeCreatedLessThan?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#filter DataOciWaasWaasPolicies#filter}
  */
  readonly filter?: DataOciWaasWaasPoliciesFilter[] | cdktf.IResolvable;
}
export interface DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup {
}

export function dataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroup | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesOriginGroups {
}

export function dataOciWaasWaasPoliciesWaasPoliciesOriginGroupsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOriginGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesOriginGroupsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOriginGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesOriginGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesOriginGroups | undefined) {
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
  private _originGroup = new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOriginGroupList(this, "origin_group", false);
  public get originGroup() {
    return this._originGroup;
  }
}

export class DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders {
}

export function dataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeaders | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesOrigins {
}

export function dataOciWaasWaasPoliciesWaasPoliciesOriginsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesOriginsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesOrigins): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesOrigins | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesOrigins | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_headers - computed: true, optional: false, required: false
  private _customHeaders = new DataOciWaasWaasPoliciesWaasPoliciesOriginsCustomHeadersList(this, "custom_headers", false);
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

export class DataOciWaasWaasPoliciesWaasPoliciesOriginsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesOriginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks {
}

export function dataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecks | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod {
}

export function dataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethod | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig {
}

export function dataOciWaasWaasPoliciesWaasPoliciesPolicyConfigToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesPolicyConfigToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesPolicyConfig | undefined) {
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
  private _healthChecks = new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigHealthChecksList(this, "health_checks", false);
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
  private _loadBalancingMethod = new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigLoadBalancingMethodList(this, "load_balancing_method", false);
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

export class DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteria | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulation | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRules | undefined) {
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
  private _criteria = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesCriteriaList(this, "criteria", false);
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
  private _responseHeaderManipulation = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesResponseHeaderManipulationList(this, "response_header_manipulation", false);
  public get responseHeaderManipulation() {
    return this._responseHeaderManipulation;
  }
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimiting | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteria | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRules | undefined) {
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
  private _criteria = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesCriteriaList(this, "criteria", false);
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchas | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusions | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRules | undefined) {
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
  private _exclusions = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettings | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallenge | undefined) {
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
  private _challengeSettings = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeChallengeSettingsList(this, "challenge_settings", false);
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettings | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeader | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallenge | undefined) {
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
  private _challengeSettings = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeChallengeSettingsList(this, "challenge_settings", false);
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
  private _setHttpHeader = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeSetHttpHeaderList(this, "set_http_header", false);
  public get setHttpHeader() {
    return this._setHttpHeader;
  }
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettings | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteria | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeader | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallenge | undefined) {
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
  private _challengeSettings = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeChallengeSettingsList(this, "challenge_settings", false);
  public get challengeSettings() {
    return this._challengeSettings;
  }

  // criteria - computed: true, optional: false, required: false
  private _criteria = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeCriteriaList(this, "criteria", false);
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
  private _setHttpHeader = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeSetHttpHeaderList(this, "set_http_header", false);
  public get setHttpHeader() {
    return this._setHttpHeader;
  }
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettings | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelists | undefined) {
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

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPoliciesWafConfig {
}

export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigToTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesWafConfigToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPoliciesWafConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPoliciesWafConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPoliciesWafConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_rules - computed: true, optional: false, required: false
  private _accessRules = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAccessRulesList(this, "access_rules", false);
  public get accessRules() {
    return this._accessRules;
  }

  // address_rate_limiting - computed: true, optional: false, required: false
  private _addressRateLimiting = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigAddressRateLimitingList(this, "address_rate_limiting", false);
  public get addressRateLimiting() {
    return this._addressRateLimiting;
  }

  // caching_rules - computed: true, optional: false, required: false
  private _cachingRules = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCachingRulesList(this, "caching_rules", false);
  public get cachingRules() {
    return this._cachingRules;
  }

  // captchas - computed: true, optional: false, required: false
  private _captchas = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCaptchasList(this, "captchas", false);
  public get captchas() {
    return this._captchas;
  }

  // custom_protection_rules - computed: true, optional: false, required: false
  private _customProtectionRules = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigCustomProtectionRulesList(this, "custom_protection_rules", false);
  public get customProtectionRules() {
    return this._customProtectionRules;
  }

  // device_fingerprint_challenge - computed: true, optional: false, required: false
  private _deviceFingerprintChallenge = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigDeviceFingerprintChallengeList(this, "device_fingerprint_challenge", false);
  public get deviceFingerprintChallenge() {
    return this._deviceFingerprintChallenge;
  }

  // human_interaction_challenge - computed: true, optional: false, required: false
  private _humanInteractionChallenge = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigHumanInteractionChallengeList(this, "human_interaction_challenge", false);
  public get humanInteractionChallenge() {
    return this._humanInteractionChallenge;
  }

  // js_challenge - computed: true, optional: false, required: false
  private _jsChallenge = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigJsChallengeList(this, "js_challenge", false);
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
  private _protectionSettings = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigProtectionSettingsList(this, "protection_settings", false);
  public get protectionSettings() {
    return this._protectionSettings;
  }

  // whitelists - computed: true, optional: false, required: false
  private _whitelists = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigWhitelistsList(this, "whitelists", false);
  public get whitelists() {
    return this._whitelists;
  }
}

export class DataOciWaasWaasPoliciesWaasPoliciesWafConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesWafConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesWaasPolicies {
}

export function dataOciWaasWaasPoliciesWaasPoliciesToTerraform(struct?: DataOciWaasWaasPoliciesWaasPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWaasWaasPoliciesWaasPoliciesToHclTerraform(struct?: DataOciWaasWaasPoliciesWaasPolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWaasWaasPoliciesWaasPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesWaasPolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesWaasPolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // origin_groups - computed: true, optional: false, required: false
  private _originGroups = new DataOciWaasWaasPoliciesWaasPoliciesOriginGroupsList(this, "origin_groups", false);
  public get originGroups() {
    return this._originGroups;
  }

  // origins - computed: true, optional: false, required: false
  private _origins = new DataOciWaasWaasPoliciesWaasPoliciesOriginsList(this, "origins", false);
  public get origins() {
    return this._origins;
  }

  // policy_config - computed: true, optional: false, required: false
  private _policyConfig = new DataOciWaasWaasPoliciesWaasPoliciesPolicyConfigList(this, "policy_config", false);
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

  // waf_config - computed: true, optional: false, required: false
  private _wafConfig = new DataOciWaasWaasPoliciesWaasPoliciesWafConfigList(this, "waf_config", false);
  public get wafConfig() {
    return this._wafConfig;
  }
}

export class DataOciWaasWaasPoliciesWaasPoliciesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWaasWaasPoliciesWaasPoliciesOutputReference {
    return new DataOciWaasWaasPoliciesWaasPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWaasWaasPoliciesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#name DataOciWaasWaasPolicies#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#regex DataOciWaasWaasPolicies#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#values DataOciWaasWaasPolicies#values}
  */
  readonly values: string[];
}

export function dataOciWaasWaasPoliciesFilterToTerraform(struct?: DataOciWaasWaasPoliciesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    regex: cdktf.booleanToTerraform(struct!.regex),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function dataOciWaasWaasPoliciesFilterToHclTerraform(struct?: DataOciWaasWaasPoliciesFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex: {
      value: cdktf.booleanToHclTerraform(struct!.regex),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOciWaasWaasPoliciesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWaasWaasPoliciesFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._regex !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWaasWaasPoliciesFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._regex = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._regex = value.regex;
      this._values = value.values;
    }
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

  // regex - computed: false, optional: true, required: false
  private _regex?: boolean | cdktf.IResolvable; 
  public get regex() {
    return this.getBooleanAttribute('regex');
  }
  public set regex(value: boolean | cdktf.IResolvable) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataOciWaasWaasPoliciesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciWaasWaasPoliciesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciWaasWaasPoliciesFilterOutputReference {
    return new DataOciWaasWaasPoliciesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies oci_waas_waas_policies}
*/
export class DataOciWaasWaasPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waas_waas_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWaasWaasPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWaasWaasPolicies to import
  * @param importFromId The id of the existing DataOciWaasWaasPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWaasWaasPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waas_waas_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waas_waas_policies oci_waas_waas_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWaasWaasPoliciesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWaasWaasPoliciesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waas_waas_policies',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._displayNames = config.displayNames;
    this._id = config.id;
    this._ids = config.ids;
    this._states = config.states;
    this._timeCreatedGreaterThanOrEqualTo = config.timeCreatedGreaterThanOrEqualTo;
    this._timeCreatedLessThan = config.timeCreatedLessThan;
    this._filter.internalValue = config.filter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // display_names - computed: false, optional: true, required: false
  private _displayNames?: string[]; 
  public get displayNames() {
    return this.getListAttribute('display_names');
  }
  public set displayNames(value: string[]) {
    this._displayNames = value;
  }
  public resetDisplayNames() {
    this._displayNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNamesInput() {
    return this._displayNames;
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

  // ids - computed: false, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // states - computed: false, optional: true, required: false
  private _states?: string[]; 
  public get states() {
    return this.getListAttribute('states');
  }
  public set states(value: string[]) {
    this._states = value;
  }
  public resetStates() {
    this._states = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statesInput() {
    return this._states;
  }

  // time_created_greater_than_or_equal_to - computed: false, optional: true, required: false
  private _timeCreatedGreaterThanOrEqualTo?: string; 
  public get timeCreatedGreaterThanOrEqualTo() {
    return this.getStringAttribute('time_created_greater_than_or_equal_to');
  }
  public set timeCreatedGreaterThanOrEqualTo(value: string) {
    this._timeCreatedGreaterThanOrEqualTo = value;
  }
  public resetTimeCreatedGreaterThanOrEqualTo() {
    this._timeCreatedGreaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedGreaterThanOrEqualToInput() {
    return this._timeCreatedGreaterThanOrEqualTo;
  }

  // time_created_less_than - computed: false, optional: true, required: false
  private _timeCreatedLessThan?: string; 
  public get timeCreatedLessThan() {
    return this.getStringAttribute('time_created_less_than');
  }
  public set timeCreatedLessThan(value: string) {
    this._timeCreatedLessThan = value;
  }
  public resetTimeCreatedLessThan() {
    this._timeCreatedLessThan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeCreatedLessThanInput() {
    return this._timeCreatedLessThan;
  }

  // waas_policies - computed: true, optional: false, required: false
  private _waasPolicies = new DataOciWaasWaasPoliciesWaasPoliciesList(this, "waas_policies", false);
  public get waasPolicies() {
    return this._waasPolicies;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciWaasWaasPoliciesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciWaasWaasPoliciesFilter[] | cdktf.IResolvable) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      display_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._displayNames),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      states: cdktf.listMapper(cdktf.stringToTerraform, false)(this._states),
      time_created_greater_than_or_equal_to: cdktf.stringToTerraform(this._timeCreatedGreaterThanOrEqualTo),
      time_created_less_than: cdktf.stringToTerraform(this._timeCreatedLessThan),
      filter: cdktf.listMapper(dataOciWaasWaasPoliciesFilterToTerraform, true)(this._filter.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._displayNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      states: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._states),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_created_greater_than_or_equal_to: {
        value: cdktf.stringToHclTerraform(this._timeCreatedGreaterThanOrEqualTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_created_less_than: {
        value: cdktf.stringToHclTerraform(this._timeCreatedLessThan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciWaasWaasPoliciesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciWaasWaasPoliciesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
