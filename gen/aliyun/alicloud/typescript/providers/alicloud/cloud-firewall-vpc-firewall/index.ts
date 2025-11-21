// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallVpcFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#id CloudFirewallVpcFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#lang CloudFirewallVpcFirewall#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#member_uid CloudFirewallVpcFirewall#member_uid}
  */
  readonly memberUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#status CloudFirewallVpcFirewall#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#vpc_firewall_name CloudFirewallVpcFirewall#vpc_firewall_name}
  */
  readonly vpcFirewallName: string;
  /**
  * local_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#local_vpc CloudFirewallVpcFirewall#local_vpc}
  */
  readonly localVpc: CloudFirewallVpcFirewallLocalVpc;
  /**
  * peer_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#peer_vpc CloudFirewallVpcFirewall#peer_vpc}
  */
  readonly peerVpc: CloudFirewallVpcFirewallPeerVpc;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#timeouts CloudFirewallVpcFirewall#timeouts}
  */
  readonly timeouts?: CloudFirewallVpcFirewallTimeouts;
}
export interface CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#local_destination_cidr CloudFirewallVpcFirewall#local_destination_cidr}
  */
  readonly localDestinationCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#local_next_hop_instance_id CloudFirewallVpcFirewall#local_next_hop_instance_id}
  */
  readonly localNextHopInstanceId: string;
}

export function cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructToTerraform(struct?: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_destination_cidr: cdktf.stringToTerraform(struct!.localDestinationCidr),
    local_next_hop_instance_id: cdktf.stringToTerraform(struct!.localNextHopInstanceId),
  }
}


