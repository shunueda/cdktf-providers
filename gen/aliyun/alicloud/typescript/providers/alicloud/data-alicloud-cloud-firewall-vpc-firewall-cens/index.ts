// https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudFirewallVpcFirewallCensConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#cen_id DataAlicloudCloudFirewallVpcFirewallCens#cen_id}
  */
  readonly cenId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#id DataAlicloudCloudFirewallVpcFirewallCens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#ids DataAlicloudCloudFirewallVpcFirewallCens#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#lang DataAlicloudCloudFirewallVpcFirewallCens#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#member_uid DataAlicloudCloudFirewallVpcFirewallCens#member_uid}
  */
  readonly memberUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#network_instance_id DataAlicloudCloudFirewallVpcFirewallCens#network_instance_id}
  */
  readonly networkInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#output_file DataAlicloudCloudFirewallVpcFirewallCens#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#page_number DataAlicloudCloudFirewallVpcFirewallCens#page_number}
  */
  readonly pageNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#page_size DataAlicloudCloudFirewallVpcFirewallCens#page_size}
  */
  readonly pageSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#status DataAlicloudCloudFirewallVpcFirewallCens#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#vpc_firewall_id DataAlicloudCloudFirewallVpcFirewallCens#vpc_firewall_id}
  */
  readonly vpcFirewallId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#vpc_firewall_name DataAlicloudCloudFirewallVpcFirewallCens#vpc_firewall_name}
  */
  readonly vpcFirewallName?: string;
}
export interface DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStruct {
}

