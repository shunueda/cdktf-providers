// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRouterosIpv6FirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#___skip___ DataRouterosIpv6Firewall#___skip___}
  */
  readonly skip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#id DataRouterosIpv6Firewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * mangle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#mangle DataRouterosIpv6Firewall#mangle}
  */
  readonly mangle?: DataRouterosIpv6FirewallMangle[] | cdktf.IResolvable;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#nat DataRouterosIpv6Firewall#nat}
  */
  readonly nat?: DataRouterosIpv6FirewallNat[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#rules DataRouterosIpv6Firewall#rules}
  */
  readonly rules?: DataRouterosIpv6FirewallRules[] | cdktf.IResolvable;
}
export interface DataRouterosIpv6FirewallMangle {
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#filter DataRouterosIpv6Firewall#filter}
  */
  readonly filter?: { [key: string]: string };
}

export function dataRouterosIpv6FirewallMangleToTerraform(struct?: DataRouterosIpv6FirewallMangle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
  }
}


export function dataRouterosIpv6FirewallMangleToHclTerraform(struct?: DataRouterosIpv6FirewallMangle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.filter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRouterosIpv6FirewallMangleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpv6FirewallMangle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRouterosIpv6FirewallMangle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // address_list - computed: true, optional: false, required: false
  public get addressList() {
    return this.getStringAttribute('address_list');
  }

  // address_list_timeout - computed: true, optional: false, required: false
  public get addressListTimeout() {
    return this.getStringAttribute('address_list_timeout');
  }

  // bytes - computed: true, optional: false, required: false
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }

  // chain - computed: true, optional: false, required: false
  public get chain() {
    return this.getStringAttribute('chain');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // connection_bytes - computed: true, optional: false, required: false
  public get connectionBytes() {
    return this.getStringAttribute('connection_bytes');
  }

  // connection_limit - computed: true, optional: false, required: false
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }

  // connection_mark - computed: true, optional: false, required: false
  public get connectionMark() {
    return this.getStringAttribute('connection_mark');
  }

  // connection_nat_state - computed: true, optional: false, required: false
  public get connectionNatState() {
    return this.getStringAttribute('connection_nat_state');
  }

  // connection_rate - computed: true, optional: false, required: false
  public get connectionRate() {
    return this.getStringAttribute('connection_rate');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // dst_address - computed: true, optional: false, required: false
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }

  // dst_address_list - computed: true, optional: false, required: false
  public get dstAddressList() {
    return this.getStringAttribute('dst_address_list');
  }

  // dst_address_type - computed: true, optional: false, required: false
  public get dstAddressType() {
    return this.getStringAttribute('dst_address_type');
  }

  // dst_limit - computed: true, optional: false, required: false
  public get dstLimit() {
    return this.getStringAttribute('dst_limit');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // icmp_options - computed: true, optional: false, required: false
  public get icmpOptions() {
    return this.getStringAttribute('icmp_options');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_bridge_port - computed: true, optional: false, required: false
  public get inBridgePort() {
    return this.getStringAttribute('in_bridge_port');
  }

  // in_bridge_port_list - computed: true, optional: false, required: false
  public get inBridgePortList() {
    return this.getStringAttribute('in_bridge_port_list');
  }

  // in_interface - computed: true, optional: false, required: false
  public get inInterface() {
    return this.getStringAttribute('in_interface');
  }

  // in_interface_list - computed: true, optional: false, required: false
  public get inInterfaceList() {
    return this.getStringAttribute('in_interface_list');
  }

  // ingress_priority - computed: true, optional: false, required: false
  public get ingressPriority() {
    return this.getNumberAttribute('ingress_priority');
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // ipsec_policy - computed: true, optional: false, required: false
  public get ipsecPolicy() {
    return this.getStringAttribute('ipsec_policy');
  }

  // jump_target - computed: true, optional: false, required: false
  public get jumpTarget() {
    return this.getStringAttribute('jump_target');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getStringAttribute('limit');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // log_prefix - computed: true, optional: false, required: false
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }

  // new_connection_mark - computed: true, optional: false, required: false
  public get newConnectionMark() {
    return this.getStringAttribute('new_connection_mark');
  }

  // new_dscp - computed: true, optional: false, required: false
  public get newDscp() {
    return this.getNumberAttribute('new_dscp');
  }

  // new_mss - computed: true, optional: false, required: false
  public get newMss() {
    return this.getNumberAttribute('new_mss');
  }

  // new_packet_mark - computed: true, optional: false, required: false
  public get newPacketMark() {
    return this.getStringAttribute('new_packet_mark');
  }

  // new_priority - computed: true, optional: false, required: false
  public get newPriority() {
    return this.getStringAttribute('new_priority');
  }

  // new_routing_mark - computed: true, optional: false, required: false
  public get newRoutingMark() {
    return this.getStringAttribute('new_routing_mark');
  }

  // new_ttl - computed: true, optional: false, required: false
  public get newTtl() {
    return this.getStringAttribute('new_ttl');
  }

  // nth - computed: true, optional: false, required: false
  public get nth() {
    return this.getStringAttribute('nth');
  }

  // out_bridge_port - computed: true, optional: false, required: false
  public get outBridgePort() {
    return this.getStringAttribute('out_bridge_port');
  }

  // out_bridge_port_list - computed: true, optional: false, required: false
  public get outBridgePortList() {
    return this.getStringAttribute('out_bridge_port_list');
  }

  // out_interface - computed: true, optional: false, required: false
  public get outInterface() {
    return this.getStringAttribute('out_interface');
  }

  // out_interface_list - computed: true, optional: false, required: false
  public get outInterfaceList() {
    return this.getStringAttribute('out_interface_list');
  }

  // packet_mark - computed: true, optional: false, required: false
  public get packetMark() {
    return this.getStringAttribute('packet_mark');
  }

  // packet_size - computed: true, optional: false, required: false
  public get packetSize() {
    return this.getStringAttribute('packet_size');
  }

  // passthrough - computed: true, optional: false, required: false
  public get passthrough() {
    return this.getBooleanAttribute('passthrough');
  }

  // per_connection_classifier - computed: true, optional: false, required: false
  public get perConnectionClassifier() {
    return this.getStringAttribute('per_connection_classifier');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // random - computed: true, optional: false, required: false
  public get random() {
    return this.getNumberAttribute('random');
  }

  // routing_mark - computed: true, optional: false, required: false
  public get routingMark() {
    return this.getStringAttribute('routing_mark');
  }

  // src_address - computed: true, optional: false, required: false
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }

  // src_address_list - computed: true, optional: false, required: false
  public get srcAddressList() {
    return this.getStringAttribute('src_address_list');
  }

  // src_address_type - computed: true, optional: false, required: false
  public get srcAddressType() {
    return this.getStringAttribute('src_address_type');
  }

  // src_mac_address - computed: true, optional: false, required: false
  public get srcMacAddress() {
    return this.getStringAttribute('src_mac_address');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }

  // tcp_flags - computed: true, optional: false, required: false
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getStringAttribute('tcp_mss');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // tls_host - computed: true, optional: false, required: false
  public get tlsHost() {
    return this.getStringAttribute('tls_host');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
}

export class DataRouterosIpv6FirewallMangleList extends cdktf.ComplexList {
  public internalValue? : DataRouterosIpv6FirewallMangle[] | cdktf.IResolvable

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
  public get(index: number): DataRouterosIpv6FirewallMangleOutputReference {
    return new DataRouterosIpv6FirewallMangleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRouterosIpv6FirewallNat {
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#filter DataRouterosIpv6Firewall#filter}
  */
  readonly filter?: { [key: string]: string };
}

export function dataRouterosIpv6FirewallNatToTerraform(struct?: DataRouterosIpv6FirewallNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
  }
}


export function dataRouterosIpv6FirewallNatToHclTerraform(struct?: DataRouterosIpv6FirewallNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.filter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRouterosIpv6FirewallNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpv6FirewallNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRouterosIpv6FirewallNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // address_list - computed: true, optional: false, required: false
  public get addressList() {
    return this.getStringAttribute('address_list');
  }

  // address_list_timeout - computed: true, optional: false, required: false
  public get addressListTimeout() {
    return this.getStringAttribute('address_list_timeout');
  }

  // bytes - computed: true, optional: false, required: false
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }

  // chain - computed: true, optional: false, required: false
  public get chain() {
    return this.getStringAttribute('chain');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // connection_bytes - computed: true, optional: false, required: false
  public get connectionBytes() {
    return this.getStringAttribute('connection_bytes');
  }

  // connection_limit - computed: true, optional: false, required: false
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }

  // connection_mark - computed: true, optional: false, required: false
  public get connectionMark() {
    return this.getStringAttribute('connection_mark');
  }

  // connection_rate - computed: true, optional: false, required: false
  public get connectionRate() {
    return this.getStringAttribute('connection_rate');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // dst_address - computed: true, optional: false, required: false
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }

  // dst_address_list - computed: true, optional: false, required: false
  public get dstAddressList() {
    return this.getStringAttribute('dst_address_list');
  }

  // dst_address_type - computed: true, optional: false, required: false
  public get dstAddressType() {
    return this.getStringAttribute('dst_address_type');
  }

  // dst_limit - computed: true, optional: false, required: false
  public get dstLimit() {
    return this.getStringAttribute('dst_limit');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // icmp_options - computed: true, optional: false, required: false
  public get icmpOptions() {
    return this.getStringAttribute('icmp_options');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_bridge_port - computed: true, optional: false, required: false
  public get inBridgePort() {
    return this.getStringAttribute('in_bridge_port');
  }

  // in_bridge_port_list - computed: true, optional: false, required: false
  public get inBridgePortList() {
    return this.getStringAttribute('in_bridge_port_list');
  }

  // in_interface - computed: true, optional: false, required: false
  public get inInterface() {
    return this.getStringAttribute('in_interface');
  }

  // in_interface_list - computed: true, optional: false, required: false
  public get inInterfaceList() {
    return this.getStringAttribute('in_interface_list');
  }

  // ingress_priority - computed: true, optional: false, required: false
  public get ingressPriority() {
    return this.getNumberAttribute('ingress_priority');
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // ipsec_policy - computed: true, optional: false, required: false
  public get ipsecPolicy() {
    return this.getStringAttribute('ipsec_policy');
  }

  // jump_target - computed: true, optional: false, required: false
  public get jumpTarget() {
    return this.getStringAttribute('jump_target');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getStringAttribute('limit');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // log_prefix - computed: true, optional: false, required: false
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }

  // nth - computed: true, optional: false, required: false
  public get nth() {
    return this.getStringAttribute('nth');
  }

  // out_bridge_port - computed: true, optional: false, required: false
  public get outBridgePort() {
    return this.getStringAttribute('out_bridge_port');
  }

  // out_bridge_port_list - computed: true, optional: false, required: false
  public get outBridgePortList() {
    return this.getStringAttribute('out_bridge_port_list');
  }

  // out_interface - computed: true, optional: false, required: false
  public get outInterface() {
    return this.getStringAttribute('out_interface');
  }

  // out_interface_list - computed: true, optional: false, required: false
  public get outInterfaceList() {
    return this.getStringAttribute('out_interface_list');
  }

  // packet_mark - computed: true, optional: false, required: false
  public get packetMark() {
    return this.getStringAttribute('packet_mark');
  }

  // packet_size - computed: true, optional: false, required: false
  public get packetSize() {
    return this.getStringAttribute('packet_size');
  }

  // per_connection_classifier - computed: true, optional: false, required: false
  public get perConnectionClassifier() {
    return this.getStringAttribute('per_connection_classifier');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // random - computed: true, optional: false, required: false
  public get random() {
    return this.getNumberAttribute('random');
  }

  // routing_mark - computed: true, optional: false, required: false
  public get routingMark() {
    return this.getStringAttribute('routing_mark');
  }

  // src_address - computed: true, optional: false, required: false
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }

  // src_address_list - computed: true, optional: false, required: false
  public get srcAddressList() {
    return this.getStringAttribute('src_address_list');
  }

  // src_address_type - computed: true, optional: false, required: false
  public get srcAddressType() {
    return this.getStringAttribute('src_address_type');
  }

  // src_mac_address - computed: true, optional: false, required: false
  public get srcMacAddress() {
    return this.getStringAttribute('src_mac_address');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }

  // tcp_flags - computed: true, optional: false, required: false
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getStringAttribute('tcp_mss');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // tls_host - computed: true, optional: false, required: false
  public get tlsHost() {
    return this.getStringAttribute('tls_host');
  }

  // to_address - computed: true, optional: false, required: false
  public get toAddress() {
    return this.getStringAttribute('to_address');
  }

  // to_ports - computed: true, optional: false, required: false
  public get toPorts() {
    return this.getStringAttribute('to_ports');
  }
}

export class DataRouterosIpv6FirewallNatList extends cdktf.ComplexList {
  public internalValue? : DataRouterosIpv6FirewallNat[] | cdktf.IResolvable

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
  public get(index: number): DataRouterosIpv6FirewallNatOutputReference {
    return new DataRouterosIpv6FirewallNatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRouterosIpv6FirewallRules {
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#filter DataRouterosIpv6Firewall#filter}
  */
  readonly filter?: { [key: string]: string };
}

export function dataRouterosIpv6FirewallRulesToTerraform(struct?: DataRouterosIpv6FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
  }
}


export function dataRouterosIpv6FirewallRulesToHclTerraform(struct?: DataRouterosIpv6FirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.filter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRouterosIpv6FirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpv6FirewallRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRouterosIpv6FirewallRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._filter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._filter = value.filter;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // bytes - computed: true, optional: false, required: false
  public get bytes() {
    return this.getNumberAttribute('bytes');
  }

  // chain - computed: true, optional: false, required: false
  public get chain() {
    return this.getStringAttribute('chain');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // connection_bytes - computed: true, optional: false, required: false
  public get connectionBytes() {
    return this.getStringAttribute('connection_bytes');
  }

  // connection_limit - computed: true, optional: false, required: false
  public get connectionLimit() {
    return this.getStringAttribute('connection_limit');
  }

  // connection_mark - computed: true, optional: false, required: false
  public get connectionMark() {
    return this.getStringAttribute('connection_mark');
  }

  // connection_nat_state - computed: true, optional: false, required: false
  public get connectionNatState() {
    return this.getStringAttribute('connection_nat_state');
  }

  // connection_rate - computed: true, optional: false, required: false
  public get connectionRate() {
    return this.getStringAttribute('connection_rate');
  }

  // connection_state - computed: true, optional: false, required: false
  public get connectionState() {
    return this.getStringAttribute('connection_state');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return this.getStringAttribute('content');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // dscp - computed: true, optional: false, required: false
  public get dscp() {
    return this.getNumberAttribute('dscp');
  }

  // dst_address - computed: true, optional: false, required: false
  public get dstAddress() {
    return this.getStringAttribute('dst_address');
  }

  // dst_address_list - computed: true, optional: false, required: false
  public get dstAddressList() {
    return this.getStringAttribute('dst_address_list');
  }

  // dst_address_type - computed: true, optional: false, required: false
  public get dstAddressType() {
    return this.getStringAttribute('dst_address_type');
  }

  // dst_limit - computed: true, optional: false, required: false
  public get dstLimit() {
    return this.getStringAttribute('dst_limit');
  }

  // dst_port - computed: true, optional: false, required: false
  public get dstPort() {
    return this.getStringAttribute('dst_port');
  }

  // dynamic - computed: true, optional: false, required: false
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // icmp_options - computed: true, optional: false, required: false
  public get icmpOptions() {
    return this.getStringAttribute('icmp_options');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // in_bridge_port - computed: true, optional: false, required: false
  public get inBridgePort() {
    return this.getStringAttribute('in_bridge_port');
  }

  // in_bridge_port_list - computed: true, optional: false, required: false
  public get inBridgePortList() {
    return this.getStringAttribute('in_bridge_port_list');
  }

  // in_interface - computed: true, optional: false, required: false
  public get inInterface() {
    return this.getStringAttribute('in_interface');
  }

  // in_interface_list - computed: true, optional: false, required: false
  public get inInterfaceList() {
    return this.getStringAttribute('in_interface_list');
  }

  // ingress_priority - computed: true, optional: false, required: false
  public get ingressPriority() {
    return this.getNumberAttribute('ingress_priority');
  }

  // invalid - computed: true, optional: false, required: false
  public get invalid() {
    return this.getBooleanAttribute('invalid');
  }

  // ipsec_policy - computed: true, optional: false, required: false
  public get ipsecPolicy() {
    return this.getStringAttribute('ipsec_policy');
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getStringAttribute('limit');
  }

  // log - computed: true, optional: false, required: false
  public get log() {
    return this.getBooleanAttribute('log');
  }

  // log_prefix - computed: true, optional: false, required: false
  public get logPrefix() {
    return this.getStringAttribute('log_prefix');
  }

  // nth - computed: true, optional: false, required: false
  public get nth() {
    return this.getStringAttribute('nth');
  }

  // out_bridge_port - computed: true, optional: false, required: false
  public get outBridgePort() {
    return this.getStringAttribute('out_bridge_port');
  }

  // out_bridge_port_list - computed: true, optional: false, required: false
  public get outBridgePortList() {
    return this.getStringAttribute('out_bridge_port_list');
  }

  // out_interface - computed: true, optional: false, required: false
  public get outInterface() {
    return this.getStringAttribute('out_interface');
  }

  // out_interface_list - computed: true, optional: false, required: false
  public get outInterfaceList() {
    return this.getStringAttribute('out_interface_list');
  }

  // packet_mark - computed: true, optional: false, required: false
  public get packetMark() {
    return this.getStringAttribute('packet_mark');
  }

  // packet_size - computed: true, optional: false, required: false
  public get packetSize() {
    return this.getStringAttribute('packet_size');
  }

  // per_connection_classifier - computed: true, optional: false, required: false
  public get perConnectionClassifier() {
    return this.getStringAttribute('per_connection_classifier');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // random - computed: true, optional: false, required: false
  public get random() {
    return this.getNumberAttribute('random');
  }

  // reject_with - computed: true, optional: false, required: false
  public get rejectWith() {
    return this.getStringAttribute('reject_with');
  }

  // routing_mark - computed: true, optional: false, required: false
  public get routingMark() {
    return this.getStringAttribute('routing_mark');
  }

  // routing_table - computed: true, optional: false, required: false
  public get routingTable() {
    return this.getStringAttribute('routing_table');
  }

  // src_address - computed: true, optional: false, required: false
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }

  // src_address_list - computed: true, optional: false, required: false
  public get srcAddressList() {
    return this.getStringAttribute('src_address_list');
  }

  // src_address_type - computed: true, optional: false, required: false
  public get srcAddressType() {
    return this.getStringAttribute('src_address_type');
  }

  // src_mac_address - computed: true, optional: false, required: false
  public get srcMacAddress() {
    return this.getStringAttribute('src_mac_address');
  }

  // src_port - computed: true, optional: false, required: false
  public get srcPort() {
    return this.getStringAttribute('src_port');
  }

  // tcp_flags - computed: true, optional: false, required: false
  public get tcpFlags() {
    return this.getStringAttribute('tcp_flags');
  }

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getStringAttribute('tcp_mss');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // tls_host - computed: true, optional: false, required: false
  public get tlsHost() {
    return this.getStringAttribute('tls_host');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
}

export class DataRouterosIpv6FirewallRulesList extends cdktf.ComplexList {
  public internalValue? : DataRouterosIpv6FirewallRules[] | cdktf.IResolvable

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
  public get(index: number): DataRouterosIpv6FirewallRulesOutputReference {
    return new DataRouterosIpv6FirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall routeros_ipv6_firewall}
*/
export class DataRouterosIpv6Firewall extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ipv6_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRouterosIpv6Firewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRouterosIpv6Firewall to import
  * @param importFromId The id of the existing DataRouterosIpv6Firewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRouterosIpv6Firewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ipv6_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/data-sources/ipv6_firewall routeros_ipv6_firewall} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRouterosIpv6FirewallConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRouterosIpv6FirewallConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ipv6_firewall',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._skip = config.skip;
    this._id = config.id;
    this._mangle.internalValue = config.mangle;
    this._nat.internalValue = config.nat;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
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

  // mangle - computed: false, optional: true, required: false
  private _mangle = new DataRouterosIpv6FirewallMangleList(this, "mangle", false);
  public get mangle() {
    return this._mangle;
  }
  public putMangle(value: DataRouterosIpv6FirewallMangle[] | cdktf.IResolvable) {
    this._mangle.internalValue = value;
  }
  public resetMangle() {
    this._mangle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mangleInput() {
    return this._mangle.internalValue;
  }

  // nat - computed: false, optional: true, required: false
  private _nat = new DataRouterosIpv6FirewallNatList(this, "nat", false);
  public get nat() {
    return this._nat;
  }
  public putNat(value: DataRouterosIpv6FirewallNat[] | cdktf.IResolvable) {
    this._nat.internalValue = value;
  }
  public resetNat() {
    this._nat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natInput() {
    return this._nat.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new DataRouterosIpv6FirewallRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataRouterosIpv6FirewallRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___skip___: cdktf.stringToTerraform(this._skip),
      id: cdktf.stringToTerraform(this._id),
      mangle: cdktf.listMapper(dataRouterosIpv6FirewallMangleToTerraform, true)(this._mangle.internalValue),
      nat: cdktf.listMapper(dataRouterosIpv6FirewallNatToTerraform, true)(this._nat.internalValue),
      rules: cdktf.listMapper(dataRouterosIpv6FirewallRulesToTerraform, true)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
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
      mangle: {
        value: cdktf.listMapperHcl(dataRouterosIpv6FirewallMangleToHclTerraform, true)(this._mangle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRouterosIpv6FirewallMangleList",
      },
      nat: {
        value: cdktf.listMapperHcl(dataRouterosIpv6FirewallNatToHclTerraform, true)(this._nat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRouterosIpv6FirewallNatList",
      },
      rules: {
        value: cdktf.listMapperHcl(dataRouterosIpv6FirewallRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRouterosIpv6FirewallRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
