// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudFirewallVpcFirewallCenConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#cen_id CloudFirewallVpcFirewallCen#cen_id}
  */
  readonly cenId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#id CloudFirewallVpcFirewallCen#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#lang CloudFirewallVpcFirewallCen#lang}
  */
  readonly lang?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#member_uid CloudFirewallVpcFirewallCen#member_uid}
  */
  readonly memberUid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#status CloudFirewallVpcFirewallCen#status}
  */
  readonly status: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#vpc_firewall_name CloudFirewallVpcFirewallCen#vpc_firewall_name}
  */
  readonly vpcFirewallName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#vpc_region CloudFirewallVpcFirewallCen#vpc_region}
  */
  readonly vpcRegion: string;
  /**
  * local_vpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#local_vpc CloudFirewallVpcFirewallCen#local_vpc}
  */
  readonly localVpc: CloudFirewallVpcFirewallCenLocalVpc;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#timeouts CloudFirewallVpcFirewallCen#timeouts}
  */
  readonly timeouts?: CloudFirewallVpcFirewallCenTimeouts;
}
export interface CloudFirewallVpcFirewallCenLocalVpcEniListStruct {
}

export function cloudFirewallVpcFirewallCenLocalVpcEniListStructToTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcEniListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudFirewallVpcFirewallCenLocalVpcEniListStructToHclTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcEniListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudFirewallVpcFirewallCenLocalVpcEniListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallVpcFirewallCenLocalVpcEniListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallCenLocalVpcEniListStruct | undefined) {
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

export class CloudFirewallVpcFirewallCenLocalVpcEniListStructList extends cdktf.ComplexList {

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
  public get(index: number): CloudFirewallVpcFirewallCenLocalVpcEniListStructOutputReference {
    return new CloudFirewallVpcFirewallCenLocalVpcEniListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStruct {
}

export function cloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStructToTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStructToHclTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStruct | undefined) {
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

export class CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStructList extends cdktf.ComplexList {

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
  public get(index: number): CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStructOutputReference {
    return new CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStruct {
}

export function cloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStructToTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStructToHclTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // route_entry_list - computed: true, optional: false, required: false
  private _routeEntryList = new CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListRouteEntryListStructList(this, "route_entry_list", true);
  public get routeEntryList() {
    return this._routeEntryList;
  }

  // route_table_id - computed: true, optional: false, required: false
  public get routeTableId() {
    return this.getStringAttribute('route_table_id');
  }
}

export class CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStructList extends cdktf.ComplexList {

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
  public get(index: number): CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStructOutputReference {
    return new CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudFirewallVpcFirewallCenLocalVpc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#network_instance_id CloudFirewallVpcFirewallCen#network_instance_id}
  */
  readonly networkInstanceId: string;
}

export function cloudFirewallVpcFirewallCenLocalVpcToTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcOutputReference | CloudFirewallVpcFirewallCenLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_instance_id: cdktf.stringToTerraform(struct!.networkInstanceId),
  }
}


export function cloudFirewallVpcFirewallCenLocalVpcToHclTerraform(struct?: CloudFirewallVpcFirewallCenLocalVpcOutputReference | CloudFirewallVpcFirewallCenLocalVpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudFirewallVpcFirewallCenLocalVpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudFirewallVpcFirewallCenLocalVpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInstanceId = this._networkInstanceId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudFirewallVpcFirewallCenLocalVpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkInstanceId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkInstanceId = value.networkInstanceId;
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
  private _eniList = new CloudFirewallVpcFirewallCenLocalVpcEniListStructList(this, "eni_list", false);
  public get eniList() {
    return this._eniList;
  }

  // manual_vswitch_id - computed: true, optional: false, required: false
  public get manualVswitchId() {
    return this.getStringAttribute('manual_vswitch_id');
  }

  // network_instance_id - computed: false, optional: false, required: true
  private _networkInstanceId?: string; 
  public get networkInstanceId() {
    return this.getStringAttribute('network_instance_id');
  }
  public set networkInstanceId(value: string) {
    this._networkInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInstanceIdInput() {
    return this._networkInstanceId;
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
  private _vpcCidrTableList = new CloudFirewallVpcFirewallCenLocalVpcVpcCidrTableListStructList(this, "vpc_cidr_table_list", false);
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
export interface CloudFirewallVpcFirewallCenTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#create CloudFirewallVpcFirewallCen#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#delete CloudFirewallVpcFirewallCen#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#update CloudFirewallVpcFirewallCen#update}
  */
  readonly update?: string;
}

export function cloudFirewallVpcFirewallCenTimeoutsToTerraform(struct?: CloudFirewallVpcFirewallCenTimeouts | cdktf.IResolvable): any {
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


export function cloudFirewallVpcFirewallCenTimeoutsToHclTerraform(struct?: CloudFirewallVpcFirewallCenTimeouts | cdktf.IResolvable): any {
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

export class CloudFirewallVpcFirewallCenTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudFirewallVpcFirewallCenTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudFirewallVpcFirewallCenTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen alicloud_cloud_firewall_vpc_firewall_cen}
*/
export class CloudFirewallVpcFirewallCen extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_firewall_vpc_firewall_cen";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudFirewallVpcFirewallCen resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudFirewallVpcFirewallCen to import
  * @param importFromId The id of the existing CloudFirewallVpcFirewallCen that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudFirewallVpcFirewallCen to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_firewall_vpc_firewall_cen", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_firewall_vpc_firewall_cen alicloud_cloud_firewall_vpc_firewall_cen} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudFirewallVpcFirewallCenConfig
  */
  public constructor(scope: Construct, id: string, config: CloudFirewallVpcFirewallCenConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_firewall_vpc_firewall_cen',
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
    this._cenId = config.cenId;
    this._id = config.id;
    this._lang = config.lang;
    this._memberUid = config.memberUid;
    this._status = config.status;
    this._vpcFirewallName = config.vpcFirewallName;
    this._vpcRegion = config.vpcRegion;
    this._localVpc.internalValue = config.localVpc;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cen_id - computed: false, optional: false, required: true
  private _cenId?: string; 
  public get cenId() {
    return this.getStringAttribute('cen_id');
  }
  public set cenId(value: string) {
    this._cenId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cenIdInput() {
    return this._cenId;
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

  // vpc_region - computed: false, optional: false, required: true
  private _vpcRegion?: string; 
  public get vpcRegion() {
    return this.getStringAttribute('vpc_region');
  }
  public set vpcRegion(value: string) {
    this._vpcRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcRegionInput() {
    return this._vpcRegion;
  }

  // local_vpc - computed: false, optional: false, required: true
  private _localVpc = new CloudFirewallVpcFirewallCenLocalVpcOutputReference(this, "local_vpc");
  public get localVpc() {
    return this._localVpc;
  }
  public putLocalVpc(value: CloudFirewallVpcFirewallCenLocalVpc) {
    this._localVpc.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localVpcInput() {
    return this._localVpc.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudFirewallVpcFirewallCenTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudFirewallVpcFirewallCenTimeouts) {
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
      cen_id: cdktf.stringToTerraform(this._cenId),
      id: cdktf.stringToTerraform(this._id),
      lang: cdktf.stringToTerraform(this._lang),
      member_uid: cdktf.stringToTerraform(this._memberUid),
      status: cdktf.stringToTerraform(this._status),
      vpc_firewall_name: cdktf.stringToTerraform(this._vpcFirewallName),
      vpc_region: cdktf.stringToTerraform(this._vpcRegion),
      local_vpc: cloudFirewallVpcFirewallCenLocalVpcToTerraform(this._localVpc.internalValue),
      timeouts: cloudFirewallVpcFirewallCenTimeoutsToTerraform(this._timeouts.internalValue),
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
      vpc_region: {
        value: cdktf.stringToHclTerraform(this._vpcRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_vpc: {
        value: cloudFirewallVpcFirewallCenLocalVpcToHclTerraform(this._localVpc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudFirewallVpcFirewallCenLocalVpcList",
      },
      timeouts: {
        value: cloudFirewallVpcFirewallCenTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudFirewallVpcFirewallCenTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
