// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceEthernetIpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow traffic to be associated with promiscuous VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#allow_promiscuous_vip InterfaceEthernetIpA#allow_promiscuous_vip}
  */
  readonly allowPromiscuousVip?: number;
  /**
  * This interface connects to spoofing cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#cache_spoofing_port InterfaceEthernetIpA#cache_spoofing_port}
  */
  readonly cacheSpoofingPort?: number;
  /**
  * Client facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#client InterfaceEthernetIpA#client}
  */
  readonly client?: number;
  /**
  * Use DHCP to configure IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#dhcp InterfaceEthernetIpA#dhcp}
  */
  readonly dhcp?: number;
  /**
  * Enable Membership Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#generate_membership_query InterfaceEthernetIpA#generate_membership_query}
  */
  readonly generateMembershipQuery?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#id InterfaceEthernetIpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ifnum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ifnum InterfaceEthernetIpA#ifnum}
  */
  readonly ifnum: string;
  /**
  * Configure interface as inside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#inside InterfaceEthernetIpA#inside}
  */
  readonly inside?: number;
  /**
  * Maximum Response Time (Max Response Time (Default is 100))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#max_resp_time InterfaceEthernetIpA#max_resp_time}
  */
  readonly maxRespTime?: number;
  /**
  * Configure interface as outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#outside InterfaceEthernetIpA#outside}
  */
  readonly outside?: number;
  /**
  * 1 - 255 (Default is 125)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#query_interval InterfaceEthernetIpA#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Server facing interface for IPv4/v6 traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#server InterfaceEthernetIpA#server}
  */
  readonly server?: number;
  /**
  * Redirect SLB traffic across partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#slb_partition_redirect InterfaceEthernetIpA#slb_partition_redirect}
  */
  readonly slbPartitionRedirect?: number;
  /**
  * Configure Enable SYN-cookie on the interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#syn_cookie InterfaceEthernetIpA#syn_cookie}
  */
  readonly synCookie?: number;
  /**
  * Ignore TTL decrement for a received packet before sending out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ttl_ignore InterfaceEthernetIpA#ttl_ignore}
  */
  readonly ttlIgnore?: number;
  /**
  * Set the interface as unnumbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#unnumbered InterfaceEthernetIpA#unnumbered}
  */
  readonly unnumbered?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#uuid InterfaceEthernetIpA#uuid}
  */
  readonly uuid?: string;
  /**
  * address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#address_list InterfaceEthernetIpA#address_list}
  */
  readonly addressList?: InterfaceEthernetIpAddressListStructA[] | cdktf.IResolvable;
  /**
  * helper_address_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#helper_address_list InterfaceEthernetIpA#helper_address_list}
  */
  readonly helperAddressList?: InterfaceEthernetIpHelperAddressListStructA[] | cdktf.IResolvable;
  /**
  * ospf block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ospf InterfaceEthernetIpA#ospf}
  */
  readonly ospf?: InterfaceEthernetIpOspfA;
  /**
  * rip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#rip InterfaceEthernetIpA#rip}
  */
  readonly rip?: InterfaceEthernetIpRipA;
  /**
  * router block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#router InterfaceEthernetIpA#router}
  */
  readonly router?: InterfaceEthernetIpRouterA;
  /**
  * stateful_firewall block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#stateful_firewall InterfaceEthernetIpA#stateful_firewall}
  */
  readonly statefulFirewall?: InterfaceEthernetIpStatefulFirewallA;
}
export interface InterfaceEthernetIpAddressListStructA {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ipv4_address InterfaceEthernetIpA#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * IP subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ipv4_netmask InterfaceEthernetIpA#ipv4_netmask}
  */
  readonly ipv4Netmask?: string;
}

export function interfaceEthernetIpAddressListStructAToTerraform(struct?: InterfaceEthernetIpAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_netmask: cdktf.stringToTerraform(struct!.ipv4Netmask),
  }
}


export function interfaceEthernetIpAddressListStructAToHclTerraform(struct?: InterfaceEthernetIpAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_netmask: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Netmask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpAddressListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpAddressListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4Netmask !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Netmask = this._ipv4Netmask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpAddressListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4Address = undefined;
      this._ipv4Netmask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4Address = value.ipv4Address;
      this._ipv4Netmask = value.ipv4Netmask;
    }
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_netmask - computed: false, optional: true, required: false
  private _ipv4Netmask?: string; 
  public get ipv4Netmask() {
    return this.getStringAttribute('ipv4_netmask');
  }
  public set ipv4Netmask(value: string) {
    this._ipv4Netmask = value;
  }
  public resetIpv4Netmask() {
    this._ipv4Netmask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NetmaskInput() {
    return this._ipv4Netmask;
  }
}

export class InterfaceEthernetIpAddressListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpAddressListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpAddressListStructAOutputReference {
    return new InterfaceEthernetIpAddressListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpHelperAddressListStructA {
  /**
  * Helper address for DHCP packets (IP address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#helper_address InterfaceEthernetIpA#helper_address}
  */
  readonly helperAddress?: string;
}

export function interfaceEthernetIpHelperAddressListStructAToTerraform(struct?: InterfaceEthernetIpHelperAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    helper_address: cdktf.stringToTerraform(struct!.helperAddress),
  }
}


export function interfaceEthernetIpHelperAddressListStructAToHclTerraform(struct?: InterfaceEthernetIpHelperAddressListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    helper_address: {
      value: cdktf.stringToHclTerraform(struct!.helperAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpHelperAddressListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpHelperAddressListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._helperAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.helperAddress = this._helperAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpHelperAddressListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._helperAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._helperAddress = value.helperAddress;
    }
  }

  // helper_address - computed: false, optional: true, required: false
  private _helperAddress?: string; 
  public get helperAddress() {
    return this.getStringAttribute('helper_address');
  }
  public set helperAddress(value: string) {
    this._helperAddress = value;
  }
  public resetHelperAddress() {
    this._helperAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressInput() {
    return this._helperAddress;
  }
}

export class InterfaceEthernetIpHelperAddressListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpHelperAddressListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpHelperAddressListStructAOutputReference {
    return new InterfaceEthernetIpHelperAddressListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgA {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#authentication InterfaceEthernetIpA#authentication}
  */
  readonly authentication?: number;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#value InterfaceEthernetIpA#value}
  */
  readonly value?: string;
}

export function interfaceEthernetIpOspfOspfGlobalAuthenticationCfgAToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgAOutputReference | InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function interfaceEthernetIpOspfOspfGlobalAuthenticationCfgAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgAOutputReference | InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authentication = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authentication = value.authentication;
      this._value = value.value;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalBfdCfgA {
  /**
  * Bidirectional Forwarding Detection (BFD)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#bfd InterfaceEthernetIpA#bfd}
  */
  readonly bfd?: number;
  /**
  * Disable BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#disable InterfaceEthernetIpA#disable}
  */
  readonly disable?: number;
}

export function interfaceEthernetIpOspfOspfGlobalBfdCfgAToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalBfdCfgAOutputReference | InterfaceEthernetIpOspfOspfGlobalBfdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bfd: cdktf.numberToTerraform(struct!.bfd),
    disable: cdktf.numberToTerraform(struct!.disable),
  }
}


export function interfaceEthernetIpOspfOspfGlobalBfdCfgAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalBfdCfgAOutputReference | InterfaceEthernetIpOspfOspfGlobalBfdCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bfd: {
      value: cdktf.numberToHclTerraform(struct!.bfd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.numberToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalBfdCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalBfdCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bfd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfd = this._bfd;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalBfdCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bfd = undefined;
      this._disable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bfd = value.bfd;
      this._disable = value.disable;
    }
  }

  // bfd - computed: false, optional: true, required: false
  private _bfd?: number; 
  public get bfd() {
    return this.getNumberAttribute('bfd');
  }
  public set bfd(value: number) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgA {
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#database_filter InterfaceEthernetIpA#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#out InterfaceEthernetIpA#out}
  */
  readonly out?: number;
}

export function interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAOutputReference | InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    out: cdktf.numberToTerraform(struct!.out),
  }
}


export function interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAOutputReference | InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._databaseFilter = undefined;
      this._out = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._databaseFilter = value.databaseFilter;
      this._out = value.out;
    }
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5A {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#md5_value InterfaceEthernetIpA#md5_value}
  */
  readonly md5Value?: string;
}

export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AOutputReference | InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
  }
}


export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AOutputReference | InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5A): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5A | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5A | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._md5Value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._md5Value = value.md5Value;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA {
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#message_digest_key InterfaceEthernetIpA#message_digest_key}
  */
  readonly messageDigestKey?: number;
  /**
  * md5 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#md5 InterfaceEthernetIpA#md5}
  */
  readonly md5?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5A;
}