export function cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructToHclTerraform(struct?: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.localDestinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_next_hop_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.localNextHopInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDestinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDestinationCidr = this._localDestinationCidr;
    }
    if (this._localNextHopInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localNextHopInstanceId = this._localNextHopInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localDestinationCidr = undefined;
      this._localNextHopInstanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localDestinationCidr = value.localDestinationCidr;
      this._localNextHopInstanceId = value.localNextHopInstanceId;
    }
  }

  // local_destination_cidr - computed: false, optional: false, required: true
  private _localDestinationCidr?: string; 
  public get localDestinationCidr() {
    return this.getStringAttribute('local_destination_cidr');
  }
  public set localDestinationCidr(value: string) {
    this._localDestinationCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localDestinationCidrInput() {
    return this._localDestinationCidr;
  }

  // local_next_hop_instance_id - computed: false, optional: false, required: true
  private _localNextHopInstanceId?: string; 
  public get localNextHopInstanceId() {
    return this.getStringAttribute('local_next_hop_instance_id');
  }
  public set localNextHopInstanceId(value: string) {
    this._localNextHopInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localNextHopInstanceIdInput() {
    return this._localNextHopInstanceId;
  }
}

export class CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructList extends cdktf.ComplexList {
  public internalValue? : CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructOutputReference {
    return new CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#local_route_table_id CloudFirewallVpcFirewall#local_route_table_id}
  */
  readonly localRouteTableId: string;
  /**
  * local_route_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#local_route_entry_list CloudFirewallVpcFirewall#local_route_entry_list}
  */
  readonly localRouteEntryList: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct[] | cdktf.IResolvable;
}

export function cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructToTerraform(struct?: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_route_table_id: cdktf.stringToTerraform(struct!.localRouteTableId),
    local_route_entry_list: cdktf.listMapper(cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructToTerraform, true)(struct!.localRouteEntryList),
  }
}


export function cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructToHclTerraform(struct?: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.localRouteTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_route_entry_list: {
      value: cdktf.listMapperHcl(cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructToHclTerraform, true)(struct!.localRouteEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localRouteTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRouteTableId = this._localRouteTableId;
    }
    if (this._localRouteEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localRouteEntryList = this._localRouteEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localRouteTableId = undefined;
      this._localRouteEntryList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localRouteTableId = value.localRouteTableId;
      this._localRouteEntryList.internalValue = value.localRouteEntryList;
    }
  }

  // local_route_table_id - computed: false, optional: false, required: true
  private _localRouteTableId?: string; 
  public get localRouteTableId() {
    return this.getStringAttribute('local_route_table_id');
  }
  public set localRouteTableId(value: string) {
    this._localRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localRouteTableIdInput() {
    return this._localRouteTableId;
  }

  // local_route_entry_list - computed: false, optional: false, required: true
  private _localRouteEntryList = new CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStructList(this, "local_route_entry_list", false);
  public get localRouteEntryList() {
    return this._localRouteEntryList;
  }
  public putLocalRouteEntryList(value: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListLocalRouteEntryListStruct[] | cdktf.IResolvable) {
    this._localRouteEntryList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localRouteEntryListInput() {
    return this._localRouteEntryList.internalValue;
  }
}

export class CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructList extends cdktf.ComplexList {
  public internalValue? : CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructOutputReference {
    return new CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallVpcFirewallLocalVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#region_no CloudFirewallVpcFirewall#region_no}
  */
  readonly regionNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#vpc_id CloudFirewallVpcFirewall#vpc_id}
  */
  readonly vpcId: string;
  /**
  * local_vpc_cidr_table_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#local_vpc_cidr_table_list CloudFirewallVpcFirewall#local_vpc_cidr_table_list}
  */
  readonly localVpcCidrTableList: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct[] | cdktf.IResolvable;
}

export function cloudFirewallVpcFirewallLocalVpcToTerraform(struct?: CloudFirewallVpcFirewallLocalVpcOutputReference | CloudFirewallVpcFirewallLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_no: cdktf.stringToTerraform(struct!.regionNo),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    local_vpc_cidr_table_list: cdktf.listMapper(cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructToTerraform, true)(struct!.localVpcCidrTableList),
  }
}


export function cloudFirewallVpcFirewallLocalVpcToHclTerraform(struct?: CloudFirewallVpcFirewallLocalVpcOutputReference | CloudFirewallVpcFirewallLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_no: {
      value: cdktf.stringToHclTerraform(struct!.regionNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_vpc_cidr_table_list: {
      value: cdktf.listMapperHcl(cloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructToHclTerraform, true)(struct!.localVpcCidrTableList),
      isBlock: true,
      type: "list",
      storageClassType: "CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallLocalVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudFirewallVpcFirewallLocalVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionNo = this._regionNo;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._localVpcCidrTableList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localVpcCidrTableList = this._localVpcCidrTableList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallLocalVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regionNo = undefined;
      this._vpcId = undefined;
      this._localVpcCidrTableList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regionNo = value.regionNo;
      this._vpcId = value.vpcId;
      this._localVpcCidrTableList.internalValue = value.localVpcCidrTableList;
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

  // region_no - computed: false, optional: false, required: true
  private _regionNo?: string; 
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }
  public set regionNo(value: string) {
    this._regionNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNoInput() {
    return this._regionNo;
  }

  // router_interface_id - computed: true, optional: false, required: false
  public get routerInterfaceId() {
    return this.getStringAttribute('router_interface_id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // local_vpc_cidr_table_list - computed: false, optional: false, required: true
  private _localVpcCidrTableList = new CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStructList(this, "local_vpc_cidr_table_list", false);
  public get localVpcCidrTableList() {
    return this._localVpcCidrTableList;
  }
  public putLocalVpcCidrTableList(value: CloudFirewallVpcFirewallLocalVpcLocalVpcCidrTableListStruct[] | cdktf.IResolvable) {
    this._localVpcCidrTableList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localVpcCidrTableListInput() {
    return this._localVpcCidrTableList.internalValue;
  }
}
export interface CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#peer_destination_cidr CloudFirewallVpcFirewall#peer_destination_cidr}
  */
  readonly peerDestinationCidr: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#peer_next_hop_instance_id CloudFirewallVpcFirewall#peer_next_hop_instance_id}
  */
  readonly peerNextHopInstanceId: string;
}

export function cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructToTerraform(struct?: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_destination_cidr: cdktf.stringToTerraform(struct!.peerDestinationCidr),
    peer_next_hop_instance_id: cdktf.stringToTerraform(struct!.peerNextHopInstanceId),
  }
}


export function cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructToHclTerraform(struct?: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_destination_cidr: {
      value: cdktf.stringToHclTerraform(struct!.peerDestinationCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_next_hop_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.peerNextHopInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerDestinationCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerDestinationCidr = this._peerDestinationCidr;
    }
    if (this._peerNextHopInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerNextHopInstanceId = this._peerNextHopInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerDestinationCidr = undefined;
      this._peerNextHopInstanceId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerDestinationCidr = value.peerDestinationCidr;
      this._peerNextHopInstanceId = value.peerNextHopInstanceId;
    }
  }

  // peer_destination_cidr - computed: false, optional: false, required: true
  private _peerDestinationCidr?: string; 
  public get peerDestinationCidr() {
    return this.getStringAttribute('peer_destination_cidr');
  }
  public set peerDestinationCidr(value: string) {
    this._peerDestinationCidr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerDestinationCidrInput() {
    return this._peerDestinationCidr;
  }

  // peer_next_hop_instance_id - computed: false, optional: false, required: true
  private _peerNextHopInstanceId?: string; 
  public get peerNextHopInstanceId() {
    return this.getStringAttribute('peer_next_hop_instance_id');
  }
  public set peerNextHopInstanceId(value: string) {
    this._peerNextHopInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerNextHopInstanceIdInput() {
    return this._peerNextHopInstanceId;
  }
}

export class CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructList extends cdktf.ComplexList {
  public internalValue? : CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructOutputReference {
    return new CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#peer_route_table_id CloudFirewallVpcFirewall#peer_route_table_id}
  */
  readonly peerRouteTableId: string;
  /**
  * peer_route_entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#peer_route_entry_list CloudFirewallVpcFirewall#peer_route_entry_list}
  */
  readonly peerRouteEntryList: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct[] | cdktf.IResolvable;
}

export function cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructToTerraform(struct?: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    peer_route_table_id: cdktf.stringToTerraform(struct!.peerRouteTableId),
    peer_route_entry_list: cdktf.listMapper(cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructToTerraform, true)(struct!.peerRouteEntryList),
  }
}


export function cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructToHclTerraform(struct?: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    peer_route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.peerRouteTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_route_entry_list: {
      value: cdktf.listMapperHcl(cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructToHclTerraform, true)(struct!.peerRouteEntryList),
      isBlock: true,
      type: "list",
      storageClassType: "CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._peerRouteTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRouteTableId = this._peerRouteTableId;
    }
    if (this._peerRouteEntryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerRouteEntryList = this._peerRouteEntryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._peerRouteTableId = undefined;
      this._peerRouteEntryList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._peerRouteTableId = value.peerRouteTableId;
      this._peerRouteEntryList.internalValue = value.peerRouteEntryList;
    }
  }

  // peer_route_table_id - computed: false, optional: false, required: true
  private _peerRouteTableId?: string; 
  public get peerRouteTableId() {
    return this.getStringAttribute('peer_route_table_id');
  }
  public set peerRouteTableId(value: string) {
    this._peerRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRouteTableIdInput() {
    return this._peerRouteTableId;
  }

  // peer_route_entry_list - computed: false, optional: false, required: true
  private _peerRouteEntryList = new CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStructList(this, "peer_route_entry_list", false);
  public get peerRouteEntryList() {
    return this._peerRouteEntryList;
  }
  public putPeerRouteEntryList(value: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListPeerRouteEntryListStruct[] | cdktf.IResolvable) {
    this._peerRouteEntryList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerRouteEntryListInput() {
    return this._peerRouteEntryList.internalValue;
  }
}

export class CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructList extends cdktf.ComplexList {
  public internalValue? : CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct[] | cdktf.IResolvable

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
  public get(index: number): CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructOutputReference {
    return new CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallVpcFirewallPeerVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#region_no CloudFirewallVpcFirewall#region_no}
  */
  readonly regionNo: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#vpc_id CloudFirewallVpcFirewall#vpc_id}
  */
  readonly vpcId: string;
  /**
  * peer_vpc_cidr_table_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#peer_vpc_cidr_table_list CloudFirewallVpcFirewall#peer_vpc_cidr_table_list}
  */
  readonly peerVpcCidrTableList: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct[] | cdktf.IResolvable;
}

export function cloudFirewallVpcFirewallPeerVpcToTerraform(struct?: CloudFirewallVpcFirewallPeerVpcOutputReference | CloudFirewallVpcFirewallPeerVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_no: cdktf.stringToTerraform(struct!.regionNo),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    peer_vpc_cidr_table_list: cdktf.listMapper(cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructToTerraform, true)(struct!.peerVpcCidrTableList),
  }
}


export function cloudFirewallVpcFirewallPeerVpcToHclTerraform(struct?: CloudFirewallVpcFirewallPeerVpcOutputReference | CloudFirewallVpcFirewallPeerVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_no: {
      value: cdktf.stringToHclTerraform(struct!.regionNo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_vpc_cidr_table_list: {
      value: cdktf.listMapperHcl(cloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructToHclTerraform, true)(struct!.peerVpcCidrTableList),
      isBlock: true,
      type: "list",
      storageClassType: "CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallPeerVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudFirewallVpcFirewallPeerVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionNo !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionNo = this._regionNo;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._peerVpcCidrTableList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerVpcCidrTableList = this._peerVpcCidrTableList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallPeerVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._regionNo = undefined;
      this._vpcId = undefined;
      this._peerVpcCidrTableList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._regionNo = value.regionNo;
      this._vpcId = value.vpcId;
      this._peerVpcCidrTableList.internalValue = value.peerVpcCidrTableList;
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

  // region_no - computed: false, optional: false, required: true
  private _regionNo?: string; 
  public get regionNo() {
    return this.getStringAttribute('region_no');
  }
  public set regionNo(value: string) {
    this._regionNo = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNoInput() {
    return this._regionNo;
  }

  // router_interface_id - computed: true, optional: false, required: false
  public get routerInterfaceId() {
    return this.getStringAttribute('router_interface_id');
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vpc_name - computed: true, optional: false, required: false
  public get vpcName() {
    return this.getStringAttribute('vpc_name');
  }

  // peer_vpc_cidr_table_list - computed: false, optional: false, required: true
  private _peerVpcCidrTableList = new CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStructList(this, "peer_vpc_cidr_table_list", false);
  public get peerVpcCidrTableList() {
    return this._peerVpcCidrTableList;
  }
  public putPeerVpcCidrTableList(value: CloudFirewallVpcFirewallPeerVpcPeerVpcCidrTableListStruct[] | cdktf.IResolvable) {
    this._peerVpcCidrTableList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcCidrTableListInput() {
    return this._peerVpcCidrTableList.internalValue;
  }
}
export interface CloudFirewallVpcFirewallTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#create CloudFirewallVpcFirewall#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#delete CloudFirewallVpcFirewall#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#update CloudFirewallVpcFirewall#update}
  */
  readonly update?: string;
}

export function cloudFirewallVpcFirewallTimeoutsToTerraform(struct?: CloudFirewallVpcFirewallTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudFirewallVpcFirewallTimeoutsToHclTerraform(struct?: CloudFirewallVpcFirewallTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallVpcFirewallTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall alicloud_cloud_firewall_vpc_firewall}
*/
export class CloudFirewallVpcFirewall extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallVpcFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallVpcFirewall to import
  * @param importFromId The id of the existing CloudFirewallVpcFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallVpcFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cloud_firewall_vpc_firewall alicloud_cloud_firewall_vpc_firewall} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallVpcFirewallConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallVpcFirewallConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_firewall',
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
    this._lang = config.lang;
    this._memberUid = config.memberUid;
    this._status = config.status;
    this._vpcFirewallName = config.vpcFirewallName;
    this._localVpc.internalValue = config.localVpc;
    this._peerVpc.internalValue = config.peerVpc;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bandwidth - computed: true, optional: false, required: false
  public get bandwidth() {
    return this.getNumberAttribute('bandwidth');
  }

  // connect_type - computed: true, optional: false, required: false
  public get connectType() {
    return this.getStringAttribute('connect_type');
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

  // region_status - computed: true, optional: false, required: false
  public get regionStatus() {
    return this.getStringAttribute('region_status');
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // vpc_firewall_id - computed: true, optional: false, required: false
  public get vpcFirewallId() {
    return this.getStringAttribute('vpc_firewall_id');
  }

  // vpc_firewall_name - computed: false, optional: false, required: true
  private _vpcFirewallName?: string; 
  public get vpcFirewallName() {
    return this.getStringAttribute('vpc_firewall_name');
  }
  public set vpcFirewallName(value: string) {
    this._vpcFirewallName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcFirewallNameInput() {
    return this._vpcFirewallName;
  }

  // local_vpc - computed: false, optional: false, required: true
  private _localVpc = new CloudFirewallVpcFirewallLocalVpcOutputReference(this, "local_vpc");
  public get localVpc() {
    return this._localVpc;
  }
  public putLocalVpc(value: CloudFirewallVpcFirewallLocalVpc) {
    this._localVpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localVpcInput() {
    return this._localVpc.internalValue;
  }

  // peer_vpc - computed: false, optional: false, required: true
  private _peerVpc = new CloudFirewallVpcFirewallPeerVpcOutputReference(this, "peer_vpc");
  public get peerVpc() {
    return this._peerVpc;
  }
  public putPeerVpc(value: CloudFirewallVpcFirewallPeerVpc) {
    this._peerVpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get peerVpcInput() {
    return this._peerVpc.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallVpcFirewallTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallVpcFirewallTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      member_uid: cdktf.stringToTerraform(this._memberUid),
      status: cdktf.stringToTerraform(this._status),
      vpc_firewall_name: cdktf.stringToTerraform(this._vpcFirewallName),
      local_vpc: cloudFirewallVpcFirewallLocalVpcToTerraform(this._localVpc.internalValue),
      peer_vpc: cloudFirewallVpcFirewallPeerVpcToTerraform(this._peerVpc.internalValue),
      timeouts: cloudFirewallVpcFirewallTimeoutsToTerraform(this._timeouts.internalValue),
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
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
      local_vpc: {
        value: cloudFirewallVpcFirewallLocalVpcToHclTerraform(this._localVpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudFirewallVpcFirewallLocalVpcList",
      },
      peer_vpc: {
        value: cloudFirewallVpcFirewallPeerVpcToHclTerraform(this._peerVpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudFirewallVpcFirewallPeerVpcList",
      },
      timeouts: {
        value: cloudFirewallVpcFirewallTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallVpcFirewallTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
