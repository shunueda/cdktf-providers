// https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/systemlimits
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAviSystemlimitsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/systemlimits#id DataAviSystemlimits#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/systemlimits#uuid DataAviSystemlimits#uuid}
  */
  readonly uuid?: string;
}
export interface DataAviSystemlimitsConfigpbAttributes {
}

export function dataAviSystemlimitsConfigpbAttributesToTerraform(struct?: DataAviSystemlimitsConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsConfigpbAttributesToHclTerraform(struct?: DataAviSystemlimitsConfigpbAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsConfigpbAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsConfigpbAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataAviSystemlimitsConfigpbAttributesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsConfigpbAttributesOutputReference {
    return new DataAviSystemlimitsConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimitsBotLimits {
}

export function dataAviSystemlimitsControllerLimitsBotLimitsToTerraform(struct?: DataAviSystemlimitsControllerLimitsBotLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsBotLimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimitsBotLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsBotLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimitsBotLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimitsBotLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_rules - computed: true, optional: false, required: false
  public get allowRules() {
    return this.getStringAttribute('allow_rules');
  }

  // hdrs - computed: true, optional: false, required: false
  public get hdrs() {
    return this.getStringAttribute('hdrs');
  }

  // mapping_rules - computed: true, optional: false, required: false
  public get mappingRules() {
    return this.getStringAttribute('mapping_rules');
  }
}

export class DataAviSystemlimitsControllerLimitsBotLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsBotLimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsBotLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimitsControllerCloudLimits {
}

export function dataAviSystemlimitsControllerLimitsControllerCloudLimitsToTerraform(struct?: DataAviSystemlimitsControllerLimitsControllerCloudLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsControllerCloudLimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimitsControllerCloudLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsControllerCloudLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimitsControllerCloudLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimitsControllerCloudLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_clouds - computed: true, optional: false, required: false
  public get numClouds() {
    return this.getStringAttribute('num_clouds');
  }

  // t1_lrs_per_cloud - computed: true, optional: false, required: false
  public get t1LrsPerCloud() {
    return this.getStringAttribute('t1_lrs_per_cloud');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviSystemlimitsControllerLimitsControllerCloudLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsControllerCloudLimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsControllerCloudLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits {
}

export function dataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsToTerraform(struct?: DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_clouds - computed: true, optional: false, required: false
  public get numClouds() {
    return this.getStringAttribute('num_clouds');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimitsControllerSizingLimits {
}

export function dataAviSystemlimitsControllerLimitsControllerSizingLimitsToTerraform(struct?: DataAviSystemlimitsControllerLimitsControllerSizingLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsControllerSizingLimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimitsControllerSizingLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsControllerSizingLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimitsControllerSizingLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimitsControllerSizingLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // controller_sizing_cloud_limits - computed: true, optional: false, required: false
  private _controllerSizingCloudLimits = new DataAviSystemlimitsControllerLimitsControllerSizingLimitsControllerSizingCloudLimitsList(this, "controller_sizing_cloud_limits", false);
  public get controllerSizingCloudLimits() {
    return this._controllerSizingCloudLimits;
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // num_clouds - computed: true, optional: false, required: false
  public get numClouds() {
    return this.getStringAttribute('num_clouds');
  }

  // num_east_west_virtualservices - computed: true, optional: false, required: false
  public get numEastWestVirtualservices() {
    return this.getStringAttribute('num_east_west_virtualservices');
  }

  // num_servers - computed: true, optional: false, required: false
  public get numServers() {
    return this.getStringAttribute('num_servers');
  }

  // num_serviceengines - computed: true, optional: false, required: false
  public get numServiceengines() {
    return this.getStringAttribute('num_serviceengines');
  }

  // num_tenants - computed: true, optional: false, required: false
  public get numTenants() {
    return this.getStringAttribute('num_tenants');
  }

  // num_virtualservices - computed: true, optional: false, required: false
  public get numVirtualservices() {
    return this.getStringAttribute('num_virtualservices');
  }

  // num_virtualservices_rt_metrics - computed: true, optional: false, required: false
  public get numVirtualservicesRtMetrics() {
    return this.getStringAttribute('num_virtualservices_rt_metrics');
  }

  // num_vrfs - computed: true, optional: false, required: false
  public get numVrfs() {
    return this.getStringAttribute('num_vrfs');
  }

  // num_waf_virtualservices - computed: true, optional: false, required: false
  public get numWafVirtualservices() {
    return this.getStringAttribute('num_waf_virtualservices');
  }
}

export class DataAviSystemlimitsControllerLimitsControllerSizingLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsControllerSizingLimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsControllerSizingLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimitsIpaddressLimits {
}

export function dataAviSystemlimitsControllerLimitsIpaddressLimitsToTerraform(struct?: DataAviSystemlimitsControllerLimitsIpaddressLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsIpaddressLimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimitsIpaddressLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsIpaddressLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimitsIpaddressLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimitsIpaddressLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address_group_per_match_criteria - computed: true, optional: false, required: false
  public get ipAddressGroupPerMatchCriteria() {
    return this.getStringAttribute('ip_address_group_per_match_criteria');
  }

  // ip_address_prefix_per_match_criteria - computed: true, optional: false, required: false
  public get ipAddressPrefixPerMatchCriteria() {
    return this.getStringAttribute('ip_address_prefix_per_match_criteria');
  }

  // ip_address_range_per_match_criteria - computed: true, optional: false, required: false
  public get ipAddressRangePerMatchCriteria() {
    return this.getStringAttribute('ip_address_range_per_match_criteria');
  }

  // ip_addresses_per_match_criteria - computed: true, optional: false, required: false
  public get ipAddressesPerMatchCriteria() {
    return this.getStringAttribute('ip_addresses_per_match_criteria');
  }
}

export class DataAviSystemlimitsControllerLimitsIpaddressLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsIpaddressLimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsIpaddressLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimitsL7Limits {
}

export function dataAviSystemlimitsControllerLimitsL7LimitsToTerraform(struct?: DataAviSystemlimitsControllerLimitsL7Limits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsL7LimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimitsL7Limits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsL7LimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimitsL7Limits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimitsL7Limits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_policies_per_vs - computed: true, optional: false, required: false
  public get httpPoliciesPerVs() {
    return this.getStringAttribute('http_policies_per_vs');
  }

  // num_compression_filters - computed: true, optional: false, required: false
  public get numCompressionFilters() {
    return this.getStringAttribute('num_compression_filters');
  }

  // num_custom_str - computed: true, optional: false, required: false
  public get numCustomStr() {
    return this.getStringAttribute('num_custom_str');
  }

  // num_matches_per_rule - computed: true, optional: false, required: false
  public get numMatchesPerRule() {
    return this.getStringAttribute('num_matches_per_rule');
  }

  // num_rules_per_evh_host - computed: true, optional: false, required: false
  public get numRulesPerEvhHost() {
    return this.getStringAttribute('num_rules_per_evh_host');
  }

  // num_rules_per_http_policy - computed: true, optional: false, required: false
  public get numRulesPerHttpPolicy() {
    return this.getStringAttribute('num_rules_per_http_policy');
  }

  // num_strgroups_per_match - computed: true, optional: false, required: false
  public get numStrgroupsPerMatch() {
    return this.getStringAttribute('num_strgroups_per_match');
  }

  // str_cache_mime - computed: true, optional: false, required: false
  public get strCacheMime() {
    return this.getStringAttribute('str_cache_mime');
  }

  // str_groups_cache_mime - computed: true, optional: false, required: false
  public get strGroupsCacheMime() {
    return this.getStringAttribute('str_groups_cache_mime');
  }

  // str_groups_no_cache_mime - computed: true, optional: false, required: false
  public get strGroupsNoCacheMime() {
    return this.getStringAttribute('str_groups_no_cache_mime');
  }

  // str_groups_no_cache_uri - computed: true, optional: false, required: false
  public get strGroupsNoCacheUri() {
    return this.getStringAttribute('str_groups_no_cache_uri');
  }

  // str_no_cache_mime - computed: true, optional: false, required: false
  public get strNoCacheMime() {
    return this.getStringAttribute('str_no_cache_mime');
  }

  // str_no_cache_uri - computed: true, optional: false, required: false
  public get strNoCacheUri() {
    return this.getStringAttribute('str_no_cache_uri');
  }
}

export class DataAviSystemlimitsControllerLimitsL7LimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsL7LimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsL7LimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimitsWafLimits {
}

export function dataAviSystemlimitsControllerLimitsWafLimitsToTerraform(struct?: DataAviSystemlimitsControllerLimitsWafLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsWafLimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimitsWafLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsWafLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimitsWafLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimitsWafLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // num_allowed_content_types - computed: true, optional: false, required: false
  public get numAllowedContentTypes() {
    return this.getStringAttribute('num_allowed_content_types');
  }

  // num_allowed_request_content_type_charsets - computed: true, optional: false, required: false
  public get numAllowedRequestContentTypeCharsets() {
    return this.getStringAttribute('num_allowed_request_content_type_charsets');
  }

  // num_allowlist_policy_rules - computed: true, optional: false, required: false
  public get numAllowlistPolicyRules() {
    return this.getStringAttribute('num_allowlist_policy_rules');
  }

  // num_applications - computed: true, optional: false, required: false
  public get numApplications() {
    return this.getStringAttribute('num_applications');
  }

  // num_content_type_mappings - computed: true, optional: false, required: false
  public get numContentTypeMappings() {
    return this.getStringAttribute('num_content_type_mappings');
  }

  // num_data_files - computed: true, optional: false, required: false
  public get numDataFiles() {
    return this.getStringAttribute('num_data_files');
  }

  // num_exclude_list_per_rule_group - computed: true, optional: false, required: false
  public get numExcludeListPerRuleGroup() {
    return this.getStringAttribute('num_exclude_list_per_rule_group');
  }

  // num_pre_post_crs_groups - computed: true, optional: false, required: false
  public get numPrePostCrsGroups() {
    return this.getStringAttribute('num_pre_post_crs_groups');
  }

  // num_psm_groups - computed: true, optional: false, required: false
  public get numPsmGroups() {
    return this.getStringAttribute('num_psm_groups');
  }

  // num_psm_match_elements - computed: true, optional: false, required: false
  public get numPsmMatchElements() {
    return this.getStringAttribute('num_psm_match_elements');
  }

  // num_psm_match_rules_per_loc - computed: true, optional: false, required: false
  public get numPsmMatchRulesPerLoc() {
    return this.getStringAttribute('num_psm_match_rules_per_loc');
  }

  // num_psm_total_locations - computed: true, optional: false, required: false
  public get numPsmTotalLocations() {
    return this.getStringAttribute('num_psm_total_locations');
  }

  // num_restricted_extensions - computed: true, optional: false, required: false
  public get numRestrictedExtensions() {
    return this.getStringAttribute('num_restricted_extensions');
  }

  // num_restricted_headers - computed: true, optional: false, required: false
  public get numRestrictedHeaders() {
    return this.getStringAttribute('num_restricted_headers');
  }

  // num_rule_tags - computed: true, optional: false, required: false
  public get numRuleTags() {
    return this.getStringAttribute('num_rule_tags');
  }

  // num_rules_per_rulegroup - computed: true, optional: false, required: false
  public get numRulesPerRulegroup() {
    return this.getStringAttribute('num_rules_per_rulegroup');
  }

  // num_static_extensions - computed: true, optional: false, required: false
  public get numStaticExtensions() {
    return this.getStringAttribute('num_static_extensions');
  }
}

export class DataAviSystemlimitsControllerLimitsWafLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsWafLimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsWafLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerLimits {
}

export function dataAviSystemlimitsControllerLimitsToTerraform(struct?: DataAviSystemlimitsControllerLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerLimitsToHclTerraform(struct?: DataAviSystemlimitsControllerLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bot_limits - computed: true, optional: false, required: false
  private _botLimits = new DataAviSystemlimitsControllerLimitsBotLimitsList(this, "bot_limits", true);
  public get botLimits() {
    return this._botLimits;
  }

  // certificates_per_virtualservice - computed: true, optional: false, required: false
  public get certificatesPerVirtualservice() {
    return this.getStringAttribute('certificates_per_virtualservice');
  }

  // controller_cloud_limits - computed: true, optional: false, required: false
  private _controllerCloudLimits = new DataAviSystemlimitsControllerLimitsControllerCloudLimitsList(this, "controller_cloud_limits", false);
  public get controllerCloudLimits() {
    return this._controllerCloudLimits;
  }

  // controller_sizing_limits - computed: true, optional: false, required: false
  private _controllerSizingLimits = new DataAviSystemlimitsControllerLimitsControllerSizingLimitsList(this, "controller_sizing_limits", false);
  public get controllerSizingLimits() {
    return this._controllerSizingLimits;
  }

  // default_routes_per_vrfcontext - computed: true, optional: false, required: false
  public get defaultRoutesPerVrfcontext() {
    return this.getStringAttribute('default_routes_per_vrfcontext');
  }

  // gateway_mon_per_vrf - computed: true, optional: false, required: false
  public get gatewayMonPerVrf() {
    return this.getStringAttribute('gateway_mon_per_vrf');
  }

  // ipaddress_limits - computed: true, optional: false, required: false
  private _ipaddressLimits = new DataAviSystemlimitsControllerLimitsIpaddressLimitsList(this, "ipaddress_limits", true);
  public get ipaddressLimits() {
    return this._ipaddressLimits;
  }

  // ips_per_ipgroup - computed: true, optional: false, required: false
  public get ipsPerIpgroup() {
    return this.getStringAttribute('ips_per_ipgroup');
  }

  // l7_limits - computed: true, optional: false, required: false
  private _l7Limits = new DataAviSystemlimitsControllerLimitsL7LimitsList(this, "l7_limits", true);
  public get l7Limits() {
    return this._l7Limits;
  }

  // poolgroups_per_virtualservice - computed: true, optional: false, required: false
  public get poolgroupsPerVirtualservice() {
    return this.getStringAttribute('poolgroups_per_virtualservice');
  }

  // pools_per_poolgroup - computed: true, optional: false, required: false
  public get poolsPerPoolgroup() {
    return this.getStringAttribute('pools_per_poolgroup');
  }

  // pools_per_virtualservice - computed: true, optional: false, required: false
  public get poolsPerVirtualservice() {
    return this.getStringAttribute('pools_per_virtualservice');
  }

  // routes_per_vrfcontext - computed: true, optional: false, required: false
  public get routesPerVrfcontext() {
    return this.getStringAttribute('routes_per_vrfcontext');
  }

  // rules_per_nat_policy - computed: true, optional: false, required: false
  public get rulesPerNatPolicy() {
    return this.getStringAttribute('rules_per_nat_policy');
  }

  // rules_per_networksecuritypolicy - computed: true, optional: false, required: false
  public get rulesPerNetworksecuritypolicy() {
    return this.getStringAttribute('rules_per_networksecuritypolicy');
  }

  // servers_per_pool - computed: true, optional: false, required: false
  public get serversPerPool() {
    return this.getStringAttribute('servers_per_pool');
  }

  // sni_children_per_parent - computed: true, optional: false, required: false
  public get sniChildrenPerParent() {
    return this.getStringAttribute('sni_children_per_parent');
  }

  // strings_per_stringgroup - computed: true, optional: false, required: false
  public get stringsPerStringgroup() {
    return this.getStringAttribute('strings_per_stringgroup');
  }

  // vs_bgp_scaleout - computed: true, optional: false, required: false
  public get vsBgpScaleout() {
    return this.getStringAttribute('vs_bgp_scaleout');
  }

  // vs_l2_scaleout - computed: true, optional: false, required: false
  public get vsL2Scaleout() {
    return this.getStringAttribute('vs_l2_scaleout');
  }

  // waf_limits - computed: true, optional: false, required: false
  private _wafLimits = new DataAviSystemlimitsControllerLimitsWafLimitsList(this, "waf_limits", true);
  public get wafLimits() {
    return this._wafLimits;
  }
}

export class DataAviSystemlimitsControllerLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerLimitsOutputReference {
    return new DataAviSystemlimitsControllerLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsControllerSizes {
}

export function dataAviSystemlimitsControllerSizesToTerraform(struct?: DataAviSystemlimitsControllerSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsControllerSizesToHclTerraform(struct?: DataAviSystemlimitsControllerSizes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsControllerSizesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsControllerSizes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsControllerSizes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // flavor - computed: true, optional: false, required: false
  public get flavor() {
    return this.getStringAttribute('flavor');
  }

  // min_cpus - computed: true, optional: false, required: false
  public get minCpus() {
    return this.getStringAttribute('min_cpus');
  }

  // min_memory - computed: true, optional: false, required: false
  public get minMemory() {
    return this.getStringAttribute('min_memory');
  }
}

export class DataAviSystemlimitsControllerSizesList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsControllerSizesOutputReference {
    return new DataAviSystemlimitsControllerSizesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimits {
}

export function dataAviSystemlimitsServiceengineLimitsServiceengineCloudLimitsToTerraform(struct?: DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsServiceengineLimitsServiceengineCloudLimitsToHclTerraform(struct?: DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // vrfs_per_serviceengine - computed: true, optional: false, required: false
  public get vrfsPerServiceengine() {
    return this.getStringAttribute('vrfs_per_serviceengine');
  }
}

export class DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimitsOutputReference {
    return new DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAviSystemlimitsServiceengineLimits {
}

export function dataAviSystemlimitsServiceengineLimitsToTerraform(struct?: DataAviSystemlimitsServiceengineLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAviSystemlimitsServiceengineLimitsToHclTerraform(struct?: DataAviSystemlimitsServiceengineLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAviSystemlimitsServiceengineLimitsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAviSystemlimitsServiceengineLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAviSystemlimitsServiceengineLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_virtualservices_per_serviceengine - computed: true, optional: false, required: false
  public get allVirtualservicesPerServiceengine() {
    return this.getStringAttribute('all_virtualservices_per_serviceengine');
  }

  // ew_virtualservices_per_serviceengine - computed: true, optional: false, required: false
  public get ewVirtualservicesPerServiceengine() {
    return this.getStringAttribute('ew_virtualservices_per_serviceengine');
  }

  // ns_virtualservices_per_serviceengine - computed: true, optional: false, required: false
  public get nsVirtualservicesPerServiceengine() {
    return this.getStringAttribute('ns_virtualservices_per_serviceengine');
  }

  // num_logical_intf_per_se - computed: true, optional: false, required: false
  public get numLogicalIntfPerSe() {
    return this.getStringAttribute('num_logical_intf_per_se');
  }

  // num_phy_intf_per_se - computed: true, optional: false, required: false
  public get numPhyIntfPerSe() {
    return this.getStringAttribute('num_phy_intf_per_se');
  }

  // num_virtualservices_rt_metrics - computed: true, optional: false, required: false
  public get numVirtualservicesRtMetrics() {
    return this.getStringAttribute('num_virtualservices_rt_metrics');
  }

  // num_vlan_intf_per_phy_intf - computed: true, optional: false, required: false
  public get numVlanIntfPerPhyIntf() {
    return this.getStringAttribute('num_vlan_intf_per_phy_intf');
  }

  // num_vlan_intf_per_se - computed: true, optional: false, required: false
  public get numVlanIntfPerSe() {
    return this.getStringAttribute('num_vlan_intf_per_se');
  }

  // serviceengine_cloud_limits - computed: true, optional: false, required: false
  private _serviceengineCloudLimits = new DataAviSystemlimitsServiceengineLimitsServiceengineCloudLimitsList(this, "serviceengine_cloud_limits", false);
  public get serviceengineCloudLimits() {
    return this._serviceengineCloudLimits;
  }
}

export class DataAviSystemlimitsServiceengineLimitsList extends cdktf.ComplexList {

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
  public get(index: number): DataAviSystemlimitsServiceengineLimitsOutputReference {
    return new DataAviSystemlimitsServiceengineLimitsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/systemlimits avi_systemlimits}
*/
export class DataAviSystemlimits extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_systemlimits";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAviSystemlimits resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAviSystemlimits to import
  * @param importFromId The id of the existing DataAviSystemlimits that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/systemlimits#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAviSystemlimits to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_systemlimits", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/30.2.6/docs/data-sources/systemlimits avi_systemlimits} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAviSystemlimitsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAviSystemlimitsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'avi_systemlimits',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '30.2.6',
        providerVersionConstraint: '30.2.6'
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
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configpb_attributes - computed: true, optional: false, required: false
  private _configpbAttributes = new DataAviSystemlimitsConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }

  // controller_limits - computed: true, optional: false, required: false
  private _controllerLimits = new DataAviSystemlimitsControllerLimitsList(this, "controller_limits", true);
  public get controllerLimits() {
    return this._controllerLimits;
  }

  // controller_sizes - computed: true, optional: false, required: false
  private _controllerSizes = new DataAviSystemlimitsControllerSizesList(this, "controller_sizes", false);
  public get controllerSizes() {
    return this._controllerSizes;
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

  // serviceengine_limits - computed: true, optional: false, required: false
  private _serviceengineLimits = new DataAviSystemlimitsServiceengineLimitsList(this, "serviceengine_limits", true);
  public get serviceengineLimits() {
    return this._serviceengineLimits;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