export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgAToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
    md5: interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AToTerraform(struct!.md5),
  }
}


export function interfaceEthernetIpOspfOspfGlobalMessageDigestCfgAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5: {
      value: interfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AToHclTerraform(struct!.md5),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    if (this._md5?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5 = this._md5?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._messageDigestKey = undefined;
      this._md5.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._messageDigestKey = value.messageDigestKey;
      this._md5.internalValue = value.md5;
    }
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }

  // md5 - computed: false, optional: true, required: false
  private _md5 = new InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5AOutputReference(this, "md5");
  public get md5() {
    return this._md5;
  }
  public putMd5(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgMd5A) {
    this._md5.internalValue = value;
  }
  public resetMd5() {
    this._md5.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5Input() {
    return this._md5.internalValue;
  }
}

export class InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgAOutputReference {
    return new InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalNetworkA {
  /**
  * Specify OSPF broadcast multi-access network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#broadcast InterfaceEthernetIpA#broadcast}
  */
  readonly broadcast?: number;
  /**
  * Specify OSPF NBMA network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#non_broadcast InterfaceEthernetIpA#non_broadcast}
  */
  readonly nonBroadcast?: number;
  /**
  * Specify non-broadcast point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#p2mp_nbma InterfaceEthernetIpA#p2mp_nbma}
  */
  readonly p2MpNbma?: number;
  /**
  * Specify OSPF point-to-multipoint network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#point_to_multipoint InterfaceEthernetIpA#point_to_multipoint}
  */
  readonly pointToMultipoint?: number;
  /**
  * Specify OSPF point-to-point network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#point_to_point InterfaceEthernetIpA#point_to_point}
  */
  readonly pointToPoint?: number;
}

export function interfaceEthernetIpOspfOspfGlobalNetworkAToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalNetworkAOutputReference | InterfaceEthernetIpOspfOspfGlobalNetworkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    broadcast: cdktf.numberToTerraform(struct!.broadcast),
    non_broadcast: cdktf.numberToTerraform(struct!.nonBroadcast),
    p2mp_nbma: cdktf.numberToTerraform(struct!.p2MpNbma),
    point_to_multipoint: cdktf.numberToTerraform(struct!.pointToMultipoint),
    point_to_point: cdktf.numberToTerraform(struct!.pointToPoint),
  }
}


