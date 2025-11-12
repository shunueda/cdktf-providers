// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchVlanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#access_vlan SwitchVlan#access_vlan}
  */
  readonly accessVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#arp_inspection SwitchVlan#arp_inspection}
  */
  readonly arpInspection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#assignment_priority SwitchVlan#assignment_priority}
  */
  readonly assignmentPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#community_vlans SwitchVlan#community_vlans}
  */
  readonly communityVlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#cos_queue SwitchVlan#cos_queue}
  */
  readonly cosQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#description SwitchVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#dhcp6_snooping SwitchVlan#dhcp6_snooping}
  */
  readonly dhcp6Snooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#dhcp_snooping SwitchVlan#dhcp_snooping}
  */
  readonly dhcpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#dhcp_snooping_option82 SwitchVlan#dhcp_snooping_option82}
  */
  readonly dhcpSnoopingOption82?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#dhcp_snooping_verify_mac SwitchVlan#dhcp_snooping_verify_mac}
  */
  readonly dhcpSnoopingVerifyMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#dynamic_sort_subtable SwitchVlan#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#fswid SwitchVlan#fswid}
  */
  readonly fswid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#id SwitchVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#igmp_snooping SwitchVlan#igmp_snooping}
  */
  readonly igmpSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#igmp_snooping_fast_leave SwitchVlan#igmp_snooping_fast_leave}
  */
  readonly igmpSnoopingFastLeave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#igmp_snooping_proxy SwitchVlan#igmp_snooping_proxy}
  */
  readonly igmpSnoopingProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#igmp_snooping_querier SwitchVlan#igmp_snooping_querier}
  */
  readonly igmpSnoopingQuerier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#igmp_snooping_querier_addr SwitchVlan#igmp_snooping_querier_addr}
  */
  readonly igmpSnoopingQuerierAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#igmp_snooping_querier_version SwitchVlan#igmp_snooping_querier_version}
  */
  readonly igmpSnoopingQuerierVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#isolated_vlan SwitchVlan#isolated_vlan}
  */
  readonly isolatedVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#lan_segment SwitchVlan#lan_segment}
  */
  readonly lanSegment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#lan_segment_primary_vlan SwitchVlan#lan_segment_primary_vlan}
  */
  readonly lanSegmentPrimaryVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#lan_segment_type SwitchVlan#lan_segment_type}
  */
  readonly lanSegmentType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#lan_subvlans SwitchVlan#lan_subvlans}
  */
  readonly lanSubvlans?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#learning SwitchVlan#learning}
  */
  readonly learning?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#learning_limit SwitchVlan#learning_limit}
  */
  readonly learningLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mld_snooping SwitchVlan#mld_snooping}
  */
  readonly mldSnooping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mld_snooping_fast_leave SwitchVlan#mld_snooping_fast_leave}
  */
  readonly mldSnoopingFastLeave?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mld_snooping_proxy SwitchVlan#mld_snooping_proxy}
  */
  readonly mldSnoopingProxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mld_snooping_querier SwitchVlan#mld_snooping_querier}
  */
  readonly mldSnoopingQuerier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mld_snooping_querier_addr SwitchVlan#mld_snooping_querier_addr}
  */
  readonly mldSnoopingQuerierAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#policer SwitchVlan#policer}
  */
  readonly policer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#primary_vlan SwitchVlan#primary_vlan}
  */
  readonly primaryVlan?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#private_vlan SwitchVlan#private_vlan}
  */
  readonly privateVlan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#private_vlan_type SwitchVlan#private_vlan_type}
  */
  readonly privateVlanType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#rspan_mode SwitchVlan#rspan_mode}
  */
  readonly rspanMode?: string;
  /**
  * dhcp_server_access_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#dhcp_server_access_list SwitchVlan#dhcp_server_access_list}
  */
  readonly dhcpServerAccessList?: SwitchVlanDhcpServerAccessListStruct[] | cdktf.IResolvable;
  /**
  * dhcp_snooping_static_client block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#dhcp_snooping_static_client SwitchVlan#dhcp_snooping_static_client}
  */
  readonly dhcpSnoopingStaticClient?: SwitchVlanDhcpSnoopingStaticClient[] | cdktf.IResolvable;
  /**
  * igmp_snooping_static_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#igmp_snooping_static_group SwitchVlan#igmp_snooping_static_group}
  */
  readonly igmpSnoopingStaticGroup?: SwitchVlanIgmpSnoopingStaticGroup[] | cdktf.IResolvable;
  /**
  * member_by_ipv4 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#member_by_ipv4 SwitchVlan#member_by_ipv4}
  */
  readonly memberByIpv4?: SwitchVlanMemberByIpv4[] | cdktf.IResolvable;
  /**
  * member_by_ipv6 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#member_by_ipv6 SwitchVlan#member_by_ipv6}
  */
  readonly memberByIpv6?: SwitchVlanMemberByIpv6[] | cdktf.IResolvable;
  /**
  * member_by_mac block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#member_by_mac SwitchVlan#member_by_mac}
  */
  readonly memberByMac?: SwitchVlanMemberByMac[] | cdktf.IResolvable;
  /**
  * member_by_proto block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#member_by_proto SwitchVlan#member_by_proto}
  */
  readonly memberByProto?: SwitchVlanMemberByProto[] | cdktf.IResolvable;
  /**
  * mld_snooping_static_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mld_snooping_static_group SwitchVlan#mld_snooping_static_group}
  */
  readonly mldSnoopingStaticGroup?: SwitchVlanMldSnoopingStaticGroup[] | cdktf.IResolvable;
  /**
  * mrouter_ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mrouter_ports SwitchVlan#mrouter_ports}
  */
  readonly mrouterPorts?: SwitchVlanMrouterPorts[] | cdktf.IResolvable;
}
export interface SwitchVlanDhcpServerAccessListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#name SwitchVlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#server_ip SwitchVlan#server_ip}
  */
  readonly serverIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#server_ip6 SwitchVlan#server_ip6}
  */
  readonly serverIp6?: string;
}

export function switchVlanDhcpServerAccessListStructToTerraform(struct?: SwitchVlanDhcpServerAccessListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    server_ip: cdktf.stringToTerraform(struct!.serverIp),
    server_ip6: cdktf.stringToTerraform(struct!.serverIp6),
  }
}


