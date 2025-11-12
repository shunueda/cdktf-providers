// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRouterosIpFirewallConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#___skip___ DataRouterosIpFirewall#___skip___}
  */
  readonly skip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#id DataRouterosIpFirewall#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#address_list DataRouterosIpFirewall#address_list}
  */
  readonly addressList?: DataRouterosIpFirewallAddressListStruct[] | cdktf.IResolvable;
  /**
  * mangle block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#mangle DataRouterosIpFirewall#mangle}
  */
  readonly mangle?: DataRouterosIpFirewallMangle[] | cdktf.IResolvable;
  /**
  * nat block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#nat DataRouterosIpFirewall#nat}
  */
  readonly nat?: DataRouterosIpFirewallNat[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#rules DataRouterosIpFirewall#rules}
  */
  readonly rules?: DataRouterosIpFirewallRules[] | cdktf.IResolvable;
}
export interface DataRouterosIpFirewallAddressListStruct {
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#filter DataRouterosIpFirewall#filter}
  */
  readonly filter?: { [key: string]: string };
}

export function dataRouterosIpFirewallAddressListStructToTerraform(struct?: DataRouterosIpFirewallAddressListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
  }
}


export function dataRouterosIpFirewallAddressListStructToHclTerraform(struct?: DataRouterosIpFirewallAddressListStruct | cdktf.IResolvable): any {
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

export class DataRouterosIpFirewallAddressListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpFirewallAddressListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRouterosIpFirewallAddressListStruct | cdktf.IResolvable | undefined) {
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

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getStringAttribute('creation_time');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // list - computed: true, optional: false, required: false
  public get list() {
    return this.getStringAttribute('list');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
}

export class DataRouterosIpFirewallAddressListStructList extends cdktf.ComplexList {
  public internalValue? : DataRouterosIpFirewallAddressListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataRouterosIpFirewallAddressListStructOutputReference {
    return new DataRouterosIpFirewallAddressListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRouterosIpFirewallMangle {
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#filter DataRouterosIpFirewall#filter}
  */
  readonly filter?: { [key: string]: string };
}

export function dataRouterosIpFirewallMangleToTerraform(struct?: DataRouterosIpFirewallMangle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
  }
}


export function dataRouterosIpFirewallMangleToHclTerraform(struct?: DataRouterosIpFirewallMangle | cdktf.IResolvable): any {
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

export class DataRouterosIpFirewallMangleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpFirewallMangle | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRouterosIpFirewallMangle | cdktf.IResolvable | undefined) {
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

  // fragment - computed: true, optional: false, required: false
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }

