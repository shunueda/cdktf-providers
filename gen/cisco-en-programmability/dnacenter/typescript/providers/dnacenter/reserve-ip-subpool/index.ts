// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReserveIpSubpoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#id ReserveIpSubpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#parameters ReserveIpSubpool#parameters}
  */
  readonly parameters?: ReserveIpSubpoolParameters[] | cdktf.IResolvable;
}
export interface ReserveIpSubpoolItemIpPoolsContext {
}

export function reserveIpSubpoolItemIpPoolsContextToTerraform(struct?: ReserveIpSubpoolItemIpPoolsContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reserveIpSubpoolItemIpPoolsContextToHclTerraform(struct?: ReserveIpSubpoolItemIpPoolsContext): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReserveIpSubpoolItemIpPoolsContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReserveIpSubpoolItemIpPoolsContext | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReserveIpSubpoolItemIpPoolsContext | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // context_key - computed: true, optional: false, required: false
  public get contextKey() {
    return this.getStringAttribute('context_key');
  }

  // context_value - computed: true, optional: false, required: false
  public get contextValue() {
    return this.getStringAttribute('context_value');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }
}

export class ReserveIpSubpoolItemIpPoolsContextList extends cdktf.ComplexList {

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
  public get(index: number): ReserveIpSubpoolItemIpPoolsContextOutputReference {
    return new ReserveIpSubpoolItemIpPoolsContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReserveIpSubpoolItemIpPools {
}

export function reserveIpSubpoolItemIpPoolsToTerraform(struct?: ReserveIpSubpoolItemIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reserveIpSubpoolItemIpPoolsToHclTerraform(struct?: ReserveIpSubpoolItemIpPools): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReserveIpSubpoolItemIpPoolsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReserveIpSubpoolItemIpPools | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReserveIpSubpoolItemIpPools | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_options - computed: true, optional: false, required: false
  public get clientOptions() {
    return this.getStringAttribute('client_options');
  }

  // configure_external_dhcp - computed: true, optional: false, required: false
  public get configureExternalDhcp() {
    return this.getStringAttribute('configure_external_dhcp');
  }

  // context - computed: true, optional: false, required: false
  private _context = new ReserveIpSubpoolItemIpPoolsContextList(this, "context", false);
  public get context() {
    return this._context;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // dhcp_server_ips - computed: true, optional: false, required: false
  public get dhcpServerIps() {
    return this.getListAttribute('dhcp_server_ips');
  }

  // dns_server_ips - computed: true, optional: false, required: false
  public get dnsServerIps() {
    return this.getListAttribute('dns_server_ips');
  }

  // gateways - computed: true, optional: false, required: false
  public get gateways() {
    return this.getListAttribute('gateways');
  }

  // group_uuid - computed: true, optional: false, required: false
  public get groupUuid() {
    return this.getStringAttribute('group_uuid');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_pool_cidr - computed: true, optional: false, required: false
  public get ipPoolCidr() {
    return this.getStringAttribute('ip_pool_cidr');
  }

  // ip_pool_name - computed: true, optional: false, required: false
  public get ipPoolName() {
    return this.getStringAttribute('ip_pool_name');
  }

  // ipv6 - computed: true, optional: false, required: false
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }

  // last_update_time - computed: true, optional: false, required: false
  public get lastUpdateTime() {
    return this.getNumberAttribute('last_update_time');
  }

  // overlapping - computed: true, optional: false, required: false
  public get overlapping() {
    return this.getStringAttribute('overlapping');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // parent_uuid - computed: true, optional: false, required: false
  public get parentUuid() {
    return this.getStringAttribute('parent_uuid');
  }

  // shared - computed: true, optional: false, required: false
  public get shared() {
    return this.getStringAttribute('shared');
  }

  // total_ip_address_count - computed: true, optional: false, required: false
  public get totalIpAddressCount() {
    return this.getNumberAttribute('total_ip_address_count');
  }

  // used_ip_address_count - computed: true, optional: false, required: false
  public get usedIpAddressCount() {
    return this.getNumberAttribute('used_ip_address_count');
  }

  // used_percentage - computed: true, optional: false, required: false
  public get usedPercentage() {
    return this.getStringAttribute('used_percentage');
  }
}

export class ReserveIpSubpoolItemIpPoolsList extends cdktf.ComplexList {

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
  public get(index: number): ReserveIpSubpoolItemIpPoolsOutputReference {
    return new ReserveIpSubpoolItemIpPoolsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReserveIpSubpoolItem {
}

export function reserveIpSubpoolItemToTerraform(struct?: ReserveIpSubpoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function reserveIpSubpoolItemToHclTerraform(struct?: ReserveIpSubpoolItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ReserveIpSubpoolItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReserveIpSubpoolItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReserveIpSubpoolItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // group_owner - computed: true, optional: false, required: false
  public get groupOwner() {
    return this.getStringAttribute('group_owner');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_pools - computed: true, optional: false, required: false
  private _ipPools = new ReserveIpSubpoolItemIpPoolsList(this, "ip_pools", false);
  public get ipPools() {
    return this._ipPools;
  }

  // site_hierarchy - computed: true, optional: false, required: false
  public get siteHierarchy() {
    return this.getStringAttribute('site_hierarchy');
  }

  // site_id - computed: true, optional: false, required: false
  public get siteId() {
    return this.getStringAttribute('site_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class ReserveIpSubpoolItemList extends cdktf.ComplexList {

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
  public get(index: number): ReserveIpSubpoolItemOutputReference {
    return new ReserveIpSubpoolItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ReserveIpSubpoolParameters {
  /**
  * id path parameter. Id of reserve ip subpool to be deleted.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#id ReserveIpSubpool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPv4 input for dhcp server ip example: 1.1.1.1
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_dhcp_servers ReserveIpSubpool#ipv4_dhcp_servers}
  */
  readonly ipv4DhcpServers?: string[];
  /**
  * IPv4 input for dns server ip example: 4.4.4.4
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_dns_servers ReserveIpSubpool#ipv4_dns_servers}
  */
  readonly ipv4DnsServers?: string[];
  /**
  * Gateway ip address details, example: 175.175.0.1
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_gate_way ReserveIpSubpool#ipv4_gate_way}
  */
  readonly ipv4GateWay?: string;
  /**
  * IP v4 Global pool address with cidr, example: 175.175.0.0/16
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_global_pool ReserveIpSubpool#ipv4_global_pool}
  */
  readonly ipv4GlobalPool?: string;
  /**
  * IPv4 prefix value is true, the ip4 prefix length input field is enabled , if it is false ipv4 total Host input is enable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_prefix ReserveIpSubpool#ipv4_prefix}
  */
  readonly ipv4Prefix?: string;
  /**
  * The ipv4 prefix length is required when ipv4prefix value is true.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_prefix_length ReserveIpSubpool#ipv4_prefix_length}
  */
  readonly ipv4PrefixLength?: number;
  /**
  * IPv4 Subnet address, example: 175.175.0.0
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_subnet ReserveIpSubpool#ipv4_subnet}
  */
  readonly ipv4Subnet?: string;
  /**
  * IPv4 total host is required when ipv4prefix value is false.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv4_total_host ReserveIpSubpool#ipv4_total_host}
  */
  readonly ipv4TotalHost?: number;
  /**
  * If the value is false only ipv4 input are required, otherwise both ipv6 and ipv4 are required
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_address_space ReserveIpSubpool#ipv6_address_space}
  */
  readonly ipv6AddressSpace?: string;
  /**
  * IPv6 format dhcp server as input example : 2001:db8::1234
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_dhcp_servers ReserveIpSubpool#ipv6_dhcp_servers}
  */
  readonly ipv6DhcpServers?: string[];
  /**
  * IPv6 format dns server input example: 2001:db8::1234
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_dns_servers ReserveIpSubpool#ipv6_dns_servers}
  */
  readonly ipv6DnsServers?: string[];
  /**
  * Gateway ip address details, example: 2001:db8:85a3:0:100::1
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_gate_way ReserveIpSubpool#ipv6_gate_way}
  */
  readonly ipv6GateWay?: string;
  /**
  * IPv6 Global pool address with cidr this is required when Ipv6AddressSpace value is true, example: 2001:db8:85a3::/64
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_global_pool ReserveIpSubpool#ipv6_global_pool}
  */
  readonly ipv6GlobalPool?: string;
  /**
  * Ipv6 prefix value is true, the ip6 prefix length input field is enabled , if it is false ipv6 total Host input is enable
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_prefix ReserveIpSubpool#ipv6_prefix}
  */
  readonly ipv6Prefix?: string;
  /**
  * IPv6 prefix length is required when the ipv6prefix value is true
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_prefix_length ReserveIpSubpool#ipv6_prefix_length}
  */
  readonly ipv6PrefixLength?: number;
  /**
  * IPv6 Subnet address, example :2001:db8:85a3:0:100::
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_subnet ReserveIpSubpool#ipv6_subnet}
  */
  readonly ipv6Subnet?: string;
  /**
  * IPv6 total host is required when ipv6prefix value is false.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#ipv6_total_host ReserveIpSubpool#ipv6_total_host}
  */
  readonly ipv6TotalHost?: number;
  /**
  * Name of the reserve ip sub pool
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#name ReserveIpSubpool#name}
  */
  readonly name?: string;
  /**
  * siteId path parameter. Site id of site to update sub pool.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#site_id ReserveIpSubpool#site_id}
  */
  readonly siteId?: string;
  /**
  * Slaac Support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#slaac_support ReserveIpSubpool#slaac_support}
  */
  readonly slaacSupport?: string;
  /**
  * Type of the reserve ip sub pool
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#type ReserveIpSubpool#type}
  */
  readonly type?: string;
}

export function reserveIpSubpoolParametersToTerraform(struct?: ReserveIpSubpoolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    ipv4_dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4DhcpServers),
    ipv4_dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4DnsServers),
    ipv4_gate_way: cdktf.stringToTerraform(struct!.ipv4GateWay),
    ipv4_global_pool: cdktf.stringToTerraform(struct!.ipv4GlobalPool),
    ipv4_prefix: cdktf.stringToTerraform(struct!.ipv4Prefix),
    ipv4_prefix_length: cdktf.numberToTerraform(struct!.ipv4PrefixLength),
    ipv4_subnet: cdktf.stringToTerraform(struct!.ipv4Subnet),
    ipv4_total_host: cdktf.numberToTerraform(struct!.ipv4TotalHost),
    ipv6_address_space: cdktf.stringToTerraform(struct!.ipv6AddressSpace),
    ipv6_dhcp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6DhcpServers),
    ipv6_dns_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6DnsServers),
    ipv6_gate_way: cdktf.stringToTerraform(struct!.ipv6GateWay),
    ipv6_global_pool: cdktf.stringToTerraform(struct!.ipv6GlobalPool),
    ipv6_prefix: cdktf.stringToTerraform(struct!.ipv6Prefix),
    ipv6_prefix_length: cdktf.numberToTerraform(struct!.ipv6PrefixLength),
    ipv6_subnet: cdktf.stringToTerraform(struct!.ipv6Subnet),
    ipv6_total_host: cdktf.numberToTerraform(struct!.ipv6TotalHost),
    name: cdktf.stringToTerraform(struct!.name),
    site_id: cdktf.stringToTerraform(struct!.siteId),
    slaac_support: cdktf.stringToTerraform(struct!.slaacSupport),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function reserveIpSubpoolParametersToHclTerraform(struct?: ReserveIpSubpoolParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_dhcp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4DhcpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4DnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_gate_way: {
      value: cdktf.stringToHclTerraform(struct!.ipv4GateWay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_global_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipv4GlobalPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv4PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_total_host: {
      value: cdktf.numberToHclTerraform(struct!.ipv4TotalHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_address_space: {
      value: cdktf.stringToHclTerraform(struct!.ipv6AddressSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_dhcp_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6DhcpServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_dns_servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6DnsServers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_gate_way: {
      value: cdktf.stringToHclTerraform(struct!.ipv6GateWay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_global_pool: {
      value: cdktf.stringToHclTerraform(struct!.ipv6GlobalPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_prefix_length: {
      value: cdktf.numberToHclTerraform(struct!.ipv6PrefixLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_subnet: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_total_host: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TotalHost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_id: {
      value: cdktf.stringToHclTerraform(struct!.siteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    slaac_support: {
      value: cdktf.stringToHclTerraform(struct!.slaacSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ReserveIpSubpoolParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ReserveIpSubpoolParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipv4DhcpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4DhcpServers = this._ipv4DhcpServers;
    }
    if (this._ipv4DnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4DnsServers = this._ipv4DnsServers;
    }
    if (this._ipv4GateWay !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4GateWay = this._ipv4GateWay;
    }
    if (this._ipv4GlobalPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4GlobalPool = this._ipv4GlobalPool;
    }
    if (this._ipv4Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Prefix = this._ipv4Prefix;
    }
    if (this._ipv4PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4PrefixLength = this._ipv4PrefixLength;
    }
    if (this._ipv4Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Subnet = this._ipv4Subnet;
    }
    if (this._ipv4TotalHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4TotalHost = this._ipv4TotalHost;
    }
    if (this._ipv6AddressSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6AddressSpace = this._ipv6AddressSpace;
    }
    if (this._ipv6DhcpServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DhcpServers = this._ipv6DhcpServers;
    }
    if (this._ipv6DnsServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DnsServers = this._ipv6DnsServers;
    }
    if (this._ipv6GateWay !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GateWay = this._ipv6GateWay;
    }
    if (this._ipv6GlobalPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GlobalPool = this._ipv6GlobalPool;
    }
    if (this._ipv6Prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Prefix = this._ipv6Prefix;
    }
    if (this._ipv6PrefixLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6PrefixLength = this._ipv6PrefixLength;
    }
    if (this._ipv6Subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Subnet = this._ipv6Subnet;
    }
    if (this._ipv6TotalHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TotalHost = this._ipv6TotalHost;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._siteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteId = this._siteId;
    }
    if (this._slaacSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaacSupport = this._slaacSupport;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ReserveIpSubpoolParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._ipv4DhcpServers = undefined;
      this._ipv4DnsServers = undefined;
      this._ipv4GateWay = undefined;
      this._ipv4GlobalPool = undefined;
      this._ipv4Prefix = undefined;
      this._ipv4PrefixLength = undefined;
      this._ipv4Subnet = undefined;
      this._ipv4TotalHost = undefined;
      this._ipv6AddressSpace = undefined;
      this._ipv6DhcpServers = undefined;
      this._ipv6DnsServers = undefined;
      this._ipv6GateWay = undefined;
      this._ipv6GlobalPool = undefined;
      this._ipv6Prefix = undefined;
      this._ipv6PrefixLength = undefined;
      this._ipv6Subnet = undefined;
      this._ipv6TotalHost = undefined;
      this._name = undefined;
      this._siteId = undefined;
      this._slaacSupport = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._ipv4DhcpServers = value.ipv4DhcpServers;
      this._ipv4DnsServers = value.ipv4DnsServers;
      this._ipv4GateWay = value.ipv4GateWay;
      this._ipv4GlobalPool = value.ipv4GlobalPool;
      this._ipv4Prefix = value.ipv4Prefix;
      this._ipv4PrefixLength = value.ipv4PrefixLength;
      this._ipv4Subnet = value.ipv4Subnet;
      this._ipv4TotalHost = value.ipv4TotalHost;
      this._ipv6AddressSpace = value.ipv6AddressSpace;
      this._ipv6DhcpServers = value.ipv6DhcpServers;
      this._ipv6DnsServers = value.ipv6DnsServers;
      this._ipv6GateWay = value.ipv6GateWay;
      this._ipv6GlobalPool = value.ipv6GlobalPool;
      this._ipv6Prefix = value.ipv6Prefix;
      this._ipv6PrefixLength = value.ipv6PrefixLength;
      this._ipv6Subnet = value.ipv6Subnet;
      this._ipv6TotalHost = value.ipv6TotalHost;
      this._name = value.name;
      this._siteId = value.siteId;
      this._slaacSupport = value.slaacSupport;
      this._type = value.type;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // ipv4_dhcp_servers - computed: true, optional: true, required: false
  private _ipv4DhcpServers?: string[]; 
  public get ipv4DhcpServers() {
    return this.getListAttribute('ipv4_dhcp_servers');
  }
  public set ipv4DhcpServers(value: string[]) {
    this._ipv4DhcpServers = value;
  }
  public resetIpv4DhcpServers() {
    this._ipv4DhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DhcpServersInput() {
    return this._ipv4DhcpServers;
  }

  // ipv4_dns_servers - computed: true, optional: true, required: false
  private _ipv4DnsServers?: string[]; 
  public get ipv4DnsServers() {
    return this.getListAttribute('ipv4_dns_servers');
  }
  public set ipv4DnsServers(value: string[]) {
    this._ipv4DnsServers = value;
  }
  public resetIpv4DnsServers() {
    this._ipv4DnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DnsServersInput() {
    return this._ipv4DnsServers;
  }

  // ipv4_gate_way - computed: true, optional: true, required: false
  private _ipv4GateWay?: string; 
  public get ipv4GateWay() {
    return this.getStringAttribute('ipv4_gate_way');
  }
  public set ipv4GateWay(value: string) {
    this._ipv4GateWay = value;
  }
  public resetIpv4GateWay() {
    this._ipv4GateWay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GateWayInput() {
    return this._ipv4GateWay;
  }

  // ipv4_global_pool - computed: true, optional: true, required: false
  private _ipv4GlobalPool?: string; 
  public get ipv4GlobalPool() {
    return this.getStringAttribute('ipv4_global_pool');
  }
  public set ipv4GlobalPool(value: string) {
    this._ipv4GlobalPool = value;
  }
  public resetIpv4GlobalPool() {
    this._ipv4GlobalPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4GlobalPoolInput() {
    return this._ipv4GlobalPool;
  }

  // ipv4_prefix - computed: true, optional: true, required: false
  private _ipv4Prefix?: string; 
  public get ipv4Prefix() {
    return this.getStringAttribute('ipv4_prefix');
  }
  public set ipv4Prefix(value: string) {
    this._ipv4Prefix = value;
  }
  public resetIpv4Prefix() {
    this._ipv4Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixInput() {
    return this._ipv4Prefix;
  }

  // ipv4_prefix_length - computed: true, optional: true, required: false
  private _ipv4PrefixLength?: number; 
  public get ipv4PrefixLength() {
    return this.getNumberAttribute('ipv4_prefix_length');
  }
  public set ipv4PrefixLength(value: number) {
    this._ipv4PrefixLength = value;
  }
  public resetIpv4PrefixLength() {
    this._ipv4PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4PrefixLengthInput() {
    return this._ipv4PrefixLength;
  }

  // ipv4_subnet - computed: true, optional: true, required: false
  private _ipv4Subnet?: string; 
  public get ipv4Subnet() {
    return this.getStringAttribute('ipv4_subnet');
  }
  public set ipv4Subnet(value: string) {
    this._ipv4Subnet = value;
  }
  public resetIpv4Subnet() {
    this._ipv4Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SubnetInput() {
    return this._ipv4Subnet;
  }

  // ipv4_total_host - computed: true, optional: true, required: false
  private _ipv4TotalHost?: number; 
  public get ipv4TotalHost() {
    return this.getNumberAttribute('ipv4_total_host');
  }
  public set ipv4TotalHost(value: number) {
    this._ipv4TotalHost = value;
  }
  public resetIpv4TotalHost() {
    this._ipv4TotalHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4TotalHostInput() {
    return this._ipv4TotalHost;
  }

  // ipv6_address_space - computed: true, optional: true, required: false
  private _ipv6AddressSpace?: string; 
  public get ipv6AddressSpace() {
    return this.getStringAttribute('ipv6_address_space');
  }
  public set ipv6AddressSpace(value: string) {
    this._ipv6AddressSpace = value;
  }
  public resetIpv6AddressSpace() {
    this._ipv6AddressSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressSpaceInput() {
    return this._ipv6AddressSpace;
  }

  // ipv6_dhcp_servers - computed: true, optional: true, required: false
  private _ipv6DhcpServers?: string[]; 
  public get ipv6DhcpServers() {
    return this.getListAttribute('ipv6_dhcp_servers');
  }
  public set ipv6DhcpServers(value: string[]) {
    this._ipv6DhcpServers = value;
  }
  public resetIpv6DhcpServers() {
    this._ipv6DhcpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DhcpServersInput() {
    return this._ipv6DhcpServers;
  }

  // ipv6_dns_servers - computed: true, optional: true, required: false
  private _ipv6DnsServers?: string[]; 
  public get ipv6DnsServers() {
    return this.getListAttribute('ipv6_dns_servers');
  }
  public set ipv6DnsServers(value: string[]) {
    this._ipv6DnsServers = value;
  }
  public resetIpv6DnsServers() {
    this._ipv6DnsServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DnsServersInput() {
    return this._ipv6DnsServers;
  }

  // ipv6_gate_way - computed: true, optional: true, required: false
  private _ipv6GateWay?: string; 
  public get ipv6GateWay() {
    return this.getStringAttribute('ipv6_gate_way');
  }
  public set ipv6GateWay(value: string) {
    this._ipv6GateWay = value;
  }
  public resetIpv6GateWay() {
    this._ipv6GateWay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GateWayInput() {
    return this._ipv6GateWay;
  }

  // ipv6_global_pool - computed: true, optional: true, required: false
  private _ipv6GlobalPool?: string; 
  public get ipv6GlobalPool() {
    return this.getStringAttribute('ipv6_global_pool');
  }
  public set ipv6GlobalPool(value: string) {
    this._ipv6GlobalPool = value;
  }
  public resetIpv6GlobalPool() {
    this._ipv6GlobalPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GlobalPoolInput() {
    return this._ipv6GlobalPool;
  }

  // ipv6_prefix - computed: true, optional: true, required: false
  private _ipv6Prefix?: string; 
  public get ipv6Prefix() {
    return this.getStringAttribute('ipv6_prefix');
  }
  public set ipv6Prefix(value: string) {
    this._ipv6Prefix = value;
  }
  public resetIpv6Prefix() {
    this._ipv6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixInput() {
    return this._ipv6Prefix;
  }

  // ipv6_prefix_length - computed: true, optional: true, required: false
  private _ipv6PrefixLength?: number; 
  public get ipv6PrefixLength() {
    return this.getNumberAttribute('ipv6_prefix_length');
  }
  public set ipv6PrefixLength(value: number) {
    this._ipv6PrefixLength = value;
  }
  public resetIpv6PrefixLength() {
    this._ipv6PrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixLengthInput() {
    return this._ipv6PrefixLength;
  }

  // ipv6_subnet - computed: true, optional: true, required: false
  private _ipv6Subnet?: string; 
  public get ipv6Subnet() {
    return this.getStringAttribute('ipv6_subnet');
  }
  public set ipv6Subnet(value: string) {
    this._ipv6Subnet = value;
  }
  public resetIpv6Subnet() {
    this._ipv6Subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SubnetInput() {
    return this._ipv6Subnet;
  }

  // ipv6_total_host - computed: true, optional: true, required: false
  private _ipv6TotalHost?: number; 
  public get ipv6TotalHost() {
    return this.getNumberAttribute('ipv6_total_host');
  }
  public set ipv6TotalHost(value: number) {
    this._ipv6TotalHost = value;
  }
  public resetIpv6TotalHost() {
    this._ipv6TotalHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TotalHostInput() {
    return this._ipv6TotalHost;
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

  // site_id - computed: false, optional: true, required: false
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  public resetSiteId() {
    this._siteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // slaac_support - computed: true, optional: true, required: false
  private _slaacSupport?: string; 
  public get slaacSupport() {
    return this.getStringAttribute('slaac_support');
  }
  public set slaacSupport(value: string) {
    this._slaacSupport = value;
  }
  public resetSlaacSupport() {
    this._slaacSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaacSupportInput() {
    return this._slaacSupport;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ReserveIpSubpoolParametersList extends cdktf.ComplexList {
  public internalValue? : ReserveIpSubpoolParameters[] | cdktf.IResolvable

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
  public get(index: number): ReserveIpSubpoolParametersOutputReference {
    return new ReserveIpSubpoolParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool dnacenter_reserve_ip_subpool}
*/
export class ReserveIpSubpool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_reserve_ip_subpool";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ReserveIpSubpool resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ReserveIpSubpool to import
  * @param importFromId The id of the existing ReserveIpSubpool that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ReserveIpSubpool to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_reserve_ip_subpool", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/reserve_ip_subpool dnacenter_reserve_ip_subpool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReserveIpSubpoolConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReserveIpSubpoolConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_reserve_ip_subpool',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
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
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new ReserveIpSubpoolItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ReserveIpSubpoolParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ReserveIpSubpoolParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: cdktf.listMapper(reserveIpSubpoolParametersToTerraform, true)(this._parameters.internalValue),
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
      parameters: {
        value: cdktf.listMapperHcl(reserveIpSubpoolParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ReserveIpSubpoolParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