export function switchVlanDhcpServerAccessListStructToHclTerraform(struct?: SwitchVlanDhcpServerAccessListStruct | cdktf.IResolvable): any {
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
    server_ip: {
      value: cdktf.stringToHclTerraform(struct!.serverIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_ip6: {
      value: cdktf.stringToHclTerraform(struct!.serverIp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanDhcpServerAccessListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanDhcpServerAccessListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._serverIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIp = this._serverIp;
    }
    if (this._serverIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIp6 = this._serverIp6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanDhcpServerAccessListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._serverIp = undefined;
      this._serverIp6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._serverIp = value.serverIp;
      this._serverIp6 = value.serverIp6;
    }
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // server_ip - computed: true, optional: true, required: false
  private _serverIp?: string; 
  public get serverIp() {
    return this.getStringAttribute('server_ip');
  }
  public set serverIp(value: string) {
    this._serverIp = value;
  }
  public resetServerIp() {
    this._serverIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIpInput() {
    return this._serverIp;
  }

  // server_ip6 - computed: true, optional: true, required: false
  private _serverIp6?: string; 
  public get serverIp6() {
    return this.getStringAttribute('server_ip6');
  }
  public set serverIp6(value: string) {
    this._serverIp6 = value;
  }
  public resetServerIp6() {
    this._serverIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIp6Input() {
    return this._serverIp6;
  }
}

export class SwitchVlanDhcpServerAccessListStructList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanDhcpServerAccessListStruct[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanDhcpServerAccessListStructOutputReference {
    return new SwitchVlanDhcpServerAccessListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanDhcpSnoopingStaticClient {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#ip_addr SwitchVlan#ip_addr}
  */
  readonly ipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mac_addr SwitchVlan#mac_addr}
  */
  readonly macAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#name SwitchVlan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#switch_interface SwitchVlan#switch_interface}
  */
  readonly switchInterface?: string;
}

export function switchVlanDhcpSnoopingStaticClientToTerraform(struct?: SwitchVlanDhcpSnoopingStaticClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    mac_addr: cdktf.stringToTerraform(struct!.macAddr),
    name: cdktf.stringToTerraform(struct!.name),
    switch_interface: cdktf.stringToTerraform(struct!.switchInterface),
  }
}


export function switchVlanDhcpSnoopingStaticClientToHclTerraform(struct?: SwitchVlanDhcpSnoopingStaticClient | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mac_addr: {
      value: cdktf.stringToHclTerraform(struct!.macAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    switch_interface: {
      value: cdktf.stringToHclTerraform(struct!.switchInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanDhcpSnoopingStaticClientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanDhcpSnoopingStaticClient | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._macAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.macAddr = this._macAddr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._switchInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchInterface = this._switchInterface;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanDhcpSnoopingStaticClient | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddr = undefined;
      this._macAddr = undefined;
      this._name = undefined;
      this._switchInterface = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddr = value.ipAddr;
      this._macAddr = value.macAddr;
      this._name = value.name;
      this._switchInterface = value.switchInterface;
    }
  }

  // ip_addr - computed: true, optional: true, required: false
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  public resetIpAddr() {
    this._ipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // mac_addr - computed: true, optional: true, required: false
  private _macAddr?: string; 
  public get macAddr() {
    return this.getStringAttribute('mac_addr');
  }
  public set macAddr(value: string) {
    this._macAddr = value;
  }
  public resetMacAddr() {
    this._macAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrInput() {
    return this._macAddr;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // switch_interface - computed: true, optional: true, required: false
  private _switchInterface?: string; 
  public get switchInterface() {
    return this.getStringAttribute('switch_interface');
  }
  public set switchInterface(value: string) {
    this._switchInterface = value;
  }
  public resetSwitchInterface() {
    this._switchInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInterfaceInput() {
    return this._switchInterface;
  }
}

export class SwitchVlanDhcpSnoopingStaticClientList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanDhcpSnoopingStaticClient[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanDhcpSnoopingStaticClientOutputReference {
    return new SwitchVlanDhcpSnoopingStaticClientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanIgmpSnoopingStaticGroupMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#member_name SwitchVlan#member_name}
  */
  readonly memberName?: string;
}

export function switchVlanIgmpSnoopingStaticGroupMembersToTerraform(struct?: SwitchVlanIgmpSnoopingStaticGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchVlanIgmpSnoopingStaticGroupMembersToHclTerraform(struct?: SwitchVlanIgmpSnoopingStaticGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanIgmpSnoopingStaticGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanIgmpSnoopingStaticGroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanIgmpSnoopingStaticGroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: true, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchVlanIgmpSnoopingStaticGroupMembersList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanIgmpSnoopingStaticGroupMembers[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanIgmpSnoopingStaticGroupMembersOutputReference {
    return new SwitchVlanIgmpSnoopingStaticGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanIgmpSnoopingStaticGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#ignore_reports SwitchVlan#ignore_reports}
  */
  readonly ignoreReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mcast_addr SwitchVlan#mcast_addr}
  */
  readonly mcastAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#name SwitchVlan#name}
  */
  readonly name?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#members SwitchVlan#members}
  */
  readonly members?: SwitchVlanIgmpSnoopingStaticGroupMembers[] | cdktf.IResolvable;
}

export function switchVlanIgmpSnoopingStaticGroupToTerraform(struct?: SwitchVlanIgmpSnoopingStaticGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_reports: cdktf.stringToTerraform(struct!.ignoreReports),
    mcast_addr: cdktf.stringToTerraform(struct!.mcastAddr),
    name: cdktf.stringToTerraform(struct!.name),
    members: cdktf.listMapper(switchVlanIgmpSnoopingStaticGroupMembersToTerraform, true)(struct!.members),
  }
}


export function switchVlanIgmpSnoopingStaticGroupToHclTerraform(struct?: SwitchVlanIgmpSnoopingStaticGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_reports: {
      value: cdktf.stringToHclTerraform(struct!.ignoreReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcast_addr: {
      value: cdktf.stringToHclTerraform(struct!.mcastAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(switchVlanIgmpSnoopingStaticGroupMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchVlanIgmpSnoopingStaticGroupMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanIgmpSnoopingStaticGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanIgmpSnoopingStaticGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreReports = this._ignoreReports;
    }
    if (this._mcastAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastAddr = this._mcastAddr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanIgmpSnoopingStaticGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreReports = undefined;
      this._mcastAddr = undefined;
      this._name = undefined;
      this._members.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreReports = value.ignoreReports;
      this._mcastAddr = value.mcastAddr;
      this._name = value.name;
      this._members.internalValue = value.members;
    }
  }

  // ignore_reports - computed: true, optional: true, required: false
  private _ignoreReports?: string; 
  public get ignoreReports() {
    return this.getStringAttribute('ignore_reports');
  }
  public set ignoreReports(value: string) {
    this._ignoreReports = value;
  }
  public resetIgnoreReports() {
    this._ignoreReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreReportsInput() {
    return this._ignoreReports;
  }

  // mcast_addr - computed: true, optional: true, required: false
  private _mcastAddr?: string; 
  public get mcastAddr() {
    return this.getStringAttribute('mcast_addr');
  }
  public set mcastAddr(value: string) {
    this._mcastAddr = value;
  }
  public resetMcastAddr() {
    this._mcastAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastAddrInput() {
    return this._mcastAddr;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // members - computed: false, optional: true, required: false
  private _members = new SwitchVlanIgmpSnoopingStaticGroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: SwitchVlanIgmpSnoopingStaticGroupMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

export class SwitchVlanIgmpSnoopingStaticGroupList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanIgmpSnoopingStaticGroup[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanIgmpSnoopingStaticGroupOutputReference {
    return new SwitchVlanIgmpSnoopingStaticGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanMemberByIpv4 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#address SwitchVlan#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#description SwitchVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#id SwitchVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
}

export function switchVlanMemberByIpv4ToTerraform(struct?: SwitchVlanMemberByIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
  }
}


export function switchVlanMemberByIpv4ToHclTerraform(struct?: SwitchVlanMemberByIpv4 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanMemberByIpv4OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanMemberByIpv4 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanMemberByIpv4 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._description = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._description = value.description;
      this._id = value.id;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class SwitchVlanMemberByIpv4List extends cdktf.ComplexList {
  public internalValue? : SwitchVlanMemberByIpv4[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanMemberByIpv4OutputReference {
    return new SwitchVlanMemberByIpv4OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanMemberByIpv6 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#description SwitchVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#id SwitchVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#prefix SwitchVlan#prefix}
  */
  readonly prefix?: string;
}

export function switchVlanMemberByIpv6ToTerraform(struct?: SwitchVlanMemberByIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    prefix: cdktf.stringToTerraform(struct!.prefix),
  }
}


export function switchVlanMemberByIpv6ToHclTerraform(struct?: SwitchVlanMemberByIpv6 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanMemberByIpv6OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanMemberByIpv6 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanMemberByIpv6 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._prefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._prefix = value.prefix;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // prefix - computed: true, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }
}

export class SwitchVlanMemberByIpv6List extends cdktf.ComplexList {
  public internalValue? : SwitchVlanMemberByIpv6[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanMemberByIpv6OutputReference {
    return new SwitchVlanMemberByIpv6OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanMemberByMac {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#description SwitchVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#id SwitchVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mac SwitchVlan#mac}
  */
  readonly mac?: string;
}

export function switchVlanMemberByMacToTerraform(struct?: SwitchVlanMemberByMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.numberToTerraform(struct!.id),
    mac: cdktf.stringToTerraform(struct!.mac),
  }
}


export function switchVlanMemberByMacToHclTerraform(struct?: SwitchVlanMemberByMac | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac: {
      value: cdktf.stringToHclTerraform(struct!.mac),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanMemberByMacOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanMemberByMac | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mac !== undefined) {
      hasAnyValues = true;
      internalValueResult.mac = this._mac;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanMemberByMac | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._mac = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._mac = value.mac;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // mac - computed: true, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }
}

export class SwitchVlanMemberByMacList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanMemberByMac[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanMemberByMacOutputReference {
    return new SwitchVlanMemberByMacOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanMemberByProto {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#description SwitchVlan#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#frametypes SwitchVlan#frametypes}
  */
  readonly frametypes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#id SwitchVlan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#protocol SwitchVlan#protocol}
  */
  readonly protocol?: number;
}

export function switchVlanMemberByProtoToTerraform(struct?: SwitchVlanMemberByProto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    frametypes: cdktf.stringToTerraform(struct!.frametypes),
    id: cdktf.numberToTerraform(struct!.id),
    protocol: cdktf.numberToTerraform(struct!.protocol),
  }
}


export function switchVlanMemberByProtoToHclTerraform(struct?: SwitchVlanMemberByProto | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    frametypes: {
      value: cdktf.stringToHclTerraform(struct!.frametypes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.numberToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanMemberByProtoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanMemberByProto | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._frametypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.frametypes = this._frametypes;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanMemberByProto | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._frametypes = undefined;
      this._id = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._frametypes = value.frametypes;
      this._id = value.id;
      this._protocol = value.protocol;
    }
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // frametypes - computed: true, optional: true, required: false
  private _frametypes?: string; 
  public get frametypes() {
    return this.getStringAttribute('frametypes');
  }
  public set frametypes(value: string) {
    this._frametypes = value;
  }
  public resetFrametypes() {
    this._frametypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frametypesInput() {
    return this._frametypes;
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: number; 
  public get protocol() {
    return this.getNumberAttribute('protocol');
  }
  public set protocol(value: number) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }
}

export class SwitchVlanMemberByProtoList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanMemberByProto[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanMemberByProtoOutputReference {
    return new SwitchVlanMemberByProtoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanMldSnoopingStaticGroupMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#member_name SwitchVlan#member_name}
  */
  readonly memberName?: string;
}

export function switchVlanMldSnoopingStaticGroupMembersToTerraform(struct?: SwitchVlanMldSnoopingStaticGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchVlanMldSnoopingStaticGroupMembersToHclTerraform(struct?: SwitchVlanMldSnoopingStaticGroupMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanMldSnoopingStaticGroupMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanMldSnoopingStaticGroupMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanMldSnoopingStaticGroupMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: true, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchVlanMldSnoopingStaticGroupMembersList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanMldSnoopingStaticGroupMembers[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanMldSnoopingStaticGroupMembersOutputReference {
    return new SwitchVlanMldSnoopingStaticGroupMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanMldSnoopingStaticGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#ignore_reports SwitchVlan#ignore_reports}
  */
  readonly ignoreReports?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#mcast_addr SwitchVlan#mcast_addr}
  */
  readonly mcastAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#name SwitchVlan#name}
  */
  readonly name?: string;
  /**
  * members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#members SwitchVlan#members}
  */
  readonly members?: SwitchVlanMldSnoopingStaticGroupMembers[] | cdktf.IResolvable;
}

export function switchVlanMldSnoopingStaticGroupToTerraform(struct?: SwitchVlanMldSnoopingStaticGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ignore_reports: cdktf.stringToTerraform(struct!.ignoreReports),
    mcast_addr: cdktf.stringToTerraform(struct!.mcastAddr),
    name: cdktf.stringToTerraform(struct!.name),
    members: cdktf.listMapper(switchVlanMldSnoopingStaticGroupMembersToTerraform, true)(struct!.members),
  }
}


export function switchVlanMldSnoopingStaticGroupToHclTerraform(struct?: SwitchVlanMldSnoopingStaticGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ignore_reports: {
      value: cdktf.stringToHclTerraform(struct!.ignoreReports),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mcast_addr: {
      value: cdktf.stringToHclTerraform(struct!.mcastAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    members: {
      value: cdktf.listMapperHcl(switchVlanMldSnoopingStaticGroupMembersToHclTerraform, true)(struct!.members),
      isBlock: true,
      type: "list",
      storageClassType: "SwitchVlanMldSnoopingStaticGroupMembersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanMldSnoopingStaticGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanMldSnoopingStaticGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ignoreReports !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreReports = this._ignoreReports;
    }
    if (this._mcastAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastAddr = this._mcastAddr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._members?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanMldSnoopingStaticGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ignoreReports = undefined;
      this._mcastAddr = undefined;
      this._name = undefined;
      this._members.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ignoreReports = value.ignoreReports;
      this._mcastAddr = value.mcastAddr;
      this._name = value.name;
      this._members.internalValue = value.members;
    }
  }

  // ignore_reports - computed: true, optional: true, required: false
  private _ignoreReports?: string; 
  public get ignoreReports() {
    return this.getStringAttribute('ignore_reports');
  }
  public set ignoreReports(value: string) {
    this._ignoreReports = value;
  }
  public resetIgnoreReports() {
    this._ignoreReports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreReportsInput() {
    return this._ignoreReports;
  }

  // mcast_addr - computed: true, optional: true, required: false
  private _mcastAddr?: string; 
  public get mcastAddr() {
    return this.getStringAttribute('mcast_addr');
  }
  public set mcastAddr(value: string) {
    this._mcastAddr = value;
  }
  public resetMcastAddr() {
    this._mcastAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastAddrInput() {
    return this._mcastAddr;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // members - computed: false, optional: true, required: false
  private _members = new SwitchVlanMldSnoopingStaticGroupMembersList(this, "members", false);
  public get members() {
    return this._members;
  }
  public putMembers(value: SwitchVlanMldSnoopingStaticGroupMembers[] | cdktf.IResolvable) {
    this._members.internalValue = value;
  }
  public resetMembers() {
    this._members.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members.internalValue;
  }
}

export class SwitchVlanMldSnoopingStaticGroupList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanMldSnoopingStaticGroup[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanMldSnoopingStaticGroupOutputReference {
    return new SwitchVlanMldSnoopingStaticGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SwitchVlanMrouterPorts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#member_name SwitchVlan#member_name}
  */
  readonly memberName?: string;
}

export function switchVlanMrouterPortsToTerraform(struct?: SwitchVlanMrouterPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_name: cdktf.stringToTerraform(struct!.memberName),
  }
}


export function switchVlanMrouterPortsToHclTerraform(struct?: SwitchVlanMrouterPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_name: {
      value: cdktf.stringToHclTerraform(struct!.memberName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SwitchVlanMrouterPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SwitchVlanMrouterPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberName !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberName = this._memberName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SwitchVlanMrouterPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._memberName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._memberName = value.memberName;
    }
  }

  // member_name - computed: true, optional: true, required: false
  private _memberName?: string; 
  public get memberName() {
    return this.getStringAttribute('member_name');
  }
  public set memberName(value: string) {
    this._memberName = value;
  }
  public resetMemberName() {
    this._memberName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberNameInput() {
    return this._memberName;
  }
}

export class SwitchVlanMrouterPortsList extends cdktf.ComplexList {
  public internalValue? : SwitchVlanMrouterPorts[] | cdktf.IResolvable

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
  public get(index: number): SwitchVlanMrouterPortsOutputReference {
    return new SwitchVlanMrouterPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan fortiswitch_switch_vlan}
*/
export class SwitchVlan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_switch_vlan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SwitchVlan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SwitchVlan to import
  * @param importFromId The id of the existing SwitchVlan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SwitchVlan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_switch_vlan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/resources/switch_vlan fortiswitch_switch_vlan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchVlanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SwitchVlanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_switch_vlan',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessVlan = config.accessVlan;
    this._arpInspection = config.arpInspection;
    this._assignmentPriority = config.assignmentPriority;
    this._communityVlans = config.communityVlans;
    this._cosQueue = config.cosQueue;
    this._description = config.description;
    this._dhcp6Snooping = config.dhcp6Snooping;
    this._dhcpSnooping = config.dhcpSnooping;
    this._dhcpSnoopingOption82 = config.dhcpSnoopingOption82;
    this._dhcpSnoopingVerifyMac = config.dhcpSnoopingVerifyMac;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._fswid = config.fswid;
    this._id = config.id;
    this._igmpSnooping = config.igmpSnooping;
    this._igmpSnoopingFastLeave = config.igmpSnoopingFastLeave;
    this._igmpSnoopingProxy = config.igmpSnoopingProxy;
    this._igmpSnoopingQuerier = config.igmpSnoopingQuerier;
    this._igmpSnoopingQuerierAddr = config.igmpSnoopingQuerierAddr;
    this._igmpSnoopingQuerierVersion = config.igmpSnoopingQuerierVersion;
    this._isolatedVlan = config.isolatedVlan;
    this._lanSegment = config.lanSegment;
    this._lanSegmentPrimaryVlan = config.lanSegmentPrimaryVlan;
    this._lanSegmentType = config.lanSegmentType;
    this._lanSubvlans = config.lanSubvlans;
    this._learning = config.learning;
    this._learningLimit = config.learningLimit;
    this._mldSnooping = config.mldSnooping;
    this._mldSnoopingFastLeave = config.mldSnoopingFastLeave;
    this._mldSnoopingProxy = config.mldSnoopingProxy;
    this._mldSnoopingQuerier = config.mldSnoopingQuerier;
    this._mldSnoopingQuerierAddr = config.mldSnoopingQuerierAddr;
    this._policer = config.policer;
    this._primaryVlan = config.primaryVlan;
    this._privateVlan = config.privateVlan;
    this._privateVlanType = config.privateVlanType;
    this._rspanMode = config.rspanMode;
    this._dhcpServerAccessList.internalValue = config.dhcpServerAccessList;
    this._dhcpSnoopingStaticClient.internalValue = config.dhcpSnoopingStaticClient;
    this._igmpSnoopingStaticGroup.internalValue = config.igmpSnoopingStaticGroup;
    this._memberByIpv4.internalValue = config.memberByIpv4;
    this._memberByIpv6.internalValue = config.memberByIpv6;
    this._memberByMac.internalValue = config.memberByMac;
    this._memberByProto.internalValue = config.memberByProto;
    this._mldSnoopingStaticGroup.internalValue = config.mldSnoopingStaticGroup;
    this._mrouterPorts.internalValue = config.mrouterPorts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_vlan - computed: true, optional: true, required: false
  private _accessVlan?: string; 
  public get accessVlan() {
    return this.getStringAttribute('access_vlan');
  }
  public set accessVlan(value: string) {
    this._accessVlan = value;
  }
  public resetAccessVlan() {
    this._accessVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessVlanInput() {
    return this._accessVlan;
  }

  // arp_inspection - computed: true, optional: true, required: false
  private _arpInspection?: string; 
  public get arpInspection() {
    return this.getStringAttribute('arp_inspection');
  }
  public set arpInspection(value: string) {
    this._arpInspection = value;
  }
  public resetArpInspection() {
    this._arpInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInspectionInput() {
    return this._arpInspection;
  }

  // assignment_priority - computed: true, optional: true, required: false
  private _assignmentPriority?: number; 
  public get assignmentPriority() {
    return this.getNumberAttribute('assignment_priority');
  }
  public set assignmentPriority(value: number) {
    this._assignmentPriority = value;
  }
  public resetAssignmentPriority() {
    this._assignmentPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentPriorityInput() {
    return this._assignmentPriority;
  }

  // community_vlans - computed: true, optional: true, required: false
  private _communityVlans?: string; 
  public get communityVlans() {
    return this.getStringAttribute('community_vlans');
  }
  public set communityVlans(value: string) {
    this._communityVlans = value;
  }
  public resetCommunityVlans() {
    this._communityVlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityVlansInput() {
    return this._communityVlans;
  }

  // cos_queue - computed: true, optional: true, required: false
  private _cosQueue?: number; 
  public get cosQueue() {
    return this.getNumberAttribute('cos_queue');
  }
  public set cosQueue(value: number) {
    this._cosQueue = value;
  }
  public resetCosQueue() {
    this._cosQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cosQueueInput() {
    return this._cosQueue;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dhcp6_snooping - computed: true, optional: true, required: false
  private _dhcp6Snooping?: string; 
  public get dhcp6Snooping() {
    return this.getStringAttribute('dhcp6_snooping');
  }
  public set dhcp6Snooping(value: string) {
    this._dhcp6Snooping = value;
  }
  public resetDhcp6Snooping() {
    this._dhcp6Snooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcp6SnoopingInput() {
    return this._dhcp6Snooping;
  }

  // dhcp_snooping - computed: true, optional: true, required: false
  private _dhcpSnooping?: string; 
  public get dhcpSnooping() {
    return this.getStringAttribute('dhcp_snooping');
  }
  public set dhcpSnooping(value: string) {
    this._dhcpSnooping = value;
  }
  public resetDhcpSnooping() {
    this._dhcpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingInput() {
    return this._dhcpSnooping;
  }

  // dhcp_snooping_option82 - computed: true, optional: true, required: false
  private _dhcpSnoopingOption82?: string; 
  public get dhcpSnoopingOption82() {
    return this.getStringAttribute('dhcp_snooping_option82');
  }
  public set dhcpSnoopingOption82(value: string) {
    this._dhcpSnoopingOption82 = value;
  }
  public resetDhcpSnoopingOption82() {
    this._dhcpSnoopingOption82 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingOption82Input() {
    return this._dhcpSnoopingOption82;
  }

  // dhcp_snooping_verify_mac - computed: true, optional: true, required: false
  private _dhcpSnoopingVerifyMac?: string; 
  public get dhcpSnoopingVerifyMac() {
    return this.getStringAttribute('dhcp_snooping_verify_mac');
  }
  public set dhcpSnoopingVerifyMac(value: string) {
    this._dhcpSnoopingVerifyMac = value;
  }
  public resetDhcpSnoopingVerifyMac() {
    this._dhcpSnoopingVerifyMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingVerifyMacInput() {
    return this._dhcpSnoopingVerifyMac;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // fswid - computed: true, optional: true, required: false
  private _fswid?: number; 
  public get fswid() {
    return this.getNumberAttribute('fswid');
  }
  public set fswid(value: number) {
    this._fswid = value;
  }
  public resetFswid() {
    this._fswid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fswidInput() {
    return this._fswid;
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

  // igmp_snooping - computed: true, optional: true, required: false
  private _igmpSnooping?: string; 
  public get igmpSnooping() {
    return this.getStringAttribute('igmp_snooping');
  }
  public set igmpSnooping(value: string) {
    this._igmpSnooping = value;
  }
  public resetIgmpSnooping() {
    this._igmpSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingInput() {
    return this._igmpSnooping;
  }

  // igmp_snooping_fast_leave - computed: true, optional: true, required: false
  private _igmpSnoopingFastLeave?: string; 
  public get igmpSnoopingFastLeave() {
    return this.getStringAttribute('igmp_snooping_fast_leave');
  }
  public set igmpSnoopingFastLeave(value: string) {
    this._igmpSnoopingFastLeave = value;
  }
  public resetIgmpSnoopingFastLeave() {
    this._igmpSnoopingFastLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingFastLeaveInput() {
    return this._igmpSnoopingFastLeave;
  }

  // igmp_snooping_proxy - computed: true, optional: true, required: false
  private _igmpSnoopingProxy?: string; 
  public get igmpSnoopingProxy() {
    return this.getStringAttribute('igmp_snooping_proxy');
  }
  public set igmpSnoopingProxy(value: string) {
    this._igmpSnoopingProxy = value;
  }
  public resetIgmpSnoopingProxy() {
    this._igmpSnoopingProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingProxyInput() {
    return this._igmpSnoopingProxy;
  }

  // igmp_snooping_querier - computed: true, optional: true, required: false
  private _igmpSnoopingQuerier?: string; 
  public get igmpSnoopingQuerier() {
    return this.getStringAttribute('igmp_snooping_querier');
  }
  public set igmpSnoopingQuerier(value: string) {
    this._igmpSnoopingQuerier = value;
  }
  public resetIgmpSnoopingQuerier() {
    this._igmpSnoopingQuerier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingQuerierInput() {
    return this._igmpSnoopingQuerier;
  }

  // igmp_snooping_querier_addr - computed: true, optional: true, required: false
  private _igmpSnoopingQuerierAddr?: string; 
  public get igmpSnoopingQuerierAddr() {
    return this.getStringAttribute('igmp_snooping_querier_addr');
  }
  public set igmpSnoopingQuerierAddr(value: string) {
    this._igmpSnoopingQuerierAddr = value;
  }
  public resetIgmpSnoopingQuerierAddr() {
    this._igmpSnoopingQuerierAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingQuerierAddrInput() {
    return this._igmpSnoopingQuerierAddr;
  }

  // igmp_snooping_querier_version - computed: true, optional: true, required: false
  private _igmpSnoopingQuerierVersion?: number; 
  public get igmpSnoopingQuerierVersion() {
    return this.getNumberAttribute('igmp_snooping_querier_version');
  }
  public set igmpSnoopingQuerierVersion(value: number) {
    this._igmpSnoopingQuerierVersion = value;
  }
  public resetIgmpSnoopingQuerierVersion() {
    this._igmpSnoopingQuerierVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingQuerierVersionInput() {
    return this._igmpSnoopingQuerierVersion;
  }

  // isolated_vlan - computed: true, optional: true, required: false
  private _isolatedVlan?: number; 
  public get isolatedVlan() {
    return this.getNumberAttribute('isolated_vlan');
  }
  public set isolatedVlan(value: number) {
    this._isolatedVlan = value;
  }
  public resetIsolatedVlan() {
    this._isolatedVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolatedVlanInput() {
    return this._isolatedVlan;
  }

  // lan_segment - computed: true, optional: true, required: false
  private _lanSegment?: string; 
  public get lanSegment() {
    return this.getStringAttribute('lan_segment');
  }
  public set lanSegment(value: string) {
    this._lanSegment = value;
  }
  public resetLanSegment() {
    this._lanSegment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanSegmentInput() {
    return this._lanSegment;
  }

  // lan_segment_primary_vlan - computed: true, optional: true, required: false
  private _lanSegmentPrimaryVlan?: number; 
  public get lanSegmentPrimaryVlan() {
    return this.getNumberAttribute('lan_segment_primary_vlan');
  }
  public set lanSegmentPrimaryVlan(value: number) {
    this._lanSegmentPrimaryVlan = value;
  }
  public resetLanSegmentPrimaryVlan() {
    this._lanSegmentPrimaryVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanSegmentPrimaryVlanInput() {
    return this._lanSegmentPrimaryVlan;
  }

  // lan_segment_type - computed: true, optional: true, required: false
  private _lanSegmentType?: number; 
  public get lanSegmentType() {
    return this.getNumberAttribute('lan_segment_type');
  }
  public set lanSegmentType(value: number) {
    this._lanSegmentType = value;
  }
  public resetLanSegmentType() {
    this._lanSegmentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanSegmentTypeInput() {
    return this._lanSegmentType;
  }

  // lan_subvlans - computed: true, optional: true, required: false
  private _lanSubvlans?: string; 
  public get lanSubvlans() {
    return this.getStringAttribute('lan_subvlans');
  }
  public set lanSubvlans(value: string) {
    this._lanSubvlans = value;
  }
  public resetLanSubvlans() {
    this._lanSubvlans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanSubvlansInput() {
    return this._lanSubvlans;
  }

  // learning - computed: true, optional: true, required: false
  private _learning?: string; 
  public get learning() {
    return this.getStringAttribute('learning');
  }
  public set learning(value: string) {
    this._learning = value;
  }
  public resetLearning() {
    this._learning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningInput() {
    return this._learning;
  }

  // learning_limit - computed: true, optional: true, required: false
  private _learningLimit?: number; 
  public get learningLimit() {
    return this.getNumberAttribute('learning_limit');
  }
  public set learningLimit(value: number) {
    this._learningLimit = value;
  }
  public resetLearningLimit() {
    this._learningLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get learningLimitInput() {
    return this._learningLimit;
  }

  // mld_snooping - computed: true, optional: true, required: false
  private _mldSnooping?: string; 
  public get mldSnooping() {
    return this.getStringAttribute('mld_snooping');
  }
  public set mldSnooping(value: string) {
    this._mldSnooping = value;
  }
  public resetMldSnooping() {
    this._mldSnooping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingInput() {
    return this._mldSnooping;
  }

  // mld_snooping_fast_leave - computed: true, optional: true, required: false
  private _mldSnoopingFastLeave?: string; 
  public get mldSnoopingFastLeave() {
    return this.getStringAttribute('mld_snooping_fast_leave');
  }
  public set mldSnoopingFastLeave(value: string) {
    this._mldSnoopingFastLeave = value;
  }
  public resetMldSnoopingFastLeave() {
    this._mldSnoopingFastLeave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingFastLeaveInput() {
    return this._mldSnoopingFastLeave;
  }

  // mld_snooping_proxy - computed: true, optional: true, required: false
  private _mldSnoopingProxy?: string; 
  public get mldSnoopingProxy() {
    return this.getStringAttribute('mld_snooping_proxy');
  }
  public set mldSnoopingProxy(value: string) {
    this._mldSnoopingProxy = value;
  }
  public resetMldSnoopingProxy() {
    this._mldSnoopingProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingProxyInput() {
    return this._mldSnoopingProxy;
  }

  // mld_snooping_querier - computed: true, optional: true, required: false
  private _mldSnoopingQuerier?: string; 
  public get mldSnoopingQuerier() {
    return this.getStringAttribute('mld_snooping_querier');
  }
  public set mldSnoopingQuerier(value: string) {
    this._mldSnoopingQuerier = value;
  }
  public resetMldSnoopingQuerier() {
    this._mldSnoopingQuerier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingQuerierInput() {
    return this._mldSnoopingQuerier;
  }

  // mld_snooping_querier_addr - computed: true, optional: true, required: false
  private _mldSnoopingQuerierAddr?: string; 
  public get mldSnoopingQuerierAddr() {
    return this.getStringAttribute('mld_snooping_querier_addr');
  }
  public set mldSnoopingQuerierAddr(value: string) {
    this._mldSnoopingQuerierAddr = value;
  }
  public resetMldSnoopingQuerierAddr() {
    this._mldSnoopingQuerierAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingQuerierAddrInput() {
    return this._mldSnoopingQuerierAddr;
  }

  // policer - computed: true, optional: true, required: false
  private _policer?: number; 
  public get policer() {
    return this.getNumberAttribute('policer');
  }
  public set policer(value: number) {
    this._policer = value;
  }
  public resetPolicer() {
    this._policer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policerInput() {
    return this._policer;
  }

  // primary_vlan - computed: true, optional: true, required: false
  private _primaryVlan?: number; 
  public get primaryVlan() {
    return this.getNumberAttribute('primary_vlan');
  }
  public set primaryVlan(value: number) {
    this._primaryVlan = value;
  }
  public resetPrimaryVlan() {
    this._primaryVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryVlanInput() {
    return this._primaryVlan;
  }

  // private_vlan - computed: true, optional: true, required: false
  private _privateVlan?: string; 
  public get privateVlan() {
    return this.getStringAttribute('private_vlan');
  }
  public set privateVlan(value: string) {
    this._privateVlan = value;
  }
  public resetPrivateVlan() {
    this._privateVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanInput() {
    return this._privateVlan;
  }

  // private_vlan_type - computed: true, optional: true, required: false
  private _privateVlanType?: number; 
  public get privateVlanType() {
    return this.getNumberAttribute('private_vlan_type');
  }
  public set privateVlanType(value: number) {
    this._privateVlanType = value;
  }
  public resetPrivateVlanType() {
    this._privateVlanType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateVlanTypeInput() {
    return this._privateVlanType;
  }

  // rspan_mode - computed: true, optional: true, required: false
  private _rspanMode?: string; 
  public get rspanMode() {
    return this.getStringAttribute('rspan_mode');
  }
  public set rspanMode(value: string) {
    this._rspanMode = value;
  }
  public resetRspanMode() {
    this._rspanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspanModeInput() {
    return this._rspanMode;
  }

  // dhcp_server_access_list - computed: false, optional: true, required: false
  private _dhcpServerAccessList = new SwitchVlanDhcpServerAccessListStructList(this, "dhcp_server_access_list", false);
  public get dhcpServerAccessList() {
    return this._dhcpServerAccessList;
  }
  public putDhcpServerAccessList(value: SwitchVlanDhcpServerAccessListStruct[] | cdktf.IResolvable) {
    this._dhcpServerAccessList.internalValue = value;
  }
  public resetDhcpServerAccessList() {
    this._dhcpServerAccessList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerAccessListInput() {
    return this._dhcpServerAccessList.internalValue;
  }

  // dhcp_snooping_static_client - computed: false, optional: true, required: false
  private _dhcpSnoopingStaticClient = new SwitchVlanDhcpSnoopingStaticClientList(this, "dhcp_snooping_static_client", false);
  public get dhcpSnoopingStaticClient() {
    return this._dhcpSnoopingStaticClient;
  }
  public putDhcpSnoopingStaticClient(value: SwitchVlanDhcpSnoopingStaticClient[] | cdktf.IResolvable) {
    this._dhcpSnoopingStaticClient.internalValue = value;
  }
  public resetDhcpSnoopingStaticClient() {
    this._dhcpSnoopingStaticClient.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpSnoopingStaticClientInput() {
    return this._dhcpSnoopingStaticClient.internalValue;
  }

  // igmp_snooping_static_group - computed: false, optional: true, required: false
  private _igmpSnoopingStaticGroup = new SwitchVlanIgmpSnoopingStaticGroupList(this, "igmp_snooping_static_group", false);
  public get igmpSnoopingStaticGroup() {
    return this._igmpSnoopingStaticGroup;
  }
  public putIgmpSnoopingStaticGroup(value: SwitchVlanIgmpSnoopingStaticGroup[] | cdktf.IResolvable) {
    this._igmpSnoopingStaticGroup.internalValue = value;
  }
  public resetIgmpSnoopingStaticGroup() {
    this._igmpSnoopingStaticGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpSnoopingStaticGroupInput() {
    return this._igmpSnoopingStaticGroup.internalValue;
  }

  // member_by_ipv4 - computed: false, optional: true, required: false
  private _memberByIpv4 = new SwitchVlanMemberByIpv4List(this, "member_by_ipv4", false);
  public get memberByIpv4() {
    return this._memberByIpv4;
  }
  public putMemberByIpv4(value: SwitchVlanMemberByIpv4[] | cdktf.IResolvable) {
    this._memberByIpv4.internalValue = value;
  }
  public resetMemberByIpv4() {
    this._memberByIpv4.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberByIpv4Input() {
    return this._memberByIpv4.internalValue;
  }

  // member_by_ipv6 - computed: false, optional: true, required: false
  private _memberByIpv6 = new SwitchVlanMemberByIpv6List(this, "member_by_ipv6", false);
  public get memberByIpv6() {
    return this._memberByIpv6;
  }
  public putMemberByIpv6(value: SwitchVlanMemberByIpv6[] | cdktf.IResolvable) {
    this._memberByIpv6.internalValue = value;
  }
  public resetMemberByIpv6() {
    this._memberByIpv6.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberByIpv6Input() {
    return this._memberByIpv6.internalValue;
  }

  // member_by_mac - computed: false, optional: true, required: false
  private _memberByMac = new SwitchVlanMemberByMacList(this, "member_by_mac", false);
  public get memberByMac() {
    return this._memberByMac;
  }
  public putMemberByMac(value: SwitchVlanMemberByMac[] | cdktf.IResolvable) {
    this._memberByMac.internalValue = value;
  }
  public resetMemberByMac() {
    this._memberByMac.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberByMacInput() {
    return this._memberByMac.internalValue;
  }

  // member_by_proto - computed: false, optional: true, required: false
  private _memberByProto = new SwitchVlanMemberByProtoList(this, "member_by_proto", false);
  public get memberByProto() {
    return this._memberByProto;
  }
  public putMemberByProto(value: SwitchVlanMemberByProto[] | cdktf.IResolvable) {
    this._memberByProto.internalValue = value;
  }
  public resetMemberByProto() {
    this._memberByProto.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memberByProtoInput() {
    return this._memberByProto.internalValue;
  }

  // mld_snooping_static_group - computed: false, optional: true, required: false
  private _mldSnoopingStaticGroup = new SwitchVlanMldSnoopingStaticGroupList(this, "mld_snooping_static_group", false);
  public get mldSnoopingStaticGroup() {
    return this._mldSnoopingStaticGroup;
  }
  public putMldSnoopingStaticGroup(value: SwitchVlanMldSnoopingStaticGroup[] | cdktf.IResolvable) {
    this._mldSnoopingStaticGroup.internalValue = value;
  }
  public resetMldSnoopingStaticGroup() {
    this._mldSnoopingStaticGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mldSnoopingStaticGroupInput() {
    return this._mldSnoopingStaticGroup.internalValue;
  }

  // mrouter_ports - computed: false, optional: true, required: false
  private _mrouterPorts = new SwitchVlanMrouterPortsList(this, "mrouter_ports", false);
  public get mrouterPorts() {
    return this._mrouterPorts;
  }
  public putMrouterPorts(value: SwitchVlanMrouterPorts[] | cdktf.IResolvable) {
    this._mrouterPorts.internalValue = value;
  }
  public resetMrouterPorts() {
    this._mrouterPorts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrouterPortsInput() {
    return this._mrouterPorts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_vlan: cdktf.stringToTerraform(this._accessVlan),
      arp_inspection: cdktf.stringToTerraform(this._arpInspection),
      assignment_priority: cdktf.numberToTerraform(this._assignmentPriority),
      community_vlans: cdktf.stringToTerraform(this._communityVlans),
      cos_queue: cdktf.numberToTerraform(this._cosQueue),
      description: cdktf.stringToTerraform(this._description),
      dhcp6_snooping: cdktf.stringToTerraform(this._dhcp6Snooping),
      dhcp_snooping: cdktf.stringToTerraform(this._dhcpSnooping),
      dhcp_snooping_option82: cdktf.stringToTerraform(this._dhcpSnoopingOption82),
      dhcp_snooping_verify_mac: cdktf.stringToTerraform(this._dhcpSnoopingVerifyMac),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      fswid: cdktf.numberToTerraform(this._fswid),
      id: cdktf.stringToTerraform(this._id),
      igmp_snooping: cdktf.stringToTerraform(this._igmpSnooping),
      igmp_snooping_fast_leave: cdktf.stringToTerraform(this._igmpSnoopingFastLeave),
      igmp_snooping_proxy: cdktf.stringToTerraform(this._igmpSnoopingProxy),
      igmp_snooping_querier: cdktf.stringToTerraform(this._igmpSnoopingQuerier),
      igmp_snooping_querier_addr: cdktf.stringToTerraform(this._igmpSnoopingQuerierAddr),
      igmp_snooping_querier_version: cdktf.numberToTerraform(this._igmpSnoopingQuerierVersion),
      isolated_vlan: cdktf.numberToTerraform(this._isolatedVlan),
      lan_segment: cdktf.stringToTerraform(this._lanSegment),
      lan_segment_primary_vlan: cdktf.numberToTerraform(this._lanSegmentPrimaryVlan),
      lan_segment_type: cdktf.numberToTerraform(this._lanSegmentType),
      lan_subvlans: cdktf.stringToTerraform(this._lanSubvlans),
      learning: cdktf.stringToTerraform(this._learning),
      learning_limit: cdktf.numberToTerraform(this._learningLimit),
      mld_snooping: cdktf.stringToTerraform(this._mldSnooping),
      mld_snooping_fast_leave: cdktf.stringToTerraform(this._mldSnoopingFastLeave),
      mld_snooping_proxy: cdktf.stringToTerraform(this._mldSnoopingProxy),
      mld_snooping_querier: cdktf.stringToTerraform(this._mldSnoopingQuerier),
      mld_snooping_querier_addr: cdktf.stringToTerraform(this._mldSnoopingQuerierAddr),
      policer: cdktf.numberToTerraform(this._policer),
      primary_vlan: cdktf.numberToTerraform(this._primaryVlan),
      private_vlan: cdktf.stringToTerraform(this._privateVlan),
      private_vlan_type: cdktf.numberToTerraform(this._privateVlanType),
      rspan_mode: cdktf.stringToTerraform(this._rspanMode),
      dhcp_server_access_list: cdktf.listMapper(switchVlanDhcpServerAccessListStructToTerraform, true)(this._dhcpServerAccessList.internalValue),
      dhcp_snooping_static_client: cdktf.listMapper(switchVlanDhcpSnoopingStaticClientToTerraform, true)(this._dhcpSnoopingStaticClient.internalValue),
      igmp_snooping_static_group: cdktf.listMapper(switchVlanIgmpSnoopingStaticGroupToTerraform, true)(this._igmpSnoopingStaticGroup.internalValue),
      member_by_ipv4: cdktf.listMapper(switchVlanMemberByIpv4ToTerraform, true)(this._memberByIpv4.internalValue),
      member_by_ipv6: cdktf.listMapper(switchVlanMemberByIpv6ToTerraform, true)(this._memberByIpv6.internalValue),
      member_by_mac: cdktf.listMapper(switchVlanMemberByMacToTerraform, true)(this._memberByMac.internalValue),
      member_by_proto: cdktf.listMapper(switchVlanMemberByProtoToTerraform, true)(this._memberByProto.internalValue),
      mld_snooping_static_group: cdktf.listMapper(switchVlanMldSnoopingStaticGroupToTerraform, true)(this._mldSnoopingStaticGroup.internalValue),
      mrouter_ports: cdktf.listMapper(switchVlanMrouterPortsToTerraform, true)(this._mrouterPorts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_vlan: {
        value: cdktf.stringToHclTerraform(this._accessVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_inspection: {
        value: cdktf.stringToHclTerraform(this._arpInspection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assignment_priority: {
        value: cdktf.numberToHclTerraform(this._assignmentPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      community_vlans: {
        value: cdktf.stringToHclTerraform(this._communityVlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cos_queue: {
        value: cdktf.numberToHclTerraform(this._cosQueue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp6_snooping: {
        value: cdktf.stringToHclTerraform(this._dhcp6Snooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snooping: {
        value: cdktf.stringToHclTerraform(this._dhcpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snooping_option82: {
        value: cdktf.stringToHclTerraform(this._dhcpSnoopingOption82),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_snooping_verify_mac: {
        value: cdktf.stringToHclTerraform(this._dhcpSnoopingVerifyMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fswid: {
        value: cdktf.numberToHclTerraform(this._fswid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping: {
        value: cdktf.stringToHclTerraform(this._igmpSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping_fast_leave: {
        value: cdktf.stringToHclTerraform(this._igmpSnoopingFastLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping_proxy: {
        value: cdktf.stringToHclTerraform(this._igmpSnoopingProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping_querier: {
        value: cdktf.stringToHclTerraform(this._igmpSnoopingQuerier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping_querier_addr: {
        value: cdktf.stringToHclTerraform(this._igmpSnoopingQuerierAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_snooping_querier_version: {
        value: cdktf.numberToHclTerraform(this._igmpSnoopingQuerierVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      isolated_vlan: {
        value: cdktf.numberToHclTerraform(this._isolatedVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lan_segment: {
        value: cdktf.stringToHclTerraform(this._lanSegment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_segment_primary_vlan: {
        value: cdktf.numberToHclTerraform(this._lanSegmentPrimaryVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lan_segment_type: {
        value: cdktf.numberToHclTerraform(this._lanSegmentType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lan_subvlans: {
        value: cdktf.stringToHclTerraform(this._lanSubvlans),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learning: {
        value: cdktf.stringToHclTerraform(this._learning),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      learning_limit: {
        value: cdktf.numberToHclTerraform(this._learningLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mld_snooping: {
        value: cdktf.stringToHclTerraform(this._mldSnooping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mld_snooping_fast_leave: {
        value: cdktf.stringToHclTerraform(this._mldSnoopingFastLeave),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mld_snooping_proxy: {
        value: cdktf.stringToHclTerraform(this._mldSnoopingProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mld_snooping_querier: {
        value: cdktf.stringToHclTerraform(this._mldSnoopingQuerier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mld_snooping_querier_addr: {
        value: cdktf.stringToHclTerraform(this._mldSnoopingQuerierAddr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policer: {
        value: cdktf.numberToHclTerraform(this._policer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      primary_vlan: {
        value: cdktf.numberToHclTerraform(this._primaryVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_vlan: {
        value: cdktf.stringToHclTerraform(this._privateVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_vlan_type: {
        value: cdktf.numberToHclTerraform(this._privateVlanType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rspan_mode: {
        value: cdktf.stringToHclTerraform(this._rspanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server_access_list: {
        value: cdktf.listMapperHcl(switchVlanDhcpServerAccessListStructToHclTerraform, true)(this._dhcpServerAccessList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanDhcpServerAccessListStructList",
      },
      dhcp_snooping_static_client: {
        value: cdktf.listMapperHcl(switchVlanDhcpSnoopingStaticClientToHclTerraform, true)(this._dhcpSnoopingStaticClient.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanDhcpSnoopingStaticClientList",
      },
      igmp_snooping_static_group: {
        value: cdktf.listMapperHcl(switchVlanIgmpSnoopingStaticGroupToHclTerraform, true)(this._igmpSnoopingStaticGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanIgmpSnoopingStaticGroupList",
      },
      member_by_ipv4: {
        value: cdktf.listMapperHcl(switchVlanMemberByIpv4ToHclTerraform, true)(this._memberByIpv4.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanMemberByIpv4List",
      },
      member_by_ipv6: {
        value: cdktf.listMapperHcl(switchVlanMemberByIpv6ToHclTerraform, true)(this._memberByIpv6.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanMemberByIpv6List",
      },
      member_by_mac: {
        value: cdktf.listMapperHcl(switchVlanMemberByMacToHclTerraform, true)(this._memberByMac.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanMemberByMacList",
      },
      member_by_proto: {
        value: cdktf.listMapperHcl(switchVlanMemberByProtoToHclTerraform, true)(this._memberByProto.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanMemberByProtoList",
      },
      mld_snooping_static_group: {
        value: cdktf.listMapperHcl(switchVlanMldSnoopingStaticGroupToHclTerraform, true)(this._mldSnoopingStaticGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanMldSnoopingStaticGroupList",
      },
      mrouter_ports: {
        value: cdktf.listMapperHcl(switchVlanMrouterPortsToHclTerraform, true)(this._mrouterPorts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SwitchVlanMrouterPortsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
