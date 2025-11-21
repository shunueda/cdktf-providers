// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudCloudFirewallVpcFirewallsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#id DataAlicloudCloudFirewallVpcFirewalls#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#ids DataAlicloudCloudFirewallVpcFirewalls#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#lang DataAlicloudCloudFirewallVpcFirewalls#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#member_uid DataAlicloudCloudFirewallVpcFirewalls#member_uid}
  */
  readonly memberUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#name_regex DataAlicloudCloudFirewallVpcFirewalls#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#output_file DataAlicloudCloudFirewallVpcFirewalls#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#region_no DataAlicloudCloudFirewallVpcFirewalls#region_no}
  */
  readonly regionNo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#status DataAlicloudCloudFirewallVpcFirewalls#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#vpc_firewall_id DataAlicloudCloudFirewallVpcFirewalls#vpc_firewall_id}
  */
  readonly vpcFirewallId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#vpc_firewall_name DataAlicloudCloudFirewallVpcFirewalls#vpc_firewall_name}
  */
  readonly vpcFirewallName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#vpc_id DataAlicloudCloudFirewallVpcFirewalls#vpc_id}
  */
  readonly vpcId?: string;
}
export interface DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct {
}

export function dataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_destination_cidr - computed: true, optional: false, required: false
  public get localDestinationCidr() {
    return this.getStringAttribute('local_destination_cidr');
  }

  // local_next_hop_instance_id - computed: true, optional: false, required: false
  public get localNextHopInstanceId() {
    return this.getStringAttribute('local_next_hop_instance_id');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStruct {
}

export function dataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStructToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStructToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // local_route_entry_list - computed: true, optional: false, required: false
  private _localRouteEntryList = new DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructList(this, "local_route_entry_list", false);
  public get localRouteEntryList() {
    return this._localRouteEntryList;
  }

  // local_route_table_id - computed: true, optional: false, required: false
  public get localRouteTableId() {
    return this.getStringAttribute('local_route_table_id');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStructOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpc {
}

export function dataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpc | undefined) {
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

  // local_vpc_cidr_table_list - computed: true, optional: false, required: false
  private _localVpcCidrTableList = new DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcLocalVpcCidrTableListStructList(this, "local_vpc_cidr_table_list", false);
  public get localVpcCidrTableList() {
    return this._localVpcCidrTableList;
  }

  // region_no - computed: true, optional: false, required: false
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }

  // router_interface_id - computed: true, optional: false, required: false
  public get routerInterfaceId() {
    return this.getStringAttribute('router_interface_id');
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

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct {
}

export function dataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // peer_destination_cidr - computed: true, optional: false, required: false
  public get peerDestinationCidr() {
    return this.getStringAttribute('peer_destination_cidr');
  }

  // peer_next_hop_instance_id - computed: true, optional: false, required: false
  public get peerNextHopInstanceId() {
    return this.getStringAttribute('peer_next_hop_instance_id');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStruct {
}

export function dataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStructToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStructToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // peer_route_entry_list - computed: true, optional: false, required: false
  private _peerRouteEntryList = new DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructList(this, "peer_route_entry_list", false);
  public get peerRouteEntryList() {
    return this._peerRouteEntryList;
  }

  // peer_route_table_id - computed: true, optional: false, required: false
  public get peerRouteTableId() {
    return this.getStringAttribute('peer_route_table_id');
  }
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStructList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStructOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpc {
}

export function dataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpc | undefined) {
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

  // peer_vpc_cidr_table_list - computed: true, optional: false, required: false
  private _peerVpcCidrTableList = new DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcPeerVpcCidrTableListStructList(this, "peer_vpc_cidr_table_list", false);
  public get peerVpcCidrTableList() {
    return this._peerVpcCidrTableList;
  }

  // region_no - computed: true, optional: false, required: false
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }

  // router_interface_id - computed: true, optional: false, required: false
  public get routerInterfaceId() {
    return this.getStringAttribute('router_interface_id');
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

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudCloudFirewallVpcFirewallsFirewalls {
}

export function dataAlicloudCloudFirewallVpcFirewallsFirewallsToTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudCloudFirewallVpcFirewallsFirewallsToHclTerraform(struct?: DataAlicloudCloudFirewallVpcFirewallsFirewalls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataAlicloudCloudFirewallVpcFirewallsFirewalls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudCloudFirewallVpcFirewallsFirewalls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
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
  private _localVpc = new DataAlicloudCloudFirewallVpcFirewallsFirewallsLocalVpcList(this, "local_vpc", false);
  public get localVpc() {
    return this._localVpc;
  }

  // peer_vpc - computed: true, optional: false, required: false
  private _peerVpc = new DataAlicloudCloudFirewallVpcFirewallsFirewallsPeerVpcList(this, "peer_vpc", false);
  public get peerVpc() {
    return this._peerVpc;
  }

  // region_status - computed: true, optional: false, required: false
  public get regionStatus() {
    return this.getStringAttribute('region_status');
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

export class DataAlicloudCloudFirewallVpcFirewallsFirewallsList extends cdktf.ComplexList {

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
  public get(index: number): DataAlicloudCloudFirewallVpcFirewallsFirewallsOutputReference {
    return new DataAlicloudCloudFirewallVpcFirewallsFirewallsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls alicloud_cloud_firewall_vpc_firewalls}
*/
export class DataAlicloudCloudFirewallVpcFirewalls extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_firewalls";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudCloudFirewallVpcFirewalls resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudCloudFirewallVpcFirewalls to import
  * @param importFromId The id of the existing DataAlicloudCloudFirewallVpcFirewalls that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudCloudFirewallVpcFirewalls to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_firewalls", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/data-sources/cloud_firewall_vpc_firewalls alicloud_cloud_firewall_vpc_firewalls} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudCloudFirewallVpcFirewallsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudCloudFirewallVpcFirewallsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_firewalls',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
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
    this._ids = config.ids;
    this._lang = config.lang;
    this._memberUid = config.memberUid;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._regionNo = config.regionNo;
    this._status = config.status;
    this._vpcFirewallId = config.vpcFirewallId;
    this._vpcFirewallName = config.vpcFirewallName;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // firewalls - computed: true, optional: false, required: false
  private _firewalls = new DataAlicloudCloudFirewallVpcFirewallsFirewallsList(this, "firewalls", false);
  public get firewalls() {
    return this._firewalls;
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

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
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

  // region_no - computed: false, optional: true, required: false
  private _regionNo?: string; 
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }
  public set regionNo(value: string) {
    this._regionNo = value;
  }
  public resetRegionNo() {
    this._regionNo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNoInput() {
    return this._regionNo;
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

  // vpc_id - computed: false, optional: true, required: false
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  public resetVpcId() {
    this._vpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      lang: cdktf.stringToTerraform(this._lang),
      member_uid: cdktf.stringToTerraform(this._memberUid),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      region_no: cdktf.stringToTerraform(this._regionNo),
      status: cdktf.stringToTerraform(this._status),
      vpc_firewall_id: cdktf.stringToTerraform(this._vpcFirewallId),
      vpc_firewall_name: cdktf.stringToTerraform(this._vpcFirewallName),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
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
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
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
      region_no: {
        value: cdktf.stringToHclTerraform(this._regionNo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
