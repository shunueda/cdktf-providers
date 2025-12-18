// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciVisualBuilderVbInstancesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#compartment_id DataOciVisualBuilderVbInstances#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#display_name DataOciVisualBuilderVbInstances#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#id DataOciVisualBuilderVbInstances#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#state DataOciVisualBuilderVbInstances#state}
  */
  readonly state?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#filter DataOciVisualBuilderVbInstances#filter}
  */
  readonly filter?: DataOciVisualBuilderVbInstancesFilter[] | cdktf.IResolvable;
}
export interface DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints {
}

export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsToTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsToHclTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_secret_id - computed: true, optional: false, required: false
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference {
    return new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint {
}

export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointToTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointToHclTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_secret_id - computed: true, optional: false, required: false
  public get certificateSecretId() {
    return this.getStringAttribute('certificate_secret_id');
  }

  // certificate_secret_version - computed: true, optional: false, required: false
  public get certificateSecretVersion() {
    return this.getNumberAttribute('certificate_secret_version');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference {
    return new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcns {
}

export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcnsToTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcnsToHclTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlisted_ip_cidrs - computed: true, optional: false, required: false
  public get allowlistedIpCidrs() {
    return this.getListAttribute('allowlisted_ip_cidrs');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcnsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference {
    return new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetails {
}

export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsToTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsToHclTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowlisted_http_ips - computed: true, optional: false, required: false
  public get allowlistedHttpIps() {
    return this.getListAttribute('allowlisted_http_ips');
  }

  // allowlisted_http_vcns - computed: true, optional: false, required: false
  private _allowlistedHttpVcns = new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsAllowlistedHttpVcnsList(this, "allowlisted_http_vcns", false);
  public get allowlistedHttpVcns() {
    return this._allowlistedHttpVcns;
  }

  // network_endpoint_type - computed: true, optional: false, required: false
  public get networkEndpointType() {
    return this.getStringAttribute('network_endpoint_type');
  }

  // network_security_group_ids - computed: true, optional: false, required: false
  public get networkSecurityGroupIds() {
    return this.getListAttribute('network_security_group_ids');
  }

  // private_endpoint_ip - computed: true, optional: false, required: false
  public get privateEndpointIp() {
    return this.getStringAttribute('private_endpoint_ip');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsOutputReference {
    return new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems {
}

export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsToTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsToHclTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItems | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // alternate_custom_endpoints - computed: true, optional: false, required: false
  private _alternateCustomEndpoints = new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsAlternateCustomEndpointsList(this, "alternate_custom_endpoints", false);
  public get alternateCustomEndpoints() {
    return this._alternateCustomEndpoints;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // consumption_model - computed: true, optional: false, required: false
  public get consumptionModel() {
    return this.getStringAttribute('consumption_model');
  }

  // custom_endpoint - computed: true, optional: false, required: false
  private _customEndpoint = new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsCustomEndpointList(this, "custom_endpoint", false);
  public get customEndpoint() {
    return this._customEndpoint;
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

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // idcs_open_id - computed: true, optional: false, required: false
  public get idcsOpenId() {
    return this.getStringAttribute('idcs_open_id');
  }

  // instance_url - computed: true, optional: false, required: false
  public get instanceUrl() {
    return this.getStringAttribute('instance_url');
  }

  // is_visual_builder_enabled - computed: true, optional: false, required: false
  public get isVisualBuilderEnabled() {
    return this.getBooleanAttribute('is_visual_builder_enabled');
  }

  // management_nat_gateway_ip - computed: true, optional: false, required: false
  public get managementNatGatewayIp() {
    return this.getStringAttribute('management_nat_gateway_ip');
  }

  // management_vcn_id - computed: true, optional: false, required: false
  public get managementVcnId() {
    return this.getStringAttribute('management_vcn_id');
  }

  // network_endpoint_details - computed: true, optional: false, required: false
  private _networkEndpointDetails = new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsNetworkEndpointDetailsList(this, "network_endpoint_details", false);
  public get networkEndpointDetails() {
    return this._networkEndpointDetails;
  }

  // node_count - computed: true, optional: false, required: false
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }

  // service_nat_gateway_ip - computed: true, optional: false, required: false
  public get serviceNatGatewayIp() {
    return this.getStringAttribute('service_nat_gateway_ip');
  }

  // service_vcn_id - computed: true, optional: false, required: false
  public get serviceVcnId() {
    return this.getStringAttribute('service_vcn_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // state_message - computed: true, optional: false, required: false
  public get stateMessage() {
    return this.getStringAttribute('state_message');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference {
    return new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection {
}

export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionToTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionToHclTerraform(struct?: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciVisualBuilderVbInstancesVbInstanceSummaryCollection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // items - computed: true, optional: false, required: false
  private _items = new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
}

export class DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference {
    return new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciVisualBuilderVbInstancesFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#name DataOciVisualBuilderVbInstances#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#regex DataOciVisualBuilderVbInstances#regex}
  */
  readonly regex?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#values DataOciVisualBuilderVbInstances#values}
  */
  readonly values: string[];
}

export function dataOciVisualBuilderVbInstancesFilterToTerraform(struct?: DataOciVisualBuilderVbInstancesFilter | cdktf.IResolvable): any {
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


export function dataOciVisualBuilderVbInstancesFilterToHclTerraform(struct?: DataOciVisualBuilderVbInstancesFilter | cdktf.IResolvable): any {
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

export class DataOciVisualBuilderVbInstancesFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciVisualBuilderVbInstancesFilter | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataOciVisualBuilderVbInstancesFilter | cdktf.IResolvable | undefined) {
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

export class DataOciVisualBuilderVbInstancesFilterList extends cdktf.ComplexList {
  public internalValue? : DataOciVisualBuilderVbInstancesFilter[] | cdktf.IResolvable

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
  public get(index: number): DataOciVisualBuilderVbInstancesFilterOutputReference {
    return new DataOciVisualBuilderVbInstancesFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances oci_visual_builder_vb_instances}
*/
export class DataOciVisualBuilderVbInstances extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_visual_builder_vb_instances";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciVisualBuilderVbInstances resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciVisualBuilderVbInstances to import
  * @param importFromId The id of the existing DataOciVisualBuilderVbInstances that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciVisualBuilderVbInstances to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_visual_builder_vb_instances", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/visual_builder_vb_instances oci_visual_builder_vb_instances} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciVisualBuilderVbInstancesConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciVisualBuilderVbInstancesConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_visual_builder_vb_instances',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._state = config.state;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // vb_instance_summary_collection - computed: true, optional: false, required: false
  private _vbInstanceSummaryCollection = new DataOciVisualBuilderVbInstancesVbInstanceSummaryCollectionList(this, "vb_instance_summary_collection", false);
  public get vbInstanceSummaryCollection() {
    return this._vbInstanceSummaryCollection;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataOciVisualBuilderVbInstancesFilterList(this, "filter", true);
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataOciVisualBuilderVbInstancesFilter[] | cdktf.IResolvable) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      filter: cdktf.listMapper(dataOciVisualBuilderVbInstancesFilterToTerraform, true)(this._filter.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.listMapperHcl(dataOciVisualBuilderVbInstancesFilterToHclTerraform, true)(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataOciVisualBuilderVbInstancesFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