  // hotspot - computed: true, optional: false, required: false
  public get hotspot() {
    return this.getStringAttribute('hotspot');
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

  // ipv4_options - computed: true, optional: false, required: false
  public get ipv4Options() {
    return this.getStringAttribute('ipv4_options');
  }

  // jump_target - computed: true, optional: false, required: false
  public get jumpTarget() {
    return this.getStringAttribute('jump_target');
  }

  // layer7_protocol - computed: true, optional: false, required: false
  public get layer7Protocol() {
    return this.getStringAttribute('layer7_protocol');
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // psd - computed: true, optional: false, required: false
  public get psd() {
    return this.getStringAttribute('psd');
  }

  // random - computed: true, optional: false, required: false
  public get random() {
    return this.getNumberAttribute('random');
  }

  // route_dst - computed: true, optional: false, required: false
  public get routeDst() {
    return this.getStringAttribute('route_dst');
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

export class DataRouterosIpFirewallMangleList extends cdktf.ComplexList {
  public internalValue? : DataRouterosIpFirewallMangle[] | cdktf.IResolvable

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
  public get(index: number): DataRouterosIpFirewallMangleOutputReference {
    return new DataRouterosIpFirewallMangleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRouterosIpFirewallNat {
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#filter DataRouterosIpFirewall#filter}
  */
  readonly filter?: { [key: string]: string };
}

export function dataRouterosIpFirewallNatToTerraform(struct?: DataRouterosIpFirewallNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
  }
}


export function dataRouterosIpFirewallNatToHclTerraform(struct?: DataRouterosIpFirewallNat | cdktf.IResolvable): any {
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

export class DataRouterosIpFirewallNatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpFirewallNat | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRouterosIpFirewallNat | cdktf.IResolvable | undefined) {
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

  // fragment - computed: true, optional: false, required: false
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }

  // hotspot - computed: true, optional: false, required: false
  public get hotspot() {
    return this.getStringAttribute('hotspot');
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

  // ipv4_options - computed: true, optional: false, required: false
  public get ipv4Options() {
    return this.getStringAttribute('ipv4_options');
  }

  // jump_target - computed: true, optional: false, required: false
  public get jumpTarget() {
    return this.getStringAttribute('jump_target');
  }

  // layer7_protocol - computed: true, optional: false, required: false
  public get layer7Protocol() {
    return this.getStringAttribute('layer7_protocol');
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

  // psd - computed: true, optional: false, required: false
  public get psd() {
    return this.getStringAttribute('psd');
  }

  // random - computed: true, optional: false, required: false
  public get random() {
    return this.getNumberAttribute('random');
  }

  // routing_mark - computed: true, optional: false, required: false
  public get routingMark() {
    return this.getStringAttribute('routing_mark');
  }

  // same_not_by_dst - computed: true, optional: false, required: false
  public get sameNotByDst() {
    return this.getBooleanAttribute('same_not_by_dst');
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

  // tcp_mss - computed: true, optional: false, required: false
  public get tcpMss() {
    return this.getStringAttribute('tcp_mss');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return this.getStringAttribute('time');
  }

  // to_addresses - computed: true, optional: false, required: false
  public get toAddresses() {
    return this.getStringAttribute('to_addresses');
  }

  // to_ports - computed: true, optional: false, required: false
  public get toPorts() {
    return this.getStringAttribute('to_ports');
  }

  // ttl - computed: true, optional: false, required: false
  public get ttl() {
    return this.getStringAttribute('ttl');
  }
}

export class DataRouterosIpFirewallNatList extends cdktf.ComplexList {
  public internalValue? : DataRouterosIpFirewallNat[] | cdktf.IResolvable

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
  public get(index: number): DataRouterosIpFirewallNatOutputReference {
    return new DataRouterosIpFirewallNatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataRouterosIpFirewallRules {
  /**
  * Additional request filtering options.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#filter DataRouterosIpFirewall#filter}
  */
  readonly filter?: { [key: string]: string };
}

export function dataRouterosIpFirewallRulesToTerraform(struct?: DataRouterosIpFirewallRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
  }
}


export function dataRouterosIpFirewallRulesToHclTerraform(struct?: DataRouterosIpFirewallRules | cdktf.IResolvable): any {
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

export class DataRouterosIpFirewallRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataRouterosIpFirewallRules | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataRouterosIpFirewallRules | cdktf.IResolvable | undefined) {
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

  // fragment - computed: true, optional: false, required: false
  public get fragment() {
    return this.getBooleanAttribute('fragment');
  }

  // hotspot - computed: true, optional: false, required: false
  public get hotspot() {
    return this.getStringAttribute('hotspot');
  }

  // hw_offload - computed: true, optional: false, required: false
  public get hwOffload() {
    return this.getBooleanAttribute('hw_offload');
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

  // ipv4_options - computed: true, optional: false, required: false
  public get ipv4Options() {
    return this.getStringAttribute('ipv4_options');
  }

  // jump_target - computed: true, optional: false, required: false
  public get jumpTarget() {
    return this.getStringAttribute('jump_target');
  }

  // layer7_protocol - computed: true, optional: false, required: false
  public get layer7Protocol() {
    return this.getStringAttribute('layer7_protocol');
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

  // psd - computed: true, optional: false, required: false
  public get psd() {
    return this.getStringAttribute('psd');
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

export class DataRouterosIpFirewallRulesList extends cdktf.ComplexList {
  public internalValue? : DataRouterosIpFirewallRules[] | cdktf.IResolvable

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
  public get(index: number): DataRouterosIpFirewallRulesOutputReference {
    return new DataRouterosIpFirewallRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall routeros_ip_firewall}
*/
export class DataRouterosIpFirewall extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_firewall";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRouterosIpFirewall resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRouterosIpFirewall to import
  * @param importFromId The id of the existing DataRouterosIpFirewall that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRouterosIpFirewall to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_firewall", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/data-sources/ip_firewall routeros_ip_firewall} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRouterosIpFirewallConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRouterosIpFirewallConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_firewall',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._addressList.internalValue = config.addressList;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList = new DataRouterosIpFirewallAddressListStructList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: DataRouterosIpFirewallAddressListStruct[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // mangle - computed: false, optional: true, required: false
  private _mangle = new DataRouterosIpFirewallMangleList(this, "mangle", false);
  public get mangle() {
    return this._mangle;
  }
  public putMangle(value: DataRouterosIpFirewallMangle[] | cdktf.IResolvable) {
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
  private _nat = new DataRouterosIpFirewallNatList(this, "nat", false);
  public get nat() {
    return this._nat;
  }
  public putNat(value: DataRouterosIpFirewallNat[] | cdktf.IResolvable) {
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
  private _rules = new DataRouterosIpFirewallRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataRouterosIpFirewallRules[] | cdktf.IResolvable) {
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
      address_list: cdktf.listMapper(dataRouterosIpFirewallAddressListStructToTerraform, true)(this._addressList.internalValue),
      mangle: cdktf.listMapper(dataRouterosIpFirewallMangleToTerraform, true)(this._mangle.internalValue),
      nat: cdktf.listMapper(dataRouterosIpFirewallNatToTerraform, true)(this._nat.internalValue),
      rules: cdktf.listMapper(dataRouterosIpFirewallRulesToTerraform, true)(this._rules.internalValue),
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
      address_list: {
        value: cdktf.listMapperHcl(dataRouterosIpFirewallAddressListStructToHclTerraform, true)(this._addressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRouterosIpFirewallAddressListStructList",
      },
      mangle: {
        value: cdktf.listMapperHcl(dataRouterosIpFirewallMangleToHclTerraform, true)(this._mangle.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRouterosIpFirewallMangleList",
      },
      nat: {
        value: cdktf.listMapperHcl(dataRouterosIpFirewallNatToHclTerraform, true)(this._nat.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRouterosIpFirewallNatList",
      },
      rules: {
        value: cdktf.listMapperHcl(dataRouterosIpFirewallRulesToHclTerraform, true)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataRouterosIpFirewallRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