export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStructToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStructToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // eni_id - computed: true, optional: false, required: false
  public get eniId() {
    return this.getStringAttribute('eni_id');
  }

  // eni_private_ip_address - computed: true, optional: false, required: false
  public get eniPrivateIpAddress() {
    return this.getStringAttribute('eni_private_ip_address');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStructOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStruct {
}

export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStructToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStructToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // destination_cidr - computed: true, optional: false, required: false
  public get destinationCidr() {
    return this.getStringAttribute('destination_cidr');
  }

  // next_hop_instance_id - computed: true, optional: false, required: false
  public get nextHopInstanceId() {
    return this.getStringAttribute('next_hop_instance_id');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStructOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStruct {
}

export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStructToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStructToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_entry_list - computed: true, optional: false, required: false
  private _routeEntryList = new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListRouteEntryListStructList(this, "route_entry_list", false);
  public get routeEntryList() {
    return this._routeEntryList;
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStructOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpc {
}

export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // attachment_id - computed: true, optional: false, required: false
  public get attachmentId() {
    return this.getStringAttribute('attachment_id');
  }

  // attachment_name - computed: true, optional: false, required: false
  public get attachmentName() {
    return this.getStringAttribute('attachment_name');
  }

  // defend_cidr_list - computed: true, optional: false, required: false
  public get defendCidrList() {
    return this.getListAttribute('defend_cidr_list');
  }

  // eni_list - computed: true, optional: false, required: false
  private _eniList = new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcEniListStructList(this, "eni_list", false);
  public get eniList() {
    return this._eniList;
  }

  // manual_vswitch_id - computed: true, optional: false, required: false
  public get manualVswitchId() {
    return this.getStringAttribute('manual_vswitch_id');
  }

  // network_instance_id - computed: true, optional: false, required: false
  public get networkInstanceId() {
    return this.getStringAttribute('network_instance_id');
  }

  // network_instance_name - computed: true, optional: false, required: false
  public get networkInstanceName() {
    return this.getStringAttribute('network_instance_name');
  }

  // network_instance_type - computed: true, optional: false, required: false
  public get networkInstanceType() {
    return this.getStringAttribute('network_instance_type');
  }

  // owner_id - computed: true, optional: false, required: false
  public get ownerId() {
    return this.getStringAttribute('owner_id');
  }

  // region_no - computed: true, optional: false, required: false
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }

  // route_mode - computed: true, optional: false, required: false
  public get routeMode() {
    return this.getStringAttribute('route_mode');
  }

  // support_manual_mode - computed: true, optional: false, required: false
  public get supportManualMode() {
    return this.getStringAttribute('support_manual_mode');
  }

  // transit_router_id - computed: true, optional: false, required: false
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }

  // transit_router_type - computed: true, optional: false, required: false
  public get transitRouterType() {
    return this.getStringAttribute('transit_router_type');
  }

  // vpc_cidr_table_list - computed: true, optional: false, required: false
  private _vpcCidrTableList = new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcVpcCidrTableListStructList(this, "vpc_cidr_table_list", false);
  public get vpcCidrTableList() {
    return this._vpcCidrTableList;
  }

  // vpc_id - computed: true, optional: false, required: false
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallCensCens {
}

export function dataAlicloudCloudFirewallVpcFirewallCensCensToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallCensCensToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallCensCens): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallCensCens | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallCensCens | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cen_id - computed: true, optional: false, required: false
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }

  // connect_type - computed: true, optional: false, required: false
  public get connectType() {
    return this.getStringAttribute('connect_type');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // local_vpc - computed: true, optional: false, required: false
  private _localVpc = new DataAlicloudCloudFirewallVpcFirewallCensCensLocalVpcList(this, "local_vpc", false);
  public get localVpc() {
    return this._localVpc;
  }

  // network_instance_id - computed: true, optional: false, required: false
  public get networkInstanceId() {
    return this.getStringAttribute('network_instance_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // vpc_firewall_id - computed: true, optional: false, required: false
  public get vpcFirewallId() {
    return this.getStringAttribute('vpc_firewall_id');
  }

  // vpc_firewall_name - computed: true, optional: false, required: false
  public get vpcFirewallName() {
    return this.getStringAttribute('vpc_firewall_name');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallCensCensList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallCensCensOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallCensCensOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens alicloud_cloud_firewall_vpc_firewall_cens}
*/
export class DataAlicloudCloudFirewallVpcFirewallCens extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_firewall_cens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudFirewallVpcFirewallCens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudFirewallVpcFirewallCens to import
  * @param importFromId The id of the existing DataAlicloudCloudFirewallVpcFirewallCens that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudFirewallVpcFirewallCens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_firewall_cens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.265.0/docs/data-sources/cloud_firewall_vpc_firewall_cens alicloud_cloud_firewall_vpc_firewall_cens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudFirewallVpcFirewallCensConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudFirewallVpcFirewallCensConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_firewall_cens',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.265.0',
        providerVersionConstraint: '1.265.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cenId = config.cenId;
    this._id = config.id;
    this._ids = config.ids;
    this._lang = config.lang;
    this._memberUid = config.memberUid;
    this._networkInstanceId = config.networkInstanceId;
    this._outputFile = config.outputFile;
    this._pageNumber = config.pageNumber;
    this._pageSize = config.pageSize;
    this._status = config.status;
    this._vpcFirewallId = config.vpcFirewallId;
    this._vpcFirewallName = config.vpcFirewallName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: true, required: false
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  public resetCenId() {
    this._cenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
  }

  // cens - computed: true, optional: false, required: false
  private _cens = new DataAlicloudCloudFirewallVpcFirewallCensCensList(this, "cens", false);
  public get cens() {
    return this._cens;
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

  // ids - computed: true, optional: true, required: false
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

  // lang - computed: false, optional: true, required: false
  private _lang?: string; 
  public get lang() {
    return this.getStringAttribute('lang');
  }
  public set lang(value: string) {
    this._lang = value;
  }
  public resetLang() {
    this._lang = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get langInput() {
    return this._lang;
  }

  // member_uid - computed: false, optional: true, required: false
  private _memberUid?: string; 
  public get memberUid() {
    return this.getStringAttribute('member_uid');
  }
  public set memberUid(value: string) {
    this._memberUid = value;
  }
  public resetMemberUid() {
    this._memberUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberUidInput() {
    return this._memberUid;
  }

  // network_instance_id - computed: false, optional: true, required: false
  private _networkInstanceId?: string; 
  public get networkInstanceId() {
    return this.getStringAttribute('network_instance_id');
  }
  public set networkInstanceId(value: string) {
    this._networkInstanceId = value;
  }
  public resetNetworkInstanceId() {
    this._networkInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstanceIdInput() {
    return this._networkInstanceId;
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // page_number - computed: false, optional: true, required: false
  private _pageNumber?: number; 
  public get pageNumber() {
    return this.getNumberAttribute('page_number');
  }
  public set pageNumber(value: number) {
    this._pageNumber = value;
  }
  public resetPageNumber() {
    this._pageNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumberInput() {
    return this._pageNumber;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vpc_firewall_id - computed: false, optional: true, required: false
  private _vpcFirewallId?: string; 
  public get vpcFirewallId() {
    return this.getStringAttribute('vpc_firewall_id');
  }
  public set vpcFirewallId(value: string) {
    this._vpcFirewallId = value;
  }
  public resetVpcFirewallId() {
    this._vpcFirewallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFirewallIdInput() {
    return this._vpcFirewallId;
  }

  // vpc_firewall_name - computed: false, optional: true, required: false
  private _vpcFirewallName?: string; 
  public get vpcFirewallName() {
    return this.getStringAttribute('vpc_firewall_name');
  }
  public set vpcFirewallName(value: string) {
    this._vpcFirewallName = value;
  }
  public resetVpcFirewallName() {
    this._vpcFirewallName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFirewallNameInput() {
    return this._vpcFirewallName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cen_id: cdktf.stringToTerraform(this._cenId),
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      lang: cdktf.stringToTerraform(this._lang),
      member_uid: cdktf.stringToTerraform(this._memberUid),
      network_instance_id: cdktf.stringToTerraform(this._networkInstanceId),
      output_file: cdktf.stringToTerraform(this._outputFile),
      page_number: cdktf.numberToTerraform(this._pageNumber),
      page_size: cdktf.numberToTerraform(this._pageSize),
      status: cdktf.stringToTerraform(this._status),
      vpc_firewall_id: cdktf.stringToTerraform(this._vpcFirewallId),
      vpc_firewall_name: cdktf.stringToTerraform(this._vpcFirewallName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cen_id: {
        value: cdktf.stringToHclTerraform(this._cenId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      lang: {
        value: cdktf.stringToHclTerraform(this._lang),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member_uid: {
        value: cdktf.stringToHclTerraform(this._memberUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_instance_id: {
        value: cdktf.stringToHclTerraform(this._networkInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_number: {
        value: cdktf.numberToHclTerraform(this._pageNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_firewall_id: {
        value: cdktf.stringToHclTerraform(this._vpcFirewallId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_firewall_name: {
        value: cdktf.stringToHclTerraform(this._vpcFirewallName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