export function interfaceEthernetIpOspfOspfGlobalNetworkAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalNetworkAOutputReference | InterfaceEthernetIpOspfOspfGlobalNetworkA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    broadcast: {
      value: cdktf.numberToHclTerraform(struct!.broadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_broadcast: {
      value: cdktf.numberToHclTerraform(struct!.nonBroadcast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    p2mp_nbma: {
      value: cdktf.numberToHclTerraform(struct!.p2MpNbma),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_multipoint: {
      value: cdktf.numberToHclTerraform(struct!.pointToMultipoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    point_to_point: {
      value: cdktf.numberToHclTerraform(struct!.pointToPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalNetworkAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalNetworkA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._broadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.broadcast = this._broadcast;
    }
    if (this._nonBroadcast !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonBroadcast = this._nonBroadcast;
    }
    if (this._p2MpNbma !== undefined) {
      hasAnyValues = true;
      internalValueResult.p2MpNbma = this._p2MpNbma;
    }
    if (this._pointToMultipoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToMultipoint = this._pointToMultipoint;
    }
    if (this._pointToPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToPoint = this._pointToPoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalNetworkA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._broadcast = undefined;
      this._nonBroadcast = undefined;
      this._p2MpNbma = undefined;
      this._pointToMultipoint = undefined;
      this._pointToPoint = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._broadcast = value.broadcast;
      this._nonBroadcast = value.nonBroadcast;
      this._p2MpNbma = value.p2MpNbma;
      this._pointToMultipoint = value.pointToMultipoint;
      this._pointToPoint = value.pointToPoint;
    }
  }

  // broadcast - computed: false, optional: true, required: false
  private _broadcast?: number; 
  public get broadcast() {
    return this.getNumberAttribute('broadcast');
  }
  public set broadcast(value: number) {
    this._broadcast = value;
  }
  public resetBroadcast() {
    this._broadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get broadcastInput() {
    return this._broadcast;
  }

  // non_broadcast - computed: false, optional: true, required: false
  private _nonBroadcast?: number; 
  public get nonBroadcast() {
    return this.getNumberAttribute('non_broadcast');
  }
  public set nonBroadcast(value: number) {
    this._nonBroadcast = value;
  }
  public resetNonBroadcast() {
    this._nonBroadcast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonBroadcastInput() {
    return this._nonBroadcast;
  }

  // p2mp_nbma - computed: false, optional: true, required: false
  private _p2MpNbma?: number; 
  public get p2MpNbma() {
    return this.getNumberAttribute('p2mp_nbma');
  }
  public set p2MpNbma(value: number) {
    this._p2MpNbma = value;
  }
  public resetP2MpNbma() {
    this._p2MpNbma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p2MpNbmaInput() {
    return this._p2MpNbma;
  }

  // point_to_multipoint - computed: false, optional: true, required: false
  private _pointToMultipoint?: number; 
  public get pointToMultipoint() {
    return this.getNumberAttribute('point_to_multipoint');
  }
  public set pointToMultipoint(value: number) {
    this._pointToMultipoint = value;
  }
  public resetPointToMultipoint() {
    this._pointToMultipoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToMultipointInput() {
    return this._pointToMultipoint;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: number; 
  public get pointToPoint() {
    return this.getNumberAttribute('point_to_point');
  }
  public set pointToPoint(value: number) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }
}
export interface InterfaceEthernetIpOspfOspfGlobalA {
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#authentication_key InterfaceEthernetIpA#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#cost InterfaceEthernetIpA#cost}
  */
  readonly cost?: number;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#dead_interval InterfaceEthernetIpA#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * 'all': All functionality;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#disable InterfaceEthernetIpA#disable}
  */
  readonly disable?: string;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#hello_interval InterfaceEthernetIpA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * OSPF interface MTU (MTU size)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#mtu InterfaceEthernetIpA#mtu}
  */
  readonly mtu?: number;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#mtu_ignore InterfaceEthernetIpA#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#priority InterfaceEthernetIpA#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#retransmit_interval InterfaceEthernetIpA#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#transmit_delay InterfaceEthernetIpA#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#uuid InterfaceEthernetIpA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#authentication_cfg InterfaceEthernetIpA#authentication_cfg}
  */
  readonly authenticationCfg?: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgA;
  /**
  * bfd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#bfd_cfg InterfaceEthernetIpA#bfd_cfg}
  */
  readonly bfdCfg?: InterfaceEthernetIpOspfOspfGlobalBfdCfgA;
  /**
  * database_filter_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#database_filter_cfg InterfaceEthernetIpA#database_filter_cfg}
  */
  readonly databaseFilterCfg?: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgA;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#message_digest_cfg InterfaceEthernetIpA#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA[] | cdktf.IResolvable;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#network InterfaceEthernetIpA#network}
  */
  readonly network?: InterfaceEthernetIpOspfOspfGlobalNetworkA;
}

export function interfaceEthernetIpOspfOspfGlobalAToTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalAOutputReference | InterfaceEthernetIpOspfOspfGlobalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    disable: cdktf.stringToTerraform(struct!.disable),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication_cfg: interfaceEthernetIpOspfOspfGlobalAuthenticationCfgAToTerraform(struct!.authenticationCfg),
    bfd_cfg: interfaceEthernetIpOspfOspfGlobalBfdCfgAToTerraform(struct!.bfdCfg),
    database_filter_cfg: interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAToTerraform(struct!.databaseFilterCfg),
    message_digest_cfg: cdktf.listMapper(interfaceEthernetIpOspfOspfGlobalMessageDigestCfgAToTerraform, true)(struct!.messageDigestCfg),
    network: interfaceEthernetIpOspfOspfGlobalNetworkAToTerraform(struct!.network),
  }
}


export function interfaceEthernetIpOspfOspfGlobalAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfGlobalAOutputReference | InterfaceEthernetIpOspfOspfGlobalA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable: {
      value: cdktf.stringToHclTerraform(struct!.disable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication_cfg: {
      value: interfaceEthernetIpOspfOspfGlobalAuthenticationCfgAToHclTerraform(struct!.authenticationCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgAList",
    },
    bfd_cfg: {
      value: interfaceEthernetIpOspfOspfGlobalBfdCfgAToHclTerraform(struct!.bfdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalBfdCfgAList",
    },
    database_filter_cfg: {
      value: interfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAToHclTerraform(struct!.databaseFilterCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAList",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpOspfOspfGlobalMessageDigestCfgAToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgAList",
    },
    network: {
      value: interfaceEthernetIpOspfOspfGlobalNetworkAToHclTerraform(struct!.network),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalNetworkAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfGlobalAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfOspfGlobalA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._disable !== undefined) {
      hasAnyValues = true;
      internalValueResult.disable = this._disable;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authenticationCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationCfg = this._authenticationCfg?.internalValue;
    }
    if (this._bfdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bfdCfg = this._bfdCfg?.internalValue;
    }
    if (this._databaseFilterCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilterCfg = this._databaseFilterCfg?.internalValue;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    if (this._network?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfGlobalA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._deadInterval = undefined;
      this._disable = undefined;
      this._helloInterval = undefined;
      this._mtu = undefined;
      this._mtuIgnore = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._authenticationCfg.internalValue = undefined;
      this._bfdCfg.internalValue = undefined;
      this._databaseFilterCfg.internalValue = undefined;
      this._messageDigestCfg.internalValue = undefined;
      this._network.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._deadInterval = value.deadInterval;
      this._disable = value.disable;
      this._helloInterval = value.helloInterval;
      this._mtu = value.mtu;
      this._mtuIgnore = value.mtuIgnore;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._authenticationCfg.internalValue = value.authenticationCfg;
      this._bfdCfg.internalValue = value.bfdCfg;
      this._databaseFilterCfg.internalValue = value.databaseFilterCfg;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
      this._network.internalValue = value.network;
    }
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: string; 
  public get disable() {
    return this.getStringAttribute('disable');
  }
  public set disable(value: string) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // authentication_cfg - computed: false, optional: true, required: false
  private _authenticationCfg = new InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgAOutputReference(this, "authentication_cfg");
  public get authenticationCfg() {
    return this._authenticationCfg;
  }
  public putAuthenticationCfg(value: InterfaceEthernetIpOspfOspfGlobalAuthenticationCfgA) {
    this._authenticationCfg.internalValue = value;
  }
  public resetAuthenticationCfg() {
    this._authenticationCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationCfgInput() {
    return this._authenticationCfg.internalValue;
  }

  // bfd_cfg - computed: false, optional: true, required: false
  private _bfdCfg = new InterfaceEthernetIpOspfOspfGlobalBfdCfgAOutputReference(this, "bfd_cfg");
  public get bfdCfg() {
    return this._bfdCfg;
  }
  public putBfdCfg(value: InterfaceEthernetIpOspfOspfGlobalBfdCfgA) {
    this._bfdCfg.internalValue = value;
  }
  public resetBfdCfg() {
    this._bfdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdCfgInput() {
    return this._bfdCfg.internalValue;
  }

  // database_filter_cfg - computed: false, optional: true, required: false
  private _databaseFilterCfg = new InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgAOutputReference(this, "database_filter_cfg");
  public get databaseFilterCfg() {
    return this._databaseFilterCfg;
  }
  public putDatabaseFilterCfg(value: InterfaceEthernetIpOspfOspfGlobalDatabaseFilterCfgA) {
    this._databaseFilterCfg.internalValue = value;
  }
  public resetDatabaseFilterCfg() {
    this._databaseFilterCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterCfgInput() {
    return this._databaseFilterCfg.internalValue;
  }

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgAList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceEthernetIpOspfOspfGlobalMessageDigestCfgA[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }

  // network - computed: false, optional: true, required: false
  private _network = new InterfaceEthernetIpOspfOspfGlobalNetworkAOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: InterfaceEthernetIpOspfOspfGlobalNetworkA) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }
}
export interface InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA {
  /**
  * The OSPF password (1-16)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#md5_value InterfaceEthernetIpA#md5_value}
  */
  readonly md5Value?: string;
  /**
  * Message digest authentication password (key) (Key id)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#message_digest_key InterfaceEthernetIpA#message_digest_key}
  */
  readonly messageDigestKey?: number;
}

export function interfaceEthernetIpOspfOspfIpListMessageDigestCfgAToTerraform(struct?: InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_value: cdktf.stringToTerraform(struct!.md5Value),
    message_digest_key: cdktf.numberToTerraform(struct!.messageDigestKey),
  }
}


export function interfaceEthernetIpOspfOspfIpListMessageDigestCfgAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_value: {
      value: cdktf.stringToHclTerraform(struct!.md5Value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_digest_key: {
      value: cdktf.numberToHclTerraform(struct!.messageDigestKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfIpListMessageDigestCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5Value !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5Value = this._md5Value;
    }
    if (this._messageDigestKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestKey = this._messageDigestKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5Value = undefined;
      this._messageDigestKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5Value = value.md5Value;
      this._messageDigestKey = value.messageDigestKey;
    }
  }

  // md5_value - computed: false, optional: true, required: false
  private _md5Value?: string; 
  public get md5Value() {
    return this.getStringAttribute('md5_value');
  }
  public set md5Value(value: string) {
    this._md5Value = value;
  }
  public resetMd5Value() {
    this._md5Value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5ValueInput() {
    return this._md5Value;
  }

  // message_digest_key - computed: false, optional: true, required: false
  private _messageDigestKey?: number; 
  public get messageDigestKey() {
    return this.getNumberAttribute('message_digest_key');
  }
  public set messageDigestKey(value: number) {
    this._messageDigestKey = value;
  }
  public resetMessageDigestKey() {
    this._messageDigestKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestKeyInput() {
    return this._messageDigestKey;
  }
}

export class InterfaceEthernetIpOspfOspfIpListMessageDigestCfgAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpOspfOspfIpListMessageDigestCfgAOutputReference {
    return new InterfaceEthernetIpOspfOspfIpListMessageDigestCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspfOspfIpListStructA {
  /**
  * Enable authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#authentication InterfaceEthernetIpA#authentication}
  */
  readonly authentication?: number;
  /**
  * Authentication password (key) (The OSPF password (key))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#authentication_key InterfaceEthernetIpA#authentication_key}
  */
  readonly authenticationKey?: string;
  /**
  * Interface cost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#cost InterfaceEthernetIpA#cost}
  */
  readonly cost?: number;
  /**
  * 'all': Filter all LSA;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#database_filter InterfaceEthernetIpA#database_filter}
  */
  readonly databaseFilter?: string;
  /**
  * Interval after which a neighbor is declared dead (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#dead_interval InterfaceEthernetIpA#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * Time between HELLO packets (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#hello_interval InterfaceEthernetIpA#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Address of interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ip_addr InterfaceEthernetIpA#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Ignores the MTU in DBD packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#mtu_ignore InterfaceEthernetIpA#mtu_ignore}
  */
  readonly mtuIgnore?: number;
  /**
  * Outgoing LSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#out InterfaceEthernetIpA#out}
  */
  readonly out?: number;
  /**
  * Router priority
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#priority InterfaceEthernetIpA#priority}
  */
  readonly priority?: number;
  /**
  * Time between retransmitting lost link state advertisements (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#retransmit_interval InterfaceEthernetIpA#retransmit_interval}
  */
  readonly retransmitInterval?: number;
  /**
  * Link state transmit delay (Seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#transmit_delay InterfaceEthernetIpA#transmit_delay}
  */
  readonly transmitDelay?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#uuid InterfaceEthernetIpA#uuid}
  */
  readonly uuid?: string;
  /**
  * 'message-digest': Use message-digest authentication; 'null': Use no authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#value InterfaceEthernetIpA#value}
  */
  readonly value?: string;
  /**
  * message_digest_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#message_digest_cfg InterfaceEthernetIpA#message_digest_cfg}
  */
  readonly messageDigestCfg?: InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA[] | cdktf.IResolvable;
}

export function interfaceEthernetIpOspfOspfIpListStructAToTerraform(struct?: InterfaceEthernetIpOspfOspfIpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authentication: cdktf.numberToTerraform(struct!.authentication),
    authentication_key: cdktf.stringToTerraform(struct!.authenticationKey),
    cost: cdktf.numberToTerraform(struct!.cost),
    database_filter: cdktf.stringToTerraform(struct!.databaseFilter),
    dead_interval: cdktf.numberToTerraform(struct!.deadInterval),
    hello_interval: cdktf.numberToTerraform(struct!.helloInterval),
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    mtu_ignore: cdktf.numberToTerraform(struct!.mtuIgnore),
    out: cdktf.numberToTerraform(struct!.out),
    priority: cdktf.numberToTerraform(struct!.priority),
    retransmit_interval: cdktf.numberToTerraform(struct!.retransmitInterval),
    transmit_delay: cdktf.numberToTerraform(struct!.transmitDelay),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.stringToTerraform(struct!.value),
    message_digest_cfg: cdktf.listMapper(interfaceEthernetIpOspfOspfIpListMessageDigestCfgAToTerraform, true)(struct!.messageDigestCfg),
  }
}


export function interfaceEthernetIpOspfOspfIpListStructAToHclTerraform(struct?: InterfaceEthernetIpOspfOspfIpListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authentication: {
      value: cdktf.numberToHclTerraform(struct!.authentication),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.authenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cost: {
      value: cdktf.numberToHclTerraform(struct!.cost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_filter: {
      value: cdktf.stringToHclTerraform(struct!.databaseFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hello_interval: {
      value: cdktf.numberToHclTerraform(struct!.helloInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu_ignore: {
      value: cdktf.numberToHclTerraform(struct!.mtuIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out: {
      value: cdktf.numberToHclTerraform(struct!.out),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.retransmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_delay: {
      value: cdktf.numberToHclTerraform(struct!.transmitDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message_digest_cfg: {
      value: cdktf.listMapperHcl(interfaceEthernetIpOspfOspfIpListMessageDigestCfgAToHclTerraform, true)(struct!.messageDigestCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfIpListMessageDigestCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfOspfIpListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InterfaceEthernetIpOspfOspfIpListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication;
    }
    if (this._authenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticationKey = this._authenticationKey;
    }
    if (this._cost !== undefined) {
      hasAnyValues = true;
      internalValueResult.cost = this._cost;
    }
    if (this._databaseFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseFilter = this._databaseFilter;
    }
    if (this._deadInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadInterval = this._deadInterval;
    }
    if (this._helloInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloInterval = this._helloInterval;
    }
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._mtuIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuIgnore = this._mtuIgnore;
    }
    if (this._out !== undefined) {
      hasAnyValues = true;
      internalValueResult.out = this._out;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._retransmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitInterval = this._retransmitInterval;
    }
    if (this._transmitDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitDelay = this._transmitDelay;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._messageDigestCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.messageDigestCfg = this._messageDigestCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfOspfIpListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authentication = undefined;
      this._authenticationKey = undefined;
      this._cost = undefined;
      this._databaseFilter = undefined;
      this._deadInterval = undefined;
      this._helloInterval = undefined;
      this._ipAddr = undefined;
      this._mtuIgnore = undefined;
      this._out = undefined;
      this._priority = undefined;
      this._retransmitInterval = undefined;
      this._transmitDelay = undefined;
      this._uuid = undefined;
      this._value = undefined;
      this._messageDigestCfg.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authentication = value.authentication;
      this._authenticationKey = value.authenticationKey;
      this._cost = value.cost;
      this._databaseFilter = value.databaseFilter;
      this._deadInterval = value.deadInterval;
      this._helloInterval = value.helloInterval;
      this._ipAddr = value.ipAddr;
      this._mtuIgnore = value.mtuIgnore;
      this._out = value.out;
      this._priority = value.priority;
      this._retransmitInterval = value.retransmitInterval;
      this._transmitDelay = value.transmitDelay;
      this._uuid = value.uuid;
      this._value = value.value;
      this._messageDigestCfg.internalValue = value.messageDigestCfg;
    }
  }

  // authentication - computed: false, optional: true, required: false
  private _authentication?: number; 
  public get authentication() {
    return this.getNumberAttribute('authentication');
  }
  public set authentication(value: number) {
    this._authentication = value;
  }
  public resetAuthentication() {
    this._authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication;
  }

  // authentication_key - computed: false, optional: true, required: false
  private _authenticationKey?: string; 
  public get authenticationKey() {
    return this.getStringAttribute('authentication_key');
  }
  public set authenticationKey(value: string) {
    this._authenticationKey = value;
  }
  public resetAuthenticationKey() {
    this._authenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationKeyInput() {
    return this._authenticationKey;
  }

  // cost - computed: false, optional: true, required: false
  private _cost?: number; 
  public get cost() {
    return this.getNumberAttribute('cost');
  }
  public set cost(value: number) {
    this._cost = value;
  }
  public resetCost() {
    this._cost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get costInput() {
    return this._cost;
  }

  // database_filter - computed: false, optional: true, required: false
  private _databaseFilter?: string; 
  public get databaseFilter() {
    return this.getStringAttribute('database_filter');
  }
  public set databaseFilter(value: string) {
    this._databaseFilter = value;
  }
  public resetDatabaseFilter() {
    this._databaseFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseFilterInput() {
    return this._databaseFilter;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // mtu_ignore - computed: false, optional: true, required: false
  private _mtuIgnore?: number; 
  public get mtuIgnore() {
    return this.getNumberAttribute('mtu_ignore');
  }
  public set mtuIgnore(value: number) {
    this._mtuIgnore = value;
  }
  public resetMtuIgnore() {
    this._mtuIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuIgnoreInput() {
    return this._mtuIgnore;
  }

  // out - computed: false, optional: true, required: false
  private _out?: number; 
  public get out() {
    return this.getNumberAttribute('out');
  }
  public set out(value: number) {
    this._out = value;
  }
  public resetOut() {
    this._out = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outInput() {
    return this._out;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // retransmit_interval - computed: false, optional: true, required: false
  private _retransmitInterval?: number; 
  public get retransmitInterval() {
    return this.getNumberAttribute('retransmit_interval');
  }
  public set retransmitInterval(value: number) {
    this._retransmitInterval = value;
  }
  public resetRetransmitInterval() {
    this._retransmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitIntervalInput() {
    return this._retransmitInterval;
  }

  // transmit_delay - computed: false, optional: true, required: false
  private _transmitDelay?: number; 
  public get transmitDelay() {
    return this.getNumberAttribute('transmit_delay');
  }
  public set transmitDelay(value: number) {
    this._transmitDelay = value;
  }
  public resetTransmitDelay() {
    this._transmitDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitDelayInput() {
    return this._transmitDelay;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // message_digest_cfg - computed: false, optional: true, required: false
  private _messageDigestCfg = new InterfaceEthernetIpOspfOspfIpListMessageDigestCfgAList(this, "message_digest_cfg", false);
  public get messageDigestCfg() {
    return this._messageDigestCfg;
  }
  public putMessageDigestCfg(value: InterfaceEthernetIpOspfOspfIpListMessageDigestCfgA[] | cdktf.IResolvable) {
    this._messageDigestCfg.internalValue = value;
  }
  public resetMessageDigestCfg() {
    this._messageDigestCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageDigestCfgInput() {
    return this._messageDigestCfg.internalValue;
  }
}

export class InterfaceEthernetIpOspfOspfIpListStructAList extends cdktf.ComplexList {
  public internalValue? : InterfaceEthernetIpOspfOspfIpListStructA[] | cdktf.IResolvable

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
  public get(index: number): InterfaceEthernetIpOspfOspfIpListStructAOutputReference {
    return new InterfaceEthernetIpOspfOspfIpListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InterfaceEthernetIpOspfA {
  /**
  * ospf_global block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ospf_global InterfaceEthernetIpA#ospf_global}
  */
  readonly ospfGlobal?: InterfaceEthernetIpOspfOspfGlobalA;
  /**
  * ospf_ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#ospf_ip_list InterfaceEthernetIpA#ospf_ip_list}
  */
  readonly ospfIpList?: InterfaceEthernetIpOspfOspfIpListStructA[] | cdktf.IResolvable;
}

export function interfaceEthernetIpOspfAToTerraform(struct?: InterfaceEthernetIpOspfAOutputReference | InterfaceEthernetIpOspfA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ospf_global: interfaceEthernetIpOspfOspfGlobalAToTerraform(struct!.ospfGlobal),
    ospf_ip_list: cdktf.listMapper(interfaceEthernetIpOspfOspfIpListStructAToTerraform, true)(struct!.ospfIpList),
  }
}


export function interfaceEthernetIpOspfAToHclTerraform(struct?: InterfaceEthernetIpOspfAOutputReference | InterfaceEthernetIpOspfA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ospf_global: {
      value: interfaceEthernetIpOspfOspfGlobalAToHclTerraform(struct!.ospfGlobal),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfGlobalAList",
    },
    ospf_ip_list: {
      value: cdktf.listMapperHcl(interfaceEthernetIpOspfOspfIpListStructAToHclTerraform, true)(struct!.ospfIpList),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpOspfOspfIpListStructAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpOspfAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpOspfA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ospfGlobal?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfGlobal = this._ospfGlobal?.internalValue;
    }
    if (this._ospfIpList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ospfIpList = this._ospfIpList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpOspfA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ospfGlobal.internalValue = undefined;
      this._ospfIpList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ospfGlobal.internalValue = value.ospfGlobal;
      this._ospfIpList.internalValue = value.ospfIpList;
    }
  }

  // ospf_global - computed: false, optional: true, required: false
  private _ospfGlobal = new InterfaceEthernetIpOspfOspfGlobalAOutputReference(this, "ospf_global");
  public get ospfGlobal() {
    return this._ospfGlobal;
  }
  public putOspfGlobal(value: InterfaceEthernetIpOspfOspfGlobalA) {
    this._ospfGlobal.internalValue = value;
  }
  public resetOspfGlobal() {
    this._ospfGlobal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfGlobalInput() {
    return this._ospfGlobal.internalValue;
  }

  // ospf_ip_list - computed: false, optional: true, required: false
  private _ospfIpList = new InterfaceEthernetIpOspfOspfIpListStructAList(this, "ospf_ip_list", false);
  public get ospfIpList() {
    return this._ospfIpList;
  }
  public putOspfIpList(value: InterfaceEthernetIpOspfOspfIpListStructA[] | cdktf.IResolvable) {
    this._ospfIpList.internalValue = value;
  }
  public resetOspfIpList() {
    this._ospfIpList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfIpListInput() {
    return this._ospfIpList.internalValue;
  }
}
export interface InterfaceEthernetIpRipAuthenticationKeyChainA {
  /**
  * Authentication key-chain (Name of key-chain)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#key_chain InterfaceEthernetIpA#key_chain}
  */
  readonly keyChain?: string;
}

export function interfaceEthernetIpRipAuthenticationKeyChainAToTerraform(struct?: InterfaceEthernetIpRipAuthenticationKeyChainAOutputReference | InterfaceEthernetIpRipAuthenticationKeyChainA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: cdktf.stringToTerraform(struct!.keyChain),
  }
}


export function interfaceEthernetIpRipAuthenticationKeyChainAToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationKeyChainAOutputReference | InterfaceEthernetIpRipAuthenticationKeyChainA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: cdktf.stringToHclTerraform(struct!.keyChain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationKeyChainAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthenticationKeyChainA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthenticationKeyChainA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain = value.keyChain;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain?: string; 
  public get keyChain() {
    return this.getStringAttribute('key_chain');
  }
  public set keyChain(value: string) {
    this._keyChain = value;
  }
  public resetKeyChain() {
    this._keyChain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain;
  }
}
export interface InterfaceEthernetIpRipAuthenticationModeA {
  /**
  * 'md5': Keyed message digest; 'text': Clear text authentication;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#mode InterfaceEthernetIpA#mode}
  */
  readonly mode?: string;
}

export function interfaceEthernetIpRipAuthenticationModeAToTerraform(struct?: InterfaceEthernetIpRipAuthenticationModeAOutputReference | InterfaceEthernetIpRipAuthenticationModeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
  }
}


export function interfaceEthernetIpRipAuthenticationModeAToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationModeAOutputReference | InterfaceEthernetIpRipAuthenticationModeA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationModeAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthenticationModeA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthenticationModeA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }
}
export interface InterfaceEthernetIpRipAuthenticationStrA {
  /**
  * The RIP authentication string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#string InterfaceEthernetIpA#string}
  */
  readonly string?: string;
}

export function interfaceEthernetIpRipAuthenticationStrAToTerraform(struct?: InterfaceEthernetIpRipAuthenticationStrAOutputReference | InterfaceEthernetIpRipAuthenticationStrA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function interfaceEthernetIpRipAuthenticationStrAToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationStrAOutputReference | InterfaceEthernetIpRipAuthenticationStrA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationStrAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthenticationStrA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthenticationStrA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._string = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._string = value.string;
    }
  }

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}
export interface InterfaceEthernetIpRipAuthenticationA {
  /**
  * key_chain block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#key_chain InterfaceEthernetIpA#key_chain}
  */
  readonly keyChain?: InterfaceEthernetIpRipAuthenticationKeyChainA;
  /**
  * mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#mode InterfaceEthernetIpA#mode}
  */
  readonly mode?: InterfaceEthernetIpRipAuthenticationModeA;
  /**
  * str block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#str InterfaceEthernetIpA#str}
  */
  readonly str?: InterfaceEthernetIpRipAuthenticationStrA;
}

export function interfaceEthernetIpRipAuthenticationAToTerraform(struct?: InterfaceEthernetIpRipAuthenticationAOutputReference | InterfaceEthernetIpRipAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_chain: interfaceEthernetIpRipAuthenticationKeyChainAToTerraform(struct!.keyChain),
    mode: interfaceEthernetIpRipAuthenticationModeAToTerraform(struct!.mode),
    str: interfaceEthernetIpRipAuthenticationStrAToTerraform(struct!.str),
  }
}


export function interfaceEthernetIpRipAuthenticationAToHclTerraform(struct?: InterfaceEthernetIpRipAuthenticationAOutputReference | InterfaceEthernetIpRipAuthenticationA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_chain: {
      value: interfaceEthernetIpRipAuthenticationKeyChainAToHclTerraform(struct!.keyChain),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationKeyChainAList",
    },
    mode: {
      value: interfaceEthernetIpRipAuthenticationModeAToHclTerraform(struct!.mode),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationModeAList",
    },
    str: {
      value: interfaceEthernetIpRipAuthenticationStrAToHclTerraform(struct!.str),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationStrAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAuthenticationAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipAuthenticationA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyChain?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyChain = this._keyChain?.internalValue;
    }
    if (this._mode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode?.internalValue;
    }
    if (this._str?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.str = this._str?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipAuthenticationA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keyChain.internalValue = undefined;
      this._mode.internalValue = undefined;
      this._str.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keyChain.internalValue = value.keyChain;
      this._mode.internalValue = value.mode;
      this._str.internalValue = value.str;
    }
  }

  // key_chain - computed: false, optional: true, required: false
  private _keyChain = new InterfaceEthernetIpRipAuthenticationKeyChainAOutputReference(this, "key_chain");
  public get keyChain() {
    return this._keyChain;
  }
  public putKeyChain(value: InterfaceEthernetIpRipAuthenticationKeyChainA) {
    this._keyChain.internalValue = value;
  }
  public resetKeyChain() {
    this._keyChain.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyChainInput() {
    return this._keyChain.internalValue;
  }

  // mode - computed: false, optional: true, required: false
  private _mode = new InterfaceEthernetIpRipAuthenticationModeAOutputReference(this, "mode");
  public get mode() {
    return this._mode;
  }
  public putMode(value: InterfaceEthernetIpRipAuthenticationModeA) {
    this._mode.internalValue = value;
  }
  public resetMode() {
    this._mode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode.internalValue;
  }

  // str - computed: false, optional: true, required: false
  private _str = new InterfaceEthernetIpRipAuthenticationStrAOutputReference(this, "str");
  public get str() {
    return this._str;
  }
  public putStr(value: InterfaceEthernetIpRipAuthenticationStrA) {
    this._str.internalValue = value;
  }
  public resetStr() {
    this._str.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInput() {
    return this._str.internalValue;
  }
}
export interface InterfaceEthernetIpRipReceiveCfgA {
  /**
  * Advertisement reception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#receive InterfaceEthernetIpA#receive}
  */
  readonly receive?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#version InterfaceEthernetIpA#version}
  */
  readonly version?: string;
}

export function interfaceEthernetIpRipReceiveCfgAToTerraform(struct?: InterfaceEthernetIpRipReceiveCfgAOutputReference | InterfaceEthernetIpRipReceiveCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive: cdktf.numberToTerraform(struct!.receive),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceEthernetIpRipReceiveCfgAToHclTerraform(struct?: InterfaceEthernetIpRipReceiveCfgAOutputReference | InterfaceEthernetIpRipReceiveCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive: {
      value: cdktf.numberToHclTerraform(struct!.receive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipReceiveCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipReceiveCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receive !== undefined) {
      hasAnyValues = true;
      internalValueResult.receive = this._receive;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipReceiveCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receive = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receive = value.receive;
      this._version = value.version;
    }
  }

  // receive - computed: false, optional: true, required: false
  private _receive?: number; 
  public get receive() {
    return this.getNumberAttribute('receive');
  }
  public set receive(value: number) {
    this._receive = value;
  }
  public resetReceive() {
    this._receive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveInput() {
    return this._receive;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceEthernetIpRipSendCfgA {
  /**
  * Advertisement transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#send InterfaceEthernetIpA#send}
  */
  readonly send?: number;
  /**
  * '1': RIP version 1; '2': RIP version 2; '1-compatible': RIPv1-compatible; '1-2': RIP version 1 & 2;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#version InterfaceEthernetIpA#version}
  */
  readonly version?: string;
}

export function interfaceEthernetIpRipSendCfgAToTerraform(struct?: InterfaceEthernetIpRipSendCfgAOutputReference | InterfaceEthernetIpRipSendCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    send: cdktf.numberToTerraform(struct!.send),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function interfaceEthernetIpRipSendCfgAToHclTerraform(struct?: InterfaceEthernetIpRipSendCfgAOutputReference | InterfaceEthernetIpRipSendCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    send: {
      value: cdktf.numberToHclTerraform(struct!.send),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipSendCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipSendCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._send !== undefined) {
      hasAnyValues = true;
      internalValueResult.send = this._send;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipSendCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._send = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._send = value.send;
      this._version = value.version;
    }
  }

  // send - computed: false, optional: true, required: false
  private _send?: number; 
  public get send() {
    return this.getNumberAttribute('send');
  }
  public set send(value: number) {
    this._send = value;
  }
  public resetSend() {
    this._send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendInput() {
    return this._send;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface InterfaceEthernetIpRipSplitHorizonCfgA {
  /**
  * 'poisoned': Perform split horizon with poisoned reverse; 'disable': Disable split horizon; 'enable': Perform split horizon without poisoned reverse;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#state InterfaceEthernetIpA#state}
  */
  readonly state?: string;
}

export function interfaceEthernetIpRipSplitHorizonCfgAToTerraform(struct?: InterfaceEthernetIpRipSplitHorizonCfgAOutputReference | InterfaceEthernetIpRipSplitHorizonCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function interfaceEthernetIpRipSplitHorizonCfgAToHclTerraform(struct?: InterfaceEthernetIpRipSplitHorizonCfgAOutputReference | InterfaceEthernetIpRipSplitHorizonCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipSplitHorizonCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipSplitHorizonCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipSplitHorizonCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._state = value.state;
    }
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
}
export interface InterfaceEthernetIpRipA {
  /**
  * Enable receiving packet through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#receive_packet InterfaceEthernetIpA#receive_packet}
  */
  readonly receivePacket?: number;
  /**
  * Enable sending packets through the specified interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#send_packet InterfaceEthernetIpA#send_packet}
  */
  readonly sendPacket?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#uuid InterfaceEthernetIpA#uuid}
  */
  readonly uuid?: string;
  /**
  * authentication block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#authentication InterfaceEthernetIpA#authentication}
  */
  readonly authentication?: InterfaceEthernetIpRipAuthenticationA;
  /**
  * receive_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#receive_cfg InterfaceEthernetIpA#receive_cfg}
  */
  readonly receiveCfg?: InterfaceEthernetIpRipReceiveCfgA;
  /**
  * send_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#send_cfg InterfaceEthernetIpA#send_cfg}
  */
  readonly sendCfg?: InterfaceEthernetIpRipSendCfgA;
  /**
  * split_horizon_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#split_horizon_cfg InterfaceEthernetIpA#split_horizon_cfg}
  */
  readonly splitHorizonCfg?: InterfaceEthernetIpRipSplitHorizonCfgA;
}

export function interfaceEthernetIpRipAToTerraform(struct?: InterfaceEthernetIpRipAOutputReference | InterfaceEthernetIpRipA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    receive_packet: cdktf.numberToTerraform(struct!.receivePacket),
    send_packet: cdktf.numberToTerraform(struct!.sendPacket),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    authentication: interfaceEthernetIpRipAuthenticationAToTerraform(struct!.authentication),
    receive_cfg: interfaceEthernetIpRipReceiveCfgAToTerraform(struct!.receiveCfg),
    send_cfg: interfaceEthernetIpRipSendCfgAToTerraform(struct!.sendCfg),
    split_horizon_cfg: interfaceEthernetIpRipSplitHorizonCfgAToTerraform(struct!.splitHorizonCfg),
  }
}


export function interfaceEthernetIpRipAToHclTerraform(struct?: InterfaceEthernetIpRipAOutputReference | InterfaceEthernetIpRipA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    receive_packet: {
      value: cdktf.numberToHclTerraform(struct!.receivePacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_packet: {
      value: cdktf.numberToHclTerraform(struct!.sendPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authentication: {
      value: interfaceEthernetIpRipAuthenticationAToHclTerraform(struct!.authentication),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipAuthenticationAList",
    },
    receive_cfg: {
      value: interfaceEthernetIpRipReceiveCfgAToHclTerraform(struct!.receiveCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipReceiveCfgAList",
    },
    send_cfg: {
      value: interfaceEthernetIpRipSendCfgAToHclTerraform(struct!.sendCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipSendCfgAList",
    },
    split_horizon_cfg: {
      value: interfaceEthernetIpRipSplitHorizonCfgAToHclTerraform(struct!.splitHorizonCfg),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRipSplitHorizonCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRipAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRipA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._receivePacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.receivePacket = this._receivePacket;
    }
    if (this._sendPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPacket = this._sendPacket;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._authentication?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authentication = this._authentication?.internalValue;
    }
    if (this._receiveCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveCfg = this._receiveCfg?.internalValue;
    }
    if (this._sendCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendCfg = this._sendCfg?.internalValue;
    }
    if (this._splitHorizonCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitHorizonCfg = this._splitHorizonCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRipA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._receivePacket = undefined;
      this._sendPacket = undefined;
      this._uuid = undefined;
      this._authentication.internalValue = undefined;
      this._receiveCfg.internalValue = undefined;
      this._sendCfg.internalValue = undefined;
      this._splitHorizonCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._receivePacket = value.receivePacket;
      this._sendPacket = value.sendPacket;
      this._uuid = value.uuid;
      this._authentication.internalValue = value.authentication;
      this._receiveCfg.internalValue = value.receiveCfg;
      this._sendCfg.internalValue = value.sendCfg;
      this._splitHorizonCfg.internalValue = value.splitHorizonCfg;
    }
  }

  // receive_packet - computed: false, optional: true, required: false
  private _receivePacket?: number; 
  public get receivePacket() {
    return this.getNumberAttribute('receive_packet');
  }
  public set receivePacket(value: number) {
    this._receivePacket = value;
  }
  public resetReceivePacket() {
    this._receivePacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receivePacketInput() {
    return this._receivePacket;
  }

  // send_packet - computed: false, optional: true, required: false
  private _sendPacket?: number; 
  public get sendPacket() {
    return this.getNumberAttribute('send_packet');
  }
  public set sendPacket(value: number) {
    this._sendPacket = value;
  }
  public resetSendPacket() {
    this._sendPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPacketInput() {
    return this._sendPacket;
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

  // authentication - computed: false, optional: true, required: false
  private _authentication = new InterfaceEthernetIpRipAuthenticationAOutputReference(this, "authentication");
  public get authentication() {
    return this._authentication;
  }
  public putAuthentication(value: InterfaceEthernetIpRipAuthenticationA) {
    this._authentication.internalValue = value;
  }
  public resetAuthentication() {
    this._authentication.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationInput() {
    return this._authentication.internalValue;
  }

  // receive_cfg - computed: false, optional: true, required: false
  private _receiveCfg = new InterfaceEthernetIpRipReceiveCfgAOutputReference(this, "receive_cfg");
  public get receiveCfg() {
    return this._receiveCfg;
  }
  public putReceiveCfg(value: InterfaceEthernetIpRipReceiveCfgA) {
    this._receiveCfg.internalValue = value;
  }
  public resetReceiveCfg() {
    this._receiveCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveCfgInput() {
    return this._receiveCfg.internalValue;
  }

  // send_cfg - computed: false, optional: true, required: false
  private _sendCfg = new InterfaceEthernetIpRipSendCfgAOutputReference(this, "send_cfg");
  public get sendCfg() {
    return this._sendCfg;
  }
  public putSendCfg(value: InterfaceEthernetIpRipSendCfgA) {
    this._sendCfg.internalValue = value;
  }
  public resetSendCfg() {
    this._sendCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendCfgInput() {
    return this._sendCfg.internalValue;
  }

  // split_horizon_cfg - computed: false, optional: true, required: false
  private _splitHorizonCfg = new InterfaceEthernetIpRipSplitHorizonCfgAOutputReference(this, "split_horizon_cfg");
  public get splitHorizonCfg() {
    return this._splitHorizonCfg;
  }
  public putSplitHorizonCfg(value: InterfaceEthernetIpRipSplitHorizonCfgA) {
    this._splitHorizonCfg.internalValue = value;
  }
  public resetSplitHorizonCfg() {
    this._splitHorizonCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitHorizonCfgInput() {
    return this._splitHorizonCfg.internalValue;
  }
}
export interface InterfaceEthernetIpRouterIsisA {
  /**
  * ISO routing area tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#tag InterfaceEthernetIpA#tag}
  */
  readonly tag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#uuid InterfaceEthernetIpA#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetIpRouterIsisAToTerraform(struct?: InterfaceEthernetIpRouterIsisAOutputReference | InterfaceEthernetIpRouterIsisA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag: cdktf.stringToTerraform(struct!.tag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetIpRouterIsisAToHclTerraform(struct?: InterfaceEthernetIpRouterIsisAOutputReference | InterfaceEthernetIpRouterIsisA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRouterIsisAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRouterIsisA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRouterIsisA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tag = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tag = value.tag;
      this._uuid = value.uuid;
    }
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
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
}
export interface InterfaceEthernetIpRouterA {
  /**
  * isis block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#isis InterfaceEthernetIpA#isis}
  */
  readonly isis?: InterfaceEthernetIpRouterIsisA;
}

export function interfaceEthernetIpRouterAToTerraform(struct?: InterfaceEthernetIpRouterAOutputReference | InterfaceEthernetIpRouterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    isis: interfaceEthernetIpRouterIsisAToTerraform(struct!.isis),
  }
}


export function interfaceEthernetIpRouterAToHclTerraform(struct?: InterfaceEthernetIpRouterAOutputReference | InterfaceEthernetIpRouterA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    isis: {
      value: interfaceEthernetIpRouterIsisAToHclTerraform(struct!.isis),
      isBlock: true,
      type: "list",
      storageClassType: "InterfaceEthernetIpRouterIsisAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpRouterAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpRouterA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isis?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.isis = this._isis?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpRouterA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isis.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isis.internalValue = value.isis;
    }
  }

  // isis - computed: false, optional: true, required: false
  private _isis = new InterfaceEthernetIpRouterIsisAOutputReference(this, "isis");
  public get isis() {
    return this._isis;
  }
  public putIsis(value: InterfaceEthernetIpRouterIsisA) {
    this._isis.internalValue = value;
  }
  public resetIsis() {
    this._isis.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isisInput() {
    return this._isis.internalValue;
  }
}
export interface InterfaceEthernetIpStatefulFirewallA {
  /**
  * Access-list for traffic from the outside
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#access_list InterfaceEthernetIpA#access_list}
  */
  readonly accessList?: number;
  /**
  * ACL id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#acl_id InterfaceEthernetIpA#acl_id}
  */
  readonly aclId?: number;
  /**
  * Class List (Class List Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#class_list InterfaceEthernetIpA#class_list}
  */
  readonly classList?: string;
  /**
  * Inside (private) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#inside InterfaceEthernetIpA#inside}
  */
  readonly inside?: number;
  /**
  * Outside (public) interface for stateful firewall
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#outside InterfaceEthernetIpA#outside}
  */
  readonly outside?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#uuid InterfaceEthernetIpA#uuid}
  */
  readonly uuid?: string;
}

export function interfaceEthernetIpStatefulFirewallAToTerraform(struct?: InterfaceEthernetIpStatefulFirewallAOutputReference | InterfaceEthernetIpStatefulFirewallA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.numberToTerraform(struct!.accessList),
    acl_id: cdktf.numberToTerraform(struct!.aclId),
    class_list: cdktf.stringToTerraform(struct!.classList),
    inside: cdktf.numberToTerraform(struct!.inside),
    outside: cdktf.numberToTerraform(struct!.outside),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function interfaceEthernetIpStatefulFirewallAToHclTerraform(struct?: InterfaceEthernetIpStatefulFirewallAOutputReference | InterfaceEthernetIpStatefulFirewallA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.numberToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acl_id: {
      value: cdktf.numberToHclTerraform(struct!.aclId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    inside: {
      value: cdktf.numberToHclTerraform(struct!.inside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outside: {
      value: cdktf.numberToHclTerraform(struct!.outside),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InterfaceEthernetIpStatefulFirewallAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InterfaceEthernetIpStatefulFirewallA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._aclId !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclId = this._aclId;
    }
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._inside !== undefined) {
      hasAnyValues = true;
      internalValueResult.inside = this._inside;
    }
    if (this._outside !== undefined) {
      hasAnyValues = true;
      internalValueResult.outside = this._outside;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InterfaceEthernetIpStatefulFirewallA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessList = undefined;
      this._aclId = undefined;
      this._classList = undefined;
      this._inside = undefined;
      this._outside = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessList = value.accessList;
      this._aclId = value.aclId;
      this._classList = value.classList;
      this._inside = value.inside;
      this._outside = value.outside;
      this._uuid = value.uuid;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: number; 
  public get accessList() {
    return this.getNumberAttribute('access_list');
  }
  public set accessList(value: number) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // acl_id - computed: false, optional: true, required: false
  private _aclId?: number; 
  public get aclId() {
    return this.getNumberAttribute('acl_id');
  }
  public set aclId(value: number) {
    this._aclId = value;
  }
  public resetAclId() {
    this._aclId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclIdInput() {
    return this._aclId;
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip thunder_interface_ethernet_ip}
*/
export class InterfaceEthernetIpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_interface_ethernet_ip";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceEthernetIpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceEthernetIpA to import
  * @param importFromId The id of the existing InterfaceEthernetIpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceEthernetIpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_interface_ethernet_ip", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/interface_ethernet_ip thunder_interface_ethernet_ip} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceEthernetIpAConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceEthernetIpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_interface_ethernet_ip',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowPromiscuousVip = config.allowPromiscuousVip;
    this._cacheSpoofingPort = config.cacheSpoofingPort;
    this._client = config.client;
    this._dhcp = config.dhcp;
    this._generateMembershipQuery = config.generateMembershipQuery;
    this._id = config.id;
    this._ifnum = config.ifnum;
    this._inside = config.inside;
    this._maxRespTime = config.maxRespTime;
    this._outside = config.outside;
    this._queryInterval = config.queryInterval;
    this._server = config.server;
    this._slbPartitionRedirect = config.slbPartitionRedirect;
    this._synCookie = config.synCookie;
    this._ttlIgnore = config.ttlIgnore;
    this._unnumbered = config.unnumbered;
    this._uuid = config.uuid;
    this._addressList.internalValue = config.addressList;
    this._helperAddressList.internalValue = config.helperAddressList;
    this._ospf.internalValue = config.ospf;
    this._rip.internalValue = config.rip;
    this._router.internalValue = config.router;
    this._statefulFirewall.internalValue = config.statefulFirewall;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_promiscuous_vip - computed: false, optional: true, required: false
  private _allowPromiscuousVip?: number; 
  public get allowPromiscuousVip() {
    return this.getNumberAttribute('allow_promiscuous_vip');
  }
  public set allowPromiscuousVip(value: number) {
    this._allowPromiscuousVip = value;
  }
  public resetAllowPromiscuousVip() {
    this._allowPromiscuousVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPromiscuousVipInput() {
    return this._allowPromiscuousVip;
  }

  // cache_spoofing_port - computed: false, optional: true, required: false
  private _cacheSpoofingPort?: number; 
  public get cacheSpoofingPort() {
    return this.getNumberAttribute('cache_spoofing_port');
  }
  public set cacheSpoofingPort(value: number) {
    this._cacheSpoofingPort = value;
  }
  public resetCacheSpoofingPort() {
    this._cacheSpoofingPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheSpoofingPortInput() {
    return this._cacheSpoofingPort;
  }

  // client - computed: false, optional: true, required: false
  private _client?: number; 
  public get client() {
    return this.getNumberAttribute('client');
  }
  public set client(value: number) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: number; 
  public get dhcp() {
    return this.getNumberAttribute('dhcp');
  }
  public set dhcp(value: number) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // generate_membership_query - computed: false, optional: true, required: false
  private _generateMembershipQuery?: number; 
  public get generateMembershipQuery() {
    return this.getNumberAttribute('generate_membership_query');
  }
  public set generateMembershipQuery(value: number) {
    this._generateMembershipQuery = value;
  }
  public resetGenerateMembershipQuery() {
    this._generateMembershipQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateMembershipQueryInput() {
    return this._generateMembershipQuery;
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

  // ifnum - computed: false, optional: false, required: true
  private _ifnum?: string; 
  public get ifnum() {
    return this.getStringAttribute('ifnum');
  }
  public set ifnum(value: string) {
    this._ifnum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ifnumInput() {
    return this._ifnum;
  }

  // inside - computed: false, optional: true, required: false
  private _inside?: number; 
  public get inside() {
    return this.getNumberAttribute('inside');
  }
  public set inside(value: number) {
    this._inside = value;
  }
  public resetInside() {
    this._inside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insideInput() {
    return this._inside;
  }

  // max_resp_time - computed: false, optional: true, required: false
  private _maxRespTime?: number; 
  public get maxRespTime() {
    return this.getNumberAttribute('max_resp_time');
  }
  public set maxRespTime(value: number) {
    this._maxRespTime = value;
  }
  public resetMaxRespTime() {
    this._maxRespTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRespTimeInput() {
    return this._maxRespTime;
  }

  // outside - computed: false, optional: true, required: false
  private _outside?: number; 
  public get outside() {
    return this.getNumberAttribute('outside');
  }
  public set outside(value: number) {
    this._outside = value;
  }
  public resetOutside() {
    this._outside = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outsideInput() {
    return this._outside;
  }

  // query_interval - computed: false, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // server - computed: false, optional: true, required: false
  private _server?: number; 
  public get server() {
    return this.getNumberAttribute('server');
  }
  public set server(value: number) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // slb_partition_redirect - computed: false, optional: true, required: false
  private _slbPartitionRedirect?: number; 
  public get slbPartitionRedirect() {
    return this.getNumberAttribute('slb_partition_redirect');
  }
  public set slbPartitionRedirect(value: number) {
    this._slbPartitionRedirect = value;
  }
  public resetSlbPartitionRedirect() {
    this._slbPartitionRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbPartitionRedirectInput() {
    return this._slbPartitionRedirect;
  }

  // syn_cookie - computed: false, optional: true, required: false
  private _synCookie?: number; 
  public get synCookie() {
    return this.getNumberAttribute('syn_cookie');
  }
  public set synCookie(value: number) {
    this._synCookie = value;
  }
  public resetSynCookie() {
    this._synCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieInput() {
    return this._synCookie;
  }

  // ttl_ignore - computed: false, optional: true, required: false
  private _ttlIgnore?: number; 
  public get ttlIgnore() {
    return this.getNumberAttribute('ttl_ignore');
  }
  public set ttlIgnore(value: number) {
    this._ttlIgnore = value;
  }
  public resetTtlIgnore() {
    this._ttlIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlIgnoreInput() {
    return this._ttlIgnore;
  }

  // unnumbered - computed: false, optional: true, required: false
  private _unnumbered?: number; 
  public get unnumbered() {
    return this.getNumberAttribute('unnumbered');
  }
  public set unnumbered(value: number) {
    this._unnumbered = value;
  }
  public resetUnnumbered() {
    this._unnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedInput() {
    return this._unnumbered;
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

  // address_list - computed: false, optional: true, required: false
  private _addressList = new InterfaceEthernetIpAddressListStructAList(this, "address_list", false);
  public get addressList() {
    return this._addressList;
  }
  public putAddressList(value: InterfaceEthernetIpAddressListStructA[] | cdktf.IResolvable) {
    this._addressList.internalValue = value;
  }
  public resetAddressList() {
    this._addressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressListInput() {
    return this._addressList.internalValue;
  }

  // helper_address_list - computed: false, optional: true, required: false
  private _helperAddressList = new InterfaceEthernetIpHelperAddressListStructAList(this, "helper_address_list", false);
  public get helperAddressList() {
    return this._helperAddressList;
  }
  public putHelperAddressList(value: InterfaceEthernetIpHelperAddressListStructA[] | cdktf.IResolvable) {
    this._helperAddressList.internalValue = value;
  }
  public resetHelperAddressList() {
    this._helperAddressList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helperAddressListInput() {
    return this._helperAddressList.internalValue;
  }

  // ospf - computed: false, optional: true, required: false
  private _ospf = new InterfaceEthernetIpOspfAOutputReference(this, "ospf");
  public get ospf() {
    return this._ospf;
  }
  public putOspf(value: InterfaceEthernetIpOspfA) {
    this._ospf.internalValue = value;
  }
  public resetOspf() {
    this._ospf.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ospfInput() {
    return this._ospf.internalValue;
  }

  // rip - computed: false, optional: true, required: false
  private _rip = new InterfaceEthernetIpRipAOutputReference(this, "rip");
  public get rip() {
    return this._rip;
  }
  public putRip(value: InterfaceEthernetIpRipA) {
    this._rip.internalValue = value;
  }
  public resetRip() {
    this._rip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ripInput() {
    return this._rip.internalValue;
  }

  // router - computed: false, optional: true, required: false
  private _router = new InterfaceEthernetIpRouterAOutputReference(this, "router");
  public get router() {
    return this._router;
  }
  public putRouter(value: InterfaceEthernetIpRouterA) {
    this._router.internalValue = value;
  }
  public resetRouter() {
    this._router.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routerInput() {
    return this._router.internalValue;
  }

  // stateful_firewall - computed: false, optional: true, required: false
  private _statefulFirewall = new InterfaceEthernetIpStatefulFirewallAOutputReference(this, "stateful_firewall");
  public get statefulFirewall() {
    return this._statefulFirewall;
  }
  public putStatefulFirewall(value: InterfaceEthernetIpStatefulFirewallA) {
    this._statefulFirewall.internalValue = value;
  }
  public resetStatefulFirewall() {
    this._statefulFirewall.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statefulFirewallInput() {
    return this._statefulFirewall.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_promiscuous_vip: cdktf.numberToTerraform(this._allowPromiscuousVip),
      cache_spoofing_port: cdktf.numberToTerraform(this._cacheSpoofingPort),
      client: cdktf.numberToTerraform(this._client),
      dhcp: cdktf.numberToTerraform(this._dhcp),
      generate_membership_query: cdktf.numberToTerraform(this._generateMembershipQuery),
      id: cdktf.stringToTerraform(this._id),
      ifnum: cdktf.stringToTerraform(this._ifnum),
      inside: cdktf.numberToTerraform(this._inside),
      max_resp_time: cdktf.numberToTerraform(this._maxRespTime),
      outside: cdktf.numberToTerraform(this._outside),
      query_interval: cdktf.numberToTerraform(this._queryInterval),
      server: cdktf.numberToTerraform(this._server),
      slb_partition_redirect: cdktf.numberToTerraform(this._slbPartitionRedirect),
      syn_cookie: cdktf.numberToTerraform(this._synCookie),
      ttl_ignore: cdktf.numberToTerraform(this._ttlIgnore),
      unnumbered: cdktf.numberToTerraform(this._unnumbered),
      uuid: cdktf.stringToTerraform(this._uuid),
      address_list: cdktf.listMapper(interfaceEthernetIpAddressListStructAToTerraform, true)(this._addressList.internalValue),
      helper_address_list: cdktf.listMapper(interfaceEthernetIpHelperAddressListStructAToTerraform, true)(this._helperAddressList.internalValue),
      ospf: interfaceEthernetIpOspfAToTerraform(this._ospf.internalValue),
      rip: interfaceEthernetIpRipAToTerraform(this._rip.internalValue),
      router: interfaceEthernetIpRouterAToTerraform(this._router.internalValue),
      stateful_firewall: interfaceEthernetIpStatefulFirewallAToTerraform(this._statefulFirewall.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_promiscuous_vip: {
        value: cdktf.numberToHclTerraform(this._allowPromiscuousVip),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cache_spoofing_port: {
        value: cdktf.numberToHclTerraform(this._cacheSpoofingPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client: {
        value: cdktf.numberToHclTerraform(this._client),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhcp: {
        value: cdktf.numberToHclTerraform(this._dhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generate_membership_query: {
        value: cdktf.numberToHclTerraform(this._generateMembershipQuery),
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
      ifnum: {
        value: cdktf.stringToHclTerraform(this._ifnum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inside: {
        value: cdktf.numberToHclTerraform(this._inside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_resp_time: {
        value: cdktf.numberToHclTerraform(this._maxRespTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      outside: {
        value: cdktf.numberToHclTerraform(this._outside),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      query_interval: {
        value: cdktf.numberToHclTerraform(this._queryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server: {
        value: cdktf.numberToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slb_partition_redirect: {
        value: cdktf.numberToHclTerraform(this._slbPartitionRedirect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syn_cookie: {
        value: cdktf.numberToHclTerraform(this._synCookie),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl_ignore: {
        value: cdktf.numberToHclTerraform(this._ttlIgnore),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unnumbered: {
        value: cdktf.numberToHclTerraform(this._unnumbered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIpAddressListStructAToHclTerraform, true)(this._addressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpAddressListStructAList",
      },
      helper_address_list: {
        value: cdktf.listMapperHcl(interfaceEthernetIpHelperAddressListStructAToHclTerraform, true)(this._helperAddressList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpHelperAddressListStructAList",
      },
      ospf: {
        value: interfaceEthernetIpOspfAToHclTerraform(this._ospf.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpOspfAList",
      },
      rip: {
        value: interfaceEthernetIpRipAToHclTerraform(this._rip.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpRipAList",
      },
      router: {
        value: interfaceEthernetIpRouterAToHclTerraform(this._router.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpRouterAList",
      },
      stateful_firewall: {
        value: interfaceEthernetIpStatefulFirewallAToHclTerraform(this._statefulFirewall.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InterfaceEthernetIpStatefulFirewallAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
